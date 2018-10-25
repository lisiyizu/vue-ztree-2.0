(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-ztree-2.0"] = factory(require("vue"));
	else
		root["vue-ztree-2.0"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "70b1");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0038":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("f5d4");
var global = __webpack_require__("d3c7");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("4017") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "0435":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d3c7");
var core = __webpack_require__("f5d4");
var hide = __webpack_require__("defd");
var redefine = __webpack_require__("41aa");
var ctx = __webpack_require__("c11e");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "07c6":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("0038")('wks');
var uid = __webpack_require__("44cb");
var Symbol = __webpack_require__("d3c7").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "0a29":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("0435");
var $indexOf = __webpack_require__("8fa9")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__("2583")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),

/***/ "103e":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "1723":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("d3c7").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "1a6d":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("566b");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "1e97":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("2979");
var step = __webpack_require__("1f40");
var Iterators = __webpack_require__("821b");
var toIObject = __webpack_require__("c56e");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("bdee")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "1f40":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "24ae":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("103e");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "2583":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("5809");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "2601":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("ed1e");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "2979":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("07c6")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("defd")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "2e3d":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("f1f5");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "2ee2":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f1f5");
var isArray = __webpack_require__("1a6d");
var SPECIES = __webpack_require__("07c6")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "3387":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("2ee2");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "39b3":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("9bce");
var anObject = __webpack_require__("7d66");
var getKeys = __webpack_require__("c605");

module.exports = __webpack_require__("b4b4") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "39ec":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("588f");
var toIObject = __webpack_require__("c56e");
var arrayIndexOf = __webpack_require__("8fa9")(false);
var IE_PROTO = __webpack_require__("cb9e")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "3aa7":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("588f");
var toObject = __webpack_require__("2601");
var IE_PROTO = __webpack_require__("cb9e")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "4017":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "4029":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("a782");
var descriptor = __webpack_require__("efc2");
var setToStringTag = __webpack_require__("8fcb");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("defd")(IteratorPrototype, __webpack_require__("07c6")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "41aa":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d3c7");
var hide = __webpack_require__("defd");
var has = __webpack_require__("588f");
var SRC = __webpack_require__("44cb")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("f5d4").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "422d":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f1f5");
var document = __webpack_require__("d3c7").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "43b1":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("103e");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "44cb":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "4a44":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("0435");
var $forEach = __webpack_require__("dcb5")(0);
var STRICT = __webpack_require__("2583")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "566b":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "5809":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "588f":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6bc0":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "70b1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("6bc0");

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0595ba96-vue-loader-template"}!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./components/vue-ztree.vue?vue&type=template&id=4daec9e1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.treeDataSource.length>0)?_c('div',{staticClass:"ztree_content_wrap"},[_c('div',{staticClass:"zTreeDemoBackground left"},[_c('ul',{staticClass:"ztree"},_vm._l((_vm.treeDataSource),function(m,i){return _c('ztree-item',{key:i,attrs:{"model":m,"num":i,"root":"0","nodes":_vm.treeDataSource.length,"ischeck":_vm.isCheck,"callback":_vm.func,"expandfunc":_vm.expand,"cxtmenufunc":_vm.contextmenu,"trees":_vm.treeDataSource},on:{"update:model":function($event){m=$event},"update:num":function($event){i=$event},"update:nodes":function($event){_vm.$set(_vm.treeDataSource, "length", $event)},"update:trees":function($event){_vm.treeDataSource=$event}}})}))])]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/vue-ztree.vue?vue&type=template&id=4daec9e1&

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__("0a29");

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.array.filter.js
var es6_array_filter = __webpack_require__("ece2");

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("e886");

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ee38");

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__("4a44");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./components/vue-ztree.vue?vue&type=script&lang=js&





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vue_ztreevue_type_script_lang_js_ = ({
  data: function data() {
    return {
      treeDataSource: []
    };
  },
  props: {
    // 树数据
    list: {
      type: Array,
      twoWay: true
    },
    // 点击节点回调
    func: {
      type: Function,
      default: null
    },
    // 点击展开回调
    expand: {
      type: Function,
      default: null
    },
    // 右击事件
    contextmenu: {
      type: Function,
      default: function _default() {
        console.log("defalt click contextmenu");
      }
    },
    // 是否展开
    isOpen: {
      type: Boolean,
      twoWay: true,
      default: false
    },
    // 是否选中
    isCheck: {
      type: Boolean,
      twoWay: true,
      default: false
    }
  },
  watch: {
    'list': {
      handler: function handler() {
        alert("哈哈");
        this.initTreeData();
      },
      deep: true
    }
  },
  methods: {
    initTreeData: function initTreeData() {
      var _this = this;

      var tempList = JSON.parse(JSON.stringify(this.list)); // 递归操作，增加删除一些属性。比如: 展开/收起

      var recurrenceFunc = function recurrenceFunc(data) {
        data.forEach(function (m) {
          if (!m.hasOwnProperty("clickNode")) {
            m.clickNode = m.hasOwnProperty("clickNode") ? m.clickNode : false;
          }

          if (!m.hasOwnProperty("ckbool")) {
            m.ckbool = m.hasOwnProperty("ckbool") ? m.ckbool : false;
          }

          if (!m.hasOwnProperty("isCheck")) {
            m.isCheck = m.hasOwnProperty("isCheck") ? m.isCheck : _this.isCheck;
          }

          m.children = m.children || [];
          m.hover = false;

          if (!m.hasOwnProperty("isFolder")) {
            m.isFolder = m.hasOwnProperty("open") ? m.open : _this.isOpen;
          }

          if (!m.hasOwnProperty("isExpand")) {
            m.isExpand = m.hasOwnProperty("open") ? m.open : _this.isOpen;
          }

          m.loadNode = 0;
          recurrenceFunc(m.children);
        });
      };

      recurrenceFunc(tempList);
      this.treeDataSource = tempList;
    }
  },
  components: {
    // 组件
    ztreeItem: {
      name: 'ztreeItem',
      data: function data() {
        return {
          parentNodeModel: null
        };
      },
      props: {
        model: {
          type: Object,
          twoWay: true
        },
        num: {
          type: Number,
          twoWay: true
        },
        nodes: {
          type: Number,
          twoWay: true,
          default: 0
        },
        trees: {
          type: Array,
          twoWay: true,
          default: []
        },
        root: {
          type: String,
          twoWay: true
        },
        callback: {
          type: Function
        },
        expandfunc: {
          type: Function
        },
        cxtmenufunc: {
          type: Function
        },
        ischeck: {
          type: Boolean,
          twoWay: true,
          default: false
        }
      },
      methods: {
        Func: function Func(m) {
          var _this2 = this;

          // 查找点击的子节点
          var recurFunc = function recurFunc(data, list) {
            data.forEach(function (i) {
              if (i.id == m.id) {
                i.clickNode = true;

                if (typeof _this2.callback == "function") {
                  _this2.callback.call(null, m, list, _this2.trees);
                }
              } else {
                i.clickNode = false;
              }

              if (i.children) {
                recurFunc(i.children, i);
              }
            });
          };

          recurFunc(this.trees, this.trees);
        },
        ckFunc: function ckFunc(m) {
          var _this3 = this;

          m.ckbool = !m.ckbool; // 查找复选框的所有子节点

          var recurFuncChild = function recurFuncChild(data) {
            data.forEach(function (i) {
              i.ckbool = m.ckbool;
              if (i.children) recurFuncChild(i.children);
            });
          };

          recurFuncChild(m.children); // 查找复选框的所有父节点

          var parentId = m.parentId;

          var recurFuncParent = function recurFuncParent(data, list) {
            data.forEach(function (i) {
              if (i.id == parentId && parentId > 0) {
                parentId = i.parentId; // 判断父亲节点的儿子节点选中个数

                var childrenCks = i.children.filter(function (child) {
                  return child.ckbool == true;
                }); // 如果大于0, 证明不能取消选中状态

                i.ckbool = childrenCks.length > 0; // 递归查找

                recurFuncParent(_this3.trees, i);
              } else if (i.id == m.id && i.parentId == 0) {
                i.ckbool = m.ckbool;
                isFindRootBool = true;
              } else {
                recurFuncParent(i.children, i);
              }
            });
          };

          recurFuncParent(this.trees, this.trees);
        },
        getParentNode: function getParentNode(m, cb) {
          var _this4 = this;

          // 查找点击的子节点
          var recurFunc = function recurFunc(data, list) {
            data.forEach(function (i) {
              if (i.id == m.id) _this4.parentNodeModel = list;

              if (i.children) {
                typeof cb == "function" && cb.call(i.children);
                recurFunc(i.children, i);
              }
            });
          };

          recurFunc(this.trees, this.trees);
        },
        open: function open(m) {
          //
          m.isExpand = !m.isExpand;

          if (typeof this.expandfunc == "function" && m.isExpand) {
            if (m.loadNode != 2) {
              //
              this.expandfunc.call(null, m);
            } else {
              m.isFolder = !m.isFolder;
            }
          } else {
            m.isFolder = !m.isFolder;
          }
        },
        enterFunc: function enterFunc(m) {
          m.hover = true;
          this.getParentNode(m, null);
        },
        leaveFunc: function leaveFunc(m) {
          m.hover = false;
        },
        // 新增节点
        addNode: function addNode(nodeModel) {
          console.log(this);

          if (nodeModel) {
            var _nid = +new Date();

            nodeModel.children.push({
              id: _nid,
              parentId: nodeModel.id,
              name: "动态节点哦～",
              path: "",
              clickNode: false,
              ckbool: false,
              isCheck: this.ischeck,
              isFolder: false,
              isExpand: false,
              hover: false,
              loadNode: 0,
              children: []
            });
            nodeModel.isFolder = true;
            console.log(JSON.parse(JSON.stringify(nodeModel.children)));
          } else {
            console.log("请先选中节点");
          }
        },
        // 删除节点
        delNode: function delNode(nodeModel) {
          if (nodeModel) {
            if (this.parentNodeModel.hasOwnProperty("children")) {
              this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(nodeModel), 1);
            } else if (this.parentNodeModel instanceof Array) {
              // 第一级根节点处理
              this.parentNodeModel.splice(this.parentNodeModel.indexOf(nodeModel), 1);
            }

            nodeModel = null;
          } else {
            console.log("请先选中节点");
          }
        },
        upNode: function upNode(nodeModel) {
          if (!nodeModel) console.log("请先选中节点");

          if (this.parentNodeModel.hasOwnProperty("children")) {
            var index = this.parentNodeModel.children.indexOf(nodeModel);

            if (index - 1 >= 0) {
              var model = this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(nodeModel), 1);
              this.parentNodeModel.children.splice(index - 1, 0, model[0]);
            }
          } else if (this.parentNodeModel instanceof Array) {
            // 第一级根节点处理
            var index = this.parentNodeModel.indexOf(nodeModel);

            if (index - 1 >= 0) {
              var model = this.parentNodeModel.splice(this.parentNodeModel.indexOf(nodeModel), 1);
              this.parentNodeModel.splice(index - 1, 0, model[0]);
            }
          }
        },
        downNode: function downNode(nodeModel) {
          if (!nodeModel) console.log("请先选中节点");

          if (this.parentNodeModel.hasOwnProperty("children")) {
            var index = this.parentNodeModel.children.indexOf(nodeModel);

            if (index + 1 <= this.parentNodeModel.children.length) {
              var model = this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(nodeModel), 1);
              this.parentNodeModel.children.splice(index + 1, 0, model[0]);
            }
          } else if (this.parentNodeModel instanceof Array) {
            // 第一级根节点处理
            var index = this.parentNodeModel.indexOf(nodeModel);

            if (index + 1 <= this.parentNodeModel.length) {
              var model = this.parentNodeModel.splice(this.parentNodeModel.indexOf(nodeModel), 1);
              this.parentNodeModel.splice(index + 1, 0, model[0]);
            }
          }
        }
      },
      computed: {
        // 给（根 和 子树）赋值不同的样式
        rootClass: function rootClass() {
          var strRootClass = ''; // 根判断

          if (this.root == '0') {
            this.model.children = this.model.children || [];
            strRootClass = this.num == 0 && this.model.children.length == 0 ? "roots_docu" : this.nodes == 1 || this.num == 0 && this.nodes != this.num + 1 ? "root_" : this.nodes == this.num + 1 ? "bottom_" : "center_"; // 子树判断
          } else if (this.root == '1') {
            this.model.children = this.model.children || [];
            strRootClass = this.nodes > 1 && this.model.children.length > 0 && this.nodes != this.num + 1 ? "center_" : this.num == 0 && this.nodes > 1 || this.nodes != this.num + 1 ? "center_docu" : this.nodes == 1 && this.num != 0 || this.nodes == this.num + 1 && this.model.children.length > 0 ? "bottom_" : "bottom_docu";
          }

          return strRootClass;
        },
        // 是否有儿子节点
        isChildren: function isChildren() {
          return this.num + 1 != this.nodes;
        },
        // 展开/收起
        prefixClass: function prefixClass() {
          var returnChar = "";

          if (this.rootClass.indexOf("docu") == -1) {
            if (this.model.isFolder) {
              returnChar = "open";
            } else {
              returnChar = 'close';
            }
          }

          if (this.model.children.length == 0 && this.rootClass.indexOf("docu") == -1) {
            returnChar = 'docu';
          }

          return returnChar;
        },
        liClassVal: function liClassVal() {
          return "level" + this.num;
        },
        spanClassVal: function spanClassVal() {
          return "button level" + this.num + " switch " + this.rootClass + this.prefixClass;
        },
        aClassVal: function aClassVal() {
          return this.model.clickNode ? "level" + this.num + ' curSelectedNode' : "level" + this.num;
        },
        ulClassVal: function ulClassVal() {
          return this.isChildren && this.model.children.length > 0 ? "level" + this.num + ' line' : "level" + this.num;
        }
      },
      template: "<li :class=\"liClassVal\">\n\t\t\t\t<span :class=\"spanClassVal\" @click='open(model)'></span>\n\t\t\t\t<a  @mouseenter='enterFunc(model)' @mouseleave='leaveFunc(model)'  @contextmenu.prevent='cxtmenufunc(model)'>\n\t\t\t\t    <span :class=\"{loadSyncNode:model.loadNode==1}\" v-if='model.loadNode==1'></span>\n\t\t\t\t    <span :class='model.iconClass' v-show='model.iconClass' v-else></span>\n\t\t\t\t    <span v-show='ischeck' id=\"treeDemo_5_check\" class=\"button chk\" :class='{\"checkbox_false_full\":!model.ckbool,\"checkbox_true_full\":model.ckbool}' @click='ckFunc(model)' treenode_check=\"\"></span>\n\t\t\t\t\t<span class=\"node_name\" :class='aClassVal' @click='Func(model),open(model)' >{{model.name}}</span>\n\t\t\t\t\t<!--\u65B0\u589E-->\n\t\t\t\t\t<span  v-show='model.hover' title='\u65B0\u589E' class=\"button add\" @click=\"addNode(model)\"></span>\n\t\t\t\t\t<!--\u5220\u9664-->\n\t\t\t\t    <span v-show='model.hover' title='\u5220\u9664' class=\"button remove\" @click=\"delNode(model)\"></span>\n\t\t\t\t    <!--\u4E0A\u79FB-->\n\t\t\t\t    <span v-show='model.hover' title='\u4E0A\u79FB' class=\"button up\" @click=\"upNode(model)\"></span>\n\t\t\t\t    <!--\u4E0B\u79FB-->\n\t\t\t\t    <span v-show='model.hover' title='\u4E0B\u79FB' class=\"button down\" @click=\"downNode(model)\"></span>\n\t\t\t\t</a>\n\t\t\t\t<ul :class=\"ulClassVal\" v-show='model.isFolder'>\n\t\t\t\t\t<ztree-item v-for=\"(item,i) in model.children\" :key='i' :callback='callback' :expandfunc='expandfunc' :cxtmenufunc='cxtmenufunc' :model.sync=\"item\" :num.sync='i' root='1' :nodes.sync='model.children.length' :ischeck='ischeck' :trees.sync='trees'></ztree-item>\n\t\t\t\t</ul>\n\t\t\t</li>"
    }
  },
  update: function update() {
    this.initTreeData();
  },
  mounted: function mounted() {
    var _this5 = this;

    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(function () {
      _this5.initTreeData();
    });
  }
});
// CONCATENATED MODULE: ./components/vue-ztree.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_vue_ztreevue_type_script_lang_js_ = (vue_ztreevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./components/vue-ztree.vue?vue&type=style&index=0&lang=css&
var vue_ztreevue_type_style_index_0_lang_css_ = __webpack_require__("79f4");

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./components/vue-ztree.vue






/* normalize component */

var component = normalizeComponent(
  components_vue_ztreevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "vue-ztree.vue"
/* harmony default export */ var vue_ztree = (component.exports);
// CONCATENATED MODULE: ./components/index.js


var components_install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Vue.component("vue-ztree", vue_ztree);
};

/* harmony default export */ var components = (components_install);
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components);



/***/ }),

/***/ "79b9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f1f5");
var setPrototypeOf = __webpack_require__("7af7").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "79f4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_usr_local_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_ztree_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e71d");
/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_usr_local_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_ztree_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_usr_local_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_ztree_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_usr_local_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_usr_local_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_ztree_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7af7":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("f1f5");
var anObject = __webpack_require__("7d66");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("c11e")(Function.call, __webpack_require__("f003").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "7d66":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f1f5");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "821b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "8881":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8fa9":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("c56e");
var toLength = __webpack_require__("43b1");
var toAbsoluteIndex = __webpack_require__("24ae");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "8fcb":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("9bce").f;
var has = __webpack_require__("588f");
var TAG = __webpack_require__("07c6")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "9bce":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("7d66");
var IE8_DOM_DEFINE = __webpack_require__("a974");
var toPrimitive = __webpack_require__("2e3d");
var dP = Object.defineProperty;

exports.f = __webpack_require__("b4b4") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "a782":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("7d66");
var dPs = __webpack_require__("39b3");
var enumBugKeys = __webpack_require__("8881");
var IE_PROTO = __webpack_require__("cb9e")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("422d")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("1723").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "a866":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "a974":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("b4b4") && !__webpack_require__("5809")(function () {
  return Object.defineProperty(__webpack_require__("422d")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "b4b4":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("5809")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "bdee":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("4017");
var $export = __webpack_require__("0435");
var redefine = __webpack_require__("41aa");
var hide = __webpack_require__("defd");
var Iterators = __webpack_require__("821b");
var $iterCreate = __webpack_require__("4029");
var setToStringTag = __webpack_require__("8fcb");
var getPrototypeOf = __webpack_require__("3aa7");
var ITERATOR = __webpack_require__("07c6")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "c11e":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d27e");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "c3dd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("39ec");
var hiddenKeys = __webpack_require__("8881").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "c56e":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("d66e");
var defined = __webpack_require__("ed1e");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "c605":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("39ec");
var enumBugKeys = __webpack_require__("8881");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "cb9e":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("0038")('keys');
var uid = __webpack_require__("44cb");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "d27e":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d3c7":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "d66e":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("566b");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "dc3a":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "dcb5":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("c11e");
var IObject = __webpack_require__("d66e");
var toObject = __webpack_require__("2601");
var toLength = __webpack_require__("43b1");
var asc = __webpack_require__("3387");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "defd":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("9bce");
var createDesc = __webpack_require__("efc2");
module.exports = __webpack_require__("b4b4") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "e71d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e886":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("d3c7");
var has = __webpack_require__("588f");
var cof = __webpack_require__("566b");
var inheritIfRequired = __webpack_require__("79b9");
var toPrimitive = __webpack_require__("2e3d");
var fails = __webpack_require__("5809");
var gOPN = __webpack_require__("c3dd").f;
var gOPD = __webpack_require__("f003").f;
var dP = __webpack_require__("9bce").f;
var $trim = __webpack_require__("f62a").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("a782")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("b4b4") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("41aa")(global, NUMBER, $Number);
}


/***/ }),

/***/ "ece2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("0435");
var $filter = __webpack_require__("dcb5")(2);

$export($export.P + $export.F * !__webpack_require__("2583")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "ed1e":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "ee38":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("1e97");
var getKeys = __webpack_require__("c605");
var redefine = __webpack_require__("41aa");
var global = __webpack_require__("d3c7");
var hide = __webpack_require__("defd");
var Iterators = __webpack_require__("821b");
var wks = __webpack_require__("07c6");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "efc2":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "f003":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("dc3a");
var createDesc = __webpack_require__("efc2");
var toIObject = __webpack_require__("c56e");
var toPrimitive = __webpack_require__("2e3d");
var has = __webpack_require__("588f");
var IE8_DOM_DEFINE = __webpack_require__("a974");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("b4b4") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "f1f5":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "f5d4":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "f62a":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("0435");
var defined = __webpack_require__("ed1e");
var fails = __webpack_require__("5809");
var spaces = __webpack_require__("a866");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ })

/******/ });
});
//# sourceMappingURL=vue-ztree-2.0.umd.js.map