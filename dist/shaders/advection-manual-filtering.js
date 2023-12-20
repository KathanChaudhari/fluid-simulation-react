"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = exports["default"] = "\nprecision highp float;\nprecision mediump sampler2D;\n\nvarying vec2 vUv;\nuniform sampler2D uVelocity;\nuniform sampler2D uSource;\nuniform vec2 texelSize;\nuniform float dt;\nuniform float dissipation;\n\nvec4 bilerp (in sampler2D sam, in vec2 p) {\n  vec4 st;\n  st.xy = floor(p - 0.5) + 0.5;\n  st.zw = st.xy + 1.0;\n  vec4 uv = st * texelSize.xyxy;\n  vec4 a = texture2D(sam, uv.xy);\n  vec4 b = texture2D(sam, uv.zy);\n  vec4 c = texture2D(sam, uv.xw);\n  vec4 d = texture2D(sam, uv.zw);\n  vec2 f = p - st.xy;\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\nvoid main () {\n  vec2 coord = gl_FragCoord.xy - dt * texture2D(uVelocity, vUv).xy;\n  gl_FragColor = dissipation * bilerp(uSource, coord);\n  gl_FragColor.a = 1.0;\n}\n";