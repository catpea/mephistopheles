(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/calculate-percent/index.js
  var require_calculate_percent = __commonJS({
    "node_modules/calculate-percent/index.js"(exports, module) {
      module.exports = function(val, max, min = 0) {
        const range = Math.abs(max - min);
        const value = val - min;
        let percent = 100 * parseFloat(value) / parseFloat(range) / 100;
        return parseInt(percent * 100);
      };
    }
  });

  // node_modules/esprima/dist/esprima.js
  var require_esprima = __commonJS({
    "node_modules/esprima/dist/esprima.js"(exports, module) {
      (/* @__PURE__ */ __name(function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define([], factory);
        else if (typeof exports === "object")
          exports["esprima"] = factory();
        else
          root["esprima"] = factory();
      }, "webpackUniversalModuleDefinition"))(exports, function() {
        return (
          /******/
          function(modules) {
            var installedModules = {};
            function __webpack_require__(moduleId) {
              if (installedModules[moduleId])
                return installedModules[moduleId].exports;
              var module2 = installedModules[moduleId] = {
                /******/
                exports: {},
                /******/
                id: moduleId,
                /******/
                loaded: false
                /******/
              };
              modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
              module2.loaded = true;
              return module2.exports;
            }
            __name(__webpack_require__, "__webpack_require__");
            __webpack_require__.m = modules;
            __webpack_require__.c = installedModules;
            __webpack_require__.p = "";
            return __webpack_require__(0);
          }([
            /* 0 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", { value: true });
              var comment_handler_1 = __webpack_require__(1);
              var jsx_parser_1 = __webpack_require__(3);
              var parser_1 = __webpack_require__(8);
              var tokenizer_1 = __webpack_require__(15);
              function parse(code, options, delegate) {
                var commentHandler = null;
                var proxyDelegate = /* @__PURE__ */ __name(function(node, metadata) {
                  if (delegate) {
                    delegate(node, metadata);
                  }
                  if (commentHandler) {
                    commentHandler.visit(node, metadata);
                  }
                }, "proxyDelegate");
                var parserDelegate = typeof delegate === "function" ? proxyDelegate : null;
                var collectComment = false;
                if (options) {
                  collectComment = typeof options.comment === "boolean" && options.comment;
                  var attachComment = typeof options.attachComment === "boolean" && options.attachComment;
                  if (collectComment || attachComment) {
                    commentHandler = new comment_handler_1.CommentHandler();
                    commentHandler.attach = attachComment;
                    options.comment = true;
                    parserDelegate = proxyDelegate;
                  }
                }
                var isModule = false;
                if (options && typeof options.sourceType === "string") {
                  isModule = options.sourceType === "module";
                }
                var parser;
                if (options && typeof options.jsx === "boolean" && options.jsx) {
                  parser = new jsx_parser_1.JSXParser(code, options, parserDelegate);
                } else {
                  parser = new parser_1.Parser(code, options, parserDelegate);
                }
                var program = isModule ? parser.parseModule() : parser.parseScript();
                var ast = program;
                if (collectComment && commentHandler) {
                  ast.comments = commentHandler.comments;
                }
                if (parser.config.tokens) {
                  ast.tokens = parser.tokens;
                }
                if (parser.config.tolerant) {
                  ast.errors = parser.errorHandler.errors;
                }
                return ast;
              }
              __name(parse, "parse");
              exports2.parse = parse;
              function parseModule(code, options, delegate) {
                var parsingOptions = options || {};
                parsingOptions.sourceType = "module";
                return parse(code, parsingOptions, delegate);
              }
              __name(parseModule, "parseModule");
              exports2.parseModule = parseModule;
              function parseScript2(code, options, delegate) {
                var parsingOptions = options || {};
                parsingOptions.sourceType = "script";
                return parse(code, parsingOptions, delegate);
              }
              __name(parseScript2, "parseScript");
              exports2.parseScript = parseScript2;
              function tokenize(code, options, delegate) {
                var tokenizer = new tokenizer_1.Tokenizer(code, options);
                var tokens;
                tokens = [];
                try {
                  while (true) {
                    var token = tokenizer.getNextToken();
                    if (!token) {
                      break;
                    }
                    if (delegate) {
                      token = delegate(token);
                    }
                    tokens.push(token);
                  }
                } catch (e) {
                  tokenizer.errorHandler.tolerate(e);
                }
                if (tokenizer.errorHandler.tolerant) {
                  tokens.errors = tokenizer.errors();
                }
                return tokens;
              }
              __name(tokenize, "tokenize");
              exports2.tokenize = tokenize;
              var syntax_1 = __webpack_require__(2);
              exports2.Syntax = syntax_1.Syntax;
              exports2.version = "4.0.1";
            },
            /* 1 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", { value: true });
              var syntax_1 = __webpack_require__(2);
              var CommentHandler = function() {
                function CommentHandler2() {
                  this.attach = false;
                  this.comments = [];
                  this.stack = [];
                  this.leading = [];
                  this.trailing = [];
                }
                __name(CommentHandler2, "CommentHandler");
                CommentHandler2.prototype.insertInnerComments = function(node, metadata) {
                  if (node.type === syntax_1.Syntax.BlockStatement && node.body.length === 0) {
                    var innerComments = [];
                    for (var i = this.leading.length - 1; i >= 0; --i) {
                      var entry = this.leading[i];
                      if (metadata.end.offset >= entry.start) {
                        innerComments.unshift(entry.comment);
                        this.leading.splice(i, 1);
                        this.trailing.splice(i, 1);
                      }
                    }
                    if (innerComments.length) {
                      node.innerComments = innerComments;
                    }
                  }
                };
                CommentHandler2.prototype.findTrailingComments = function(metadata) {
                  var trailingComments = [];
                  if (this.trailing.length > 0) {
                    for (var i = this.trailing.length - 1; i >= 0; --i) {
                      var entry_1 = this.trailing[i];
                      if (entry_1.start >= metadata.end.offset) {
                        trailingComments.unshift(entry_1.comment);
                      }
                    }
                    this.trailing.length = 0;
                    return trailingComments;
                  }
                  var entry = this.stack[this.stack.length - 1];
                  if (entry && entry.node.trailingComments) {
                    var firstComment = entry.node.trailingComments[0];
                    if (firstComment && firstComment.range[0] >= metadata.end.offset) {
                      trailingComments = entry.node.trailingComments;
                      delete entry.node.trailingComments;
                    }
                  }
                  return trailingComments;
                };
                CommentHandler2.prototype.findLeadingComments = function(metadata) {
                  var leadingComments = [];
                  var target;
                  while (this.stack.length > 0) {
                    var entry = this.stack[this.stack.length - 1];
                    if (entry && entry.start >= metadata.start.offset) {
                      target = entry.node;
                      this.stack.pop();
                    } else {
                      break;
                    }
                  }
                  if (target) {
                    var count = target.leadingComments ? target.leadingComments.length : 0;
                    for (var i = count - 1; i >= 0; --i) {
                      var comment = target.leadingComments[i];
                      if (comment.range[1] <= metadata.start.offset) {
                        leadingComments.unshift(comment);
                        target.leadingComments.splice(i, 1);
                      }
                    }
                    if (target.leadingComments && target.leadingComments.length === 0) {
                      delete target.leadingComments;
                    }
                    return leadingComments;
                  }
                  for (var i = this.leading.length - 1; i >= 0; --i) {
                    var entry = this.leading[i];
                    if (entry.start <= metadata.start.offset) {
                      leadingComments.unshift(entry.comment);
                      this.leading.splice(i, 1);
                    }
                  }
                  return leadingComments;
                };
                CommentHandler2.prototype.visitNode = function(node, metadata) {
                  if (node.type === syntax_1.Syntax.Program && node.body.length > 0) {
                    return;
                  }
                  this.insertInnerComments(node, metadata);
                  var trailingComments = this.findTrailingComments(metadata);
                  var leadingComments = this.findLeadingComments(metadata);
                  if (leadingComments.length > 0) {
                    node.leadingComments = leadingComments;
                  }
                  if (trailingComments.length > 0) {
                    node.trailingComments = trailingComments;
                  }
                  this.stack.push({
                    node,
                    start: metadata.start.offset
                  });
                };
                CommentHandler2.prototype.visitComment = function(node, metadata) {
                  var type = node.type[0] === "L" ? "Line" : "Block";
                  var comment = {
                    type,
                    value: node.value
                  };
                  if (node.range) {
                    comment.range = node.range;
                  }
                  if (node.loc) {
                    comment.loc = node.loc;
                  }
                  this.comments.push(comment);
                  if (this.attach) {
                    var entry = {
                      comment: {
                        type,
                        value: node.value,
                        range: [metadata.start.offset, metadata.end.offset]
                      },
                      start: metadata.start.offset
                    };
                    if (node.loc) {
                      entry.comment.loc = node.loc;
                    }
                    node.type = type;
                    this.leading.push(entry);
                    this.trailing.push(entry);
                  }
                };
                CommentHandler2.prototype.visit = function(node, metadata) {
                  if (node.type === "LineComment") {
                    this.visitComment(node, metadata);
                  } else if (node.type === "BlockComment") {
                    this.visitComment(node, metadata);
                  } else if (this.attach) {
                    this.visitNode(node, metadata);
                  }
                };
                return CommentHandler2;
              }();
              exports2.CommentHandler = CommentHandler;
            },
            /* 2 */
            /***/
            function(module2, exports2) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", { value: true });
              exports2.Syntax = {
                AssignmentExpression: "AssignmentExpression",
                AssignmentPattern: "AssignmentPattern",
                ArrayExpression: "ArrayExpression",
                ArrayPattern: "ArrayPattern",
                ArrowFunctionExpression: "ArrowFunctionExpression",
                AwaitExpression: "AwaitExpression",
                BlockStatement: "BlockStatement",
                BinaryExpression: "BinaryExpression",
                BreakStatement: "BreakStatement",
                CallExpression: "CallExpression",
                CatchClause: "CatchClause",
                ClassBody: "ClassBody",
                ClassDeclaration: "ClassDeclaration",
                ClassExpression: "ClassExpression",
                ConditionalExpression: "ConditionalExpression",
                ContinueStatement: "ContinueStatement",
                DoWhileStatement: "DoWhileStatement",
                DebuggerStatement: "DebuggerStatement",
                EmptyStatement: "EmptyStatement",
                ExportAllDeclaration: "ExportAllDeclaration",
                ExportDefaultDeclaration: "ExportDefaultDeclaration",
                ExportNamedDeclaration: "ExportNamedDeclaration",
                ExportSpecifier: "ExportSpecifier",
                ExpressionStatement: "ExpressionStatement",
                ForStatement: "ForStatement",
                ForOfStatement: "ForOfStatement",
                ForInStatement: "ForInStatement",
                FunctionDeclaration: "FunctionDeclaration",
                FunctionExpression: "FunctionExpression",
                Identifier: "Identifier",
                IfStatement: "IfStatement",
                ImportDeclaration: "ImportDeclaration",
                ImportDefaultSpecifier: "ImportDefaultSpecifier",
                ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
                ImportSpecifier: "ImportSpecifier",
                Literal: "Literal",
                LabeledStatement: "LabeledStatement",
                LogicalExpression: "LogicalExpression",
                MemberExpression: "MemberExpression",
                MetaProperty: "MetaProperty",
                MethodDefinition: "MethodDefinition",
                NewExpression: "NewExpression",
                ObjectExpression: "ObjectExpression",
                ObjectPattern: "ObjectPattern",
                Program: "Program",
                Property: "Property",
                RestElement: "RestElement",
                ReturnStatement: "ReturnStatement",
                SequenceExpression: "SequenceExpression",
                SpreadElement: "SpreadElement",
                Super: "Super",
                SwitchCase: "SwitchCase",
                SwitchStatement: "SwitchStatement",
                TaggedTemplateExpression: "TaggedTemplateExpression",
                TemplateElement: "TemplateElement",
                TemplateLiteral: "TemplateLiteral",
                ThisExpression: "ThisExpression",
                ThrowStatement: "ThrowStatement",
                TryStatement: "TryStatement",
                UnaryExpression: "UnaryExpression",
                UpdateExpression: "UpdateExpression",
                VariableDeclaration: "VariableDeclaration",
                VariableDeclarator: "VariableDeclarator",
                WhileStatement: "WhileStatement",
                WithStatement: "WithStatement",
                YieldExpression: "YieldExpression"
              };
            },
            /* 3 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var __extends = this && this.__extends || function() {
                var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b3) {
                  d.__proto__ = b3;
                } || function(d, b3) {
                  for (var p in b3)
                    if (b3.hasOwnProperty(p))
                      d[p] = b3[p];
                };
                return function(d, b3) {
                  extendStatics(d, b3);
                  function __() {
                    this.constructor = d;
                  }
                  __name(__, "__");
                  d.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
                };
              }();
              Object.defineProperty(exports2, "__esModule", { value: true });
              var character_1 = __webpack_require__(4);
              var JSXNode = __webpack_require__(5);
              var jsx_syntax_1 = __webpack_require__(6);
              var Node2 = __webpack_require__(7);
              var parser_1 = __webpack_require__(8);
              var token_1 = __webpack_require__(13);
              var xhtml_entities_1 = __webpack_require__(14);
              token_1.TokenName[
                100
                /* Identifier */
              ] = "JSXIdentifier";
              token_1.TokenName[
                101
                /* Text */
              ] = "JSXText";
              function getQualifiedElementName(elementName) {
                var qualifiedName;
                switch (elementName.type) {
                  case jsx_syntax_1.JSXSyntax.JSXIdentifier:
                    var id = elementName;
                    qualifiedName = id.name;
                    break;
                  case jsx_syntax_1.JSXSyntax.JSXNamespacedName:
                    var ns = elementName;
                    qualifiedName = getQualifiedElementName(ns.namespace) + ":" + getQualifiedElementName(ns.name);
                    break;
                  case jsx_syntax_1.JSXSyntax.JSXMemberExpression:
                    var expr = elementName;
                    qualifiedName = getQualifiedElementName(expr.object) + "." + getQualifiedElementName(expr.property);
                    break;
                  default:
                    break;
                }
                return qualifiedName;
              }
              __name(getQualifiedElementName, "getQualifiedElementName");
              var JSXParser = function(_super) {
                __extends(JSXParser2, _super);
                function JSXParser2(code, options, delegate) {
                  return _super.call(this, code, options, delegate) || this;
                }
                __name(JSXParser2, "JSXParser");
                JSXParser2.prototype.parsePrimaryExpression = function() {
                  return this.match("<") ? this.parseJSXRoot() : _super.prototype.parsePrimaryExpression.call(this);
                };
                JSXParser2.prototype.startJSX = function() {
                  this.scanner.index = this.startMarker.index;
                  this.scanner.lineNumber = this.startMarker.line;
                  this.scanner.lineStart = this.startMarker.index - this.startMarker.column;
                };
                JSXParser2.prototype.finishJSX = function() {
                  this.nextToken();
                };
                JSXParser2.prototype.reenterJSX = function() {
                  this.startJSX();
                  this.expectJSX("}");
                  if (this.config.tokens) {
                    this.tokens.pop();
                  }
                };
                JSXParser2.prototype.createJSXNode = function() {
                  this.collectComments();
                  return {
                    index: this.scanner.index,
                    line: this.scanner.lineNumber,
                    column: this.scanner.index - this.scanner.lineStart
                  };
                };
                JSXParser2.prototype.createJSXChildNode = function() {
                  return {
                    index: this.scanner.index,
                    line: this.scanner.lineNumber,
                    column: this.scanner.index - this.scanner.lineStart
                  };
                };
                JSXParser2.prototype.scanXHTMLEntity = function(quote) {
                  var result = "&";
                  var valid = true;
                  var terminated = false;
                  var numeric = false;
                  var hex = false;
                  while (!this.scanner.eof() && valid && !terminated) {
                    var ch = this.scanner.source[this.scanner.index];
                    if (ch === quote) {
                      break;
                    }
                    terminated = ch === ";";
                    result += ch;
                    ++this.scanner.index;
                    if (!terminated) {
                      switch (result.length) {
                        case 2:
                          numeric = ch === "#";
                          break;
                        case 3:
                          if (numeric) {
                            hex = ch === "x";
                            valid = hex || character_1.Character.isDecimalDigit(ch.charCodeAt(0));
                            numeric = numeric && !hex;
                          }
                          break;
                        default:
                          valid = valid && !(numeric && !character_1.Character.isDecimalDigit(ch.charCodeAt(0)));
                          valid = valid && !(hex && !character_1.Character.isHexDigit(ch.charCodeAt(0)));
                          break;
                      }
                    }
                  }
                  if (valid && terminated && result.length > 2) {
                    var str = result.substr(1, result.length - 2);
                    if (numeric && str.length > 1) {
                      result = String.fromCharCode(parseInt(str.substr(1), 10));
                    } else if (hex && str.length > 2) {
                      result = String.fromCharCode(parseInt("0" + str.substr(1), 16));
                    } else if (!numeric && !hex && xhtml_entities_1.XHTMLEntities[str]) {
                      result = xhtml_entities_1.XHTMLEntities[str];
                    }
                  }
                  return result;
                };
                JSXParser2.prototype.lexJSX = function() {
                  var cp = this.scanner.source.charCodeAt(this.scanner.index);
                  if (cp === 60 || cp === 62 || cp === 47 || cp === 58 || cp === 61 || cp === 123 || cp === 125) {
                    var value = this.scanner.source[this.scanner.index++];
                    return {
                      type: 7,
                      value,
                      lineNumber: this.scanner.lineNumber,
                      lineStart: this.scanner.lineStart,
                      start: this.scanner.index - 1,
                      end: this.scanner.index
                    };
                  }
                  if (cp === 34 || cp === 39) {
                    var start = this.scanner.index;
                    var quote = this.scanner.source[this.scanner.index++];
                    var str = "";
                    while (!this.scanner.eof()) {
                      var ch = this.scanner.source[this.scanner.index++];
                      if (ch === quote) {
                        break;
                      } else if (ch === "&") {
                        str += this.scanXHTMLEntity(quote);
                      } else {
                        str += ch;
                      }
                    }
                    return {
                      type: 8,
                      value: str,
                      lineNumber: this.scanner.lineNumber,
                      lineStart: this.scanner.lineStart,
                      start,
                      end: this.scanner.index
                    };
                  }
                  if (cp === 46) {
                    var n1 = this.scanner.source.charCodeAt(this.scanner.index + 1);
                    var n2 = this.scanner.source.charCodeAt(this.scanner.index + 2);
                    var value = n1 === 46 && n2 === 46 ? "..." : ".";
                    var start = this.scanner.index;
                    this.scanner.index += value.length;
                    return {
                      type: 7,
                      value,
                      lineNumber: this.scanner.lineNumber,
                      lineStart: this.scanner.lineStart,
                      start,
                      end: this.scanner.index
                    };
                  }
                  if (cp === 96) {
                    return {
                      type: 10,
                      value: "",
                      lineNumber: this.scanner.lineNumber,
                      lineStart: this.scanner.lineStart,
                      start: this.scanner.index,
                      end: this.scanner.index
                    };
                  }
                  if (character_1.Character.isIdentifierStart(cp) && cp !== 92) {
                    var start = this.scanner.index;
                    ++this.scanner.index;
                    while (!this.scanner.eof()) {
                      var ch = this.scanner.source.charCodeAt(this.scanner.index);
                      if (character_1.Character.isIdentifierPart(ch) && ch !== 92) {
                        ++this.scanner.index;
                      } else if (ch === 45) {
                        ++this.scanner.index;
                      } else {
                        break;
                      }
                    }
                    var id = this.scanner.source.slice(start, this.scanner.index);
                    return {
                      type: 100,
                      value: id,
                      lineNumber: this.scanner.lineNumber,
                      lineStart: this.scanner.lineStart,
                      start,
                      end: this.scanner.index
                    };
                  }
                  return this.scanner.lex();
                };
                JSXParser2.prototype.nextJSXToken = function() {
                  this.collectComments();
                  this.startMarker.index = this.scanner.index;
                  this.startMarker.line = this.scanner.lineNumber;
                  this.startMarker.column = this.scanner.index - this.scanner.lineStart;
                  var token = this.lexJSX();
                  this.lastMarker.index = this.scanner.index;
                  this.lastMarker.line = this.scanner.lineNumber;
                  this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
                  if (this.config.tokens) {
                    this.tokens.push(this.convertToken(token));
                  }
                  return token;
                };
                JSXParser2.prototype.nextJSXText = function() {
                  this.startMarker.index = this.scanner.index;
                  this.startMarker.line = this.scanner.lineNumber;
                  this.startMarker.column = this.scanner.index - this.scanner.lineStart;
                  var start = this.scanner.index;
                  var text3 = "";
                  while (!this.scanner.eof()) {
                    var ch = this.scanner.source[this.scanner.index];
                    if (ch === "{" || ch === "<") {
                      break;
                    }
                    ++this.scanner.index;
                    text3 += ch;
                    if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                      ++this.scanner.lineNumber;
                      if (ch === "\r" && this.scanner.source[this.scanner.index] === "\n") {
                        ++this.scanner.index;
                      }
                      this.scanner.lineStart = this.scanner.index;
                    }
                  }
                  this.lastMarker.index = this.scanner.index;
                  this.lastMarker.line = this.scanner.lineNumber;
                  this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
                  var token = {
                    type: 101,
                    value: text3,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start,
                    end: this.scanner.index
                  };
                  if (text3.length > 0 && this.config.tokens) {
                    this.tokens.push(this.convertToken(token));
                  }
                  return token;
                };
                JSXParser2.prototype.peekJSXToken = function() {
                  var state = this.scanner.saveState();
                  this.scanner.scanComments();
                  var next = this.lexJSX();
                  this.scanner.restoreState(state);
                  return next;
                };
                JSXParser2.prototype.expectJSX = function(value) {
                  var token = this.nextJSXToken();
                  if (token.type !== 7 || token.value !== value) {
                    this.throwUnexpectedToken(token);
                  }
                };
                JSXParser2.prototype.matchJSX = function(value) {
                  var next = this.peekJSXToken();
                  return next.type === 7 && next.value === value;
                };
                JSXParser2.prototype.parseJSXIdentifier = function() {
                  var node = this.createJSXNode();
                  var token = this.nextJSXToken();
                  if (token.type !== 100) {
                    this.throwUnexpectedToken(token);
                  }
                  return this.finalize(node, new JSXNode.JSXIdentifier(token.value));
                };
                JSXParser2.prototype.parseJSXElementName = function() {
                  var node = this.createJSXNode();
                  var elementName = this.parseJSXIdentifier();
                  if (this.matchJSX(":")) {
                    var namespace = elementName;
                    this.expectJSX(":");
                    var name_1 = this.parseJSXIdentifier();
                    elementName = this.finalize(node, new JSXNode.JSXNamespacedName(namespace, name_1));
                  } else if (this.matchJSX(".")) {
                    while (this.matchJSX(".")) {
                      var object = elementName;
                      this.expectJSX(".");
                      var property = this.parseJSXIdentifier();
                      elementName = this.finalize(node, new JSXNode.JSXMemberExpression(object, property));
                    }
                  }
                  return elementName;
                };
                JSXParser2.prototype.parseJSXAttributeName = function() {
                  var node = this.createJSXNode();
                  var attributeName;
                  var identifier = this.parseJSXIdentifier();
                  if (this.matchJSX(":")) {
                    var namespace = identifier;
                    this.expectJSX(":");
                    var name_2 = this.parseJSXIdentifier();
                    attributeName = this.finalize(node, new JSXNode.JSXNamespacedName(namespace, name_2));
                  } else {
                    attributeName = identifier;
                  }
                  return attributeName;
                };
                JSXParser2.prototype.parseJSXStringLiteralAttribute = function() {
                  var node = this.createJSXNode();
                  var token = this.nextJSXToken();
                  if (token.type !== 8) {
                    this.throwUnexpectedToken(token);
                  }
                  var raw = this.getTokenRaw(token);
                  return this.finalize(node, new Node2.Literal(token.value, raw));
                };
                JSXParser2.prototype.parseJSXExpressionAttribute = function() {
                  var node = this.createJSXNode();
                  this.expectJSX("{");
                  this.finishJSX();
                  if (this.match("}")) {
                    this.tolerateError("JSX attributes must only be assigned a non-empty expression");
                  }
                  var expression = this.parseAssignmentExpression();
                  this.reenterJSX();
                  return this.finalize(node, new JSXNode.JSXExpressionContainer(expression));
                };
                JSXParser2.prototype.parseJSXAttributeValue = function() {
                  return this.matchJSX("{") ? this.parseJSXExpressionAttribute() : this.matchJSX("<") ? this.parseJSXElement() : this.parseJSXStringLiteralAttribute();
                };
                JSXParser2.prototype.parseJSXNameValueAttribute = function() {
                  var node = this.createJSXNode();
                  var name = this.parseJSXAttributeName();
                  var value = null;
                  if (this.matchJSX("=")) {
                    this.expectJSX("=");
                    value = this.parseJSXAttributeValue();
                  }
                  return this.finalize(node, new JSXNode.JSXAttribute(name, value));
                };
                JSXParser2.prototype.parseJSXSpreadAttribute = function() {
                  var node = this.createJSXNode();
                  this.expectJSX("{");
                  this.expectJSX("...");
                  this.finishJSX();
                  var argument = this.parseAssignmentExpression();
                  this.reenterJSX();
                  return this.finalize(node, new JSXNode.JSXSpreadAttribute(argument));
                };
                JSXParser2.prototype.parseJSXAttributes = function() {
                  var attributes = [];
                  while (!this.matchJSX("/") && !this.matchJSX(">")) {
                    var attribute = this.matchJSX("{") ? this.parseJSXSpreadAttribute() : this.parseJSXNameValueAttribute();
                    attributes.push(attribute);
                  }
                  return attributes;
                };
                JSXParser2.prototype.parseJSXOpeningElement = function() {
                  var node = this.createJSXNode();
                  this.expectJSX("<");
                  var name = this.parseJSXElementName();
                  var attributes = this.parseJSXAttributes();
                  var selfClosing = this.matchJSX("/");
                  if (selfClosing) {
                    this.expectJSX("/");
                  }
                  this.expectJSX(">");
                  return this.finalize(node, new JSXNode.JSXOpeningElement(name, selfClosing, attributes));
                };
                JSXParser2.prototype.parseJSXBoundaryElement = function() {
                  var node = this.createJSXNode();
                  this.expectJSX("<");
                  if (this.matchJSX("/")) {
                    this.expectJSX("/");
                    var name_3 = this.parseJSXElementName();
                    this.expectJSX(">");
                    return this.finalize(node, new JSXNode.JSXClosingElement(name_3));
                  }
                  var name = this.parseJSXElementName();
                  var attributes = this.parseJSXAttributes();
                  var selfClosing = this.matchJSX("/");
                  if (selfClosing) {
                    this.expectJSX("/");
                  }
                  this.expectJSX(">");
                  return this.finalize(node, new JSXNode.JSXOpeningElement(name, selfClosing, attributes));
                };
                JSXParser2.prototype.parseJSXEmptyExpression = function() {
                  var node = this.createJSXChildNode();
                  this.collectComments();
                  this.lastMarker.index = this.scanner.index;
                  this.lastMarker.line = this.scanner.lineNumber;
                  this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
                  return this.finalize(node, new JSXNode.JSXEmptyExpression());
                };
                JSXParser2.prototype.parseJSXExpressionContainer = function() {
                  var node = this.createJSXNode();
                  this.expectJSX("{");
                  var expression;
                  if (this.matchJSX("}")) {
                    expression = this.parseJSXEmptyExpression();
                    this.expectJSX("}");
                  } else {
                    this.finishJSX();
                    expression = this.parseAssignmentExpression();
                    this.reenterJSX();
                  }
                  return this.finalize(node, new JSXNode.JSXExpressionContainer(expression));
                };
                JSXParser2.prototype.parseJSXChildren = function() {
                  var children2 = [];
                  while (!this.scanner.eof()) {
                    var node = this.createJSXChildNode();
                    var token = this.nextJSXText();
                    if (token.start < token.end) {
                      var raw = this.getTokenRaw(token);
                      var child = this.finalize(node, new JSXNode.JSXText(token.value, raw));
                      children2.push(child);
                    }
                    if (this.scanner.source[this.scanner.index] === "{") {
                      var container = this.parseJSXExpressionContainer();
                      children2.push(container);
                    } else {
                      break;
                    }
                  }
                  return children2;
                };
                JSXParser2.prototype.parseComplexJSXElement = function(el) {
                  var stack = [];
                  while (!this.scanner.eof()) {
                    el.children = el.children.concat(this.parseJSXChildren());
                    var node = this.createJSXChildNode();
                    var element2 = this.parseJSXBoundaryElement();
                    if (element2.type === jsx_syntax_1.JSXSyntax.JSXOpeningElement) {
                      var opening = element2;
                      if (opening.selfClosing) {
                        var child = this.finalize(node, new JSXNode.JSXElement(opening, [], null));
                        el.children.push(child);
                      } else {
                        stack.push(el);
                        el = { node, opening, closing: null, children: [] };
                      }
                    }
                    if (element2.type === jsx_syntax_1.JSXSyntax.JSXClosingElement) {
                      el.closing = element2;
                      var open_1 = getQualifiedElementName(el.opening.name);
                      var close_1 = getQualifiedElementName(el.closing.name);
                      if (open_1 !== close_1) {
                        this.tolerateError("Expected corresponding JSX closing tag for %0", open_1);
                      }
                      if (stack.length > 0) {
                        var child = this.finalize(el.node, new JSXNode.JSXElement(el.opening, el.children, el.closing));
                        el = stack[stack.length - 1];
                        el.children.push(child);
                        stack.pop();
                      } else {
                        break;
                      }
                    }
                  }
                  return el;
                };
                JSXParser2.prototype.parseJSXElement = function() {
                  var node = this.createJSXNode();
                  var opening = this.parseJSXOpeningElement();
                  var children2 = [];
                  var closing = null;
                  if (!opening.selfClosing) {
                    var el = this.parseComplexJSXElement({ node, opening, closing, children: children2 });
                    children2 = el.children;
                    closing = el.closing;
                  }
                  return this.finalize(node, new JSXNode.JSXElement(opening, children2, closing));
                };
                JSXParser2.prototype.parseJSXRoot = function() {
                  if (this.config.tokens) {
                    this.tokens.pop();
                  }
                  this.startJSX();
                  var element2 = this.parseJSXElement();
                  this.finishJSX();
                  return element2;
                };
                JSXParser2.prototype.isStartOfExpression = function() {
                  return _super.prototype.isStartOfExpression.call(this) || this.match("<");
                };
                return JSXParser2;
              }(parser_1.Parser);
              exports2.JSXParser = JSXParser;
            },
            /* 4 */
            /***/
            function(module2, exports2) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", { value: true });
              var Regex = {
                // Unicode v8.0.0 NonAsciiIdentifierStart:
                NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
                // Unicode v8.0.0 NonAsciiIdentifierPart:
                NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
              };
              exports2.Character = {
                /* tslint:disable:no-bitwise */
                fromCodePoint: function(cp) {
                  return cp < 65536 ? String.fromCharCode(cp) : String.fromCharCode(55296 + (cp - 65536 >> 10)) + String.fromCharCode(56320 + (cp - 65536 & 1023));
                },
                // https://tc39.github.io/ecma262/#sec-white-space
                isWhiteSpace: function(cp) {
                  return cp === 32 || cp === 9 || cp === 11 || cp === 12 || cp === 160 || cp >= 5760 && [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279].indexOf(cp) >= 0;
                },
                // https://tc39.github.io/ecma262/#sec-line-terminators
                isLineTerminator: function(cp) {
                  return cp === 10 || cp === 13 || cp === 8232 || cp === 8233;
                },
                // https://tc39.github.io/ecma262/#sec-names-and-keywords
                isIdentifierStart: function(cp) {
                  return cp === 36 || cp === 95 || cp >= 65 && cp <= 90 || cp >= 97 && cp <= 122 || cp === 92 || cp >= 128 && Regex.NonAsciiIdentifierStart.test(exports2.Character.fromCodePoint(cp));
                },
                isIdentifierPart: function(cp) {
                  return cp === 36 || cp === 95 || cp >= 65 && cp <= 90 || cp >= 97 && cp <= 122 || cp >= 48 && cp <= 57 || cp === 92 || cp >= 128 && Regex.NonAsciiIdentifierPart.test(exports2.Character.fromCodePoint(cp));
                },
                // https://tc39.github.io/ecma262/#sec-literals-numeric-literals
                isDecimalDigit: function(cp) {
                  return cp >= 48 && cp <= 57;
                },
                isHexDigit: function(cp) {
                  return cp >= 48 && cp <= 57 || cp >= 65 && cp <= 70 || cp >= 97 && cp <= 102;
                },
                isOctalDigit: function(cp) {
                  return cp >= 48 && cp <= 55;
                }
              };
            },
            /* 5 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", { value: true });
              var jsx_syntax_1 = __webpack_require__(6);
              var JSXClosingElement = /* @__PURE__ */ function() {
                function JSXClosingElement2(name) {
                  this.type = jsx_syntax_1.JSXSyntax.JSXClosingElement;
                  this.name = name;
                }
                __name(JSXClosingElement2, "JSXClosingElement");
                return JSXClosingElement2;
              }();
              exports2.JSXClosingElement = JSXClosingElement;
              var JSXElement = /* @__PURE__ */ function() {
                function JSXElement2(openingElement, children2, closingElement) {
                  this.type = jsx_syntax_1.JSXSyntax.JSXElement;
                  this.openingElement = openingElement;
                  this.children = children2;
                  this.closingElement = closingElement;
                }
                __name(JSXElement2, "JSXElement");
                return JSXElement2;
              }();
              exports2.JSXElement = JSXElement;
              var JSXEmptyExpression = /* @__PURE__ */ function() {
                function JSXEmptyExpression2() {
                  this.type = jsx_syntax_1.JSXSyntax.JSXEmptyExpression;
                }
                __name(JSXEmptyExpression2, "JSXEmptyExpression");
                return JSXEmptyExpression2;
              }();
              exports2.JSXEmptyExpression = JSXEmptyExpression;
              var JSXExpressionContainer = /* @__PURE__ */ function() {
                function JSXExpressionContainer2(expression) {
                  this.type = jsx_syntax_1.JSXSyntax.JSXExpressionContainer;
                  this.expression = expression;
                }
                __name(JSXExpressionContainer2, "JSXExpressionContainer");
                return JSXExpressionContainer2;
              }();
              exports2.JSXExpressionContainer = JSXExpressionContainer;
              var JSXIdentifier = /* @__PURE__ */ function() {
                function JSXIdentifier2(name) {
                  this.type = jsx_syntax_1.JSXSyntax.JSXIdentifier;
                  this.name = name;
                }
                __name(JSXIdentifier2, "JSXIdentifier");
                return JSXIdentifier2;
              }();
              exports2.JSXIdentifier = JSXIdentifier;
              var JSXMemberExpression = /* @__PURE__ */ function() {
                function JSXMemberExpression2(object, property) {
                  this.type = jsx_syntax_1.JSXSyntax.JSXMemberExpression;
                  this.object = object;
                  this.property = property;
                }
                __name(JSXMemberExpression2, "JSXMemberExpression");
                return JSXMemberExpression2;
              }();
              exports2.JSXMemberExpression = JSXMemberExpression;
              var JSXAttribute = /* @__PURE__ */ function() {
                function JSXAttribute2(name, value) {
                  this.type = jsx_syntax_1.JSXSyntax.JSXAttribute;
                  this.name = name;
                  this.value = value;
                }
                __name(JSXAttribute2, "JSXAttribute");
                return JSXAttribute2;
              }();
              exports2.JSXAttribute = JSXAttribute;
              var JSXNamespacedName = /* @__PURE__ */ function() {
                function JSXNamespacedName2(namespace, name) {
                  this.type = jsx_syntax_1.JSXSyntax.JSXNamespacedName;
                  this.namespace = namespace;
                  this.name = name;
                }
                __name(JSXNamespacedName2, "JSXNamespacedName");
                return JSXNamespacedName2;
              }();
              exports2.JSXNamespacedName = JSXNamespacedName;
              var JSXOpeningElement = /* @__PURE__ */ function() {
                function JSXOpeningElement2(name, selfClosing, attributes) {
                  this.type = jsx_syntax_1.JSXSyntax.JSXOpeningElement;
                  this.name = name;
                  this.selfClosing = selfClosing;
                  this.attributes = attributes;
                }
                __name(JSXOpeningElement2, "JSXOpeningElement");
                return JSXOpeningElement2;
              }();
              exports2.JSXOpeningElement = JSXOpeningElement;
              var JSXSpreadAttribute = /* @__PURE__ */ function() {
                function JSXSpreadAttribute2(argument) {
                  this.type = jsx_syntax_1.JSXSyntax.JSXSpreadAttribute;
                  this.argument = argument;
                }
                __name(JSXSpreadAttribute2, "JSXSpreadAttribute");
                return JSXSpreadAttribute2;
              }();
              exports2.JSXSpreadAttribute = JSXSpreadAttribute;
              var JSXText = /* @__PURE__ */ function() {
                function JSXText2(value, raw) {
                  this.type = jsx_syntax_1.JSXSyntax.JSXText;
                  this.value = value;
                  this.raw = raw;
                }
                __name(JSXText2, "JSXText");
                return JSXText2;
              }();
              exports2.JSXText = JSXText;
            },
            /* 6 */
            /***/
            function(module2, exports2) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", { value: true });
              exports2.JSXSyntax = {
                JSXAttribute: "JSXAttribute",
                JSXClosingElement: "JSXClosingElement",
                JSXElement: "JSXElement",
                JSXEmptyExpression: "JSXEmptyExpression",
                JSXExpressionContainer: "JSXExpressionContainer",
                JSXIdentifier: "JSXIdentifier",
                JSXMemberExpression: "JSXMemberExpression",
                JSXNamespacedName: "JSXNamespacedName",
                JSXOpeningElement: "JSXOpeningElement",
                JSXSpreadAttribute: "JSXSpreadAttribute",
                JSXText: "JSXText"
              };
            },
            /* 7 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", { value: true });
              var syntax_1 = __webpack_require__(2);
              var ArrayExpression = /* @__PURE__ */ function() {
                function ArrayExpression2(elements) {
                  this.type = syntax_1.Syntax.ArrayExpression;
                  this.elements = elements;
                }
                __name(ArrayExpression2, "ArrayExpression");
                return ArrayExpression2;
              }();
              exports2.ArrayExpression = ArrayExpression;
              var ArrayPattern = /* @__PURE__ */ function() {
                function ArrayPattern2(elements) {
                  this.type = syntax_1.Syntax.ArrayPattern;
                  this.elements = elements;
                }
                __name(ArrayPattern2, "ArrayPattern");
                return ArrayPattern2;
              }();
              exports2.ArrayPattern = ArrayPattern;
              var ArrowFunctionExpression = /* @__PURE__ */ function() {
                function ArrowFunctionExpression2(params, body, expression) {
                  this.type = syntax_1.Syntax.ArrowFunctionExpression;
                  this.id = null;
                  this.params = params;
                  this.body = body;
                  this.generator = false;
                  this.expression = expression;
                  this.async = false;
                }
                __name(ArrowFunctionExpression2, "ArrowFunctionExpression");
                return ArrowFunctionExpression2;
              }();
              exports2.ArrowFunctionExpression = ArrowFunctionExpression;
              var AssignmentExpression = /* @__PURE__ */ function() {
                function AssignmentExpression2(operator, left, right) {
                  this.type = syntax_1.Syntax.AssignmentExpression;
                  this.operator = operator;
                  this.left = left;
                  this.right = right;
                }
                __name(AssignmentExpression2, "AssignmentExpression");
                return AssignmentExpression2;
              }();
              exports2.AssignmentExpression = AssignmentExpression;
              var AssignmentPattern = /* @__PURE__ */ function() {
                function AssignmentPattern2(left, right) {
                  this.type = syntax_1.Syntax.AssignmentPattern;
                  this.left = left;
                  this.right = right;
                }
                __name(AssignmentPattern2, "AssignmentPattern");
                return AssignmentPattern2;
              }();
              exports2.AssignmentPattern = AssignmentPattern;
              var AsyncArrowFunctionExpression = /* @__PURE__ */ function() {
                function AsyncArrowFunctionExpression2(params, body, expression) {
                  this.type = syntax_1.Syntax.ArrowFunctionExpression;
                  this.id = null;
                  this.params = params;
                  this.body = body;
                  this.generator = false;
                  this.expression = expression;
                  this.async = true;
                }
                __name(AsyncArrowFunctionExpression2, "AsyncArrowFunctionExpression");
                return AsyncArrowFunctionExpression2;
              }();
              exports2.AsyncArrowFunctionExpression = AsyncArrowFunctionExpression;
              var AsyncFunctionDeclaration = /* @__PURE__ */ function() {
                function AsyncFunctionDeclaration2(id, params, body) {
                  this.type = syntax_1.Syntax.FunctionDeclaration;
                  this.id = id;
                  this.params = params;
                  this.body = body;
                  this.generator = false;
                  this.expression = false;
                  this.async = true;
                }
                __name(AsyncFunctionDeclaration2, "AsyncFunctionDeclaration");
                return AsyncFunctionDeclaration2;
              }();
              exports2.AsyncFunctionDeclaration = AsyncFunctionDeclaration;
              var AsyncFunctionExpression = /* @__PURE__ */ function() {
                function AsyncFunctionExpression2(id, params, body) {
                  this.type = syntax_1.Syntax.FunctionExpression;
                  this.id = id;
                  this.params = params;
                  this.body = body;
                  this.generator = false;
                  this.expression = false;
                  this.async = true;
                }
                __name(AsyncFunctionExpression2, "AsyncFunctionExpression");
                return AsyncFunctionExpression2;
              }();
              exports2.AsyncFunctionExpression = AsyncFunctionExpression;
              var AwaitExpression = /* @__PURE__ */ function() {
                function AwaitExpression2(argument) {
                  this.type = syntax_1.Syntax.AwaitExpression;
                  this.argument = argument;
                }
                __name(AwaitExpression2, "AwaitExpression");
                return AwaitExpression2;
              }();
              exports2.AwaitExpression = AwaitExpression;
              var BinaryExpression = /* @__PURE__ */ function() {
                function BinaryExpression2(operator, left, right) {
                  var logical = operator === "||" || operator === "&&";
                  this.type = logical ? syntax_1.Syntax.LogicalExpression : syntax_1.Syntax.BinaryExpression;
                  this.operator = operator;
                  this.left = left;
                  this.right = right;
                }
                __name(BinaryExpression2, "BinaryExpression");
                return BinaryExpression2;
              }();
              exports2.BinaryExpression = BinaryExpression;
              var BlockStatement = /* @__PURE__ */ function() {
                function BlockStatement2(body) {
                  this.type = syntax_1.Syntax.BlockStatement;
                  this.body = body;
                }
                __name(BlockStatement2, "BlockStatement");
                return BlockStatement2;
              }();
              exports2.BlockStatement = BlockStatement;
              var BreakStatement = /* @__PURE__ */ function() {
                function BreakStatement2(label) {
                  this.type = syntax_1.Syntax.BreakStatement;
                  this.label = label;
                }
                __name(BreakStatement2, "BreakStatement");
                return BreakStatement2;
              }();
              exports2.BreakStatement = BreakStatement;
              var CallExpression = /* @__PURE__ */ function() {
                function CallExpression2(callee, args) {
                  this.type = syntax_1.Syntax.CallExpression;
                  this.callee = callee;
                  this.arguments = args;
                }
                __name(CallExpression2, "CallExpression");
                return CallExpression2;
              }();
              exports2.CallExpression = CallExpression;
              var CatchClause = /* @__PURE__ */ function() {
                function CatchClause2(param, body) {
                  this.type = syntax_1.Syntax.CatchClause;
                  this.param = param;
                  this.body = body;
                }
                __name(CatchClause2, "CatchClause");
                return CatchClause2;
              }();
              exports2.CatchClause = CatchClause;
              var ClassBody = /* @__PURE__ */ function() {
                function ClassBody2(body) {
                  this.type = syntax_1.Syntax.ClassBody;
                  this.body = body;
                }
                __name(ClassBody2, "ClassBody");
                return ClassBody2;
              }();
              exports2.ClassBody = ClassBody;
              var ClassDeclaration = /* @__PURE__ */ function() {
                function ClassDeclaration2(id, superClass, body) {
                  this.type = syntax_1.Syntax.ClassDeclaration;
                  this.id = id;
                  this.superClass = superClass;
                  this.body = body;
                }
                __name(ClassDeclaration2, "ClassDeclaration");
                return ClassDeclaration2;
              }();
              exports2.ClassDeclaration = ClassDeclaration;
              var ClassExpression = /* @__PURE__ */ function() {
                function ClassExpression2(id, superClass, body) {
                  this.type = syntax_1.Syntax.ClassExpression;
                  this.id = id;
                  this.superClass = superClass;
                  this.body = body;
                }
                __name(ClassExpression2, "ClassExpression");
                return ClassExpression2;
              }();
              exports2.ClassExpression = ClassExpression;
              var ComputedMemberExpression = /* @__PURE__ */ function() {
                function ComputedMemberExpression2(object, property) {
                  this.type = syntax_1.Syntax.MemberExpression;
                  this.computed = true;
                  this.object = object;
                  this.property = property;
                }
                __name(ComputedMemberExpression2, "ComputedMemberExpression");
                return ComputedMemberExpression2;
              }();
              exports2.ComputedMemberExpression = ComputedMemberExpression;
              var ConditionalExpression = /* @__PURE__ */ function() {
                function ConditionalExpression2(test, consequent, alternate) {
                  this.type = syntax_1.Syntax.ConditionalExpression;
                  this.test = test;
                  this.consequent = consequent;
                  this.alternate = alternate;
                }
                __name(ConditionalExpression2, "ConditionalExpression");
                return ConditionalExpression2;
              }();
              exports2.ConditionalExpression = ConditionalExpression;
              var ContinueStatement = /* @__PURE__ */ function() {
                function ContinueStatement2(label) {
                  this.type = syntax_1.Syntax.ContinueStatement;
                  this.label = label;
                }
                __name(ContinueStatement2, "ContinueStatement");
                return ContinueStatement2;
              }();
              exports2.ContinueStatement = ContinueStatement;
              var DebuggerStatement = /* @__PURE__ */ function() {
                function DebuggerStatement2() {
                  this.type = syntax_1.Syntax.DebuggerStatement;
                }
                __name(DebuggerStatement2, "DebuggerStatement");
                return DebuggerStatement2;
              }();
              exports2.DebuggerStatement = DebuggerStatement;
              var Directive = /* @__PURE__ */ function() {
                function Directive2(expression, directive) {
                  this.type = syntax_1.Syntax.ExpressionStatement;
                  this.expression = expression;
                  this.directive = directive;
                }
                __name(Directive2, "Directive");
                return Directive2;
              }();
              exports2.Directive = Directive;
              var DoWhileStatement = /* @__PURE__ */ function() {
                function DoWhileStatement2(body, test) {
                  this.type = syntax_1.Syntax.DoWhileStatement;
                  this.body = body;
                  this.test = test;
                }
                __name(DoWhileStatement2, "DoWhileStatement");
                return DoWhileStatement2;
              }();
              exports2.DoWhileStatement = DoWhileStatement;
              var EmptyStatement = /* @__PURE__ */ function() {
                function EmptyStatement2() {
                  this.type = syntax_1.Syntax.EmptyStatement;
                }
                __name(EmptyStatement2, "EmptyStatement");
                return EmptyStatement2;
              }();
              exports2.EmptyStatement = EmptyStatement;
              var ExportAllDeclaration = /* @__PURE__ */ function() {
                function ExportAllDeclaration2(source) {
                  this.type = syntax_1.Syntax.ExportAllDeclaration;
                  this.source = source;
                }
                __name(ExportAllDeclaration2, "ExportAllDeclaration");
                return ExportAllDeclaration2;
              }();
              exports2.ExportAllDeclaration = ExportAllDeclaration;
              var ExportDefaultDeclaration = /* @__PURE__ */ function() {
                function ExportDefaultDeclaration2(declaration) {
                  this.type = syntax_1.Syntax.ExportDefaultDeclaration;
                  this.declaration = declaration;
                }
                __name(ExportDefaultDeclaration2, "ExportDefaultDeclaration");
                return ExportDefaultDeclaration2;
              }();
              exports2.ExportDefaultDeclaration = ExportDefaultDeclaration;
              var ExportNamedDeclaration = /* @__PURE__ */ function() {
                function ExportNamedDeclaration2(declaration, specifiers, source) {
                  this.type = syntax_1.Syntax.ExportNamedDeclaration;
                  this.declaration = declaration;
                  this.specifiers = specifiers;
                  this.source = source;
                }
                __name(ExportNamedDeclaration2, "ExportNamedDeclaration");
                return ExportNamedDeclaration2;
              }();
              exports2.ExportNamedDeclaration = ExportNamedDeclaration;
              var ExportSpecifier = /* @__PURE__ */ function() {
                function ExportSpecifier2(local, exported) {
                  this.type = syntax_1.Syntax.ExportSpecifier;
                  this.exported = exported;
                  this.local = local;
                }
                __name(ExportSpecifier2, "ExportSpecifier");
                return ExportSpecifier2;
              }();
              exports2.ExportSpecifier = ExportSpecifier;
              var ExpressionStatement = /* @__PURE__ */ function() {
                function ExpressionStatement2(expression) {
                  this.type = syntax_1.Syntax.ExpressionStatement;
                  this.expression = expression;
                }
                __name(ExpressionStatement2, "ExpressionStatement");
                return ExpressionStatement2;
              }();
              exports2.ExpressionStatement = ExpressionStatement;
              var ForInStatement = /* @__PURE__ */ function() {
                function ForInStatement2(left, right, body) {
                  this.type = syntax_1.Syntax.ForInStatement;
                  this.left = left;
                  this.right = right;
                  this.body = body;
                  this.each = false;
                }
                __name(ForInStatement2, "ForInStatement");
                return ForInStatement2;
              }();
              exports2.ForInStatement = ForInStatement;
              var ForOfStatement = /* @__PURE__ */ function() {
                function ForOfStatement2(left, right, body) {
                  this.type = syntax_1.Syntax.ForOfStatement;
                  this.left = left;
                  this.right = right;
                  this.body = body;
                }
                __name(ForOfStatement2, "ForOfStatement");
                return ForOfStatement2;
              }();
              exports2.ForOfStatement = ForOfStatement;
              var ForStatement = /* @__PURE__ */ function() {
                function ForStatement2(init2, test, update3, body) {
                  this.type = syntax_1.Syntax.ForStatement;
                  this.init = init2;
                  this.test = test;
                  this.update = update3;
                  this.body = body;
                }
                __name(ForStatement2, "ForStatement");
                return ForStatement2;
              }();
              exports2.ForStatement = ForStatement;
              var FunctionDeclaration = /* @__PURE__ */ function() {
                function FunctionDeclaration2(id, params, body, generator) {
                  this.type = syntax_1.Syntax.FunctionDeclaration;
                  this.id = id;
                  this.params = params;
                  this.body = body;
                  this.generator = generator;
                  this.expression = false;
                  this.async = false;
                }
                __name(FunctionDeclaration2, "FunctionDeclaration");
                return FunctionDeclaration2;
              }();
              exports2.FunctionDeclaration = FunctionDeclaration;
              var FunctionExpression = /* @__PURE__ */ function() {
                function FunctionExpression2(id, params, body, generator) {
                  this.type = syntax_1.Syntax.FunctionExpression;
                  this.id = id;
                  this.params = params;
                  this.body = body;
                  this.generator = generator;
                  this.expression = false;
                  this.async = false;
                }
                __name(FunctionExpression2, "FunctionExpression");
                return FunctionExpression2;
              }();
              exports2.FunctionExpression = FunctionExpression;
              var Identifier = /* @__PURE__ */ function() {
                function Identifier2(name) {
                  this.type = syntax_1.Syntax.Identifier;
                  this.name = name;
                }
                __name(Identifier2, "Identifier");
                return Identifier2;
              }();
              exports2.Identifier = Identifier;
              var IfStatement = /* @__PURE__ */ function() {
                function IfStatement2(test, consequent, alternate) {
                  this.type = syntax_1.Syntax.IfStatement;
                  this.test = test;
                  this.consequent = consequent;
                  this.alternate = alternate;
                }
                __name(IfStatement2, "IfStatement");
                return IfStatement2;
              }();
              exports2.IfStatement = IfStatement;
              var ImportDeclaration = /* @__PURE__ */ function() {
                function ImportDeclaration2(specifiers, source) {
                  this.type = syntax_1.Syntax.ImportDeclaration;
                  this.specifiers = specifiers;
                  this.source = source;
                }
                __name(ImportDeclaration2, "ImportDeclaration");
                return ImportDeclaration2;
              }();
              exports2.ImportDeclaration = ImportDeclaration;
              var ImportDefaultSpecifier = /* @__PURE__ */ function() {
                function ImportDefaultSpecifier2(local) {
                  this.type = syntax_1.Syntax.ImportDefaultSpecifier;
                  this.local = local;
                }
                __name(ImportDefaultSpecifier2, "ImportDefaultSpecifier");
                return ImportDefaultSpecifier2;
              }();
              exports2.ImportDefaultSpecifier = ImportDefaultSpecifier;
              var ImportNamespaceSpecifier = /* @__PURE__ */ function() {
                function ImportNamespaceSpecifier2(local) {
                  this.type = syntax_1.Syntax.ImportNamespaceSpecifier;
                  this.local = local;
                }
                __name(ImportNamespaceSpecifier2, "ImportNamespaceSpecifier");
                return ImportNamespaceSpecifier2;
              }();
              exports2.ImportNamespaceSpecifier = ImportNamespaceSpecifier;
              var ImportSpecifier = /* @__PURE__ */ function() {
                function ImportSpecifier2(local, imported) {
                  this.type = syntax_1.Syntax.ImportSpecifier;
                  this.local = local;
                  this.imported = imported;
                }
                __name(ImportSpecifier2, "ImportSpecifier");
                return ImportSpecifier2;
              }();
              exports2.ImportSpecifier = ImportSpecifier;
              var LabeledStatement = /* @__PURE__ */ function() {
                function LabeledStatement2(label, body) {
                  this.type = syntax_1.Syntax.LabeledStatement;
                  this.label = label;
                  this.body = body;
                }
                __name(LabeledStatement2, "LabeledStatement");
                return LabeledStatement2;
              }();
              exports2.LabeledStatement = LabeledStatement;
              var Literal = /* @__PURE__ */ function() {
                function Literal2(value, raw) {
                  this.type = syntax_1.Syntax.Literal;
                  this.value = value;
                  this.raw = raw;
                }
                __name(Literal2, "Literal");
                return Literal2;
              }();
              exports2.Literal = Literal;
              var MetaProperty = /* @__PURE__ */ function() {
                function MetaProperty2(meta, property) {
                  this.type = syntax_1.Syntax.MetaProperty;
                  this.meta = meta;
                  this.property = property;
                }
                __name(MetaProperty2, "MetaProperty");
                return MetaProperty2;
              }();
              exports2.MetaProperty = MetaProperty;
              var MethodDefinition = /* @__PURE__ */ function() {
                function MethodDefinition2(key, computed, value, kind, isStatic) {
                  this.type = syntax_1.Syntax.MethodDefinition;
                  this.key = key;
                  this.computed = computed;
                  this.value = value;
                  this.kind = kind;
                  this.static = isStatic;
                }
                __name(MethodDefinition2, "MethodDefinition");
                return MethodDefinition2;
              }();
              exports2.MethodDefinition = MethodDefinition;
              var Module = /* @__PURE__ */ function() {
                function Module2(body) {
                  this.type = syntax_1.Syntax.Program;
                  this.body = body;
                  this.sourceType = "module";
                }
                __name(Module2, "Module");
                return Module2;
              }();
              exports2.Module = Module;
              var NewExpression = /* @__PURE__ */ function() {
                function NewExpression2(callee, args) {
                  this.type = syntax_1.Syntax.NewExpression;
                  this.callee = callee;
                  this.arguments = args;
                }
                __name(NewExpression2, "NewExpression");
                return NewExpression2;
              }();
              exports2.NewExpression = NewExpression;
              var ObjectExpression = /* @__PURE__ */ function() {
                function ObjectExpression2(properties) {
                  this.type = syntax_1.Syntax.ObjectExpression;
                  this.properties = properties;
                }
                __name(ObjectExpression2, "ObjectExpression");
                return ObjectExpression2;
              }();
              exports2.ObjectExpression = ObjectExpression;
              var ObjectPattern = /* @__PURE__ */ function() {
                function ObjectPattern2(properties) {
                  this.type = syntax_1.Syntax.ObjectPattern;
                  this.properties = properties;
                }
                __name(ObjectPattern2, "ObjectPattern");
                return ObjectPattern2;
              }();
              exports2.ObjectPattern = ObjectPattern;
              var Property = /* @__PURE__ */ function() {
                function Property2(kind, key, computed, value, method, shorthand) {
                  this.type = syntax_1.Syntax.Property;
                  this.key = key;
                  this.computed = computed;
                  this.value = value;
                  this.kind = kind;
                  this.method = method;
                  this.shorthand = shorthand;
                }
                __name(Property2, "Property");
                return Property2;
              }();
              exports2.Property = Property;
              var RegexLiteral = /* @__PURE__ */ function() {
                function RegexLiteral2(value, raw, pattern, flags) {
                  this.type = syntax_1.Syntax.Literal;
                  this.value = value;
                  this.raw = raw;
                  this.regex = { pattern, flags };
                }
                __name(RegexLiteral2, "RegexLiteral");
                return RegexLiteral2;
              }();
              exports2.RegexLiteral = RegexLiteral;
              var RestElement = /* @__PURE__ */ function() {
                function RestElement2(argument) {
                  this.type = syntax_1.Syntax.RestElement;
                  this.argument = argument;
                }
                __name(RestElement2, "RestElement");
                return RestElement2;
              }();
              exports2.RestElement = RestElement;
              var ReturnStatement = /* @__PURE__ */ function() {
                function ReturnStatement2(argument) {
                  this.type = syntax_1.Syntax.ReturnStatement;
                  this.argument = argument;
                }
                __name(ReturnStatement2, "ReturnStatement");
                return ReturnStatement2;
              }();
              exports2.ReturnStatement = ReturnStatement;
              var Script = /* @__PURE__ */ function() {
                function Script2(body) {
                  this.type = syntax_1.Syntax.Program;
                  this.body = body;
                  this.sourceType = "script";
                }
                __name(Script2, "Script");
                return Script2;
              }();
              exports2.Script = Script;
              var SequenceExpression = /* @__PURE__ */ function() {
                function SequenceExpression2(expressions) {
                  this.type = syntax_1.Syntax.SequenceExpression;
                  this.expressions = expressions;
                }
                __name(SequenceExpression2, "SequenceExpression");
                return SequenceExpression2;
              }();
              exports2.SequenceExpression = SequenceExpression;
              var SpreadElement = /* @__PURE__ */ function() {
                function SpreadElement2(argument) {
                  this.type = syntax_1.Syntax.SpreadElement;
                  this.argument = argument;
                }
                __name(SpreadElement2, "SpreadElement");
                return SpreadElement2;
              }();
              exports2.SpreadElement = SpreadElement;
              var StaticMemberExpression = /* @__PURE__ */ function() {
                function StaticMemberExpression2(object, property) {
                  this.type = syntax_1.Syntax.MemberExpression;
                  this.computed = false;
                  this.object = object;
                  this.property = property;
                }
                __name(StaticMemberExpression2, "StaticMemberExpression");
                return StaticMemberExpression2;
              }();
              exports2.StaticMemberExpression = StaticMemberExpression;
              var Super = /* @__PURE__ */ function() {
                function Super2() {
                  this.type = syntax_1.Syntax.Super;
                }
                __name(Super2, "Super");
                return Super2;
              }();
              exports2.Super = Super;
              var SwitchCase = /* @__PURE__ */ function() {
                function SwitchCase2(test, consequent) {
                  this.type = syntax_1.Syntax.SwitchCase;
                  this.test = test;
                  this.consequent = consequent;
                }
                __name(SwitchCase2, "SwitchCase");
                return SwitchCase2;
              }();
              exports2.SwitchCase = SwitchCase;
              var SwitchStatement = /* @__PURE__ */ function() {
                function SwitchStatement2(discriminant, cases) {
                  this.type = syntax_1.Syntax.SwitchStatement;
                  this.discriminant = discriminant;
                  this.cases = cases;
                }
                __name(SwitchStatement2, "SwitchStatement");
                return SwitchStatement2;
              }();
              exports2.SwitchStatement = SwitchStatement;
              var TaggedTemplateExpression = /* @__PURE__ */ function() {
                function TaggedTemplateExpression2(tag, quasi) {
                  this.type = syntax_1.Syntax.TaggedTemplateExpression;
                  this.tag = tag;
                  this.quasi = quasi;
                }
                __name(TaggedTemplateExpression2, "TaggedTemplateExpression");
                return TaggedTemplateExpression2;
              }();
              exports2.TaggedTemplateExpression = TaggedTemplateExpression;
              var TemplateElement = /* @__PURE__ */ function() {
                function TemplateElement2(value, tail) {
                  this.type = syntax_1.Syntax.TemplateElement;
                  this.value = value;
                  this.tail = tail;
                }
                __name(TemplateElement2, "TemplateElement");
                return TemplateElement2;
              }();
              exports2.TemplateElement = TemplateElement;
              var TemplateLiteral = /* @__PURE__ */ function() {
                function TemplateLiteral2(quasis, expressions) {
                  this.type = syntax_1.Syntax.TemplateLiteral;
                  this.quasis = quasis;
                  this.expressions = expressions;
                }
                __name(TemplateLiteral2, "TemplateLiteral");
                return TemplateLiteral2;
              }();
              exports2.TemplateLiteral = TemplateLiteral;
              var ThisExpression = /* @__PURE__ */ function() {
                function ThisExpression2() {
                  this.type = syntax_1.Syntax.ThisExpression;
                }
                __name(ThisExpression2, "ThisExpression");
                return ThisExpression2;
              }();
              exports2.ThisExpression = ThisExpression;
              var ThrowStatement = /* @__PURE__ */ function() {
                function ThrowStatement2(argument) {
                  this.type = syntax_1.Syntax.ThrowStatement;
                  this.argument = argument;
                }
                __name(ThrowStatement2, "ThrowStatement");
                return ThrowStatement2;
              }();
              exports2.ThrowStatement = ThrowStatement;
              var TryStatement = /* @__PURE__ */ function() {
                function TryStatement2(block, handler, finalizer) {
                  this.type = syntax_1.Syntax.TryStatement;
                  this.block = block;
                  this.handler = handler;
                  this.finalizer = finalizer;
                }
                __name(TryStatement2, "TryStatement");
                return TryStatement2;
              }();
              exports2.TryStatement = TryStatement;
              var UnaryExpression = /* @__PURE__ */ function() {
                function UnaryExpression2(operator, argument) {
                  this.type = syntax_1.Syntax.UnaryExpression;
                  this.operator = operator;
                  this.argument = argument;
                  this.prefix = true;
                }
                __name(UnaryExpression2, "UnaryExpression");
                return UnaryExpression2;
              }();
              exports2.UnaryExpression = UnaryExpression;
              var UpdateExpression = /* @__PURE__ */ function() {
                function UpdateExpression2(operator, argument, prefix) {
                  this.type = syntax_1.Syntax.UpdateExpression;
                  this.operator = operator;
                  this.argument = argument;
                  this.prefix = prefix;
                }
                __name(UpdateExpression2, "UpdateExpression");
                return UpdateExpression2;
              }();
              exports2.UpdateExpression = UpdateExpression;
              var VariableDeclaration = /* @__PURE__ */ function() {
                function VariableDeclaration2(declarations, kind) {
                  this.type = syntax_1.Syntax.VariableDeclaration;
                  this.declarations = declarations;
                  this.kind = kind;
                }
                __name(VariableDeclaration2, "VariableDeclaration");
                return VariableDeclaration2;
              }();
              exports2.VariableDeclaration = VariableDeclaration;
              var VariableDeclarator = /* @__PURE__ */ function() {
                function VariableDeclarator2(id, init2) {
                  this.type = syntax_1.Syntax.VariableDeclarator;
                  this.id = id;
                  this.init = init2;
                }
                __name(VariableDeclarator2, "VariableDeclarator");
                return VariableDeclarator2;
              }();
              exports2.VariableDeclarator = VariableDeclarator;
              var WhileStatement = /* @__PURE__ */ function() {
                function WhileStatement2(test, body) {
                  this.type = syntax_1.Syntax.WhileStatement;
                  this.test = test;
                  this.body = body;
                }
                __name(WhileStatement2, "WhileStatement");
                return WhileStatement2;
              }();
              exports2.WhileStatement = WhileStatement;
              var WithStatement = /* @__PURE__ */ function() {
                function WithStatement2(object, body) {
                  this.type = syntax_1.Syntax.WithStatement;
                  this.object = object;
                  this.body = body;
                }
                __name(WithStatement2, "WithStatement");
                return WithStatement2;
              }();
              exports2.WithStatement = WithStatement;
              var YieldExpression = /* @__PURE__ */ function() {
                function YieldExpression2(argument, delegate) {
                  this.type = syntax_1.Syntax.YieldExpression;
                  this.argument = argument;
                  this.delegate = delegate;
                }
                __name(YieldExpression2, "YieldExpression");
                return YieldExpression2;
              }();
              exports2.YieldExpression = YieldExpression;
            },
            /* 8 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", { value: true });
              var assert_1 = __webpack_require__(9);
              var error_handler_1 = __webpack_require__(10);
              var messages_1 = __webpack_require__(11);
              var Node2 = __webpack_require__(7);
              var scanner_1 = __webpack_require__(12);
              var syntax_1 = __webpack_require__(2);
              var token_1 = __webpack_require__(13);
              var ArrowParameterPlaceHolder = "ArrowParameterPlaceHolder";
              var Parser = function() {
                function Parser2(code, options, delegate) {
                  if (options === void 0) {
                    options = {};
                  }
                  this.config = {
                    range: typeof options.range === "boolean" && options.range,
                    loc: typeof options.loc === "boolean" && options.loc,
                    source: null,
                    tokens: typeof options.tokens === "boolean" && options.tokens,
                    comment: typeof options.comment === "boolean" && options.comment,
                    tolerant: typeof options.tolerant === "boolean" && options.tolerant
                  };
                  if (this.config.loc && options.source && options.source !== null) {
                    this.config.source = String(options.source);
                  }
                  this.delegate = delegate;
                  this.errorHandler = new error_handler_1.ErrorHandler();
                  this.errorHandler.tolerant = this.config.tolerant;
                  this.scanner = new scanner_1.Scanner(code, this.errorHandler);
                  this.scanner.trackComment = this.config.comment;
                  this.operatorPrecedence = {
                    ")": 0,
                    ";": 0,
                    ",": 0,
                    "=": 0,
                    "]": 0,
                    "||": 1,
                    "&&": 2,
                    "|": 3,
                    "^": 4,
                    "&": 5,
                    "==": 6,
                    "!=": 6,
                    "===": 6,
                    "!==": 6,
                    "<": 7,
                    ">": 7,
                    "<=": 7,
                    ">=": 7,
                    "<<": 8,
                    ">>": 8,
                    ">>>": 8,
                    "+": 9,
                    "-": 9,
                    "*": 11,
                    "/": 11,
                    "%": 11
                  };
                  this.lookahead = {
                    type: 2,
                    value: "",
                    lineNumber: this.scanner.lineNumber,
                    lineStart: 0,
                    start: 0,
                    end: 0
                  };
                  this.hasLineTerminator = false;
                  this.context = {
                    isModule: false,
                    await: false,
                    allowIn: true,
                    allowStrictDirective: true,
                    allowYield: true,
                    firstCoverInitializedNameError: null,
                    isAssignmentTarget: false,
                    isBindingElement: false,
                    inFunctionBody: false,
                    inIteration: false,
                    inSwitch: false,
                    labelSet: {},
                    strict: false
                  };
                  this.tokens = [];
                  this.startMarker = {
                    index: 0,
                    line: this.scanner.lineNumber,
                    column: 0
                  };
                  this.lastMarker = {
                    index: 0,
                    line: this.scanner.lineNumber,
                    column: 0
                  };
                  this.nextToken();
                  this.lastMarker = {
                    index: this.scanner.index,
                    line: this.scanner.lineNumber,
                    column: this.scanner.index - this.scanner.lineStart
                  };
                }
                __name(Parser2, "Parser");
                Parser2.prototype.throwError = function(messageFormat) {
                  var values = [];
                  for (var _i = 1; _i < arguments.length; _i++) {
                    values[_i - 1] = arguments[_i];
                  }
                  var args = Array.prototype.slice.call(arguments, 1);
                  var msg = messageFormat.replace(/%(\d)/g, function(whole, idx) {
                    assert_1.assert(idx < args.length, "Message reference must be in range");
                    return args[idx];
                  });
                  var index = this.lastMarker.index;
                  var line = this.lastMarker.line;
                  var column = this.lastMarker.column + 1;
                  throw this.errorHandler.createError(index, line, column, msg);
                };
                Parser2.prototype.tolerateError = function(messageFormat) {
                  var values = [];
                  for (var _i = 1; _i < arguments.length; _i++) {
                    values[_i - 1] = arguments[_i];
                  }
                  var args = Array.prototype.slice.call(arguments, 1);
                  var msg = messageFormat.replace(/%(\d)/g, function(whole, idx) {
                    assert_1.assert(idx < args.length, "Message reference must be in range");
                    return args[idx];
                  });
                  var index = this.lastMarker.index;
                  var line = this.scanner.lineNumber;
                  var column = this.lastMarker.column + 1;
                  this.errorHandler.tolerateError(index, line, column, msg);
                };
                Parser2.prototype.unexpectedTokenError = function(token, message) {
                  var msg = message || messages_1.Messages.UnexpectedToken;
                  var value;
                  if (token) {
                    if (!message) {
                      msg = token.type === 2 ? messages_1.Messages.UnexpectedEOS : token.type === 3 ? messages_1.Messages.UnexpectedIdentifier : token.type === 6 ? messages_1.Messages.UnexpectedNumber : token.type === 8 ? messages_1.Messages.UnexpectedString : token.type === 10 ? messages_1.Messages.UnexpectedTemplate : messages_1.Messages.UnexpectedToken;
                      if (token.type === 4) {
                        if (this.scanner.isFutureReservedWord(token.value)) {
                          msg = messages_1.Messages.UnexpectedReserved;
                        } else if (this.context.strict && this.scanner.isStrictModeReservedWord(token.value)) {
                          msg = messages_1.Messages.StrictReservedWord;
                        }
                      }
                    }
                    value = token.value;
                  } else {
                    value = "ILLEGAL";
                  }
                  msg = msg.replace("%0", value);
                  if (token && typeof token.lineNumber === "number") {
                    var index = token.start;
                    var line = token.lineNumber;
                    var lastMarkerLineStart = this.lastMarker.index - this.lastMarker.column;
                    var column = token.start - lastMarkerLineStart + 1;
                    return this.errorHandler.createError(index, line, column, msg);
                  } else {
                    var index = this.lastMarker.index;
                    var line = this.lastMarker.line;
                    var column = this.lastMarker.column + 1;
                    return this.errorHandler.createError(index, line, column, msg);
                  }
                };
                Parser2.prototype.throwUnexpectedToken = function(token, message) {
                  throw this.unexpectedTokenError(token, message);
                };
                Parser2.prototype.tolerateUnexpectedToken = function(token, message) {
                  this.errorHandler.tolerate(this.unexpectedTokenError(token, message));
                };
                Parser2.prototype.collectComments = function() {
                  if (!this.config.comment) {
                    this.scanner.scanComments();
                  } else {
                    var comments = this.scanner.scanComments();
                    if (comments.length > 0 && this.delegate) {
                      for (var i = 0; i < comments.length; ++i) {
                        var e = comments[i];
                        var node = void 0;
                        node = {
                          type: e.multiLine ? "BlockComment" : "LineComment",
                          value: this.scanner.source.slice(e.slice[0], e.slice[1])
                        };
                        if (this.config.range) {
                          node.range = e.range;
                        }
                        if (this.config.loc) {
                          node.loc = e.loc;
                        }
                        var metadata = {
                          start: {
                            line: e.loc.start.line,
                            column: e.loc.start.column,
                            offset: e.range[0]
                          },
                          end: {
                            line: e.loc.end.line,
                            column: e.loc.end.column,
                            offset: e.range[1]
                          }
                        };
                        this.delegate(node, metadata);
                      }
                    }
                  }
                };
                Parser2.prototype.getTokenRaw = function(token) {
                  return this.scanner.source.slice(token.start, token.end);
                };
                Parser2.prototype.convertToken = function(token) {
                  var t = {
                    type: token_1.TokenName[token.type],
                    value: this.getTokenRaw(token)
                  };
                  if (this.config.range) {
                    t.range = [token.start, token.end];
                  }
                  if (this.config.loc) {
                    t.loc = {
                      start: {
                        line: this.startMarker.line,
                        column: this.startMarker.column
                      },
                      end: {
                        line: this.scanner.lineNumber,
                        column: this.scanner.index - this.scanner.lineStart
                      }
                    };
                  }
                  if (token.type === 9) {
                    var pattern = token.pattern;
                    var flags = token.flags;
                    t.regex = { pattern, flags };
                  }
                  return t;
                };
                Parser2.prototype.nextToken = function() {
                  var token = this.lookahead;
                  this.lastMarker.index = this.scanner.index;
                  this.lastMarker.line = this.scanner.lineNumber;
                  this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
                  this.collectComments();
                  if (this.scanner.index !== this.startMarker.index) {
                    this.startMarker.index = this.scanner.index;
                    this.startMarker.line = this.scanner.lineNumber;
                    this.startMarker.column = this.scanner.index - this.scanner.lineStart;
                  }
                  var next = this.scanner.lex();
                  this.hasLineTerminator = token.lineNumber !== next.lineNumber;
                  if (next && this.context.strict && next.type === 3) {
                    if (this.scanner.isStrictModeReservedWord(next.value)) {
                      next.type = 4;
                    }
                  }
                  this.lookahead = next;
                  if (this.config.tokens && next.type !== 2) {
                    this.tokens.push(this.convertToken(next));
                  }
                  return token;
                };
                Parser2.prototype.nextRegexToken = function() {
                  this.collectComments();
                  var token = this.scanner.scanRegExp();
                  if (this.config.tokens) {
                    this.tokens.pop();
                    this.tokens.push(this.convertToken(token));
                  }
                  this.lookahead = token;
                  this.nextToken();
                  return token;
                };
                Parser2.prototype.createNode = function() {
                  return {
                    index: this.startMarker.index,
                    line: this.startMarker.line,
                    column: this.startMarker.column
                  };
                };
                Parser2.prototype.startNode = function(token, lastLineStart) {
                  if (lastLineStart === void 0) {
                    lastLineStart = 0;
                  }
                  var column = token.start - token.lineStart;
                  var line = token.lineNumber;
                  if (column < 0) {
                    column += lastLineStart;
                    line--;
                  }
                  return {
                    index: token.start,
                    line,
                    column
                  };
                };
                Parser2.prototype.finalize = function(marker, node) {
                  if (this.config.range) {
                    node.range = [marker.index, this.lastMarker.index];
                  }
                  if (this.config.loc) {
                    node.loc = {
                      start: {
                        line: marker.line,
                        column: marker.column
                      },
                      end: {
                        line: this.lastMarker.line,
                        column: this.lastMarker.column
                      }
                    };
                    if (this.config.source) {
                      node.loc.source = this.config.source;
                    }
                  }
                  if (this.delegate) {
                    var metadata = {
                      start: {
                        line: marker.line,
                        column: marker.column,
                        offset: marker.index
                      },
                      end: {
                        line: this.lastMarker.line,
                        column: this.lastMarker.column,
                        offset: this.lastMarker.index
                      }
                    };
                    this.delegate(node, metadata);
                  }
                  return node;
                };
                Parser2.prototype.expect = function(value) {
                  var token = this.nextToken();
                  if (token.type !== 7 || token.value !== value) {
                    this.throwUnexpectedToken(token);
                  }
                };
                Parser2.prototype.expectCommaSeparator = function() {
                  if (this.config.tolerant) {
                    var token = this.lookahead;
                    if (token.type === 7 && token.value === ",") {
                      this.nextToken();
                    } else if (token.type === 7 && token.value === ";") {
                      this.nextToken();
                      this.tolerateUnexpectedToken(token);
                    } else {
                      this.tolerateUnexpectedToken(token, messages_1.Messages.UnexpectedToken);
                    }
                  } else {
                    this.expect(",");
                  }
                };
                Parser2.prototype.expectKeyword = function(keyword) {
                  var token = this.nextToken();
                  if (token.type !== 4 || token.value !== keyword) {
                    this.throwUnexpectedToken(token);
                  }
                };
                Parser2.prototype.match = function(value) {
                  return this.lookahead.type === 7 && this.lookahead.value === value;
                };
                Parser2.prototype.matchKeyword = function(keyword) {
                  return this.lookahead.type === 4 && this.lookahead.value === keyword;
                };
                Parser2.prototype.matchContextualKeyword = function(keyword) {
                  return this.lookahead.type === 3 && this.lookahead.value === keyword;
                };
                Parser2.prototype.matchAssign = function() {
                  if (this.lookahead.type !== 7) {
                    return false;
                  }
                  var op = this.lookahead.value;
                  return op === "=" || op === "*=" || op === "**=" || op === "/=" || op === "%=" || op === "+=" || op === "-=" || op === "<<=" || op === ">>=" || op === ">>>=" || op === "&=" || op === "^=" || op === "|=";
                };
                Parser2.prototype.isolateCoverGrammar = function(parseFunction) {
                  var previousIsBindingElement = this.context.isBindingElement;
                  var previousIsAssignmentTarget = this.context.isAssignmentTarget;
                  var previousFirstCoverInitializedNameError = this.context.firstCoverInitializedNameError;
                  this.context.isBindingElement = true;
                  this.context.isAssignmentTarget = true;
                  this.context.firstCoverInitializedNameError = null;
                  var result = parseFunction.call(this);
                  if (this.context.firstCoverInitializedNameError !== null) {
                    this.throwUnexpectedToken(this.context.firstCoverInitializedNameError);
                  }
                  this.context.isBindingElement = previousIsBindingElement;
                  this.context.isAssignmentTarget = previousIsAssignmentTarget;
                  this.context.firstCoverInitializedNameError = previousFirstCoverInitializedNameError;
                  return result;
                };
                Parser2.prototype.inheritCoverGrammar = function(parseFunction) {
                  var previousIsBindingElement = this.context.isBindingElement;
                  var previousIsAssignmentTarget = this.context.isAssignmentTarget;
                  var previousFirstCoverInitializedNameError = this.context.firstCoverInitializedNameError;
                  this.context.isBindingElement = true;
                  this.context.isAssignmentTarget = true;
                  this.context.firstCoverInitializedNameError = null;
                  var result = parseFunction.call(this);
                  this.context.isBindingElement = this.context.isBindingElement && previousIsBindingElement;
                  this.context.isAssignmentTarget = this.context.isAssignmentTarget && previousIsAssignmentTarget;
                  this.context.firstCoverInitializedNameError = previousFirstCoverInitializedNameError || this.context.firstCoverInitializedNameError;
                  return result;
                };
                Parser2.prototype.consumeSemicolon = function() {
                  if (this.match(";")) {
                    this.nextToken();
                  } else if (!this.hasLineTerminator) {
                    if (this.lookahead.type !== 2 && !this.match("}")) {
                      this.throwUnexpectedToken(this.lookahead);
                    }
                    this.lastMarker.index = this.startMarker.index;
                    this.lastMarker.line = this.startMarker.line;
                    this.lastMarker.column = this.startMarker.column;
                  }
                };
                Parser2.prototype.parsePrimaryExpression = function() {
                  var node = this.createNode();
                  var expr;
                  var token, raw;
                  switch (this.lookahead.type) {
                    case 3:
                      if ((this.context.isModule || this.context.await) && this.lookahead.value === "await") {
                        this.tolerateUnexpectedToken(this.lookahead);
                      }
                      expr = this.matchAsyncFunction() ? this.parseFunctionExpression() : this.finalize(node, new Node2.Identifier(this.nextToken().value));
                      break;
                    case 6:
                    case 8:
                      if (this.context.strict && this.lookahead.octal) {
                        this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.StrictOctalLiteral);
                      }
                      this.context.isAssignmentTarget = false;
                      this.context.isBindingElement = false;
                      token = this.nextToken();
                      raw = this.getTokenRaw(token);
                      expr = this.finalize(node, new Node2.Literal(token.value, raw));
                      break;
                    case 1:
                      this.context.isAssignmentTarget = false;
                      this.context.isBindingElement = false;
                      token = this.nextToken();
                      raw = this.getTokenRaw(token);
                      expr = this.finalize(node, new Node2.Literal(token.value === "true", raw));
                      break;
                    case 5:
                      this.context.isAssignmentTarget = false;
                      this.context.isBindingElement = false;
                      token = this.nextToken();
                      raw = this.getTokenRaw(token);
                      expr = this.finalize(node, new Node2.Literal(null, raw));
                      break;
                    case 10:
                      expr = this.parseTemplateLiteral();
                      break;
                    case 7:
                      switch (this.lookahead.value) {
                        case "(":
                          this.context.isBindingElement = false;
                          expr = this.inheritCoverGrammar(this.parseGroupExpression);
                          break;
                        case "[":
                          expr = this.inheritCoverGrammar(this.parseArrayInitializer);
                          break;
                        case "{":
                          expr = this.inheritCoverGrammar(this.parseObjectInitializer);
                          break;
                        case "/":
                        case "/=":
                          this.context.isAssignmentTarget = false;
                          this.context.isBindingElement = false;
                          this.scanner.index = this.startMarker.index;
                          token = this.nextRegexToken();
                          raw = this.getTokenRaw(token);
                          expr = this.finalize(node, new Node2.RegexLiteral(token.regex, raw, token.pattern, token.flags));
                          break;
                        default:
                          expr = this.throwUnexpectedToken(this.nextToken());
                      }
                      break;
                    case 4:
                      if (!this.context.strict && this.context.allowYield && this.matchKeyword("yield")) {
                        expr = this.parseIdentifierName();
                      } else if (!this.context.strict && this.matchKeyword("let")) {
                        expr = this.finalize(node, new Node2.Identifier(this.nextToken().value));
                      } else {
                        this.context.isAssignmentTarget = false;
                        this.context.isBindingElement = false;
                        if (this.matchKeyword("function")) {
                          expr = this.parseFunctionExpression();
                        } else if (this.matchKeyword("this")) {
                          this.nextToken();
                          expr = this.finalize(node, new Node2.ThisExpression());
                        } else if (this.matchKeyword("class")) {
                          expr = this.parseClassExpression();
                        } else {
                          expr = this.throwUnexpectedToken(this.nextToken());
                        }
                      }
                      break;
                    default:
                      expr = this.throwUnexpectedToken(this.nextToken());
                  }
                  return expr;
                };
                Parser2.prototype.parseSpreadElement = function() {
                  var node = this.createNode();
                  this.expect("...");
                  var arg = this.inheritCoverGrammar(this.parseAssignmentExpression);
                  return this.finalize(node, new Node2.SpreadElement(arg));
                };
                Parser2.prototype.parseArrayInitializer = function() {
                  var node = this.createNode();
                  var elements = [];
                  this.expect("[");
                  while (!this.match("]")) {
                    if (this.match(",")) {
                      this.nextToken();
                      elements.push(null);
                    } else if (this.match("...")) {
                      var element2 = this.parseSpreadElement();
                      if (!this.match("]")) {
                        this.context.isAssignmentTarget = false;
                        this.context.isBindingElement = false;
                        this.expect(",");
                      }
                      elements.push(element2);
                    } else {
                      elements.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
                      if (!this.match("]")) {
                        this.expect(",");
                      }
                    }
                  }
                  this.expect("]");
                  return this.finalize(node, new Node2.ArrayExpression(elements));
                };
                Parser2.prototype.parsePropertyMethod = function(params) {
                  this.context.isAssignmentTarget = false;
                  this.context.isBindingElement = false;
                  var previousStrict = this.context.strict;
                  var previousAllowStrictDirective = this.context.allowStrictDirective;
                  this.context.allowStrictDirective = params.simple;
                  var body = this.isolateCoverGrammar(this.parseFunctionSourceElements);
                  if (this.context.strict && params.firstRestricted) {
                    this.tolerateUnexpectedToken(params.firstRestricted, params.message);
                  }
                  if (this.context.strict && params.stricted) {
                    this.tolerateUnexpectedToken(params.stricted, params.message);
                  }
                  this.context.strict = previousStrict;
                  this.context.allowStrictDirective = previousAllowStrictDirective;
                  return body;
                };
                Parser2.prototype.parsePropertyMethodFunction = function() {
                  var isGenerator = false;
                  var node = this.createNode();
                  var previousAllowYield = this.context.allowYield;
                  this.context.allowYield = true;
                  var params = this.parseFormalParameters();
                  var method = this.parsePropertyMethod(params);
                  this.context.allowYield = previousAllowYield;
                  return this.finalize(node, new Node2.FunctionExpression(null, params.params, method, isGenerator));
                };
                Parser2.prototype.parsePropertyMethodAsyncFunction = function() {
                  var node = this.createNode();
                  var previousAllowYield = this.context.allowYield;
                  var previousAwait = this.context.await;
                  this.context.allowYield = false;
                  this.context.await = true;
                  var params = this.parseFormalParameters();
                  var method = this.parsePropertyMethod(params);
                  this.context.allowYield = previousAllowYield;
                  this.context.await = previousAwait;
                  return this.finalize(node, new Node2.AsyncFunctionExpression(null, params.params, method));
                };
                Parser2.prototype.parseObjectPropertyKey = function() {
                  var node = this.createNode();
                  var token = this.nextToken();
                  var key;
                  switch (token.type) {
                    case 8:
                    case 6:
                      if (this.context.strict && token.octal) {
                        this.tolerateUnexpectedToken(token, messages_1.Messages.StrictOctalLiteral);
                      }
                      var raw = this.getTokenRaw(token);
                      key = this.finalize(node, new Node2.Literal(token.value, raw));
                      break;
                    case 3:
                    case 1:
                    case 5:
                    case 4:
                      key = this.finalize(node, new Node2.Identifier(token.value));
                      break;
                    case 7:
                      if (token.value === "[") {
                        key = this.isolateCoverGrammar(this.parseAssignmentExpression);
                        this.expect("]");
                      } else {
                        key = this.throwUnexpectedToken(token);
                      }
                      break;
                    default:
                      key = this.throwUnexpectedToken(token);
                  }
                  return key;
                };
                Parser2.prototype.isPropertyKey = function(key, value) {
                  return key.type === syntax_1.Syntax.Identifier && key.name === value || key.type === syntax_1.Syntax.Literal && key.value === value;
                };
                Parser2.prototype.parseObjectProperty = function(hasProto) {
                  var node = this.createNode();
                  var token = this.lookahead;
                  var kind;
                  var key = null;
                  var value = null;
                  var computed = false;
                  var method = false;
                  var shorthand = false;
                  var isAsync = false;
                  if (token.type === 3) {
                    var id = token.value;
                    this.nextToken();
                    computed = this.match("[");
                    isAsync = !this.hasLineTerminator && id === "async" && !this.match(":") && !this.match("(") && !this.match("*") && !this.match(",");
                    key = isAsync ? this.parseObjectPropertyKey() : this.finalize(node, new Node2.Identifier(id));
                  } else if (this.match("*")) {
                    this.nextToken();
                  } else {
                    computed = this.match("[");
                    key = this.parseObjectPropertyKey();
                  }
                  var lookaheadPropertyKey = this.qualifiedPropertyName(this.lookahead);
                  if (token.type === 3 && !isAsync && token.value === "get" && lookaheadPropertyKey) {
                    kind = "get";
                    computed = this.match("[");
                    key = this.parseObjectPropertyKey();
                    this.context.allowYield = false;
                    value = this.parseGetterMethod();
                  } else if (token.type === 3 && !isAsync && token.value === "set" && lookaheadPropertyKey) {
                    kind = "set";
                    computed = this.match("[");
                    key = this.parseObjectPropertyKey();
                    value = this.parseSetterMethod();
                  } else if (token.type === 7 && token.value === "*" && lookaheadPropertyKey) {
                    kind = "init";
                    computed = this.match("[");
                    key = this.parseObjectPropertyKey();
                    value = this.parseGeneratorMethod();
                    method = true;
                  } else {
                    if (!key) {
                      this.throwUnexpectedToken(this.lookahead);
                    }
                    kind = "init";
                    if (this.match(":") && !isAsync) {
                      if (!computed && this.isPropertyKey(key, "__proto__")) {
                        if (hasProto.value) {
                          this.tolerateError(messages_1.Messages.DuplicateProtoProperty);
                        }
                        hasProto.value = true;
                      }
                      this.nextToken();
                      value = this.inheritCoverGrammar(this.parseAssignmentExpression);
                    } else if (this.match("(")) {
                      value = isAsync ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction();
                      method = true;
                    } else if (token.type === 3) {
                      var id = this.finalize(node, new Node2.Identifier(token.value));
                      if (this.match("=")) {
                        this.context.firstCoverInitializedNameError = this.lookahead;
                        this.nextToken();
                        shorthand = true;
                        var init2 = this.isolateCoverGrammar(this.parseAssignmentExpression);
                        value = this.finalize(node, new Node2.AssignmentPattern(id, init2));
                      } else {
                        shorthand = true;
                        value = id;
                      }
                    } else {
                      this.throwUnexpectedToken(this.nextToken());
                    }
                  }
                  return this.finalize(node, new Node2.Property(kind, key, computed, value, method, shorthand));
                };
                Parser2.prototype.parseObjectInitializer = function() {
                  var node = this.createNode();
                  this.expect("{");
                  var properties = [];
                  var hasProto = { value: false };
                  while (!this.match("}")) {
                    properties.push(this.parseObjectProperty(hasProto));
                    if (!this.match("}")) {
                      this.expectCommaSeparator();
                    }
                  }
                  this.expect("}");
                  return this.finalize(node, new Node2.ObjectExpression(properties));
                };
                Parser2.prototype.parseTemplateHead = function() {
                  assert_1.assert(this.lookahead.head, "Template literal must start with a template head");
                  var node = this.createNode();
                  var token = this.nextToken();
                  var raw = token.value;
                  var cooked = token.cooked;
                  return this.finalize(node, new Node2.TemplateElement({ raw, cooked }, token.tail));
                };
                Parser2.prototype.parseTemplateElement = function() {
                  if (this.lookahead.type !== 10) {
                    this.throwUnexpectedToken();
                  }
                  var node = this.createNode();
                  var token = this.nextToken();
                  var raw = token.value;
                  var cooked = token.cooked;
                  return this.finalize(node, new Node2.TemplateElement({ raw, cooked }, token.tail));
                };
                Parser2.prototype.parseTemplateLiteral = function() {
                  var node = this.createNode();
                  var expressions = [];
                  var quasis = [];
                  var quasi = this.parseTemplateHead();
                  quasis.push(quasi);
                  while (!quasi.tail) {
                    expressions.push(this.parseExpression());
                    quasi = this.parseTemplateElement();
                    quasis.push(quasi);
                  }
                  return this.finalize(node, new Node2.TemplateLiteral(quasis, expressions));
                };
                Parser2.prototype.reinterpretExpressionAsPattern = function(expr) {
                  switch (expr.type) {
                    case syntax_1.Syntax.Identifier:
                    case syntax_1.Syntax.MemberExpression:
                    case syntax_1.Syntax.RestElement:
                    case syntax_1.Syntax.AssignmentPattern:
                      break;
                    case syntax_1.Syntax.SpreadElement:
                      expr.type = syntax_1.Syntax.RestElement;
                      this.reinterpretExpressionAsPattern(expr.argument);
                      break;
                    case syntax_1.Syntax.ArrayExpression:
                      expr.type = syntax_1.Syntax.ArrayPattern;
                      for (var i = 0; i < expr.elements.length; i++) {
                        if (expr.elements[i] !== null) {
                          this.reinterpretExpressionAsPattern(expr.elements[i]);
                        }
                      }
                      break;
                    case syntax_1.Syntax.ObjectExpression:
                      expr.type = syntax_1.Syntax.ObjectPattern;
                      for (var i = 0; i < expr.properties.length; i++) {
                        this.reinterpretExpressionAsPattern(expr.properties[i].value);
                      }
                      break;
                    case syntax_1.Syntax.AssignmentExpression:
                      expr.type = syntax_1.Syntax.AssignmentPattern;
                      delete expr.operator;
                      this.reinterpretExpressionAsPattern(expr.left);
                      break;
                    default:
                      break;
                  }
                };
                Parser2.prototype.parseGroupExpression = function() {
                  var expr;
                  this.expect("(");
                  if (this.match(")")) {
                    this.nextToken();
                    if (!this.match("=>")) {
                      this.expect("=>");
                    }
                    expr = {
                      type: ArrowParameterPlaceHolder,
                      params: [],
                      async: false
                    };
                  } else {
                    var startToken = this.lookahead;
                    var params = [];
                    if (this.match("...")) {
                      expr = this.parseRestElement(params);
                      this.expect(")");
                      if (!this.match("=>")) {
                        this.expect("=>");
                      }
                      expr = {
                        type: ArrowParameterPlaceHolder,
                        params: [expr],
                        async: false
                      };
                    } else {
                      var arrow = false;
                      this.context.isBindingElement = true;
                      expr = this.inheritCoverGrammar(this.parseAssignmentExpression);
                      if (this.match(",")) {
                        var expressions = [];
                        this.context.isAssignmentTarget = false;
                        expressions.push(expr);
                        while (this.lookahead.type !== 2) {
                          if (!this.match(",")) {
                            break;
                          }
                          this.nextToken();
                          if (this.match(")")) {
                            this.nextToken();
                            for (var i = 0; i < expressions.length; i++) {
                              this.reinterpretExpressionAsPattern(expressions[i]);
                            }
                            arrow = true;
                            expr = {
                              type: ArrowParameterPlaceHolder,
                              params: expressions,
                              async: false
                            };
                          } else if (this.match("...")) {
                            if (!this.context.isBindingElement) {
                              this.throwUnexpectedToken(this.lookahead);
                            }
                            expressions.push(this.parseRestElement(params));
                            this.expect(")");
                            if (!this.match("=>")) {
                              this.expect("=>");
                            }
                            this.context.isBindingElement = false;
                            for (var i = 0; i < expressions.length; i++) {
                              this.reinterpretExpressionAsPattern(expressions[i]);
                            }
                            arrow = true;
                            expr = {
                              type: ArrowParameterPlaceHolder,
                              params: expressions,
                              async: false
                            };
                          } else {
                            expressions.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
                          }
                          if (arrow) {
                            break;
                          }
                        }
                        if (!arrow) {
                          expr = this.finalize(this.startNode(startToken), new Node2.SequenceExpression(expressions));
                        }
                      }
                      if (!arrow) {
                        this.expect(")");
                        if (this.match("=>")) {
                          if (expr.type === syntax_1.Syntax.Identifier && expr.name === "yield") {
                            arrow = true;
                            expr = {
                              type: ArrowParameterPlaceHolder,
                              params: [expr],
                              async: false
                            };
                          }
                          if (!arrow) {
                            if (!this.context.isBindingElement) {
                              this.throwUnexpectedToken(this.lookahead);
                            }
                            if (expr.type === syntax_1.Syntax.SequenceExpression) {
                              for (var i = 0; i < expr.expressions.length; i++) {
                                this.reinterpretExpressionAsPattern(expr.expressions[i]);
                              }
                            } else {
                              this.reinterpretExpressionAsPattern(expr);
                            }
                            var parameters = expr.type === syntax_1.Syntax.SequenceExpression ? expr.expressions : [expr];
                            expr = {
                              type: ArrowParameterPlaceHolder,
                              params: parameters,
                              async: false
                            };
                          }
                        }
                        this.context.isBindingElement = false;
                      }
                    }
                  }
                  return expr;
                };
                Parser2.prototype.parseArguments = function() {
                  this.expect("(");
                  var args = [];
                  if (!this.match(")")) {
                    while (true) {
                      var expr = this.match("...") ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAssignmentExpression);
                      args.push(expr);
                      if (this.match(")")) {
                        break;
                      }
                      this.expectCommaSeparator();
                      if (this.match(")")) {
                        break;
                      }
                    }
                  }
                  this.expect(")");
                  return args;
                };
                Parser2.prototype.isIdentifierName = function(token) {
                  return token.type === 3 || token.type === 4 || token.type === 1 || token.type === 5;
                };
                Parser2.prototype.parseIdentifierName = function() {
                  var node = this.createNode();
                  var token = this.nextToken();
                  if (!this.isIdentifierName(token)) {
                    this.throwUnexpectedToken(token);
                  }
                  return this.finalize(node, new Node2.Identifier(token.value));
                };
                Parser2.prototype.parseNewExpression = function() {
                  var node = this.createNode();
                  var id = this.parseIdentifierName();
                  assert_1.assert(id.name === "new", "New expression must start with `new`");
                  var expr;
                  if (this.match(".")) {
                    this.nextToken();
                    if (this.lookahead.type === 3 && this.context.inFunctionBody && this.lookahead.value === "target") {
                      var property = this.parseIdentifierName();
                      expr = new Node2.MetaProperty(id, property);
                    } else {
                      this.throwUnexpectedToken(this.lookahead);
                    }
                  } else {
                    var callee = this.isolateCoverGrammar(this.parseLeftHandSideExpression);
                    var args = this.match("(") ? this.parseArguments() : [];
                    expr = new Node2.NewExpression(callee, args);
                    this.context.isAssignmentTarget = false;
                    this.context.isBindingElement = false;
                  }
                  return this.finalize(node, expr);
                };
                Parser2.prototype.parseAsyncArgument = function() {
                  var arg = this.parseAssignmentExpression();
                  this.context.firstCoverInitializedNameError = null;
                  return arg;
                };
                Parser2.prototype.parseAsyncArguments = function() {
                  this.expect("(");
                  var args = [];
                  if (!this.match(")")) {
                    while (true) {
                      var expr = this.match("...") ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAsyncArgument);
                      args.push(expr);
                      if (this.match(")")) {
                        break;
                      }
                      this.expectCommaSeparator();
                      if (this.match(")")) {
                        break;
                      }
                    }
                  }
                  this.expect(")");
                  return args;
                };
                Parser2.prototype.parseLeftHandSideExpressionAllowCall = function() {
                  var startToken = this.lookahead;
                  var maybeAsync = this.matchContextualKeyword("async");
                  var previousAllowIn = this.context.allowIn;
                  this.context.allowIn = true;
                  var expr;
                  if (this.matchKeyword("super") && this.context.inFunctionBody) {
                    expr = this.createNode();
                    this.nextToken();
                    expr = this.finalize(expr, new Node2.Super());
                    if (!this.match("(") && !this.match(".") && !this.match("[")) {
                      this.throwUnexpectedToken(this.lookahead);
                    }
                  } else {
                    expr = this.inheritCoverGrammar(this.matchKeyword("new") ? this.parseNewExpression : this.parsePrimaryExpression);
                  }
                  while (true) {
                    if (this.match(".")) {
                      this.context.isBindingElement = false;
                      this.context.isAssignmentTarget = true;
                      this.expect(".");
                      var property = this.parseIdentifierName();
                      expr = this.finalize(this.startNode(startToken), new Node2.StaticMemberExpression(expr, property));
                    } else if (this.match("(")) {
                      var asyncArrow = maybeAsync && startToken.lineNumber === this.lookahead.lineNumber;
                      this.context.isBindingElement = false;
                      this.context.isAssignmentTarget = false;
                      var args = asyncArrow ? this.parseAsyncArguments() : this.parseArguments();
                      expr = this.finalize(this.startNode(startToken), new Node2.CallExpression(expr, args));
                      if (asyncArrow && this.match("=>")) {
                        for (var i = 0; i < args.length; ++i) {
                          this.reinterpretExpressionAsPattern(args[i]);
                        }
                        expr = {
                          type: ArrowParameterPlaceHolder,
                          params: args,
                          async: true
                        };
                      }
                    } else if (this.match("[")) {
                      this.context.isBindingElement = false;
                      this.context.isAssignmentTarget = true;
                      this.expect("[");
                      var property = this.isolateCoverGrammar(this.parseExpression);
                      this.expect("]");
                      expr = this.finalize(this.startNode(startToken), new Node2.ComputedMemberExpression(expr, property));
                    } else if (this.lookahead.type === 10 && this.lookahead.head) {
                      var quasi = this.parseTemplateLiteral();
                      expr = this.finalize(this.startNode(startToken), new Node2.TaggedTemplateExpression(expr, quasi));
                    } else {
                      break;
                    }
                  }
                  this.context.allowIn = previousAllowIn;
                  return expr;
                };
                Parser2.prototype.parseSuper = function() {
                  var node = this.createNode();
                  this.expectKeyword("super");
                  if (!this.match("[") && !this.match(".")) {
                    this.throwUnexpectedToken(this.lookahead);
                  }
                  return this.finalize(node, new Node2.Super());
                };
                Parser2.prototype.parseLeftHandSideExpression = function() {
                  assert_1.assert(this.context.allowIn, "callee of new expression always allow in keyword.");
                  var node = this.startNode(this.lookahead);
                  var expr = this.matchKeyword("super") && this.context.inFunctionBody ? this.parseSuper() : this.inheritCoverGrammar(this.matchKeyword("new") ? this.parseNewExpression : this.parsePrimaryExpression);
                  while (true) {
                    if (this.match("[")) {
                      this.context.isBindingElement = false;
                      this.context.isAssignmentTarget = true;
                      this.expect("[");
                      var property = this.isolateCoverGrammar(this.parseExpression);
                      this.expect("]");
                      expr = this.finalize(node, new Node2.ComputedMemberExpression(expr, property));
                    } else if (this.match(".")) {
                      this.context.isBindingElement = false;
                      this.context.isAssignmentTarget = true;
                      this.expect(".");
                      var property = this.parseIdentifierName();
                      expr = this.finalize(node, new Node2.StaticMemberExpression(expr, property));
                    } else if (this.lookahead.type === 10 && this.lookahead.head) {
                      var quasi = this.parseTemplateLiteral();
                      expr = this.finalize(node, new Node2.TaggedTemplateExpression(expr, quasi));
                    } else {
                      break;
                    }
                  }
                  return expr;
                };
                Parser2.prototype.parseUpdateExpression = function() {
                  var expr;
                  var startToken = this.lookahead;
                  if (this.match("++") || this.match("--")) {
                    var node = this.startNode(startToken);
                    var token = this.nextToken();
                    expr = this.inheritCoverGrammar(this.parseUnaryExpression);
                    if (this.context.strict && expr.type === syntax_1.Syntax.Identifier && this.scanner.isRestrictedWord(expr.name)) {
                      this.tolerateError(messages_1.Messages.StrictLHSPrefix);
                    }
                    if (!this.context.isAssignmentTarget) {
                      this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
                    }
                    var prefix = true;
                    expr = this.finalize(node, new Node2.UpdateExpression(token.value, expr, prefix));
                    this.context.isAssignmentTarget = false;
                    this.context.isBindingElement = false;
                  } else {
                    expr = this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
                    if (!this.hasLineTerminator && this.lookahead.type === 7) {
                      if (this.match("++") || this.match("--")) {
                        if (this.context.strict && expr.type === syntax_1.Syntax.Identifier && this.scanner.isRestrictedWord(expr.name)) {
                          this.tolerateError(messages_1.Messages.StrictLHSPostfix);
                        }
                        if (!this.context.isAssignmentTarget) {
                          this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
                        }
                        this.context.isAssignmentTarget = false;
                        this.context.isBindingElement = false;
                        var operator = this.nextToken().value;
                        var prefix = false;
                        expr = this.finalize(this.startNode(startToken), new Node2.UpdateExpression(operator, expr, prefix));
                      }
                    }
                  }
                  return expr;
                };
                Parser2.prototype.parseAwaitExpression = function() {
                  var node = this.createNode();
                  this.nextToken();
                  var argument = this.parseUnaryExpression();
                  return this.finalize(node, new Node2.AwaitExpression(argument));
                };
                Parser2.prototype.parseUnaryExpression = function() {
                  var expr;
                  if (this.match("+") || this.match("-") || this.match("~") || this.match("!") || this.matchKeyword("delete") || this.matchKeyword("void") || this.matchKeyword("typeof")) {
                    var node = this.startNode(this.lookahead);
                    var token = this.nextToken();
                    expr = this.inheritCoverGrammar(this.parseUnaryExpression);
                    expr = this.finalize(node, new Node2.UnaryExpression(token.value, expr));
                    if (this.context.strict && expr.operator === "delete" && expr.argument.type === syntax_1.Syntax.Identifier) {
                      this.tolerateError(messages_1.Messages.StrictDelete);
                    }
                    this.context.isAssignmentTarget = false;
                    this.context.isBindingElement = false;
                  } else if (this.context.await && this.matchContextualKeyword("await")) {
                    expr = this.parseAwaitExpression();
                  } else {
                    expr = this.parseUpdateExpression();
                  }
                  return expr;
                };
                Parser2.prototype.parseExponentiationExpression = function() {
                  var startToken = this.lookahead;
                  var expr = this.inheritCoverGrammar(this.parseUnaryExpression);
                  if (expr.type !== syntax_1.Syntax.UnaryExpression && this.match("**")) {
                    this.nextToken();
                    this.context.isAssignmentTarget = false;
                    this.context.isBindingElement = false;
                    var left = expr;
                    var right = this.isolateCoverGrammar(this.parseExponentiationExpression);
                    expr = this.finalize(this.startNode(startToken), new Node2.BinaryExpression("**", left, right));
                  }
                  return expr;
                };
                Parser2.prototype.binaryPrecedence = function(token) {
                  var op = token.value;
                  var precedence;
                  if (token.type === 7) {
                    precedence = this.operatorPrecedence[op] || 0;
                  } else if (token.type === 4) {
                    precedence = op === "instanceof" || this.context.allowIn && op === "in" ? 7 : 0;
                  } else {
                    precedence = 0;
                  }
                  return precedence;
                };
                Parser2.prototype.parseBinaryExpression = function() {
                  var startToken = this.lookahead;
                  var expr = this.inheritCoverGrammar(this.parseExponentiationExpression);
                  var token = this.lookahead;
                  var prec = this.binaryPrecedence(token);
                  if (prec > 0) {
                    this.nextToken();
                    this.context.isAssignmentTarget = false;
                    this.context.isBindingElement = false;
                    var markers = [startToken, this.lookahead];
                    var left = expr;
                    var right = this.isolateCoverGrammar(this.parseExponentiationExpression);
                    var stack = [left, token.value, right];
                    var precedences = [prec];
                    while (true) {
                      prec = this.binaryPrecedence(this.lookahead);
                      if (prec <= 0) {
                        break;
                      }
                      while (stack.length > 2 && prec <= precedences[precedences.length - 1]) {
                        right = stack.pop();
                        var operator = stack.pop();
                        precedences.pop();
                        left = stack.pop();
                        markers.pop();
                        var node = this.startNode(markers[markers.length - 1]);
                        stack.push(this.finalize(node, new Node2.BinaryExpression(operator, left, right)));
                      }
                      stack.push(this.nextToken().value);
                      precedences.push(prec);
                      markers.push(this.lookahead);
                      stack.push(this.isolateCoverGrammar(this.parseExponentiationExpression));
                    }
                    var i = stack.length - 1;
                    expr = stack[i];
                    var lastMarker = markers.pop();
                    while (i > 1) {
                      var marker = markers.pop();
                      var lastLineStart = lastMarker && lastMarker.lineStart;
                      var node = this.startNode(marker, lastLineStart);
                      var operator = stack[i - 1];
                      expr = this.finalize(node, new Node2.BinaryExpression(operator, stack[i - 2], expr));
                      i -= 2;
                      lastMarker = marker;
                    }
                  }
                  return expr;
                };
                Parser2.prototype.parseConditionalExpression = function() {
                  var startToken = this.lookahead;
                  var expr = this.inheritCoverGrammar(this.parseBinaryExpression);
                  if (this.match("?")) {
                    this.nextToken();
                    var previousAllowIn = this.context.allowIn;
                    this.context.allowIn = true;
                    var consequent = this.isolateCoverGrammar(this.parseAssignmentExpression);
                    this.context.allowIn = previousAllowIn;
                    this.expect(":");
                    var alternate = this.isolateCoverGrammar(this.parseAssignmentExpression);
                    expr = this.finalize(this.startNode(startToken), new Node2.ConditionalExpression(expr, consequent, alternate));
                    this.context.isAssignmentTarget = false;
                    this.context.isBindingElement = false;
                  }
                  return expr;
                };
                Parser2.prototype.checkPatternParam = function(options, param) {
                  switch (param.type) {
                    case syntax_1.Syntax.Identifier:
                      this.validateParam(options, param, param.name);
                      break;
                    case syntax_1.Syntax.RestElement:
                      this.checkPatternParam(options, param.argument);
                      break;
                    case syntax_1.Syntax.AssignmentPattern:
                      this.checkPatternParam(options, param.left);
                      break;
                    case syntax_1.Syntax.ArrayPattern:
                      for (var i = 0; i < param.elements.length; i++) {
                        if (param.elements[i] !== null) {
                          this.checkPatternParam(options, param.elements[i]);
                        }
                      }
                      break;
                    case syntax_1.Syntax.ObjectPattern:
                      for (var i = 0; i < param.properties.length; i++) {
                        this.checkPatternParam(options, param.properties[i].value);
                      }
                      break;
                    default:
                      break;
                  }
                  options.simple = options.simple && param instanceof Node2.Identifier;
                };
                Parser2.prototype.reinterpretAsCoverFormalsList = function(expr) {
                  var params = [expr];
                  var options;
                  var asyncArrow = false;
                  switch (expr.type) {
                    case syntax_1.Syntax.Identifier:
                      break;
                    case ArrowParameterPlaceHolder:
                      params = expr.params;
                      asyncArrow = expr.async;
                      break;
                    default:
                      return null;
                  }
                  options = {
                    simple: true,
                    paramSet: {}
                  };
                  for (var i = 0; i < params.length; ++i) {
                    var param = params[i];
                    if (param.type === syntax_1.Syntax.AssignmentPattern) {
                      if (param.right.type === syntax_1.Syntax.YieldExpression) {
                        if (param.right.argument) {
                          this.throwUnexpectedToken(this.lookahead);
                        }
                        param.right.type = syntax_1.Syntax.Identifier;
                        param.right.name = "yield";
                        delete param.right.argument;
                        delete param.right.delegate;
                      }
                    } else if (asyncArrow && param.type === syntax_1.Syntax.Identifier && param.name === "await") {
                      this.throwUnexpectedToken(this.lookahead);
                    }
                    this.checkPatternParam(options, param);
                    params[i] = param;
                  }
                  if (this.context.strict || !this.context.allowYield) {
                    for (var i = 0; i < params.length; ++i) {
                      var param = params[i];
                      if (param.type === syntax_1.Syntax.YieldExpression) {
                        this.throwUnexpectedToken(this.lookahead);
                      }
                    }
                  }
                  if (options.message === messages_1.Messages.StrictParamDupe) {
                    var token = this.context.strict ? options.stricted : options.firstRestricted;
                    this.throwUnexpectedToken(token, options.message);
                  }
                  return {
                    simple: options.simple,
                    params,
                    stricted: options.stricted,
                    firstRestricted: options.firstRestricted,
                    message: options.message
                  };
                };
                Parser2.prototype.parseAssignmentExpression = function() {
                  var expr;
                  if (!this.context.allowYield && this.matchKeyword("yield")) {
                    expr = this.parseYieldExpression();
                  } else {
                    var startToken = this.lookahead;
                    var token = startToken;
                    expr = this.parseConditionalExpression();
                    if (token.type === 3 && token.lineNumber === this.lookahead.lineNumber && token.value === "async") {
                      if (this.lookahead.type === 3 || this.matchKeyword("yield")) {
                        var arg = this.parsePrimaryExpression();
                        this.reinterpretExpressionAsPattern(arg);
                        expr = {
                          type: ArrowParameterPlaceHolder,
                          params: [arg],
                          async: true
                        };
                      }
                    }
                    if (expr.type === ArrowParameterPlaceHolder || this.match("=>")) {
                      this.context.isAssignmentTarget = false;
                      this.context.isBindingElement = false;
                      var isAsync = expr.async;
                      var list = this.reinterpretAsCoverFormalsList(expr);
                      if (list) {
                        if (this.hasLineTerminator) {
                          this.tolerateUnexpectedToken(this.lookahead);
                        }
                        this.context.firstCoverInitializedNameError = null;
                        var previousStrict = this.context.strict;
                        var previousAllowStrictDirective = this.context.allowStrictDirective;
                        this.context.allowStrictDirective = list.simple;
                        var previousAllowYield = this.context.allowYield;
                        var previousAwait = this.context.await;
                        this.context.allowYield = true;
                        this.context.await = isAsync;
                        var node = this.startNode(startToken);
                        this.expect("=>");
                        var body = void 0;
                        if (this.match("{")) {
                          var previousAllowIn = this.context.allowIn;
                          this.context.allowIn = true;
                          body = this.parseFunctionSourceElements();
                          this.context.allowIn = previousAllowIn;
                        } else {
                          body = this.isolateCoverGrammar(this.parseAssignmentExpression);
                        }
                        var expression = body.type !== syntax_1.Syntax.BlockStatement;
                        if (this.context.strict && list.firstRestricted) {
                          this.throwUnexpectedToken(list.firstRestricted, list.message);
                        }
                        if (this.context.strict && list.stricted) {
                          this.tolerateUnexpectedToken(list.stricted, list.message);
                        }
                        expr = isAsync ? this.finalize(node, new Node2.AsyncArrowFunctionExpression(list.params, body, expression)) : this.finalize(node, new Node2.ArrowFunctionExpression(list.params, body, expression));
                        this.context.strict = previousStrict;
                        this.context.allowStrictDirective = previousAllowStrictDirective;
                        this.context.allowYield = previousAllowYield;
                        this.context.await = previousAwait;
                      }
                    } else {
                      if (this.matchAssign()) {
                        if (!this.context.isAssignmentTarget) {
                          this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
                        }
                        if (this.context.strict && expr.type === syntax_1.Syntax.Identifier) {
                          var id = expr;
                          if (this.scanner.isRestrictedWord(id.name)) {
                            this.tolerateUnexpectedToken(token, messages_1.Messages.StrictLHSAssignment);
                          }
                          if (this.scanner.isStrictModeReservedWord(id.name)) {
                            this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
                          }
                        }
                        if (!this.match("=")) {
                          this.context.isAssignmentTarget = false;
                          this.context.isBindingElement = false;
                        } else {
                          this.reinterpretExpressionAsPattern(expr);
                        }
                        token = this.nextToken();
                        var operator = token.value;
                        var right = this.isolateCoverGrammar(this.parseAssignmentExpression);
                        expr = this.finalize(this.startNode(startToken), new Node2.AssignmentExpression(operator, expr, right));
                        this.context.firstCoverInitializedNameError = null;
                      }
                    }
                  }
                  return expr;
                };
                Parser2.prototype.parseExpression = function() {
                  var startToken = this.lookahead;
                  var expr = this.isolateCoverGrammar(this.parseAssignmentExpression);
                  if (this.match(",")) {
                    var expressions = [];
                    expressions.push(expr);
                    while (this.lookahead.type !== 2) {
                      if (!this.match(",")) {
                        break;
                      }
                      this.nextToken();
                      expressions.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
                    }
                    expr = this.finalize(this.startNode(startToken), new Node2.SequenceExpression(expressions));
                  }
                  return expr;
                };
                Parser2.prototype.parseStatementListItem = function() {
                  var statement;
                  this.context.isAssignmentTarget = true;
                  this.context.isBindingElement = true;
                  if (this.lookahead.type === 4) {
                    switch (this.lookahead.value) {
                      case "export":
                        if (!this.context.isModule) {
                          this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.IllegalExportDeclaration);
                        }
                        statement = this.parseExportDeclaration();
                        break;
                      case "import":
                        if (!this.context.isModule) {
                          this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.IllegalImportDeclaration);
                        }
                        statement = this.parseImportDeclaration();
                        break;
                      case "const":
                        statement = this.parseLexicalDeclaration({ inFor: false });
                        break;
                      case "function":
                        statement = this.parseFunctionDeclaration();
                        break;
                      case "class":
                        statement = this.parseClassDeclaration();
                        break;
                      case "let":
                        statement = this.isLexicalDeclaration() ? this.parseLexicalDeclaration({ inFor: false }) : this.parseStatement();
                        break;
                      default:
                        statement = this.parseStatement();
                        break;
                    }
                  } else {
                    statement = this.parseStatement();
                  }
                  return statement;
                };
                Parser2.prototype.parseBlock = function() {
                  var node = this.createNode();
                  this.expect("{");
                  var block = [];
                  while (true) {
                    if (this.match("}")) {
                      break;
                    }
                    block.push(this.parseStatementListItem());
                  }
                  this.expect("}");
                  return this.finalize(node, new Node2.BlockStatement(block));
                };
                Parser2.prototype.parseLexicalBinding = function(kind, options) {
                  var node = this.createNode();
                  var params = [];
                  var id = this.parsePattern(params, kind);
                  if (this.context.strict && id.type === syntax_1.Syntax.Identifier) {
                    if (this.scanner.isRestrictedWord(id.name)) {
                      this.tolerateError(messages_1.Messages.StrictVarName);
                    }
                  }
                  var init2 = null;
                  if (kind === "const") {
                    if (!this.matchKeyword("in") && !this.matchContextualKeyword("of")) {
                      if (this.match("=")) {
                        this.nextToken();
                        init2 = this.isolateCoverGrammar(this.parseAssignmentExpression);
                      } else {
                        this.throwError(messages_1.Messages.DeclarationMissingInitializer, "const");
                      }
                    }
                  } else if (!options.inFor && id.type !== syntax_1.Syntax.Identifier || this.match("=")) {
                    this.expect("=");
                    init2 = this.isolateCoverGrammar(this.parseAssignmentExpression);
                  }
                  return this.finalize(node, new Node2.VariableDeclarator(id, init2));
                };
                Parser2.prototype.parseBindingList = function(kind, options) {
                  var list = [this.parseLexicalBinding(kind, options)];
                  while (this.match(",")) {
                    this.nextToken();
                    list.push(this.parseLexicalBinding(kind, options));
                  }
                  return list;
                };
                Parser2.prototype.isLexicalDeclaration = function() {
                  var state = this.scanner.saveState();
                  this.scanner.scanComments();
                  var next = this.scanner.lex();
                  this.scanner.restoreState(state);
                  return next.type === 3 || next.type === 7 && next.value === "[" || next.type === 7 && next.value === "{" || next.type === 4 && next.value === "let" || next.type === 4 && next.value === "yield";
                };
                Parser2.prototype.parseLexicalDeclaration = function(options) {
                  var node = this.createNode();
                  var kind = this.nextToken().value;
                  assert_1.assert(kind === "let" || kind === "const", "Lexical declaration must be either let or const");
                  var declarations = this.parseBindingList(kind, options);
                  this.consumeSemicolon();
                  return this.finalize(node, new Node2.VariableDeclaration(declarations, kind));
                };
                Parser2.prototype.parseBindingRestElement = function(params, kind) {
                  var node = this.createNode();
                  this.expect("...");
                  var arg = this.parsePattern(params, kind);
                  return this.finalize(node, new Node2.RestElement(arg));
                };
                Parser2.prototype.parseArrayPattern = function(params, kind) {
                  var node = this.createNode();
                  this.expect("[");
                  var elements = [];
                  while (!this.match("]")) {
                    if (this.match(",")) {
                      this.nextToken();
                      elements.push(null);
                    } else {
                      if (this.match("...")) {
                        elements.push(this.parseBindingRestElement(params, kind));
                        break;
                      } else {
                        elements.push(this.parsePatternWithDefault(params, kind));
                      }
                      if (!this.match("]")) {
                        this.expect(",");
                      }
                    }
                  }
                  this.expect("]");
                  return this.finalize(node, new Node2.ArrayPattern(elements));
                };
                Parser2.prototype.parsePropertyPattern = function(params, kind) {
                  var node = this.createNode();
                  var computed = false;
                  var shorthand = false;
                  var method = false;
                  var key;
                  var value;
                  if (this.lookahead.type === 3) {
                    var keyToken = this.lookahead;
                    key = this.parseVariableIdentifier();
                    var init2 = this.finalize(node, new Node2.Identifier(keyToken.value));
                    if (this.match("=")) {
                      params.push(keyToken);
                      shorthand = true;
                      this.nextToken();
                      var expr = this.parseAssignmentExpression();
                      value = this.finalize(this.startNode(keyToken), new Node2.AssignmentPattern(init2, expr));
                    } else if (!this.match(":")) {
                      params.push(keyToken);
                      shorthand = true;
                      value = init2;
                    } else {
                      this.expect(":");
                      value = this.parsePatternWithDefault(params, kind);
                    }
                  } else {
                    computed = this.match("[");
                    key = this.parseObjectPropertyKey();
                    this.expect(":");
                    value = this.parsePatternWithDefault(params, kind);
                  }
                  return this.finalize(node, new Node2.Property("init", key, computed, value, method, shorthand));
                };
                Parser2.prototype.parseObjectPattern = function(params, kind) {
                  var node = this.createNode();
                  var properties = [];
                  this.expect("{");
                  while (!this.match("}")) {
                    properties.push(this.parsePropertyPattern(params, kind));
                    if (!this.match("}")) {
                      this.expect(",");
                    }
                  }
                  this.expect("}");
                  return this.finalize(node, new Node2.ObjectPattern(properties));
                };
                Parser2.prototype.parsePattern = function(params, kind) {
                  var pattern;
                  if (this.match("[")) {
                    pattern = this.parseArrayPattern(params, kind);
                  } else if (this.match("{")) {
                    pattern = this.parseObjectPattern(params, kind);
                  } else {
                    if (this.matchKeyword("let") && (kind === "const" || kind === "let")) {
                      this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.LetInLexicalBinding);
                    }
                    params.push(this.lookahead);
                    pattern = this.parseVariableIdentifier(kind);
                  }
                  return pattern;
                };
                Parser2.prototype.parsePatternWithDefault = function(params, kind) {
                  var startToken = this.lookahead;
                  var pattern = this.parsePattern(params, kind);
                  if (this.match("=")) {
                    this.nextToken();
                    var previousAllowYield = this.context.allowYield;
                    this.context.allowYield = true;
                    var right = this.isolateCoverGrammar(this.parseAssignmentExpression);
                    this.context.allowYield = previousAllowYield;
                    pattern = this.finalize(this.startNode(startToken), new Node2.AssignmentPattern(pattern, right));
                  }
                  return pattern;
                };
                Parser2.prototype.parseVariableIdentifier = function(kind) {
                  var node = this.createNode();
                  var token = this.nextToken();
                  if (token.type === 4 && token.value === "yield") {
                    if (this.context.strict) {
                      this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
                    } else if (!this.context.allowYield) {
                      this.throwUnexpectedToken(token);
                    }
                  } else if (token.type !== 3) {
                    if (this.context.strict && token.type === 4 && this.scanner.isStrictModeReservedWord(token.value)) {
                      this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
                    } else {
                      if (this.context.strict || token.value !== "let" || kind !== "var") {
                        this.throwUnexpectedToken(token);
                      }
                    }
                  } else if ((this.context.isModule || this.context.await) && token.type === 3 && token.value === "await") {
                    this.tolerateUnexpectedToken(token);
                  }
                  return this.finalize(node, new Node2.Identifier(token.value));
                };
                Parser2.prototype.parseVariableDeclaration = function(options) {
                  var node = this.createNode();
                  var params = [];
                  var id = this.parsePattern(params, "var");
                  if (this.context.strict && id.type === syntax_1.Syntax.Identifier) {
                    if (this.scanner.isRestrictedWord(id.name)) {
                      this.tolerateError(messages_1.Messages.StrictVarName);
                    }
                  }
                  var init2 = null;
                  if (this.match("=")) {
                    this.nextToken();
                    init2 = this.isolateCoverGrammar(this.parseAssignmentExpression);
                  } else if (id.type !== syntax_1.Syntax.Identifier && !options.inFor) {
                    this.expect("=");
                  }
                  return this.finalize(node, new Node2.VariableDeclarator(id, init2));
                };
                Parser2.prototype.parseVariableDeclarationList = function(options) {
                  var opt = { inFor: options.inFor };
                  var list = [];
                  list.push(this.parseVariableDeclaration(opt));
                  while (this.match(",")) {
                    this.nextToken();
                    list.push(this.parseVariableDeclaration(opt));
                  }
                  return list;
                };
                Parser2.prototype.parseVariableStatement = function() {
                  var node = this.createNode();
                  this.expectKeyword("var");
                  var declarations = this.parseVariableDeclarationList({ inFor: false });
                  this.consumeSemicolon();
                  return this.finalize(node, new Node2.VariableDeclaration(declarations, "var"));
                };
                Parser2.prototype.parseEmptyStatement = function() {
                  var node = this.createNode();
                  this.expect(";");
                  return this.finalize(node, new Node2.EmptyStatement());
                };
                Parser2.prototype.parseExpressionStatement = function() {
                  var node = this.createNode();
                  var expr = this.parseExpression();
                  this.consumeSemicolon();
                  return this.finalize(node, new Node2.ExpressionStatement(expr));
                };
                Parser2.prototype.parseIfClause = function() {
                  if (this.context.strict && this.matchKeyword("function")) {
                    this.tolerateError(messages_1.Messages.StrictFunction);
                  }
                  return this.parseStatement();
                };
                Parser2.prototype.parseIfStatement = function() {
                  var node = this.createNode();
                  var consequent;
                  var alternate = null;
                  this.expectKeyword("if");
                  this.expect("(");
                  var test = this.parseExpression();
                  if (!this.match(")") && this.config.tolerant) {
                    this.tolerateUnexpectedToken(this.nextToken());
                    consequent = this.finalize(this.createNode(), new Node2.EmptyStatement());
                  } else {
                    this.expect(")");
                    consequent = this.parseIfClause();
                    if (this.matchKeyword("else")) {
                      this.nextToken();
                      alternate = this.parseIfClause();
                    }
                  }
                  return this.finalize(node, new Node2.IfStatement(test, consequent, alternate));
                };
                Parser2.prototype.parseDoWhileStatement = function() {
                  var node = this.createNode();
                  this.expectKeyword("do");
                  var previousInIteration = this.context.inIteration;
                  this.context.inIteration = true;
                  var body = this.parseStatement();
                  this.context.inIteration = previousInIteration;
                  this.expectKeyword("while");
                  this.expect("(");
                  var test = this.parseExpression();
                  if (!this.match(")") && this.config.tolerant) {
                    this.tolerateUnexpectedToken(this.nextToken());
                  } else {
                    this.expect(")");
                    if (this.match(";")) {
                      this.nextToken();
                    }
                  }
                  return this.finalize(node, new Node2.DoWhileStatement(body, test));
                };
                Parser2.prototype.parseWhileStatement = function() {
                  var node = this.createNode();
                  var body;
                  this.expectKeyword("while");
                  this.expect("(");
                  var test = this.parseExpression();
                  if (!this.match(")") && this.config.tolerant) {
                    this.tolerateUnexpectedToken(this.nextToken());
                    body = this.finalize(this.createNode(), new Node2.EmptyStatement());
                  } else {
                    this.expect(")");
                    var previousInIteration = this.context.inIteration;
                    this.context.inIteration = true;
                    body = this.parseStatement();
                    this.context.inIteration = previousInIteration;
                  }
                  return this.finalize(node, new Node2.WhileStatement(test, body));
                };
                Parser2.prototype.parseForStatement = function() {
                  var init2 = null;
                  var test = null;
                  var update3 = null;
                  var forIn = true;
                  var left, right;
                  var node = this.createNode();
                  this.expectKeyword("for");
                  this.expect("(");
                  if (this.match(";")) {
                    this.nextToken();
                  } else {
                    if (this.matchKeyword("var")) {
                      init2 = this.createNode();
                      this.nextToken();
                      var previousAllowIn = this.context.allowIn;
                      this.context.allowIn = false;
                      var declarations = this.parseVariableDeclarationList({ inFor: true });
                      this.context.allowIn = previousAllowIn;
                      if (declarations.length === 1 && this.matchKeyword("in")) {
                        var decl = declarations[0];
                        if (decl.init && (decl.id.type === syntax_1.Syntax.ArrayPattern || decl.id.type === syntax_1.Syntax.ObjectPattern || this.context.strict)) {
                          this.tolerateError(messages_1.Messages.ForInOfLoopInitializer, "for-in");
                        }
                        init2 = this.finalize(init2, new Node2.VariableDeclaration(declarations, "var"));
                        this.nextToken();
                        left = init2;
                        right = this.parseExpression();
                        init2 = null;
                      } else if (declarations.length === 1 && declarations[0].init === null && this.matchContextualKeyword("of")) {
                        init2 = this.finalize(init2, new Node2.VariableDeclaration(declarations, "var"));
                        this.nextToken();
                        left = init2;
                        right = this.parseAssignmentExpression();
                        init2 = null;
                        forIn = false;
                      } else {
                        init2 = this.finalize(init2, new Node2.VariableDeclaration(declarations, "var"));
                        this.expect(";");
                      }
                    } else if (this.matchKeyword("const") || this.matchKeyword("let")) {
                      init2 = this.createNode();
                      var kind = this.nextToken().value;
                      if (!this.context.strict && this.lookahead.value === "in") {
                        init2 = this.finalize(init2, new Node2.Identifier(kind));
                        this.nextToken();
                        left = init2;
                        right = this.parseExpression();
                        init2 = null;
                      } else {
                        var previousAllowIn = this.context.allowIn;
                        this.context.allowIn = false;
                        var declarations = this.parseBindingList(kind, { inFor: true });
                        this.context.allowIn = previousAllowIn;
                        if (declarations.length === 1 && declarations[0].init === null && this.matchKeyword("in")) {
                          init2 = this.finalize(init2, new Node2.VariableDeclaration(declarations, kind));
                          this.nextToken();
                          left = init2;
                          right = this.parseExpression();
                          init2 = null;
                        } else if (declarations.length === 1 && declarations[0].init === null && this.matchContextualKeyword("of")) {
                          init2 = this.finalize(init2, new Node2.VariableDeclaration(declarations, kind));
                          this.nextToken();
                          left = init2;
                          right = this.parseAssignmentExpression();
                          init2 = null;
                          forIn = false;
                        } else {
                          this.consumeSemicolon();
                          init2 = this.finalize(init2, new Node2.VariableDeclaration(declarations, kind));
                        }
                      }
                    } else {
                      var initStartToken = this.lookahead;
                      var previousAllowIn = this.context.allowIn;
                      this.context.allowIn = false;
                      init2 = this.inheritCoverGrammar(this.parseAssignmentExpression);
                      this.context.allowIn = previousAllowIn;
                      if (this.matchKeyword("in")) {
                        if (!this.context.isAssignmentTarget || init2.type === syntax_1.Syntax.AssignmentExpression) {
                          this.tolerateError(messages_1.Messages.InvalidLHSInForIn);
                        }
                        this.nextToken();
                        this.reinterpretExpressionAsPattern(init2);
                        left = init2;
                        right = this.parseExpression();
                        init2 = null;
                      } else if (this.matchContextualKeyword("of")) {
                        if (!this.context.isAssignmentTarget || init2.type === syntax_1.Syntax.AssignmentExpression) {
                          this.tolerateError(messages_1.Messages.InvalidLHSInForLoop);
                        }
                        this.nextToken();
                        this.reinterpretExpressionAsPattern(init2);
                        left = init2;
                        right = this.parseAssignmentExpression();
                        init2 = null;
                        forIn = false;
                      } else {
                        if (this.match(",")) {
                          var initSeq = [init2];
                          while (this.match(",")) {
                            this.nextToken();
                            initSeq.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
                          }
                          init2 = this.finalize(this.startNode(initStartToken), new Node2.SequenceExpression(initSeq));
                        }
                        this.expect(";");
                      }
                    }
                  }
                  if (typeof left === "undefined") {
                    if (!this.match(";")) {
                      test = this.parseExpression();
                    }
                    this.expect(";");
                    if (!this.match(")")) {
                      update3 = this.parseExpression();
                    }
                  }
                  var body;
                  if (!this.match(")") && this.config.tolerant) {
                    this.tolerateUnexpectedToken(this.nextToken());
                    body = this.finalize(this.createNode(), new Node2.EmptyStatement());
                  } else {
                    this.expect(")");
                    var previousInIteration = this.context.inIteration;
                    this.context.inIteration = true;
                    body = this.isolateCoverGrammar(this.parseStatement);
                    this.context.inIteration = previousInIteration;
                  }
                  return typeof left === "undefined" ? this.finalize(node, new Node2.ForStatement(init2, test, update3, body)) : forIn ? this.finalize(node, new Node2.ForInStatement(left, right, body)) : this.finalize(node, new Node2.ForOfStatement(left, right, body));
                };
                Parser2.prototype.parseContinueStatement = function() {
                  var node = this.createNode();
                  this.expectKeyword("continue");
                  var label = null;
                  if (this.lookahead.type === 3 && !this.hasLineTerminator) {
                    var id = this.parseVariableIdentifier();
                    label = id;
                    var key = "$" + id.name;
                    if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
                      this.throwError(messages_1.Messages.UnknownLabel, id.name);
                    }
                  }
                  this.consumeSemicolon();
                  if (label === null && !this.context.inIteration) {
                    this.throwError(messages_1.Messages.IllegalContinue);
                  }
                  return this.finalize(node, new Node2.ContinueStatement(label));
                };
                Parser2.prototype.parseBreakStatement = function() {
                  var node = this.createNode();
                  this.expectKeyword("break");
                  var label = null;
                  if (this.lookahead.type === 3 && !this.hasLineTerminator) {
                    var id = this.parseVariableIdentifier();
                    var key = "$" + id.name;
                    if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
                      this.throwError(messages_1.Messages.UnknownLabel, id.name);
                    }
                    label = id;
                  }
                  this.consumeSemicolon();
                  if (label === null && !this.context.inIteration && !this.context.inSwitch) {
                    this.throwError(messages_1.Messages.IllegalBreak);
                  }
                  return this.finalize(node, new Node2.BreakStatement(label));
                };
                Parser2.prototype.parseReturnStatement = function() {
                  if (!this.context.inFunctionBody) {
                    this.tolerateError(messages_1.Messages.IllegalReturn);
                  }
                  var node = this.createNode();
                  this.expectKeyword("return");
                  var hasArgument = !this.match(";") && !this.match("}") && !this.hasLineTerminator && this.lookahead.type !== 2 || this.lookahead.type === 8 || this.lookahead.type === 10;
                  var argument = hasArgument ? this.parseExpression() : null;
                  this.consumeSemicolon();
                  return this.finalize(node, new Node2.ReturnStatement(argument));
                };
                Parser2.prototype.parseWithStatement = function() {
                  if (this.context.strict) {
                    this.tolerateError(messages_1.Messages.StrictModeWith);
                  }
                  var node = this.createNode();
                  var body;
                  this.expectKeyword("with");
                  this.expect("(");
                  var object = this.parseExpression();
                  if (!this.match(")") && this.config.tolerant) {
                    this.tolerateUnexpectedToken(this.nextToken());
                    body = this.finalize(this.createNode(), new Node2.EmptyStatement());
                  } else {
                    this.expect(")");
                    body = this.parseStatement();
                  }
                  return this.finalize(node, new Node2.WithStatement(object, body));
                };
                Parser2.prototype.parseSwitchCase = function() {
                  var node = this.createNode();
                  var test;
                  if (this.matchKeyword("default")) {
                    this.nextToken();
                    test = null;
                  } else {
                    this.expectKeyword("case");
                    test = this.parseExpression();
                  }
                  this.expect(":");
                  var consequent = [];
                  while (true) {
                    if (this.match("}") || this.matchKeyword("default") || this.matchKeyword("case")) {
                      break;
                    }
                    consequent.push(this.parseStatementListItem());
                  }
                  return this.finalize(node, new Node2.SwitchCase(test, consequent));
                };
                Parser2.prototype.parseSwitchStatement = function() {
                  var node = this.createNode();
                  this.expectKeyword("switch");
                  this.expect("(");
                  var discriminant = this.parseExpression();
                  this.expect(")");
                  var previousInSwitch = this.context.inSwitch;
                  this.context.inSwitch = true;
                  var cases = [];
                  var defaultFound = false;
                  this.expect("{");
                  while (true) {
                    if (this.match("}")) {
                      break;
                    }
                    var clause = this.parseSwitchCase();
                    if (clause.test === null) {
                      if (defaultFound) {
                        this.throwError(messages_1.Messages.MultipleDefaultsInSwitch);
                      }
                      defaultFound = true;
                    }
                    cases.push(clause);
                  }
                  this.expect("}");
                  this.context.inSwitch = previousInSwitch;
                  return this.finalize(node, new Node2.SwitchStatement(discriminant, cases));
                };
                Parser2.prototype.parseLabelledStatement = function() {
                  var node = this.createNode();
                  var expr = this.parseExpression();
                  var statement;
                  if (expr.type === syntax_1.Syntax.Identifier && this.match(":")) {
                    this.nextToken();
                    var id = expr;
                    var key = "$" + id.name;
                    if (Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
                      this.throwError(messages_1.Messages.Redeclaration, "Label", id.name);
                    }
                    this.context.labelSet[key] = true;
                    var body = void 0;
                    if (this.matchKeyword("class")) {
                      this.tolerateUnexpectedToken(this.lookahead);
                      body = this.parseClassDeclaration();
                    } else if (this.matchKeyword("function")) {
                      var token = this.lookahead;
                      var declaration = this.parseFunctionDeclaration();
                      if (this.context.strict) {
                        this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunction);
                      } else if (declaration.generator) {
                        this.tolerateUnexpectedToken(token, messages_1.Messages.GeneratorInLegacyContext);
                      }
                      body = declaration;
                    } else {
                      body = this.parseStatement();
                    }
                    delete this.context.labelSet[key];
                    statement = new Node2.LabeledStatement(id, body);
                  } else {
                    this.consumeSemicolon();
                    statement = new Node2.ExpressionStatement(expr);
                  }
                  return this.finalize(node, statement);
                };
                Parser2.prototype.parseThrowStatement = function() {
                  var node = this.createNode();
                  this.expectKeyword("throw");
                  if (this.hasLineTerminator) {
                    this.throwError(messages_1.Messages.NewlineAfterThrow);
                  }
                  var argument = this.parseExpression();
                  this.consumeSemicolon();
                  return this.finalize(node, new Node2.ThrowStatement(argument));
                };
                Parser2.prototype.parseCatchClause = function() {
                  var node = this.createNode();
                  this.expectKeyword("catch");
                  this.expect("(");
                  if (this.match(")")) {
                    this.throwUnexpectedToken(this.lookahead);
                  }
                  var params = [];
                  var param = this.parsePattern(params);
                  var paramMap = {};
                  for (var i = 0; i < params.length; i++) {
                    var key = "$" + params[i].value;
                    if (Object.prototype.hasOwnProperty.call(paramMap, key)) {
                      this.tolerateError(messages_1.Messages.DuplicateBinding, params[i].value);
                    }
                    paramMap[key] = true;
                  }
                  if (this.context.strict && param.type === syntax_1.Syntax.Identifier) {
                    if (this.scanner.isRestrictedWord(param.name)) {
                      this.tolerateError(messages_1.Messages.StrictCatchVariable);
                    }
                  }
                  this.expect(")");
                  var body = this.parseBlock();
                  return this.finalize(node, new Node2.CatchClause(param, body));
                };
                Parser2.prototype.parseFinallyClause = function() {
                  this.expectKeyword("finally");
                  return this.parseBlock();
                };
                Parser2.prototype.parseTryStatement = function() {
                  var node = this.createNode();
                  this.expectKeyword("try");
                  var block = this.parseBlock();
                  var handler = this.matchKeyword("catch") ? this.parseCatchClause() : null;
                  var finalizer = this.matchKeyword("finally") ? this.parseFinallyClause() : null;
                  if (!handler && !finalizer) {
                    this.throwError(messages_1.Messages.NoCatchOrFinally);
                  }
                  return this.finalize(node, new Node2.TryStatement(block, handler, finalizer));
                };
                Parser2.prototype.parseDebuggerStatement = function() {
                  var node = this.createNode();
                  this.expectKeyword("debugger");
                  this.consumeSemicolon();
                  return this.finalize(node, new Node2.DebuggerStatement());
                };
                Parser2.prototype.parseStatement = function() {
                  var statement;
                  switch (this.lookahead.type) {
                    case 1:
                    case 5:
                    case 6:
                    case 8:
                    case 10:
                    case 9:
                      statement = this.parseExpressionStatement();
                      break;
                    case 7:
                      var value = this.lookahead.value;
                      if (value === "{") {
                        statement = this.parseBlock();
                      } else if (value === "(") {
                        statement = this.parseExpressionStatement();
                      } else if (value === ";") {
                        statement = this.parseEmptyStatement();
                      } else {
                        statement = this.parseExpressionStatement();
                      }
                      break;
                    case 3:
                      statement = this.matchAsyncFunction() ? this.parseFunctionDeclaration() : this.parseLabelledStatement();
                      break;
                    case 4:
                      switch (this.lookahead.value) {
                        case "break":
                          statement = this.parseBreakStatement();
                          break;
                        case "continue":
                          statement = this.parseContinueStatement();
                          break;
                        case "debugger":
                          statement = this.parseDebuggerStatement();
                          break;
                        case "do":
                          statement = this.parseDoWhileStatement();
                          break;
                        case "for":
                          statement = this.parseForStatement();
                          break;
                        case "function":
                          statement = this.parseFunctionDeclaration();
                          break;
                        case "if":
                          statement = this.parseIfStatement();
                          break;
                        case "return":
                          statement = this.parseReturnStatement();
                          break;
                        case "switch":
                          statement = this.parseSwitchStatement();
                          break;
                        case "throw":
                          statement = this.parseThrowStatement();
                          break;
                        case "try":
                          statement = this.parseTryStatement();
                          break;
                        case "var":
                          statement = this.parseVariableStatement();
                          break;
                        case "while":
                          statement = this.parseWhileStatement();
                          break;
                        case "with":
                          statement = this.parseWithStatement();
                          break;
                        default:
                          statement = this.parseExpressionStatement();
                          break;
                      }
                      break;
                    default:
                      statement = this.throwUnexpectedToken(this.lookahead);
                  }
                  return statement;
                };
                Parser2.prototype.parseFunctionSourceElements = function() {
                  var node = this.createNode();
                  this.expect("{");
                  var body = this.parseDirectivePrologues();
                  var previousLabelSet = this.context.labelSet;
                  var previousInIteration = this.context.inIteration;
                  var previousInSwitch = this.context.inSwitch;
                  var previousInFunctionBody = this.context.inFunctionBody;
                  this.context.labelSet = {};
                  this.context.inIteration = false;
                  this.context.inSwitch = false;
                  this.context.inFunctionBody = true;
                  while (this.lookahead.type !== 2) {
                    if (this.match("}")) {
                      break;
                    }
                    body.push(this.parseStatementListItem());
                  }
                  this.expect("}");
                  this.context.labelSet = previousLabelSet;
                  this.context.inIteration = previousInIteration;
                  this.context.inSwitch = previousInSwitch;
                  this.context.inFunctionBody = previousInFunctionBody;
                  return this.finalize(node, new Node2.BlockStatement(body));
                };
                Parser2.prototype.validateParam = function(options, param, name) {
                  var key = "$" + name;
                  if (this.context.strict) {
                    if (this.scanner.isRestrictedWord(name)) {
                      options.stricted = param;
                      options.message = messages_1.Messages.StrictParamName;
                    }
                    if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
                      options.stricted = param;
                      options.message = messages_1.Messages.StrictParamDupe;
                    }
                  } else if (!options.firstRestricted) {
                    if (this.scanner.isRestrictedWord(name)) {
                      options.firstRestricted = param;
                      options.message = messages_1.Messages.StrictParamName;
                    } else if (this.scanner.isStrictModeReservedWord(name)) {
                      options.firstRestricted = param;
                      options.message = messages_1.Messages.StrictReservedWord;
                    } else if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
                      options.stricted = param;
                      options.message = messages_1.Messages.StrictParamDupe;
                    }
                  }
                  if (typeof Object.defineProperty === "function") {
                    Object.defineProperty(options.paramSet, key, { value: true, enumerable: true, writable: true, configurable: true });
                  } else {
                    options.paramSet[key] = true;
                  }
                };
                Parser2.prototype.parseRestElement = function(params) {
                  var node = this.createNode();
                  this.expect("...");
                  var arg = this.parsePattern(params);
                  if (this.match("=")) {
                    this.throwError(messages_1.Messages.DefaultRestParameter);
                  }
                  if (!this.match(")")) {
                    this.throwError(messages_1.Messages.ParameterAfterRestParameter);
                  }
                  return this.finalize(node, new Node2.RestElement(arg));
                };
                Parser2.prototype.parseFormalParameter = function(options) {
                  var params = [];
                  var param = this.match("...") ? this.parseRestElement(params) : this.parsePatternWithDefault(params);
                  for (var i = 0; i < params.length; i++) {
                    this.validateParam(options, params[i], params[i].value);
                  }
                  options.simple = options.simple && param instanceof Node2.Identifier;
                  options.params.push(param);
                };
                Parser2.prototype.parseFormalParameters = function(firstRestricted) {
                  var options;
                  options = {
                    simple: true,
                    params: [],
                    firstRestricted
                  };
                  this.expect("(");
                  if (!this.match(")")) {
                    options.paramSet = {};
                    while (this.lookahead.type !== 2) {
                      this.parseFormalParameter(options);
                      if (this.match(")")) {
                        break;
                      }
                      this.expect(",");
                      if (this.match(")")) {
                        break;
                      }
                    }
                  }
                  this.expect(")");
                  return {
                    simple: options.simple,
                    params: options.params,
                    stricted: options.stricted,
                    firstRestricted: options.firstRestricted,
                    message: options.message
                  };
                };
                Parser2.prototype.matchAsyncFunction = function() {
                  var match = this.matchContextualKeyword("async");
                  if (match) {
                    var state = this.scanner.saveState();
                    this.scanner.scanComments();
                    var next = this.scanner.lex();
                    this.scanner.restoreState(state);
                    match = state.lineNumber === next.lineNumber && next.type === 4 && next.value === "function";
                  }
                  return match;
                };
                Parser2.prototype.parseFunctionDeclaration = function(identifierIsOptional) {
                  var node = this.createNode();
                  var isAsync = this.matchContextualKeyword("async");
                  if (isAsync) {
                    this.nextToken();
                  }
                  this.expectKeyword("function");
                  var isGenerator = isAsync ? false : this.match("*");
                  if (isGenerator) {
                    this.nextToken();
                  }
                  var message;
                  var id = null;
                  var firstRestricted = null;
                  if (!identifierIsOptional || !this.match("(")) {
                    var token = this.lookahead;
                    id = this.parseVariableIdentifier();
                    if (this.context.strict) {
                      if (this.scanner.isRestrictedWord(token.value)) {
                        this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunctionName);
                      }
                    } else {
                      if (this.scanner.isRestrictedWord(token.value)) {
                        firstRestricted = token;
                        message = messages_1.Messages.StrictFunctionName;
                      } else if (this.scanner.isStrictModeReservedWord(token.value)) {
                        firstRestricted = token;
                        message = messages_1.Messages.StrictReservedWord;
                      }
                    }
                  }
                  var previousAllowAwait = this.context.await;
                  var previousAllowYield = this.context.allowYield;
                  this.context.await = isAsync;
                  this.context.allowYield = !isGenerator;
                  var formalParameters = this.parseFormalParameters(firstRestricted);
                  var params = formalParameters.params;
                  var stricted = formalParameters.stricted;
                  firstRestricted = formalParameters.firstRestricted;
                  if (formalParameters.message) {
                    message = formalParameters.message;
                  }
                  var previousStrict = this.context.strict;
                  var previousAllowStrictDirective = this.context.allowStrictDirective;
                  this.context.allowStrictDirective = formalParameters.simple;
                  var body = this.parseFunctionSourceElements();
                  if (this.context.strict && firstRestricted) {
                    this.throwUnexpectedToken(firstRestricted, message);
                  }
                  if (this.context.strict && stricted) {
                    this.tolerateUnexpectedToken(stricted, message);
                  }
                  this.context.strict = previousStrict;
                  this.context.allowStrictDirective = previousAllowStrictDirective;
                  this.context.await = previousAllowAwait;
                  this.context.allowYield = previousAllowYield;
                  return isAsync ? this.finalize(node, new Node2.AsyncFunctionDeclaration(id, params, body)) : this.finalize(node, new Node2.FunctionDeclaration(id, params, body, isGenerator));
                };
                Parser2.prototype.parseFunctionExpression = function() {
                  var node = this.createNode();
                  var isAsync = this.matchContextualKeyword("async");
                  if (isAsync) {
                    this.nextToken();
                  }
                  this.expectKeyword("function");
                  var isGenerator = isAsync ? false : this.match("*");
                  if (isGenerator) {
                    this.nextToken();
                  }
                  var message;
                  var id = null;
                  var firstRestricted;
                  var previousAllowAwait = this.context.await;
                  var previousAllowYield = this.context.allowYield;
                  this.context.await = isAsync;
                  this.context.allowYield = !isGenerator;
                  if (!this.match("(")) {
                    var token = this.lookahead;
                    id = !this.context.strict && !isGenerator && this.matchKeyword("yield") ? this.parseIdentifierName() : this.parseVariableIdentifier();
                    if (this.context.strict) {
                      if (this.scanner.isRestrictedWord(token.value)) {
                        this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunctionName);
                      }
                    } else {
                      if (this.scanner.isRestrictedWord(token.value)) {
                        firstRestricted = token;
                        message = messages_1.Messages.StrictFunctionName;
                      } else if (this.scanner.isStrictModeReservedWord(token.value)) {
                        firstRestricted = token;
                        message = messages_1.Messages.StrictReservedWord;
                      }
                    }
                  }
                  var formalParameters = this.parseFormalParameters(firstRestricted);
                  var params = formalParameters.params;
                  var stricted = formalParameters.stricted;
                  firstRestricted = formalParameters.firstRestricted;
                  if (formalParameters.message) {
                    message = formalParameters.message;
                  }
                  var previousStrict = this.context.strict;
                  var previousAllowStrictDirective = this.context.allowStrictDirective;
                  this.context.allowStrictDirective = formalParameters.simple;
                  var body = this.parseFunctionSourceElements();
                  if (this.context.strict && firstRestricted) {
                    this.throwUnexpectedToken(firstRestricted, message);
                  }
                  if (this.context.strict && stricted) {
                    this.tolerateUnexpectedToken(stricted, message);
                  }
                  this.context.strict = previousStrict;
                  this.context.allowStrictDirective = previousAllowStrictDirective;
                  this.context.await = previousAllowAwait;
                  this.context.allowYield = previousAllowYield;
                  return isAsync ? this.finalize(node, new Node2.AsyncFunctionExpression(id, params, body)) : this.finalize(node, new Node2.FunctionExpression(id, params, body, isGenerator));
                };
                Parser2.prototype.parseDirective = function() {
                  var token = this.lookahead;
                  var node = this.createNode();
                  var expr = this.parseExpression();
                  var directive = expr.type === syntax_1.Syntax.Literal ? this.getTokenRaw(token).slice(1, -1) : null;
                  this.consumeSemicolon();
                  return this.finalize(node, directive ? new Node2.Directive(expr, directive) : new Node2.ExpressionStatement(expr));
                };
                Parser2.prototype.parseDirectivePrologues = function() {
                  var firstRestricted = null;
                  var body = [];
                  while (true) {
                    var token = this.lookahead;
                    if (token.type !== 8) {
                      break;
                    }
                    var statement = this.parseDirective();
                    body.push(statement);
                    var directive = statement.directive;
                    if (typeof directive !== "string") {
                      break;
                    }
                    if (directive === "use strict") {
                      this.context.strict = true;
                      if (firstRestricted) {
                        this.tolerateUnexpectedToken(firstRestricted, messages_1.Messages.StrictOctalLiteral);
                      }
                      if (!this.context.allowStrictDirective) {
                        this.tolerateUnexpectedToken(token, messages_1.Messages.IllegalLanguageModeDirective);
                      }
                    } else {
                      if (!firstRestricted && token.octal) {
                        firstRestricted = token;
                      }
                    }
                  }
                  return body;
                };
                Parser2.prototype.qualifiedPropertyName = function(token) {
                  switch (token.type) {
                    case 3:
                    case 8:
                    case 1:
                    case 5:
                    case 6:
                    case 4:
                      return true;
                    case 7:
                      return token.value === "[";
                    default:
                      break;
                  }
                  return false;
                };
                Parser2.prototype.parseGetterMethod = function() {
                  var node = this.createNode();
                  var isGenerator = false;
                  var previousAllowYield = this.context.allowYield;
                  this.context.allowYield = !isGenerator;
                  var formalParameters = this.parseFormalParameters();
                  if (formalParameters.params.length > 0) {
                    this.tolerateError(messages_1.Messages.BadGetterArity);
                  }
                  var method = this.parsePropertyMethod(formalParameters);
                  this.context.allowYield = previousAllowYield;
                  return this.finalize(node, new Node2.FunctionExpression(null, formalParameters.params, method, isGenerator));
                };
                Parser2.prototype.parseSetterMethod = function() {
                  var node = this.createNode();
                  var isGenerator = false;
                  var previousAllowYield = this.context.allowYield;
                  this.context.allowYield = !isGenerator;
                  var formalParameters = this.parseFormalParameters();
                  if (formalParameters.params.length !== 1) {
                    this.tolerateError(messages_1.Messages.BadSetterArity);
                  } else if (formalParameters.params[0] instanceof Node2.RestElement) {
                    this.tolerateError(messages_1.Messages.BadSetterRestParameter);
                  }
                  var method = this.parsePropertyMethod(formalParameters);
                  this.context.allowYield = previousAllowYield;
                  return this.finalize(node, new Node2.FunctionExpression(null, formalParameters.params, method, isGenerator));
                };
                Parser2.prototype.parseGeneratorMethod = function() {
                  var node = this.createNode();
                  var isGenerator = true;
                  var previousAllowYield = this.context.allowYield;
                  this.context.allowYield = true;
                  var params = this.parseFormalParameters();
                  this.context.allowYield = false;
                  var method = this.parsePropertyMethod(params);
                  this.context.allowYield = previousAllowYield;
                  return this.finalize(node, new Node2.FunctionExpression(null, params.params, method, isGenerator));
                };
                Parser2.prototype.isStartOfExpression = function() {
                  var start = true;
                  var value = this.lookahead.value;
                  switch (this.lookahead.type) {
                    case 7:
                      start = value === "[" || value === "(" || value === "{" || value === "+" || value === "-" || value === "!" || value === "~" || value === "++" || value === "--" || value === "/" || value === "/=";
                      break;
                    case 4:
                      start = value === "class" || value === "delete" || value === "function" || value === "let" || value === "new" || value === "super" || value === "this" || value === "typeof" || value === "void" || value === "yield";
                      break;
                    default:
                      break;
                  }
                  return start;
                };
                Parser2.prototype.parseYieldExpression = function() {
                  var node = this.createNode();
                  this.expectKeyword("yield");
                  var argument = null;
                  var delegate = false;
                  if (!this.hasLineTerminator) {
                    var previousAllowYield = this.context.allowYield;
                    this.context.allowYield = false;
                    delegate = this.match("*");
                    if (delegate) {
                      this.nextToken();
                      argument = this.parseAssignmentExpression();
                    } else if (this.isStartOfExpression()) {
                      argument = this.parseAssignmentExpression();
                    }
                    this.context.allowYield = previousAllowYield;
                  }
                  return this.finalize(node, new Node2.YieldExpression(argument, delegate));
                };
                Parser2.prototype.parseClassElement = function(hasConstructor) {
                  var token = this.lookahead;
                  var node = this.createNode();
                  var kind = "";
                  var key = null;
                  var value = null;
                  var computed = false;
                  var method = false;
                  var isStatic = false;
                  var isAsync = false;
                  if (this.match("*")) {
                    this.nextToken();
                  } else {
                    computed = this.match("[");
                    key = this.parseObjectPropertyKey();
                    var id = key;
                    if (id.name === "static" && (this.qualifiedPropertyName(this.lookahead) || this.match("*"))) {
                      token = this.lookahead;
                      isStatic = true;
                      computed = this.match("[");
                      if (this.match("*")) {
                        this.nextToken();
                      } else {
                        key = this.parseObjectPropertyKey();
                      }
                    }
                    if (token.type === 3 && !this.hasLineTerminator && token.value === "async") {
                      var punctuator = this.lookahead.value;
                      if (punctuator !== ":" && punctuator !== "(" && punctuator !== "*") {
                        isAsync = true;
                        token = this.lookahead;
                        key = this.parseObjectPropertyKey();
                        if (token.type === 3 && token.value === "constructor") {
                          this.tolerateUnexpectedToken(token, messages_1.Messages.ConstructorIsAsync);
                        }
                      }
                    }
                  }
                  var lookaheadPropertyKey = this.qualifiedPropertyName(this.lookahead);
                  if (token.type === 3) {
                    if (token.value === "get" && lookaheadPropertyKey) {
                      kind = "get";
                      computed = this.match("[");
                      key = this.parseObjectPropertyKey();
                      this.context.allowYield = false;
                      value = this.parseGetterMethod();
                    } else if (token.value === "set" && lookaheadPropertyKey) {
                      kind = "set";
                      computed = this.match("[");
                      key = this.parseObjectPropertyKey();
                      value = this.parseSetterMethod();
                    }
                  } else if (token.type === 7 && token.value === "*" && lookaheadPropertyKey) {
                    kind = "init";
                    computed = this.match("[");
                    key = this.parseObjectPropertyKey();
                    value = this.parseGeneratorMethod();
                    method = true;
                  }
                  if (!kind && key && this.match("(")) {
                    kind = "init";
                    value = isAsync ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction();
                    method = true;
                  }
                  if (!kind) {
                    this.throwUnexpectedToken(this.lookahead);
                  }
                  if (kind === "init") {
                    kind = "method";
                  }
                  if (!computed) {
                    if (isStatic && this.isPropertyKey(key, "prototype")) {
                      this.throwUnexpectedToken(token, messages_1.Messages.StaticPrototype);
                    }
                    if (!isStatic && this.isPropertyKey(key, "constructor")) {
                      if (kind !== "method" || !method || value && value.generator) {
                        this.throwUnexpectedToken(token, messages_1.Messages.ConstructorSpecialMethod);
                      }
                      if (hasConstructor.value) {
                        this.throwUnexpectedToken(token, messages_1.Messages.DuplicateConstructor);
                      } else {
                        hasConstructor.value = true;
                      }
                      kind = "constructor";
                    }
                  }
                  return this.finalize(node, new Node2.MethodDefinition(key, computed, value, kind, isStatic));
                };
                Parser2.prototype.parseClassElementList = function() {
                  var body = [];
                  var hasConstructor = { value: false };
                  this.expect("{");
                  while (!this.match("}")) {
                    if (this.match(";")) {
                      this.nextToken();
                    } else {
                      body.push(this.parseClassElement(hasConstructor));
                    }
                  }
                  this.expect("}");
                  return body;
                };
                Parser2.prototype.parseClassBody = function() {
                  var node = this.createNode();
                  var elementList = this.parseClassElementList();
                  return this.finalize(node, new Node2.ClassBody(elementList));
                };
                Parser2.prototype.parseClassDeclaration = function(identifierIsOptional) {
                  var node = this.createNode();
                  var previousStrict = this.context.strict;
                  this.context.strict = true;
                  this.expectKeyword("class");
                  var id = identifierIsOptional && this.lookahead.type !== 3 ? null : this.parseVariableIdentifier();
                  var superClass = null;
                  if (this.matchKeyword("extends")) {
                    this.nextToken();
                    superClass = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
                  }
                  var classBody = this.parseClassBody();
                  this.context.strict = previousStrict;
                  return this.finalize(node, new Node2.ClassDeclaration(id, superClass, classBody));
                };
                Parser2.prototype.parseClassExpression = function() {
                  var node = this.createNode();
                  var previousStrict = this.context.strict;
                  this.context.strict = true;
                  this.expectKeyword("class");
                  var id = this.lookahead.type === 3 ? this.parseVariableIdentifier() : null;
                  var superClass = null;
                  if (this.matchKeyword("extends")) {
                    this.nextToken();
                    superClass = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
                  }
                  var classBody = this.parseClassBody();
                  this.context.strict = previousStrict;
                  return this.finalize(node, new Node2.ClassExpression(id, superClass, classBody));
                };
                Parser2.prototype.parseModule = function() {
                  this.context.strict = true;
                  this.context.isModule = true;
                  this.scanner.isModule = true;
                  var node = this.createNode();
                  var body = this.parseDirectivePrologues();
                  while (this.lookahead.type !== 2) {
                    body.push(this.parseStatementListItem());
                  }
                  return this.finalize(node, new Node2.Module(body));
                };
                Parser2.prototype.parseScript = function() {
                  var node = this.createNode();
                  var body = this.parseDirectivePrologues();
                  while (this.lookahead.type !== 2) {
                    body.push(this.parseStatementListItem());
                  }
                  return this.finalize(node, new Node2.Script(body));
                };
                Parser2.prototype.parseModuleSpecifier = function() {
                  var node = this.createNode();
                  if (this.lookahead.type !== 8) {
                    this.throwError(messages_1.Messages.InvalidModuleSpecifier);
                  }
                  var token = this.nextToken();
                  var raw = this.getTokenRaw(token);
                  return this.finalize(node, new Node2.Literal(token.value, raw));
                };
                Parser2.prototype.parseImportSpecifier = function() {
                  var node = this.createNode();
                  var imported;
                  var local;
                  if (this.lookahead.type === 3) {
                    imported = this.parseVariableIdentifier();
                    local = imported;
                    if (this.matchContextualKeyword("as")) {
                      this.nextToken();
                      local = this.parseVariableIdentifier();
                    }
                  } else {
                    imported = this.parseIdentifierName();
                    local = imported;
                    if (this.matchContextualKeyword("as")) {
                      this.nextToken();
                      local = this.parseVariableIdentifier();
                    } else {
                      this.throwUnexpectedToken(this.nextToken());
                    }
                  }
                  return this.finalize(node, new Node2.ImportSpecifier(local, imported));
                };
                Parser2.prototype.parseNamedImports = function() {
                  this.expect("{");
                  var specifiers = [];
                  while (!this.match("}")) {
                    specifiers.push(this.parseImportSpecifier());
                    if (!this.match("}")) {
                      this.expect(",");
                    }
                  }
                  this.expect("}");
                  return specifiers;
                };
                Parser2.prototype.parseImportDefaultSpecifier = function() {
                  var node = this.createNode();
                  var local = this.parseIdentifierName();
                  return this.finalize(node, new Node2.ImportDefaultSpecifier(local));
                };
                Parser2.prototype.parseImportNamespaceSpecifier = function() {
                  var node = this.createNode();
                  this.expect("*");
                  if (!this.matchContextualKeyword("as")) {
                    this.throwError(messages_1.Messages.NoAsAfterImportNamespace);
                  }
                  this.nextToken();
                  var local = this.parseIdentifierName();
                  return this.finalize(node, new Node2.ImportNamespaceSpecifier(local));
                };
                Parser2.prototype.parseImportDeclaration = function() {
                  if (this.context.inFunctionBody) {
                    this.throwError(messages_1.Messages.IllegalImportDeclaration);
                  }
                  var node = this.createNode();
                  this.expectKeyword("import");
                  var src;
                  var specifiers = [];
                  if (this.lookahead.type === 8) {
                    src = this.parseModuleSpecifier();
                  } else {
                    if (this.match("{")) {
                      specifiers = specifiers.concat(this.parseNamedImports());
                    } else if (this.match("*")) {
                      specifiers.push(this.parseImportNamespaceSpecifier());
                    } else if (this.isIdentifierName(this.lookahead) && !this.matchKeyword("default")) {
                      specifiers.push(this.parseImportDefaultSpecifier());
                      if (this.match(",")) {
                        this.nextToken();
                        if (this.match("*")) {
                          specifiers.push(this.parseImportNamespaceSpecifier());
                        } else if (this.match("{")) {
                          specifiers = specifiers.concat(this.parseNamedImports());
                        } else {
                          this.throwUnexpectedToken(this.lookahead);
                        }
                      }
                    } else {
                      this.throwUnexpectedToken(this.nextToken());
                    }
                    if (!this.matchContextualKeyword("from")) {
                      var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
                      this.throwError(message, this.lookahead.value);
                    }
                    this.nextToken();
                    src = this.parseModuleSpecifier();
                  }
                  this.consumeSemicolon();
                  return this.finalize(node, new Node2.ImportDeclaration(specifiers, src));
                };
                Parser2.prototype.parseExportSpecifier = function() {
                  var node = this.createNode();
                  var local = this.parseIdentifierName();
                  var exported = local;
                  if (this.matchContextualKeyword("as")) {
                    this.nextToken();
                    exported = this.parseIdentifierName();
                  }
                  return this.finalize(node, new Node2.ExportSpecifier(local, exported));
                };
                Parser2.prototype.parseExportDeclaration = function() {
                  if (this.context.inFunctionBody) {
                    this.throwError(messages_1.Messages.IllegalExportDeclaration);
                  }
                  var node = this.createNode();
                  this.expectKeyword("export");
                  var exportDeclaration;
                  if (this.matchKeyword("default")) {
                    this.nextToken();
                    if (this.matchKeyword("function")) {
                      var declaration = this.parseFunctionDeclaration(true);
                      exportDeclaration = this.finalize(node, new Node2.ExportDefaultDeclaration(declaration));
                    } else if (this.matchKeyword("class")) {
                      var declaration = this.parseClassDeclaration(true);
                      exportDeclaration = this.finalize(node, new Node2.ExportDefaultDeclaration(declaration));
                    } else if (this.matchContextualKeyword("async")) {
                      var declaration = this.matchAsyncFunction() ? this.parseFunctionDeclaration(true) : this.parseAssignmentExpression();
                      exportDeclaration = this.finalize(node, new Node2.ExportDefaultDeclaration(declaration));
                    } else {
                      if (this.matchContextualKeyword("from")) {
                        this.throwError(messages_1.Messages.UnexpectedToken, this.lookahead.value);
                      }
                      var declaration = this.match("{") ? this.parseObjectInitializer() : this.match("[") ? this.parseArrayInitializer() : this.parseAssignmentExpression();
                      this.consumeSemicolon();
                      exportDeclaration = this.finalize(node, new Node2.ExportDefaultDeclaration(declaration));
                    }
                  } else if (this.match("*")) {
                    this.nextToken();
                    if (!this.matchContextualKeyword("from")) {
                      var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
                      this.throwError(message, this.lookahead.value);
                    }
                    this.nextToken();
                    var src = this.parseModuleSpecifier();
                    this.consumeSemicolon();
                    exportDeclaration = this.finalize(node, new Node2.ExportAllDeclaration(src));
                  } else if (this.lookahead.type === 4) {
                    var declaration = void 0;
                    switch (this.lookahead.value) {
                      case "let":
                      case "const":
                        declaration = this.parseLexicalDeclaration({ inFor: false });
                        break;
                      case "var":
                      case "class":
                      case "function":
                        declaration = this.parseStatementListItem();
                        break;
                      default:
                        this.throwUnexpectedToken(this.lookahead);
                    }
                    exportDeclaration = this.finalize(node, new Node2.ExportNamedDeclaration(declaration, [], null));
                  } else if (this.matchAsyncFunction()) {
                    var declaration = this.parseFunctionDeclaration();
                    exportDeclaration = this.finalize(node, new Node2.ExportNamedDeclaration(declaration, [], null));
                  } else {
                    var specifiers = [];
                    var source = null;
                    var isExportFromIdentifier = false;
                    this.expect("{");
                    while (!this.match("}")) {
                      isExportFromIdentifier = isExportFromIdentifier || this.matchKeyword("default");
                      specifiers.push(this.parseExportSpecifier());
                      if (!this.match("}")) {
                        this.expect(",");
                      }
                    }
                    this.expect("}");
                    if (this.matchContextualKeyword("from")) {
                      this.nextToken();
                      source = this.parseModuleSpecifier();
                      this.consumeSemicolon();
                    } else if (isExportFromIdentifier) {
                      var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
                      this.throwError(message, this.lookahead.value);
                    } else {
                      this.consumeSemicolon();
                    }
                    exportDeclaration = this.finalize(node, new Node2.ExportNamedDeclaration(null, specifiers, source));
                  }
                  return exportDeclaration;
                };
                return Parser2;
              }();
              exports2.Parser = Parser;
            },
            /* 9 */
            /***/
            function(module2, exports2) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", { value: true });
              function assert(condition, message) {
                if (!condition) {
                  throw new Error("ASSERT: " + message);
                }
              }
              __name(assert, "assert");
              exports2.assert = assert;
            },
            /* 10 */
            /***/
            function(module2, exports2) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", { value: true });
              var ErrorHandler = function() {
                function ErrorHandler2() {
                  this.errors = [];
                  this.tolerant = false;
                }
                __name(ErrorHandler2, "ErrorHandler");
                ErrorHandler2.prototype.recordError = function(error) {
                  this.errors.push(error);
                };
                ErrorHandler2.prototype.tolerate = function(error) {
                  if (this.tolerant) {
                    this.recordError(error);
                  } else {
                    throw error;
                  }
                };
                ErrorHandler2.prototype.constructError = function(msg, column) {
                  var error = new Error(msg);
                  try {
                    throw error;
                  } catch (base) {
                    if (Object.create && Object.defineProperty) {
                      error = Object.create(base);
                      Object.defineProperty(error, "column", { value: column });
                    }
                  }
                  return error;
                };
                ErrorHandler2.prototype.createError = function(index, line, col, description) {
                  var msg = "Line " + line + ": " + description;
                  var error = this.constructError(msg, col);
                  error.index = index;
                  error.lineNumber = line;
                  error.description = description;
                  return error;
                };
                ErrorHandler2.prototype.throwError = function(index, line, col, description) {
                  throw this.createError(index, line, col, description);
                };
                ErrorHandler2.prototype.tolerateError = function(index, line, col, description) {
                  var error = this.createError(index, line, col, description);
                  if (this.tolerant) {
                    this.recordError(error);
                  } else {
                    throw error;
                  }
                };
                return ErrorHandler2;
              }();
              exports2.ErrorHandler = ErrorHandler;
            },
            /* 11 */
            /***/
            function(module2, exports2) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", { value: true });
              exports2.Messages = {
                BadGetterArity: "Getter must not have any formal parameters",
                BadSetterArity: "Setter must have exactly one formal parameter",
                BadSetterRestParameter: "Setter function argument must not be a rest parameter",
                ConstructorIsAsync: "Class constructor may not be an async method",
                ConstructorSpecialMethod: "Class constructor may not be an accessor",
                DeclarationMissingInitializer: "Missing initializer in %0 declaration",
                DefaultRestParameter: "Unexpected token =",
                DuplicateBinding: "Duplicate binding %0",
                DuplicateConstructor: "A class may only have one constructor",
                DuplicateProtoProperty: "Duplicate __proto__ fields are not allowed in object literals",
                ForInOfLoopInitializer: "%0 loop variable declaration may not have an initializer",
                GeneratorInLegacyContext: "Generator declarations are not allowed in legacy contexts",
                IllegalBreak: "Illegal break statement",
                IllegalContinue: "Illegal continue statement",
                IllegalExportDeclaration: "Unexpected token",
                IllegalImportDeclaration: "Unexpected token",
                IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list",
                IllegalReturn: "Illegal return statement",
                InvalidEscapedReservedWord: "Keyword must not contain escaped characters",
                InvalidHexEscapeSequence: "Invalid hexadecimal escape sequence",
                InvalidLHSInAssignment: "Invalid left-hand side in assignment",
                InvalidLHSInForIn: "Invalid left-hand side in for-in",
                InvalidLHSInForLoop: "Invalid left-hand side in for-loop",
                InvalidModuleSpecifier: "Unexpected token",
                InvalidRegExp: "Invalid regular expression",
                LetInLexicalBinding: "let is disallowed as a lexically bound name",
                MissingFromClause: "Unexpected token",
                MultipleDefaultsInSwitch: "More than one default clause in switch statement",
                NewlineAfterThrow: "Illegal newline after throw",
                NoAsAfterImportNamespace: "Unexpected token",
                NoCatchOrFinally: "Missing catch or finally after try",
                ParameterAfterRestParameter: "Rest parameter must be last formal parameter",
                Redeclaration: "%0 '%1' has already been declared",
                StaticPrototype: "Classes may not have static property named prototype",
                StrictCatchVariable: "Catch variable may not be eval or arguments in strict mode",
                StrictDelete: "Delete of an unqualified identifier in strict mode.",
                StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block",
                StrictFunctionName: "Function name may not be eval or arguments in strict mode",
                StrictLHSAssignment: "Assignment to eval or arguments is not allowed in strict mode",
                StrictLHSPostfix: "Postfix increment/decrement may not have eval or arguments operand in strict mode",
                StrictLHSPrefix: "Prefix increment/decrement may not have eval or arguments operand in strict mode",
                StrictModeWith: "Strict mode code may not include a with statement",
                StrictOctalLiteral: "Octal literals are not allowed in strict mode.",
                StrictParamDupe: "Strict mode function may not have duplicate parameter names",
                StrictParamName: "Parameter name eval or arguments is not allowed in strict mode",
                StrictReservedWord: "Use of future reserved word in strict mode",
                StrictVarName: "Variable name may not be eval or arguments in strict mode",
                TemplateOctalLiteral: "Octal literals are not allowed in template strings.",
                UnexpectedEOS: "Unexpected end of input",
                UnexpectedIdentifier: "Unexpected identifier",
                UnexpectedNumber: "Unexpected number",
                UnexpectedReserved: "Unexpected reserved word",
                UnexpectedString: "Unexpected string",
                UnexpectedTemplate: "Unexpected quasi %0",
                UnexpectedToken: "Unexpected token %0",
                UnexpectedTokenIllegal: "Unexpected token ILLEGAL",
                UnknownLabel: "Undefined label '%0'",
                UnterminatedRegExp: "Invalid regular expression: missing /"
              };
            },
            /* 12 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", { value: true });
              var assert_1 = __webpack_require__(9);
              var character_1 = __webpack_require__(4);
              var messages_1 = __webpack_require__(11);
              function hexValue(ch) {
                return "0123456789abcdef".indexOf(ch.toLowerCase());
              }
              __name(hexValue, "hexValue");
              function octalValue(ch) {
                return "01234567".indexOf(ch);
              }
              __name(octalValue, "octalValue");
              var Scanner = function() {
                function Scanner2(code, handler) {
                  this.source = code;
                  this.errorHandler = handler;
                  this.trackComment = false;
                  this.isModule = false;
                  this.length = code.length;
                  this.index = 0;
                  this.lineNumber = code.length > 0 ? 1 : 0;
                  this.lineStart = 0;
                  this.curlyStack = [];
                }
                __name(Scanner2, "Scanner");
                Scanner2.prototype.saveState = function() {
                  return {
                    index: this.index,
                    lineNumber: this.lineNumber,
                    lineStart: this.lineStart
                  };
                };
                Scanner2.prototype.restoreState = function(state) {
                  this.index = state.index;
                  this.lineNumber = state.lineNumber;
                  this.lineStart = state.lineStart;
                };
                Scanner2.prototype.eof = function() {
                  return this.index >= this.length;
                };
                Scanner2.prototype.throwUnexpectedToken = function(message) {
                  if (message === void 0) {
                    message = messages_1.Messages.UnexpectedTokenIllegal;
                  }
                  return this.errorHandler.throwError(this.index, this.lineNumber, this.index - this.lineStart + 1, message);
                };
                Scanner2.prototype.tolerateUnexpectedToken = function(message) {
                  if (message === void 0) {
                    message = messages_1.Messages.UnexpectedTokenIllegal;
                  }
                  this.errorHandler.tolerateError(this.index, this.lineNumber, this.index - this.lineStart + 1, message);
                };
                Scanner2.prototype.skipSingleLineComment = function(offset) {
                  var comments = [];
                  var start, loc;
                  if (this.trackComment) {
                    comments = [];
                    start = this.index - offset;
                    loc = {
                      start: {
                        line: this.lineNumber,
                        column: this.index - this.lineStart - offset
                      },
                      end: {}
                    };
                  }
                  while (!this.eof()) {
                    var ch = this.source.charCodeAt(this.index);
                    ++this.index;
                    if (character_1.Character.isLineTerminator(ch)) {
                      if (this.trackComment) {
                        loc.end = {
                          line: this.lineNumber,
                          column: this.index - this.lineStart - 1
                        };
                        var entry = {
                          multiLine: false,
                          slice: [start + offset, this.index - 1],
                          range: [start, this.index - 1],
                          loc
                        };
                        comments.push(entry);
                      }
                      if (ch === 13 && this.source.charCodeAt(this.index) === 10) {
                        ++this.index;
                      }
                      ++this.lineNumber;
                      this.lineStart = this.index;
                      return comments;
                    }
                  }
                  if (this.trackComment) {
                    loc.end = {
                      line: this.lineNumber,
                      column: this.index - this.lineStart
                    };
                    var entry = {
                      multiLine: false,
                      slice: [start + offset, this.index],
                      range: [start, this.index],
                      loc
                    };
                    comments.push(entry);
                  }
                  return comments;
                };
                Scanner2.prototype.skipMultiLineComment = function() {
                  var comments = [];
                  var start, loc;
                  if (this.trackComment) {
                    comments = [];
                    start = this.index - 2;
                    loc = {
                      start: {
                        line: this.lineNumber,
                        column: this.index - this.lineStart - 2
                      },
                      end: {}
                    };
                  }
                  while (!this.eof()) {
                    var ch = this.source.charCodeAt(this.index);
                    if (character_1.Character.isLineTerminator(ch)) {
                      if (ch === 13 && this.source.charCodeAt(this.index + 1) === 10) {
                        ++this.index;
                      }
                      ++this.lineNumber;
                      ++this.index;
                      this.lineStart = this.index;
                    } else if (ch === 42) {
                      if (this.source.charCodeAt(this.index + 1) === 47) {
                        this.index += 2;
                        if (this.trackComment) {
                          loc.end = {
                            line: this.lineNumber,
                            column: this.index - this.lineStart
                          };
                          var entry = {
                            multiLine: true,
                            slice: [start + 2, this.index - 2],
                            range: [start, this.index],
                            loc
                          };
                          comments.push(entry);
                        }
                        return comments;
                      }
                      ++this.index;
                    } else {
                      ++this.index;
                    }
                  }
                  if (this.trackComment) {
                    loc.end = {
                      line: this.lineNumber,
                      column: this.index - this.lineStart
                    };
                    var entry = {
                      multiLine: true,
                      slice: [start + 2, this.index],
                      range: [start, this.index],
                      loc
                    };
                    comments.push(entry);
                  }
                  this.tolerateUnexpectedToken();
                  return comments;
                };
                Scanner2.prototype.scanComments = function() {
                  var comments;
                  if (this.trackComment) {
                    comments = [];
                  }
                  var start = this.index === 0;
                  while (!this.eof()) {
                    var ch = this.source.charCodeAt(this.index);
                    if (character_1.Character.isWhiteSpace(ch)) {
                      ++this.index;
                    } else if (character_1.Character.isLineTerminator(ch)) {
                      ++this.index;
                      if (ch === 13 && this.source.charCodeAt(this.index) === 10) {
                        ++this.index;
                      }
                      ++this.lineNumber;
                      this.lineStart = this.index;
                      start = true;
                    } else if (ch === 47) {
                      ch = this.source.charCodeAt(this.index + 1);
                      if (ch === 47) {
                        this.index += 2;
                        var comment = this.skipSingleLineComment(2);
                        if (this.trackComment) {
                          comments = comments.concat(comment);
                        }
                        start = true;
                      } else if (ch === 42) {
                        this.index += 2;
                        var comment = this.skipMultiLineComment();
                        if (this.trackComment) {
                          comments = comments.concat(comment);
                        }
                      } else {
                        break;
                      }
                    } else if (start && ch === 45) {
                      if (this.source.charCodeAt(this.index + 1) === 45 && this.source.charCodeAt(this.index + 2) === 62) {
                        this.index += 3;
                        var comment = this.skipSingleLineComment(3);
                        if (this.trackComment) {
                          comments = comments.concat(comment);
                        }
                      } else {
                        break;
                      }
                    } else if (ch === 60 && !this.isModule) {
                      if (this.source.slice(this.index + 1, this.index + 4) === "!--") {
                        this.index += 4;
                        var comment = this.skipSingleLineComment(4);
                        if (this.trackComment) {
                          comments = comments.concat(comment);
                        }
                      } else {
                        break;
                      }
                    } else {
                      break;
                    }
                  }
                  return comments;
                };
                Scanner2.prototype.isFutureReservedWord = function(id) {
                  switch (id) {
                    case "enum":
                    case "export":
                    case "import":
                    case "super":
                      return true;
                    default:
                      return false;
                  }
                };
                Scanner2.prototype.isStrictModeReservedWord = function(id) {
                  switch (id) {
                    case "implements":
                    case "interface":
                    case "package":
                    case "private":
                    case "protected":
                    case "public":
                    case "static":
                    case "yield":
                    case "let":
                      return true;
                    default:
                      return false;
                  }
                };
                Scanner2.prototype.isRestrictedWord = function(id) {
                  return id === "eval" || id === "arguments";
                };
                Scanner2.prototype.isKeyword = function(id) {
                  switch (id.length) {
                    case 2:
                      return id === "if" || id === "in" || id === "do";
                    case 3:
                      return id === "var" || id === "for" || id === "new" || id === "try" || id === "let";
                    case 4:
                      return id === "this" || id === "else" || id === "case" || id === "void" || id === "with" || id === "enum";
                    case 5:
                      return id === "while" || id === "break" || id === "catch" || id === "throw" || id === "const" || id === "yield" || id === "class" || id === "super";
                    case 6:
                      return id === "return" || id === "typeof" || id === "delete" || id === "switch" || id === "export" || id === "import";
                    case 7:
                      return id === "default" || id === "finally" || id === "extends";
                    case 8:
                      return id === "function" || id === "continue" || id === "debugger";
                    case 10:
                      return id === "instanceof";
                    default:
                      return false;
                  }
                };
                Scanner2.prototype.codePointAt = function(i) {
                  var cp = this.source.charCodeAt(i);
                  if (cp >= 55296 && cp <= 56319) {
                    var second = this.source.charCodeAt(i + 1);
                    if (second >= 56320 && second <= 57343) {
                      var first = cp;
                      cp = (first - 55296) * 1024 + second - 56320 + 65536;
                    }
                  }
                  return cp;
                };
                Scanner2.prototype.scanHexEscape = function(prefix) {
                  var len = prefix === "u" ? 4 : 2;
                  var code = 0;
                  for (var i = 0; i < len; ++i) {
                    if (!this.eof() && character_1.Character.isHexDigit(this.source.charCodeAt(this.index))) {
                      code = code * 16 + hexValue(this.source[this.index++]);
                    } else {
                      return null;
                    }
                  }
                  return String.fromCharCode(code);
                };
                Scanner2.prototype.scanUnicodeCodePointEscape = function() {
                  var ch = this.source[this.index];
                  var code = 0;
                  if (ch === "}") {
                    this.throwUnexpectedToken();
                  }
                  while (!this.eof()) {
                    ch = this.source[this.index++];
                    if (!character_1.Character.isHexDigit(ch.charCodeAt(0))) {
                      break;
                    }
                    code = code * 16 + hexValue(ch);
                  }
                  if (code > 1114111 || ch !== "}") {
                    this.throwUnexpectedToken();
                  }
                  return character_1.Character.fromCodePoint(code);
                };
                Scanner2.prototype.getIdentifier = function() {
                  var start = this.index++;
                  while (!this.eof()) {
                    var ch = this.source.charCodeAt(this.index);
                    if (ch === 92) {
                      this.index = start;
                      return this.getComplexIdentifier();
                    } else if (ch >= 55296 && ch < 57343) {
                      this.index = start;
                      return this.getComplexIdentifier();
                    }
                    if (character_1.Character.isIdentifierPart(ch)) {
                      ++this.index;
                    } else {
                      break;
                    }
                  }
                  return this.source.slice(start, this.index);
                };
                Scanner2.prototype.getComplexIdentifier = function() {
                  var cp = this.codePointAt(this.index);
                  var id = character_1.Character.fromCodePoint(cp);
                  this.index += id.length;
                  var ch;
                  if (cp === 92) {
                    if (this.source.charCodeAt(this.index) !== 117) {
                      this.throwUnexpectedToken();
                    }
                    ++this.index;
                    if (this.source[this.index] === "{") {
                      ++this.index;
                      ch = this.scanUnicodeCodePointEscape();
                    } else {
                      ch = this.scanHexEscape("u");
                      if (ch === null || ch === "\\" || !character_1.Character.isIdentifierStart(ch.charCodeAt(0))) {
                        this.throwUnexpectedToken();
                      }
                    }
                    id = ch;
                  }
                  while (!this.eof()) {
                    cp = this.codePointAt(this.index);
                    if (!character_1.Character.isIdentifierPart(cp)) {
                      break;
                    }
                    ch = character_1.Character.fromCodePoint(cp);
                    id += ch;
                    this.index += ch.length;
                    if (cp === 92) {
                      id = id.substr(0, id.length - 1);
                      if (this.source.charCodeAt(this.index) !== 117) {
                        this.throwUnexpectedToken();
                      }
                      ++this.index;
                      if (this.source[this.index] === "{") {
                        ++this.index;
                        ch = this.scanUnicodeCodePointEscape();
                      } else {
                        ch = this.scanHexEscape("u");
                        if (ch === null || ch === "\\" || !character_1.Character.isIdentifierPart(ch.charCodeAt(0))) {
                          this.throwUnexpectedToken();
                        }
                      }
                      id += ch;
                    }
                  }
                  return id;
                };
                Scanner2.prototype.octalToDecimal = function(ch) {
                  var octal = ch !== "0";
                  var code = octalValue(ch);
                  if (!this.eof() && character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
                    octal = true;
                    code = code * 8 + octalValue(this.source[this.index++]);
                    if ("0123".indexOf(ch) >= 0 && !this.eof() && character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
                      code = code * 8 + octalValue(this.source[this.index++]);
                    }
                  }
                  return {
                    code,
                    octal
                  };
                };
                Scanner2.prototype.scanIdentifier = function() {
                  var type;
                  var start = this.index;
                  var id = this.source.charCodeAt(start) === 92 ? this.getComplexIdentifier() : this.getIdentifier();
                  if (id.length === 1) {
                    type = 3;
                  } else if (this.isKeyword(id)) {
                    type = 4;
                  } else if (id === "null") {
                    type = 5;
                  } else if (id === "true" || id === "false") {
                    type = 1;
                  } else {
                    type = 3;
                  }
                  if (type !== 3 && start + id.length !== this.index) {
                    var restore = this.index;
                    this.index = start;
                    this.tolerateUnexpectedToken(messages_1.Messages.InvalidEscapedReservedWord);
                    this.index = restore;
                  }
                  return {
                    type,
                    value: id,
                    lineNumber: this.lineNumber,
                    lineStart: this.lineStart,
                    start,
                    end: this.index
                  };
                };
                Scanner2.prototype.scanPunctuator = function() {
                  var start = this.index;
                  var str = this.source[this.index];
                  switch (str) {
                    case "(":
                    case "{":
                      if (str === "{") {
                        this.curlyStack.push("{");
                      }
                      ++this.index;
                      break;
                    case ".":
                      ++this.index;
                      if (this.source[this.index] === "." && this.source[this.index + 1] === ".") {
                        this.index += 2;
                        str = "...";
                      }
                      break;
                    case "}":
                      ++this.index;
                      this.curlyStack.pop();
                      break;
                    case ")":
                    case ";":
                    case ",":
                    case "[":
                    case "]":
                    case ":":
                    case "?":
                    case "~":
                      ++this.index;
                      break;
                    default:
                      str = this.source.substr(this.index, 4);
                      if (str === ">>>=") {
                        this.index += 4;
                      } else {
                        str = str.substr(0, 3);
                        if (str === "===" || str === "!==" || str === ">>>" || str === "<<=" || str === ">>=" || str === "**=") {
                          this.index += 3;
                        } else {
                          str = str.substr(0, 2);
                          if (str === "&&" || str === "||" || str === "==" || str === "!=" || str === "+=" || str === "-=" || str === "*=" || str === "/=" || str === "++" || str === "--" || str === "<<" || str === ">>" || str === "&=" || str === "|=" || str === "^=" || str === "%=" || str === "<=" || str === ">=" || str === "=>" || str === "**") {
                            this.index += 2;
                          } else {
                            str = this.source[this.index];
                            if ("<>=!+-*%&|^/".indexOf(str) >= 0) {
                              ++this.index;
                            }
                          }
                        }
                      }
                  }
                  if (this.index === start) {
                    this.throwUnexpectedToken();
                  }
                  return {
                    type: 7,
                    value: str,
                    lineNumber: this.lineNumber,
                    lineStart: this.lineStart,
                    start,
                    end: this.index
                  };
                };
                Scanner2.prototype.scanHexLiteral = function(start) {
                  var num = "";
                  while (!this.eof()) {
                    if (!character_1.Character.isHexDigit(this.source.charCodeAt(this.index))) {
                      break;
                    }
                    num += this.source[this.index++];
                  }
                  if (num.length === 0) {
                    this.throwUnexpectedToken();
                  }
                  if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
                    this.throwUnexpectedToken();
                  }
                  return {
                    type: 6,
                    value: parseInt("0x" + num, 16),
                    lineNumber: this.lineNumber,
                    lineStart: this.lineStart,
                    start,
                    end: this.index
                  };
                };
                Scanner2.prototype.scanBinaryLiteral = function(start) {
                  var num = "";
                  var ch;
                  while (!this.eof()) {
                    ch = this.source[this.index];
                    if (ch !== "0" && ch !== "1") {
                      break;
                    }
                    num += this.source[this.index++];
                  }
                  if (num.length === 0) {
                    this.throwUnexpectedToken();
                  }
                  if (!this.eof()) {
                    ch = this.source.charCodeAt(this.index);
                    if (character_1.Character.isIdentifierStart(ch) || character_1.Character.isDecimalDigit(ch)) {
                      this.throwUnexpectedToken();
                    }
                  }
                  return {
                    type: 6,
                    value: parseInt(num, 2),
                    lineNumber: this.lineNumber,
                    lineStart: this.lineStart,
                    start,
                    end: this.index
                  };
                };
                Scanner2.prototype.scanOctalLiteral = function(prefix, start) {
                  var num = "";
                  var octal = false;
                  if (character_1.Character.isOctalDigit(prefix.charCodeAt(0))) {
                    octal = true;
                    num = "0" + this.source[this.index++];
                  } else {
                    ++this.index;
                  }
                  while (!this.eof()) {
                    if (!character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
                      break;
                    }
                    num += this.source[this.index++];
                  }
                  if (!octal && num.length === 0) {
                    this.throwUnexpectedToken();
                  }
                  if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index)) || character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                    this.throwUnexpectedToken();
                  }
                  return {
                    type: 6,
                    value: parseInt(num, 8),
                    octal,
                    lineNumber: this.lineNumber,
                    lineStart: this.lineStart,
                    start,
                    end: this.index
                  };
                };
                Scanner2.prototype.isImplicitOctalLiteral = function() {
                  for (var i = this.index + 1; i < this.length; ++i) {
                    var ch = this.source[i];
                    if (ch === "8" || ch === "9") {
                      return false;
                    }
                    if (!character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
                      return true;
                    }
                  }
                  return true;
                };
                Scanner2.prototype.scanNumericLiteral = function() {
                  var start = this.index;
                  var ch = this.source[start];
                  assert_1.assert(character_1.Character.isDecimalDigit(ch.charCodeAt(0)) || ch === ".", "Numeric literal must start with a decimal digit or a decimal point");
                  var num = "";
                  if (ch !== ".") {
                    num = this.source[this.index++];
                    ch = this.source[this.index];
                    if (num === "0") {
                      if (ch === "x" || ch === "X") {
                        ++this.index;
                        return this.scanHexLiteral(start);
                      }
                      if (ch === "b" || ch === "B") {
                        ++this.index;
                        return this.scanBinaryLiteral(start);
                      }
                      if (ch === "o" || ch === "O") {
                        return this.scanOctalLiteral(ch, start);
                      }
                      if (ch && character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
                        if (this.isImplicitOctalLiteral()) {
                          return this.scanOctalLiteral(ch, start);
                        }
                      }
                    }
                    while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                      num += this.source[this.index++];
                    }
                    ch = this.source[this.index];
                  }
                  if (ch === ".") {
                    num += this.source[this.index++];
                    while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                      num += this.source[this.index++];
                    }
                    ch = this.source[this.index];
                  }
                  if (ch === "e" || ch === "E") {
                    num += this.source[this.index++];
                    ch = this.source[this.index];
                    if (ch === "+" || ch === "-") {
                      num += this.source[this.index++];
                    }
                    if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                      while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                        num += this.source[this.index++];
                      }
                    } else {
                      this.throwUnexpectedToken();
                    }
                  }
                  if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
                    this.throwUnexpectedToken();
                  }
                  return {
                    type: 6,
                    value: parseFloat(num),
                    lineNumber: this.lineNumber,
                    lineStart: this.lineStart,
                    start,
                    end: this.index
                  };
                };
                Scanner2.prototype.scanStringLiteral = function() {
                  var start = this.index;
                  var quote = this.source[start];
                  assert_1.assert(quote === "'" || quote === '"', "String literal must starts with a quote");
                  ++this.index;
                  var octal = false;
                  var str = "";
                  while (!this.eof()) {
                    var ch = this.source[this.index++];
                    if (ch === quote) {
                      quote = "";
                      break;
                    } else if (ch === "\\") {
                      ch = this.source[this.index++];
                      if (!ch || !character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                        switch (ch) {
                          case "u":
                            if (this.source[this.index] === "{") {
                              ++this.index;
                              str += this.scanUnicodeCodePointEscape();
                            } else {
                              var unescaped_1 = this.scanHexEscape(ch);
                              if (unescaped_1 === null) {
                                this.throwUnexpectedToken();
                              }
                              str += unescaped_1;
                            }
                            break;
                          case "x":
                            var unescaped = this.scanHexEscape(ch);
                            if (unescaped === null) {
                              this.throwUnexpectedToken(messages_1.Messages.InvalidHexEscapeSequence);
                            }
                            str += unescaped;
                            break;
                          case "n":
                            str += "\n";
                            break;
                          case "r":
                            str += "\r";
                            break;
                          case "t":
                            str += "	";
                            break;
                          case "b":
                            str += "\b";
                            break;
                          case "f":
                            str += "\f";
                            break;
                          case "v":
                            str += "\v";
                            break;
                          case "8":
                          case "9":
                            str += ch;
                            this.tolerateUnexpectedToken();
                            break;
                          default:
                            if (ch && character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
                              var octToDec = this.octalToDecimal(ch);
                              octal = octToDec.octal || octal;
                              str += String.fromCharCode(octToDec.code);
                            } else {
                              str += ch;
                            }
                            break;
                        }
                      } else {
                        ++this.lineNumber;
                        if (ch === "\r" && this.source[this.index] === "\n") {
                          ++this.index;
                        }
                        this.lineStart = this.index;
                      }
                    } else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                      break;
                    } else {
                      str += ch;
                    }
                  }
                  if (quote !== "") {
                    this.index = start;
                    this.throwUnexpectedToken();
                  }
                  return {
                    type: 8,
                    value: str,
                    octal,
                    lineNumber: this.lineNumber,
                    lineStart: this.lineStart,
                    start,
                    end: this.index
                  };
                };
                Scanner2.prototype.scanTemplate = function() {
                  var cooked = "";
                  var terminated = false;
                  var start = this.index;
                  var head = this.source[start] === "`";
                  var tail = false;
                  var rawOffset = 2;
                  ++this.index;
                  while (!this.eof()) {
                    var ch = this.source[this.index++];
                    if (ch === "`") {
                      rawOffset = 1;
                      tail = true;
                      terminated = true;
                      break;
                    } else if (ch === "$") {
                      if (this.source[this.index] === "{") {
                        this.curlyStack.push("${");
                        ++this.index;
                        terminated = true;
                        break;
                      }
                      cooked += ch;
                    } else if (ch === "\\") {
                      ch = this.source[this.index++];
                      if (!character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                        switch (ch) {
                          case "n":
                            cooked += "\n";
                            break;
                          case "r":
                            cooked += "\r";
                            break;
                          case "t":
                            cooked += "	";
                            break;
                          case "u":
                            if (this.source[this.index] === "{") {
                              ++this.index;
                              cooked += this.scanUnicodeCodePointEscape();
                            } else {
                              var restore = this.index;
                              var unescaped_2 = this.scanHexEscape(ch);
                              if (unescaped_2 !== null) {
                                cooked += unescaped_2;
                              } else {
                                this.index = restore;
                                cooked += ch;
                              }
                            }
                            break;
                          case "x":
                            var unescaped = this.scanHexEscape(ch);
                            if (unescaped === null) {
                              this.throwUnexpectedToken(messages_1.Messages.InvalidHexEscapeSequence);
                            }
                            cooked += unescaped;
                            break;
                          case "b":
                            cooked += "\b";
                            break;
                          case "f":
                            cooked += "\f";
                            break;
                          case "v":
                            cooked += "\v";
                            break;
                          default:
                            if (ch === "0") {
                              if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                                this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral);
                              }
                              cooked += "\0";
                            } else if (character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
                              this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral);
                            } else {
                              cooked += ch;
                            }
                            break;
                        }
                      } else {
                        ++this.lineNumber;
                        if (ch === "\r" && this.source[this.index] === "\n") {
                          ++this.index;
                        }
                        this.lineStart = this.index;
                      }
                    } else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                      ++this.lineNumber;
                      if (ch === "\r" && this.source[this.index] === "\n") {
                        ++this.index;
                      }
                      this.lineStart = this.index;
                      cooked += "\n";
                    } else {
                      cooked += ch;
                    }
                  }
                  if (!terminated) {
                    this.throwUnexpectedToken();
                  }
                  if (!head) {
                    this.curlyStack.pop();
                  }
                  return {
                    type: 10,
                    value: this.source.slice(start + 1, this.index - rawOffset),
                    cooked,
                    head,
                    tail,
                    lineNumber: this.lineNumber,
                    lineStart: this.lineStart,
                    start,
                    end: this.index
                  };
                };
                Scanner2.prototype.testRegExp = function(pattern, flags) {
                  var astralSubstitute = "\uFFFF";
                  var tmp = pattern;
                  var self2 = this;
                  if (flags.indexOf("u") >= 0) {
                    tmp = tmp.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, function($0, $1, $2) {
                      var codePoint = parseInt($1 || $2, 16);
                      if (codePoint > 1114111) {
                        self2.throwUnexpectedToken(messages_1.Messages.InvalidRegExp);
                      }
                      if (codePoint <= 65535) {
                        return String.fromCharCode(codePoint);
                      }
                      return astralSubstitute;
                    }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, astralSubstitute);
                  }
                  try {
                    RegExp(tmp);
                  } catch (e) {
                    this.throwUnexpectedToken(messages_1.Messages.InvalidRegExp);
                  }
                  try {
                    return new RegExp(pattern, flags);
                  } catch (exception) {
                    return null;
                  }
                };
                Scanner2.prototype.scanRegExpBody = function() {
                  var ch = this.source[this.index];
                  assert_1.assert(ch === "/", "Regular expression literal must start with a slash");
                  var str = this.source[this.index++];
                  var classMarker = false;
                  var terminated = false;
                  while (!this.eof()) {
                    ch = this.source[this.index++];
                    str += ch;
                    if (ch === "\\") {
                      ch = this.source[this.index++];
                      if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                        this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
                      }
                      str += ch;
                    } else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                      this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
                    } else if (classMarker) {
                      if (ch === "]") {
                        classMarker = false;
                      }
                    } else {
                      if (ch === "/") {
                        terminated = true;
                        break;
                      } else if (ch === "[") {
                        classMarker = true;
                      }
                    }
                  }
                  if (!terminated) {
                    this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
                  }
                  return str.substr(1, str.length - 2);
                };
                Scanner2.prototype.scanRegExpFlags = function() {
                  var str = "";
                  var flags = "";
                  while (!this.eof()) {
                    var ch = this.source[this.index];
                    if (!character_1.Character.isIdentifierPart(ch.charCodeAt(0))) {
                      break;
                    }
                    ++this.index;
                    if (ch === "\\" && !this.eof()) {
                      ch = this.source[this.index];
                      if (ch === "u") {
                        ++this.index;
                        var restore = this.index;
                        var char = this.scanHexEscape("u");
                        if (char !== null) {
                          flags += char;
                          for (str += "\\u"; restore < this.index; ++restore) {
                            str += this.source[restore];
                          }
                        } else {
                          this.index = restore;
                          flags += "u";
                          str += "\\u";
                        }
                        this.tolerateUnexpectedToken();
                      } else {
                        str += "\\";
                        this.tolerateUnexpectedToken();
                      }
                    } else {
                      flags += ch;
                      str += ch;
                    }
                  }
                  return flags;
                };
                Scanner2.prototype.scanRegExp = function() {
                  var start = this.index;
                  var pattern = this.scanRegExpBody();
                  var flags = this.scanRegExpFlags();
                  var value = this.testRegExp(pattern, flags);
                  return {
                    type: 9,
                    value: "",
                    pattern,
                    flags,
                    regex: value,
                    lineNumber: this.lineNumber,
                    lineStart: this.lineStart,
                    start,
                    end: this.index
                  };
                };
                Scanner2.prototype.lex = function() {
                  if (this.eof()) {
                    return {
                      type: 2,
                      value: "",
                      lineNumber: this.lineNumber,
                      lineStart: this.lineStart,
                      start: this.index,
                      end: this.index
                    };
                  }
                  var cp = this.source.charCodeAt(this.index);
                  if (character_1.Character.isIdentifierStart(cp)) {
                    return this.scanIdentifier();
                  }
                  if (cp === 40 || cp === 41 || cp === 59) {
                    return this.scanPunctuator();
                  }
                  if (cp === 39 || cp === 34) {
                    return this.scanStringLiteral();
                  }
                  if (cp === 46) {
                    if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index + 1))) {
                      return this.scanNumericLiteral();
                    }
                    return this.scanPunctuator();
                  }
                  if (character_1.Character.isDecimalDigit(cp)) {
                    return this.scanNumericLiteral();
                  }
                  if (cp === 96 || cp === 125 && this.curlyStack[this.curlyStack.length - 1] === "${") {
                    return this.scanTemplate();
                  }
                  if (cp >= 55296 && cp < 57343) {
                    if (character_1.Character.isIdentifierStart(this.codePointAt(this.index))) {
                      return this.scanIdentifier();
                    }
                  }
                  return this.scanPunctuator();
                };
                return Scanner2;
              }();
              exports2.Scanner = Scanner;
            },
            /* 13 */
            /***/
            function(module2, exports2) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", { value: true });
              exports2.TokenName = {};
              exports2.TokenName[
                1
                /* BooleanLiteral */
              ] = "Boolean";
              exports2.TokenName[
                2
                /* EOF */
              ] = "<end>";
              exports2.TokenName[
                3
                /* Identifier */
              ] = "Identifier";
              exports2.TokenName[
                4
                /* Keyword */
              ] = "Keyword";
              exports2.TokenName[
                5
                /* NullLiteral */
              ] = "Null";
              exports2.TokenName[
                6
                /* NumericLiteral */
              ] = "Numeric";
              exports2.TokenName[
                7
                /* Punctuator */
              ] = "Punctuator";
              exports2.TokenName[
                8
                /* StringLiteral */
              ] = "String";
              exports2.TokenName[
                9
                /* RegularExpression */
              ] = "RegularExpression";
              exports2.TokenName[
                10
                /* Template */
              ] = "Template";
            },
            /* 14 */
            /***/
            function(module2, exports2) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", { value: true });
              exports2.XHTMLEntities = {
                quot: '"',
                amp: "&",
                apos: "'",
                gt: ">",
                nbsp: "\xA0",
                iexcl: "\xA1",
                cent: "\xA2",
                pound: "\xA3",
                curren: "\xA4",
                yen: "\xA5",
                brvbar: "\xA6",
                sect: "\xA7",
                uml: "\xA8",
                copy: "\xA9",
                ordf: "\xAA",
                laquo: "\xAB",
                not: "\xAC",
                shy: "\xAD",
                reg: "\xAE",
                macr: "\xAF",
                deg: "\xB0",
                plusmn: "\xB1",
                sup2: "\xB2",
                sup3: "\xB3",
                acute: "\xB4",
                micro: "\xB5",
                para: "\xB6",
                middot: "\xB7",
                cedil: "\xB8",
                sup1: "\xB9",
                ordm: "\xBA",
                raquo: "\xBB",
                frac14: "\xBC",
                frac12: "\xBD",
                frac34: "\xBE",
                iquest: "\xBF",
                Agrave: "\xC0",
                Aacute: "\xC1",
                Acirc: "\xC2",
                Atilde: "\xC3",
                Auml: "\xC4",
                Aring: "\xC5",
                AElig: "\xC6",
                Ccedil: "\xC7",
                Egrave: "\xC8",
                Eacute: "\xC9",
                Ecirc: "\xCA",
                Euml: "\xCB",
                Igrave: "\xCC",
                Iacute: "\xCD",
                Icirc: "\xCE",
                Iuml: "\xCF",
                ETH: "\xD0",
                Ntilde: "\xD1",
                Ograve: "\xD2",
                Oacute: "\xD3",
                Ocirc: "\xD4",
                Otilde: "\xD5",
                Ouml: "\xD6",
                times: "\xD7",
                Oslash: "\xD8",
                Ugrave: "\xD9",
                Uacute: "\xDA",
                Ucirc: "\xDB",
                Uuml: "\xDC",
                Yacute: "\xDD",
                THORN: "\xDE",
                szlig: "\xDF",
                agrave: "\xE0",
                aacute: "\xE1",
                acirc: "\xE2",
                atilde: "\xE3",
                auml: "\xE4",
                aring: "\xE5",
                aelig: "\xE6",
                ccedil: "\xE7",
                egrave: "\xE8",
                eacute: "\xE9",
                ecirc: "\xEA",
                euml: "\xEB",
                igrave: "\xEC",
                iacute: "\xED",
                icirc: "\xEE",
                iuml: "\xEF",
                eth: "\xF0",
                ntilde: "\xF1",
                ograve: "\xF2",
                oacute: "\xF3",
                ocirc: "\xF4",
                otilde: "\xF5",
                ouml: "\xF6",
                divide: "\xF7",
                oslash: "\xF8",
                ugrave: "\xF9",
                uacute: "\xFA",
                ucirc: "\xFB",
                uuml: "\xFC",
                yacute: "\xFD",
                thorn: "\xFE",
                yuml: "\xFF",
                OElig: "\u0152",
                oelig: "\u0153",
                Scaron: "\u0160",
                scaron: "\u0161",
                Yuml: "\u0178",
                fnof: "\u0192",
                circ: "\u02C6",
                tilde: "\u02DC",
                Alpha: "\u0391",
                Beta: "\u0392",
                Gamma: "\u0393",
                Delta: "\u0394",
                Epsilon: "\u0395",
                Zeta: "\u0396",
                Eta: "\u0397",
                Theta: "\u0398",
                Iota: "\u0399",
                Kappa: "\u039A",
                Lambda: "\u039B",
                Mu: "\u039C",
                Nu: "\u039D",
                Xi: "\u039E",
                Omicron: "\u039F",
                Pi: "\u03A0",
                Rho: "\u03A1",
                Sigma: "\u03A3",
                Tau: "\u03A4",
                Upsilon: "\u03A5",
                Phi: "\u03A6",
                Chi: "\u03A7",
                Psi: "\u03A8",
                Omega: "\u03A9",
                alpha: "\u03B1",
                beta: "\u03B2",
                gamma: "\u03B3",
                delta: "\u03B4",
                epsilon: "\u03B5",
                zeta: "\u03B6",
                eta: "\u03B7",
                theta: "\u03B8",
                iota: "\u03B9",
                kappa: "\u03BA",
                lambda: "\u03BB",
                mu: "\u03BC",
                nu: "\u03BD",
                xi: "\u03BE",
                omicron: "\u03BF",
                pi: "\u03C0",
                rho: "\u03C1",
                sigmaf: "\u03C2",
                sigma: "\u03C3",
                tau: "\u03C4",
                upsilon: "\u03C5",
                phi: "\u03C6",
                chi: "\u03C7",
                psi: "\u03C8",
                omega: "\u03C9",
                thetasym: "\u03D1",
                upsih: "\u03D2",
                piv: "\u03D6",
                ensp: "\u2002",
                emsp: "\u2003",
                thinsp: "\u2009",
                zwnj: "\u200C",
                zwj: "\u200D",
                lrm: "\u200E",
                rlm: "\u200F",
                ndash: "\u2013",
                mdash: "\u2014",
                lsquo: "\u2018",
                rsquo: "\u2019",
                sbquo: "\u201A",
                ldquo: "\u201C",
                rdquo: "\u201D",
                bdquo: "\u201E",
                dagger: "\u2020",
                Dagger: "\u2021",
                bull: "\u2022",
                hellip: "\u2026",
                permil: "\u2030",
                prime: "\u2032",
                Prime: "\u2033",
                lsaquo: "\u2039",
                rsaquo: "\u203A",
                oline: "\u203E",
                frasl: "\u2044",
                euro: "\u20AC",
                image: "\u2111",
                weierp: "\u2118",
                real: "\u211C",
                trade: "\u2122",
                alefsym: "\u2135",
                larr: "\u2190",
                uarr: "\u2191",
                rarr: "\u2192",
                darr: "\u2193",
                harr: "\u2194",
                crarr: "\u21B5",
                lArr: "\u21D0",
                uArr: "\u21D1",
                rArr: "\u21D2",
                dArr: "\u21D3",
                hArr: "\u21D4",
                forall: "\u2200",
                part: "\u2202",
                exist: "\u2203",
                empty: "\u2205",
                nabla: "\u2207",
                isin: "\u2208",
                notin: "\u2209",
                ni: "\u220B",
                prod: "\u220F",
                sum: "\u2211",
                minus: "\u2212",
                lowast: "\u2217",
                radic: "\u221A",
                prop: "\u221D",
                infin: "\u221E",
                ang: "\u2220",
                and: "\u2227",
                or: "\u2228",
                cap: "\u2229",
                cup: "\u222A",
                int: "\u222B",
                there4: "\u2234",
                sim: "\u223C",
                cong: "\u2245",
                asymp: "\u2248",
                ne: "\u2260",
                equiv: "\u2261",
                le: "\u2264",
                ge: "\u2265",
                sub: "\u2282",
                sup: "\u2283",
                nsub: "\u2284",
                sube: "\u2286",
                supe: "\u2287",
                oplus: "\u2295",
                otimes: "\u2297",
                perp: "\u22A5",
                sdot: "\u22C5",
                lceil: "\u2308",
                rceil: "\u2309",
                lfloor: "\u230A",
                rfloor: "\u230B",
                loz: "\u25CA",
                spades: "\u2660",
                clubs: "\u2663",
                hearts: "\u2665",
                diams: "\u2666",
                lang: "\u27E8",
                rang: "\u27E9"
              };
            },
            /* 15 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", { value: true });
              var error_handler_1 = __webpack_require__(10);
              var scanner_1 = __webpack_require__(12);
              var token_1 = __webpack_require__(13);
              var Reader = function() {
                function Reader2() {
                  this.values = [];
                  this.curly = this.paren = -1;
                }
                __name(Reader2, "Reader");
                Reader2.prototype.beforeFunctionExpression = function(t) {
                  return [
                    "(",
                    "{",
                    "[",
                    "in",
                    "typeof",
                    "instanceof",
                    "new",
                    "return",
                    "case",
                    "delete",
                    "throw",
                    "void",
                    // assignment operators
                    "=",
                    "+=",
                    "-=",
                    "*=",
                    "**=",
                    "/=",
                    "%=",
                    "<<=",
                    ">>=",
                    ">>>=",
                    "&=",
                    "|=",
                    "^=",
                    ",",
                    // binary/unary operators
                    "+",
                    "-",
                    "*",
                    "**",
                    "/",
                    "%",
                    "++",
                    "--",
                    "<<",
                    ">>",
                    ">>>",
                    "&",
                    "|",
                    "^",
                    "!",
                    "~",
                    "&&",
                    "||",
                    "?",
                    ":",
                    "===",
                    "==",
                    ">=",
                    "<=",
                    "<",
                    ">",
                    "!=",
                    "!=="
                  ].indexOf(t) >= 0;
                };
                Reader2.prototype.isRegexStart = function() {
                  var previous = this.values[this.values.length - 1];
                  var regex = previous !== null;
                  switch (previous) {
                    case "this":
                    case "]":
                      regex = false;
                      break;
                    case ")":
                      var keyword = this.values[this.paren - 1];
                      regex = keyword === "if" || keyword === "while" || keyword === "for" || keyword === "with";
                      break;
                    case "}":
                      regex = false;
                      if (this.values[this.curly - 3] === "function") {
                        var check = this.values[this.curly - 4];
                        regex = check ? !this.beforeFunctionExpression(check) : false;
                      } else if (this.values[this.curly - 4] === "function") {
                        var check = this.values[this.curly - 5];
                        regex = check ? !this.beforeFunctionExpression(check) : true;
                      }
                      break;
                    default:
                      break;
                  }
                  return regex;
                };
                Reader2.prototype.push = function(token) {
                  if (token.type === 7 || token.type === 4) {
                    if (token.value === "{") {
                      this.curly = this.values.length;
                    } else if (token.value === "(") {
                      this.paren = this.values.length;
                    }
                    this.values.push(token.value);
                  } else {
                    this.values.push(null);
                  }
                };
                return Reader2;
              }();
              var Tokenizer = function() {
                function Tokenizer2(code, config) {
                  this.errorHandler = new error_handler_1.ErrorHandler();
                  this.errorHandler.tolerant = config ? typeof config.tolerant === "boolean" && config.tolerant : false;
                  this.scanner = new scanner_1.Scanner(code, this.errorHandler);
                  this.scanner.trackComment = config ? typeof config.comment === "boolean" && config.comment : false;
                  this.trackRange = config ? typeof config.range === "boolean" && config.range : false;
                  this.trackLoc = config ? typeof config.loc === "boolean" && config.loc : false;
                  this.buffer = [];
                  this.reader = new Reader();
                }
                __name(Tokenizer2, "Tokenizer");
                Tokenizer2.prototype.errors = function() {
                  return this.errorHandler.errors;
                };
                Tokenizer2.prototype.getNextToken = function() {
                  if (this.buffer.length === 0) {
                    var comments = this.scanner.scanComments();
                    if (this.scanner.trackComment) {
                      for (var i = 0; i < comments.length; ++i) {
                        var e = comments[i];
                        var value = this.scanner.source.slice(e.slice[0], e.slice[1]);
                        var comment = {
                          type: e.multiLine ? "BlockComment" : "LineComment",
                          value
                        };
                        if (this.trackRange) {
                          comment.range = e.range;
                        }
                        if (this.trackLoc) {
                          comment.loc = e.loc;
                        }
                        this.buffer.push(comment);
                      }
                    }
                    if (!this.scanner.eof()) {
                      var loc = void 0;
                      if (this.trackLoc) {
                        loc = {
                          start: {
                            line: this.scanner.lineNumber,
                            column: this.scanner.index - this.scanner.lineStart
                          },
                          end: {}
                        };
                      }
                      var startRegex = this.scanner.source[this.scanner.index] === "/" && this.reader.isRegexStart();
                      var token = startRegex ? this.scanner.scanRegExp() : this.scanner.lex();
                      this.reader.push(token);
                      var entry = {
                        type: token_1.TokenName[token.type],
                        value: this.scanner.source.slice(token.start, token.end)
                      };
                      if (this.trackRange) {
                        entry.range = [token.start, token.end];
                      }
                      if (this.trackLoc) {
                        loc.end = {
                          line: this.scanner.lineNumber,
                          column: this.scanner.index - this.scanner.lineStart
                        };
                        entry.loc = loc;
                      }
                      if (token.type === 9) {
                        var pattern = token.pattern;
                        var flags = token.flags;
                        entry.regex = { pattern, flags };
                      }
                      this.buffer.push(entry);
                    }
                  }
                  return this.buffer.shift();
                };
                return Tokenizer2;
              }();
              exports2.Tokenizer = Tokenizer;
            }
            /******/
          ])
        );
      });
    }
  });

  // node_modules/chroma-js/chroma.js
  var require_chroma = __commonJS({
    "node_modules/chroma-js/chroma.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.chroma = factory());
      })(exports, function() {
        "use strict";
        var limit$2 = /* @__PURE__ */ __name(function(x, min2, max2) {
          if (min2 === void 0)
            min2 = 0;
          if (max2 === void 0)
            max2 = 1;
          return x < min2 ? min2 : x > max2 ? max2 : x;
        }, "limit$2");
        var limit$1 = limit$2;
        var clip_rgb$3 = /* @__PURE__ */ __name(function(rgb2) {
          rgb2._clipped = false;
          rgb2._unclipped = rgb2.slice(0);
          for (var i2 = 0; i2 <= 3; i2++) {
            if (i2 < 3) {
              if (rgb2[i2] < 0 || rgb2[i2] > 255) {
                rgb2._clipped = true;
              }
              rgb2[i2] = limit$1(rgb2[i2], 0, 255);
            } else if (i2 === 3) {
              rgb2[i2] = limit$1(rgb2[i2], 0, 1);
            }
          }
          return rgb2;
        }, "clip_rgb$3");
        var classToType = {};
        for (var i$1 = 0, list$1 = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; i$1 < list$1.length; i$1 += 1) {
          var name = list$1[i$1];
          classToType["[object " + name + "]"] = name.toLowerCase();
        }
        var type$p = /* @__PURE__ */ __name(function(obj2) {
          return classToType[Object.prototype.toString.call(obj2)] || "object";
        }, "type$p");
        var type$o = type$p;
        var unpack$B = /* @__PURE__ */ __name(function(args, keyOrder) {
          if (keyOrder === void 0)
            keyOrder = null;
          if (args.length >= 3) {
            return Array.prototype.slice.call(args);
          }
          if (type$o(args[0]) == "object" && keyOrder) {
            return keyOrder.split("").filter(function(k) {
              return args[0][k] !== void 0;
            }).map(function(k) {
              return args[0][k];
            });
          }
          return args[0];
        }, "unpack$B");
        var type$n = type$p;
        var last$4 = /* @__PURE__ */ __name(function(args) {
          if (args.length < 2) {
            return null;
          }
          var l = args.length - 1;
          if (type$n(args[l]) == "string") {
            return args[l].toLowerCase();
          }
          return null;
        }, "last$4");
        var PI$2 = Math.PI;
        var utils = {
          clip_rgb: clip_rgb$3,
          limit: limit$2,
          type: type$p,
          unpack: unpack$B,
          last: last$4,
          PI: PI$2,
          TWOPI: PI$2 * 2,
          PITHIRD: PI$2 / 3,
          DEG2RAD: PI$2 / 180,
          RAD2DEG: 180 / PI$2
        };
        var input$h = {
          format: {},
          autodetect: []
        };
        var last$3 = utils.last;
        var clip_rgb$2 = utils.clip_rgb;
        var type$m = utils.type;
        var _input = input$h;
        var Color$D = /* @__PURE__ */ __name(function Color3() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var me = this;
          if (type$m(args[0]) === "object" && args[0].constructor && args[0].constructor === this.constructor) {
            return args[0];
          }
          var mode = last$3(args);
          var autodetect = false;
          if (!mode) {
            autodetect = true;
            if (!_input.sorted) {
              _input.autodetect = _input.autodetect.sort(function(a3, b3) {
                return b3.p - a3.p;
              });
              _input.sorted = true;
            }
            for (var i2 = 0, list2 = _input.autodetect; i2 < list2.length; i2 += 1) {
              var chk = list2[i2];
              mode = chk.test.apply(chk, args);
              if (mode) {
                break;
              }
            }
          }
          if (_input.format[mode]) {
            var rgb2 = _input.format[mode].apply(null, autodetect ? args : args.slice(0, -1));
            me._rgb = clip_rgb$2(rgb2);
          } else {
            throw new Error("unknown format: " + args);
          }
          if (me._rgb.length === 3) {
            me._rgb.push(1);
          }
        }, "Color");
        Color$D.prototype.toString = /* @__PURE__ */ __name(function toString() {
          if (type$m(this.hex) == "function") {
            return this.hex();
          }
          return "[" + this._rgb.join(",") + "]";
        }, "toString");
        var Color_1 = Color$D;
        var chroma$k = /* @__PURE__ */ __name(function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(chroma$k.Color, [null].concat(args)))();
        }, "chroma$k");
        chroma$k.Color = Color_1;
        chroma$k.version = "2.4.2";
        var chroma_1 = chroma$k;
        var unpack$A = utils.unpack;
        var max$2 = Math.max;
        var rgb2cmyk$1 = /* @__PURE__ */ __name(function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var ref = unpack$A(args, "rgb");
          var r = ref[0];
          var g = ref[1];
          var b3 = ref[2];
          r = r / 255;
          g = g / 255;
          b3 = b3 / 255;
          var k = 1 - max$2(r, max$2(g, b3));
          var f = k < 1 ? 1 / (1 - k) : 0;
          var c = (1 - r - k) * f;
          var m = (1 - g - k) * f;
          var y = (1 - b3 - k) * f;
          return [c, m, y, k];
        }, "rgb2cmyk$1");
        var rgb2cmyk_1 = rgb2cmyk$1;
        var unpack$z = utils.unpack;
        var cmyk2rgb = /* @__PURE__ */ __name(function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$z(args, "cmyk");
          var c = args[0];
          var m = args[1];
          var y = args[2];
          var k = args[3];
          var alpha = args.length > 4 ? args[4] : 1;
          if (k === 1) {
            return [0, 0, 0, alpha];
          }
          return [
            c >= 1 ? 0 : 255 * (1 - c) * (1 - k),
            // r
            m >= 1 ? 0 : 255 * (1 - m) * (1 - k),
            // g
            y >= 1 ? 0 : 255 * (1 - y) * (1 - k),
            // b
            alpha
          ];
        }, "cmyk2rgb");
        var cmyk2rgb_1 = cmyk2rgb;
        var chroma$j = chroma_1;
        var Color$C = Color_1;
        var input$g = input$h;
        var unpack$y = utils.unpack;
        var type$l = utils.type;
        var rgb2cmyk = rgb2cmyk_1;
        Color$C.prototype.cmyk = function() {
          return rgb2cmyk(this._rgb);
        };
        chroma$j.cmyk = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$C, [null].concat(args, ["cmyk"])))();
        };
        input$g.format.cmyk = cmyk2rgb_1;
        input$g.autodetect.push({
          p: 2,
          test: function() {
            var args = [], len = arguments.length;
            while (len--)
              args[len] = arguments[len];
            args = unpack$y(args, "cmyk");
            if (type$l(args) === "array" && args.length === 4) {
              return "cmyk";
            }
          }
        });
        var unpack$x = utils.unpack;
        var last$2 = utils.last;
        var rnd = /* @__PURE__ */ __name(function(a3) {
          return Math.round(a3 * 100) / 100;
        }, "rnd");
        var hsl2css$1 = /* @__PURE__ */ __name(function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var hsla = unpack$x(args, "hsla");
          var mode = last$2(args) || "lsa";
          hsla[0] = rnd(hsla[0] || 0);
          hsla[1] = rnd(hsla[1] * 100) + "%";
          hsla[2] = rnd(hsla[2] * 100) + "%";
          if (mode === "hsla" || hsla.length > 3 && hsla[3] < 1) {
            hsla[3] = hsla.length > 3 ? hsla[3] : 1;
            mode = "hsla";
          } else {
            hsla.length = 3;
          }
          return mode + "(" + hsla.join(",") + ")";
        }, "hsl2css$1");
        var hsl2css_1 = hsl2css$1;
        var unpack$w = utils.unpack;
        var rgb2hsl$3 = /* @__PURE__ */ __name(function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$w(args, "rgba");
          var r = args[0];
          var g = args[1];
          var b3 = args[2];
          r /= 255;
          g /= 255;
          b3 /= 255;
          var min2 = Math.min(r, g, b3);
          var max2 = Math.max(r, g, b3);
          var l = (max2 + min2) / 2;
          var s, h;
          if (max2 === min2) {
            s = 0;
            h = Number.NaN;
          } else {
            s = l < 0.5 ? (max2 - min2) / (max2 + min2) : (max2 - min2) / (2 - max2 - min2);
          }
          if (r == max2) {
            h = (g - b3) / (max2 - min2);
          } else if (g == max2) {
            h = 2 + (b3 - r) / (max2 - min2);
          } else if (b3 == max2) {
            h = 4 + (r - g) / (max2 - min2);
          }
          h *= 60;
          if (h < 0) {
            h += 360;
          }
          if (args.length > 3 && args[3] !== void 0) {
            return [h, s, l, args[3]];
          }
          return [h, s, l];
        }, "rgb2hsl$3");
        var rgb2hsl_1 = rgb2hsl$3;
        var unpack$v = utils.unpack;
        var last$1 = utils.last;
        var hsl2css = hsl2css_1;
        var rgb2hsl$2 = rgb2hsl_1;
        var round$6 = Math.round;
        var rgb2css$1 = /* @__PURE__ */ __name(function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var rgba = unpack$v(args, "rgba");
          var mode = last$1(args) || "rgb";
          if (mode.substr(0, 3) == "hsl") {
            return hsl2css(rgb2hsl$2(rgba), mode);
          }
          rgba[0] = round$6(rgba[0]);
          rgba[1] = round$6(rgba[1]);
          rgba[2] = round$6(rgba[2]);
          if (mode === "rgba" || rgba.length > 3 && rgba[3] < 1) {
            rgba[3] = rgba.length > 3 ? rgba[3] : 1;
            mode = "rgba";
          }
          return mode + "(" + rgba.slice(0, mode === "rgb" ? 3 : 4).join(",") + ")";
        }, "rgb2css$1");
        var rgb2css_1 = rgb2css$1;
        var unpack$u = utils.unpack;
        var round$5 = Math.round;
        var hsl2rgb$1 = /* @__PURE__ */ __name(function() {
          var assign2;
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$u(args, "hsl");
          var h = args[0];
          var s = args[1];
          var l = args[2];
          var r, g, b3;
          if (s === 0) {
            r = g = b3 = l * 255;
          } else {
            var t3 = [0, 0, 0];
            var c = [0, 0, 0];
            var t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var t1 = 2 * l - t2;
            var h_ = h / 360;
            t3[0] = h_ + 1 / 3;
            t3[1] = h_;
            t3[2] = h_ - 1 / 3;
            for (var i2 = 0; i2 < 3; i2++) {
              if (t3[i2] < 0) {
                t3[i2] += 1;
              }
              if (t3[i2] > 1) {
                t3[i2] -= 1;
              }
              if (6 * t3[i2] < 1) {
                c[i2] = t1 + (t2 - t1) * 6 * t3[i2];
              } else if (2 * t3[i2] < 1) {
                c[i2] = t2;
              } else if (3 * t3[i2] < 2) {
                c[i2] = t1 + (t2 - t1) * (2 / 3 - t3[i2]) * 6;
              } else {
                c[i2] = t1;
              }
            }
            assign2 = [round$5(c[0] * 255), round$5(c[1] * 255), round$5(c[2] * 255)], r = assign2[0], g = assign2[1], b3 = assign2[2];
          }
          if (args.length > 3) {
            return [r, g, b3, args[3]];
          }
          return [r, g, b3, 1];
        }, "hsl2rgb$1");
        var hsl2rgb_1 = hsl2rgb$1;
        var hsl2rgb = hsl2rgb_1;
        var input$f = input$h;
        var RE_RGB = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
        var RE_RGBA = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
        var RE_RGB_PCT = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
        var RE_RGBA_PCT = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
        var RE_HSL = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
        var RE_HSLA = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
        var round$4 = Math.round;
        var css2rgb$1 = /* @__PURE__ */ __name(function(css) {
          css = css.toLowerCase().trim();
          var m;
          if (input$f.format.named) {
            try {
              return input$f.format.named(css);
            } catch (e) {
            }
          }
          if (m = css.match(RE_RGB)) {
            var rgb2 = m.slice(1, 4);
            for (var i2 = 0; i2 < 3; i2++) {
              rgb2[i2] = +rgb2[i2];
            }
            rgb2[3] = 1;
            return rgb2;
          }
          if (m = css.match(RE_RGBA)) {
            var rgb$1 = m.slice(1, 5);
            for (var i$12 = 0; i$12 < 4; i$12++) {
              rgb$1[i$12] = +rgb$1[i$12];
            }
            return rgb$1;
          }
          if (m = css.match(RE_RGB_PCT)) {
            var rgb$2 = m.slice(1, 4);
            for (var i$2 = 0; i$2 < 3; i$2++) {
              rgb$2[i$2] = round$4(rgb$2[i$2] * 2.55);
            }
            rgb$2[3] = 1;
            return rgb$2;
          }
          if (m = css.match(RE_RGBA_PCT)) {
            var rgb$3 = m.slice(1, 5);
            for (var i$3 = 0; i$3 < 3; i$3++) {
              rgb$3[i$3] = round$4(rgb$3[i$3] * 2.55);
            }
            rgb$3[3] = +rgb$3[3];
            return rgb$3;
          }
          if (m = css.match(RE_HSL)) {
            var hsl2 = m.slice(1, 4);
            hsl2[1] *= 0.01;
            hsl2[2] *= 0.01;
            var rgb$4 = hsl2rgb(hsl2);
            rgb$4[3] = 1;
            return rgb$4;
          }
          if (m = css.match(RE_HSLA)) {
            var hsl$1 = m.slice(1, 4);
            hsl$1[1] *= 0.01;
            hsl$1[2] *= 0.01;
            var rgb$5 = hsl2rgb(hsl$1);
            rgb$5[3] = +m[4];
            return rgb$5;
          }
        }, "css2rgb$1");
        css2rgb$1.test = function(s) {
          return RE_RGB.test(s) || RE_RGBA.test(s) || RE_RGB_PCT.test(s) || RE_RGBA_PCT.test(s) || RE_HSL.test(s) || RE_HSLA.test(s);
        };
        var css2rgb_1 = css2rgb$1;
        var chroma$i = chroma_1;
        var Color$B = Color_1;
        var input$e = input$h;
        var type$k = utils.type;
        var rgb2css = rgb2css_1;
        var css2rgb = css2rgb_1;
        Color$B.prototype.css = function(mode) {
          return rgb2css(this._rgb, mode);
        };
        chroma$i.css = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$B, [null].concat(args, ["css"])))();
        };
        input$e.format.css = css2rgb;
        input$e.autodetect.push({
          p: 5,
          test: function(h) {
            var rest = [], len = arguments.length - 1;
            while (len-- > 0)
              rest[len] = arguments[len + 1];
            if (!rest.length && type$k(h) === "string" && css2rgb.test(h)) {
              return "css";
            }
          }
        });
        var Color$A = Color_1;
        var chroma$h = chroma_1;
        var input$d = input$h;
        var unpack$t = utils.unpack;
        input$d.format.gl = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var rgb2 = unpack$t(args, "rgba");
          rgb2[0] *= 255;
          rgb2[1] *= 255;
          rgb2[2] *= 255;
          return rgb2;
        };
        chroma$h.gl = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$A, [null].concat(args, ["gl"])))();
        };
        Color$A.prototype.gl = function() {
          var rgb2 = this._rgb;
          return [rgb2[0] / 255, rgb2[1] / 255, rgb2[2] / 255, rgb2[3]];
        };
        var unpack$s = utils.unpack;
        var rgb2hcg$1 = /* @__PURE__ */ __name(function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var ref = unpack$s(args, "rgb");
          var r = ref[0];
          var g = ref[1];
          var b3 = ref[2];
          var min2 = Math.min(r, g, b3);
          var max2 = Math.max(r, g, b3);
          var delta = max2 - min2;
          var c = delta * 100 / 255;
          var _g = min2 / (255 - delta) * 100;
          var h;
          if (delta === 0) {
            h = Number.NaN;
          } else {
            if (r === max2) {
              h = (g - b3) / delta;
            }
            if (g === max2) {
              h = 2 + (b3 - r) / delta;
            }
            if (b3 === max2) {
              h = 4 + (r - g) / delta;
            }
            h *= 60;
            if (h < 0) {
              h += 360;
            }
          }
          return [h, c, _g];
        }, "rgb2hcg$1");
        var rgb2hcg_1 = rgb2hcg$1;
        var unpack$r = utils.unpack;
        var floor$3 = Math.floor;
        var hcg2rgb = /* @__PURE__ */ __name(function() {
          var assign2, assign$1, assign$2, assign$3, assign$4, assign$5;
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$r(args, "hcg");
          var h = args[0];
          var c = args[1];
          var _g = args[2];
          var r, g, b3;
          _g = _g * 255;
          var _c = c * 255;
          if (c === 0) {
            r = g = b3 = _g;
          } else {
            if (h === 360) {
              h = 0;
            }
            if (h > 360) {
              h -= 360;
            }
            if (h < 0) {
              h += 360;
            }
            h /= 60;
            var i2 = floor$3(h);
            var f = h - i2;
            var p = _g * (1 - c);
            var q = p + _c * (1 - f);
            var t = p + _c * f;
            var v = p + _c;
            switch (i2) {
              case 0:
                assign2 = [v, t, p], r = assign2[0], g = assign2[1], b3 = assign2[2];
                break;
              case 1:
                assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b3 = assign$1[2];
                break;
              case 2:
                assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b3 = assign$2[2];
                break;
              case 3:
                assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b3 = assign$3[2];
                break;
              case 4:
                assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b3 = assign$4[2];
                break;
              case 5:
                assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b3 = assign$5[2];
                break;
            }
          }
          return [r, g, b3, args.length > 3 ? args[3] : 1];
        }, "hcg2rgb");
        var hcg2rgb_1 = hcg2rgb;
        var unpack$q = utils.unpack;
        var type$j = utils.type;
        var chroma$g = chroma_1;
        var Color$z = Color_1;
        var input$c = input$h;
        var rgb2hcg = rgb2hcg_1;
        Color$z.prototype.hcg = function() {
          return rgb2hcg(this._rgb);
        };
        chroma$g.hcg = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$z, [null].concat(args, ["hcg"])))();
        };
        input$c.format.hcg = hcg2rgb_1;
        input$c.autodetect.push({
          p: 1,
          test: function() {
            var args = [], len = arguments.length;
            while (len--)
              args[len] = arguments[len];
            args = unpack$q(args, "hcg");
            if (type$j(args) === "array" && args.length === 3) {
              return "hcg";
            }
          }
        });
        var unpack$p = utils.unpack;
        var last = utils.last;
        var round$3 = Math.round;
        var rgb2hex$2 = /* @__PURE__ */ __name(function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var ref = unpack$p(args, "rgba");
          var r = ref[0];
          var g = ref[1];
          var b3 = ref[2];
          var a3 = ref[3];
          var mode = last(args) || "auto";
          if (a3 === void 0) {
            a3 = 1;
          }
          if (mode === "auto") {
            mode = a3 < 1 ? "rgba" : "rgb";
          }
          r = round$3(r);
          g = round$3(g);
          b3 = round$3(b3);
          var u = r << 16 | g << 8 | b3;
          var str = "000000" + u.toString(16);
          str = str.substr(str.length - 6);
          var hxa = "0" + round$3(a3 * 255).toString(16);
          hxa = hxa.substr(hxa.length - 2);
          switch (mode.toLowerCase()) {
            case "rgba":
              return "#" + str + hxa;
            case "argb":
              return "#" + hxa + str;
            default:
              return "#" + str;
          }
        }, "rgb2hex$2");
        var rgb2hex_1 = rgb2hex$2;
        var RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        var RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
        var hex2rgb$1 = /* @__PURE__ */ __name(function(hex) {
          if (hex.match(RE_HEX)) {
            if (hex.length === 4 || hex.length === 7) {
              hex = hex.substr(1);
            }
            if (hex.length === 3) {
              hex = hex.split("");
              hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
            }
            var u = parseInt(hex, 16);
            var r = u >> 16;
            var g = u >> 8 & 255;
            var b3 = u & 255;
            return [r, g, b3, 1];
          }
          if (hex.match(RE_HEXA)) {
            if (hex.length === 5 || hex.length === 9) {
              hex = hex.substr(1);
            }
            if (hex.length === 4) {
              hex = hex.split("");
              hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
            }
            var u$1 = parseInt(hex, 16);
            var r$1 = u$1 >> 24 & 255;
            var g$1 = u$1 >> 16 & 255;
            var b$1 = u$1 >> 8 & 255;
            var a3 = Math.round((u$1 & 255) / 255 * 100) / 100;
            return [r$1, g$1, b$1, a3];
          }
          throw new Error("unknown hex color: " + hex);
        }, "hex2rgb$1");
        var hex2rgb_1 = hex2rgb$1;
        var chroma$f = chroma_1;
        var Color$y = Color_1;
        var type$i = utils.type;
        var input$b = input$h;
        var rgb2hex$1 = rgb2hex_1;
        Color$y.prototype.hex = function(mode) {
          return rgb2hex$1(this._rgb, mode);
        };
        chroma$f.hex = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$y, [null].concat(args, ["hex"])))();
        };
        input$b.format.hex = hex2rgb_1;
        input$b.autodetect.push({
          p: 4,
          test: function(h) {
            var rest = [], len = arguments.length - 1;
            while (len-- > 0)
              rest[len] = arguments[len + 1];
            if (!rest.length && type$i(h) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(h.length) >= 0) {
              return "hex";
            }
          }
        });
        var unpack$o = utils.unpack;
        var TWOPI$2 = utils.TWOPI;
        var min$2 = Math.min;
        var sqrt$4 = Math.sqrt;
        var acos = Math.acos;
        var rgb2hsi$1 = /* @__PURE__ */ __name(function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var ref = unpack$o(args, "rgb");
          var r = ref[0];
          var g = ref[1];
          var b3 = ref[2];
          r /= 255;
          g /= 255;
          b3 /= 255;
          var h;
          var min_ = min$2(r, g, b3);
          var i2 = (r + g + b3) / 3;
          var s = i2 > 0 ? 1 - min_ / i2 : 0;
          if (s === 0) {
            h = NaN;
          } else {
            h = (r - g + (r - b3)) / 2;
            h /= sqrt$4((r - g) * (r - g) + (r - b3) * (g - b3));
            h = acos(h);
            if (b3 > g) {
              h = TWOPI$2 - h;
            }
            h /= TWOPI$2;
          }
          return [h * 360, s, i2];
        }, "rgb2hsi$1");
        var rgb2hsi_1 = rgb2hsi$1;
        var unpack$n = utils.unpack;
        var limit = utils.limit;
        var TWOPI$1 = utils.TWOPI;
        var PITHIRD = utils.PITHIRD;
        var cos$4 = Math.cos;
        var hsi2rgb = /* @__PURE__ */ __name(function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$n(args, "hsi");
          var h = args[0];
          var s = args[1];
          var i2 = args[2];
          var r, g, b3;
          if (isNaN(h)) {
            h = 0;
          }
          if (isNaN(s)) {
            s = 0;
          }
          if (h > 360) {
            h -= 360;
          }
          if (h < 0) {
            h += 360;
          }
          h /= 360;
          if (h < 1 / 3) {
            b3 = (1 - s) / 3;
            r = (1 + s * cos$4(TWOPI$1 * h) / cos$4(PITHIRD - TWOPI$1 * h)) / 3;
            g = 1 - (b3 + r);
          } else if (h < 2 / 3) {
            h -= 1 / 3;
            r = (1 - s) / 3;
            g = (1 + s * cos$4(TWOPI$1 * h) / cos$4(PITHIRD - TWOPI$1 * h)) / 3;
            b3 = 1 - (r + g);
          } else {
            h -= 2 / 3;
            g = (1 - s) / 3;
            b3 = (1 + s * cos$4(TWOPI$1 * h) / cos$4(PITHIRD - TWOPI$1 * h)) / 3;
            r = 1 - (g + b3);
          }
          r = limit(i2 * r * 3);
          g = limit(i2 * g * 3);
          b3 = limit(i2 * b3 * 3);
          return [r * 255, g * 255, b3 * 255, args.length > 3 ? args[3] : 1];
        }, "hsi2rgb");
        var hsi2rgb_1 = hsi2rgb;
        var unpack$m = utils.unpack;
        var type$h = utils.type;
        var chroma$e = chroma_1;
        var Color$x = Color_1;
        var input$a = input$h;
        var rgb2hsi = rgb2hsi_1;
        Color$x.prototype.hsi = function() {
          return rgb2hsi(this._rgb);
        };
        chroma$e.hsi = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$x, [null].concat(args, ["hsi"])))();
        };
        input$a.format.hsi = hsi2rgb_1;
        input$a.autodetect.push({
          p: 2,
          test: function() {
            var args = [], len = arguments.length;
            while (len--)
              args[len] = arguments[len];
            args = unpack$m(args, "hsi");
            if (type$h(args) === "array" && args.length === 3) {
              return "hsi";
            }
          }
        });
        var unpack$l = utils.unpack;
        var type$g = utils.type;
        var chroma$d = chroma_1;
        var Color$w = Color_1;
        var input$9 = input$h;
        var rgb2hsl$1 = rgb2hsl_1;
        Color$w.prototype.hsl = function() {
          return rgb2hsl$1(this._rgb);
        };
        chroma$d.hsl = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$w, [null].concat(args, ["hsl"])))();
        };
        input$9.format.hsl = hsl2rgb_1;
        input$9.autodetect.push({
          p: 2,
          test: function() {
            var args = [], len = arguments.length;
            while (len--)
              args[len] = arguments[len];
            args = unpack$l(args, "hsl");
            if (type$g(args) === "array" && args.length === 3) {
              return "hsl";
            }
          }
        });
        var unpack$k = utils.unpack;
        var min$1 = Math.min;
        var max$1 = Math.max;
        var rgb2hsl = /* @__PURE__ */ __name(function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$k(args, "rgb");
          var r = args[0];
          var g = args[1];
          var b3 = args[2];
          var min_ = min$1(r, g, b3);
          var max_ = max$1(r, g, b3);
          var delta = max_ - min_;
          var h, s, v;
          v = max_ / 255;
          if (max_ === 0) {
            h = Number.NaN;
            s = 0;
          } else {
            s = delta / max_;
            if (r === max_) {
              h = (g - b3) / delta;
            }
            if (g === max_) {
              h = 2 + (b3 - r) / delta;
            }
            if (b3 === max_) {
              h = 4 + (r - g) / delta;
            }
            h *= 60;
            if (h < 0) {
              h += 360;
            }
          }
          return [h, s, v];
        }, "rgb2hsl");
        var rgb2hsv$1 = rgb2hsl;
        var unpack$j = utils.unpack;
        var floor$2 = Math.floor;
        var hsv2rgb = /* @__PURE__ */ __name(function() {
          var assign2, assign$1, assign$2, assign$3, assign$4, assign$5;
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$j(args, "hsv");
          var h = args[0];
          var s = args[1];
          var v = args[2];
          var r, g, b3;
          v *= 255;
          if (s === 0) {
            r = g = b3 = v;
          } else {
            if (h === 360) {
              h = 0;
            }
            if (h > 360) {
              h -= 360;
            }
            if (h < 0) {
              h += 360;
            }
            h /= 60;
            var i2 = floor$2(h);
            var f = h - i2;
            var p = v * (1 - s);
            var q = v * (1 - s * f);
            var t = v * (1 - s * (1 - f));
            switch (i2) {
              case 0:
                assign2 = [v, t, p], r = assign2[0], g = assign2[1], b3 = assign2[2];
                break;
              case 1:
                assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b3 = assign$1[2];
                break;
              case 2:
                assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b3 = assign$2[2];
                break;
              case 3:
                assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b3 = assign$3[2];
                break;
              case 4:
                assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b3 = assign$4[2];
                break;
              case 5:
                assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b3 = assign$5[2];
                break;
            }
          }
          return [r, g, b3, args.length > 3 ? args[3] : 1];
        }, "hsv2rgb");
        var hsv2rgb_1 = hsv2rgb;
        var unpack$i = utils.unpack;
        var type$f = utils.type;
        var chroma$c = chroma_1;
        var Color$v = Color_1;
        var input$8 = input$h;
        var rgb2hsv = rgb2hsv$1;
        Color$v.prototype.hsv = function() {
          return rgb2hsv(this._rgb);
        };
        chroma$c.hsv = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$v, [null].concat(args, ["hsv"])))();
        };
        input$8.format.hsv = hsv2rgb_1;
        input$8.autodetect.push({
          p: 2,
          test: function() {
            var args = [], len = arguments.length;
            while (len--)
              args[len] = arguments[len];
            args = unpack$i(args, "hsv");
            if (type$f(args) === "array" && args.length === 3) {
              return "hsv";
            }
          }
        });
        var labConstants = {
          // Corresponds roughly to RGB brighter/darker
          Kn: 18,
          // D65 standard referent
          Xn: 0.95047,
          Yn: 1,
          Zn: 1.08883,
          t0: 0.137931034,
          // 4 / 29
          t1: 0.206896552,
          // 6 / 29
          t2: 0.12841855,
          // 3 * t1 * t1
          t3: 8856452e-9
          // t1 * t1 * t1
        };
        var LAB_CONSTANTS$3 = labConstants;
        var unpack$h = utils.unpack;
        var pow$a = Math.pow;
        var rgb2lab$2 = /* @__PURE__ */ __name(function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var ref = unpack$h(args, "rgb");
          var r = ref[0];
          var g = ref[1];
          var b3 = ref[2];
          var ref$1 = rgb2xyz(r, g, b3);
          var x = ref$1[0];
          var y = ref$1[1];
          var z = ref$1[2];
          var l = 116 * y - 16;
          return [l < 0 ? 0 : l, 500 * (x - y), 200 * (y - z)];
        }, "rgb2lab$2");
        var rgb_xyz = /* @__PURE__ */ __name(function(r) {
          if ((r /= 255) <= 0.04045) {
            return r / 12.92;
          }
          return pow$a((r + 0.055) / 1.055, 2.4);
        }, "rgb_xyz");
        var xyz_lab = /* @__PURE__ */ __name(function(t) {
          if (t > LAB_CONSTANTS$3.t3) {
            return pow$a(t, 1 / 3);
          }
          return t / LAB_CONSTANTS$3.t2 + LAB_CONSTANTS$3.t0;
        }, "xyz_lab");
        var rgb2xyz = /* @__PURE__ */ __name(function(r, g, b3) {
          r = rgb_xyz(r);
          g = rgb_xyz(g);
          b3 = rgb_xyz(b3);
          var x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b3) / LAB_CONSTANTS$3.Xn);
          var y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.072175 * b3) / LAB_CONSTANTS$3.Yn);
          var z = xyz_lab((0.0193339 * r + 0.119192 * g + 0.9503041 * b3) / LAB_CONSTANTS$3.Zn);
          return [x, y, z];
        }, "rgb2xyz");
        var rgb2lab_1 = rgb2lab$2;
        var LAB_CONSTANTS$2 = labConstants;
        var unpack$g = utils.unpack;
        var pow$9 = Math.pow;
        var lab2rgb$1 = /* @__PURE__ */ __name(function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$g(args, "lab");
          var l = args[0];
          var a3 = args[1];
          var b3 = args[2];
          var x, y, z, r, g, b_;
          y = (l + 16) / 116;
          x = isNaN(a3) ? y : y + a3 / 500;
          z = isNaN(b3) ? y : y - b3 / 200;
          y = LAB_CONSTANTS$2.Yn * lab_xyz(y);
          x = LAB_CONSTANTS$2.Xn * lab_xyz(x);
          z = LAB_CONSTANTS$2.Zn * lab_xyz(z);
          r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);
          g = xyz_rgb(-0.969266 * x + 1.8760108 * y + 0.041556 * z);
          b_ = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);
          return [r, g, b_, args.length > 3 ? args[3] : 1];
        }, "lab2rgb$1");
        var xyz_rgb = /* @__PURE__ */ __name(function(r) {
          return 255 * (r <= 304e-5 ? 12.92 * r : 1.055 * pow$9(r, 1 / 2.4) - 0.055);
        }, "xyz_rgb");
        var lab_xyz = /* @__PURE__ */ __name(function(t) {
          return t > LAB_CONSTANTS$2.t1 ? t * t * t : LAB_CONSTANTS$2.t2 * (t - LAB_CONSTANTS$2.t0);
        }, "lab_xyz");
        var lab2rgb_1 = lab2rgb$1;
        var unpack$f = utils.unpack;
        var type$e = utils.type;
        var chroma$b = chroma_1;
        var Color$u = Color_1;
        var input$7 = input$h;
        var rgb2lab$1 = rgb2lab_1;
        Color$u.prototype.lab = function() {
          return rgb2lab$1(this._rgb);
        };
        chroma$b.lab = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$u, [null].concat(args, ["lab"])))();
        };
        input$7.format.lab = lab2rgb_1;
        input$7.autodetect.push({
          p: 2,
          test: function() {
            var args = [], len = arguments.length;
            while (len--)
              args[len] = arguments[len];
            args = unpack$f(args, "lab");
            if (type$e(args) === "array" && args.length === 3) {
              return "lab";
            }
          }
        });
        var unpack$e = utils.unpack;
        var RAD2DEG = utils.RAD2DEG;
        var sqrt$3 = Math.sqrt;
        var atan2$2 = Math.atan2;
        var round$2 = Math.round;
        var lab2lch$2 = /* @__PURE__ */ __name(function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var ref = unpack$e(args, "lab");
          var l = ref[0];
          var a3 = ref[1];
          var b3 = ref[2];
          var c = sqrt$3(a3 * a3 + b3 * b3);
          var h = (atan2$2(b3, a3) * RAD2DEG + 360) % 360;
          if (round$2(c * 1e4) === 0) {
            h = Number.NaN;
          }
          return [l, c, h];
        }, "lab2lch$2");
        var lab2lch_1 = lab2lch$2;
        var unpack$d = utils.unpack;
        var rgb2lab = rgb2lab_1;
        var lab2lch$1 = lab2lch_1;
        var rgb2lch$1 = /* @__PURE__ */ __name(function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var ref = unpack$d(args, "rgb");
          var r = ref[0];
          var g = ref[1];
          var b3 = ref[2];
          var ref$1 = rgb2lab(r, g, b3);
          var l = ref$1[0];
          var a3 = ref$1[1];
          var b_ = ref$1[2];
          return lab2lch$1(l, a3, b_);
        }, "rgb2lch$1");
        var rgb2lch_1 = rgb2lch$1;
        var unpack$c = utils.unpack;
        var DEG2RAD = utils.DEG2RAD;
        var sin$3 = Math.sin;
        var cos$3 = Math.cos;
        var lch2lab$2 = /* @__PURE__ */ __name(function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var ref = unpack$c(args, "lch");
          var l = ref[0];
          var c = ref[1];
          var h = ref[2];
          if (isNaN(h)) {
            h = 0;
          }
          h = h * DEG2RAD;
          return [l, cos$3(h) * c, sin$3(h) * c];
        }, "lch2lab$2");
        var lch2lab_1 = lch2lab$2;
        var unpack$b = utils.unpack;
        var lch2lab$1 = lch2lab_1;
        var lab2rgb = lab2rgb_1;
        var lch2rgb$1 = /* @__PURE__ */ __name(function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$b(args, "lch");
          var l = args[0];
          var c = args[1];
          var h = args[2];
          var ref = lch2lab$1(l, c, h);
          var L = ref[0];
          var a3 = ref[1];
          var b_ = ref[2];
          var ref$1 = lab2rgb(L, a3, b_);
          var r = ref$1[0];
          var g = ref$1[1];
          var b3 = ref$1[2];
          return [r, g, b3, args.length > 3 ? args[3] : 1];
        }, "lch2rgb$1");
        var lch2rgb_1 = lch2rgb$1;
        var unpack$a = utils.unpack;
        var lch2rgb = lch2rgb_1;
        var hcl2rgb = /* @__PURE__ */ __name(function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var hcl = unpack$a(args, "hcl").reverse();
          return lch2rgb.apply(void 0, hcl);
        }, "hcl2rgb");
        var hcl2rgb_1 = hcl2rgb;
        var unpack$9 = utils.unpack;
        var type$d = utils.type;
        var chroma$a = chroma_1;
        var Color$t = Color_1;
        var input$6 = input$h;
        var rgb2lch = rgb2lch_1;
        Color$t.prototype.lch = function() {
          return rgb2lch(this._rgb);
        };
        Color$t.prototype.hcl = function() {
          return rgb2lch(this._rgb).reverse();
        };
        chroma$a.lch = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$t, [null].concat(args, ["lch"])))();
        };
        chroma$a.hcl = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$t, [null].concat(args, ["hcl"])))();
        };
        input$6.format.lch = lch2rgb_1;
        input$6.format.hcl = hcl2rgb_1;
        ["lch", "hcl"].forEach(function(m) {
          return input$6.autodetect.push({
            p: 2,
            test: function() {
              var args = [], len = arguments.length;
              while (len--)
                args[len] = arguments[len];
              args = unpack$9(args, m);
              if (type$d(args) === "array" && args.length === 3) {
                return m;
              }
            }
          });
        });
        var w3cx11$1 = {
          aliceblue: "#f0f8ff",
          antiquewhite: "#faebd7",
          aqua: "#00ffff",
          aquamarine: "#7fffd4",
          azure: "#f0ffff",
          beige: "#f5f5dc",
          bisque: "#ffe4c4",
          black: "#000000",
          blanchedalmond: "#ffebcd",
          blue: "#0000ff",
          blueviolet: "#8a2be2",
          brown: "#a52a2a",
          burlywood: "#deb887",
          cadetblue: "#5f9ea0",
          chartreuse: "#7fff00",
          chocolate: "#d2691e",
          coral: "#ff7f50",
          cornflower: "#6495ed",
          cornflowerblue: "#6495ed",
          cornsilk: "#fff8dc",
          crimson: "#dc143c",
          cyan: "#00ffff",
          darkblue: "#00008b",
          darkcyan: "#008b8b",
          darkgoldenrod: "#b8860b",
          darkgray: "#a9a9a9",
          darkgreen: "#006400",
          darkgrey: "#a9a9a9",
          darkkhaki: "#bdb76b",
          darkmagenta: "#8b008b",
          darkolivegreen: "#556b2f",
          darkorange: "#ff8c00",
          darkorchid: "#9932cc",
          darkred: "#8b0000",
          darksalmon: "#e9967a",
          darkseagreen: "#8fbc8f",
          darkslateblue: "#483d8b",
          darkslategray: "#2f4f4f",
          darkslategrey: "#2f4f4f",
          darkturquoise: "#00ced1",
          darkviolet: "#9400d3",
          deeppink: "#ff1493",
          deepskyblue: "#00bfff",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1e90ff",
          firebrick: "#b22222",
          floralwhite: "#fffaf0",
          forestgreen: "#228b22",
          fuchsia: "#ff00ff",
          gainsboro: "#dcdcdc",
          ghostwhite: "#f8f8ff",
          gold: "#ffd700",
          goldenrod: "#daa520",
          gray: "#808080",
          green: "#008000",
          greenyellow: "#adff2f",
          grey: "#808080",
          honeydew: "#f0fff0",
          hotpink: "#ff69b4",
          indianred: "#cd5c5c",
          indigo: "#4b0082",
          ivory: "#fffff0",
          khaki: "#f0e68c",
          laserlemon: "#ffff54",
          lavender: "#e6e6fa",
          lavenderblush: "#fff0f5",
          lawngreen: "#7cfc00",
          lemonchiffon: "#fffacd",
          lightblue: "#add8e6",
          lightcoral: "#f08080",
          lightcyan: "#e0ffff",
          lightgoldenrod: "#fafad2",
          lightgoldenrodyellow: "#fafad2",
          lightgray: "#d3d3d3",
          lightgreen: "#90ee90",
          lightgrey: "#d3d3d3",
          lightpink: "#ffb6c1",
          lightsalmon: "#ffa07a",
          lightseagreen: "#20b2aa",
          lightskyblue: "#87cefa",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#b0c4de",
          lightyellow: "#ffffe0",
          lime: "#00ff00",
          limegreen: "#32cd32",
          linen: "#faf0e6",
          magenta: "#ff00ff",
          maroon: "#800000",
          maroon2: "#7f0000",
          maroon3: "#b03060",
          mediumaquamarine: "#66cdaa",
          mediumblue: "#0000cd",
          mediumorchid: "#ba55d3",
          mediumpurple: "#9370db",
          mediumseagreen: "#3cb371",
          mediumslateblue: "#7b68ee",
          mediumspringgreen: "#00fa9a",
          mediumturquoise: "#48d1cc",
          mediumvioletred: "#c71585",
          midnightblue: "#191970",
          mintcream: "#f5fffa",
          mistyrose: "#ffe4e1",
          moccasin: "#ffe4b5",
          navajowhite: "#ffdead",
          navy: "#000080",
          oldlace: "#fdf5e6",
          olive: "#808000",
          olivedrab: "#6b8e23",
          orange: "#ffa500",
          orangered: "#ff4500",
          orchid: "#da70d6",
          palegoldenrod: "#eee8aa",
          palegreen: "#98fb98",
          paleturquoise: "#afeeee",
          palevioletred: "#db7093",
          papayawhip: "#ffefd5",
          peachpuff: "#ffdab9",
          peru: "#cd853f",
          pink: "#ffc0cb",
          plum: "#dda0dd",
          powderblue: "#b0e0e6",
          purple: "#800080",
          purple2: "#7f007f",
          purple3: "#a020f0",
          rebeccapurple: "#663399",
          red: "#ff0000",
          rosybrown: "#bc8f8f",
          royalblue: "#4169e1",
          saddlebrown: "#8b4513",
          salmon: "#fa8072",
          sandybrown: "#f4a460",
          seagreen: "#2e8b57",
          seashell: "#fff5ee",
          sienna: "#a0522d",
          silver: "#c0c0c0",
          skyblue: "#87ceeb",
          slateblue: "#6a5acd",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#fffafa",
          springgreen: "#00ff7f",
          steelblue: "#4682b4",
          tan: "#d2b48c",
          teal: "#008080",
          thistle: "#d8bfd8",
          tomato: "#ff6347",
          turquoise: "#40e0d0",
          violet: "#ee82ee",
          wheat: "#f5deb3",
          white: "#ffffff",
          whitesmoke: "#f5f5f5",
          yellow: "#ffff00",
          yellowgreen: "#9acd32"
        };
        var w3cx11_1 = w3cx11$1;
        var Color$s = Color_1;
        var input$5 = input$h;
        var type$c = utils.type;
        var w3cx11 = w3cx11_1;
        var hex2rgb = hex2rgb_1;
        var rgb2hex = rgb2hex_1;
        Color$s.prototype.name = function() {
          var hex = rgb2hex(this._rgb, "rgb");
          for (var i2 = 0, list2 = Object.keys(w3cx11); i2 < list2.length; i2 += 1) {
            var n = list2[i2];
            if (w3cx11[n] === hex) {
              return n.toLowerCase();
            }
          }
          return hex;
        };
        input$5.format.named = function(name2) {
          name2 = name2.toLowerCase();
          if (w3cx11[name2]) {
            return hex2rgb(w3cx11[name2]);
          }
          throw new Error("unknown color name: " + name2);
        };
        input$5.autodetect.push({
          p: 5,
          test: function(h) {
            var rest = [], len = arguments.length - 1;
            while (len-- > 0)
              rest[len] = arguments[len + 1];
            if (!rest.length && type$c(h) === "string" && w3cx11[h.toLowerCase()]) {
              return "named";
            }
          }
        });
        var unpack$8 = utils.unpack;
        var rgb2num$1 = /* @__PURE__ */ __name(function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var ref = unpack$8(args, "rgb");
          var r = ref[0];
          var g = ref[1];
          var b3 = ref[2];
          return (r << 16) + (g << 8) + b3;
        }, "rgb2num$1");
        var rgb2num_1 = rgb2num$1;
        var type$b = utils.type;
        var num2rgb = /* @__PURE__ */ __name(function(num2) {
          if (type$b(num2) == "number" && num2 >= 0 && num2 <= 16777215) {
            var r = num2 >> 16;
            var g = num2 >> 8 & 255;
            var b3 = num2 & 255;
            return [r, g, b3, 1];
          }
          throw new Error("unknown num color: " + num2);
        }, "num2rgb");
        var num2rgb_1 = num2rgb;
        var chroma$9 = chroma_1;
        var Color$r = Color_1;
        var input$4 = input$h;
        var type$a = utils.type;
        var rgb2num = rgb2num_1;
        Color$r.prototype.num = function() {
          return rgb2num(this._rgb);
        };
        chroma$9.num = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$r, [null].concat(args, ["num"])))();
        };
        input$4.format.num = num2rgb_1;
        input$4.autodetect.push({
          p: 5,
          test: function() {
            var args = [], len = arguments.length;
            while (len--)
              args[len] = arguments[len];
            if (args.length === 1 && type$a(args[0]) === "number" && args[0] >= 0 && args[0] <= 16777215) {
              return "num";
            }
          }
        });
        var chroma$8 = chroma_1;
        var Color$q = Color_1;
        var input$3 = input$h;
        var unpack$7 = utils.unpack;
        var type$9 = utils.type;
        var round$1 = Math.round;
        Color$q.prototype.rgb = function(rnd2) {
          if (rnd2 === void 0)
            rnd2 = true;
          if (rnd2 === false) {
            return this._rgb.slice(0, 3);
          }
          return this._rgb.slice(0, 3).map(round$1);
        };
        Color$q.prototype.rgba = function(rnd2) {
          if (rnd2 === void 0)
            rnd2 = true;
          return this._rgb.slice(0, 4).map(function(v, i2) {
            return i2 < 3 ? rnd2 === false ? v : round$1(v) : v;
          });
        };
        chroma$8.rgb = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$q, [null].concat(args, ["rgb"])))();
        };
        input$3.format.rgb = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var rgba = unpack$7(args, "rgba");
          if (rgba[3] === void 0) {
            rgba[3] = 1;
          }
          return rgba;
        };
        input$3.autodetect.push({
          p: 3,
          test: function() {
            var args = [], len = arguments.length;
            while (len--)
              args[len] = arguments[len];
            args = unpack$7(args, "rgba");
            if (type$9(args) === "array" && (args.length === 3 || args.length === 4 && type$9(args[3]) == "number" && args[3] >= 0 && args[3] <= 1)) {
              return "rgb";
            }
          }
        });
        var log$1 = Math.log;
        var temperature2rgb$1 = /* @__PURE__ */ __name(function(kelvin) {
          var temp = kelvin / 100;
          var r, g, b3;
          if (temp < 66) {
            r = 255;
            g = temp < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log$1(g);
            b3 = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b3 = temp - 10) + 115.67994401066147 * log$1(b3);
          } else {
            r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log$1(r);
            g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log$1(g);
            b3 = 255;
          }
          return [r, g, b3, 1];
        }, "temperature2rgb$1");
        var temperature2rgb_1 = temperature2rgb$1;
        var temperature2rgb = temperature2rgb_1;
        var unpack$6 = utils.unpack;
        var round = Math.round;
        var rgb2temperature$1 = /* @__PURE__ */ __name(function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var rgb2 = unpack$6(args, "rgb");
          var r = rgb2[0], b3 = rgb2[2];
          var minTemp = 1e3;
          var maxTemp = 4e4;
          var eps = 0.4;
          var temp;
          while (maxTemp - minTemp > eps) {
            temp = (maxTemp + minTemp) * 0.5;
            var rgb$1 = temperature2rgb(temp);
            if (rgb$1[2] / rgb$1[0] >= b3 / r) {
              maxTemp = temp;
            } else {
              minTemp = temp;
            }
          }
          return round(temp);
        }, "rgb2temperature$1");
        var rgb2temperature_1 = rgb2temperature$1;
        var chroma$7 = chroma_1;
        var Color$p = Color_1;
        var input$2 = input$h;
        var rgb2temperature = rgb2temperature_1;
        Color$p.prototype.temp = Color$p.prototype.kelvin = Color$p.prototype.temperature = function() {
          return rgb2temperature(this._rgb);
        };
        chroma$7.temp = chroma$7.kelvin = chroma$7.temperature = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$p, [null].concat(args, ["temp"])))();
        };
        input$2.format.temp = input$2.format.kelvin = input$2.format.temperature = temperature2rgb_1;
        var unpack$5 = utils.unpack;
        var cbrt = Math.cbrt;
        var pow$8 = Math.pow;
        var sign$1 = Math.sign;
        var rgb2oklab$2 = /* @__PURE__ */ __name(function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var ref = unpack$5(args, "rgb");
          var r = ref[0];
          var g = ref[1];
          var b3 = ref[2];
          var ref$1 = [rgb2lrgb(r / 255), rgb2lrgb(g / 255), rgb2lrgb(b3 / 255)];
          var lr = ref$1[0];
          var lg = ref$1[1];
          var lb = ref$1[2];
          var l = cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
          var m = cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
          var s = cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
          return [
            0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
            1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
            0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s
          ];
        }, "rgb2oklab$2");
        var rgb2oklab_1 = rgb2oklab$2;
        function rgb2lrgb(c) {
          var abs2 = Math.abs(c);
          if (abs2 < 0.04045) {
            return c / 12.92;
          }
          return (sign$1(c) || 1) * pow$8((abs2 + 0.055) / 1.055, 2.4);
        }
        __name(rgb2lrgb, "rgb2lrgb");
        var unpack$4 = utils.unpack;
        var pow$7 = Math.pow;
        var sign = Math.sign;
        var oklab2rgb$1 = /* @__PURE__ */ __name(function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$4(args, "lab");
          var L = args[0];
          var a3 = args[1];
          var b3 = args[2];
          var l = pow$7(L + 0.3963377774 * a3 + 0.2158037573 * b3, 3);
          var m = pow$7(L - 0.1055613458 * a3 - 0.0638541728 * b3, 3);
          var s = pow$7(L - 0.0894841775 * a3 - 1.291485548 * b3, 3);
          return [
            255 * lrgb2rgb(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
            255 * lrgb2rgb(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
            255 * lrgb2rgb(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s),
            args.length > 3 ? args[3] : 1
          ];
        }, "oklab2rgb$1");
        var oklab2rgb_1 = oklab2rgb$1;
        function lrgb2rgb(c) {
          var abs2 = Math.abs(c);
          if (abs2 > 31308e-7) {
            return (sign(c) || 1) * (1.055 * pow$7(abs2, 1 / 2.4) - 0.055);
          }
          return c * 12.92;
        }
        __name(lrgb2rgb, "lrgb2rgb");
        var unpack$3 = utils.unpack;
        var type$8 = utils.type;
        var chroma$6 = chroma_1;
        var Color$o = Color_1;
        var input$1 = input$h;
        var rgb2oklab$1 = rgb2oklab_1;
        Color$o.prototype.oklab = function() {
          return rgb2oklab$1(this._rgb);
        };
        chroma$6.oklab = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$o, [null].concat(args, ["oklab"])))();
        };
        input$1.format.oklab = oklab2rgb_1;
        input$1.autodetect.push({
          p: 3,
          test: function() {
            var args = [], len = arguments.length;
            while (len--)
              args[len] = arguments[len];
            args = unpack$3(args, "oklab");
            if (type$8(args) === "array" && args.length === 3) {
              return "oklab";
            }
          }
        });
        var unpack$2 = utils.unpack;
        var rgb2oklab = rgb2oklab_1;
        var lab2lch = lab2lch_1;
        var rgb2oklch$1 = /* @__PURE__ */ __name(function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var ref = unpack$2(args, "rgb");
          var r = ref[0];
          var g = ref[1];
          var b3 = ref[2];
          var ref$1 = rgb2oklab(r, g, b3);
          var l = ref$1[0];
          var a3 = ref$1[1];
          var b_ = ref$1[2];
          return lab2lch(l, a3, b_);
        }, "rgb2oklch$1");
        var rgb2oklch_1 = rgb2oklch$1;
        var unpack$1 = utils.unpack;
        var lch2lab = lch2lab_1;
        var oklab2rgb = oklab2rgb_1;
        var oklch2rgb = /* @__PURE__ */ __name(function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$1(args, "lch");
          var l = args[0];
          var c = args[1];
          var h = args[2];
          var ref = lch2lab(l, c, h);
          var L = ref[0];
          var a3 = ref[1];
          var b_ = ref[2];
          var ref$1 = oklab2rgb(L, a3, b_);
          var r = ref$1[0];
          var g = ref$1[1];
          var b3 = ref$1[2];
          return [r, g, b3, args.length > 3 ? args[3] : 1];
        }, "oklch2rgb");
        var oklch2rgb_1 = oklch2rgb;
        var unpack = utils.unpack;
        var type$7 = utils.type;
        var chroma$5 = chroma_1;
        var Color$n = Color_1;
        var input = input$h;
        var rgb2oklch = rgb2oklch_1;
        Color$n.prototype.oklch = function() {
          return rgb2oklch(this._rgb);
        };
        chroma$5.oklch = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$n, [null].concat(args, ["oklch"])))();
        };
        input.format.oklch = oklch2rgb_1;
        input.autodetect.push({
          p: 3,
          test: function() {
            var args = [], len = arguments.length;
            while (len--)
              args[len] = arguments[len];
            args = unpack(args, "oklch");
            if (type$7(args) === "array" && args.length === 3) {
              return "oklch";
            }
          }
        });
        var Color$m = Color_1;
        var type$6 = utils.type;
        Color$m.prototype.alpha = function(a3, mutate) {
          if (mutate === void 0)
            mutate = false;
          if (a3 !== void 0 && type$6(a3) === "number") {
            if (mutate) {
              this._rgb[3] = a3;
              return this;
            }
            return new Color$m([this._rgb[0], this._rgb[1], this._rgb[2], a3], "rgb");
          }
          return this._rgb[3];
        };
        var Color$l = Color_1;
        Color$l.prototype.clipped = function() {
          return this._rgb._clipped || false;
        };
        var Color$k = Color_1;
        var LAB_CONSTANTS$1 = labConstants;
        Color$k.prototype.darken = function(amount) {
          if (amount === void 0)
            amount = 1;
          var me = this;
          var lab2 = me.lab();
          lab2[0] -= LAB_CONSTANTS$1.Kn * amount;
          return new Color$k(lab2, "lab").alpha(me.alpha(), true);
        };
        Color$k.prototype.brighten = function(amount) {
          if (amount === void 0)
            amount = 1;
          return this.darken(-amount);
        };
        Color$k.prototype.darker = Color$k.prototype.darken;
        Color$k.prototype.brighter = Color$k.prototype.brighten;
        var Color$j = Color_1;
        Color$j.prototype.get = function(mc) {
          var ref = mc.split(".");
          var mode = ref[0];
          var channel = ref[1];
          var src = this[mode]();
          if (channel) {
            var i2 = mode.indexOf(channel) - (mode.substr(0, 2) === "ok" ? 2 : 0);
            if (i2 > -1) {
              return src[i2];
            }
            throw new Error("unknown channel " + channel + " in mode " + mode);
          } else {
            return src;
          }
        };
        var Color$i = Color_1;
        var type$5 = utils.type;
        var pow$6 = Math.pow;
        var EPS = 1e-7;
        var MAX_ITER = 20;
        Color$i.prototype.luminance = function(lum) {
          if (lum !== void 0 && type$5(lum) === "number") {
            if (lum === 0) {
              return new Color$i([0, 0, 0, this._rgb[3]], "rgb");
            }
            if (lum === 1) {
              return new Color$i([255, 255, 255, this._rgb[3]], "rgb");
            }
            var cur_lum = this.luminance();
            var mode = "rgb";
            var max_iter = MAX_ITER;
            var test = /* @__PURE__ */ __name(function(low, high) {
              var mid = low.interpolate(high, 0.5, mode);
              var lm = mid.luminance();
              if (Math.abs(lum - lm) < EPS || !max_iter--) {
                return mid;
              }
              return lm > lum ? test(low, mid) : test(mid, high);
            }, "test");
            var rgb2 = (cur_lum > lum ? test(new Color$i([0, 0, 0]), this) : test(this, new Color$i([255, 255, 255]))).rgb();
            return new Color$i(rgb2.concat([this._rgb[3]]));
          }
          return rgb2luminance.apply(void 0, this._rgb.slice(0, 3));
        };
        var rgb2luminance = /* @__PURE__ */ __name(function(r, g, b3) {
          r = luminance_x(r);
          g = luminance_x(g);
          b3 = luminance_x(b3);
          return 0.2126 * r + 0.7152 * g + 0.0722 * b3;
        }, "rgb2luminance");
        var luminance_x = /* @__PURE__ */ __name(function(x) {
          x /= 255;
          return x <= 0.03928 ? x / 12.92 : pow$6((x + 0.055) / 1.055, 2.4);
        }, "luminance_x");
        var interpolator$1 = {};
        var Color$h = Color_1;
        var type$4 = utils.type;
        var interpolator = interpolator$1;
        var mix$1 = /* @__PURE__ */ __name(function(col1, col2, f) {
          if (f === void 0)
            f = 0.5;
          var rest = [], len = arguments.length - 3;
          while (len-- > 0)
            rest[len] = arguments[len + 3];
          var mode = rest[0] || "lrgb";
          if (!interpolator[mode] && !rest.length) {
            mode = Object.keys(interpolator)[0];
          }
          if (!interpolator[mode]) {
            throw new Error("interpolation mode " + mode + " is not defined");
          }
          if (type$4(col1) !== "object") {
            col1 = new Color$h(col1);
          }
          if (type$4(col2) !== "object") {
            col2 = new Color$h(col2);
          }
          return interpolator[mode](col1, col2, f).alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
        }, "mix$1");
        var Color$g = Color_1;
        var mix = mix$1;
        Color$g.prototype.mix = Color$g.prototype.interpolate = function(col2, f) {
          if (f === void 0)
            f = 0.5;
          var rest = [], len = arguments.length - 2;
          while (len-- > 0)
            rest[len] = arguments[len + 2];
          return mix.apply(void 0, [this, col2, f].concat(rest));
        };
        var Color$f = Color_1;
        Color$f.prototype.premultiply = function(mutate) {
          if (mutate === void 0)
            mutate = false;
          var rgb2 = this._rgb;
          var a3 = rgb2[3];
          if (mutate) {
            this._rgb = [rgb2[0] * a3, rgb2[1] * a3, rgb2[2] * a3, a3];
            return this;
          } else {
            return new Color$f([rgb2[0] * a3, rgb2[1] * a3, rgb2[2] * a3, a3], "rgb");
          }
        };
        var Color$e = Color_1;
        var LAB_CONSTANTS = labConstants;
        Color$e.prototype.saturate = function(amount) {
          if (amount === void 0)
            amount = 1;
          var me = this;
          var lch2 = me.lch();
          lch2[1] += LAB_CONSTANTS.Kn * amount;
          if (lch2[1] < 0) {
            lch2[1] = 0;
          }
          return new Color$e(lch2, "lch").alpha(me.alpha(), true);
        };
        Color$e.prototype.desaturate = function(amount) {
          if (amount === void 0)
            amount = 1;
          return this.saturate(-amount);
        };
        var Color$d = Color_1;
        var type$3 = utils.type;
        Color$d.prototype.set = function(mc, value, mutate) {
          if (mutate === void 0)
            mutate = false;
          var ref = mc.split(".");
          var mode = ref[0];
          var channel = ref[1];
          var src = this[mode]();
          if (channel) {
            var i2 = mode.indexOf(channel) - (mode.substr(0, 2) === "ok" ? 2 : 0);
            if (i2 > -1) {
              if (type$3(value) == "string") {
                switch (value.charAt(0)) {
                  case "+":
                    src[i2] += +value;
                    break;
                  case "-":
                    src[i2] += +value;
                    break;
                  case "*":
                    src[i2] *= +value.substr(1);
                    break;
                  case "/":
                    src[i2] /= +value.substr(1);
                    break;
                  default:
                    src[i2] = +value;
                }
              } else if (type$3(value) === "number") {
                src[i2] = value;
              } else {
                throw new Error("unsupported value for Color.set");
              }
              var out = new Color$d(src, mode);
              if (mutate) {
                this._rgb = out._rgb;
                return this;
              }
              return out;
            }
            throw new Error("unknown channel " + channel + " in mode " + mode);
          } else {
            return src;
          }
        };
        var Color$c = Color_1;
        var rgb = /* @__PURE__ */ __name(function(col1, col2, f) {
          var xyz0 = col1._rgb;
          var xyz1 = col2._rgb;
          return new Color$c(
            xyz0[0] + f * (xyz1[0] - xyz0[0]),
            xyz0[1] + f * (xyz1[1] - xyz0[1]),
            xyz0[2] + f * (xyz1[2] - xyz0[2]),
            "rgb"
          );
        }, "rgb");
        interpolator$1.rgb = rgb;
        var Color$b = Color_1;
        var sqrt$2 = Math.sqrt;
        var pow$5 = Math.pow;
        var lrgb = /* @__PURE__ */ __name(function(col1, col2, f) {
          var ref = col1._rgb;
          var x1 = ref[0];
          var y1 = ref[1];
          var z1 = ref[2];
          var ref$1 = col2._rgb;
          var x2 = ref$1[0];
          var y2 = ref$1[1];
          var z2 = ref$1[2];
          return new Color$b(
            sqrt$2(pow$5(x1, 2) * (1 - f) + pow$5(x2, 2) * f),
            sqrt$2(pow$5(y1, 2) * (1 - f) + pow$5(y2, 2) * f),
            sqrt$2(pow$5(z1, 2) * (1 - f) + pow$5(z2, 2) * f),
            "rgb"
          );
        }, "lrgb");
        interpolator$1.lrgb = lrgb;
        var Color$a = Color_1;
        var lab = /* @__PURE__ */ __name(function(col1, col2, f) {
          var xyz0 = col1.lab();
          var xyz1 = col2.lab();
          return new Color$a(
            xyz0[0] + f * (xyz1[0] - xyz0[0]),
            xyz0[1] + f * (xyz1[1] - xyz0[1]),
            xyz0[2] + f * (xyz1[2] - xyz0[2]),
            "lab"
          );
        }, "lab");
        interpolator$1.lab = lab;
        var Color$9 = Color_1;
        var _hsx = /* @__PURE__ */ __name(function(col1, col2, f, m) {
          var assign2, assign$1;
          var xyz0, xyz1;
          if (m === "hsl") {
            xyz0 = col1.hsl();
            xyz1 = col2.hsl();
          } else if (m === "hsv") {
            xyz0 = col1.hsv();
            xyz1 = col2.hsv();
          } else if (m === "hcg") {
            xyz0 = col1.hcg();
            xyz1 = col2.hcg();
          } else if (m === "hsi") {
            xyz0 = col1.hsi();
            xyz1 = col2.hsi();
          } else if (m === "lch" || m === "hcl") {
            m = "hcl";
            xyz0 = col1.hcl();
            xyz1 = col2.hcl();
          } else if (m === "oklch") {
            xyz0 = col1.oklch().reverse();
            xyz1 = col2.oklch().reverse();
          }
          var hue0, hue1, sat0, sat1, lbv0, lbv1;
          if (m.substr(0, 1) === "h" || m === "oklch") {
            assign2 = xyz0, hue0 = assign2[0], sat0 = assign2[1], lbv0 = assign2[2];
            assign$1 = xyz1, hue1 = assign$1[0], sat1 = assign$1[1], lbv1 = assign$1[2];
          }
          var sat, hue, lbv, dh;
          if (!isNaN(hue0) && !isNaN(hue1)) {
            if (hue1 > hue0 && hue1 - hue0 > 180) {
              dh = hue1 - (hue0 + 360);
            } else if (hue1 < hue0 && hue0 - hue1 > 180) {
              dh = hue1 + 360 - hue0;
            } else {
              dh = hue1 - hue0;
            }
            hue = hue0 + f * dh;
          } else if (!isNaN(hue0)) {
            hue = hue0;
            if ((lbv1 == 1 || lbv1 == 0) && m != "hsv") {
              sat = sat0;
            }
          } else if (!isNaN(hue1)) {
            hue = hue1;
            if ((lbv0 == 1 || lbv0 == 0) && m != "hsv") {
              sat = sat1;
            }
          } else {
            hue = Number.NaN;
          }
          if (sat === void 0) {
            sat = sat0 + f * (sat1 - sat0);
          }
          lbv = lbv0 + f * (lbv1 - lbv0);
          return m === "oklch" ? new Color$9([lbv, sat, hue], m) : new Color$9([hue, sat, lbv], m);
        }, "_hsx");
        var interpolate_hsx$5 = _hsx;
        var lch = /* @__PURE__ */ __name(function(col1, col2, f) {
          return interpolate_hsx$5(col1, col2, f, "lch");
        }, "lch");
        interpolator$1.lch = lch;
        interpolator$1.hcl = lch;
        var Color$8 = Color_1;
        var num = /* @__PURE__ */ __name(function(col1, col2, f) {
          var c1 = col1.num();
          var c2 = col2.num();
          return new Color$8(c1 + f * (c2 - c1), "num");
        }, "num");
        interpolator$1.num = num;
        var interpolate_hsx$4 = _hsx;
        var hcg = /* @__PURE__ */ __name(function(col1, col2, f) {
          return interpolate_hsx$4(col1, col2, f, "hcg");
        }, "hcg");
        interpolator$1.hcg = hcg;
        var interpolate_hsx$3 = _hsx;
        var hsi = /* @__PURE__ */ __name(function(col1, col2, f) {
          return interpolate_hsx$3(col1, col2, f, "hsi");
        }, "hsi");
        interpolator$1.hsi = hsi;
        var interpolate_hsx$2 = _hsx;
        var hsl = /* @__PURE__ */ __name(function(col1, col2, f) {
          return interpolate_hsx$2(col1, col2, f, "hsl");
        }, "hsl");
        interpolator$1.hsl = hsl;
        var interpolate_hsx$1 = _hsx;
        var hsv = /* @__PURE__ */ __name(function(col1, col2, f) {
          return interpolate_hsx$1(col1, col2, f, "hsv");
        }, "hsv");
        interpolator$1.hsv = hsv;
        var Color$7 = Color_1;
        var oklab = /* @__PURE__ */ __name(function(col1, col2, f) {
          var xyz0 = col1.oklab();
          var xyz1 = col2.oklab();
          return new Color$7(
            xyz0[0] + f * (xyz1[0] - xyz0[0]),
            xyz0[1] + f * (xyz1[1] - xyz0[1]),
            xyz0[2] + f * (xyz1[2] - xyz0[2]),
            "oklab"
          );
        }, "oklab");
        interpolator$1.oklab = oklab;
        var interpolate_hsx = _hsx;
        var oklch = /* @__PURE__ */ __name(function(col1, col2, f) {
          return interpolate_hsx(col1, col2, f, "oklch");
        }, "oklch");
        interpolator$1.oklch = oklch;
        var Color$6 = Color_1;
        var clip_rgb$1 = utils.clip_rgb;
        var pow$4 = Math.pow;
        var sqrt$1 = Math.sqrt;
        var PI$1 = Math.PI;
        var cos$2 = Math.cos;
        var sin$2 = Math.sin;
        var atan2$1 = Math.atan2;
        var average = /* @__PURE__ */ __name(function(colors, mode, weights) {
          if (mode === void 0)
            mode = "lrgb";
          if (weights === void 0)
            weights = null;
          var l = colors.length;
          if (!weights) {
            weights = Array.from(new Array(l)).map(function() {
              return 1;
            });
          }
          var k = l / weights.reduce(function(a3, b3) {
            return a3 + b3;
          });
          weights.forEach(function(w, i3) {
            weights[i3] *= k;
          });
          colors = colors.map(function(c) {
            return new Color$6(c);
          });
          if (mode === "lrgb") {
            return _average_lrgb(colors, weights);
          }
          var first = colors.shift();
          var xyz = first.get(mode);
          var cnt = [];
          var dx = 0;
          var dy = 0;
          for (var i2 = 0; i2 < xyz.length; i2++) {
            xyz[i2] = (xyz[i2] || 0) * weights[0];
            cnt.push(isNaN(xyz[i2]) ? 0 : weights[0]);
            if (mode.charAt(i2) === "h" && !isNaN(xyz[i2])) {
              var A = xyz[i2] / 180 * PI$1;
              dx += cos$2(A) * weights[0];
              dy += sin$2(A) * weights[0];
            }
          }
          var alpha = first.alpha() * weights[0];
          colors.forEach(function(c, ci) {
            var xyz2 = c.get(mode);
            alpha += c.alpha() * weights[ci + 1];
            for (var i3 = 0; i3 < xyz.length; i3++) {
              if (!isNaN(xyz2[i3])) {
                cnt[i3] += weights[ci + 1];
                if (mode.charAt(i3) === "h") {
                  var A2 = xyz2[i3] / 180 * PI$1;
                  dx += cos$2(A2) * weights[ci + 1];
                  dy += sin$2(A2) * weights[ci + 1];
                } else {
                  xyz[i3] += xyz2[i3] * weights[ci + 1];
                }
              }
            }
          });
          for (var i$12 = 0; i$12 < xyz.length; i$12++) {
            if (mode.charAt(i$12) === "h") {
              var A$1 = atan2$1(dy / cnt[i$12], dx / cnt[i$12]) / PI$1 * 180;
              while (A$1 < 0) {
                A$1 += 360;
              }
              while (A$1 >= 360) {
                A$1 -= 360;
              }
              xyz[i$12] = A$1;
            } else {
              xyz[i$12] = xyz[i$12] / cnt[i$12];
            }
          }
          alpha /= l;
          return new Color$6(xyz, mode).alpha(alpha > 0.99999 ? 1 : alpha, true);
        }, "average");
        var _average_lrgb = /* @__PURE__ */ __name(function(colors, weights) {
          var l = colors.length;
          var xyz = [0, 0, 0, 0];
          for (var i2 = 0; i2 < colors.length; i2++) {
            var col = colors[i2];
            var f = weights[i2] / l;
            var rgb2 = col._rgb;
            xyz[0] += pow$4(rgb2[0], 2) * f;
            xyz[1] += pow$4(rgb2[1], 2) * f;
            xyz[2] += pow$4(rgb2[2], 2) * f;
            xyz[3] += rgb2[3] * f;
          }
          xyz[0] = sqrt$1(xyz[0]);
          xyz[1] = sqrt$1(xyz[1]);
          xyz[2] = sqrt$1(xyz[2]);
          if (xyz[3] > 0.9999999) {
            xyz[3] = 1;
          }
          return new Color$6(clip_rgb$1(xyz));
        }, "_average_lrgb");
        var chroma$4 = chroma_1;
        var type$2 = utils.type;
        var pow$3 = Math.pow;
        var scale$2 = /* @__PURE__ */ __name(function(colors) {
          var _mode = "rgb";
          var _nacol = chroma$4("#ccc");
          var _spread = 0;
          var _domain = [0, 1];
          var _pos = [];
          var _padding = [0, 0];
          var _classes = false;
          var _colors = [];
          var _out = false;
          var _min = 0;
          var _max = 1;
          var _correctLightness = false;
          var _colorCache = {};
          var _useCache = true;
          var _gamma = 1;
          var setColors = /* @__PURE__ */ __name(function(colors2) {
            colors2 = colors2 || ["#fff", "#000"];
            if (colors2 && type$2(colors2) === "string" && chroma$4.brewer && chroma$4.brewer[colors2.toLowerCase()]) {
              colors2 = chroma$4.brewer[colors2.toLowerCase()];
            }
            if (type$2(colors2) === "array") {
              if (colors2.length === 1) {
                colors2 = [colors2[0], colors2[0]];
              }
              colors2 = colors2.slice(0);
              for (var c = 0; c < colors2.length; c++) {
                colors2[c] = chroma$4(colors2[c]);
              }
              _pos.length = 0;
              for (var c$1 = 0; c$1 < colors2.length; c$1++) {
                _pos.push(c$1 / (colors2.length - 1));
              }
            }
            resetCache();
            return _colors = colors2;
          }, "setColors");
          var getClass = /* @__PURE__ */ __name(function(value) {
            if (_classes != null) {
              var n = _classes.length - 1;
              var i2 = 0;
              while (i2 < n && value >= _classes[i2]) {
                i2++;
              }
              return i2 - 1;
            }
            return 0;
          }, "getClass");
          var tMapLightness = /* @__PURE__ */ __name(function(t) {
            return t;
          }, "tMapLightness");
          var tMapDomain = /* @__PURE__ */ __name(function(t) {
            return t;
          }, "tMapDomain");
          var getColor = /* @__PURE__ */ __name(function(val, bypassMap) {
            var col, t;
            if (bypassMap == null) {
              bypassMap = false;
            }
            if (isNaN(val) || val === null) {
              return _nacol;
            }
            if (!bypassMap) {
              if (_classes && _classes.length > 2) {
                var c = getClass(val);
                t = c / (_classes.length - 2);
              } else if (_max !== _min) {
                t = (val - _min) / (_max - _min);
              } else {
                t = 1;
              }
            } else {
              t = val;
            }
            t = tMapDomain(t);
            if (!bypassMap) {
              t = tMapLightness(t);
            }
            if (_gamma !== 1) {
              t = pow$3(t, _gamma);
            }
            t = _padding[0] + t * (1 - _padding[0] - _padding[1]);
            t = Math.min(1, Math.max(0, t));
            var k = Math.floor(t * 1e4);
            if (_useCache && _colorCache[k]) {
              col = _colorCache[k];
            } else {
              if (type$2(_colors) === "array") {
                for (var i2 = 0; i2 < _pos.length; i2++) {
                  var p = _pos[i2];
                  if (t <= p) {
                    col = _colors[i2];
                    break;
                  }
                  if (t >= p && i2 === _pos.length - 1) {
                    col = _colors[i2];
                    break;
                  }
                  if (t > p && t < _pos[i2 + 1]) {
                    t = (t - p) / (_pos[i2 + 1] - p);
                    col = chroma$4.interpolate(_colors[i2], _colors[i2 + 1], t, _mode);
                    break;
                  }
                }
              } else if (type$2(_colors) === "function") {
                col = _colors(t);
              }
              if (_useCache) {
                _colorCache[k] = col;
              }
            }
            return col;
          }, "getColor");
          var resetCache = /* @__PURE__ */ __name(function() {
            return _colorCache = {};
          }, "resetCache");
          setColors(colors);
          var f = /* @__PURE__ */ __name(function(v) {
            var c = chroma$4(getColor(v));
            if (_out && c[_out]) {
              return c[_out]();
            } else {
              return c;
            }
          }, "f");
          f.classes = function(classes) {
            if (classes != null) {
              if (type$2(classes) === "array") {
                _classes = classes;
                _domain = [classes[0], classes[classes.length - 1]];
              } else {
                var d = chroma$4.analyze(_domain);
                if (classes === 0) {
                  _classes = [d.min, d.max];
                } else {
                  _classes = chroma$4.limits(d, "e", classes);
                }
              }
              return f;
            }
            return _classes;
          };
          f.domain = function(domain) {
            if (!arguments.length) {
              return _domain;
            }
            _min = domain[0];
            _max = domain[domain.length - 1];
            _pos = [];
            var k = _colors.length;
            if (domain.length === k && _min !== _max) {
              for (var i2 = 0, list2 = Array.from(domain); i2 < list2.length; i2 += 1) {
                var d = list2[i2];
                _pos.push((d - _min) / (_max - _min));
              }
            } else {
              for (var c = 0; c < k; c++) {
                _pos.push(c / (k - 1));
              }
              if (domain.length > 2) {
                var tOut = domain.map(function(d2, i3) {
                  return i3 / (domain.length - 1);
                });
                var tBreaks = domain.map(function(d2) {
                  return (d2 - _min) / (_max - _min);
                });
                if (!tBreaks.every(function(val, i3) {
                  return tOut[i3] === val;
                })) {
                  tMapDomain = /* @__PURE__ */ __name(function(t) {
                    if (t <= 0 || t >= 1) {
                      return t;
                    }
                    var i3 = 0;
                    while (t >= tBreaks[i3 + 1]) {
                      i3++;
                    }
                    var f2 = (t - tBreaks[i3]) / (tBreaks[i3 + 1] - tBreaks[i3]);
                    var out = tOut[i3] + f2 * (tOut[i3 + 1] - tOut[i3]);
                    return out;
                  }, "tMapDomain");
                }
              }
            }
            _domain = [_min, _max];
            return f;
          };
          f.mode = function(_m) {
            if (!arguments.length) {
              return _mode;
            }
            _mode = _m;
            resetCache();
            return f;
          };
          f.range = function(colors2, _pos2) {
            setColors(colors2);
            return f;
          };
          f.out = function(_o) {
            _out = _o;
            return f;
          };
          f.spread = function(val) {
            if (!arguments.length) {
              return _spread;
            }
            _spread = val;
            return f;
          };
          f.correctLightness = function(v) {
            if (v == null) {
              v = true;
            }
            _correctLightness = v;
            resetCache();
            if (_correctLightness) {
              tMapLightness = /* @__PURE__ */ __name(function(t) {
                var L0 = getColor(0, true).lab()[0];
                var L1 = getColor(1, true).lab()[0];
                var pol = L0 > L1;
                var L_actual = getColor(t, true).lab()[0];
                var L_ideal = L0 + (L1 - L0) * t;
                var L_diff = L_actual - L_ideal;
                var t0 = 0;
                var t1 = 1;
                var max_iter = 20;
                while (Math.abs(L_diff) > 0.01 && max_iter-- > 0) {
                  (function() {
                    if (pol) {
                      L_diff *= -1;
                    }
                    if (L_diff < 0) {
                      t0 = t;
                      t += (t1 - t) * 0.5;
                    } else {
                      t1 = t;
                      t += (t0 - t) * 0.5;
                    }
                    L_actual = getColor(t, true).lab()[0];
                    return L_diff = L_actual - L_ideal;
                  })();
                }
                return t;
              }, "tMapLightness");
            } else {
              tMapLightness = /* @__PURE__ */ __name(function(t) {
                return t;
              }, "tMapLightness");
            }
            return f;
          };
          f.padding = function(p) {
            if (p != null) {
              if (type$2(p) === "number") {
                p = [p, p];
              }
              _padding = p;
              return f;
            } else {
              return _padding;
            }
          };
          f.colors = function(numColors, out) {
            if (arguments.length < 2) {
              out = "hex";
            }
            var result = [];
            if (arguments.length === 0) {
              result = _colors.slice(0);
            } else if (numColors === 1) {
              result = [f(0.5)];
            } else if (numColors > 1) {
              var dm = _domain[0];
              var dd = _domain[1] - dm;
              result = __range__(0, numColors, false).map(function(i3) {
                return f(dm + i3 / (numColors - 1) * dd);
              });
            } else {
              colors = [];
              var samples = [];
              if (_classes && _classes.length > 2) {
                for (var i2 = 1, end = _classes.length, asc = 1 <= end; asc ? i2 < end : i2 > end; asc ? i2++ : i2--) {
                  samples.push((_classes[i2 - 1] + _classes[i2]) * 0.5);
                }
              } else {
                samples = _domain;
              }
              result = samples.map(function(v) {
                return f(v);
              });
            }
            if (chroma$4[out]) {
              result = result.map(function(c) {
                return c[out]();
              });
            }
            return result;
          };
          f.cache = function(c) {
            if (c != null) {
              _useCache = c;
              return f;
            } else {
              return _useCache;
            }
          };
          f.gamma = function(g) {
            if (g != null) {
              _gamma = g;
              return f;
            } else {
              return _gamma;
            }
          };
          f.nodata = function(d) {
            if (d != null) {
              _nacol = chroma$4(d);
              return f;
            } else {
              return _nacol;
            }
          };
          return f;
        }, "scale$2");
        function __range__(left, right, inclusive) {
          var range = [];
          var ascending = left < right;
          var end = !inclusive ? right : ascending ? right + 1 : right - 1;
          for (var i2 = left; ascending ? i2 < end : i2 > end; ascending ? i2++ : i2--) {
            range.push(i2);
          }
          return range;
        }
        __name(__range__, "__range__");
        var Color$5 = Color_1;
        var scale$1 = scale$2;
        var binom_row = /* @__PURE__ */ __name(function(n) {
          var row = [1, 1];
          for (var i2 = 1; i2 < n; i2++) {
            var newrow = [1];
            for (var j = 1; j <= row.length; j++) {
              newrow[j] = (row[j] || 0) + row[j - 1];
            }
            row = newrow;
          }
          return row;
        }, "binom_row");
        var bezier = /* @__PURE__ */ __name(function(colors) {
          var assign2, assign$1, assign$2;
          var I, lab0, lab1, lab2;
          colors = colors.map(function(c) {
            return new Color$5(c);
          });
          if (colors.length === 2) {
            assign2 = colors.map(function(c) {
              return c.lab();
            }), lab0 = assign2[0], lab1 = assign2[1];
            I = /* @__PURE__ */ __name(function(t) {
              var lab4 = [0, 1, 2].map(function(i2) {
                return lab0[i2] + t * (lab1[i2] - lab0[i2]);
              });
              return new Color$5(lab4, "lab");
            }, "I");
          } else if (colors.length === 3) {
            assign$1 = colors.map(function(c) {
              return c.lab();
            }), lab0 = assign$1[0], lab1 = assign$1[1], lab2 = assign$1[2];
            I = /* @__PURE__ */ __name(function(t) {
              var lab4 = [0, 1, 2].map(function(i2) {
                return (1 - t) * (1 - t) * lab0[i2] + 2 * (1 - t) * t * lab1[i2] + t * t * lab2[i2];
              });
              return new Color$5(lab4, "lab");
            }, "I");
          } else if (colors.length === 4) {
            var lab3;
            assign$2 = colors.map(function(c) {
              return c.lab();
            }), lab0 = assign$2[0], lab1 = assign$2[1], lab2 = assign$2[2], lab3 = assign$2[3];
            I = /* @__PURE__ */ __name(function(t) {
              var lab4 = [0, 1, 2].map(function(i2) {
                return (1 - t) * (1 - t) * (1 - t) * lab0[i2] + 3 * (1 - t) * (1 - t) * t * lab1[i2] + 3 * (1 - t) * t * t * lab2[i2] + t * t * t * lab3[i2];
              });
              return new Color$5(lab4, "lab");
            }, "I");
          } else if (colors.length >= 5) {
            var labs, row, n;
            labs = colors.map(function(c) {
              return c.lab();
            });
            n = colors.length - 1;
            row = binom_row(n);
            I = /* @__PURE__ */ __name(function(t) {
              var u = 1 - t;
              var lab4 = [0, 1, 2].map(function(i2) {
                return labs.reduce(function(sum, el, j) {
                  return sum + row[j] * Math.pow(u, n - j) * Math.pow(t, j) * el[i2];
                }, 0);
              });
              return new Color$5(lab4, "lab");
            }, "I");
          } else {
            throw new RangeError("No point in running bezier with only one color.");
          }
          return I;
        }, "bezier");
        var bezier_1 = /* @__PURE__ */ __name(function(colors) {
          var f = bezier(colors);
          f.scale = function() {
            return scale$1(f);
          };
          return f;
        }, "bezier_1");
        var chroma$3 = chroma_1;
        var blend = /* @__PURE__ */ __name(function(bottom, top, mode) {
          if (!blend[mode]) {
            throw new Error("unknown blend mode " + mode);
          }
          return blend[mode](bottom, top);
        }, "blend");
        var blend_f = /* @__PURE__ */ __name(function(f) {
          return function(bottom, top) {
            var c0 = chroma$3(top).rgb();
            var c1 = chroma$3(bottom).rgb();
            return chroma$3.rgb(f(c0, c1));
          };
        }, "blend_f");
        var each = /* @__PURE__ */ __name(function(f) {
          return function(c0, c1) {
            var out = [];
            out[0] = f(c0[0], c1[0]);
            out[1] = f(c0[1], c1[1]);
            out[2] = f(c0[2], c1[2]);
            return out;
          };
        }, "each");
        var normal = /* @__PURE__ */ __name(function(a3) {
          return a3;
        }, "normal");
        var multiply = /* @__PURE__ */ __name(function(a3, b3) {
          return a3 * b3 / 255;
        }, "multiply");
        var darken = /* @__PURE__ */ __name(function(a3, b3) {
          return a3 > b3 ? b3 : a3;
        }, "darken");
        var lighten = /* @__PURE__ */ __name(function(a3, b3) {
          return a3 > b3 ? a3 : b3;
        }, "lighten");
        var screen = /* @__PURE__ */ __name(function(a3, b3) {
          return 255 * (1 - (1 - a3 / 255) * (1 - b3 / 255));
        }, "screen");
        var overlay = /* @__PURE__ */ __name(function(a3, b3) {
          return b3 < 128 ? 2 * a3 * b3 / 255 : 255 * (1 - 2 * (1 - a3 / 255) * (1 - b3 / 255));
        }, "overlay");
        var burn = /* @__PURE__ */ __name(function(a3, b3) {
          return 255 * (1 - (1 - b3 / 255) / (a3 / 255));
        }, "burn");
        var dodge = /* @__PURE__ */ __name(function(a3, b3) {
          if (a3 === 255) {
            return 255;
          }
          a3 = 255 * (b3 / 255) / (1 - a3 / 255);
          return a3 > 255 ? 255 : a3;
        }, "dodge");
        blend.normal = blend_f(each(normal));
        blend.multiply = blend_f(each(multiply));
        blend.screen = blend_f(each(screen));
        blend.overlay = blend_f(each(overlay));
        blend.darken = blend_f(each(darken));
        blend.lighten = blend_f(each(lighten));
        blend.dodge = blend_f(each(dodge));
        blend.burn = blend_f(each(burn));
        var blend_1 = blend;
        var type$1 = utils.type;
        var clip_rgb = utils.clip_rgb;
        var TWOPI = utils.TWOPI;
        var pow$2 = Math.pow;
        var sin$1 = Math.sin;
        var cos$1 = Math.cos;
        var chroma$2 = chroma_1;
        var cubehelix = /* @__PURE__ */ __name(function(start, rotations, hue, gamma, lightness) {
          if (start === void 0)
            start = 300;
          if (rotations === void 0)
            rotations = -1.5;
          if (hue === void 0)
            hue = 1;
          if (gamma === void 0)
            gamma = 1;
          if (lightness === void 0)
            lightness = [0, 1];
          var dh = 0, dl;
          if (type$1(lightness) === "array") {
            dl = lightness[1] - lightness[0];
          } else {
            dl = 0;
            lightness = [lightness, lightness];
          }
          var f = /* @__PURE__ */ __name(function(fract) {
            var a3 = TWOPI * ((start + 120) / 360 + rotations * fract);
            var l = pow$2(lightness[0] + dl * fract, gamma);
            var h = dh !== 0 ? hue[0] + fract * dh : hue;
            var amp = h * l * (1 - l) / 2;
            var cos_a = cos$1(a3);
            var sin_a = sin$1(a3);
            var r = l + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
            var g = l + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
            var b3 = l + amp * (1.97294 * cos_a);
            return chroma$2(clip_rgb([r * 255, g * 255, b3 * 255, 1]));
          }, "f");
          f.start = function(s) {
            if (s == null) {
              return start;
            }
            start = s;
            return f;
          };
          f.rotations = function(r) {
            if (r == null) {
              return rotations;
            }
            rotations = r;
            return f;
          };
          f.gamma = function(g) {
            if (g == null) {
              return gamma;
            }
            gamma = g;
            return f;
          };
          f.hue = function(h) {
            if (h == null) {
              return hue;
            }
            hue = h;
            if (type$1(hue) === "array") {
              dh = hue[1] - hue[0];
              if (dh === 0) {
                hue = hue[1];
              }
            } else {
              dh = 0;
            }
            return f;
          };
          f.lightness = function(h) {
            if (h == null) {
              return lightness;
            }
            if (type$1(h) === "array") {
              lightness = h;
              dl = h[1] - h[0];
            } else {
              lightness = [h, h];
              dl = 0;
            }
            return f;
          };
          f.scale = function() {
            return chroma$2.scale(f);
          };
          f.hue(hue);
          return f;
        }, "cubehelix");
        var Color$4 = Color_1;
        var digits = "0123456789abcdef";
        var floor$1 = Math.floor;
        var random = Math.random;
        var random_1 = /* @__PURE__ */ __name(function() {
          var code = "#";
          for (var i2 = 0; i2 < 6; i2++) {
            code += digits.charAt(floor$1(random() * 16));
          }
          return new Color$4(code, "hex");
        }, "random_1");
        var type = type$p;
        var log = Math.log;
        var pow$1 = Math.pow;
        var floor = Math.floor;
        var abs$1 = Math.abs;
        var analyze = /* @__PURE__ */ __name(function(data, key2) {
          if (key2 === void 0)
            key2 = null;
          var r = {
            min: Number.MAX_VALUE,
            max: Number.MAX_VALUE * -1,
            sum: 0,
            values: [],
            count: 0
          };
          if (type(data) === "object") {
            data = Object.values(data);
          }
          data.forEach(function(val) {
            if (key2 && type(val) === "object") {
              val = val[key2];
            }
            if (val !== void 0 && val !== null && !isNaN(val)) {
              r.values.push(val);
              r.sum += val;
              if (val < r.min) {
                r.min = val;
              }
              if (val > r.max) {
                r.max = val;
              }
              r.count += 1;
            }
          });
          r.domain = [r.min, r.max];
          r.limits = function(mode, num2) {
            return limits(r, mode, num2);
          };
          return r;
        }, "analyze");
        var limits = /* @__PURE__ */ __name(function(data, mode, num2) {
          if (mode === void 0)
            mode = "equal";
          if (num2 === void 0)
            num2 = 7;
          if (type(data) == "array") {
            data = analyze(data);
          }
          var min2 = data.min;
          var max2 = data.max;
          var values = data.values.sort(function(a3, b3) {
            return a3 - b3;
          });
          if (num2 === 1) {
            return [min2, max2];
          }
          var limits2 = [];
          if (mode.substr(0, 1) === "c") {
            limits2.push(min2);
            limits2.push(max2);
          }
          if (mode.substr(0, 1) === "e") {
            limits2.push(min2);
            for (var i2 = 1; i2 < num2; i2++) {
              limits2.push(min2 + i2 / num2 * (max2 - min2));
            }
            limits2.push(max2);
          } else if (mode.substr(0, 1) === "l") {
            if (min2 <= 0) {
              throw new Error("Logarithmic scales are only possible for values > 0");
            }
            var min_log = Math.LOG10E * log(min2);
            var max_log = Math.LOG10E * log(max2);
            limits2.push(min2);
            for (var i$12 = 1; i$12 < num2; i$12++) {
              limits2.push(pow$1(10, min_log + i$12 / num2 * (max_log - min_log)));
            }
            limits2.push(max2);
          } else if (mode.substr(0, 1) === "q") {
            limits2.push(min2);
            for (var i$2 = 1; i$2 < num2; i$2++) {
              var p = (values.length - 1) * i$2 / num2;
              var pb = floor(p);
              if (pb === p) {
                limits2.push(values[pb]);
              } else {
                var pr = p - pb;
                limits2.push(values[pb] * (1 - pr) + values[pb + 1] * pr);
              }
            }
            limits2.push(max2);
          } else if (mode.substr(0, 1) === "k") {
            var cluster;
            var n = values.length;
            var assignments = new Array(n);
            var clusterSizes = new Array(num2);
            var repeat = true;
            var nb_iters = 0;
            var centroids = null;
            centroids = [];
            centroids.push(min2);
            for (var i$3 = 1; i$3 < num2; i$3++) {
              centroids.push(min2 + i$3 / num2 * (max2 - min2));
            }
            centroids.push(max2);
            while (repeat) {
              for (var j = 0; j < num2; j++) {
                clusterSizes[j] = 0;
              }
              for (var i$4 = 0; i$4 < n; i$4++) {
                var value = values[i$4];
                var mindist = Number.MAX_VALUE;
                var best = void 0;
                for (var j$1 = 0; j$1 < num2; j$1++) {
                  var dist = abs$1(centroids[j$1] - value);
                  if (dist < mindist) {
                    mindist = dist;
                    best = j$1;
                  }
                  clusterSizes[best]++;
                  assignments[i$4] = best;
                }
              }
              var newCentroids = new Array(num2);
              for (var j$2 = 0; j$2 < num2; j$2++) {
                newCentroids[j$2] = null;
              }
              for (var i$5 = 0; i$5 < n; i$5++) {
                cluster = assignments[i$5];
                if (newCentroids[cluster] === null) {
                  newCentroids[cluster] = values[i$5];
                } else {
                  newCentroids[cluster] += values[i$5];
                }
              }
              for (var j$3 = 0; j$3 < num2; j$3++) {
                newCentroids[j$3] *= 1 / clusterSizes[j$3];
              }
              repeat = false;
              for (var j$4 = 0; j$4 < num2; j$4++) {
                if (newCentroids[j$4] !== centroids[j$4]) {
                  repeat = true;
                  break;
                }
              }
              centroids = newCentroids;
              nb_iters++;
              if (nb_iters > 200) {
                repeat = false;
              }
            }
            var kClusters = {};
            for (var j$5 = 0; j$5 < num2; j$5++) {
              kClusters[j$5] = [];
            }
            for (var i$6 = 0; i$6 < n; i$6++) {
              cluster = assignments[i$6];
              kClusters[cluster].push(values[i$6]);
            }
            var tmpKMeansBreaks = [];
            for (var j$6 = 0; j$6 < num2; j$6++) {
              tmpKMeansBreaks.push(kClusters[j$6][0]);
              tmpKMeansBreaks.push(kClusters[j$6][kClusters[j$6].length - 1]);
            }
            tmpKMeansBreaks = tmpKMeansBreaks.sort(function(a3, b3) {
              return a3 - b3;
            });
            limits2.push(tmpKMeansBreaks[0]);
            for (var i$7 = 1; i$7 < tmpKMeansBreaks.length; i$7 += 2) {
              var v = tmpKMeansBreaks[i$7];
              if (!isNaN(v) && limits2.indexOf(v) === -1) {
                limits2.push(v);
              }
            }
          }
          return limits2;
        }, "limits");
        var analyze_1 = { analyze, limits };
        var Color$3 = Color_1;
        var contrast = /* @__PURE__ */ __name(function(a3, b3) {
          a3 = new Color$3(a3);
          b3 = new Color$3(b3);
          var l1 = a3.luminance();
          var l2 = b3.luminance();
          return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
        }, "contrast");
        var Color$2 = Color_1;
        var sqrt = Math.sqrt;
        var pow = Math.pow;
        var min = Math.min;
        var max = Math.max;
        var atan2 = Math.atan2;
        var abs = Math.abs;
        var cos = Math.cos;
        var sin = Math.sin;
        var exp = Math.exp;
        var PI = Math.PI;
        var deltaE = /* @__PURE__ */ __name(function(a3, b3, Kl, Kc, Kh) {
          if (Kl === void 0)
            Kl = 1;
          if (Kc === void 0)
            Kc = 1;
          if (Kh === void 0)
            Kh = 1;
          var rad2deg = /* @__PURE__ */ __name(function(rad) {
            return 360 * rad / (2 * PI);
          }, "rad2deg");
          var deg2rad = /* @__PURE__ */ __name(function(deg) {
            return 2 * PI * deg / 360;
          }, "deg2rad");
          a3 = new Color$2(a3);
          b3 = new Color$2(b3);
          var ref = Array.from(a3.lab());
          var L1 = ref[0];
          var a1 = ref[1];
          var b1 = ref[2];
          var ref$1 = Array.from(b3.lab());
          var L2 = ref$1[0];
          var a22 = ref$1[1];
          var b22 = ref$1[2];
          var avgL = (L1 + L2) / 2;
          var C1 = sqrt(pow(a1, 2) + pow(b1, 2));
          var C2 = sqrt(pow(a22, 2) + pow(b22, 2));
          var avgC = (C1 + C2) / 2;
          var G = 0.5 * (1 - sqrt(pow(avgC, 7) / (pow(avgC, 7) + pow(25, 7))));
          var a1p = a1 * (1 + G);
          var a2p = a22 * (1 + G);
          var C1p = sqrt(pow(a1p, 2) + pow(b1, 2));
          var C2p = sqrt(pow(a2p, 2) + pow(b22, 2));
          var avgCp = (C1p + C2p) / 2;
          var arctan1 = rad2deg(atan2(b1, a1p));
          var arctan2 = rad2deg(atan2(b22, a2p));
          var h1p = arctan1 >= 0 ? arctan1 : arctan1 + 360;
          var h2p = arctan2 >= 0 ? arctan2 : arctan2 + 360;
          var avgHp = abs(h1p - h2p) > 180 ? (h1p + h2p + 360) / 2 : (h1p + h2p) / 2;
          var T = 1 - 0.17 * cos(deg2rad(avgHp - 30)) + 0.24 * cos(deg2rad(2 * avgHp)) + 0.32 * cos(deg2rad(3 * avgHp + 6)) - 0.2 * cos(deg2rad(4 * avgHp - 63));
          var deltaHp = h2p - h1p;
          deltaHp = abs(deltaHp) <= 180 ? deltaHp : h2p <= h1p ? deltaHp + 360 : deltaHp - 360;
          deltaHp = 2 * sqrt(C1p * C2p) * sin(deg2rad(deltaHp) / 2);
          var deltaL = L2 - L1;
          var deltaCp = C2p - C1p;
          var sl = 1 + 0.015 * pow(avgL - 50, 2) / sqrt(20 + pow(avgL - 50, 2));
          var sc = 1 + 0.045 * avgCp;
          var sh = 1 + 0.015 * avgCp * T;
          var deltaTheta = 30 * exp(-pow((avgHp - 275) / 25, 2));
          var Rc = 2 * sqrt(pow(avgCp, 7) / (pow(avgCp, 7) + pow(25, 7)));
          var Rt = -Rc * sin(2 * deg2rad(deltaTheta));
          var result = sqrt(pow(deltaL / (Kl * sl), 2) + pow(deltaCp / (Kc * sc), 2) + pow(deltaHp / (Kh * sh), 2) + Rt * (deltaCp / (Kc * sc)) * (deltaHp / (Kh * sh)));
          return max(0, min(100, result));
        }, "deltaE");
        var Color$1 = Color_1;
        var distance = /* @__PURE__ */ __name(function(a3, b3, mode) {
          if (mode === void 0)
            mode = "lab";
          a3 = new Color$1(a3);
          b3 = new Color$1(b3);
          var l1 = a3.get(mode);
          var l2 = b3.get(mode);
          var sum_sq = 0;
          for (var i2 in l1) {
            var d = (l1[i2] || 0) - (l2[i2] || 0);
            sum_sq += d * d;
          }
          return Math.sqrt(sum_sq);
        }, "distance");
        var Color2 = Color_1;
        var valid = /* @__PURE__ */ __name(function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          try {
            new (Function.prototype.bind.apply(Color2, [null].concat(args)))();
            return true;
          } catch (e) {
            return false;
          }
        }, "valid");
        var chroma$1 = chroma_1;
        var scale = scale$2;
        var scales = {
          cool: /* @__PURE__ */ __name(function cool() {
            return scale([chroma$1.hsl(180, 1, 0.9), chroma$1.hsl(250, 0.7, 0.4)]);
          }, "cool"),
          hot: /* @__PURE__ */ __name(function hot() {
            return scale(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
          }, "hot")
        };
        var colorbrewer = {
          // sequential
          OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
          PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
          BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
          Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
          BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
          YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
          YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
          Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
          RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
          Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
          YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
          Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
          GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
          Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
          YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
          PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
          Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
          PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
          Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
          // diverging
          Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
          RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
          RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
          PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
          PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
          RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
          BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
          RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
          PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
          // qualitative
          Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
          Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
          Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
          Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
          Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
          Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
          Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
          Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
        };
        for (var i = 0, list = Object.keys(colorbrewer); i < list.length; i += 1) {
          var key = list[i];
          colorbrewer[key.toLowerCase()] = colorbrewer[key];
        }
        var colorbrewer_1 = colorbrewer;
        var chroma3 = chroma_1;
        chroma3.average = average;
        chroma3.bezier = bezier_1;
        chroma3.blend = blend_1;
        chroma3.cubehelix = cubehelix;
        chroma3.mix = chroma3.interpolate = mix$1;
        chroma3.random = random_1;
        chroma3.scale = scale$2;
        chroma3.analyze = analyze_1.analyze;
        chroma3.contrast = contrast;
        chroma3.deltaE = deltaE;
        chroma3.distance = distance;
        chroma3.limits = analyze_1.limits;
        chroma3.valid = valid;
        chroma3.scales = scales;
        chroma3.colors = w3cx11_1;
        chroma3.brewer = colorbrewer_1;
        var chroma_js = chroma3;
        return chroma_js;
      });
    }
  });

  // package.json
  var package_default = {
    name: "mephistopheles",
    version: "1.0.3",
    description: "User Friendly Visual Programming Language",
    author: "catpea",
    repository: {
      type: "git",
      url: "git+https://github.com/catpea/mephistopheles.git"
    },
    bugs: {
      url: "https://github.com/catpea/mephistopheles/issues"
    },
    homepage: "https://github.com/catpea/mephistopheles#readme",
    type: "module",
    main: "index.js",
    scripts: {
      start: "./start.js",
      save: "git add .; git commit -m 'Updated Release'; git push; npm version patch; npm publish; git push;",
      test: "./try.js"
    },
    keywords: [],
    imports: {
      "#plug-ins/*": "./plug-ins/*",
      "#abstract/*": "./abstract/*"
    },
    license: "ISC",
    dependencies: {
      "@codemirror/commands": "^6.3.3",
      "@codemirror/lang-javascript": "^6.2.2",
      "@codemirror/state": "^6.4.1",
      "@codemirror/theme-one-dark": "^6.1.2",
      "@codemirror/view": "^6.24.1",
      "@xterm/addon-fit": "^0.10.0",
      "@xterm/xterm": "^5.5.0",
      bootstrap: "^5.3.2",
      "bootstrap-icons": "^1.11.3",
      "calculate-percent": "^2.1.0",
      cheerio: "^1.0.0-rc.12",
      "chroma-js": "^2.4.2",
      codemirror: "^6.0.1",
      "deep-equal": "^2.2.3",
      "esbuild-svelte": "^0.8.1",
      esprima: "^4.0.1",
      events: "^3.3.0",
      json5: "^2.2.3",
      lodash: "^4.17.21",
      oneof: "^2.1.0",
      panzoom: "^9.4.3",
      svelte: "^4.2.17",
      uuid: "^9.0.1"
    },
    devDependencies: {
      chalk: "^5.3.0",
      esbuild: "0.19.6",
      "esbuild-sass-plugin": "^2.16.0"
    },
    directories: {
      doc: "doc"
    }
  };

  // plug-ins/object-oriented-programming/index.js
  var Inheritance = class {
    static {
      __name(this, "Inheritance");
    }
    instance;
    root;
    constructor({ Class, instance: instance25, specification }) {
      this.instance = instance25;
      this.instance.oo.extends.push(Class);
      this.collectClasses(Class.extends);
      this.instantiateSuperclasses();
    }
    collectClasses(list) {
      if (!Array.isArray(list))
        return;
      for (const Class of list.filter((o) => o)) {
        this.instance.oo.extends.push(Class);
      }
      for (const Class of list.filter((o) => o)) {
        this.collectClasses(Class.extends);
      }
    }
    instantiateSuperclasses() {
      let parent;
      for (const Class of this.instance.oo.extends) {
        const instance25 = new Class();
        instance25.name = Class.name;
        if (!instance25.traits)
          instance25.traits = [];
        if (!instance25.methods)
          instance25.methods = [];
        this.instance.oo.specifications.push(instance25);
        instance25.parent = parent;
        parent = instance25;
      }
    }
  };
  var Instance = class {
    static {
      __name(this, "Instance");
    }
    /*
      do not put anything in the properties section,
      Instance is the class that is returned to the user.
    */
    constructor(Class, data) {
      const specification = new Class();
      this.oo = {};
      this.oo.scratch = {};
      this.oo.name = specification.constructor.name;
      this.oo.class = Class;
      this.oo.types = specification.types;
      this.oo.specification = specification;
      this.oo.attributes = [];
      this.oo.serializables = [];
      this.oo.extends = [];
      this.oo.disposables = [];
      this.oo.specifications = [];
      new Inheritance({ Class, instance: this, specification, root: this });
      const defaultState = {
        current: "initial",
        initial: {
          run: "initialize",
          can: "start"
        },
        start: {
          run: "mount",
          can: "stop"
        },
        stop: {
          run: "clean destroy exit",
          can: "initial"
        }
      };
      const ensureArray = /* @__PURE__ */ __name(function(input) {
        if (Array.isArray(input))
          return input;
        return input.split(" ");
      }, "ensureArray");
      const isStateTransitionAllowed = /* @__PURE__ */ __name(function({ from, to, state: state2 }) {
        return ensureArray(state2[from].can).includes(to);
      }, "isStateTransitionAllowed");
      for (const inherited of this.oo.specifications) {
        if (inherited.properties) {
          for (const [propertyName, propertyValue] of Object.entries(inherited.properties)) {
            if (propertyName in this === false) {
              Object.defineProperty(this, propertyName, {
                value: propertyValue,
                writable: true,
                enumerable: true,
                configurable: false
              });
            }
          }
        }
      }
      const serializablesLookup = {};
      for (const inherited of this.oo.specifications) {
        if (inherited.serializables) {
          for (const [name, data2] of Object.entries(inherited.serializables).reverse()) {
            if (name in serializablesLookup === false) {
              let value;
              if (typeof data2 === "string") {
                value = { type: data2 };
              } else {
                value = data2;
              }
              const origin = inherited.name;
              const object = { name, value, origin };
              this.oo.serializables.unshift(object);
              serializablesLookup[name] = object;
            } else {
              console.log(`Serializable named ${name} already defined in ${serializablesLookup[name].origin}`);
            }
          }
        }
      }
      for (const inherited of this.oo.specifications) {
        if (inherited.traits) {
          for (const [traitName, traitFunction] of Object.entries(inherited.traits)) {
            if (traitName in this === false) {
              Object.defineProperty(this, traitName, {
                value: traitFunction.bind(this),
                writable: true,
                enumerable: true,
                configurable: false
              });
            }
          }
        }
      }
      const composite = this;
      const methods = [];
      for (const inherited of this.oo.specifications) {
        if (inherited.methods) {
          for (const [methodName, methodFunction] of Object.entries(inherited.methods)) {
            methods.push(methodName);
          }
        }
      }
      function executeAll(name, arg, list) {
        let response = null;
        const reversed = Array.from(list).reverse();
        for (const inherited of reversed) {
          if (inherited.methods && inherited.methods[name]) {
            response = inherited.methods[name].bind(composite)(...arg);
          }
        }
        return response;
      }
      __name(executeAll, "executeAll");
      for (const methodName of methods) {
        Object.defineProperty(this, methodName, {
          value: function(...arg) {
            return executeAll(methodName, arg, this.oo.specifications);
          },
          writable: true,
          enumerable: true,
          configurable: false
        });
      }
      const observableData = {};
      this.oo.createObservable = (observableName, observableValue = void 0, internal = false) => {
        if (!internal) {
          this.oo.attributes.push(observableName);
        }
        const isArray = Array.isArray(observableValue) ? true : false;
        const observableExists = observableData[observableName];
        const propertyUpgrade = !observableExists && observableName in this === true;
        if (propertyUpgrade) {
          console.info(`createObservable: property "${observableName}" converted to observable on class ${this.oo.name}`, this[observableName]);
        }
        if (!observableExists) {
          if (isArray) {
            observableData[observableName] = new List(observableName, observableValue);
            Object.defineProperty(this, observableName, {
              get: () => observableData[observableName].value,
              set: (value) => {
                throw new Error(`observable array "${observableName}" cannot be replaced`);
              },
              configurable: false
            });
          } else {
            observableData[observableName] = new Primitive(observableName, observableValue);
            Object.defineProperty(this, observableName, {
              get: () => observableData[observableName].value,
              set: (value) => observableData[observableName].value = value,
              configurable: false
            });
          }
        }
      };
      for (const inherited of this.oo.specifications) {
        if (inherited.observables) {
          for (const [observableName, observableValue] of Object.entries(inherited.observables)) {
            this.oo.createObservable(observableName, observableValue, true);
          }
        }
      }
      const disposables = [];
      const disposable = /* @__PURE__ */ __name(function(...arg) {
        disposables.push(...arg);
      }, "disposable");
      Object.defineProperty(this, "disposable", {
        set: (value) => {
          throw new Error("Do not assign disposables this way use .oo.addDisposable");
        },
        configurable: false
      });
      this.dispose = () => {
        for (const disposable2 of disposables) {
          if (typeof disposable2 === "function") {
            disposable2();
          } else {
            console.error("Bad Disposable", disposable2);
          }
        }
        for (const disposable2 of this.oo.disposables) {
          if (typeof disposable2 === "function") {
            disposable2();
          } else {
            console.error("Bad Disposable", disposable2);
          }
        }
      };
      const that = this;
      this.oo.getObservables = function() {
        const response = that.oo.specifications.map(({ name, observables = {} }) => ({ name, data: Object.entries(observables).map(([name2, code]) => ({ name: name2 })) }));
        return response;
      };
      this.oo.getMethods = function() {
        const response = that.oo.specifications.map(({ name, methods: methods2 }) => ({ name, data: Object.entries(methods2).map(([name2, code]) => ({ name: name2, code: "function " + code.toString() })) }));
        return response;
      };
      this.oo.getTraits = function() {
        const response = that.oo.specifications.map(({ name, traits }) => ({ name, data: Object.entries(traits).map(([name2, code]) => ({ name: name2, code: "function " + code.toString() })) }));
        return response;
      };
      this.on = function(eventPath, observerCallback, options, control) {
        const [name, path] = eventPath.split(".", 2);
        const observableMissing = name in this === false;
        if (!observableData[name]) {
          this.oo.createObservable(name, this[name]);
          if (!observableData[name]) {
            throw new Error(`Failed to create a dynamic observable "${name}" via .on on object ${this.oo.name}`);
          }
        }
        if (control?.manualDispose || options?.manual) {
          return observableData[name].observe(path || name, observerCallback, options);
        } else {
          disposable(observableData[name].observe(path || name, observerCallback, options));
        }
      };
      this.any = function(observables, ...functions) {
        disposable(...this.anyManual(observables, ...functions));
      };
      this.all = function(observables, ...functions) {
        disposable(...this.allManual(observables, ...functions));
      };
      this.anyManual = function(observables, ...functions) {
        if (typeof observables === "string")
          observables = observables.split(" ");
        const callback2 = /* @__PURE__ */ __name(() => {
          const entries = observables.map((key) => [key, this[key]]);
          const packet = Object.fromEntries(entries);
          functions.map((\u0192) => \u0192(packet));
        }, "callback2");
        return observables.map((event) => this.on(event, callback2, void 0, { manualDispose: true }));
      };
      this.allManual = function(observables, ...functions) {
        if (typeof observables === "string")
          observables = observables.split(" ");
        const callback2 = /* @__PURE__ */ __name(() => {
          const entries = observables.map((key) => [key, this[key]]);
          const packet = Object.fromEntries(entries);
          const isReady = Object.values(packet).every((value) => value !== void 0);
          if (isReady)
            functions.map((\u0192) => \u0192(packet));
          ;
        }, "callback2");
        return observables.map((event) => this.on(event, callback2, void 0, { manualDispose: true }));
      };
      this.signal = function(name) {
        const that2 = this;
        return {
          get value() {
            return that2[name];
          },
          // get() { return that[name]; },
          set(v) {
            that2[name] = v;
          },
          subscribe: (subscriber) => {
            return this.on(name, subscriber, { manual: true });
          },
          notify: () => {
            console.log(observableData[name]);
            observableData[name].notifyAll();
          }
        };
      };
      const stateConstraints = {};
      const stateConstraint = /* @__PURE__ */ __name(function(constraints, constraintName) {
        if (constraints[constraintName]) {
          constraints[constraintName].forEach(({ test, message }) => {
            const verdict = test();
            if (verdict?.error) {
              throw new Error(`\u{1F354} state constraint error: ${message} - ${verdict.error} (attempted to execute ${constraintName})`);
            }
          });
        }
      }, "stateConstraint");
      const state = specification.state || defaultState;
      const stateNames = Object.entries(state).filter(([stateName2, stateValue]) => stateName2 !== "current");
      for (const [stateName2, stateValue] of stateNames) {
        if (stateName2 in this === false) {
          const stateFunction = function() {
            const currentState = state.current;
            const from = currentState;
            const to = stateName2;
            const transitionAllowed = isStateTransitionAllowed({
              from,
              to,
              state
            });
            if (!transitionAllowed) {
              throw new Error(`Cannot transition state from ${from} (current) to ${to}, only ${ensureArray(state[currentState].can).join(", ")} allowed.`);
            }
            const stateFunctions2 = ensureArray(state[stateName2].run);
            for (const functionName of stateFunctions2) {
              if (functionName in this === false) {
                console.info(`Initialize: Class ${specification.constructor.name} has no function named ${functionName}`);
              } else {
                stateConstraint(stateConstraints, functionName);
                this[functionName]();
              }
            }
            state.current = stateName2;
          }.bind(this);
          Object.defineProperty(this, stateName2, {
            value: stateFunction,
            writable: true,
            enumerable: true,
            configurable: false
          });
        } else {
          throw new Error(`Lol, state name "${stateName2}" is used for something else in Class ${this.oo.name}. That is absolutley not allowed, as switching between states would have been destroyed. Other reserved names are: ${stateNames.map(([stateName3, configuration]) => `${stateName3} (runs: ${ensureArray(configuration.run)})`).join(", ")}.`);
        }
      }
      for (const [stateName2, stateValue] of Object.entries(state).filter(([stateName3, stateValue2]) => stateName3 !== "current")) {
        for (const keyName of ensureArray(stateValue.run)) {
          if (specification.constraints && specification.constraints[keyName]) {
            for (const [constraintName, constraintValue] of Object.entries(specification.constraints[keyName])) {
              if (!stateConstraints[keyName])
                stateConstraints[keyName] = [];
              stateConstraints[keyName].push({ message: constraintName, test: constraintValue.bind(this) });
            }
          }
        }
      }
      for (const inherited of this.oo.specifications) {
        if (inherited.constraints && inherited.observables) {
          for (const [constraintName, constraintValue] of Object.entries(inherited.constraints).filter(([constraintName2, constraintValue2]) => inherited.observables[constraintName2])) {
            if (constraintName in observableData === false)
              throw new Error(`Unable to observable constrain "${constraintName}" becasue it is not defined in ${specification.constructor.name}`);
            for (const [message, test] of Object.entries(constraintValue)) {
              observableData[constraintName].constraints.push({ message, test: test.bind(this) });
              observableData[constraintName].constrain(observableData[constraintName].value, true);
            }
          }
        }
      }
      if (data) {
        for (const [name, value] of Object.entries(data)) {
          this[name] = value;
        }
      }
      const stateName = state.current;
      const stateFunctions = ensureArray(state[stateName].run);
      for (const functionName of stateFunctions) {
        if (functionName in this === false)
          throw new Error(`Initialize: Class ${specification.constructor.name} has no function named ${functionName}`);
        stateConstraint(stateConstraints, functionName);
        this[functionName]();
      }
    }
  };
  var Primitive = class {
    static {
      __name(this, "Primitive");
    }
    name = null;
    #value = null;
    constraints = [];
    constructor(name, value) {
      this.name = name;
      this.#value = value;
    }
    constrain(data, initialization) {
      if (initialization)
        return;
      this.constraints.forEach(({ test, message }) => {
        const verdict = test(data, this.#value);
        if (verdict?.error) {
          throw new Error(`\u{1F354} constraint error: ${message} - ${verdict.error} (attempted to set ${this.name} to ${data})`);
        }
      });
    }
    // Getter And Setter
    get value() {
      return this.#value;
    }
    set value(data) {
      if (this.#value == data)
        return;
      this.constrain(data);
      const previousValue = this.#value;
      if (data !== void 0)
        this.notify(`${this.name}.before`, this.#value, previousValue);
      this.#value = data;
      if (data !== void 0)
        this.notify(this.name, this.#value, previousValue);
    }
    // Install Observer Functionality
    #observers = {};
    observe(eventName, observerCallback, configuration) {
      const defaults = { autorun: true };
      const options = Object.assign(defaults, configuration);
      if (typeof observerCallback !== "function")
        throw new TypeError("observer must be a function.");
      if (!Array.isArray(this.#observers[eventName]))
        this.#observers[eventName] = [];
      this.#observers[eventName].push(observerCallback);
      if (options.autorun && this.#value !== void 0)
        observerCallback(this.#value);
      return () => {
        this.unobserve(eventName, observerCallback);
      };
    }
    unobserve(eventName, observerCallback) {
      this.#observers[eventName] = this.#observers[eventName].filter((obs) => obs !== observerCallback);
    }
    notify(eventName, eventData, ...extra) {
      if (Array.isArray(this.#observers[eventName])) {
        this.#observers[eventName].forEach((observerCallback) => observerCallback(eventData, ...extra));
      }
    }
    // notifyAll() {
    //   if (Array.isArray(this.#observers[this.name])){
    //     console.log('XXX', this.#value);
    //     if(this.#value !== undefined){
    //       this.#observers[this.name].forEach((observerCallback) => observerCallback(this.#value));
    //     }
    //   }
    // }
    status() {
      return {
        observerCount: Object.values(this.#observers).flat().length
      };
    }
  };
  var List = class {
    static {
      __name(this, "List");
    }
    name = null;
    #value = [];
    constraints = [];
    constructor(name, value) {
      this.name = name;
      this.#value.push(...value);
      this.constrain();
    }
    constrain(data, initialization) {
      if (initialization)
        return;
      for (const data2 of this.#value) {
        this.constraints.forEach(({ test, message }) => {
          const verdict = test(data2, this.#value);
          if (verdict?.error) {
            throw new Error(`\u{1F354} constraint error: ${message} - ${verdict.error} (attempted to set ${this.name} to ${data2})`);
          }
        });
      }
    }
    get value() {
      return this;
    }
    // Install Observer Functionality
    #observers = {};
    observe(eventName, observerCallback, configuration) {
      const defaults = { initialize: false, autorun: true, replay: false };
      const options = Object.assign(defaults, configuration);
      if (typeof observerCallback !== "function")
        throw new TypeError("observer must be a function.");
      if (!Array.isArray(this.#observers[eventName]))
        this.#observers[eventName] = [];
      const pureEvent = eventName == this.name;
      if (pureEvent) {
        if (options.autorun) {
          observerCallback(this.#value);
        }
      }
      if (options.initialize) {
        observerCallback(this.#value);
      }
      if (options.replay) {
        for (const item of this.#value) {
          observerCallback(item);
        }
      }
      this.#observers[eventName].push(observerCallback);
      return () => {
        this.unobserve(eventName, observerCallback);
      };
    }
    unobserve(eventName, observerCallback) {
      this.#observers[eventName] = this.#observers[eventName].filter((obs) => obs !== observerCallback);
    }
    notify(eventName, eventData, ...extra) {
      if (Array.isArray(this.#observers[eventName])) {
        for (const observerCallback of this.#observers[eventName]) {
          observerCallback(eventData, ...extra);
        }
      }
    }
    status() {
      return {
        observerCount: Object.values(this.#observers).flat().length
      };
    }
    // Data Editing Functions
    create(...items) {
      for (const item of items) {
        this.constrain(item);
        this.#value.push(item);
        this.notify("created", item);
        this.notify("changed", this.#value);
      }
    }
    remove(input) {
      let id;
      if (typeof input === "string") {
        id = input;
      } else {
        if (!input.id)
          throw new Error("Only stingId and onbect with an id property is supported");
        id = input.id;
      }
      const item = this.#value.find((o) => o.id === id);
      this.#value = this.#value.filter((o) => o !== item);
      this.notify("removed", item);
      this.notify("changed", this.#value);
    }
    // Data Reading Functions
    [Symbol.iterator]() {
      return this.#value[Symbol.iterator]();
    }
    find(callback) {
      if (typeof callback !== "function")
        throw new TypeError("Needs a function.");
      return this.#value.find(callback);
    }
    get(id) {
      return this.#value.find((o) => o.id === id);
    }
    map(callback) {
      if (typeof callback !== "function")
        throw new TypeError("Needs a function.");
      return this.#value.map(callback);
    }
    reduce(callback, initialValue) {
      if (typeof callback !== "function")
        throw new TypeError("Needs a function.");
      return this.#value.reduce(callback, initialValue);
    }
    filter(callback) {
      if (typeof callback !== "function")
        throw new TypeError("Needs a function.");
      return this.#value.filter(callback);
    }
    forEach(callback) {
      if (typeof callback !== "function")
        throw new TypeError("Needs a function.");
      return this.#value.forEach(callback);
    }
    indexOf(item) {
      return this.#value.indexOf(item);
    }
    slice(...argv) {
      return this.#value.slice(...argv);
    }
    get length() {
      return this.#value.length;
    }
    get raw() {
      return this.#value;
    }
  };

  // abstract/Theme.js
  var Theme = class {
    static {
      __name(this, "Theme");
    }
    id = "theme-name";
  };

  // src/Themes.js
  var Themes = class {
    static {
      __name(this, "Themes");
    }
    observables = {
      theme: "obsidian",
      themes: [new themes.Nostromo({ subtle: true }), new themes.Obsidian({ subtle: true })]
    };
    constraints = {
      theme: {
        "all themes are lower-case": function(theme) {
          if (theme.match(/[A-Z]/)) {
            return { error: "theme name contains uppercase letters" };
          }
        },
        "specified theme does not exist": function(theme) {
          if (!this.themes.map((o) => o.id).includes(theme))
            return { error: "theme does not exist" };
        }
      },
      themes: {
        "theme is not a prototype of #abstract/Theme": function(v) {
          if (!Theme.prototype.isPrototypeOf(v))
            return { error: "must extend Theme" };
        }
      }
    };
    methods = {
      initialize() {
        this.on("theme.before", (id) => {
        });
        this.on("theme", (id, old) => {
          document.querySelector("html").dataset.uiTheme = id;
        });
        this.on("themes.created", (list) => {
        });
        this.on("themes.removed", (x) => {
        });
        this.on("themes.changed", (list) => {
        });
        this.themes.remove("obsidian");
      }
    };
  };

  // plug-ins/debounce/index.js
  function debounce_default(func, wait2) {
    let timeout;
    return /* @__PURE__ */ __name(function executedFunction(...args) {
      const later = /* @__PURE__ */ __name(() => {
        clearTimeout(timeout);
        func(...args);
      }, "later");
      clearTimeout(timeout);
      timeout = setTimeout(later, wait2);
    }, "executedFunction");
  }
  __name(debounce_default, "default");

  // plug-ins/boolean/index.js
  function intersection(a3, b3) {
    const response = /* @__PURE__ */ new Set();
    for (const item of a3) {
      if (b3.has(item))
        response.add(item);
    }
    return response;
  }
  __name(intersection, "intersection");
  function difference(a3, b3) {
    const response = /* @__PURE__ */ new Set();
    for (const item of a3) {
      if (!b3.has(item))
        response.add(item);
    }
    return response;
  }
  __name(difference, "difference");

  // plug-ins/node/Node.js
  var Node = class {
    static {
      __name(this, "Node");
    }
    state = {
      current: "initial",
      initial: {
        run: "initialize"
      }
    };
    constraints = {
      initialize: {
        "node origin is requred": function() {
          if (this.origin === void 0) {
            return { error: "node is missing origin" };
          }
          if (!(typeof this.origin !== "string" || typeof this.origin !== "number")) {
            return { error: "node origin must be a string" };
          }
        }
      }
    };
    properties = {
      id: null,
      type: null,
      content: void 0
    };
    observables = {
      // some common/required properties
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      H: 0,
      r: 0,
      b: 0,
      p: 0,
      s: 0,
      zoom: void 0,
      selected: false
      // source: undefined,
      // target: undefined,
      // url: undefined, // JSON url
      // src: undefined, // JSON url
      // // data: undefined, // JSON data
      // library: undefined, // CSV libraries to use
    };
    types = {
      x: "Float",
      y: "Float",
      w: "Float",
      h: "Float",
      H: "Float",
      r: "Integer",
      b: "Integer",
      p: "Integer",
      s: "Integer",
      zoom: "Float",
      showCaption: "Boolean",
      showStatus: "Boolean"
    };
    methods = {
      assign(meta, data, content) {
        this.content = content;
        const nodeKeys = /* @__PURE__ */ new Set([...Object.keys(this.oo.specification.properties), ...Object.keys(this.oo.specification.observables)]);
        const metaKeys = /* @__PURE__ */ new Set([...Object.keys(meta)]);
        const commonProperties = intersection(nodeKeys, metaKeys);
        const newProperties = difference(metaKeys, commonProperties);
        for (const newProperty of newProperties) {
          this.oo.createObservable(newProperty, meta[newProperty]);
        }
        const values = { ...meta, data, content };
        for (const key in values) {
          if (this.oo.types[key]) {
            this[key] = cast(values[key], this.oo.types[key]);
          } else {
            this[key] = values[key];
          }
        }
      },
      toObject() {
        const meta = {};
        const data = this.data;
        const object = { meta, data };
        for (const [name, value] of Object.entries(this.oo.specification.properties)) {
          if (this[name] !== value)
            meta[name] = this[name];
        }
        for (const [name, value] of Object.entries(this.oo.specification.observables).filter(([name2]) => !["data"].includes(name2))) {
          if (this[name] !== value)
            meta[name] = this[name];
        }
        for (const name of this.oo.newObservables) {
          meta[name] = this[name];
        }
        return object;
      },
      initialize() {
      },
      stop() {
      },
      destroy() {
        this.dispose();
      }
    };
  };
  function cast(value, type) {
    if (type === "Float") {
      return parseFloat(value);
    } else if (type === "Integer") {
      return parseInt(value);
    } else if (type === "Boolean") {
      return String(value).toLowerCase() == "true";
    } else {
      throw new TypeError("Unknown type, no cast procedure");
    }
  }
  __name(cast, "cast");

  // plug-ins/domek/index.js
  var update = /* @__PURE__ */ __name(function(elements, properties) {
    const els = Array.isArray(elements) ? elements : [elements];
    for (const el of els) {
      for (const key in properties) {
        let value = properties[key];
        if (key == "style" && typeof value == "object") {
          for (const name in value) {
            el.style[name] = value[name];
          }
          continue;
        } else if (typeof value == "object") {
          value = Object.entries(value).map(([k, v]) => `${k}: ${v};`).join(" ");
        }
        if (el.namespaceURI == "http://www.w3.org/2000/svg") {
          el.setAttributeNS(null, key, value);
        } else {
          el.setAttribute(key, value);
        }
      }
    }
  }, "update");
  var svg = new Proxy({}, {
    get: function(target, property) {
      return function(properties, text3) {
        const el = document.createElementNS("http://www.w3.org/2000/svg", property);
        update(el, properties);
        if (text3)
          el.appendChild(document.createTextNode(text3));
        return el;
      };
    }
  });
  var xhtml = new Proxy({}, {
    get: function(target, property) {
      return function(properties, text3) {
        const el = document.createElementNS("http://www.w3.org/1999/xhtml", property);
        update(el, properties);
        if (text3)
          el.appendChild(document.createTextNode(text3));
        return el;
      };
    }
  });
  var html = new Proxy({}, {
    get: function(target, property) {
      return function(properties, text3) {
        const el = document.createElement(property);
        update(el, properties);
        if (text3)
          el.appendChild(document.createTextNode(text3));
        return el;
      };
    }
  });
  var text = /* @__PURE__ */ __name(function(text3) {
    return document.createTextNode(text3);
  }, "text");
  function front(element2) {
    const parentElement = element2.parentNode;
    const siblings = Array.from(parentElement.children).filter((item) => item !== element2);
    for (const item of siblings) {
      parentElement.insertBefore(item, element2);
    }
  }
  __name(front, "front");

  // plug-ins/disposable/index.js
  function createDisposableListener(element2, eventType, callback, options) {
    element2.addEventListener(eventType, callback, options);
    return {
      description: "Return an object with a destroy method to remove the event listener",
      destroy() {
        element2.removeEventListener(eventType, callback, options);
      }
    };
  }
  __name(createDisposableListener, "createDisposableListener");

  // plug-ins/windows/Objective.js
  var Objective = class {
    static {
      __name(this, "Objective");
    }
    traits = {
      // Low-level Object Oriented Programming Helpers For Windows
      getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
      }
    };
  };

  // plug-ins/windows/Disposable.js
  var Disposable = class {
    static {
      __name(this, "Disposable");
    }
    static extends = [Objective];
    traits = {
      // Low-level Object Oriented Programming Helpers For Windows
      addDisposable(disposable) {
        if (disposable.destroy) {
          this.oo.disposables.push(() => disposable.destroy());
        } else if (disposable.dispose) {
          this.oo.disposables.push(() => disposable.dispose());
        } else if (typeof disposable === "function") {
          this.oo.disposables.push(disposable);
        } else {
          throw new Error("Malformed Disposable");
        }
      },
      // Utils
      addDisposableFromMethods(object, names) {
        const methods = names.split(" ").map((o) => o.trim()).filter((o) => o);
        for (const methodName of methods) {
          this.addDisposable({
            description: `addDisposableFromMethods for ${object.id} ${methodName}`,
            destroy() {
              object[methodName]();
            }
          });
        }
      },
      addDisposableFromEvent(element2, eventType, callback, options) {
        this.addDisposable(createDisposableListener(element2, eventType, callback, options));
      },
      addDisposableFromEmitter(emitter, eventName, callback, options) {
        emitter.on(eventName, callback);
        this.addDisposable({
          destroy() {
            emitter.off(eventName, callback);
          }
        });
      },
      addDisposableFromSmartEmitter(emitter, eventName, callback, options) {
        this.addDisposable(emitter.on(eventName, callback, options));
      }
    };
  };

  // plug-ins/windows/Component.js
  var Component = class {
    static {
      __name(this, "Component");
    }
    static extends = [Disposable];
    properties = {
      id: uuid(),
      el: {},
      // bag of elements
      content: void 0
      // XML nodes
    };
    observables = {
      parent: void 0,
      // it may be needed to access parent from a control
      scene: void 0,
      // remember parent sets the scene, this child must adds its own .g to it, then its own g becomes the scene for children
      node: void 0,
      // data node
      // node has data, we keep it here at the root of component
      data: void 0,
      // the data that is in the node
      selected: false,
      // selection manager feature
      name: void 0,
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      H: 0,
      // min h
      r: 0,
      // border radius
      b: 0,
      // border
      p: 0,
      // padding
      s: 0,
      // spacer/gap
      flexible: false
      // whether or not component fills all available x,y space in ceratin situations
    };
    serializables = {
      id: "string",
      x: "float",
      y: "float",
      w: "float",
      h: "float"
    };
    constraints = {
      scene: {
        ".scene must be an instance of HTMLElement": function() {
          if (!(obj instanceof HTMLElement))
            return { error: "Not an HTMLElement" };
        }
      },
      mount: {
        ".scene is required to start": function() {
          if (!this.data) {
            return { error: "data missing" };
          }
        },
        ".node is required to start": function() {
          if (!this.node) {
            return { error: "node missing" };
          }
        },
        ".node must be an observable object": function() {
          if (!this.node.on) {
            return { error: ".on missing on .node" };
          }
        }
      }
    };
    traits = {
      draw() {
        this.el.ComponentBackground = svg.rect({
          name: this.oo.name,
          style: { "pointer-events": "none" },
          class: ["component-background", this.isApplication ? "application" : null].filter((i) => i).join(" "),
          ry: this.r,
          "stroke-width": 0,
          "vector-effect": "non-scaling-stroke",
          // set initial values
          // these are special, handeled by the layout manager
          // NOTE: these are observables, getter returns a value, setter notifies listeners, and you can ```this.observe('x', v=>{...})```
          width: this.w,
          height: this.h,
          x: this.x,
          y: this.y
        });
        this.getApplication().on("node", (node) => {
          this.el.ComponentBackground.classList.add(node.type.toLowerCase());
        });
        this.on("name", (name) => update(this.el.ComponentBackground, { name }));
        this.on("w", (width) => update(this.el.ComponentBackground, { width }));
        this.on("h", (height) => update(this.el.ComponentBackground, { height }));
        this.on("x", (x) => update(this.el.ComponentBackground, { x }));
        this.on("y", (y) => update(this.el.ComponentBackground, { y }));
        this.on("r", (ry) => update(this.el.ComponentBackground, { ry }));
        this.appendElements();
      },
      allAnchors(parent, list = []) {
        if (parent?.children) {
          for (const child of parent.children) {
            if (child.anchors?.length) {
              for (const anchor of child.anchors) {
                list.push(anchor);
              }
            }
            this.allAnchors(child, list);
          }
        }
        return list;
      },
      appendElements() {
        Object.values(this.el).forEach((el) => this.scene.appendChild(el));
      },
      removeElements() {
        Object.values(this.el).forEach((el) => el.remove());
      },
      getRootContainer() {
        let response = null;
        if (!this.parent) {
          response = this;
        } else {
          response = this.parent.getRootContainer();
        }
        return response;
      },
      getRoot() {
        let response = null;
        if (!this.parent) {
          response = this;
        } else {
          response = this.parent.getRoot();
        }
        return response;
      },
      getApplication(element2) {
        if (!element2)
          element2 = this;
        if (element2.isApplication === true) {
          return element2;
        }
        if (element2.parent)
          return this.getApplication(element2.parent);
      },
      /*
        When called for the first time, the function will not check if it is a group,
        this is to avoid nested group problems, where a group window will report it self as the containing group.
      */
      getGroup(element2, withInner = false) {
        if (!element2)
          element2 = this;
        if (withInner) {
          if (element2.isGroup === true) {
            return element2;
          }
        }
        if (element2.parent)
          return this.getGroup(element2.parent, true);
      },
      getStack(element2, list = []) {
        if (!element2)
          element2 = this;
        list.unshift(element2);
        if (element2.parent)
          this.getStack(element2.parent, list);
        return list;
      },
      getParentScale(component) {
        const list = this.getTransforms(component).slice(0, -1);
        const scale = list.map((o) => o.zoom).reduce((a3, c) => a3 * c, 1);
        return scale;
      },
      getScale(component) {
        const list = this.getTransforms(component);
        const scale = list.map((o) => o.zoom).reduce((a3, c) => a3 * c, 1);
        return scale;
      },
      getTransforms(element2, list = [], root = true) {
        if (!element2)
          element2 = this;
        const isTransform = element2.isGroup;
        if (isTransform) {
          let offsetX = element2.viewport.x - element2.x;
          let offsetY = element2.viewport.y - element2.y;
          const { oo: { name }, panX, panY, zoom, x, y } = element2;
          list.unshift({ name, panX, panY, zoom, x: element2.x + offsetX, y: element2.y + offsetY, element: element2.scene, offsetX: 0, offsetY: 0 });
        }
        if (element2.parent)
          this.getTransforms(element2.parent, list, false);
        if (root) {
          let parent = false;
          for (const [index, item] of list.entries()) {
            item.index = index;
            item.parent = parent;
            parent = item;
          }
        }
        return list;
      }
    };
    methods = {
      initialize() {
        this.on("node", (node) => {
          node.on("x", (x) => this.x = x);
          node.on("y", (y) => this.y = y);
          node.on("w", (w) => this.w = w);
          node.on("h", (h) => this.h = h);
          node.on("H", (H) => this.H = H);
          node.on("r", (r) => this.r = r);
          node.on("b", (b3) => this.b = b3);
          node.on("p", (p) => this.p = p);
          node.on("s", (s) => this.s = s);
          node.on("data", (data) => this.data = data);
          if (node.content) {
            this.content = node.content;
          }
          ;
        });
      },
      clean() {
      },
      destroy() {
        this.dispose();
        this.removeElements();
      },
      exit() {
      }
    };
  };

  // plug-ins/mouse-services/Select.js
  var Select = class {
    static {
      __name(this, "Select");
    }
    component;
    handle;
    // handlers
    mouseDownHandler;
    mouseUpHandler;
    constructor({ component, handle }) {
      if (!component)
        throw new Error("component is required");
      if (!handle)
        throw new Error("handle is required");
      this.component = component;
      this.handle = handle;
      this.mount();
    }
    select() {
      this.component.selected = true;
    }
    deselect() {
      this.component.selected = false;
    }
    deselectOthers() {
      for (const item of this.component.getGroup().realm.applications) {
        if (this.component.id !== item.id) {
          item.selected = false;
          console.log(`Deselected ${item.oo.name}`);
        }
      }
    }
    mount() {
      this.mouseDownHandler = (e) => {
        const multiSelect = e.ctrlKey;
        console.log("BEFORE", this.component.oo.name, this.component.selected);
        if (multiSelect) {
          if (this.component.selected) {
            this.deselect();
          } else {
            this.select();
          }
        } else {
          if (this.component.selected) {
            const multipleSelection = this.component.getGroup().realm.applications.length > 1;
            if (multipleSelection) {
              this.deselectOthers();
            } else {
              this.deselect();
            }
          } else {
            this.select();
            this.deselectOthers();
          }
        }
        console.log("AFTER", this.component.oo.name, this.component.selected);
      };
      this.handle.addEventListener("mousedown", this.mouseDownHandler);
    }
    destroy() {
      this.handle.removeEventListener("mousedown", this.mouseDownHandler);
    }
  };

  // plug-ins/mouse-services/Drag.js
  var Drag = class {
    static {
      __name(this, "Drag");
    }
    dragging = false;
    area = window;
    handle = null;
    scale = () => 1;
    scene;
    // before, movement, after can be set via constructor or by method overloading
    before() {
    }
    movement({ x, y }) {
    }
    after() {
    }
    mouseDownHandler;
    mouseMoveHandler;
    mouseUpHandler;
    dragging = false;
    previousX = 0;
    previousY = 0;
    constructor({ handle, area, before, movement, after, scale, scene, component }) {
      if (handle)
        this.handle = handle;
      if (area)
        this.area = area;
      if (before)
        this.before = before;
      if (movement)
        this.movement = movement;
      if (after)
        this.after = after;
      if (scale)
        this.scale = scale;
      if (scene)
        this.scene = scene;
      if (component)
        this.component = component;
      this.#mount();
    }
    #mount() {
      this.mouseDownHandler = (e) => {
        this.previousX = e.screenX;
        this.previousY = e.screenY;
        this.dragging = true;
        this.area.addEventListener("mousemove", this.mouseMoveHandler);
        this.before({ e });
      };
      this.mouseMoveHandler = (e) => {
        let movementX = this.previousX - e.screenX;
        let movementY = this.previousY - e.screenY;
        const scale = this.scale();
        movementX = movementX / scale;
        movementY = movementY / scale;
        this.movement({ e, x: movementX, y: movementY });
        this.previousX = e.screenX;
        this.previousY = e.screenY;
      };
      this.mouseUpHandler = (e) => {
        if (!this.dragging)
          return;
        this.area.removeEventListener("mousemove", this.mouseMoveHandler);
        this.after({ e });
        this.dragging = false;
      };
      this.handle.addEventListener("mousedown", this.mouseDownHandler);
      this.area.addEventListener("mouseup", this.mouseUpHandler);
    }
    destroy() {
      this.handle.removeEventListener("mousedown", this.mouseDownHandler);
      this.area.removeEventListener("mousemove", this.mouseMoveHandler);
      this.area.removeEventListener("mouseup", this.mouseUpHandler);
    }
  };

  // plug-ins/mouse-services/Connect.js
  var uuid2 = bundle["uuid"];
  var Connect = class extends Drag {
    static {
      __name(this, "Connect");
    }
    line;
    geometry = { x1: 0, y1: 0, x2: 0, y2: 0 };
    before() {
      this.line = svg.line({
        class: "editor-anchor-line",
        style: {
          "pointer-events": "none"
          /* required, otherwise the line will mousedrop on it self */
        },
        "vector-effect": "non-scaling-stroke"
      });
      this.geometry = {
        x1: this.component.x,
        y1: this.component.y,
        x2: this.component.x,
        // 0 length line
        y2: this.component.y
        // 0 length line
      };
      this.scene.appendChild(this.line);
    }
    movement({ x, y }) {
      let dx = this.geometry.x2 - x;
      let dy = this.geometry.y2 - y;
      this.geometry = {
        x1: this.component.x,
        y1: this.component.y,
        x2: dx,
        y2: dy
      };
      update(this.line, this.geometry);
    }
    after({ e }) {
      if (this.line)
        this.scene.removeChild(this.line);
      this.line = void 0;
      const isOverSelf = e.target == this.handle;
      if (isOverSelf)
        return;
      const isOverAnotherPort = e?.target?.classList?.contains("editor-socket-pad");
      const isOverBackground = e?.target?.classList?.contains("viewport-background");
      if (isOverAnotherPort) {
        const control = e.target.dataset.control;
        const port = e.target.dataset.port;
        this.component.getApplication().realm.createNode({
          id: uuid2(),
          type: "Pipe",
          from: this.component.control.id,
          out: this.component.name,
          to: control,
          in: port
        });
      }
    }
  };
  var Connect_default = Connect;

  // plug-ins/windows/Socket.js
  var Anchor = class {
    static {
      __name(this, "Anchor");
    }
    static extends = [Component];
    properties = {
      pad: null,
      selectable: false
    };
    observables = {
      control: null,
      // parent who holds the socket, set by socket api
      side: 0,
      color: "transparent"
    };
    constraints = {
      mount: {
        ".scene is required": function() {
          if (!this.scene) {
            return { error: ".svg not found" };
          }
        }
      }
    };
    methods = {
      initialize() {
        this.r = 8;
        this.s = 4;
        this.w = this.r * 2;
        this.h = this.r * 2 + this.s;
        this.x = 0;
        this.y = 0;
      },
      mount() {
        this.el.Pad = svg.circle({
          name: this.name,
          class: "editor-socket-pad",
          "data-control": this.control.id,
          "data-port": this.name,
          "vector-effect": "non-scaling-stroke",
          r: this.r,
          cx: this.x,
          cy: this.y
        });
        if (this.selectable) {
          this.on("selected", (selected) => selected ? this.el.Pad.classList.add("selected") : this.el.Pad.classList.remove("selected"));
          const select = new Select({
            component: this,
            handle: this.el.Pad
          });
          this.addDisposable(select);
        }
        this.pad = this.el.Pad;
        this.on("name", (name) => update(this.el.Pad, { name }));
        this.on("x", (cx) => update(this.el.Pad, { cx }));
        this.on("y", (cy) => update(this.el.Pad, { cy }));
        this.on("r", (r) => update(this.el.Pad, { r }));
        this.appendElements();
        const connect = new Connect_default({
          area: window,
          handle: this.el.Pad,
          scale: () => this.getScale(this),
          // ---
          scene: this.scene,
          component: this
        });
        this.addDisposable(connect);
      }
    };
  };

  // plug-ins/layout-manager/index.js
  var BOTH_SIDES = 2;
  var Layout = class {
    static {
      __name(this, "Layout");
    }
    parent;
    source;
    constructor(parent, { source } = { source: "children" }) {
      this.parent = parent;
      this.source = source;
    }
    manage(child) {
      console.log("TODO: layout manage child");
    }
    forget(child) {
      console.log("TODO: layout forget child");
    }
    calculateChildW() {
      return 320 * Math.random();
    }
    calculateH() {
      return 200 * Math.random();
    }
    calculateChildX(parent, child) {
      return 800 * Math.random();
    }
    calculateChildY(parent, child) {
      return 600 * Math.random();
    }
    above(parent, child, f = (x) => true) {
      return parent[this.source].filter((o) => f(o)).slice(0, parent[this.source].filter((o) => f(o)).indexOf(child));
    }
    #cleanup = [];
    cleanup(...arg) {
      this.#cleanup.push(...arg);
    }
  };
  var VerticalLayout = class extends Layout {
    static {
      __name(this, "VerticalLayout");
    }
    manage(child) {
      child.x = this.calculateChildX(child);
      child.y = this.calculateChildY(child);
      child.w = this.calculateChildW(child);
      this.parent.on("x", () => child.x = this.calculateChildX(child));
      this.parent.on("y", () => child.y = this.calculateChildY(child));
      this.parent.on("w", () => child.w = this.calculateChildW(child));
      child.on("h", () => {
      });
      this.parent.on("h", () => child.y = this.calculateChildY(child));
      this.parent.on("h", () => {
        if (child.flexible)
          child.h = this.calculateGrowChildH(child);
      });
    }
    calculateChildW(child) {
      const response = this.parent.w - (this.parent.b + this.parent.p) * BOTH_SIDES;
      return response;
    }
    calculateH() {
      let heightOfChildren = 0;
      const children2 = this.parent[this.source];
      heightOfChildren = children2.reduce((total, c) => total + c.h, 0) + this.parent.s * 2 * (children2.length > 0 ? children2.length - 1 : 0);
      let response = this.parent.b + this.parent.p + heightOfChildren + this.parent.p + this.parent.b;
      if (response < this.parent.H) {
        response = this.parent.H;
      }
      return response;
    }
    calculateChildX() {
      const response = this.parent.x + // use my own x
      this.parent.b + // add border
      this.parent.p;
      return response;
    }
    calculateChildY(child) {
      const response = this.parent.y + this.parent.b + this.parent.p + this.above(this.parent, child).reduce((total, child2) => total + child2.h, 0) + this.parent.s * 2 * this.above(this.parent, child).length;
      return response;
    }
    calculateGrowChildH(flexibleChild) {
      let response = flexibleChild.h;
      const onlyChild = this.parent.children.length === 1;
      if (onlyChild) {
        return this.parent.h;
      }
      const children2 = this.parent.children.filter((c) => c !== flexibleChild);
      const childrenHeight = children2.reduce((total, c) => total + c.h, 0);
      const childrenHeightGaps = this.parent.s * 1 * this.parent.children.length;
      const freeSpace = this.parent.h - childrenHeight - this.parent.b * 2 - this.parent.p * 2 - childrenHeightGaps;
      if (children2.length && freeSpace) {
        return freeSpace;
      }
      return response;
    }
  };
  var HorizontalLayout = class extends Layout {
    static {
      __name(this, "HorizontalLayout");
    }
    manage(child) {
      const children2 = this.parent[this.source];
      const childCount = children2.length;
      const siblingCount = this.above(this.parent, child).length;
      child.x = this.calculateChildX(child);
      child.y = this.calculateChildY(child);
      child.w = this.calculateChildW(child);
      this.parent.on("x", () => child.x = this.calculateChildX(child));
      this.parent.on("y", () => child.y = this.calculateChildY(child));
      this.parent.on("h", () => child.y = this.calculateChildY(child));
      this.parent.on("children.changed", (list) => list.forEach((child2) => {
        child2.w = this.calculateChildW(child2);
        child2.x = this.calculateChildX(child2);
      }));
      this.parent.on("w", () => {
        child.w = this.calculateChildW(child);
        child.x = this.calculateChildX(child);
      });
      child.on("h", () => this.parent.h = this.calculateH());
    }
    calculateChildX(child) {
      const response = this.parent.x + this.parent.b + this.parent.p + this.above(this.parent, child).reduce((total, child2) => total + child2.w, 0) + this.parent.s * 2 * this.above(this.parent, child).length;
      return response;
    }
    calculateChildW1(child) {
      const children2 = this.parent[this.source];
      const childCount = children2.length;
      const siblingCount = this.above(this.parent, child).length;
      let response = this.parent.w / childCount;
      return response;
    }
    calculateChildW(child) {
      if (!(child.W === void 0))
        return child.W < 1 ? this.parent.w * child.W : child.W;
      const children2 = this.parent[this.source];
      let softElements = children2.filter((child2) => child2.W === void 0);
      let hardElements = children2.filter((child2) => !(child2.W === void 0));
      let hardSpace = hardElements.reduce((total, child2) => total + (child2.W < 1 ? this.parent.w * child2.W : child2.W), 0);
      let spacers = this.parent.s * 2 * (children2.length > 0 ? children2.length - 1 : 0);
      let availableSoftSpace = this.parent.w - hardSpace - spacers;
      let softUnit = availableSoftSpace / (softElements.length || 1);
      return softUnit;
    }
    calculateChildY(child) {
      const response = this.parent.y + this.parent.b + this.parent.p;
      return response;
    }
    calculateH() {
      let heightOfChildren = 0;
      const children2 = this.parent[this.source];
      heightOfChildren = children2.reduce((max, c) => c.h > max ? c.h : max, 0);
      let response = this.parent.b + this.parent.p + heightOfChildren + this.parent.p + this.parent.b;
      if (response < this.parent.H)
        response = this.parent.H;
      return response;
    }
  };
  var SocketLayout = class extends Layout {
    static {
      __name(this, "SocketLayout");
    }
    manage(child) {
      child.x = this.calculateChildX(child);
      child.y = this.calculateChildY(child);
      this.parent.on("x", () => child.x = this.calculateChildX(child));
      this.parent.on("y", () => child.y = this.calculateChildY(child));
      this.parent.on("w", () => child.x = this.calculateChildX(child));
      this.parent.on("h", () => child.y = this.calculateChildY(child));
    }
    calculateChildX(child) {
      if (!child.side) {
        return this.parent.x - child.r - child.s;
      } else {
        return this.parent.x + this.parent.w + child.r + child.s;
      }
      this.parent.b + this.parent.p;
    }
    calculateChildY(child) {
      const response = this.parent.y + this.parent.b + this.parent.p + child.r + this.above(this.parent, child, (o) => o.side == child.side).reduce((total, child2) => total + child2.h, 0) + this.parent.s * 2 * this.above(this.parent, child, (o) => o.side == child.side).length;
      return response;
    }
  };

  // plug-ins/event-emitter/EventEmitter.js
  var EventEmitter = class {
    static {
      __name(this, "EventEmitter");
    }
    constructor() {
      this.events = {};
    }
    // Method to subscribe to an event
    on(eventName, listener) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }
      this.events[eventName].push(listener);
    }
    // Method to unsubscribe from an event
    off(eventName, listener) {
      if (!this.events[eventName]) {
        return;
      }
      const idx = this.events[eventName].indexOf(listener);
      if (idx > -1) {
        this.events[eventName].splice(idx, 1);
      }
    }
    // Method to emit an event
    emit(eventName, ...args) {
      const listeners = this.events[eventName];
      if (listeners) {
        listeners.forEach((listener) => listener.apply(this, args));
      }
    }
    // Method to only listen once for an event
    once(eventName, listener) {
      const onceListener = /* @__PURE__ */ __name((...args) => {
        this.off(eventName, onceListener);
        listener.apply(this, args);
      }, "onceListener");
      this.on(eventName, onceListener);
    }
  };

  // plug-ins/windows/api/Sockets.js
  var Sockets = class {
    static {
      __name(this, "Sockets");
    }
    static extends = [];
    observables = {
      socketRegistry: [],
      sockets: []
    };
    traits = {
      createSocket(name, side) {
        if (!name)
          throw new Error(`It is not possible to create an socket without an socket name.`);
        if (!side === void 0)
          throw new Error(`It is not possible to create an socket without specifying a side, 0 or 1.`);
        const id = [this.id, name].join("/");
        const socket = new Instance(Anchor, { id, name, side, parent: this.parent, control: this, scene: this.scene });
        this.sockets.create(socket);
      },
      removeSocket(id) {
        this.sockets.remove(id);
      },
      send(name, packet) {
        this.pipe.emit(name, packet);
      },
      pipe(name) {
        const id = [name, this.getRootContainer().id].join(":");
        const origin = globalThis.project.origins.get(this.getRootContainer().node.origin);
        const pipe = origin.root.pipes.get(id);
        return pipe;
      }
    };
    methods = {
      initialize() {
        this.pipe = new EventEmitter();
        this.socketLayout = new SocketLayout(this, { source: "sockets" });
        let parent;
        if (this.parent) {
          parent = this.parent.getApplication();
        } else {
          parent = this.getApplication();
        }
        this.on("sockets.created", (socket) => {
          socket.start();
          this.socketLayout.manage(socket);
          parent.getApplication().socketRegistry.create(socket);
        }, { replay: true });
        this.on("sockets.removed", (socket) => {
          socket.stop();
          parent.getApplication().socketRegistry.remove(socket.id);
        });
      },
      clean() {
        this.sockets.map(({ id }) => this.removeSocket(id));
      }
    };
  };

  // plug-ins/windows/Container.js
  var Container = class {
    static {
      __name(this, "Container");
    }
    static extends = [Component];
    properties = {
      layout: null
    };
    observables = {
      children: []
    };
    methods = {
      initialize() {
        this.on("children.created", (child) => {
          child.scene = this.scene;
          child.start();
          this.layout.manage(child);
        }, { replay: true });
        this.on("children.removed", (child) => {
          child.stop();
          this.layout.forget(child);
        });
      },
      clean() {
        this.children.map(({ id }) => this.children.remove(id));
      },
      destroy() {
      },
      exit() {
      }
    };
  };

  // plug-ins/windows/Vertical.js
  var Vertical = class {
    static {
      __name(this, "Vertical");
    }
    static extends = [Container];
    methods = {
      initialize() {
        this.layout = new VerticalLayout(this);
      }
    };
  };

  // plug-ins/pipe/Pipe.js
  var EventEmitter2 = bundle["events"];

  // plug-ins/windows/Control.js
  var Control = class {
    static {
      __name(this, "Control");
    }
    static extends = [Component];
  };

  // plug-ins/windows/Horizontal.js
  var Horizontal = class {
    static {
      __name(this, "Horizontal");
    }
    static extends = [Container];
    methods = {
      initialize() {
        this.layout = new HorizontalLayout(this);
      }
    };
  };

  // plug-ins/windows/Label.js
  var Label = class {
    static {
      __name(this, "Label");
    }
    static extends = [Control];
    properties = {
      handle: null
    };
    observables = {
      text: ""
    };
    constraints = {
      mount: {
        ".scene is required to start the universe": function() {
          if (!this.scene) {
            return { error: ".svg not found" };
          }
        }
      }
    };
    methods = {
      initialize() {
        this.s = 3;
      },
      mount() {
        this.el.Container = svg.rect({
          name: this.name,
          class: "editor-label",
          "stroke-width": this.b,
          "vector-effect": "non-scaling-stroke",
          ry: this.r,
          // set initial values
          // these are special, handeled by the layout manager
          // NOTE: these are observables, getter returns a value, setter notifies listeners, and you can ```this.observe('x', v=>{...})```
          width: this.w,
          height: this.h,
          x: this.x,
          y: this.y
        });
        this.handle = this.el.Container;
        this.el.ClipPath = svg.clipPath({
          id: `clip-path-${this.id}`
        });
        const clipPathRect = svg.rect({
          x: this.x,
          y: this.y,
          width: this.w,
          height: this.h
        });
        this.el.ClipPath.appendChild(clipPathRect);
        this.el.Caption = svg.text({
          name: this.name,
          class: "editor-label-text",
          "dominant-baseline": "hanging",
          "clip-path": `url(#clip-path-${this.id})`,
          x: this.x,
          y: this.y
        });
        const updateZUI = /* @__PURE__ */ __name(function(el, zuiAttributes, standardAttributes) {
          if (globalThis.project.zoom > 1) {
            update(el, zuiAttributes);
          } else {
            update(el, standardAttributes);
          }
        }, "updateZUI");
        if (0) {
          globalThis.project.on("zoom", (v) => requestAnimationFrame(() => {
            updateZUI(this.el.Caption, { style: { scale: 1 / globalThis.project.zoom }, x: (this.x + this.s) * globalThis.project.zoom, y: (this.y + this.s) * globalThis.project.zoom }, { style: { scale: 1 }, x: this.x + this.s, y: this.y + this.s });
            updateZUI(clipPathRect, { x: this.x * globalThis.project.zoom, y: this.y * globalThis.project.zoom, width: this.w * globalThis.project.zoom, height: this.h * globalThis.project.zoom }, { x: this.x, y: this.y, width: this.w, height: this.h });
          }));
        }
        const captionText = text(this.text);
        this.el.Caption.appendChild(captionText);
        this.on("selected", (selected) => selected ? this.el.Container.classList.add("selected") : this.el.Container.classList.remove("selected"));
        this.on("name", (name) => update(this.el.Container, { name }));
        this.on("w", (width) => update(this.el.Container, { width }));
        this.on("h", (height) => update(this.el.Container, { height }));
        this.on("x", (x) => update(this.el.Container, { x }));
        this.on("y", (y) => update(this.el.Container, { y }));
        this.on("r", (ry) => update(this.el.Container, { ry }));
        this.on("text", (text3) => captionText.nodeValue = text3);
        this.any(["x", "y"], ({ x, y }) => updateZUI(this.el.Caption, { x: (x + this.s) * globalThis.project.zoom, y: (y + this.s) * globalThis.project.zoom }, { style: { scale: 1 }, x: x + this.s, y: y + this.s }));
        this.any(["x", "y", "w", "h"], ({ x, y, w: width, h: height }) => updateZUI(clipPathRect, { x: x * globalThis.project.zoom, y: y * globalThis.project.zoom, width: width * globalThis.project.zoom, height: this.h * globalThis.project.zoom }, { x, y, width, height }));
        this.appendElements();
      }
    };
  };

  // plug-ins/nest/index.js
  var typeOf = /* @__PURE__ */ __name(function(variable) {
    if (Array.isArray(variable))
      return "Array";
    if (typeof variable === "function")
      return "Function";
    if (Object(variable) === variable)
      return "Object";
  }, "typeOf");
  var byType = /* @__PURE__ */ __name(function(input) {
    const response = {};
    for (const variable of input) {
      response[typeOf(variable)] = variable;
    }
    return response;
  }, "byType");
  function nest(Type, ...input) {
    if (!Type)
      return;
    const { Object: attr2, Array: children2, Function: init2 } = byType(input);
    const instance25 = new Instance(Type, attr2);
    if (init2)
      init2(instance25, this ? this.parent : null);
    return [instance25, children2?.map((child) => nest.bind({ parent: instance25 })(...child)).map(([ins, chi]) => chi ? [ins, chi] : ins)];
  }
  __name(nest, "nest");

  // plug-ins/windows/Caption.js
  var Caption = class {
    static {
      __name(this, "Caption");
    }
    static extends = [Control];
    properties = {
      handle: null
    };
    observables = {
      text: ""
    };
    constraints = {
      mount: {
        ".scene is required to start the universe": function() {
          if (!this.scene) {
            return { error: ".svg not found" };
          }
        }
      }
    };
    traits = {};
    methods = {
      initialize() {
      },
      mount() {
        const [horizontal, [info1, maximizeButton]] = nest(
          Horizontal,
          { parent: this, scene: this.scene, s: 2 },
          [
            [Label, { h: 24, text: this.text, parent: this, r: 3 }, (c, p) => {
              p.children.create(c);
            }]
            // [Label, {h: 24, W:24, text: '++', parent:this , r:3}, (c,p)=>{
            //   p.children.create(c)
            // }],
          ],
          (c) => {
          }
        );
        this.handle = info1.el.Container;
        this.horizontal = horizontal;
        this.horizontal.start();
        this.on("selected", (selected) => selected ? info1.el.Container.classList.add("selected") : info1.el.Container.classList.remove("selected"));
        this.on("text", (text3) => info1.text = text3);
        this.any(["x", "y", "w", "h"], ({ x, y, w, h }) => Object.assign(this.horizontal, { x, y, w, h }));
        let maximized = false;
        const parent = this.getApplication().parent ? this.getApplication().parent.getApplication() : this.getRootContainer();
        const current = this.getApplication();
        const bottle = [
          [parent.pane, "zoom", null],
          [parent.pane, "panX", null],
          [parent.pane, "panY", null],
          [current, "x", null],
          [current, "y", null],
          [current, "w", null],
          [current, "h", null]
        ];
        let unwatch;
        const windowToggle = /* @__PURE__ */ __name(function(e) {
          e.stopPropagation();
          front(current.scene);
          if (maximized) {
            unwatch.map((x) => x());
            for (const [i, [o, k, v]] of bottle.entries()) {
              o[k] = v;
            }
            maximized = false;
          } else {
            for (const [i, [o, k, v]] of bottle.entries()) {
              bottle[i][2] = o[k];
            }
            parent.pane.zoom = 1;
            parent.pane.panX = 0;
            parent.pane.panY = 0;
            current.x = 0;
            current.y = 0;
            unwatch = parent.pane.viewport.any(["w", "h"], ({ w, h }) => {
              current.w = parent.pane.viewport.w / parent.pane.viewport.zoom;
              current.h = parent.pane.viewport.h / parent.pane.viewport.zoom;
            });
            maximized = true;
          }
        }, "windowToggle");
      },
      clean() {
        this.horizontal.stop();
      }
    };
  };

  // plug-ins/mouse-services/Move.js
  var Move = class extends Drag {
    static {
      __name(this, "Move");
    }
  };
  var Move_default = Move;

  // plug-ins/mouse-services/Focus.js
  var Focus = class {
    static {
      __name(this, "Focus");
    }
    component;
    handle;
    element = () => {
    };
    // handlers
    mouseDownHandler;
    mouseUpHandler;
    constructor({ component, handle, element: element2 }) {
      if (!component)
        throw new Error("component is required");
      if (!handle)
        throw new Error("handle is required");
      this.component = component;
      this.element = element2;
      this.handle = handle;
      this.mount();
    }
    mount() {
      this.mouseDownHandler = (e) => {
        e.stopPropagation();
        front(this.element());
      };
      this.handle.addEventListener("mousedown", this.mouseDownHandler);
    }
    destroy() {
      this.handle.removeEventListener("mousedown", this.mouseDownHandler);
    }
  };

  // plug-ins/mouse-services/Resize.js
  var Resize = class {
    static {
      __name(this, "Resize");
    }
    box;
    area = window;
    handle = null;
    scale;
    before = () => {
    };
    movement = () => {
    };
    after = () => {
    };
    mouseDownHandler;
    mouseMoveHandler;
    mouseUpHandler;
    dragging = false;
    previousX = 0;
    previousY = 0;
    minimumX = 128;
    minimumY = 128;
    sinkX = 0;
    sinkY = 0;
    simulatedW = 0;
    simulatedH = 0;
    constructor({ box, handle, area, before, movement, after, scale, minimumX, minimumY }) {
      this.box = box;
      this.handle = handle;
      this.area = area;
      this.before = before;
      this.movement = movement;
      this.after = after;
      this.scale = scale;
      this.minimumX = minimumX;
      this.minimumY = minimumY;
      this.#mount();
    }
    #mount() {
      this.mouseDownHandler = (e) => {
        this.previousX = e.screenX;
        this.previousY = e.screenY;
        this.sinkX = 0;
        this.sinkY = 0;
        this.simulatedW = this.box.w;
        this.simulatedH = this.box.h;
        this.area.addEventListener("mousemove", this.mouseMoveHandler);
        this.before();
      };
      this.mouseMoveHandler = (e) => {
        let movementX = this.previousX - e.screenX;
        let movementY = this.previousY - e.screenY;
        const scale = this.scale();
        movementX = movementX / scale;
        movementY = movementY / scale;
        this.simulatedW -= movementX;
        this.simulatedH -= movementY;
        let limitX = this.simulatedW < this.minimumX;
        let limitY = this.simulatedH < this.minimumY;
        if (limitX) {
          this.sinkX = this.sinkX - movementX;
          this.box.w = this.minimumX;
        } else {
          this.box.w = this.simulatedW;
        }
        if (limitY) {
          this.sinkY = this.sinkY - movementY;
          this.box.h = this.minimumY;
        } else {
          this.box.h = this.simulatedH;
        }
        this.previousX = e.screenX;
        this.previousY = e.screenY;
      };
      this.mouseUpHandler = (e) => {
        this.after();
        this.area.removeEventListener("mousemove", this.mouseMoveHandler);
      };
      this.handle.addEventListener("mousedown", this.mouseDownHandler);
      this.area.addEventListener("mouseup", this.mouseUpHandler);
    }
    destroy() {
      this.handle.removeEventListener("mousedown", this.mouseDownHandler);
      this.area.removeEventListener("mousemove", this.mouseMoveHandler);
      this.area.removeEventListener("mouseup", this.mouseUpHandler);
    }
  };

  // plug-ins/windows/Window.js
  var Window = class {
    static {
      __name(this, "Window");
    }
    static extends = [Sockets, Vertical];
    observables = {
      caption: "",
      showCaption: false,
      isResizable: false,
      showMenu: false,
      showStatus: false
      // selected: false,
    };
    properties = {
      contain: true
    };
    traits = {
      createWindowComponent(component) {
        component.parent = this;
        this.children.create(component);
      }
    };
    methods = {
      initialize() {
        if (this.isRootWindow)
          return;
        if (this.oo.name == "Pipe")
          return;
        this.r = 5;
        this.b = 0;
        this.s = 3;
      },
      mount() {
        if (this.isResizable) {
          let width = 32;
          let height = 32;
          this.el.ResizeHandle = svg.rect({
            class: "window-resize-handle",
            "stroke-width": 0,
            "fill": "magenta",
            width,
            height
          });
          this.any("w h x y", ({ w, h, x, y }) => {
            update(this.el.ResizeHandle, { x: this.x + this.w - width * 0.8, y: this.y + this.h - height * 0.8 });
          });
          this.on("r", (ry) => update(this.el.ResizeHandle, { ry }));
          const resize = new Resize({
            area: window,
            minimumX: 128,
            minimumY: 128,
            handle: this.el.ResizeHandle,
            scale: () => this.getScale(this.parent),
            // BUG WARNING, it should say this not this.parent
            box: this.getApplication(this),
            before: () => {
            },
            movement: ({ x, y }) => {
            },
            after: () => {
            }
          });
          this.addDisposable(resize);
        }
        this.draw();
        if (this.isRootWindow)
          return;
        if (this.showCaption) {
          this.captionComponent = new Instance(Caption, { h: 24, text: this.caption });
          this.on("caption", (v) => this.captionComponent.text = v);
          this.createWindowComponent(this.captionComponent);
          this.on("node", (node) => {
            if (node.caption)
              node.on("caption", (caption) => this.caption = caption);
          });
          const move = new Move_default({
            area: window,
            handle: this.captionComponent.handle,
            scale: () => this.getScale(this.parent),
            before: () => {
            },
            movement: ({ x, y }) => {
              this.node.x -= x;
              this.node.y -= y;
            },
            after: () => {
            }
          });
          this.addDisposable(move);
          const select = new Select({
            component: this,
            handle: this.captionComponent.handle
          });
          this.addDisposable(select);
          this.on("selected", (v) => this.captionComponent.selected = v);
        }
        const focus = new Focus({
          handle: this.scene,
          // TIP: set to caption above to react to window captions only
          component: this,
          element: () => this.scene
        });
        this.addDisposable(focus);
      }
    };
  };

  // plug-ins/windows/framework/Bootstrap.js
  var Bootstrap = class {
    static {
      __name(this, "Bootstrap");
    }
    static extends = [];
    observables = {
      context: "dark",
      text: "",
      status: ""
    };
    serializables = {
      context: { type: "string", enum: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"], default: "dark" },
      text: "string",
      note: "string"
    };
    traits = {};
    methods = {
      initialize() {
      },
      clean() {
      }
    };
  };

  // plug-ins/constants/index.js
  function constants_default(CONSTANTS) {
    const constants = Object.fromEntries([...CONSTANTS.split(" ").map((o) => o.trim()).filter((o) => o).entries()].map((a3) => a3.reverse()));
    return new Proxy(constants, {
      get(target, prop) {
        if (prop in target) {
          return target[prop];
        } else {
          throw new Error(`Attempt to access undefined constant '${prop}'. Check for typos!`);
        }
      }
    });
  }
  __name(constants_default, "default");

  // plug-ins/stop-wheel/index.js
  var Action = constants_default(" SCROLL ZOOM ");
  function stopWheel(el) {
    function wheelHandler(e) {
      const hasVerticalScrollbar = el.clientHeight < el.scrollHeight;
      const hasHorizontalScrollbar = el.clientWidth < el.scrollWidth;
      const isHoldingShiftKey = e.shiftKey;
      let action = Action.ZOOM;
      if (hasVerticalScrollbar)
        action = Action.SCROLL;
      if (isHoldingShiftKey)
        action = Action.ZOOM;
      if (action == Action.ZOOM) {
        e.preventDefault();
        return false;
      }
      ;
      if (action == Action.SCROLL) {
        e.stopPropagation();
      }
    }
    __name(wheelHandler, "wheelHandler");
    el.addEventListener("wheel", wheelHandler);
    return {
      destroy() {
        el.removeEventListener("wheel", wheelHandler);
      }
    };
  }
  __name(stopWheel, "stopWheel");

  // plug-ins/constants/Direction.js
  var Direction_default = constants_default(" INPUT OUTPUT ");

  // plug-ins/windows/framework/svelte/Field.js
  var Field = class {
    static {
      __name(this, "Field");
    }
    observables = {
      id: uuid(),
      type: "String",
      direction: Direction_default.INPUT,
      label: "Unlabeled",
      validator: null,
      help: "",
      x: 0,
      y: 0
    };
    methods = {
      initialize() {
      }
    };
  };

  // plug-ins/windows/framework/Svelte.js
  var Svelte = class {
    static {
      __name(this, "Svelte");
    }
    static extends = [];
    observables = {
      fields: []
    };
    traits = {
      stopWheel(el) {
        this.addDisposable(stopWheel(el));
      },
      createField(options) {
        const { id, direction, label, validator } = options;
        this.createSocket(id, direction);
        const field = new Instance(Field, options);
        this.fields.create(field);
        field.start();
      },
      removeField(id) {
        this.fields.get(id).stop();
        this.fields.remove(id);
      }
    };
    methods = {
      initialize() {
      }
    };
  };

  // plug-ins/priority-sort/index.js
  function prioritySort(list, priority, field) {
    const WILDCARD = priority.indexOf("*") == -1 ? priority.length - 1 : priority.indexOf("*");
    const indexer = /* @__PURE__ */ __name(function(a3) {
      const value = priority.indexOf(field(a3));
      return value === -1 ? WILDCARD : value;
    }, "indexer");
    const sorter = /* @__PURE__ */ __name(function(a3, b3) {
      return indexer(a3) - indexer(b3);
    }, "sorter");
    return [...list].sort(sorter);
  }
  __name(prioritySort, "prioritySort");

  // plug-ins/windows/Application.js
  var Application = class {
    static {
      __name(this, "Application");
    }
    static extends = [Svelte, Bootstrap, Window];
    properties = {
      isApplication: true
    };
    observables = {
      origins: [],
      applications: [],
      url: null
    };
    traits = {
      makeResizable(el) {
        const resize = new Resize({
          area: window,
          minimumX: 128,
          minimumY: 128,
          handle: el,
          scale: () => this.getScale(this),
          box: this.getApplication(this),
          before: () => {
          },
          movement: ({ x, y }) => {
          },
          after: () => {
          }
        });
        this.addDisposable(resize);
      },
      makeMovable(el) {
        const move = new Move_default({
          area: window,
          handle: el,
          scale: () => this.getScale(this),
          before: () => {
          },
          movement: ({ x, y }) => {
            this.node.x -= x;
            this.node.y -= y;
          },
          after: () => {
          }
        });
        this.addDisposable(move);
        const select = new Select({
          component: this,
          handle: el
        });
        this.addDisposable(select);
        const focus = new Focus({
          handle: this.scene,
          // TIP: set to caption above to react to window captions only
          component: this,
          element: () => this.scene
        });
        this.addDisposable(focus);
      },
      removeApplication() {
        const item = this;
        const realm = item.getGroup().realm;
        if (item.oo.name == "Pipe") {
          realm.elements.remove(item.id);
        } else {
          for (const relatedPipe of realm.applications.filter((x) => x.oo.name == "Pipe").filter((x) => x.to == item.id || x.from == item.id)) {
            realm.elements.remove(relatedPipe.id);
          }
          realm.elements.remove(item.id);
        }
      },
      removeApplications(realm) {
        const selected = [...realm.applications.filter((o) => o.selected)];
        const ordered = prioritySort(selected, ["Pipe", "Something", "*"], (application) => application.oo.name);
        for (const item of ordered) {
          if (item.oo.name == "Pipe") {
            realm.elements.remove(item.id);
          } else {
            for (const relatedPipe of realm.applications.filter((x) => x.oo.name == "Pipe").filter((x) => x.to == item.id || x.from == item.id)) {
              realm.elements.remove(relatedPipe.id);
            }
            realm.elements.remove(item.id);
          }
        }
      },
      /**
          connectObservableToWritable USAGE:
          this.xWritable = writable(0);
          this.yWritable = writable(0);
          this.component = new Interface({
              target: this.foreign.body,
              props: {
                x: this.xWritable,
                y: this.yWritable,
                object: null,
                paneItems: stores.getPaneItems( this.getRoot() )
              }
          });
          this.connectObservableToWritable( object, 'x', this, 'xWritable', (v)=>v.toFixed(2))
          this.connectObservableToWritable( object, 'y', this, 'yWritable', (v)=>v.toFixed(2))
      
          **/
      connectObservableToWritable(fromObject, observableName, toObject, writableName, transform) {
        if (!this.oo.scratch.couplers) {
          this.oo.scratch.couplers = {};
          this.addDisposable({
            description: `clean any remaining couplers when component is shut down`,
            destroy() {
              Object.values(this.oo.scratch.couplers).map((f) => f());
            }
          });
        }
        let id = observableName;
        if (this.oo.scratch.couplers[id])
          this.oo.scratch.couplers[id]();
        const disposable = fromObject.on(observableName, (v) => toObject[writableName].set(transform ? transform(v) : v), { autorun: true }, { manualDispose: true });
        this.oo.scratch.couplers[id] = disposable;
      }
    };
    methods = {
      initialize() {
        this.controller = new EventEmitter();
        this.getRoot().applications.create(this);
      },
      mount() {
        this.addDisposableFromSmartEmitter(this.getRoot().keyboard, "Remove", () => this.removeApplications(this.getGroup(this, true).realm));
      }
    };
  };

  // plug-ins/cast/index.js
  function cast2(value, type) {
    if (type === "string") {
      return new String(value).toString();
    } else if (type === "object") {
      if (typeof value === "string") {
        JSON.parse(value);
      } else {
        return value;
      }
    } else if (type === "float") {
      return parseFloat(value);
    } else if (type === "integer") {
      return parseInt(value);
    } else if (type === "boolean") {
      return String(value).toLowerCase() == "true";
    } else {
      throw new TypeError(`Unknown type "${type}", no cast procedure`);
    }
  }
  __name(cast2, "cast");

  // plug-ins/mouse-services/Pan.js
  var Pan = class extends Drag {
    static {
      __name(this, "Pan");
    }
  };
  var Pan_default = Pan;

  // plug-ins/translate-cursor/index.js
  function translate(x0, y0, localList) {
    let x1 = x0;
    let y1 = y0;
    let parentZoom = 1;
    let locationX = 0;
    let locationY = 0;
    for (const [i, t] of localList.entries()) {
      let curX = t.x * parentZoom;
      locationX = locationX + curX;
      let curY = t.y * parentZoom;
      locationY = locationY + curY;
      let curPanX = t.panX * parentZoom;
      locationX = locationX + curPanX;
      let curPanY = t.panY * parentZoom;
      locationY = locationY + curPanY;
      parentZoom = parentZoom * t.zoom;
    }
    x1 = x1 - locationX;
    y1 = y1 - locationY;
    const self2 = localList[localList.length - 1];
    const finalZoom = localList.map((o) => o.zoom).reduce((a3, c) => a3 * c, 1) / self2.zoom;
    x1 = x1 / finalZoom;
    y1 = y1 / finalZoom;
    x1 = x1 / self2.zoom;
    y1 = y1 / self2.zoom;
    return [x1, y1];
  }
  __name(translate, "translate");

  // plug-ins/mouse-services/Zoom.js
  var Zoom = class {
    static {
      __name(this, "Zoom");
    }
    event = "wheel";
    area;
    handle;
    getter;
    before = () => {
    };
    change = () => {
    };
    after = () => {
    };
    feedback = () => {
    };
    magnitude;
    // magnitude of change
    min;
    max;
    constructor({ getter, component, transforms, area = window, handle, before = /* @__PURE__ */ __name(() => {
    }, "before"), change, after = /* @__PURE__ */ __name(() => {
    }, "after"), feedback = /* @__PURE__ */ __name(() => {
    }, "feedback"), magnitude = 1, min = 0.1, max = 5 }) {
      this.transforms = transforms;
      this.component = component;
      this.area = area;
      this.handle = handle;
      this.getter = getter;
      this.before = before;
      this.change = change;
      this.after = after;
      this.feedback = feedback;
      this.magnitude = magnitude;
      this.min = min;
      this.max = max;
      this.#mount();
    }
    #mount() {
      this.movelHandler = (e) => {
      };
      this.wheelHandler = (e) => {
        e.stopImmediatePropagation();
        this.before(this);
        const INTO = 1;
        const OUTOF = -1;
        let zoomDirection = e.deltaY > 0 ? OUTOF : INTO;
        const [cursorX, cursorY] = translate(e.clientX, e.clientY, this.transforms());
        const transformed = this.#translateZoom({ zoom: this.getter("zoom"), panX: this.getter("panX"), panY: this.getter("panY"), cursorX, cursorY, deltaZoom: zoomDirection, magnitude: this.magnitude });
        this.change(transformed);
        this.after(this);
      };
      this.area.addEventListener(this.event, this.wheelHandler);
      this.handle.addEventListener(this.event, this.wheelHandler);
      this.area.addEventListener("mousemove", this.movelHandler);
    }
    destroy() {
      this.area.removeEventListener(this.event, this.wheelHandler);
      this.handle.removeEventListener(this.event, this.wheelHandler);
      this.area.removeEventListener("mousemove", this.movelHandler);
    }
    #translateZoom({ zoom, panX, panY, deltaZoom, cursorX, cursorY, magnitude = 1, min = 0.01, max = 1e3 }) {
      const zoomClamp = /* @__PURE__ */ __name((v) => Math.min(max, Math.max(min, v)), "zoomClamp");
      const controledMagnitude = magnitude * zoom;
      let zoom1 = zoomClamp(zoom + deltaZoom * controledMagnitude);
      const zoomChange = zoom1 - zoom;
      console.info("switched to remote translateCursor this is experimental");
      const panX1 = panX - cursorX * zoomChange;
      const panY1 = panY - cursorY * zoomChange;
      const response = { zoom: zoom1, panX: panX1, panY: panY1 };
      return response;
    }
    // #translateCursor(x0,y0){
    //
    //
    //   const localList = this.transforms();
    //
    //   let x1 = x0;
    //   let y1 = y0;
    //   let parentZoom = 1;
    //   let locationX = 0;
    //   let locationY = 0;
    //
    //   for (const [i,t] of localList.entries()) {
    //
    //     // Position of component x
    //     let curX = (t.x) * parentZoom;
    //     locationX = locationX + curX;
    //
    //     // Position of component y
    //     let curY = (t.y) * parentZoom;
    //     locationY = locationY + curY;
    //
    //     // Position of parent's x pan
    //     let curPanX = t.panX * parentZoom;
    //     locationX = locationX + curPanX;
    //
    //     // Position of parent's y pan
    //     let curPanY = t.panY * parentZoom;
    //     locationY = locationY + curPanY;
    //
    //     parentZoom = parentZoom * t.zoom; // set current zoom as parent zoom
    //   }
    //
    //   x1 = x1 - locationX;
    //   y1 = y1 - locationY;
    //
    //   const self = localList[localList.length-1];
    //   const finalZoom = localList.map(o=>o.zoom).reduce((a,c)=>a*c,1)/self.zoom;
    //   x1 = x1/finalZoom
    //   y1 = y1/finalZoom
    //
    //   return [ x1, y1 ];
    // }
  };

  // plug-ins/mouse-services/Menu.js
  var Menu = class {
    static {
      __name(this, "Menu");
    }
    area = window;
    scale = null;
    show = null;
    transforms = null;
    mouseDownHandler;
    mouseMoveHandler;
    mouseUpHandler;
    constructor({ area, scale, show, transforms }) {
      this.area = area;
      this.scale = scale;
      this.show = show;
      this.transforms = transforms;
      this.#mount();
    }
    #mount() {
      this.contextMenuHandler = (e) => {
        const isAllowed = e.target?.classList.contains("viewport-background");
        if (!isAllowed)
          return;
        e.preventDefault();
        e.stopPropagation();
        let x = e.clientX;
        let y = e.clientY;
        let [tx, ty] = translate(x, y, this.transforms());
        this.show({ x, y, tx, ty });
      };
      this.area.addEventListener("contextmenu", this.contextMenuHandler);
    }
    destroy() {
      this.area.removeEventListener("contextmenu", this.contextMenuHandler);
    }
  };

  // plug-ins/diagnostic/index.js
  var DiagnosticRectangle = class {
    static {
      __name(this, "DiagnosticRectangle");
    }
    space = 8;
    name;
    parent;
    constructor(name, parent, stroke) {
      this.name = name;
      this.parent = parent;
      this.rectangle1 = svg.rect({ style: { "pointer-events": "none" }, fill: "none", stroke });
      this.parent.appendChild(this.rectangle1);
      this.textContainer = svg.text({ style: { "pointer-events": "none" }, "dominant-baseline": "hanging", fill: stroke });
      this.parent.appendChild(this.textContainer);
      this.text = text();
      this.textContainer.appendChild(this.text);
    }
    draw({ x, y, width, height }) {
      update(this.rectangle1, { x, y, width, height });
      update(this.textContainer, { x, y });
      this.text.nodeValue = `${this.name}`;
    }
  };

  // plug-ins/windows/Viewport.js
  var Viewport = class {
    static {
      __name(this, "Viewport");
    }
    static extends = [Container];
    properties = {
      debugBody: false,
      debugContent: false,
      classes: ""
      // css classes
    };
    observables = {
      toX: 0,
      toY: 0,
      panX: 0,
      panY: 0,
      zoom: 1
    };
    methods = {
      initialize() {
        this.flexible = true;
      },
      mount() {
        this.el.Viewport = svg.g({
          name: "viewport"
        });
        this.clipPath = svg.clipPath({ id: `viewport-clip-path-${this.id}` });
        this.maskRectangle = svg.rect();
        this.clipPath.appendChild(this.maskRectangle);
        this.el.Viewport.appendChild(this.clipPath);
        this.any(["x", "y", "w", "h"], ({ x, y, w: width, h: height }) => {
          update(this.maskRectangle, { x, y, width, height });
        });
        this.mask = svg.g({ name: "viewport-mask", "clip-path": `url(#viewport-clip-path-${this.id})` });
        this.el.Viewport.appendChild(this.mask);
        this.body = svg.g({
          name: "viewport-body",
          style: { "pointer-events": "all" }
        });
        this.mask.appendChild(this.body);
        this.any(["x", "y"], ({ x, y }) => this.body.style.transform = `translate(${x}px, ${y}px)`);
        const bgColor = `hsla(${parseInt(360 * Math.random())}, 25%, 30%, 0.2)`;
        this.background = svg.rect({
          "stroke-width": this.b,
          "vector-effect": "non-scaling-stroke",
          name: "viewport-background",
          class: `viewport-background ${this.classes}`.trim(),
          style: { "transform-origin": "0px 0px" }
        });
        this.getApplication().on("node", (node) => {
          this.background.classList.add(node.type.toLowerCase());
        });
        this.body.appendChild(this.background);
        this.any(["x", "y", "w", "h"], ({ x, y, w: width, h: height }) => update(this.background, { x: 0, y: 0, width, height }));
        if (this.debugBody) {
          const r1 = new DiagnosticRectangle(`${this.oo.name} body`, this.body, "red");
          this.any(["w", "h"], ({ w: width, h: height }) => r1.draw({ x: 0, y: 0, width, height }));
        }
        this.content = svg.g({ name: "viewport-elements", style: {} });
        this.body.appendChild(this.content);
        this.on("panX", (v) => requestAnimationFrame(() => {
          this.content.style.transform = `translate(${this.panX / this.zoom}px, ${this.panY / this.zoom}px)`;
        }));
        this.on("panY", (v) => requestAnimationFrame(() => {
          this.content.style.transform = `translate(${this.panX / this.zoom}px, ${this.panY / this.zoom}px)`;
        }));
        this.on("zoom", (v) => requestAnimationFrame(() => {
          this.content.style.scale = this.zoom;
        }));
        if (this.debugContent) {
          const r1 = new DiagnosticRectangle(`${this.oo.name} content`, this.content, "green");
          this.any(["w", "h"], ({ w: width, h: height }) => r1.draw({ x: 0, y: 0, width, height }));
        }
        this.appendElements();
      }
    };
  };

  // plug-ins/windows/Foreign.js
  var Foreign = class {
    static {
      __name(this, "Foreign");
    }
    static extends = [Control];
    observables = {
      src: ""
    };
    constraints = {
      mount: {
        ".scene is required to start the universe": function() {
          if (!this.scene) {
            return { error: ".svg not found" };
          }
        }
      }
    };
    methods = {
      initialize() {
        this.flexible = true;
      },
      appendChild(domNode) {
        return this.body.appendChild(domNode);
      },
      mount() {
        this.el.ForeignObject = svg.foreignObject({
          name: this.name,
          width: this.w,
          height: this.h,
          x: this.x,
          y: this.y
        });
        this.body = html.div({
          style: {
            "will-change": "transform",
            width: this.w,
            height: this.h
          }
        });
        this.el.ForeignObject.appendChild(this.body);
        this.addDisposableFromEvent(this.body, "keydown", (e) => e.stopImmediatePropagation());
        this.on("name", (name) => update(this.el.ForeignObject, { name }));
        this.on("w", (width) => update(this.el.ForeignObject, { width }));
        this.on("h", (height) => update(this.el.ForeignObject, { height }));
        this.on("x", (x) => update(this.el.ForeignObject, { x }));
        this.on("y", (y) => update(this.el.ForeignObject, { y }));
        this.on("w", (width) => update(this.body, { style: { width: width + "px" } }));
        this.on("h", (height) => update(this.body, { style: { height: height - this.parent.p * 2 - this.parent.b * 2 + "px" } }));
        this.appendElements();
      }
    };
  };

  // plug-ins/emitter-network/queue/Queue.js
  var import_calculate_percent = __toESM(require_calculate_percent(), 1);

  // node_modules/svelte/src/runtime/internal/utils.js
  function noop() {
  }
  __name(noop, "noop");
  var identity = /* @__PURE__ */ __name((x) => x, "identity");
  function assign(tar, src) {
    for (const k in src)
      tar[k] = src[k];
    return (
      /** @type {T & S} */
      tar
    );
  }
  __name(assign, "assign");
  function run(fn) {
    return fn();
  }
  __name(run, "run");
  function blank_object() {
    return /* @__PURE__ */ Object.create(null);
  }
  __name(blank_object, "blank_object");
  function run_all(fns) {
    fns.forEach(run);
  }
  __name(run_all, "run_all");
  function is_function(thing) {
    return typeof thing === "function";
  }
  __name(is_function, "is_function");
  function safe_not_equal(a3, b3) {
    return a3 != a3 ? b3 == b3 : a3 !== b3 || a3 && typeof a3 === "object" || typeof a3 === "function";
  }
  __name(safe_not_equal, "safe_not_equal");
  function is_empty(obj2) {
    return Object.keys(obj2).length === 0;
  }
  __name(is_empty, "is_empty");
  function subscribe(store, ...callbacks) {
    if (store == null) {
      for (const callback of callbacks) {
        callback(void 0);
      }
      return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
  }
  __name(subscribe, "subscribe");
  function get_store_value(store) {
    let value;
    subscribe(store, (_) => value = _)();
    return value;
  }
  __name(get_store_value, "get_store_value");
  function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
  }
  __name(component_subscribe, "component_subscribe");
  function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
      const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
      return definition[0](slot_ctx);
    }
  }
  __name(create_slot, "create_slot");
  function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
  }
  __name(get_slot_context, "get_slot_context");
  function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
      const lets = definition[2](fn(dirty));
      if ($$scope.dirty === void 0) {
        return lets;
      }
      if (typeof lets === "object") {
        const merged = [];
        const len = Math.max($$scope.dirty.length, lets.length);
        for (let i = 0; i < len; i += 1) {
          merged[i] = $$scope.dirty[i] | lets[i];
        }
        return merged;
      }
      return $$scope.dirty | lets;
    }
    return $$scope.dirty;
  }
  __name(get_slot_changes, "get_slot_changes");
  function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
    if (slot_changes) {
      const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
      slot.p(slot_context, slot_changes);
    }
  }
  __name(update_slot_base, "update_slot_base");
  function get_all_dirty_from_scope($$scope) {
    if ($$scope.ctx.length > 32) {
      const dirty = [];
      const length = $$scope.ctx.length / 32;
      for (let i = 0; i < length; i++) {
        dirty[i] = -1;
      }
      return dirty;
    }
    return -1;
  }
  __name(get_all_dirty_from_scope, "get_all_dirty_from_scope");
  function set_store_value(store, ret, value) {
    store.set(value);
    return ret;
  }
  __name(set_store_value, "set_store_value");
  function action_destroyer(action_result) {
    return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
  }
  __name(action_destroyer, "action_destroyer");

  // node_modules/svelte/src/runtime/internal/environment.js
  var is_client = typeof window !== "undefined";
  var now = is_client ? () => window.performance.now() : () => Date.now();
  var raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;

  // node_modules/svelte/src/runtime/internal/loop.js
  var tasks = /* @__PURE__ */ new Set();
  function run_tasks(now2) {
    tasks.forEach((task) => {
      if (!task.c(now2)) {
        tasks.delete(task);
        task.f();
      }
    });
    if (tasks.size !== 0)
      raf(run_tasks);
  }
  __name(run_tasks, "run_tasks");
  function loop(callback) {
    let task;
    if (tasks.size === 0)
      raf(run_tasks);
    return {
      promise: new Promise((fulfill) => {
        tasks.add(task = { c: callback, f: fulfill });
      }),
      abort() {
        tasks.delete(task);
      }
    };
  }
  __name(loop, "loop");

  // node_modules/svelte/src/runtime/internal/globals.js
  var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : (
    // @ts-ignore Node typings have this
    global
  );

  // node_modules/svelte/src/runtime/internal/ResizeObserverSingleton.js
  var ResizeObserverSingleton = class _ResizeObserverSingleton {
    static {
      __name(this, "ResizeObserverSingleton");
    }
    /**
     * @private
     * @readonly
     * @type {WeakMap<Element, import('./private.js').Listener>}
     */
    _listeners = "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0;
    /**
     * @private
     * @type {ResizeObserver}
     */
    _observer = void 0;
    /** @type {ResizeObserverOptions} */
    options;
    /** @param {ResizeObserverOptions} options */
    constructor(options) {
      this.options = options;
    }
    /**
     * @param {Element} element
     * @param {import('./private.js').Listener} listener
     * @returns {() => void}
     */
    observe(element2, listener) {
      this._listeners.set(element2, listener);
      this._getObserver().observe(element2, this.options);
      return () => {
        this._listeners.delete(element2);
        this._observer.unobserve(element2);
      };
    }
    /**
     * @private
     */
    _getObserver() {
      return this._observer ?? (this._observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          _ResizeObserverSingleton.entries.set(entry.target, entry);
          this._listeners.get(entry.target)?.(entry);
        }
      }));
    }
  };
  ResizeObserverSingleton.entries = "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0;

  // node_modules/svelte/src/runtime/internal/dom.js
  var is_hydrating = false;
  function start_hydrating() {
    is_hydrating = true;
  }
  __name(start_hydrating, "start_hydrating");
  function end_hydrating() {
    is_hydrating = false;
  }
  __name(end_hydrating, "end_hydrating");
  function append(target, node) {
    target.appendChild(node);
  }
  __name(append, "append");
  function get_root_for_style(node) {
    if (!node)
      return document;
    const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
    if (root && /** @type {ShadowRoot} */
    root.host) {
      return (
        /** @type {ShadowRoot} */
        root
      );
    }
    return node.ownerDocument;
  }
  __name(get_root_for_style, "get_root_for_style");
  function append_empty_stylesheet(node) {
    const style_element = element("style");
    style_element.textContent = "/* empty */";
    append_stylesheet(get_root_for_style(node), style_element);
    return style_element.sheet;
  }
  __name(append_empty_stylesheet, "append_empty_stylesheet");
  function append_stylesheet(node, style) {
    append(
      /** @type {Document} */
      node.head || node,
      style
    );
    return style.sheet;
  }
  __name(append_stylesheet, "append_stylesheet");
  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }
  __name(insert, "insert");
  function detach(node) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }
  __name(detach, "detach");
  function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
      if (iterations[i])
        iterations[i].d(detaching);
    }
  }
  __name(destroy_each, "destroy_each");
  function element(name) {
    return document.createElement(name);
  }
  __name(element, "element");
  function text2(data) {
    return document.createTextNode(data);
  }
  __name(text2, "text");
  function space() {
    return text2(" ");
  }
  __name(space, "space");
  function empty() {
    return text2("");
  }
  __name(empty, "empty");
  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
  }
  __name(listen, "listen");
  function stop_propagation(fn) {
    return function(event) {
      event.stopPropagation();
      return fn.call(this, event);
    };
  }
  __name(stop_propagation, "stop_propagation");
  function attr(node, attribute, value) {
    if (value == null)
      node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
      node.setAttribute(attribute, value);
  }
  __name(attr, "attr");
  function init_binding_group(group) {
    let _inputs;
    return {
      /* push */
      p(...inputs) {
        _inputs = inputs;
        _inputs.forEach((input) => group.push(input));
      },
      /* remove */
      r() {
        _inputs.forEach((input) => group.splice(group.indexOf(input), 1));
      }
    };
  }
  __name(init_binding_group, "init_binding_group");
  function to_number(value) {
    return value === "" ? null : +value;
  }
  __name(to_number, "to_number");
  function children(element2) {
    return Array.from(element2.childNodes);
  }
  __name(children, "children");
  function set_data(text3, data) {
    data = "" + data;
    if (text3.data === data)
      return;
    text3.data = /** @type {string} */
    data;
  }
  __name(set_data, "set_data");
  function set_input_value(input, value) {
    input.value = value == null ? "" : value;
  }
  __name(set_input_value, "set_input_value");
  function set_style(node, key, value, important) {
    if (value == null) {
      node.style.removeProperty(key);
    } else {
      node.style.setProperty(key, value, important ? "important" : "");
    }
  }
  __name(set_style, "set_style");
  function toggle_class(element2, name, toggle) {
    element2.classList.toggle(name, !!toggle);
  }
  __name(toggle_class, "toggle_class");
  function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
    return new CustomEvent(type, { detail, bubbles, cancelable });
  }
  __name(custom_event, "custom_event");
  function get_custom_elements_slots(element2) {
    const result = {};
    element2.childNodes.forEach(
      /** @param {Element} node */
      (node) => {
        result[node.slot || "default"] = true;
      }
    );
    return result;
  }
  __name(get_custom_elements_slots, "get_custom_elements_slots");
  function construct_svelte_component(component, props) {
    return new component(props);
  }
  __name(construct_svelte_component, "construct_svelte_component");

  // node_modules/svelte/src/runtime/internal/style_manager.js
  var managed_styles = /* @__PURE__ */ new Map();
  var active = 0;
  function hash(str) {
    let hash2 = 5381;
    let i = str.length;
    while (i--)
      hash2 = (hash2 << 5) - hash2 ^ str.charCodeAt(i);
    return hash2 >>> 0;
  }
  __name(hash, "hash");
  function create_style_information(doc, node) {
    const info = { stylesheet: append_empty_stylesheet(node), rules: {} };
    managed_styles.set(doc, info);
    return info;
  }
  __name(create_style_information, "create_style_information");
  function create_rule(node, a3, b3, duration, delay, ease, fn, uid = 0) {
    const step = 16.666 / duration;
    let keyframes = "{\n";
    for (let p = 0; p <= 1; p += step) {
      const t = a3 + (b3 - a3) * ease(p);
      keyframes += p * 100 + `%{${fn(t, 1 - t)}}
`;
    }
    const rule = keyframes + `100% {${fn(b3, 1 - b3)}}
}`;
    const name = `__svelte_${hash(rule)}_${uid}`;
    const doc = get_root_for_style(node);
    const { stylesheet, rules } = managed_styles.get(doc) || create_style_information(doc, node);
    if (!rules[name]) {
      rules[name] = true;
      stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
    }
    const animation = node.style.animation || "";
    node.style.animation = `${animation ? `${animation}, ` : ""}${name} ${duration}ms linear ${delay}ms 1 both`;
    active += 1;
    return name;
  }
  __name(create_rule, "create_rule");
  function delete_rule(node, name) {
    const previous = (node.style.animation || "").split(", ");
    const next = previous.filter(
      name ? (anim) => anim.indexOf(name) < 0 : (anim) => anim.indexOf("__svelte") === -1
      // remove all Svelte animations
    );
    const deleted = previous.length - next.length;
    if (deleted) {
      node.style.animation = next.join(", ");
      active -= deleted;
      if (!active)
        clear_rules();
    }
  }
  __name(delete_rule, "delete_rule");
  function clear_rules() {
    raf(() => {
      if (active)
        return;
      managed_styles.forEach((info) => {
        const { ownerNode } = info.stylesheet;
        if (ownerNode)
          detach(ownerNode);
      });
      managed_styles.clear();
    });
  }
  __name(clear_rules, "clear_rules");

  // node_modules/svelte/src/runtime/internal/lifecycle.js
  var current_component;
  function set_current_component(component) {
    current_component = component;
  }
  __name(set_current_component, "set_current_component");
  function get_current_component() {
    if (!current_component)
      throw new Error("Function called outside component initialization");
    return current_component;
  }
  __name(get_current_component, "get_current_component");
  function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
  }
  __name(onMount, "onMount");
  function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
  }
  __name(onDestroy, "onDestroy");
  function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail, { cancelable = false } = {}) => {
      const callbacks = component.$$.callbacks[type];
      if (callbacks) {
        const event = custom_event(
          /** @type {string} */
          type,
          detail,
          { cancelable }
        );
        callbacks.slice().forEach((fn) => {
          fn.call(component, event);
        });
        return !event.defaultPrevented;
      }
      return true;
    };
  }
  __name(createEventDispatcher, "createEventDispatcher");

  // node_modules/svelte/src/runtime/internal/scheduler.js
  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = /* @__PURE__ */ Promise.resolve();
  var update_scheduled = false;
  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }
  __name(schedule_update, "schedule_update");
  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }
  __name(add_render_callback, "add_render_callback");
  function add_flush_callback(fn) {
    flush_callbacks.push(fn);
  }
  __name(add_flush_callback, "add_flush_callback");
  var seen_callbacks = /* @__PURE__ */ new Set();
  var flushidx = 0;
  function flush() {
    if (flushidx !== 0) {
      return;
    }
    const saved_component = current_component;
    do {
      try {
        while (flushidx < dirty_components.length) {
          const component = dirty_components[flushidx];
          flushidx++;
          set_current_component(component);
          update2(component.$$);
        }
      } catch (e) {
        dirty_components.length = 0;
        flushidx = 0;
        throw e;
      }
      set_current_component(null);
      dirty_components.length = 0;
      flushidx = 0;
      while (binding_callbacks.length)
        binding_callbacks.pop()();
      for (let i = 0; i < render_callbacks.length; i += 1) {
        const callback = render_callbacks[i];
        if (!seen_callbacks.has(callback)) {
          seen_callbacks.add(callback);
          callback();
        }
      }
      render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
  }
  __name(flush, "flush");
  function update2($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      const dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }
  __name(update2, "update");
  function flush_render_callbacks(fns) {
    const filtered = [];
    const targets = [];
    render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
    targets.forEach((c) => c());
    render_callbacks = filtered;
  }
  __name(flush_render_callbacks, "flush_render_callbacks");

  // node_modules/svelte/src/runtime/internal/transitions.js
  var promise;
  function wait() {
    if (!promise) {
      promise = Promise.resolve();
      promise.then(() => {
        promise = null;
      });
    }
    return promise;
  }
  __name(wait, "wait");
  function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event(`${direction ? "intro" : "outro"}${kind}`));
  }
  __name(dispatch, "dispatch");
  var outroing = /* @__PURE__ */ new Set();
  var outros;
  function group_outros() {
    outros = {
      r: 0,
      c: [],
      p: outros
      // parent group
    };
  }
  __name(group_outros, "group_outros");
  function check_outros() {
    if (!outros.r) {
      run_all(outros.c);
    }
    outros = outros.p;
  }
  __name(check_outros, "check_outros");
  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }
  __name(transition_in, "transition_in");
  function transition_out(block, local, detach2, callback) {
    if (block && block.o) {
      if (outroing.has(block))
        return;
      outroing.add(block);
      outros.c.push(() => {
        outroing.delete(block);
        if (callback) {
          if (detach2)
            block.d(1);
          callback();
        }
      });
      block.o(local);
    } else if (callback) {
      callback();
    }
  }
  __name(transition_out, "transition_out");
  var null_transition = { duration: 0 };
  function create_bidirectional_transition(node, fn, params, intro) {
    const options = { direction: "both" };
    let config = fn(node, params, options);
    let t = intro ? 0 : 1;
    let running_program = null;
    let pending_program = null;
    let animation_name = null;
    let original_inert_value;
    function clear_animation() {
      if (animation_name)
        delete_rule(node, animation_name);
    }
    __name(clear_animation, "clear_animation");
    function init2(program, duration) {
      const d = (
        /** @type {Program['d']} */
        program.b - t
      );
      duration *= Math.abs(d);
      return {
        a: t,
        b: program.b,
        d,
        duration,
        start: program.start,
        end: program.start + duration,
        group: program.group
      };
    }
    __name(init2, "init");
    function go(b3) {
      const {
        delay = 0,
        duration = 300,
        easing = identity,
        tick: tick2 = noop,
        css
      } = config || null_transition;
      const program = {
        start: now() + delay,
        b: b3
      };
      if (!b3) {
        program.group = outros;
        outros.r += 1;
      }
      if ("inert" in node) {
        if (b3) {
          if (original_inert_value !== void 0) {
            node.inert = original_inert_value;
          }
        } else {
          original_inert_value = /** @type {HTMLElement} */
          node.inert;
          node.inert = true;
        }
      }
      if (running_program || pending_program) {
        pending_program = program;
      } else {
        if (css) {
          clear_animation();
          animation_name = create_rule(node, t, b3, duration, delay, easing, css);
        }
        if (b3)
          tick2(0, 1);
        running_program = init2(program, duration);
        add_render_callback(() => dispatch(node, b3, "start"));
        loop((now2) => {
          if (pending_program && now2 > pending_program.start) {
            running_program = init2(pending_program, duration);
            pending_program = null;
            dispatch(node, running_program.b, "start");
            if (css) {
              clear_animation();
              animation_name = create_rule(
                node,
                t,
                running_program.b,
                running_program.duration,
                0,
                easing,
                config.css
              );
            }
          }
          if (running_program) {
            if (now2 >= running_program.end) {
              tick2(t = running_program.b, 1 - t);
              dispatch(node, running_program.b, "end");
              if (!pending_program) {
                if (running_program.b) {
                  clear_animation();
                } else {
                  if (!--running_program.group.r)
                    run_all(running_program.group.c);
                }
              }
              running_program = null;
            } else if (now2 >= running_program.start) {
              const p = now2 - running_program.start;
              t = running_program.a + running_program.d * easing(p / running_program.duration);
              tick2(t, 1 - t);
            }
          }
          return !!(running_program || pending_program);
        });
      }
    }
    __name(go, "go");
    return {
      run(b3) {
        if (is_function(config)) {
          wait().then(() => {
            const opts = { direction: b3 ? "in" : "out" };
            config = config(opts);
            go(b3);
          });
        } else {
          go(b3);
        }
      },
      end() {
        clear_animation();
        running_program = pending_program = null;
      }
    };
  }
  __name(create_bidirectional_transition, "create_bidirectional_transition");

  // node_modules/svelte/src/runtime/internal/each.js
  function ensure_array_like(array_like_or_iterator) {
    return array_like_or_iterator?.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
  }
  __name(ensure_array_like, "ensure_array_like");
  function outro_and_destroy_block(block, lookup) {
    transition_out(block, 1, 1, () => {
      lookup.delete(block.key);
    });
  }
  __name(outro_and_destroy_block, "outro_and_destroy_block");
  function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block14, next, get_context) {
    let o = old_blocks.length;
    let n = list.length;
    let i = o;
    const old_indexes = {};
    while (i--)
      old_indexes[old_blocks[i].key] = i;
    const new_blocks = [];
    const new_lookup = /* @__PURE__ */ new Map();
    const deltas = /* @__PURE__ */ new Map();
    const updates = [];
    i = n;
    while (i--) {
      const child_ctx = get_context(ctx, list, i);
      const key = get_key(child_ctx);
      let block = lookup.get(key);
      if (!block) {
        block = create_each_block14(key, child_ctx);
        block.c();
      } else if (dynamic) {
        updates.push(() => block.p(child_ctx, dirty));
      }
      new_lookup.set(key, new_blocks[i] = block);
      if (key in old_indexes)
        deltas.set(key, Math.abs(i - old_indexes[key]));
    }
    const will_move = /* @__PURE__ */ new Set();
    const did_move = /* @__PURE__ */ new Set();
    function insert2(block) {
      transition_in(block, 1);
      block.m(node, next);
      lookup.set(block.key, block);
      next = block.first;
      n--;
    }
    __name(insert2, "insert");
    while (o && n) {
      const new_block = new_blocks[n - 1];
      const old_block = old_blocks[o - 1];
      const new_key = new_block.key;
      const old_key = old_block.key;
      if (new_block === old_block) {
        next = new_block.first;
        o--;
        n--;
      } else if (!new_lookup.has(old_key)) {
        destroy(old_block, lookup);
        o--;
      } else if (!lookup.has(new_key) || will_move.has(new_key)) {
        insert2(new_block);
      } else if (did_move.has(old_key)) {
        o--;
      } else if (deltas.get(new_key) > deltas.get(old_key)) {
        did_move.add(new_key);
        insert2(new_block);
      } else {
        will_move.add(old_key);
        o--;
      }
    }
    while (o--) {
      const old_block = old_blocks[o];
      if (!new_lookup.has(old_block.key))
        destroy(old_block, lookup);
    }
    while (n)
      insert2(new_blocks[n - 1]);
    run_all(updates);
    return new_blocks;
  }
  __name(update_keyed_each, "update_keyed_each");

  // node_modules/svelte/src/runtime/internal/spread.js
  function get_spread_update(levels, updates) {
    const update3 = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
      const o = levels[i];
      const n = updates[i];
      if (n) {
        for (const key in o) {
          if (!(key in n))
            to_null_out[key] = 1;
        }
        for (const key in n) {
          if (!accounted_for[key]) {
            update3[key] = n[key];
            accounted_for[key] = 1;
          }
        }
        levels[i] = n;
      } else {
        for (const key in o) {
          accounted_for[key] = 1;
        }
      }
    }
    for (const key in to_null_out) {
      if (!(key in update3))
        update3[key] = void 0;
    }
    return update3;
  }
  __name(get_spread_update, "get_spread_update");
  function get_spread_object(spread_props) {
    return typeof spread_props === "object" && spread_props !== null ? spread_props : {};
  }
  __name(get_spread_object, "get_spread_object");

  // node_modules/svelte/src/shared/boolean_attributes.js
  var _boolean_attributes = (
    /** @type {const} */
    [
      "allowfullscreen",
      "allowpaymentrequest",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "defer",
      "disabled",
      "formnovalidate",
      "hidden",
      "inert",
      "ismap",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "selected"
    ]
  );
  var boolean_attributes = /* @__PURE__ */ new Set([..._boolean_attributes]);

  // node_modules/svelte/src/runtime/internal/Component.js
  function bind(component, name, callback) {
    const index = component.$$.props[name];
    if (index !== void 0) {
      component.$$.bound[index] = callback;
      callback(component.$$.ctx[index]);
    }
  }
  __name(bind, "bind");
  function create_component(block) {
    block && block.c();
  }
  __name(create_component, "create_component");
  function mount_component(component, target, anchor) {
    const { fragment, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    add_render_callback(() => {
      const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
      if (component.$$.on_destroy) {
        component.$$.on_destroy.push(...new_on_destroy);
      } else {
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
  }
  __name(mount_component, "mount_component");
  function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
      flush_render_callbacks($$.after_update);
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching);
      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }
  __name(destroy_component, "destroy_component");
  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }
    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }
  __name(make_dirty, "make_dirty");
  function init(component, options, instance25, create_fragment25, not_equal, props, append_styles = null, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
      fragment: null,
      ctx: [],
      // state
      props,
      update: noop,
      not_equal,
      bound: blank_object(),
      // lifecycle
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
      // everything else
      callbacks: blank_object(),
      dirty,
      skip_bound: false,
      root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance25 ? instance25(component, options.props || {}, (i, ret, ...rest) => {
      const value = rest.length ? rest[0] : ret;
      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i])
          $$.bound[i](value);
        if (ready)
          make_dirty(component, i);
      }
      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    $$.fragment = create_fragment25 ? create_fragment25($$.ctx) : false;
    if (options.target) {
      if (options.hydrate) {
        start_hydrating();
        const nodes = children(options.target);
        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        $$.fragment && $$.fragment.c();
      }
      if (options.intro)
        transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor);
      end_hydrating();
      flush();
    }
    set_current_component(parent_component);
  }
  __name(init, "init");
  var SvelteElement;
  if (typeof HTMLElement === "function") {
    SvelteElement = class extends HTMLElement {
      static {
        __name(this, "SvelteElement");
      }
      /** The Svelte component constructor */
      $$ctor;
      /** Slots */
      $$s;
      /** The Svelte component instance */
      $$c;
      /** Whether or not the custom element is connected */
      $$cn = false;
      /** Component props data */
      $$d = {};
      /** `true` if currently in the process of reflecting component props back to attributes */
      $$r = false;
      /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
      $$p_d = {};
      /** @type {Record<string, Function[]>} Event listeners */
      $$l = {};
      /** @type {Map<Function, Function>} Event listener unsubscribe functions */
      $$l_u = /* @__PURE__ */ new Map();
      constructor($$componentCtor, $$slots, use_shadow_dom) {
        super();
        this.$$ctor = $$componentCtor;
        this.$$s = $$slots;
        if (use_shadow_dom) {
          this.attachShadow({ mode: "open" });
        }
      }
      addEventListener(type, listener, options) {
        this.$$l[type] = this.$$l[type] || [];
        this.$$l[type].push(listener);
        if (this.$$c) {
          const unsub = this.$$c.$on(type, listener);
          this.$$l_u.set(listener, unsub);
        }
        super.addEventListener(type, listener, options);
      }
      removeEventListener(type, listener, options) {
        super.removeEventListener(type, listener, options);
        if (this.$$c) {
          const unsub = this.$$l_u.get(listener);
          if (unsub) {
            unsub();
            this.$$l_u.delete(listener);
          }
        }
      }
      async connectedCallback() {
        this.$$cn = true;
        if (!this.$$c) {
          let create_slot2 = function(name) {
            return () => {
              let node;
              const obj2 = {
                c: /* @__PURE__ */ __name(function create() {
                  node = element("slot");
                  if (name !== "default") {
                    attr(node, "name", name);
                  }
                }, "create"),
                /**
                 * @param {HTMLElement} target
                 * @param {HTMLElement} [anchor]
                 */
                m: /* @__PURE__ */ __name(function mount(target, anchor) {
                  insert(target, node, anchor);
                }, "mount"),
                d: /* @__PURE__ */ __name(function destroy(detaching) {
                  if (detaching) {
                    detach(node);
                  }
                }, "destroy")
              };
              return obj2;
            };
          };
          __name(create_slot2, "create_slot");
          await Promise.resolve();
          if (!this.$$cn || this.$$c) {
            return;
          }
          const $$slots = {};
          const existing_slots = get_custom_elements_slots(this);
          for (const name of this.$$s) {
            if (name in existing_slots) {
              $$slots[name] = [create_slot2(name)];
            }
          }
          for (const attribute of this.attributes) {
            const name = this.$$g_p(attribute.name);
            if (!(name in this.$$d)) {
              this.$$d[name] = get_custom_element_value(name, attribute.value, this.$$p_d, "toProp");
            }
          }
          for (const key in this.$$p_d) {
            if (!(key in this.$$d) && this[key] !== void 0) {
              this.$$d[key] = this[key];
              delete this[key];
            }
          }
          this.$$c = new this.$$ctor({
            target: this.shadowRoot || this,
            props: {
              ...this.$$d,
              $$slots,
              $$scope: {
                ctx: []
              }
            }
          });
          const reflect_attributes = /* @__PURE__ */ __name(() => {
            this.$$r = true;
            for (const key in this.$$p_d) {
              this.$$d[key] = this.$$c.$$.ctx[this.$$c.$$.props[key]];
              if (this.$$p_d[key].reflect) {
                const attribute_value = get_custom_element_value(
                  key,
                  this.$$d[key],
                  this.$$p_d,
                  "toAttribute"
                );
                if (attribute_value == null) {
                  this.removeAttribute(this.$$p_d[key].attribute || key);
                } else {
                  this.setAttribute(this.$$p_d[key].attribute || key, attribute_value);
                }
              }
            }
            this.$$r = false;
          }, "reflect_attributes");
          this.$$c.$$.after_update.push(reflect_attributes);
          reflect_attributes();
          for (const type in this.$$l) {
            for (const listener of this.$$l[type]) {
              const unsub = this.$$c.$on(type, listener);
              this.$$l_u.set(listener, unsub);
            }
          }
          this.$$l = {};
        }
      }
      // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
      // and setting attributes through setAttribute etc, this is helpful
      attributeChangedCallback(attr2, _oldValue, newValue) {
        if (this.$$r)
          return;
        attr2 = this.$$g_p(attr2);
        this.$$d[attr2] = get_custom_element_value(attr2, newValue, this.$$p_d, "toProp");
        this.$$c?.$set({ [attr2]: this.$$d[attr2] });
      }
      disconnectedCallback() {
        this.$$cn = false;
        Promise.resolve().then(() => {
          if (!this.$$cn && this.$$c) {
            this.$$c.$destroy();
            this.$$c = void 0;
          }
        });
      }
      $$g_p(attribute_name) {
        return Object.keys(this.$$p_d).find(
          (key) => this.$$p_d[key].attribute === attribute_name || !this.$$p_d[key].attribute && key.toLowerCase() === attribute_name
        ) || attribute_name;
      }
    };
  }
  function get_custom_element_value(prop, value, props_definition, transform) {
    const type = props_definition[prop]?.type;
    value = type === "Boolean" && typeof value !== "boolean" ? value != null : value;
    if (!transform || !props_definition[prop]) {
      return value;
    } else if (transform === "toAttribute") {
      switch (type) {
        case "Object":
        case "Array":
          return value == null ? null : JSON.stringify(value);
        case "Boolean":
          return value ? "" : null;
        case "Number":
          return value == null ? null : value;
        default:
          return value;
      }
    } else {
      switch (type) {
        case "Object":
        case "Array":
          return value && JSON.parse(value);
        case "Boolean":
          return value;
        case "Number":
          return value != null ? +value : value;
        default:
          return value;
      }
    }
  }
  __name(get_custom_element_value, "get_custom_element_value");
  var SvelteComponent = class {
    static {
      __name(this, "SvelteComponent");
    }
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $$ = void 0;
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $$set = void 0;
    /** @returns {void} */
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    /**
     * @template {Extract<keyof Events, string>} K
     * @param {K} type
     * @param {((e: Events[K]) => void) | null | undefined} callback
     * @returns {() => void}
     */
    $on(type, callback) {
      if (!is_function(callback)) {
        return noop;
      }
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    /**
     * @param {Partial<Props>} props
     * @returns {void}
     */
    $set(props) {
      if (this.$$set && !is_empty(props)) {
        this.$$.skip_bound = true;
        this.$$set(props);
        this.$$.skip_bound = false;
      }
    }
  };

  // node_modules/svelte/src/shared/version.js
  var PUBLIC_VERSION = "4";

  // node_modules/svelte/src/runtime/internal/disclose-version/index.js
  if (typeof window !== "undefined")
    (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(PUBLIC_VERSION);

  // plug-ins/emitter-network/queue/Queue.svelte
  function create_fragment(ctx) {
    let div4;
    let div3;
    let div2;
    let div1;
    let div0;
    let t0_value = (
      /*displayStatus*/
      ctx[1].counter + ""
    );
    let t0;
    let t1;
    let t2_value = (
      /*displayStatus*/
      ctx[1].length + ""
    );
    let t2;
    let div1_aria_valuenow_value;
    let div1_aria_valuemax_value;
    let t3;
    let small;
    let t4;
    return {
      c() {
        div4 = element("div");
        div3 = element("div");
        div2 = element("div");
        div1 = element("div");
        div0 = element("div");
        t0 = text2(t0_value);
        t1 = text2("/");
        t2 = text2(t2_value);
        t3 = space();
        small = element("small");
        t4 = text2(
          /*displayTitle*/
          ctx[0]
        );
        attr(div0, "class", "progress-bar");
        set_style(
          div0,
          "width",
          /*displayStatus*/
          ctx[1].percent + "%"
        );
        attr(div1, "class", "progress");
        attr(div1, "role", "progressbar");
        attr(div1, "aria-label", "Queue Progress");
        attr(div1, "aria-valuenow", div1_aria_valuenow_value = /*displayStatus*/
        ctx[1].counter);
        attr(div1, "aria-valuemin", "0");
        attr(div1, "aria-valuemax", div1_aria_valuemax_value = /*displayStatus*/
        ctx[1].length);
        attr(div2, "class", "card-text mb-2");
        attr(small, "class", "card-subtitle mb-2 text-body-secondary text-truncate d-block");
        attr(div3, "class", "card-body");
        attr(div4, "class", "card");
      },
      m(target, anchor) {
        insert(target, div4, anchor);
        append(div4, div3);
        append(div3, div2);
        append(div2, div1);
        append(div1, div0);
        append(div0, t0);
        append(div0, t1);
        append(div0, t2);
        append(div3, t3);
        append(div3, small);
        append(small, t4);
      },
      p(ctx2, [dirty]) {
        if (dirty & /*displayStatus*/
        2 && t0_value !== (t0_value = /*displayStatus*/
        ctx2[1].counter + ""))
          set_data(t0, t0_value);
        if (dirty & /*displayStatus*/
        2 && t2_value !== (t2_value = /*displayStatus*/
        ctx2[1].length + ""))
          set_data(t2, t2_value);
        if (dirty & /*displayStatus*/
        2) {
          set_style(
            div0,
            "width",
            /*displayStatus*/
            ctx2[1].percent + "%"
          );
        }
        if (dirty & /*displayStatus*/
        2 && div1_aria_valuenow_value !== (div1_aria_valuenow_value = /*displayStatus*/
        ctx2[1].counter)) {
          attr(div1, "aria-valuenow", div1_aria_valuenow_value);
        }
        if (dirty & /*displayStatus*/
        2 && div1_aria_valuemax_value !== (div1_aria_valuemax_value = /*displayStatus*/
        ctx2[1].length)) {
          attr(div1, "aria-valuemax", div1_aria_valuemax_value);
        }
        if (dirty & /*displayTitle*/
        1)
          set_data(
            t4,
            /*displayTitle*/
            ctx2[0]
          );
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(div4);
        }
      }
    };
  }
  __name(create_fragment, "create_fragment");
  function instance($$self, $$props, $$invalidate) {
    let { control } = $$props;
    let { displayTitle = "Node" } = $$props;
    let { displayStatus = { counter: 0, percent: 0, length: 100 } } = $$props;
    let { displaySample = "(none)" } = $$props;
    $$self.$$set = ($$props2) => {
      if ("control" in $$props2)
        $$invalidate(2, control = $$props2.control);
      if ("displayTitle" in $$props2)
        $$invalidate(0, displayTitle = $$props2.displayTitle);
      if ("displayStatus" in $$props2)
        $$invalidate(1, displayStatus = $$props2.displayStatus);
      if ("displaySample" in $$props2)
        $$invalidate(3, displaySample = $$props2.displaySample);
    };
    return [displayTitle, displayStatus, control, displaySample];
  }
  __name(instance, "instance");
  var Queue = class extends SvelteComponent {
    static {
      __name(this, "Queue");
    }
    constructor(options) {
      super();
      init(this, options, instance, create_fragment, safe_not_equal, {
        control: 2,
        displayTitle: 0,
        displayStatus: 1,
        displaySample: 3
      });
    }
  };
  var Queue_default = Queue;

  // plug-ins/emitter-network/queue/Queue.js
  var Queue2 = class {
    static {
      __name(this, "Queue");
    }
    static extends = [Window];
    observables = {
      displayTitle: "Queue",
      displayStatus: { counter: 0, percent: 0, length: 100 },
      displaySample: "(none)",
      feedUrl: "sample/data/catpea.32.json",
      feedData: void 0
    };
    methods = {
      initialize() {
        this.caption = this.oo.name;
        this.createSocket("out", 1);
      },
      mount() {
        this.foreign = new Instance(Foreign);
        this.createWindowComponent(this.foreign);
        this.ui = new Queue_default({
          target: this.foreign.body,
          control: this.control
        });
        this.on("displayTitle", (displayTitle) => this.ui.$set({ displayTitle }));
        this.on("displayStatus", (displayStatus) => this.ui.$set({ displayStatus }));
        this.on("displaySample", (displaySample) => this.ui.$set({ displaySample }));
        this.on("feedUrl", async (url) => this.feedData = { data: (await (await fetch(url)).json()).reverse() });
        this.on("feedData", (feed) => {
          let counter = 0;
          let percent = 0;
          let length = feed.data.length;
          this.getApplication().controller.on("step", (x) => {
            if (feed.data.length) {
              const fragment = feed.data.pop();
              counter++;
              this.displayTitle = fragment.attr.title;
              this.displaySample = fragment.snip;
              percent = (0, import_calculate_percent.default)(counter, length, 0);
              this.step(fragment);
            }
            this.displayStatus = { counter, length, percent };
          });
        });
      },
      // --- //
      step(data) {
        this.pipe.emit("out", { source: this, detail: data });
        this.el.ComponentBackground.classList.add("indicate");
        setTimeout(() => this.el.ComponentBackground.classList.remove("indicate"), 333);
        this.packet = null;
      }
    };
  };

  // plug-ins/emitter-network/filter/Filter.svelte
  function create_if_block(ctx) {
    let div2;
    let t0;
    let div1;
    let div0;
    let t1_value = (
      /*displayStatus*/
      ctx[1].counter + ""
    );
    let t1;
    let t2;
    let t3_value = (
      /*displayStatus*/
      ctx[1].length + ""
    );
    let t3;
    let div1_aria_valuenow_value;
    let div1_aria_valuemax_value;
    return {
      c() {
        div2 = element("div");
        t0 = text2("Buffer\n      ");
        div1 = element("div");
        div0 = element("div");
        t1 = text2(t1_value);
        t2 = text2("/");
        t3 = text2(t3_value);
        attr(div0, "class", "progress-bar");
        set_style(
          div0,
          "width",
          /*displayStatus*/
          ctx[1].percent + "%"
        );
        attr(div1, "class", "progress");
        attr(div1, "role", "progressbar");
        attr(div1, "aria-label", "Queue Progress");
        attr(div1, "aria-valuenow", div1_aria_valuenow_value = /*displayStatus*/
        ctx[1].counter);
        attr(div1, "aria-valuemin", "0");
        attr(div1, "aria-valuemax", div1_aria_valuemax_value = /*displayStatus*/
        ctx[1].length);
        attr(div2, "class", "card-text mb-2");
      },
      m(target, anchor) {
        insert(target, div2, anchor);
        append(div2, t0);
        append(div2, div1);
        append(div1, div0);
        append(div0, t1);
        append(div0, t2);
        append(div0, t3);
      },
      p(ctx2, dirty) {
        if (dirty & /*displayStatus*/
        2 && t1_value !== (t1_value = /*displayStatus*/
        ctx2[1].counter + ""))
          set_data(t1, t1_value);
        if (dirty & /*displayStatus*/
        2 && t3_value !== (t3_value = /*displayStatus*/
        ctx2[1].length + ""))
          set_data(t3, t3_value);
        if (dirty & /*displayStatus*/
        2) {
          set_style(
            div0,
            "width",
            /*displayStatus*/
            ctx2[1].percent + "%"
          );
        }
        if (dirty & /*displayStatus*/
        2 && div1_aria_valuenow_value !== (div1_aria_valuenow_value = /*displayStatus*/
        ctx2[1].counter)) {
          attr(div1, "aria-valuenow", div1_aria_valuenow_value);
        }
        if (dirty & /*displayStatus*/
        2 && div1_aria_valuemax_value !== (div1_aria_valuemax_value = /*displayStatus*/
        ctx2[1].length)) {
          attr(div1, "aria-valuemax", div1_aria_valuemax_value);
        }
      },
      d(detaching) {
        if (detaching) {
          detach(div2);
        }
      }
    };
  }
  __name(create_if_block, "create_if_block");
  function create_fragment2(ctx) {
    let div1;
    let div0;
    let t0;
    let small;
    let t1;
    let if_block = (
      /*displayStatus*/
      ctx[1].counter && create_if_block(ctx)
    );
    return {
      c() {
        div1 = element("div");
        div0 = element("div");
        if (if_block)
          if_block.c();
        t0 = space();
        small = element("small");
        t1 = text2(
          /*displayTitle*/
          ctx[0]
        );
        attr(small, "class", "card-subtitle mb-2 text-body-secondary text-truncate d-block");
        attr(div0, "class", "card-body");
        attr(div1, "class", "card");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, div0);
        if (if_block)
          if_block.m(div0, null);
        append(div0, t0);
        append(div0, small);
        append(small, t1);
      },
      p(ctx2, [dirty]) {
        if (
          /*displayStatus*/
          ctx2[1].counter
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block(ctx2);
            if_block.c();
            if_block.m(div0, t0);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
        if (dirty & /*displayTitle*/
        1)
          set_data(
            t1,
            /*displayTitle*/
            ctx2[0]
          );
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(div1);
        }
        if (if_block)
          if_block.d();
      }
    };
  }
  __name(create_fragment2, "create_fragment");
  function instance2($$self, $$props, $$invalidate) {
    let { control } = $$props;
    let { displayTitle = "Node" } = $$props;
    let { displayStatus = { counter: 0, percent: 0, length: 0 } } = $$props;
    let { displaySample = "(none)" } = $$props;
    $$self.$$set = ($$props2) => {
      if ("control" in $$props2)
        $$invalidate(2, control = $$props2.control);
      if ("displayTitle" in $$props2)
        $$invalidate(0, displayTitle = $$props2.displayTitle);
      if ("displayStatus" in $$props2)
        $$invalidate(1, displayStatus = $$props2.displayStatus);
      if ("displaySample" in $$props2)
        $$invalidate(3, displaySample = $$props2.displaySample);
    };
    return [displayTitle, displayStatus, control, displaySample];
  }
  __name(instance2, "instance");
  var Filter = class extends SvelteComponent {
    static {
      __name(this, "Filter");
    }
    constructor(options) {
      super();
      init(this, options, instance2, create_fragment2, safe_not_equal, {
        control: 2,
        displayTitle: 0,
        displayStatus: 1,
        displaySample: 3
      });
    }
  };
  var Filter_default = Filter;

  // plug-ins/emitter-network/api/Stepper.js
  var import_calculate_percent2 = __toESM(require_calculate_percent(), 1);
  var Stepper = class {
    static {
      __name(this, "Stepper");
    }
    methods = {
      initialize() {
        this.control = new EventEmitter();
        this.dataQueue = [];
        let counter = 0;
        let waterLevel = 0;
        this.pipe.on("in", (packet) => {
          this.dataQueue.push(packet.detail);
          waterLevel = this.dataQueue.length > waterLevel ? waterLevel = this.dataQueue.length : waterLevel;
        });
        this.getApplication().controller.on("step", (x) => {
          if (this.dataQueue.length && !this.job) {
            this.job = this.dataQueue.shift();
            this.displayTitle = this.job.attr.title;
          } else if (this.job) {
            this.step(this.job);
            this.job = null;
            this.displayTitle = "";
            ;
            counter++;
          }
          this.displayStatus = { counter: this.dataQueue.length, length: waterLevel, percent: (0, import_calculate_percent2.default)(this.dataQueue.length, waterLevel) };
        });
      },
      step(packet) {
        this.pipe.emit("out", { source: this, detail: packet });
        this.el.ComponentBackground.classList.add("indicate");
        setTimeout(() => this.el.ComponentBackground.classList.remove("indicate"), 333);
      }
    };
  };

  // plug-ins/emitter-network/filter/Filter.js
  var Filter2 = class {
    static {
      __name(this, "Filter");
    }
    static extends = [Stepper, Window];
    observables = {
      displayTitle: "Filter",
      displayStatus: { counter: 0, percent: 0, length: 100 },
      displaySample: "(none)"
    };
    methods = {
      initialize() {
        this.caption = `${this.oo.name} (${this.id})`;
        this.createSocket("in", 0);
        this.createSocket("function", 0);
        this.createSocket("out", 1);
      },
      mount() {
        this.foreign = new Instance(Foreign);
        this.createWindowComponent(this.foreign);
        this.ui = new Filter_default({
          target: this.foreign.body,
          control: this.control
        });
        this.on("displayTitle", (displayTitle) => this.ui.$set({ displayTitle }));
        this.on("displayStatus", (displayStatus) => this.ui.$set({ displayStatus }));
        this.on("displaySample", (displaySample) => this.ui.$set({ displaySample }));
      }
    };
  };

  // plug-ins/emitter-network/map/Map.svelte
  function create_fragment3(ctx) {
    let div;
    let h1;
    let t0;
    let t1_value = (
      /*count*/
      (ctx[0] || "") + ""
    );
    let t1;
    return {
      c() {
        div = element("div");
        h1 = element("h1");
        t0 = text2("Map! ");
        t1 = text2(t1_value);
        attr(div, "class", "container pt-3");
        set_style(div, "overflow-y", "scroll");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, h1);
        append(h1, t0);
        append(h1, t1);
      },
      p(ctx2, [dirty]) {
        if (dirty & /*count*/
        1 && t1_value !== (t1_value = /*count*/
        (ctx2[0] || "") + ""))
          set_data(t1, t1_value);
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(div);
        }
      }
    };
  }
  __name(create_fragment3, "create_fragment");
  function instance3($$self, $$props, $$invalidate) {
    let { count } = $$props;
    $$self.$$set = ($$props2) => {
      if ("count" in $$props2)
        $$invalidate(0, count = $$props2.count);
    };
    return [count];
  }
  __name(instance3, "instance");
  var Map2 = class extends SvelteComponent {
    static {
      __name(this, "Map");
    }
    constructor(options) {
      super();
      init(this, options, instance3, create_fragment3, safe_not_equal, { count: 0 });
    }
  };
  var Map_default = Map2;

  // plug-ins/emitter-network/map/Map.js
  var Map3 = class {
    static {
      __name(this, "Map");
    }
    static extends = [Stepper, Window];
    properties = {};
    methods = {
      initialize() {
        this.createSocket("in", 0);
        this.createSocket("function", 0);
        this.createSocket("out", 1);
      },
      mount() {
        this.foreign = new Instance(Foreign);
        this.createWindowComponent(this.foreign);
        this.ui = new Map_default({ target: this.foreign.body });
      }
    };
  };

  // plug-ins/emitter-network/reduce/Reduce.svelte
  function create_fragment4(ctx) {
    let div;
    let h1;
    let t0;
    let t1_value = (
      /*count*/
      (ctx[0] || "") + ""
    );
    let t1;
    return {
      c() {
        div = element("div");
        h1 = element("h1");
        t0 = text2("Reduce! ");
        t1 = text2(t1_value);
        attr(div, "class", "container pt-3");
        set_style(div, "overflow-y", "scroll");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, h1);
        append(h1, t0);
        append(h1, t1);
      },
      p(ctx2, [dirty]) {
        if (dirty & /*count*/
        1 && t1_value !== (t1_value = /*count*/
        (ctx2[0] || "") + ""))
          set_data(t1, t1_value);
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(div);
        }
      }
    };
  }
  __name(create_fragment4, "create_fragment");
  function instance4($$self, $$props, $$invalidate) {
    let { count } = $$props;
    $$self.$$set = ($$props2) => {
      if ("count" in $$props2)
        $$invalidate(0, count = $$props2.count);
    };
    return [count];
  }
  __name(instance4, "instance");
  var Reduce = class extends SvelteComponent {
    static {
      __name(this, "Reduce");
    }
    constructor(options) {
      super();
      init(this, options, instance4, create_fragment4, safe_not_equal, { count: 0 });
    }
  };
  var Reduce_default = Reduce;

  // plug-ins/emitter-network/reduce/Reduce.js
  var Reduce2 = class {
    static {
      __name(this, "Reduce");
    }
    static extends = [Stepper, Window];
    properties = {};
    methods = {
      initialize() {
        this.createSocket("in", 0);
        this.createSocket("function", 0);
        this.createSocket("out", 1);
      },
      mount() {
        this.foreign = new Instance(Foreign);
        this.createWindowComponent(this.foreign);
        this.ui = new Reduce_default({ target: this.foreign.body });
      }
    };
  };

  // plug-ins/emitter-network/index.js
  var components = {
    Queue: Queue2,
    Filter: Filter2,
    Map: Map3,
    Reduce: Reduce2
  };
  var emitter_network_default = components;

  // plug-ins/windows/Realm.js
  var uuid3 = bundle["uuid"];
  var cheerio = bundle["cheerio"];
  var libraries = {
    "emitter-network": emitter_network_default
  };
  var Realm = class {
    static {
      __name(this, "Realm");
    }
    static extends = [Vertical];
    properties = {
      contain: true,
      classes: "",
      // css classes
      feed: []
    };
    observables = {
      url: null,
      library: null,
      panX: 0,
      panY: 0,
      zoom: 0.5,
      applications: [],
      elements: [],
      anchors: [],
      pipes: [],
      components: { ...components_default }
    };
    serializables = {
      library: "string",
      panX: "float",
      panY: "float",
      zoom: "float"
    };
    traits = {
      async loadXml(url) {
        if (!url)
          return;
        const xml = await (await fetch(url)).text();
        const $ = cheerio.load(xml, { xmlMode: true, decodeEntities: true, withStartIndices: true, withEndIndices: true });
        console.log("TODO: Ease reliance on .node");
        let types = Object.fromEntries(this.oo.serializables.map((o) => [o.name, o.value.type]));
        let serializables = this.oo.serializables.map((o) => o.name);
        let blacklist = ["id", "x", "y", "w", "h"];
        let attributes = Object.fromEntries(Object.entries($("Workspace").get(0).attribs).filter(([k, v]) => serializables.indexOf(k) !== -1).filter(([k, v]) => !blacklist.includes(k)).map(([k, v]) => [k, cast2(v, types[k])]));
        Object.assign(this, attributes);
        for (const el of $("Workspace").children()) {
          const node = new Instance(Node, { origin: this.getApplication().id });
          const data = {};
          node.assign({ type: el.name, ...el.attribs }, data, [$, $(el).children()]);
          this.elements.create(node);
        }
      },
      loadElements([$, children2]) {
        if (!children2)
          return;
        for (const el of children2) {
          const node = new Instance(Node, { origin: this.getApplication().id });
          const data = {};
          node.assign({ type: el.name, ...el.attribs }, data, [$, $(el).children()]);
          this.elements.create(node);
        }
      },
      getXml() {
        const $ = cheerio.load(``, { xmlMode: true, decodeEntities: true, withStartIndices: true, withEndIndices: true });
        for (const application of this.applications) {
          let body = "";
          if (application.realm) {
            body = application.realm.getXml();
          }
          const attributeNames = application.oo.serializables;
          const attributes = attributeNames.filter((o) => application[o.name]).filter((o) => application[o.name] !== o.value.default).map((o) => `${o.name}=${JSON.stringify(application[o.name])}`).join(" ");
          $.root().append(`<${application.oo.name} ${attributes}>${body}</${application.oo.name}>`);
        }
        const xml = $.root().html();
        return xml;
      },
      createNode(meta, data, content) {
        const node = new Instance(Node, { origin: this.getApplication().id });
        node.assign(meta, data, content);
        this.elements.create(node);
      }
    };
    methods = {
      initialize() {
        this.name = "realm";
        if (this.library) {
          this.library.split(",").map((s) => s.trim()).filter((s) => s).forEach((name) => {
            if (libraries[name]) {
              this.components = { ...libraries[name], ...components_default };
            } else {
              console.info("No such library", name);
            }
          });
        }
        if (this.getRootContainer().isRootWindow)
          return;
        this.flexible = true;
      },
      mount() {
        const realmBody = new Instance(Viewport, { parent: this, classes: this.classes, flexible: true });
        this.viewport = realmBody;
        this.getApplication().viewport = realmBody;
        this.children.create(realmBody);
        this.getRoot().origins.create({ id: this.getRootContainer().id, root: this, scene: realmBody.el.Mask });
        if (this.parent.isRootWindow) {
          this.parent.on("h", (parentH) => {
            const childrenHeight = this.children.filter((c) => !(c === realmBody)).reduce((total, c) => total + c.h, 0);
            const spacers = this.parent.s * 1 * (this.children.length > 0 ? this.children.length - 1 : 0);
            const freeSpace = parentH - childrenHeight - this.parent.b * 2 - this.parent.p * 2 - spacers;
            realmBody.h = freeSpace;
            realmBody.H = freeSpace;
          });
        }
        ;
        this.on("panX", (panX) => realmBody.panX = panX);
        this.on("panY", (panY) => realmBody.panY = panY);
        this.on("zoom", (zoom2) => realmBody.zoom = zoom2);
        this.on("elements.created", (node) => {
          const Application2 = this.components[node.type] || this.components["Hello"];
          if (!Application2)
            return console.warn(`Skipped Unrecongnized Component Type "${node.type}"`);
          let root = svg.g({ id: node.id, name: "element" });
          realmBody.content.appendChild(root);
          const options = { node, scene: root, parent: this, id: node.id, content: node.content, library: node.library };
          const application = new Instance(Application2, options);
          for (const serializable of application.oo.serializables) {
            const name = serializable.name;
            const type = serializable.value.type;
            const value = cast2(node[name], type);
            application[name] = value;
            console.log(`Set ${name} of ${application.oo.name} to`, value);
          }
          this.applications.create(application);
          application.start();
        }, { replay: true });
        this.on("elements.removed", ({ id }) => {
          this.applications.get(id).stop();
          this.applications.get(id).destroy();
          this.applications.remove(id);
        });
        this.appendElements();
        const menu = new Menu({
          area: realmBody.body,
          transforms: () => this.getTransforms(this),
          show: ({ x, y, tx, ty }) => {
            const availableComponents = Object.keys(this.components).filter((o) => !["Pipe", "Workspace"].includes(o)).map((className) => ({
              x,
              y,
              root: this.getApplication().node.id,
              text: `New ${className}`,
              icon: className,
              value: className,
              action: () => {
                const node = new Instance(Node, {
                  id: uuid3(),
                  origin: this.getApplication().id,
                  type: className,
                  x: tx,
                  y: ty,
                  w: 400,
                  h: 400
                });
                const data = {};
                node.assign({}, data);
                this.elements.create(node);
              }
            }));
            const rootWindow = this.getRoot();
            rootWindow.openMenu({ x, y, options: { data: availableComponents } });
          }
        });
        this.addDisposable(menu);
        const pan = new Pan_default({
          area: window,
          handle: realmBody.background,
          scale: () => this.getParentScale(this),
          movement: ({ x, y }) => {
            this.panX -= x;
            this.panY -= y;
          }
        });
        this.addDisposable(pan);
        const zoom = new Zoom({
          magnitude: 0.1,
          // area: realmBody.background, // this does just the background
          area: realmBody.Viewport,
          // this zooms over everything and requires a stop in the zoom system
          component: realmBody,
          handle: realmBody.background,
          getter: (key) => this[key],
          transforms: () => this.getTransforms(this),
          before: () => {
          },
          change: ({ zoom: zoom2, panX, panY }) => {
            this.zoom = zoom2;
            this.panX = panX;
            this.panY = panY;
          },
          feedback: (debug) => {
          },
          after: (data, debug) => {
          }
        });
        this.addDisposable(zoom);
        this.on("url", (url) => this.loadXml(this.url));
        if (this.getApplication().content)
          this.loadElements(
            this.getApplication().content
            /* this passes on the cheerio tuple */
          );
        this.addDisposableFromSmartEmitter(this.getRoot().keyboard, "Unzoom", () => {
          const newZoom = 1;
          const newPanX = this.panX * (newZoom / this.zoom) - this.w * (newZoom / this.zoom - 1) / 2;
          const newPanY = this.panY * (newZoom / this.zoom) - this.h * (newZoom / this.zoom - 1) / 2;
          this.panX = newPanX;
          this.panY = newPanY;
          this.zoom = newZoom;
        });
        this.addDisposableFromSmartEmitter(this.getRoot().keyboard, "Halfzoom", () => {
          const newZoom = 0.5;
          const newPanX = this.panX * (newZoom / this.zoom) - this.w * (newZoom / this.zoom - 1) / 2;
          const newPanY = this.panY * (newZoom / this.zoom) - this.h * (newZoom / this.zoom - 1) / 2;
          this.panX = newPanX;
          this.panY = newPanY;
          this.zoom = newZoom;
        });
        this.addDisposableFromSmartEmitter(this.getRoot().keyboard, "Minimap", () => {
          const newZoom = 0.1;
          const newPanX = this.panX * (newZoom / this.zoom) - this.w * (newZoom / this.zoom - 1) / 2;
          const newPanY = this.panY * (newZoom / this.zoom) - this.h * (newZoom / this.zoom - 1) / 2;
          this.panX = newPanX;
          this.panY = newPanY;
          this.zoom = newZoom;
        });
      },
      clean() {
        this.elements.map(({ id }) => this.elements.remove(id));
        this.anchors.map(({ id }) => this.anchors.remove(id));
        this.pipes.map(({ id }) => this.pipes.remove(id));
      }
    };
  };

  // plug-ins/components/Group.js
  var Group = class {
    static {
      __name(this, "Group");
    }
    static extends = [Application];
    properties = {
      isGroup: true
    };
    serializables = {
      zoom: "string",
      panX: "string",
      panY: "string",
      library: "string"
    };
    traits = {};
    methods = {
      initialize() {
        this.p = 3;
        this.showCaption = true;
        this.isResizable = true;
        this.createSocket("in", 0);
        this.createSocket("out", 1);
      },
      mount() {
        this.realm = new Instance(Realm, { library: this.library });
        Object.defineProperty(this, "zoom", { get: function() {
          return this.realm.zoom;
        } });
        Object.defineProperty(this, "panX", { get: function() {
          return this.realm.panX;
        } });
        Object.defineProperty(this, "panY", { get: function() {
          return this.realm.panY;
        } });
        this.on("node", (node) => {
          node.on("url", (url) => this.realm.url = url);
          node.on("zoom", (zoom) => this.realm.zoom = zoom);
          node.on("panX", (panX) => this.realm.panX = panX);
          node.on("panY", (panY) => this.realm.panY = panY);
        });
        this.createWindowComponent(this.realm);
      },
      clean() {
      },
      destroy() {
      }
    };
  };

  // plug-ins/cute-emitter/CuteEmitter.js
  var CuteEmitter = class {
    static {
      __name(this, "CuteEmitter");
    }
    constructor() {
      this.events = /* @__PURE__ */ new Map();
    }
    on(event, listener) {
      if (!this.events.has(event)) {
        this.events.set(event, []);
      }
      this.events.get(event).push(listener);
      return {
        destroy: () => this.off(event, listener)
      };
    }
    emit(event, ...args) {
      this.events.get(event)?.forEach((listener) => listener(...args));
    }
    off(event, listener) {
      if (this.events.has(event)) {
        const listeners = this.events.get(event).filter((l) => l !== listener);
        this.events.set(event, listeners);
      }
    }
  };

  // plug-ins/keyboard-monitor/keyboard.json
  var keyboard_default = {
    Backspace: "Remove",
    Delete: "Remove",
    "1": "Unzoom",
    "2": "Halfzoom",
    "3": "Minimap",
    Bork: "Bork"
  };

  // plug-ins/keyboard-monitor/KeyboardMonitor.js
  var KeyboardMonitor = class extends CuteEmitter {
    static {
      __name(this, "KeyboardMonitor");
    }
    source;
    constructor(configuration) {
      super();
      const defaults = {
        source: globalThis.window
      };
      const options = Object.assign({}, defaults, configuration);
      this.source = options.source;
      this.mount();
    }
    mount() {
      const self2 = this;
      this.keyDownListener = function(e) {
        console.log(`Keyboard key "${e.key}" interpreted as: ${keyboard_default[e.key]}`);
        self2.emit(keyboard_default[e.key], e);
      };
      this.source.addEventListener("keydown", this.keyDownListener);
    }
    destroy() {
      this.source.removeEventListener("keydown", this.keyDownListener);
    }
  };

  // plug-ins/class-icons/index.js
  function class_icons_default(className) {
    let response;
    switch (className) {
      case "Workspace":
        response = "box";
        break;
      case "Window":
        response = "window-fullscreen";
        break;
      case "Terminal":
        response = "terminal";
        break;
      case "Editor":
        response = "window-sidebar";
        break;
      case "Architecture":
        response = "gem";
        break;
      case "Analysis":
        response = "diagram-3";
        break;
      case "Pipe":
        response = "share-fill";
        break;
      case "Realm":
        response = "globe";
        break;
      case "Caption":
        response = "usb";
        break;
      case "Label":
        response = "alphabet";
        break;
      case "Foreign":
        response = "wrench-adjustable";
        break;
      case "Sockets":
        response = "node-plus";
        break;
      case "Vertical":
        response = "arrows-vertical";
        break;
      case "Hortizontal":
        response = "arrows";
        break;
      case "Container":
        response = "box2-heart";
        break;
      case "Component":
        response = "heart-pulse";
        break;
      case "Application":
        response = "brightness-high";
        break;
      case "Trait":
        response = "gear-wide";
        break;
      case "Method":
        response = "gear-wide-connected";
        break;
      case "Group":
        response = "box";
        break;
      case "Viewport":
        response = "binoculars";
        break;
      case "Gradients":
        response = "palette2";
        break;
      case "Hello":
        response = "telephone";
        break;
      case "Fetch":
        response = "download";
        break;
      case "Alert":
        response = "exclamation-diamond";
        break;
      default:
        response = "list";
    }
    return response;
  }
  __name(class_icons_default, "default");

  // plug-ins/windows/ui/Menu.svelte
  function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[3] = list[i].text;
    child_ctx[4] = list[i].value;
    child_ctx[5] = list[i].action;
    child_ctx[6] = list[i].icon;
    child_ctx[8] = i;
    return child_ctx;
  }
  __name(get_each_context, "get_each_context");
  function create_each_block(ctx) {
    let li;
    let i_1;
    let i_1_class_value;
    let t_value = (
      /*text*/
      ctx[3] + ""
    );
    let t;
    let mounted;
    let dispose;
    return {
      c() {
        li = element("li");
        i_1 = element("i");
        t = text2(t_value);
        attr(i_1, "class", i_1_class_value = "bi bi-" + class_icons_default(
          /*icon*/
          ctx[6]
        ) + " text-light pe-2");
        attr(li, "class", "list-group-item");
        set_style(li, "cursor", "pointer");
      },
      m(target, anchor) {
        insert(target, li, anchor);
        append(li, i_1);
        append(li, t);
        if (!mounted) {
          dispose = listen(li, "click", function() {
            if (is_function(
              /*action*/
              ctx[5]
            ))
              ctx[5].apply(this, arguments);
          });
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & /*options*/
        2 && i_1_class_value !== (i_1_class_value = "bi bi-" + class_icons_default(
          /*icon*/
          ctx[6]
        ) + " text-light pe-2")) {
          attr(i_1, "class", i_1_class_value);
        }
        if (dirty & /*options*/
        2 && t_value !== (t_value = /*text*/
        ctx[3] + ""))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching) {
          detach(li);
        }
        mounted = false;
        dispose();
      }
    };
  }
  __name(create_each_block, "create_each_block");
  function create_fragment5(ctx) {
    let div3;
    let div0;
    let t1;
    let div1;
    let api_stopWheel_action;
    let t2;
    let div2;
    let mounted;
    let dispose;
    let each_value = ensure_array_like(
      /*options*/
      ctx[1].data
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }
    return {
      c() {
        div3 = element("div");
        div0 = element("div");
        div0.textContent = "Operations";
        t1 = space();
        div1 = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t2 = space();
        div2 = element("div");
        div2.textContent = "Create new application.";
        attr(div0, "class", "card-header");
        attr(div1, "class", "list-group list-group-flush overflow-auto h-100");
        attr(div2, "class", "card-footer text-body-secondary");
        attr(div3, "class", "card h-100 m-0");
      },
      m(target, anchor) {
        insert(target, div3, anchor);
        append(div3, div0);
        append(div3, t1);
        append(div3, div1);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div1, null);
          }
        }
        append(div3, t2);
        append(div3, div2);
        if (!mounted) {
          dispose = action_destroyer(api_stopWheel_action = /*api*/
          ctx[0].stopWheel(div1));
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & /*options*/
        2) {
          each_value = ensure_array_like(
            /*options*/
            ctx2[1].data
          );
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(div1, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(div3);
        }
        destroy_each(each_blocks, detaching);
        mounted = false;
        dispose();
      }
    };
  }
  __name(create_fragment5, "create_fragment");
  function instance5($$self, $$props, $$invalidate) {
    let { api } = $$props;
    let { control } = $$props;
    let { options = { data: [] } } = $$props;
    $$self.$$set = ($$props2) => {
      if ("api" in $$props2)
        $$invalidate(0, api = $$props2.api);
      if ("control" in $$props2)
        $$invalidate(2, control = $$props2.control);
      if ("options" in $$props2)
        $$invalidate(1, options = $$props2.options);
    };
    return [api, options, control];
  }
  __name(instance5, "instance");
  var Menu2 = class extends SvelteComponent {
    static {
      __name(this, "Menu");
    }
    constructor(options) {
      super();
      init(this, options, instance5, create_fragment5, safe_not_equal, { api: 0, control: 2, options: 1 });
    }
  };
  var Menu_default = Menu2;

  // plug-ins/windows/Menu.js
  var Menu3 = class {
    static {
      __name(this, "Menu");
    }
    static extends = [Svelte, Bootstrap, Vertical];
    properties = {};
    observables = {
      show: false,
      options: {}
    };
    methods = {
      initialize() {
        this.r = 5;
        this.s = 3;
        this.w = 200;
        this.h = 400;
      },
      mount() {
        this.el.Background = svg.rect({
          name: this.oo.name,
          style: { background: "red" },
          class: "editor-menu",
          ry: this.r,
          "stroke-width": 0,
          "vector-effect": "non-scaling-stroke",
          x: 0,
          y: 0
        });
        this.on("w", (width) => update(this.el.Background, { width }));
        this.on("h", (height) => update(this.el.Background, { height }));
        this.on("x", (x) => update(this.el.Background, { x }));
        this.on("y", (y) => update(this.el.Background, { y }));
        this.appendElements();
        this.foreign = new Instance(Foreign, { parent: this });
        this.children.create(this.foreign);
        this.ui = new Menu_default({
          target: this.foreign.body,
          props: {
            control: this.control,
            api: this
          }
        });
        this.on("options", (options) => this.ui.$set({ options }));
        this.foreign.body.addEventListener("click", (e) => {
          this.parent.closeMenu();
        });
        this.on("h", (h) => {
          this.foreign.h = h - this.p * 2 - this.b * 2;
        });
        this.on("show", (show) => {
          if (show) {
            this.el.Background.style.display = "block";
            this.foreign.body.style.display = "block";
          } else {
            this.el.Background.style.display = "none";
            this.foreign.body.style.display = "none";
          }
        });
      }
    };
  };

  // plug-ins/windows/Overlay.js
  var Overlay = class {
    static {
      __name(this, "Overlay");
    }
    static extends = [Component];
    properties = {
      layout: null
    };
    observables = {
      show: false,
      children: []
    };
    methods = {
      initialize() {
        this.debouncedDnResizeWindow = debounce_default(this.onResizeWindow.bind(this), 10);
        this.on("show", (show) => {
          if (show) {
            update(this.el.Overlay, { style: { display: "block" } });
          } else {
            update(this.el.Overlay, { style: { display: "none" } });
          }
        }, { autorun: false });
      },
      drawOverlay() {
        this.el.Overlay = svg.rect({
          name: this.oo.name,
          style: { display: "none" },
          class: "editor-overlay",
          ry: this.r,
          "stroke-width": 0,
          "vector-effect": "non-scaling-stroke",
          x: 0,
          y: 0
        });
        this.on("w", (width) => update(this.el.Overlay, { width }));
        this.on("h", (height) => update(this.el.Overlay, { height }));
        this.appendElements();
        this.el.Overlay.addEventListener("click", (e) => {
          this.parent.closeMenu();
        });
      },
      mount() {
        this.drawOverlay();
        this.resizeToFullWindow();
      },
      destroy() {
        window.removeEventListener("resize", this.debouncedDnResizeWindow);
        this.removeElements();
      },
      resizeToFullWindow() {
        window.addEventListener("resize", this.debouncedDnResizeWindow);
        this.onResizeWindow();
      },
      onResizeWindow() {
        update(this.el.Overlay, { width: this.getRoot().svg.clientWidth });
        update(this.el.Overlay, { height: this.getRoot().svg.clientHeight });
      }
    };
  };

  // plug-ins/components/Workspace.js
  var uuid4 = bundle["uuid"];
  var cheerio2 = bundle["cheerio"];
  var Workspace = class {
    static {
      __name(this, "Workspace");
    }
    static extends = [Group];
    traits = {
      // TODO: menu should be destroyed/recreated each time
      closeMenu() {
        this.overlay.show = false;
        this.menu.show = false;
        this.container.style.display = "none";
      },
      openMenu({ x, y, options, w = 250, h = 280 }) {
        if (this.menu) {
          this.menu.options = options;
          this.menu.x = x;
          this.menu.y = y;
          this.container.style.display = "block";
          this.overlay.show = true;
          this.menu.show = true;
          return;
        }
        this.container = svg.g({ name: "menu" });
        this.scene.appendChild(this.container);
        this.overlay = new Instance(Overlay, { parent: this, scene: this.container });
        this.overlay.start();
        this.overlay.show = true;
        this.menu = new Instance(Menu3, { parent: this, scene: this.container, x, y, w, h, options });
        this.menu.start();
        this.menu.show = true;
      }
    };
    methods = {
      initialize() {
        this.p = 0;
        this.r = 0;
        this.s = 0;
        this.keyboard = new KeyboardMonitor();
        this.addDisposable(this.keyboard);
      },
      saveXml() {
        const attributes = this.oo.serializables.filter((o) => this[o.name]).filter((o) => this[o.name] !== o.value.default).map((o) => `${o.name}=${JSON.stringify(this[o.name])}`).join(" ");
        const $ = cheerio2.load(`<?xml version="1.0"?><${this.oo.name} name="${package_default.name}" description="${package_default.description}" version="${package_default.version}" ${attributes}></${this.oo.name}>`, { xmlMode: true, decodeEntities: true, withStartIndices: true, withEndIndices: true });
        if (this.realm) {
          $(this.oo.name).append(this.realm.getXml());
        }
        const xml = $.root().html();
        console.info(xml);
        return xml;
      }
    };
  };

  // plug-ins/components/hello/Interface.svelte
  function create_fragment6(ctx) {
    let div10;
    let div0;
    let t0;
    let t1;
    let t2_value = parseInt(
      /*$w*/
      ctx[7]
    ) + "";
    let t2;
    let t3;
    let t4_value = parseInt(
      /*$h*/
      ctx[8]
    ) + "";
    let t4;
    let t5;
    let button0;
    let api_makeMovable_action;
    let t6;
    let div8;
    let p0;
    let t7;
    let t8;
    let div3;
    let t10;
    let label0;
    let t12;
    let input2;
    let t13;
    let datalist;
    let option0;
    let option1;
    let option2;
    let option3;
    let option4;
    let t14;
    let hr0;
    let t15;
    let label1;
    let t17;
    let input3;
    let t18;
    let hr1;
    let t19;
    let label2;
    let t20;
    let t21;
    let t22;
    let input4;
    let t23;
    let hr2;
    let t24;
    let input5;
    let t25;
    let input6;
    let t26;
    let p1;
    let t27;
    let t28;
    let hr3;
    let t29;
    let form;
    let api_stopWheel_action;
    let t42;
    let div9;
    let t43;
    let t44;
    let button2;
    let api_makeResizable_action;
    let div10_class_value;
    let mounted;
    let dispose;
    return {
      c() {
        div10 = element("div");
        div0 = element("div");
        t0 = text2(
          /*$caption*/
          ctx[6]
        );
        t1 = text2(" (");
        t2 = text2(t2_value);
        t3 = text2("x");
        t4 = text2(t4_value);
        t5 = text2(")\n    ");
        button0 = element("button");
        button0.innerHTML = `<i class="bi bi-x"></i>`;
        t6 = space();
        div8 = element("div");
        p0 = element("p");
        t7 = text2(
          /*$text*/
          ctx[9]
        );
        t8 = space();
        div3 = element("div");
        div3.innerHTML = `<div class="col"><input type="text" class="form-control" placeholder="First name" aria-label="First name"/></div> <div class="col"><input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/></div>`;
        t10 = space();
        label0 = element("label");
        label0.textContent = "Datalist example";
        t12 = space();
        input2 = element("input");
        t13 = space();
        datalist = element("datalist");
        option0 = element("option");
        option0.innerHTML = ``;
        option1 = element("option");
        option1.innerHTML = ``;
        option2 = element("option");
        option2.innerHTML = ``;
        option3 = element("option");
        option3.innerHTML = ``;
        option4 = element("option");
        option4.innerHTML = ``;
        t14 = space();
        hr0 = element("hr");
        t15 = space();
        label1 = element("label");
        label1.textContent = "Color picker";
        t17 = space();
        input3 = element("input");
        t18 = space();
        hr1 = element("hr");
        t19 = space();
        label2 = element("label");
        t20 = text2("Example range = ");
        t21 = text2(
          /*c*/
          ctx[3]
        );
        t22 = space();
        input4 = element("input");
        t23 = space();
        hr2 = element("hr");
        t24 = space();
        input5 = element("input");
        t25 = space();
        input6 = element("input");
        t26 = space();
        p1 = element("p");
        t27 = text2(
          /*c*/
          ctx[3]
        );
        t28 = space();
        hr3 = element("hr");
        t29 = space();
        form = element("form");
        form.innerHTML = `<div class="mb-3"><label for="exampleInputEmail1" class="form-label">Email address</label> <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> <div id="emailHelp" class="form-text">We&#39;ll never share your email with anyone else.</div></div> <div class="mb-3"><label for="exampleInputPassword1" class="form-label">Password</label> <input type="password" class="form-control" id="exampleInputPassword1"/></div> <div class="mb-3 form-check"><input type="checkbox" class="form-check-input" id="exampleCheck1"/> <label class="form-check-label" for="exampleCheck1">Check me out</label></div> <button type="submit" class="btn btn-primary">Submit</button>`;
        t42 = space();
        div9 = element("div");
        t43 = text2(
          /*$status*/
          ctx[10]
        );
        t44 = space();
        button2 = element("button");
        button2.innerHTML = `<i class="bi bi-grip-horizontal"></i>`;
        attr(button0, "type", "button");
        attr(button0, "class", "btn opacity-50");
        set_style(button0, "position", "absolute");
        set_style(button0, "right", "0");
        set_style(button0, "top", "0");
        set_style(button0, "padding", ".5rem");
        attr(button0, "aria-label", "Close");
        attr(div0, "class", "card-header user-select-none");
        toggle_class(
          div0,
          "text-warning",
          /*$selected*/
          ctx[5]
        );
        attr(div3, "class", "row");
        attr(label0, "for", "exampleDataList");
        attr(label0, "class", "form-label");
        attr(input2, "class", "form-control");
        attr(input2, "list", "datalistOptions");
        attr(input2, "id", "exampleDataList");
        attr(input2, "placeholder", "Type to search...");
        option0.__value = "San Francisco";
        set_input_value(option0, option0.__value);
        option1.__value = "New York";
        set_input_value(option1, option1.__value);
        option2.__value = "Seattle";
        set_input_value(option2, option2.__value);
        option3.__value = "Los Angeles";
        set_input_value(option3, option3.__value);
        option4.__value = "Chicago";
        set_input_value(option4, option4.__value);
        attr(datalist, "id", "datalistOptions");
        attr(label1, "for", "exampleColorInput");
        attr(label1, "class", "form-label");
        attr(input3, "type", "color");
        attr(input3, "class", "form-control form-control-color");
        attr(input3, "id", "exampleColorInput");
        input3.value = "#563d7c";
        attr(input3, "title", "Choose your color");
        attr(label2, "for", "customRange2");
        attr(label2, "class", "form-label");
        attr(input4, "type", "range");
        attr(input4, "class", "form-range");
        attr(input4, "min", "0");
        attr(input4, "max", "500");
        attr(input4, "id", "customRange2");
        attr(input5, "type", "number");
        attr(input6, "type", "number");
        attr(div8, "class", "card-body overflow-auto");
        attr(button2, "type", "button");
        attr(button2, "class", "btn opacity-50");
        set_style(button2, "position", "absolute");
        set_style(button2, "right", "0");
        set_style(button2, "bottom", "0");
        set_style(button2, "padding", ".5rem");
        attr(button2, "aria-label", "Resize");
        attr(div9, "class", "card-footer text-body-secondary");
        attr(div10, "class", div10_class_value = "card alert-" + /*$context*/
        ctx[4] + " h-100 m-0");
        toggle_class(
          div10,
          "active",
          /*$selected*/
          ctx[5]
        );
      },
      m(target, anchor) {
        insert(target, div10, anchor);
        append(div10, div0);
        append(div0, t0);
        append(div0, t1);
        append(div0, t2);
        append(div0, t3);
        append(div0, t4);
        append(div0, t5);
        append(div0, button0);
        append(div10, t6);
        append(div10, div8);
        append(div8, p0);
        append(p0, t7);
        append(div8, t8);
        append(div8, div3);
        append(div8, t10);
        append(div8, label0);
        append(div8, t12);
        append(div8, input2);
        append(div8, t13);
        append(div8, datalist);
        append(datalist, option0);
        append(datalist, option1);
        append(datalist, option2);
        append(datalist, option3);
        append(datalist, option4);
        append(div8, t14);
        append(div8, hr0);
        append(div8, t15);
        append(div8, label1);
        append(div8, t17);
        append(div8, input3);
        append(div8, t18);
        append(div8, hr1);
        append(div8, t19);
        append(div8, label2);
        append(label2, t20);
        append(label2, t21);
        append(div8, t22);
        append(div8, input4);
        set_input_value(
          input4,
          /*c*/
          ctx[3]
        );
        append(div8, t23);
        append(div8, hr2);
        append(div8, t24);
        append(div8, input5);
        set_input_value(
          input5,
          /*a*/
          ctx[1]
        );
        append(div8, t25);
        append(div8, input6);
        set_input_value(
          input6,
          /*b*/
          ctx[2]
        );
        append(div8, t26);
        append(div8, p1);
        append(p1, t27);
        append(div8, t28);
        append(div8, hr3);
        append(div8, t29);
        append(div8, form);
        append(div10, t42);
        append(div10, div9);
        append(div9, t43);
        append(div9, t44);
        append(div9, button2);
        if (!mounted) {
          dispose = [
            listen(
              button0,
              "click",
              /*click_handler*/
              ctx[18]
            ),
            action_destroyer(api_makeMovable_action = /*api*/
            ctx[0].makeMovable(div0)),
            listen(
              input4,
              "change",
              /*input4_change_input_handler*/
              ctx[19]
            ),
            listen(
              input4,
              "input",
              /*input4_change_input_handler*/
              ctx[19]
            ),
            listen(
              input5,
              "input",
              /*input5_input_handler*/
              ctx[20]
            ),
            listen(
              input6,
              "input",
              /*input6_input_handler*/
              ctx[21]
            ),
            action_destroyer(api_stopWheel_action = /*api*/
            ctx[0].stopWheel(div8)),
            action_destroyer(api_makeResizable_action = /*api*/
            ctx[0].makeResizable(button2))
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & /*$caption*/
        64)
          set_data(
            t0,
            /*$caption*/
            ctx2[6]
          );
        if (dirty & /*$w*/
        128 && t2_value !== (t2_value = parseInt(
          /*$w*/
          ctx2[7]
        ) + ""))
          set_data(t2, t2_value);
        if (dirty & /*$h*/
        256 && t4_value !== (t4_value = parseInt(
          /*$h*/
          ctx2[8]
        ) + ""))
          set_data(t4, t4_value);
        if (dirty & /*$selected*/
        32) {
          toggle_class(
            div0,
            "text-warning",
            /*$selected*/
            ctx2[5]
          );
        }
        if (dirty & /*$text*/
        512)
          set_data(
            t7,
            /*$text*/
            ctx2[9]
          );
        if (dirty & /*c*/
        8)
          set_data(
            t21,
            /*c*/
            ctx2[3]
          );
        if (dirty & /*c*/
        8) {
          set_input_value(
            input4,
            /*c*/
            ctx2[3]
          );
        }
        if (dirty & /*a*/
        2 && to_number(input5.value) !== /*a*/
        ctx2[1]) {
          set_input_value(
            input5,
            /*a*/
            ctx2[1]
          );
        }
        if (dirty & /*b*/
        4 && to_number(input6.value) !== /*b*/
        ctx2[2]) {
          set_input_value(
            input6,
            /*b*/
            ctx2[2]
          );
        }
        if (dirty & /*c*/
        8)
          set_data(
            t27,
            /*c*/
            ctx2[3]
          );
        if (dirty & /*$status*/
        1024)
          set_data(
            t43,
            /*$status*/
            ctx2[10]
          );
        if (dirty & /*$context*/
        16 && div10_class_value !== (div10_class_value = "card alert-" + /*$context*/
        ctx2[4] + " h-100 m-0")) {
          attr(div10, "class", div10_class_value);
        }
        if (dirty & /*$context, $selected*/
        48) {
          toggle_class(
            div10,
            "active",
            /*$selected*/
            ctx2[5]
          );
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(div10);
        }
        mounted = false;
        run_all(dispose);
      }
    };
  }
  __name(create_fragment6, "create_fragment");
  function instance6($$self, $$props, $$invalidate) {
    let c;
    let $context;
    let $selected;
    let $caption;
    let $w;
    let $h;
    let $text;
    let $status;
    let { api } = $$props;
    const context = api.signal("context");
    component_subscribe($$self, context, (value) => $$invalidate(4, $context = value));
    const caption = api.signal("caption");
    component_subscribe($$self, caption, (value) => $$invalidate(6, $caption = value));
    const text3 = api.signal("text");
    component_subscribe($$self, text3, (value) => $$invalidate(9, $text = value));
    const status = api.signal("status");
    component_subscribe($$self, status, (value) => $$invalidate(10, $status = value));
    const w = api.signal("w");
    component_subscribe($$self, w, (value) => $$invalidate(7, $w = value));
    const h = api.signal("h");
    component_subscribe($$self, h, (value) => $$invalidate(8, $h = value));
    let a3 = 1;
    let b3 = 2;
    const x = api.signal("h");
    const selected = api.signal("selected");
    component_subscribe($$self, selected, (value) => $$invalidate(5, $selected = value));
    const click_handler = /* @__PURE__ */ __name(() => api.removeApplication(), "click_handler");
    function input4_change_input_handler() {
      c = to_number(this.value);
      $$invalidate(3, c), $$invalidate(1, a3), $$invalidate(2, b3);
    }
    __name(input4_change_input_handler, "input4_change_input_handler");
    function input5_input_handler() {
      a3 = to_number(this.value);
      $$invalidate(1, a3);
    }
    __name(input5_input_handler, "input5_input_handler");
    function input6_input_handler() {
      b3 = to_number(this.value);
      $$invalidate(2, b3);
    }
    __name(input6_input_handler, "input6_input_handler");
    $$self.$$set = ($$props2) => {
      if ("api" in $$props2)
        $$invalidate(0, api = $$props2.api);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*a, b*/
      6) {
        $:
          $$invalidate(3, c = a3 + b3);
      }
      if ($$self.$$.dirty & /*api, a, b, c*/
      15) {
        $:
          api.send("out", { a: a3, b: b3, c });
      }
      if ($$self.$$.dirty & /*api, a*/
      3) {
        $:
          api.send("a", a3);
      }
      if ($$self.$$.dirty & /*api, b*/
      5) {
        $:
          api.send("b", b3);
      }
      if ($$self.$$.dirty & /*api, c*/
      9) {
        $:
          api.send("c", c);
      }
    };
    return [
      api,
      a3,
      b3,
      c,
      $context,
      $selected,
      $caption,
      $w,
      $h,
      $text,
      $status,
      context,
      caption,
      text3,
      status,
      w,
      h,
      selected,
      click_handler,
      input4_change_input_handler,
      input5_input_handler,
      input6_input_handler
    ];
  }
  __name(instance6, "instance");
  var Interface = class extends SvelteComponent {
    static {
      __name(this, "Interface");
    }
    constructor(options) {
      super();
      init(this, options, instance6, create_fragment6, safe_not_equal, { api: 0 });
    }
  };
  var Interface_default = Interface;

  // plug-ins/components/Hello.js
  var Hello = class {
    static {
      __name(this, "Hello");
    }
    static extends = [Application];
    observables = {};
    methods = {
      initialize() {
        this.w = 888;
        this.h = 888;
        this.createSocket("out", 1);
        this.createSocket("a", 1);
        this.createSocket("b", 1);
        this.createSocket("c", 1);
      },
      mount() {
        this.foreign = new Instance(Foreign);
        this.createWindowComponent(this.foreign);
        this.component = new Interface_default({
          target: this.foreign.body,
          props: {
            api: this,
            // context: this.context,
            // caption: this.caption,
            // text: this.text,
            // note: this.note,
            send: this.send.bind(this)
          }
        });
        this.addDisposable(stopWheel(this.foreign.body));
      },
      destroy() {
        this.component.$destroy();
      }
    };
  };

  // plug-ins/fields/WebUrl.svelte
  function create_fragment7(ctx) {
    let div1;
    let label;
    let t0_value = (
      /*field*/
      ctx[0].label + ""
    );
    let t0;
    let t1;
    let t2;
    let t3;
    let t4_value = (
      /*field*/
      ctx[0].id + ""
    );
    let t4;
    let t5;
    let label_for_value;
    let t6;
    let input;
    let input_id_value;
    let input_aria_describedby_value;
    let t7;
    let div0;
    let t8_value = (
      /*field*/
      ctx[0].help + ""
    );
    let t8;
    let div0_id_value;
    let mounted;
    let dispose;
    return {
      c() {
        div1 = element("div");
        label = element("label");
        t0 = text2(t0_value);
        t1 = text2(" (");
        t2 = text2(
          /*$value*/
          ctx[1]
        );
        t3 = space();
        t4 = text2(t4_value);
        t5 = text2(")");
        t6 = space();
        input = element("input");
        t7 = space();
        div0 = element("div");
        t8 = text2(t8_value);
        attr(label, "for", label_for_value = "field" + /*field*/
        ctx[0].id);
        attr(label, "class", "form-label");
        attr(input, "type", "string");
        attr(input, "class", "form-control");
        attr(input, "id", input_id_value = "field" + /*field*/
        ctx[0].id);
        attr(input, "aria-describedby", input_aria_describedby_value = /*field*/
        ctx[0].id + "Help");
        attr(div0, "id", div0_id_value = /*field*/
        ctx[0].id + "Help");
        attr(div0, "class", "form-text");
        attr(div1, "class", "mb-3");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, label);
        append(label, t0);
        append(label, t1);
        append(label, t2);
        append(label, t3);
        append(label, t4);
        append(label, t5);
        append(div1, t6);
        append(div1, input);
        set_input_value(
          input,
          /*$value*/
          ctx[1]
        );
        append(div1, t7);
        append(div1, div0);
        append(div0, t8);
        if (!mounted) {
          dispose = listen(
            input,
            "input",
            /*input_input_handler*/
            ctx[4]
          );
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & /*field*/
        1 && t0_value !== (t0_value = /*field*/
        ctx2[0].label + ""))
          set_data(t0, t0_value);
        if (dirty & /*$value*/
        2)
          set_data(
            t2,
            /*$value*/
            ctx2[1]
          );
        if (dirty & /*field*/
        1 && t4_value !== (t4_value = /*field*/
        ctx2[0].id + ""))
          set_data(t4, t4_value);
        if (dirty & /*field*/
        1 && label_for_value !== (label_for_value = "field" + /*field*/
        ctx2[0].id)) {
          attr(label, "for", label_for_value);
        }
        if (dirty & /*field*/
        1 && input_id_value !== (input_id_value = "field" + /*field*/
        ctx2[0].id)) {
          attr(input, "id", input_id_value);
        }
        if (dirty & /*field*/
        1 && input_aria_describedby_value !== (input_aria_describedby_value = /*field*/
        ctx2[0].id + "Help")) {
          attr(input, "aria-describedby", input_aria_describedby_value);
        }
        if (dirty & /*$value*/
        2) {
          set_input_value(
            input,
            /*$value*/
            ctx2[1]
          );
        }
        if (dirty & /*field*/
        1 && t8_value !== (t8_value = /*field*/
        ctx2[0].help + ""))
          set_data(t8, t8_value);
        if (dirty & /*field*/
        1 && div0_id_value !== (div0_id_value = /*field*/
        ctx2[0].id + "Help")) {
          attr(div0, "id", div0_id_value);
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(div1);
        }
        mounted = false;
        dispose();
      }
    };
  }
  __name(create_fragment7, "create_fragment");
  function instance7($$self, $$props, $$invalidate) {
    let $value;
    let { api } = $$props;
    let { field } = $$props;
    let value = api.signal(field.id);
    component_subscribe($$self, value, (value2) => $$invalidate(1, $value = value2));
    function input_input_handler() {
      $value = this.value;
      value.set($value);
    }
    __name(input_input_handler, "input_input_handler");
    $$self.$$set = ($$props2) => {
      if ("api" in $$props2)
        $$invalidate(3, api = $$props2.api);
      if ("field" in $$props2)
        $$invalidate(0, field = $$props2.field);
    };
    return [field, $value, value, api, input_input_handler];
  }
  __name(instance7, "instance");
  var WebUrl = class extends SvelteComponent {
    static {
      __name(this, "WebUrl");
    }
    constructor(options) {
      super();
      init(this, options, instance7, create_fragment7, safe_not_equal, { api: 3, field: 0 });
    }
  };
  var WebUrl_default = WebUrl;

  // plug-ins/descriptions/http-method.js
  var http_method_default = [
    { id: "get", name: "GET", description: "Retrieves data from a server at the specified resource." },
    { id: "post", name: "POST", description: "Sends data to the server to create a new resource. Often used when submitting form data." },
    { id: "put", name: "PUT", description: "Replaces all current representations of the target resource with the uploaded content." },
    { id: "patch", name: "PATCH", description: "Applies partial modifications to a resource." },
    { id: "delete", name: "DELETE", description: "Removes all current representations of the target resource given by a URL." },
    { id: "head", name: "HEAD", description: "Similar to GET, but it retrieves only the header information and not the body of the request." },
    { id: "connect", name: "CONNECT", description: "Establishes a tunnel to the server identified by the target resource." },
    { id: "options", name: "OPTIONS", description: "Describes the communication options for the target resource." },
    { id: "trace", name: "TRACE", description: "Performs a message loop-back test along the path to the target resource." }
  ];

  // plug-ins/fields/HttpMethod.svelte
  function get_each_context2(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[6] = list[i];
    child_ctx[8] = i;
    return child_ctx;
  }
  __name(get_each_context2, "get_each_context");
  function create_each_block2(ctx) {
    let input;
    let input_id_value;
    let input_value_value;
    let t0;
    let label;
    let label_for_value;
    let binding_group;
    let mounted;
    let dispose;
    binding_group = init_binding_group(
      /*$$binding_groups*/
      ctx[5][0]
    );
    return {
      c() {
        input = element("input");
        t0 = space();
        label = element("label");
        label.textContent = `${/*method*/
        ctx[6].name}`;
        attr(input, "type", "radio");
        attr(input, "class", "btn-check");
        attr(input, "name", "httpMethod");
        attr(input, "id", input_id_value = "httpMethod" + /*method*/
        ctx[6].id);
        attr(input, "autocomplete", "off");
        input.__value = input_value_value = /*method*/
        ctx[6].name;
        set_input_value(input, input.__value);
        attr(label, "class", "btn btn-outline-secondary");
        attr(label, "for", label_for_value = "httpMethod" + /*method*/
        ctx[6].id);
        binding_group.p(input);
      },
      m(target, anchor) {
        insert(target, input, anchor);
        input.checked = input.__value === /*$value*/
        ctx[0];
        insert(target, t0, anchor);
        insert(target, label, anchor);
        if (!mounted) {
          dispose = listen(
            input,
            "change",
            /*input_change_handler*/
            ctx[4]
          );
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & /*$value*/
        1) {
          input.checked = input.__value === /*$value*/
          ctx2[0];
        }
      },
      d(detaching) {
        if (detaching) {
          detach(input);
          detach(t0);
          detach(label);
        }
        binding_group.r();
        mounted = false;
        dispose();
      }
    };
  }
  __name(create_each_block2, "create_each_block");
  function create_fragment8(ctx) {
    let div;
    let each_value = ensure_array_like(http_method_default);
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block2(get_each_context2(ctx, each_value, i));
    }
    return {
      c() {
        div = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(div, "class", "btn-group mb-3");
        attr(div, "role", "group");
        attr(div, "aria-label", "Http Methods");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div, null);
          }
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & /*$value*/
        1) {
          each_value = ensure_array_like(http_method_default);
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context2(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block2(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(div, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(div);
        }
        destroy_each(each_blocks, detaching);
      }
    };
  }
  __name(create_fragment8, "create_fragment");
  function instance8($$self, $$props, $$invalidate) {
    let $value;
    let { api } = $$props;
    let { field } = $$props;
    let value = api.signal(field.id);
    component_subscribe($$self, value, (value2) => $$invalidate(0, $value = value2));
    const $$binding_groups = [[]];
    function input_change_handler() {
      $value = this.__value;
      value.set($value);
    }
    __name(input_change_handler, "input_change_handler");
    $$self.$$set = ($$props2) => {
      if ("api" in $$props2)
        $$invalidate(2, api = $$props2.api);
      if ("field" in $$props2)
        $$invalidate(3, field = $$props2.field);
    };
    return [$value, value, api, field, input_change_handler, $$binding_groups];
  }
  __name(instance8, "instance");
  var HttpMethod = class extends SvelteComponent {
    static {
      __name(this, "HttpMethod");
    }
    constructor(options) {
      super();
      init(this, options, instance8, create_fragment8, safe_not_equal, { api: 2, field: 3 });
    }
  };
  var HttpMethod_default = HttpMethod;

  // plug-ins/descriptions/fetch-response.js
  var fetch_response_default = [
    { id: "json", name: "JSON", description: "Parses the response body text as JSON, converting the JSON-encoded content into JavaScript objects." },
    { id: "text", name: "Text", description: "Returns the response body as plain text, useful for reading text or other types of structured data that are not in JSON format." },
    { id: "formData", name: "Form Data", description: "Transforms the response body into a FormData object, making it easy to inspect and manipulate form data returned from the server." },
    { id: "arrayBuffer", name: "Array Buffer", description: "Reads the response body and returns it as an ArrayBuffer, which represents a generic, fixed-length raw binary data buffer." },
    { id: "blob", name: "Blob", description: "Retrieves the response body as a Blob object, which can handle binary data such as images and sounds directly." }
  ];

  // plug-ins/fields/FetchResponse.svelte
  function get_each_context3(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[6] = list[i];
    child_ctx[8] = i;
    return child_ctx;
  }
  __name(get_each_context3, "get_each_context");
  function create_each_block3(ctx) {
    let input;
    let input_id_value;
    let input_value_value;
    let t0;
    let label;
    let label_for_value;
    let binding_group;
    let mounted;
    let dispose;
    binding_group = init_binding_group(
      /*$$binding_groups*/
      ctx[5][0]
    );
    return {
      c() {
        input = element("input");
        t0 = space();
        label = element("label");
        label.textContent = `${/*response*/
        ctx[6].name}`;
        attr(input, "type", "radio");
        attr(input, "class", "btn-check");
        attr(input, "name", "fetchResponse");
        attr(input, "id", input_id_value = "fetchResponse" + /*response*/
        ctx[6].id);
        attr(input, "autocomplete", "off");
        input.__value = input_value_value = /*response*/
        ctx[6].id;
        set_input_value(input, input.__value);
        attr(label, "class", "btn btn-outline-secondary");
        attr(label, "for", label_for_value = "fetchResponse" + /*response*/
        ctx[6].id);
        binding_group.p(input);
      },
      m(target, anchor) {
        insert(target, input, anchor);
        input.checked = input.__value === /*$value*/
        ctx[0];
        insert(target, t0, anchor);
        insert(target, label, anchor);
        if (!mounted) {
          dispose = listen(
            input,
            "change",
            /*input_change_handler*/
            ctx[4]
          );
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & /*$value*/
        1) {
          input.checked = input.__value === /*$value*/
          ctx2[0];
        }
      },
      d(detaching) {
        if (detaching) {
          detach(input);
          detach(t0);
          detach(label);
        }
        binding_group.r();
        mounted = false;
        dispose();
      }
    };
  }
  __name(create_each_block3, "create_each_block");
  function create_fragment9(ctx) {
    let div;
    let each_value = ensure_array_like(fetch_response_default);
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block3(get_each_context3(ctx, each_value, i));
    }
    return {
      c() {
        div = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(div, "class", "btn-group mb-3");
        attr(div, "role", "group");
        attr(div, "aria-label", "Http Methods");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div, null);
          }
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & /*$value*/
        1) {
          each_value = ensure_array_like(fetch_response_default);
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context3(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block3(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(div, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(div);
        }
        destroy_each(each_blocks, detaching);
      }
    };
  }
  __name(create_fragment9, "create_fragment");
  function instance9($$self, $$props, $$invalidate) {
    let $value;
    let { api } = $$props;
    let { field } = $$props;
    let value = api.signal(field.id);
    component_subscribe($$self, value, (value2) => $$invalidate(0, $value = value2));
    const $$binding_groups = [[]];
    function input_change_handler() {
      $value = this.__value;
      value.set($value);
    }
    __name(input_change_handler, "input_change_handler");
    $$self.$$set = ($$props2) => {
      if ("api" in $$props2)
        $$invalidate(2, api = $$props2.api);
      if ("field" in $$props2)
        $$invalidate(3, field = $$props2.field);
    };
    return [$value, value, api, field, input_change_handler, $$binding_groups];
  }
  __name(instance9, "instance");
  var FetchResponse = class extends SvelteComponent {
    static {
      __name(this, "FetchResponse");
    }
    constructor(options) {
      super();
      init(this, options, instance9, create_fragment9, safe_not_equal, { api: 2, field: 3 });
    }
  };
  var FetchResponse_default = FetchResponse;

  // plug-ins/components/fetch/Fetch.svelte
  function get_each_context4(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[21] = list[i];
    child_ctx[23] = i;
    return child_ctx;
  }
  __name(get_each_context4, "get_each_context");
  function create_each_block4(ctx) {
    let switch_instance;
    let switch_instance_anchor;
    let current;
    var switch_value = (
      /*components*/
      ctx[9][
        /*field*/
        ctx[21].type
      ]
    );
    function switch_props(ctx2, dirty) {
      return {
        props: {
          field: (
            /*field*/
            ctx2[21]
          ),
          api: (
            /*api*/
            ctx2[0]
          )
        }
      };
    }
    __name(switch_props, "switch_props");
    if (switch_value) {
      switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
    }
    return {
      c() {
        if (switch_instance)
          create_component(switch_instance.$$.fragment);
        switch_instance_anchor = empty();
      },
      m(target, anchor) {
        if (switch_instance)
          mount_component(switch_instance, target, anchor);
        insert(target, switch_instance_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & /*$fields*/
        2 && switch_value !== (switch_value = /*components*/
        ctx2[9][
          /*field*/
          ctx2[21].type
        ])) {
          if (switch_instance) {
            group_outros();
            const old_component = switch_instance;
            transition_out(old_component.$$.fragment, 1, 0, () => {
              destroy_component(old_component, 1);
            });
            check_outros();
          }
          if (switch_value) {
            switch_instance = construct_svelte_component(switch_value, switch_props(ctx2, dirty));
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
          } else {
            switch_instance = null;
          }
        } else if (switch_value) {
          const switch_instance_changes = {};
          if (dirty & /*$fields*/
          2)
            switch_instance_changes.field = /*field*/
            ctx2[21];
          if (dirty & /*api*/
          1)
            switch_instance_changes.api = /*api*/
            ctx2[0];
          switch_instance.$set(switch_instance_changes);
        }
      },
      i(local) {
        if (current)
          return;
        if (switch_instance)
          transition_in(switch_instance.$$.fragment, local);
        current = true;
      },
      o(local) {
        if (switch_instance)
          transition_out(switch_instance.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(switch_instance_anchor);
        }
        if (switch_instance)
          destroy_component(switch_instance, detaching);
      }
    };
  }
  __name(create_each_block4, "create_each_block");
  function create_fragment10(ctx) {
    let div4;
    let div0;
    let t0;
    let t1;
    let t2_value = parseInt(
      /*$w*/
      ctx[5]
    ) + "";
    let t2;
    let t3;
    let t4_value = parseInt(
      /*$h*/
      ctx[6]
    ) + "";
    let t4;
    let t5;
    let button0;
    let api_makeMovable_action;
    let t6;
    let div2;
    let p;
    let t7;
    let t8;
    let t9;
    let div1;
    let input;
    let api_stopWheel_action;
    let t10;
    let div3;
    let t11;
    let t12;
    let button1;
    let api_makeResizable_action;
    let div4_class_value;
    let current;
    let mounted;
    let dispose;
    let each_value = ensure_array_like(
      /*$fields*/
      ctx[1]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block4(get_each_context4(ctx, each_value, i));
    }
    const out = /* @__PURE__ */ __name((i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    }), "out");
    return {
      c() {
        div4 = element("div");
        div0 = element("div");
        t0 = text2(
          /*$caption*/
          ctx[4]
        );
        t1 = text2(" (");
        t2 = text2(t2_value);
        t3 = text2("x");
        t4 = text2(t4_value);
        t5 = text2(")\n    ");
        button0 = element("button");
        button0.innerHTML = `<i class="bi bi-x"></i>`;
        t6 = space();
        div2 = element("div");
        p = element("p");
        t7 = text2(
          /*$text*/
          ctx[7]
        );
        t8 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t9 = space();
        div1 = element("div");
        input = element("input");
        t10 = space();
        div3 = element("div");
        t11 = text2(
          /*$status*/
          ctx[8]
        );
        t12 = space();
        button1 = element("button");
        button1.innerHTML = `<i class="bi bi-grip-horizontal"></i>`;
        attr(button0, "type", "button");
        attr(button0, "class", "btn opacity-50");
        set_style(button0, "position", "absolute");
        set_style(button0, "right", "0");
        set_style(button0, "top", "0");
        set_style(button0, "padding", ".5rem");
        attr(button0, "aria-label", "Close");
        attr(div0, "class", "card-header user-select-none tx-hi");
        toggle_class(
          div0,
          "text-warning",
          /*$selected*/
          ctx[3]
        );
        attr(input, "class", "btn btn-primary tx-hi");
        attr(input, "type", "button");
        input.value = "Run";
        attr(div1, "class", "mb-3");
        attr(div2, "class", "card-body overflow-auto tx-lo");
        attr(button1, "type", "button");
        attr(button1, "class", "btn opacity-50 outline-none float-end p-0");
        attr(button1, "aria-label", "Resize");
        attr(div3, "class", "card-footer text-body-secondary tx-hi py-0 px-1");
        attr(div4, "class", div4_class_value = "card alert-" + /*$context*/
        ctx[2] + " h-100 m-0 tx-bg");
        toggle_class(
          div4,
          "active",
          /*$selected*/
          ctx[3]
        );
      },
      m(target, anchor) {
        insert(target, div4, anchor);
        append(div4, div0);
        append(div0, t0);
        append(div0, t1);
        append(div0, t2);
        append(div0, t3);
        append(div0, t4);
        append(div0, t5);
        append(div0, button0);
        append(div4, t6);
        append(div4, div2);
        append(div2, p);
        append(p, t7);
        append(div2, t8);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div2, null);
          }
        }
        append(div2, t9);
        append(div2, div1);
        append(div1, input);
        append(div4, t10);
        append(div4, div3);
        append(div3, t11);
        append(div3, t12);
        append(div3, button1);
        current = true;
        if (!mounted) {
          dispose = [
            listen(
              button0,
              "click",
              /*click_handler*/
              ctx[19]
            ),
            action_destroyer(api_makeMovable_action = /*api*/
            ctx[0].makeMovable(div0)),
            listen(input, "click", function() {
              if (is_function(
                /*api*/
                ctx[0].execute()
              ))
                ctx[0].execute().apply(this, arguments);
            }),
            action_destroyer(api_stopWheel_action = /*api*/
            ctx[0].stopWheel(div2)),
            action_destroyer(api_makeResizable_action = /*api*/
            ctx[0].makeResizable(button1))
          ];
          mounted = true;
        }
      },
      p(new_ctx, [dirty]) {
        ctx = new_ctx;
        if (!current || dirty & /*$caption*/
        16)
          set_data(
            t0,
            /*$caption*/
            ctx[4]
          );
        if ((!current || dirty & /*$w*/
        32) && t2_value !== (t2_value = parseInt(
          /*$w*/
          ctx[5]
        ) + ""))
          set_data(t2, t2_value);
        if ((!current || dirty & /*$h*/
        64) && t4_value !== (t4_value = parseInt(
          /*$h*/
          ctx[6]
        ) + ""))
          set_data(t4, t4_value);
        if (!current || dirty & /*$selected*/
        8) {
          toggle_class(
            div0,
            "text-warning",
            /*$selected*/
            ctx[3]
          );
        }
        if (!current || dirty & /*$text*/
        128)
          set_data(
            t7,
            /*$text*/
            ctx[7]
          );
        if (dirty & /*components, $fields, api*/
        515) {
          each_value = ensure_array_like(
            /*$fields*/
            ctx[1]
          );
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context4(ctx, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block4(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(div2, t9);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
        if (!current || dirty & /*$status*/
        256)
          set_data(
            t11,
            /*$status*/
            ctx[8]
          );
        if (!current || dirty & /*$context*/
        4 && div4_class_value !== (div4_class_value = "card alert-" + /*$context*/
        ctx[2] + " h-100 m-0 tx-bg")) {
          attr(div4, "class", div4_class_value);
        }
        if (!current || dirty & /*$context, $selected*/
        12) {
          toggle_class(
            div4,
            "active",
            /*$selected*/
            ctx[3]
          );
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(div4);
        }
        destroy_each(each_blocks, detaching);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  __name(create_fragment10, "create_fragment");
  var a = 1;
  var b = 2;
  function instance10($$self, $$props, $$invalidate) {
    let c;
    let $fields;
    let $context;
    let $selected;
    let $caption;
    let $w;
    let $h;
    let $text;
    let $status;
    const components3 = { WebUrl: WebUrl_default, HttpMethod: HttpMethod_default, FetchResponse: FetchResponse_default };
    let { api } = $$props;
    const context = api.signal("context");
    component_subscribe($$self, context, (value) => $$invalidate(2, $context = value));
    const caption = api.signal("caption");
    component_subscribe($$self, caption, (value) => $$invalidate(4, $caption = value));
    const text3 = api.signal("text");
    component_subscribe($$self, text3, (value) => $$invalidate(7, $text = value));
    const status = api.signal("status");
    component_subscribe($$self, status, (value) => $$invalidate(8, $status = value));
    const fields = api.signal("fields");
    component_subscribe($$self, fields, (value) => $$invalidate(1, $fields = value));
    const w = api.signal("w");
    component_subscribe($$self, w, (value) => $$invalidate(5, $w = value));
    const h = api.signal("h");
    component_subscribe($$self, h, (value) => $$invalidate(6, $h = value));
    const x = api.signal("h");
    const selected = api.signal("selected");
    component_subscribe($$self, selected, (value) => $$invalidate(3, $selected = value));
    onMount(() => {
      console.log("the component has mounted", $fields);
    });
    const click_handler = /* @__PURE__ */ __name(() => api.removeApplication(), "click_handler");
    $$self.$$set = ($$props2) => {
      if ("api" in $$props2)
        $$invalidate(0, api = $$props2.api);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*api, c*/
      262145) {
        $:
          api.send("out", { a, b, c });
      }
      if ($$self.$$.dirty & /*api*/
      1) {
        $:
          api.send("a", a);
      }
      if ($$self.$$.dirty & /*api*/
      1) {
        $:
          api.send("b", b);
      }
      if ($$self.$$.dirty & /*api, c*/
      262145) {
        $:
          api.send("c", c);
      }
      if ($$self.$$.dirty & /*$fields*/
      2) {
        $: {
          console.log("FFF", $fields);
        }
      }
    };
    $:
      $$invalidate(18, c = a + b);
    return [
      api,
      $fields,
      $context,
      $selected,
      $caption,
      $w,
      $h,
      $text,
      $status,
      components3,
      context,
      caption,
      text3,
      status,
      fields,
      w,
      h,
      selected,
      c,
      click_handler
    ];
  }
  __name(instance10, "instance");
  var Fetch = class extends SvelteComponent {
    static {
      __name(this, "Fetch");
    }
    constructor(options) {
      super();
      init(this, options, instance10, create_fragment10, safe_not_equal, { api: 0 });
    }
  };
  var Fetch_default = Fetch;

  // plug-ins/components/Fetch.js
  var Fetch2 = class {
    static {
      __name(this, "Fetch");
    }
    static extends = [Application];
    observables = {
      url: "wwww",
      method: "GET",
      headers: void 0,
      format: "json",
      body: void 0
    };
    serializables = {
      url: "string",
      method: "string",
      format: "string",
      headers: "object",
      body: "object"
    };
    traits = {
      async execute() {
        const response = await fetch(this.url, {
          headers: this.headers,
          method: this.method,
          body: JSON.stringify(this.body)
        });
        const data = await response[this.format]();
        this.send("out", data);
      }
    };
    methods = {
      initialize() {
        this.w = 800;
        this.h = 400;
        this.createSocket("out", 1);
        this.createField({ id: "url", type: "WebUrl", label: "Web Address" });
        this.createField({ id: "method", type: "HttpMethod" });
        this.createField({ id: "format", type: "FetchResponse" });
        this.createSocket("b", 1);
        this.createSocket("c", 1);
      },
      mount() {
        this.foreign = new Instance(Foreign);
        this.createWindowComponent(this.foreign);
        this.component = new Fetch_default({
          target: this.foreign.body,
          props: { api: this }
        });
        this.addDisposable(stopWheel(this.foreign.body));
      },
      destroy() {
        this.component.$destroy();
      }
    };
  };

  // plug-ins/components/Terminal.js
  var { Terminal: Term, FitAddon } = bundle["xterm"];
  var Terminal = class {
    static {
      __name(this, "Terminal");
    }
    static extends = [Application];
    properties = {};
    methods = {
      initialize() {
        this.showCaption = true;
        this.isResizable = true;
        this.b = 5;
        this.createSocket("in", 0);
        this.createSocket("out", 1);
      },
      mount() {
        this.foreign = new Instance(Foreign);
        this.createWindowComponent(this.foreign);
        const term = new Term({
          fontFamily: '"Cascadia Code", Menlo, monospace',
          cursorBlink: true
          // allowProposedApi: true
        });
        this.addDisposable(term);
        const fitAddon = new FitAddon();
        term.loadAddon(fitAddon);
        term.open(this.foreign.body);
        fitAddon.fit();
        fitAddon.fit();
        this.any(["w", "h"], (x) => fitAddon.fit());
        this.foreign.body.addEventListener("wheel", (e) => {
          if (term.buffer.active.baseY > 0) {
            e.preventDefault();
          }
        });
        this.foreign.body.addEventListener("click", (e) => {
          term.focus();
        });
        var command = "";
        const dataHandler = /* @__PURE__ */ __name((e) => {
          console.info("term.onData", e);
          switch (e) {
            case "":
              term.write("^C");
              prompt(term);
              break;
            case "\r":
              runCommand(term, command);
              command = "";
              break;
            case "\x7F":
              if (term._core.buffer.x > 2) {
                term.write("\b \b");
                if (command.length > 0) {
                  command = command.substr(0, command.length - 1);
                }
              }
              break;
            default:
              if (e >= String.fromCharCode(32) && e <= String.fromCharCode(126) || e >= "\xA0") {
                command += e;
                term.write(e);
              }
          }
        }, "dataHandler");
        this.addDisposable(term.onData(dataHandler));
        function prompt(term2) {
          command = "";
          term2.write("\r\n$ ");
        }
        __name(prompt, "prompt");
        function runFakeTerm() {
          if (term._initialized) {
            return;
          }
          term._initialized = true;
          term.prompt = () => {
            term.write("\r\n$ ");
          };
          term.writeln([`${package_default.name} ${package_default.version} terminal subsystem`, `Type in 'help' and press enter to begin.`].join("\r\n"));
          prompt(term);
        }
        __name(runFakeTerm, "runFakeTerm");
        var commands = {
          help: {
            f: () => {
              term.writeln([
                "known commands:",
                ...Object.keys(commands).map((key) => `${key}: ${commands[key].description}`)
              ].join("\r\n"));
              this.getRoot().saveXml();
              term.prompt(term);
            },
            description: "prints information about all the available commands"
          },
          save: {
            f: () => {
              term.writeln(["Gatehring data..."].join("\r\n"));
              const xml = this.getRoot().saveXml();
              term.writeln(xml);
              this.send("out", xml);
              term.writeln(["Save complete", "data printed in the web console"].join("\r\n"));
              term.prompt(term);
            },
            description: "executes the save XML function"
          }
        };
        function runCommand(term2, text3) {
          const command2 = text3.trim().split(" ")[0];
          if (command2.length > 0) {
            term2.writeln("");
            if (command2 in commands) {
              commands[command2].f();
              return;
            }
            term2.writeln(`${command2}: command not found`);
          }
          prompt(term2);
        }
        __name(runCommand, "runCommand");
        runFakeTerm();
        this.pipe.on("in", (packet) => {
          const object = packet.object || this.getRoot().applications.get(packet.id);
          term.writeln(JSON.stringify(packet));
        });
      },
      destroy() {
        console.info(`TODO!!!!!!!!!!!! Terminal Got Destroyed`);
      }
    };
  };

  // plug-ins/components/Editor.js
  var { basicSetup, EditorView } = bundle["codemirror"];
  var { javascript } = bundle["@codemirror/lang-javascript"];
  var { keymap } = bundle["@codemirror/view"];
  var { indentWithTab } = bundle["@codemirror/commands"];
  var { EditorState } = bundle["@codemirror/state"];
  var { oneDark } = bundle["@codemirror/theme-one-dark"];
  var Editor = class {
    static {
      __name(this, "Editor");
    }
    static extends = [Application];
    properties = {};
    methods = {
      initialize() {
        this.showCaption = true;
        this.isResizable = true;
        this.b = 5;
        this.createSocket("in", 0);
        this.createSocket("out", 1);
      },
      mount() {
        this.foreign = new Instance(Foreign);
        this.createWindowComponent(this.foreign);
        this.addDisposable(stopWheel(this.foreign.body));
        const extensions = [
          basicSetup,
          javascript(),
          EditorView.lineWrapping,
          //NOTE: EditorView.lineWrapping does/did not honor code indents
          keymap.of([indentWithTab]),
          EditorView.updateListener.of((update3) => {
            if (update3.docChanged) {
              this.send("out", update3.state.doc.toString());
            }
          }),
          oneDark,
          EditorView.theme({
            // '&': { height: this.h + 'px' },
            ".cm-gutter,.cm-content": { minHeight: "100px" },
            ".cm-scroller": {
              overflow: "auto",
              borderTopLeftRadius: "0px",
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "0px"
            }
          })
        ];
        this.editorView = new EditorView({
          doc: "// Hello!\njavaScript.go('Brrrrr...');\n",
          extensions,
          parent: this.foreign.body
        });
        this.pipe.on("in", (packet) => {
          const descriptor = { changes: { from: 0, to: this.editorView.state.doc.length, insert: new String(packet).toString() } };
          const transaction = this.editorView.state.update(descriptor);
          const update3 = this.editorView.state.update(transaction);
          this.editorView.update([update3]);
        });
        this.addDisposableFromEvent(this.foreign.body, "click", () => this.editorView.focus());
        this.addDisposable(this.editorView);
      }
    };
  };

  // plug-ins/geometrique/midpoint.js
  function midpoint({ x1, y1, x2, y2 }) {
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2;
    return { cx, cy };
  }
  __name(midpoint, "midpoint");

  // plug-ins/geometrique/edgepoint.js
  function edgepoint(cx, cy, r, x1, y1, x2, y2) {
    const angleRadians = Math.atan2(y2 - y1, x2 - x1);
    const x = cx + r * Math.cos(angleRadians);
    const y = cy + r * Math.sin(angleRadians);
    return [x, y];
  }
  __name(edgepoint, "edgepoint");

  // plug-ins/windows/Connector.js
  var Connector = class {
    static {
      __name(this, "Connector");
    }
    static extends = [Component];
    properties = {
      handle: void 0
    };
    observables = {
      // selected: false,
      from: null,
      to: null,
      out: null,
      in: null,
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0
    };
    constraints = {
      mount: {
        ".scene is required to start the universe": function() {
          if (!this.scene) {
            return { error: ".svg not found" };
          }
        }
      }
    };
    methods = {
      initialize() {
        this.el.PrimaryBg = svg.line({
          name: this.name,
          class: "editor-connector-zone",
          "vector-effect": "non-scaling-stroke"
        });
        this.handle = this.el.PrimaryBg;
        this.el.Primary = svg.line({
          name: this.name,
          class: "editor-connector",
          "vector-effect": "non-scaling-stroke",
          "stroke-linecap": "round",
          style: { "pointer-events": "none" }
        });
        this.el.Midpoint = svg.circle({
          name: this.name,
          class: "editor-connector-midpoint",
          "vector-effect": "non-scaling-stroke",
          style: { "pointer-events": "none" },
          r: 4
        });
      },
      mount() {
        this.on("selected", (selected) => selected ? this.el.Primary.classList.add("selected") : this.el.Primary.classList.remove("selected"));
        this.on("selected", (selected) => selected ? this.el.Midpoint.classList.add("selected") : this.el.Midpoint.classList.remove("selected"));
        this.on("name", (name) => update(this.el.Primary, { name }));
        this.on("node", (node) => {
          node.on("from", (v) => this.from = v);
          node.on("to", (v) => this.to = v);
          node.on("out", (v) => this.out = v);
          node.on("in", (v) => this.in = v);
        });
        this.any("from out", ({ from: nodeId, out: portName }) => {
          const socketId = [nodeId, portName].join("/");
          const socket = this.getApplication().socketRegistry.get(socketId);
          socket.on("x", (x) => this.x1 = x);
          socket.on("y", (y) => this.y1 = y);
        });
        this.any("to in", ({ to: nodeId, in: portName }) => {
          const socketId = [nodeId, portName].join("/");
          const socket = this.getApplication().socketRegistry.get(socketId);
          socket.on("x", (x) => this.x2 = x);
          socket.on("y", (y) => this.y2 = y);
        });
        this.connectionId = null;
        this.all("from out to in", (o) => {
          let connectionId = [o.from, o.out, o.to, o.in].join("+");
          if (this.connectionId == connectionId) {
            return;
          }
          let connect = [o.from, o.out, o.to, o.in].every((i) => i);
          if (connect) {
            const socket1 = [o.from, o.out].join("/");
            const socket2 = [o.to, o.in].join("/");
            const control1 = this.getApplication().socketRegistry.get(socket1).control;
            const control2 = this.getApplication().socketRegistry.get(socket2).control;
            this.addDisposableFromEmitter(control1.pipe, o.out, (packet) => control2.pipe.emit(o.in, packet));
            this.connectionId = connectionId;
          }
        });
        this.any(["x1", "y1", "x2", "y2"], (packet) => update(this.el.Midpoint, midpoint(packet)));
        this.any(["x1", "y1", "x2", "y2"], ({ x1, y1, x2, y2 }) => {
          const [x3, y3] = edgepoint(x1, y1, 20, x1, y1, x2, y2);
          const [x4, y4] = edgepoint(x2, y2, -20, x1, y1, x2, y2);
          update(this.el.PrimaryBg, { x1: x3, y1: y3, x2: x4, y2: y4 });
          update(this.el.Primary, { x1: x3, y1: y3, x2: x4, y2: y4 });
        });
        this.appendElements();
      }
    };
  };

  // plug-ins/components/Pipe.js
  var Pipe2 = class {
    static {
      __name(this, "Pipe");
    }
    static extends = [Window];
    properties = {};
    serializables = {
      from: "string",
      to: "string",
      out: "string",
      in: "string"
    };
    methods = {
      initialize() {
        this.showCaption = false;
        this.isResizable = false;
      },
      mount() {
        this.connector = new Instance(Connector, {
          scene: this.scene,
          parent: this,
          from: this.node.from,
          to: this.node.to,
          out: this.node.out,
          in: this.node.in
        });
        const select = new Select({
          component: this,
          handle: this.connector.handle
        });
        this.addDisposable(select);
        this.on("selected", (v) => this.connector.selected = v);
        this.node.on("from", (v) => this.pipe.from = v);
        this.node.on("to", (v) => this.pipe.to = v);
        this.node.on("out", (v) => this.pipe.out = v);
        this.node.on("in", (v) => this.pipe.in = v);
        this.connector.start();
      },
      clean() {
        this.connector.stop();
      },
      destroy() {
      }
    };
  };

  // node_modules/svelte/src/runtime/easing/index.js
  function cubicOut(t) {
    const f = t - 1;
    return f * f * f + 1;
  }
  __name(cubicOut, "cubicOut");
  function quintOut(t) {
    return --t * t * t * t * t + 1;
  }
  __name(quintOut, "quintOut");

  // node_modules/svelte/src/runtime/transition/index.js
  function slide(node, { delay = 0, duration = 400, easing = cubicOut, axis = "y" } = {}) {
    const style = getComputedStyle(node);
    const opacity = +style.opacity;
    const primary_property = axis === "y" ? "height" : "width";
    const primary_property_value = parseFloat(style[primary_property]);
    const secondary_properties = axis === "y" ? ["top", "bottom"] : ["left", "right"];
    const capitalized_secondary_properties = secondary_properties.map(
      (e) => `${e[0].toUpperCase()}${e.slice(1)}`
    );
    const padding_start_value = parseFloat(style[`padding${capitalized_secondary_properties[0]}`]);
    const padding_end_value = parseFloat(style[`padding${capitalized_secondary_properties[1]}`]);
    const margin_start_value = parseFloat(style[`margin${capitalized_secondary_properties[0]}`]);
    const margin_end_value = parseFloat(style[`margin${capitalized_secondary_properties[1]}`]);
    const border_width_start_value = parseFloat(
      style[`border${capitalized_secondary_properties[0]}Width`]
    );
    const border_width_end_value = parseFloat(
      style[`border${capitalized_secondary_properties[1]}Width`]
    );
    return {
      delay,
      duration,
      easing,
      css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};${primary_property}: ${t * primary_property_value}px;padding-${secondary_properties[0]}: ${t * padding_start_value}px;padding-${secondary_properties[1]}: ${t * padding_end_value}px;margin-${secondary_properties[0]}: ${t * margin_start_value}px;margin-${secondary_properties[1]}: ${t * margin_end_value}px;border-${secondary_properties[0]}-width: ${t * border_width_start_value}px;border-${secondary_properties[1]}-width: ${t * border_width_end_value}px;`
    };
  }
  __name(slide, "slide");

  // plug-ins/components/architecture/Entry.svelte
  function get_each_context5(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[2] = list[i];
    return child_ctx;
  }
  __name(get_each_context5, "get_each_context");
  function create_if_block_1(ctx) {
    let if_block_anchor;
    function select_block_type(ctx2, dirty) {
      if (
        /*open*/
        ctx2[3]
      )
        return create_if_block_2;
      return create_else_block;
    }
    __name(select_block_type, "select_block_type");
    let current_block_type = select_block_type(ctx, -1);
    let if_block = current_block_type(ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx2);
          if (if_block) {
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        }
      },
      d(detaching) {
        if (detaching) {
          detach(if_block_anchor);
        }
        if_block.d(detaching);
      }
    };
  }
  __name(create_if_block_1, "create_if_block_1");
  function create_else_block(ctx) {
    let i;
    let mounted;
    let dispose;
    return {
      c() {
        i = element("i");
        attr(i, "class", "bi bi-caret-right-fill align-top opacity-50");
      },
      m(target, anchor) {
        insert(target, i, anchor);
        if (!mounted) {
          dispose = listen(
            i,
            "click",
            /*click_handler_1*/
            ctx[5]
          );
          mounted = true;
        }
      },
      p: noop,
      d(detaching) {
        if (detaching) {
          detach(i);
        }
        mounted = false;
        dispose();
      }
    };
  }
  __name(create_else_block, "create_else_block");
  function create_if_block_2(ctx) {
    let i;
    let mounted;
    let dispose;
    return {
      c() {
        i = element("i");
        attr(i, "class", "bi bi-caret-down align-top opacity-50");
      },
      m(target, anchor) {
        insert(target, i, anchor);
        if (!mounted) {
          dispose = listen(
            i,
            "click",
            /*click_handler*/
            ctx[4]
          );
          mounted = true;
        }
      },
      p: noop,
      d(detaching) {
        if (detaching) {
          detach(i);
        }
        mounted = false;
        dispose();
      }
    };
  }
  __name(create_if_block_2, "create_if_block_2");
  function create_if_block2(ctx) {
    let ul;
    let each_blocks = [];
    let each_1_lookup = /* @__PURE__ */ new Map();
    let ul_transition;
    let current;
    let each_value = ensure_array_like(
      /*item*/
      ctx[2].children
    );
    const get_key = /* @__PURE__ */ __name((ctx2) => (
      /*item*/
      ctx2[2].id
    ), "get_key");
    for (let i = 0; i < each_value.length; i += 1) {
      let child_ctx = get_each_context5(ctx, each_value, i);
      let key = get_key(child_ctx);
      each_1_lookup.set(key, each_blocks[i] = create_each_block5(key, child_ctx));
    }
    return {
      c() {
        ul = element("ul");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(ul, "class", "list-unstyled ps-4");
      },
      m(target, anchor) {
        insert(target, ul, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(ul, null);
          }
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & /*controller, api, item*/
        7) {
          each_value = ensure_array_like(
            /*item*/
            ctx2[2].children
          );
          group_outros();
          each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, ul, outro_and_destroy_block, create_each_block5, null, get_each_context5);
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        if (local) {
          add_render_callback(() => {
            if (!current)
              return;
            if (!ul_transition)
              ul_transition = create_bidirectional_transition(
                ul,
                slide,
                {
                  delay: 1,
                  duration: 300,
                  easing: quintOut,
                  axis: "y"
                },
                true
              );
            ul_transition.run(1);
          });
        }
        current = true;
      },
      o(local) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        if (local) {
          if (!ul_transition)
            ul_transition = create_bidirectional_transition(
              ul,
              slide,
              {
                delay: 1,
                duration: 300,
                easing: quintOut,
                axis: "y"
              },
              false
            );
          ul_transition.run(0);
        }
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(ul);
        }
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].d();
        }
        if (detaching && ul_transition)
          ul_transition.end();
      }
    };
  }
  __name(create_if_block2, "create_if_block");
  function create_each_block5(key_1, ctx) {
    let first;
    let entry;
    let current;
    entry = new Entry({
      props: {
        controller: (
          /*controller*/
          ctx[1]
        ),
        api: (
          /*api*/
          ctx[0]
        ),
        item: (
          /*item*/
          ctx[2]
        )
      }
    });
    return {
      key: key_1,
      first: null,
      c() {
        first = empty();
        create_component(entry.$$.fragment);
        this.first = first;
      },
      m(target, anchor) {
        insert(target, first, anchor);
        mount_component(entry, target, anchor);
        current = true;
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        const entry_changes = {};
        if (dirty & /*controller*/
        2)
          entry_changes.controller = /*controller*/
          ctx[1];
        if (dirty & /*api*/
        1)
          entry_changes.api = /*api*/
          ctx[0];
        if (dirty & /*item*/
        4)
          entry_changes.item = /*item*/
          ctx[2];
        entry.$set(entry_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(entry.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(entry.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(first);
        }
        destroy_component(entry, detaching);
      }
    };
  }
  __name(create_each_block5, "create_each_block");
  function create_fragment11(ctx) {
    let li;
    let div;
    let t0;
    let span;
    let t1_value = (
      /*item*/
      ctx[2].name + ""
    );
    let t1;
    let t2;
    let small;
    let t3_value = (
      /*item*/
      ctx[2].type + ""
    );
    let t3;
    let t4;
    let i;
    let i_class_value;
    let i_title_value;
    let t5;
    let current;
    let mounted;
    let dispose;
    let if_block0 = (
      /*item*/
      ctx[2].children.length && create_if_block_1(ctx)
    );
    let if_block1 = (
      /*open*/
      ctx[3] && create_if_block2(ctx)
    );
    return {
      c() {
        li = element("li");
        div = element("div");
        if (if_block0)
          if_block0.c();
        t0 = space();
        span = element("span");
        t1 = text2(t1_value);
        t2 = space();
        small = element("small");
        t3 = text2(t3_value);
        t4 = space();
        i = element("i");
        t5 = space();
        if (if_block1)
          if_block1.c();
        attr(span, "class", "ps-2 text-muted");
        set_style(span, "cursor", "pointer");
        attr(i, "class", i_class_value = "bi bi-" + class_icons_default(
          /*item*/
          ctx[2].type
        ) + " text-light ps-2");
        attr(i, "title", i_title_value = /*item*/
        ctx[2].id);
        attr(small, "class", "opacity-50 float-end");
        attr(div, "class", "hoverable-text-light pb-4 rounded");
      },
      m(target, anchor) {
        insert(target, li, anchor);
        append(li, div);
        if (if_block0)
          if_block0.m(div, null);
        append(div, t0);
        append(div, span);
        append(span, t1);
        append(div, t2);
        append(div, small);
        append(small, t3);
        append(small, t4);
        append(small, i);
        append(li, t5);
        if (if_block1)
          if_block1.m(li, null);
        current = true;
        if (!mounted) {
          dispose = listen(
            span,
            "click",
            /*click_handler_2*/
            ctx[6]
          );
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (
          /*item*/
          ctx2[2].children.length
        ) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_1(ctx2);
            if_block0.c();
            if_block0.m(div, t0);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if ((!current || dirty & /*item*/
        4) && t1_value !== (t1_value = /*item*/
        ctx2[2].name + ""))
          set_data(t1, t1_value);
        if ((!current || dirty & /*item*/
        4) && t3_value !== (t3_value = /*item*/
        ctx2[2].type + ""))
          set_data(t3, t3_value);
        if (!current || dirty & /*item*/
        4 && i_class_value !== (i_class_value = "bi bi-" + class_icons_default(
          /*item*/
          ctx2[2].type
        ) + " text-light ps-2")) {
          attr(i, "class", i_class_value);
        }
        if (!current || dirty & /*item*/
        4 && i_title_value !== (i_title_value = /*item*/
        ctx2[2].id)) {
          attr(i, "title", i_title_value);
        }
        if (
          /*open*/
          ctx2[3]
        ) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
            if (dirty & /*open*/
            8) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block2(ctx2);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(li, null);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block1);
        current = true;
      },
      o(local) {
        transition_out(if_block1);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(li);
        }
        if (if_block0)
          if_block0.d();
        if (if_block1)
          if_block1.d();
        mounted = false;
        dispose();
      }
    };
  }
  __name(create_fragment11, "create_fragment");
  function instance11($$self, $$props, $$invalidate) {
    let { item } = $$props;
    let { api } = $$props;
    let { controller } = $$props;
    let open = item.open;
    const click_handler = /* @__PURE__ */ __name(() => $$invalidate(3, open = !open), "click_handler");
    const click_handler_1 = /* @__PURE__ */ __name(() => $$invalidate(3, open = !open), "click_handler_1");
    const click_handler_2 = /* @__PURE__ */ __name(() => api.send("out", { object: item.object }), "click_handler_2");
    $$self.$$set = ($$props2) => {
      if ("item" in $$props2)
        $$invalidate(2, item = $$props2.item);
      if ("api" in $$props2)
        $$invalidate(0, api = $$props2.api);
      if ("controller" in $$props2)
        $$invalidate(1, controller = $$props2.controller);
    };
    return [api, controller, item, open, click_handler, click_handler_1, click_handler_2];
  }
  __name(instance11, "instance");
  var Entry = class extends SvelteComponent {
    static {
      __name(this, "Entry");
    }
    constructor(options) {
      super();
      init(this, options, instance11, create_fragment11, safe_not_equal, { item: 2, api: 0, controller: 1 });
    }
  };
  var Entry_default = Entry;

  // plug-ins/components/architecture/Interface.svelte
  function create_fragment12(ctx) {
    let div9;
    let div0;
    let t0;
    let t1;
    let t2_value = parseInt(
      /*$w*/
      ctx[5]
    ) + "";
    let t2;
    let t3;
    let t4_value = parseInt(
      /*$h*/
      ctx[6]
    ) + "";
    let t4;
    let t5;
    let button0;
    let api_makeMovable_action;
    let t6;
    let div7;
    let div6;
    let div3;
    let div2;
    let div1;
    let button1;
    let t8;
    let button2;
    let t10;
    let div5;
    let div4;
    let ul;
    let entry;
    let api_stopWheel_action;
    let t11;
    let div8;
    let t12;
    let t13;
    let button3;
    let api_makeResizable_action;
    let div9_class_value;
    let current;
    let mounted;
    let dispose;
    entry = new Entry_default({
      props: {
        api: (
          /*api*/
          ctx[1]
        ),
        item: (
          /*$tree*/
          ctx[7]
        )
      }
    });
    return {
      c() {
        div9 = element("div");
        div0 = element("div");
        t0 = text2(
          /*$caption*/
          ctx[4]
        );
        t1 = text2(" (");
        t2 = text2(t2_value);
        t3 = text2("x");
        t4 = text2(t4_value);
        t5 = text2(")\n    ");
        button0 = element("button");
        button0.innerHTML = `<i class="bi bi-x"></i>`;
        t6 = space();
        div7 = element("div");
        div6 = element("div");
        div3 = element("div");
        div2 = element("div");
        div1 = element("div");
        button1 = element("button");
        button1.innerHTML = `<i class="bi bi-vignette me-2"></i> Squelch`;
        t8 = space();
        button2 = element("button");
        button2.innerHTML = `<i class="bi bi-camera me-2"></i> Refresh Snapshot`;
        t10 = space();
        div5 = element("div");
        div4 = element("div");
        ul = element("ul");
        create_component(entry.$$.fragment);
        t11 = space();
        div8 = element("div");
        t12 = text2(
          /*$status*/
          ctx[8]
        );
        t13 = space();
        button3 = element("button");
        button3.innerHTML = `<i class="bi bi-grip-horizontal"></i>`;
        attr(button0, "type", "button");
        attr(button0, "class", "btn opacity-50");
        set_style(button0, "position", "absolute");
        set_style(button0, "right", "0");
        set_style(button0, "top", "0");
        set_style(button0, "padding", ".5rem");
        attr(button0, "aria-label", "Close");
        attr(div0, "class", "card-header user-select-none");
        toggle_class(
          div0,
          "text-warning",
          /*$selected*/
          ctx[3]
        );
        attr(button1, "type", "button");
        attr(button1, "class", "btn btn-outline-secondary");
        attr(button2, "type", "button");
        attr(button2, "class", "btn btn-outline-secondary");
        attr(div1, "class", "btn-group btn-group-sm float-end");
        attr(div2, "class", "col");
        attr(div3, "class", "row");
        attr(ul, "class", "list-unstyled my-3");
        attr(div4, "class", "col");
        attr(div5, "class", "row");
        attr(div6, "class", "container");
        attr(div7, "class", "card-body overflow-auto");
        attr(button3, "type", "button");
        attr(button3, "class", "btn opacity-50");
        set_style(button3, "position", "absolute");
        set_style(button3, "right", "0");
        set_style(button3, "bottom", "0");
        set_style(button3, "padding", ".5rem");
        attr(button3, "aria-label", "Resize");
        attr(div8, "class", "card-footer text-body-secondary");
        attr(div9, "class", div9_class_value = "card alert-" + /*$context*/
        ctx[2] + " h-100 m-0");
        set_style(div9, "overflow-y", "scroll");
        toggle_class(
          div9,
          "active",
          /*$selected*/
          ctx[3]
        );
      },
      m(target, anchor) {
        insert(target, div9, anchor);
        append(div9, div0);
        append(div0, t0);
        append(div0, t1);
        append(div0, t2);
        append(div0, t3);
        append(div0, t4);
        append(div0, t5);
        append(div0, button0);
        append(div9, t6);
        append(div9, div7);
        append(div7, div6);
        append(div6, div3);
        append(div3, div2);
        append(div2, div1);
        append(div1, button1);
        append(div1, t8);
        append(div1, button2);
        append(div6, t10);
        append(div6, div5);
        append(div5, div4);
        append(div4, ul);
        mount_component(entry, ul, null);
        append(div9, t11);
        append(div9, div8);
        append(div8, t12);
        append(div8, t13);
        append(div8, button3);
        current = true;
        if (!mounted) {
          dispose = [
            listen(
              button0,
              "click",
              /*click_handler*/
              ctx[16]
            ),
            action_destroyer(api_makeMovable_action = /*api*/
            ctx[1].makeMovable(div0)),
            listen(
              button2,
              "click",
              /*click_handler_1*/
              ctx[17]
            ),
            action_destroyer(api_stopWheel_action = /*api*/
            ctx[1].stopWheel(div7)),
            action_destroyer(api_makeResizable_action = /*api*/
            ctx[1].makeResizable(button3))
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (!current || dirty & /*$caption*/
        16)
          set_data(
            t0,
            /*$caption*/
            ctx2[4]
          );
        if ((!current || dirty & /*$w*/
        32) && t2_value !== (t2_value = parseInt(
          /*$w*/
          ctx2[5]
        ) + ""))
          set_data(t2, t2_value);
        if ((!current || dirty & /*$h*/
        64) && t4_value !== (t4_value = parseInt(
          /*$h*/
          ctx2[6]
        ) + ""))
          set_data(t4, t4_value);
        if (!current || dirty & /*$selected*/
        8) {
          toggle_class(
            div0,
            "text-warning",
            /*$selected*/
            ctx2[3]
          );
        }
        const entry_changes = {};
        if (dirty & /*api*/
        2)
          entry_changes.api = /*api*/
          ctx2[1];
        if (dirty & /*$tree*/
        128)
          entry_changes.item = /*$tree*/
          ctx2[7];
        entry.$set(entry_changes);
        if (!current || dirty & /*$status*/
        256)
          set_data(
            t12,
            /*$status*/
            ctx2[8]
          );
        if (!current || dirty & /*$context*/
        4 && div9_class_value !== (div9_class_value = "card alert-" + /*$context*/
        ctx2[2] + " h-100 m-0")) {
          attr(div9, "class", div9_class_value);
        }
        if (!current || dirty & /*$context, $selected*/
        12) {
          toggle_class(
            div9,
            "active",
            /*$selected*/
            ctx2[3]
          );
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(entry.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(entry.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(div9);
        }
        destroy_component(entry);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  __name(create_fragment12, "create_fragment");
  var a2 = 1;
  var b2 = 2;
  function instance12($$self, $$props, $$invalidate) {
    let c;
    let $context;
    let $selected;
    let $caption;
    let $w;
    let $h;
    let $tree, $$unsubscribe_tree = noop, $$subscribe_tree = /* @__PURE__ */ __name(() => ($$unsubscribe_tree(), $$unsubscribe_tree = subscribe(tree, ($$value) => $$invalidate(7, $tree = $$value)), tree), "$$subscribe_tree");
    let $status;
    $$self.$$.on_destroy.push(() => $$unsubscribe_tree());
    let { tree } = $$props;
    $$subscribe_tree();
    let { api } = $$props;
    const context = api.signal("context");
    component_subscribe($$self, context, (value) => $$invalidate(2, $context = value));
    const caption = api.signal("caption");
    component_subscribe($$self, caption, (value) => $$invalidate(4, $caption = value));
    const text3 = api.signal("text");
    const status = api.signal("status");
    component_subscribe($$self, status, (value) => $$invalidate(8, $status = value));
    const w = api.signal("w");
    component_subscribe($$self, w, (value) => $$invalidate(5, $w = value));
    const h = api.signal("h");
    component_subscribe($$self, h, (value) => $$invalidate(6, $h = value));
    const x = api.signal("h");
    const selected = api.signal("selected");
    component_subscribe($$self, selected, (value) => $$invalidate(3, $selected = value));
    const click_handler = /* @__PURE__ */ __name(() => api.removeApplication(), "click_handler");
    const click_handler_1 = /* @__PURE__ */ __name(() => tree.snapshot(), "click_handler_1");
    $$self.$$set = ($$props2) => {
      if ("tree" in $$props2)
        $$subscribe_tree($$invalidate(0, tree = $$props2.tree));
      if ("api" in $$props2)
        $$invalidate(1, api = $$props2.api);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*api, c*/
      32770) {
        $:
          api.send("out", { a: a2, b: b2, c });
      }
      if ($$self.$$.dirty & /*api*/
      2) {
        $:
          api.send("a", a2);
      }
      if ($$self.$$.dirty & /*api*/
      2) {
        $:
          api.send("b", b2);
      }
      if ($$self.$$.dirty & /*api, c*/
      32770) {
        $:
          api.send("c", c);
      }
    };
    $:
      $$invalidate(15, c = a2 + b2);
    return [
      tree,
      api,
      $context,
      $selected,
      $caption,
      $w,
      $h,
      $tree,
      $status,
      context,
      caption,
      status,
      w,
      h,
      selected,
      c,
      click_handler,
      click_handler_1
    ];
  }
  __name(instance12, "instance");
  var Interface2 = class extends SvelteComponent {
    static {
      __name(this, "Interface");
    }
    constructor(options) {
      super();
      init(this, options, instance12, create_fragment12, safe_not_equal, { tree: 0, api: 1 });
    }
  };
  var Interface_default2 = Interface2;

  // node_modules/svelte/src/runtime/store/index.js
  var subscriber_queue = [];
  function readable(value, start) {
    return {
      subscribe: writable(value, start).subscribe
    };
  }
  __name(readable, "readable");
  function writable(value, start = noop) {
    let stop;
    const subscribers = /* @__PURE__ */ new Set();
    function set(new_value) {
      if (safe_not_equal(value, new_value)) {
        value = new_value;
        if (stop) {
          const run_queue = !subscriber_queue.length;
          for (const subscriber of subscribers) {
            subscriber[1]();
            subscriber_queue.push(subscriber, value);
          }
          if (run_queue) {
            for (let i = 0; i < subscriber_queue.length; i += 2) {
              subscriber_queue[i][0](subscriber_queue[i + 1]);
            }
            subscriber_queue.length = 0;
          }
        }
      }
    }
    __name(set, "set");
    function update3(fn) {
      set(fn(value));
    }
    __name(update3, "update");
    function subscribe2(run2, invalidate = noop) {
      const subscriber = [run2, invalidate];
      subscribers.add(subscriber);
      if (subscribers.size === 1) {
        stop = start(set, update3) || noop;
      }
      run2(value);
      return () => {
        subscribers.delete(subscriber);
        if (subscribers.size === 0 && stop) {
          stop();
          stop = null;
        }
      };
    }
    __name(subscribe2, "subscribe");
    return { set, update: update3, subscribe: subscribe2 };
  }
  __name(writable, "writable");
  function derived(stores, fn, initial_value) {
    const single = !Array.isArray(stores);
    const stores_array = single ? [stores] : stores;
    if (!stores_array.every(Boolean)) {
      throw new Error("derived() expects stores as input, got a falsy value");
    }
    const auto = fn.length < 2;
    return readable(initial_value, (set, update3) => {
      let started = false;
      const values = [];
      let pending = 0;
      let cleanup = noop;
      const sync = /* @__PURE__ */ __name(() => {
        if (pending) {
          return;
        }
        cleanup();
        const result = fn(single ? values[0] : values, set, update3);
        if (auto) {
          set(result);
        } else {
          cleanup = is_function(result) ? result : noop;
        }
      }, "sync");
      const unsubscribers = stores_array.map(
        (store, i) => subscribe(
          store,
          (value) => {
            values[i] = value;
            pending &= ~(1 << i);
            if (started) {
              sync();
            }
          },
          () => {
            pending |= 1 << i;
          }
        )
      );
      started = true;
      sync();
      return /* @__PURE__ */ __name(function stop() {
        run_all(unsubscribers);
        cleanup();
        started = false;
      }, "stop");
    });
  }
  __name(derived, "derived");

  // plug-ins/components/architecture/stores.js
  function getApplicationTree(component) {
    const { subscribe: subscribe2, update: update3 } = writable({ children: [] });
    function addDirectory({ id, name, type, parent }, depth = 0) {
      const directory = { id, name, type, children: [], object: parent, open: depth > 3 ? false : true };
      depth++;
      if (parent?.children) {
        for (const child of parent.children) {
          directory.children.push(addDirectory({ id: child.id, name: child.name || child.oo.name, type: child.oo.name, parent: child }, depth));
        }
      }
      if (type !== "Workspace" && parent?.applications) {
        for (const element2 of parent.applications) {
          directory.children.push(addDirectory({ id: element2.id, name: element2.name || element2.oo.name, type: element2.oo.name, parent: element2 }, depth));
        }
      }
      return directory;
    }
    __name(addDirectory, "addDirectory");
    const system2 = component.getRoot();
    function snapshot() {
      update3(() => addDirectory({ id: system2.id, name: system2.name, parent: system2, type: system2.oo.name }));
    }
    __name(snapshot, "snapshot");
    snapshot();
    setTimeout(() => snapshot(), 100);
    setTimeout(() => snapshot(), 1e3);
    setTimeout(() => snapshot(), 5e3);
    return {
      subscribe: subscribe2,
      snapshot
    };
  }
  __name(getApplicationTree, "getApplicationTree");
  var stores_default = {
    getApplicationTree
  };

  // plug-ins/components/Architecture.js
  var Architecture = class {
    static {
      __name(this, "Architecture");
    }
    static extends = [Application];
    properties = {};
    methods = {
      initialize() {
        this.createSocket("out", 1);
      },
      mount() {
        this.foreign = new Instance(Foreign);
        this.createWindowComponent(this.foreign);
        this.component = new Interface_default2({
          target: this.foreign.body,
          props: {
            api: this,
            tree: stores_default.getApplicationTree(this)
          }
        });
        this.addDisposable(stopWheel(this.foreign.body));
      },
      destroy() {
        this.component.$destroy();
      }
    };
  };

  // plug-ins/code-tools/index.js
  var import_esprima = __toESM(require_esprima());
  function getFunctionSignature(src) {
    try {
      const response = [];
      src = src.replace(/\?\./g, ".");
      src = src.replace(/\.{3}/g, "spreadOperator:");
      src = src.replace(/ async /g, " ");
      const ast = (0, import_esprima.parseScript)(src, { tolerant: true });
      for (const param of ast.body[0].params) {
        switch (param.type) {
          case "Identifier":
            response.push(param.name);
            break;
          case "AssignmentPattern":
            response.push(param.left.name);
            break;
          case "ArrayPattern":
            response.push(...param.elements.map((o) => o.name));
            break;
          case "ObjectPattern":
            response.push("{...}");
            break;
          default:
            response.push(JSON.stringify(param));
        }
      }
      return response;
    } catch (e) {
      console.error(src);
      console.error(e);
      return ["?"];
    }
  }
  __name(getFunctionSignature, "getFunctionSignature");

  // plug-ins/components/analysis/Interface.svelte
  function get_each_context6(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[24] = list[i];
    child_ctx[26] = i;
    return child_ctx;
  }
  __name(get_each_context6, "get_each_context");
  function get_each_context_1(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[24] = list[i];
    child_ctx[26] = i;
    return child_ctx;
  }
  __name(get_each_context_1, "get_each_context_1");
  function get_if_ctx(ctx) {
    const child_ctx = ctx.slice();
    const constants_0 = "Observables";
    child_ctx[23] = constants_0;
    return child_ctx;
  }
  __name(get_if_ctx, "get_if_ctx");
  function get_each_context_2(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[24] = list[i];
    child_ctx[26] = i;
    return child_ctx;
  }
  __name(get_each_context_2, "get_each_context_2");
  function get_each_context_3(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[24] = list[i];
    child_ctx[26] = i;
    return child_ctx;
  }
  __name(get_each_context_3, "get_each_context_3");
  function get_if_ctx_1(ctx) {
    const child_ctx = ctx.slice();
    const constants_0 = "Method";
    child_ctx[23] = constants_0;
    return child_ctx;
  }
  __name(get_if_ctx_1, "get_if_ctx_1");
  function get_each_context_4(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[24] = list[i];
    child_ctx[26] = i;
    return child_ctx;
  }
  __name(get_each_context_4, "get_each_context_4");
  function get_each_context_5(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[24] = list[i];
    child_ctx[26] = i;
    return child_ctx;
  }
  __name(get_each_context_5, "get_each_context_5");
  function get_if_ctx_2(ctx) {
    const child_ctx = ctx.slice();
    const constants_0 = "Trait";
    child_ctx[23] = constants_0;
    return child_ctx;
  }
  __name(get_if_ctx_2, "get_if_ctx_2");
  function get_each_context_6(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[24] = list[i];
    child_ctx[26] = i;
    return child_ctx;
  }
  __name(get_each_context_6, "get_each_context_6");
  function get_each_context_7(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[24] = list[i];
    child_ctx[26] = i;
    return child_ctx;
  }
  __name(get_each_context_7, "get_each_context_7");
  function get_if_ctx_3(ctx) {
    const child_ctx = ctx.slice();
    const constants_0 = "children";
    child_ctx[23] = constants_0;
    return child_ctx;
  }
  __name(get_if_ctx_3, "get_if_ctx_3");
  function get_each_context_8(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[24] = list[i];
    child_ctx[26] = i;
    return child_ctx;
  }
  __name(get_each_context_8, "get_each_context_8");
  function create_if_block3(ctx) {
    let h3;
    let t0_value = (
      /*object*/
      ctx[0].oo.name + ""
    );
    let t0;
    let t1;
    let small;
    let t2;
    let t3_value = (
      /*object*/
      ctx[0].id + ""
    );
    let t3;
    let t4;
    let span1;
    let t5;
    let div;
    let nav;
    let ol;
    let t6;
    let t7;
    let t8;
    let t9;
    let each_value_8 = ensure_array_like(
      /*object*/
      ctx[0].oo.extends
    );
    let each_blocks = [];
    for (let i = 0; i < each_value_8.length; i += 1) {
      each_blocks[i] = create_each_block_8(get_each_context_8(ctx, each_value_8, i));
    }
    let if_block0 = (
      /*object*/
      ctx[0].children && create_if_block_13(get_if_ctx_3(ctx))
    );
    let if_block1 = (
      /*object*/
      ctx[0] && create_if_block_9(get_if_ctx_2(ctx))
    );
    let if_block2 = (
      /*object*/
      ctx[0] && create_if_block_5(get_if_ctx_1(ctx))
    );
    let if_block3 = (
      /*object*/
      ctx[0] && create_if_block_17(get_if_ctx(ctx))
    );
    return {
      c() {
        h3 = element("h3");
        t0 = text2(t0_value);
        t1 = text2(" Class;\n      ");
        small = element("small");
        t2 = text2("id:");
        t3 = text2(t3_value);
        t4 = space();
        span1 = element("span");
        span1.innerHTML = `<span></span>`;
        t5 = space();
        div = element("div");
        nav = element("nav");
        ol = element("ol");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t6 = space();
        if (if_block0)
          if_block0.c();
        t7 = space();
        if (if_block1)
          if_block1.c();
        t8 = space();
        if (if_block2)
          if_block2.c();
        t9 = space();
        if (if_block3)
          if_block3.c();
        set_style(span1, "font-size", ".92rem");
        attr(small, "class", "text-body-secondary");
        attr(ol, "class", "breadcrumb");
        attr(nav, "aria-label", "breadcrumb");
        attr(div, "class", "");
      },
      m(target, anchor) {
        insert(target, h3, anchor);
        append(h3, t0);
        append(h3, t1);
        append(h3, small);
        append(small, t2);
        append(small, t3);
        append(small, t4);
        append(small, span1);
        insert(target, t5, anchor);
        insert(target, div, anchor);
        append(div, nav);
        append(nav, ol);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(ol, null);
          }
        }
        append(div, t6);
        if (if_block0)
          if_block0.m(div, null);
        append(div, t7);
        if (if_block1)
          if_block1.m(div, null);
        append(div, t8);
        if (if_block2)
          if_block2.m(div, null);
        append(div, t9);
        if (if_block3)
          if_block3.m(div, null);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*object*/
        1 && t0_value !== (t0_value = /*object*/
        ctx2[0].oo.name + ""))
          set_data(t0, t0_value);
        if (dirty[0] & /*object*/
        1 && t3_value !== (t3_value = /*object*/
        ctx2[0].id + ""))
          set_data(t3, t3_value);
        if (dirty[0] & /*object*/
        1) {
          each_value_8 = ensure_array_like(
            /*object*/
            ctx2[0].oo.extends
          );
          let i;
          for (i = 0; i < each_value_8.length; i += 1) {
            const child_ctx = get_each_context_8(ctx2, each_value_8, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block_8(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(ol, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value_8.length;
        }
        if (
          /*object*/
          ctx2[0].children
        ) {
          if (if_block0) {
            if_block0.p(get_if_ctx_3(ctx2), dirty);
          } else {
            if_block0 = create_if_block_13(get_if_ctx_3(ctx2));
            if_block0.c();
            if_block0.m(div, t7);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (
          /*object*/
          ctx2[0]
        ) {
          if (if_block1) {
            if_block1.p(get_if_ctx_2(ctx2), dirty);
          } else {
            if_block1 = create_if_block_9(get_if_ctx_2(ctx2));
            if_block1.c();
            if_block1.m(div, t8);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        if (
          /*object*/
          ctx2[0]
        ) {
          if (if_block2) {
            if_block2.p(get_if_ctx_1(ctx2), dirty);
          } else {
            if_block2 = create_if_block_5(get_if_ctx_1(ctx2));
            if_block2.c();
            if_block2.m(div, t9);
          }
        } else if (if_block2) {
          if_block2.d(1);
          if_block2 = null;
        }
        if (
          /*object*/
          ctx2[0]
        ) {
          if (if_block3) {
            if_block3.p(get_if_ctx(ctx2), dirty);
          } else {
            if_block3 = create_if_block_17(get_if_ctx(ctx2));
            if_block3.c();
            if_block3.m(div, null);
          }
        } else if (if_block3) {
          if_block3.d(1);
          if_block3 = null;
        }
      },
      d(detaching) {
        if (detaching) {
          detach(h3);
          detach(t5);
          detach(div);
        }
        destroy_each(each_blocks, detaching);
        if (if_block0)
          if_block0.d();
        if (if_block1)
          if_block1.d();
        if (if_block2)
          if_block2.d();
        if (if_block3)
          if_block3.d();
      }
    };
  }
  __name(create_if_block3, "create_if_block");
  function create_each_block_8(ctx) {
    let li;
    let i_1;
    let i_1_class_value;
    let t0;
    let t1_value = (
      /*item*/
      ctx[24].name + ""
    );
    let t1;
    return {
      c() {
        li = element("li");
        i_1 = element("i");
        t0 = space();
        t1 = text2(t1_value);
        attr(i_1, "class", i_1_class_value = "bi bi-" + class_icons_default(
          /*item*/
          ctx[24].name
        ) + " text-light pe-2");
        attr(li, "class", "breadcrumb-item");
      },
      m(target, anchor) {
        insert(target, li, anchor);
        append(li, i_1);
        append(li, t0);
        append(li, t1);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*object*/
        1 && i_1_class_value !== (i_1_class_value = "bi bi-" + class_icons_default(
          /*item*/
          ctx2[24].name
        ) + " text-light pe-2")) {
          attr(i_1, "class", i_1_class_value);
        }
        if (dirty[0] & /*object*/
        1 && t1_value !== (t1_value = /*item*/
        ctx2[24].name + ""))
          set_data(t1, t1_value);
      },
      d(detaching) {
        if (detaching) {
          detach(li);
        }
      }
    };
  }
  __name(create_each_block_8, "create_each_block_8");
  function create_if_block_13(ctx) {
    let div1;
    let div0;
    let t0;
    let t1;
    let mounted;
    let dispose;
    function select_block_type(ctx2, dirty) {
      if (
        /*opened*/
        ctx2[2][
          /*feature*/
          ctx2[23]
        ]
      )
        return create_if_block_16;
      return create_else_block_3;
    }
    __name(select_block_type, "select_block_type");
    let current_block_type = select_block_type(ctx, [-1, -1]);
    let if_block0 = current_block_type(ctx);
    function click_handler_1() {
      return (
        /*click_handler_1*/
        ctx[18](
          /*feature*/
          ctx[23]
        )
      );
    }
    __name(click_handler_1, "click_handler_1");
    let if_block1 = (
      /*opened*/
      ctx[2][
        /*feature*/
        ctx[23]
      ] && /*object*/
      ctx[0].children && create_if_block_14(ctx)
    );
    return {
      c() {
        div1 = element("div");
        div0 = element("div");
        if_block0.c();
        t0 = text2("\n              Children");
        t1 = space();
        if (if_block1)
          if_block1.c();
        attr(div0, "class", "card-header");
        attr(div1, "class", "card mb-3");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, div0);
        if_block0.m(div0, null);
        append(div0, t0);
        append(div1, t1);
        if (if_block1)
          if_block1.m(div1, null);
        if (!mounted) {
          dispose = listen(div0, "click", click_handler_1);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (current_block_type !== (current_block_type = select_block_type(ctx, dirty))) {
          if_block0.d(1);
          if_block0 = current_block_type(ctx);
          if (if_block0) {
            if_block0.c();
            if_block0.m(div0, t0);
          }
        }
        if (
          /*opened*/
          ctx[2][
            /*feature*/
            ctx[23]
          ] && /*object*/
          ctx[0].children
        ) {
          if (if_block1) {
            if_block1.p(ctx, dirty);
          } else {
            if_block1 = create_if_block_14(ctx);
            if_block1.c();
            if_block1.m(div1, null);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
      },
      d(detaching) {
        if (detaching) {
          detach(div1);
        }
        if_block0.d();
        if (if_block1)
          if_block1.d();
        mounted = false;
        dispose();
      }
    };
  }
  __name(create_if_block_13, "create_if_block_13");
  function create_else_block_3(ctx) {
    let i;
    return {
      c() {
        i = element("i");
        attr(i, "class", "bi bi-caret-right");
      },
      m(target, anchor) {
        insert(target, i, anchor);
      },
      d(detaching) {
        if (detaching) {
          detach(i);
        }
      }
    };
  }
  __name(create_else_block_3, "create_else_block_3");
  function create_if_block_16(ctx) {
    let i;
    return {
      c() {
        i = element("i");
        attr(i, "class", "bi bi-caret-down-fill");
      },
      m(target, anchor) {
        insert(target, i, anchor);
      },
      d(detaching) {
        if (detaching) {
          detach(i);
        }
      }
    };
  }
  __name(create_if_block_16, "create_if_block_16");
  function create_if_block_14(ctx) {
    let ul;
    let each_value_6 = ensure_array_like(
      /*object*/
      ctx[0].children.raw
    );
    let each_blocks = [];
    for (let i = 0; i < each_value_6.length; i += 1) {
      each_blocks[i] = create_each_block_6(get_each_context_6(ctx, each_value_6, i));
    }
    return {
      c() {
        ul = element("ul");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(ul, "class", "list-group list-group-flush");
      },
      m(target, anchor) {
        insert(target, ul, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(ul, null);
          }
        }
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*object*/
        1) {
          each_value_6 = ensure_array_like(
            /*object*/
            ctx2[0].children.raw
          );
          let i;
          for (i = 0; i < each_value_6.length; i += 1) {
            const child_ctx = get_each_context_6(ctx2, each_value_6, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block_6(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(ul, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value_6.length;
        }
      },
      d(detaching) {
        if (detaching) {
          detach(ul);
        }
        destroy_each(each_blocks, detaching);
      }
    };
  }
  __name(create_if_block_14, "create_if_block_14");
  function create_if_block_15(ctx) {
    let each_1_anchor;
    let each_value_7 = ensure_array_like(
      /*object*/
      ctx[0].pane.applications.raw
    );
    let each_blocks = [];
    for (let i = 0; i < each_value_7.length; i += 1) {
      each_blocks[i] = create_each_block_7(get_each_context_7(ctx, each_value_7, i));
    }
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(target, anchor);
          }
        }
        insert(target, each_1_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*object*/
        1) {
          each_value_7 = ensure_array_like(
            /*object*/
            ctx2[0].pane.applications.raw
          );
          let i;
          for (i = 0; i < each_value_7.length; i += 1) {
            const child_ctx = get_each_context_7(ctx2, each_value_7, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block_7(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value_7.length;
        }
      },
      d(detaching) {
        if (detaching) {
          detach(each_1_anchor);
        }
        destroy_each(each_blocks, detaching);
      }
    };
  }
  __name(create_if_block_15, "create_if_block_15");
  function create_each_block_7(ctx) {
    let li;
    let small;
    let i_1;
    let i_1_class_value;
    let t_value = (
      /*item*/
      ctx[24].oo.name + ""
    );
    let t;
    return {
      c() {
        li = element("li");
        small = element("small");
        i_1 = element("i");
        t = text2(t_value);
        attr(i_1, "class", i_1_class_value = "bi bi-" + class_icons_default(
          /*item*/
          ctx[24].oo.name
        ) + " text-light pe-2");
        attr(li, "class", "list-group-item ps-5");
      },
      m(target, anchor) {
        insert(target, li, anchor);
        append(li, small);
        append(small, i_1);
        append(small, t);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*object*/
        1 && i_1_class_value !== (i_1_class_value = "bi bi-" + class_icons_default(
          /*item*/
          ctx2[24].oo.name
        ) + " text-light pe-2")) {
          attr(i_1, "class", i_1_class_value);
        }
        if (dirty[0] & /*object*/
        1 && t_value !== (t_value = /*item*/
        ctx2[24].oo.name + ""))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching) {
          detach(li);
        }
      }
    };
  }
  __name(create_each_block_7, "create_each_block_7");
  function create_each_block_6(ctx) {
    let li;
    let i_1;
    let i_1_class_value;
    let t0_value = (
      /*item*/
      ctx[24].oo.name + ""
    );
    let t0;
    let t1;
    let if_block_anchor;
    let if_block = (
      /*item*/
      ctx[24].oo.name == "Pane" && create_if_block_15(ctx)
    );
    return {
      c() {
        li = element("li");
        i_1 = element("i");
        t0 = text2(t0_value);
        t1 = space();
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
        attr(i_1, "class", i_1_class_value = "bi bi-" + class_icons_default(
          /*item*/
          ctx[24].oo.name
        ) + " text-light pe-2");
        attr(li, "class", "list-group-item");
      },
      m(target, anchor) {
        insert(target, li, anchor);
        append(li, i_1);
        append(li, t0);
        insert(target, t1, anchor);
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*object*/
        1 && i_1_class_value !== (i_1_class_value = "bi bi-" + class_icons_default(
          /*item*/
          ctx2[24].oo.name
        ) + " text-light pe-2")) {
          attr(i_1, "class", i_1_class_value);
        }
        if (dirty[0] & /*object*/
        1 && t0_value !== (t0_value = /*item*/
        ctx2[24].oo.name + ""))
          set_data(t0, t0_value);
        if (
          /*item*/
          ctx2[24].oo.name == "Pane"
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block_15(ctx2);
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d(detaching) {
        if (detaching) {
          detach(li);
          detach(t1);
          detach(if_block_anchor);
        }
        if (if_block)
          if_block.d(detaching);
      }
    };
  }
  __name(create_each_block_6, "create_each_block_6");
  function create_if_block_9(ctx) {
    let div1;
    let div0;
    let t0;
    let t1;
    let mounted;
    let dispose;
    function select_block_type_1(ctx2, dirty) {
      if (
        /*opened*/
        ctx2[2][
          /*feature*/
          ctx2[23]
        ]
      )
        return create_if_block_12;
      return create_else_block_2;
    }
    __name(select_block_type_1, "select_block_type_1");
    let current_block_type = select_block_type_1(ctx, [-1, -1]);
    let if_block0 = current_block_type(ctx);
    function click_handler_2() {
      return (
        /*click_handler_2*/
        ctx[19](
          /*feature*/
          ctx[23]
        )
      );
    }
    __name(click_handler_2, "click_handler_2");
    let if_block1 = (
      /*opened*/
      ctx[2][
        /*feature*/
        ctx[23]
      ] && create_if_block_10(ctx)
    );
    return {
      c() {
        div1 = element("div");
        div0 = element("div");
        if_block0.c();
        t0 = text2("\n              Traits");
        t1 = space();
        if (if_block1)
          if_block1.c();
        attr(div0, "class", "card-header");
        attr(div1, "class", "card mb-3");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, div0);
        if_block0.m(div0, null);
        append(div0, t0);
        append(div1, t1);
        if (if_block1)
          if_block1.m(div1, null);
        if (!mounted) {
          dispose = listen(div0, "click", click_handler_2);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (current_block_type !== (current_block_type = select_block_type_1(ctx, dirty))) {
          if_block0.d(1);
          if_block0 = current_block_type(ctx);
          if (if_block0) {
            if_block0.c();
            if_block0.m(div0, t0);
          }
        }
        if (
          /*opened*/
          ctx[2][
            /*feature*/
            ctx[23]
          ]
        ) {
          if (if_block1) {
            if_block1.p(ctx, dirty);
          } else {
            if_block1 = create_if_block_10(ctx);
            if_block1.c();
            if_block1.m(div1, null);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
      },
      d(detaching) {
        if (detaching) {
          detach(div1);
        }
        if_block0.d();
        if (if_block1)
          if_block1.d();
        mounted = false;
        dispose();
      }
    };
  }
  __name(create_if_block_9, "create_if_block_9");
  function create_else_block_2(ctx) {
    let i;
    return {
      c() {
        i = element("i");
        attr(i, "class", "bi bi-caret-right");
      },
      m(target, anchor) {
        insert(target, i, anchor);
      },
      d(detaching) {
        if (detaching) {
          detach(i);
        }
      }
    };
  }
  __name(create_else_block_2, "create_else_block_2");
  function create_if_block_12(ctx) {
    let i;
    return {
      c() {
        i = element("i");
        attr(i, "class", "bi bi-caret-down-fill");
      },
      m(target, anchor) {
        insert(target, i, anchor);
      },
      d(detaching) {
        if (detaching) {
          detach(i);
        }
      }
    };
  }
  __name(create_if_block_12, "create_if_block_12");
  function create_if_block_10(ctx) {
    let ul;
    let each_value_4 = ensure_array_like(
      /*object*/
      ctx[0].oo.getTraits()
    );
    let each_blocks = [];
    for (let i = 0; i < each_value_4.length; i += 1) {
      each_blocks[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
    }
    return {
      c() {
        ul = element("ul");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(ul, "class", "list-group list-group-flush");
      },
      m(target, anchor) {
        insert(target, ul, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(ul, null);
          }
        }
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*object*/
        1) {
          each_value_4 = ensure_array_like(
            /*object*/
            ctx2[0].oo.getTraits()
          );
          let i;
          for (i = 0; i < each_value_4.length; i += 1) {
            const child_ctx = get_each_context_4(ctx2, each_value_4, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block_4(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(ul, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value_4.length;
        }
      },
      d(detaching) {
        if (detaching) {
          detach(ul);
        }
        destroy_each(each_blocks, detaching);
      }
    };
  }
  __name(create_if_block_10, "create_if_block_10");
  function create_if_block_11(ctx) {
    let each_1_anchor;
    let each_value_5 = ensure_array_like(
      /*item*/
      ctx[24].data
    );
    let each_blocks = [];
    for (let i = 0; i < each_value_5.length; i += 1) {
      each_blocks[i] = create_each_block_5(get_each_context_5(ctx, each_value_5, i));
    }
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(target, anchor);
          }
        }
        insert(target, each_1_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*object*/
        1) {
          each_value_5 = ensure_array_like(
            /*item*/
            ctx2[24].data
          );
          let i;
          for (i = 0; i < each_value_5.length; i += 1) {
            const child_ctx = get_each_context_5(ctx2, each_value_5, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block_5(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value_5.length;
        }
      },
      d(detaching) {
        if (detaching) {
          detach(each_1_anchor);
        }
        destroy_each(each_blocks, detaching);
      }
    };
  }
  __name(create_if_block_11, "create_if_block_11");
  function create_each_block_5(ctx) {
    let li;
    let small;
    let i_1;
    let i_1_class_value;
    let t0_value = (
      /*item*/
      ctx[24].name + ""
    );
    let t0;
    let t1;
    let t2_value = getFunctionSignature(
      /*item*/
      ctx[24].code
    ).join(", ") + "";
    let t2;
    let t3;
    return {
      c() {
        li = element("li");
        small = element("small");
        i_1 = element("i");
        t0 = text2(t0_value);
        t1 = text2("(");
        t2 = text2(t2_value);
        t3 = text2(")");
        attr(i_1, "class", i_1_class_value = "bi bi-" + class_icons_default(
          /*feature*/
          ctx[23]
        ) + " text-light pe-2");
        attr(li, "class", "list-group-item ps-5");
      },
      m(target, anchor) {
        insert(target, li, anchor);
        append(li, small);
        append(small, i_1);
        append(small, t0);
        append(small, t1);
        append(small, t2);
        append(small, t3);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*object*/
        1 && t0_value !== (t0_value = /*item*/
        ctx2[24].name + ""))
          set_data(t0, t0_value);
        if (dirty[0] & /*object*/
        1 && t2_value !== (t2_value = getFunctionSignature(
          /*item*/
          ctx2[24].code
        ).join(", ") + ""))
          set_data(t2, t2_value);
      },
      d(detaching) {
        if (detaching) {
          detach(li);
        }
      }
    };
  }
  __name(create_each_block_5, "create_each_block_5");
  function create_each_block_4(ctx) {
    let li;
    let i_1;
    let i_1_class_value;
    let t0_value = (
      /*item*/
      ctx[24].name + ""
    );
    let t0;
    let t1;
    let if_block_anchor;
    let if_block = (
      /*item*/
      ctx[24].data && create_if_block_11(ctx)
    );
    return {
      c() {
        li = element("li");
        i_1 = element("i");
        t0 = text2(t0_value);
        t1 = space();
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
        attr(i_1, "class", i_1_class_value = "bi bi-" + class_icons_default(
          /*item*/
          ctx[24].name
        ) + " text-light pe-2");
        attr(li, "class", "list-group-item");
        toggle_class(
          li,
          "opacity-50",
          /*item*/
          ctx[24].data.length == 0
        );
      },
      m(target, anchor) {
        insert(target, li, anchor);
        append(li, i_1);
        append(li, t0);
        insert(target, t1, anchor);
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*object*/
        1 && i_1_class_value !== (i_1_class_value = "bi bi-" + class_icons_default(
          /*item*/
          ctx2[24].name
        ) + " text-light pe-2")) {
          attr(i_1, "class", i_1_class_value);
        }
        if (dirty[0] & /*object*/
        1 && t0_value !== (t0_value = /*item*/
        ctx2[24].name + ""))
          set_data(t0, t0_value);
        if (dirty[0] & /*object*/
        1) {
          toggle_class(
            li,
            "opacity-50",
            /*item*/
            ctx2[24].data.length == 0
          );
        }
        if (
          /*item*/
          ctx2[24].data
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block_11(ctx2);
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d(detaching) {
        if (detaching) {
          detach(li);
          detach(t1);
          detach(if_block_anchor);
        }
        if (if_block)
          if_block.d(detaching);
      }
    };
  }
  __name(create_each_block_4, "create_each_block_4");
  function create_if_block_5(ctx) {
    let div1;
    let div0;
    let t0;
    let t1;
    let mounted;
    let dispose;
    function select_block_type_2(ctx2, dirty) {
      if (
        /*opened*/
        ctx2[2][
          /*feature*/
          ctx2[23]
        ]
      )
        return create_if_block_8;
      return create_else_block_1;
    }
    __name(select_block_type_2, "select_block_type_2");
    let current_block_type = select_block_type_2(ctx, [-1, -1]);
    let if_block0 = current_block_type(ctx);
    function click_handler_3() {
      return (
        /*click_handler_3*/
        ctx[20](
          /*feature*/
          ctx[23]
        )
      );
    }
    __name(click_handler_3, "click_handler_3");
    let if_block1 = (
      /*opened*/
      ctx[2][
        /*feature*/
        ctx[23]
      ] && create_if_block_6(ctx)
    );
    return {
      c() {
        div1 = element("div");
        div0 = element("div");
        if_block0.c();
        t0 = text2("\n              Methods");
        t1 = space();
        if (if_block1)
          if_block1.c();
        attr(div0, "class", "card-header");
        attr(div1, "class", "card mb-3");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, div0);
        if_block0.m(div0, null);
        append(div0, t0);
        append(div1, t1);
        if (if_block1)
          if_block1.m(div1, null);
        if (!mounted) {
          dispose = listen(div0, "click", click_handler_3);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (current_block_type !== (current_block_type = select_block_type_2(ctx, dirty))) {
          if_block0.d(1);
          if_block0 = current_block_type(ctx);
          if (if_block0) {
            if_block0.c();
            if_block0.m(div0, t0);
          }
        }
        if (
          /*opened*/
          ctx[2][
            /*feature*/
            ctx[23]
          ]
        ) {
          if (if_block1) {
            if_block1.p(ctx, dirty);
          } else {
            if_block1 = create_if_block_6(ctx);
            if_block1.c();
            if_block1.m(div1, null);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
      },
      d(detaching) {
        if (detaching) {
          detach(div1);
        }
        if_block0.d();
        if (if_block1)
          if_block1.d();
        mounted = false;
        dispose();
      }
    };
  }
  __name(create_if_block_5, "create_if_block_5");
  function create_else_block_1(ctx) {
    let i;
    return {
      c() {
        i = element("i");
        attr(i, "class", "bi bi-caret-right");
      },
      m(target, anchor) {
        insert(target, i, anchor);
      },
      d(detaching) {
        if (detaching) {
          detach(i);
        }
      }
    };
  }
  __name(create_else_block_1, "create_else_block_1");
  function create_if_block_8(ctx) {
    let i;
    return {
      c() {
        i = element("i");
        attr(i, "class", "bi bi-caret-down-fill");
      },
      m(target, anchor) {
        insert(target, i, anchor);
      },
      d(detaching) {
        if (detaching) {
          detach(i);
        }
      }
    };
  }
  __name(create_if_block_8, "create_if_block_8");
  function create_if_block_6(ctx) {
    let ul;
    let each_value_2 = ensure_array_like(
      /*object*/
      ctx[0].oo.getMethods()
    );
    let each_blocks = [];
    for (let i = 0; i < each_value_2.length; i += 1) {
      each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
    }
    return {
      c() {
        ul = element("ul");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(ul, "class", "list-group list-group-flush");
      },
      m(target, anchor) {
        insert(target, ul, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(ul, null);
          }
        }
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*object*/
        1) {
          each_value_2 = ensure_array_like(
            /*object*/
            ctx2[0].oo.getMethods()
          );
          let i;
          for (i = 0; i < each_value_2.length; i += 1) {
            const child_ctx = get_each_context_2(ctx2, each_value_2, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block_2(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(ul, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value_2.length;
        }
      },
      d(detaching) {
        if (detaching) {
          detach(ul);
        }
        destroy_each(each_blocks, detaching);
      }
    };
  }
  __name(create_if_block_6, "create_if_block_6");
  function create_if_block_7(ctx) {
    let each_1_anchor;
    let each_value_3 = ensure_array_like(
      /*item*/
      ctx[24].data
    );
    let each_blocks = [];
    for (let i = 0; i < each_value_3.length; i += 1) {
      each_blocks[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
    }
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(target, anchor);
          }
        }
        insert(target, each_1_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*object*/
        1) {
          each_value_3 = ensure_array_like(
            /*item*/
            ctx2[24].data
          );
          let i;
          for (i = 0; i < each_value_3.length; i += 1) {
            const child_ctx = get_each_context_3(ctx2, each_value_3, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block_3(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value_3.length;
        }
      },
      d(detaching) {
        if (detaching) {
          detach(each_1_anchor);
        }
        destroy_each(each_blocks, detaching);
      }
    };
  }
  __name(create_if_block_7, "create_if_block_7");
  function create_each_block_3(ctx) {
    let li;
    let small;
    let i_1;
    let i_1_class_value;
    let t_value = (
      /*item*/
      ctx[24].name + ""
    );
    let t;
    return {
      c() {
        li = element("li");
        small = element("small");
        i_1 = element("i");
        t = text2(t_value);
        attr(i_1, "class", i_1_class_value = "bi bi-" + class_icons_default(
          /*feature*/
          ctx[23]
        ) + " text-light pe-2");
        attr(li, "class", "list-group-item ps-5");
      },
      m(target, anchor) {
        insert(target, li, anchor);
        append(li, small);
        append(small, i_1);
        append(small, t);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*object*/
        1 && t_value !== (t_value = /*item*/
        ctx2[24].name + ""))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching) {
          detach(li);
        }
      }
    };
  }
  __name(create_each_block_3, "create_each_block_3");
  function create_each_block_2(ctx) {
    let li;
    let i_1;
    let i_1_class_value;
    let t0_value = (
      /*item*/
      ctx[24].name + ""
    );
    let t0;
    let t1;
    let if_block_anchor;
    let if_block = (
      /*item*/
      ctx[24].data && create_if_block_7(ctx)
    );
    return {
      c() {
        li = element("li");
        i_1 = element("i");
        t0 = text2(t0_value);
        t1 = space();
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
        attr(i_1, "class", i_1_class_value = "bi bi-" + class_icons_default(
          /*item*/
          ctx[24].name
        ) + " text-light pe-2");
        attr(li, "class", "list-group-item");
      },
      m(target, anchor) {
        insert(target, li, anchor);
        append(li, i_1);
        append(li, t0);
        insert(target, t1, anchor);
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*object*/
        1 && i_1_class_value !== (i_1_class_value = "bi bi-" + class_icons_default(
          /*item*/
          ctx2[24].name
        ) + " text-light pe-2")) {
          attr(i_1, "class", i_1_class_value);
        }
        if (dirty[0] & /*object*/
        1 && t0_value !== (t0_value = /*item*/
        ctx2[24].name + ""))
          set_data(t0, t0_value);
        if (
          /*item*/
          ctx2[24].data
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block_7(ctx2);
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d(detaching) {
        if (detaching) {
          detach(li);
          detach(t1);
          detach(if_block_anchor);
        }
        if (if_block)
          if_block.d(detaching);
      }
    };
  }
  __name(create_each_block_2, "create_each_block_2");
  function create_if_block_17(ctx) {
    let div1;
    let div0;
    let t0;
    let t1;
    let mounted;
    let dispose;
    function select_block_type_3(ctx2, dirty) {
      if (
        /*opened*/
        ctx2[2][
          /*feature*/
          ctx2[23]
        ]
      )
        return create_if_block_4;
      return create_else_block2;
    }
    __name(select_block_type_3, "select_block_type_3");
    let current_block_type = select_block_type_3(ctx, [-1, -1]);
    let if_block0 = current_block_type(ctx);
    function click_handler_4() {
      return (
        /*click_handler_4*/
        ctx[21](
          /*feature*/
          ctx[23]
        )
      );
    }
    __name(click_handler_4, "click_handler_4");
    let if_block1 = (
      /*opened*/
      ctx[2][
        /*feature*/
        ctx[23]
      ] && create_if_block_22(ctx)
    );
    return {
      c() {
        div1 = element("div");
        div0 = element("div");
        if_block0.c();
        t0 = text2("\n              Observables");
        t1 = space();
        if (if_block1)
          if_block1.c();
        attr(div0, "class", "card-header");
        attr(div1, "class", "card mb-3");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, div0);
        if_block0.m(div0, null);
        append(div0, t0);
        append(div1, t1);
        if (if_block1)
          if_block1.m(div1, null);
        if (!mounted) {
          dispose = listen(div0, "click", click_handler_4);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (current_block_type !== (current_block_type = select_block_type_3(ctx, dirty))) {
          if_block0.d(1);
          if_block0 = current_block_type(ctx);
          if (if_block0) {
            if_block0.c();
            if_block0.m(div0, t0);
          }
        }
        if (
          /*opened*/
          ctx[2][
            /*feature*/
            ctx[23]
          ]
        ) {
          if (if_block1) {
            if_block1.p(ctx, dirty);
          } else {
            if_block1 = create_if_block_22(ctx);
            if_block1.c();
            if_block1.m(div1, null);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
      },
      d(detaching) {
        if (detaching) {
          detach(div1);
        }
        if_block0.d();
        if (if_block1)
          if_block1.d();
        mounted = false;
        dispose();
      }
    };
  }
  __name(create_if_block_17, "create_if_block_1");
  function create_else_block2(ctx) {
    let i;
    return {
      c() {
        i = element("i");
        attr(i, "class", "bi bi-caret-right");
      },
      m(target, anchor) {
        insert(target, i, anchor);
      },
      d(detaching) {
        if (detaching) {
          detach(i);
        }
      }
    };
  }
  __name(create_else_block2, "create_else_block");
  function create_if_block_4(ctx) {
    let i;
    return {
      c() {
        i = element("i");
        attr(i, "class", "bi bi-caret-down-fill");
      },
      m(target, anchor) {
        insert(target, i, anchor);
      },
      d(detaching) {
        if (detaching) {
          detach(i);
        }
      }
    };
  }
  __name(create_if_block_4, "create_if_block_4");
  function create_if_block_22(ctx) {
    let ul;
    let each_value = ensure_array_like(
      /*object*/
      ctx[0].oo.getObservables()
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block6(get_each_context6(ctx, each_value, i));
    }
    return {
      c() {
        ul = element("ul");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(ul, "class", "list-group list-group-flush");
      },
      m(target, anchor) {
        insert(target, ul, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(ul, null);
          }
        }
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*object*/
        1) {
          each_value = ensure_array_like(
            /*object*/
            ctx2[0].oo.getObservables()
          );
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context6(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block6(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(ul, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      d(detaching) {
        if (detaching) {
          detach(ul);
        }
        destroy_each(each_blocks, detaching);
      }
    };
  }
  __name(create_if_block_22, "create_if_block_2");
  function create_if_block_3(ctx) {
    let each_1_anchor;
    let each_value_1 = ensure_array_like(
      /*item*/
      ctx[24].data
    );
    let each_blocks = [];
    for (let i = 0; i < each_value_1.length; i += 1) {
      each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    }
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(target, anchor);
          }
        }
        insert(target, each_1_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*object*/
        1) {
          each_value_1 = ensure_array_like(
            /*item*/
            ctx2[24].data
          );
          let i;
          for (i = 0; i < each_value_1.length; i += 1) {
            const child_ctx = get_each_context_1(ctx2, each_value_1, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block_1(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value_1.length;
        }
      },
      d(detaching) {
        if (detaching) {
          detach(each_1_anchor);
        }
        destroy_each(each_blocks, detaching);
      }
    };
  }
  __name(create_if_block_3, "create_if_block_3");
  function create_each_block_1(ctx) {
    let li;
    let small;
    let i_1;
    let i_1_class_value;
    let t_value = (
      /*item*/
      ctx[24].name + ""
    );
    let t;
    return {
      c() {
        li = element("li");
        small = element("small");
        i_1 = element("i");
        t = text2(t_value);
        attr(i_1, "class", i_1_class_value = "bi bi-" + class_icons_default(
          /*feature*/
          ctx[23]
        ) + " text-light pe-2");
        attr(li, "class", "list-group-item ps-5");
      },
      m(target, anchor) {
        insert(target, li, anchor);
        append(li, small);
        append(small, i_1);
        append(small, t);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*object*/
        1 && t_value !== (t_value = /*item*/
        ctx2[24].name + ""))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching) {
          detach(li);
        }
      }
    };
  }
  __name(create_each_block_1, "create_each_block_1");
  function create_each_block6(ctx) {
    let li;
    let i_1;
    let i_1_class_value;
    let t0_value = (
      /*item*/
      ctx[24].name + ""
    );
    let t0;
    let t1;
    let if_block_anchor;
    let if_block = (
      /*item*/
      ctx[24].data && create_if_block_3(ctx)
    );
    return {
      c() {
        li = element("li");
        i_1 = element("i");
        t0 = text2(t0_value);
        t1 = space();
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
        attr(i_1, "class", i_1_class_value = "bi bi-" + class_icons_default(
          /*item*/
          ctx[24].name
        ) + " text-light pe-2");
        attr(li, "class", "list-group-item");
      },
      m(target, anchor) {
        insert(target, li, anchor);
        append(li, i_1);
        append(li, t0);
        insert(target, t1, anchor);
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*object*/
        1 && i_1_class_value !== (i_1_class_value = "bi bi-" + class_icons_default(
          /*item*/
          ctx2[24].name
        ) + " text-light pe-2")) {
          attr(i_1, "class", i_1_class_value);
        }
        if (dirty[0] & /*object*/
        1 && t0_value !== (t0_value = /*item*/
        ctx2[24].name + ""))
          set_data(t0, t0_value);
        if (
          /*item*/
          ctx2[24].data
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block_3(ctx2);
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d(detaching) {
        if (detaching) {
          detach(li);
          detach(t1);
          detach(if_block_anchor);
        }
        if (if_block)
          if_block.d(detaching);
      }
    };
  }
  __name(create_each_block6, "create_each_block");
  function create_fragment13(ctx) {
    let div3;
    let div0;
    let t0;
    let t1;
    let t2_value = parseInt(
      /*$w*/
      ctx[6]
    ) + "";
    let t2;
    let t3;
    let t4_value = parseInt(
      /*$h*/
      ctx[7]
    ) + "";
    let t4;
    let t5;
    let button0;
    let api_makeMovable_action;
    let t6;
    let div1;
    let api_stopWheel_action;
    let t7;
    let div2;
    let t8;
    let t9;
    let button1;
    let api_makeResizable_action;
    let div3_class_value;
    let mounted;
    let dispose;
    let if_block = (
      /*object*/
      ctx[0] && create_if_block3(ctx)
    );
    return {
      c() {
        div3 = element("div");
        div0 = element("div");
        t0 = text2(
          /*$caption*/
          ctx[5]
        );
        t1 = text2(" (");
        t2 = text2(t2_value);
        t3 = text2("x");
        t4 = text2(t4_value);
        t5 = text2(")\n    ");
        button0 = element("button");
        button0.innerHTML = `<i class="bi bi-x"></i>`;
        t6 = space();
        div1 = element("div");
        if (if_block)
          if_block.c();
        t7 = space();
        div2 = element("div");
        t8 = text2(
          /*$status*/
          ctx[8]
        );
        t9 = space();
        button1 = element("button");
        button1.innerHTML = `<i class="bi bi-grip-horizontal"></i>`;
        attr(button0, "type", "button");
        attr(button0, "class", "btn opacity-50");
        set_style(button0, "position", "absolute");
        set_style(button0, "right", "0");
        set_style(button0, "top", "0");
        set_style(button0, "padding", ".5rem");
        attr(button0, "aria-label", "Close");
        attr(div0, "class", "card-header user-select-none");
        toggle_class(
          div0,
          "text-warning",
          /*$selected*/
          ctx[4]
        );
        attr(div1, "class", "card-body overflow-auto");
        attr(button1, "type", "button");
        attr(button1, "class", "btn opacity-50");
        set_style(button1, "position", "absolute");
        set_style(button1, "right", "0");
        set_style(button1, "bottom", "0");
        set_style(button1, "padding", ".5rem");
        attr(button1, "aria-label", "Resize");
        attr(div2, "class", "card-footer text-body-secondary");
        attr(div3, "class", div3_class_value = "card text-bg-" + /*$context*/
        ctx[3] + " h-100 m-0");
        toggle_class(
          div3,
          "active",
          /*$selected*/
          ctx[4]
        );
      },
      m(target, anchor) {
        insert(target, div3, anchor);
        append(div3, div0);
        append(div0, t0);
        append(div0, t1);
        append(div0, t2);
        append(div0, t3);
        append(div0, t4);
        append(div0, t5);
        append(div0, button0);
        append(div3, t6);
        append(div3, div1);
        if (if_block)
          if_block.m(div1, null);
        append(div3, t7);
        append(div3, div2);
        append(div2, t8);
        append(div2, t9);
        append(div2, button1);
        if (!mounted) {
          dispose = [
            listen(
              button0,
              "click",
              /*click_handler*/
              ctx[17]
            ),
            action_destroyer(api_makeMovable_action = /*api*/
            ctx[1].makeMovable(div0)),
            action_destroyer(api_stopWheel_action = /*api*/
            ctx[1].stopWheel(div1)),
            action_destroyer(api_makeResizable_action = /*api*/
            ctx[1].makeResizable(button1))
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*$caption*/
        32)
          set_data(
            t0,
            /*$caption*/
            ctx2[5]
          );
        if (dirty[0] & /*$w*/
        64 && t2_value !== (t2_value = parseInt(
          /*$w*/
          ctx2[6]
        ) + ""))
          set_data(t2, t2_value);
        if (dirty[0] & /*$h*/
        128 && t4_value !== (t4_value = parseInt(
          /*$h*/
          ctx2[7]
        ) + ""))
          set_data(t4, t4_value);
        if (dirty[0] & /*$selected*/
        16) {
          toggle_class(
            div0,
            "text-warning",
            /*$selected*/
            ctx2[4]
          );
        }
        if (
          /*object*/
          ctx2[0]
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block3(ctx2);
            if_block.c();
            if_block.m(div1, null);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
        if (dirty[0] & /*$status*/
        256)
          set_data(
            t8,
            /*$status*/
            ctx2[8]
          );
        if (dirty[0] & /*$context*/
        8 && div3_class_value !== (div3_class_value = "card text-bg-" + /*$context*/
        ctx2[3] + " h-100 m-0")) {
          attr(div3, "class", div3_class_value);
        }
        if (dirty[0] & /*$context, $selected*/
        24) {
          toggle_class(
            div3,
            "active",
            /*$selected*/
            ctx2[4]
          );
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(div3);
        }
        if (if_block)
          if_block.d();
        mounted = false;
        run_all(dispose);
      }
    };
  }
  __name(create_fragment13, "create_fragment");
  function instance13($$self, $$props, $$invalidate) {
    let $context;
    let $selected;
    let $caption;
    let $w;
    let $h;
    let $status;
    let { stores } = $$props;
    let { object } = $$props;
    let { api } = $$props;
    const context = api.signal("context");
    component_subscribe($$self, context, (value) => $$invalidate(3, $context = value));
    const caption = api.signal("caption");
    component_subscribe($$self, caption, (value) => $$invalidate(5, $caption = value));
    const text3 = api.signal("text");
    const status = api.signal("status");
    component_subscribe($$self, status, (value) => $$invalidate(8, $status = value));
    const w = api.signal("w");
    component_subscribe($$self, w, (value) => $$invalidate(6, $w = value));
    const h = api.signal("h");
    component_subscribe($$self, h, (value) => $$invalidate(7, $h = value));
    const selected = api.signal("selected");
    component_subscribe($$self, selected, (value) => $$invalidate(4, $selected = value));
    let { paneItems } = $$props;
    let opened = {
      children: true,
      Trait: true,
      Method: true,
      Observables: true
    };
    const click_handler = /* @__PURE__ */ __name(() => api.removeApplication(), "click_handler");
    const click_handler_1 = /* @__PURE__ */ __name((feature) => $$invalidate(2, opened[feature] = !opened[feature], opened), "click_handler_1");
    const click_handler_2 = /* @__PURE__ */ __name((feature) => $$invalidate(2, opened[feature] = !opened[feature], opened), "click_handler_2");
    const click_handler_3 = /* @__PURE__ */ __name((feature) => $$invalidate(2, opened[feature] = !opened[feature], opened), "click_handler_3");
    const click_handler_4 = /* @__PURE__ */ __name((feature) => $$invalidate(2, opened[feature] = !opened[feature], opened), "click_handler_4");
    $$self.$$set = ($$props2) => {
      if ("stores" in $$props2)
        $$invalidate(15, stores = $$props2.stores);
      if ("object" in $$props2)
        $$invalidate(0, object = $$props2.object);
      if ("api" in $$props2)
        $$invalidate(1, api = $$props2.api);
      if ("paneItems" in $$props2)
        $$invalidate(16, paneItems = $$props2.paneItems);
    };
    return [
      object,
      api,
      opened,
      $context,
      $selected,
      $caption,
      $w,
      $h,
      $status,
      context,
      caption,
      status,
      w,
      h,
      selected,
      stores,
      paneItems,
      click_handler,
      click_handler_1,
      click_handler_2,
      click_handler_3,
      click_handler_4
    ];
  }
  __name(instance13, "instance");
  var Interface3 = class extends SvelteComponent {
    static {
      __name(this, "Interface");
    }
    constructor(options) {
      super();
      init(
        this,
        options,
        instance13,
        create_fragment13,
        safe_not_equal,
        {
          stores: 15,
          object: 0,
          api: 1,
          paneItems: 16
        },
        null,
        [-1, -1]
      );
    }
  };
  var Interface_default3 = Interface3;

  // plug-ins/components/analysis/stores.js
  function getPaneItems(root) {
    const { subscribe: subscribe2, update: update3 } = writable([]);
    function refresh() {
      const list = [];
      list.push({ label: "Applications", list: root.applications.raw.map((o) => ({ id: o.id, name: o.name, type: o.oo.name })) });
      list.push({ label: "Origins", list: root.origins.raw.map((o) => ({ id: o.id, name: o.name })) });
      update3(() => list);
    }
    __name(refresh, "refresh");
    root.on("origins.changed", () => refresh());
    root.on("applications.changed", () => refresh());
    refresh();
    return {
      subscribe: subscribe2
      // increment
    };
  }
  __name(getPaneItems, "getPaneItems");
  var stores_default2 = {
    getPaneItems
  };

  // plug-ins/components/Analysis.js
  var Analysis = class {
    static {
      __name(this, "Analysis");
    }
    static extends = [Application];
    methods = {
      initialize() {
        this.createSocket("in", 0);
      },
      mount() {
        this.foreign = new Instance(Foreign);
        this.createWindowComponent(this.foreign);
        this.component = new Interface_default3({
          target: this.foreign.body,
          props: {
            api: this,
            object: null,
            paneItems: stores_default2.getPaneItems(this.getRoot())
          }
        });
        this.pipe.on("in", (packet) => {
          const object = packet.object || this.getRoot().applications.get(packet.id);
          this.component.$set({ object });
        });
      },
      destroy() {
        this.component.$destroy();
      }
    };
  };

  // plug-ins/components/alert/Interface.svelte
  function create_fragment14(ctx) {
    let div;
    let button0;
    let t0;
    let button1;
    let api_makeResizable_action;
    let t1;
    let h4;
    let t2;
    let api_makeMovable_action;
    let t3;
    let p0;
    let t4;
    let api_stopWheel_action;
    let t5;
    let hr;
    let t6;
    let p1;
    let t7;
    let div_class_value;
    let mounted;
    let dispose;
    return {
      c() {
        div = element("div");
        button0 = element("button");
        t0 = space();
        button1 = element("button");
        button1.innerHTML = `<i class="bi bi-grip-horizontal"></i>`;
        t1 = space();
        h4 = element("h4");
        t2 = text2(
          /*$caption*/
          ctx[3]
        );
        t3 = space();
        p0 = element("p");
        t4 = text2(
          /*$text*/
          ctx[4]
        );
        t5 = space();
        hr = element("hr");
        t6 = space();
        p1 = element("p");
        t7 = text2(
          /*$note*/
          ctx[5]
        );
        attr(button0, "type", "button");
        attr(button0, "class", "btn-close");
        attr(button0, "aria-label", "Close");
        attr(button1, "type", "button");
        attr(button1, "class", "btn opacity-50");
        set_style(button1, "position", "absolute");
        set_style(button1, "right", "0");
        set_style(button1, "bottom", "0");
        set_style(button1, "padding", ".5rem");
        attr(button1, "aria-label", "Resize");
        attr(h4, "class", "alert-heading user-select-none");
        toggle_class(
          h4,
          "text-warning",
          /*$selected*/
          ctx[2]
        );
        attr(p0, "class", "overflow-auto");
        attr(p1, "class", "mb-0");
        attr(div, "class", div_class_value = "alert alert-" + /*$context*/
        ctx[1] + " alert-dismissible h-100 m-0");
        attr(div, "role", "alert");
        toggle_class(
          div,
          "active",
          /*$selected*/
          ctx[2]
        );
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, button0);
        append(div, t0);
        append(div, button1);
        append(div, t1);
        append(div, h4);
        append(h4, t2);
        append(div, t3);
        append(div, p0);
        append(p0, t4);
        append(div, t5);
        append(div, hr);
        append(div, t6);
        append(div, p1);
        append(p1, t7);
        if (!mounted) {
          dispose = [
            listen(
              button0,
              "click",
              /*click_handler*/
              ctx[11]
            ),
            action_destroyer(api_makeResizable_action = /*api*/
            ctx[0].makeResizable(button1)),
            action_destroyer(api_makeMovable_action = /*api*/
            ctx[0].makeMovable(h4)),
            action_destroyer(api_stopWheel_action = /*api*/
            ctx[0].stopWheel(p0))
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & /*$caption*/
        8)
          set_data(
            t2,
            /*$caption*/
            ctx2[3]
          );
        if (dirty & /*$selected*/
        4) {
          toggle_class(
            h4,
            "text-warning",
            /*$selected*/
            ctx2[2]
          );
        }
        if (dirty & /*$text*/
        16)
          set_data(
            t4,
            /*$text*/
            ctx2[4]
          );
        if (dirty & /*$note*/
        32)
          set_data(
            t7,
            /*$note*/
            ctx2[5]
          );
        if (dirty & /*$context*/
        2 && div_class_value !== (div_class_value = "alert alert-" + /*$context*/
        ctx2[1] + " alert-dismissible h-100 m-0")) {
          attr(div, "class", div_class_value);
        }
        if (dirty & /*$context, $selected*/
        6) {
          toggle_class(
            div,
            "active",
            /*$selected*/
            ctx2[2]
          );
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(div);
        }
        mounted = false;
        run_all(dispose);
      }
    };
  }
  __name(create_fragment14, "create_fragment");
  function instance14($$self, $$props, $$invalidate) {
    let $context;
    let $selected;
    let $caption;
    let $text;
    let $note;
    let { api } = $$props;
    const caption = api.signal("caption");
    component_subscribe($$self, caption, (value) => $$invalidate(3, $caption = value));
    const context = api.signal("context");
    component_subscribe($$self, context, (value) => $$invalidate(1, $context = value));
    const text3 = api.signal("text");
    component_subscribe($$self, text3, (value) => $$invalidate(4, $text = value));
    const note = api.signal("note");
    component_subscribe($$self, note, (value) => $$invalidate(5, $note = value));
    const selected = api.signal("selected");
    component_subscribe($$self, selected, (value) => $$invalidate(2, $selected = value));
    const click_handler = /* @__PURE__ */ __name(() => api.removeApplication(), "click_handler");
    $$self.$$set = ($$props2) => {
      if ("api" in $$props2)
        $$invalidate(0, api = $$props2.api);
    };
    return [
      api,
      $context,
      $selected,
      $caption,
      $text,
      $note,
      caption,
      context,
      text3,
      note,
      selected,
      click_handler
    ];
  }
  __name(instance14, "instance");
  var Interface4 = class extends SvelteComponent {
    static {
      __name(this, "Interface");
    }
    constructor(options) {
      super();
      init(this, options, instance14, create_fragment14, safe_not_equal, { api: 0 });
    }
  };
  var Interface_default4 = Interface4;

  // plug-ins/components/Alert.js
  var Alert = class {
    static {
      __name(this, "Alert");
    }
    static extends = [Application];
    observables = {};
    serializables = {
      caption: "string"
    };
    methods = {
      initialize() {
      },
      mount() {
        this.foreign = new Instance(Foreign);
        this.createWindowComponent(this.foreign);
        this.component = new Interface_default4({
          target: this.foreign.body,
          props: { api: this }
        });
        this.addDisposable(stopWheel(this.foreign.body));
      },
      destroy() {
        this.component.$destroy();
      }
    };
  };

  // plug-ins/components/gradients/Preview.svelte
  function get_each_context7(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[2] = list[i].id;
    child_ctx[3] = list[i].padding;
    child_ctx[4] = list[i].angle;
    child_ctx[6] = list[i].colors;
    child_ctx[26] = list[i].stops;
    child_ctx[5] = list[i].levels;
    return child_ctx;
  }
  __name(get_each_context7, "get_each_context");
  function create_key_block(ctx) {
    let preview;
    let updating_selection;
    let current;
    const preview_spread_levels = [
      { api: (
        /*api*/
        ctx[1]
      ) },
      { id: (
        /*id*/
        ctx[2]
      ) },
      { padding: (
        /*padding*/
        ctx[3]
      ) },
      { angle: (
        /*angle*/
        ctx[4]
      ) },
      { colors: (
        /*colors*/
        ctx[6]
      ) },
      /*stops*/
      ctx[26],
      { levels: (
        /*levels*/
        ctx[5]
      ) }
    ];
    function preview_selection_binding(value) {
      ctx[21](value);
    }
    __name(preview_selection_binding, "preview_selection_binding");
    let preview_props = {};
    for (let i = 0; i < preview_spread_levels.length; i += 1) {
      preview_props = assign(preview_props, preview_spread_levels[i]);
    }
    if (
      /*selection*/
      ctx[0] !== void 0
    ) {
      preview_props.selection = /*selection*/
      ctx[0];
    }
    preview = new Preview({ props: preview_props });
    binding_callbacks.push(() => bind(preview, "selection", preview_selection_binding));
    return {
      c() {
        create_component(preview.$$.fragment);
      },
      m(target, anchor) {
        mount_component(preview, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const preview_changes = dirty & /*api, $levels*/
        4098 ? get_spread_update(preview_spread_levels, [
          dirty & /*api*/
          2 && { api: (
            /*api*/
            ctx2[1]
          ) },
          dirty & /*$levels*/
          4096 && { id: (
            /*id*/
            ctx2[2]
          ) },
          dirty & /*$levels*/
          4096 && { padding: (
            /*padding*/
            ctx2[3]
          ) },
          dirty & /*$levels*/
          4096 && { angle: (
            /*angle*/
            ctx2[4]
          ) },
          dirty & /*$levels*/
          4096 && { colors: (
            /*colors*/
            ctx2[6]
          ) },
          dirty & /*$levels*/
          4096 && get_spread_object(
            /*stops*/
            ctx2[26]
          ),
          dirty & /*$levels*/
          4096 && { levels: (
            /*levels*/
            ctx2[5]
          ) }
        ]) : {};
        if (!updating_selection && dirty & /*selection*/
        1) {
          updating_selection = true;
          preview_changes.selection = /*selection*/
          ctx2[0];
          add_flush_callback(() => updating_selection = false);
        }
        preview.$set(preview_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(preview.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(preview.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(preview, detaching);
      }
    };
  }
  __name(create_key_block, "create_key_block");
  function create_each_block7(ctx) {
    let previous_key = (
      /*colors*/
      ctx[6]
    );
    let key_block_anchor;
    let current;
    let key_block = create_key_block(ctx);
    return {
      c() {
        key_block.c();
        key_block_anchor = empty();
      },
      m(target, anchor) {
        key_block.m(target, anchor);
        insert(target, key_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & /*$levels*/
        4096 && safe_not_equal(previous_key, previous_key = /*colors*/
        ctx2[6])) {
          group_outros();
          transition_out(key_block, 1, 1, noop);
          check_outros();
          key_block = create_key_block(ctx2);
          key_block.c();
          transition_in(key_block, 1);
          key_block.m(key_block_anchor.parentNode, key_block_anchor);
        } else {
          key_block.p(ctx2, dirty);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(key_block);
        current = true;
      },
      o(local) {
        transition_out(key_block);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(key_block_anchor);
        }
        key_block.d(detaching);
      }
    };
  }
  __name(create_each_block7, "create_each_block");
  function create_fragment15(ctx) {
    let div;
    let current;
    let mounted;
    let dispose;
    let each_value = ensure_array_like(
      /*$levels*/
      ctx[12]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block7(get_each_context7(ctx, each_value, i));
    }
    const out = /* @__PURE__ */ __name((i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    }), "out");
    return {
      c() {
        div = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(div, "class", "px-5 p-3");
        set_style(div, "display", "block");
        set_style(
          div,
          "background",
          /*$preview1*/
          ctx[9]
        );
        toggle_class(
          div,
          "m-3",
          /*$padding*/
          ctx[8]
        );
      },
      m(target, anchor) {
        insert(target, div, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div, null);
          }
        }
        current = true;
        if (!mounted) {
          dispose = listen(div, "click", stop_propagation(
            /*click_handler*/
            ctx[22]
          ));
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & /*$levels, api, selection*/
        4099) {
          each_value = ensure_array_like(
            /*$levels*/
            ctx2[12]
          );
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context7(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block7(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(div, null);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
        if (!current || dirty & /*$preview1*/
        512) {
          set_style(
            div,
            "background",
            /*$preview1*/
            ctx2[9]
          );
        }
        if (!current || dirty & /*$padding*/
        256) {
          toggle_class(
            div,
            "m-3",
            /*$padding*/
            ctx2[8]
          );
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(div);
        }
        destroy_each(each_blocks, detaching);
        mounted = false;
        dispose();
      }
    };
  }
  __name(create_fragment15, "create_fragment");
  function instance15($$self, $$props, $$invalidate) {
    let preview1;
    let $poke;
    let $angle, $$unsubscribe_angle = noop, $$subscribe_angle = /* @__PURE__ */ __name(() => ($$unsubscribe_angle(), $$unsubscribe_angle = subscribe(angle, ($$value) => $$invalidate(20, $angle = $$value)), angle), "$$subscribe_angle");
    let $padding, $$unsubscribe_padding = noop, $$subscribe_padding = /* @__PURE__ */ __name(() => ($$unsubscribe_padding(), $$unsubscribe_padding = subscribe(padding, ($$value) => $$invalidate(8, $padding = $$value)), padding), "$$subscribe_padding");
    let $preview1, $$unsubscribe_preview1 = noop, $$subscribe_preview1 = /* @__PURE__ */ __name(() => ($$unsubscribe_preview1(), $$unsubscribe_preview1 = subscribe(preview1, ($$value) => $$invalidate(9, $preview1 = $$value)), preview1), "$$subscribe_preview1");
    let $selection, $$unsubscribe_selection = noop, $$subscribe_selection = /* @__PURE__ */ __name(() => ($$unsubscribe_selection(), $$unsubscribe_selection = subscribe(selection, ($$value) => $$invalidate(10, $selection = $$value)), selection), "$$subscribe_selection");
    let $id, $$unsubscribe_id = noop, $$subscribe_id = /* @__PURE__ */ __name(() => ($$unsubscribe_id(), $$unsubscribe_id = subscribe(id, ($$value) => $$invalidate(11, $id = $$value)), id), "$$subscribe_id");
    let $levels, $$unsubscribe_levels = noop, $$subscribe_levels = /* @__PURE__ */ __name(() => ($$unsubscribe_levels(), $$unsubscribe_levels = subscribe(levels, ($$value) => $$invalidate(12, $levels = $$value)), levels), "$$subscribe_levels");
    $$self.$$.on_destroy.push(() => $$unsubscribe_angle());
    $$self.$$.on_destroy.push(() => $$unsubscribe_padding());
    $$self.$$.on_destroy.push(() => $$unsubscribe_preview1());
    $$self.$$.on_destroy.push(() => $$unsubscribe_selection());
    $$self.$$.on_destroy.push(() => $$unsubscribe_id());
    $$self.$$.on_destroy.push(() => $$unsubscribe_levels());
    let { api } = $$props;
    let { id } = $$props;
    $$subscribe_id();
    let { padding } = $$props;
    $$subscribe_padding();
    let { angle } = $$props;
    $$subscribe_angle();
    let { levels } = $$props;
    $$subscribe_levels();
    let { selection } = $$props;
    $$subscribe_selection();
    let { colors } = $$props;
    let { color0 } = $$props;
    let { color1 } = $$props;
    let { color2 } = $$props;
    let { length0 } = $$props;
    let { length1 } = $$props;
    let { length2 } = $$props;
    const poke = writable(0);
    component_subscribe($$self, poke, (value) => $$invalidate(23, $poke = value));
    const trash = [];
    const knownStops = /* @__PURE__ */ new Set();
    trash.push(colors.subscribe((v) => {
      for (const stop of v) {
        if (!knownStops.has(stop.id)) {
          trash.push(stop.color.subscribe(() => set_store_value(poke, $poke++, $poke)));
          trash.push(stop.length.subscribe(() => set_store_value(poke, $poke++, $poke)));
          knownStops.add(stop.id);
        }
      }
    }));
    onDestroy(() => {
      trash.map((X) => X());
    });
    function preview_selection_binding(value) {
      selection = value;
      $$subscribe_selection($$invalidate(0, selection));
    }
    __name(preview_selection_binding, "preview_selection_binding");
    const click_handler = /* @__PURE__ */ __name(() => set_store_value(selection, $selection = $id, $selection), "click_handler");
    $$self.$$set = ($$props2) => {
      if ("api" in $$props2)
        $$invalidate(1, api = $$props2.api);
      if ("id" in $$props2)
        $$subscribe_id($$invalidate(2, id = $$props2.id));
      if ("padding" in $$props2)
        $$subscribe_padding($$invalidate(3, padding = $$props2.padding));
      if ("angle" in $$props2)
        $$subscribe_angle($$invalidate(4, angle = $$props2.angle));
      if ("levels" in $$props2)
        $$subscribe_levels($$invalidate(5, levels = $$props2.levels));
      if ("selection" in $$props2)
        $$subscribe_selection($$invalidate(0, selection = $$props2.selection));
      if ("colors" in $$props2)
        $$invalidate(6, colors = $$props2.colors);
      if ("color0" in $$props2)
        $$invalidate(14, color0 = $$props2.color0);
      if ("color1" in $$props2)
        $$invalidate(15, color1 = $$props2.color1);
      if ("color2" in $$props2)
        $$invalidate(16, color2 = $$props2.color2);
      if ("length0" in $$props2)
        $$invalidate(17, length0 = $$props2.length0);
      if ("length1" in $$props2)
        $$invalidate(18, length1 = $$props2.length1);
      if ("length2" in $$props2)
        $$invalidate(19, length2 = $$props2.length2);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*angle, colors, $angle*/
      1048656) {
        $:
          $$subscribe_preview1($$invalidate(7, preview1 = derived(
            [
              poke,
              angle,
              colors,
              ...colors.get().map((o) => o.color),
              ...colors.get().map((o) => o.length)
            ],
            () => {
              const pairs = get_store_value(colors).map((o) => [get_store_value(o.color), get_store_value(o.length)]);
              const stops = pairs.map((o) => `${o[0]} ${o[1]}%`).join(", ");
              return `linear-gradient(${$angle}deg, ${stops})`;
            }
          )));
      }
    };
    return [
      selection,
      api,
      id,
      padding,
      angle,
      levels,
      colors,
      preview1,
      $padding,
      $preview1,
      $selection,
      $id,
      $levels,
      poke,
      color0,
      color1,
      color2,
      length0,
      length1,
      length2,
      $angle,
      preview_selection_binding,
      click_handler
    ];
  }
  __name(instance15, "instance");
  var Preview = class extends SvelteComponent {
    static {
      __name(this, "Preview");
    }
    constructor(options) {
      super();
      init(this, options, instance15, create_fragment15, safe_not_equal, {
        api: 1,
        id: 2,
        padding: 3,
        angle: 4,
        levels: 5,
        selection: 0,
        colors: 6,
        color0: 14,
        color1: 15,
        color2: 16,
        length0: 17,
        length1: 18,
        length2: 19
      });
    }
  };
  var Preview_default = Preview;

  // plug-ins/components/gradients/Color.svelte
  var import_chroma_js = __toESM(require_chroma());
  function create_if_block4(ctx) {
    let div1;
    let label0;
    let t0;
    let t1;
    let t2;
    let t3;
    let div0;
    let input0;
    let t4;
    let div3;
    let label1;
    let t6;
    let div2;
    let input1;
    let t7;
    let div5;
    let label2;
    let t9;
    let div4;
    let input2;
    let t10;
    let div7;
    let label3;
    let t12;
    let div6;
    let input3;
    let t13;
    let div9;
    let label4;
    let t15;
    let div8;
    let input4;
    let mounted;
    let dispose;
    return {
      c() {
        div1 = element("div");
        label0 = element("label");
        t0 = text2("length ");
        t1 = text2(
          /*$length*/
          ctx[6]
        );
        t2 = text2("%");
        t3 = space();
        div0 = element("div");
        input0 = element("input");
        t4 = space();
        div3 = element("div");
        label1 = element("label");
        label1.textContent = "perceived lightness";
        t6 = space();
        div2 = element("div");
        input1 = element("input");
        t7 = space();
        div5 = element("div");
        label2 = element("label");
        label2.textContent = "amount of color";
        t9 = space();
        div4 = element("div");
        input2 = element("input");
        t10 = space();
        div7 = element("div");
        label3 = element("label");
        label3.textContent = "hue angle";
        t12 = space();
        div6 = element("div");
        input3 = element("input");
        t13 = space();
        div9 = element("div");
        label4 = element("label");
        label4.textContent = "alpha";
        t15 = space();
        div8 = element("div");
        input4 = element("input");
        attr(label0, "for", "inputLength");
        attr(label0, "class", "col-sm-4 col-form-label py-0 text-muted text-end");
        attr(input0, "id", "inputLength");
        attr(input0, "type", "range");
        attr(input0, "class", "form-range");
        attr(input0, "min", "0");
        attr(input0, "max", "100");
        attr(div0, "class", "col-sm-8");
        attr(div1, "class", "mb-3 row");
        attr(label1, "for", "inputPerceivedLightness");
        attr(label1, "class", "col-sm-4 col-form-label py-0 text-muted text-end");
        attr(input1, "id", "inputPerceivedLightness");
        attr(input1, "type", "range");
        attr(input1, "class", "form-range");
        attr(input1, "min", "0");
        attr(input1, "max", "100");
        attr(div2, "class", "col-sm-8");
        attr(div3, "class", "mb-3 row");
        attr(label2, "for", "inputAmountOfColor");
        attr(label2, "class", "col-sm-4 col-form-label py-0 text-muted text-end");
        attr(input2, "id", "inputAmountOfColor");
        attr(input2, "type", "range");
        attr(input2, "class", "form-range");
        attr(input2, "min", "0");
        attr(input2, "max", "132");
        attr(div4, "class", "col-sm-8");
        attr(div5, "class", "mb-3 row");
        attr(label3, "for", "inputHueAngle");
        attr(label3, "class", "col-sm-4 col-form-label py-0 text-muted text-end");
        attr(input3, "id", "inputHueAngle");
        attr(input3, "type", "range");
        attr(input3, "class", "form-range");
        attr(input3, "min", "0");
        attr(input3, "max", "360");
        attr(div6, "class", "col-sm-8");
        attr(div7, "class", "mb-3 row");
        attr(label4, "for", "inputAlpha");
        attr(label4, "class", "col-sm-4 col-form-label py-0 text-muted text-end");
        attr(input4, "id", "inputAlpha");
        attr(input4, "type", "range");
        attr(input4, "class", "form-range");
        attr(input4, "min", "0");
        attr(input4, "max", "1");
        attr(input4, "step", "0.01");
        attr(div8, "class", "col-sm-8");
        attr(div9, "class", "mb-3 row");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, label0);
        append(label0, t0);
        append(label0, t1);
        append(label0, t2);
        append(div1, t3);
        append(div1, div0);
        append(div0, input0);
        set_input_value(
          input0,
          /*$length*/
          ctx[6]
        );
        insert(target, t4, anchor);
        insert(target, div3, anchor);
        append(div3, label1);
        append(div3, t6);
        append(div3, div2);
        append(div2, input1);
        set_input_value(
          input1,
          /*l*/
          ctx[2]
        );
        insert(target, t7, anchor);
        insert(target, div5, anchor);
        append(div5, label2);
        append(div5, t9);
        append(div5, div4);
        append(div4, input2);
        set_input_value(
          input2,
          /*c*/
          ctx[3]
        );
        insert(target, t10, anchor);
        insert(target, div7, anchor);
        append(div7, label3);
        append(div7, t12);
        append(div7, div6);
        append(div6, input3);
        set_input_value(
          input3,
          /*h*/
          ctx[4]
        );
        insert(target, t13, anchor);
        insert(target, div9, anchor);
        append(div9, label4);
        append(div9, t15);
        append(div9, div8);
        append(div8, input4);
        set_input_value(
          input4,
          /*a*/
          ctx[5]
        );
        if (!mounted) {
          dispose = [
            listen(
              input0,
              "change",
              /*input0_change_input_handler*/
              ctx[9]
            ),
            listen(
              input0,
              "input",
              /*input0_change_input_handler*/
              ctx[9]
            ),
            listen(
              input1,
              "change",
              /*input1_change_input_handler*/
              ctx[10]
            ),
            listen(
              input1,
              "input",
              /*input1_change_input_handler*/
              ctx[10]
            ),
            listen(
              input2,
              "change",
              /*input2_change_input_handler*/
              ctx[11]
            ),
            listen(
              input2,
              "input",
              /*input2_change_input_handler*/
              ctx[11]
            ),
            listen(
              input3,
              "change",
              /*input3_change_input_handler*/
              ctx[12]
            ),
            listen(
              input3,
              "input",
              /*input3_change_input_handler*/
              ctx[12]
            ),
            listen(
              input4,
              "change",
              /*input4_change_input_handler*/
              ctx[13]
            ),
            listen(
              input4,
              "input",
              /*input4_change_input_handler*/
              ctx[13]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & /*$length*/
        64)
          set_data(
            t1,
            /*$length*/
            ctx2[6]
          );
        if (dirty & /*$length*/
        64) {
          set_input_value(
            input0,
            /*$length*/
            ctx2[6]
          );
        }
        if (dirty & /*l*/
        4) {
          set_input_value(
            input1,
            /*l*/
            ctx2[2]
          );
        }
        if (dirty & /*c*/
        8) {
          set_input_value(
            input2,
            /*c*/
            ctx2[3]
          );
        }
        if (dirty & /*h*/
        16) {
          set_input_value(
            input3,
            /*h*/
            ctx2[4]
          );
        }
        if (dirty & /*a*/
        32) {
          set_input_value(
            input4,
            /*a*/
            ctx2[5]
          );
        }
      },
      d(detaching) {
        if (detaching) {
          detach(div1);
          detach(t4);
          detach(div3);
          detach(t7);
          detach(div5);
          detach(t10);
          detach(div7);
          detach(t13);
          detach(div9);
        }
        mounted = false;
        run_all(dispose);
      }
    };
  }
  __name(create_if_block4, "create_if_block");
  function create_fragment16(ctx) {
    let if_block_anchor;
    let if_block = (
      /*color*/
      ctx[0] && create_if_block4(ctx)
    );
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, [dirty]) {
        if (
          /*color*/
          ctx2[0]
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block4(ctx2);
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(if_block_anchor);
        }
        if (if_block)
          if_block.d(detaching);
      }
    };
  }
  __name(create_fragment16, "create_fragment");
  function instance16($$self, $$props, $$invalidate) {
    let $color, $$unsubscribe_color = noop, $$subscribe_color = /* @__PURE__ */ __name(() => ($$unsubscribe_color(), $$unsubscribe_color = subscribe(color, ($$value) => $$invalidate(8, $color = $$value)), color), "$$subscribe_color");
    let $length, $$unsubscribe_length = noop, $$subscribe_length = /* @__PURE__ */ __name(() => ($$unsubscribe_length(), $$unsubscribe_length = subscribe(length, ($$value) => $$invalidate(6, $length = $$value)), length), "$$subscribe_length");
    $$self.$$.on_destroy.push(() => $$unsubscribe_color());
    $$self.$$.on_destroy.push(() => $$unsubscribe_length());
    let { api } = $$props;
    let { color } = $$props;
    $$subscribe_color();
    let { length } = $$props;
    $$subscribe_length();
    let l = 0;
    let c = 0;
    let h = 0;
    let a3 = 1;
    ;
    ;
    function input0_change_input_handler() {
      $length = to_number(this.value);
      length.set($length);
    }
    __name(input0_change_input_handler, "input0_change_input_handler");
    function input1_change_input_handler() {
      l = to_number(this.value);
      $$invalidate(2, l), $$invalidate(8, $color);
    }
    __name(input1_change_input_handler, "input1_change_input_handler");
    function input2_change_input_handler() {
      c = to_number(this.value);
      $$invalidate(3, c), $$invalidate(8, $color);
    }
    __name(input2_change_input_handler, "input2_change_input_handler");
    function input3_change_input_handler() {
      h = to_number(this.value);
      $$invalidate(4, h), $$invalidate(8, $color);
    }
    __name(input3_change_input_handler, "input3_change_input_handler");
    function input4_change_input_handler() {
      a3 = to_number(this.value);
      $$invalidate(5, a3), $$invalidate(8, $color);
    }
    __name(input4_change_input_handler, "input4_change_input_handler");
    $$self.$$set = ($$props2) => {
      if ("api" in $$props2)
        $$invalidate(7, api = $$props2.api);
      if ("color" in $$props2)
        $$subscribe_color($$invalidate(0, color = $$props2.color));
      if ("length" in $$props2)
        $$subscribe_length($$invalidate(1, length = $$props2.length));
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*$color*/
      256) {
        $: {
          const converted = (0, import_chroma_js.default)($color).lch();
          const alpha = (0, import_chroma_js.default)($color).alpha();
          console.log("XXX, converted", converted);
          $$invalidate(2, l = converted[0]);
          $$invalidate(3, c = converted[1]);
          $$invalidate(4, h = converted[2]);
          $$invalidate(5, a3 = alpha);
        }
      }
      if ($$self.$$.dirty & /*l, c, h, a, $color, color*/
      317) {
        $: {
          const updated = import_chroma_js.default.lch(l, c, h).alpha(a3).hex();
          console.log({ updated });
          if ($color != updated) {
            color.set(updated);
            color.notify();
          }
          ;
        }
      }
    };
    return [
      color,
      length,
      l,
      c,
      h,
      a3,
      $length,
      api,
      $color,
      input0_change_input_handler,
      input1_change_input_handler,
      input2_change_input_handler,
      input3_change_input_handler,
      input4_change_input_handler
    ];
  }
  __name(instance16, "instance");
  var Color = class extends SvelteComponent {
    static {
      __name(this, "Color");
    }
    constructor(options) {
      super();
      init(this, options, instance16, create_fragment16, safe_not_equal, { api: 7, color: 0, length: 1 });
    }
  };
  var Color_default = Color;

  // plug-ins/components/gradients/Inkwell.svelte
  var import_chroma_js2 = __toESM(require_chroma());

  // plug-ins/components/gradients/Range.svelte
  function create_fragment17(ctx) {
    let div3;
    let div0;
    let t0;
    let div2;
    let div1;
    let t1;
    let input;
    let mounted;
    let dispose;
    return {
      c() {
        div3 = element("div");
        div0 = element("div");
        t0 = space();
        div2 = element("div");
        div1 = element("div");
        t1 = space();
        input = element("input");
        attr(div0, "class", "position-absolute rounded");
        set_style(div0, "top", ballSize * 0.9 / 2 + "rem");
        set_style(div0, "left", "0px");
        set_style(div0, "right", "0");
        set_style(
          div0,
          "background-color",
          /*$color*/
          ctx[4]
        );
        set_style(div0, "height", "2px");
        attr(div1, "class", "position-absolute");
        set_style(div1, "left", -ballSize * (1 * /*$length*/
        (ctx[5] / 100)) + "rem");
        set_style(div1, "width", ballSize + "rem");
        set_style(div1, "height", ballSize + "rem");
        set_style(div1, "border-radius", "50%");
        set_style(div1, "border-style", "solid");
        set_style(div1, "border-width", "2px");
        set_style(
          div1,
          "background-color",
          /*$color*/
          ctx[4]
        );
        toggle_class(
          div1,
          "border-primary",
          /*selected*/
          ctx[1] == /*id*/
          ctx[0]
        );
        toggle_class(
          div1,
          "border-dark-subtle",
          /*selected*/
          ctx[1] != /*id*/
          ctx[0]
        );
        attr(div2, "class", "position-absolute");
        set_style(
          div2,
          "left",
          /*$length*/
          ctx[5] + "%"
        );
        attr(div3, "class", "position-relative pe-none");
        set_style(div3, "left", "0");
        set_style(div3, "right", "0");
        set_style(div3, "height", "0rem");
        attr(input, "type", "range");
        attr(input, "class", "form-range m-0 p-0");
        attr(input, "min", "0");
        attr(input, "max", "100");
        set_style(input, "opacity", "0.005");
        set_style(input, "height", "1rem");
      },
      m(target, anchor) {
        insert(target, div3, anchor);
        append(div3, div0);
        append(div3, t0);
        append(div3, div2);
        append(div2, div1);
        insert(target, t1, anchor);
        insert(target, input, anchor);
        set_input_value(
          input,
          /*$length*/
          ctx[5]
        );
        if (!mounted) {
          dispose = [
            listen(
              input,
              "change",
              /*input_change_input_handler*/
              ctx[7]
            ),
            listen(
              input,
              "input",
              /*input_change_input_handler*/
              ctx[7]
            ),
            listen(
              input,
              "mousedown",
              /*mousedown_handler*/
              ctx[8]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & /*$color*/
        16) {
          set_style(
            div0,
            "background-color",
            /*$color*/
            ctx2[4]
          );
        }
        if (dirty & /*$length*/
        32) {
          set_style(div1, "left", -ballSize * (1 * /*$length*/
          (ctx2[5] / 100)) + "rem");
        }
        if (dirty & /*$color*/
        16) {
          set_style(
            div1,
            "background-color",
            /*$color*/
            ctx2[4]
          );
        }
        if (dirty & /*selected, id*/
        3) {
          toggle_class(
            div1,
            "border-primary",
            /*selected*/
            ctx2[1] == /*id*/
            ctx2[0]
          );
        }
        if (dirty & /*selected, id*/
        3) {
          toggle_class(
            div1,
            "border-dark-subtle",
            /*selected*/
            ctx2[1] != /*id*/
            ctx2[0]
          );
        }
        if (dirty & /*$length*/
        32) {
          set_style(
            div2,
            "left",
            /*$length*/
            ctx2[5] + "%"
          );
        }
        if (dirty & /*$length*/
        32) {
          set_input_value(
            input,
            /*$length*/
            ctx2[5]
          );
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(div3);
          detach(t1);
          detach(input);
        }
        mounted = false;
        run_all(dispose);
      }
    };
  }
  __name(create_fragment17, "create_fragment");
  var ballSize = 1.2;
  function instance17($$self, $$props, $$invalidate) {
    let $color, $$unsubscribe_color = noop, $$subscribe_color = /* @__PURE__ */ __name(() => ($$unsubscribe_color(), $$unsubscribe_color = subscribe(color, ($$value) => $$invalidate(4, $color = $$value)), color), "$$subscribe_color");
    let $length, $$unsubscribe_length = noop, $$subscribe_length = /* @__PURE__ */ __name(() => ($$unsubscribe_length(), $$unsubscribe_length = subscribe(length, ($$value) => $$invalidate(5, $length = $$value)), length), "$$subscribe_length");
    $$self.$$.on_destroy.push(() => $$unsubscribe_color());
    $$self.$$.on_destroy.push(() => $$unsubscribe_length());
    const dispatch2 = createEventDispatcher();
    let { id } = $$props;
    let { selected } = $$props;
    let { color } = $$props;
    $$subscribe_color();
    let { length } = $$props;
    $$subscribe_length();
    function input_change_input_handler() {
      $length = to_number(this.value);
      length.set($length);
    }
    __name(input_change_input_handler, "input_change_input_handler");
    const mousedown_handler = /* @__PURE__ */ __name(() => dispatch2("click"), "mousedown_handler");
    $$self.$$set = ($$props2) => {
      if ("id" in $$props2)
        $$invalidate(0, id = $$props2.id);
      if ("selected" in $$props2)
        $$invalidate(1, selected = $$props2.selected);
      if ("color" in $$props2)
        $$subscribe_color($$invalidate(2, color = $$props2.color));
      if ("length" in $$props2)
        $$subscribe_length($$invalidate(3, length = $$props2.length));
    };
    return [
      id,
      selected,
      color,
      length,
      $color,
      $length,
      dispatch2,
      input_change_input_handler,
      mousedown_handler
    ];
  }
  __name(instance17, "instance");
  var Range = class extends SvelteComponent {
    static {
      __name(this, "Range");
    }
    constructor(options) {
      super();
      init(this, options, instance17, create_fragment17, safe_not_equal, { id: 0, selected: 1, color: 2, length: 3 });
    }
  };
  var Range_default = Range;

  // plug-ins/components/gradients/Shared.svelte
  function create_fragment18(ctx) {
    let div1;
    let label;
    let t0;
    let t1;
    let t2;
    let div0;
    let input;
    let mounted;
    let dispose;
    return {
      c() {
        div1 = element("div");
        label = element("label");
        t0 = text2("angle ");
        t1 = text2(
          /*$angle*/
          ctx[1]
        );
        t2 = space();
        div0 = element("div");
        input = element("input");
        attr(label, "for", "inputAngle");
        attr(label, "class", "col-sm-4 col-form-label py-0 text-muted text-end");
        attr(input, "id", "inputAngle");
        attr(input, "type", "range");
        attr(input, "class", "form-range");
        attr(input, "min", "0");
        attr(input, "max", "360");
        attr(div0, "class", "col-sm-8");
        attr(div1, "class", "mb-3 row");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, label);
        append(label, t0);
        append(label, t1);
        append(div1, t2);
        append(div1, div0);
        append(div0, input);
        set_input_value(
          input,
          /*$angle*/
          ctx[1]
        );
        if (!mounted) {
          dispose = [
            listen(
              input,
              "change",
              /*input_change_input_handler*/
              ctx[3]
            ),
            listen(
              input,
              "input",
              /*input_change_input_handler*/
              ctx[3]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & /*$angle*/
        2)
          set_data(
            t1,
            /*$angle*/
            ctx2[1]
          );
        if (dirty & /*$angle*/
        2) {
          set_input_value(
            input,
            /*$angle*/
            ctx2[1]
          );
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(div1);
        }
        mounted = false;
        run_all(dispose);
      }
    };
  }
  __name(create_fragment18, "create_fragment");
  function instance18($$self, $$props, $$invalidate) {
    let $angle, $$unsubscribe_angle = noop, $$subscribe_angle = /* @__PURE__ */ __name(() => ($$unsubscribe_angle(), $$unsubscribe_angle = subscribe(angle, ($$value) => $$invalidate(1, $angle = $$value)), angle), "$$subscribe_angle");
    $$self.$$.on_destroy.push(() => $$unsubscribe_angle());
    let { api } = $$props;
    let { angle } = $$props;
    $$subscribe_angle();
    function input_change_input_handler() {
      $angle = to_number(this.value);
      angle.set($angle);
    }
    __name(input_change_input_handler, "input_change_input_handler");
    $$self.$$set = ($$props2) => {
      if ("api" in $$props2)
        $$invalidate(2, api = $$props2.api);
      if ("angle" in $$props2)
        $$subscribe_angle($$invalidate(0, angle = $$props2.angle));
    };
    return [angle, $angle, api, input_change_input_handler];
  }
  __name(instance18, "instance");
  var Shared = class extends SvelteComponent {
    static {
      __name(this, "Shared");
    }
    constructor(options) {
      super();
      init(this, options, instance18, create_fragment18, safe_not_equal, { api: 2, angle: 0 });
    }
  };
  var Shared_default = Shared;

  // plug-ins/components/gradients/Gradients.svelte
  function get_each_context8(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[27] = list[i].id;
    child_ctx[28] = list[i].color;
    child_ctx[29] = list[i].length;
    return child_ctx;
  }
  __name(get_each_context8, "get_each_context");
  function get_each_context_12(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[27] = list[i].id;
    child_ctx[32] = list[i].padding;
    child_ctx[14] = list[i].angle;
    child_ctx[13] = list[i].colors;
    child_ctx[33] = list[i].stops;
    child_ctx[34] = list[i].levels;
    child_ctx[36] = i;
    return child_ctx;
  }
  __name(get_each_context_12, "get_each_context_1");
  function create_each_block_12(ctx) {
    let preview;
    let updating_selection;
    let current;
    const preview_spread_levels = [
      { api: (
        /*api*/
        ctx[0]
      ) },
      { id: (
        /*id*/
        ctx[27]
      ) },
      { padding: (
        /*padding*/
        ctx[32]
      ) },
      { angle: (
        /*angle*/
        ctx[14]
      ) },
      { colors: (
        /*colors*/
        ctx[13]
      ) },
      /*stops*/
      ctx[33],
      { levels: (
        /*levels*/
        ctx[34]
      ) }
    ];
    function preview_selection_binding(value) {
      ctx[24](value);
    }
    __name(preview_selection_binding, "preview_selection_binding");
    let preview_props = {};
    for (let i = 0; i < preview_spread_levels.length; i += 1) {
      preview_props = assign(preview_props, preview_spread_levels[i]);
    }
    if (
      /*selection*/
      ctx[3] !== void 0
    ) {
      preview_props.selection = /*selection*/
      ctx[3];
    }
    preview = new Preview_default({ props: preview_props });
    binding_callbacks.push(() => bind(preview, "selection", preview_selection_binding));
    return {
      c() {
        create_component(preview.$$.fragment);
      },
      m(target, anchor) {
        mount_component(preview, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const preview_changes = dirty[0] & /*api, $motif*/
        5 ? get_spread_update(preview_spread_levels, [
          dirty[0] & /*api*/
          1 && { api: (
            /*api*/
            ctx2[0]
          ) },
          dirty[0] & /*$motif*/
          4 && { id: (
            /*id*/
            ctx2[27]
          ) },
          dirty[0] & /*$motif*/
          4 && { padding: (
            /*padding*/
            ctx2[32]
          ) },
          dirty[0] & /*$motif*/
          4 && { angle: (
            /*angle*/
            ctx2[14]
          ) },
          dirty[0] & /*$motif*/
          4 && { colors: (
            /*colors*/
            ctx2[13]
          ) },
          dirty[0] & /*$motif*/
          4 && get_spread_object(
            /*stops*/
            ctx2[33]
          ),
          dirty[0] & /*$motif*/
          4 && { levels: (
            /*levels*/
            ctx2[34]
          ) }
        ]) : {};
        if (!updating_selection && dirty[0] & /*selection*/
        8) {
          updating_selection = true;
          preview_changes.selection = /*selection*/
          ctx2[3];
          add_flush_callback(() => updating_selection = false);
        }
        preview.$set(preview_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(preview.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(preview.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(preview, detaching);
      }
    };
  }
  __name(create_each_block_12, "create_each_block_1");
  function create_if_block5(ctx) {
    let div5;
    let div1;
    let div0;
    let t0;
    let div3;
    let div2;
    let t1;
    let div4;
    let button;
    let current;
    let mounted;
    let dispose;
    let each_value = ensure_array_like(
      /*$colors*/
      ctx[11]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block8(get_each_context8(ctx, each_value, i));
    }
    const out = /* @__PURE__ */ __name((i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    }), "out");
    let if_block = (
      /*selectedColor*/
      ctx[4] && create_if_block_18(ctx)
    );
    return {
      c() {
        div5 = element("div");
        div1 = element("div");
        div0 = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t0 = space();
        div3 = element("div");
        div2 = element("div");
        if (if_block)
          if_block.c();
        t1 = space();
        div4 = element("div");
        button = element("button");
        button.innerHTML = `<i class="bi bi-plus-circle"></i>`;
        attr(div0, "class", "col-12 bg-body-tertiary user-select-none p-2");
        attr(div1, "class", "row mb-3");
        attr(div2, "class", "col");
        attr(div3, "class", "row m-0");
        attr(button, "type", "button");
        attr(button, "class", "btn btn-sm btn-secondary");
        attr(div4, "class", "mb-3");
        attr(div5, "class", "p-3");
      },
      m(target, anchor) {
        insert(target, div5, anchor);
        append(div5, div1);
        append(div1, div0);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div0, null);
          }
        }
        append(div5, t0);
        append(div5, div3);
        append(div3, div2);
        if (if_block)
          if_block.m(div2, null);
        append(div5, t1);
        append(div5, div4);
        append(div4, button);
        current = true;
        if (!mounted) {
          dispose = listen(button, "click", function() {
            if (is_function(
              /*selectedMotif*/
              ctx[5].addColor("#2e3743", 0)
            ))
              ctx[5].addColor("#2e3743", 0).apply(this, arguments);
          });
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty[0] & /*$colors, selectedColorId*/
        2050) {
          each_value = ensure_array_like(
            /*$colors*/
            ctx[11]
          );
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context8(ctx, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block8(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(div0, null);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
        if (
          /*selectedColor*/
          ctx[4]
        ) {
          if (if_block) {
            if_block.p(ctx, dirty);
            if (dirty[0] & /*selectedColor*/
            16) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block_18(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(div2, null);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        transition_in(if_block);
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(div5);
        }
        destroy_each(each_blocks, detaching);
        if (if_block)
          if_block.d();
        mounted = false;
        dispose();
      }
    };
  }
  __name(create_if_block5, "create_if_block");
  function create_each_block8(ctx) {
    let range;
    let current;
    function click_handler_1(...args) {
      return (
        /*click_handler_1*/
        ctx[25](
          /*id*/
          ctx[27],
          ...args
        )
      );
    }
    __name(click_handler_1, "click_handler_1");
    range = new Range_default({
      props: {
        id: (
          /*id*/
          ctx[27]
        ),
        color: (
          /*color*/
          ctx[28]
        ),
        length: (
          /*length*/
          ctx[29]
        ),
        selected: (
          /*selectedColorId*/
          ctx[1]
        )
      }
    });
    range.$on("click", click_handler_1);
    return {
      c() {
        create_component(range.$$.fragment);
      },
      m(target, anchor) {
        mount_component(range, target, anchor);
        current = true;
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        const range_changes = {};
        if (dirty[0] & /*$colors*/
        2048)
          range_changes.id = /*id*/
          ctx[27];
        if (dirty[0] & /*$colors*/
        2048)
          range_changes.color = /*color*/
          ctx[28];
        if (dirty[0] & /*$colors*/
        2048)
          range_changes.length = /*length*/
          ctx[29];
        if (dirty[0] & /*selectedColorId*/
        2)
          range_changes.selected = /*selectedColorId*/
          ctx[1];
        range.$set(range_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(range.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(range.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(range, detaching);
      }
    };
  }
  __name(create_each_block8, "create_each_block");
  function create_if_block_18(ctx) {
    let shared;
    let t;
    let color_1;
    let current;
    shared = new Shared_default({
      props: {
        api: (
          /*api*/
          ctx[0]
        ),
        angle: (
          /*angle*/
          ctx[14]
        )
      }
    });
    color_1 = new Color_default({
      props: {
        api: (
          /*api*/
          ctx[0]
        ),
        angle: (
          /*angle*/
          ctx[14]
        ),
        color: (
          /*selectedColor*/
          ctx[4].color
        ),
        length: (
          /*selectedColor*/
          ctx[4].length
        )
      }
    });
    return {
      c() {
        create_component(shared.$$.fragment);
        t = space();
        create_component(color_1.$$.fragment);
      },
      m(target, anchor) {
        mount_component(shared, target, anchor);
        insert(target, t, anchor);
        mount_component(color_1, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const shared_changes = {};
        if (dirty[0] & /*api*/
        1)
          shared_changes.api = /*api*/
          ctx2[0];
        if (dirty[0] & /*angle*/
        16384)
          shared_changes.angle = /*angle*/
          ctx2[14];
        shared.$set(shared_changes);
        const color_1_changes = {};
        if (dirty[0] & /*api*/
        1)
          color_1_changes.api = /*api*/
          ctx2[0];
        if (dirty[0] & /*angle*/
        16384)
          color_1_changes.angle = /*angle*/
          ctx2[14];
        if (dirty[0] & /*selectedColor*/
        16)
          color_1_changes.color = /*selectedColor*/
          ctx2[4].color;
        if (dirty[0] & /*selectedColor*/
        16)
          color_1_changes.length = /*selectedColor*/
          ctx2[4].length;
        color_1.$set(color_1_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(shared.$$.fragment, local);
        transition_in(color_1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(shared.$$.fragment, local);
        transition_out(color_1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(t);
        }
        destroy_component(shared, detaching);
        destroy_component(color_1, detaching);
      }
    };
  }
  __name(create_if_block_18, "create_if_block_1");
  function create_fragment19(ctx) {
    let div3;
    let div0;
    let t0;
    let t1;
    let t2_value = parseInt(
      /*$w*/
      ctx[9]
    ) + "";
    let t2;
    let t3;
    let t4_value = parseInt(
      /*$h*/
      ctx[10]
    ) + "";
    let t4;
    let t5;
    let button0;
    let api_makeMovable_action;
    let t6;
    let div1;
    let t7;
    let api_stopWheel_action;
    let t8;
    let div2;
    let t9;
    let t10;
    let button1;
    let api_makeResizable_action;
    let div3_class_value;
    let current;
    let mounted;
    let dispose;
    let each_value_1 = ensure_array_like([
      /*$motif*/
      ctx[2]
    ]);
    let each_blocks = [];
    for (let i = 0; i < 1; i += 1) {
      each_blocks[i] = create_each_block_12(get_each_context_12(ctx, each_value_1, i));
    }
    const out = /* @__PURE__ */ __name((i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    }), "out");
    let if_block = (
      /*selection*/
      ctx[3] && create_if_block5(ctx)
    );
    return {
      c() {
        div3 = element("div");
        div0 = element("div");
        t0 = text2(
          /*$caption*/
          ctx[8]
        );
        t1 = text2(" (");
        t2 = text2(t2_value);
        t3 = text2("x");
        t4 = text2(t4_value);
        t5 = text2(")\n    ");
        button0 = element("button");
        button0.innerHTML = `<i class="bi bi-x"></i>`;
        t6 = space();
        div1 = element("div");
        for (let i = 0; i < 1; i += 1) {
          each_blocks[i].c();
        }
        t7 = space();
        if (if_block)
          if_block.c();
        t8 = space();
        div2 = element("div");
        t9 = text2(
          /*$status*/
          ctx[12]
        );
        t10 = space();
        button1 = element("button");
        button1.innerHTML = `<i class="bi bi-grip-horizontal"></i>`;
        attr(button0, "type", "button");
        attr(button0, "class", "btn opacity-50");
        set_style(button0, "position", "absolute");
        set_style(button0, "right", "0");
        set_style(button0, "top", "0");
        set_style(button0, "padding", ".5rem");
        attr(button0, "aria-label", "Close");
        attr(div0, "class", "card-header user-select-none tx-hi");
        toggle_class(
          div0,
          "text-warning",
          /*$selected*/
          ctx[7]
        );
        attr(div1, "class", "card-body overflow-auto m-0 p-0 tx-lo");
        attr(button1, "type", "button");
        attr(button1, "class", "btn opacity-50 outline-none float-end p-0");
        attr(button1, "aria-label", "Resize");
        attr(div2, "class", "card-footer text-body-secondary tx-hi py-0 px-1");
        attr(div3, "class", div3_class_value = "card alert-" + /*$context*/
        ctx[6] + " h-100 m-0 tx-bg");
        toggle_class(
          div3,
          "active",
          /*$selected*/
          ctx[7]
        );
      },
      m(target, anchor) {
        insert(target, div3, anchor);
        append(div3, div0);
        append(div0, t0);
        append(div0, t1);
        append(div0, t2);
        append(div0, t3);
        append(div0, t4);
        append(div0, t5);
        append(div0, button0);
        append(div3, t6);
        append(div3, div1);
        for (let i = 0; i < 1; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div1, null);
          }
        }
        append(div1, t7);
        if (if_block)
          if_block.m(div1, null);
        append(div3, t8);
        append(div3, div2);
        append(div2, t9);
        append(div2, t10);
        append(div2, button1);
        current = true;
        if (!mounted) {
          dispose = [
            listen(
              button0,
              "click",
              /*click_handler*/
              ctx[23]
            ),
            action_destroyer(api_makeMovable_action = /*api*/
            ctx[0].makeMovable(div0)),
            action_destroyer(api_stopWheel_action = /*api*/
            ctx[0].stopWheel(div1)),
            action_destroyer(api_makeResizable_action = /*api*/
            ctx[0].makeResizable(button1))
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (!current || dirty[0] & /*$caption*/
        256)
          set_data(
            t0,
            /*$caption*/
            ctx2[8]
          );
        if ((!current || dirty[0] & /*$w*/
        512) && t2_value !== (t2_value = parseInt(
          /*$w*/
          ctx2[9]
        ) + ""))
          set_data(t2, t2_value);
        if ((!current || dirty[0] & /*$h*/
        1024) && t4_value !== (t4_value = parseInt(
          /*$h*/
          ctx2[10]
        ) + ""))
          set_data(t4, t4_value);
        if (!current || dirty[0] & /*$selected*/
        128) {
          toggle_class(
            div0,
            "text-warning",
            /*$selected*/
            ctx2[7]
          );
        }
        if (dirty[0] & /*api, $motif, selection*/
        13) {
          each_value_1 = ensure_array_like([
            /*$motif*/
            ctx2[2]
          ]);
          let i;
          for (i = 0; i < 1; i += 1) {
            const child_ctx = get_each_context_12(ctx2, each_value_1, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block_12(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(div1, t7);
            }
          }
          group_outros();
          for (i = 1; i < 1; i += 1) {
            out(i);
          }
          check_outros();
        }
        if (
          /*selection*/
          ctx2[3]
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty[0] & /*selection*/
            8) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block5(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(div1, null);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
        if (!current || dirty[0] & /*$status*/
        4096)
          set_data(
            t9,
            /*$status*/
            ctx2[12]
          );
        if (!current || dirty[0] & /*$context*/
        64 && div3_class_value !== (div3_class_value = "card alert-" + /*$context*/
        ctx2[6] + " h-100 m-0 tx-bg")) {
          attr(div3, "class", div3_class_value);
        }
        if (!current || dirty[0] & /*$context, $selected*/
        192) {
          toggle_class(
            div3,
            "active",
            /*$selected*/
            ctx2[7]
          );
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < 1; i += 1) {
          transition_in(each_blocks[i]);
        }
        transition_in(if_block);
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < 1; i += 1) {
          transition_out(each_blocks[i]);
        }
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(div3);
        }
        destroy_each(each_blocks, detaching);
        if (if_block)
          if_block.d();
        mounted = false;
        run_all(dispose);
      }
    };
  }
  __name(create_fragment19, "create_fragment");
  function instance19($$self, $$props, $$invalidate) {
    let angle;
    let selectedMotif;
    let selectedColor;
    let colors;
    let $selection, $$unsubscribe_selection = noop, $$subscribe_selection = /* @__PURE__ */ __name(() => ($$unsubscribe_selection(), $$unsubscribe_selection = subscribe(selection, ($$value) => $$invalidate(22, $selection = $$value)), selection), "$$subscribe_selection");
    let $motif;
    let $context;
    let $selected;
    let $caption;
    let $w;
    let $h;
    let $colors, $$unsubscribe_colors = noop, $$subscribe_colors = /* @__PURE__ */ __name(() => ($$unsubscribe_colors(), $$unsubscribe_colors = subscribe(colors, ($$value) => $$invalidate(11, $colors = $$value)), colors), "$$subscribe_colors");
    let $status;
    $$self.$$.on_destroy.push(() => $$unsubscribe_selection());
    $$self.$$.on_destroy.push(() => $$unsubscribe_colors());
    let { api } = $$props;
    const selected = api.signal("selected");
    component_subscribe($$self, selected, (value) => $$invalidate(7, $selected = value));
    const context = api.signal("context");
    component_subscribe($$self, context, (value) => $$invalidate(6, $context = value));
    const caption = api.signal("caption");
    component_subscribe($$self, caption, (value) => $$invalidate(8, $caption = value));
    const text3 = api.signal("text");
    const status = api.signal("status");
    component_subscribe($$self, status, (value) => $$invalidate(12, $status = value));
    const w = api.signal("w");
    component_subscribe($$self, w, (value) => $$invalidate(9, $w = value));
    const h = api.signal("h");
    component_subscribe($$self, h, (value) => $$invalidate(10, $h = value));
    const motif = api.signal("motif");
    component_subscribe($$self, motif, (value) => $$invalidate(2, $motif = value));
    let selection = writable(null);
    $$subscribe_selection();
    let selectedColorId = -1;
    onMount(() => {
    });
    const click_handler = /* @__PURE__ */ __name(() => api.removeApplication(), "click_handler");
    function preview_selection_binding(value) {
      selection = value;
      $$subscribe_selection($$invalidate(3, selection));
    }
    __name(preview_selection_binding, "preview_selection_binding");
    const click_handler_1 = /* @__PURE__ */ __name((id, e) => $$invalidate(1, selectedColorId = id), "click_handler_1");
    $$self.$$set = ($$props2) => {
      if ("api" in $$props2)
        $$invalidate(0, api = $$props2.api);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty[0] & /*$selection, $motif*/
      4194308) {
        $:
          $$invalidate(14, angle = $selection ? $motif.get($selection).angle : 0);
      }
      if ($$self.$$.dirty[0] & /*$selection, $motif*/
      4194308) {
        $:
          $$invalidate(5, selectedMotif = $selection ? $motif.get($selection) : {});
      }
      if ($$self.$$.dirty[0] & /*$selection, $motif, selectedColorId*/
      4194310) {
        $:
          $$invalidate(4, selectedColor = $selection ? $motif.get($selection).colors.get().find((o) => o.id == selectedColorId) : null);
      }
      if ($$self.$$.dirty[0] & /*$selection, $motif*/
      4194308) {
        $:
          $$subscribe_colors($$invalidate(13, colors = $selection ? $motif.get($selection).colors : writable([])));
      }
    };
    return [
      api,
      selectedColorId,
      $motif,
      selection,
      selectedColor,
      selectedMotif,
      $context,
      $selected,
      $caption,
      $w,
      $h,
      $colors,
      $status,
      colors,
      angle,
      selected,
      context,
      caption,
      status,
      w,
      h,
      motif,
      $selection,
      click_handler,
      preview_selection_binding,
      click_handler_1
    ];
  }
  __name(instance19, "instance");
  var Gradients = class extends SvelteComponent {
    static {
      __name(this, "Gradients");
    }
    constructor(options) {
      super();
      init(this, options, instance19, create_fragment19, safe_not_equal, { api: 0 }, null, [-1, -1]);
    }
  };
  var Gradients_default = Gradients;

  // plug-ins/components/gradients/Motif.js
  var Motif = class _Motif {
    static {
      __name(this, "Motif");
    }
    padding;
    direction;
    angle;
    colors;
    levels;
    constructor(id, direction, padding) {
      this.id = new Signal(id);
      this.direction = new Signal(direction);
      this.padding = new Signal(padding);
      this.angle = new Signal(180);
      this.colors = new Signal([]);
      this.levels = new Signal([]);
    }
    get(id) {
      console.log(`Seeking ${id}`);
      let response = {};
      if (this.id.get() === id)
        return this;
      for (const level of this.levels.get()) {
        response = level.get(id);
        if (response) {
          console.log(`Found`, response);
          return response;
        }
      }
    }
    get stops() {
      const entries = [];
      for (const [index, { color, length }] of this.colors.get().entries()) {
        entries.push(["color" + index, color]);
        entries.push(["length" + index, length]);
      }
      return Object.fromEntries(entries);
    }
    addColor(color, length) {
      const stop = new Stop(color, length);
      this.colors.get().push(stop);
      this.colors.notify();
      return this;
    }
    hi(id) {
      const level = new _Motif(id, "hi");
      this.levels.get().push(level);
      this.levels.notify();
      return level;
    }
    lo(id) {
      const level = new _Motif(id, "lo");
      this.levels.get().push(level);
      this.levels.notify();
      return level;
    }
    bt(id) {
      const level = new _Motif(id, "lo", true);
      this.levels.get().push(level);
      this.levels.notify();
      return level;
    }
  };
  var Stop = class {
    static {
      __name(this, "Stop");
    }
    id = uuid();
    #color;
    #length;
    constructor(color, length) {
      this.#color = color;
      this.#length = length;
      this.color = new Signal(this.#color);
      this.length = new Signal(this.#length);
    }
  };
  var Signal = class {
    static {
      __name(this, "Signal");
    }
    constructor(initialValue = null) {
      this.value = initialValue;
      this.subscribers = [];
    }
    subscribe(subscriber) {
      if (typeof subscriber !== "function") {
        throw new Error("Subscriber must be a function");
      }
      this.subscribers.push(subscriber);
      subscriber(this.value);
      return () => this.unsubscribe(subscriber);
    }
    unsubscribe(subscriber) {
      this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
    }
    set(value) {
      if (this.value !== value) {
        this.value = value;
        this.notify();
      }
    }
    get() {
      return this.value;
    }
    notify() {
      this.subscribers.forEach((subscriber) => subscriber(this.value));
    }
  };

  // plug-ins/components/Gradients.js
  var Gradients2 = class {
    static {
      __name(this, "Gradients");
    }
    static extends = [Application];
    observables = {
      motif: void 0
    };
    serializables = {
      // motif: 'object',
    };
    traits = {
      async refresh() {
      },
      async execute() {
        const data = JSON.stringify(this.motif, null, "  ");
        this.send("out", data);
      }
    };
    methods = {
      initialize() {
        this.createSocket("out", 1);
      },
      mount() {
        const motif = new Motif("background");
        motif.addColor("#2e3743", 0).addColor("#343a49", 20).addColor("#141d25", 100);
        motif.hi("caption").addColor("#3b4650", 0).addColor("#1a1e29", 100);
        motif.lo("body").addColor("#0f141d", 0).addColor("#2c3645", 45).addColor("#131821", 100);
        motif.hi("footer").addColor("#3b4650", 0).addColor("#1a1e29", 100);
        motif.get("body").bt("btn-1").addColor("#ecb349", 0).addColor("#da5a03", 100);
        motif.get("body").bt("btn-2").addColor("#d443f1", 0).addColor("#3c1968", 100);
        this.motif = motif;
        this.foreign = new Instance(Foreign);
        this.createWindowComponent(this.foreign);
        this.component = new Gradients_default({
          target: this.foreign.body,
          props: { api: this }
        });
        this.addDisposable(stopWheel(this.foreign.body));
      },
      destroy() {
        this.component.$destroy();
      }
    };
  };

  // plug-ins/components/rolodex/Container.svelte
  function get_each_context9(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[2] = list[i].id;
    child_ctx[7] = list[i].type;
    child_ctx[3] = list[i].name;
    child_ctx[8] = list[i].components;
    child_ctx[9] = list[i].tables;
    child_ctx[10] = list[i].reports;
    child_ctx[12] = i;
    return child_ctx;
  }
  __name(get_each_context9, "get_each_context");
  function create_each_block9(ctx) {
    let switch_instance;
    let switch_instance_anchor;
    let current;
    var switch_value = library_default[
      /*type*/
      ctx[7]
    ];
    function switch_props(ctx2, dirty) {
      return {
        props: {
          api: (
            /*api*/
            ctx2[0]
          ),
          composition: (
            /*components*/
            ctx2[8]
          ),
          tables: (
            /*tables*/
            ctx2[9]
          ),
          reports: (
            /*reports*/
            ctx2[10]
          ),
          id: (
            /*id*/
            ctx2[2]
          ),
          name: (
            /*name*/
            ctx2[3]
          )
        }
      };
    }
    __name(switch_props, "switch_props");
    if (switch_value) {
      switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
    }
    return {
      c() {
        if (switch_instance)
          create_component(switch_instance.$$.fragment);
        switch_instance_anchor = empty();
      },
      m(target, anchor) {
        if (switch_instance)
          mount_component(switch_instance, target, anchor);
        insert(target, switch_instance_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & /*$composition*/
        16 && switch_value !== (switch_value = library_default[
          /*type*/
          ctx2[7]
        ])) {
          if (switch_instance) {
            group_outros();
            const old_component = switch_instance;
            transition_out(old_component.$$.fragment, 1, 0, () => {
              destroy_component(old_component, 1);
            });
            check_outros();
          }
          if (switch_value) {
            switch_instance = construct_svelte_component(switch_value, switch_props(ctx2, dirty));
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
          } else {
            switch_instance = null;
          }
        } else if (switch_value) {
          const switch_instance_changes = {};
          if (dirty & /*api*/
          1)
            switch_instance_changes.api = /*api*/
            ctx2[0];
          if (dirty & /*$composition*/
          16)
            switch_instance_changes.composition = /*components*/
            ctx2[8];
          if (dirty & /*$composition*/
          16)
            switch_instance_changes.tables = /*tables*/
            ctx2[9];
          if (dirty & /*$composition*/
          16)
            switch_instance_changes.reports = /*reports*/
            ctx2[10];
          if (dirty & /*$composition*/
          16)
            switch_instance_changes.id = /*id*/
            ctx2[2];
          if (dirty & /*$composition*/
          16)
            switch_instance_changes.name = /*name*/
            ctx2[3];
          switch_instance.$set(switch_instance_changes);
        }
      },
      i(local) {
        if (current)
          return;
        if (switch_instance)
          transition_in(switch_instance.$$.fragment, local);
        current = true;
      },
      o(local) {
        if (switch_instance)
          transition_out(switch_instance.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(switch_instance_anchor);
        }
        if (switch_instance)
          destroy_component(switch_instance, detaching);
      }
    };
  }
  __name(create_each_block9, "create_each_block");
  function create_fragment20(ctx) {
    let div;
    let t;
    let current;
    let each_value = ensure_array_like(
      /*$composition*/
      ctx[4]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block9(get_each_context9(ctx, each_value, i));
    }
    const out = /* @__PURE__ */ __name((i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    }), "out");
    const default_slot_template = (
      /*#slots*/
      ctx[6].default
    );
    const default_slot = create_slot(
      default_slot_template,
      ctx,
      /*$$scope*/
      ctx[5],
      null
    );
    return {
      c() {
        div = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t = space();
        if (default_slot)
          default_slot.c();
        attr(div, "class", "container");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div, null);
          }
        }
        append(div, t);
        if (default_slot) {
          default_slot.m(div, null);
        }
        current = true;
      },
      p(ctx2, [dirty]) {
        if (dirty & /*$composition, api*/
        17) {
          each_value = ensure_array_like(
            /*$composition*/
            ctx2[4]
          );
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context9(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block9(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(div, t);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
        if (default_slot) {
          if (default_slot.p && (!current || dirty & /*$$scope*/
          32)) {
            update_slot_base(
              default_slot,
              default_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[5],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[5]
              ) : get_slot_changes(
                default_slot_template,
                /*$$scope*/
                ctx2[5],
                dirty,
                null
              ),
              null
            );
          }
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(div);
        }
        destroy_each(each_blocks, detaching);
        if (default_slot)
          default_slot.d(detaching);
      }
    };
  }
  __name(create_fragment20, "create_fragment");
  function instance20($$self, $$props, $$invalidate) {
    let $composition, $$unsubscribe_composition = noop, $$subscribe_composition = /* @__PURE__ */ __name(() => ($$unsubscribe_composition(), $$unsubscribe_composition = subscribe(composition, ($$value) => $$invalidate(4, $composition = $$value)), composition), "$$subscribe_composition");
    $$self.$$.on_destroy.push(() => $$unsubscribe_composition());
    let { $$slots: slots = {}, $$scope } = $$props;
    let { api } = $$props;
    let { id } = $$props;
    let { name } = $$props;
    let { composition } = $$props;
    $$subscribe_composition();
    $$self.$$set = ($$props2) => {
      if ("api" in $$props2)
        $$invalidate(0, api = $$props2.api);
      if ("id" in $$props2)
        $$invalidate(2, id = $$props2.id);
      if ("name" in $$props2)
        $$invalidate(3, name = $$props2.name);
      if ("composition" in $$props2)
        $$subscribe_composition($$invalidate(1, composition = $$props2.composition));
      if ("$$scope" in $$props2)
        $$invalidate(5, $$scope = $$props2.$$scope);
    };
    return [api, composition, id, name, $composition, $$scope, slots];
  }
  __name(instance20, "instance");
  var Container2 = class extends SvelteComponent {
    static {
      __name(this, "Container");
    }
    constructor(options) {
      super();
      init(this, options, instance20, create_fragment20, safe_not_equal, { api: 0, id: 2, name: 3, composition: 1 });
    }
  };
  var Container_default = Container2;

  // plug-ins/components/rolodex/Row.svelte
  function get_each_context10(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[2] = list[i].id;
    child_ctx[7] = list[i].type;
    child_ctx[3] = list[i].name;
    child_ctx[8] = list[i].components;
    child_ctx[9] = list[i].tables;
    child_ctx[10] = list[i].reports;
    child_ctx[12] = i;
    return child_ctx;
  }
  __name(get_each_context10, "get_each_context");
  function create_each_block10(ctx) {
    let switch_instance;
    let switch_instance_anchor;
    let current;
    var switch_value = library_default[
      /*type*/
      ctx[7]
    ];
    function switch_props(ctx2, dirty) {
      return {
        props: {
          api: (
            /*api*/
            ctx2[0]
          ),
          composition: (
            /*components*/
            ctx2[8]
          ),
          tables: (
            /*tables*/
            ctx2[9]
          ),
          reports: (
            /*reports*/
            ctx2[10]
          ),
          id: (
            /*id*/
            ctx2[2]
          ),
          name: (
            /*name*/
            ctx2[3]
          )
        }
      };
    }
    __name(switch_props, "switch_props");
    if (switch_value) {
      switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
    }
    return {
      c() {
        if (switch_instance)
          create_component(switch_instance.$$.fragment);
        switch_instance_anchor = empty();
      },
      m(target, anchor) {
        if (switch_instance)
          mount_component(switch_instance, target, anchor);
        insert(target, switch_instance_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & /*$composition*/
        16 && switch_value !== (switch_value = library_default[
          /*type*/
          ctx2[7]
        ])) {
          if (switch_instance) {
            group_outros();
            const old_component = switch_instance;
            transition_out(old_component.$$.fragment, 1, 0, () => {
              destroy_component(old_component, 1);
            });
            check_outros();
          }
          if (switch_value) {
            switch_instance = construct_svelte_component(switch_value, switch_props(ctx2, dirty));
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
          } else {
            switch_instance = null;
          }
        } else if (switch_value) {
          const switch_instance_changes = {};
          if (dirty & /*api*/
          1)
            switch_instance_changes.api = /*api*/
            ctx2[0];
          if (dirty & /*$composition*/
          16)
            switch_instance_changes.composition = /*components*/
            ctx2[8];
          if (dirty & /*$composition*/
          16)
            switch_instance_changes.tables = /*tables*/
            ctx2[9];
          if (dirty & /*$composition*/
          16)
            switch_instance_changes.reports = /*reports*/
            ctx2[10];
          if (dirty & /*$composition*/
          16)
            switch_instance_changes.id = /*id*/
            ctx2[2];
          if (dirty & /*$composition*/
          16)
            switch_instance_changes.name = /*name*/
            ctx2[3];
          switch_instance.$set(switch_instance_changes);
        }
      },
      i(local) {
        if (current)
          return;
        if (switch_instance)
          transition_in(switch_instance.$$.fragment, local);
        current = true;
      },
      o(local) {
        if (switch_instance)
          transition_out(switch_instance.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(switch_instance_anchor);
        }
        if (switch_instance)
          destroy_component(switch_instance, detaching);
      }
    };
  }
  __name(create_each_block10, "create_each_block");
  function create_fragment21(ctx) {
    let div;
    let t;
    let current;
    let each_value = ensure_array_like(
      /*$composition*/
      ctx[4]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block10(get_each_context10(ctx, each_value, i));
    }
    const out = /* @__PURE__ */ __name((i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    }), "out");
    const default_slot_template = (
      /*#slots*/
      ctx[6].default
    );
    const default_slot = create_slot(
      default_slot_template,
      ctx,
      /*$$scope*/
      ctx[5],
      null
    );
    return {
      c() {
        div = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t = space();
        if (default_slot)
          default_slot.c();
        attr(div, "class", "row");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div, null);
          }
        }
        append(div, t);
        if (default_slot) {
          default_slot.m(div, null);
        }
        current = true;
      },
      p(ctx2, [dirty]) {
        if (dirty & /*$composition, api*/
        17) {
          each_value = ensure_array_like(
            /*$composition*/
            ctx2[4]
          );
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context10(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block10(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(div, t);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
        if (default_slot) {
          if (default_slot.p && (!current || dirty & /*$$scope*/
          32)) {
            update_slot_base(
              default_slot,
              default_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[5],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[5]
              ) : get_slot_changes(
                default_slot_template,
                /*$$scope*/
                ctx2[5],
                dirty,
                null
              ),
              null
            );
          }
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(div);
        }
        destroy_each(each_blocks, detaching);
        if (default_slot)
          default_slot.d(detaching);
      }
    };
  }
  __name(create_fragment21, "create_fragment");
  function instance21($$self, $$props, $$invalidate) {
    let $composition, $$unsubscribe_composition = noop, $$subscribe_composition = /* @__PURE__ */ __name(() => ($$unsubscribe_composition(), $$unsubscribe_composition = subscribe(composition, ($$value) => $$invalidate(4, $composition = $$value)), composition), "$$subscribe_composition");
    $$self.$$.on_destroy.push(() => $$unsubscribe_composition());
    let { $$slots: slots = {}, $$scope } = $$props;
    let { api } = $$props;
    let { id } = $$props;
    let { name } = $$props;
    let { composition } = $$props;
    $$subscribe_composition();
    $$self.$$set = ($$props2) => {
      if ("api" in $$props2)
        $$invalidate(0, api = $$props2.api);
      if ("id" in $$props2)
        $$invalidate(2, id = $$props2.id);
      if ("name" in $$props2)
        $$invalidate(3, name = $$props2.name);
      if ("composition" in $$props2)
        $$subscribe_composition($$invalidate(1, composition = $$props2.composition));
      if ("$$scope" in $$props2)
        $$invalidate(5, $$scope = $$props2.$$scope);
    };
    return [api, composition, id, name, $composition, $$scope, slots];
  }
  __name(instance21, "instance");
  var Row = class extends SvelteComponent {
    static {
      __name(this, "Row");
    }
    constructor(options) {
      super();
      init(this, options, instance21, create_fragment21, safe_not_equal, { api: 0, id: 2, name: 3, composition: 1 });
    }
  };
  var Row_default = Row;

  // plug-ins/components/rolodex/Column.svelte
  function get_each_context11(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[2] = list[i].id;
    child_ctx[7] = list[i].type;
    child_ctx[3] = list[i].name;
    child_ctx[8] = list[i].components;
    child_ctx[9] = list[i].tables;
    child_ctx[10] = list[i].reports;
    child_ctx[12] = i;
    return child_ctx;
  }
  __name(get_each_context11, "get_each_context");
  function create_each_block11(ctx) {
    let switch_instance;
    let switch_instance_anchor;
    let current;
    var switch_value = library_default[
      /*type*/
      ctx[7]
    ];
    function switch_props(ctx2, dirty) {
      return {
        props: {
          api: (
            /*api*/
            ctx2[0]
          ),
          composition: (
            /*components*/
            ctx2[8]
          ),
          tables: (
            /*tables*/
            ctx2[9]
          ),
          reports: (
            /*reports*/
            ctx2[10]
          ),
          id: (
            /*id*/
            ctx2[2]
          ),
          name: (
            /*name*/
            ctx2[3]
          )
        }
      };
    }
    __name(switch_props, "switch_props");
    if (switch_value) {
      switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
    }
    return {
      c() {
        if (switch_instance)
          create_component(switch_instance.$$.fragment);
        switch_instance_anchor = empty();
      },
      m(target, anchor) {
        if (switch_instance)
          mount_component(switch_instance, target, anchor);
        insert(target, switch_instance_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & /*$composition*/
        16 && switch_value !== (switch_value = library_default[
          /*type*/
          ctx2[7]
        ])) {
          if (switch_instance) {
            group_outros();
            const old_component = switch_instance;
            transition_out(old_component.$$.fragment, 1, 0, () => {
              destroy_component(old_component, 1);
            });
            check_outros();
          }
          if (switch_value) {
            switch_instance = construct_svelte_component(switch_value, switch_props(ctx2, dirty));
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
          } else {
            switch_instance = null;
          }
        } else if (switch_value) {
          const switch_instance_changes = {};
          if (dirty & /*api*/
          1)
            switch_instance_changes.api = /*api*/
            ctx2[0];
          if (dirty & /*$composition*/
          16)
            switch_instance_changes.composition = /*components*/
            ctx2[8];
          if (dirty & /*$composition*/
          16)
            switch_instance_changes.tables = /*tables*/
            ctx2[9];
          if (dirty & /*$composition*/
          16)
            switch_instance_changes.reports = /*reports*/
            ctx2[10];
          if (dirty & /*$composition*/
          16)
            switch_instance_changes.id = /*id*/
            ctx2[2];
          if (dirty & /*$composition*/
          16)
            switch_instance_changes.name = /*name*/
            ctx2[3];
          switch_instance.$set(switch_instance_changes);
        }
      },
      i(local) {
        if (current)
          return;
        if (switch_instance)
          transition_in(switch_instance.$$.fragment, local);
        current = true;
      },
      o(local) {
        if (switch_instance)
          transition_out(switch_instance.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(switch_instance_anchor);
        }
        if (switch_instance)
          destroy_component(switch_instance, detaching);
      }
    };
  }
  __name(create_each_block11, "create_each_block");
  function create_fragment22(ctx) {
    let div;
    let t0;
    let t1;
    let t2;
    let current;
    let each_value = ensure_array_like(
      /*$composition*/
      ctx[4]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block11(get_each_context11(ctx, each_value, i));
    }
    const out = /* @__PURE__ */ __name((i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    }), "out");
    const default_slot_template = (
      /*#slots*/
      ctx[6].default
    );
    const default_slot = create_slot(
      default_slot_template,
      ctx,
      /*$$scope*/
      ctx[5],
      null
    );
    return {
      c() {
        div = element("div");
        t0 = text2(
          /*name*/
          ctx[3]
        );
        t1 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t2 = space();
        if (default_slot)
          default_slot.c();
        attr(div, "class", "col");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, t0);
        append(div, t1);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div, null);
          }
        }
        append(div, t2);
        if (default_slot) {
          default_slot.m(div, null);
        }
        current = true;
      },
      p(ctx2, [dirty]) {
        if (!current || dirty & /*name*/
        8)
          set_data(
            t0,
            /*name*/
            ctx2[3]
          );
        if (dirty & /*$composition, api*/
        17) {
          each_value = ensure_array_like(
            /*$composition*/
            ctx2[4]
          );
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context11(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block11(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(div, t2);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
        if (default_slot) {
          if (default_slot.p && (!current || dirty & /*$$scope*/
          32)) {
            update_slot_base(
              default_slot,
              default_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[5],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[5]
              ) : get_slot_changes(
                default_slot_template,
                /*$$scope*/
                ctx2[5],
                dirty,
                null
              ),
              null
            );
          }
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(div);
        }
        destroy_each(each_blocks, detaching);
        if (default_slot)
          default_slot.d(detaching);
      }
    };
  }
  __name(create_fragment22, "create_fragment");
  function instance22($$self, $$props, $$invalidate) {
    let $composition, $$unsubscribe_composition = noop, $$subscribe_composition = /* @__PURE__ */ __name(() => ($$unsubscribe_composition(), $$unsubscribe_composition = subscribe(composition, ($$value) => $$invalidate(4, $composition = $$value)), composition), "$$subscribe_composition");
    $$self.$$.on_destroy.push(() => $$unsubscribe_composition());
    let { $$slots: slots = {}, $$scope } = $$props;
    let { api } = $$props;
    let { id } = $$props;
    let { name } = $$props;
    let { composition } = $$props;
    $$subscribe_composition();
    $$self.$$set = ($$props2) => {
      if ("api" in $$props2)
        $$invalidate(0, api = $$props2.api);
      if ("id" in $$props2)
        $$invalidate(2, id = $$props2.id);
      if ("name" in $$props2)
        $$invalidate(3, name = $$props2.name);
      if ("composition" in $$props2)
        $$subscribe_composition($$invalidate(1, composition = $$props2.composition));
      if ("$$scope" in $$props2)
        $$invalidate(5, $$scope = $$props2.$$scope);
    };
    return [api, composition, id, name, $composition, $$scope, slots];
  }
  __name(instance22, "instance");
  var Column = class extends SvelteComponent {
    static {
      __name(this, "Column");
    }
    constructor(options) {
      super();
      init(this, options, instance22, create_fragment22, safe_not_equal, { api: 0, id: 2, name: 3, composition: 1 });
    }
  };
  var Column_default = Column;

  // plug-ins/components/rolodex/List.svelte
  function get_each_context12(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[2] = list[i].id;
    child_ctx[12] = list[i].type;
    child_ctx[3] = list[i].name;
    child_ctx[13] = list[i].components;
    child_ctx[4] = list[i].tables;
    child_ctx[5] = list[i].reports;
    child_ctx[15] = i;
    return child_ctx;
  }
  __name(get_each_context12, "get_each_context");
  function get_each_context_13(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[2] = list[i].id;
    child_ctx[16] = list[i].first;
    child_ctx[17] = list[i].last;
    child_ctx[18] = list[i].age;
    child_ctx[15] = i;
    return child_ctx;
  }
  __name(get_each_context_13, "get_each_context_1");
  function create_each_block_13(ctx) {
    let tr;
    let th;
    let t0_value = get_store_value(
      /*id*/
      ctx[2]
    ) + "";
    let t0;
    let t1;
    let td0;
    let t2_value = get_store_value(
      /*first*/
      ctx[16]
    ) + "";
    let t2;
    let t3;
    let td1;
    let t4_value = get_store_value(
      /*last*/
      ctx[17]
    ) + "";
    let t4;
    let t5;
    let td2;
    let t6_value = get_store_value(
      /*age*/
      ctx[18]
    ) + "";
    let t6;
    let t7;
    return {
      c() {
        tr = element("tr");
        th = element("th");
        t0 = text2(t0_value);
        t1 = space();
        td0 = element("td");
        t2 = text2(t2_value);
        t3 = space();
        td1 = element("td");
        t4 = text2(t4_value);
        t5 = space();
        td2 = element("td");
        t6 = text2(t6_value);
        t7 = space();
        attr(th, "scope", "row");
      },
      m(target, anchor) {
        insert(target, tr, anchor);
        append(tr, th);
        append(th, t0);
        append(tr, t1);
        append(tr, td0);
        append(td0, t2);
        append(tr, t3);
        append(tr, td1);
        append(td1, t4);
        append(tr, t5);
        append(tr, td2);
        append(td2, t6);
        append(tr, t7);
      },
      p(ctx2, dirty) {
        if (dirty & /*$users*/
        64 && t0_value !== (t0_value = get_store_value(
          /*id*/
          ctx2[2]
        ) + ""))
          set_data(t0, t0_value);
        if (dirty & /*$users*/
        64 && t2_value !== (t2_value = get_store_value(
          /*first*/
          ctx2[16]
        ) + ""))
          set_data(t2, t2_value);
        if (dirty & /*$users*/
        64 && t4_value !== (t4_value = get_store_value(
          /*last*/
          ctx2[17]
        ) + ""))
          set_data(t4, t4_value);
        if (dirty & /*$users*/
        64 && t6_value !== (t6_value = get_store_value(
          /*age*/
          ctx2[18]
        ) + ""))
          set_data(t6, t6_value);
      },
      d(detaching) {
        if (detaching) {
          detach(tr);
        }
      }
    };
  }
  __name(create_each_block_13, "create_each_block_1");
  function create_each_block12(ctx) {
    let switch_instance;
    let switch_instance_anchor;
    let current;
    var switch_value = library_default[
      /*type*/
      ctx[12]
    ];
    function switch_props(ctx2, dirty) {
      return {
        props: {
          api: (
            /*api*/
            ctx2[0]
          ),
          composition: (
            /*components*/
            ctx2[13]
          ),
          tables: (
            /*tables*/
            ctx2[4]
          ),
          reports: (
            /*reports*/
            ctx2[5]
          ),
          id: (
            /*id*/
            ctx2[2]
          ),
          name: (
            /*name*/
            ctx2[3]
          )
        }
      };
    }
    __name(switch_props, "switch_props");
    if (switch_value) {
      switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
    }
    return {
      c() {
        if (switch_instance)
          create_component(switch_instance.$$.fragment);
        switch_instance_anchor = empty();
      },
      m(target, anchor) {
        if (switch_instance)
          mount_component(switch_instance, target, anchor);
        insert(target, switch_instance_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & /*$composition*/
        128 && switch_value !== (switch_value = library_default[
          /*type*/
          ctx2[12]
        ])) {
          if (switch_instance) {
            group_outros();
            const old_component = switch_instance;
            transition_out(old_component.$$.fragment, 1, 0, () => {
              destroy_component(old_component, 1);
            });
            check_outros();
          }
          if (switch_value) {
            switch_instance = construct_svelte_component(switch_value, switch_props(ctx2, dirty));
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
          } else {
            switch_instance = null;
          }
        } else if (switch_value) {
          const switch_instance_changes = {};
          if (dirty & /*api*/
          1)
            switch_instance_changes.api = /*api*/
            ctx2[0];
          if (dirty & /*$composition*/
          128)
            switch_instance_changes.composition = /*components*/
            ctx2[13];
          if (dirty & /*$composition*/
          128)
            switch_instance_changes.tables = /*tables*/
            ctx2[4];
          if (dirty & /*$composition*/
          128)
            switch_instance_changes.reports = /*reports*/
            ctx2[5];
          if (dirty & /*$composition*/
          128)
            switch_instance_changes.id = /*id*/
            ctx2[2];
          if (dirty & /*$composition*/
          128)
            switch_instance_changes.name = /*name*/
            ctx2[3];
          switch_instance.$set(switch_instance_changes);
        }
      },
      i(local) {
        if (current)
          return;
        if (switch_instance)
          transition_in(switch_instance.$$.fragment, local);
        current = true;
      },
      o(local) {
        if (switch_instance)
          transition_out(switch_instance.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(switch_instance_anchor);
        }
        if (switch_instance)
          destroy_component(switch_instance, detaching);
      }
    };
  }
  __name(create_each_block12, "create_each_block");
  function create_fragment23(ctx) {
    let div;
    let table;
    let thead;
    let t7;
    let tbody;
    let t8;
    let t9;
    let current;
    let each_value_1 = ensure_array_like(
      /*$users*/
      ctx[6]
    );
    let each_blocks_1 = [];
    for (let i = 0; i < each_value_1.length; i += 1) {
      each_blocks_1[i] = create_each_block_13(get_each_context_13(ctx, each_value_1, i));
    }
    let each_value = ensure_array_like(
      /*$composition*/
      ctx[7]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block12(get_each_context12(ctx, each_value, i));
    }
    const out = /* @__PURE__ */ __name((i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    }), "out");
    const default_slot_template = (
      /*#slots*/
      ctx[10].default
    );
    const default_slot = create_slot(
      default_slot_template,
      ctx,
      /*$$scope*/
      ctx[9],
      null
    );
    return {
      c() {
        div = element("div");
        table = element("table");
        thead = element("thead");
        thead.innerHTML = `<tr><th scope="col">#</th> <th scope="col">First</th> <th scope="col">Last</th> <th scope="col">Age</th></tr>`;
        t7 = space();
        tbody = element("tbody");
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].c();
        }
        t8 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t9 = space();
        if (default_slot)
          default_slot.c();
        attr(table, "class", "table");
        attr(div, "class", "");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, table);
        append(table, thead);
        append(table, t7);
        append(table, tbody);
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          if (each_blocks_1[i]) {
            each_blocks_1[i].m(tbody, null);
          }
        }
        append(div, t8);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div, null);
          }
        }
        append(div, t9);
        if (default_slot) {
          default_slot.m(div, null);
        }
        current = true;
      },
      p(ctx2, [dirty]) {
        if (dirty & /*$users*/
        64) {
          each_value_1 = ensure_array_like(
            /*$users*/
            ctx2[6]
          );
          let i;
          for (i = 0; i < each_value_1.length; i += 1) {
            const child_ctx = get_each_context_13(ctx2, each_value_1, i);
            if (each_blocks_1[i]) {
              each_blocks_1[i].p(child_ctx, dirty);
            } else {
              each_blocks_1[i] = create_each_block_13(child_ctx);
              each_blocks_1[i].c();
              each_blocks_1[i].m(tbody, null);
            }
          }
          for (; i < each_blocks_1.length; i += 1) {
            each_blocks_1[i].d(1);
          }
          each_blocks_1.length = each_value_1.length;
        }
        if (dirty & /*$composition, api*/
        129) {
          each_value = ensure_array_like(
            /*$composition*/
            ctx2[7]
          );
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context12(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block12(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(div, t9);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
        if (default_slot) {
          if (default_slot.p && (!current || dirty & /*$$scope*/
          512)) {
            update_slot_base(
              default_slot,
              default_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[9],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[9]
              ) : get_slot_changes(
                default_slot_template,
                /*$$scope*/
                ctx2[9],
                dirty,
                null
              ),
              null
            );
          }
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(div);
        }
        destroy_each(each_blocks_1, detaching);
        destroy_each(each_blocks, detaching);
        if (default_slot)
          default_slot.d(detaching);
      }
    };
  }
  __name(create_fragment23, "create_fragment");
  function instance23($$self, $$props, $$invalidate) {
    let $tables, $$unsubscribe_tables = noop, $$subscribe_tables = /* @__PURE__ */ __name(() => ($$unsubscribe_tables(), $$unsubscribe_tables = subscribe(tables, ($$value) => $$invalidate(11, $tables = $$value)), tables), "$$subscribe_tables");
    let $users;
    let $composition, $$unsubscribe_composition = noop, $$subscribe_composition = /* @__PURE__ */ __name(() => ($$unsubscribe_composition(), $$unsubscribe_composition = subscribe(composition, ($$value) => $$invalidate(7, $composition = $$value)), composition), "$$subscribe_composition");
    $$self.$$.on_destroy.push(() => $$unsubscribe_tables());
    $$self.$$.on_destroy.push(() => $$unsubscribe_composition());
    let { $$slots: slots = {}, $$scope } = $$props;
    let { api } = $$props;
    let { id } = $$props;
    let { name } = $$props;
    let { composition } = $$props;
    $$subscribe_composition();
    let { tables = writable([]) } = $$props;
    $$subscribe_tables();
    let { reports } = $$props;
    let users = $tables.find((table) => table.id == "users").list;
    component_subscribe($$self, users, (value) => $$invalidate(6, $users = value));
    $$self.$$set = ($$props2) => {
      if ("api" in $$props2)
        $$invalidate(0, api = $$props2.api);
      if ("id" in $$props2)
        $$invalidate(2, id = $$props2.id);
      if ("name" in $$props2)
        $$invalidate(3, name = $$props2.name);
      if ("composition" in $$props2)
        $$subscribe_composition($$invalidate(1, composition = $$props2.composition));
      if ("tables" in $$props2)
        $$subscribe_tables($$invalidate(4, tables = $$props2.tables));
      if ("reports" in $$props2)
        $$invalidate(5, reports = $$props2.reports);
      if ("$$scope" in $$props2)
        $$invalidate(9, $$scope = $$props2.$$scope);
    };
    return [
      api,
      composition,
      id,
      name,
      tables,
      reports,
      $users,
      $composition,
      users,
      $$scope,
      slots
    ];
  }
  __name(instance23, "instance");
  var List2 = class extends SvelteComponent {
    static {
      __name(this, "List");
    }
    constructor(options) {
      super();
      init(this, options, instance23, create_fragment23, safe_not_equal, {
        api: 0,
        id: 2,
        name: 3,
        composition: 1,
        tables: 4,
        reports: 5
      });
    }
  };
  var List_default = List2;

  // plug-ins/components/rolodex/library.js
  var library = {
    Container: Container_default,
    Row: Row_default,
    Column: Column_default,
    List: List_default
  };
  var library_default = library;

  // plug-ins/components/rolodex/Rolodex.svelte
  function get_each_context13(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[17] = list[i].id;
    child_ctx[18] = list[i].type;
    child_ctx[19] = list[i].name;
    child_ctx[20] = list[i].components;
    child_ctx[21] = list[i].tables;
    child_ctx[22] = list[i].reports;
    child_ctx[24] = i;
    return child_ctx;
  }
  __name(get_each_context13, "get_each_context");
  function create_each_block13(ctx) {
    let switch_instance;
    let switch_instance_anchor;
    let current;
    var switch_value = library_default[
      /*type*/
      ctx[18]
    ];
    function switch_props(ctx2, dirty) {
      return {
        props: {
          api: (
            /*api*/
            ctx2[0]
          ),
          composition: (
            /*components*/
            ctx2[20]
          ),
          tables: (
            /*tables*/
            ctx2[21]
          ),
          reports: (
            /*reports*/
            ctx2[22]
          ),
          id: (
            /*id*/
            ctx2[17]
          ),
          name: (
            /*name*/
            ctx2[19]
          )
        }
      };
    }
    __name(switch_props, "switch_props");
    if (switch_value) {
      switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
    }
    return {
      c() {
        if (switch_instance)
          create_component(switch_instance.$$.fragment);
        switch_instance_anchor = empty();
      },
      m(target, anchor) {
        if (switch_instance)
          mount_component(switch_instance, target, anchor);
        insert(target, switch_instance_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & /*$composition*/
        64 && switch_value !== (switch_value = library_default[
          /*type*/
          ctx2[18]
        ])) {
          if (switch_instance) {
            group_outros();
            const old_component = switch_instance;
            transition_out(old_component.$$.fragment, 1, 0, () => {
              destroy_component(old_component, 1);
            });
            check_outros();
          }
          if (switch_value) {
            switch_instance = construct_svelte_component(switch_value, switch_props(ctx2, dirty));
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
          } else {
            switch_instance = null;
          }
        } else if (switch_value) {
          const switch_instance_changes = {};
          if (dirty & /*api*/
          1)
            switch_instance_changes.api = /*api*/
            ctx2[0];
          if (dirty & /*$composition*/
          64)
            switch_instance_changes.composition = /*components*/
            ctx2[20];
          if (dirty & /*$composition*/
          64)
            switch_instance_changes.tables = /*tables*/
            ctx2[21];
          if (dirty & /*$composition*/
          64)
            switch_instance_changes.reports = /*reports*/
            ctx2[22];
          if (dirty & /*$composition*/
          64)
            switch_instance_changes.id = /*id*/
            ctx2[17];
          if (dirty & /*$composition*/
          64)
            switch_instance_changes.name = /*name*/
            ctx2[19];
          switch_instance.$set(switch_instance_changes);
        }
      },
      i(local) {
        if (current)
          return;
        if (switch_instance)
          transition_in(switch_instance.$$.fragment, local);
        current = true;
      },
      o(local) {
        if (switch_instance)
          transition_out(switch_instance.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(switch_instance_anchor);
        }
        if (switch_instance)
          destroy_component(switch_instance, detaching);
      }
    };
  }
  __name(create_each_block13, "create_each_block");
  function create_fragment24(ctx) {
    let div3;
    let div0;
    let t0;
    let t1;
    let t2_value = parseInt(
      /*$w*/
      ctx[4]
    ) + "";
    let t2;
    let t3;
    let t4_value = parseInt(
      /*$h*/
      ctx[5]
    ) + "";
    let t4;
    let t5;
    let button0;
    let api_makeMovable_action;
    let t6;
    let div1;
    let api_stopWheel_action;
    let t7;
    let div2;
    let t8;
    let t9;
    let button1;
    let api_makeResizable_action;
    let div3_class_value;
    let current;
    let mounted;
    let dispose;
    let each_value = ensure_array_like(
      /*$composition*/
      ctx[6]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block13(get_each_context13(ctx, each_value, i));
    }
    const out = /* @__PURE__ */ __name((i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    }), "out");
    return {
      c() {
        div3 = element("div");
        div0 = element("div");
        t0 = text2(
          /*$caption*/
          ctx[3]
        );
        t1 = text2(" (");
        t2 = text2(t2_value);
        t3 = text2("x");
        t4 = text2(t4_value);
        t5 = text2(")\n    ");
        button0 = element("button");
        button0.innerHTML = `<i class="bi bi-x"></i>`;
        t6 = space();
        div1 = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t7 = space();
        div2 = element("div");
        t8 = text2(
          /*$status*/
          ctx[7]
        );
        t9 = space();
        button1 = element("button");
        button1.innerHTML = `<i class="bi bi-grip-horizontal"></i>`;
        attr(button0, "type", "button");
        attr(button0, "class", "btn opacity-50");
        set_style(button0, "position", "absolute");
        set_style(button0, "right", "0");
        set_style(button0, "top", "0");
        set_style(button0, "padding", ".5rem");
        attr(button0, "aria-label", "Close");
        attr(div0, "class", "card-header user-select-none tx-hi");
        toggle_class(
          div0,
          "text-warning",
          /*$selected*/
          ctx[2]
        );
        attr(div1, "class", "card-body overflow-auto m-0 p-0 tx-lo");
        attr(button1, "type", "button");
        attr(button1, "class", "btn opacity-50 outline-none float-end p-0");
        attr(button1, "aria-label", "Resize");
        attr(div2, "class", "card-footer text-body-secondary tx-hi py-0 px-1");
        attr(div3, "class", div3_class_value = "card alert-" + /*$context*/
        ctx[1] + " h-100 m-0 tx-bg");
        toggle_class(
          div3,
          "active",
          /*$selected*/
          ctx[2]
        );
      },
      m(target, anchor) {
        insert(target, div3, anchor);
        append(div3, div0);
        append(div0, t0);
        append(div0, t1);
        append(div0, t2);
        append(div0, t3);
        append(div0, t4);
        append(div0, t5);
        append(div0, button0);
        append(div3, t6);
        append(div3, div1);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div1, null);
          }
        }
        append(div3, t7);
        append(div3, div2);
        append(div2, t8);
        append(div2, t9);
        append(div2, button1);
        current = true;
        if (!mounted) {
          dispose = [
            listen(
              button0,
              "click",
              /*click_handler*/
              ctx[15]
            ),
            action_destroyer(api_makeMovable_action = /*api*/
            ctx[0].makeMovable(div0)),
            action_destroyer(api_stopWheel_action = /*api*/
            ctx[0].stopWheel(div1)),
            action_destroyer(api_makeResizable_action = /*api*/
            ctx[0].makeResizable(button1))
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (!current || dirty & /*$caption*/
        8)
          set_data(
            t0,
            /*$caption*/
            ctx2[3]
          );
        if ((!current || dirty & /*$w*/
        16) && t2_value !== (t2_value = parseInt(
          /*$w*/
          ctx2[4]
        ) + ""))
          set_data(t2, t2_value);
        if ((!current || dirty & /*$h*/
        32) && t4_value !== (t4_value = parseInt(
          /*$h*/
          ctx2[5]
        ) + ""))
          set_data(t4, t4_value);
        if (!current || dirty & /*$selected*/
        4) {
          toggle_class(
            div0,
            "text-warning",
            /*$selected*/
            ctx2[2]
          );
        }
        if (dirty & /*$composition, api*/
        65) {
          each_value = ensure_array_like(
            /*$composition*/
            ctx2[6]
          );
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context13(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block13(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(div1, null);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
        if (!current || dirty & /*$status*/
        128)
          set_data(
            t8,
            /*$status*/
            ctx2[7]
          );
        if (!current || dirty & /*$context*/
        2 && div3_class_value !== (div3_class_value = "card alert-" + /*$context*/
        ctx2[1] + " h-100 m-0 tx-bg")) {
          attr(div3, "class", div3_class_value);
        }
        if (!current || dirty & /*$context, $selected*/
        6) {
          toggle_class(
            div3,
            "active",
            /*$selected*/
            ctx2[2]
          );
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(div3);
        }
        destroy_each(each_blocks, detaching);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  __name(create_fragment24, "create_fragment");
  function instance24($$self, $$props, $$invalidate) {
    let $context;
    let $selected;
    let $caption;
    let $w;
    let $h;
    let $composition;
    let $status;
    let { api } = $$props;
    const selected = api.signal("selected");
    component_subscribe($$self, selected, (value) => $$invalidate(2, $selected = value));
    const context = api.signal("context");
    component_subscribe($$self, context, (value) => $$invalidate(1, $context = value));
    const caption = api.signal("caption");
    component_subscribe($$self, caption, (value) => $$invalidate(3, $caption = value));
    const text3 = api.signal("text");
    const status = api.signal("status");
    component_subscribe($$self, status, (value) => $$invalidate(7, $status = value));
    const w = api.signal("w");
    component_subscribe($$self, w, (value) => $$invalidate(4, $w = value));
    const h = api.signal("h");
    component_subscribe($$self, h, (value) => $$invalidate(5, $h = value));
    const composition = api.composition;
    component_subscribe($$self, composition, (value) => $$invalidate(6, $composition = value));
    onMount(() => {
    });
    const click_handler = /* @__PURE__ */ __name(() => api.removeApplication(), "click_handler");
    $$self.$$set = ($$props2) => {
      if ("api" in $$props2)
        $$invalidate(0, api = $$props2.api);
    };
    return [
      api,
      $context,
      $selected,
      $caption,
      $w,
      $h,
      $composition,
      $status,
      selected,
      context,
      caption,
      status,
      w,
      h,
      composition,
      click_handler
    ];
  }
  __name(instance24, "instance");
  var Rolodex = class extends SvelteComponent {
    static {
      __name(this, "Rolodex");
    }
    constructor(options) {
      super();
      init(this, options, instance24, create_fragment24, safe_not_equal, { api: 0 });
    }
  };
  var Rolodex_default = Rolodex;

  // plug-ins/data-tree/Tree.js
  var Signal2 = class {
    static {
      __name(this, "Signal");
    }
    constructor(initialValue = null) {
      this.value = initialValue;
      this.subscribers = [];
    }
    subscribe(subscriber) {
      if (typeof subscriber !== "function") {
        throw new Error("Subscriber must be a function");
      }
      this.subscribers.push(subscriber);
      subscriber(this.value);
      return () => this.unsubscribe(subscriber);
    }
    unsubscribe(subscriber) {
      this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
    }
    set(value) {
      if (this.value !== value) {
        this.value = value;
        this.notify();
      }
    }
    get() {
      return this.value;
    }
    notify() {
      this.subscribers.forEach((subscriber) => subscriber(this.value));
    }
  };
  var List3 = class {
    static {
      __name(this, "List");
    }
    #subscribers = [];
    #value = [];
    subscribe(subscriber) {
      if (typeof subscriber !== "function")
        throw new Error("Subscriber must be a function");
      this.#subscribers.push(subscriber);
      subscriber(this.#value);
      return () => this.unsubscribe(subscriber);
    }
    unsubscribe(subscriber) {
      this.#subscribers = this.#subscribers.filter((sub) => sub !== subscriber);
    }
    notify() {
      this.#subscribers.forEach((subscriber) => subscriber(this.#value));
    }
    // ---
    upsert(...items) {
      for (const item of items) {
        if (item.id === void 0)
          throw new Error("item must have a unique id");
        const index = this.#value.findIndex((o) => o.id === item.id);
        const exists = index !== -1;
        if (exists) {
          this.#value[index] = { ...this.#value[index], ...item };
        } else {
          this.#value.push(item);
        }
        this.notify();
      }
    }
    update(id, name, value) {
      const item = this.#value.find((o) => o.id.get() === id);
      item[name].set(value);
      this.notify();
    }
    remove(id) {
      const item = this.#value.find((o) => o.id.get() === id);
      this.#value = this.#value.filter((o) => o !== item);
      this.notify();
    }
    // Data Reading Functions
    // [Symbol.iterator]() {
    //   return this.#value[Symbol.iterator]();
    // }
    get() {
      console.log("GET HIT", this.#value);
      return this.#value;
    }
  };
  var Component2 = class _Component {
    static {
      __name(this, "Component");
    }
    id = uuid();
    type = "Container";
    name = "Untitled";
    components = new List3();
    tables = new List3();
    // reports  = new List();
    constructor(id, type, name) {
      if (id !== void 0)
        this.id = id;
      if (type !== void 0)
        this.type = type;
      if (name !== void 0)
        this.name = name;
    }
    component({ id, type, name }) {
      const component = new _Component(id, type, name);
      this.components.upsert(component);
      return component;
    }
    get() {
      return super.get();
    }
    //
    table({ id, columns }) {
      const table = new Table(id, columns);
      this.tables.upsert(table);
      return table;
    }
    //
    // report({id,type,name}){
    //   const report = new Report(id,type,name)
    //   this.reports.upsert(report);
    //   return report;
    // }
  };
  var Table = class {
    static {
      __name(this, "Table");
    }
    id = uuid();
    list = new List3();
    #columns = ["id", "value"];
    constructor(id, columns) {
      if (id !== void 0)
        this.id = id;
      if (columns !== void 0)
        this.#columns = columns;
    }
    data(...rows) {
      for (const row of rows) {
        const entries = [];
        for (const [index, name] of this.#columns.entries()) {
          entries.push([name, new Signal2(row[index])]);
        }
        const obj2 = Object.fromEntries(entries);
        this.list.upsert(obj2);
      }
    }
  };

  // plug-ins/components/Rolodex.js
  var Rolodex2 = class {
    static {
      __name(this, "Rolodex");
    }
    static extends = [Application];
    observables = {
      composition: void 0
    };
    serializables = {
      // composition: 'object',
    };
    traits = {
      async refresh() {
      },
      async execute() {
        const data = JSON.stringify(this.motif, null, "  ");
        this.send("out", data);
      }
    };
    methods = {
      initialize() {
        this.createSocket("out", 1);
      },
      mount() {
        const rng = /* @__PURE__ */ __name(function(min, max) {
          const minCeiled = Math.ceil(min);
          const maxFloored = Math.floor(max);
          return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
        }, "rng");
        const root = new Component2("application", "Container", "Application");
        const window2 = root.component({ id: "window", type: "Container", name: "Window" });
        const container = window2.component({ id: "hbox", type: "Row", name: "Horizontal Box" });
        const menu = container.component({ id: "side", type: "Column", name: "Side Menu" });
        const main = container.component({ id: "main", type: "Column", name: "Main Content" });
        const list = main.component({ id: "list", type: "List", name: "List Of Users" });
        const users = list.table({ id: "users", columns: ["id", "first", "last", "age"] });
        users.data(
          [0, "Alice", "Smith", 101],
          [1, "Bob", "Smith", 99],
          [2, "Carol", "Smith", 50]
        );
        setTimeout(() => {
          users.data([3, "Dana", "Smith", 51]);
        }, 3e3);
        setTimeout(() => {
          users.list.remove(3);
        }, 5e3);
        setInterval(() => {
          if (rng(0, 1) == 1)
            users.list.update(rng(0, 2), "age", rng(18, 164));
        }, 500);
        this.composition = root.components;
        this.foreign = new Instance(Foreign);
        this.createWindowComponent(this.foreign);
        this.component = new Rolodex_default({
          target: this.foreign.body,
          props: { api: this }
        });
        this.addDisposable(stopWheel(this.foreign.body));
      },
      destroy() {
        this.component.$destroy();
      }
    };
  };

  // plug-ins/components/index.js
  var components2 = {
    // Core
    Workspace,
    Group,
    Pipe: Pipe2,
    // Configuration
    Gradients: Gradients2,
    // UI
    Alert,
    // Reflection
    Architecture,
    Analysis,
    // Tests
    Hello,
    Rolodex: Rolodex2,
    // Data Services
    Fetch: Fetch2,
    // Applications
    Terminal,
    Editor
  };
  var components_default = components2;

  // src/System.js
  var System = class {
    static {
      __name(this, "System");
    }
    properties = {
      rootWindow: null,
      debouncedOnResize: null,
      scene: void 0
    };
    observables = {
      url: null
    };
    constraints = {};
    methods = {
      initialize() {
        this.on("name", (name) => document.title = name);
      },
      mount() {
        const node = new Instance(Node, { id: "0", name: "Workspace", origin: "0", url: this.url, type: "Workspace", data: {} });
        this.rootWindow = new Instance(components_default.Workspace, { id: node.id, name: node.name, node, svg: this.svg, scene: this.scene, parent: null, isRootWindow: true });
        this.rootWindow.start();
        const onResize = /* @__PURE__ */ __name(() => {
          this.rootWindow.w = this.svg.clientWidth;
          this.rootWindow.h = this.svg.clientHeight;
          this.rootWindow.H = this.svg.clientHeight;
        }, "onResize");
        this.debouncedOnResize = debounce_default(onResize, 10);
        window.addEventListener("resize", this.debouncedOnResize);
        onResize();
      },
      destroy() {
        this.rootWindow.stop();
        window.removeEventListener("resize", this.debouncedOnResize);
      }
    };
  };

  // src/index.js
  var themes2 = new Instance(Themes);
  themes2.theme = "nostromo";
  var system = new Instance(System);
  globalThis.system = system;
  globalThis.project = system;
  globalThis.scene = document.querySelector("#editor-scene");
  globalThis.svg = document.querySelector("#editor-svg");
  system.name = `${package_default.name} ${package_default.version}`;
  system.svg = document.querySelector("#editor-svg");
  system.scene = document.querySelector("#editor-scene");
  system.background = document.querySelector("#editor-background");
  system.url = "templates/test.xml";
  system.start();
})();
/*! Bundled license information:

chroma-js/chroma.js:
  (**
   * chroma.js - JavaScript library for color conversions
   *
   * Copyright (c) 2011-2019, Gregor Aisch
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice, this
   * list of conditions and the following disclaimer.
   *
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   * this list of conditions and the following disclaimer in the documentation
   * and/or other materials provided with the distribution.
   *
   * 3. The name Gregor Aisch may not be used to endorse or promote products
   * derived from this software without specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
   * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
   * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
   * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
   * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
   * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
   * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   *
   * -------------------------------------------------------
   *
   * chroma.js includes colors from colorbrewer2.org, which are released under
   * the following license:
   *
   * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
   * and The Pennsylvania State University.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
   * either express or implied. See the License for the specific
   * language governing permissions and limitations under the License.
   *
   * ------------------------------------------------------
   *
   * Named colors are taken from X11 Color Names.
   * http://www.w3.org/TR/css3-color/#svg-color
   *
   * @preserve
   *)
*/
