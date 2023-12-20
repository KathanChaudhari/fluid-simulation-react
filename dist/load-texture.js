"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = loadTexture;
function loadTexture(gl, texId, url) {
  gl.activeTexture(gl.TEXTURE0 + texId);
  var texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  var level = 0;
  var internalFormat = gl.RGBA;
  var width = 1;
  var height = 1;
  var border = 0;
  var srcFormat = gl.RGBA;
  var srcType = gl.UNSIGNED_BYTE;
  var pixel = new Uint8Array([0, 0, 255, 255]);
  gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, width, height, border, srcFormat, srcType, pixel);
  var image = new window.Image();
  image.onload = function () {
    gl.activeTexture(gl.TEXTURE0 + texId);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, srcFormat, srcType, image);
    if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
      gl.generateMipmap(gl.TEXTURE_2D);
    } else {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    }
  };
  image.src = url;
  return texture;
}
function isPowerOf2(value) {
  return (value & value - 1) === 0;
}