/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "*{\r\n  box-sizing: border-box;\r\n}\r\n:root {\r\n  --size: 1.5em;\r\n\r\n}\r\n.header{\r\n  background: blue;\r\n  font-size: 3rem;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.board {\r\n  border-spacing: 0;\r\n  border-collapse: collapse;\r\n  display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.board th {\r\n  padding: .5em;\r\n}\r\n\r\n.board th+th {\r\n  border-bottom: 1px solid .000;\r\n}\r\n\r\n.board th:first-child,\r\n.board td:last-child {\r\n  border-right: 1px solid .000;\r\n}\r\n\r\n.board tr:last-child td {\r\n  border-bottom: 1px solid;\r\n}\r\n\r\n.board th:empty {\r\n  border: none;\r\n}\r\n\r\n.board td {\r\n  width:var(--size);\r\n  height: var(--size);\r\n  /* text-align: center; */\r\n  font-size: 22px;\r\n  line-height: 0;\r\n}\r\n\r\n.board .light {\r\n  background: #eee;\r\n  border: 1px solid;\r\n}\r\n.light:hover{\r\n  background: #aaa;\r\n}\r\n.board .dark {\r\n  background: #aaa;\r\n}\r\nimg{\r\n  width: 30px;\r\n  height: auto;\r\n}\r\n#container{\r\n  display: flex;\r\n  height: 100vh;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\nbody{\r\n  overflow: hidden;\r\n  background-color: oldlace;\r\n\r\n}\r\n#player,#computer{\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.btn-your-fleet{\r\n  color: #fff;\r\n  background-color: #d9534f;\r\n  border-color: #d43f3a;\r\n  display: inline-block;\r\n}\r\n.btn-opponent{\r\n  color: #fff;\r\n  background-color:grey;\r\n  border-color: #eea236;\r\n}\r\n.btn-opponent,.btn-your-fleet{\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  -ms-touch-action: manipulation;\r\n  touch-action: manipulation;\r\n  background-image: none;\r\n  border: 1px solid transparent;\r\n  padding: 6px 12px;\r\n  font-size: 14px;\r\n  line-height: 1.42857143;\r\n  border-radius: 4px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n\r\n}\r\n.ships{\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n.ship{\r\n  background: black;\r\n  \r\n}\r\n\r\nbutton{\r\n  color: #fff;\r\n  background-color: #337ab7;\r\n  border-color: #2e6da4;\r\n  display: inline-block;\r\n  margin-bottom: 0;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  -ms-touch-action: manipulation;\r\n  touch-action: manipulation;\r\n  cursor: pointer;\r\n  background-image: none;\r\n  border: 1px solid transparent;\r\n  padding: 6px 12px;\r\n  font-size: 14px;\r\n  line-height: 1.42857143;\r\n  border-radius: 4px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n\r\n}\r\nul{\r\n  list-style: none;\r\n}\r\nul > li{\r\n  margin-bottom: 10px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;AACA;EACE,aAAa;;AAEf;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,aAAa;IACX,uBAAuB;AAC3B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;;EAEE,4BAA4B;AAC9B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,wBAAwB;EACxB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;AACA;EACE,gBAAgB;EAChB,yBAAyB;;AAE3B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,yBAAyB;EACzB,qBAAqB;EACrB,qBAAqB;AACvB;AACA;EACE,WAAW;EACX,qBAAqB;EACrB,qBAAqB;AACvB;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,sBAAsB;EACtB,8BAA8B;EAC9B,0BAA0B;EAC1B,sBAAsB;EACtB,6BAA6B;EAC7B,iBAAiB;EACjB,eAAe;EACf,uBAAuB;EACvB,kBAAkB;EAClB,yBAAyB;EACzB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;;AAEnB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,iBAAiB;;AAEnB;;AAEA;EACE,WAAW;EACX,yBAAyB;EACzB,qBAAqB;EACrB,qBAAqB;EACrB,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,sBAAsB;EACtB,8BAA8B;EAC9B,0BAA0B;EAC1B,eAAe;EACf,sBAAsB;EACtB,6BAA6B;EAC7B,iBAAiB;EACjB,eAAe;EACf,uBAAuB;EACvB,kBAAkB;EAClB,yBAAyB;EACzB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;;AAEnB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,mBAAmB;AACrB","sourcesContent":["*{\r\n  box-sizing: border-box;\r\n}\r\n:root {\r\n  --size: 1.5em;\r\n\r\n}\r\n.header{\r\n  background: blue;\r\n  font-size: 3rem;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.board {\r\n  border-spacing: 0;\r\n  border-collapse: collapse;\r\n  display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.board th {\r\n  padding: .5em;\r\n}\r\n\r\n.board th+th {\r\n  border-bottom: 1px solid .000;\r\n}\r\n\r\n.board th:first-child,\r\n.board td:last-child {\r\n  border-right: 1px solid .000;\r\n}\r\n\r\n.board tr:last-child td {\r\n  border-bottom: 1px solid;\r\n}\r\n\r\n.board th:empty {\r\n  border: none;\r\n}\r\n\r\n.board td {\r\n  width:var(--size);\r\n  height: var(--size);\r\n  /* text-align: center; */\r\n  font-size: 22px;\r\n  line-height: 0;\r\n}\r\n\r\n.board .light {\r\n  background: #eee;\r\n  border: 1px solid;\r\n}\r\n.light:hover{\r\n  background: #aaa;\r\n}\r\n.board .dark {\r\n  background: #aaa;\r\n}\r\nimg{\r\n  width: 30px;\r\n  height: auto;\r\n}\r\n#container{\r\n  display: flex;\r\n  height: 100vh;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\nbody{\r\n  overflow: hidden;\r\n  background-color: oldlace;\r\n\r\n}\r\n#player,#computer{\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.btn-your-fleet{\r\n  color: #fff;\r\n  background-color: #d9534f;\r\n  border-color: #d43f3a;\r\n  display: inline-block;\r\n}\r\n.btn-opponent{\r\n  color: #fff;\r\n  background-color:grey;\r\n  border-color: #eea236;\r\n}\r\n.btn-opponent,.btn-your-fleet{\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  -ms-touch-action: manipulation;\r\n  touch-action: manipulation;\r\n  background-image: none;\r\n  border: 1px solid transparent;\r\n  padding: 6px 12px;\r\n  font-size: 14px;\r\n  line-height: 1.42857143;\r\n  border-radius: 4px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n\r\n}\r\n.ships{\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n.ship{\r\n  background: black;\r\n  \r\n}\r\n\r\nbutton{\r\n  color: #fff;\r\n  background-color: #337ab7;\r\n  border-color: #2e6da4;\r\n  display: inline-block;\r\n  margin-bottom: 0;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  -ms-touch-action: manipulation;\r\n  touch-action: manipulation;\r\n  cursor: pointer;\r\n  background-image: none;\r\n  border: 1px solid transparent;\r\n  padding: 6px 12px;\r\n  font-size: 14px;\r\n  line-height: 1.42857143;\r\n  border-radius: 4px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n\r\n}\r\nul{\r\n  list-style: none;\r\n}\r\nul > li{\r\n  margin-bottom: 10px;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/domStuff.js":
/*!*************************!*\
  !*** ./src/domStuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearDisplay": () => (/* binding */ clearDisplay),
/* harmony export */   "createBoardDisplay": () => (/* binding */ createBoardDisplay),
/* harmony export */   "createDisplay": () => (/* binding */ createDisplay),
/* harmony export */   "createFleet": () => (/* binding */ createFleet),
/* harmony export */   "createOpponent": () => (/* binding */ createOpponent),
/* harmony export */   "displayShot": () => (/* binding */ displayShot),
/* harmony export */   "putShipOnDisplay": () => (/* binding */ putShipOnDisplay),
/* harmony export */   "resetBoard": () => (/* binding */ resetBoard)
/* harmony export */ });
/* harmony import */ var _img_hit_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/hit.svg */ "./src/img/hit.svg");
/* harmony import */ var _img_miss_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/miss.svg */ "./src/img/miss.svg");


function createBoardDisplay(parent) {
  const board = document.createElement("table");
  const tbody = document.createElement("tbody");
  board.classList.add("board");
  let letters = "abcdefghij";
  const letterRow = document.createElement("tr");
  letterRow.appendChild(document.createElement("th"));
  for (let i = 0; i < letters.length; i++) {
    let th = document.createElement("th");
    th.innerText = letters[i];
    letterRow.appendChild(th);
  }
  tbody.appendChild(letterRow);
  for (let i = 1; i < 11; i++) {
    if (parent.id === "computer") {
      tbody.appendChild(createRow(i, true));
    } else {
      tbody.appendChild(createRow(i));
    }
  }
  board.appendChild(tbody);
  parent.appendChild(board);
}

function createRow(number, isComputer = false) {
  let row = document.createElement("tr");
  let th = document.createElement("th");
  th.innerText = number;
  row.appendChild(th);
  for (let i = 0; i < 10; i++) {
    let td = document.createElement("td");

    td.classList.add("light");
    td.setAttribute("data-row", number - 1);
    td.setAttribute("data-column", i);
    if (isComputer) {
      td.setAttribute("data", "computer");
    } else {
      td.setAttribute("data", "player");
    }
    row.appendChild(td);
  }

  return row;
}

function createFleet() {
  let button = document.createElement("div");
  button.innerText = "YOUR FLEET";
  button.classList.add("btn-your-fleet");
  return button;
}

function createOpponent() {
  let button = document.createElement("div");
  button.innerText = "OPPONENT";
  button.classList.add("btn-opponent");
  return button;
}
function resetBoard(currentPos) {
  const board = document.getElementById("chess-board");
  board.innerHTML = "";
  createBoardDisplay();
  putKnightOnCell(...currentPos);
}

function displayShot(coordinate, hitOrMiss, name) {
  let x = coordinate[0];
  let y = coordinate[1];
  const imgHit = document.createElement("img");
  const imgMiss = document.createElement("img");
  imgHit.src = _img_hit_svg__WEBPACK_IMPORTED_MODULE_0__;
  imgMiss.src = _img_miss_svg__WEBPACK_IMPORTED_MODULE_1__;
  let cellname;
  if (name === "pc") {
    cellname = `[data-row="${x}"][data-column="${y}"][data="computer"]`;
  } else {
    cellname = `[data-row="${x}"][data-column="${y}"][data="player"]`;
  }

  const cell = document.querySelector(cellname);
  cell.appendChild(hitOrMiss ? imgHit : imgMiss);
}

function createDisplay() {
  const player = document.getElementById("player");
  const computer = document.getElementById("computer");
  player.appendChild(createFleet());
  computer.appendChild(createOpponent());
  createBoardDisplay(player);
  createBoardDisplay(computer);
}
function putShipOnDisplay(coordinate, ship, axis) {
  let x = coordinate[0];
  let y = coordinate[1];
  if (axis === "y") {
    for (let i = 0; i < ship.size; i++) {
      let cellname = `[data-row="${x + i}"][data-column="${y}"][data="player"]`;
      const cell = document.querySelector(cellname);
      cell.style.backgroundColor = "blue";
    }
  }
  if (axis === "x") {
    for (let i = 0; i < ship.size; i++) {
      let cellname = `[data-row="${x}"][data-column="${y + i}"][data="player"]`;
      const cell = document.querySelector(cellname);
      cell.style.backgroundColor = "blue";
    }
  }
}
function clearDisplay() {
  clear("player");
  clear("computer");
}
function clear(elementName) {
  const content = document.getElementById(elementName);
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}


/***/ }),

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCoordinates": () => (/* binding */ getCoordinates),
/* harmony export */   "moveListener": () => (/* binding */ moveListener)
/* harmony export */ });
function moveListener(player, enemy) {
  const cells = document.querySelectorAll("[data='computer']");
  let arr = Array.from(cells);
  arr.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.stopPropagation();
      let winner;
      if (player.isTurn) {
        let valid = player.attack(
          [
            parseInt(item.getAttribute("data-row")),
            parseInt(item.getAttribute("data-column")),
          ],
          enemy
        );
        if (valid) {
          player.isTurn = false;
          enemy.isTurn = true;
          winner = checkForEnd(player, enemy);
          if (winner !== null) {
            alert(`${winner.name} won!!`);
            player.isTurn = false;
            enemy.isTurn = false;
          }
        }
      }
      if (enemy.isTurn) {
        enemy.randomAttack(player);
        player.isTurn = true;
        enemy.isTurn = false;
        winner = checkForEnd(player, enemy);
        if (winner !== null) {
          alert(`${winner.name} won!!`);
          player.isTurn = false;
          enemy.isTurn = false;
        }
      }
    });
  });
}

function checkForEnd(player, computer) {
  let winner = null;
  if (player.board.isGameOver()) {
    winner = computer;
    return winner;
  }
  if (computer.board.isGameOver()) {
    winner = player;
    return winner;
  }
  return winner;
}

function getCoordinates(player) {
  let names = ["Carrier", "Battleship", "Cruiser", "Submarine", "Destroyer"];

  for (const name of names) {
    let valid = false;
    while (!valid) {
      let letters = "abcdefghij";
      let coord = prompt(
        `Where do you want to place your ${name}? format column/row Example: b5`
      );
      let axis = prompt("Vertical or Horizontal? use v or h:");
      let letter = letters.indexOf(coord[0]);
      let number = parseInt(coord[1]) - 1;
      let coordinate = [number, letter];
      valid = player.placeShip(name, coordinate, axis === "v" ? "y" : "x");
      if (!valid) {
        alert("You cant place a ship there or you typed a wrong parameter");
      }
    }
  }
}


/***/ }),

/***/ "./src/factories/gameboard.js":
/*!************************************!*\
  !*** ./src/factories/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameboardFactory": () => (/* binding */ gameboardFactory)
/* harmony export */ });
const gameboardFactory = () => {
  const board_size = 10;
  let board = [];
  let ships = [];
  for (let i = 0; i < board_size; i++) {
    let row = [];
    for (let j = 0; j < board_size; j++) {
      row.push("empty");
    }
    board.push(row);
  }
  const insert = (ship, coordinate, axis) => {
    let x = coordinate[0];
    let y = coordinate[1];
    if (shipFits(ship, coordinate, axis)) {
      if (axis === "y") {
        for (let i = 0; i < ship.size; i++) {
          board[x + i][y] = ship.name;
        }
      } else {
        for (let i = 0; i < ship.size; i++) {
          board[x][y + i] = ship.name;
        }
      }
      ships.push(ship);
      return true;
    } else {
      return false;
    }
  };
  const receive = (coordinate) => {
    // coordinate = JSON.parse(coordinate);
    let x = coordinate[0];
    let y = coordinate[1];
    switch (board[x][y]) {
      case "miss":
        return "Error. That spot has been already attacked";
        break;
      case "empty":
        board[x][y] = "miss";
        return false;
        break;
      default:
        let hit = board[x][y];
        decrease(hit);
        board[x][y] = "hit";
        return true;
        break;
    }
    //todo change status on board and return the result hit or miss
  };
  const isGameOver = () => {
    let counter = 0;
    for (const ship of ships) {
      if (ship.isSunk) {
        counter++;
      }
    }
    return counter === ships.length;
    // check if all ships inside this board is sunk, if so return true else false
  };
  const shipFits = (ship, coordinate, axis) => {
    let x = coordinate[0];
    let y = coordinate[1];
    if (board[x][y] !== "empty" || (axis !== "x" && axis !== "y")) {
      return false;
    }
    if (axis === "x") {
      for (let i = 1; i < ship.size; i++) {
        if (y + i > 9) {
          return false;
        }
        if (board[x][y + i] !== "empty") {
          return false;
        }
      }
    } else {
      for (let i = 1; i < ship.size; i++) {
        if (x + i > 9) {
          return false;
        }
        if (board[x + i][y] !== "empty") {
          return false;
        }
      }
    }
    return true;
  };
  const decrease = (shipName) => {
    for (const ship of ships) {
      if (ship.name === shipName) {
        ship.hit();
      }
    }
  };
  return { insert, receive, isGameOver, board };
};


/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory)
/* harmony export */ });
/* harmony import */ var _domStuff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domStuff.js */ "./src/domStuff.js");
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ "./src/factories/gameboard.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship.js */ "./src/factories/ship.js");




const playerFactory = (name) => {
  let board = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_1__.gameboardFactory)();
  let shotsFired = [];
  let ships = [];
  let names = ["Carrier", "Battleship", "Cruiser", "Submarine", "Destroyer"];
  let isTurn = false;
  for (const name of names) {
    ships.push((0,_ship_js__WEBPACK_IMPORTED_MODULE_2__.shipFactory)(name));
  }
  const attack = (coordinate, enemy) => {
    if (!shotsFired.includes(JSON.stringify(coordinate))) {
      enemy.receiveAttack(coordinate);
      shotsFired.push(JSON.stringify(coordinate));
      return true;
    } else {
      return false;
    }
  };
  const receiveAttack = (coordinate) => {
    let hitOrMiss = board.receive(coordinate);
    (0,_domStuff_js__WEBPACK_IMPORTED_MODULE_0__.displayShot)(coordinate, hitOrMiss, name);
    return;
  };
  const randomAttack = (enemy) => {
    let coordinate = [getRndInteger(0, 10), getRndInteger(0, 10)];
    while (shotsFired.includes(JSON.stringify(coordinate))) {
      coordinate = [getRndInteger(0, 10), getRndInteger(0, 10)];
    }
    let result = enemy.receiveAttack(coordinate);
    shotsFired.push(JSON.stringify(coordinate));
    return result;
  };
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const randomizeShips = () => {
    for (const ship of ships) {
      let number = getRndInteger(1, 3);
      let axis = number === 1 ? "y" : "x";
      let add = board.insert(ship, randomCoordinate(), axis);
      while (!add) {
        add = board.insert(ship, randomCoordinate(), axis);
      }
    }
  };
  const randomCoordinate = () => {
    return [getRndInteger(0, 10), getRndInteger(0, 10)];
  };
  const show = () => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let cellname = `[data-row="${i}"][data-column="${j}"][data="player"]`;
        if (board.board[i][j] !== "empty") {
          const cell = document.querySelector(cellname);
          cell.style.background = "blue";
        }
      }
    }
  };
  const placeShip = (shipName, coordinate, axis) => {
    let selected;
    for (const ship of ships) {
      if (ship.name === shipName) {
        selected = ship;
      }
    }
    if (board.board.insert(selected, coordinate, axis)) {
      let index = ships.indexOf(selected);
      ships.splice(index, 1);
      return true;
    }
    return false;
  };
  return {
    isTurn,
    name,
    attack,
    board,
    receiveAttack,
    randomAttack,
    randomizeShips,
    show,
    placeShip,
  };
};


/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipFactory": () => (/* binding */ shipFactory)
/* harmony export */ });
const shipFactory = (name) => {
  let hits = 0;
  let ships = {
    Carrier: 5,
    Battleship: 4,
    Cruiser: 3,
    Submarine: 3,
    Destroyer: 2,
  };
  if (!ships.hasOwnProperty(name)) {
    return "Error. That ship doesnt exist.";
  }
  return {
    size: ships[name],
    name: name,
    isSunk: false,
    hits,
    hit() {
      this.hits++;
      if (this.hits === this.size) {
        this.isSunk = true;
      }
    },
  };
};


/***/ }),

/***/ "./src/img/hit.svg":
/*!*************************!*\
  !*** ./src/img/hit.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "41d48bb895899512c10e.svg";

/***/ }),

/***/ "./src/img/miss.svg":
/*!**************************!*\
  !*** ./src/img/miss.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f99ae5e7bd328fbfc8e.svg";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _domStuff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domStuff.js */ "./src/domStuff.js");
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.js */ "./src/event.js");
/* harmony import */ var _factories_player_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factories/player.js */ "./src/factories/player.js");
/* harmony import */ var _factories_ship_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factories/ship.js */ "./src/factories/ship.js");





(0,_domStuff_js__WEBPACK_IMPORTED_MODULE_1__.createDisplay)();
function game() {
  let computerPlayer = (0,_factories_player_js__WEBPACK_IMPORTED_MODULE_3__.playerFactory)("pc");
  let userPlayer = (0,_factories_player_js__WEBPACK_IMPORTED_MODULE_3__.playerFactory)("player");
  const random = document.getElementById("random");
  const start = document.getElementById("start");
  const place = document.getElementById("place");
  computerPlayer.randomizeShips();
  random.addEventListener(
    "click",
    function (e) {
      e.stopPropagation();
      userPlayer.randomizeShips();
      userPlayer.isTurn = true;
      userPlayer.show();
    },
    { once: true }
  );
  start.addEventListener("click", function (e) {
    e.stopPropagation();
    if (userPlayer.isTurn) {
      (0,_event_js__WEBPACK_IMPORTED_MODULE_2__.moveListener)(userPlayer, computerPlayer);
    }
  });
  // place.addEventListener(
  //   "click",
  //   function (e) {
  //     e.stopPropagation();
  //     getCoordinates(userPlayer);
  //     userPlayer.isTurn = true;
  //     userPlayer.show();
  //   },
  //   { once: true }
  // );
}
game();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhO0FBQ3BDLG1CQUFtQixtRUFBYTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdURBQVk7QUFDbEI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsU0FBUztBQUNUO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb21TdHVmZi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2V2ZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpyb290IHtcXHJcXG4gIC0tc2l6ZTogMS41ZW07XFxyXFxuXFxyXFxufVxcclxcbi5oZWFkZXJ7XFxyXFxuICBiYWNrZ3JvdW5kOiBibHVlO1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uYm9hcmQge1xcclxcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxyXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB0aCB7XFxyXFxuICBwYWRkaW5nOiAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQgdGgrdGgge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIC4wMDA7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB0aDpmaXJzdC1jaGlsZCxcXHJcXG4uYm9hcmQgdGQ6bGFzdC1jaGlsZCB7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAuMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQgdHI6bGFzdC1jaGlsZCB0ZCB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB0aDplbXB0eSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB0ZCB7XFxyXFxuICB3aWR0aDp2YXIoLS1zaXplKTtcXHJcXG4gIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxyXFxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBsaW5lLWhlaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIC5saWdodCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxufVxcclxcbi5saWdodDpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQ6ICNhYWE7XFxyXFxufVxcclxcbi5ib2FyZCAuZGFyayB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYWFhO1xcclxcbn1cXHJcXG5pbWd7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuI2NvbnRhaW5lcntcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5ib2R5e1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IG9sZGxhY2U7XFxyXFxuXFxyXFxufVxcclxcbiNwbGF5ZXIsI2NvbXB1dGVye1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5idG4teW91ci1mbGVldHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZjtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2Q0M2YzYTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuLmJ0bi1vcHBvbmVudHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjpncmV5O1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZWVhMjM2O1xcclxcbn1cXHJcXG4uYnRuLW9wcG9uZW50LC5idG4teW91ci1mbGVldHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIC1tcy10b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXHJcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgcGFkZGluZzogNnB4IDEycHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFxyXFxufVxcclxcbi5zaGlwc3tcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG4uc2hpcHtcXHJcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbmJ1dHRvbntcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcXHJcXG4gIGJvcmRlci1jb2xvcjogIzJlNmRhNDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAtbXMtdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxyXFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcblxcclxcbn1cXHJcXG51bHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbnVsID4gbGl7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhOztBQUVmO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsYUFBYTtJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7RUFFRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7O0FBRTNCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCOztBQUVuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7QUFDQTtFQUNFLGlCQUFpQjs7QUFFbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7O0FBRW5CO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuOnJvb3Qge1xcclxcbiAgLS1zaXplOiAxLjVlbTtcXHJcXG5cXHJcXG59XFxyXFxuLmhlYWRlcntcXHJcXG4gIGJhY2tncm91bmQ6IGJsdWU7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5ib2FyZCB7XFxyXFxuICBib3JkZXItc3BhY2luZzogMDtcXHJcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIHRoIHtcXHJcXG4gIHBhZGRpbmc6IC41ZW07XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB0aCt0aCB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgLjAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIHRoOmZpcnN0LWNoaWxkLFxcclxcbi5ib2FyZCB0ZDpsYXN0LWNoaWxkIHtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIC4wMDA7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB0cjpsYXN0LWNoaWxkIHRkIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIHRoOmVtcHR5IHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIHRkIHtcXHJcXG4gIHdpZHRoOnZhcigtLXNpemUpO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1zaXplKTtcXHJcXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQgLmxpZ2h0IHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG59XFxyXFxuLmxpZ2h0OmhvdmVye1xcclxcbiAgYmFja2dyb3VuZDogI2FhYTtcXHJcXG59XFxyXFxuLmJvYXJkIC5kYXJrIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNhYWE7XFxyXFxufVxcclxcbmltZ3tcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG4jY29udGFpbmVye1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcbmJvZHl7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogb2xkbGFjZTtcXHJcXG5cXHJcXG59XFxyXFxuI3BsYXllciwjY29tcHV0ZXJ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmJ0bi15b3VyLWZsZWV0e1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZDQzZjNhO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG4uYnRuLW9wcG9uZW50e1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOmdyZXk7XFxyXFxuICBib3JkZXItY29sb3I6ICNlZWEyMzY7XFxyXFxufVxcclxcbi5idG4tb3Bwb25lbnQsLmJ0bi15b3VyLWZsZWV0e1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcclxcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBwYWRkaW5nOiA2cHggMTJweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHJcXG59XFxyXFxuLnNoaXBze1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcbi5zaGlwe1xcclxcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9ue1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3O1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMmU2ZGE0O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIC1tcy10b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXHJcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgcGFkZGluZzogNnB4IDEycHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFxyXFxufVxcclxcbnVse1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxudWwgPiBsaXtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGhpdCBmcm9tIFwiLi9pbWcvaGl0LnN2Z1wiO1xyXG5pbXBvcnQgbWlzcyBmcm9tIFwiLi9pbWcvbWlzcy5zdmdcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJvYXJkRGlzcGxheShwYXJlbnQpIHtcclxuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICBjb25zdCB0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICBib2FyZC5jbGFzc0xpc3QuYWRkKFwiYm9hcmRcIik7XHJcbiAgbGV0IGxldHRlcnMgPSBcImFiY2RlZmdoaWpcIjtcclxuICBjb25zdCBsZXR0ZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgbGV0dGVyUm93LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsZXQgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICB0aC5pbm5lclRleHQgPSBsZXR0ZXJzW2ldO1xyXG4gICAgbGV0dGVyUm93LmFwcGVuZENoaWxkKHRoKTtcclxuICB9XHJcbiAgdGJvZHkuYXBwZW5kQ2hpbGQobGV0dGVyUm93KTtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IDExOyBpKyspIHtcclxuICAgIGlmIChwYXJlbnQuaWQgPT09IFwiY29tcHV0ZXJcIikge1xyXG4gICAgICB0Ym9keS5hcHBlbmRDaGlsZChjcmVhdGVSb3coaSwgdHJ1ZSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlUm93KGkpKTtcclxuICAgIH1cclxuICB9XHJcbiAgYm9hcmQuYXBwZW5kQ2hpbGQodGJvZHkpO1xyXG4gIHBhcmVudC5hcHBlbmRDaGlsZChib2FyZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJvdyhudW1iZXIsIGlzQ29tcHV0ZXIgPSBmYWxzZSkge1xyXG4gIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgbGV0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gIHRoLmlubmVyVGV4dCA9IG51bWJlcjtcclxuICByb3cuYXBwZW5kQ2hpbGQodGgpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgbGV0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cclxuICAgIHRkLmNsYXNzTGlzdC5hZGQoXCJsaWdodFwiKTtcclxuICAgIHRkLnNldEF0dHJpYnV0ZShcImRhdGEtcm93XCIsIG51bWJlciAtIDEpO1xyXG4gICAgdGQuc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5cIiwgaSk7XHJcbiAgICBpZiAoaXNDb21wdXRlcikge1xyXG4gICAgICB0ZC5zZXRBdHRyaWJ1dGUoXCJkYXRhXCIsIFwiY29tcHV0ZXJcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0ZC5zZXRBdHRyaWJ1dGUoXCJkYXRhXCIsIFwicGxheWVyXCIpO1xyXG4gICAgfVxyXG4gICAgcm93LmFwcGVuZENoaWxkKHRkKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb3c7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGbGVldCgpIHtcclxuICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBidXR0b24uaW5uZXJUZXh0ID0gXCJZT1VSIEZMRUVUXCI7XHJcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG4teW91ci1mbGVldFwiKTtcclxuICByZXR1cm4gYnV0dG9uO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3Bwb25lbnQoKSB7XHJcbiAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYnV0dG9uLmlubmVyVGV4dCA9IFwiT1BQT05FTlRcIjtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImJ0bi1vcHBvbmVudFwiKTtcclxuICByZXR1cm4gYnV0dG9uO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldEJvYXJkKGN1cnJlbnRQb3MpIHtcclxuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlc3MtYm9hcmRcIik7XHJcbiAgYm9hcmQuaW5uZXJIVE1MID0gXCJcIjtcclxuICBjcmVhdGVCb2FyZERpc3BsYXkoKTtcclxuICBwdXRLbmlnaHRPbkNlbGwoLi4uY3VycmVudFBvcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5U2hvdChjb29yZGluYXRlLCBoaXRPck1pc3MsIG5hbWUpIHtcclxuICBsZXQgeCA9IGNvb3JkaW5hdGVbMF07XHJcbiAgbGV0IHkgPSBjb29yZGluYXRlWzFdO1xyXG4gIGNvbnN0IGltZ0hpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY29uc3QgaW1nTWlzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgaW1nSGl0LnNyYyA9IGhpdDtcclxuICBpbWdNaXNzLnNyYyA9IG1pc3M7XHJcbiAgbGV0IGNlbGxuYW1lO1xyXG4gIGlmIChuYW1lID09PSBcInBjXCIpIHtcclxuICAgIGNlbGxuYW1lID0gYFtkYXRhLXJvdz1cIiR7eH1cIl1bZGF0YS1jb2x1bW49XCIke3l9XCJdW2RhdGE9XCJjb21wdXRlclwiXWA7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNlbGxuYW1lID0gYFtkYXRhLXJvdz1cIiR7eH1cIl1bZGF0YS1jb2x1bW49XCIke3l9XCJdW2RhdGE9XCJwbGF5ZXJcIl1gO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2VsbG5hbWUpO1xyXG4gIGNlbGwuYXBwZW5kQ2hpbGQoaGl0T3JNaXNzID8gaW1nSGl0IDogaW1nTWlzcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXNwbGF5KCkge1xyXG4gIGNvbnN0IHBsYXllciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyXCIpO1xyXG4gIGNvbnN0IGNvbXB1dGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wdXRlclwiKTtcclxuICBwbGF5ZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRmxlZXQoKSk7XHJcbiAgY29tcHV0ZXIuYXBwZW5kQ2hpbGQoY3JlYXRlT3Bwb25lbnQoKSk7XHJcbiAgY3JlYXRlQm9hcmREaXNwbGF5KHBsYXllcik7XHJcbiAgY3JlYXRlQm9hcmREaXNwbGF5KGNvbXB1dGVyKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcHV0U2hpcE9uRGlzcGxheShjb29yZGluYXRlLCBzaGlwLCBheGlzKSB7XHJcbiAgbGV0IHggPSBjb29yZGluYXRlWzBdO1xyXG4gIGxldCB5ID0gY29vcmRpbmF0ZVsxXTtcclxuICBpZiAoYXhpcyA9PT0gXCJ5XCIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpKyspIHtcclxuICAgICAgbGV0IGNlbGxuYW1lID0gYFtkYXRhLXJvdz1cIiR7eCArIGl9XCJdW2RhdGEtY29sdW1uPVwiJHt5fVwiXVtkYXRhPVwicGxheWVyXCJdYDtcclxuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2VsbG5hbWUpO1xyXG4gICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmx1ZVwiO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpKyspIHtcclxuICAgICAgbGV0IGNlbGxuYW1lID0gYFtkYXRhLXJvdz1cIiR7eH1cIl1bZGF0YS1jb2x1bW49XCIke3kgKyBpfVwiXVtkYXRhPVwicGxheWVyXCJdYDtcclxuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2VsbG5hbWUpO1xyXG4gICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmx1ZVwiO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJEaXNwbGF5KCkge1xyXG4gIGNsZWFyKFwicGxheWVyXCIpO1xyXG4gIGNsZWFyKFwiY29tcHV0ZXJcIik7XHJcbn1cclxuZnVuY3Rpb24gY2xlYXIoZWxlbWVudE5hbWUpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudE5hbWUpO1xyXG4gIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIG1vdmVMaXN0ZW5lcihwbGF5ZXIsIGVuZW15KSB7XHJcbiAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGE9J2NvbXB1dGVyJ11cIik7XHJcbiAgbGV0IGFyciA9IEFycmF5LmZyb20oY2VsbHMpO1xyXG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBsZXQgd2lubmVyO1xyXG4gICAgICBpZiAocGxheWVyLmlzVHVybikge1xyXG4gICAgICAgIGxldCB2YWxpZCA9IHBsYXllci5hdHRhY2soXHJcbiAgICAgICAgICBbXHJcbiAgICAgICAgICAgIHBhcnNlSW50KGl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIikpLFxyXG4gICAgICAgICAgICBwYXJzZUludChpdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uXCIpKSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBlbmVteVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgICAgICBwbGF5ZXIuaXNUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgICBlbmVteS5pc1R1cm4gPSB0cnVlO1xyXG4gICAgICAgICAgd2lubmVyID0gY2hlY2tGb3JFbmQocGxheWVyLCBlbmVteSk7XHJcbiAgICAgICAgICBpZiAod2lubmVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGAke3dpbm5lci5uYW1lfSB3b24hIWApO1xyXG4gICAgICAgICAgICBwbGF5ZXIuaXNUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGVuZW15LmlzVHVybiA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoZW5lbXkuaXNUdXJuKSB7XHJcbiAgICAgICAgZW5lbXkucmFuZG9tQXR0YWNrKHBsYXllcik7XHJcbiAgICAgICAgcGxheWVyLmlzVHVybiA9IHRydWU7XHJcbiAgICAgICAgZW5lbXkuaXNUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgd2lubmVyID0gY2hlY2tGb3JFbmQocGxheWVyLCBlbmVteSk7XHJcbiAgICAgICAgaWYgKHdpbm5lciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgYWxlcnQoYCR7d2lubmVyLm5hbWV9IHdvbiEhYCk7XHJcbiAgICAgICAgICBwbGF5ZXIuaXNUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgICBlbmVteS5pc1R1cm4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0ZvckVuZChwbGF5ZXIsIGNvbXB1dGVyKSB7XHJcbiAgbGV0IHdpbm5lciA9IG51bGw7XHJcbiAgaWYgKHBsYXllci5ib2FyZC5pc0dhbWVPdmVyKCkpIHtcclxuICAgIHdpbm5lciA9IGNvbXB1dGVyO1xyXG4gICAgcmV0dXJuIHdpbm5lcjtcclxuICB9XHJcbiAgaWYgKGNvbXB1dGVyLmJvYXJkLmlzR2FtZU92ZXIoKSkge1xyXG4gICAgd2lubmVyID0gcGxheWVyO1xyXG4gICAgcmV0dXJuIHdpbm5lcjtcclxuICB9XHJcbiAgcmV0dXJuIHdpbm5lcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvb3JkaW5hdGVzKHBsYXllcikge1xyXG4gIGxldCBuYW1lcyA9IFtcIkNhcnJpZXJcIiwgXCJCYXR0bGVzaGlwXCIsIFwiQ3J1aXNlclwiLCBcIlN1Ym1hcmluZVwiLCBcIkRlc3Ryb3llclwiXTtcclxuXHJcbiAgZm9yIChjb25zdCBuYW1lIG9mIG5hbWVzKSB7XHJcbiAgICBsZXQgdmFsaWQgPSBmYWxzZTtcclxuICAgIHdoaWxlICghdmFsaWQpIHtcclxuICAgICAgbGV0IGxldHRlcnMgPSBcImFiY2RlZmdoaWpcIjtcclxuICAgICAgbGV0IGNvb3JkID0gcHJvbXB0KFxyXG4gICAgICAgIGBXaGVyZSBkbyB5b3Ugd2FudCB0byBwbGFjZSB5b3VyICR7bmFtZX0/IGZvcm1hdCBjb2x1bW4vcm93IEV4YW1wbGU6IGI1YFxyXG4gICAgICApO1xyXG4gICAgICBsZXQgYXhpcyA9IHByb21wdChcIlZlcnRpY2FsIG9yIEhvcml6b250YWw/IHVzZSB2IG9yIGg6XCIpO1xyXG4gICAgICBsZXQgbGV0dGVyID0gbGV0dGVycy5pbmRleE9mKGNvb3JkWzBdKTtcclxuICAgICAgbGV0IG51bWJlciA9IHBhcnNlSW50KGNvb3JkWzFdKSAtIDE7XHJcbiAgICAgIGxldCBjb29yZGluYXRlID0gW251bWJlciwgbGV0dGVyXTtcclxuICAgICAgdmFsaWQgPSBwbGF5ZXIucGxhY2VTaGlwKG5hbWUsIGNvb3JkaW5hdGUsIGF4aXMgPT09IFwidlwiID8gXCJ5XCIgOiBcInhcIik7XHJcbiAgICAgIGlmICghdmFsaWQpIHtcclxuICAgICAgICBhbGVydChcIllvdSBjYW50IHBsYWNlIGEgc2hpcCB0aGVyZSBvciB5b3UgdHlwZWQgYSB3cm9uZyBwYXJhbWV0ZXJcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGdhbWVib2FyZEZhY3RvcnkgPSAoKSA9PiB7XHJcbiAgY29uc3QgYm9hcmRfc2l6ZSA9IDEwO1xyXG4gIGxldCBib2FyZCA9IFtdO1xyXG4gIGxldCBzaGlwcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmRfc2l6ZTsgaSsrKSB7XHJcbiAgICBsZXQgcm93ID0gW107XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkX3NpemU7IGorKykge1xyXG4gICAgICByb3cucHVzaChcImVtcHR5XCIpO1xyXG4gICAgfVxyXG4gICAgYm9hcmQucHVzaChyb3cpO1xyXG4gIH1cclxuICBjb25zdCBpbnNlcnQgPSAoc2hpcCwgY29vcmRpbmF0ZSwgYXhpcykgPT4ge1xyXG4gICAgbGV0IHggPSBjb29yZGluYXRlWzBdO1xyXG4gICAgbGV0IHkgPSBjb29yZGluYXRlWzFdO1xyXG4gICAgaWYgKHNoaXBGaXRzKHNoaXAsIGNvb3JkaW5hdGUsIGF4aXMpKSB7XHJcbiAgICAgIGlmIChheGlzID09PSBcInlcIikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpKyspIHtcclxuICAgICAgICAgIGJvYXJkW3ggKyBpXVt5XSA9IHNoaXAubmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNpemU7IGkrKykge1xyXG4gICAgICAgICAgYm9hcmRbeF1beSArIGldID0gc2hpcC5uYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzaGlwcy5wdXNoKHNoaXApO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJlY2VpdmUgPSAoY29vcmRpbmF0ZSkgPT4ge1xyXG4gICAgLy8gY29vcmRpbmF0ZSA9IEpTT04ucGFyc2UoY29vcmRpbmF0ZSk7XHJcbiAgICBsZXQgeCA9IGNvb3JkaW5hdGVbMF07XHJcbiAgICBsZXQgeSA9IGNvb3JkaW5hdGVbMV07XHJcbiAgICBzd2l0Y2ggKGJvYXJkW3hdW3ldKSB7XHJcbiAgICAgIGNhc2UgXCJtaXNzXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiRXJyb3IuIFRoYXQgc3BvdCBoYXMgYmVlbiBhbHJlYWR5IGF0dGFja2VkXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJlbXB0eVwiOlxyXG4gICAgICAgIGJvYXJkW3hdW3ldID0gXCJtaXNzXCI7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGxldCBoaXQgPSBib2FyZFt4XVt5XTtcclxuICAgICAgICBkZWNyZWFzZShoaXQpO1xyXG4gICAgICAgIGJvYXJkW3hdW3ldID0gXCJoaXRcIjtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIC8vdG9kbyBjaGFuZ2Ugc3RhdHVzIG9uIGJvYXJkIGFuZCByZXR1cm4gdGhlIHJlc3VsdCBoaXQgb3IgbWlzc1xyXG4gIH07XHJcbiAgY29uc3QgaXNHYW1lT3ZlciA9ICgpID0+IHtcclxuICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xyXG4gICAgICBpZiAoc2hpcC5pc1N1bmspIHtcclxuICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb3VudGVyID09PSBzaGlwcy5sZW5ndGg7XHJcbiAgICAvLyBjaGVjayBpZiBhbGwgc2hpcHMgaW5zaWRlIHRoaXMgYm9hcmQgaXMgc3VuaywgaWYgc28gcmV0dXJuIHRydWUgZWxzZSBmYWxzZVxyXG4gIH07XHJcbiAgY29uc3Qgc2hpcEZpdHMgPSAoc2hpcCwgY29vcmRpbmF0ZSwgYXhpcykgPT4ge1xyXG4gICAgbGV0IHggPSBjb29yZGluYXRlWzBdO1xyXG4gICAgbGV0IHkgPSBjb29yZGluYXRlWzFdO1xyXG4gICAgaWYgKGJvYXJkW3hdW3ldICE9PSBcImVtcHR5XCIgfHwgKGF4aXMgIT09IFwieFwiICYmIGF4aXMgIT09IFwieVwiKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwLnNpemU7IGkrKykge1xyXG4gICAgICAgIGlmICh5ICsgaSA+IDkpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJvYXJkW3hdW3kgKyBpXSAhPT0gXCJlbXB0eVwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXAuc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHggKyBpID4gOSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYm9hcmRbeCArIGldW3ldICE9PSBcImVtcHR5XCIpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcbiAgY29uc3QgZGVjcmVhc2UgPSAoc2hpcE5hbWUpID0+IHtcclxuICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xyXG4gICAgICBpZiAoc2hpcC5uYW1lID09PSBzaGlwTmFtZSkge1xyXG4gICAgICAgIHNoaXAuaGl0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiB7IGluc2VydCwgcmVjZWl2ZSwgaXNHYW1lT3ZlciwgYm9hcmQgfTtcclxufTtcclxuIiwiaW1wb3J0IHsgZGlzcGxheVNob3QsIHB1dFNoaXBPbkRpc3BsYXkgfSBmcm9tIFwiLi4vZG9tU3R1ZmYuanNcIjtcclxuaW1wb3J0IHsgZ2FtZWJvYXJkRmFjdG9yeSB9IGZyb20gXCIuL2dhbWVib2FyZC5qc1wiO1xyXG5pbXBvcnQgeyBzaGlwRmFjdG9yeSB9IGZyb20gXCIuL3NoaXAuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwbGF5ZXJGYWN0b3J5ID0gKG5hbWUpID0+IHtcclxuICBsZXQgYm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KCk7XHJcbiAgbGV0IHNob3RzRmlyZWQgPSBbXTtcclxuICBsZXQgc2hpcHMgPSBbXTtcclxuICBsZXQgbmFtZXMgPSBbXCJDYXJyaWVyXCIsIFwiQmF0dGxlc2hpcFwiLCBcIkNydWlzZXJcIiwgXCJTdWJtYXJpbmVcIiwgXCJEZXN0cm95ZXJcIl07XHJcbiAgbGV0IGlzVHVybiA9IGZhbHNlO1xyXG4gIGZvciAoY29uc3QgbmFtZSBvZiBuYW1lcykge1xyXG4gICAgc2hpcHMucHVzaChzaGlwRmFjdG9yeShuYW1lKSk7XHJcbiAgfVxyXG4gIGNvbnN0IGF0dGFjayA9IChjb29yZGluYXRlLCBlbmVteSkgPT4ge1xyXG4gICAgaWYgKCFzaG90c0ZpcmVkLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGUpKSkge1xyXG4gICAgICBlbmVteS5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpO1xyXG4gICAgICBzaG90c0ZpcmVkLnB1c2goSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZSkpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xyXG4gICAgbGV0IGhpdE9yTWlzcyA9IGJvYXJkLnJlY2VpdmUoY29vcmRpbmF0ZSk7XHJcbiAgICBkaXNwbGF5U2hvdChjb29yZGluYXRlLCBoaXRPck1pc3MsIG5hbWUpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgY29uc3QgcmFuZG9tQXR0YWNrID0gKGVuZW15KSA9PiB7XHJcbiAgICBsZXQgY29vcmRpbmF0ZSA9IFtnZXRSbmRJbnRlZ2VyKDAsIDEwKSwgZ2V0Um5kSW50ZWdlcigwLCAxMCldO1xyXG4gICAgd2hpbGUgKHNob3RzRmlyZWQuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZSkpKSB7XHJcbiAgICAgIGNvb3JkaW5hdGUgPSBbZ2V0Um5kSW50ZWdlcigwLCAxMCksIGdldFJuZEludGVnZXIoMCwgMTApXTtcclxuICAgIH1cclxuICAgIGxldCByZXN1bHQgPSBlbmVteS5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpO1xyXG4gICAgc2hvdHNGaXJlZC5wdXNoKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGUpKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxuICBmdW5jdGlvbiBnZXRSbmRJbnRlZ2VyKG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xyXG4gIH1cclxuICBjb25zdCByYW5kb21pemVTaGlwcyA9ICgpID0+IHtcclxuICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xyXG4gICAgICBsZXQgbnVtYmVyID0gZ2V0Um5kSW50ZWdlcigxLCAzKTtcclxuICAgICAgbGV0IGF4aXMgPSBudW1iZXIgPT09IDEgPyBcInlcIiA6IFwieFwiO1xyXG4gICAgICBsZXQgYWRkID0gYm9hcmQuaW5zZXJ0KHNoaXAsIHJhbmRvbUNvb3JkaW5hdGUoKSwgYXhpcyk7XHJcbiAgICAgIHdoaWxlICghYWRkKSB7XHJcbiAgICAgICAgYWRkID0gYm9hcmQuaW5zZXJ0KHNoaXAsIHJhbmRvbUNvb3JkaW5hdGUoKSwgYXhpcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJhbmRvbUNvb3JkaW5hdGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gW2dldFJuZEludGVnZXIoMCwgMTApLCBnZXRSbmRJbnRlZ2VyKDAsIDEwKV07XHJcbiAgfTtcclxuICBjb25zdCBzaG93ID0gKCkgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgIGxldCBjZWxsbmFtZSA9IGBbZGF0YS1yb3c9XCIke2l9XCJdW2RhdGEtY29sdW1uPVwiJHtqfVwiXVtkYXRhPVwicGxheWVyXCJdYDtcclxuICAgICAgICBpZiAoYm9hcmQuYm9hcmRbaV1bal0gIT09IFwiZW1wdHlcIikge1xyXG4gICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2VsbG5hbWUpO1xyXG4gICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJibHVlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcE5hbWUsIGNvb3JkaW5hdGUsIGF4aXMpID0+IHtcclxuICAgIGxldCBzZWxlY3RlZDtcclxuICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xyXG4gICAgICBpZiAoc2hpcC5uYW1lID09PSBzaGlwTmFtZSkge1xyXG4gICAgICAgIHNlbGVjdGVkID0gc2hpcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGJvYXJkLmJvYXJkLmluc2VydChzZWxlY3RlZCwgY29vcmRpbmF0ZSwgYXhpcykpIHtcclxuICAgICAgbGV0IGluZGV4ID0gc2hpcHMuaW5kZXhPZihzZWxlY3RlZCk7XHJcbiAgICAgIHNoaXBzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcbiAgcmV0dXJuIHtcclxuICAgIGlzVHVybixcclxuICAgIG5hbWUsXHJcbiAgICBhdHRhY2ssXHJcbiAgICBib2FyZCxcclxuICAgIHJlY2VpdmVBdHRhY2ssXHJcbiAgICByYW5kb21BdHRhY2ssXHJcbiAgICByYW5kb21pemVTaGlwcyxcclxuICAgIHNob3csXHJcbiAgICBwbGFjZVNoaXAsXHJcbiAgfTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHNoaXBGYWN0b3J5ID0gKG5hbWUpID0+IHtcclxuICBsZXQgaGl0cyA9IDA7XHJcbiAgbGV0IHNoaXBzID0ge1xyXG4gICAgQ2FycmllcjogNSxcclxuICAgIEJhdHRsZXNoaXA6IDQsXHJcbiAgICBDcnVpc2VyOiAzLFxyXG4gICAgU3VibWFyaW5lOiAzLFxyXG4gICAgRGVzdHJveWVyOiAyLFxyXG4gIH07XHJcbiAgaWYgKCFzaGlwcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xyXG4gICAgcmV0dXJuIFwiRXJyb3IuIFRoYXQgc2hpcCBkb2VzbnQgZXhpc3QuXCI7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBzaXplOiBzaGlwc1tuYW1lXSxcclxuICAgIG5hbWU6IG5hbWUsXHJcbiAgICBpc1N1bms6IGZhbHNlLFxyXG4gICAgaGl0cyxcclxuICAgIGhpdCgpIHtcclxuICAgICAgdGhpcy5oaXRzKys7XHJcbiAgICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMuc2l6ZSkge1xyXG4gICAgICAgIHRoaXMuaXNTdW5rID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgY3JlYXRlRGlzcGxheSwgY2xlYXJEaXNwbGF5IH0gZnJvbSBcIi4vZG9tU3R1ZmYuanNcIjtcclxuaW1wb3J0IHsgZ2V0Q29vcmRpbmF0ZXMsIG1vdmVMaXN0ZW5lciB9IGZyb20gXCIuL2V2ZW50LmpzXCI7XHJcbmltcG9ydCB7IHBsYXllckZhY3RvcnkgfSBmcm9tIFwiLi9mYWN0b3JpZXMvcGxheWVyLmpzXCI7XHJcbmltcG9ydCB7IHNoaXBGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yaWVzL3NoaXAuanNcIjtcclxuY3JlYXRlRGlzcGxheSgpO1xyXG5mdW5jdGlvbiBnYW1lKCkge1xyXG4gIGxldCBjb21wdXRlclBsYXllciA9IHBsYXllckZhY3RvcnkoXCJwY1wiKTtcclxuICBsZXQgdXNlclBsYXllciA9IHBsYXllckZhY3RvcnkoXCJwbGF5ZXJcIik7XHJcbiAgY29uc3QgcmFuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYW5kb21cIik7XHJcbiAgY29uc3Qgc3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0XCIpO1xyXG4gIGNvbnN0IHBsYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGFjZVwiKTtcclxuICBjb21wdXRlclBsYXllci5yYW5kb21pemVTaGlwcygpO1xyXG4gIHJhbmRvbS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgXCJjbGlja1wiLFxyXG4gICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgdXNlclBsYXllci5yYW5kb21pemVTaGlwcygpO1xyXG4gICAgICB1c2VyUGxheWVyLmlzVHVybiA9IHRydWU7XHJcbiAgICAgIHVzZXJQbGF5ZXIuc2hvdygpO1xyXG4gICAgfSxcclxuICAgIHsgb25jZTogdHJ1ZSB9XHJcbiAgKTtcclxuICBzdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAodXNlclBsYXllci5pc1R1cm4pIHtcclxuICAgICAgbW92ZUxpc3RlbmVyKHVzZXJQbGF5ZXIsIGNvbXB1dGVyUGxheWVyKTtcclxuICAgIH1cclxuICB9KTtcclxuICAvLyBwbGFjZS5hZGRFdmVudExpc3RlbmVyKFxyXG4gIC8vICAgXCJjbGlja1wiLFxyXG4gIC8vICAgZnVuY3Rpb24gKGUpIHtcclxuICAvLyAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAvLyAgICAgZ2V0Q29vcmRpbmF0ZXModXNlclBsYXllcik7XHJcbiAgLy8gICAgIHVzZXJQbGF5ZXIuaXNUdXJuID0gdHJ1ZTtcclxuICAvLyAgICAgdXNlclBsYXllci5zaG93KCk7XHJcbiAgLy8gICB9LFxyXG4gIC8vICAgeyBvbmNlOiB0cnVlIH1cclxuICAvLyApO1xyXG59XHJcbmdhbWUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9