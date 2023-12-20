"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = exports["default"] = "\nprecision highp float;\nprecision mediump sampler2D;\n\nvarying vec2 vUv;\nuniform sampler2D uTarget;\nuniform float aspectRatio;\nuniform vec3 color;\nuniform vec2 point;\nuniform float radius;\n\nvoid main () {\n  vec2 p = vUv - point.xy;\n  p.x *= aspectRatio;\n  vec3 splat = exp(-dot(p, p) / radius) * color;\n  vec3 base = texture2D(uTarget, vUv).xyz;\n  gl_FragColor = vec4(base + splat, 1.0);\n}\n";