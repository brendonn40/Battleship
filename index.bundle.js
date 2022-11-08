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
  return {
    isTurn,
    name,
    attack,
    board,
    receiveAttack,
    randomAttack,
    randomizeShips,
    show,
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
}
game();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tU3R1ZmYuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ldmVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG46cm9vdCB7XFxyXFxuICAtLXNpemU6IDEuNWVtO1xcclxcblxcclxcbn1cXHJcXG4uaGVhZGVye1xcclxcbiAgYmFja2dyb3VuZDogYmx1ZTtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmJvYXJkIHtcXHJcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQgdGgge1xcclxcbiAgcGFkZGluZzogLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIHRoK3RoIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAuMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQgdGg6Zmlyc3QtY2hpbGQsXFxyXFxuLmJvYXJkIHRkOmxhc3QtY2hpbGQge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgLjAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIHRyOmxhc3QtY2hpbGQgdGQge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQgdGg6ZW1wdHkge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQgdGQge1xcclxcbiAgd2lkdGg6dmFyKC0tc2l6ZSk7XFxyXFxuICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcclxcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCAubGlnaHQge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbn1cXHJcXG4ubGlnaHQ6aG92ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYWFhO1xcclxcbn1cXHJcXG4uYm9hcmQgLmRhcmsge1xcclxcbiAgYmFja2dyb3VuZDogI2FhYTtcXHJcXG59XFxyXFxuaW1ne1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcbiNjb250YWluZXJ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvbGRsYWNlO1xcclxcblxcclxcbn1cXHJcXG4jcGxheWVyLCNjb21wdXRlcntcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uYnRuLXlvdXItZmxlZXR7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGY7XFxyXFxuICBib3JkZXItY29sb3I6ICNkNDNmM2E7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcbi5idG4tb3Bwb25lbnR7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6Z3JleTtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2VlYTIzNjtcXHJcXG59XFxyXFxuLmJ0bi1vcHBvbmVudCwuYnRuLXlvdXItZmxlZXR7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAtbXMtdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxyXFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcblxcclxcbn1cXHJcXG4uc2hpcHN7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuLnNoaXB7XFxyXFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG5idXR0b257XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjc7XFxyXFxuICBib3JkZXItY29sb3I6ICMyZTZkYTQ7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcclxcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBwYWRkaW5nOiA2cHggMTJweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHJcXG59XFxyXFxudWx7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG51bCA+IGxpe1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTs7QUFFZjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGFBQWE7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7O0VBRUUsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCOztBQUUzQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjs7QUFFbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYO0FBQ0E7RUFDRSxpQkFBaUI7O0FBRW5COztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCOztBQUVuQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpyb290IHtcXHJcXG4gIC0tc2l6ZTogMS41ZW07XFxyXFxuXFxyXFxufVxcclxcbi5oZWFkZXJ7XFxyXFxuICBiYWNrZ3JvdW5kOiBibHVlO1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uYm9hcmQge1xcclxcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxyXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB0aCB7XFxyXFxuICBwYWRkaW5nOiAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQgdGgrdGgge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIC4wMDA7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB0aDpmaXJzdC1jaGlsZCxcXHJcXG4uYm9hcmQgdGQ6bGFzdC1jaGlsZCB7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAuMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQgdHI6bGFzdC1jaGlsZCB0ZCB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB0aDplbXB0eSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB0ZCB7XFxyXFxuICB3aWR0aDp2YXIoLS1zaXplKTtcXHJcXG4gIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxyXFxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBsaW5lLWhlaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIC5saWdodCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxufVxcclxcbi5saWdodDpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQ6ICNhYWE7XFxyXFxufVxcclxcbi5ib2FyZCAuZGFyayB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYWFhO1xcclxcbn1cXHJcXG5pbWd7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuI2NvbnRhaW5lcntcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5ib2R5e1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IG9sZGxhY2U7XFxyXFxuXFxyXFxufVxcclxcbiNwbGF5ZXIsI2NvbXB1dGVye1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5idG4teW91ci1mbGVldHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZjtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2Q0M2YzYTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuLmJ0bi1vcHBvbmVudHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjpncmV5O1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZWVhMjM2O1xcclxcbn1cXHJcXG4uYnRuLW9wcG9uZW50LC5idG4teW91ci1mbGVldHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIC1tcy10b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXHJcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgcGFkZGluZzogNnB4IDEycHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFxyXFxufVxcclxcbi5zaGlwc3tcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG4uc2hpcHtcXHJcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbmJ1dHRvbntcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcXHJcXG4gIGJvcmRlci1jb2xvcjogIzJlNmRhNDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAtbXMtdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxyXFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcblxcclxcbn1cXHJcXG51bHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbnVsID4gbGl7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBoaXQgZnJvbSBcIi4vaW1nL2hpdC5zdmdcIjtcclxuaW1wb3J0IG1pc3MgZnJvbSBcIi4vaW1nL21pc3Muc3ZnXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCb2FyZERpc3BsYXkocGFyZW50KSB7XHJcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgY29uc3QgdGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgYm9hcmQuY2xhc3NMaXN0LmFkZChcImJvYXJkXCIpO1xyXG4gIGxldCBsZXR0ZXJzID0gXCJhYmNkZWZnaGlqXCI7XHJcbiAgY29uc3QgbGV0dGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gIGxldHRlclJvdy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIikpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGV0dGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgdGguaW5uZXJUZXh0ID0gbGV0dGVyc1tpXTtcclxuICAgIGxldHRlclJvdy5hcHBlbmRDaGlsZCh0aCk7XHJcbiAgfVxyXG4gIHRib2R5LmFwcGVuZENoaWxkKGxldHRlclJvdyk7XHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMTsgaSsrKSB7XHJcbiAgICBpZiAocGFyZW50LmlkID09PSBcImNvbXB1dGVyXCIpIHtcclxuICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlUm93KGksIHRydWUpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVJvdyhpKSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGJvYXJkLmFwcGVuZENoaWxkKHRib2R5KTtcclxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoYm9hcmQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSb3cobnVtYmVyLCBpc0NvbXB1dGVyID0gZmFsc2UpIHtcclxuICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gIGxldCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICB0aC5pbm5lclRleHQgPSBudW1iZXI7XHJcbiAgcm93LmFwcGVuZENoaWxkKHRoKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgIGxldCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHJcbiAgICB0ZC5jbGFzc0xpc3QuYWRkKFwibGlnaHRcIik7XHJcbiAgICB0ZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiLCBudW1iZXIgLSAxKTtcclxuICAgIHRkLnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uXCIsIGkpO1xyXG4gICAgaWYgKGlzQ29tcHV0ZXIpIHtcclxuICAgICAgdGQuc2V0QXR0cmlidXRlKFwiZGF0YVwiLCBcImNvbXB1dGVyXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGQuc2V0QXR0cmlidXRlKFwiZGF0YVwiLCBcInBsYXllclwiKTtcclxuICAgIH1cclxuICAgIHJvdy5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm93O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmxlZXQoKSB7XHJcbiAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYnV0dG9uLmlubmVyVGV4dCA9IFwiWU9VUiBGTEVFVFwiO1xyXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnRuLXlvdXItZmxlZXRcIik7XHJcbiAgcmV0dXJuIGJ1dHRvbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9wcG9uZW50KCkge1xyXG4gIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJ1dHRvbi5pbm5lclRleHQgPSBcIk9QUE9ORU5UXCI7XHJcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG4tb3Bwb25lbnRcIik7XHJcbiAgcmV0dXJuIGJ1dHRvbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRCb2FyZChjdXJyZW50UG9zKSB7XHJcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZXNzLWJvYXJkXCIpO1xyXG4gIGJvYXJkLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgY3JlYXRlQm9hcmREaXNwbGF5KCk7XHJcbiAgcHV0S25pZ2h0T25DZWxsKC4uLmN1cnJlbnRQb3MpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVNob3QoY29vcmRpbmF0ZSwgaGl0T3JNaXNzLCBuYW1lKSB7XHJcbiAgbGV0IHggPSBjb29yZGluYXRlWzBdO1xyXG4gIGxldCB5ID0gY29vcmRpbmF0ZVsxXTtcclxuICBjb25zdCBpbWdIaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNvbnN0IGltZ01pc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGltZ0hpdC5zcmMgPSBoaXQ7XHJcbiAgaW1nTWlzcy5zcmMgPSBtaXNzO1xyXG4gIGxldCBjZWxsbmFtZTtcclxuICBpZiAobmFtZSA9PT0gXCJwY1wiKSB7XHJcbiAgICBjZWxsbmFtZSA9IGBbZGF0YS1yb3c9XCIke3h9XCJdW2RhdGEtY29sdW1uPVwiJHt5fVwiXVtkYXRhPVwiY29tcHV0ZXJcIl1gO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjZWxsbmFtZSA9IGBbZGF0YS1yb3c9XCIke3h9XCJdW2RhdGEtY29sdW1uPVwiJHt5fVwiXVtkYXRhPVwicGxheWVyXCJdYDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNlbGxuYW1lKTtcclxuICBjZWxsLmFwcGVuZENoaWxkKGhpdE9yTWlzcyA/IGltZ0hpdCA6IGltZ01pc3MpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGlzcGxheSgpIHtcclxuICBjb25zdCBwbGF5ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllclwiKTtcclxuICBjb25zdCBjb21wdXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcHV0ZXJcIik7XHJcbiAgcGxheWVyLmFwcGVuZENoaWxkKGNyZWF0ZUZsZWV0KCkpO1xyXG4gIGNvbXB1dGVyLmFwcGVuZENoaWxkKGNyZWF0ZU9wcG9uZW50KCkpO1xyXG4gIGNyZWF0ZUJvYXJkRGlzcGxheShwbGF5ZXIpO1xyXG4gIGNyZWF0ZUJvYXJkRGlzcGxheShjb21wdXRlcik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHB1dFNoaXBPbkRpc3BsYXkoY29vcmRpbmF0ZSwgc2hpcCwgYXhpcykge1xyXG4gIGxldCB4ID0gY29vcmRpbmF0ZVswXTtcclxuICBsZXQgeSA9IGNvb3JkaW5hdGVbMV07XHJcbiAgaWYgKGF4aXMgPT09IFwieVwiKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2l6ZTsgaSsrKSB7XHJcbiAgICAgIGxldCBjZWxsbmFtZSA9IGBbZGF0YS1yb3c9XCIke3ggKyBpfVwiXVtkYXRhLWNvbHVtbj1cIiR7eX1cIl1bZGF0YT1cInBsYXllclwiXWA7XHJcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNlbGxuYW1lKTtcclxuICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsdWVcIjtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKGF4aXMgPT09IFwieFwiKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2l6ZTsgaSsrKSB7XHJcbiAgICAgIGxldCBjZWxsbmFtZSA9IGBbZGF0YS1yb3c9XCIke3h9XCJdW2RhdGEtY29sdW1uPVwiJHt5ICsgaX1cIl1bZGF0YT1cInBsYXllclwiXWA7XHJcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNlbGxuYW1lKTtcclxuICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsdWVcIjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRGlzcGxheSgpIHtcclxuICBjbGVhcihcInBsYXllclwiKTtcclxuICBjbGVhcihcImNvbXB1dGVyXCIpO1xyXG59XHJcbmZ1bmN0aW9uIGNsZWFyKGVsZW1lbnROYW1lKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnROYW1lKTtcclxuICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XHJcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBtb3ZlTGlzdGVuZXIocGxheWVyLCBlbmVteSkge1xyXG4gIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhPSdjb21wdXRlciddXCIpO1xyXG4gIGxldCBhcnIgPSBBcnJheS5mcm9tKGNlbGxzKTtcclxuICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgbGV0IHdpbm5lcjtcclxuICAgICAgaWYgKHBsYXllci5pc1R1cm4pIHtcclxuICAgICAgICBsZXQgdmFsaWQgPSBwbGF5ZXIuYXR0YWNrKFxyXG4gICAgICAgICAgW1xyXG4gICAgICAgICAgICBwYXJzZUludChpdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtcm93XCIpKSxcclxuICAgICAgICAgICAgcGFyc2VJbnQoaXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtblwiKSksXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgZW5lbXlcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmICh2YWxpZCkge1xyXG4gICAgICAgICAgcGxheWVyLmlzVHVybiA9IGZhbHNlO1xyXG4gICAgICAgICAgZW5lbXkuaXNUdXJuID0gdHJ1ZTtcclxuICAgICAgICAgIHdpbm5lciA9IGNoZWNrRm9yRW5kKHBsYXllciwgZW5lbXkpO1xyXG4gICAgICAgICAgaWYgKHdpbm5lciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBhbGVydChgJHt3aW5uZXIubmFtZX0gd29uISFgKTtcclxuICAgICAgICAgICAgcGxheWVyLmlzVHVybiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBlbmVteS5pc1R1cm4gPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGVuZW15LmlzVHVybikge1xyXG4gICAgICAgIGVuZW15LnJhbmRvbUF0dGFjayhwbGF5ZXIpO1xyXG4gICAgICAgIHBsYXllci5pc1R1cm4gPSB0cnVlO1xyXG4gICAgICAgIGVuZW15LmlzVHVybiA9IGZhbHNlO1xyXG4gICAgICAgIHdpbm5lciA9IGNoZWNrRm9yRW5kKHBsYXllciwgZW5lbXkpO1xyXG4gICAgICAgIGlmICh3aW5uZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgIGFsZXJ0KGAke3dpbm5lci5uYW1lfSB3b24hIWApO1xyXG4gICAgICAgICAgcGxheWVyLmlzVHVybiA9IGZhbHNlO1xyXG4gICAgICAgICAgZW5lbXkuaXNUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tGb3JFbmQocGxheWVyLCBjb21wdXRlcikge1xyXG4gIGxldCB3aW5uZXIgPSBudWxsO1xyXG4gIGlmIChwbGF5ZXIuYm9hcmQuaXNHYW1lT3ZlcigpKSB7XHJcbiAgICB3aW5uZXIgPSBjb21wdXRlcjtcclxuICAgIHJldHVybiB3aW5uZXI7XHJcbiAgfVxyXG4gIGlmIChjb21wdXRlci5ib2FyZC5pc0dhbWVPdmVyKCkpIHtcclxuICAgIHdpbm5lciA9IHBsYXllcjtcclxuICAgIHJldHVybiB3aW5uZXI7XHJcbiAgfVxyXG4gIHJldHVybiB3aW5uZXI7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGdhbWVib2FyZEZhY3RvcnkgPSAoKSA9PiB7XHJcbiAgY29uc3QgYm9hcmRfc2l6ZSA9IDEwO1xyXG4gIGxldCBib2FyZCA9IFtdO1xyXG4gIGxldCBzaGlwcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmRfc2l6ZTsgaSsrKSB7XHJcbiAgICBsZXQgcm93ID0gW107XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkX3NpemU7IGorKykge1xyXG4gICAgICByb3cucHVzaChcImVtcHR5XCIpO1xyXG4gICAgfVxyXG4gICAgYm9hcmQucHVzaChyb3cpO1xyXG4gIH1cclxuICBjb25zdCBpbnNlcnQgPSAoc2hpcCwgY29vcmRpbmF0ZSwgYXhpcykgPT4ge1xyXG4gICAgbGV0IHggPSBjb29yZGluYXRlWzBdO1xyXG4gICAgbGV0IHkgPSBjb29yZGluYXRlWzFdO1xyXG4gICAgaWYgKHNoaXBGaXRzKHNoaXAsIGNvb3JkaW5hdGUsIGF4aXMpKSB7XHJcbiAgICAgIGlmIChheGlzID09PSBcInlcIikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpKyspIHtcclxuICAgICAgICAgIGJvYXJkW3ggKyBpXVt5XSA9IHNoaXAubmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNpemU7IGkrKykge1xyXG4gICAgICAgICAgYm9hcmRbeF1beSArIGldID0gc2hpcC5uYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzaGlwcy5wdXNoKHNoaXApO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJlY2VpdmUgPSAoY29vcmRpbmF0ZSkgPT4ge1xyXG4gICAgLy8gY29vcmRpbmF0ZSA9IEpTT04ucGFyc2UoY29vcmRpbmF0ZSk7XHJcbiAgICBsZXQgeCA9IGNvb3JkaW5hdGVbMF07XHJcbiAgICBsZXQgeSA9IGNvb3JkaW5hdGVbMV07XHJcbiAgICBzd2l0Y2ggKGJvYXJkW3hdW3ldKSB7XHJcbiAgICAgIGNhc2UgXCJtaXNzXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiRXJyb3IuIFRoYXQgc3BvdCBoYXMgYmVlbiBhbHJlYWR5IGF0dGFja2VkXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJlbXB0eVwiOlxyXG4gICAgICAgIGJvYXJkW3hdW3ldID0gXCJtaXNzXCI7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGxldCBoaXQgPSBib2FyZFt4XVt5XTtcclxuICAgICAgICBkZWNyZWFzZShoaXQpO1xyXG4gICAgICAgIGJvYXJkW3hdW3ldID0gXCJoaXRcIjtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIC8vdG9kbyBjaGFuZ2Ugc3RhdHVzIG9uIGJvYXJkIGFuZCByZXR1cm4gdGhlIHJlc3VsdCBoaXQgb3IgbWlzc1xyXG4gIH07XHJcbiAgY29uc3QgaXNHYW1lT3ZlciA9ICgpID0+IHtcclxuICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xyXG4gICAgICBpZiAoc2hpcC5pc1N1bmspIHtcclxuICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb3VudGVyID09PSBzaGlwcy5sZW5ndGg7XHJcbiAgICAvLyBjaGVjayBpZiBhbGwgc2hpcHMgaW5zaWRlIHRoaXMgYm9hcmQgaXMgc3VuaywgaWYgc28gcmV0dXJuIHRydWUgZWxzZSBmYWxzZVxyXG4gIH07XHJcbiAgY29uc3Qgc2hpcEZpdHMgPSAoc2hpcCwgY29vcmRpbmF0ZSwgYXhpcykgPT4ge1xyXG4gICAgbGV0IHggPSBjb29yZGluYXRlWzBdO1xyXG4gICAgbGV0IHkgPSBjb29yZGluYXRlWzFdO1xyXG4gICAgaWYgKGJvYXJkW3hdW3ldICE9PSBcImVtcHR5XCIgfHwgKGF4aXMgIT09IFwieFwiICYmIGF4aXMgIT09IFwieVwiKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwLnNpemU7IGkrKykge1xyXG4gICAgICAgIGlmICh5ICsgaSA+IDkpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJvYXJkW3hdW3kgKyBpXSAhPT0gXCJlbXB0eVwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXAuc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHggKyBpID4gOSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYm9hcmRbeCArIGldW3ldICE9PSBcImVtcHR5XCIpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcbiAgY29uc3QgZGVjcmVhc2UgPSAoc2hpcE5hbWUpID0+IHtcclxuICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xyXG4gICAgICBpZiAoc2hpcC5uYW1lID09PSBzaGlwTmFtZSkge1xyXG4gICAgICAgIHNoaXAuaGl0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiB7IGluc2VydCwgcmVjZWl2ZSwgaXNHYW1lT3ZlciwgYm9hcmQgfTtcclxufTtcclxuIiwiaW1wb3J0IHsgZGlzcGxheVNob3QsIHB1dFNoaXBPbkRpc3BsYXkgfSBmcm9tIFwiLi4vZG9tU3R1ZmYuanNcIjtcclxuaW1wb3J0IHsgZ2FtZWJvYXJkRmFjdG9yeSB9IGZyb20gXCIuL2dhbWVib2FyZC5qc1wiO1xyXG5pbXBvcnQgeyBzaGlwRmFjdG9yeSB9IGZyb20gXCIuL3NoaXAuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwbGF5ZXJGYWN0b3J5ID0gKG5hbWUpID0+IHtcclxuICBsZXQgYm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KCk7XHJcbiAgbGV0IHNob3RzRmlyZWQgPSBbXTtcclxuICBsZXQgc2hpcHMgPSBbXTtcclxuICBsZXQgbmFtZXMgPSBbXCJDYXJyaWVyXCIsIFwiQmF0dGxlc2hpcFwiLCBcIkNydWlzZXJcIiwgXCJTdWJtYXJpbmVcIiwgXCJEZXN0cm95ZXJcIl07XHJcbiAgbGV0IGlzVHVybiA9IGZhbHNlO1xyXG4gIGZvciAoY29uc3QgbmFtZSBvZiBuYW1lcykge1xyXG4gICAgc2hpcHMucHVzaChzaGlwRmFjdG9yeShuYW1lKSk7XHJcbiAgfVxyXG4gIGNvbnN0IGF0dGFjayA9IChjb29yZGluYXRlLCBlbmVteSkgPT4ge1xyXG4gICAgaWYgKCFzaG90c0ZpcmVkLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGUpKSkge1xyXG4gICAgICBlbmVteS5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpO1xyXG4gICAgICBzaG90c0ZpcmVkLnB1c2goSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZSkpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xyXG4gICAgbGV0IGhpdE9yTWlzcyA9IGJvYXJkLnJlY2VpdmUoY29vcmRpbmF0ZSk7XHJcbiAgICBkaXNwbGF5U2hvdChjb29yZGluYXRlLCBoaXRPck1pc3MsIG5hbWUpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgY29uc3QgcmFuZG9tQXR0YWNrID0gKGVuZW15KSA9PiB7XHJcbiAgICBsZXQgY29vcmRpbmF0ZSA9IFtnZXRSbmRJbnRlZ2VyKDAsIDEwKSwgZ2V0Um5kSW50ZWdlcigwLCAxMCldO1xyXG4gICAgd2hpbGUgKHNob3RzRmlyZWQuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZSkpKSB7XHJcbiAgICAgIGNvb3JkaW5hdGUgPSBbZ2V0Um5kSW50ZWdlcigwLCAxMCksIGdldFJuZEludGVnZXIoMCwgMTApXTtcclxuICAgIH1cclxuICAgIGxldCByZXN1bHQgPSBlbmVteS5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpO1xyXG4gICAgc2hvdHNGaXJlZC5wdXNoKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGUpKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxuICBmdW5jdGlvbiBnZXRSbmRJbnRlZ2VyKG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xyXG4gIH1cclxuICBjb25zdCByYW5kb21pemVTaGlwcyA9ICgpID0+IHtcclxuICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xyXG4gICAgICBsZXQgbnVtYmVyID0gZ2V0Um5kSW50ZWdlcigxLCAzKTtcclxuICAgICAgbGV0IGF4aXMgPSBudW1iZXIgPT09IDEgPyBcInlcIiA6IFwieFwiO1xyXG4gICAgICBsZXQgYWRkID0gYm9hcmQuaW5zZXJ0KHNoaXAsIHJhbmRvbUNvb3JkaW5hdGUoKSwgYXhpcyk7XHJcbiAgICAgIHdoaWxlICghYWRkKSB7XHJcbiAgICAgICAgYWRkID0gYm9hcmQuaW5zZXJ0KHNoaXAsIHJhbmRvbUNvb3JkaW5hdGUoKSwgYXhpcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJhbmRvbUNvb3JkaW5hdGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gW2dldFJuZEludGVnZXIoMCwgMTApLCBnZXRSbmRJbnRlZ2VyKDAsIDEwKV07XHJcbiAgfTtcclxuICBjb25zdCBzaG93ID0gKCkgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgIGxldCBjZWxsbmFtZSA9IGBbZGF0YS1yb3c9XCIke2l9XCJdW2RhdGEtY29sdW1uPVwiJHtqfVwiXVtkYXRhPVwicGxheWVyXCJdYDtcclxuICAgICAgICBpZiAoYm9hcmQuYm9hcmRbaV1bal0gIT09IFwiZW1wdHlcIikge1xyXG4gICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2VsbG5hbWUpO1xyXG4gICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJibHVlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4ge1xyXG4gICAgaXNUdXJuLFxyXG4gICAgbmFtZSxcclxuICAgIGF0dGFjayxcclxuICAgIGJvYXJkLFxyXG4gICAgcmVjZWl2ZUF0dGFjayxcclxuICAgIHJhbmRvbUF0dGFjayxcclxuICAgIHJhbmRvbWl6ZVNoaXBzLFxyXG4gICAgc2hvdyxcclxuICB9O1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3Qgc2hpcEZhY3RvcnkgPSAobmFtZSkgPT4ge1xyXG4gIGxldCBoaXRzID0gMDtcclxuICBsZXQgc2hpcHMgPSB7XHJcbiAgICBDYXJyaWVyOiA1LFxyXG4gICAgQmF0dGxlc2hpcDogNCxcclxuICAgIENydWlzZXI6IDMsXHJcbiAgICBTdWJtYXJpbmU6IDMsXHJcbiAgICBEZXN0cm95ZXI6IDIsXHJcbiAgfTtcclxuICBpZiAoIXNoaXBzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XHJcbiAgICByZXR1cm4gXCJFcnJvci4gVGhhdCBzaGlwIGRvZXNudCBleGlzdC5cIjtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHNpemU6IHNoaXBzW25hbWVdLFxyXG4gICAgbmFtZTogbmFtZSxcclxuICAgIGlzU3VuazogZmFsc2UsXHJcbiAgICBoaXRzLFxyXG4gICAgaGl0KCkge1xyXG4gICAgICB0aGlzLmhpdHMrKztcclxuICAgICAgaWYgKHRoaXMuaGl0cyA9PT0gdGhpcy5zaXplKSB7XHJcbiAgICAgICAgdGhpcy5pc1N1bmsgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVEaXNwbGF5LCBjbGVhckRpc3BsYXkgfSBmcm9tIFwiLi9kb21TdHVmZi5qc1wiO1xyXG5pbXBvcnQgeyBtb3ZlTGlzdGVuZXIgfSBmcm9tIFwiLi9ldmVudC5qc1wiO1xyXG5pbXBvcnQgeyBwbGF5ZXJGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yaWVzL3BsYXllci5qc1wiO1xyXG5pbXBvcnQgeyBzaGlwRmFjdG9yeSB9IGZyb20gXCIuL2ZhY3Rvcmllcy9zaGlwLmpzXCI7XHJcbmNyZWF0ZURpc3BsYXkoKTtcclxuZnVuY3Rpb24gZ2FtZSgpIHtcclxuICBsZXQgY29tcHV0ZXJQbGF5ZXIgPSBwbGF5ZXJGYWN0b3J5KFwicGNcIik7XHJcbiAgbGV0IHVzZXJQbGF5ZXIgPSBwbGF5ZXJGYWN0b3J5KFwicGxheWVyXCIpO1xyXG4gIGNvbnN0IHJhbmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFuZG9tXCIpO1xyXG4gIGNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFwiKTtcclxuICBjb21wdXRlclBsYXllci5yYW5kb21pemVTaGlwcygpO1xyXG4gIHJhbmRvbS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgXCJjbGlja1wiLFxyXG4gICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgdXNlclBsYXllci5yYW5kb21pemVTaGlwcygpO1xyXG4gICAgICB1c2VyUGxheWVyLmlzVHVybiA9IHRydWU7XHJcbiAgICAgIHVzZXJQbGF5ZXIuc2hvdygpO1xyXG4gICAgfSxcclxuICAgIHsgb25jZTogdHJ1ZSB9XHJcbiAgKTtcclxuICBzdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAodXNlclBsYXllci5pc1R1cm4pIHtcclxuICAgICAgbW92ZUxpc3RlbmVyKHVzZXJQbGF5ZXIsIGNvbXB1dGVyUGxheWVyKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5nYW1lKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==