export default `
precision highp float;
precision mediump sampler2D;

varying vec2 vUv;
uniform sampler2D uTexture;
uniform float uOpacity;

void main () {
  vec4 textureColor = texture2D(uTexture, vUv);
  gl_FragColor = vec4(textureColor.rgb, textureColor.a * uOpacity);
}
`
