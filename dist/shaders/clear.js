"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = exports["default"] = "\nprecision highp float;\nprecision mediump sampler2D;\n\nvarying vec2 vUv;\nuniform sampler2D uTexture;\nuniform float value;\n\nvoid main () {\n  gl_FragColor = value * texture2D(uTexture, vUv);\n}\n";