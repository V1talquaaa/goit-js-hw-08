!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};
/*! @vimeo/player v2.18.0 | (c) 2022 Vimeo | MIT License | https://github.com/vimeo/player.js */function n(e){return e&&e.constructor===Symbol?"symbol":typeof e}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=void 0!==t&&"[object global]"==={}.toString.call(t);function i(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function a(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function u(e){return/^https:\/\/player\.vimeo\.com\/video\/\d+/.test(e)}function c(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.id,r=t.url,o=n||r;if(!o)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(e=o,!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e)return"https://vimeo.com/".concat(o);if(a(o))return o.replace("http:","https:");if(n)throw new TypeError("“".concat(n,"” is not a valid video id."));throw new TypeError("“".concat(o,"” is not a vimeo.com url."))}var l=void 0!==Array.prototype.indexOf,s="undefined"!=typeof window&&void 0!==window.postMessage;if(!(o||l&&s))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{};
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
!function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,r=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),o=function(e,t,n){r?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(o(this,"_id","_WeakMap"+"_"+a()+"."+a()),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function r(e,r){if(!i(e)||!t.call(e,"_id"))throw new TypeError(r+" method called on incompatible receiver "+(void 0===e?"undefined":n(e)))}function a(){return Math.random().toString().substring(2)}return o(e.prototype,"delete",(function(e){if(r(this,"delete"),!i(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)})),o(e.prototype,"get",(function(e){if(r(this,"get"),i(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),o(e.prototype,"has",(function(e){if(r(this,"has"),!i(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),o(e.prototype,"set",(function(e,t){if(r(this,"set"),!i(e))throw new TypeError("Invalid value used as weak map key");var n=e[this._id];return n&&n[0]===e?(n[1]=t,this):(o(e,this._id,[e,t]),this)})),o(e,"_polyfill",!0),e}()}function i(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:f);var d,h,v=(d=function(e){
/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
var t,r,o;o=function(){var e,t,r,o=Object.prototype.toString,i="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(t){e=function(e,t,n){return e[t]=n,e}}function a(e,n){r.add(e,n),t||(t=i(r.drain))}function u(e){var t,r=void 0===e?"undefined":n(e);return null==e||"object"!=r&&"function"!=r||(t=e.then),"function"==typeof t&&t}function c(){for(var e=0;e<this.chain.length;e++)l(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function l(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=u(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(e){n.reject(e)}}function s(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=u(e))?a((function(){var r=new h(n);try{t.call(e,(function(){s.apply(r,arguments)}),(function(){f.apply(r,arguments)}))}catch(e){f.call(r,e)}})):(n.msg=e,n.state=1,n.chain.length>0&&a(c,n))}catch(e){f.call(new h(n),e)}}}function f(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&a(c,t))}function d(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then((function(e){n(o,e)}),r)}(o)}function h(e){this.def=e,this.triggered=!1}function v(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function m(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new v(this);this.then=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t})),t.chain.push(r),0!==t.state&&a(c,t),r.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){s.call(t,e)}),(function(e){f.call(t,e)}))}catch(e){f.call(t,e)}}r=function(){var e,n,r;function o(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,i){r=new o(t,i),n?n.next=r:e=r,n=r,r=void 0},drain:function(){var r=e;for(e=n=t=void 0;r;)r.fn.call(r.self),r=r.next}}}();var p=e({},"constructor",m,!1);return m.prototype=p,e(p,"__NPO__",0,!1),e(m,"resolve",(function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),e(m,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),e(m,"all",(function(e){var t=this;return"[object Array]"!=o.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),a=0;d(t,e,(function(e,t){i[e]=t,++a===o&&n(i)}),r)}))})),e(m,"race",(function(e){var t=this;return"[object Array]"!=o.call(e)?t.reject(TypeError("Not an array")):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");d(t,e,(function(e,t){n(t)}),r)}))})),m},(r=f)[t="Promise"]=r[t]||o(),e.exports&&(e.exports=r[t])},d(h={exports:{}},h.exports),h.exports),m=new WeakMap;function p(e,t,n){var r=m.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),m.set(e.element,r)}function g(e,t){return(m.get(e.element)||{})[t]||[]}function y(e,t,n){var r=m.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],m.set(e.element,r),!0;var o=r[t].indexOf(n);return-1!==o&&r[t].splice(o,1),m.set(e.element,r),r[t]&&0===r[t].length}function w(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return console.warn(e),{}}return e}function b(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}function k(e,t){var n,r=[];if((t=w(t)).event){if("error"===t.event)g(e,t.data.method).forEach((function(n){var r=new Error(t.data.message);r.name=t.data.name,n.reject(r),y(e,t.data.method,n)}));r=g(e,"event:".concat(t.event)),n=t.data}else if(t.method){var o=function(e,t){var n=g(e,t);if(n.length<1)return!1;var r=n.shift();return y(e,t,r),r}(e,t.method);o&&(r.push(o),n=t.value)}r.forEach((function(t){try{if("function"==typeof t)return void t.call(e,n);t.resolve(n)}catch(e){}}))}var E=["autopause","autoplay","background","byline","color","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return E.reduce((function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));return(r||""===r)&&(t[n]=""===r?1:r),t}),t)}function P(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(r,o){if(!a(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var u in t)t.hasOwnProperty(u)&&(i+="&".concat(u,"=").concat(encodeURIComponent(t[u])));var c="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;c.open("GET",i,!0),c.onload=function(){if(404!==c.status)if(403!==c.status)try{var t=JSON.parse(c.responseText);if(403===t.domain_status_code)return P(t,n),void o(new Error("“".concat(e,"” is not embeddable.")));r(t)}catch(e){o(e)}else o(new Error("“".concat(e,"” is not embeddable.")));else o(new Error("“".concat(e,"” was not found.")))},c.onerror=function(){var e=c.status?" (".concat(c.status,")"):"";o(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},c.send()}))}var M=new WeakMap,x=new WeakMap,N={},j=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!=typeof document&&"string"==typeof t&&(t=document.getElementById(t)),!function(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}(t))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==t.nodeName){var o=t.querySelector("iframe");o&&(t=o)}if("IFRAME"===t.nodeName&&!a(t.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(M.has(t))return M.get(t);this._window=t.ownerDocument.defaultView,this.element=t,this.origin="*";var i=new v((function(e,o){if(n._onMessage=function(t){if(a(t.origin)&&n.element.contentWindow===t.source){"*"===n.origin&&(n.origin=t.origin);var r=w(t.data);if(r&&"error"===r.event&&r.data&&"ready"===r.data.method){var i=new Error(r.data.message);return i.name=r.data.name,void o(i)}var u=r&&"ready"===r.event,c=r&&"ping"===r.method;if(u||c)return n.element.setAttribute("data-ready","true"),void e();k(n,r)}},n._window.addEventListener("message",n._onMessage),"IFRAME"!==n.element.nodeName){var i=T(t,r);_(c(i),i,t).then((function(e){var r,o,i,a=P(e,t);return n.element=a,n._originalElement=t,r=t,o=a,i=m.get(r),m.set(o,i),m.delete(r),M.set(n.element,n),e})).catch(o)}}));if(x.set(this,i),M.set(this.element,this),"IFRAME"===this.element.nodeName&&b(this,"ping"),N.isEnabled){var u=function(){return N.exit()};this.fullscreenchangeHandler=function(){N.isFullscreen?p(n,"event:exitFullscreen",u):y(n,"event:exitFullscreen",u),n.ready().then((function(){b(n,"fullscreenchange",N.isFullscreen)}))},N.on("fullscreenchange",this.fullscreenchangeHandler)}return this}var t,n,o;return t=e,n=[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new v((function(r,o){return t.ready().then((function(){p(t,e,{resolve:r,reject:o}),b(t,e,n)})).catch(o)}))}},{key:"get",value:function(e){var t=this;return new v((function(n,r){return e=i(e,"get"),t.ready().then((function(){p(t,e,{resolve:n,reject:r}),b(t,e)})).catch(r)}))}},{key:"set",value:function(e,t){var n=this;return new v((function(r,o){if(e=i(e,"set"),null==t)throw new TypeError("There must be a value to set.");return n.ready().then((function(){p(n,e,{resolve:r,reject:o}),b(n,e,t)})).catch(o)}))}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===g(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch((function(){})),p(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");y(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch((function(e){}))}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=x.get(this)||new v((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return v.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return N.isEnabled?N.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return N.isEnabled?N.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return N.isEnabled?v.resolve(N.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new v((function(t){if(x.delete(e),M.delete(e.element),e._originalElement&&(M.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&(e.element.parentNode.parentNode&&e._originalElement&&e._originalElement!==e.element.parentNode?e.element.parentNode.parentNode.removeChild(e.element.parentNode):e.element.parentNode.removeChild(e.element)),e.element&&"DIV"===e.element.nodeName&&e.element.parentNode){e.element.removeAttribute("data-vimeo-initialized");var n=e.element.querySelector("iframe");n&&n.parentNode&&(n.parentNode.parentNode&&e._originalElement&&e._originalElement!==n.parentNode?n.parentNode.parentNode.removeChild(n.parentNode):n.parentNode.removeChild(n))}e._window.removeEventListener("message",e._onMessage),N.isEnabled&&N.off("fullscreenchange",e.fullscreenchangeHandler),t()}))}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}],n&&r(t.prototype,n),o&&r(t,o),e}();o||(N=function(){var e=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,o={};n<r;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}return!1}(),t={fullscreenchange:e.fullscreenchange,fullscreenerror:e.fullscreenerror},n={request:function(t){return new Promise((function(r,o){var i=function e(){n.off("fullscreenchange",e),r()};n.on("fullscreenchange",i);var a=(t=t||document.documentElement)[e.requestFullscreen]();a instanceof Promise&&a.then(i).catch(o)}))},exit:function(){return new Promise((function(t,r){if(n.isFullscreen){var o=function e(){n.off("fullscreenchange",e),t()};n.on("fullscreenchange",o);var i=document[e.exitFullscreen]();i instanceof Promise&&i.then(o).catch(r)}else t()}))},on:function(e,n){var r=t[e];r&&document.addEventListener(r,n)},off:function(e,n){var r=t[e];r&&document.removeEventListener(r,n)}};return Object.defineProperties(n,{isFullscreen:{get:function(){return Boolean(document[e.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[e.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[e.fullscreenEnabled])}}}),n}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=T(e);_(c(t),t,e).then((function(t){return P(t,e)})).catch(n)}catch(e){n(e)}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;window.VimeoPlayerResizeEmbeds_||(window.VimeoPlayerResizeEmbeds_=!0,window.addEventListener("message",(function(t){if(a(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===t.source){n[r].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}})))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;window.VimeoSeoMetadataAppended||(window.VimeoSeoMetadataAppended=!0,window.addEventListener("message",(function(t){if(a(t.origin)){var n=w(t.data);if(n&&"ready"===n.event)for(var r=e.querySelectorAll("iframe"),o=0;o<r.length;o++){var i=r[o],c=i.contentWindow===t.source;u(i.src)&&c&&new j(i).callMethod("appendVideoMetadata",window.location.href)}}})))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoCheckedUrlTimeParam){window.VimeoCheckedUrlTimeParam=!0;var t=function(e){"console"in window&&console.error&&console.error("There was an error getting video Id: ".concat(e))};window.addEventListener("message",(function(n){if(a(n.origin)){var r=w(n.data);if(r&&"ready"===r.event)for(var o=e.querySelectorAll("iframe"),i=0;i<o.length;i++){var c=o[i],l=c.contentWindow===n.source;u(c.src)&&l&&function(){var e=new j(c);e.getVideoId().then((function(t){var n=new RegExp("[?&]vimeo_t_".concat(t,"=([^&#]*)")).exec(window.location.href);if(n&&n[1]){var r=decodeURI(n[1]);e.setCurrentTime(r)}})).catch(t)}()}}}))}}());var F,C=j,S="Expected a function",A=NaN,O="[object Symbol]",q=/^\s+|\s+$/g,I=/^[-+]0x[0-9a-f]+$/i,V=/^0b[01]+$/i,R=/^0o[0-7]+$/i,W=parseInt,L="object"==typeof t&&t&&t.Object===Object&&t,z="object"==typeof self&&self&&self.Object===Object&&self,U=L||z||Function("return this")(),D=Object.prototype.toString,H=Math.max,$=Math.min,B=function(){return U.Date.now()};function Q(e,t,n){var r,o,i,a,u,c,l=0,s=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError(S);function h(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function v(e){var n=e-c;return void 0===c||n>=t||n<0||f&&e-l>=i}function m(){var e=B();if(v(e))return p(e);u=setTimeout(m,function(e){var n=t-(e-c);return f?$(n,i-(e-l)):n}(e))}function p(e){return u=void 0,d&&r?h(e):(r=o=void 0,a)}function g(){var e=B(),n=v(e);if(r=arguments,o=this,c=e,n){if(void 0===u)return function(e){return l=e,u=setTimeout(m,t),s?h(e):a}(c);if(f)return u=setTimeout(m,t),h(c)}return void 0===u&&(u=setTimeout(m,t)),a}return t=J(t)||0,Y(n)&&(s=!!n.leading,i=(f="maxWait"in n)?H(J(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),g.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=o=u=void 0},g.flush=function(){return void 0===u?a:p(B())},g}function Y(e){var t=void 0===e?"undefined":n(e);return!!e&&("object"==t||"function"==t)}function J(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":n(e))||function(e){return!!e&&"object"==typeof e}(e)&&D.call(e)==O}(e))return A;if(Y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(q,"");var r=V.test(e);return r||R.test(e)?W(e.slice(2),r?2:8):I.test(e)?A:+e}F=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(S);return Y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Q(e,t,{leading:r,maxWait:t,trailing:o})};var X="videoplayer-current-time",G=new C(document.querySelector("iframe"));G.on("timeupdate",e(F)((function(e){var t=e.seconds;localStorage.setItem(X,t)}),1e3)),function(){if(!localStorage.getItem(X))return;G.setCurrentTime(localStorage.getItem(X))}()}();
//# sourceMappingURL=02-video.6b50f129.js.map
