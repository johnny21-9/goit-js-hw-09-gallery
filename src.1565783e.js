parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/icon-close.svg":[["icon-close.bb7ed7e5.svg","cAq2"],"cAq2"]}],"A2T1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.galleryItems=void 0;const p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.galleryItems=p;
},{}],"kvIT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.lightboxPhotoContainer=exports.closeOverlayButton=exports.overlayRef=exports.lightboxRef=exports.galleryContainer=void 0;const e=document.querySelector(".js-gallery");exports.galleryContainer=e;const o=document.querySelector(".js-lightbox");exports.lightboxRef=o;const t=document.querySelector(".lightbox__overlay");exports.overlayRef=t;const r=document.querySelector('[data-action="close-lightbox"]');exports.closeOverlayButton=r;const l=document.querySelector(".lightbox__image");exports.lightboxPhotoContainer=l;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");var e=require("./app.js"),n=require("./refs.js");const t=i(e.galleryItems);function i(e){return e.map(({original:e,preview:n,description:t})=>`<li class="gallery__item">\n  <a\n    class="gallery__link"\n    href="${e}"\n  >\n    <img\n      class="gallery__image"\n      src="${n}"\n      data-source="${e}"\n      alt="${t}"\n    />\n  </a>\n</li>`).join("")}function a(e){e.preventDefault(),e.target.classList.contains("gallery__image")&&(n.lightboxPhotoContainer.alt=e.target.alt,n.lightboxPhotoContainer.src=e.target.dataset.source,s())}function r(){n.lightboxRef.classList.toggle("is-open"),n.lightboxPhotoContainer.alt="",n.lightboxPhotoContainer.src="",window.removeEventListener("keydown",o)}function s(){window.addEventListener("keydown",o),n.lightboxRef.classList.toggle("is-open")}function o(e){"Escape"===e.code&&r()}n.galleryContainer.insertAdjacentHTML("afterbegin",t),n.galleryContainer.addEventListener("click",a),n.overlayRef.addEventListener("click",r),n.closeOverlayButton.addEventListener("click",r);
},{"./sass/main.scss":"clu1","./app.js":"A2T1","./refs.js":"kvIT"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-09-gallery/src.1565783e.js.map