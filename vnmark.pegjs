{{
  import * as Yaml from 'yaml';
}}

Document
  = frontMatter:FrontMatter body:('\n' _ '\n' @Body)? { return {type: 'Document', location: location(), frontMatter, body}; }

FrontMatter
  = metadata:$('vnmark: ' ([^\n] / ('\n' _ [^\n\r\t ]))*) { return {type: 'FrontMatter', location: location(), metadata: Yaml.parse(metadata)}; }

Body
  = lines:Line|1.., '\n'| { return {type: 'Body', location: location(), lines}; }

Line
  = BlankLine
  / CommentLine
  / CommandLine
  / ElementLine
  / BatchedElementsLine

BlankLine
  = _ _N { return {type: 'BlankLine', location: location(), comment: null }; }

CommentLine
  = _ comment:Comment _N { return {type: 'CommentLine', location: location(), comment }; }

Comment
  = '#' value:$[^\n]* { return {type: 'Comment', location: location(), value}; }

CommandLine
  = _ ':' _ name:Name arguments_:(_ @ArgumentList)? _ comment:Comment? _N { return {type: 'CommandLine', name, arguments: arguments_, comment}; }

ArgumentList
  = Value|1.., _ ',' _|

ElementLine
  = _ name:Name _ ':' _ properties:PropertyList _ comment:Comment? _N { return {type: 'ElementLine', name, properties, comment}; }

BatchedElementsLine
  = _ batchedProperties:PropertyList|1.., _ ';' _| _ comment:Comment? _N { return {type: 'BatchedElementsLine', batchedProperties, comment}; }

PropertyList
  = head:(Property / ValueProperty) tail:(_ ',' _ @Property)* { return [head, ...tail]; }

ValueProperty
  = value:Value { return {type: 'Property', location: location(), name: null, value}; }

Property
  = name:Name _ '=' _ value:Value { return {type: 'Property', location: location(), name, value}; }

Name
  = value:$([A-Za-z_] [A-Za-z0-9_]*) { return {type: 'Name', location: location(), value}; }

Value
  = LiteralValue
  / QuotedValue
  / ScriptValue

LiteralValue
  = value:$LiteralChar|1.., _| { return {type: 'LiteralValue', location: location(), value}; }

LiteralChar
  = [^\n\r\t #;:,="`]

QuotedValue
  = '"' chars:QuotedChar* '"' { return {type: 'QuotedValue', location: location(), value: chars.join('')}; }

QuotedChar
  = '\\"' { return '"'; }
  / EscapableChar

ScriptValue
  = '`' chars:ScriptChar* '`' { return {type: 'ScriptValue', location: location(), script: chars.join('')}; }

ScriptChar
  = '\\`' { return '`'; }
  / EscapableChar

EscapableChar
  = [^\n\\"]
  / '\\t' { return '\t'; }
  / '\\r' { return '\r'; }
  / '\\n' { return '\n'; }
  / '\\\\' { return '\\'; }
  / '\\u' hexDigits:[A-Fa-f0-9]|4| { return String.fromCharCode(parseInt(hexDigits, 16)); }
  / '\\u' { error('Bad Unicode escape sequence'); }
  / '\\' { error('Bad escape sequence'); }

_
  = [\r\t ]*

_N
  = &('\n' / !.)
