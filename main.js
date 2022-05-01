/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n}\n\nbody {\n  padding-top: 100px;\n  padding-bottom: 40px;\n}\nbody .header, body .footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  position: fixed;\n  width: 100%;\n  color: white;\n  background-color: black;\n}\nbody .header {\n  top: 0;\n  height: 100px;\n}\nbody .header .banner h1 {\n  font-variant: small-caps;\n}\nbody .footer {\n  bottom: 0;\n  height: 40px;\n}\nbody .nav-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);\n  gap: 30px;\n  background-color: #E9C46A;\n  height: 30px;\n  width: 600px;\n  position: absolute;\n  top: 100px;\n}\nbody .nav-container p {\n  font-variant: small-caps;\n  color: black;\n  text-decoration: none;\n}\nbody .nav-container p:hover {\n  font-size: 1.1em;\n  font-weight: bolder;\n}\nbody .content-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nbody .content-container .main-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: calc(100vh - 140px);\n}\nbody .content-container .main-content .hero-message {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);\n  flex-direction: column;\n  padding: 75px;\n  gap: 30px;\n  text-align: justify;\n  color: white;\n  background-color: #1A1A1A;\n}\nbody .content-container .main-content .hero-message h1 {\n  font-variant: small-caps;\n}\nbody .content-container .main-content .image-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto 0;\n  gap: 30px;\n}\nbody .content-container .main-content .image-container .main-img {\n  width: 300px;\n  height: 300px;\n  border: 5px solid #E9C46A;\n}\nbody .content-container .menu-content .menu-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 100px;\n  left: 0;\n  color: white;\n  background-color: #1A1A1A;\n  height: 150px;\n  width: calc(50% - 300px);\n  z-index: 3;\n}\nbody .content-container .menu-content .menu-container {\n  margin-top: 170px;\n  margin-bottom: 90px;\n  height: 500px;\n  padding: 50px 100px;\n  width: auto;\n  overflow: scroll;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 50px 100px;\n}\nbody .content-container .menu-content .menu-container .item-container {\n  display: grid;\n  grid-template-columns: 150px auto;\n  gap: 20px;\n  width: 500px;\n  height: auto;\n}\nbody .content-container .menu-content .menu-container .item-container .item-img {\n  border: 3px solid #E9C46A;\n  width: 150px;\n  height: 150px;\n}\nbody .content-container .menu-content .menu-container .item-container .item-text {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\nbody .content-container .menu-content .menu-container .item-container .item-text h3 {\n  font-variant: small-caps;\n  color: #119977;\n}\nbody .content-container .menu-content .menu-container .item-container .item-text p {\n  text-align: justify;\n}\nbody .content-container .contact-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-variant: small-caps;\n  flex-direction: column;\n}\nbody .content-container .contact-container .contact-header, body .content-container .contact-container .contact-items {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  background-color: #1A1A1A;\n  height: 150px;\n  width: 500px;\n  position: fixed;\n  top: 130px;\n}\nbody .content-container .contact-container .contact-items {\n  font-variant: small-caps;\n  flex-direction: column;\n  position: absolute;\n  top: 310px;\n  gap: 50px;\n  height: auto;\n  padding: 30px 0px;\n}\nbody .content-container .contact-container div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 10px;\n}\nbody .content-container .contact-container div img {\n  position: fixed;\n  transform: translateX(-180px) translateY(-15px);\n  height: 40px;\n  width: 40px;\n}\nbody .content-container .contact-container div h3 {\n  color: #E9C46A;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AA0BA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;EACA,iCAAA;EACA,gBAAA;AAzBJ;;AA4BA;EACI,kBA/BU;EAgCV,oBA9BU;AAKd;AA0BI;EAzBA,aAAA;EACA,uBAAA;EACA,mBAAA;EAyBI,sBAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;AAtBR;AAwBI;EACI,MAAA;EACA,aA3CM;AAqBd;AAuBQ;EA1BJ,wBAAA;AAMJ;AAwBI;EACI,SAAA;EACA,YAhDM;AA0Bd;AAwBI;EA5CA,aAAA;EACA,uBAAA;EACA,mBAAA;EAIA,0CAAA;EAyCI,SAAA;EACA,yBA5DD;EA6DC,YAxDK;EAyDL,YAAA;EACA,kBAAA;EACA,UAAA;AApBR;AAqBQ;EA3CJ,wBAAA;EA6CQ,YAAA;EACA,qBAAA;AAnBZ;AAoBY;EACI,gBAAA;EACA,mBAAA;AAlBhB;AAsBI;EA/DA,aAAA;EACA,uBAAA;EACA,mBAAA;AA4CJ;AAmBQ;EAjEJ,aAAA;EACA,uBAAA;EACA,mBAAA;EAiEQ,sBAAA;EACA,2BAzEK;AA0DjB;AAiBY;EAtER,aAAA;EACA,uBAAA;EACA,mBAAA;EAIA,0CAAA;EAmEY,sBAAA;EACA,aAAA;EACA,SAAA;EACA,mBAAA;EACA,YAAA;EACA,yBAxFJ;AA2EZ;AAcgB;EArEZ,wBAAA;AA0DJ;AAeY;EAnFR,aAAA;EACA,uBAAA;EACA,mBAAA;EAmFY,cAAA;EACA,SAAA;AAXhB;AAYgB;EACI,YAAA;EACA,aAAA;EACA,yBAAA;AAVpB;AAeY;EA/FR,aAAA;EACA,uBAAA;EACA,mBAAA;EAIA,0CAAA;EA4FY,eAAA;EACA,UA3GF;EA4GE,OAAA;EACA,YAAA;EACA,yBAhHJ;EAiHI,aA1GK;EA2GL,wBAAA;EACA,UAAA;AAXhB;AAaY;EACI,iBAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,aAAA;EACA,qCAAA;EACA,eAAA;AAXhB;AAYgB;EACI,aAAA;EACA,iCAAA;EACA,SAAA;EACA,YAAA;EACA,YAAA;AAVpB;AAWoB;EACI,yBAAA;EACA,YAAA;EACA,aAAA;AATxB;AAWoB;EACI,aAAA;EACA,sBAAA;EACA,SAAA;AATxB;AAUwB;EA1HpB,wBAAA;EA4HwB,cAjJpB;AAyIR;AAUwB;EACI,mBAAA;AAR5B;AAcQ;EA/IJ,aAAA;EACA,uBAAA;EACA,mBAAA;EAQA,wBAAA;EAwIQ,sBAAA;AAVZ;AAWY;EAnJR,aAAA;EACA,uBAAA;EACA,mBAAA;EAmJY,YAAA;EACA,yBAhKJ;EAiKI,aA1JK;EA2JL,YAAA;EACA,eAAA;EACA,UAAA;AAPhB;AASY;EAlJR,wBAAA;EAqJY,sBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,YAAA;EACA,iBAAA;AARhB;AAUY;EAtKR,aAAA;EACA,uBAAA;EACA,mBAAA;EAsKY,sBAAA;EACA,SAAA;AANhB;AAOgB;EACI,eAAA;EACA,+CAAA;EACA,YAAA;EACA,WAAA;AALpB;AAOgB;EACI,cA7Lb;AAwLP","sourcesContent":["$gold: #E9C46A;\n$green: #119977;\n$dark-gray: #1A1A1A;\n\n$head-height: 100px;\n$nav-height: 30px;\n$foot-height: 40px;\n$content-height: calc(100vh - calc($head-height + $foot-height));\n\n$menu-header-height: 150px;\n\n@mixin flexCenter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n@mixin shadow {\n    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);\n}\n\n@mixin h1Heading {\n    font-variant: small-caps;\n    \n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 400;\n}\n\nbody {\n    padding-top: $head-height;\n    padding-bottom: $foot-height;\n    .header, .footer {\n        @include flexCenter();\n        flex-direction: column;\n        position: fixed;\n        width: 100%;\n        color: white;\n        background-color: black;\n    }\n    .header {\n        top: 0;\n        height: $head-height;\n        .banner h1 {\n            @include h1Heading();\n        }\n    }\n    .footer {\n        bottom: 0;\n        height: $foot-height;\n    }\n    .nav-container {\n        @include flexCenter();\n        @include shadow();\n        gap: 30px;\n        background-color: $gold;\n        height: $nav-height;\n        width: 600px;\n        position: absolute;\n        top: 100px;\n        p {\n            @include h1Heading();\n            color: black;\n            text-decoration: none;\n            &:hover {\n                font-size: 1.1em;\n                font-weight: bolder;\n            }\n        }\n    }\n    .content-container {\n        @include flexCenter();\n        .main-content {\n            @include flexCenter();\n            flex-direction: column;\n            height: $content-height;\n            // Main Page styling.\n            .hero-message {\n                @include flexCenter();\n                @include shadow();\n                flex-direction: column;\n                padding: 75px;\n                gap: 30px;\n                text-align: justify;\n                color: white;\n                background-color: $dark-gray;\n                h1 {\n                    @include h1Heading();\n                }\n            }\n            .image-container {\n                @include flexCenter();\n                margin: auto 0;\n                gap: 30px;\n                .main-img {\n                    width: 300px;\n                    height: 300px;\n                    border: 5px solid $gold;\n                }\n            }\n        }\n        .menu-content {\n            .menu-header {\n                @include flexCenter();\n                @include shadow();\n                position: fixed;\n                top: $head-height;\n                left: 0;\n                color: white;\n                background-color: $dark-gray;\n                height: $menu-header-height;\n                width: calc(50% - 300px);\n                z-index: 3;\n            }\n            .menu-container {\n                margin-top: calc($menu-header-height + 20px);\n                margin-bottom: calc($foot-height + 50px);\n                height: 500px;\n                padding: 50px 100px;\n                width: auto;\n                overflow: scroll;\n                display: grid;\n                grid-template-columns: repeat(2, 1fr);\n                gap: 50px 100px;\n                .item-container {\n                    display: grid;\n                    grid-template-columns: 150px auto;\n                    gap: 20px;\n                    width: 500px;\n                    height: auto;\n                    .item-img {\n                        border: 3px solid $gold;\n                        width: 150px;\n                        height: 150px;\n                    }\n                    .item-text {\n                        display: flex;\n                        flex-direction: column;\n                        gap: 20px;\n                        h3 {\n                            @include h1Heading();\n                            color: $green;\n                        }\n                        p {\n                            text-align: justify;\n                        }\n                    }\n                }\n            }\n        }\n        .contact-container {\n            @include flexCenter();\n            @include h1Heading();\n            flex-direction: column;\n            .contact-header {\n                @include flexCenter();\n                color: white;\n                background-color: $dark-gray;\n                height: $menu-header-height;\n                width: 500px;\n                position: fixed;\n                top: calc($head-height + 30px);\n            }\n            .contact-items {\n                @extend .contact-header;\n                @include h1Heading();\n                flex-direction: column;\n                position: absolute;\n                top: 310px;\n                gap: 50px;\n                height: auto;\n                padding: 30px 0px;\n            }\n            div {\n                @include flexCenter();\n                flex-direction: column;\n                gap: 10px;\n                img {\n                    position: fixed;\n                    transform: translateX(-180px) translateY(-15px);\n                    height: 40px;\n                    width: 40px;\n                }\n                h3 {\n                    color: $gold;\n                }\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/pages/contact-page.js":
/*!***********************************!*\
  !*** ./src/pages/contact-page.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_email_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/email.svg */ "./src/assets/email.svg");
/* harmony import */ var _assets_phone_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/phone.svg */ "./src/assets/phone.svg");
/* harmony import */ var _assets_address_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/address.svg */ "./src/assets/address.svg");




function contactPage() {

    const contactInfo = [
        {name: 'Email', detail: 'restuarant@gmail.com', symbol: _assets_email_svg__WEBPACK_IMPORTED_MODULE_0__},
        {name: 'Phone', detail: 'xxx-xxxx-xxxx', symbol: _assets_phone_svg__WEBPACK_IMPORTED_MODULE_1__},
        {name: 'Address', detail: '101 Restaurant Drive', symbol: _assets_address_svg__WEBPACK_IMPORTED_MODULE_2__},
    ];

    const contactContainer = document.createElement('div');
    const contactHeader = document.createElement('div');
    const contactTitle = document.createElement('h1');
    const contactItems = document.createElement('div');

    contactContainer.classList.add('contact-container');
    contactHeader.classList.add('contact-header');
    contactItems.classList.add('contact-items');

    contactTitle.innerText = 'Contact';
    contactHeader.appendChild(contactTitle);
    contactContainer.appendChild(contactHeader);

    function createContactItem(contactName, contactDetails, symbol) {
        const contactDetail = document.createElement('div');
        const title = document.createElement('h1');
        title.innerText = contactName;
        const symbolImage = new Image();
        symbolImage.src = symbol;
        const details = document.createElement('h3');
         details.innerText = contactDetails;
         contactDetail.appendChild(symbolImage);
         contactDetail.appendChild(title);
         contactDetail.appendChild(details);
         return contactDetail
    };

    contactInfo.forEach(item => {
        const newItem = createContactItem(item.name, item.detail, item.symbol);
        contactItems.appendChild(newItem);           
    });

    contactContainer.appendChild(contactItems);

    return contactContainer
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);

/***/ }),

/***/ "./src/pages/footer.js":
/*!*****************************!*\
  !*** ./src/pages/footer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function footer() {
    const footerContainer = document.createElement('div');
    const footerText = document.createElement('h3');

    footerContainer.classList.add('footer');
    footerText.innerText = '@github.com/vyonyx';

    footerContainer.appendChild(footerText);
    return footerContainer
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);

/***/ }),

/***/ "./src/pages/header.js":
/*!*****************************!*\
  !*** ./src/pages/header.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createNavLink(name) {
    // const link = document.createElement('p');
    // link.classList.add(name.toLowerCase());
    // const newTitle = document.createTextNode(name);
    // link.appendChild(newTitle);
    // link.title = name;
    // link.href = './';

    const link = document.createElement('p');
    link.innerText = name;
    link.classList.add(name.toLowerCase());
    return link
}

// Generating the front page of the restaurant.
function header() {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header');
    
    const headerBanner = document.createElement('h1');
    headerBanner.classList.add('banner');

    const headerTitle = document.createElement('h1');
    headerTitle.innerText = 'Test Kitchen';
    headerTitle.classList.add('titleText');
    headerBanner.appendChild(headerTitle);

    const navContainer = document.createElement('div');
    navContainer.classList.add('nav-container')

    // Options to simulate tabbed navigation. 
    navContainer.appendChild(createNavLink('Main'));
    navContainer.appendChild(createNavLink('Menu'));
    navContainer.appendChild(createNavLink('Contact'));
    

    headerContainer.appendChild(headerBanner);
    headerContainer.appendChild(navContainer);

    return headerContainer
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);


/***/ }),

/***/ "./src/pages/main-page.js":
/*!********************************!*\
  !*** ./src/pages/main-page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_plate_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/plate.jpeg */ "./src/assets/plate.jpeg");
/* harmony import */ var _assets_people_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/people.jpeg */ "./src/assets/people.jpeg");
/* harmony import */ var _assets_seats_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/seats.jpg */ "./src/assets/seats.jpg");




function addImage(img) {
    const newImg = document.createElement('img');
    newImg.src = img;
    newImg.classList.add('main-img');
    return newImg
}

function mainPage() {
    // DOM node creation.
    const contentContainer = document.createElement('div');
    const heroImage = document.createElement('div');
    const imageContainer = document.createElement('div');

    const heroTitle = document.createElement('h1');
    const heroStatement = document.createElement('h3');

    // Class additions.
    contentContainer.classList.add('main-content')
    heroImage.classList.add('hero-message');
    imageContainer.classList.add('image-container');
    
    // Node manipulation.
    heroTitle.innerText = 'Mission Statement';
    heroStatement.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices ut lorem ut ultricies. Aenean commodo est eget pellentesque sodales. Sed tincidunt mattis maximus. Suspendisse varius mattis tellus, ut convallis ex aliquam a. Sed pharetra nulla vel mauris dapibus, cursus tempor augue feugiat. Nulla quis nunc vel sem posuere pulvinar eu sit amet libero. Sed gravida lectus neque, sed aliquam odio sodales nec. Integer elementum nunc eget mi lacinia, vitae luctus libero tincidunt. Morbi interdum sapien nec volutpat vestibulum.'

    // Adding images.
    imageContainer.append(addImage(_assets_people_jpeg__WEBPACK_IMPORTED_MODULE_1__));
    imageContainer.append(addImage(_assets_plate_jpeg__WEBPACK_IMPORTED_MODULE_0__));
    imageContainer.append(addImage(_assets_seats_jpg__WEBPACK_IMPORTED_MODULE_2__));

    // Appending new nodes to new container.
    heroImage.appendChild(heroTitle);
    heroImage.appendChild(heroStatement);
    contentContainer.appendChild(heroImage);
    contentContainer.appendChild(imageContainer);

    return contentContainer
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainPage);

/***/ }),

/***/ "./src/pages/menu-page.js":
/*!********************************!*\
  !*** ./src/pages/menu-page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenuItem(title) {
    const itemContainer = document.createElement('div');
    const itemText = document.createElement('div');
    const itemImg = document.createElement('div');

    itemContainer.classList.add('item-container');
    itemText.classList.add('item-text');
    itemImg.classList.add('item-img');


    const itemTitle = document.createElement('h3');
    const itemDescription = document.createElement('p');
    itemTitle.innerText = title;
    itemDescription.innerText = 'This is a generic description about this particular menu item. It goes into a bit of depth about the ingredients used and why its so special.'
    itemText.appendChild(itemTitle);
    itemText.appendChild(itemDescription);


    itemContainer.appendChild(itemImg);
    itemContainer.appendChild(itemText);

    return itemContainer
};

function addImage(img) {
    const newImg = document.createElement('img');
    newImg.src = img;
    newImg.classList.add('menu-img');
    return newImg
}

function menuPage() {
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('menu-content');

    // Creating the menu header.
    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');
    const menuTitle = document.createElement('h1');
    menuTitle.innerText = 'Menu';
    menuHeader.appendChild(menuTitle);

    // Creating 6x menu items.
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    let dishes = [
        'Chicken Sandwich',
        'Steak and Cheese Pie',
        'Pepperoni Pizza',
        'Garden Salad',
        'Falafel Bites',
        'Eggs Benny'
    ];

    dishes.forEach(dish => {
        const newItem = createMenuItem(dish);
        menuContainer.appendChild(newItem);
    });

    contentContainer.appendChild(menuHeader);
    contentContainer.appendChild(menuContainer);
    return contentContainer
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);

/***/ }),

/***/ "./src/assets/address.svg":
/*!********************************!*\
  !*** ./src/assets/address.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa251d9e6534d37fcb99.svg";

/***/ }),

/***/ "./src/assets/email.svg":
/*!******************************!*\
  !*** ./src/assets/email.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89472ef2f8b0ec5e9b96.svg";

/***/ }),

/***/ "./src/assets/people.jpeg":
/*!********************************!*\
  !*** ./src/assets/people.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b13f8297529d931e08c2.jpeg";

/***/ }),

/***/ "./src/assets/phone.svg":
/*!******************************!*\
  !*** ./src/assets/phone.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54e073f3e3144ca0ed54.svg";

/***/ }),

/***/ "./src/assets/plate.jpeg":
/*!*******************************!*\
  !*** ./src/assets/plate.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b5fdd99783e5b19491d8.jpeg";

/***/ }),

/***/ "./src/assets/seats.jpg":
/*!******************************!*\
  !*** ./src/assets/seats.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eada49945214bcea09ab.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/header */ "./src/pages/header.js");
/* harmony import */ var _pages_main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/main-page */ "./src/pages/main-page.js");
/* harmony import */ var _pages_menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu-page */ "./src/pages/menu-page.js");
/* harmony import */ var _pages_contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact-page */ "./src/pages/contact-page.js");
/* harmony import */ var _pages_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/footer */ "./src/pages/footer.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");








const contentContainer = document.getElementById('contentContainer');

function pageHandler() {
    const headerContent = (0,_pages_header__WEBPACK_IMPORTED_MODULE_0__["default"])();

    const navMainButton = headerContent.querySelector('.main');
    const navMenuButton = headerContent.querySelector('.menu');
    const navContactButton = headerContent.querySelector('.contact');

    navMainButton.addEventListener('click', () => {
        removeContent();
        createPage(_pages_main_page__WEBPACK_IMPORTED_MODULE_1__["default"]);
    });
    navMenuButton.addEventListener('click', () => {
        removeContent();
        createPage(_pages_menu_page__WEBPACK_IMPORTED_MODULE_2__["default"]);
    });
    navContactButton.addEventListener('click', () => {
        removeContent();
        createPage(_pages_contact_page__WEBPACK_IMPORTED_MODULE_3__["default"]);
    });

    createPage(_pages_main_page__WEBPACK_IMPORTED_MODULE_1__["default"]);

    function createPage(content) {
        contentContainer.appendChild(headerContent);
        contentContainer.appendChild(content());
        contentContainer.appendChild((0,_pages_footer__WEBPACK_IMPORTED_MODULE_4__["default"])());
    }
    
    function removeContent() {
        while (contentContainer.lastChild) {
            contentContainer.removeChild(contentContainer.firstChild);
        }
    };

    return {
        removeContent
    }
};

const restaurantPage = pageHandler();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLDJCQUEyQixjQUFjLGVBQWUsd0NBQXdDLHFCQUFxQixHQUFHLFVBQVUsdUJBQXVCLHlCQUF5QixHQUFHLDhCQUE4QixrQkFBa0IsNEJBQTRCLHdCQUF3QiwyQkFBMkIsb0JBQW9CLGdCQUFnQixpQkFBaUIsNEJBQTRCLEdBQUcsZ0JBQWdCLFdBQVcsa0JBQWtCLEdBQUcsMkJBQTJCLDZCQUE2QixHQUFHLGdCQUFnQixjQUFjLGlCQUFpQixHQUFHLHVCQUF1QixrQkFBa0IsNEJBQTRCLHdCQUF3QiwrQ0FBK0MsY0FBYyw4QkFBOEIsaUJBQWlCLGlCQUFpQix1QkFBdUIsZUFBZSxHQUFHLHlCQUF5Qiw2QkFBNkIsaUJBQWlCLDBCQUEwQixHQUFHLCtCQUErQixxQkFBcUIsd0JBQXdCLEdBQUcsMkJBQTJCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcseUNBQXlDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLDJCQUEyQixnQ0FBZ0MsR0FBRyx1REFBdUQsa0JBQWtCLDRCQUE0Qix3QkFBd0IsK0NBQStDLDJCQUEyQixrQkFBa0IsY0FBYyx3QkFBd0IsaUJBQWlCLDhCQUE4QixHQUFHLDBEQUEwRCw2QkFBNkIsR0FBRywwREFBMEQsa0JBQWtCLDRCQUE0Qix3QkFBd0IsbUJBQW1CLGNBQWMsR0FBRyxvRUFBb0UsaUJBQWlCLGtCQUFrQiw4QkFBOEIsR0FBRyxzREFBc0Qsa0JBQWtCLDRCQUE0Qix3QkFBd0IsK0NBQStDLG9CQUFvQixlQUFlLFlBQVksaUJBQWlCLDhCQUE4QixrQkFBa0IsNkJBQTZCLGVBQWUsR0FBRyx5REFBeUQsc0JBQXNCLHdCQUF3QixrQkFBa0Isd0JBQXdCLGdCQUFnQixxQkFBcUIsa0JBQWtCLDBDQUEwQyxvQkFBb0IsR0FBRyx5RUFBeUUsa0JBQWtCLHNDQUFzQyxjQUFjLGlCQUFpQixpQkFBaUIsR0FBRyxtRkFBbUYsOEJBQThCLGlCQUFpQixrQkFBa0IsR0FBRyxvRkFBb0Ysa0JBQWtCLDJCQUEyQixjQUFjLEdBQUcsdUZBQXVGLDZCQUE2QixtQkFBbUIsR0FBRyxzRkFBc0Ysd0JBQXdCLEdBQUcsOENBQThDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLDZCQUE2QiwyQkFBMkIsR0FBRyx5SEFBeUgsa0JBQWtCLDRCQUE0Qix3QkFBd0IsaUJBQWlCLDhCQUE4QixrQkFBa0IsaUJBQWlCLG9CQUFvQixlQUFlLEdBQUcsNkRBQTZELDZCQUE2QiwyQkFBMkIsdUJBQXVCLGVBQWUsY0FBYyxpQkFBaUIsc0JBQXNCLEdBQUcsa0RBQWtELGtCQUFrQiw0QkFBNEIsd0JBQXdCLDJCQUEyQixjQUFjLEdBQUcsc0RBQXNELG9CQUFvQixvREFBb0QsaUJBQWlCLGdCQUFnQixHQUFHLHFEQUFxRCxtQkFBbUIsR0FBRyxPQUFPLGtGQUFrRixXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFlBQVksS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFlBQVksWUFBWSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUsVUFBVSxXQUFXLFVBQVUsWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFlBQVksWUFBWSxZQUFZLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sYUFBYSxjQUFjLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcseUNBQXlDLGtCQUFrQixzQkFBc0Isd0JBQXdCLG9CQUFvQixxQkFBcUIsbUVBQW1FLCtCQUErQix1QkFBdUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyxtQkFBbUIsaURBQWlELEdBQUcsc0JBQXNCLCtCQUErQixTQUFTLE9BQU8sNkJBQTZCLGdCQUFnQixpQkFBaUIsd0NBQXdDLHVCQUF1QixHQUFHLFVBQVUsZ0NBQWdDLG1DQUFtQyx3QkFBd0IsZ0NBQWdDLGlDQUFpQywwQkFBMEIsc0JBQXNCLHVCQUF1QixrQ0FBa0MsT0FBTyxlQUFlLGlCQUFpQiwrQkFBK0Isc0JBQXNCLG1DQUFtQyxXQUFXLE9BQU8sZUFBZSxvQkFBb0IsK0JBQStCLE9BQU8sc0JBQXNCLGdDQUFnQyw0QkFBNEIsb0JBQW9CLGtDQUFrQyw4QkFBOEIsdUJBQXVCLDZCQUE2QixxQkFBcUIsYUFBYSxtQ0FBbUMsMkJBQTJCLG9DQUFvQyx1QkFBdUIsbUNBQW1DLHNDQUFzQyxlQUFlLFdBQVcsT0FBTywwQkFBMEIsZ0NBQWdDLHlCQUF5QixvQ0FBb0MscUNBQXFDLHNDQUFzQyxnRUFBZ0Usd0NBQXdDLG9DQUFvQyx5Q0FBeUMsZ0NBQWdDLDRCQUE0QixzQ0FBc0MsK0JBQStCLCtDQUErQyxzQkFBc0IsMkNBQTJDLG1CQUFtQixlQUFlLGdDQUFnQyx3Q0FBd0MsaUNBQWlDLDRCQUE0Qiw2QkFBNkIsbUNBQW1DLG9DQUFvQyw4Q0FBOEMsbUJBQW1CLGVBQWUsV0FBVyx5QkFBeUIsNEJBQTRCLHdDQUF3QyxvQ0FBb0Msa0NBQWtDLG9DQUFvQywwQkFBMEIsK0JBQStCLCtDQUErQyw4Q0FBOEMsMkNBQTJDLDZCQUE2QixlQUFlLCtCQUErQiwrREFBK0QsMkRBQTJELGdDQUFnQyxzQ0FBc0MsOEJBQThCLG1DQUFtQyxnQ0FBZ0Msd0RBQXdELGtDQUFrQyxtQ0FBbUMsb0NBQW9DLHdEQUF3RCxnQ0FBZ0MsbUNBQW1DLG1DQUFtQyxpQ0FBaUMsa0RBQWtELHVDQUF1Qyx3Q0FBd0MsdUJBQXVCLGtDQUFrQyx3Q0FBd0MsaURBQWlELG9DQUFvQyw4QkFBOEIsbURBQW1ELDRDQUE0QywyQkFBMkIsNkJBQTZCLGtEQUFrRCwyQkFBMkIsdUJBQXVCLG1CQUFtQixlQUFlLFdBQVcsOEJBQThCLG9DQUFvQyxtQ0FBbUMscUNBQXFDLCtCQUErQix3Q0FBd0MsK0JBQStCLCtDQUErQyw4Q0FBOEMsK0JBQStCLGtDQUFrQyxpREFBaUQsZUFBZSw4QkFBOEIsMENBQTBDLHVDQUF1Qyx5Q0FBeUMscUNBQXFDLDZCQUE2Qiw0QkFBNEIsK0JBQStCLG9DQUFvQyxlQUFlLG1CQUFtQix3Q0FBd0MseUNBQXlDLDRCQUE0Qix1QkFBdUIsc0NBQXNDLHNFQUFzRSxtQ0FBbUMsa0NBQWtDLG1CQUFtQixzQkFBc0IsbUNBQW1DLG1CQUFtQixlQUFlLFdBQVcsT0FBTyxHQUFHLG1CQUFtQjtBQUNsaFg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUE0STtBQUM1STtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDRIQUFPOzs7O0FBSXNGO0FBQzlHLE9BQU8saUVBQWUsNEhBQU8sSUFBSSxtSUFBYyxHQUFHLG1JQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmd0M7QUFDQTtBQUNJOztBQUU1Qzs7QUFFQTtBQUNBLFNBQVMsdURBQXVELDhDQUFLLENBQUM7QUFDdEUsU0FBUyxnREFBZ0QsOENBQUssQ0FBQztBQUMvRCxTQUFTLHlEQUF5RCxnREFBTyxDQUFDO0FBQzFFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ2pEZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDWGY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDbUI7QUFDRTtBQUNIOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsZ0RBQU07QUFDekMsbUNBQW1DLCtDQUFLO0FBQ3hDLG1DQUFtQyw4Q0FBSzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQzNDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2pFZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmbUM7QUFDSztBQUNBO0FBQ087QUFDWjtBQUNkOzs7QUFHckI7O0FBRUE7QUFDQSwwQkFBMEIseURBQU07O0FBRWhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHdEQUFRO0FBQzNCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsbUJBQW1CLHdEQUFRO0FBQzNCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsbUJBQW1CLDJEQUFXO0FBQzlCLEtBQUs7O0FBRUwsZUFBZSx3REFBUTs7QUFFdkI7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHlEQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1tZW51Ly4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1tZW51Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW1lbnUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW1lbnUvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbWVudS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW1lbnUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbWVudS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW1lbnUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1tZW51Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1tZW51Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1tZW51Ly4vc3JjL3BhZ2VzL2NvbnRhY3QtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW1lbnUvLi9zcmMvcGFnZXMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbWVudS8uL3NyYy9wYWdlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1tZW51Ly4vc3JjL3BhZ2VzL21haW4tcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW1lbnUvLi9zcmMvcGFnZXMvbWVudS1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbWVudS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW1lbnUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1tZW51L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW1lbnUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW1lbnUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW1lbnUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW1lbnUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1tZW51Ly4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcbn1cXG5ib2R5IC5oZWFkZXIsIGJvZHkgLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbmJvZHkgLmhlYWRlciB7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5ib2R5IC5oZWFkZXIgLmJhbm5lciBoMSB7XFxuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxufVxcbmJvZHkgLmZvb3RlciB7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcbmJvZHkgLm5hdi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGdhcDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFOUM0NkE7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogNjAwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMHB4O1xcbn1cXG5ib2R5IC5uYXYtY29udGFpbmVyIHAge1xcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5ib2R5IC5uYXYtY29udGFpbmVyIHA6aG92ZXIge1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbmJvZHkgLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmJvZHkgLmNvbnRlbnQtY29udGFpbmVyIC5tYWluLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNDBweCk7XFxufVxcbmJvZHkgLmNvbnRlbnQtY29udGFpbmVyIC5tYWluLWNvbnRlbnQgLmhlcm8tbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDc1cHg7XFxuICBnYXA6IDMwcHg7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcXG59XFxuYm9keSAuY29udGVudC1jb250YWluZXIgLm1haW4tY29udGVudCAuaGVyby1tZXNzYWdlIGgxIHtcXG4gIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcXG59XFxuYm9keSAuY29udGVudC1jb250YWluZXIgLm1haW4tY29udGVudCAuaW1hZ2UtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG8gMDtcXG4gIGdhcDogMzBweDtcXG59XFxuYm9keSAuY29udGVudC1jb250YWluZXIgLm1haW4tY29udGVudCAuaW1hZ2UtY29udGFpbmVyIC5tYWluLWltZyB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgI0U5QzQ2QTtcXG59XFxuYm9keSAuY29udGVudC1jb250YWluZXIgLm1lbnUtY29udGVudCAubWVudS1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMTAwcHg7XFxuICBsZWZ0OiAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogY2FsYyg1MCUgLSAzMDBweCk7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5ib2R5IC5jb250ZW50LWNvbnRhaW5lciAubWVudS1jb250ZW50IC5tZW51LWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAxNzBweDtcXG4gIG1hcmdpbi1ib3R0b206IDkwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgcGFkZGluZzogNTBweCAxMDBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ2FwOiA1MHB4IDEwMHB4O1xcbn1cXG5ib2R5IC5jb250ZW50LWNvbnRhaW5lciAubWVudS1jb250ZW50IC5tZW51LWNvbnRhaW5lciAuaXRlbS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUwcHggYXV0bztcXG4gIGdhcDogMjBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuYm9keSAuY29udGVudC1jb250YWluZXIgLm1lbnUtY29udGVudCAubWVudS1jb250YWluZXIgLml0ZW0tY29udGFpbmVyIC5pdGVtLWltZyB7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjRTlDNDZBO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG59XFxuYm9keSAuY29udGVudC1jb250YWluZXIgLm1lbnUtY29udGVudCAubWVudS1jb250YWluZXIgLml0ZW0tY29udGFpbmVyIC5pdGVtLXRleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcbmJvZHkgLmNvbnRlbnQtY29udGFpbmVyIC5tZW51LWNvbnRlbnQgLm1lbnUtY29udGFpbmVyIC5pdGVtLWNvbnRhaW5lciAuaXRlbS10ZXh0IGgzIHtcXG4gIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcXG4gIGNvbG9yOiAjMTE5OTc3O1xcbn1cXG5ib2R5IC5jb250ZW50LWNvbnRhaW5lciAubWVudS1jb250ZW50IC5tZW51LWNvbnRhaW5lciAuaXRlbS1jb250YWluZXIgLml0ZW0tdGV4dCBwIHtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcbmJvZHkgLmNvbnRlbnQtY29udGFpbmVyIC5jb250YWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuYm9keSAuY29udGVudC1jb250YWluZXIgLmNvbnRhY3QtY29udGFpbmVyIC5jb250YWN0LWhlYWRlciwgYm9keSAuY29udGVudC1jb250YWluZXIgLmNvbnRhY3QtY29udGFpbmVyIC5jb250YWN0LWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMTMwcHg7XFxufVxcbmJvZHkgLmNvbnRlbnQtY29udGFpbmVyIC5jb250YWN0LWNvbnRhaW5lciAuY29udGFjdC1pdGVtcyB7XFxuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMTBweDtcXG4gIGdhcDogNTBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBhZGRpbmc6IDMwcHggMHB4O1xcbn1cXG5ib2R5IC5jb250ZW50LWNvbnRhaW5lciAuY29udGFjdC1jb250YWluZXIgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5ib2R5IC5jb250ZW50LWNvbnRhaW5lciAuY29udGFjdC1jb250YWluZXIgZGl2IGltZyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE4MHB4KSB0cmFuc2xhdGVZKC0xNXB4KTtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbn1cXG5ib2R5IC5jb250ZW50LWNvbnRhaW5lciAuY29udGFjdC1jb250YWluZXIgZGl2IGgzIHtcXG4gIGNvbG9yOiAjRTlDNDZBO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUEwQkE7RUFDSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQXpCSjs7QUE0QkE7RUFDSSxrQkEvQlU7RUFnQ1Ysb0JBOUJVO0FBS2Q7QUEwQkk7RUF6QkEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUF5Qkksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQXRCUjtBQXdCSTtFQUNJLE1BQUE7RUFDQSxhQTNDTTtBQXFCZDtBQXVCUTtFQTFCSix3QkFBQTtBQU1KO0FBd0JJO0VBQ0ksU0FBQTtFQUNBLFlBaERNO0FBMEJkO0FBd0JJO0VBNUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBSUEsMENBQUE7RUF5Q0ksU0FBQTtFQUNBLHlCQTVERDtFQTZEQyxZQXhESztFQXlETCxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBcEJSO0FBcUJRO0VBM0NKLHdCQUFBO0VBNkNRLFlBQUE7RUFDQSxxQkFBQTtBQW5CWjtBQW9CWTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFsQmhCO0FBc0JJO0VBL0RBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBNENKO0FBbUJRO0VBakVKLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBaUVRLHNCQUFBO0VBQ0EsMkJBekVLO0FBMERqQjtBQWlCWTtFQXRFUixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUlBLDBDQUFBO0VBbUVZLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkF4Rko7QUEyRVo7QUFjZ0I7RUFyRVosd0JBQUE7QUEwREo7QUFlWTtFQW5GUixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQW1GWSxjQUFBO0VBQ0EsU0FBQTtBQVhoQjtBQVlnQjtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFWcEI7QUFlWTtFQS9GUixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUlBLDBDQUFBO0VBNEZZLGVBQUE7RUFDQSxVQTNHRjtFQTRHRSxPQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQWhISjtFQWlISSxhQTFHSztFQTJHTCx3QkFBQTtFQUNBLFVBQUE7QUFYaEI7QUFhWTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0FBWGhCO0FBWWdCO0VBQ0ksYUFBQTtFQUNBLGlDQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBVnBCO0FBV29CO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQVR4QjtBQVdvQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFUeEI7QUFVd0I7RUExSHBCLHdCQUFBO0VBNEh3QixjQWpKcEI7QUF5SVI7QUFVd0I7RUFDSSxtQkFBQTtBQVI1QjtBQWNRO0VBL0lKLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBUUEsd0JBQUE7RUF3SVEsc0JBQUE7QUFWWjtBQVdZO0VBbkpSLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBbUpZLFlBQUE7RUFDQSx5QkFoS0o7RUFpS0ksYUExSks7RUEySkwsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBUGhCO0FBU1k7RUFsSlIsd0JBQUE7RUFxSlksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBUmhCO0FBVVk7RUF0S1IsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFzS1ksc0JBQUE7RUFDQSxTQUFBO0FBTmhCO0FBT2dCO0VBQ0ksZUFBQTtFQUNBLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFMcEI7QUFPZ0I7RUFDSSxjQTdMYjtBQXdMUFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkZ29sZDogI0U5QzQ2QTtcXG4kZ3JlZW46ICMxMTk5Nzc7XFxuJGRhcmstZ3JheTogIzFBMUExQTtcXG5cXG4kaGVhZC1oZWlnaHQ6IDEwMHB4O1xcbiRuYXYtaGVpZ2h0OiAzMHB4O1xcbiRmb290LWhlaWdodDogNDBweDtcXG4kY29udGVudC1oZWlnaHQ6IGNhbGMoMTAwdmggLSBjYWxjKCRoZWFkLWhlaWdodCArICRmb290LWhlaWdodCkpO1xcblxcbiRtZW51LWhlYWRlci1oZWlnaHQ6IDE1MHB4O1xcblxcbkBtaXhpbiBmbGV4Q2VudGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBtaXhpbiBzaGFkb3cge1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbkBtaXhpbiBoMUhlYWRpbmcge1xcbiAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxuICAgIFxcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBwYWRkaW5nLXRvcDogJGhlYWQtaGVpZ2h0O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogJGZvb3QtaGVpZ2h0O1xcbiAgICAuaGVhZGVyLCAuZm9vdGVyIHtcXG4gICAgICAgIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB9XFxuICAgIC5oZWFkZXIge1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAkaGVhZC1oZWlnaHQ7XFxuICAgICAgICAuYmFubmVyIGgxIHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBoMUhlYWRpbmcoKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAuZm9vdGVyIHtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIGhlaWdodDogJGZvb3QtaGVpZ2h0O1xcbiAgICB9XFxuICAgIC5uYXYtY29udGFpbmVyIHtcXG4gICAgICAgIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXG4gICAgICAgIEBpbmNsdWRlIHNoYWRvdygpO1xcbiAgICAgICAgZ2FwOiAzMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGQ7XFxuICAgICAgICBoZWlnaHQ6ICRuYXYtaGVpZ2h0O1xcbiAgICAgICAgd2lkdGg6IDYwMHB4O1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAxMDBweDtcXG4gICAgICAgIHAge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIGgxSGVhZGluZygpO1xcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5jb250ZW50LWNvbnRhaW5lciB7XFxuICAgICAgICBAaW5jbHVkZSBmbGV4Q2VudGVyKCk7XFxuICAgICAgICAubWFpbi1jb250ZW50IHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4Q2VudGVyKCk7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBoZWlnaHQ6ICRjb250ZW50LWhlaWdodDtcXG4gICAgICAgICAgICAvLyBNYWluIFBhZ2Ugc3R5bGluZy5cXG4gICAgICAgICAgICAuaGVyby1tZXNzYWdlIHtcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzaGFkb3coKTtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNzVweDtcXG4gICAgICAgICAgICAgICAgZ2FwOiAzMHB4O1xcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWdyYXk7XFxuICAgICAgICAgICAgICAgIGgxIHtcXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGgxSGVhZGluZygpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5pbWFnZS1jb250YWluZXIge1xcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBmbGV4Q2VudGVyKCk7XFxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byAwO1xcbiAgICAgICAgICAgICAgICBnYXA6IDMwcHg7XFxuICAgICAgICAgICAgICAgIC5tYWluLWltZyB7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgJGdvbGQ7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAubWVudS1jb250ZW50IHtcXG4gICAgICAgICAgICAubWVudS1oZWFkZXIge1xcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBmbGV4Q2VudGVyKCk7XFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNoYWRvdygpO1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICAgICAgICAgIHRvcDogJGhlYWQtaGVpZ2h0O1xcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWdyYXk7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogJG1lbnUtaGVhZGVyLWhlaWdodDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMzAwcHgpO1xcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAubWVudS1jb250YWluZXIge1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKCRtZW51LWhlYWRlci1oZWlnaHQgKyAyMHB4KTtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygkZm9vdC1oZWlnaHQgKyA1MHB4KTtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNTBweCAxMDBweDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgICAgICAgICAgICAgIGdhcDogNTBweCAxMDBweDtcXG4gICAgICAgICAgICAgICAgLml0ZW0tY29udGFpbmVyIHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1MHB4IGF1dG87XFxuICAgICAgICAgICAgICAgICAgICBnYXA6IDIwcHg7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAwcHg7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgICAgICAuaXRlbS1pbWcge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICRnb2xkO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgLml0ZW0tdGV4dCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogMjBweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBoMyB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGgxSGVhZGluZygpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyZWVuO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuY29udGFjdC1jb250YWluZXIge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXG4gICAgICAgICAgICBAaW5jbHVkZSBoMUhlYWRpbmcoKTtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIC5jb250YWN0LWhlYWRlciB7XFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1ncmF5O1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICRtZW51LWhlYWRlci1oZWlnaHQ7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgICAgICAgICB0b3A6IGNhbGMoJGhlYWQtaGVpZ2h0ICsgMzBweCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5jb250YWN0LWl0ZW1zIHtcXG4gICAgICAgICAgICAgICAgQGV4dGVuZCAuY29udGFjdC1oZWFkZXI7XFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGgxSGVhZGluZygpO1xcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIHRvcDogMzEwcHg7XFxuICAgICAgICAgICAgICAgIGdhcDogNTBweDtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDBweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgZGl2IHtcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE4MHB4KSB0cmFuc2xhdGVZKC0xNXB4KTtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIGgzIHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ29sZDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgRW1haWwgZnJvbSAnLi4vYXNzZXRzL2VtYWlsLnN2Zyc7XG5pbXBvcnQgUGhvbmUgZnJvbSAnLi4vYXNzZXRzL3Bob25lLnN2Zyc7XG5pbXBvcnQgQWRkcmVzcyBmcm9tICcuLi9hc3NldHMvYWRkcmVzcy5zdmcnO1xuXG5mdW5jdGlvbiBjb250YWN0UGFnZSgpIHtcblxuICAgIGNvbnN0IGNvbnRhY3RJbmZvID0gW1xuICAgICAgICB7bmFtZTogJ0VtYWlsJywgZGV0YWlsOiAncmVzdHVhcmFudEBnbWFpbC5jb20nLCBzeW1ib2w6IEVtYWlsfSxcbiAgICAgICAge25hbWU6ICdQaG9uZScsIGRldGFpbDogJ3h4eC14eHh4LXh4eHgnLCBzeW1ib2w6IFBob25lfSxcbiAgICAgICAge25hbWU6ICdBZGRyZXNzJywgZGV0YWlsOiAnMTAxIFJlc3RhdXJhbnQgRHJpdmUnLCBzeW1ib2w6IEFkZHJlc3N9LFxuICAgIF07XG5cbiAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgY29udGFjdEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY29udGFpbmVyJyk7XG4gICAgY29udGFjdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWhlYWRlcicpO1xuICAgIGNvbnRhY3RJdGVtcy5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWl0ZW1zJyk7XG5cbiAgICBjb250YWN0VGl0bGUuaW5uZXJUZXh0ID0gJ0NvbnRhY3QnO1xuICAgIGNvbnRhY3RIZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ29udGFjdEl0ZW0oY29udGFjdE5hbWUsIGNvbnRhY3REZXRhaWxzLCBzeW1ib2wpIHtcbiAgICAgICAgY29uc3QgY29udGFjdERldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IGNvbnRhY3ROYW1lO1xuICAgICAgICBjb25zdCBzeW1ib2xJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBzeW1ib2xJbWFnZS5zcmMgPSBzeW1ib2w7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgZGV0YWlscy5pbm5lclRleHQgPSBjb250YWN0RGV0YWlscztcbiAgICAgICAgIGNvbnRhY3REZXRhaWwuYXBwZW5kQ2hpbGQoc3ltYm9sSW1hZ2UpO1xuICAgICAgICAgY29udGFjdERldGFpbC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgICBjb250YWN0RGV0YWlsLmFwcGVuZENoaWxkKGRldGFpbHMpO1xuICAgICAgICAgcmV0dXJuIGNvbnRhY3REZXRhaWxcbiAgICB9O1xuXG4gICAgY29udGFjdEluZm8uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IGNyZWF0ZUNvbnRhY3RJdGVtKGl0ZW0ubmFtZSwgaXRlbS5kZXRhaWwsIGl0ZW0uc3ltYm9sKTtcbiAgICAgICAgY29udGFjdEl0ZW1zLmFwcGVuZENoaWxkKG5ld0l0ZW0pOyAgICAgICAgICAgXG4gICAgfSk7XG5cbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RJdGVtcyk7XG5cbiAgICByZXR1cm4gY29udGFjdENvbnRhaW5lclxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFBhZ2UiLCJmdW5jdGlvbiBmb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cbiAgICBmb290ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyVGV4dC5pbm5lclRleHQgPSAnQGdpdGh1Yi5jb20vdnlvbnl4JztcblxuICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcbiAgICByZXR1cm4gZm9vdGVyQ29udGFpbmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvb3RlciIsImZ1bmN0aW9uIGNyZWF0ZU5hdkxpbmsobmFtZSkge1xuICAgIC8vIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgLy8gbGluay5jbGFzc0xpc3QuYWRkKG5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgLy8gY29uc3QgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYW1lKTtcbiAgICAvLyBsaW5rLmFwcGVuZENoaWxkKG5ld1RpdGxlKTtcbiAgICAvLyBsaW5rLnRpdGxlID0gbmFtZTtcbiAgICAvLyBsaW5rLmhyZWYgPSAnLi8nO1xuXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsaW5rLmlubmVyVGV4dCA9IG5hbWU7XG4gICAgbGluay5jbGFzc0xpc3QuYWRkKG5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgcmV0dXJuIGxpbmtcbn1cblxuLy8gR2VuZXJhdGluZyB0aGUgZnJvbnQgcGFnZSBvZiB0aGUgcmVzdGF1cmFudC5cbmZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyQmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXJCYW5uZXIuY2xhc3NMaXN0LmFkZCgnYmFubmVyJyk7XG5cbiAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGVyVGl0bGUuaW5uZXJUZXh0ID0gJ1Rlc3QgS2l0Y2hlbic7XG4gICAgaGVhZGVyVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGVUZXh0Jyk7XG4gICAgaGVhZGVyQmFubmVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcblxuICAgIGNvbnN0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduYXYtY29udGFpbmVyJylcblxuICAgIC8vIE9wdGlvbnMgdG8gc2ltdWxhdGUgdGFiYmVkIG5hdmlnYXRpb24uIFxuICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOYXZMaW5rKCdNYWluJykpO1xuICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOYXZMaW5rKCdNZW51JykpO1xuICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOYXZMaW5rKCdDb250YWN0JykpO1xuICAgIFxuXG4gICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckJhbm5lcik7XG4gICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gaGVhZGVyQ29udGFpbmVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJcbiIsImltcG9ydCBQbGF0ZSBmcm9tICcuLi9hc3NldHMvcGxhdGUuanBlZydcbmltcG9ydCBQZW9wbGUgZnJvbSAnLi4vYXNzZXRzL3Blb3BsZS5qcGVnJ1xuaW1wb3J0IFNlYXRzIGZyb20gJy4uL2Fzc2V0cy9zZWF0cy5qcGcnXG5cbmZ1bmN0aW9uIGFkZEltYWdlKGltZykge1xuICAgIGNvbnN0IG5ld0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld0ltZy5zcmMgPSBpbWc7XG4gICAgbmV3SW1nLmNsYXNzTGlzdC5hZGQoJ21haW4taW1nJyk7XG4gICAgcmV0dXJuIG5ld0ltZ1xufVxuXG5mdW5jdGlvbiBtYWluUGFnZSgpIHtcbiAgICAvLyBET00gbm9kZSBjcmVhdGlvbi5cbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVyb0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IGhlcm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgaGVyb1N0YXRlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cbiAgICAvLyBDbGFzcyBhZGRpdGlvbnMuXG4gICAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnQnKVxuICAgIGhlcm9JbWFnZS5jbGFzc0xpc3QuYWRkKCdoZXJvLW1lc3NhZ2UnKTtcbiAgICBpbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbWFnZS1jb250YWluZXInKTtcbiAgICBcbiAgICAvLyBOb2RlIG1hbmlwdWxhdGlvbi5cbiAgICBoZXJvVGl0bGUuaW5uZXJUZXh0ID0gJ01pc3Npb24gU3RhdGVtZW50JztcbiAgICBoZXJvU3RhdGVtZW50LmlubmVyVGV4dCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIHVsdHJpY2VzIHV0IGxvcmVtIHV0IHVsdHJpY2llcy4gQWVuZWFuIGNvbW1vZG8gZXN0IGVnZXQgcGVsbGVudGVzcXVlIHNvZGFsZXMuIFNlZCB0aW5jaWR1bnQgbWF0dGlzIG1heGltdXMuIFN1c3BlbmRpc3NlIHZhcml1cyBtYXR0aXMgdGVsbHVzLCB1dCBjb252YWxsaXMgZXggYWxpcXVhbSBhLiBTZWQgcGhhcmV0cmEgbnVsbGEgdmVsIG1hdXJpcyBkYXBpYnVzLCBjdXJzdXMgdGVtcG9yIGF1Z3VlIGZldWdpYXQuIE51bGxhIHF1aXMgbnVuYyB2ZWwgc2VtIHBvc3VlcmUgcHVsdmluYXIgZXUgc2l0IGFtZXQgbGliZXJvLiBTZWQgZ3JhdmlkYSBsZWN0dXMgbmVxdWUsIHNlZCBhbGlxdWFtIG9kaW8gc29kYWxlcyBuZWMuIEludGVnZXIgZWxlbWVudHVtIG51bmMgZWdldCBtaSBsYWNpbmlhLCB2aXRhZSBsdWN0dXMgbGliZXJvIHRpbmNpZHVudC4gTW9yYmkgaW50ZXJkdW0gc2FwaWVuIG5lYyB2b2x1dHBhdCB2ZXN0aWJ1bHVtLidcblxuICAgIC8vIEFkZGluZyBpbWFnZXMuXG4gICAgaW1hZ2VDb250YWluZXIuYXBwZW5kKGFkZEltYWdlKFBlb3BsZSkpO1xuICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZChhZGRJbWFnZShQbGF0ZSkpO1xuICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZChhZGRJbWFnZShTZWF0cykpO1xuXG4gICAgLy8gQXBwZW5kaW5nIG5ldyBub2RlcyB0byBuZXcgY29udGFpbmVyLlxuICAgIGhlcm9JbWFnZS5hcHBlbmRDaGlsZChoZXJvVGl0bGUpO1xuICAgIGhlcm9JbWFnZS5hcHBlbmRDaGlsZChoZXJvU3RhdGVtZW50KTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm9JbWFnZSk7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gY29udGVudENvbnRhaW5lclxufVxuXG5leHBvcnQgZGVmYXVsdCBtYWluUGFnZSIsImZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKHRpdGxlKSB7XG4gICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaXRlbUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtLWNvbnRhaW5lcicpO1xuICAgIGl0ZW1UZXh0LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tdGV4dCcpO1xuICAgIGl0ZW1JbWcuY2xhc3NMaXN0LmFkZCgnaXRlbS1pbWcnKTtcblxuXG4gICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaXRlbVRpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5pbm5lclRleHQgPSAnVGhpcyBpcyBhIGdlbmVyaWMgZGVzY3JpcHRpb24gYWJvdXQgdGhpcyBwYXJ0aWN1bGFyIG1lbnUgaXRlbS4gSXQgZ29lcyBpbnRvIGEgYml0IG9mIGRlcHRoIGFib3V0IHRoZSBpbmdyZWRpZW50cyB1c2VkIGFuZCB3aHkgaXRzIHNvIHNwZWNpYWwuJ1xuICAgIGl0ZW1UZXh0LmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XG4gICAgaXRlbVRleHQuYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcblxuXG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtSW1nKTtcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1UZXh0KTtcblxuICAgIHJldHVybiBpdGVtQ29udGFpbmVyXG59O1xuXG5mdW5jdGlvbiBhZGRJbWFnZShpbWcpIHtcbiAgICBjb25zdCBuZXdJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdJbWcuc3JjID0gaW1nO1xuICAgIG5ld0ltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWltZycpO1xuICAgIHJldHVybiBuZXdJbWdcbn1cblxuZnVuY3Rpb24gbWVudVBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250ZW50Jyk7XG5cbiAgICAvLyBDcmVhdGluZyB0aGUgbWVudSBoZWFkZXIuXG4gICAgY29uc3QgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkZXInKTtcbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIG1lbnVUaXRsZS5pbm5lclRleHQgPSAnTWVudSc7XG4gICAgbWVudUhlYWRlci5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuXG4gICAgLy8gQ3JlYXRpbmcgNnggbWVudSBpdGVtcy5cbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuXG4gICAgbGV0IGRpc2hlcyA9IFtcbiAgICAgICAgJ0NoaWNrZW4gU2FuZHdpY2gnLFxuICAgICAgICAnU3RlYWsgYW5kIENoZWVzZSBQaWUnLFxuICAgICAgICAnUGVwcGVyb25pIFBpenphJyxcbiAgICAgICAgJ0dhcmRlbiBTYWxhZCcsXG4gICAgICAgICdGYWxhZmVsIEJpdGVzJyxcbiAgICAgICAgJ0VnZ3MgQmVubnknXG4gICAgXTtcblxuICAgIGRpc2hlcy5mb3JFYWNoKGRpc2ggPT4ge1xuICAgICAgICBjb25zdCBuZXdJdGVtID0gY3JlYXRlTWVudUl0ZW0oZGlzaCk7XG4gICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3SXRlbSk7XG4gICAgfSk7XG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG4gICAgcmV0dXJuIGNvbnRlbnRDb250YWluZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudVBhZ2UiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBoZWFkZXIgZnJvbSBcIi4vcGFnZXMvaGVhZGVyXCJcbmltcG9ydCBtYWluUGFnZSBmcm9tIFwiLi9wYWdlcy9tYWluLXBhZ2VcIlxuaW1wb3J0IG1lbnVQYWdlIGZyb20gXCIuL3BhZ2VzL21lbnUtcGFnZVwiXG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSAnLi9wYWdlcy9jb250YWN0LXBhZ2UnO1xuaW1wb3J0IGZvb3RlciBmcm9tIFwiLi9wYWdlcy9mb290ZXJcIlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5cblxuY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Q29udGFpbmVyJyk7XG5cbmZ1bmN0aW9uIHBhZ2VIYW5kbGVyKCkge1xuICAgIGNvbnN0IGhlYWRlckNvbnRlbnQgPSBoZWFkZXIoKTtcblxuICAgIGNvbnN0IG5hdk1haW5CdXR0b24gPSBoZWFkZXJDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgY29uc3QgbmF2TWVudUJ1dHRvbiA9IGhlYWRlckNvbnRlbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbiAgICBjb25zdCBuYXZDb250YWN0QnV0dG9uID0gaGVhZGVyQ29udGVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdCcpO1xuXG4gICAgbmF2TWFpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlQ29udGVudCgpO1xuICAgICAgICBjcmVhdGVQYWdlKG1haW5QYWdlKTtcbiAgICB9KTtcbiAgICBuYXZNZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByZW1vdmVDb250ZW50KCk7XG4gICAgICAgIGNyZWF0ZVBhZ2UobWVudVBhZ2UpO1xuICAgIH0pO1xuICAgIG5hdkNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJlbW92ZUNvbnRlbnQoKTtcbiAgICAgICAgY3JlYXRlUGFnZShjb250YWN0UGFnZSk7XG4gICAgfSk7XG5cbiAgICBjcmVhdGVQYWdlKG1haW5QYWdlKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVBhZ2UoY29udGVudCkge1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRlbnQpO1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQoKSk7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiByZW1vdmVDb250ZW50KCkge1xuICAgICAgICB3aGlsZSAoY29udGVudENvbnRhaW5lci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGVudENvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZW1vdmVDb250ZW50XG4gICAgfVxufTtcblxuY29uc3QgcmVzdGF1cmFudFBhZ2UgPSBwYWdlSGFuZGxlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9