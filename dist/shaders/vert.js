"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = exports["default"] = "\nprecision highp float;\nprecision mediump sampler2D;\n\nattribute vec2 aPosition;\nvarying vec2 vUv;\nvarying vec2 vL;\nvarying vec2 vR;\nvarying vec2 vT;\nvarying vec2 vB;\nuniform vec2 texelSize;\n\nvoid main () {\n  vUv = aPosition * 0.5 + 0.5;\n  vL = vUv - vec2(texelSize.x, 0.0);\n  vR = vUv + vec2(texelSize.x, 0.0);\n  vT = vUv + vec2(0.0, texelSize.y);\n  vB = vUv - vec2(0.0, texelSize.y);\n  gl_Position = vec4(aPosition, 0.0, 1.0);\n}\n";