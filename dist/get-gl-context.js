"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getWebGLContext;
function getWebGLContext(canvas) {
  var params = {
    alpha: false,
    depth: false,
    stencil: false,
    antialias: false
  };
  var gl = canvas.getContext('webgl2', params);
  var isWebGL2 = !!gl;
  if (!isWebGL2) {
    gl = canvas.getContext('webgl', params) || canvas.getContext('experimental-webgl', params);
  }
  var halfFloat;
  var supportLinearFiltering;
  if (isWebGL2) {
    gl.getExtension('EXT_color_buffer_float');
    supportLinearFiltering = gl.getExtension('OES_texture_float_linear');
  } else {
    halfFloat = gl.getExtension('OES_texture_half_float');
    supportLinearFiltering = gl.getExtension('OES_texture_half_float_linear');
  }
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  var halfFloatTexType = isWebGL2 ? gl.HALF_FLOAT : halfFloat.HALF_FLOAT_OES;
  var formatRGBA;
  var formatRG;
  var formatR;
  if (isWebGL2) {
    formatRGBA = getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, halfFloatTexType);
    formatRG = getSupportedFormat(gl, gl.RG16F, gl.RG, halfFloatTexType);
    formatR = getSupportedFormat(gl, gl.R16F, gl.RED, halfFloatTexType);
  } else {
    formatRGBA = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
    formatRG = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
    formatR = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
  }
  return {
    gl: gl,
    ext: {
      formatRGBA: formatRGBA,
      formatRG: formatRG,
      formatR: formatR,
      halfFloatTexType: halfFloatTexType,
      supportLinearFiltering: supportLinearFiltering
    }
  };
}
function getSupportedFormat(gl, internalFormat, format, type) {
  if (!supportRenderTextureFormat(gl, internalFormat, format, type)) {
    switch (internalFormat) {
      case gl.R16F:
        return getSupportedFormat(gl, gl.RG16F, gl.RG, type);
      case gl.RG16F:
        return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type);
      default:
        return null;
    }
  }
  return {
    internalFormat: internalFormat,
    format: format
  };
}
function supportRenderTextureFormat(gl, internalFormat, format, type) {
  var texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);
  var fbo = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
  var status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
  if (status !== gl.FRAMEBUFFER_COMPLETE) return false;
  return true;
}