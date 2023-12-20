"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultConfig = exports["default"] = void 0;
var _glProgram = _interopRequireDefault(require("./gl-program"));
var _getGlContext = _interopRequireDefault(require("./get-gl-context"));
var _shaders = _interopRequireDefault(require("./shaders"));
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var defaultConfig = exports.defaultConfig = {
  textureDownsample: 1,
  densityDissipation: 0.98,
  velocityDissipation: 0.99,
  pressureDissipation: 0.8,
  pressureIterations: 25,
  curl: 30,
  splatRadius: 0.005
};
var Pointer = function Pointer() {
  return {
    id: -1,
    x: 0,
    y: 0,
    dx: 0,
    dy: 0,
    down: false,
    moved: false,
    color: [30, 0, 300]
  };
};
var FluidAnimation = function FluidAnimation(_ref) {
  var _ref$opts = _ref.opts,
    opts = _ref$opts === void 0 ? {} : _ref$opts;
  var _useState = (0, _react.useState)(_objectSpread(_objectSpread({}, defaultConfig), opts.config)),
    _useState2 = _slicedToArray(_useState, 2),
    config = _useState2[0],
    setConfig = _useState2[1];
  var canvasRef = (0, _react.useRef)(null);
  var glRef = (0, _react.useRef)(null);
  var extRef = (0, _react.useRef)(null);
  var programsRef = (0, _react.useRef)({});
  var textureWidthRef = (0, _react.useRef)(null);
  var textureHeightRef = (0, _react.useRef)(null);
  var densityRef = (0, _react.useRef)(null);
  var velocityRef = (0, _react.useRef)(null);
  var divergenceRef = (0, _react.useRef)(null);
  var curlRef = (0, _react.useRef)(null);
  var pressureRef = (0, _react.useRef)(null);
  var timeRef = (0, _react.useRef)(Date.now());
  var timerRef = (0, _react.useRef)(0);
  var pointersRef = (0, _react.useRef)([Pointer()]);
  (0, _react.useEffect)(function () {
    var canvas = canvasRef.current;
    if (!canvas) return;
    var width = canvas.offsetWidth;
    var height = canvas.offsetHeight;
    if (canvas.width !== width || canvas.height !== height) {
      canvasRef.current.width = width;
      canvasRef.current.height = height;
    }
    var _getGLContext = (0, _getGlContext["default"])(canvas),
      gl = _getGLContext.gl,
      ext = _getGLContext.ext;
    glRef.current = gl;
    extRef.current = ext;
    gl.getError();
    var programs = initPrograms(gl, ext);
    programsRef.current = programs;
    initFramebuffers(gl, ext);
    initBlit(gl);
  }, []);
  var initPrograms = function initPrograms(gl, ext) {
    var programs = {};
    programs.clear = new _glProgram["default"](gl, _shaders["default"].vert, _shaders["default"].clear);
    programs.display = new _glProgram["default"](gl, _shaders["default"].vert, _shaders["default"].display);
    programs.splat = new _glProgram["default"](gl, _shaders["default"].vert, _shaders["default"].splat);
    programs.advection = new _glProgram["default"](gl, _shaders["default"].vert, ext.supportLinearFiltering ? _shaders["default"].advection : _shaders["default"].advectionManualFiltering);
    programs.divergence = new _glProgram["default"](gl, _shaders["default"].vert, _shaders["default"].divergence);
    programs.curl = new _glProgram["default"](gl, _shaders["default"].vert, _shaders["default"].curl);
    programs.vorticity = new _glProgram["default"](gl, _shaders["default"].vert, _shaders["default"].vorticity);
    programs.pressure = new _glProgram["default"](gl, _shaders["default"].vert, _shaders["default"].pressure);
    programs.gradientSubtract = new _glProgram["default"](gl, _shaders["default"].vert, _shaders["default"].gradientSubtract);
    return programs;
  };
  var initFramebuffers = function initFramebuffers(gl, ext) {
    var createFBO = function createFBO(texId, w, h, internalFormat, format, type, param) {
      gl.activeTexture(gl.TEXTURE0 + texId);
      var texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);
      var fbo = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
      gl.viewport(0, 0, w, h);
      gl.clear(gl.COLOR_BUFFER_BIT);
      return [texture, fbo, texId];
    };
    var createDoubleFBO = function createDoubleFBO(texId, w, h, internalFormat, format, type, param) {
      var fbo1 = createFBO(texId, w, h, internalFormat, format, type, param);
      var fbo2 = createFBO(texId + 1, w, h, internalFormat, format, type, param);
      return {
        get read() {
          return fbo1;
        },
        get write() {
          return fbo2;
        },
        swap: function swap() {
          var temp = fbo1;
          fbo1 = fbo2;
          fbo2 = temp;
        }
      };
    };
    textureWidthRef.current = gl.drawingBufferWidth >> defaultConfig.textureDownsample;
    textureHeightRef.current = gl.drawingBufferHeight >> defaultConfig.textureDownsample;
    var texType = ext.halfFloatTexType;
    var rgba = ext.formatRGBA;
    var rg = ext.formatRG;
    var r = ext.formatR;
    densityRef.current = createDoubleFBO(2, textureWidthRef.current, textureHeightRef.current, rgba.internalFormat, rgba.format, texType, ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST);
    velocityRef.current = createDoubleFBO(0, textureWidthRef.current, textureHeightRef.current, rg.internalFormat, rg.format, texType, ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST);
    divergenceRef.current = createFBO(4, textureWidthRef.current, textureHeightRef.current, r.internalFormat, r.format, texType, gl.NEAREST);
    curlRef.current = createFBO(5, textureWidthRef.current, textureHeightRef.current, r.internalFormat, r.format, texType, gl.NEAREST);
    pressureRef.current = createDoubleFBO(6, textureWidthRef.current, textureHeightRef.current, r.internalFormat, r.format, texType, gl.NEAREST);
  };
  var onMouseMove = function onMouseMove(e) {
    var pointer = pointersRef.current[0];
    pointer.down = true;
    pointer.moved = true;
    pointer.dx = (e.clientX - pointer.x) * 10.0;
    pointer.dy = (e.clientY - pointer.y) * 10.0;
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    pointer.color = [Math.random() + 0.2, Math.random() + 0.2, Math.random() + 0.2];
  };
  var onMouseDown = function onMouseDown(e) {
    var pointer = pointersRef.current;
    pointer.down = true;
    pointer.color = [Math.random() + 0.2, Math.random() + 0.2, Math.random() + 0.2];
  };
  var onMouseUp = function onMouseUp(e) {
    var pointer = pointersRef.current;
    pointer.down = false;
    pointer.moved = false;
  };
  var onTouchStart = function onTouchStart(e) {
    for (var i = 0; i < e.touches.length; ++i) {
      if (pointersRef.current[i]) {
        pointersRef.current[i].down = true;
        pointersRef.current[i].color = [1, 0, 0];
      } else {
        pointersRef.current[i] = {
          down: true,
          x: 0,
          y: 0,
          dx: 0,
          dy: 0,
          color: [1, 0, 0]
        };
      }
    }
  };
  var onTouchMove = function onTouchMove(e) {
    for (var i = 0; i < e.touches.length; ++i) {
      var touch = e.touches[i];
      var pointer = pointersRef.current[i];
      pointer.moved = true;
      pointer.dx = (touch.clientX - pointer.x) * 10.0;
      pointer.dy = (touch.clientY - pointer.y) * 10.0;
      pointer.x = touch.clientX;
      pointer.y = touch.clientY;
    }
  };
  var onTouchEnd = function onTouchEnd(e) {
    pointersRef.current.forEach(function (pointer) {
      pointer.down = false;
    });
  };
  var initBlit = function initBlit(gl) {
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(0);
  };
  var blit = function blit(destination) {
    var gl = glRef.current;
    gl.bindFramebuffer(gl.FRAMEBUFFER, destination);
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
  };
  var splat = function splat(gl, x, y, dx, dy, color) {
    programsRef.current.splat.bind();
    gl.uniform1i(programsRef.current.splat.uniforms.uTarget, velocityRef.current.read[2]);
    gl.uniform1f(programsRef.current.splat.uniforms.aspectRatio, canvasRef.current.width / canvasRef.current.height);
    gl.uniform2f(programsRef.current.splat.uniforms.point, x / canvasRef.current.width, 1.0 - y / canvasRef.current.height);
    gl.uniform3f(programsRef.current.splat.uniforms.color, dx, -dy, 1.0);
    gl.uniform1f(programsRef.current.splat.uniforms.radius, config.splatRadius);
    blit(velocityRef.current.write[1]);
    velocityRef.current.swap();
    gl.uniform1i(programsRef.current.splat.uniforms.uTarget, densityRef.current.read[2]);
    gl.uniform3f(programsRef.current.splat.uniforms.color, color[0] * 0.3, color[1] * 0.3, color[2] * 0.3);
    blit(densityRef.current.write[1]);
    densityRef.current.swap();
  };
  (0, _react.useEffect)(function () {
    var animationFrameId;
    var update = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var gl, now, dt, w, h, iW, iH, i, pointer, pressureTexId, _i;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              gl = glRef.current;
              now = Date.now();
              dt = Math.min((now - timeRef.current) / 1000, 0.016);
              timeRef.current = now;
              timerRef.current += 0.0001;
              w = textureWidthRef.current;
              h = textureHeightRef.current;
              iW = 1.0 / w;
              iH = 1.0 / h;
              gl.viewport(0, 0, w, h);
              programsRef.current.advection.bind();
              gl.uniform2f(programsRef.current.advection.uniforms.texelSize, iW, iH);
              gl.uniform1i(programsRef.current.advection.uniforms.uVelocity, velocityRef.current.read[2]);
              gl.uniform1i(programsRef.current.advection.uniforms.uSource, velocityRef.current.read[2]);
              gl.uniform1f(programsRef.current.advection.uniforms.dt, dt);
              gl.uniform1f(programsRef.current.advection.uniforms.dissipation, config.velocityDissipation);
              blit(velocityRef.current.write[1]);
              velocityRef.current.swap();
              gl.uniform1i(programsRef.current.advection.uniforms.uVelocity, velocityRef.current.read[2]);
              gl.uniform1i(programsRef.current.advection.uniforms.uSource, densityRef.current.read[2]);
              gl.uniform1f(programsRef.current.advection.uniforms.dissipation, config.densityDissipation);
              blit(densityRef.current.write[1]);
              densityRef.current.swap();
              for (i = 0; i < pointersRef.current.length; i++) {
                pointer = pointersRef.current[i];
                if (pointer.moved) {
                  splat(gl, pointer.x, pointer.y, pointer.dx, pointer.dy, pointer.color);
                  pointer.moved = false; // Reset the moved flag
                }
              }

              programsRef.current.curl.bind();
              gl.uniform2f(programsRef.current.curl.uniforms.texelSize, iW, iH);
              gl.uniform1i(programsRef.current.curl.uniforms.uVelocity, velocityRef.current.read[2]);
              blit(curlRef.current[1]);
              programsRef.current.vorticity.bind();
              gl.uniform2f(programsRef.current.vorticity.uniforms.texelSize, iW, iH);
              gl.uniform1i(programsRef.current.vorticity.uniforms.uVelocity, velocityRef.current.read[2]);
              gl.uniform1i(programsRef.current.vorticity.uniforms.uCurl, curlRef.current[2]);
              gl.uniform1f(programsRef.current.vorticity.uniforms.curl, config.curl);
              gl.uniform1f(programsRef.current.vorticity.uniforms.dt, dt);
              blit(velocityRef.current.write[1]);
              velocityRef.current.swap();
              programsRef.current.divergence.bind();
              gl.uniform2f(programsRef.current.divergence.uniforms.texelSize, iW, iH);
              gl.uniform1i(programsRef.current.divergence.uniforms.uVelocity, velocityRef.current.read[2]);
              blit(divergenceRef.current[1]);
              programsRef.current.clear.bind();
              pressureTexId = pressureRef.current.read[2];
              gl.activeTexture(gl.TEXTURE0 + pressureTexId);
              gl.bindTexture(gl.TEXTURE_2D, pressureRef.current.read[0]);
              gl.uniform1i(programsRef.current.clear.uniforms.uTexture, pressureTexId);
              gl.uniform1f(programsRef.current.clear.uniforms.value, config.pressureDissipation);
              blit(pressureRef.current.write[1]);
              pressureRef.current.swap();
              programsRef.current.pressure.bind();
              gl.uniform2f(programsRef.current.pressure.uniforms.texelSize, iW, iH);
              gl.uniform1i(programsRef.current.pressure.uniforms.uDivergence, divergenceRef.current[2]);
              pressureTexId = pressureRef.current.read[2];
              gl.uniform1i(programsRef.current.pressure.uniforms.uPressure, pressureTexId);
              gl.activeTexture(gl.TEXTURE0 + pressureTexId);
              for (_i = 0; _i < config.pressureIterations; _i++) {
                gl.bindTexture(gl.TEXTURE_2D, pressureRef.current.read[0]);
                blit(pressureRef.current.write[1]);
                pressureRef.current.swap();
              }
              programsRef.current.gradientSubtract.bind();
              gl.uniform2f(programsRef.current.gradientSubtract.uniforms.texelSize, iW, iH);
              gl.uniform1i(programsRef.current.gradientSubtract.uniforms.uPressure, pressureRef.current.read[2]);
              gl.uniform1i(programsRef.current.gradientSubtract.uniforms.uVelocity, velocityRef.current.read[2]);
              blit(velocityRef.current.write[1]);
              velocityRef.current.swap();
              gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
              programsRef.current.display.bind();
              gl.uniform1i(programsRef.current.display.uniforms.uTexture, densityRef.current.read[2]);
              blit(null);
              animationFrameId = requestAnimationFrame(update);
            case 66:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function update() {
        return _ref2.apply(this, arguments);
      };
    }();
    animationFrameId = requestAnimationFrame(update);
    return function () {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement("canvas", {
    ref: canvasRef,
    onMouseMove: onMouseMove,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    style: {
      width: '100%',
      height: '100%'
    }
  });
};
var _default = exports["default"] = FluidAnimation; // import GLProgram from './gl-program'
// import getGLContext from './get-gl-context'
// import shaders from './shaders'
// export const defaultConfig = {
//   textureDownsample: 1,
//   densityDissipation: 0.98,
//   velocityDissipation: 0.99,
//   pressureDissipation: 0.8,
//   pressureIterations: 25,
//   curl: 30,
//   splatRadius: 0.005
// }
// class Pointer {
//   constructor() {
//     this.id = -1
//     this.x = 0
//     this.y = 0
//     this.dx = 0
//     this.dy = 0
//     this.down = false
//     this.moved = false
//     this.color = [30, 0, 300]
//   }
// }
// export default class FluidAnimation {
//   constructor(opts) {
//     const {
//       canvas,
//       config = {
//         ...defaultConfig,
//         ...opts.config
//       }
//     } = opts
//     this._canvas = canvas
//     this._config = config
//     this._pointers = [ new Pointer() ]
//     this._splatStack = []
//     const { gl, ext } = getGLContext(canvas)
//     this._gl = gl
//     this._ext = ext
//     this._initPrograms()
//     this._initBlit()
//     this.resize()
//     this._time = Date.now()
//     this._timer = 0
//   }
//   get config() {
//     return this._config
//   }
//   set config(config) {
//     this._config = config
//   }
//   get width() {
//     return this._canvas.width
//   }
//   get height() {
//     return this._canvas.height
//   }
//   addSplat(splat) {
//     this._splatStack.push([ splat ])
//   }
//   addSplats(splats) {
//     this._splatStack.push(Array.isArray(splats) ? splats : [ splats ])
//   }
//   addRandomSplats(count) {
//     const splats = []
//     for (let i = 0; i < count; ++i) {
//       splats.push(this._getRandomSplat())
//     }
//     this.addSplats(splats)
//   }
//   resize() {
//     const {
//       width,
//       height
//     } = this._canvas
//     if (this._width !== width || this._height !== height) {
//       this._width = width
//       this._height = height
//       this._initFramebuffers()
//     }
//   }
//   onMouseMove = (e) => {
//     // Assuming you want the mouse to always paint white when moving, regardless of the mouse button state
//     this._pointers[0].down = true; // Set to true to simulate painting as moving
//     this._pointers[0].moved = true; // This should always be true if we are simulating painting on move
//     this._pointers[0].dx = (e.offsetX - this._pointers[0].x) * 10.0;
//     this._pointers[0].dy = (e.offsetY - this._pointers[0].y) * 10.0;
//     this._pointers[0].x = e.offsetX;
//     this._pointers[0].y = e.offsetY;
//      this._pointers[0].color = [
//       Math.random() + 0.2,
//       Math.random() + 0.2,
//       Math.random() + 0.2
//     ]; // RGB normalized for brown
//  // Set the color to white
//   }
//   onMouseDown = (e) => {
//     this._pointers[0].down = true
//     this._pointers[0].color = [
//       Math.random() + 0.2,
//       Math.random() + 0.2,
//       Math.random() + 0.2
//     ] // RGB normalized for brown
//   }
//   onMouseUp = (e) => {
//     this._pointers[0].down = false;
//     // You might want to reset the moved state here as well, depending on your needs
//     this._pointers[0].moved = false;
//   }
//   onTouchStart = (e) => {
//     for (let i = 0; i < e.touches.length; ++i) {
//       this._pointers[i].down = true
//       this._pointers[i].color = [0.137, 0.129, 0.129];
//     }
//   }
//   onTouchMove = (e) => {
//     for (let i = 0; i < e.touches.length; ++i) {
//       const touch = e.touches[i]
//       this._pointers[i].moved = this._pointers[i].down
//       this._pointers[i].dx = (touch.clientX - this._pointers[i].x) * 10.0
//       this._pointers[i].dy = (touch.clientY - this._pointers[i].y) * 10.0
//       this._pointers[i].x = touch.clientX
//       this._pointers[i].y = touch.clientY
//     }
//   }
//   onTouchEnd = (e) => {
//     for (let i = 0; i < e.touches.length; ++i) {
//       this._pointers[i].down = false
//     }
//   }
//   _initPrograms() {
//     const gl = this._gl
//     const ext = this._ext
//     this._programs = { }
//     this._programs.clear = new GLProgram(gl, shaders.vert, shaders.clear)
//     this._programs.display = new GLProgram(gl, shaders.vert, shaders.display)
//     this._programs.splat = new GLProgram(gl, shaders.vert, shaders.splat)
//     this._programs.advection = new GLProgram(gl, shaders.vert, ext.supportLinearFiltering
//       ? shaders.advection
//       : shaders.advectionManualFiltering
//     )
//     this._programs.divergence = new GLProgram(gl, shaders.vert, shaders.divergence)
//     this._programs.curl = new GLProgram(gl, shaders.vert, shaders.curl)
//     this._programs.vorticity = new GLProgram(gl, shaders.vert, shaders.vorticity)
//     this._programs.pressure = new GLProgram(gl, shaders.vert, shaders.pressure)
//     this._programs.gradientSubtract = new GLProgram(gl, shaders.vert, shaders.gradientSubtract)
//   }
//   _initFramebuffers() {
//     const gl = this._gl
//     const ext = this._ext
//     function createFBO(texId, w, h, internalFormat, format, type, param) {
//       gl.activeTexture(gl.TEXTURE0 + texId)
//       const texture = gl.createTexture()
//       gl.bindTexture(gl.TEXTURE_2D, texture)
//       gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param)
//       gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param)
//       gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
//       gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
//       gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null)
//       const fbo = gl.createFramebuffer()
//       gl.bindFramebuffer(gl.FRAMEBUFFER, fbo)
//       gl.framebufferTexture2D(
//         gl.FRAMEBUFFER,
//         gl.COLOR_ATTACHMENT0,
//         gl.TEXTURE_2D,
//         texture,
//         0
//       )
//       gl.viewport(0, 0, w, h)
//       gl.clear(gl.COLOR_BUFFER_BIT)
//       return [texture, fbo, texId]
//     }
//     function createDoubleFBO(texId, w, h, internalFormat, format, type, param) {
//       let fbo1 = createFBO(texId, w, h, internalFormat, format, type, param)
//       let fbo2 = createFBO(texId + 1, w, h, internalFormat, format, type, param)
//       return {
//         get read() {
//           return fbo1
//         },
//         get write() {
//           return fbo2
//         },
//         swap() {
//           const temp = fbo1
//           fbo1 = fbo2
//           fbo2 = temp
//         }
//       }
//     }
//     this._textureWidth = gl.drawingBufferWidth >> this._config.textureDownsample
//     this._textureHeight = gl.drawingBufferHeight >> this._config.textureDownsample
//     const texType = ext.halfFloatTexType
//     const rgba = ext.formatRGBA
//     const rg = ext.formatRG
//     const r = ext.formatR
//     this._density = createDoubleFBO(
//       2,
//       this._textureWidth,
//       this._textureHeight,
//       rgba.internalFormat,
//       rgba.format,
//       texType,
//       ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST
//     )
//     this._velocity = createDoubleFBO(
//       0,
//       this._textureWidth,
//       this._textureHeight,
//       rg.internalFormat,
//       rg.format,
//       texType,
//       ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST
//     )
//     this._divergence = createFBO(
//       4,
//       this._textureWidth,
//       this._textureHeight,
//       r.internalFormat,
//       r.format,
//       texType,
//       gl.NEAREST
//     )
//     this._curl = createFBO(
//       5,
//       this._textureWidth,
//       this._textureHeight,
//       r.internalFormat,
//       r.format,
//       texType,
//       gl.NEAREST
//     )
//     this._pressure = createDoubleFBO(
//       6,
//       this._textureWidth,
//       this._textureHeight,
//       r.internalFormat,
//       r.format,
//       texType,
//       gl.NEAREST
//     )
//   }
//   _initBlit() {
//     const gl = this._gl
//     gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
//     gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW)
//     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer())
//     gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW)
//     gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)
//     gl.enableVertexAttribArray(0)
//   }
//   _blit = (destination) => {
//     const gl = this._gl
//     gl.bindFramebuffer(gl.FRAMEBUFFER, destination)
//     gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0)
//   }
//   _splat(x, y, dx, dy, color) {
//     const gl = this._gl
//     this._programs.splat.bind()
//     gl.uniform1i(this._programs.splat.uniforms.uTarget, this._velocity.read[2])
//     gl.uniform1f(this._programs.splat.uniforms.aspectRatio, this._canvas.width / this._canvas.height)
//     gl.uniform2f(this._programs.splat.uniforms.point, x / this._canvas.width, 1.0 - y / this._canvas.height)
//     gl.uniform3f(this._programs.splat.uniforms.color, dx, -dy, 1.0)
//     gl.uniform1f(this._programs.splat.uniforms.radius, this._config.splatRadius)
//     this._blit(this._velocity.write[1])
//     this._velocity.swap()
//     gl.uniform1i(this._programs.splat.uniforms.uTarget, this._density.read[2])
//     gl.uniform3f(this._programs.splat.uniforms.color, color[0] * 0.3, color[1] * 0.3, color[2] * 0.3)
//     this._blit(this._density.write[1])
//     this._density.swap()
//   }
//   _addSplat(splat) {
//     const { x, y, dx, dy, color } = splat
//     if (x === undefined) return
//     if (y === undefined) return
//     if (dx === undefined) return
//     if (dy === undefined) return
//     if (color === undefined) return
//     this._splat(x, y, dx, dy, color)
//   }
//   _addSplats(splats) {
//     for (const splat of splats) {
//       this._addSplat(splat)
//     }
//   }
//   _getRandomSplat() {
//     const color = [ Math.random() * 10, Math.random() * 10, Math.random() * 10 ]
//     const x = this._canvas.width * Math.random()
//     const y = this._canvas.height * Math.random()
//     const dx = 1000 * (Math.random() - 0.5)
//     const dy = 1000 * (Math.random() - 0.5)
//     return { x, y, dx, dy, color }
//   }
//   update() {
//     const gl = this._gl
//     const dt = Math.min((Date.now() - this._time) / 1000, 0.016)
//     this._time = Date.now()
//     this._timer += 0.0001
//     const w = this._textureWidth
//     const h = this._textureHeight
//     const iW = 1.0 / w
//     const iH = 1.0 / h
//     gl.viewport(0, 0, w, h)
//     if (this._splatStack.length > 0) {
//       this._addSplats(this._splatStack.pop())
//     }
//     this._programs.advection.bind()
//     gl.uniform2f(this._programs.advection.uniforms.texelSize, iW, iH)
//     gl.uniform1i(this._programs.advection.uniforms.uVelocity, this._velocity.read[2])
//     gl.uniform1i(this._programs.advection.uniforms.uSource, this._velocity.read[2])
//     gl.uniform1f(this._programs.advection.uniforms.dt, dt)
//     gl.uniform1f(
//       this._programs.advection.uniforms.dissipation,
//       this._config.velocityDissipation
//     )
//     this._blit(this._velocity.write[1])
//     this._velocity.swap()
//     gl.uniform1i(this._programs.advection.uniforms.uVelocity, this._velocity.read[2])
//     gl.uniform1i(this._programs.advection.uniforms.uSource, this._density.read[2])
//     gl.uniform1f(
//       this._programs.advection.uniforms.dissipation,
//       this._config.densityDissipation
//     )
//     this._blit(this._density.write[1])
//     this._density.swap()
//     for (let i = 0; i < this._pointers.length; i++) {
//       const pointer = this._pointers[i]
//       if (pointer.moved) {
//         this._splat(pointer.x, pointer.y, pointer.dx, pointer.dy, pointer.color)
//         pointer.moved = false
//       }
//     }
//     this._programs.curl.bind()
//     gl.uniform2f(this._programs.curl.uniforms.texelSize, iW, iH)
//     gl.uniform1i(this._programs.curl.uniforms.uVelocity, this._velocity.read[2])
//     this._blit(this._curl[1])
//     this._programs.vorticity.bind()
//     gl.uniform2f(this._programs.vorticity.uniforms.texelSize, iW, iH)
//     gl.uniform1i(this._programs.vorticity.uniforms.uVelocity, this._velocity.read[2])
//     gl.uniform1i(this._programs.vorticity.uniforms.uCurl, this._curl[2])
//     gl.uniform1f(this._programs.vorticity.uniforms.curl, this._config.curl)
//     gl.uniform1f(this._programs.vorticity.uniforms.dt, dt)
//     this._blit(this._velocity.write[1])
//     this._velocity.swap()
//     this._programs.divergence.bind()
//     gl.uniform2f(this._programs.divergence.uniforms.texelSize, iW, iH)
//     gl.uniform1i(this._programs.divergence.uniforms.uVelocity, this._velocity.read[2])
//     this._blit(this._divergence[1])
//     this._programs.clear.bind()
//     let pressureTexId = this._pressure.read[2]
//     gl.activeTexture(gl.TEXTURE0 + pressureTexId)
//     gl.bindTexture(gl.TEXTURE_2D, this._pressure.read[0])
//     gl.uniform1i(this._programs.clear.uniforms.uTexture, pressureTexId)
//     gl.uniform1f(this._programs.clear.uniforms.value, this._config.pressureDissipation)
//     this._blit(this._pressure.write[1])
//     this._pressure.swap()
//     this._programs.pressure.bind()
//     gl.uniform2f(this._programs.pressure.uniforms.texelSize, iW, iH)
//     gl.uniform1i(this._programs.pressure.uniforms.uDivergence, this._divergence[2])
//     pressureTexId = this._pressure.read[2]
//     gl.uniform1i(this._programs.pressure.uniforms.uPressure, pressureTexId)
//     gl.activeTexture(gl.TEXTURE0 + pressureTexId)
//     for (let i = 0; i < this._config.pressureIterations; i++) {
//       gl.bindTexture(gl.TEXTURE_2D, this._pressure.read[0])
//       this._blit(this._pressure.write[1])
//       this._pressure.swap()
//     }
//     this._programs.gradientSubtract.bind()
//     gl.uniform2f(this._programs.gradientSubtract.uniforms.texelSize, iW, iH)
//     gl.uniform1i(this._programs.gradientSubtract.uniforms.uPressure, this._pressure.read[2])
//     gl.uniform1i(this._programs.gradientSubtract.uniforms.uVelocity, this._velocity.read[2])
//     this._blit(this._velocity.write[1])
//     this._velocity.swap()
//     gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)
//     this._programs.display.bind()
//     gl.uniform1i(this._programs.display.uniforms.uTexture, this._density.read[2])
//     this._blit(null)
//   }
// }