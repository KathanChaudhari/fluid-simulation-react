"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _advectionManualFiltering = _interopRequireDefault(require("./advection-manual-filtering"));
var _advection = _interopRequireDefault(require("./advection"));
var _clear = _interopRequireDefault(require("./clear"));
var _curl = _interopRequireDefault(require("./curl"));
var _display = _interopRequireDefault(require("./display"));
var _divergence = _interopRequireDefault(require("./divergence"));
var _gradientSubtract = _interopRequireDefault(require("./gradient-subtract"));
var _pressure = _interopRequireDefault(require("./pressure"));
var _splat = _interopRequireDefault(require("./splat"));
var _vert = _interopRequireDefault(require("./vert"));
var _vorticity = _interopRequireDefault(require("./vorticity"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  advectionManualFiltering: _advectionManualFiltering["default"],
  advection: _advection["default"],
  clear: _clear["default"],
  curl: _curl["default"],
  display: _display["default"],
  divergence: _divergence["default"],
  gradientSubtract: _gradientSubtract["default"],
  pressure: _pressure["default"],
  splat: _splat["default"],
  vert: _vert["default"],
  vorticity: _vorticity["default"]
};