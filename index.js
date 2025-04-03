// @generated by Peggy 4.2.0.
//
// https://peggyjs.org/



  import * as Yaml from 'yaml';

function peg$subclass(child, parent) {
  function C() { this.constructor = child; }
  C.prototype = parent.prototype;
  child.prototype = new C();
}

function peg$SyntaxError(message, expected, found, location) {
  var self = Error.call(this, message);
  // istanbul ignore next Check is a necessary evil to support older environments
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(self, peg$SyntaxError.prototype);
  }
  self.expected = expected;
  self.found = found;
  self.location = location;
  self.name = "SyntaxError";
  return self;
}

peg$subclass(peg$SyntaxError, Error);

function peg$padEnd(str, targetLength, padString) {
  padString = padString || " ";
  if (str.length > targetLength) { return str; }
  targetLength -= str.length;
  padString += padString.repeat(targetLength);
  return str + padString.slice(0, targetLength);
}

peg$SyntaxError.prototype.format = function(sources) {
  var str = "Error: " + this.message;
  if (this.location) {
    var src = null;
    var k;
    for (k = 0; k < sources.length; k++) {
      if (sources[k].source === this.location.source) {
        src = sources[k].text.split(/\r\n|\n|\r/g);
        break;
      }
    }
    var s = this.location.start;
    var offset_s = (this.location.source && (typeof this.location.source.offset === "function"))
      ? this.location.source.offset(s)
      : s;
    var loc = this.location.source + ":" + offset_s.line + ":" + offset_s.column;
    if (src) {
      var e = this.location.end;
      var filler = peg$padEnd("", offset_s.line.toString().length, ' ');
      var line = src[s.line - 1];
      var last = s.line === e.line ? e.column : line.length + 1;
      var hatLen = (last - s.column) || 1;
      str += "\n --> " + loc + "\n"
          + filler + " |\n"
          + offset_s.line + " | " + line + "\n"
          + filler + " | " + peg$padEnd("", s.column - 1, ' ')
          + peg$padEnd("", hatLen, "^");
    } else {
      str += "\n at " + loc;
    }
  }
  return str;
};

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function(expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },

    class: function(expectation) {
      var escapedParts = expectation.parts.map(function(part) {
        return Array.isArray(part)
          ? classEscape(part[0]) + "-" + classEscape(part[1])
          : classEscape(part);
      });

      return "[" + (expectation.inverted ? "^" : "") + escapedParts.join("") + "]";
    },

    any: function() {
      return "any character";
    },

    end: function() {
      return "end of input";
    },

    other: function(expectation) {
      return expectation.description;
    }
  };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/"/g,  "\\\"")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/\]/g, "\\]")
      .replace(/\^/g, "\\^")
      .replace(/-/g,  "\\-")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = expected.map(describeExpectation);
    var i, j;

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== undefined ? options : {};

  var peg$FAILED = {};
  var peg$source = options.grammarSource;

  var peg$startRuleFunctions = { Document: peg$parseDocument, Line: peg$parseLine };
  var peg$startRuleFunction = peg$parseDocument;

  var peg$c0 = "\n";
  var peg$c1 = "vnmark: ";
  var peg$c2 = "#";
  var peg$c3 = ":";
  var peg$c4 = ",";
  var peg$c5 = "=";
  var peg$c6 = ";";
  var peg$c7 = "\"";
  var peg$c8 = "\\\"";
  var peg$c9 = "`";
  var peg$c10 = "\\`";
  var peg$c11 = "\\t";
  var peg$c12 = "\\r";
  var peg$c13 = "\\n";
  var peg$c14 = "\\\\";
  var peg$c15 = "\\u";
  var peg$c16 = "\\";

  var peg$r0 = /^[^\n]/;
  var peg$r1 = /^[^\n\r\t ]/;
  var peg$r2 = /^[:,=]/;
  var peg$r3 = /^[^\n\r\t #;:,="`]/;
  var peg$r4 = /^[^\n\\"]/;
  var peg$r5 = /^[A-Fa-f0-9]/;
  var peg$r6 = /^[\r\t ]/;

  var peg$e0 = peg$literalExpectation("\n", false);
  var peg$e1 = peg$literalExpectation("vnmark: ", false);
  var peg$e2 = peg$classExpectation(["\n"], true, false);
  var peg$e3 = peg$classExpectation(["\n", "\r", "\t", " "], true, false);
  var peg$e4 = peg$literalExpectation("#", false);
  var peg$e5 = peg$literalExpectation(":", false);
  var peg$e6 = peg$literalExpectation(",", false);
  var peg$e7 = peg$literalExpectation("=", false);
  var peg$e8 = peg$literalExpectation(";", false);
  var peg$e9 = peg$classExpectation([":", ",", "="], false, false);
  var peg$e10 = peg$classExpectation(["\n", "\r", "\t", " ", "#", ";", ":", ",", "=", "\"", "`"], true, false);
  var peg$e11 = peg$literalExpectation("\"", false);
  var peg$e12 = peg$literalExpectation("\\\"", false);
  var peg$e13 = peg$literalExpectation("`", false);
  var peg$e14 = peg$literalExpectation("\\`", false);
  var peg$e15 = peg$classExpectation(["\n", "\\", "\""], true, false);
  var peg$e16 = peg$literalExpectation("\\t", false);
  var peg$e17 = peg$literalExpectation("\\r", false);
  var peg$e18 = peg$literalExpectation("\\n", false);
  var peg$e19 = peg$literalExpectation("\\\\", false);
  var peg$e20 = peg$literalExpectation("\\u", false);
  var peg$e21 = peg$classExpectation([["A", "F"], ["a", "f"], ["0", "9"]], false, false);
  var peg$e22 = peg$literalExpectation("\\", false);
  var peg$e23 = peg$classExpectation(["\r", "\t", " "], false, false);
  var peg$e24 = peg$anyExpectation();

  var peg$f0 = function(frontMatter, body) { return {type: 'Document', location: location(), frontMatter, body}; };
  var peg$f1 = function(metadata) { return {type: 'FrontMatter', location: location(), metadata: Yaml.parse(metadata)}; };
  var peg$f2 = function(lines) { return {type: 'Body', location: location(), lines}; };
  var peg$f3 = function() { return {type: 'BlankLine', location: location(), comment: null }; };
  var peg$f4 = function(comment) { return {type: 'CommentLine', location: location(), comment }; };
  var peg$f5 = function(value) { return {type: 'Comment', location: location(), value}; };
  var peg$f6 = function(name, arguments_, comment) { return {type: 'CommandLine', location: location(), name, arguments: arguments_ || [], comment}; };
  var peg$f7 = function(name, properties, comment) { return {type: 'ElementLine', location: location(), name, properties, comment}; };
  var peg$f8 = function(head, tail) { return [head, ...tail]; };
  var peg$f9 = function(value) { return {type: 'Property', location: location(), name: null, value}; };
  var peg$f10 = function(name, value) { return {type: 'Property', location: location(), name, value}; };
  var peg$f11 = function(arguments_, comment) { return {type: 'MacroLine', location: location(), arguments: arguments_, comment}; };
  var peg$f12 = function(value) { return {type: 'LiteralValue', location: location(), value}; };
  var peg$f13 = function(chars) { return {type: 'QuotedValue', location: location(), value: chars.join('')}; };
  var peg$f14 = function() { return '"'; };
  var peg$f15 = function(chars) { return {type: 'ScriptValue', location: location(), script: chars.join('')}; };
  var peg$f16 = function() { return '`'; };
  var peg$f17 = function() { return '\t'; };
  var peg$f18 = function() { return '\r'; };
  var peg$f19 = function() { return '\n'; };
  var peg$f20 = function() { return '\\'; };
  var peg$f21 = function(hexDigits) { return String.fromCharCode(parseInt(hexDigits, 16)); };
  var peg$f22 = function() { error('Bad Unicode escape sequence'); };
  var peg$f23 = function() { error('Bad escape sequence'); };
  var peg$currPos = options.peg$currPos | 0;
  var peg$savedPos = peg$currPos;
  var peg$posDetailsCache = [{ line: 1, column: 1 }];
  var peg$maxFailPos = peg$currPos;
  var peg$maxFailExpected = options.peg$maxFailExpected || [];
  var peg$silentFails = options.peg$silentFails | 0;

  var peg$result;

  if (options.startRule) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function offset() {
    return peg$savedPos;
  }

  function range() {
    return {
      source: peg$source,
      start: peg$savedPos,
      end: peg$currPos
    };
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos];
    var p;

    if (details) {
      return details;
    } else {
      if (pos >= peg$posDetailsCache.length) {
        p = peg$posDetailsCache.length - 1;
      } else {
        p = pos;
        while (!peg$posDetailsCache[--p]) {}
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;

      return details;
    }
  }

  function peg$computeLocation(startPos, endPos, offset) {
    var startPosDetails = peg$computePosDetails(startPos);
    var endPosDetails = peg$computePosDetails(endPos);

    var res = {
      source: peg$source,
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
    if (offset && peg$source && (typeof peg$source.offset === "function")) {
      res.start = peg$source.offset(res.start);
      res.end = peg$source.offset(res.end);
    }
    return res;
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parseDocument() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = peg$parseFrontMatter();
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 10) {
        s3 = peg$c0;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e0); }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parse_();
        if (input.charCodeAt(peg$currPos) === 10) {
          s5 = peg$c0;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e0); }
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$parseBody();
          if (s6 !== peg$FAILED) {
            s2 = s6;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      peg$savedPos = s0;
      s0 = peg$f0(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseFrontMatter() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$currPos;
    if (input.substr(peg$currPos, 8) === peg$c1) {
      s3 = peg$c1;
      peg$currPos += 8;
    } else {
      s3 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e1); }
    }
    if (s3 !== peg$FAILED) {
      s4 = [];
      s5 = input.charAt(peg$currPos);
      if (peg$r0.test(s5)) {
        peg$currPos++;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e2); }
      }
      if (s5 === peg$FAILED) {
        s5 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 10) {
          s6 = peg$c0;
          peg$currPos++;
        } else {
          s6 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e0); }
        }
        if (s6 !== peg$FAILED) {
          s7 = peg$parse_();
          s8 = input.charAt(peg$currPos);
          if (peg$r1.test(s8)) {
            peg$currPos++;
          } else {
            s8 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e3); }
          }
          if (s8 !== peg$FAILED) {
            s6 = [s6, s7, s8];
            s5 = s6;
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
      }
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = input.charAt(peg$currPos);
        if (peg$r0.test(s5)) {
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e2); }
        }
        if (s5 === peg$FAILED) {
          s5 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 10) {
            s6 = peg$c0;
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e0); }
          }
          if (s6 !== peg$FAILED) {
            s7 = peg$parse_();
            s8 = input.charAt(peg$currPos);
            if (peg$r1.test(s8)) {
              peg$currPos++;
            } else {
              s8 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$e3); }
            }
            if (s8 !== peg$FAILED) {
              s6 = [s6, s7, s8];
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
        }
      }
      s3 = [s3, s4];
      s2 = s3;
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f1(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseBody() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = [];
    s3 = peg$parseLine();
    while (s3 !== peg$FAILED) {
      s2.push(s3);
      s3 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 10) {
        s4 = peg$c0;
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e0); }
      }
      if (s4 !== peg$FAILED) {
        s4 = peg$parseLine();
        if (s4 === peg$FAILED) {
          peg$currPos = s3;
          s3 = peg$FAILED;
        } else {
          s3 = s4;
        }
      } else {
        s3 = s4;
      }
    }
    if (s2.length < 1) {
      peg$currPos = s1;
      s1 = peg$FAILED;
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f2(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseLine() {
    var s0;

    s0 = peg$parseBlankLine();
    if (s0 === peg$FAILED) {
      s0 = peg$parseCommentLine();
      if (s0 === peg$FAILED) {
        s0 = peg$parseCommandLine();
        if (s0 === peg$FAILED) {
          s0 = peg$parseElementLine();
          if (s0 === peg$FAILED) {
            s0 = peg$parseMacroLine();
          }
        }
      }
    }

    return s0;
  }

  function peg$parseBlankLine() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$parse_();
    s2 = peg$parse_N();
    if (s2 !== peg$FAILED) {
      peg$savedPos = s0;
      s0 = peg$f3();
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseCommentLine() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parse_();
    s2 = peg$parseComment();
    if (s2 !== peg$FAILED) {
      s3 = peg$parse_N();
      if (s3 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f4(s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseComment() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 35) {
      s1 = peg$c2;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e4); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      s4 = input.charAt(peg$currPos);
      if (peg$r0.test(s4)) {
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e2); }
      }
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = input.charAt(peg$currPos);
        if (peg$r0.test(s4)) {
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e2); }
        }
      }
      s2 = input.substring(s2, peg$currPos);
      peg$savedPos = s0;
      s0 = peg$f5(s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseCommandLine() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;

    s0 = peg$currPos;
    s1 = peg$parse_();
    if (input.charCodeAt(peg$currPos) === 58) {
      s2 = peg$c3;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e5); }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parse_();
      s4 = peg$parseValue();
      if (s4 !== peg$FAILED) {
        s5 = peg$currPos;
        s6 = peg$parse_();
        s7 = peg$currPos;
        s8 = [];
        s9 = peg$parseValue();
        while (s9 !== peg$FAILED) {
          s8.push(s9);
          s9 = peg$currPos;
          s10 = peg$currPos;
          s11 = peg$parse_();
          if (input.charCodeAt(peg$currPos) === 44) {
            s12 = peg$c4;
            peg$currPos++;
          } else {
            s12 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e6); }
          }
          if (s12 !== peg$FAILED) {
            s13 = peg$parse_();
            s11 = [s11, s12, s13];
            s10 = s11;
          } else {
            peg$currPos = s10;
            s10 = peg$FAILED;
          }
          if (s10 !== peg$FAILED) {
            s10 = peg$parseValue();
            if (s10 === peg$FAILED) {
              peg$currPos = s9;
              s9 = peg$FAILED;
            } else {
              s9 = s10;
            }
          } else {
            s9 = s10;
          }
        }
        if (s8.length < 1) {
          peg$currPos = s7;
          s7 = peg$FAILED;
        } else {
          s7 = s8;
        }
        if (s7 !== peg$FAILED) {
          s5 = s7;
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
        if (s5 === peg$FAILED) {
          s5 = null;
        }
        s6 = peg$parse_();
        s7 = peg$parseComment();
        if (s7 === peg$FAILED) {
          s7 = null;
        }
        s8 = peg$parse_N();
        if (s8 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f6(s4, s5, s7);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseElementLine() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

    s0 = peg$currPos;
    s1 = peg$parse_();
    s2 = peg$parseValue();
    if (s2 !== peg$FAILED) {
      s3 = peg$parse_();
      if (input.charCodeAt(peg$currPos) === 58) {
        s4 = peg$c3;
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e5); }
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parse_();
        s6 = peg$parsePropertyList();
        if (s6 !== peg$FAILED) {
          s7 = peg$parse_();
          s8 = peg$parseComment();
          if (s8 === peg$FAILED) {
            s8 = null;
          }
          s9 = peg$parse_N();
          if (s9 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f7(s2, s6, s8);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsePropertyList() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    s1 = peg$parseProperty();
    if (s1 === peg$FAILED) {
      s1 = peg$parseValueProperty();
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parse_();
      if (input.charCodeAt(peg$currPos) === 44) {
        s5 = peg$c4;
        peg$currPos++;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e6); }
      }
      if (s5 !== peg$FAILED) {
        s6 = peg$parse_();
        s7 = peg$parseProperty();
        if (s7 !== peg$FAILED) {
          s3 = s7;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (input.charCodeAt(peg$currPos) === 44) {
          s5 = peg$c4;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e6); }
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$parse_();
          s7 = peg$parseProperty();
          if (s7 !== peg$FAILED) {
            s3 = s7;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      peg$savedPos = s0;
      s0 = peg$f8(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseValueProperty() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parseValue();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f9(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseProperty() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parseValue();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      if (input.charCodeAt(peg$currPos) === 61) {
        s3 = peg$c5;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e7); }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parse_();
        s5 = peg$parseValue();
        if (s5 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f10(s1, s5);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseMacroLine() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    s0 = peg$currPos;
    s1 = peg$parse_();
    s2 = peg$currPos;
    s3 = [];
    s4 = peg$parseMacroArgument();
    while (s4 !== peg$FAILED) {
      s3.push(s4);
      s4 = peg$currPos;
      s5 = peg$currPos;
      s6 = peg$parse_();
      if (input.charCodeAt(peg$currPos) === 59) {
        s7 = peg$c6;
        peg$currPos++;
      } else {
        s7 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e8); }
      }
      if (s7 !== peg$FAILED) {
        s8 = peg$parse_();
        s6 = [s6, s7, s8];
        s5 = s6;
      } else {
        peg$currPos = s5;
        s5 = peg$FAILED;
      }
      if (s5 !== peg$FAILED) {
        s5 = peg$parseMacroArgument();
        s4 = s5;
      } else {
        s4 = s5;
      }
    }
    if (s3.length < 2) {
      peg$currPos = s2;
      s2 = peg$FAILED;
    } else {
      s2 = s3;
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parse_();
      s4 = peg$parseComment();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      s5 = peg$parse_N();
      if (s5 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f11(s2, s4);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseMacroArgument() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseValue();
    if (s2 === peg$FAILED) {
      s2 = input.charAt(peg$currPos);
      if (peg$r2.test(s2)) {
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e9); }
      }
    }
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$currPos;
      s3 = peg$parse_();
      s3 = peg$parseValue();
      if (s3 === peg$FAILED) {
        s3 = input.charAt(peg$currPos);
        if (peg$r2.test(s3)) {
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e9); }
        }
      }
      if (s3 === peg$FAILED) {
        peg$currPos = s2;
        s2 = peg$FAILED;
      } else {
        s2 = s3;
      }
    }
    s0 = input.substring(s0, peg$currPos);

    return s0;
  }

  function peg$parseValue() {
    var s0;

    s0 = peg$parseLiteralValue();
    if (s0 === peg$FAILED) {
      s0 = peg$parseQuotedValue();
      if (s0 === peg$FAILED) {
        s0 = peg$parseScriptValue();
      }
    }

    return s0;
  }

  function peg$parseLiteralValue() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$currPos;
    s3 = [];
    s4 = peg$parseLiteralChar();
    while (s4 !== peg$FAILED) {
      s3.push(s4);
      s4 = peg$currPos;
      s5 = peg$parse_();
      s5 = peg$parseLiteralChar();
      if (s5 === peg$FAILED) {
        peg$currPos = s4;
        s4 = peg$FAILED;
      } else {
        s4 = s5;
      }
    }
    if (s3.length < 1) {
      peg$currPos = s2;
      s2 = peg$FAILED;
    } else {
      s2 = s3;
    }
    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f12(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseLiteralChar() {
    var s0;

    s0 = input.charAt(peg$currPos);
    if (peg$r3.test(s0)) {
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e10); }
    }

    return s0;
  }

  function peg$parseQuotedValue() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 34) {
      s1 = peg$c7;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e11); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseQuotedChar();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseQuotedChar();
      }
      if (input.charCodeAt(peg$currPos) === 34) {
        s3 = peg$c7;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e11); }
      }
      if (s3 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f13(s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseQuotedChar() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c8) {
      s1 = peg$c8;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e12); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f14();
    }
    s0 = s1;
    if (s0 === peg$FAILED) {
      s0 = peg$parseEscapableChar();
    }

    return s0;
  }

  function peg$parseScriptValue() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 96) {
      s1 = peg$c9;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e13); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseScriptChar();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseScriptChar();
      }
      if (input.charCodeAt(peg$currPos) === 96) {
        s3 = peg$c9;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e13); }
      }
      if (s3 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f15(s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseScriptChar() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c10) {
      s1 = peg$c10;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e14); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f16();
    }
    s0 = s1;
    if (s0 === peg$FAILED) {
      s0 = peg$parseEscapableChar();
    }

    return s0;
  }

  function peg$parseEscapableChar() {
    var s0, s1, s2, s3, s4;

    s0 = input.charAt(peg$currPos);
    if (peg$r4.test(s0)) {
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e15); }
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c11) {
        s1 = peg$c11;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e16); }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f17();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c12) {
          s1 = peg$c12;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e17); }
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$f18();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c13) {
            s1 = peg$c13;
            peg$currPos += 2;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e18); }
          }
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$f19();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 2) === peg$c14) {
              s1 = peg$c14;
              peg$currPos += 2;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$e19); }
            }
            if (s1 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$f20();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 2) === peg$c15) {
                s1 = peg$c15;
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$e20); }
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$currPos;
                s3 = [];
                s4 = input.charAt(peg$currPos);
                if (peg$r5.test(s4)) {
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$e21); }
                }
                while (s4 !== peg$FAILED) {
                  s3.push(s4);
                  if (s3.length >= 4) {
                    s4 = peg$FAILED;
                  } else {
                    s4 = input.charAt(peg$currPos);
                    if (peg$r5.test(s4)) {
                      peg$currPos++;
                    } else {
                      s4 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$e21); }
                    }
                  }
                }
                if (s3.length < 4) {
                  peg$currPos = s2;
                  s2 = peg$FAILED;
                } else {
                  s2 = s3;
                }
                if (s2 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f21(s2);
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.substr(peg$currPos, 2) === peg$c15) {
                  s1 = peg$c15;
                  peg$currPos += 2;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$e20); }
                }
                if (s1 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$f22();
                }
                s0 = s1;
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  if (input.charCodeAt(peg$currPos) === 92) {
                    s1 = peg$c16;
                    peg$currPos++;
                  } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$e22); }
                  }
                  if (s1 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$f23();
                  }
                  s0 = s1;
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parse_() {
    var s0, s1;

    s0 = [];
    s1 = input.charAt(peg$currPos);
    if (peg$r6.test(s1)) {
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e23); }
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = input.charAt(peg$currPos);
      if (peg$r6.test(s1)) {
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e23); }
      }
    }

    return s0;
  }

  function peg$parse_N() {
    var s0, s1, s2;

    s0 = peg$currPos;
    peg$silentFails++;
    if (input.charCodeAt(peg$currPos) === 10) {
      s1 = peg$c0;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e0); }
    }
    if (s1 === peg$FAILED) {
      s1 = peg$currPos;
      peg$silentFails++;
      if (input.length > peg$currPos) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e24); }
      }
      peg$silentFails--;
      if (s2 === peg$FAILED) {
        s1 = undefined;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    }
    peg$silentFails--;
    if (s1 !== peg$FAILED) {
      peg$currPos = s0;
      s0 = undefined;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  peg$result = peg$startRuleFunction();

  if (options.peg$library) {
    return /** @type {any} */ ({
      peg$result,
      peg$currPos,
      peg$FAILED,
      peg$maxFailExpected,
      peg$maxFailPos
    });
  }
  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

const peg$allowedStartRules = [
  "Document",
  "Line"
];

export {
  peg$allowedStartRules as StartRules,
  peg$SyntaxError as SyntaxError,
  peg$parse as parse
};
