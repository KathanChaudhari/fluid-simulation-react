"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = exports["default"] = "\nprecision highp float;\nprecision mediump sampler2D;\n\nvarying vec2 vUv;\nuniform sampler2D uVelocity;\nuniform sampler2D uSource;\nuniform vec2 texelSize;\nuniform float dt;\nuniform float dissipation;\n\nvoid main () {\n  vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;\n  gl_FragColor = dissipation * texture2D(uSource, coord);\n  gl_FragColor.a = 1.0;\n}\n";