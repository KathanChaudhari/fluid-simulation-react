"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = exports["default"] = "\nprecision highp float;\nprecision mediump sampler2D;\n\nvarying vec2 vUv;\nvarying vec2 vL;\nvarying vec2 vR;\nvarying vec2 vT;\nvarying vec2 vB;\nuniform sampler2D uVelocity;\n\nvec2 sampleVelocity (in vec2 uv) {\n  vec2 multiplier = vec2(1.0, 1.0);\n  if (uv.x < 0.0) { uv.x = 0.0; multiplier.x = -1.0; };\n  if (uv.x > 1.0) { uv.x = 1.0; multiplier.x = -1.0; };\n  if (uv.y < 0.0) { uv.y = 0.0; multiplier.y = -1.0; };\n  if (uv.y > 1.0) { uv.y = 1.0; multiplier.y = -1.0; };\n  return multiplier * texture2D(uVelocity, uv).xy;\n}\n\nvoid main () {\n  float L = sampleVelocity(vL).x;\n  float R = sampleVelocity(vR).x;\n  float T = sampleVelocity(vT).y;\n  float B = sampleVelocity(vB).y;\n  float div = 0.5 * (R - L + T - B);\n  gl_FragColor = vec4(div, 0.0, 0.0, 1.0);\n}\n";