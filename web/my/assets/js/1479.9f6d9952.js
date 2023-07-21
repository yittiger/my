(window.webpackJsonp=window.webpackJsonp||[]).push([[1479],{2844:function(e,t,r){"use strict";var n,i=r(611),o=r(1131),a=r(427),s=r(964),u=r(902),f=["experimental-webgl","webgl","webkit-3d","moz-webgl"];function h(e,t){for(var r=f.length,n=0;n<r;++n)try{var i=e.getContext(f[n],t);if(i)return i}catch(e){}return null}var c=r(430),_=35044;function l(e){switch(e){case 34962:return Float32Array;case 34963:return Uint32Array;default:return Float32Array}}var d=function(){function e(e,t){this.array=null,this.type=e,Object(c.a)(34962===e||34963===e,62),this.usage=void 0!==t?t:_}return e.prototype.ofSize=function(e){this.array=new(l(this.type))(e)},e.prototype.fromArray=function(e){this.array=l(this.type).from(e)},e.prototype.fromArrayBuffer=function(e){this.array=new(l(this.type))(e)},e.prototype.getType=function(){return this.type},e.prototype.getArray=function(){return this.array},e.prototype.getUsage=function(){return this.usage},e.prototype.getSize=function(){return this.array?this.array.length:0},e}(),p=r(1128),g=r(980),m=r(803),v="webglcontextlost",y="webglcontextrestored",b=r(901),E=function(){function e(e){this.gl_=e.webGlContext;var t=this.gl_;this.scaleRatio_=e.scaleRatio||1,this.renderTargetTexture_=t.createTexture(),this.renderTargetTextureSize_=null,this.frameBuffer_=t.createFramebuffer();var r=t.createShader(t.VERTEX_SHADER);t.shaderSource(r,e.vertexShader||"\n  precision mediump float;\n  \n  attribute vec2 a_position;\n  varying vec2 v_texCoord;\n  varying vec2 v_screenCoord;\n  \n  uniform vec2 u_screenSize;\n   \n  void main() {\n    v_texCoord = a_position * 0.5 + 0.5;\n    v_screenCoord = v_texCoord * u_screenSize;\n    gl_Position = vec4(a_position, 0.0, 1.0);\n  }\n"),t.compileShader(r);var n=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(n,e.fragmentShader||"\n  precision mediump float;\n   \n  uniform sampler2D u_image;\n   \n  varying vec2 v_texCoord;\n   \n  void main() {\n    gl_FragColor = texture2D(u_image, v_texCoord);\n  }\n"),t.compileShader(n),this.renderTargetProgram_=t.createProgram(),t.attachShader(this.renderTargetProgram_,r),t.attachShader(this.renderTargetProgram_,n),t.linkProgram(this.renderTargetProgram_),this.renderTargetVerticesBuffer_=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,this.renderTargetVerticesBuffer_),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,-1,1,1,-1,1]),t.STATIC_DRAW),this.renderTargetAttribLocation_=t.getAttribLocation(this.renderTargetProgram_,"a_position"),this.renderTargetUniformLocation_=t.getUniformLocation(this.renderTargetProgram_,"u_screenSize"),this.renderTargetTextureLocation_=t.getUniformLocation(this.renderTargetProgram_,"u_image"),this.uniforms_=[],e.uniforms&&Object.keys(e.uniforms).forEach(function(r){this.uniforms_.push({value:e.uniforms[r],location:t.getUniformLocation(this.renderTargetProgram_,r)})}.bind(this))}return e.prototype.getGL=function(){return this.gl_},e.prototype.init=function(e){var t=this.getGL(),r=[t.drawingBufferWidth*this.scaleRatio_,t.drawingBufferHeight*this.scaleRatio_];if(t.bindFramebuffer(t.FRAMEBUFFER,this.getFrameBuffer()),t.viewport(0,0,r[0],r[1]),!this.renderTargetTextureSize_||this.renderTargetTextureSize_[0]!==r[0]||this.renderTargetTextureSize_[1]!==r[1]){this.renderTargetTextureSize_=r;var n=t.RGBA,i=t.RGBA,o=t.UNSIGNED_BYTE;t.bindTexture(t.TEXTURE_2D,this.renderTargetTexture_),t.texImage2D(t.TEXTURE_2D,0,n,r[0],r[1],0,i,o,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.renderTargetTexture_,0)}},e.prototype.apply=function(e,t){var r=this.getGL(),n=e.size;r.bindFramebuffer(r.FRAMEBUFFER,t?t.getFrameBuffer():null),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,this.renderTargetTexture_),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.enable(r.BLEND),r.blendFunc(r.ONE,r.ONE_MINUS_SRC_ALPHA),r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight),r.bindBuffer(r.ARRAY_BUFFER,this.renderTargetVerticesBuffer_),r.useProgram(this.renderTargetProgram_),r.enableVertexAttribArray(this.renderTargetAttribLocation_),r.vertexAttribPointer(this.renderTargetAttribLocation_,2,r.FLOAT,!1,0,0),r.uniform2f(this.renderTargetUniformLocation_,n[0],n[1]),r.uniform1i(this.renderTargetTextureLocation_,0),this.applyUniforms(e),r.drawArrays(r.TRIANGLES,0,6)},e.prototype.getFrameBuffer=function(){return this.frameBuffer_},e.prototype.applyUniforms=function(e){var t,r=this.getGL(),n=1;this.uniforms_.forEach((function(i){if((t="function"==typeof i.value?i.value(e):i.value)instanceof HTMLCanvasElement||t instanceof ImageData)i.texture||(i.texture=r.createTexture()),r.activeTexture(r["TEXTURE"+n]),r.bindTexture(r.TEXTURE_2D,i.texture),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),t instanceof ImageData?r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,t.width,t.height,0,r.UNSIGNED_BYTE,new Uint8Array(t.data)):r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t),r.uniform1i(i.location,n++);else if(Array.isArray(t))switch(t.length){case 2:return void r.uniform2f(i.location,t[0],t[1]);case 3:return void r.uniform3f(i.location,t[0],t[1],t[2]);case 4:return void r.uniform4f(i.location,t[0],t[1],t[2],t[3]);default:return}else"number"==typeof t&&r.uniform1f(i.location,t)}))},e}(),T=r(425),R=r(572);function x(e,t){return e[0]=t[0],e[1]=t[1],e[4]=t[2],e[5]=t[3],e[12]=t[4],e[13]=t[5],e}var A,C=r(410),L=r(411),S=(A=function(e,t){return(A=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}A(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),P="u_projectionMatrix",F="u_offsetScaleMatrix",O="u_offsetRotateMatrix",w="u_time",U="u_zoom",D="u_resolution",G={UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123,UNSIGNED_INT:5125,FLOAT:5126};function B(e){switch(e){case G.UNSIGNED_BYTE:return Uint8Array.BYTES_PER_ELEMENT;case G.UNSIGNED_SHORT:return Uint16Array.BYTES_PER_ELEMENT;case G.UNSIGNED_INT:return Uint32Array.BYTES_PER_ELEMENT;case G.FLOAT:default:return Float32Array.BYTES_PER_ELEMENT}}var I=function(e){function t(t){var r=e.call(this)||this,i=t||{};r.boundHandleWebGLContextLost_=r.handleWebGLContextLost.bind(r),r.boundHandleWebGLContextRestored_=r.handleWebGLContextRestored.bind(r),r.canvas_=document.createElement("canvas"),r.canvas_.style.position="absolute",r.canvas_.style.left="0",r.gl_=h(r.canvas_);var o=r.getGL();if(r.bufferCache_={},r.currentProgram_=null,Object(c.a)(Object(L.f)(function(){if(!n){var e=h(document.createElement("canvas"));e&&(n=e.getSupportedExtensions())}return n}(),"OES_element_index_uint"),63),o.getExtension("OES_element_index_uint"),r.canvas_.addEventListener(v,r.boundHandleWebGLContextLost_),r.canvas_.addEventListener(y,r.boundHandleWebGLContextRestored_),r.offsetRotateMatrix_=Object(R.c)(),r.offsetScaleMatrix_=Object(R.c)(),r.tmpMat4_=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],r.uniformLocations_={},r.attribLocations_={},r.uniforms_=[],i.uniforms)for(var a in i.uniforms)r.uniforms_.push({name:a,value:i.uniforms[a]});return r.postProcessPasses_=i.postProcesses?i.postProcesses.map((function(e){return new E({webGlContext:o,scaleRatio:e.scaleRatio,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,uniforms:e.uniforms})})):[new E({webGlContext:o})],r.shaderCompileErrors_=null,r.startTime_=Date.now(),r}return S(t,e),t.prototype.bindBuffer=function(e){var t=this.getGL(),r=Object(C.c)(e),n=this.bufferCache_[r];n||(n={buffer:e,webGlBuffer:t.createBuffer()},this.bufferCache_[r]=n);t.bindBuffer(e.getType(),n.webGlBuffer)},t.prototype.flushBufferData=function(e){var t=this.getGL();this.bindBuffer(e),t.bufferData(e.getType(),e.getArray(),e.getUsage())},t.prototype.deleteBuffer=function(e){var t=this.getGL(),r=Object(C.c)(e),n=this.bufferCache_[r];t.isContextLost()||t.deleteBuffer(n.buffer),delete this.bufferCache_[r]},t.prototype.disposeInternal=function(){this.canvas_.removeEventListener(v,this.boundHandleWebGLContextLost_),this.canvas_.removeEventListener(y,this.boundHandleWebGLContextRestored_)},t.prototype.prepareDraw=function(e){var t=this.getGL(),r=this.getCanvas(),n=e.size,i=e.pixelRatio;r.width=n[0]*i,r.height=n[1]*i,r.style.width=n[0]+"px",r.style.height=n[1]+"px",t.useProgram(this.currentProgram_);for(var o=this.postProcessPasses_.length-1;o>=0;o--)this.postProcessPasses_[o].init(e);t.bindTexture(t.TEXTURE_2D,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.useProgram(this.currentProgram_),this.applyFrameState(e),this.applyUniforms(e)},t.prototype.prepareDrawToRenderTarget=function(e,t,r){var n=this.getGL(),i=t.getSize();n.bindFramebuffer(n.FRAMEBUFFER,t.getFramebuffer()),n.viewport(0,0,i[0],i[1]),n.bindTexture(n.TEXTURE_2D,t.getTexture()),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.enable(n.BLEND),n.blendFunc(n.ONE,r?n.ZERO:n.ONE_MINUS_SRC_ALPHA),n.useProgram(this.currentProgram_),this.applyFrameState(e),this.applyUniforms(e)},t.prototype.drawElements=function(e,t){var r=this.getGL(),n=r.UNSIGNED_INT,i=t-e,o=4*e;r.drawElements(r.TRIANGLES,i,n,o)},t.prototype.finalizeDraw=function(e){for(var t=0;t<this.postProcessPasses_.length;t++)this.postProcessPasses_[t].apply(e,this.postProcessPasses_[t+1]||null)},t.prototype.getCanvas=function(){return this.canvas_},t.prototype.getGL=function(){return this.gl_},t.prototype.applyFrameState=function(e){var t=e.size,r=e.viewState.rotation,n=Object(R.g)(this.offsetScaleMatrix_);Object(R.i)(n,2/t[0],2/t[1]);var i=Object(R.g)(this.offsetRotateMatrix_);0!==r&&Object(R.h)(i,-r),this.setUniformMatrixValue(F,x(this.tmpMat4_,n)),this.setUniformMatrixValue(O,x(this.tmpMat4_,i)),this.setUniformFloatValue(w,.001*(Date.now()-this.startTime_)),this.setUniformFloatValue(U,e.viewState.zoom),this.setUniformFloatValue(D,e.viewState.resolution)},t.prototype.applyUniforms=function(e){var t,r=this.getGL(),n=0;this.uniforms_.forEach(function(i){if((t="function"==typeof i.value?i.value(e):i.value)instanceof HTMLCanvasElement||t instanceof HTMLImageElement||t instanceof ImageData)i.texture||(i.prevValue=void 0,i.texture=r.createTexture()),r.activeTexture(r["TEXTURE"+n]),r.bindTexture(r.TEXTURE_2D,i.texture),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(!(t instanceof HTMLImageElement)||t.complete)&&i.prevValue!==t&&(i.prevValue=t,r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t)),r.uniform1i(this.getUniformLocation(i.name),n++);else if(Array.isArray(t)&&6===t.length)this.setUniformMatrixValue(i.name,x(this.tmpMat4_,t));else if(Array.isArray(t)&&t.length<=4)switch(t.length){case 2:return void r.uniform2f(this.getUniformLocation(i.name),t[0],t[1]);case 3:return void r.uniform3f(this.getUniformLocation(i.name),t[0],t[1],t[2]);case 4:return void r.uniform4f(this.getUniformLocation(i.name),t[0],t[1],t[2],t[3]);default:return}else"number"==typeof t&&r.uniform1f(this.getUniformLocation(i.name),t)}.bind(this))},t.prototype.useProgram=function(e){return e!=this.currentProgram_&&(this.getGL().useProgram(e),this.currentProgram_=e,this.uniformLocations_={},this.attribLocations_={},!0)},t.prototype.compileShader=function(e,t){var r=this.getGL(),n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n},t.prototype.getProgram=function(e,t){var r=this.getGL(),n=this.compileShader(e,r.FRAGMENT_SHADER),i=this.compileShader(t,r.VERTEX_SHADER);this.shaderCompileErrors_=null,r.getShaderInfoLog(n)&&(this.shaderCompileErrors_="Fragment shader compilation failed:\n"+r.getShaderInfoLog(n)),r.getShaderInfoLog(i)&&(this.shaderCompileErrors_=(this.shaderCompileErrors_||"")+"Vertex shader compilation failed:\n"+r.getShaderInfoLog(i));var o=r.createProgram();return r.attachShader(o,n),r.attachShader(o,i),r.linkProgram(o),o},t.prototype.getShaderCompileErrors=function(){return this.shaderCompileErrors_},t.prototype.getUniformLocation=function(e){return void 0===this.uniformLocations_[e]&&(this.uniformLocations_[e]=this.getGL().getUniformLocation(this.currentProgram_,e)),this.uniformLocations_[e]},t.prototype.getAttributeLocation=function(e){return void 0===this.attribLocations_[e]&&(this.attribLocations_[e]=this.getGL().getAttribLocation(this.currentProgram_,e)),this.attribLocations_[e]},t.prototype.makeProjectionTransform=function(e,t){var r=e.size,n=e.viewState.rotation,i=e.viewState.resolution,o=e.viewState.center;return Object(R.g)(t),Object(R.b)(t,0,0,2/(i*r[0]),2/(i*r[1]),-n,-o[0],-o[1]),t},t.prototype.setUniformFloatValue=function(e,t){this.getGL().uniform1f(this.getUniformLocation(e),t)},t.prototype.setUniformMatrixValue=function(e,t){this.getGL().uniformMatrix4fv(this.getUniformLocation(e),!1,t)},t.prototype.enableAttributeArray_=function(e,t,r,n,i){var o=this.getAttributeLocation(e);o<0||(this.getGL().enableVertexAttribArray(o),this.getGL().vertexAttribPointer(o,t,r,!1,n,i))},t.prototype.enableAttributes=function(e){for(var t=function(e){for(var t=0,r=0;r<e.length;r++){var n=e[r];t+=n.size*B(n.type)}return t}(e),r=0,n=0;n<e.length;n++){var i=e[n];this.enableAttributeArray_(i.name,i.size,i.type||5126,t,r),r+=i.size*B(i.type)}},t.prototype.handleWebGLContextLost=function(){Object(T.b)(this.bufferCache_),this.currentProgram_=null},t.prototype.handleWebGLContextRestored=function(){},t.prototype.createTexture=function(e,t,r){var n=this.getGL(),i=r||n.createTexture(),o=n.RGBA,a=n.RGBA,s=n.UNSIGNED_BYTE;return n.bindTexture(n.TEXTURE_2D,i),t?n.texImage2D(n.TEXTURE_2D,0,o,a,s,t):n.texImage2D(n.TEXTURE_2D,0,o,e[0],e[1],0,a,s,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),i},t}(b.a),N=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),j="GENERATE_BUFFERS",M=function(e){function t(t,r){var n=e.call(this,t)||this,i=r||{};return n.helper=new I({postProcesses:i.postProcesses,uniforms:i.uniforms}),void 0!==i.className&&(n.helper.getCanvas().className=i.className),n}return N(t,e),t.prototype.disposeInternal=function(){this.helper.dispose(),e.prototype.disposeInternal.call(this)},t.prototype.getShaderCompileErrors=function(){return this.helper.getShaderCompileErrors()},t.prototype.dispatchRenderEvent_=function(e,t){var r=this.getLayer();if(r.hasListener(e)){var n=new g.a(e,null,t,null);r.dispatchEvent(n)}},t.prototype.preRender=function(e){this.dispatchRenderEvent_(m.a.PRERENDER,e)},t.prototype.postRender=function(e){this.dispatchRenderEvent_(m.a.POSTRENDER,e)},t}(p.a);function z(e,t){var r=t||[];return r[0]=Math.floor(e/256/256/256)/255,r[1]=Math.floor(e/256/256)%256/255,r[2]=Math.floor(e/256)%256/255,r[3]=e%256/255,r}var X=M,H=new Uint8Array(4),V=function(){function e(e,t){this.helper_=e;var r=e.getGL();this.texture_=r.createTexture(),this.framebuffer_=r.createFramebuffer(),this.size_=t||[1,1],this.data_=new Uint8Array(0),this.dataCacheDirty_=!0,this.updateSize_()}return e.prototype.setSize=function(e){Object(L.b)(e,this.size_)||(this.size_[0]=e[0],this.size_[1]=e[1],this.updateSize_())},e.prototype.getSize=function(){return this.size_},e.prototype.clearCachedData=function(){this.dataCacheDirty_=!0},e.prototype.readAll=function(){if(this.dataCacheDirty_){var e=this.size_,t=this.helper_.getGL();t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer_),t.readPixels(0,0,e[0],e[1],t.RGBA,t.UNSIGNED_BYTE,this.data_),this.dataCacheDirty_=!1}return this.data_},e.prototype.readPixel=function(e,t){if(e<0||t<0||e>this.size_[0]||t>=this.size_[1])return H[0]=0,H[1]=0,H[2]=0,H[3]=0,H;this.readAll();var r=Math.floor(e)+(this.size_[1]-Math.floor(t)-1)*this.size_[0];return H[0]=this.data_[4*r],H[1]=this.data_[4*r+1],H[2]=this.data_[4*r+2],H[3]=this.data_[4*r+3],H},e.prototype.getTexture=function(){return this.texture_},e.prototype.getFramebuffer=function(){return this.framebuffer_},e.prototype.updateSize_=function(){var e=this.size_,t=this.helper_.getGL();this.texture_=this.helper_.createTexture(e,null,this.texture_),t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer_),t.viewport(0,0,e[0],e[1]),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.texture_,0),this.data_=new Uint8Array(e[0]*e[1]*4)},e}(),W=r(374),Y=new Blob(['var e="function"==typeof Object.assign?Object.assign:function(e,n){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),r=1,o=arguments.length;r<o;++r){var i=arguments[r];if(null!=i)for(var f in i)i.hasOwnProperty(f)&&(t[f]=i[f])}return t},n="GENERATE_BUFFERS",t=[],r={vertexPosition:0,indexPosition:0};function o(e,n,t,r,o){e[n+0]=t,e[n+1]=r,e[n+2]=o}function i(e,n,i,f,s,u){var a=3+s,l=e[n+0],v=e[n+1],c=t;c.length=s;for(var g=0;g<c.length;g++)c[g]=e[n+2+g];var b=u?u.vertexPosition:0,h=u?u.indexPosition:0,d=b/a;return o(i,b,l,v,0),c.length&&i.set(c,b+3),o(i,b+=a,l,v,1),c.length&&i.set(c,b+3),o(i,b+=a,l,v,2),c.length&&i.set(c,b+3),o(i,b+=a,l,v,3),c.length&&i.set(c,b+3),b+=a,f[h++]=d,f[h++]=d+1,f[h++]=d+3,f[h++]=d+1,f[h++]=d+2,f[h++]=d+3,r.vertexPosition=b,r.indexPosition=h,r}var f=self;f.onmessage=function(t){var r=t.data;if(r.type===n){for(var o=r.customAttributesCount,s=2+o,u=new Float32Array(r.renderInstructions),a=u.length/s,l=4*a*(o+3),v=new Uint32Array(6*a),c=new Float32Array(l),g=null,b=0;b<u.length;b+=s)g=i(u,b,c,v,o,g);var h=e({vertexBuffer:c.buffer,indexBuffer:v.buffer,renderInstructions:u.buffer},r);f.postMessage(h,[c.buffer,v.buffer,u.buffer])}};'],{type:"application/javascript"}),k=URL.createObjectURL(Y);var K=r(465),q=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),J=function(e){function t(t,r){var n=this,i=r.uniforms||{},o=Object(R.c)();i[P]=o,(n=e.call(this,t,{className:r.className,uniforms:i,postProcesses:r.postProcesses})||this).sourceRevision_=-1,n.verticesBuffer_=new d(34962,35048),n.hitVerticesBuffer_=new d(34962,35048),n.indicesBuffer_=new d(34963,35048),n.program_=n.helper.getProgram(r.fragmentShader,r.vertexShader),n.hitDetectionEnabled_=!(!r.hitFragmentShader||!r.hitVertexShader),n.hitProgram_=n.hitDetectionEnabled_&&n.helper.getProgram(r.hitFragmentShader,r.hitVertexShader);var a=r.attributes?r.attributes.map((function(e){return{name:"a_"+e.name,size:1,type:G.FLOAT}})):[];n.attributes=[{name:"a_position",size:2,type:G.FLOAT},{name:"a_index",size:1,type:G.FLOAT}].concat(a),n.hitDetectionAttributes=[{name:"a_position",size:2,type:G.FLOAT},{name:"a_index",size:1,type:G.FLOAT},{name:"a_hitColor",size:4,type:G.FLOAT},{name:"a_featureUid",size:1,type:G.FLOAT}].concat(a),n.customAttributes=r.attributes?r.attributes:[],n.previousExtent_=Object(W.j)(),n.currentTransform_=o,n.renderTransform_=Object(R.c)(),n.invertRenderTransform_=Object(R.c)(),n.renderInstructions_=new Float32Array(0),n.hitRenderInstructions_=new Float32Array(0),n.hitRenderTarget_=n.hitDetectionEnabled_&&new V(n.helper),n.worker_=new Worker(k),n.worker_.addEventListener("message",function(e){var t=e.data;if(t.type===j){var r=t.projectionTransform;t.hitDetection?(this.hitVerticesBuffer_.fromArrayBuffer(t.vertexBuffer),this.helper.flushBufferData(this.hitVerticesBuffer_)):(this.verticesBuffer_.fromArrayBuffer(t.vertexBuffer),this.helper.flushBufferData(this.verticesBuffer_)),this.indicesBuffer_.fromArrayBuffer(t.indexBuffer),this.helper.flushBufferData(this.indicesBuffer_),this.renderTransform_=r,Object(R.d)(this.invertRenderTransform_,this.renderTransform_),t.hitDetection?this.hitRenderInstructions_=new Float32Array(e.data.renderInstructions):this.renderInstructions_=new Float32Array(e.data.renderInstructions),this.getLayer().changed()}}.bind(n)),n.featureCache_={},n.featureCount_=0;var u=n.getLayer().getSource();return n.sourceListenKeys_=[Object(K.a)(u,s.a.ADDFEATURE,n.handleSourceFeatureAdded_,n),Object(K.a)(u,s.a.CHANGEFEATURE,n.handleSourceFeatureChanged_,n),Object(K.a)(u,s.a.REMOVEFEATURE,n.handleSourceFeatureDelete_,n),Object(K.a)(u,s.a.CLEAR,n.handleSourceFeatureClear_,n)],u.forEachFeature(function(e){this.featureCache_[Object(C.c)(e)]={feature:e,properties:e.getProperties(),geometry:e.getGeometry()},this.featureCount_++}.bind(n)),n}return q(t,e),t.prototype.handleSourceFeatureAdded_=function(e){var t=e.feature;this.featureCache_[Object(C.c)(t)]={feature:t,properties:t.getProperties(),geometry:t.getGeometry()},this.featureCount_++},t.prototype.handleSourceFeatureChanged_=function(e){var t=e.feature;this.featureCache_[Object(C.c)(t)]={feature:t,properties:t.getProperties(),geometry:t.getGeometry()}},t.prototype.handleSourceFeatureDelete_=function(e){var t=e.feature;delete this.featureCache_[Object(C.c)(t)],this.featureCount_--},t.prototype.handleSourceFeatureClear_=function(){this.featureCache_={},this.featureCount_=0},t.prototype.renderFrame=function(e){this.preRender(e);var t=this.indicesBuffer_.getSize();this.helper.drawElements(0,t),this.helper.finalizeDraw(e);var r=this.helper.getCanvas(),n=e.layerStatesArray[e.layerIndex].opacity;return n!==parseFloat(r.style.opacity)&&(r.style.opacity=String(n)),this.hitDetectionEnabled_&&(this.renderHitDetection(e),this.hitRenderTarget_.clearCachedData()),this.postRender(e),r},t.prototype.prepareFrame=function(e){var t=this.getLayer(),r=t.getSource(),n=e.viewState,i=!e.viewHints[u.a.ANIMATING]&&!e.viewHints[u.a.INTERACTING],a=!Object(W.p)(this.previousExtent_,e.extent),s=this.sourceRevision_<r.getRevision();if(s&&(this.sourceRevision_=r.getRevision()),i&&(a||s)){var f=n.projection,h=n.resolution,c=t instanceof o.a?t.getRenderBuffer():0,_=Object(W.c)(e.extent,c*h);r.loadFeatures(_,h,f),this.rebuildBuffers_(e),this.previousExtent_=e.extent.slice()}return this.helper.makeProjectionTransform(e,this.currentTransform_),Object(R.f)(this.currentTransform_,this.invertRenderTransform_),this.helper.useProgram(this.program_),this.helper.prepareDraw(e),this.helper.bindBuffer(this.verticesBuffer_),this.helper.bindBuffer(this.indicesBuffer_),this.helper.enableAttributes(this.attributes),!0},t.prototype.rebuildBuffers_=function(e){var t=Object(R.c)();this.helper.makeProjectionTransform(e,t);var r,n,i=(2+this.customAttributes.length)*this.featureCount_;if(this.renderInstructions_&&this.renderInstructions_.length===i||(this.renderInstructions_=new Float32Array(i)),this.hitDetectionEnabled_){var o=(7+this.customAttributes.length)*this.featureCount_;this.hitRenderInstructions_&&this.hitRenderInstructions_.length===o||(this.hitRenderInstructions_=new Float32Array(o))}var s,u=[],f=[],h=0,c=0;for(var _ in this.featureCache_)if((n=(r=this.featureCache_[_]).geometry)&&n.getType()===a.a.POINT){u[0]=n.getFlatCoordinates()[0],u[1]=n.getFlatCoordinates()[1],Object(R.a)(t,u),s=z(c+6,f),this.renderInstructions_[h++]=u[0],this.renderInstructions_[h++]=u[1],this.hitDetectionEnabled_&&(this.hitRenderInstructions_[c++]=u[0],this.hitRenderInstructions_[c++]=u[1],this.hitRenderInstructions_[c++]=s[0],this.hitRenderInstructions_[c++]=s[1],this.hitRenderInstructions_[c++]=s[2],this.hitRenderInstructions_[c++]=s[3],this.hitRenderInstructions_[c++]=Number(_));for(var l=void 0,d=0;d<this.customAttributes.length;d++)l=this.customAttributes[d].callback(r.feature,r.properties),this.renderInstructions_[h++]=l,this.hitDetectionEnabled_&&(this.hitRenderInstructions_[c++]=l)}var p={type:j,renderInstructions:this.renderInstructions_.buffer,customAttributesCount:this.customAttributes.length};if(p.projectionTransform=t,this.worker_.postMessage(p,[this.renderInstructions_.buffer]),this.renderInstructions_=null,this.hitDetectionEnabled_){var g={type:j,renderInstructions:this.hitRenderInstructions_.buffer,customAttributesCount:5+this.customAttributes.length};g.projectionTransform=t,g.hitDetection=!0,this.worker_.postMessage(g,[this.hitRenderInstructions_.buffer]),this.hitRenderInstructions_=null}},t.prototype.forEachFeatureAtCoordinate=function(e,t,r,n,i){if(Object(c.a)(this.hitDetectionEnabled_,66),this.hitRenderInstructions_){var o=Object(R.a)(t.coordinateToPixelTransform,e.slice()),a=this.hitRenderTarget_.readPixel(o[0]/2,o[1]/2),s=function(e){var t=0;return t+=Math.round(256*e[0]*256*256*255),t+=Math.round(256*e[1]*256*255),t+=Math.round(256*e[2]*255),t+=Math.round(255*e[3])}([a[0]/255,a[1]/255,a[2]/255,a[3]/255]),u=this.hitRenderInstructions_[s],f=Math.floor(u).toString(),h=this.getLayer().getSource().getFeatureByUid(f);return h?n(h,this.getLayer(),null):void 0}},t.prototype.renderHitDetection=function(e){if(this.hitVerticesBuffer_.getSize()){this.hitRenderTarget_.setSize([Math.floor(e.size[0]/2),Math.floor(e.size[1]/2)]),this.helper.useProgram(this.hitProgram_),this.helper.prepareDrawToRenderTarget(e,this.hitRenderTarget_,!0),this.helper.bindBuffer(this.hitVerticesBuffer_),this.helper.bindBuffer(this.indicesBuffer_),this.helper.enableAttributes(this.hitDetectionAttributes);var t=this.indicesBuffer_.getSize();this.helper.drawElements(0,t)}},t.prototype.disposeInternal=function(){this.worker_.terminate(),this.layer_=null,this.sourceListenKeys_.forEach((function(e){Object(K.c)(e)})),this.sourceListenKeys_=null,e.prototype.disposeInternal.call(this)},t}(X),Z=r(417),Q=r(505),$=r(467),ee=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),te="blur",re="gradient",ne="radius",ie=["#00f","#0ff","#0f0","#ff0","#f00"],oe=function(e){function t(t){var r=this,n=t||{},i=Object(T.a)({},n);delete i.gradient,delete i.radius,delete i.blur,delete i.weight,(r=e.call(this,i)||this).gradient_=null,r.addEventListener(Object($.b)(re),r.handleGradientChanged_),r.setGradient(n.gradient?n.gradient:ie),r.setBlur(void 0!==n.blur?n.blur:15),r.setRadius(void 0!==n.radius?n.radius:8);var o=n.weight?n.weight:"weight";return r.weightFunction_="string"==typeof o?function(e){return e.get(o)}:o,r.setRenderOrder(null),r}return ee(t,e),t.prototype.getBlur=function(){return this.get(te)},t.prototype.getGradient=function(){return this.get(re)},t.prototype.getRadius=function(){return this.get(ne)},t.prototype.handleGradientChanged_=function(){this.gradient_=function(e){for(var t=Object(Q.a)(1,256),r=t.createLinearGradient(0,0,1,256),n=1/(e.length-1),i=0,o=e.length;i<o;++i)r.addColorStop(i*n,e[i]);return t.fillStyle=r,t.fillRect(0,0,1,256),t.canvas}(this.getGradient())},t.prototype.setBlur=function(e){this.set(te,e)},t.prototype.setGradient=function(e){this.set(re,e)},t.prototype.setRadius=function(e){this.set(ne,e)},t.prototype.createRenderer=function(){return new J(this,{className:this.getClassName(),attributes:[{name:"weight",callback:function(e){var t=this.weightFunction_(e);return void 0!==t?Object(Z.a)(t,0,1):1}.bind(this)}],vertexShader:"\n        precision mediump float;\n        uniform mat4 u_projectionMatrix;\n        uniform mat4 u_offsetScaleMatrix;\n        uniform float u_size;\n        attribute vec2 a_position;\n        attribute float a_index;\n        attribute float a_weight;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n\n        void main(void) {\n          mat4 offsetMatrix = u_offsetScaleMatrix;\n          float offsetX = a_index == 0.0 || a_index == 3.0 ? -u_size / 2.0 : u_size / 2.0;\n          float offsetY = a_index == 0.0 || a_index == 1.0 ? -u_size / 2.0 : u_size / 2.0;\n          vec4 offsets = offsetMatrix * vec4(offsetX, offsetY, 0.0, 0.0);\n          gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0) + offsets;\n          float u = a_index == 0.0 || a_index == 3.0 ? 0.0 : 1.0;\n          float v = a_index == 0.0 || a_index == 1.0 ? 0.0 : 1.0;\n          v_texCoord = vec2(u, v);\n          v_weight = a_weight;\n        }",fragmentShader:"\n        precision mediump float;\n        uniform float u_blurSlope;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n\n        void main(void) {\n          vec2 texCoord = v_texCoord * 2.0 - vec2(1.0, 1.0);\n          float sqRadius = texCoord.x * texCoord.x + texCoord.y * texCoord.y;\n          float value = (1.0 - sqrt(sqRadius)) * u_blurSlope;\n          float alpha = smoothstep(0.0, 1.0, value) * v_weight;\n          gl_FragColor = vec4(alpha, alpha, alpha, alpha);\n        }",hitVertexShader:"\n        precision mediump float;\n        uniform mat4 u_projectionMatrix;\n        uniform mat4 u_offsetScaleMatrix;\n        uniform float u_size;\n        attribute vec2 a_position;\n        attribute float a_index;\n        attribute float a_weight;\n        attribute vec4 a_hitColor;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n        varying vec4 v_hitColor;\n\n        void main(void) {\n          mat4 offsetMatrix = u_offsetScaleMatrix;\n          float offsetX = a_index == 0.0 || a_index == 3.0 ? -u_size / 2.0 : u_size / 2.0;\n          float offsetY = a_index == 0.0 || a_index == 1.0 ? -u_size / 2.0 : u_size / 2.0;\n          vec4 offsets = offsetMatrix * vec4(offsetX, offsetY, 0.0, 0.0);\n          gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0) + offsets;\n          float u = a_index == 0.0 || a_index == 3.0 ? 0.0 : 1.0;\n          float v = a_index == 0.0 || a_index == 1.0 ? 0.0 : 1.0;\n          v_texCoord = vec2(u, v);\n          v_hitColor = a_hitColor;\n          v_weight = a_weight;\n        }",hitFragmentShader:"\n        precision mediump float;\n        uniform float u_blurSlope;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n        varying vec4 v_hitColor;\n\n        void main(void) {\n          vec2 texCoord = v_texCoord * 2.0 - vec2(1.0, 1.0);\n          float sqRadius = texCoord.x * texCoord.x + texCoord.y * texCoord.y;\n          float value = (1.0 - sqrt(sqRadius)) * u_blurSlope;\n          float alpha = smoothstep(0.0, 1.0, value) * v_weight;\n          if (alpha < 0.05) {\n            discard;\n          }\n\n          gl_FragColor = v_hitColor;\n        }",uniforms:{u_size:function(){return 2*(this.get(ne)+this.get(te))}.bind(this),u_blurSlope:function(){return this.get(ne)/Math.max(1,this.get(te))}.bind(this)},postProcesses:[{fragmentShader:"\n            precision mediump float;\n\n            uniform sampler2D u_image;\n            uniform sampler2D u_gradientTexture;\n\n            varying vec2 v_texCoord;\n\n            void main() {\n              vec4 color = texture2D(u_image, v_texCoord);\n              gl_FragColor.a = color.a;\n              gl_FragColor.rgb = texture2D(u_gradientTexture, vec2(0.5, color.a)).rgb;\n              gl_FragColor.rgb *= gl_FragColor.a;\n            }",uniforms:{u_gradientTexture:function(){return this.gradient_}.bind(this)}}]})},t.prototype.renderDeclutter=function(){},t}(i.a);t.a=oe},558:function(e,t,r){"use strict";var n,i=r(467),o=r(404),a=r(430),s=r(465),u=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),f=function(e){function t(t){var r=e.call(this)||this;if(r.id_=void 0,r.geometryName_="geometry",r.style_=null,r.styleFunction_=void 0,r.geometryChangeKey_=null,r.addEventListener(Object(i.b)(r.geometryName_),r.handleGeometryChanged_),t)if("function"==typeof t.getSimplifiedGeometry){var n=t;r.setGeometry(n)}else{var o=t;r.setProperties(o)}return r}return u(t,e),t.prototype.clone=function(){var e=new t(this.hasProperties()?this.getProperties():null);e.setGeometryName(this.getGeometryName());var r=this.getGeometry();r&&e.setGeometry(r.clone());var n=this.getStyle();return n&&e.setStyle(n),e},t.prototype.getGeometry=function(){return this.get(this.geometryName_)},t.prototype.getId=function(){return this.id_},t.prototype.getGeometryName=function(){return this.geometryName_},t.prototype.getStyle=function(){return this.style_},t.prototype.getStyleFunction=function(){return this.styleFunction_},t.prototype.handleGeometryChange_=function(){this.changed()},t.prototype.handleGeometryChanged_=function(){this.geometryChangeKey_&&(Object(s.c)(this.geometryChangeKey_),this.geometryChangeKey_=null);var e=this.getGeometry();e&&(this.geometryChangeKey_=Object(s.a)(e,o.a.CHANGE,this.handleGeometryChange_,this)),this.changed()},t.prototype.setGeometry=function(e){this.set(this.geometryName_,e)},t.prototype.setStyle=function(e){this.style_=e,this.styleFunction_=e?function(e){if("function"==typeof e)return e;var t;Array.isArray(e)?t=e:(Object(a.a)("function"==typeof e.getZIndex,41),t=[e]);return function(){return t}}(e):void 0,this.changed()},t.prototype.setId=function(e){this.id_=e,this.changed()},t.prototype.setGeometryName=function(e){this.removeEventListener(Object(i.b)(this.geometryName_),this.handleGeometryChanged_),this.geometryName_=e,this.addEventListener(Object(i.b)(this.geometryName_),this.handleGeometryChanged_),this.handleGeometryChanged_()},t}(i.a);t.a=f}}]);