/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(299);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(2);
	
	__webpack_require__(293);
	
	__webpack_require__(296);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	
	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}
	
	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);
	
	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(3);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(57);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(72);
	__webpack_require__(74);
	__webpack_require__(76);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(85);
	__webpack_require__(87);
	__webpack_require__(89);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(113);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(131);
	__webpack_require__(132);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(169);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(175);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(187);
	__webpack_require__(189);
	__webpack_require__(190);
	__webpack_require__(191);
	__webpack_require__(193);
	__webpack_require__(195);
	__webpack_require__(197);
	__webpack_require__(198);
	__webpack_require__(199);
	__webpack_require__(201);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(211);
	__webpack_require__(214);
	__webpack_require__(215);
	__webpack_require__(217);
	__webpack_require__(218);
	__webpack_require__(221);
	__webpack_require__(222);
	__webpack_require__(224);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(260);
	__webpack_require__(261);
	__webpack_require__(263);
	__webpack_require__(264);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(269);
	__webpack_require__(270);
	__webpack_require__(271);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(291);
	__webpack_require__(292);
	module.exports = __webpack_require__(9);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var global = __webpack_require__(4),
	    has = __webpack_require__(5),
	    DESCRIPTORS = __webpack_require__(6),
	    $export = __webpack_require__(8),
	    redefine = __webpack_require__(18),
	    META = __webpack_require__(22).KEY,
	    $fails = __webpack_require__(7),
	    shared = __webpack_require__(23),
	    setToStringTag = __webpack_require__(24),
	    uid = __webpack_require__(19),
	    wks = __webpack_require__(25),
	    wksExt = __webpack_require__(26),
	    wksDefine = __webpack_require__(27),
	    keyOf = __webpack_require__(29),
	    enumKeys = __webpack_require__(42),
	    isArray = __webpack_require__(45),
	    anObject = __webpack_require__(12),
	    toIObject = __webpack_require__(32),
	    toPrimitive = __webpack_require__(16),
	    createDesc = __webpack_require__(17),
	    _create = __webpack_require__(46),
	    gOPNExt = __webpack_require__(49),
	    $GOPD = __webpack_require__(51),
	    $DP = __webpack_require__(11),
	    $keys = __webpack_require__(30),
	    gOPD = $GOPD.f,
	    dP = $DP.f,
	    gOPN = gOPNExt.f,
	    $Symbol = global.Symbol,
	    $JSON = global.JSON,
	    _stringify = $JSON && $JSON.stringify,
	    PROTOTYPE = 'prototype',
	    HIDDEN = wks('_hidden'),
	    TO_PRIMITIVE = wks('toPrimitive'),
	    isEnum = {}.propertyIsEnumerable,
	    SymbolRegistry = shared('symbol-registry'),
	    AllSymbols = shared('symbols'),
	    OPSymbols = shared('op-symbols'),
	    ObjectProto = Object[PROTOTYPE],
	    USE_NATIVE = typeof $Symbol == 'function',
	    QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function get() {
	      return dP(this, 'a', { value: 7 }).a;
	    }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function wrap(tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    }return setSymbolDesc(it, key, D);
	  }return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P)),
	      i = 0,
	      l = keys.length,
	      key;
	  while (l > i) {
	    $defineProperty(it, key = keys[i++], P[key]);
	  }return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it)),
	      result = [],
	      i = 0,
	      key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  }return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto,
	      names = gOPN(IS_OP ? OPSymbols : toIObject(it)),
	      result = [],
	      i = 0,
	      key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  }return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function _Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function $set(value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(50).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(44).f = $propertyIsEnumerable;
	  __webpack_require__(43).f = $getOwnPropertySymbols;
	
	  if (DESCRIPTORS && !__webpack_require__(28)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
	
	for (var symbols =
	// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), i = 0; symbols.length > i;) {
	  wks(symbols[i++]);
	}for (var symbols = $keys(wks.store), i = 0; symbols.length > i;) {
	  wksDefine(symbols[i++]);
	}$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function _for(key) {
	    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key) {
	    if (isSymbol(key)) return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function useSetter() {
	    setter = true;
	  },
	  useSimple: function useSimple() {
	    setter = false;
	  }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    var args = [it],
	        i = 1,
	        replacer,
	        $replacer;
	    while (arguments.length > i) {
	      args.push(arguments[i++]);
	    }replacer = args[1];
	    if (typeof replacer == 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) replacer = function replacer(key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(7)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(4),
	    core = __webpack_require__(9),
	    hide = __webpack_require__(10),
	    redefine = __webpack_require__(18),
	    ctx = __webpack_require__(20),
	    PROTOTYPE = 'prototype';
	
	var $export = function $export(type, name, source) {
	  var IS_FORCED = type & $export.F,
	      IS_GLOBAL = type & $export.G,
	      IS_STATIC = type & $export.S,
	      IS_PROTO = type & $export.P,
	      IS_BIND = type & $export.B,
	      target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE],
	      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
	      expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}),
	      key,
	      own,
	      out,
	      exp;
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
	$export.F = 1; // forced
	$export.G = 2; // global
	$export.S = 4; // static
	$export.P = 8; // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	$export.U = 64; // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(11),
	    createDesc = __webpack_require__(17);
	module.exports = __webpack_require__(6) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(12),
	    IE8_DOM_DEFINE = __webpack_require__(14),
	    toPrimitive = __webpack_require__(16),
	    dP = Object.defineProperty;
	
	exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) {/* empty */}
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(13);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = !__webpack_require__(6) && !__webpack_require__(7)(function () {
	  return Object.defineProperty(__webpack_require__(15)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(13),
	    document = __webpack_require__(4).document
	// in old IE typeof document.createElement is 'object'
	,
	    is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
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

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(4),
	    hide = __webpack_require__(10),
	    has = __webpack_require__(5),
	    SRC = __webpack_require__(19)('src'),
	    TO_STRING = 'toString',
	    $toString = Function[TO_STRING],
	    TPL = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(9).inspectSource = function (it) {
	  return $toString.call(it);
	};
	
	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) has(val, 'name') || hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === global) {
	    O[key] = val;
	  } else {
	    if (!safe) {
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if (O[key]) O[key] = val;else hide(O, key, val);
	    }
	  }
	  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// optional / simple context binding
	var aFunction = __webpack_require__(21);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };
	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };
	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }
	  return function () /* ...args */{
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var META = __webpack_require__(19)('meta'),
	    isObject = __webpack_require__(13),
	    has = __webpack_require__(5),
	    setDesc = __webpack_require__(11).f,
	    id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(7)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function setMeta(it) {
	  setDesc(it, META, { value: {
	      i: 'O' + ++id, // object ID
	      w: {} // weak collections IDs
	    } });
	};
	var fastKey = function fastKey(it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	    // return object ID
	  }return it[META].i;
	};
	var getWeak = function getWeak(it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	    // return hash weak collections IDs
	  }return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function onFreeze(it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(4),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var def = __webpack_require__(11).f,
	    has = __webpack_require__(5),
	    TAG = __webpack_require__(25)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var store = __webpack_require__(23)('wks'),
	    uid = __webpack_require__(19),
	    _Symbol = __webpack_require__(4).Symbol,
	    USE_SYMBOL = typeof _Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.f = __webpack_require__(25);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(4),
	    core = __webpack_require__(9),
	    LIBRARY = __webpack_require__(28),
	    wksExt = __webpack_require__(26),
	    defineProperty = __webpack_require__(11).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = false;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getKeys = __webpack_require__(30),
	    toIObject = __webpack_require__(32);
	module.exports = function (object, el) {
	  var O = toIObject(object),
	      keys = getKeys(O),
	      length = keys.length,
	      index = 0,
	      key;
	  while (length > index) {
	    if (O[key = keys[index++]] === el) return key;
	  }
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(31),
	    enumBugKeys = __webpack_require__(41);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = __webpack_require__(5),
	    toIObject = __webpack_require__(32),
	    arrayIndexOf = __webpack_require__(36)(false),
	    IE_PROTO = __webpack_require__(40)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object),
	      i = 0,
	      result = [],
	      key;
	  for (key in O) {
	    if (key != IE_PROTO) has(O, key) && result.push(key);
	  } // Don't enum bug & hidden keys
	  while (names.length > i) {
	    if (has(O, key = names[i++])) {
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	  }return result;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(33),
	    defined = __webpack_require__(35);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(34);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	
	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(32),
	    toLength = __webpack_require__(37),
	    toIndex = __webpack_require__(39);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this),
	        length = toLength(O.length),
	        index = toIndex(fromIndex, length),
	        value;
	    // Array#includes uses SameValueZero equality algorithm
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      if (value != value) return true;
	      // Array#toIndex ignores holes, Array#includes - not
	    } else for (; length > index; index++) {
	      if (IS_INCLUDES || index in O) {
	        if (O[index] === el) return IS_INCLUDES || index || 0;
	      }
	    }return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.15 ToLength
	var toInteger = __webpack_require__(38),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.1.4 ToInteger
	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(38),
	    max = Math.max,
	    min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var shared = __webpack_require__(23)('keys'),
	    uid = __webpack_require__(19);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';
	
	// IE 8- don't enum bug keys
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(30),
	    gOPS = __webpack_require__(43),
	    pIE = __webpack_require__(44);
	module.exports = function (it) {
	  var result = getKeys(it),
	      getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it),
	        isEnum = pIE.f,
	        i = 0,
	        key;
	    while (symbols.length > i) {
	      if (isEnum.call(it, key = symbols[i++])) result.push(key);
	    }
	  }return result;
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	"use strict";
	
	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";
	
	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(34);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(12),
	    dPs = __webpack_require__(47),
	    enumBugKeys = __webpack_require__(41),
	    IE_PROTO = __webpack_require__(40)('IE_PROTO'),
	    Empty = function Empty() {/* empty */},
	    PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var _createDict = function createDict() {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(15)('iframe'),
	      i = enumBugKeys.length,
	      lt = '<',
	      gt = '>',
	      iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(48).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  _createDict = iframeDocument.F;
	  while (i--) {
	    delete _createDict[PROTOTYPE][enumBugKeys[i]];
	  }return _createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = _createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(11),
	    anObject = __webpack_require__(12),
	    getKeys = __webpack_require__(30);
	
	module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties),
	      length = keys.length,
	      i = 0,
	      P;
	  while (length > i) {
	    dP.f(O, P = keys[i++], Properties[P]);
	  }return O;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(4).document && document.documentElement;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(32),
	    gOPN = __webpack_require__(50).f,
	    toString = {}.toString;
	
	var windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function getWindowNames(it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(31),
	    hiddenKeys = __webpack_require__(41).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var pIE = __webpack_require__(44),
	    createDesc = __webpack_require__(17),
	    toIObject = __webpack_require__(32),
	    toPrimitive = __webpack_require__(16),
	    has = __webpack_require__(5),
	    IE8_DOM_DEFINE = __webpack_require__(14),
	    gOPD = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) {/* empty */}
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(46) });

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperty: __webpack_require__(11).f });

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperties: __webpack_require__(47) });

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(32),
	    $getOwnPropertyDescriptor = __webpack_require__(51).f;
	
	__webpack_require__(56)('getOwnPropertyDescriptor', function () {
	  return function getOwnPropertyDescriptor(it, key) {
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8),
	    core = __webpack_require__(9),
	    fails = __webpack_require__(7);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY],
	      exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () {
	    fn(1);
	  }), 'Object', exp);
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(58),
	    $getPrototypeOf = __webpack_require__(59);
	
	__webpack_require__(56)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(35);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(5),
	    toObject = __webpack_require__(58),
	    IE_PROTO = __webpack_require__(40)('IE_PROTO'),
	    ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(58),
	    $keys = __webpack_require__(30);
	
	__webpack_require__(56)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(56)('getOwnPropertyNames', function () {
	  return __webpack_require__(49).f;
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(13),
	    meta = __webpack_require__(22).onFreeze;
	
	__webpack_require__(56)('freeze', function ($freeze) {
	  return function freeze(it) {
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(13),
	    meta = __webpack_require__(22).onFreeze;
	
	__webpack_require__(56)('seal', function ($seal) {
	  return function seal(it) {
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(13),
	    meta = __webpack_require__(22).onFreeze;
	
	__webpack_require__(56)('preventExtensions', function ($preventExtensions) {
	  return function preventExtensions(it) {
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(56)('isFrozen', function ($isFrozen) {
	  return function isFrozen(it) {
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(56)('isSealed', function ($isSealed) {
	  return function isSealed(it) {
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(56)('isExtensible', function ($isExtensible) {
	  return function isExtensible(it) {
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(8);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(69) });

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	
	var getKeys = __webpack_require__(30),
	    gOPS = __webpack_require__(43),
	    pIE = __webpack_require__(44),
	    toObject = __webpack_require__(58),
	    IObject = __webpack_require__(33),
	    $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(7)(function () {
	  var A = {},
	      B = {},
	      S = Symbol(),
	      K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) {
	    B[k] = k;
	  });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) {
	  // eslint-disable-line no-unused-vars
	  var T = toObject(target),
	      aLen = arguments.length,
	      index = 1,
	      getSymbols = gOPS.f,
	      isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]),
	        keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
	        length = keys.length,
	        j = 0,
	        key;
	    while (length > j) {
	      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	    }
	  }return T;
	} : $assign;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', { is: __webpack_require__(71) });

/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y) {
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(73).set });

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(13),
	    anObject = __webpack_require__(12);
	var check = function check(O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	  function (test, buggy, set) {
	    try {
	      set = __webpack_require__(20)(Function.call, __webpack_require__(51).f(Object.prototype, '__proto__').set, 2);
	      set(test, []);
	      buggy = !(test instanceof Array);
	    } catch (e) {
	      buggy = true;
	    }
	    return function setPrototypeOf(O, proto) {
	      check(O, proto);
	      if (buggy) O.__proto__ = proto;else set(O, proto);
	      return O;
	    };
	  }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	
	var classof = __webpack_require__(75),
	    test = {};
	test[__webpack_require__(25)('toStringTag')] = 'z';
	if (test + '' != '[object z]') {
	  __webpack_require__(18)(Object.prototype, 'toString', function toString() {
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(34),
	    TAG = __webpack_require__(25)('toStringTag')
	// ES3 wrong here
	,
	    ARG = cof(function () {
	  return arguments;
	}()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function tryGet(it, key) {
	  try {
	    return it[key];
	  } catch (e) {/* empty */}
	};
	
	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	  // @@toStringTag case
	  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	  // builtinTag case
	  : ARG ? cof(O)
	  // ES3 arguments fallback
	  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Function', { bind: __webpack_require__(77) });

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var aFunction = __webpack_require__(21),
	    isObject = __webpack_require__(13),
	    invoke = __webpack_require__(78),
	    arraySlice = [].slice,
	    factories = {};
	
	var construct = function construct(F, len, args) {
	  if (!(len in factories)) {
	    for (var n = [], i = 0; i < len; i++) {
	      n[i] = 'a[' + i + ']';
	    }factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  }return factories[len](F, args);
	};
	
	module.exports = Function.bind || function bind(that /*, args... */) {
	  var fn = aFunction(this),
	      partArgs = arraySlice.call(arguments, 1);
	  var bound = function bound() /* args... */{
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	"use strict";
	
	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	                  var un = that === undefined;
	                  switch (args.length) {
	                                    case 0:
	                                                      return un ? fn() : fn.call(that);
	                                    case 1:
	                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
	                                    case 2:
	                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
	                                    case 3:
	                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
	                                    case 4:
	                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
	                  }return fn.apply(that, args);
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(11).f,
	    createDesc = __webpack_require__(17),
	    has = __webpack_require__(5),
	    FProto = Function.prototype,
	    nameRE = /^\s*function ([^ (]*)/,
	    NAME = 'name';
	
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
	  configurable: true,
	  get: function get() {
	    try {
	      var that = this,
	          name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch (e) {
	      return '';
	    }
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(13),
	    getPrototypeOf = __webpack_require__(59),
	    HAS_INSTANCE = __webpack_require__(25)('hasInstance'),
	    FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(11).f(FunctionProto, HAS_INSTANCE, { value: function value(O) {
	    if (typeof this != 'function' || !isObject(O)) return false;
	    if (!isObject(this.prototype)) return O instanceof this;
	    // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	    while (O = getPrototypeOf(O)) {
	      if (this.prototype === O) return true;
	    }return false;
	  } });

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    $parseInt = __webpack_require__(82);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $parseInt = __webpack_require__(4).parseInt,
	    $trim = __webpack_require__(83).trim,
	    ws = __webpack_require__(84),
	    hex = /^[\-+]?0[xX]/;
	
	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
	  var string = $trim(String(str), 3);
	  return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    defined = __webpack_require__(35),
	    fails = __webpack_require__(7),
	    spaces = __webpack_require__(84),
	    space = '[' + spaces + ']',
	    non = '\u200B\x85',
	    ltrim = RegExp('^' + space + space + '*'),
	    rtrim = RegExp(space + space + '*$');
	
	var exporter = function exporter(KEY, exec, ALIAS) {
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

/***/ },
/* 84 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    $parseFloat = __webpack_require__(86);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $parseFloat = __webpack_require__(4).parseFloat,
	    $trim = __webpack_require__(83).trim;
	
	module.exports = 1 / $parseFloat(__webpack_require__(84) + '-0') !== -Infinity ? function parseFloat(str) {
	  var string = $trim(String(str), 3),
	      result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(4),
	    has = __webpack_require__(5),
	    cof = __webpack_require__(34),
	    inheritIfRequired = __webpack_require__(88),
	    toPrimitive = __webpack_require__(16),
	    fails = __webpack_require__(7),
	    gOPN = __webpack_require__(50).f,
	    gOPD = __webpack_require__(51).f,
	    dP = __webpack_require__(11).f,
	    $trim = __webpack_require__(83).trim,
	    NUMBER = 'Number',
	    $Number = global[NUMBER],
	    Base = $Number,
	    proto = $Number.prototype
	// Opera ~12 has broken Object#toString
	,
	    BROKEN_COF = cof(__webpack_require__(46)(proto)) == NUMBER,
	    TRIM = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function toNumber(argument) {
	  var it = toPrimitive(argument, false);
	  if (typeof it == 'string' && it.length > 2) {
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0),
	        third,
	        radix,
	        maxCode;
	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66:case 98:
	          radix = 2;maxCode = 49;break; // fast equal /^0b[01]+$/i
	        case 79:case 111:
	          radix = 8;maxCode = 55;break; // fast equal /^0o[0-7]+$/i
	        default:
	          return +it;
	      }
	      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      }return parseInt(digits, radix);
	    }
	  }return +it;
	};
	
	if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
	  $Number = function Number(value) {
	    var it = arguments.length < 1 ? 0 : value,
	        that = this;
	    return that instanceof $Number
	    // check on 1..constructor(foo) case
	    && (BROKEN_COF ? fails(function () {
	      proto.valueOf.call(that);
	    }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for (var keys = __webpack_require__(6) ? gOPN(Base) : (
	  // ES3:
	  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	  // ES6 (in case, if modules with ES6 Number statics required before):
	  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
	    if (has(Base, key = keys[j]) && !has($Number, key)) {
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(18)(global, NUMBER, $Number);
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(13),
	    setPrototypeOf = __webpack_require__(73).set;
	module.exports = function (that, target, C) {
	  var P,
	      S = target.constructor;
	  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
	    setPrototypeOf(that, P);
	  }return that;
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    toInteger = __webpack_require__(38),
	    aNumberValue = __webpack_require__(90),
	    repeat = __webpack_require__(91),
	    $toFixed = 1..toFixed,
	    floor = Math.floor,
	    data = [0, 0, 0, 0, 0, 0],
	    ERROR = 'Number.toFixed: incorrect invocation!',
	    ZERO = '0';
	
	var multiply = function multiply(n, c) {
	  var i = -1,
	      c2 = c;
	  while (++i < 6) {
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function divide(n) {
	  var i = 6,
	      c = 0;
	  while (--i >= 0) {
	    c += data[i];
	    data[i] = floor(c / n);
	    c = c % n * 1e7;
	  }
	};
	var numToString = function numToString() {
	  var i = 6,
	      s = '';
	  while (--i >= 0) {
	    if (s !== '' || i === 0 || data[i] !== 0) {
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  }return s;
	};
	var pow = function pow(x, n, acc) {
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function log(x) {
	  var n = 0,
	      x2 = x;
	  while (x2 >= 4096) {
	    n += 12;
	    x2 /= 4096;
	  }
	  while (x2 >= 2) {
	    n += 1;
	    x2 /= 2;
	  }return n;
	};
	
	$export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128..toFixed(0) !== '1000000000000000128') || !__webpack_require__(7)(function () {
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits) {
	    var x = aNumberValue(this, ERROR),
	        f = toInteger(fractionDigits),
	        s = '',
	        m = ZERO,
	        e,
	        z,
	        j,
	        k;
	    if (f < 0 || f > 20) throw RangeError(ERROR);
	    if (x != x) return 'NaN';
	    if (x <= -1e21 || x >= 1e21) return String(x);
	    if (x < 0) {
	      s = '-';
	      x = -x;
	    }
	    if (x > 1e-21) {
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if (e > 0) {
	        multiply(0, z);
	        j = f;
	        while (j >= 7) {
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while (j >= 23) {
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if (f > 0) {
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    }return m;
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var cof = __webpack_require__(34);
	module.exports = function (it, msg) {
	  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(38),
	    defined = __webpack_require__(35);
	
	module.exports = function repeat(count) {
	  var str = String(defined(this)),
	      res = '',
	      n = toInteger(count);
	  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
	  for (; n > 0; (n >>>= 1) && (str += str)) {
	    if (n & 1) res += str;
	  }return res;
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    $fails = __webpack_require__(7),
	    aNumberValue = __webpack_require__(90),
	    $toPrecision = 1..toPrecision;
	
	$export($export.P + $export.F * ($fails(function () {
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function () {
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision) {
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
	  }
	});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.2 Number.isFinite(number)
	var $export = __webpack_require__(8),
	    _isFinite = __webpack_require__(4).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it) {
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', { isInteger: __webpack_require__(96) });

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(13),
	    floor = Math.floor;
	module.exports = function isInteger(it) {
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number) {
	    return number != number;
	  }
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.5 Number.isSafeInteger(number)
	var $export = __webpack_require__(8),
	    isInteger = __webpack_require__(96),
	    abs = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number) {
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    $parseFloat = __webpack_require__(86);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    $parseInt = __webpack_require__(82);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(8),
	    log1p = __webpack_require__(104),
	    sqrt = Math.sqrt,
	    $acosh = Math.acosh;
	
	$export($export.S + $export.F * !($acosh
	// V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	&& Math.floor($acosh(Number.MAX_VALUE)) == 710
	// Tor Browser bug: Math.acosh(Infinity) -> NaN 
	&& $acosh(Infinity) == Infinity), 'Math', {
	  acosh: function acosh(x) {
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 104 */
/***/ function(module, exports) {

	"use strict";
	
	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x) {
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(8),
	    $asinh = Math.asinh;
	
	function asinh(x) {
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(8),
	    $atanh = Math.atanh;
	
	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x) {
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(8),
	    sign = __webpack_require__(108);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x) {
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 108 */
/***/ function(module, exports) {

	"use strict";
	
	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x) {
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x) {
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(8),
	    exp = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x) {
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(8),
	    $expm1 = __webpack_require__(112);
	
	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

/***/ },
/* 112 */
/***/ function(module, exports) {

	"use strict";
	
	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = !$expm1
	// Old FF bug
	|| $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	// Tor Browser bug
	|| $expm1(-2e-17) != -2e-17 ? function expm1(x) {
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.16 Math.fround(x)
	var $export = __webpack_require__(8),
	    sign = __webpack_require__(108),
	    pow = Math.pow,
	    EPSILON = pow(2, -52),
	    EPSILON32 = pow(2, -23),
	    MAX32 = pow(2, 127) * (2 - EPSILON32),
	    MIN32 = pow(2, -126);
	
	var roundTiesToEven = function roundTiesToEven(n) {
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	$export($export.S, 'Math', {
	  fround: function fround(x) {
	    var $abs = Math.abs(x),
	        $sign = sign(x),
	        a,
	        result;
	    if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if (result > MAX32 || result != result) return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(8),
	    abs = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2) {
	    // eslint-disable-line no-unused-vars
	    var sum = 0,
	        i = 0,
	        aLen = arguments.length,
	        larg = 0,
	        arg,
	        div;
	    while (i < aLen) {
	      arg = abs(arguments[i++]);
	      if (larg < arg) {
	        div = larg / arg;
	        sum = sum * div * div + 1;
	        larg = arg;
	      } else if (arg > 0) {
	        div = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(8),
	    $imul = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(7)(function () {
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y) {
	    var UINT16 = 0xffff,
	        xn = +x,
	        yn = +y,
	        xl = UINT16 & xn,
	        yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  log10: function log10(x) {
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { log1p: __webpack_require__(104) });

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  log2: function log2(x) {
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { sign: __webpack_require__(108) });

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(8),
	    expm1 = __webpack_require__(112),
	    exp = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(7)(function () {
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x) {
	    return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(8),
	    expm1 = __webpack_require__(112),
	    exp = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x) {
	    var a = expm1(x = +x),
	        b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it) {
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    toIndex = __webpack_require__(39),
	    fromCharCode = String.fromCharCode,
	    $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x) {
	    // eslint-disable-line no-unused-vars
	    var res = [],
	        aLen = arguments.length,
	        i = 0,
	        code;
	    while (aLen > i) {
	      code = +arguments[i++];
	      if (toIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
	    }return res.join('');
	  }
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    toIObject = __webpack_require__(32),
	    toLength = __webpack_require__(37);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite) {
	    var tpl = toIObject(callSite.raw),
	        len = toLength(tpl.length),
	        aLen = arguments.length,
	        res = [],
	        i = 0;
	    while (len > i) {
	      res.push(String(tpl[i++]));
	      if (i < aLen) res.push(String(arguments[i]));
	    }return res.join('');
	  }
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	
	__webpack_require__(83)('trim', function ($trim) {
	  return function trim() {
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $at = __webpack_require__(127)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(128)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      index = this._i,
	      point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(38),
	    defined = __webpack_require__(35);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that)),
	        i = toInteger(pos),
	        l = s.length,
	        a,
	        b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(28),
	    $export = __webpack_require__(8),
	    redefine = __webpack_require__(18),
	    hide = __webpack_require__(10),
	    has = __webpack_require__(5),
	    Iterators = __webpack_require__(129),
	    $iterCreate = __webpack_require__(130),
	    setToStringTag = __webpack_require__(24),
	    getPrototypeOf = __webpack_require__(59),
	    ITERATOR = __webpack_require__(25)('iterator'),
	    BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	,
	    FF_ITERATOR = '@@iterator',
	    KEYS = 'keys',
	    VALUES = 'values';
	
	var returnThis = function returnThis() {
	  return this;
	};
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function getMethod(kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS:
	        return function keys() {
	          return new Constructor(this, kind);
	        };
	      case VALUES:
	        return function values() {
	          return new Constructor(this, kind);
	        };
	    }return function entries() {
	      return new Constructor(this, kind);
	    };
	  };
	  var TAG = NAME + ' Iterator',
	      DEF_VALUES = DEFAULT == VALUES,
	      VALUES_BUG = false,
	      proto = Base.prototype,
	      $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
	      $default = $native || getMethod(DEFAULT),
	      $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
	      $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
	      methods,
	      key,
	      IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() {
	      return $native.call(this);
	    };
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

/***/ },
/* 129 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var create = __webpack_require__(46),
	    descriptor = __webpack_require__(17),
	    setToStringTag = __webpack_require__(24),
	    IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(10)(IteratorPrototype, __webpack_require__(25)('iterator'), function () {
	  return this;
	});
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    $at = __webpack_require__(127)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos) {
	    return $at(this, pos);
	  }
	});

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	
	var $export = __webpack_require__(8),
	    toLength = __webpack_require__(37),
	    context = __webpack_require__(133),
	    ENDS_WITH = 'endsWith',
	    $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(135)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */) {
	    var that = context(this, searchString, ENDS_WITH),
	        endPosition = arguments.length > 1 ? arguments[1] : undefined,
	        len = toLength(that.length),
	        end = endPosition === undefined ? len : Math.min(toLength(endPosition), len),
	        search = String(searchString);
	    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(134),
	    defined = __webpack_require__(35);
	
	module.exports = function (that, searchString, NAME) {
	  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(13),
	    cof = __webpack_require__(34),
	    MATCH = __webpack_require__(25)('match');
	module.exports = function (it) {
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var MATCH = __webpack_require__(25)('match');
	module.exports = function (KEY) {
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch (e) {
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch (f) {/* empty */}
	  }return true;
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	
	var $export = __webpack_require__(8),
	    context = __webpack_require__(133),
	    INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(135)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */) {
	    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(91)
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	
	var $export = __webpack_require__(8),
	    toLength = __webpack_require__(37),
	    context = __webpack_require__(133),
	    STARTS_WITH = 'startsWith',
	    $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(135)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */) {
	    var that = context(this, searchString, STARTS_WITH),
	        index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length)),
	        search = String(searchString);
	    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	
	__webpack_require__(140)('anchor', function (createHTML) {
	  return function anchor(name) {
	    return createHTML(this, 'a', 'name', name);
	  };
	});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    fails = __webpack_require__(7),
	    defined = __webpack_require__(35),
	    quot = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function createHTML(string, tag, attribute, value) {
	  var S = String(defined(string)),
	      p1 = '<' + tag;
	  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function (NAME, exec) {
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function () {
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	
	__webpack_require__(140)('big', function (createHTML) {
	  return function big() {
	    return createHTML(this, 'big', '', '');
	  };
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	
	__webpack_require__(140)('blink', function (createHTML) {
	  return function blink() {
	    return createHTML(this, 'blink', '', '');
	  };
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	
	__webpack_require__(140)('bold', function (createHTML) {
	  return function bold() {
	    return createHTML(this, 'b', '', '');
	  };
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	
	__webpack_require__(140)('fixed', function (createHTML) {
	  return function fixed() {
	    return createHTML(this, 'tt', '', '');
	  };
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	
	__webpack_require__(140)('fontcolor', function (createHTML) {
	  return function fontcolor(color) {
	    return createHTML(this, 'font', 'color', color);
	  };
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	
	__webpack_require__(140)('fontsize', function (createHTML) {
	  return function fontsize(size) {
	    return createHTML(this, 'font', 'size', size);
	  };
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	
	__webpack_require__(140)('italics', function (createHTML) {
	  return function italics() {
	    return createHTML(this, 'i', '', '');
	  };
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	
	__webpack_require__(140)('link', function (createHTML) {
	  return function link(url) {
	    return createHTML(this, 'a', 'href', url);
	  };
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	
	__webpack_require__(140)('small', function (createHTML) {
	  return function small() {
	    return createHTML(this, 'small', '', '');
	  };
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	
	__webpack_require__(140)('strike', function (createHTML) {
	  return function strike() {
	    return createHTML(this, 'strike', '', '');
	  };
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	
	__webpack_require__(140)('sub', function (createHTML) {
	  return function sub() {
	    return createHTML(this, 'sub', '', '');
	  };
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	
	__webpack_require__(140)('sup', function (createHTML) {
	  return function sup() {
	    return createHTML(this, 'sup', '', '');
	  };
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Date', { now: function now() {
	    return new Date().getTime();
	  } });

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    toObject = __webpack_require__(58),
	    toPrimitive = __webpack_require__(16);
	
	$export($export.P + $export.F * __webpack_require__(7)(function () {
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function toISOString() {
	      return 1;
	    } }) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key) {
	    var O = toObject(this),
	        pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	
	var $export = __webpack_require__(8),
	    fails = __webpack_require__(7),
	    getTime = Date.prototype.getTime;
	
	var lz = function lz(num) {
	  return num > 9 ? num : '0' + num;
	};
	
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function () {
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function () {
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString() {
	    if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
	    var d = this,
	        y = d.getUTCFullYear(),
	        m = d.getUTCMilliseconds(),
	        s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var DateProto = Date.prototype,
	    INVALID_DATE = 'Invalid Date',
	    TO_STRING = 'toString',
	    $toString = DateProto[TO_STRING],
	    getTime = DateProto.getTime;
	if (new Date(NaN) + '' != INVALID_DATE) {
	  __webpack_require__(18)(DateProto, TO_STRING, function toString() {
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var TO_PRIMITIVE = __webpack_require__(25)('toPrimitive'),
	    proto = Date.prototype;
	
	if (!(TO_PRIMITIVE in proto)) __webpack_require__(10)(proto, TO_PRIMITIVE, __webpack_require__(158));

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(12),
	    toPrimitive = __webpack_require__(16),
	    NUMBER = 'number';
	
	module.exports = function (hint) {
	  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Array', { isArray: __webpack_require__(45) });

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(20),
	    $export = __webpack_require__(8),
	    toObject = __webpack_require__(58),
	    call = __webpack_require__(161),
	    isArrayIter = __webpack_require__(162),
	    toLength = __webpack_require__(37),
	    createProperty = __webpack_require__(163),
	    getIterFn = __webpack_require__(164);
	
	$export($export.S + $export.F * !__webpack_require__(165)(function (iter) {
	  Array.from(iter);
	}), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /*, mapfn = undefined, thisArg = undefined*/) {
	    var O = toObject(arrayLike),
	        C = typeof this == 'function' ? this : Array,
	        aLen = arguments.length,
	        mapfn = aLen > 1 ? arguments[1] : undefined,
	        mapping = mapfn !== undefined,
	        index = 0,
	        iterFn = getIterFn(O),
	        length,
	        result,
	        step,
	        iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(12);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	    // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// check on default Array iterator
	var Iterators = __webpack_require__(129),
	    ITERATOR = __webpack_require__(25)('iterator'),
	    ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $defineProperty = __webpack_require__(11),
	    createDesc = __webpack_require__(17);
	
	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var classof = __webpack_require__(75),
	    ITERATOR = __webpack_require__(25)('iterator'),
	    Iterators = __webpack_require__(129);
	module.exports = __webpack_require__(9).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ITERATOR = __webpack_require__(25)('iterator'),
	    SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () {
	    SAFE_CLOSING = true;
	  };
	  Array.from(riter, function () {
	    throw 2;
	  });
	} catch (e) {/* empty */}
	
	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7],
	        iter = arr[ITERATOR]();
	    iter.next = function () {
	      return { done: safe = true };
	    };
	    arr[ITERATOR] = function () {
	      return iter;
	    };
	    exec(arr);
	  } catch (e) {/* empty */}
	  return safe;
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    createProperty = __webpack_require__(163);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(7)(function () {
	  function F() {}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of() /* ...args */{
	    var index = 0,
	        aLen = arguments.length,
	        result = new (typeof this == 'function' ? this : Array)(aLen);
	    while (aLen > index) {
	      createProperty(result, index, arguments[index++]);
	    }result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	
	var $export = __webpack_require__(8),
	    toIObject = __webpack_require__(32),
	    arrayJoin = [].join;
	
	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(33) != Object || !__webpack_require__(168)(arrayJoin)), 'Array', {
	  join: function join(separator) {
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fails = __webpack_require__(7);
	
	module.exports = function (method, arg) {
	  return !!method && fails(function () {
	    arg ? method.call(null, function () {}, 1) : method.call(null);
	  });
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    html = __webpack_require__(48),
	    cof = __webpack_require__(34),
	    toIndex = __webpack_require__(39),
	    toLength = __webpack_require__(37),
	    arraySlice = [].slice;
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(7)(function () {
	  if (html) arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end) {
	    var len = toLength(this.length),
	        klass = cof(this);
	    end = end === undefined ? len : end;
	    if (klass == 'Array') return arraySlice.call(this, begin, end);
	    var start = toIndex(begin, len),
	        upTo = toIndex(end, len),
	        size = toLength(upTo - start),
	        cloned = Array(size),
	        i = 0;
	    for (; i < size; i++) {
	      cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
	    }return cloned;
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    aFunction = __webpack_require__(21),
	    toObject = __webpack_require__(58),
	    fails = __webpack_require__(7),
	    $sort = [].sort,
	    test = [1, 2, 3];
	
	$export($export.P + $export.F * (fails(function () {
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function () {
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(168)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn) {
	    return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    $forEach = __webpack_require__(172)(0),
	    STRICT = __webpack_require__(168)([].forEach, true);
	
	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */) {
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx = __webpack_require__(20),
	    IObject = __webpack_require__(33),
	    toObject = __webpack_require__(58),
	    toLength = __webpack_require__(37),
	    asc = __webpack_require__(173);
	module.exports = function (TYPE, $create) {
	  var IS_MAP = TYPE == 1,
	      IS_FILTER = TYPE == 2,
	      IS_SOME = TYPE == 3,
	      IS_EVERY = TYPE == 4,
	      IS_FIND_INDEX = TYPE == 6,
	      NO_HOLES = TYPE == 5 || IS_FIND_INDEX,
	      create = $create || asc;
	  return function ($this, callbackfn, that) {
	    var O = toObject($this),
	        self = IObject(O),
	        f = ctx(callbackfn, that, 3),
	        length = toLength(self.length),
	        index = 0,
	        result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined,
	        val,
	        res;
	    for (; length > index; index++) {
	      if (NO_HOLES || index in self) {
	        val = self[index];
	        res = f(val, index, O);
	        if (TYPE) {
	          if (IS_MAP) result[index] = res; // map
	          else if (res) switch (TYPE) {
	              case 3:
	                return true; // some
	              case 5:
	                return val; // find
	              case 6:
	                return index; // findIndex
	              case 2:
	                result.push(val); // filter
	            } else if (IS_EVERY) return false; // every
	        }
	      }
	    }return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(174);
	
	module.exports = function (original, length) {
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(13),
	    isArray = __webpack_require__(45),
	    SPECIES = __webpack_require__(25)('species');
	
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
	  }return C === undefined ? Array : C;
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    $map = __webpack_require__(172)(1);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    $filter = __webpack_require__(172)(2);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    $some = __webpack_require__(172)(3);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */) {
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    $every = __webpack_require__(172)(4);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */) {
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    $reduce = __webpack_require__(180);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var aFunction = __webpack_require__(21),
	    toObject = __webpack_require__(58),
	    IObject = __webpack_require__(33),
	    toLength = __webpack_require__(37);
	
	module.exports = function (that, callbackfn, aLen, memo, isRight) {
	  aFunction(callbackfn);
	  var O = toObject(that),
	      self = IObject(O),
	      length = toLength(O.length),
	      index = isRight ? length - 1 : 0,
	      i = isRight ? -1 : 1;
	  if (aLen < 2) for (;;) {
	    if (index in self) {
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if (isRight ? index < 0 : length <= index) {
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for (; isRight ? index >= 0 : length > index; index += i) {
	    if (index in self) {
	      memo = callbackfn(memo, self[index], index, O);
	    }
	  }return memo;
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    $reduce = __webpack_require__(180);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    $indexOf = __webpack_require__(36)(false),
	    $native = [].indexOf,
	    NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */) {
	    return NEGATIVE_ZERO
	    // convert -0 to +0
	    ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    toIObject = __webpack_require__(32),
	    toInteger = __webpack_require__(38),
	    toLength = __webpack_require__(37),
	    $native = [].lastIndexOf,
	    NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */) {
	    // convert -0 to +0
	    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
	    var O = toIObject(this),
	        length = toLength(O.length),
	        index = length - 1;
	    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
	    if (index < 0) index = length + index;
	    for (; index >= 0; index--) {
	      if (index in O) if (O[index] === searchElement) return index || 0;
	    }return -1;
	  }
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Array', { copyWithin: __webpack_require__(185) });
	
	__webpack_require__(186)('copyWithin');

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	
	var toObject = __webpack_require__(58),
	    toIndex = __webpack_require__(39),
	    toLength = __webpack_require__(37);
	
	module.exports = [].copyWithin || function copyWithin(target /*= 0*/, start /*= 0, end = @length*/) {
	  var O = toObject(this),
	      len = toLength(O.length),
	      to = toIndex(target, len),
	      from = toIndex(start, len),
	      end = arguments.length > 2 ? arguments[2] : undefined,
	      count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to),
	      inc = 1;
	  if (from < to && to < from + count) {
	    inc = -1;
	    from += count - 1;
	    to += count - 1;
	  }
	  while (count-- > 0) {
	    if (from in O) O[to] = O[from];else delete O[to];
	    to += inc;
	    from += inc;
	  }return O;
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(25)('unscopables'),
	    ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
	module.exports = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Array', { fill: __webpack_require__(188) });
	
	__webpack_require__(186)('fill');

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	
	var toObject = __webpack_require__(58),
	    toIndex = __webpack_require__(39),
	    toLength = __webpack_require__(37);
	module.exports = function fill(value /*, start = 0, end = @length */) {
	  var O = toObject(this),
	      length = toLength(O.length),
	      aLen = arguments.length,
	      index = toIndex(aLen > 1 ? arguments[1] : undefined, length),
	      end = aLen > 2 ? arguments[2] : undefined,
	      endPos = end === undefined ? length : toIndex(end, length);
	  while (endPos > index) {
	    O[index++] = value;
	  }return O;
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	
	var $export = __webpack_require__(8),
	    $find = __webpack_require__(172)(5),
	    KEY = 'find',
	    forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () {
	  forced = false;
	});
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn /*, that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(186)(KEY);

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	
	var $export = __webpack_require__(8),
	    $find = __webpack_require__(172)(6),
	    KEY = 'findIndex',
	    forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () {
	  forced = false;
	});
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn /*, that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(186)(KEY);

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(192)('Array');

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(4),
	    dP = __webpack_require__(11),
	    DESCRIPTORS = __webpack_require__(6),
	    SPECIES = __webpack_require__(25)('species');
	
	module.exports = function (KEY) {
	  var C = global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function get() {
	      return this;
	    }
	  });
	};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var addToUnscopables = __webpack_require__(186),
	    step = __webpack_require__(194),
	    Iterators = __webpack_require__(129),
	    toIObject = __webpack_require__(32);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(128)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0; // next index
	  this._k = kind; // kind
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      kind = this._k,
	      index = this._i++;
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

/***/ },
/* 194 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(4),
	    inheritIfRequired = __webpack_require__(88),
	    dP = __webpack_require__(11).f,
	    gOPN = __webpack_require__(50).f,
	    isRegExp = __webpack_require__(134),
	    $flags = __webpack_require__(196),
	    $RegExp = global.RegExp,
	    Base = $RegExp,
	    proto = $RegExp.prototype,
	    re1 = /a/g,
	    re2 = /a/g
	// "new" creates a new object, old webkit buggy here
	,
	    CORRECT_NEW = new $RegExp(re1) !== re1;
	
	if (__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(7)(function () {
	  re2[__webpack_require__(25)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))) {
	  $RegExp = function RegExp(p, f) {
	    var tiRE = this instanceof $RegExp,
	        piRE = isRegExp(p),
	        fiU = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function proxy(key) {
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function get() {
	        return Base[key];
	      },
	      set: function set(it) {
	        Base[key] = it;
	      }
	    });
	  };
	  for (var keys = gOPN(Base), i = 0; keys.length > i;) {
	    proxy(keys[i++]);
	  }proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(18)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(192)('RegExp');

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	
	var anObject = __webpack_require__(12);
	module.exports = function () {
	  var that = anObject(this),
	      result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(198);
	var anObject = __webpack_require__(12),
	    $flags = __webpack_require__(196),
	    DESCRIPTORS = __webpack_require__(6),
	    TO_STRING = 'toString',
	    $toString = /./[TO_STRING];
	
	var define = function define(fn) {
	  __webpack_require__(18)(RegExp.prototype, TO_STRING, fn, true);
	};
	
	// 21.2.5.14 RegExp.prototype.toString()
	if (__webpack_require__(7)(function () {
	  return $toString.call({ source: 'a', flags: 'b' }) != '/a/b';
	})) {
	  define(function toString() {
	    var R = anObject(this);
	    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	  // FF44- RegExp#toString has a wrong name
	} else if ($toString.name != TO_STRING) {
	  define(function toString() {
	    return $toString.call(this);
	  });
	}

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 21.2.5.3 get RegExp.prototype.flags()
	if (__webpack_require__(6) && /./g.flags != 'g') __webpack_require__(11).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(196)
	});

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// @@match logic
	__webpack_require__(200)('match', 1, function (defined, MATCH, $match) {
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp) {
	    'use strict';
	
	    var O = defined(this),
	        fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var hide = __webpack_require__(10),
	    redefine = __webpack_require__(18),
	    fails = __webpack_require__(7),
	    defined = __webpack_require__(35),
	    wks = __webpack_require__(25);
	
	module.exports = function (KEY, length, exec) {
	  var SYMBOL = wks(KEY),
	      fns = exec(defined, SYMBOL, ''[KEY]),
	      strfn = fns[0],
	      rxfn = fns[1];
	  if (fails(function () {
	    var O = {};
	    O[SYMBOL] = function () {
	      return 7;
	    };
	    return ''[KEY](O) != 7;
	  })) {
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	    // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	    ? function (string, arg) {
	      return rxfn.call(string, this, arg);
	    }
	    // 21.2.5.6 RegExp.prototype[@@match](string)
	    // 21.2.5.9 RegExp.prototype[@@search](string)
	    : function (string) {
	      return rxfn.call(string, this);
	    });
	  }
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// @@replace logic
	__webpack_require__(200)('replace', 2, function (defined, REPLACE, $replace) {
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue) {
	    'use strict';
	
	    var O = defined(this),
	        fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// @@search logic
	__webpack_require__(200)('search', 1, function (defined, SEARCH, $search) {
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp) {
	    'use strict';
	
	    var O = defined(this),
	        fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// @@split logic
	__webpack_require__(200)('split', 2, function (defined, SPLIT, $split) {
	  'use strict';
	
	  var isRegExp = __webpack_require__(134),
	      _split = $split,
	      $push = [].push,
	      $SPLIT = 'split',
	      LENGTH = 'length',
	      LAST_INDEX = 'lastIndex';
	  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function $split(separator, limit) {
	      var string = String(this);
	      if (separator === undefined && limit === 0) return [];
	      // If `separator` is not a regex, use native split
	      if (!isRegExp(separator)) return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while (match = separatorCopy.exec(string)) {
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if (lastIndex > lastLastIndex) {
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
	            for (i = 1; i < arguments[LENGTH] - 2; i++) {
	              if (arguments[i] === undefined) match[i] = undefined;
	            }
	          });
	          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if (output[LENGTH] >= splitLimit) break;
	        }
	        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if (lastLastIndex === string[LENGTH]) {
	        if (lastLength || !separatorCopy.test('')) output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	    // Chakra, V8
	  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
	    $split = function $split(separator, limit) {
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit) {
	    var O = defined(this),
	        fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(28),
	    global = __webpack_require__(4),
	    ctx = __webpack_require__(20),
	    classof = __webpack_require__(75),
	    $export = __webpack_require__(8),
	    isObject = __webpack_require__(13),
	    aFunction = __webpack_require__(21),
	    anInstance = __webpack_require__(205),
	    forOf = __webpack_require__(206),
	    speciesConstructor = __webpack_require__(207),
	    task = __webpack_require__(208).set,
	    microtask = __webpack_require__(209)(),
	    PROMISE = 'Promise',
	    TypeError = global.TypeError,
	    process = global.process,
	    $Promise = global[PROMISE],
	    process = global.process,
	    isNode = classof(process) == 'process',
	    empty = function empty() {/* empty */},
	    Internal,
	    GenericPromiseCapability,
	    Wrapper;
	
	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1),
	        FakePromise = (promise.constructor = {})[__webpack_require__(25)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) {/* empty */}
	}();
	
	// helpers
	var sameConstructor = function sameConstructor(a, b) {
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function isThenable(it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function newPromiseCapability(C) {
	  return sameConstructor($Promise, C) ? new PromiseCapability(C) : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function GenericPromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	};
	var perform = function perform(exec) {
	  try {
	    exec();
	  } catch (e) {
	    return { error: e };
	  }
	};
	var notify = function notify(promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v,
	        ok = promise._s == 1,
	        i = 0;
	    var run = function run(reaction) {
	      var handler = ok ? reaction.ok : reaction.fail,
	          resolve = reaction.resolve,
	          reject = reaction.reject,
	          domain = reaction.domain,
	          result,
	          then;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;else {
	            if (domain) domain.enter();
	            result = handler(value);
	            if (domain) domain.exit();
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        reject(e);
	      }
	    };
	    while (chain.length > i) {
	      run(chain[i++]);
	    } // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function onUnhandled(promise) {
	  task.call(global, function () {
	    var value = promise._v,
	        abrupt,
	        handler,
	        console;
	    if (isUnhandled(promise)) {
	      abrupt = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    }promise._a = undefined;
	    if (abrupt) throw abrupt.error;
	  });
	};
	var isUnhandled = function isUnhandled(promise) {
	  if (promise._h == 1) return false;
	  var chain = promise._a || promise._c,
	      i = 0,
	      reaction;
	  while (chain.length > i) {
	    reaction = chain[i++];
	    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
	  }return true;
	};
	var onHandleUnhandled = function onHandleUnhandled(promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function $reject(value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function $resolve(value) {
	  var promise = this,
	      then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};
	
	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor) {
	    this._c = []; // <- awaiting reactions
	    this._a = undefined; // <- checked in isUnhandled reactions
	    this._s = 0; // <- state
	    this._d = false; // <- done
	    this._v = undefined; // <- value
	    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false; // <- notify
	  };
	  Internal.prototype = __webpack_require__(210)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function _catch(onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function PromiseCapability() {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(24)($Promise, PROMISE);
	__webpack_require__(192)(PROMISE);
	Wrapper = __webpack_require__(9)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this),
	        $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
	    var capability = newPromiseCapability(this),
	        $$resolve = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(165)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this,
	        capability = newPromiseCapability(C),
	        resolve = capability.resolve,
	        reject = capability.reject;
	    var abrupt = perform(function () {
	      var values = [],
	          index = 0,
	          remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++,
	            alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this,
	        capability = newPromiseCapability(C),
	        reject = capability.reject;
	    var abrupt = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 205 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
	    throw TypeError(name + ': incorrect invocation!');
	  }return it;
	};

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(20),
	    call = __webpack_require__(161),
	    isArrayIter = __webpack_require__(162),
	    anObject = __webpack_require__(12),
	    toLength = __webpack_require__(37),
	    getIterFn = __webpack_require__(164),
	    BREAK = {},
	    RETURN = {};
	var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () {
	    return iterable;
	  } : getIterFn(iterable),
	      f = ctx(fn, that, entries ? 2 : 1),
	      index = 0,
	      length,
	      step,
	      iterator,
	      result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	_exports.BREAK = BREAK;
	_exports.RETURN = RETURN;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(12),
	    aFunction = __webpack_require__(21),
	    SPECIES = __webpack_require__(25)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor,
	      S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(20),
	    invoke = __webpack_require__(78),
	    html = __webpack_require__(48),
	    cel = __webpack_require__(15),
	    global = __webpack_require__(4),
	    process = global.process,
	    setTask = global.setImmediate,
	    clearTask = global.clearImmediate,
	    MessageChannel = global.MessageChannel,
	    counter = 0,
	    queue = {},
	    ONREADYSTATECHANGE = 'onreadystatechange',
	    defer,
	    channel,
	    port;
	var run = function run() {
	  var id = +this;
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function listener(event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [],
	        i = 1;
	    while (arguments.length > i) {
	      args.push(arguments[i++]);
	    }queue[++counter] = function () {
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(34)(process) == 'process') {
	    defer = function defer(id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	    // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	    // Browsers with postMessage, skip WebWorkers
	    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function defer(id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	    // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function defer(id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	    // Rest old browsers
	  } else {
	    defer = function defer(id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(4),
	    macrotask = __webpack_require__(208).set,
	    Observer = global.MutationObserver || global.WebKitMutationObserver,
	    process = global.process,
	    Promise = global.Promise,
	    isNode = __webpack_require__(34)(process) == 'process';
	
	module.exports = function () {
	  var head, last, notify;
	
	  var flush = function flush() {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();else last = undefined;
	        throw e;
	      }
	    }last = undefined;
	    if (parent) parent.enter();
	  };
	
	  // Node.js
	  if (isNode) {
	    notify = function notify() {
	      process.nextTick(flush);
	    };
	    // browsers with MutationObserver
	  } else if (Observer) {
	    var toggle = true,
	        node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function notify() {
	      node.data = toggle = !toggle;
	    };
	    // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    var promise = Promise.resolve();
	    notify = function notify() {
	      promise.then(flush);
	    };
	    // for other environments - macrotask based on:
	    // - setImmediate
	    // - MessageChannel
	    // - window.postMessag
	    // - onreadystatechange
	    // - setTimeout
	  } else {
	    notify = function notify() {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    }last = task;
	  };
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var redefine = __webpack_require__(18);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    redefine(target, key, src[key], safe);
	  }return target;
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var strong = __webpack_require__(212);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(213)('Map', function (get) {
	  return function Map() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key) {
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value) {
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(11).f,
	    create = __webpack_require__(46),
	    redefineAll = __webpack_require__(210),
	    ctx = __webpack_require__(20),
	    anInstance = __webpack_require__(205),
	    defined = __webpack_require__(35),
	    forOf = __webpack_require__(206),
	    $iterDefine = __webpack_require__(128),
	    step = __webpack_require__(194),
	    setSpecies = __webpack_require__(192),
	    DESCRIPTORS = __webpack_require__(6),
	    fastKey = __webpack_require__(22).fastKey,
	    SIZE = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function getEntry(that, key) {
	  // fast case
	  var index = fastKey(key),
	      entry;
	  if (index !== 'F') return that._i[index];
	  // frozen object case
	  for (entry = that._f; entry; entry = entry.n) {
	    if (entry.k == key) return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined; // first entry
	      that._l = undefined; // last entry
	      that[SIZE] = 0; // size
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        for (var that = this, data = that._i, entry = that._f; entry; entry = entry.n) {
	          entry.r = true;
	          if (entry.p) entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function _delete(key) {
	        var that = this,
	            entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.n,
	              prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if (prev) prev.n = next;
	          if (next) next.p = prev;
	          if (that._f == entry) that._f = next;
	          if (that._l == entry) that._l = prev;
	          that[SIZE]--;
	        }return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */) {
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3),
	            entry;
	        while (entry = entry ? entry.n : this._f) {
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while (entry && entry.r) {
	            entry = entry.p;
	          }
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(this, key);
	      }
	    });
	    if (DESCRIPTORS) dP(C.prototype, 'size', {
	      get: function get() {
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function def(that, key, value) {
	    var entry = getEntry(that, key),
	        prev,
	        index;
	    // change existing entry
	    if (entry) {
	      entry.v = value;
	      // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key, // <- key
	        v: value, // <- value
	        p: prev = that._l, // <- previous entry
	        n: undefined, // <- next entry
	        r: false // <- removed
	      };
	      if (!that._f) that._f = entry;
	      if (prev) prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if (index !== 'F') that._i[index] = entry;
	    }return that;
	  },
	  getEntry: getEntry,
	  setStrong: function setStrong(C, NAME, IS_MAP) {
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function (iterated, kind) {
	      this._t = iterated; // target
	      this._k = kind; // kind
	      this._l = undefined; // previous
	    }, function () {
	      var that = this,
	          kind = that._k,
	          entry = that._l;
	      // revert to the last existing entry
	      while (entry && entry.r) {
	        entry = entry.p;
	      } // get next entry
	      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if (kind == 'keys') return step(0, entry.k);
	      if (kind == 'values') return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(4),
	    $export = __webpack_require__(8),
	    redefine = __webpack_require__(18),
	    redefineAll = __webpack_require__(210),
	    meta = __webpack_require__(22),
	    forOf = __webpack_require__(206),
	    anInstance = __webpack_require__(205),
	    isObject = __webpack_require__(13),
	    fails = __webpack_require__(7),
	    $iterDetect = __webpack_require__(165),
	    setToStringTag = __webpack_require__(24),
	    inheritIfRequired = __webpack_require__(88);
	
	module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
	  var Base = global[NAME],
	      C = Base,
	      ADDER = IS_MAP ? 'set' : 'add',
	      proto = C && C.prototype,
	      O = {};
	  var fixMethod = function fixMethod(KEY) {
	    var fn = proto[KEY];
	    redefine(proto, KEY, KEY == 'delete' ? function (a) {
	      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	    } : KEY == 'has' ? function has(a) {
	      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	    } : KEY == 'get' ? function get(a) {
	      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	    } : KEY == 'add' ? function add(a) {
	      fn.call(this, a === 0 ? 0 : a);return this;
	    } : function set(a, b) {
	      fn.call(this, a === 0 ? 0 : a, b);return this;
	    });
	  };
	  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
	    new C().entries().next();
	  }))) {
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance = new C()
	    // early implementations not supports chaining
	    ,
	        HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	    ,
	        THROWS_ON_PRIMITIVES = fails(function () {
	      instance.has(1);
	    })
	    // most early implementations doesn't supports iterables, most modern - not close it correctly
	    ,
	        ACCEPT_ITERABLES = $iterDetect(function (iter) {
	      new C(iter);
	    }) // eslint-disable-line no-new
	    // for early implementations -0 and +0 not the same
	    ,
	        BUGGY_ZERO = !IS_WEAK && fails(function () {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      var $instance = new C(),
	          index = 5;
	      while (index--) {
	        $instance[ADDER](index, index);
	      }return !$instance.has(-0);
	    });
	    if (!ACCEPT_ITERABLES) {
	      C = wrapper(function (target, iterable) {
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base(), target, C);
	        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if (IS_WEAK && proto.clear) delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var strong = __webpack_require__(212);
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(213)('Set', function (get) {
	  return function Set() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value) {
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var each = __webpack_require__(172)(0),
	    redefine = __webpack_require__(18),
	    meta = __webpack_require__(22),
	    assign = __webpack_require__(69),
	    weak = __webpack_require__(216),
	    isObject = __webpack_require__(13),
	    getWeak = meta.getWeak,
	    isExtensible = Object.isExtensible,
	    uncaughtFrozenStore = weak.ufstore,
	    tmp = {},
	    InternalMap;
	
	var wrapper = function wrapper(get) {
	  return function WeakMap() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key) {
	    if (isObject(key)) {
	      var data = getWeak(key);
	      if (data === true) return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value) {
	    return weak.def(this, key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(213)('WeakMap', wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if (new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7) {
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function (key) {
	    var proto = $WeakMap.prototype,
	        method = proto[key];
	    redefine(proto, key, function (a, b) {
	      // store frozen objects on internal weakmap shim
	      if (isObject(a) && !isExtensible(a)) {
	        if (!this._f) this._f = new InternalMap();
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	        // store all the rest on native weakmap
	      }return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var redefineAll = __webpack_require__(210),
	    getWeak = __webpack_require__(22).getWeak,
	    anObject = __webpack_require__(12),
	    isObject = __webpack_require__(13),
	    anInstance = __webpack_require__(205),
	    forOf = __webpack_require__(206),
	    createArrayMethod = __webpack_require__(172),
	    $has = __webpack_require__(5),
	    arrayFind = createArrayMethod(5),
	    arrayFindIndex = createArrayMethod(6),
	    id = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
	  return that._l || (that._l = new UncaughtFrozenStore());
	};
	var UncaughtFrozenStore = function UncaughtFrozenStore() {
	  this.a = [];
	};
	var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
	  return arrayFind(store.a, function (it) {
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function get(key) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) return entry[1];
	  },
	  has: function has(key) {
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function set(key, value) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) entry[1] = value;else this.a.push([key, value]);
	  },
	  'delete': function _delete(key) {
	    var index = arrayFindIndex(this.a, function (it) {
	      return it[0] === key;
	    });
	    if (~index) this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._i = id++; // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function _delete(key) {
	        if (!isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key) {
	        if (!isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function def(that, key, value) {
	    var data = getWeak(anObject(key), true);
	    if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var weak = __webpack_require__(216);
	
	// 23.4 WeakSet Objects
	__webpack_require__(213)('WeakSet', function (get) {
	  return function WeakSet() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value) {
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    $typed = __webpack_require__(219),
	    buffer = __webpack_require__(220),
	    anObject = __webpack_require__(12),
	    toIndex = __webpack_require__(39),
	    toLength = __webpack_require__(37),
	    isObject = __webpack_require__(13),
	    ArrayBuffer = __webpack_require__(4).ArrayBuffer,
	    speciesConstructor = __webpack_require__(207),
	    $ArrayBuffer = buffer.ArrayBuffer,
	    $DataView = buffer.DataView,
	    $isView = $typed.ABV && ArrayBuffer.isView,
	    $slice = $ArrayBuffer.prototype.slice,
	    VIEW = $typed.VIEW,
	    ARRAY_BUFFER = 'ArrayBuffer';
	
	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });
	
	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it) {
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});
	
	$export($export.P + $export.U + $export.F * __webpack_require__(7)(function () {
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end) {
	    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
	    var len = anObject(this).byteLength,
	        first = toIndex(start, len),
	        final = toIndex(end === undefined ? len : end, len),
	        result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first)),
	        viewS = new $DataView(this),
	        viewT = new $DataView(result),
	        index = 0;
	    while (first < final) {
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    }return result;
	  }
	});
	
	__webpack_require__(192)(ARRAY_BUFFER);

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(4),
	    hide = __webpack_require__(10),
	    uid = __webpack_require__(19),
	    TYPED = uid('typed_array'),
	    VIEW = uid('view'),
	    ABV = !!(global.ArrayBuffer && global.DataView),
	    CONSTR = ABV,
	    i = 0,
	    l = 9,
	    Typed;
	
	var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');
	
	while (i < l) {
	  if (Typed = global[TypedArrayConstructors[i++]]) {
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}
	
	module.exports = {
	  ABV: ABV,
	  CONSTR: CONSTR,
	  TYPED: TYPED,
	  VIEW: VIEW
	};

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(4),
	    DESCRIPTORS = __webpack_require__(6),
	    LIBRARY = __webpack_require__(28),
	    $typed = __webpack_require__(219),
	    hide = __webpack_require__(10),
	    redefineAll = __webpack_require__(210),
	    fails = __webpack_require__(7),
	    anInstance = __webpack_require__(205),
	    toInteger = __webpack_require__(38),
	    toLength = __webpack_require__(37),
	    gOPN = __webpack_require__(50).f,
	    dP = __webpack_require__(11).f,
	    arrayFill = __webpack_require__(188),
	    setToStringTag = __webpack_require__(24),
	    ARRAY_BUFFER = 'ArrayBuffer',
	    DATA_VIEW = 'DataView',
	    PROTOTYPE = 'prototype',
	    WRONG_LENGTH = 'Wrong length!',
	    WRONG_INDEX = 'Wrong index!',
	    $ArrayBuffer = global[ARRAY_BUFFER],
	    $DataView = global[DATA_VIEW],
	    Math = global.Math,
	    RangeError = global.RangeError,
	    Infinity = global.Infinity,
	    BaseBuffer = $ArrayBuffer,
	    abs = Math.abs,
	    pow = Math.pow,
	    floor = Math.floor,
	    log = Math.log,
	    LN2 = Math.LN2,
	    BUFFER = 'buffer',
	    BYTE_LENGTH = 'byteLength',
	    BYTE_OFFSET = 'byteOffset',
	    $BUFFER = DESCRIPTORS ? '_b' : BUFFER,
	    $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH,
	    $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;
	
	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function packIEEE754(value, mLen, nBytes) {
	  var buffer = Array(nBytes),
	      eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0,
	      i = 0,
	      s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0,
	      e,
	      m,
	      c;
	  value = abs(value);
	  if (value != value || value === Infinity) {
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if (value * (c = pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }
	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {}
	  e = e << mLen | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {}
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function unpackIEEE754(buffer, mLen, nBytes) {
	  var eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      nBits = eLen - 7,
	      i = nBytes - 1,
	      s = buffer[i--],
	      e = s & 127,
	      m;
	  s >>= 7;
	  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {}
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {}
	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  }return (s ? -1 : 1) * m * pow(2, e - mLen);
	};
	
	var unpackI32 = function unpackI32(bytes) {
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function packI8(it) {
	  return [it & 0xff];
	};
	var packI16 = function packI16(it) {
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function packI32(it) {
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function packF64(it) {
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function packF32(it) {
	  return packIEEE754(it, 23, 4);
	};
	
	var addGetter = function addGetter(C, key, internal) {
	  dP(C[PROTOTYPE], key, { get: function get() {
	      return this[internal];
	    } });
	};
	
	var get = function get(view, bytes, index, isLittleEndian) {
	  var numIndex = +index,
	      intIndex = toInteger(numIndex);
	  if (numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b,
	      start = intIndex + view[$OFFSET],
	      pack = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function set(view, bytes, index, conversion, value, isLittleEndian) {
	  var numIndex = +index,
	      intIndex = toInteger(numIndex);
	  if (numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b,
	      start = intIndex + view[$OFFSET],
	      pack = conversion(+value);
	  for (var i = 0; i < bytes; i++) {
	    store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	  }
	};
	
	var validateArrayBufferArguments = function validateArrayBufferArguments(that, length) {
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length,
	      byteLength = toLength(numberLength);
	  if (numberLength != byteLength) throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};
	
	if (!$typed.ABV) {
	  $ArrayBuffer = function ArrayBuffer(length) {
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };
	
	  $DataView = function DataView(buffer, byteOffset, byteLength) {
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH],
	        offset = toInteger(byteOffset);
	    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };
	
	  if (DESCRIPTORS) {
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }
	
	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset) {
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset) {
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */) {
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */) {
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */) {
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */) {
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if (!fails(function () {
	    new $ArrayBuffer(); // eslint-disable-line no-new
	  }) || !fails(function () {
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })) {
	    $ArrayBuffer = function ArrayBuffer(length) {
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
	      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2)),
	      $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8);
	$export($export.G + $export.W + $export.F * !__webpack_require__(219).ABV, {
	  DataView: __webpack_require__(220).DataView
	});

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(223)('Int8', 1, function (init) {
	  return function Int8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	if (__webpack_require__(6)) {
	  var LIBRARY = __webpack_require__(28),
	      global = __webpack_require__(4),
	      fails = __webpack_require__(7),
	      $export = __webpack_require__(8),
	      $typed = __webpack_require__(219),
	      $buffer = __webpack_require__(220),
	      ctx = __webpack_require__(20),
	      anInstance = __webpack_require__(205),
	      propertyDesc = __webpack_require__(17),
	      hide = __webpack_require__(10),
	      redefineAll = __webpack_require__(210),
	      toInteger = __webpack_require__(38),
	      toLength = __webpack_require__(37),
	      toIndex = __webpack_require__(39),
	      toPrimitive = __webpack_require__(16),
	      has = __webpack_require__(5),
	      same = __webpack_require__(71),
	      classof = __webpack_require__(75),
	      isObject = __webpack_require__(13),
	      toObject = __webpack_require__(58),
	      isArrayIter = __webpack_require__(162),
	      create = __webpack_require__(46),
	      getPrototypeOf = __webpack_require__(59),
	      gOPN = __webpack_require__(50).f,
	      getIterFn = __webpack_require__(164),
	      uid = __webpack_require__(19),
	      wks = __webpack_require__(25),
	      createArrayMethod = __webpack_require__(172),
	      createArrayIncludes = __webpack_require__(36),
	      speciesConstructor = __webpack_require__(207),
	      ArrayIterators = __webpack_require__(193),
	      Iterators = __webpack_require__(129),
	      $iterDetect = __webpack_require__(165),
	      setSpecies = __webpack_require__(192),
	      arrayFill = __webpack_require__(188),
	      arrayCopyWithin = __webpack_require__(185),
	      $DP = __webpack_require__(11),
	      $GOPD = __webpack_require__(51),
	      dP = $DP.f,
	      gOPD = $GOPD.f,
	      RangeError = global.RangeError,
	      TypeError = global.TypeError,
	      Uint8Array = global.Uint8Array,
	      ARRAY_BUFFER = 'ArrayBuffer',
	      SHARED_BUFFER = 'Shared' + ARRAY_BUFFER,
	      BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT',
	      PROTOTYPE = 'prototype',
	      ArrayProto = Array[PROTOTYPE],
	      $ArrayBuffer = $buffer.ArrayBuffer,
	      $DataView = $buffer.DataView,
	      arrayForEach = createArrayMethod(0),
	      arrayFilter = createArrayMethod(2),
	      arraySome = createArrayMethod(3),
	      arrayEvery = createArrayMethod(4),
	      arrayFind = createArrayMethod(5),
	      arrayFindIndex = createArrayMethod(6),
	      arrayIncludes = createArrayIncludes(true),
	      arrayIndexOf = createArrayIncludes(false),
	      arrayValues = ArrayIterators.values,
	      arrayKeys = ArrayIterators.keys,
	      arrayEntries = ArrayIterators.entries,
	      arrayLastIndexOf = ArrayProto.lastIndexOf,
	      arrayReduce = ArrayProto.reduce,
	      arrayReduceRight = ArrayProto.reduceRight,
	      arrayJoin = ArrayProto.join,
	      arraySort = ArrayProto.sort,
	      arraySlice = ArrayProto.slice,
	      arrayToString = ArrayProto.toString,
	      arrayToLocaleString = ArrayProto.toLocaleString,
	      ITERATOR = wks('iterator'),
	      TAG = wks('toStringTag'),
	      TYPED_CONSTRUCTOR = uid('typed_constructor'),
	      DEF_CONSTRUCTOR = uid('def_constructor'),
	      ALL_CONSTRUCTORS = $typed.CONSTR,
	      TYPED_ARRAY = $typed.TYPED,
	      VIEW = $typed.VIEW,
	      WRONG_LENGTH = 'Wrong length!';
	
	  var $map = createArrayMethod(1, function (O, length) {
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });
	
	  var LITTLE_ENDIAN = fails(function () {
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });
	
	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
	    new Uint8Array(1).set({});
	  });
	
	  var strictToLength = function strictToLength(it, SAME) {
	    if (it === undefined) throw TypeError(WRONG_LENGTH);
	    var number = +it,
	        length = toLength(it);
	    if (SAME && !same(number, length)) throw RangeError(WRONG_LENGTH);
	    return length;
	  };
	
	  var toOffset = function toOffset(it, BYTES) {
	    var offset = toInteger(it);
	    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
	    return offset;
	  };
	
	  var validate = function validate(it) {
	    if (isObject(it) && TYPED_ARRAY in it) return it;
	    throw TypeError(it + ' is not a typed array!');
	  };
	
	  var allocate = function allocate(C, length) {
	    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
	      throw TypeError('It is not a typed array constructor!');
	    }return new C(length);
	  };
	
	  var speciesFromList = function speciesFromList(O, list) {
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };
	
	  var fromList = function fromList(C, list) {
	    var index = 0,
	        length = list.length,
	        result = allocate(C, length);
	    while (length > index) {
	      result[index] = list[index++];
	    }return result;
	  };
	
	  var addGetter = function addGetter(it, key, internal) {
	    dP(it, key, { get: function get() {
	        return this._d[internal];
	      } });
	  };
	
	  var $from = function from(source /*, mapfn, thisArg */) {
	    var O = toObject(source),
	        aLen = arguments.length,
	        mapfn = aLen > 1 ? arguments[1] : undefined,
	        mapping = mapfn !== undefined,
	        iterFn = getIterFn(O),
	        i,
	        length,
	        values,
	        result,
	        step,
	        iterator;
	    if (iterFn != undefined && !isArrayIter(iterFn)) {
	      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
	        values.push(step.value);
	      }O = values;
	    }
	    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
	    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };
	
	  var $of = function of() /*...items*/{
	    var index = 0,
	        length = arguments.length,
	        result = allocate(this, length);
	    while (length > index) {
	      result[index] = arguments[index++];
	    }return result;
	  };
	
	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
	    arrayToLocaleString.call(new Uint8Array(1));
	  });
	
	  var $toLocaleString = function toLocaleString() {
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };
	
	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */) {
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */) {
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */) {
	      // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */) {
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */) {
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */) {
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */) {
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */) {
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */) {
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator) {
	      // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */) {
	      // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */) {
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */) {
	      // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */) {
	      // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse() {
	      var that = this,
	          length = validate(that).length,
	          middle = Math.floor(length / 2),
	          index = 0,
	          value;
	      while (index < middle) {
	        value = that[index];
	        that[index++] = that[--length];
	        that[length] = value;
	      }return that;
	    },
	    some: function some(callbackfn /*, thisArg */) {
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn) {
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end) {
	      var O = validate(this),
	          length = O.length,
	          $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toIndex(end, length)) - $begin));
	    }
	  };
	
	  var $slice = function slice(start, end) {
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };
	
	  var $set = function set(arrayLike /*, offset */) {
	    validate(this);
	    var offset = toOffset(arguments[1], 1),
	        length = this.length,
	        src = toObject(arrayLike),
	        len = toLength(src.length),
	        index = 0;
	    if (len + offset > length) throw RangeError(WRONG_LENGTH);
	    while (index < len) {
	      this[offset + index] = src[index++];
	    }
	  };
	
	  var $iterators = {
	    entries: function entries() {
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys() {
	      return arrayKeys.call(validate(this));
	    },
	    values: function values() {
	      return arrayValues.call(validate(this));
	    }
	  };
	
	  var isTAIndex = function isTAIndex(target, key) {
	    return isObject(target) && target[TYPED_ARRAY] && (typeof key === 'undefined' ? 'undefined' : _typeof(key)) != 'symbol' && key in target && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key) {
	    return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc) {
	    if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set')
	    // TODO: add validation descriptor w/o calling accessors
	    && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };
	
	  if (!ALL_CONSTRUCTORS) {
	    $GOPD.f = $getDesc;
	    $DP.f = $setDesc;
	  }
	
	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty: $setDesc
	  });
	
	  if (fails(function () {
	    arrayToString.call({});
	  })) {
	    arrayToString = arrayToLocaleString = function toString() {
	      return arrayJoin.call(this);
	    };
	  }
	
	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice: $slice,
	    set: $set,
	    constructor: function constructor() {/* noop */},
	    toString: arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function get() {
	      return this[TYPED_ARRAY];
	    }
	  });
	
	  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
	    CLAMPED = !!CLAMPED;
	    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array',
	        ISNT_UINT8 = NAME != 'Uint8Array',
	        GETTER = 'get' + KEY,
	        SETTER = 'set' + KEY,
	        TypedArray = global[NAME],
	        Base = TypedArray || {},
	        TAC = TypedArray && getPrototypeOf(TypedArray),
	        FORCED = !TypedArray || !$typed.ABV,
	        O = {},
	        TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function getter(that, index) {
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function setter(that, index, value) {
	      var data = that._d;
	      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function addElement(that, index) {
	      dP(that, index, {
	        get: function get() {
	          return getter(this, index);
	        },
	        set: function set(value) {
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if (FORCED) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME, '_d');
	        var index = 0,
	            offset = 0,
	            buffer,
	            byteLength,
	            length,
	            klass;
	        if (!isObject(data)) {
	          length = strictToLength(data, true);
	          byteLength = length * BYTES;
	          buffer = new $ArrayBuffer(byteLength);
	        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if ($length === undefined) {
	            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if (TYPED_ARRAY in data) {
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while (index < length) {
	          addElement(that, index++);
	        }
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if (!$iterDetect(function (iter) {
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if (!isObject(data)) return new Base(strictToLength(data, ISNT_UINT8));
	        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
	        }
	        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
	        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator = TypedArrayPrototype[ITERATOR],
	        CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined),
	        $iterator = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
	
	    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
	      dP(TypedArrayPrototype, TAG, {
	        get: function get() {
	          return NAME;
	        }
	      });
	    }
	
	    O[NAME] = TypedArray;
	
	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
	
	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });
	
	    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
	
	    $export($export.P, NAME, proto);
	
	    setSpecies(NAME);
	
	    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });
	
	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
	
	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, { toString: arrayToString });
	
	    $export($export.P + $export.F * fails(function () {
	      new TypedArray(1).slice();
	    }), NAME, { slice: $slice });
	
	    $export($export.P + $export.F * (fails(function () {
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
	    }) || !fails(function () {
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, { toLocaleString: $toLocaleString });
	
	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function () {/* empty */};

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(223)('Uint8', 1, function (init) {
	  return function Uint8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(223)('Uint8', 1, function (init) {
	  return function Uint8ClampedArray(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(223)('Int16', 2, function (init) {
	  return function Int16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(223)('Uint16', 2, function (init) {
	  return function Uint16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(223)('Int32', 4, function (init) {
	  return function Int32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(223)('Uint32', 4, function (init) {
	  return function Uint32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(223)('Float32', 4, function (init) {
	  return function Float32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(223)('Float64', 8, function (init) {
	  return function Float64Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(8),
	    aFunction = __webpack_require__(21),
	    anObject = __webpack_require__(12),
	    rApply = (__webpack_require__(4).Reflect || {}).apply,
	    fApply = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(7)(function () {
	  rApply(function () {});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList) {
	    var T = aFunction(target),
	        L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export = __webpack_require__(8),
	    create = __webpack_require__(46),
	    aFunction = __webpack_require__(21),
	    anObject = __webpack_require__(12),
	    isObject = __webpack_require__(13),
	    fails = __webpack_require__(7),
	    bind = __webpack_require__(77),
	    rConstruct = (__webpack_require__(4).Reflect || {}).construct;
	
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function () {
	  function F() {}
	  return !(rConstruct(function () {}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function () {
	  rConstruct(function () {});
	});
	
	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/) {
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
	    if (Target == newTarget) {
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch (args.length) {
	        case 0:
	          return new Target();
	        case 1:
	          return new Target(args[0]);
	        case 2:
	          return new Target(args[0], args[1]);
	        case 3:
	          return new Target(args[0], args[1], args[2]);
	        case 4:
	          return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args))();
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto = newTarget.prototype,
	        instance = create(isObject(proto) ? proto : Object.prototype),
	        result = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP = __webpack_require__(11),
	    $export = __webpack_require__(8),
	    anObject = __webpack_require__(12),
	    toPrimitive = __webpack_require__(16);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(7)(function () {
	  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes) {
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export = __webpack_require__(8),
	    gOPD = __webpack_require__(51).f,
	    anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey) {
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	
	var $export = __webpack_require__(8),
	    anObject = __webpack_require__(12);
	var Enumerate = function Enumerate(iterated) {
	  this._t = anObject(iterated); // target
	  this._i = 0; // next index
	  var keys = this._k = [] // keys
	  ,
	      key;
	  for (key in iterated) {
	    keys.push(key);
	  }
	};
	__webpack_require__(130)(Enumerate, 'Object', function () {
	  var that = this,
	      keys = that._k,
	      key;
	  do {
	    if (that._i >= keys.length) return { value: undefined, done: true };
	  } while (!((key = keys[that._i++]) in that._t));
	  return { value: key, done: false };
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target) {
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD = __webpack_require__(51),
	    getPrototypeOf = __webpack_require__(59),
	    has = __webpack_require__(5),
	    $export = __webpack_require__(8),
	    isObject = __webpack_require__(13),
	    anObject = __webpack_require__(12);
	
	function get(target, propertyKey /*, receiver*/) {
	  var receiver = arguments.length < 3 ? target : arguments[2],
	      desc,
	      proto;
	  if (anObject(target) === receiver) return target[propertyKey];
	  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
	  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', { get: get });

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD = __webpack_require__(51),
	    $export = __webpack_require__(8),
	    anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export = __webpack_require__(8),
	    getProto = __webpack_require__(59),
	    anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target) {
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey) {
	    return propertyKey in target;
	  }
	});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.10 Reflect.isExtensible(target)
	var $export = __webpack_require__(8),
	    anObject = __webpack_require__(12),
	    $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target) {
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Reflect', { ownKeys: __webpack_require__(243) });

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// all object keys, includes non-enumerable and symbols
	var gOPN = __webpack_require__(50),
	    gOPS = __webpack_require__(43),
	    anObject = __webpack_require__(12),
	    Reflect = __webpack_require__(4).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
	  var keys = gOPN.f(anObject(it)),
	      getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.12 Reflect.preventExtensions(target)
	var $export = __webpack_require__(8),
	    anObject = __webpack_require__(12),
	    $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target) {
	    anObject(target);
	    try {
	      if ($preventExtensions) $preventExtensions(target);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP = __webpack_require__(11),
	    gOPD = __webpack_require__(51),
	    getPrototypeOf = __webpack_require__(59),
	    has = __webpack_require__(5),
	    $export = __webpack_require__(8),
	    createDesc = __webpack_require__(17),
	    anObject = __webpack_require__(12),
	    isObject = __webpack_require__(13);
	
	function set(target, propertyKey, V /*, receiver*/) {
	  var receiver = arguments.length < 4 ? target : arguments[3],
	      ownDesc = gOPD.f(anObject(target), propertyKey),
	      existingDescriptor,
	      proto;
	  if (!ownDesc) {
	    if (isObject(proto = getPrototypeOf(target))) {
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if (has(ownDesc, 'value')) {
	    if (ownDesc.writable === false || !isObject(receiver)) return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', { set: set });

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export = __webpack_require__(8),
	    setProto = __webpack_require__(73);
	
	if (setProto) $export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto) {
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	
	var $export = __webpack_require__(8),
	    $includes = __webpack_require__(36)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(186)('includes');

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	
	var $export = __webpack_require__(8),
	    $at = __webpack_require__(127)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos) {
	    return $at(this, pos);
	  }
	});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	
	var $export = __webpack_require__(8),
	    $pad = __webpack_require__(250);
	
	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(37),
	    repeat = __webpack_require__(91),
	    defined = __webpack_require__(35);
	
	module.exports = function (that, maxLength, fillString, left) {
	  var S = String(defined(that)),
	      stringLength = S.length,
	      fillStr = fillString === undefined ? ' ' : String(fillString),
	      intMaxLength = toLength(maxLength);
	  if (intMaxLength <= stringLength || fillStr == '') return S;
	  var fillLen = intMaxLength - stringLength,
	      stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	
	var $export = __webpack_require__(8),
	    $pad = __webpack_require__(250);
	
	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	
	__webpack_require__(83)('trimLeft', function ($trim) {
	  return function trimLeft() {
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	
	__webpack_require__(83)('trimRight', function ($trim) {
	  return function trimRight() {
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	
	var $export = __webpack_require__(8),
	    defined = __webpack_require__(35),
	    toLength = __webpack_require__(37),
	    isRegExp = __webpack_require__(134),
	    getFlags = __webpack_require__(196),
	    RegExpProto = RegExp.prototype;
	
	var $RegExpStringIterator = function $RegExpStringIterator(regexp, string) {
	  this._r = regexp;
	  this._s = string;
	};
	
	__webpack_require__(130)($RegExpStringIterator, 'RegExp String', function next() {
	  var match = this._r.exec(this._s);
	  return { value: match, done: match === null };
	});
	
	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp) {
	    defined(this);
	    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
	    var S = String(this),
	        flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp),
	        rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(27)('asyncIterator');

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(27)('observable');

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export = __webpack_require__(8),
	    ownKeys = __webpack_require__(243),
	    toIObject = __webpack_require__(32),
	    gOPD = __webpack_require__(51),
	    createProperty = __webpack_require__(163);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIObject(object),
	        getDesc = gOPD.f,
	        keys = ownKeys(O),
	        result = {},
	        i = 0,
	        key;
	    while (keys.length > i) {
	      createProperty(result, key = keys[i++], getDesc(O, key));
	    }return result;
	  }
	});

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8),
	    $values = __webpack_require__(259)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it) {
	    return $values(it);
	  }
	});

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getKeys = __webpack_require__(30),
	    toIObject = __webpack_require__(32),
	    isEnum = __webpack_require__(44).f;
	module.exports = function (isEntries) {
	  return function (it) {
	    var O = toIObject(it),
	        keys = getKeys(O),
	        length = keys.length,
	        i = 0,
	        result = [],
	        key;
	    while (length > i) {
	      if (isEnum.call(O, key = keys[i++])) {
	        result.push(isEntries ? [key, O[key]] : O[key]);
	      }
	    }return result;
	  };
	};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8),
	    $entries = __webpack_require__(259)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it) {
	    return $entries(it);
	  }
	});

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    toObject = __webpack_require__(58),
	    aFunction = __webpack_require__(21),
	    $defineProperty = __webpack_require__(11);
	
	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter) {
	    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
	  }
	});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(28) || !__webpack_require__(7)(function () {
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function () {/* empty */});
	  delete __webpack_require__(4)[K];
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    toObject = __webpack_require__(58),
	    aFunction = __webpack_require__(21),
	    $defineProperty = __webpack_require__(11);
	
	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter) {
	    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
	  }
	});

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    toObject = __webpack_require__(58),
	    toPrimitive = __webpack_require__(16),
	    getPrototypeOf = __webpack_require__(59),
	    getOwnPropertyDescriptor = __webpack_require__(51).f;
	
	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P) {
	    var O = toObject(this),
	        K = toPrimitive(P, true),
	        D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
	    } while (O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    toObject = __webpack_require__(58),
	    toPrimitive = __webpack_require__(16),
	    getPrototypeOf = __webpack_require__(59),
	    getOwnPropertyDescriptor = __webpack_require__(51).f;
	
	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P) {
	    var O = toObject(this),
	        K = toPrimitive(P, true),
	        D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
	    } while (O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(8);
	
	$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(267)('Map') });

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(75),
	    from = __webpack_require__(268);
	module.exports = function (NAME) {
	  return function toJSON() {
	    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var forOf = __webpack_require__(206);
	
	module.exports = function (iter, ITERATOR) {
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(8);
	
	$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(267)('Set') });

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(8);
	
	$export($export.S, 'System', { global: __webpack_require__(4) });

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(8),
	    cof = __webpack_require__(34);
	
	$export($export.S, 'Error', {
	  isError: function isError(it) {
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0,
	        $x1 = x1 >>> 0,
	        $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0,
	        $x1 = x1 >>> 0,
	        $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  imulh: function imulh(u, v) {
	    var UINT16 = 0xffff,
	        $u = +u,
	        $v = +v,
	        u0 = $u & UINT16,
	        v0 = $v & UINT16,
	        u1 = $u >> 16,
	        v1 = $v >> 16,
	        t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  umulh: function umulh(u, v) {
	    var UINT16 = 0xffff,
	        $u = +u,
	        $v = +v,
	        u0 = $u & UINT16,
	        v0 = $v & UINT16,
	        u1 = $u >>> 16,
	        v1 = $v >>> 16,
	        t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(277),
	    anObject = __webpack_require__(12),
	    toMetaKey = metadata.key,
	    ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
	    ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	  } });

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var Map = __webpack_require__(211),
	    $export = __webpack_require__(8),
	    shared = __webpack_require__(23)('metadata'),
	    store = shared.store || (shared.store = new (__webpack_require__(215))());
	
	var getOrCreateMetadataMap = function getOrCreateMetadataMap(target, targetKey, create) {
	  var targetMetadata = store.get(target);
	  if (!targetMetadata) {
	    if (!create) return undefined;
	    store.set(target, targetMetadata = new Map());
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if (!keyMetadata) {
	    if (!create) return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map());
	  }return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function ordinaryHasOwnMetadata(MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function ordinaryGetOwnMetadata(MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function ordinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function ordinaryOwnMetadataKeys(target, targetKey) {
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false),
	      keys = [];
	  if (metadataMap) metadataMap.forEach(function (_, key) {
	    keys.push(key);
	  });
	  return keys;
	};
	var toMetaKey = function toMetaKey(it) {
	  return it === undefined || (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : String(it);
	};
	var exp = function exp(O) {
	  $export($export.S, 'Reflect', O);
	};
	
	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(277),
	    anObject = __webpack_require__(12),
	    toMetaKey = metadata.key,
	    getOrCreateMetadataMap = metadata.map,
	    store = metadata.store;
	
	metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */) {
	    var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]),
	        metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	    if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
	    if (metadataMap.size) return true;
	    var targetMetadata = store.get(target);
	    targetMetadata['delete'](targetKey);
	    return !!targetMetadata.size || store['delete'](target);
	  } });

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(277),
	    anObject = __webpack_require__(12),
	    getPrototypeOf = __webpack_require__(59),
	    ordinaryHasOwnMetadata = metadata.has,
	    ordinaryGetOwnMetadata = metadata.get,
	    toMetaKey = metadata.key;
	
	var ordinaryGetMetadata = function ordinaryGetMetadata(MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};
	
	metadata.exp({ getMetadata: function getMetadata(metadataKey, target /*, targetKey */) {
	    return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	  } });

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Set = __webpack_require__(214),
	    from = __webpack_require__(268),
	    metadata = __webpack_require__(277),
	    anObject = __webpack_require__(12),
	    getPrototypeOf = __webpack_require__(59),
	    ordinaryOwnMetadataKeys = metadata.keys,
	    toMetaKey = metadata.key;
	
	var ordinaryMetadataKeys = function ordinaryMetadataKeys(O, P) {
	  var oKeys = ordinaryOwnMetadataKeys(O, P),
	      parent = getPrototypeOf(O);
	  if (parent === null) return oKeys;
	  var pKeys = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};
	
	metadata.exp({ getMetadataKeys: function getMetadataKeys(target /*, targetKey */) {
	    return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	  } });

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(277),
	    anObject = __webpack_require__(12),
	    ordinaryGetOwnMetadata = metadata.get,
	    toMetaKey = metadata.key;
	
	metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */) {
	    return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	  } });

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(277),
	    anObject = __webpack_require__(12),
	    ordinaryOwnMetadataKeys = metadata.keys,
	    toMetaKey = metadata.key;
	
	metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */) {
	    return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	  } });

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(277),
	    anObject = __webpack_require__(12),
	    getPrototypeOf = __webpack_require__(59),
	    ordinaryHasOwnMetadata = metadata.has,
	    toMetaKey = metadata.key;
	
	var ordinaryHasMetadata = function ordinaryHasMetadata(MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};
	
	metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */) {
	    return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	  } });

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(277),
	    anObject = __webpack_require__(12),
	    ordinaryHasOwnMetadata = metadata.has,
	    toMetaKey = metadata.key;
	
	metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */) {
	    return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	  } });

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(277),
	    anObject = __webpack_require__(12),
	    aFunction = __webpack_require__(21),
	    toMetaKey = metadata.key,
	    ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
	    return function decorator(target, targetKey) {
	      ordinaryDefineOwnMetadata(metadataKey, metadataValue, (targetKey !== undefined ? anObject : aFunction)(target), toMetaKey(targetKey));
	    };
	  } });

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export = __webpack_require__(8),
	    microtask = __webpack_require__(209)(),
	    process = __webpack_require__(4).process,
	    isNode = __webpack_require__(34)(process) == 'process';
	
	$export($export.G, {
	  asap: function asap(fn) {
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	
	var $export = __webpack_require__(8),
	    global = __webpack_require__(4),
	    core = __webpack_require__(9),
	    microtask = __webpack_require__(209)(),
	    OBSERVABLE = __webpack_require__(25)('observable'),
	    aFunction = __webpack_require__(21),
	    anObject = __webpack_require__(12),
	    anInstance = __webpack_require__(205),
	    redefineAll = __webpack_require__(210),
	    hide = __webpack_require__(10),
	    forOf = __webpack_require__(206),
	    RETURN = forOf.RETURN;
	
	var getMethod = function getMethod(fn) {
	  return fn == null ? undefined : aFunction(fn);
	};
	
	var cleanupSubscription = function cleanupSubscription(subscription) {
	  var cleanup = subscription._c;
	  if (cleanup) {
	    subscription._c = undefined;
	    cleanup();
	  }
	};
	
	var subscriptionClosed = function subscriptionClosed(subscription) {
	  return subscription._o === undefined;
	};
	
	var closeSubscription = function closeSubscription(subscription) {
	  if (!subscriptionClosed(subscription)) {
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};
	
	var Subscription = function Subscription(observer, subscriber) {
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup = subscriber(observer),
	        subscription = cleanup;
	    if (cleanup != null) {
	      if (typeof cleanup.unsubscribe === 'function') cleanup = function cleanup() {
	        subscription.unsubscribe();
	      };else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch (e) {
	    observer.error(e);
	    return;
	  }if (subscriptionClosed(this)) cleanupSubscription(this);
	};
	
	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe() {
	    closeSubscription(this);
	  }
	});
	
	var SubscriptionObserver = function SubscriptionObserver(subscription) {
	  this._s = subscription;
	};
	
	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value) {
	    var subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if (m) return m.call(observer, value);
	      } catch (e) {
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value) {
	    var subscription = this._s;
	    if (subscriptionClosed(subscription)) throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if (!m) throw value;
	      value = m.call(observer, value);
	    } catch (e) {
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    }cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value) {
	    var subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch (e) {
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});
	
	var $Observable = function Observable(subscriber) {
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};
	
	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer) {
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn) {
	    var that = this;
	    return new (core.Promise || global.Promise)(function (resolve, reject) {
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next: function next(value) {
	          try {
	            return fn(value);
	          } catch (e) {
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});
	
	redefineAll($Observable, {
	  from: function from(x) {
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if (method) {
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function (observer) {
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function (observer) {
	      var done = false;
	      microtask(function () {
	        if (!done) {
	          try {
	            if (forOf(x, false, function (it) {
	              observer.next(it);
	              if (done) return RETURN;
	            }) === RETURN) return;
	          } catch (e) {
	            if (done) throw e;
	            observer.error(e);
	            return;
	          }observer.complete();
	        }
	      });
	      return function () {
	        done = true;
	      };
	    });
	  },
	  of: function of() {
	    for (var i = 0, l = arguments.length, items = Array(l); i < l;) {
	      items[i] = arguments[i++];
	    }return new (typeof this === 'function' ? this : $Observable)(function (observer) {
	      var done = false;
	      microtask(function () {
	        if (!done) {
	          for (var i = 0; i < items.length; ++i) {
	            observer.next(items[i]);
	            if (done) return;
	          }observer.complete();
	        }
	      });
	      return function () {
	        done = true;
	      };
	    });
	  }
	});
	
	hide($Observable.prototype, OBSERVABLE, function () {
	  return this;
	});
	
	$export($export.G, { Observable: $Observable });
	
	__webpack_require__(192)('Observable');

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// ie9- setTimeout & setInterval additional parameters fix
	var global = __webpack_require__(4),
	    $export = __webpack_require__(8),
	    invoke = __webpack_require__(78),
	    partial = __webpack_require__(289),
	    navigator = global.navigator,
	    MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function wrap(set) {
	  return MSIE ? function (fn, time /*, ...args */) {
	    return set(invoke(partial, [].slice.call(arguments, 2), typeof fn == 'function' ? fn : Function(fn)), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout: wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var path = __webpack_require__(290),
	    invoke = __webpack_require__(78),
	    aFunction = __webpack_require__(21);
	module.exports = function () /* ...pargs */{
	  var fn = aFunction(this),
	      length = arguments.length,
	      pargs = Array(length),
	      i = 0,
	      _ = path._,
	      holder = false;
	  while (length > i) {
	    if ((pargs[i] = arguments[i++]) === _) holder = true;
	  }return function () /* ...args */{
	    var that = this,
	        aLen = arguments.length,
	        j = 0,
	        k = 0,
	        args;
	    if (!holder && !aLen) return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if (holder) for (; length > j; j++) {
	      if (args[j] === _) args[j] = arguments[k++];
	    }while (aLen > k) {
	      args.push(arguments[k++]);
	    }return invoke(fn, args, that);
	  };
	};

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(4);

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(8),
	    $task = __webpack_require__(208);
	$export($export.G + $export.B, {
	  setImmediate: $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $iterators = __webpack_require__(193),
	    redefine = __webpack_require__(18),
	    global = __webpack_require__(4),
	    hide = __webpack_require__(10),
	    Iterators = __webpack_require__(129),
	    wks = __webpack_require__(25),
	    ITERATOR = wks('iterator'),
	    TO_STRING_TAG = wks('toStringTag'),
	    ArrayValues = Iterators.Array;
	
	for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
	  var NAME = collections[i],
	      Collection = global[NAME],
	      proto = Collection && Collection.prototype,
	      key;
	  if (proto) {
	    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
	    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for (key in $iterators) {
	      if (!proto[key]) redefine(proto, key, $iterators[key], true);
	    }
	  }
	}

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module, process) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!function (global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = ( false ? "undefined" : _typeof(module)) === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      prototype[method] = function (arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };
	
	  runtime.mark = function (genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function (arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function (value) {
	            invoke("next", value, resolve, reject);
	          }, function (err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function (unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if ((typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function (resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	      // If enqueue has been called before, then we want to wait until
	      // all previous Promises have been resolved before calling invoke,
	      // so that results are always delivered in the correct order. If
	      // enqueue has not been called before, then it is important to
	      // call invoke immediately, without waiting on a callback to fire,
	      // so that the async generator function has the opportunity to do
	      // any necessary setup in a predictable way. This predictability
	      // is why the Promise constructor synchronously invokes its
	      // executor callback, and why async functions synchronously
	      // execute code before the first await. Since we implement simple
	      // async functions in terms of async generators, it is especially
	      // important to get this right, even though it requires care.
	      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
	      // Avoid propagating failures to Promises returned by later
	      // invocations of the iterator.
	      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
	
	    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function () {
	    return this;
	  };
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function () {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function (object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1,
	            next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function reset(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function stop() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function complete(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" || record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	}(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	(typeof global === "undefined" ? "undefined" : _typeof(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(294)(module), __webpack_require__(295)))

/***/ },
/* 294 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 295 */
/***/ function(module, exports) {

	'use strict';
	
	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(297);
	module.exports = __webpack_require__(9).RegExp.escape;

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(8),
	    $re = __webpack_require__(298)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', { escape: function escape(it) {
	    return $re(it);
	  } });

/***/ },
/* 298 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (regExp, replace) {
	  var replacer = replace === Object(replace) ? function (part) {
	    return replace[part];
	  } : replace;
	  return function (it) {
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/**
	 * Exports the InstantLink class
	 * @module instant-link
	 */
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Cache = __webpack_require__(300);
	
	var init = __webpack_require__(323);
	var handler = __webpack_require__(324);
	var fetchPage = __webpack_require__(325);
	var replacePage = __webpack_require__(326);
	
	var InstantLink =
	/**
	 * Creates a new InstantLink instance
	 * @param {object} options
	 * @param {boolean} [options.cache=true] - Enable/disable caching
	 * @param {boolean} [options.compress=false] - Enable/disable compression
	 * @param {string}  [options.event=onmouseover] - Event handler for triggering preload
	 * @param {boolean} [options.comment=true] - If enabled, script tags with 'no-instant' data attribute will be replaced by comment
	 */
	function InstantLink(options) {
	    _classCallCheck(this, InstantLink);
	
	    this.options = {
	        cache: true,
	        compress: false,
	        event: 'mouseover',
	        comment: true
	    };
	    this.options = Object.assign(this.options, options);
	    if (this.options.cache) this.cache = new Cache(this.options.compress);
	    this.init();
	};
	
	InstantLink.prototype.init = init;
	InstantLink.prototype.handler = handler;
	InstantLink.prototype.fetchPage = fetchPage;
	InstantLink.prototype.replacePage = replacePage;
	
	if (typeof window === 'undefined') {
	    throw new ReferenceError('window is undefined, InstantLink must be run in a browser');
	}
	
	window.InstantLink = InstantLink;
	
	module.exports = InstantLink;

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {"use strict";
	
	/**
	 * Exports the Cache class
	 * @module cache
	 */
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var lzma = __webpack_require__(305);
	
	/**
	 * Creates a new Cache instance
	 * @param {boolean} compress - Enable/disable compression
	 */
	
	var Cache = function () {
	    function Cache(compress) {
	        _classCallCheck(this, Cache);
	
	        this.compress = compress || false;
	        this.data = {};
	    }
	
	    /**
	     * Store a key in the cache
	     * @param {string} key - Key to store
	     * @param {string} val - Value to store
	     */
	
	
	    _createClass(Cache, [{
	        key: 'store',
	        value: function store(key, val) {
	            if (typeof this.data[key] === 'undefined') {
	                try {
	                    if (this.compress) {
	                        var data = new Buffer(val, 'utf8');
	                        this.data[key] = lzma.compressFile(data);
	                    } else {
	                        this.data[key] = val;
	                    }
	                } catch (e) {
	                    return;
	                }
	            }
	        }
	
	        /**
	         * Retrieves a key from the cache
	         * @param {string} key - Key to retrieve
	         * @return {string}
	         */
	
	    }, {
	        key: 'retrieve',
	        value: function retrieve(key) {
	            if (typeof this.data[key] !== 'undefined') {
	                try {
	                    if (this.compress) {
	                        var data = lzma.decompressFile(this.data[key]);
	                        return new Buffer(data).toString('utf8');
	                    } else {
	                        return this.data[key];
	                    }
	                } catch (e) {
	                    return undefined;
	                }
	            }
	            return undefined;
	        }
	    }]);
	
	    return Cache;
	}();
	
	module.exports = Cache;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301).Buffer))

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	'use strict';
	
	var base64 = __webpack_require__(302);
	var ieee754 = __webpack_require__(303);
	var isArray = __webpack_require__(304);
	
	exports.Buffer = Buffer;
	exports.SlowBuffer = SlowBuffer;
	exports.INSPECT_MAX_BYTES = 50;
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.
	
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
	
	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength();
	
	function typedArraySupport() {
	  try {
	    var arr = new Uint8Array(1);
	    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
	        return 42;
	      } };
	    return arr.foo() === 42 && // typed array instances can be augmented
	    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
	  } catch (e) {
	    return false;
	  }
	}
	
	function kMaxLength() {
	  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
	}
	
	function createBuffer(that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length');
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length);
	    that.__proto__ = Buffer.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length);
	    }
	    that.length = length;
	  }
	
	  return that;
	}
	
	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */
	
	function Buffer(arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length);
	  }
	
	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error('If encoding is specified then the first argument must be a string');
	    }
	    return allocUnsafe(this, arg);
	  }
	  return from(this, arg, encodingOrOffset, length);
	}
	
	Buffer.poolSize = 8192; // not used by this implementation
	
	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype;
	  return arr;
	};
	
	function from(that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number');
	  }
	
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length);
	  }
	
	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset);
	  }
	
	  return fromObject(that, value);
	}
	
	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length);
	};
	
	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype;
	  Buffer.__proto__ = Uint8Array;
	  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    });
	  }
	}
	
	function assertSize(size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number');
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative');
	  }
	}
	
	function alloc(that, size, fill, encoding) {
	  assertSize(size);
	  if (size <= 0) {
	    return createBuffer(that, size);
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
	  }
	  return createBuffer(that, size);
	}
	
	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding);
	};
	
	function allocUnsafe(that, size) {
	  assertSize(size);
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0;
	    }
	  }
	  return that;
	}
	
	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size);
	};
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size);
	};
	
	function fromString(that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8';
	  }
	
	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding');
	  }
	
	  var length = byteLength(string, encoding) | 0;
	  that = createBuffer(that, length);
	
	  var actual = that.write(string, encoding);
	
	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual);
	  }
	
	  return that;
	}
	
	function fromArrayLike(that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0;
	  that = createBuffer(that, length);
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255;
	  }
	  return that;
	}
	
	function fromArrayBuffer(that, array, byteOffset, length) {
	  array.byteLength; // this throws if `array` is not a valid ArrayBuffer
	
	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds');
	  }
	
	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds');
	  }
	
	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array);
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset);
	  } else {
	    array = new Uint8Array(array, byteOffset, length);
	  }
	
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array;
	    that.__proto__ = Buffer.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array);
	  }
	  return that;
	}
	
	function fromObject(that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0;
	    that = createBuffer(that, len);
	
	    if (that.length === 0) {
	      return that;
	    }
	
	    obj.copy(that, 0, 0, len);
	    return that;
	  }
	
	  if (obj) {
	    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0);
	      }
	      return fromArrayLike(that, obj);
	    }
	
	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data);
	    }
	  }
	
	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
	}
	
	function checked(length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
	  }
	  return length | 0;
	}
	
	function SlowBuffer(length) {
	  if (+length != length) {
	    // eslint-disable-line eqeqeq
	    length = 0;
	  }
	  return Buffer.alloc(+length);
	}
	
	Buffer.isBuffer = function isBuffer(b) {
	  return !!(b != null && b._isBuffer);
	};
	
	Buffer.compare = function compare(a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers');
	  }
	
	  if (a === b) return 0;
	
	  var x = a.length;
	  var y = b.length;
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break;
	    }
	  }
	
	  if (x < y) return -1;
	  if (y < x) return 1;
	  return 0;
	};
	
	Buffer.isEncoding = function isEncoding(encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true;
	    default:
	      return false;
	  }
	};
	
	Buffer.concat = function concat(list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers');
	  }
	
	  if (list.length === 0) {
	    return Buffer.alloc(0);
	  }
	
	  var i;
	  if (length === undefined) {
	    length = 0;
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length;
	    }
	  }
	
	  var buffer = Buffer.allocUnsafe(length);
	  var pos = 0;
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i];
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers');
	    }
	    buf.copy(buffer, pos);
	    pos += buf.length;
	  }
	  return buffer;
	};
	
	function byteLength(string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length;
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength;
	  }
	  if (typeof string !== 'string') {
	    string = '' + string;
	  }
	
	  var len = string.length;
	  if (len === 0) return 0;
	
	  // Use a for loop to avoid recursion
	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len;
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length;
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2;
	      case 'hex':
	        return len >>> 1;
	      case 'base64':
	        return base64ToBytes(string).length;
	      default:
	        if (loweredCase) return utf8ToBytes(string).length; // assume utf8
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	}
	Buffer.byteLength = byteLength;
	
	function slowToString(encoding, start, end) {
	  var loweredCase = false;
	
	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.
	
	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0;
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return '';
	  }
	
	  if (end === undefined || end > this.length) {
	    end = this.length;
	  }
	
	  if (end <= 0) {
	    return '';
	  }
	
	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0;
	  start >>>= 0;
	
	  if (end <= start) {
	    return '';
	  }
	
	  if (!encoding) encoding = 'utf8';
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end);
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end);
	
	      case 'ascii':
	        return asciiSlice(this, start, end);
	
	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end);
	
	      case 'base64':
	        return base64Slice(this, start, end);
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end);
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
	        encoding = (encoding + '').toLowerCase();
	        loweredCase = true;
	    }
	  }
	}
	
	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true;
	
	function swap(b, n, m) {
	  var i = b[n];
	  b[n] = b[m];
	  b[m] = i;
	}
	
	Buffer.prototype.swap16 = function swap16() {
	  var len = this.length;
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits');
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1);
	  }
	  return this;
	};
	
	Buffer.prototype.swap32 = function swap32() {
	  var len = this.length;
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits');
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3);
	    swap(this, i + 1, i + 2);
	  }
	  return this;
	};
	
	Buffer.prototype.swap64 = function swap64() {
	  var len = this.length;
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits');
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7);
	    swap(this, i + 1, i + 6);
	    swap(this, i + 2, i + 5);
	    swap(this, i + 3, i + 4);
	  }
	  return this;
	};
	
	Buffer.prototype.toString = function toString() {
	  var length = this.length | 0;
	  if (length === 0) return '';
	  if (arguments.length === 0) return utf8Slice(this, 0, length);
	  return slowToString.apply(this, arguments);
	};
	
	Buffer.prototype.equals = function equals(b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
	  if (this === b) return true;
	  return Buffer.compare(this, b) === 0;
	};
	
	Buffer.prototype.inspect = function inspect() {
	  var str = '';
	  var max = exports.INSPECT_MAX_BYTES;
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
	    if (this.length > max) str += ' ... ';
	  }
	  return '<Buffer ' + str + '>';
	};
	
	Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer');
	  }
	
	  if (start === undefined) {
	    start = 0;
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0;
	  }
	  if (thisStart === undefined) {
	    thisStart = 0;
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length;
	  }
	
	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index');
	  }
	
	  if (thisStart >= thisEnd && start >= end) {
	    return 0;
	  }
	  if (thisStart >= thisEnd) {
	    return -1;
	  }
	  if (start >= end) {
	    return 1;
	  }
	
	  start >>>= 0;
	  end >>>= 0;
	  thisStart >>>= 0;
	  thisEnd >>>= 0;
	
	  if (this === target) return 0;
	
	  var x = thisEnd - thisStart;
	  var y = end - start;
	  var len = Math.min(x, y);
	
	  var thisCopy = this.slice(thisStart, thisEnd);
	  var targetCopy = target.slice(start, end);
	
	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i];
	      y = targetCopy[i];
	      break;
	    }
	  }
	
	  if (x < y) return -1;
	  if (y < x) return 1;
	  return 0;
	};
	
	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1;
	
	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset;
	    byteOffset = 0;
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff;
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000;
	  }
	  byteOffset = +byteOffset; // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : buffer.length - 1;
	  }
	
	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1;else byteOffset = buffer.length - 1;
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0;else return -1;
	  }
	
	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding);
	  }
	
	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1;
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
	  } else if (typeof val === 'number') {
	    val = val & 0xFF; // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
	      }
	    }
	    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
	  }
	
	  throw new TypeError('val must be string, number or Buffer');
	}
	
	function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1;
	  var arrLength = arr.length;
	  var valLength = val.length;
	
	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase();
	    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1;
	      }
	      indexSize = 2;
	      arrLength /= 2;
	      valLength /= 2;
	      byteOffset /= 2;
	    }
	  }
	
	  function read(buf, i) {
	    if (indexSize === 1) {
	      return buf[i];
	    } else {
	      return buf.readUInt16BE(i * indexSize);
	    }
	  }
	
	  var i;
	  if (dir) {
	    var foundIndex = -1;
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i;
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex;
	        foundIndex = -1;
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true;
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false;
	          break;
	        }
	      }
	      if (found) return i;
	    }
	  }
	
	  return -1;
	}
	
	Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1;
	};
	
	Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
	};
	
	Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
	};
	
	function hexWrite(buf, string, offset, length) {
	  offset = Number(offset) || 0;
	  var remaining = buf.length - offset;
	  if (!length) {
	    length = remaining;
	  } else {
	    length = Number(length);
	    if (length > remaining) {
	      length = remaining;
	    }
	  }
	
	  // must be an even number of digits
	  var strLen = string.length;
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');
	
	  if (length > strLen / 2) {
	    length = strLen / 2;
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16);
	    if (isNaN(parsed)) return i;
	    buf[offset + i] = parsed;
	  }
	  return i;
	}
	
	function utf8Write(buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
	}
	
	function asciiWrite(buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length);
	}
	
	function latin1Write(buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length);
	}
	
	function base64Write(buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length);
	}
	
	function ucs2Write(buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
	}
	
	Buffer.prototype.write = function write(string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8';
	    length = this.length;
	    offset = 0;
	    // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset;
	    length = this.length;
	    offset = 0;
	    // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0;
	    if (isFinite(length)) {
	      length = length | 0;
	      if (encoding === undefined) encoding = 'utf8';
	    } else {
	      encoding = length;
	      length = undefined;
	    }
	    // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
	  }
	
	  var remaining = this.length - offset;
	  if (length === undefined || length > remaining) length = remaining;
	
	  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds');
	  }
	
	  if (!encoding) encoding = 'utf8';
	
	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length);
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length);
	
	      case 'ascii':
	        return asciiWrite(this, string, offset, length);
	
	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length);
	
	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length);
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length);
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	};
	
	Buffer.prototype.toJSON = function toJSON() {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  };
	};
	
	function base64Slice(buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf);
	  } else {
	    return base64.fromByteArray(buf.slice(start, end));
	  }
	}
	
	function utf8Slice(buf, start, end) {
	  end = Math.min(buf.length, end);
	  var res = [];
	
	  var i = start;
	  while (i < end) {
	    var firstByte = buf[i];
	    var codePoint = null;
	    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
	
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint;
	
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte;
	          }
	          break;
	        case 2:
	          secondByte = buf[i + 1];
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break;
	        case 3:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break;
	        case 4:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          fourthByte = buf[i + 3];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint;
	            }
	          }
	      }
	    }
	
	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD;
	      bytesPerSequence = 1;
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000;
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
	      codePoint = 0xDC00 | codePoint & 0x3FF;
	    }
	
	    res.push(codePoint);
	    i += bytesPerSequence;
	  }
	
	  return decodeCodePointsArray(res);
	}
	
	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000;
	
	function decodeCodePointsArray(codePoints) {
	  var len = codePoints.length;
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
	  }
	
	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = '';
	  var i = 0;
	  while (i < len) {
	    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
	  }
	  return res;
	}
	
	function asciiSlice(buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F);
	  }
	  return ret;
	}
	
	function latin1Slice(buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i]);
	  }
	  return ret;
	}
	
	function hexSlice(buf, start, end) {
	  var len = buf.length;
	
	  if (!start || start < 0) start = 0;
	  if (!end || end < 0 || end > len) end = len;
	
	  var out = '';
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i]);
	  }
	  return out;
	}
	
	function utf16leSlice(buf, start, end) {
	  var bytes = buf.slice(start, end);
	  var res = '';
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
	  }
	  return res;
	}
	
	Buffer.prototype.slice = function slice(start, end) {
	  var len = this.length;
	  start = ~~start;
	  end = end === undefined ? len : ~~end;
	
	  if (start < 0) {
	    start += len;
	    if (start < 0) start = 0;
	  } else if (start > len) {
	    start = len;
	  }
	
	  if (end < 0) {
	    end += len;
	    if (end < 0) end = 0;
	  } else if (end > len) {
	    end = len;
	  }
	
	  if (end < start) end = start;
	
	  var newBuf;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end);
	    newBuf.__proto__ = Buffer.prototype;
	  } else {
	    var sliceLen = end - start;
	    newBuf = new Buffer(sliceLen, undefined);
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start];
	    }
	  }
	
	  return newBuf;
	};
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset(offset, ext, length) {
	  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
	}
	
	Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);
	
	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	
	  return val;
	};
	
	Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length);
	  }
	
	  var val = this[offset + --byteLength];
	  var mul = 1;
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul;
	  }
	
	  return val;
	};
	
	Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  return this[offset];
	};
	
	Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] | this[offset + 1] << 8;
	};
	
	Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] << 8 | this[offset + 1];
	};
	
	Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	
	  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
	};
	
	Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	
	  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
	};
	
	Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);
	
	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	  mul *= 0x80;
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
	
	  return val;
	};
	
	Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);
	
	  var i = byteLength;
	  var mul = 1;
	  var val = this[offset + --i];
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul;
	  }
	  mul *= 0x80;
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
	
	  return val;
	};
	
	Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  if (!(this[offset] & 0x80)) return this[offset];
	  return (0xff - this[offset] + 1) * -1;
	};
	
	Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset] | this[offset + 1] << 8;
	  return val & 0x8000 ? val | 0xFFFF0000 : val;
	};
	
	Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset + 1] | this[offset] << 8;
	  return val & 0x8000 ? val | 0xFFFF0000 : val;
	};
	
	Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	
	  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
	};
	
	Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	
	  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
	};
	
	Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return ieee754.read(this, offset, true, 23, 4);
	};
	
	Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return ieee754.read(this, offset, false, 23, 4);
	};
	
	Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return ieee754.read(this, offset, true, 52, 8);
	};
	
	Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return ieee754.read(this, offset, false, 52, 8);
	};
	
	function checkInt(buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
	  if (offset + ext > buf.length) throw new RangeError('Index out of range');
	}
	
	Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }
	
	  var mul = 1;
	  var i = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = value / mul & 0xFF;
	  }
	
	  return offset + byteLength;
	};
	
	Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }
	
	  var i = byteLength - 1;
	  var mul = 1;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = value / mul & 0xFF;
	  }
	
	  return offset + byteLength;
	};
	
	Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  this[offset] = value & 0xff;
	  return offset + 1;
	};
	
	function objectWriteUInt16(buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
	  }
	}
	
	Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value & 0xff;
	    this[offset + 1] = value >>> 8;
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2;
	};
	
	Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 8;
	    this[offset + 1] = value & 0xff;
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2;
	};
	
	function objectWriteUInt32(buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
	  }
	}
	
	Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = value >>> 24;
	    this[offset + 2] = value >>> 16;
	    this[offset + 1] = value >>> 8;
	    this[offset] = value & 0xff;
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4;
	};
	
	Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 24;
	    this[offset + 1] = value >>> 16;
	    this[offset + 2] = value >>> 8;
	    this[offset + 3] = value & 0xff;
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4;
	};
	
	Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }
	
	  var i = 0;
	  var mul = 1;
	  var sub = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
	  }
	
	  return offset + byteLength;
	};
	
	Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }
	
	  var i = byteLength - 1;
	  var mul = 1;
	  var sub = 0;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
	  }
	
	  return offset + byteLength;
	};
	
	Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  if (value < 0) value = 0xff + value + 1;
	  this[offset] = value & 0xff;
	  return offset + 1;
	};
	
	Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value & 0xff;
	    this[offset + 1] = value >>> 8;
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2;
	};
	
	Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 8;
	    this[offset + 1] = value & 0xff;
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2;
	};
	
	Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value & 0xff;
	    this[offset + 1] = value >>> 8;
	    this[offset + 2] = value >>> 16;
	    this[offset + 3] = value >>> 24;
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4;
	};
	
	Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (value < 0) value = 0xffffffff + value + 1;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 24;
	    this[offset + 1] = value >>> 16;
	    this[offset + 2] = value >>> 8;
	    this[offset + 3] = value & 0xff;
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4;
	};
	
	function checkIEEE754(buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range');
	  if (offset < 0) throw new RangeError('Index out of range');
	}
	
	function writeFloat(buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4);
	  return offset + 4;
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert);
	};
	
	Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert);
	};
	
	function writeDouble(buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8);
	  return offset + 8;
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert);
	};
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert);
	};
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy(target, targetStart, start, end) {
	  if (!start) start = 0;
	  if (!end && end !== 0) end = this.length;
	  if (targetStart >= target.length) targetStart = target.length;
	  if (!targetStart) targetStart = 0;
	  if (end > 0 && end < start) end = start;
	
	  // Copy 0 bytes; we're done
	  if (end === start) return 0;
	  if (target.length === 0 || this.length === 0) return 0;
	
	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds');
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
	  if (end < 0) throw new RangeError('sourceEnd out of bounds');
	
	  // Are we oob?
	  if (end > this.length) end = this.length;
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start;
	  }
	
	  var len = end - start;
	  var i;
	
	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else {
	    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
	  }
	
	  return len;
	};
	
	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill(val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start;
	      start = 0;
	      end = this.length;
	    } else if (typeof end === 'string') {
	      encoding = end;
	      end = this.length;
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0);
	      if (code < 256) {
	        val = code;
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string');
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding);
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255;
	  }
	
	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index');
	  }
	
	  if (end <= start) {
	    return this;
	  }
	
	  start = start >>> 0;
	  end = end === undefined ? this.length : end >>> 0;
	
	  if (!val) val = 0;
	
	  var i;
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val;
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
	    var len = bytes.length;
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len];
	    }
	  }
	
	  return this;
	};
	
	// HELPER FUNCTIONS
	// ================
	
	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
	
	function base64clean(str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return '';
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '=';
	  }
	  return str;
	}
	
	function stringtrim(str) {
	  if (str.trim) return str.trim();
	  return str.replace(/^\s+|\s+$/g, '');
	}
	
	function toHex(n) {
	  if (n < 16) return '0' + n.toString(16);
	  return n.toString(16);
	}
	
	function utf8ToBytes(string, units) {
	  units = units || Infinity;
	  var codePoint;
	  var length = string.length;
	  var leadSurrogate = null;
	  var bytes = [];
	
	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i);
	
	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue;
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue;
	        }
	
	        // valid lead
	        leadSurrogate = codePoint;
	
	        continue;
	      }
	
	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	        leadSurrogate = codePoint;
	        continue;
	      }
	
	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	    }
	
	    leadSurrogate = null;
	
	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break;
	      bytes.push(codePoint);
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break;
	      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break;
	      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break;
	      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
	    } else {
	      throw new Error('Invalid code point');
	    }
	  }
	
	  return bytes;
	}
	
	function asciiToBytes(str) {
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF);
	  }
	  return byteArray;
	}
	
	function utf16leToBytes(str, units) {
	  var c, hi, lo;
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break;
	
	    c = str.charCodeAt(i);
	    hi = c >> 8;
	    lo = c % 256;
	    byteArray.push(lo);
	    byteArray.push(hi);
	  }
	
	  return byteArray;
	}
	
	function base64ToBytes(str) {
	  return base64.toByteArray(base64clean(str));
	}
	
	function blitBuffer(src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if (i + offset >= dst.length || i >= src.length) break;
	    dst[i + offset] = src[i];
	  }
	  return i;
	}
	
	function isnan(val) {
	  return val !== val; // eslint-disable-line no-self-compare
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301).Buffer, (function() { return this; }())))

/***/ },
/* 302 */
/***/ function(module, exports) {

	'use strict';
	
	exports.byteLength = byteLength;
	exports.toByteArray = toByteArray;
	exports.fromByteArray = fromByteArray;
	
	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
	
	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i];
	  revLookup[code.charCodeAt(i)] = i;
	}
	
	revLookup['-'.charCodeAt(0)] = 62;
	revLookup['_'.charCodeAt(0)] = 63;
	
	function placeHoldersCount(b64) {
	  var len = b64.length;
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4');
	  }
	
	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
	}
	
	function byteLength(b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return b64.length * 3 / 4 - placeHoldersCount(b64);
	}
	
	function toByteArray(b64) {
	  var i, j, l, tmp, placeHolders, arr;
	  var len = b64.length;
	  placeHolders = placeHoldersCount(b64);
	
	  arr = new Arr(len * 3 / 4 - placeHolders);
	
	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len;
	
	  var L = 0;
	
	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
	    arr[L++] = tmp >> 16 & 0xFF;
	    arr[L++] = tmp >> 8 & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }
	
	  if (placeHolders === 2) {
	    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
	    arr[L++] = tmp & 0xFF;
	  } else if (placeHolders === 1) {
	    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
	    arr[L++] = tmp >> 8 & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }
	
	  return arr;
	}
	
	function tripletToBase64(num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
	}
	
	function encodeChunk(uint8, start, end) {
	  var tmp;
	  var output = [];
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
	    output.push(tripletToBase64(tmp));
	  }
	  return output.join('');
	}
	
	function fromByteArray(uint8) {
	  var tmp;
	  var len = uint8.length;
	  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
	  var output = '';
	  var parts = [];
	  var maxChunkLength = 16383; // must be multiple of 3
	
	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
	  }
	
	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1];
	    output += lookup[tmp >> 2];
	    output += lookup[tmp << 4 & 0x3F];
	    output += '==';
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
	    output += lookup[tmp >> 10];
	    output += lookup[tmp >> 4 & 0x3F];
	    output += lookup[tmp << 2 & 0x3F];
	    output += '=';
	  }
	
	  parts.push(output);
	
	  return parts.join('');
	}

/***/ },
/* 303 */
/***/ function(module, exports) {

	"use strict";
	
	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = -7;
	  var i = isLE ? nBytes - 1 : 0;
	  var d = isLE ? -1 : 1;
	  var s = buffer[offset + i];
	
	  i += d;
	
	  e = s & (1 << -nBits) - 1;
	  s >>= -nBits;
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : (s ? -1 : 1) * Infinity;
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
	};
	
	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
	  var i = isLE ? 0 : nBytes - 1;
	  var d = isLE ? 1 : -1;
	  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
	
	  value = Math.abs(value);
	
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }
	
	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	
	  e = e << mLen | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	
	  buffer[offset + i - d] |= s * 128;
	};

/***/ },
/* 304 */
/***/ function(module, exports) {

	'use strict';
	
	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	if (false) {
	      var define = require('amdefine')(module);
	}
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(306), __webpack_require__(307), __webpack_require__(312), __webpack_require__(315), __webpack_require__(321), __webpack_require__(322)], __WEBPACK_AMD_DEFINE_RESULT__ = function (freeze, LZ, LZMA, RangeCoder, Stream, Util) {
	      'use strict';
	
	      return freeze({
	            version: "0.9.0",
	            LZ: LZ,
	            LZMA: LZMA,
	            RangeCoder: RangeCoder,
	            Stream: Stream,
	            Util: Util,
	            // utility methods
	            compress: Util.compress,
	            compressFile: Util.compressFile,
	            decompress: Util.decompress,
	            decompressFile: Util.decompressFile
	      });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	if (false) {
	  var define = require('amdefine')(module);
	}
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	  'use strict';
	
	  // Object.freeze(), or a thunk if that method is not present in this
	  // JavaScript environment.
	
	  if (Object.freeze) {
	    return Object.freeze;
	  } else {
	    return function (o) {
	      return o;
	    };
	  }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	if (false) {
	  var define = require('amdefine')(module);
	}
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(306), __webpack_require__(308), __webpack_require__(309), __webpack_require__(311)], __WEBPACK_AMD_DEFINE_RESULT__ = function (freeze, BinTree, InWindow, OutWindow) {
	  'use strict';
	
	  return freeze({
	    BinTree: BinTree,
	    InWindow: InWindow,
	    OutWindow: OutWindow
	  });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	if (false) {
	  var define = require('amdefine')(module);
	}
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(306), __webpack_require__(309)], __WEBPACK_AMD_DEFINE_RESULT__ = function (freeze, InWindow) {
	  'use strict';
	
	  var CrcTable = function () {
	    var table = [];
	    if (typeof Uint32Array !== 'undefined') {
	      table = new Uint32Array(256);
	    }
	
	    var kPoly = 0xEDB88320,
	        i,
	        j,
	        r;
	    for (i = 0; i < 256; i++) {
	      r = i;
	      for (j = 0; j < 8; j++) {
	        if ((r & 1) !== 0) {
	          r = r >>> 1 ^ kPoly;
	        } else {
	          r >>>= 1;
	        }
	      }
	      table[i] = r;
	    }
	
	    return table;
	  }();
	  console.assert(CrcTable.length === 256);
	
	  // constants
	  var kHash2Size = 1 << 10,
	      kHash3Size = 1 << 16,
	      kBT2HashSize = 1 << 16;
	  var kStartMaxLen = 1,
	      kHash3Offset = kHash2Size,
	      kEmptyHashValue = 0;
	  var kMaxValForNormalize = (1 << 30) - 1;
	
	  function BinTree() {
	    InWindow.call(this);
	    this._cyclicBufferSize = 0;
	
	    this._son = [];
	    this._hash = [];
	
	    this._cutValue = 0xFF;
	    this._hashSizeSum = 0;
	
	    this.HASH_ARRAY = true;
	
	    this.kNumHashDirectBytes = 0;
	    this.kMinMatchCheck = 4;
	    this.kFixHashSize = kHash2Size + kHash3Size;
	
	    if (arguments.length >= 6) {
	      var args = Array.prototype.slice.call(arguments, 0);
	      this.setType(args.shift());
	      var stream = args.pop();
	      this.create.apply(this, args);
	      this.setStream(stream);
	      this.init();
	    }
	  }
	  // a little bit of sugar for super-method invocations.
	  var _super_ = InWindow.prototype;
	  BinTree.prototype = Object.create(_super_);
	
	  BinTree.prototype.setType = function (numHashBytes) {
	    this.HASH_ARRAY = numHashBytes > 2;
	    if (this.HASH_ARRAY) {
	      this.kNumHashDirectBytes = 0;
	      this.kMinMatchCheck = 4;
	      this.kFixHashSize = kHash2Size + kHash3Size;
	    } else {
	      this.kNumHashDirectBytes = 2;
	      this.kMinMatchCheck = 2 + 1;
	      this.kFixHashSize = 0;
	    }
	  };
	
	  BinTree.prototype.init = function () {
	    var i;
	    _super_.init.call(this);
	    for (i = 0; i < this._hashSizeSum; i++) {
	      this._hash[i] = kEmptyHashValue;
	    }
	    this._cyclicBufferPos = 0;
	    this.reduceOffsets(-1);
	  };
	
	  BinTree.prototype.movePos = function () {
	    if (++this._cyclicBufferPos >= this._cyclicBufferSize) {
	      this._cyclicBufferPos = 0;
	    }
	    _super_.movePos.call(this);
	    if (this._pos === kMaxValForNormalize) {
	      this.normalize();
	    }
	  };
	
	  BinTree.prototype.create = function (historySize, keepAddBufferBefore, matchMaxLen, keepAddBufferAfter) {
	    var windowReservSize, cyclicBufferSize, hs;
	
	    if (historySize > kMaxValForNormalize - 256) {
	      console.assert(false, 'Unsupported historySize');
	      return false;
	    }
	    this._cutValue = 16 + (matchMaxLen >>> 1);
	
	    windowReservSize = (historySize + keepAddBufferBefore + matchMaxLen + keepAddBufferAfter) / 2 + 256;
	
	    _super_.create.call(this, historySize + keepAddBufferBefore, matchMaxLen + keepAddBufferAfter, windowReservSize);
	
	    this._matchMaxLen = matchMaxLen;
	
	    cyclicBufferSize = historySize + 1;
	    if (this._cyclicBufferSize !== cyclicBufferSize) {
	      this._cyclicBufferSize = cyclicBufferSize;
	      this._son = [];
	      this._son.length = cyclicBufferSize * 2;
	    }
	
	    hs = kBT2HashSize;
	
	    if (this.HASH_ARRAY) {
	      hs = historySize - 1;
	      hs |= hs >>> 1;
	      hs |= hs >>> 2;
	      hs |= hs >>> 4;
	      hs |= hs >>> 8;
	      hs >>>= 1;
	      hs |= 0xFFFF;
	      if (hs > 1 << 24) {
	        hs >>>= 1;
	      }
	      this._hashMask = hs;
	      hs++;
	      hs += this.kFixHashSize;
	    }
	    if (hs !== this._hashSizeSum) {
	      this._hashSizeSum = hs;
	      this._hash = [];
	      this._hash.length = this._hashSizeSum;
	    }
	    return true;
	  };
	
	  BinTree.prototype.getMatches = function (distances) {
	    var lenLimit;
	    if (this._pos + this._matchMaxLen <= this._streamPos) {
	      lenLimit = this._matchMaxLen;
	    } else {
	      lenLimit = this._streamPos - this._pos;
	      if (lenLimit < this.kMinMatchCheck) {
	        this.movePos();
	        return 0;
	      }
	    }
	
	    var offset = 0;
	    var matchMinPos = this._pos > this._cyclicBufferSize ? this._pos - this._cyclicBufferSize : 0;
	    var cur = this._bufferOffset + this._pos;
	    var maxLen = kStartMaxLen; // to avoid items for len < hashSize
	    var hashValue = 0,
	        hash2Value = 0,
	        hash3Value = 0;
	
	    if (this.HASH_ARRAY) {
	      var temp = CrcTable[this._bufferBase[cur]] ^ this._bufferBase[cur + 1];
	      hash2Value = temp & kHash2Size - 1;
	      temp ^= this._bufferBase[cur + 2] << 8;
	      hash3Value = temp & kHash3Size - 1;
	      hashValue = (temp ^ CrcTable[this._bufferBase[cur + 3]] << 5) & this._hashMask;
	    } else {
	      hashValue = this._bufferBase[cur] ^ this._bufferBase[cur + 1] << 8;
	    }
	
	    var curMatch = this._hash[this.kFixHashSize + hashValue];
	    if (this.HASH_ARRAY) {
	      var curMatch2 = this._hash[hash2Value];
	      var curMatch3 = this._hash[kHash3Offset + hash3Value];
	      this._hash[hash2Value] = this._pos;
	      this._hash[kHash3Offset + hash3Value] = this._pos;
	      if (curMatch2 > matchMinPos) {
	        if (this._bufferBase[this._bufferOffset + curMatch2] === this._bufferBase[cur]) {
	          distances[offset++] = maxLen = 2;
	          distances[offset++] = this._pos - curMatch2 - 1;
	        }
	      }
	      if (curMatch3 > matchMinPos) {
	        if (this._bufferBase[this._bufferOffset + curMatch3] === this._bufferBase[cur]) {
	          if (curMatch3 === curMatch2) {
	            offset -= 2;
	          }
	          distances[offset++] = maxLen = 3;
	          distances[offset++] = this._pos - curMatch3 - 1;
	          curMatch2 = curMatch3;
	        }
	      }
	      if (offset !== 0 && curMatch2 === curMatch) {
	        offset -= 2;
	        maxLen = kStartMaxLen;
	      }
	    }
	
	    this._hash[this.kFixHashSize + hashValue] = this._pos;
	
	    var ptr0 = (this._cyclicBufferPos << 1) + 1;
	    var ptr1 = this._cyclicBufferPos << 1;
	
	    var len0, len1;
	    len0 = len1 = this.kNumHashDirectBytes;
	
	    if (this.kNumHashDirectBytes !== 0) {
	      if (curMatch > matchMinPos) {
	        if (this._bufferBase[this._bufferOffset + curMatch + this.kNumHashDirectBytes] !== this._bufferBase[cur + this.kNumHashDirectBytes]) {
	          distances[offset++] = maxLen = this.kNumHashDirectBytes;
	          distances[offset++] = this._pos - curMatch - 1;
	        }
	      }
	    }
	
	    var count = this._cutValue;
	
	    while (true) {
	      if (curMatch <= matchMinPos || count-- === 0) {
	        this._son[ptr0] = this._son[ptr1] = kEmptyHashValue;
	        break;
	      }
	
	      var delta = this._pos - curMatch;
	      var cyclicPos = (delta <= this._cyclicBufferPos ? this._cyclicBufferPos - delta : this._cyclicBufferPos - delta + this._cyclicBufferSize) << 1;
	
	      var pby1 = this._bufferOffset + curMatch;
	      var len = Math.min(len0, len1);
	      if (this._bufferBase[pby1 + len] === this._bufferBase[cur + len]) {
	        while (++len !== lenLimit) {
	          if (this._bufferBase[pby1 + len] !== this._bufferBase[cur + len]) {
	            break;
	          }
	        }
	        if (maxLen < len) {
	          distances[offset++] = maxLen = len;
	          distances[offset++] = delta - 1;
	          if (len === lenLimit) {
	            this._son[ptr1] = this._son[cyclicPos];
	            this._son[ptr0] = this._son[cyclicPos + 1];
	            break;
	          }
	        }
	      }
	      if (this._bufferBase[pby1 + len] < this._bufferBase[cur + len]) {
	        this._son[ptr1] = curMatch;
	        ptr1 = cyclicPos + 1;
	        curMatch = this._son[ptr1];
	        len1 = len;
	      } else {
	        this._son[ptr0] = curMatch;
	        ptr0 = cyclicPos;
	        curMatch = this._son[ptr0];
	        len0 = len;
	      }
	    }
	
	    this.movePos();
	    return offset;
	  };
	
	  BinTree.prototype.skip = function (num) {
	    var lenLimit, matchMinPos, cur, curMatch, hashValue, hash2Value, hash3Value, temp;
	    var ptr0, ptr1, len0, len1, count, delta, cyclicPos, pby1, len;
	    do {
	      if (this._pos + this._matchMaxLen <= this._streamPos) {
	        lenLimit = this._matchMaxLen;
	      } else {
	        lenLimit = this._streamPos - this._pos;
	        if (lenLimit < this.kMinMatchCheck) {
	          this.movePos();
	          continue;
	        }
	      }
	
	      matchMinPos = this._pos > this._cyclicBufferSize ? this._pos - this._cyclicBufferSize : 0;
	      cur = this._bufferOffset + this._pos;
	
	      if (this.HASH_ARRAY) {
	        temp = CrcTable[this._bufferBase[cur]] ^ this._bufferBase[cur + 1];
	        hash2Value = temp & kHash2Size - 1;
	        this._hash[hash2Value] = this._pos;
	        temp ^= this._bufferBase[cur + 2] << 8;
	        hash3Value = temp & kHash3Size - 1;
	        this._hash[kHash3Offset + hash3Value] = this._pos;
	        hashValue = (temp ^ CrcTable[this._bufferBase[cur + 3]] << 5) & this._hashMask;
	      } else {
	        hashValue = this._bufferBase[cur] ^ this._bufferBase[cur + 1] << 8;
	      }
	
	      curMatch = this._hash[this.kFixHashSize + hashValue];
	      this._hash[this.kFixHashSize + hashValue] = this._pos;
	
	      ptr0 = (this._cyclicBufferPos << 1) + 1;
	      ptr1 = this._cyclicBufferPos << 1;
	
	      len0 = len1 = this.kNumHashDirectBytes;
	
	      count = this._cutValue;
	      while (true) {
	        if (curMatch <= matchMinPos || count-- === 0) {
	          this._son[ptr0] = this._son[ptr1] = kEmptyHashValue;
	          break;
	        }
	
	        delta = this._pos - curMatch;
	        cyclicPos = (delta <= this._cyclicBufferPos ? this._cyclicBufferPos - delta : this._cyclicBufferPos - delta + this._cyclicBufferSize) << 1;
	
	        pby1 = this._bufferOffset + curMatch;
	        len = len0 < len1 ? len0 : len1;
	        if (this._bufferBase[pby1 + len] === this._bufferBase[cur + len]) {
	          while (++len !== lenLimit) {
	            if (this._bufferBase[pby1 + len] !== this._bufferBase[cur + len]) {
	              break;
	            }
	          }
	          if (len === lenLimit) {
	            this._son[ptr1] = this._son[cyclicPos];
	            this._son[ptr0] = this._son[cyclicPos + 1];
	            break;
	          }
	        }
	        if (this._bufferBase[pby1 + len] < this._bufferBase[cur + len]) {
	          this._son[ptr1] = curMatch;
	          ptr1 = cyclicPos + 1;
	          curMatch = this._son[ptr1];
	          len1 = len;
	        } else {
	          this._son[ptr0] = curMatch;
	          ptr0 = cyclicPos;
	          curMatch = this._son[ptr0];
	          len0 = len;
	        }
	      }
	      this.movePos();
	    } while (--num !== 0);
	  };
	
	  BinTree.prototype.normalizeLinks = function (items, numItems, subValue) {
	    var i, value;
	    for (i = 0; i < numItems; i++) {
	      value = items[i];
	      if (value <= subValue) {
	        value = kEmptyHashValue;
	      } else {
	        value -= subValue;
	      }
	      items[i] = value;
	    }
	  };
	
	  BinTree.prototype.normalize = function () {
	    var subValue = this._pos - this._cyclicBufferSize;
	    this.normalizeLinks(this._son, this._cyclicBufferSize * 2, subValue);
	    this.normalizeLinks(this._hash, this._hashSizeSum, subValue);
	    this.reduceOffsets(subValue);
	  };
	
	  BinTree.prototype.setCutValue = function (cutValue) {
	    this._cutValue = cutValue;
	  };
	
	  freeze(BinTree.prototype);
	  return freeze(BinTree);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	if (false) {
	  var define = require('amdefine')(module);
	}
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(306), __webpack_require__(310)], __WEBPACK_AMD_DEFINE_RESULT__ = function (freeze, makeBuffer) {
	  'use strict';
	
	  var InWindow = function InWindow(keepSizeBefore, keepSizeAfter, keepSizeReserve, stream) {
	    if (arguments.length >= 4) {
	      // typical initialization sequence
	      var args = Array.prototype.slice.call(arguments, 0);
	      var _stream = args.pop();
	      this.create.apply(this, args);
	      this.setStream(_stream);
	      this.init();
	    }
	  };
	
	  InWindow.prototype.moveBlock = function () {
	    var i;
	    var offset = this._bufferOffset + this._pos + this._keepSizeBefore;
	    // we need one additional byte, since MovePos moves on 1 byte.
	    if (offset > 0) {
	      offset--;
	    }
	
	    var numBytes = this._bufferOffset + this._streamPos - offset;
	    for (i = 0; i < numBytes; i++) {
	      this._bufferBase[i] = this._bufferBase[offset + i];
	    }
	    this._bufferOffset -= offset;
	  };
	
	  InWindow.prototype.readBlock = function () {
	    if (this._streamEndWasReached) {
	      return;
	    }
	    while (true) {
	      var size = -this._bufferOffset + this._blockSize - this._streamPos;
	      if (size === 0) {
	        return;
	      }
	      var numReadBytes = this._stream.read(this._bufferBase, this._bufferOffset + this._streamPos, size);
	      if (numReadBytes <= 0) {
	        this._posLimit = this._streamPos;
	        var pointerToPosition = this._bufferOffset + this._posLimit;
	        if (pointerToPosition > this._pointerToLastSafePosition) {
	          this._posLimit = this._pointerToLastSafePosition - this._bufferOffset;
	        }
	
	        this._streamEndWasReached = true;
	        return;
	      }
	      this._streamPos += numReadBytes;
	      if (this._streamPos >= this._pos + this._keepSizeAfter) {
	        this._posLimit = this._streamPos - this._keepSizeAfter;
	      }
	    }
	  };
	
	  InWindow.prototype.free = function () {
	    this._bufferBase = null;
	  };
	
	  InWindow.prototype.create = function (keepSizeBefore, keepSizeAfter, keepSizeReserve) {
	    this._keepSizeBefore = keepSizeBefore;
	    this._keepSizeAfter = keepSizeAfter;
	    var blockSize = keepSizeBefore + keepSizeAfter + keepSizeReserve;
	    if (!this._bufferBase || this._blockSize !== blockSize) {
	      this.free();
	      this._blockSize = blockSize;
	      this._bufferBase = makeBuffer(this._blockSize);
	    }
	    this._pointerToLastSafePosition = this._blockSize - keepSizeAfter;
	  };
	
	  InWindow.prototype.setStream = function (stream) {
	    this._stream = stream;
	  };
	
	  InWindow.prototype.releaseStream = function () {
	    this._stream = null;
	  };
	
	  InWindow.prototype.init = function () {
	    this._bufferOffset = 0;
	    this._pos = 0;
	    this._streamPos = 0;
	    this._streamEndWasReached = false;
	    this.readBlock();
	  };
	
	  InWindow.prototype.movePos = function () {
	    this._pos++;
	    if (this._pos > this._posLimit) {
	      var pointerToPosition = this._bufferOffset + this._pos;
	      if (pointerToPosition > this._pointerToLastSafePosition) {
	        this.moveBlock();
	      }
	      this.readBlock();
	    }
	  };
	
	  InWindow.prototype.getIndexByte = function (index) {
	    return this._bufferBase[this._bufferOffset + this._pos + index];
	  };
	
	  // index + limit have not to exceed _keepSizeAfter
	  InWindow.prototype.getMatchLen = function (index, distance, limit) {
	    var pby, i;
	    if (this._streamEndWasReached) {
	      if (this._pos + index + limit > this._streamPos) {
	        limit = this._streamPos - (this._pos + index);
	      }
	    }
	    distance++;
	    pby = this._bufferOffset + this._pos + index;
	    for (i = 0; i < limit && this._bufferBase[pby + i] === this._bufferBase[pby + i - distance];) {
	      i++;
	    }
	    return i;
	  };
	
	  InWindow.prototype.getNumAvailableBytes = function () {
	    return this._streamPos - this._pos;
	  };
	
	  InWindow.prototype.reduceOffsets = function (subValue) {
	    this._bufferOffset += subValue;
	    this._posLimit -= subValue;
	    this._pos -= subValue;
	    this._streamPos -= subValue;
	  };
	
	  // can't freeze InWindow.prototype because BinTree wants to subclass it.
	  return freeze(InWindow);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';
	
	if (false) {
	  var define = require('amdefine')(module);
	}
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	  'use strict';
	
	  // typed array / Buffer compatibility.
	
	  var makeBuffer = function makeBuffer(len) {
	    var b = [],
	        i;
	    for (i = 0; i < len; i++) {
	      b[i] = 0;
	    }
	    return b;
	  };
	  if (typeof Uint8Array !== 'undefined') {
	    makeBuffer = function makeBuffer(len) {
	      return new Uint8Array(len);
	    };
	  } else if (typeof Buffer !== 'undefined') {
	    makeBuffer = function makeBuffer(len) {
	      var b = new Buffer(len);
	      b.fill(0); // zero-fill, for consistency
	      return b;
	    };
	  }
	
	  return makeBuffer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301).Buffer))

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	if (false) {
	  var define = require('amdefine')(module);
	}
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(306), __webpack_require__(310)], __WEBPACK_AMD_DEFINE_RESULT__ = function (freeze, makeBuffer) {
	  'use strict';
	
	  var OutWindow = function OutWindow() {
	    this._windowSize = 0;
	  };
	
	  OutWindow.prototype.create = function (windowSize) {
	    if (!this._buffer || this._windowSize !== windowSize) {
	      this._buffer = makeBuffer(windowSize);
	    }
	    this._windowSize = windowSize;
	    this._pos = 0;
	    this._streamPos = 0;
	  };
	
	  OutWindow.prototype.flush = function () {
	    var size = this._pos - this._streamPos;
	    if (size !== 0) {
	      while (size--) {
	        this._stream.writeByte(this._buffer[this._streamPos++]);
	      }
	      if (this._pos >= this._windowSize) {
	        this._pos = 0;
	      }
	      this._streamPos = this._pos;
	    }
	  };
	
	  OutWindow.prototype.releaseStream = function () {
	    this.flush();
	    this._stream = null;
	  };
	
	  OutWindow.prototype.setStream = function (stream) {
	    this.releaseStream();
	    this._stream = stream;
	  };
	
	  OutWindow.prototype.init = function (solid) {
	    if (!solid) {
	      this._streamPos = 0;
	      this._pos = 0;
	    }
	  };
	
	  OutWindow.prototype.copyBlock = function (distance, len) {
	    var pos = this._pos - distance - 1;
	    if (pos < 0) {
	      pos += this._windowSize;
	    }
	    while (len--) {
	      if (pos >= this._windowSize) {
	        pos = 0;
	      }
	      this._buffer[this._pos++] = this._buffer[pos++];
	      if (this._pos >= this._windowSize) {
	        this.flush();
	      }
	    }
	  };
	
	  OutWindow.prototype.putByte = function (b) {
	    this._buffer[this._pos++] = b;
	    if (this._pos >= this._windowSize) {
	      this.flush();
	    }
	  };
	
	  OutWindow.prototype.getByte = function (distance) {
	    var pos = this._pos - distance - 1;
	    if (pos < 0) {
	      pos += this._windowSize;
	    }
	    return this._buffer[pos];
	  };
	
	  freeze(OutWindow.prototype);
	  return freeze(OutWindow);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	if (false) {
	  var define = require('amdefine')(module);
	}
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(306), __webpack_require__(313), __webpack_require__(320)], __WEBPACK_AMD_DEFINE_RESULT__ = function (freeze, Decoder, Encoder) {
	  'use strict';
	
	  return freeze({
	    Decoder: Decoder,
	    Encoder: Encoder
	  });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	if (false) {
	  var define = require('amdefine')(module);
	}
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(314), __webpack_require__(307), __webpack_require__(315)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Base, LZ, RangeCoder) {
	  'use strict';
	  /*
	  Copyright (c) 2011 Juan Mellado
	  
	  Permission is hereby granted, free of charge, to any person obtaining a copy
	  of this software and associated documentation files (the "Software"), to deal
	  in the Software without restriction, including without limitation the rights
	  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	  copies of the Software, and to permit persons to whom the Software is
	  furnished to do so, subject to the following conditions:
	  
	  The above copyright notice and this permission notice shall be included in
	  all copies or substantial portions of the Software.
	  
	  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	  THE SOFTWARE.
	  */
	
	  /*
	  References:
	  - "LZMA SDK" by Igor Pavlov
	    http://www.7-zip.org/sdk.html
	  */
	  /* Original source found at: http://code.google.com/p/js-lzma/ */
	
	  // shortcuts
	
	  var initBitModels = RangeCoder.Encoder.initBitModels;
	
	  var LenDecoder = function LenDecoder() {
	    this._choice = initBitModels(null, 2);
	    this._lowCoder = [];
	    this._midCoder = [];
	    this._highCoder = new RangeCoder.BitTreeDecoder(8);
	    this._numPosStates = 0;
	  };
	
	  LenDecoder.prototype.create = function (numPosStates) {
	    for (; this._numPosStates < numPosStates; ++this._numPosStates) {
	      this._lowCoder[this._numPosStates] = new RangeCoder.BitTreeDecoder(3);
	      this._midCoder[this._numPosStates] = new RangeCoder.BitTreeDecoder(3);
	    }
	  };
	
	  LenDecoder.prototype.init = function () {
	    var i = this._numPosStates;
	    initBitModels(this._choice);
	    while (i--) {
	      this._lowCoder[i].init();
	      this._midCoder[i].init();
	    }
	    this._highCoder.init();
	  };
	
	  LenDecoder.prototype.decode = function (rangeDecoder, posState) {
	    if (rangeDecoder.decodeBit(this._choice, 0) === 0) {
	      return this._lowCoder[posState].decode(rangeDecoder);
	    }
	    if (rangeDecoder.decodeBit(this._choice, 1) === 0) {
	      return 8 + this._midCoder[posState].decode(rangeDecoder);
	    }
	    return 16 + this._highCoder.decode(rangeDecoder);
	  };
	
	  var LiteralDecoder = function LiteralDecoder() {};
	
	  LiteralDecoder.Decoder2 = function () {
	    this._decoders = initBitModels(null, 0x300);
	  };
	
	  LiteralDecoder.Decoder2.prototype.init = function () {
	    initBitModels(this._decoders);
	  };
	
	  LiteralDecoder.Decoder2.prototype.decodeNormal = function (rangeDecoder) {
	    var symbol = 1;
	
	    do {
	      symbol = symbol << 1 | rangeDecoder.decodeBit(this._decoders, symbol);
	    } while (symbol < 0x100);
	
	    return symbol & 0xff;
	  };
	
	  LiteralDecoder.Decoder2.prototype.decodeWithMatchByte = function (rangeDecoder, matchByte) {
	    var symbol = 1,
	        matchBit,
	        bit;
	
	    do {
	      matchBit = matchByte >> 7 & 1;
	      matchByte <<= 1;
	      bit = rangeDecoder.decodeBit(this._decoders, (1 + matchBit << 8) + symbol);
	      symbol = symbol << 1 | bit;
	      if (matchBit !== bit) {
	        while (symbol < 0x100) {
	          symbol = symbol << 1 | rangeDecoder.decodeBit(this._decoders, symbol);
	        }
	        break;
	      }
	    } while (symbol < 0x100);
	
	    return symbol & 0xff;
	  };
	
	  LiteralDecoder.prototype.create = function (numPosBits, numPrevBits) {
	    var i;
	
	    if (this._coders && this._numPrevBits === numPrevBits && this._numPosBits === numPosBits) {
	      return;
	    }
	    this._numPosBits = numPosBits;
	    this._posMask = (1 << numPosBits) - 1;
	    this._numPrevBits = numPrevBits;
	
	    this._coders = [];
	
	    i = 1 << this._numPrevBits + this._numPosBits;
	    while (i--) {
	      this._coders[i] = new LiteralDecoder.Decoder2();
	    }
	  };
	
	  LiteralDecoder.prototype.init = function () {
	    var i = 1 << this._numPrevBits + this._numPosBits;
	    while (i--) {
	      this._coders[i].init();
	    }
	  };
	
	  LiteralDecoder.prototype.getDecoder = function (pos, prevByte) {
	    return this._coders[((pos & this._posMask) << this._numPrevBits) + ((prevByte & 0xff) >>> 8 - this._numPrevBits)];
	  };
	
	  var Decoder = function Decoder() {
	    var i;
	    this._outWindow = new LZ.OutWindow();
	    this._rangeDecoder = new RangeCoder.Decoder();
	
	    this._isMatchDecoders = initBitModels(null, Base.kNumStates << Base.kNumPosStatesBitsMax);
	    this._isRepDecoders = initBitModels(null, Base.kNumStates);
	    this._isRepG0Decoders = initBitModels(null, Base.kNumStates);
	    this._isRepG1Decoders = initBitModels(null, Base.kNumStates);
	    this._isRepG2Decoders = initBitModels(null, Base.kNumStates);
	    this._isRep0LongDecoders = initBitModels(null, Base.kNumStates << Base.kNumPosStatesBitsMax);
	    this._posSlotDecoder = [];
	    this._posDecoders = initBitModels(null, Base.kNumFullDistances - Base.kEndPosModelIndex);
	    this._posAlignDecoder = new RangeCoder.BitTreeDecoder(Base.kNumAlignBits);
	    this._lenDecoder = new LenDecoder();
	    this._repLenDecoder = new LenDecoder();
	    this._literalDecoder = new LiteralDecoder();
	    this._dictionarySize = -1;
	    this._dictionarySizeCheck = -1;
	    this._posStateMask = 0;
	
	    for (i = 0; i < Base.kNumLenToPosStates; i++) {
	      this._posSlotDecoder[i] = new RangeCoder.BitTreeDecoder(Base.kNumPosSlotBits);
	    }
	  };
	
	  Decoder.prototype.setDictionarySize = function (dictionarySize) {
	    if (dictionarySize < 0) {
	      return false;
	    }
	    if (this._dictionarySize !== dictionarySize) {
	      this._dictionarySize = dictionarySize;
	      this._dictionarySizeCheck = Math.max(this._dictionarySize, 1);
	      this._outWindow.create(Math.max(this._dictionarySizeCheck, 1 << 12));
	    }
	    return true;
	  };
	
	  Decoder.prototype.setLcLpPb = function (lc, lp, pb) {
	    var numPosStates = 1 << pb;
	
	    if (lc > Base.kNumLitContextBitsMax || lp > 4 || pb > Base.kNumPosStatesBitsMax) {
	      return false;
	    }
	
	    this._literalDecoder.create(lp, lc);
	
	    this._lenDecoder.create(numPosStates);
	    this._repLenDecoder.create(numPosStates);
	    this._posStateMask = numPosStates - 1;
	
	    return true;
	  };
	
	  Decoder.prototype.init = function () {
	    var i = Base.kNumLenToPosStates;
	
	    this._outWindow.init(false);
	
	    initBitModels(this._isMatchDecoders);
	    initBitModels(this._isRepDecoders);
	    initBitModels(this._isRepG0Decoders);
	    initBitModels(this._isRepG1Decoders);
	    initBitModels(this._isRepG2Decoders);
	    initBitModels(this._isRep0LongDecoders);
	    initBitModels(this._posDecoders);
	
	    this._literalDecoder.init();
	
	    while (i--) {
	      this._posSlotDecoder[i].init();
	    }
	
	    this._lenDecoder.init();
	    this._repLenDecoder.init();
	    this._posAlignDecoder.init();
	    this._rangeDecoder.init();
	  };
	
	  Decoder.prototype.code = function (inStream, outStream, outSize) {
	    // note that nowPos64 is actually only 53 bits long; that sets a limit
	    // on the amount of data we can decode
	    var state,
	        rep0 = 0,
	        rep1 = 0,
	        rep2 = 0,
	        rep3 = 0,
	        nowPos64 = 0,
	        prevByte = 0,
	        posState,
	        decoder2,
	        len,
	        distance,
	        posSlot,
	        numDirectBits;
	
	    this._rangeDecoder.setStream(inStream);
	    this._outWindow.setStream(outStream);
	
	    this.init();
	
	    state = Base.stateInit();
	    while (outSize < 0 || nowPos64 < outSize) {
	      posState = nowPos64 & this._posStateMask;
	
	      if (this._rangeDecoder.decodeBit(this._isMatchDecoders, (state << Base.kNumPosStatesBitsMax) + posState) === 0) {
	        decoder2 = this._literalDecoder.getDecoder(nowPos64, prevByte);
	
	        if (!Base.stateIsCharState(state)) {
	          prevByte = decoder2.decodeWithMatchByte(this._rangeDecoder, this._outWindow.getByte(rep0));
	        } else {
	          prevByte = decoder2.decodeNormal(this._rangeDecoder);
	        }
	        this._outWindow.putByte(prevByte);
	        state = Base.stateUpdateChar(state);
	        nowPos64++;
	      } else {
	
	        if (this._rangeDecoder.decodeBit(this._isRepDecoders, state) === 1) {
	          len = 0;
	          if (this._rangeDecoder.decodeBit(this._isRepG0Decoders, state) === 0) {
	            if (this._rangeDecoder.decodeBit(this._isRep0LongDecoders, (state << Base.kNumPosStatesBitsMax) + posState) === 0) {
	              state = Base.stateUpdateShortRep(state);
	              len = 1;
	            }
	          } else {
	            if (this._rangeDecoder.decodeBit(this._isRepG1Decoders, state) === 0) {
	              distance = rep1;
	            } else {
	              if (this._rangeDecoder.decodeBit(this._isRepG2Decoders, state) === 0) {
	                distance = rep2;
	              } else {
	                distance = rep3;
	                rep3 = rep2;
	              }
	              rep2 = rep1;
	            }
	            rep1 = rep0;
	            rep0 = distance;
	          }
	          if (len === 0) {
	            len = Base.kMatchMinLen + this._repLenDecoder.decode(this._rangeDecoder, posState);
	            state = Base.stateUpdateRep(state);
	          }
	        } else {
	          rep3 = rep2;
	          rep2 = rep1;
	          rep1 = rep0;
	
	          len = Base.kMatchMinLen + this._lenDecoder.decode(this._rangeDecoder, posState);
	          state = Base.stateUpdateMatch(state);
	
	          posSlot = this._posSlotDecoder[Base.getLenToPosState(len)].decode(this._rangeDecoder);
	          if (posSlot >= Base.kStartPosModelIndex) {
	
	            numDirectBits = (posSlot >> 1) - 1;
	            rep0 = (2 | posSlot & 1) << numDirectBits;
	
	            if (posSlot < Base.kEndPosModelIndex) {
	              rep0 += RangeCoder.BitTreeDecoder.reverseDecode(this._posDecoders, rep0 - posSlot - 1, this._rangeDecoder, numDirectBits);
	            } else {
	              rep0 += this._rangeDecoder.decodeDirectBits(numDirectBits - Base.kNumAlignBits) << Base.kNumAlignBits;
	              rep0 += this._posAlignDecoder.reverseDecode(this._rangeDecoder);
	              if (rep0 < 0) {
	                if (rep0 === -1) {
	                  break;
	                }
	                return false;
	              }
	            }
	          } else {
	            rep0 = posSlot;
	          }
	        }
	
	        if (rep0 >= nowPos64 || rep0 >= this._dictionarySizeCheck) {
	          return false;
	        }
	
	        this._outWindow.copyBlock(rep0, len);
	        nowPos64 += len;
	        prevByte = this._outWindow.getByte(0);
	      }
	    }
	
	    this._outWindow.flush();
	    this._outWindow.releaseStream();
	    this._rangeDecoder.releaseStream();
	
	    return true;
	  };
	
	  Decoder.prototype.setDecoderProperties = function (properties) {
	    var value, lc, lp, pb, dictionarySize, i, shift;
	
	    if (properties.length < 5) {
	      return false;
	    }
	
	    value = properties[0] & 0xFF;
	    lc = value % 9;
	    value = ~~(value / 9);
	    lp = value % 5;
	    pb = ~~(value / 5);
	
	    if (!this.setLcLpPb(lc, lp, pb)) {
	      return false;
	    }
	
	    dictionarySize = 0;
	    for (i = 0, shift = 1; i < 4; i++, shift *= 256) {
	      dictionarySize += (properties[1 + i] & 0xFF) * shift;
	    }return this.setDictionarySize(dictionarySize);
	  };
	  Decoder.prototype.setDecoderPropertiesFromStream = function (stream) {
	    var buffer = [],
	        i;
	    for (i = 0; i < 5; i++) {
	      buffer[i] = stream.readByte();
	    }
	    return this.setDecoderProperties(buffer);
	  };
	
	  return Decoder;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	if (false) {
	  var define = require('amdefine')(module);
	}
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(306)], __WEBPACK_AMD_DEFINE_RESULT__ = function (freeze) {
	  'use strict';
	
	  var Base = Object.create(null);
	  Base.kNumRepDistances = 4;
	  Base.kNumStates = 12;
	
	  Base.stateInit = function () {
	    return 0;
	  };
	
	  Base.stateUpdateChar = function (index) {
	    if (index < 4) {
	      return 0;
	    }
	    if (index < 10) {
	      return index - 3;
	    }
	    return index - 6;
	  };
	
	  Base.stateUpdateMatch = function (index) {
	    return index < 7 ? 7 : 10;
	  };
	
	  Base.stateUpdateRep = function (index) {
	    return index < 7 ? 8 : 11;
	  };
	
	  Base.stateUpdateShortRep = function (index) {
	    return index < 7 ? 9 : 11;
	  };
	
	  Base.stateIsCharState = function (index) {
	    return index < 7;
	  };
	
	  Base.kNumPosSlotBits = 6;
	  Base.kDicLogSizeMin = 0;
	  // Base.kDicLogSizeMax = 28;
	  // Base.kDistTableSizeMax = Base.kDicLogSizeMax * 2;
	
	  Base.kNumLenToPosStatesBits = 2; // it's for speed optimization
	  Base.kNumLenToPosStates = 1 << Base.kNumLenToPosStatesBits;
	
	  Base.kMatchMinLen = 2;
	
	  Base.getLenToPosState = function (len) {
	    len -= Base.kMatchMinLen;
	    if (len < Base.kNumLenToPosStates) {
	      return len;
	    }
	    return Base.kNumLenToPosStates - 1;
	  };
	
	  Base.kNumAlignBits = 4;
	  Base.kAlignTableSize = 1 << Base.kNumAlignBits;
	  Base.kAlignMask = Base.kAlignTableSize - 1;
	
	  Base.kStartPosModelIndex = 4;
	  Base.kEndPosModelIndex = 14;
	  Base.kNumPosModels = Base.kEndPosModelIndex - Base.kStartPosModelIndex;
	
	  Base.kNumFullDistances = 1 << Base.kEndPosModelIndex / 2;
	
	  Base.kNumLitPosStatesBitsEncodingMax = 4;
	  Base.kNumLitContextBitsMax = 8;
	
	  Base.kNumPosStatesBitsMax = 4;
	  Base.kNumPosStatesMax = 1 << Base.kNumPosStatesBitsMax;
	  Base.kNumPosStatesBitsEncodingMax = 4;
	  Base.kNumPosStatesEncodingMax = 1 << Base.kNumPosStatesBitsEncodingMax;
	
	  Base.kNumLowLenBits = 3;
	  Base.kNumMidLenBits = 3;
	  Base.kNumHighLenBits = 8;
	  Base.kNumLowLenSymbols = 1 << Base.kNumLowLenBits;
	  Base.kNumMidLenSymbols = 1 << Base.kNumMidLenBits;
	  Base.kNumLenSymbols = Base.kNumLowLenSymbols + Base.kNumMidLenSymbols + (1 << Base.kNumHighLenBits);
	  Base.kMatchMaxLen = Base.kMatchMinLen + Base.kNumLenSymbols - 1;
	
	  return freeze(Base);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	if (false) {
	  var define = require('amdefine')(module);
	}
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(306), __webpack_require__(316), __webpack_require__(318), __webpack_require__(319), __webpack_require__(317)], __WEBPACK_AMD_DEFINE_RESULT__ = function (freeze, BitTreeDecoder, BitTreeEncoder, Decoder, Encoder) {
	  'use strict';
	
	  return freeze({
	    BitTreeDecoder: BitTreeDecoder,
	    BitTreeEncoder: BitTreeEncoder,
	    Decoder: Decoder,
	    Encoder: Encoder
	  });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	if (false) {
	  var define = require('amdefine')(module);
	}
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(306), __webpack_require__(317)], __WEBPACK_AMD_DEFINE_RESULT__ = function (freeze, Encoder) {
	  'use strict';
	
	  var BitTreeDecoder = function BitTreeDecoder(numBitLevels) {
	    this._numBitLevels = numBitLevels;
	    this.init();
	  };
	
	  BitTreeDecoder.prototype.init = function () {
	    this._models = Encoder.initBitModels(null, 1 << this._numBitLevels);
	  };
	
	  BitTreeDecoder.prototype.decode = function (rangeDecoder) {
	    var m = 1,
	        i = this._numBitLevels;
	
	    while (i--) {
	      m = m << 1 | rangeDecoder.decodeBit(this._models, m);
	    }
	    return m - (1 << this._numBitLevels);
	  };
	
	  BitTreeDecoder.prototype.reverseDecode = function (rangeDecoder) {
	    var m = 1,
	        symbol = 0,
	        i = 0,
	        bit;
	
	    for (; i < this._numBitLevels; ++i) {
	      bit = rangeDecoder.decodeBit(this._models, m);
	      m = m << 1 | bit;
	      symbol |= bit << i;
	    }
	    return symbol;
	  };
	
	  BitTreeDecoder.reverseDecode = function (models, startIndex, rangeDecoder, numBitLevels) {
	    var m = 1,
	        symbol = 0,
	        i = 0,
	        bit;
	
	    for (; i < numBitLevels; ++i) {
	      bit = rangeDecoder.decodeBit(models, startIndex + m);
	      m = m << 1 | bit;
	      symbol |= bit << i;
	    }
	    return symbol;
	  };
	
	  freeze(BitTreeDecoder.prototype);
	  return freeze(BitTreeDecoder);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	if (false) {
	  var define = require('amdefine')(module);
	}
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(306)], __WEBPACK_AMD_DEFINE_RESULT__ = function (freeze) {
	  'use strict';
	
	  // largest 32/24/16/8-bit numbers.
	
	  var MAX32 = 0xFFFFFFFF;
	  var MAX24 = 0x00FFFFFF;
	  var MAX16 = 0x0000FFFF;
	  var MAX8 = 0x000000FF;
	  var MASK24 = 0xFF000000; // 32-bit inverse of MAX24
	
	  var kNumBitModelTotalBits = 11;
	  var kBitModelTotal = 1 << kNumBitModelTotalBits;
	  var kNumMoveBits = 5;
	
	  var kNumMoveReducingBits = 2;
	  var kNumBitPriceShiftBits = 6;
	
	  var Encoder = function Encoder(stream) {
	    this.init();
	    if (stream) {
	      this.setStream(stream);
	    }
	  };
	  Encoder.prototype.setStream = function (stream) {
	    this._stream = stream;
	  };
	  Encoder.prototype.releaseStream = function () {
	    this._stream = null;
	  };
	  Encoder.prototype.init = function () {
	    // The cache/cache_size variables are used to properly handle
	    // carries, and represent a number defined by a big-endian sequence
	    // starting with the cache value, and followed by cache_size 0xff
	    // bytes, which has been shifted out of the low register, but hasn't
	    // been written yet, because it could be incremented by one due to a
	    // carry.
	
	    // Note that the first byte output will always be 0 due to the fact
	    // that cache and low are initialized to 0, and the encoder
	    // implementation; the decoder ignores this byte.
	    this._position = 0;
	    this.low = 0; // unsigned 33-bit integer
	    this.range = MAX32; // unsigned 32-bit integer
	    // cacheSize needs to be large enough to store the full uncompressed
	    // size; javascript's 2^53 limit should be enough
	    this._cacheSize = 1;
	    this._cache = 0; // unsigned 8-bit
	  };
	  Encoder.prototype.flushData = function () {
	    var i;
	    for (i = 0; i < 5; i++) {
	      this.shiftLow();
	    }
	  };
	  Encoder.prototype.flushStream = function () {
	    if (this._stream.flush) {
	      this._stream.flush();
	    }
	  };
	  Encoder.prototype.shiftLow = function () {
	    // "normalization"
	    var overflow = this.low > MAX32 ? 1 : 0;
	    if (this.low < MASK24 || overflow) {
	      this._position += this._cacheSize;
	      var temp = this._cache;
	      do {
	        this._stream.writeByte(temp + overflow & MAX8);
	        temp = MAX8;
	      } while (--this._cacheSize !== 0);
	      // set cache to bits 24-31 of 'low'
	      this._cache = this.low >>> 24; // this truncates correctly
	      // set cache_size to 0 (do/while loop did this)
	    }
	    this._cacheSize++;
	    // 'lowest 24 bits of low, shifted left by 8'
	    // careful, '<< 8' can flip sign of 'low'
	    this.low = (this.low & MAX24) * 256;
	  };
	
	  Encoder.prototype.encodeDirectBits = function (v, numTotalBits) {
	    var i, mask;
	    mask = 1 << numTotalBits - 1;
	    for (i = numTotalBits - 1; i >= 0; i--, mask >>>= 1) {
	      this.range >>>= 1; // range is unsigned 32-bit int
	      if (v & mask) {
	        this.low += this.range;
	      }
	      if (this.range <= MAX24) {
	        this.range *= 256; // careful not to flip sign
	        this.shiftLow();
	      }
	    }
	  };
	
	  Encoder.prototype.getProcessedSizeAdd = function () {
	    return this._cacheSize + this._position + 4;
	  };
	
	  Encoder.initBitModels = function (probs, len) {
	    var i;
	    if (len && !probs) {
	      if (typeof Uint16Array !== 'undefined') {
	        probs = new Uint16Array(len);
	      } else {
	        probs = [];
	        probs.length = len;
	      }
	    }
	    for (i = 0; i < probs.length; i++) {
	      probs[i] = kBitModelTotal >>> 1;
	    } // 0.5 probability
	    return probs;
	  };
	
	  Encoder.prototype.encode = function (probs, index, symbol) {
	    var prob = probs[index];
	    var newBound = (this.range >>> kNumBitModelTotalBits) * prob;
	    if (symbol === 0) {
	      this.range = newBound;
	      probs[index] = prob + (kBitModelTotal - prob >>> kNumMoveBits);
	    } else {
	      this.low += newBound;
	      this.range -= newBound;
	      probs[index] = prob - (prob >>> kNumMoveBits);
	    }
	    if (this.range <= MAX24) {
	      this.range *= 256; // careful not to flip sign
	      this.shiftLow();
	    }
	  };
	
	  var ProbPrices = [];
	  if (typeof Uint32Array !== 'undefined') {
	    ProbPrices = new Uint32Array(kBitModelTotal >>> kNumMoveReducingBits);
	  }
	  (function () {
	    var kNumBits = kNumBitModelTotalBits - kNumMoveReducingBits;
	    var i, j;
	    for (i = kNumBits - 1; i >= 0; i--) {
	      var start = 1 << kNumBits - i - 1;
	      var end = 1 << kNumBits - i;
	      for (j = start; j < end; j++) {
	        ProbPrices[j] = (i << kNumBitPriceShiftBits) + (end - j << kNumBitPriceShiftBits >>> kNumBits - i - 1);
	      }
	    }
	  })();
	
	  Encoder.getPrice = function (prob, symbol) {
	    return ProbPrices[((prob - symbol ^ -symbol) & kBitModelTotal - 1) >>> kNumMoveReducingBits];
	  };
	  Encoder.getPrice0 = function (prob) {
	    return ProbPrices[prob >>> kNumMoveReducingBits];
	  };
	  Encoder.getPrice1 = function (prob) {
	    return ProbPrices[kBitModelTotal - prob >>> kNumMoveReducingBits];
	  };
	
	  // export constants for use in Encoder.
	  Encoder.kNumBitPriceShiftBits = kNumBitPriceShiftBits;
	
	  freeze(Encoder.prototype);
	  return freeze(Encoder);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	if (false) {
	  var define = require('amdefine')(module);
	}
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(306), __webpack_require__(317)], __WEBPACK_AMD_DEFINE_RESULT__ = function (freeze, Encoder) {
	  'use strict';
	
	  var BitTreeEncoder = function BitTreeEncoder(numBitLevels) {
	    this._numBitLevels = numBitLevels;
	    this.init();
	  };
	  BitTreeEncoder.prototype.init = function () {
	    this._models = Encoder.initBitModels(null, 1 << this._numBitLevels);
	  };
	
	  BitTreeEncoder.prototype.encode = function (rangeEncoder, symbol) {
	    var m = 1,
	        bitIndex;
	    for (bitIndex = this._numBitLevels; bitIndex > 0;) {
	      bitIndex--;
	      var bit = symbol >>> bitIndex & 1;
	      rangeEncoder.encode(this._models, m, bit);
	      m = m << 1 | bit;
	    }
	  };
	
	  BitTreeEncoder.prototype.reverseEncode = function (rangeEncoder, symbol) {
	    var m = 1,
	        i;
	    for (i = 0; i < this._numBitLevels; i++) {
	      var bit = symbol & 1;
	      rangeEncoder.encode(this._models, m, bit);
	      m = m << 1 | bit;
	      symbol >>>= 1;
	    }
	  };
	
	  BitTreeEncoder.reverseEncode = function (models, startIndex, rangeEncoder, numBitLevels, symbol) {
	    var m = 1,
	        i;
	    for (i = 0; i < numBitLevels; i++) {
	      var bit = symbol & 1;
	      rangeEncoder.encode(models, startIndex + m, bit);
	      m = m << 1 | bit;
	      symbol >>>= 1;
	    }
	  };
	
	  BitTreeEncoder.prototype.getPrice = function (symbol) {
	    var price = 0,
	        m = 1,
	        bitIndex;
	    for (bitIndex = this._numBitLevels; bitIndex > 0;) {
	      bitIndex--;
	      var bit = symbol >>> bitIndex & 1;
	      price += Encoder.getPrice(this._models[m], bit);
	      m = m << 1 | bit;
	    }
	    return price;
	  };
	
	  BitTreeEncoder.prototype.reverseGetPrice = function (symbol) {
	    var price = 0,
	        m = 1,
	        bitIndex;
	    for (bitIndex = this._numBitLevels; bitIndex > 0; bitIndex--) {
	      var bit = symbol & 1;
	      symbol >>>= 1;
	      price += Encoder.getPrice(this._models[m], bit);
	      m = m << 1 | bit;
	    }
	    return price;
	  };
	
	  BitTreeEncoder.reverseGetPrice = function (models, startIndex, numBitLevels, symbol) {
	    var price = 0,
	        m = 1,
	        bitIndex;
	    for (bitIndex = numBitLevels; bitIndex > 0; bitIndex--) {
	      var bit = symbol & 1;
	      symbol >>>= 1;
	      price += Encoder.getPrice(models[startIndex + m], bit);
	      m = m << 1 | bit;
	    }
	    return price;
	  };
	
	  freeze(BitTreeEncoder.prototype);
	  return freeze(BitTreeEncoder);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	if (false) {
	  var define = require('amdefine')(module);
	}
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(306)], __WEBPACK_AMD_DEFINE_RESULT__ = function (freeze) {
	  'use strict';
	
	  var Decoder = function Decoder(stream) {
	    if (stream) {
	      this.setStream(stream);
	      this.init();
	    }
	  };
	
	  Decoder.prototype.setStream = function (stream) {
	    this._stream = stream;
	  };
	
	  Decoder.prototype.releaseStream = function () {
	    this._stream = null;
	  };
	
	  Decoder.prototype.init = function () {
	    var i = 5;
	
	    this._code = 0;
	    this._range = -1;
	
	    while (i--) {
	      this._code = this._code << 8 | this._stream.readByte();
	    }
	  };
	
	  Decoder.prototype.decodeDirectBits = function (numTotalBits) {
	    var result = 0,
	        i = numTotalBits,
	        t;
	
	    while (i--) {
	      this._range >>>= 1;
	      t = this._code - this._range >>> 31;
	      this._code -= this._range & t - 1;
	      result = result << 1 | 1 - t;
	
	      if ((this._range & 0xff000000) === 0) {
	        this._code = this._code << 8 | this._stream.readByte();
	        this._range <<= 8;
	      }
	    }
	
	    return result;
	  };
	
	  Decoder.prototype.decodeBit = function (probs, index) {
	    var prob = probs[index],
	        newBound = (this._range >>> 11) * prob;
	
	    if ((this._code ^ 0x80000000) < (newBound ^ 0x80000000)) {
	      this._range = newBound;
	      probs[index] += 2048 - prob >>> 5;
	      if ((this._range & 0xff000000) === 0) {
	        this._code = this._code << 8 | this._stream.readByte();
	        this._range <<= 8;
	      }
	      return 0;
	    }
	
	    this._range -= newBound;
	    this._code -= newBound;
	    probs[index] -= prob >>> 5;
	    if ((this._range & 0xff000000) === 0) {
	      this._code = this._code << 8 | this._stream.readByte();
	      this._range <<= 8;
	    }
	    return 1;
	  };
	
	  freeze(Decoder.prototype);
	  return freeze(Decoder);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	if (false) {
	  var define = require('amdefine')(module);
	}
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(314), __webpack_require__(315), __webpack_require__(307), __webpack_require__(306), __webpack_require__(310)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Base, RangeCoder, LZ, freeze, makeBuffer) {
	  'use strict';
	  //});var Base,RangeCoder,LZ,makeBuffer;//XXX
	
	  // shortcuts
	
	  var initBitModels = RangeCoder.Encoder.initBitModels;
	
	  // constants
	  var EMatchFinderTypeBT2 = 0;
	  var EMatchFinderTypeBT4 = 1;
	
	  var kInfinityPrice = 0xFFFFFFF;
	  var kDefaultDictionaryLogSize = 22;
	  var kNumFastBytesDefault = 0x20;
	
	  var kNumOpts = 1 << 12;
	
	  var kPropSize = 5;
	
	  var g_FastPos = function () {
	    var g_FastPos = makeBuffer(1 << 11);
	    var kFastSlots = 22;
	    var c = 2;
	    var slotFast;
	    g_FastPos[0] = 0;
	    g_FastPos[1] = 1;
	    for (slotFast = 2; slotFast < kFastSlots; slotFast++) {
	      var j,
	          k = 1 << (slotFast >> 1) - 1;
	      for (j = 0; j < k; j++, c++) {
	        g_FastPos[c] = slotFast;
	      }
	    }
	    return g_FastPos;
	  }();
	
	  var getPosSlot = function getPosSlot(pos) {
	    if (pos < 1 << 11) {
	      return g_FastPos[pos];
	    }
	    if (pos < 1 << 21) {
	      return g_FastPos[pos >>> 10] + 20;
	    }
	    return g_FastPos[pos >>> 20] + 40;
	  };
	
	  var getPosSlot2 = function getPosSlot2(pos) {
	    if (pos < 1 << 17) {
	      return g_FastPos[pos >>> 6] + 12;
	    }
	    if (pos < 1 << 27) {
	      return g_FastPos[pos >>> 16] + 32;
	    }
	    return g_FastPos[pos >>> 26] + 52;
	  };
	
	  var Encoder = function Encoder() {
	    var i;
	    this._state = Base.stateInit();
	    this._previousByte = 0;
	    this._repDistances = []; // XXX use Uint32Array?
	    this._repDistances.length = Base.kNumRepDistances;
	
	    // these fields are defined much lower in the original Java source file
	    this._optimum = [];
	    this._matchFinder = null;
	    this._rangeEncoder = new RangeCoder.Encoder();
	
	    this._isMatch = initBitModels(null, Base.kNumStates << Base.kNumPosStatesBitsMax);
	    this._isRep = initBitModels(null, Base.kNumStates);
	    this._isRepG0 = initBitModels(null, Base.kNumStates);
	    this._isRepG1 = initBitModels(null, Base.kNumStates);
	    this._isRepG2 = initBitModels(null, Base.kNumStates);
	    this._isRep0Long = initBitModels(null, Base.kNumStates << Base.kNumPosStatesBitsMax);
	
	    this._posSlotEncoder = [];
	
	    this._posEncoders = initBitModels(null, Base.kNumFullDistances - Base.kEndPosModelIndex);
	
	    this._posAlignEncoder = new RangeCoder.BitTreeEncoder(Base.kNumAlignBits);
	
	    this._lenEncoder = new Encoder.LenPriceTableEncoder();
	    this._repMatchLenEncoder = new Encoder.LenPriceTableEncoder();
	
	    this._literalEncoder = new Encoder.LiteralEncoder();
	
	    this._matchDistances = [];
	    this._matchDistances.length = Base.kMatchMaxLen * 2 + 2;
	    for (i = 0; i < this._matchDistances.length; i++) {
	      this._matchDistances[i] = 0;
	    }
	
	    this._numFastBytes = kNumFastBytesDefault;
	    this._longestMatchLength = 0;
	    this._numDistancePairs = 0;
	
	    this._additionalOffset = 0;
	    this._optimumEndIndex = 0;
	    this._optimumCurrentIndex = 0;
	
	    this._longestMatchWasFound = false;
	
	    this._posSlotPrices = [];
	    this._distancesPrices = [];
	    this._alignPrices = [];
	    this._alignPriceCount = 0;
	
	    this._distTableSize = kDefaultDictionaryLogSize * 2;
	
	    this._posStateBits = 2;
	    this._posStateMask = 4 - 1;
	    this._numLiteralPosStateBits = 0;
	    this._numLiteralContextBits = 3;
	
	    this._dictionarySize = 1 << kDefaultDictionaryLogSize;
	    this._dictionarySizePrev = 0xFFFFFFFF;
	    this._numFastBytesPrev = 0xFFFFFFFF;
	
	    // note that this is a 53-bit variable, not 64-bit.  This sets the maximum
	    // encoded file size.
	    this.nowPos64 = 0;
	    this._finished = false;
	    this._inStream = null;
	
	    this._matchFinderType = EMatchFinderTypeBT4;
	    this._writeEndMark = false;
	    this._needReleaseMFStream = false;
	
	    // ...and even further down we find these:
	    this.reps = [];
	    this.repLens = [];
	    this.backRes = 0;
	
	    // ...keep going, eventually we find the constructor:
	    for (i = 0; i < kNumOpts; i++) {
	      this._optimum[i] = new Encoder.Optimal();
	    }
	    for (i = 0; i < Base.kNumLenToPosStates; i++) {
	      this._posSlotEncoder[i] = new RangeCoder.BitTreeEncoder(Base.kNumPosSlotBits);
	    }
	
	    this._matchPriceCount = 0;
	
	    // ...and just above the 'Code' method, we find:
	    this.processedInSize = [0];
	    this.processedOutSize = [0];
	    this.finished = [false];
	  };
	  Encoder.prototype.baseInit = function () {
	    var i;
	    this._state = Base.stateInit();
	    this._previousByte = 0;
	    for (i = 0; i < Base.kNumRepDistances; i++) {
	      this._repDistances[i] = 0;
	    }
	  };
	
	  var LiteralEncoder = Encoder.LiteralEncoder = function () {
	    this._coders = null;
	    this._numPrevBits = -1;
	    this._numPosBits = -1;
	    this._posMask = 0;
	  };
	
	  LiteralEncoder.Encoder2 = function () {
	    this._encoders = initBitModels(null, 0x300);
	  };
	
	  LiteralEncoder.Encoder2.prototype.init = function () {
	    initBitModels(this._encoders);
	  };
	
	  LiteralEncoder.Encoder2.prototype.encode = function (rangeEncoder, symbol) {
	    var context = 1,
	        i;
	    for (i = 7; i >= 0; i--) {
	      var bit = symbol >>> i & 1;
	      rangeEncoder.encode(this._encoders, context, bit);
	      context = context << 1 | bit;
	    }
	  };
	
	  LiteralEncoder.Encoder2.prototype.encodeMatched = function (rangeEncoder, matchByte, symbol) {
	    var context = 1,
	        same = true,
	        i;
	    for (i = 7; i >= 0; i--) {
	      var bit = symbol >> i & 1;
	      var state = context;
	      if (same) {
	        var matchBit = matchByte >>> i & 1;
	        state += 1 + matchBit << 8;
	        same = matchBit === bit;
	      }
	      rangeEncoder.encode(this._encoders, state, bit);
	      context = context << 1 | bit;
	    }
	  };
	
	  LiteralEncoder.Encoder2.prototype.getPrice = function (matchMode, matchByte, symbol) {
	    var price = 0;
	    var context = 1;
	    var i = 7;
	    var bit, matchBit;
	    if (matchMode) {
	      for (; i >= 0; i--) {
	        matchBit = matchByte >>> i & 1;
	        bit = symbol >>> i & 1;
	        price += RangeCoder.Encoder.getPrice(this._encoders[(1 + matchBit << 8) + context], bit);
	        context = context << 1 | bit;
	        if (matchBit !== bit) {
	          i--;
	          break;
	        }
	      }
	    }
	    for (; i >= 0; i--) {
	      bit = symbol >>> i & 1;
	      price += RangeCoder.Encoder.getPrice(this._encoders[context], bit);
	      context = context << 1 | bit;
	    }
	    return price;
	  };
	
	  LiteralEncoder.prototype.create = function (numPosBits, numPrevBits) {
	    var i;
	    if (this._coders && this._numPrevBits === numPrevBits && this._numPosBits === numPosBits) {
	      return;
	    }
	
	    this._numPosBits = numPosBits;
	    this._posMask = (1 << numPosBits) - 1;
	    this._numPrevBits = numPrevBits;
	    var numStates = 1 << this._numPrevBits + this._numPosBits;
	    this._coders = [];
	    for (i = 0; i < numStates; i++) {
	      this._coders[i] = new LiteralEncoder.Encoder2();
	    }
	  };
	
	  LiteralEncoder.prototype.init = function () {
	    var numStates = 1 << this._numPrevBits + this._numPosBits,
	        i;
	    for (i = 0; i < numStates; i++) {
	      this._coders[i].init();
	    }
	  };
	
	  LiteralEncoder.prototype.getSubCoder = function (pos, prevByte) {
	    return this._coders[((pos & this._posMask) << this._numPrevBits) + (prevByte >> 8 - this._numPrevBits)];
	  };
	
	  var LenEncoder = Encoder.LenEncoder = function () {
	    var posState;
	    this._choice = initBitModels(null, 2);
	    this._lowCoder = [];
	    this._midCoder = [];
	    this._highCoder = new RangeCoder.BitTreeEncoder(Base.kNumHighLenBits);
	
	    for (posState = 0; posState < Base.kNumPosStatesEncodingMax; posState++) {
	      this._lowCoder[posState] = new RangeCoder.BitTreeEncoder(Base.kNumLowLenBits);
	      this._midCoder[posState] = new RangeCoder.BitTreeEncoder(Base.kNumMidLenBits);
	    }
	  };
	
	  LenEncoder.prototype.init = function (numPosStates) {
	    var posState;
	    initBitModels(this._choice);
	    for (posState = 0; posState < numPosStates; posState++) {
	      this._lowCoder[posState].init();
	      this._midCoder[posState].init();
	    }
	    this._highCoder.init();
	  };
	
	  LenEncoder.prototype.encode = function (rangeEncoder, symbol, posState) {
	    if (symbol < Base.kNumLowLenSymbols) {
	      rangeEncoder.encode(this._choice, 0, 0);
	      this._lowCoder[posState].encode(rangeEncoder, symbol);
	    } else {
	      symbol -= Base.kNumLowLenSymbols;
	      rangeEncoder.encode(this._choice, 0, 1);
	      if (symbol < Base.kNumMidLenSymbols) {
	        rangeEncoder.encode(this._choice, 1, 0);
	        this._midCoder[posState].encode(rangeEncoder, symbol);
	      } else {
	        rangeEncoder.encode(this._choice, 1, 1);
	        this._highCoder.encode(rangeEncoder, symbol - Base.kNumMidLenSymbols);
	      }
	    }
	  };
	
	  LenEncoder.prototype.setPrices = function (posState, numSymbols, prices, st) {
	    var a0 = RangeCoder.Encoder.getPrice0(this._choice[0]);
	    var a1 = RangeCoder.Encoder.getPrice1(this._choice[0]);
	    var b0 = a1 + RangeCoder.Encoder.getPrice0(this._choice[1]);
	    var b1 = a1 + RangeCoder.Encoder.getPrice1(this._choice[1]);
	    var i;
	    for (i = 0; i < Base.kNumLowLenSymbols; i++) {
	      if (i >= numSymbols) {
	        return;
	      }
	      prices[st + i] = a0 + this._lowCoder[posState].getPrice(i);
	    }
	    for (; i < Base.kNumLowLenSymbols + Base.kNumMidLenSymbols; i++) {
	      if (i >= numSymbols) {
	        return;
	      }
	      prices[st + i] = b0 + this._midCoder[posState].getPrice(i - Base.kNumLowLenSymbols);
	    }
	    for (; i < numSymbols; i++) {
	      prices[st + i] = b1 + this._highCoder.getPrice(i - Base.kNumLowLenSymbols - Base.kNumMidLenSymbols);
	    }
	  };
	
	  var kNumLenSpecSymbols = Base.kNumLowLenSymbols + Base.kNumMidLenSymbols;
	
	  var LenPriceTableEncoder = Encoder.LenPriceTableEncoder = function () {
	    LenEncoder.call(this); // superclass constructor
	    this._prices = [];
	    this._counters = [];
	    this._tableSize = 0;
	  };
	  LenPriceTableEncoder.prototype = Object.create(LenEncoder.prototype);
	  LenPriceTableEncoder.prototype.setTableSize = function (tableSize) {
	    this._tableSize = tableSize;
	  };
	  LenPriceTableEncoder.prototype.getPrice = function (symbol, posState) {
	    return this._prices[posState * Base.kNumLenSymbols + symbol];
	  };
	  LenPriceTableEncoder.prototype.updateTable = function (posState) {
	    this.setPrices(posState, this._tableSize, this._prices, posState * Base.kNumLenSymbols);
	    this._counters[posState] = this._tableSize;
	  };
	  LenPriceTableEncoder.prototype.updateTables = function (numPosStates) {
	    var posState;
	    for (posState = 0; posState < numPosStates; posState++) {
	      this.updateTable(posState);
	    }
	  };
	  LenPriceTableEncoder.prototype.encode = function (superEncode) {
	    return function (rangeEncoder, symbol, posState) {
	      superEncode.call(this, rangeEncoder, symbol, posState);
	      if (--this._counters[posState] === 0) {
	        this.updateTable(posState);
	      }
	    };
	  }(LenPriceTableEncoder.prototype.encode);
	
	  var Optimal = Encoder.Optimal = function () {
	    this.state = 0;
	
	    this.prev1IsChar = false;
	    this.prev2 = false;
	
	    this.posPrev2 = 0;
	    this.backPrev2 = 0;
	
	    this.price = 0;
	    this.posPrev = 0;
	    this.backPrev = 0;
	
	    this.backs0 = 0;
	    this.backs1 = 0;
	    this.backs2 = 0;
	    this.backs3 = 0;
	  };
	  Optimal.prototype.makeAsChar = function () {
	    this.backPrev = -1;
	    this.prev1IsChar = false;
	  };
	  Optimal.prototype.makeAsShortRep = function () {
	    this.backPrev = 0;
	    this.prev1IsChar = false;
	  };
	  Optimal.prototype.isShortRep = function () {
	    return this.backPrev === 0;
	  };
	
	  // back to the Encoder class!
	  Encoder.prototype.create = function () {
	    var numHashBytes;
	    if (!this._matchFinder) {
	      var bt = new LZ.BinTree();
	      numHashBytes = 4;
	      if (this._matchFinderType === EMatchFinderTypeBT2) {
	        numHashBytes = 2;
	      }
	      bt.setType(numHashBytes);
	      this._matchFinder = bt;
	    }
	    this._literalEncoder.create(this._numLiteralPosStateBits, this._numLiteralContextBits);
	
	    if (this._dictionarySize === this._dictionarySizePrev && this._numFastBytesPrev === this._numFastBytes) {
	      return;
	    }
	    this._matchFinder.create(this._dictionarySize, kNumOpts, this._numFastBytes, Base.kMatchMaxLen + 1);
	    this._dictionarySizePrev = this._dictionarySize;
	    this._numFastBytesPrev = this._numFastBytes;
	  };
	
	  Encoder.prototype.setWriteEndMarkerMode = function (writeEndMarker) {
	    this._writeEndMark = writeEndMarker;
	  };
	
	  Encoder.prototype.init = function () {
	    var i;
	    this.baseInit();
	    this._rangeEncoder.init();
	
	    initBitModels(this._isMatch);
	    initBitModels(this._isRep0Long);
	    initBitModels(this._isRep);
	    initBitModels(this._isRepG0);
	    initBitModels(this._isRepG1);
	    initBitModels(this._isRepG2);
	    initBitModels(this._posEncoders);
	
	    this._literalEncoder.init();
	    for (i = 0; i < Base.kNumLenToPosStates; i++) {
	      this._posSlotEncoder[i].init();
	    }
	
	    this._lenEncoder.init(1 << this._posStateBits);
	    this._repMatchLenEncoder.init(1 << this._posStateBits);
	
	    this._posAlignEncoder.init();
	
	    this._longestMatchWasFound = false;
	    this._optimumEndIndex = 0;
	    this._optimumCurrentIndex = 0;
	    this._additionalOffset = 0;
	  };
	
	  Encoder.prototype.readMatchDistances = function () {
	    var lenRes = 0;
	    this._numDistancePairs = this._matchFinder.getMatches(this._matchDistances);
	    if (this._numDistancePairs > 0) {
	      lenRes = this._matchDistances[this._numDistancePairs - 2];
	      if (lenRes === this._numFastBytes) {
	        lenRes += this._matchFinder.getMatchLen(lenRes - 1, this._matchDistances[this._numDistancePairs - 1], Base.kMatchMaxLen - lenRes);
	      }
	    }
	    this._additionalOffset++;
	    // [csa] Gary Linscott thinks that numDistancePairs should be a retval here.
	    return lenRes;
	  };
	
	  Encoder.prototype.movePos = function (num) {
	    if (num > 0) {
	      this._matchFinder.skip(num);
	      this._additionalOffset += num;
	    }
	  };
	
	  Encoder.prototype.getRepLen1Price = function (state, posState) {
	    return RangeCoder.Encoder.getPrice0(this._isRepG0[state]) + RangeCoder.Encoder.getPrice0(this._isRep0Long[(state << Base.kNumPosStatesBitsMax) + posState]);
	  };
	
	  Encoder.prototype.getPureRepPrice = function (repIndex, state, posState) {
	    var price;
	    if (repIndex === 0) {
	      price = RangeCoder.Encoder.getPrice0(this._isRepG0[state]);
	      price += RangeCoder.Encoder.getPrice1(this._isRep0Long[(state << Base.kNumPosStatesBitsMax) + posState]);
	    } else {
	      price = RangeCoder.Encoder.getPrice1(this._isRepG0[state]);
	      if (repIndex === 1) {
	        price += RangeCoder.Encoder.getPrice0(this._isRepG1[state]);
	      } else {
	        price += RangeCoder.Encoder.getPrice1(this._isRepG1[state]);
	        price += RangeCoder.Encoder.getPrice(this._isRepG2[state], repIndex - 2);
	      }
	    }
	    return price;
	  };
	
	  Encoder.prototype.getRepPrice = function (repIndex, len, state, posState) {
	    var price = this._repMatchLenEncoder.getPrice(len - Base.kMatchMinLen, posState);
	    return price + this.getPureRepPrice(repIndex, state, posState);
	  };
	
	  Encoder.prototype.getPosLenPrice = function (pos, len, posState) {
	    var price;
	    var lenToPosState = Base.getLenToPosState(len);
	    if (pos < Base.kNumFullDistances) {
	      price = this._distancesPrices[lenToPosState * Base.kNumFullDistances + pos];
	    } else {
	      price = this._posSlotPrices[(lenToPosState << Base.kNumPosSlotBits) + getPosSlot2(pos)] + this._alignPrices[pos & Base.kAlignMask];
	    }
	    return price + this._lenEncoder.getPrice(len - Base.kMatchMinLen, posState);
	  };
	
	  Encoder.prototype.backward = function (cur) {
	    this._optimumEndIndex = cur;
	    var posMem = this._optimum[cur].posPrev;
	    var backMem = this._optimum[cur].backPrev;
	    do {
	      if (this._optimum[cur].prev1IsChar) {
	        this._optimum[posMem].makeAsChar();
	        this._optimum[posMem].posPrev = posMem - 1;
	        if (this._optimum[cur].prev2) {
	          this._optimum[posMem - 1].prev1IsChar = false;
	          this._optimum[posMem - 1].posPrev = this._optimum[cur].posPrev2;
	          this._optimum[posMem - 1].backPrev = this._optimum[cur].backPrev2;
	        }
	      }
	      var posPrev = posMem;
	      var backCur = backMem;
	
	      backMem = this._optimum[posPrev].backPrev;
	      posMem = this._optimum[posPrev].posPrev;
	
	      this._optimum[posPrev].backPrev = backCur;
	      this._optimum[posPrev].posPrev = cur;
	      cur = posPrev;
	    } while (cur > 0);
	
	    this.backRes = this._optimum[0].backPrev;
	    this._optimumCurrentIndex = this._optimum[0].posPrev;
	    // [csa] Gary Linscott thinks that backRes should be a retval here.
	    return this._optimumCurrentIndex;
	  };
	
	  Encoder.prototype.getOptimum = function (position) {
	
	    if (this._optimumEndIndex !== this._optimumCurrentIndex) {
	      var lenRes = this._optimum[this._optimumCurrentIndex].posPrev - this._optimumCurrentIndex;
	      this.backRes = this._optimum[this._optimumCurrentIndex].backPrev;
	      this._optimumCurrentIndex = this._optimum[this._optimumCurrentIndex].posPrev;
	      // [csa] Gary Linscott thinks that backRes should be a retval here.
	      return lenRes;
	    }
	    this._optimumCurrentIndex = this._optimumEndIndex = 0;
	
	    var lenMain;
	    if (!this._longestMatchWasFound) {
	      lenMain = this.readMatchDistances();
	    } else {
	      lenMain = this._longestMatchLength;
	      this._longestMatchWasFound = false;
	    }
	    var numDistancePairs = this._numDistancePairs;
	
	    var numAvailableBytes = this._matchFinder.getNumAvailableBytes() + 1;
	    if (numAvailableBytes < 2) {
	      this.backRes = -1;
	      // [csa] Gary Linscott thinks that backRes should be a retval here.
	      return 1;
	    }
	    if (numAvailableBytes > Base.kMatchMaxLen) {
	      numAvailableBytes = Base.kMatchMaxLen;
	    }
	
	    var repMaxIndex = 0,
	        i;
	    for (i = 0; i < Base.kNumRepDistances; i++) {
	      this.reps[i] = this._repDistances[i];
	      this.repLens[i] = this._matchFinder.getMatchLen(-1, this.reps[i], Base.kMatchMaxLen);
	      if (this.repLens[i] > this.repLens[repMaxIndex]) {
	        repMaxIndex = i;
	      }
	    }
	    if (this.repLens[repMaxIndex] >= this._numFastBytes) {
	      this.backRes = repMaxIndex;
	      var lenRes2 = this.repLens[repMaxIndex];
	      this.movePos(lenRes2 - 1);
	      // [csa] Gary Linscott thinks that backRes should be a retval here.
	      return lenRes2;
	    }
	
	    if (lenMain >= this._numFastBytes) {
	      // [csa] Gary Linscott thinks that backRes should be a retval here.
	      this.backRes = this._matchDistances[numDistancePairs - 1] + Base.kNumRepDistances;
	      this.movePos(lenMain - 1);
	      return lenMain;
	    }
	
	    var currentByte = this._matchFinder.getIndexByte(-1);
	    var matchByte = this._matchFinder.getIndexByte(-this._repDistances[0] - 2);
	
	    if (lenMain < 2 && currentByte !== matchByte && this.repLens[repMaxIndex] < 2) {
	      // [csa] Gary Linscott thinks that backRes should be a retval here.
	      this.backRes = -1;
	      return 1;
	    }
	
	    this._optimum[0].state = this._state;
	
	    var posState = position & this._posStateMask;
	
	    this._optimum[1].price = RangeCoder.Encoder.getPrice0(this._isMatch[(this._state << Base.kNumPosStatesBitsMax) + posState]) + this._literalEncoder.getSubCoder(position, this._previousByte).getPrice(!Base.stateIsCharState(this._state), matchByte, currentByte);
	    this._optimum[1].makeAsChar();
	
	    var matchPrice = RangeCoder.Encoder.getPrice1(this._isMatch[(this._state << Base.kNumPosStatesBitsMax) + posState]);
	    var repMatchPrice = matchPrice + RangeCoder.Encoder.getPrice1(this._isRep[this._state]);
	
	    if (matchByte === currentByte) {
	      var shortRepPrice = repMatchPrice + this.getRepLen1Price(this._state, posState);
	      if (shortRepPrice < this._optimum[1].price) {
	        this._optimum[1].price = shortRepPrice;
	        this._optimum[1].makeAsShortRep();
	      }
	    }
	
	    var lenEnd = lenMain >= this.repLens[repMaxIndex] ? lenMain : this.repLens[repMaxIndex];
	    if (lenEnd < 2) {
	      // [csa] Gary Linscott thinks that backRes should be a retval here.
	      this.backRes = this._optimum[1].backPrev;
	      return 1;
	    }
	
	    this._optimum[1].posPrev = 0;
	
	    this._optimum[0].backs0 = this.reps[0];
	    this._optimum[0].backs1 = this.reps[1];
	    this._optimum[0].backs2 = this.reps[2];
	    this._optimum[0].backs3 = this.reps[3];
	
	    var len = lenEnd;
	    do {
	      this._optimum[len--].price = kInfinityPrice;
	    } while (len >= 2);
	
	    for (i = 0; i < Base.kNumRepDistances; i++) {
	      var repLen = this.repLens[i];
	      if (repLen < 2) {
	        continue;
	      }
	      var price = repMatchPrice + this.getPureRepPrice(i, this._state, posState);
	      do {
	        var curAndLenPrice = price + this._repMatchLenEncoder.getPrice(repLen - 2, posState);
	        var optimum = this._optimum[repLen];
	        if (curAndLenPrice < optimum.price) {
	          optimum.price = curAndLenPrice;
	          optimum.posPrev = 0;
	          optimum.backPrev = i;
	          optimum.prev1IsChar = false;
	        }
	      } while (--repLen >= 2);
	    }
	
	    var normalMatchPrice = matchPrice + RangeCoder.Encoder.getPrice0(this._isRep[this._state]);
	
	    len = this.repLens[0] >= 2 ? this.repLens[0] + 1 : 2;
	    if (len <= lenMain) {
	      var offs = 0;
	      while (len > this._matchDistances[offs]) {
	        offs += 2;
	      }
	      for (;; len++) {
	        var distance = this._matchDistances[offs + 1];
	        var curAndLenPrice2 = normalMatchPrice + this.getPosLenPrice(distance, len, posState);
	        var optimum2 = this._optimum[len];
	        if (curAndLenPrice2 < optimum2.price) {
	          optimum2.price = curAndLenPrice2;
	          optimum2.posPrev = 0;
	          optimum2.backPrev = distance + Base.kNumRepDistances;
	          optimum2.prev1IsChar = false;
	        }
	        if (len === this._matchDistances[offs]) {
	          offs += 2;
	          if (offs === numDistancePairs) {
	            break;
	          }
	        }
	      }
	    }
	
	    var cur = 0;
	    while (true) {
	      cur++;
	      if (cur === lenEnd) {
	        return this.backward(cur);
	      }
	      var newLen = this.readMatchDistances();
	      numDistancePairs = this._numDistancePairs;
	      if (newLen >= this._numFastBytes) {
	        this._longestMatchLength = newLen;
	        this._longestMatchWasFound = true;
	        return this.backward(cur);
	      }
	      position++;
	      var posPrev = this._optimum[cur].posPrev;
	      var state;
	      if (this._optimum[cur].prev1IsChar) {
	        posPrev--;
	        if (this._optimum[cur].prev2) {
	          state = this._optimum[this._optimum[cur].posPrev2].state;
	          if (this._optimum[cur].backPrev2 < Base.kNumRepDistances) {
	            state = Base.stateUpdateRep(state);
	          } else {
	            state = Base.stateUpdateMatch(state);
	          }
	        } else {
	          state = this._optimum[posPrev].state;
	        }
	        state = Base.stateUpdateChar(state);
	      } else {
	        state = this._optimum[posPrev].state;
	      }
	      if (posPrev === cur - 1) {
	        if (this._optimum[cur].isShortRep()) {
	          state = Base.stateUpdateShortRep(state);
	        } else {
	          state = Base.stateUpdateChar(state);
	        }
	      } else {
	        var pos;
	        if (this._optimum[cur].prev1IsChar && this._optimum[cur].prev2) {
	          posPrev = this._optimum[cur].posPrev2;
	          pos = this._optimum[cur].backPrev2;
	          state = Base.stateUpdateRep(state);
	        } else {
	          pos = this._optimum[cur].backPrev;
	          if (pos < Base.kNumRepDistances) {
	            state = Base.stateUpdateRep(state);
	          } else {
	            state = Base.stateUpdateMatch(state);
	          }
	        }
	
	        var opt = this._optimum[posPrev];
	        if (pos < Base.kNumRepDistances) {
	          if (pos === 0) {
	            this.reps[0] = opt.backs0;
	            this.reps[1] = opt.backs1;
	            this.reps[2] = opt.backs2;
	            this.reps[3] = opt.backs3;
	          } else if (pos === 1) {
	            this.reps[0] = opt.backs1;
	            this.reps[1] = opt.backs0;
	            this.reps[2] = opt.backs2;
	            this.reps[3] = opt.backs3;
	          } else if (pos === 2) {
	            this.reps[0] = opt.backs2;
	            this.reps[1] = opt.backs0;
	            this.reps[2] = opt.backs1;
	            this.reps[3] = opt.backs3;
	          } else {
	            this.reps[0] = opt.backs3;
	            this.reps[1] = opt.backs0;
	            this.reps[2] = opt.backs1;
	            this.reps[3] = opt.backs2;
	          }
	        } else {
	          this.reps[0] = pos - Base.kNumRepDistances;
	          this.reps[1] = opt.backs0;
	          this.reps[2] = opt.backs1;
	          this.reps[3] = opt.backs2;
	        }
	      }
	      this._optimum[cur].state = state;
	      this._optimum[cur].backs0 = this.reps[0];
	      this._optimum[cur].backs1 = this.reps[1];
	      this._optimum[cur].backs2 = this.reps[2];
	      this._optimum[cur].backs3 = this.reps[3];
	      var curPrice = this._optimum[cur].price;
	
	      currentByte = this._matchFinder.getIndexByte(-1);
	      matchByte = this._matchFinder.getIndexByte(-this.reps[0] - 2);
	      posState = position & this._posStateMask;
	
	      var curAnd1Price = curPrice + RangeCoder.Encoder.getPrice0(this._isMatch[(state << Base.kNumPosStatesBitsMax) + posState]) + this._literalEncoder.getSubCoder(position, this._matchFinder.getIndexByte(-2)).getPrice(!Base.stateIsCharState(state), matchByte, currentByte);
	
	      var nextOptimum = this._optimum[cur + 1];
	
	      var nextIsChar = false;
	      if (curAnd1Price < nextOptimum.price) {
	        nextOptimum.price = curAnd1Price;
	        nextOptimum.posPrev = cur;
	        nextOptimum.makeAsChar();
	        nextIsChar = true;
	      }
	
	      matchPrice = curPrice + RangeCoder.Encoder.getPrice1(this._isMatch[(state << Base.kNumPosStatesBitsMax) + posState]);
	      repMatchPrice = matchPrice + RangeCoder.Encoder.getPrice1(this._isRep[state]);
	
	      if (matchByte === currentByte && !(nextOptimum.posPrev < cur && nextOptimum.backPrev === 0)) {
	        var shortRepPrice2 = repMatchPrice + this.getRepLen1Price(state, posState);
	        if (shortRepPrice2 <= nextOptimum.price) {
	          nextOptimum.price = shortRepPrice2;
	          nextOptimum.posPrev = cur;
	          nextOptimum.makeAsShortRep();
	          nextIsChar = true;
	        }
	      }
	
	      var numAvailableBytesFull = this._matchFinder.getNumAvailableBytes() + 1;
	      numAvailableBytesFull = Math.min(kNumOpts - 1 - cur, numAvailableBytesFull);
	      numAvailableBytes = numAvailableBytesFull;
	
	      if (numAvailableBytes < 2) {
	        continue;
	      }
	      if (numAvailableBytes > this._numFastBytes) {
	        numAvailableBytes = this._numFastBytes;
	      }
	      if (!nextIsChar && matchByte !== currentByte) {
	        // Try Literal + rep0
	        var t = Math.min(numAvailableBytesFull - 1, this._numFastBytes);
	        var lenTest2 = this._matchFinder.getMatchLen(0, this.reps[0], t);
	        if (lenTest2 >= 2) {
	          var state2 = Base.stateUpdateChar(state);
	
	          var posStateNext = position + 1 & this._posStateMask;
	          var nextRepMatchPrice = curAnd1Price + RangeCoder.Encoder.getPrice1(this._isMatch[(state2 << Base.kNumPosStatesBitsMax) + posStateNext]) + RangeCoder.Encoder.getPrice1(this._isRep[state2]);
	
	          var offset = cur + 1 + lenTest2;
	          while (lenEnd < offset) {
	            this._optimum[++lenEnd].price = kInfinityPrice;
	          }
	          var curAndLenPrice3 = nextRepMatchPrice + this.getRepPrice(0, lenTest2, state2, posStateNext);
	          var optimum3 = this._optimum[offset];
	          if (curAndLenPrice3 < optimum3.price) {
	            optimum3.price = curAndLenPrice3;
	            optimum3.posPrev = cur + 1;
	            optimum3.backPrev = 0;
	            optimum3.prev1IsChar = true;
	            optimum3.prev2 = false;
	          }
	        }
	      }
	
	      var startLen = 2; // Speed optimization
	
	      var repIndex;
	      for (repIndex = 0; repIndex < Base.kNumRepDistances; repIndex++) {
	        var lenTest = this._matchFinder.getMatchLen(-1, this.reps[repIndex], numAvailableBytes);
	        if (lenTest < 2) {
	          continue;
	        }
	        var lenTestTemp = lenTest;
	        do {
	          while (lenEnd < cur + lenTest) {
	            this._optimum[++lenEnd].price = kInfinityPrice;
	          }
	          var curAndLenPrice4 = repMatchPrice + this.getRepPrice(repIndex, lenTest, state, posState);
	          var optimum4 = this._optimum[cur + lenTest];
	          if (curAndLenPrice4 < optimum4.price) {
	            optimum4.price = curAndLenPrice4;
	            optimum4.posPrev = cur;
	            optimum4.backPrev = repIndex;
	            optimum4.prev1IsChar = false;
	          }
	        } while (--lenTest >= 2);
	        lenTest = lenTestTemp;
	
	        if (repIndex === 0) {
	          startLen = lenTest + 1;
	        }
	
	        // if (_maxMode)
	        if (lenTest < numAvailableBytesFull) {
	          var t5 = Math.min(numAvailableBytesFull - 1 - lenTest, this._numFastBytes);
	          var lenTest25 = this._matchFinder.getMatchLen(lenTest, this.reps[repIndex], t5);
	          if (lenTest25 >= 2) {
	            var state25 = Base.stateUpdateRep(state);
	            var posStateNext5 = position + lenTest & this._posStateMask;
	            var curAndLenCharPrice = repMatchPrice + this.getRepPrice(repIndex, lenTest, state, posState) + RangeCoder.Encoder.getPrice0(this._isMatch[(state25 << Base.kNumPosStatesBitsMax) + posStateNext5]) + this._literalEncoder.getSubCoder(position + lenTest, this._matchFinder.getIndexByte(lenTest - 2)).getPrice(true, this._matchFinder.getIndexByte(lenTest - 1 - (this.reps[repIndex] + 1)), this._matchFinder.getIndexByte(lenTest - 1));
	
	            state25 = Base.stateUpdateChar(state25);
	            posStateNext5 = position + lenTest + 1 & this._posStateMask;
	            var nextMatchPrice5 = curAndLenCharPrice + RangeCoder.Encoder.getPrice1(this._isMatch[(state25 << Base.kNumPosStatesBitsMax) + posStateNext5]);
	            var nextRepMatchPrice5 = nextMatchPrice5 + RangeCoder.Encoder.getPrice1(this._isRep[state25]);
	
	            // for(; lenTest2 >= 2; lenTest2--) {
	            var offset5 = lenTest + 1 + lenTest25;
	            while (lenEnd < cur + offset5) {
	              this._optimum[++lenEnd].price = kInfinityPrice;
	            }
	            var curAndLenPrice5 = nextRepMatchPrice5 + this.getRepPrice(0, lenTest25, state25, posStateNext5);
	            var optimum5 = this._optimum[cur + offset5];
	            if (curAndLenPrice5 < optimum5.price) {
	              optimum5.price = curAndLenPrice5;
	              optimum5.posPrev = cur + lenTest + 1;
	              optimum5.backPrev = 0;
	              optimum5.prev1IsChar = true;
	              optimum5.prev2 = true;
	              optimum5.posPrev2 = cur;
	              optimum5.backPrev2 = repIndex;
	            }
	          }
	        }
	      }
	
	      if (newLen > numAvailableBytes) {
	        newLen = numAvailableBytes;
	        numDistancePairs = 0;
	        while (newLen > this._matchDistances[numDistancePairs]) {
	          numDistancePairs += 2;
	        }
	        this._matchDistances[numDistancePairs] = newLen;
	        numDistancePairs += 2;
	      }
	      if (newLen >= startLen) {
	        normalMatchPrice = matchPrice + RangeCoder.Encoder.getPrice0(this._isRep[state]);
	        while (lenEnd < cur + newLen) {
	          this._optimum[++lenEnd].price = kInfinityPrice;
	        }
	
	        var offs6 = 0;
	        while (startLen > this._matchDistances[offs6]) {
	          offs6 += 2;
	        }
	
	        var lenTest6;
	        for (lenTest6 = startLen;; lenTest6++) {
	          var curBack = this._matchDistances[offs6 + 1];
	          var curAndLenPrice6 = normalMatchPrice + this.getPosLenPrice(curBack, lenTest6, posState);
	          var optimum6 = this._optimum[cur + lenTest6];
	          if (curAndLenPrice6 < optimum6.price) {
	            optimum6.price = curAndLenPrice6;
	            optimum6.posPrev = cur;
	            optimum6.backPrev = curBack + Base.kNumRepDistances;
	            optimum6.prev1IsChar = false;
	          }
	
	          if (lenTest6 === this._matchDistances[offs6]) {
	            if (lenTest6 < numAvailableBytesFull) {
	              var t7 = Math.min(numAvailableBytesFull - 1 - lenTest6, this._numFastBytes);
	              var lenTest27 = this._matchFinder.getMatchLen(lenTest6, curBack, t7);
	              if (lenTest27 >= 2) {
	                var state27 = Base.stateUpdateMatch(state);
	
	                var posStateNext7 = position + lenTest6 & this._posStateMask;
	                var curAndLenCharPrice7 = curAndLenPrice6 + RangeCoder.Encoder.getPrice0(this._isMatch[(state27 << Base.kNumPosStatesBitsMax) + posStateNext7]) + this._literalEncoder.getSubCoder(position + lenTest6, this._matchFinder.getIndexByte(lenTest6 - 2)).getPrice(true, this._matchFinder.getIndexByte(lenTest6 - (curBack + 1) - 1), this._matchFinder.getIndexByte(lenTest6 - 1));
	                state27 = Base.stateUpdateChar(state27);
	                posStateNext7 = position + lenTest6 + 1 & this._posStateMask;
	                var nextMatchPrice7 = curAndLenCharPrice7 + RangeCoder.Encoder.getPrice1(this._isMatch[(state27 << Base.kNumPosStatesBitsMax) + posStateNext7]);
	                var nextRepMatchPrice7 = nextMatchPrice7 + RangeCoder.Encoder.getPrice1(this._isRep[state27]);
	
	                var offset7 = lenTest6 + 1 + lenTest27;
	                while (lenEnd < cur + offset7) {
	                  this._optimum[++lenEnd].price = kInfinityPrice;
	                }
	                var curAndLenPrice7 = nextRepMatchPrice7 + this.getRepPrice(0, lenTest27, state27, posStateNext7);
	                var optimum7 = this._optimum[cur + offset7];
	                if (curAndLenPrice7 < optimum7.price) {
	                  optimum7.price = curAndLenPrice7;
	                  optimum7.posPrev = cur + lenTest6 + 1;
	                  optimum7.backPrev = 0;
	                  optimum7.prev1IsChar = true;
	                  optimum7.prev2 = true;
	                  optimum7.posPrev2 = cur;
	                  optimum7.backPrev2 = curBack + Base.kNumRepDistances;
	                }
	              }
	            }
	            offs6 += 2;
	            if (offs6 === numDistancePairs) {
	              break;
	            }
	          }
	        }
	      }
	    }
	  };
	
	  Encoder.prototype.changePair = function (smallDist, bigDist) {
	    var kDif = 7;
	    return smallDist < 1 << 32 - kDif && bigDist >= smallDist << kDif;
	  };
	
	  Encoder.prototype.writeEndMarker = function (posState) {
	    if (!this._writeEndMark) {
	      return;
	    }
	
	    this._rangeEncoder.encode(this._isMatch, (this._state << Base.kNumPosStatesBitsMax) + posState, 1);
	    this._rangeEncoder.encode(this._isRep, this._state, 0);
	    this._state = Base.stateUpdateMatch(this._state);
	    var len = Base.kMatchMinLen;
	    this._lenEncoder.encode(this._rangeEncoder, len - Base.kMatchMinLen, posState);
	    var posSlot = (1 << Base.kNumPosSlotBits) - 1;
	    var lenToPosState = Base.getLenToPosState(len);
	    this._posSlotEncoder[lenToPosState].encode(this._rangeEncoder, posSlot);
	    var footerBits = 30;
	    var posReduced = (1 << footerBits) - 1;
	    this._rangeEncoder.encodeDirectBits(posReduced >> Base.kNumAlignBits, footerBits - Base.kNumAlignBits);
	    this._posAlignEncoder.reverseEncode(this._rangeEncoder, posReduced & Base.kAlignMask);
	  };
	
	  Encoder.prototype.flush = function (nowPos) {
	    this.releaseMFStream();
	    this.writeEndMarker(nowPos & this._posStateMask);
	    this._rangeEncoder.flushData();
	    this._rangeEncoder.flushStream();
	  };
	
	  Encoder.prototype.codeOneBlock = function (inSize, outSize, finished) {
	    inSize[0] = 0;
	    outSize[0] = 0;
	    finished[0] = true;
	
	    if (this._inStream) {
	      this._matchFinder.setStream(this._inStream);
	      this._matchFinder.init();
	      this._needReleaseMFStream = true;
	      this._inStream = null;
	    }
	
	    if (this._finished) {
	      return;
	    }
	    this._finished = true;
	
	    var progressPosValuePrev = this.nowPos64;
	    var posState, curByte, i;
	
	    if (this.nowPos64 === 0) {
	      if (this._matchFinder.getNumAvailableBytes() === 0) {
	        this.flush(this.nowPos64);
	        return;
	      }
	
	      this.readMatchDistances();
	      posState = this.nowPos64 & this._posStateMask;
	      this._rangeEncoder.encode(this._isMatch, (this._state << Base.kNumPosStatesBitsMax) + posState, 0);
	      this._state = Base.stateUpdateChar(this._state);
	      curByte = this._matchFinder.getIndexByte(0 - this._additionalOffset);
	      this._literalEncoder.getSubCoder(this.nowPos64, this._previousByte).encode(this._rangeEncoder, curByte);
	      this._previousByte = curByte;
	      this._additionalOffset--;
	      this.nowPos64++;
	    }
	    if (this._matchFinder.getNumAvailableBytes() === 0) {
	      this.flush(this.nowPos64);
	      return;
	    }
	    while (true) {
	      var len = this.getOptimum(this.nowPos64);
	      var pos = this.backRes;
	      posState = this.nowPos64 & this._posStateMask;
	      var complexState = (this._state << Base.kNumPosStatesBitsMax) + posState;
	      if (len === 1 && pos === -1) {
	        this._rangeEncoder.encode(this._isMatch, complexState, 0);
	        curByte = this._matchFinder.getIndexByte(-this._additionalOffset);
	        var subCoder = this._literalEncoder.getSubCoder(this.nowPos64, this._previousByte);
	        if (!Base.stateIsCharState(this._state)) {
	          var matchByte = this._matchFinder.getIndexByte(-this._repDistances[0] - 1 - this._additionalOffset);
	          subCoder.encodeMatched(this._rangeEncoder, matchByte, curByte);
	        } else {
	          subCoder.encode(this._rangeEncoder, curByte);
	        }
	        this._previousByte = curByte;
	        this._state = Base.stateUpdateChar(this._state);
	      } else {
	        this._rangeEncoder.encode(this._isMatch, complexState, 1);
	        if (pos < Base.kNumRepDistances) {
	          this._rangeEncoder.encode(this._isRep, this._state, 1);
	          if (pos === 0) {
	            this._rangeEncoder.encode(this._isRepG0, this._state, 0);
	            if (len === 1) {
	              this._rangeEncoder.encode(this._isRep0Long, complexState, 0);
	            } else {
	              this._rangeEncoder.encode(this._isRep0Long, complexState, 1);
	            }
	          } else {
	            this._rangeEncoder.encode(this._isRepG0, this._state, 1);
	            if (pos === 1) {
	              this._rangeEncoder.encode(this._isRepG1, this._state, 0);
	            } else {
	              this._rangeEncoder.encode(this._isRepG1, this._state, 1);
	              this._rangeEncoder.encode(this._isRepG2, this._state, pos - 2);
	            }
	          }
	          if (len === 1) {
	            this._state = Base.stateUpdateShortRep(this._state);
	          } else {
	            this._repMatchLenEncoder.encode(this._rangeEncoder, len - Base.kMatchMinLen, posState);
	            this._state = Base.stateUpdateRep(this._state);
	          }
	          var distance = this._repDistances[pos];
	          if (pos !== 0) {
	            for (i = pos; i >= 1; i--) {
	              this._repDistances[i] = this._repDistances[i - 1];
	            }
	            this._repDistances[0] = distance;
	          }
	        } else {
	          this._rangeEncoder.encode(this._isRep, this._state, 0);
	          this._state = Base.stateUpdateMatch(this._state);
	          this._lenEncoder.encode(this._rangeEncoder, len - Base.kMatchMinLen, posState);
	          pos -= Base.kNumRepDistances;
	          var posSlot = getPosSlot(pos);
	          var lenToPosState = Base.getLenToPosState(len);
	          this._posSlotEncoder[lenToPosState].encode(this._rangeEncoder, posSlot);
	
	          if (posSlot >= Base.kStartPosModelIndex) {
	            var footerBits = (posSlot >>> 1) - 1;
	            var baseVal = (2 | posSlot & 1) << footerBits;
	            var posReduced = pos - baseVal;
	
	            if (posSlot < Base.kEndPosModelIndex) {
	              RangeCoder.BitTreeEncoder.reverseEncode(this._posEncoders, baseVal - posSlot - 1, this._rangeEncoder, footerBits, posReduced);
	            } else {
	              this._rangeEncoder.encodeDirectBits(posReduced >> Base.kNumAlignBits, footerBits - Base.kNumAlignBits);
	              this._posAlignEncoder.reverseEncode(this._rangeEncoder, posReduced & Base.kAlignMask);
	              this._alignPriceCount++;
	            }
	          }
	          var distance2 = pos;
	          for (i = Base.kNumRepDistances - 1; i >= 1; i--) {
	            this._repDistances[i] = this._repDistances[i - 1];
	          }
	          this._repDistances[0] = distance2;
	          this._matchPriceCount++;
	        }
	        this._previousByte = this._matchFinder.getIndexByte(len - 1 - this._additionalOffset);
	      }
	      this._additionalOffset -= len;
	      this.nowPos64 += len;
	      if (this._additionalOffset === 0) {
	        // if (!_fastMode)
	        if (this._matchPriceCount >= 1 << 7) {
	          this.fillDistancesPrices();
	        }
	        if (this._alignPriceCount >= Base.kAlignTableSize) {
	          this.fillAlignPrices();
	        }
	        inSize[0] = this.nowPos64;
	        outSize[0] = this._rangeEncoder.getProcessedSizeAdd();
	
	        if (this._matchFinder.getNumAvailableBytes() === 0) {
	          this.flush(this.nowPos64);
	          return;
	        }
	
	        if (this.nowPos64 - progressPosValuePrev >= 1 << 12) {
	          this._finished = false;
	          finished[0] = false;
	          return;
	        }
	      }
	    }
	  };
	
	  Encoder.prototype.releaseMFStream = function () {
	    if (this._matchFinder && this._needReleaseMFStream) {
	      this._matchFinder.releaseStream();
	      this._needReleaseMFStream = false;
	    }
	  };
	
	  Encoder.prototype.setOutStream = function (outStream) {
	    this._rangeEncoder.setStream(outStream);
	  };
	  Encoder.prototype.releaseOutStream = function () {
	    this._rangeEncoder.releaseStream();
	  };
	
	  Encoder.prototype.releaseStreams = function () {
	    this.releaseMFStream();
	    this.releaseOutStream();
	  };
	
	  Encoder.prototype.setStreams = function (inStream, outStream, inSize, outSize) {
	    this._inStream = inStream;
	    this._finished = false;
	    this.create();
	    this.setOutStream(outStream);
	    this.init();
	
	    // if (!_fastMode)
	    if (true) {
	      this.fillDistancesPrices();
	      this.fillAlignPrices();
	    }
	
	    this._lenEncoder.setTableSize(this._numFastBytes + 1 - Base.kMatchMinLen);
	    this._lenEncoder.updateTables(1 << this._posStateBits);
	    this._repMatchLenEncoder.setTableSize(this._numFastBytes + 1 - Base.kMatchMinLen);
	    this._repMatchLenEncoder.updateTables(1 << this._posStateBits);
	
	    this.nowPos64 = 0;
	  };
	
	  Encoder.prototype.code = function (inStream, outStream, inSize, outSize, progress) {
	    this._needReleaseMFStream = false;
	    try {
	      this.setStreams(inStream, outStream, inSize, outSize);
	      while (true) {
	
	        this.codeOneBlock(this.processedInSize, this.processedOutSize, this.finished);
	        if (this.finished[0]) {
	          return;
	        }
	        if (progress) {
	          progress.setProgress(this.processedInSize[0], this.processedOutSize[0]);
	        }
	      }
	    } finally {
	      this.releaseStreams();
	    }
	  };
	
	  Encoder.prototype.writeCoderProperties = function (outStream) {
	    var properties = makeBuffer(kPropSize),
	        i;
	    properties[0] = (this._posStateBits * 5 + this._numLiteralPosStateBits) * 9 + this._numLiteralContextBits;
	    for (i = 0; i < 4; i++) {
	      properties[1 + i] = this._dictionarySize >>> 8 * i;
	    }
	    for (i = 0; i < kPropSize; i++) {
	      outStream.writeByte(properties[i]);
	    }
	  };
	
	  Encoder.prototype.fillDistancesPrices = function () {
	    var tempPrices = [];
	    tempPrices.length = Base.kNumFullDistances;
	    var i, posSlot;
	    for (i = Base.kStartPosModelIndex; i < Base.kNumFullDistances; i++) {
	      posSlot = getPosSlot(i);
	      var footerBits = (posSlot >>> 1) - 1;
	      var baseVal = (2 | posSlot & 1) << footerBits;
	      tempPrices[i] = RangeCoder.BitTreeEncoder.reverseGetPrice(this._posEncoders, baseVal - posSlot - 1, footerBits, i - baseVal);
	    }
	
	    var lenToPosState = 0;
	    for (; lenToPosState < Base.kNumLenToPosStates; lenToPosState++) {
	      var encoder = this._posSlotEncoder[lenToPosState];
	
	      var st = lenToPosState << Base.kNumPosSlotBits;
	      for (posSlot = 0; posSlot < this._distTableSize; posSlot++) {
	        this._posSlotPrices[st + posSlot] = encoder.getPrice(posSlot);
	      }
	      for (posSlot = Base.kEndPosModelIndex; posSlot < this._distTableSize; posSlot++) {
	        this._posSlotPrices[st + posSlot] += (posSlot >>> 1) - 1 - Base.kNumAlignBits << RangeCoder.Encoder.kNumBitPriceShiftBits;
	      }
	
	      var st2 = lenToPosState * Base.kNumFullDistances;
	      for (i = 0; i < Base.kStartPosModelIndex; i++) {
	        this._distancesPrices[st2 + i] = this._posSlotPrices[st + i];
	      }
	      for (; i < Base.kNumFullDistances; i++) {
	        this._distancesPrices[st2 + i] = this._posSlotPrices[st + getPosSlot(i)] + tempPrices[i];
	      }
	    }
	    this._matchPriceCount = 0;
	  };
	
	  Encoder.prototype.fillAlignPrices = function () {
	    var i;
	    for (i = 0; i < Base.kAlignTableSize; i++) {
	      this._alignPrices[i] = this._posAlignEncoder.reverseGetPrice(i);
	    }
	    this._alignPriceCount = 0;
	  };
	
	  Encoder.prototype.setAlgorithm = function (algorithm) {
	    /*
	      _fastMode = (algorithm == 0);
	      _maxMode = (algorithm >= 2);
	    */
	    return true;
	  };
	
	  Encoder.prototype.setDictionarySize = function (dictionarySize) {
	    var kDicLogSizeMaxCompress = 29;
	    if (dictionarySize < 1 << Base.kDicLogSizeMin || dictionarySize > 1 << kDicLogSizeMaxCompress) {
	      return false;
	    }
	    this._dictionarySize = dictionarySize;
	    var dicLogSize = 0;
	    while (dictionarySize > 1 << dicLogSize) {
	      dicLogSize++;
	    }
	    this._distTableSize = dicLogSize * 2;
	    return true;
	  };
	
	  Encoder.prototype.setNumFastBytes = function (numFastBytes) {
	    if (numFastBytes < 5 || numFastBytes > Base.kMatchMaxLen) {
	      return false;
	    }
	    this._numFastBytes = numFastBytes;
	    return true;
	  };
	
	  Encoder.prototype.setMatchFinder = function (matchFinderIndex) {
	    if (matchFinderIndex < 0 || matchFinderIndex > 2) {
	      return false;
	    }
	    var matchFinderIndexPrev = this._matchFinderType;
	    this._matchFinderType = matchFinderIndex;
	    if (this._matchFinder && matchFinderIndexPrev != this._matchFinderType) {
	      this._dictionarySizePrev = -1;
	      this._matchFinder = null;
	    }
	    return true;
	  };
	
	  Encoder.prototype.setLcLpPb = function (lc, lp, pb) {
	    if (lp < 0 || lp > Base.kNumLitPosStatesBitsEncodingMax || lc < 0 || lc > Base.kNumLitContextBitsMax || pb < 0 || pb > Base.kNumPosStatesBitsEncodingMax) {
	      return false;
	    }
	    this._numLiteralPosStateBits = lp;
	    this._numLiteralContextBits = lc;
	    this._posStateBits = pb;
	    this._posStateMask = (1 << this._posStateBits) - 1;
	    return true;
	  };
	
	  Encoder.prototype.setEndMarkerMode = function (endMarkerMode) {
	    this._writeEndMark = endMarkerMode;
	  };
	
	  Encoder.EMatchFinderTypeBT2 = EMatchFinderTypeBT2;
	  Encoder.EMatchFinderTypeBT4 = EMatchFinderTypeBT4;
	
	  freeze(Encoder.prototype);
	  return freeze(Encoder);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	if (false) {
	  var define = require('amdefine')(module);
	}
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(306)], __WEBPACK_AMD_DEFINE_RESULT__ = function (freeze) {
	  'use strict';
	  /* very simple input/output stream interface */
	
	  var Stream = function Stream() {};
	
	  // input streams //////////////
	  /** Returns the next byte, or -1 for EOF. */
	  Stream.prototype.readByte = function () {
	    throw new Error("abstract method readByte() not implemented");
	  };
	  /** Attempts to fill the buffer; returns number of bytes read, or
	   *  -1 for EOF. */
	  Stream.prototype.read = function (buffer, bufOffset, length) {
	    var bytesRead = 0;
	    while (bytesRead < length) {
	      var c = this.readByte();
	      if (c < 0) {
	        // EOF
	        return bytesRead === 0 ? -1 : bytesRead;
	      }
	      buffer[bufOffset++] = c;
	      bytesRead++;
	    }
	    return bytesRead;
	  };
	  Stream.prototype.seek = function (new_pos) {
	    throw new Error("abstract method seek() not implemented");
	  };
	
	  // output streams ///////////
	  Stream.prototype.writeByte = function (_byte) {
	    throw new Error("abstract method readByte() not implemented");
	  };
	  Stream.prototype.write = function (buffer, bufOffset, length) {
	    var i;
	    for (i = 0; i < length; i++) {
	      this.writeByte(buffer[bufOffset++]);
	    }
	    return length;
	  };
	  Stream.prototype.flush = function () {};
	
	  return freeze(Stream);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';
	
	if (false) {
	  var define = require('amdefine')(module);
	}
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(306), __webpack_require__(310), __webpack_require__(312), __webpack_require__(321)], __WEBPACK_AMD_DEFINE_RESULT__ = function (freeze, makeBuffer, LZMA, Stream) {
	  'use strict';
	  /*
	  Copyright (c) 2011 Juan Mellado
	  
	  Permission is hereby granted, free of charge, to any person obtaining a copy
	  of this software and associated documentation files (the "Software"), to deal
	  in the Software without restriction, including without limitation the rights
	  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	  copies of the Software, and to permit persons to whom the Software is
	  furnished to do so, subject to the following conditions:
	  
	  The above copyright notice and this permission notice shall be included in
	  all copies or substantial portions of the Software.
	  
	  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	  THE SOFTWARE.
	  */
	
	  /*
	  References:
	  - "LZMA SDK" by Igor Pavlov
	    http://www.7-zip.org/sdk.html
	  */
	  /* Original source found at: http://code.google.com/p/js-lzma/ */
	
	  var coerceInputStream = function coerceInputStream(input) {
	    if ('readByte' in input) {
	      return input;
	    }
	    var inputStream = new Stream();
	    inputStream.pos = 0;
	    inputStream.size = input.length;
	    inputStream.readByte = function () {
	      return this.eof() ? -1 : input[this.pos++];
	    };
	    inputStream.read = function (buffer, bufOffset, length) {
	      var bytesRead = 0;
	      while (bytesRead < length && this.pos < input.length) {
	        buffer[bufOffset++] = input[this.pos++];
	        bytesRead++;
	      }
	      return bytesRead;
	    };
	    inputStream.seek = function (pos) {
	      this.pos = pos;
	    };
	    inputStream.eof = function () {
	      return this.pos >= input.length;
	    };
	    return inputStream;
	  };
	
	  var coerceOutputStream = function coerceOutputStream(output) {
	    var outputStream = new Stream();
	    var resizeOk = true;
	    if (output) {
	      if (typeof output === 'number') {
	        outputStream.buffer = new Buffer(output);
	        resizeOk = false;
	      } else if ('writeByte' in output) {
	        return output;
	      } else {
	        outputStream.buffer = output;
	        resizeOk = false;
	      }
	    } else {
	      outputStream.buffer = new Buffer(16384);
	    }
	    outputStream.pos = 0;
	    outputStream.writeByte = function (_byte) {
	      if (resizeOk && this.pos >= this.buffer.length) {
	        var newBuffer = new Buffer(this.buffer.length * 2);
	        this.buffer.copy(newBuffer);
	        this.buffer = newBuffer;
	      }
	      this.buffer[this.pos++] = _byte;
	    };
	    outputStream.getBuffer = function () {
	      // trim buffer
	      if (this.pos !== this.buffer.length) {
	        if (!resizeOk) throw new TypeError('outputsize does not match decoded input');
	        var newBuffer = new Buffer(this.pos);
	        this.buffer.copy(newBuffer, 0, 0, this.pos);
	        this.buffer = newBuffer;
	      }
	      return this.buffer;
	    };
	    outputStream._coerced = true;
	    return outputStream;
	  };
	
	  var Util = Object.create(null);
	
	  Util.decompress = function (properties, inStream, outStream, outSize) {
	    var decoder = new LZMA.Decoder();
	
	    if (!decoder.setDecoderProperties(properties)) {
	      throw "Incorrect stream properties";
	    }
	
	    if (!decoder.code(inStream, outStream, outSize)) {
	      throw "Error in data stream";
	    }
	
	    return true;
	  };
	
	  /* Also accepts a Uint8Array/Buffer/array as first argument, in which case
	   * returns the decompressed file as a Uint8Array/Buffer/array. */
	  Util.decompressFile = function (inStream, outStream) {
	    var decoder = new LZMA.Decoder(),
	        i,
	        mult;
	
	    inStream = coerceInputStream(inStream);
	
	    if (!decoder.setDecoderPropertiesFromStream(inStream)) {
	      throw "Incorrect stream properties";
	    }
	
	    // largest integer in javascript is 2^53 (unless we use typed arrays)
	    // but we don't explicitly check for overflow here.  caveat user.
	    var outSizeLo = 0;
	    for (i = 0, mult = 1; i < 4; i++, mult *= 256) {
	      outSizeLo += inStream.readByte() * mult;
	    }
	    var outSizeHi = 0;
	    for (i = 0, mult = 1; i < 4; i++, mult *= 256) {
	      outSizeHi += inStream.readByte() * mult;
	    }
	    var outSize = outSizeLo + outSizeHi * 0x100000000;
	    if (outSizeLo === 0xFFFFFFFF && outSizeHi === 0xFFFFFFFF) {
	      outSize = -1;
	    } else if (outSizeHi >= 0x200000) {
	      outSize = -1; // force streaming
	    }
	
	    if (outSize >= 0 && !outStream) {
	      outStream = outSize;
	    }
	    outStream = coerceOutputStream(outStream);
	
	    if (!decoder.code(inStream, outStream, outSize)) {
	      throw "Error in data stream";
	    }
	
	    return 'getBuffer' in outStream ? outStream.getBuffer() : true;
	  };
	
	  /* The following is a mapping from gzip/bzip2 style -1 .. -9 compression modes
	   * to the corresponding LZMA compression modes. Thanks, Larhzu, for coining
	   * these. */ /* [csa] lifted from lzmp.cpp in the LZMA SDK. */
	  var option_mapping = [{ a: 0, d: 0, fb: 0, mf: null, lc: 0, lp: 0, pb: 0 }, // -0 (needed for indexing)
	  { a: 0, d: 16, fb: 64, mf: "hc4", lc: 3, lp: 0, pb: 2 }, // -1
	  { a: 0, d: 20, fb: 64, mf: "hc4", lc: 3, lp: 0, pb: 2 }, // -2
	  { a: 1, d: 19, fb: 64, mf: "bt4", lc: 3, lp: 0, pb: 2 }, // -3
	  { a: 2, d: 20, fb: 64, mf: "bt4", lc: 3, lp: 0, pb: 2 }, // -4
	  { a: 2, d: 21, fb: 128, mf: "bt4", lc: 3, lp: 0, pb: 2 }, // -5
	  { a: 2, d: 22, fb: 128, mf: "bt4", lc: 3, lp: 0, pb: 2 }, // -6
	  { a: 2, d: 23, fb: 128, mf: "bt4", lc: 3, lp: 0, pb: 2 }, // -7
	  { a: 2, d: 24, fb: 255, mf: "bt4", lc: 3, lp: 0, pb: 2 }, // -8
	  { a: 2, d: 25, fb: 255, mf: "bt4", lc: 3, lp: 0, pb: 2 } // -9
	  ];
	
	  /** Create and configure an Encoder, based on the given properties (which
	   *  make be a simple number, for a compression level between 1 and 9. */
	  var makeEncoder = function makeEncoder(props) {
	    var encoder = new LZMA.Encoder();
	    var params = { // defaults!
	      a: 1, /* algorithm */
	      d: 23, /* dictionary */
	      fb: 128, /* fast bytes */
	      lc: 3, /* literal context */
	      lp: 0, /* literal position */
	      pb: 2, /* position bits */
	      mf: "bt4", /* match finder (bt2/bt4) */
	      eos: false /* write end of stream */
	    };
	    // override default params with props
	    if (props) {
	      if (typeof props === 'number') {
	        // -1 through -9 options
	        props = option_mapping[props];
	      }
	      var p;
	      for (p in props) {
	        if (Object.prototype.hasOwnProperty.call(props, p)) {
	          params[p] = props[p];
	        }
	      }
	    }
	    encoder.setAlgorithm(params.a);
	    encoder.setDictionarySize(1 << +params.d);
	    encoder.setNumFastBytes(+params.fb);
	    encoder.setMatchFinder(params.mf === 'bt4' ? LZMA.Encoder.EMatchFinderTypeBT4 : LZMA.Encoder.EMatchFinderTypeBT2);
	    encoder.setLcLpPb(+params.lc, +params.lp, +params.pb);
	    encoder.setEndMarkerMode(!!params.eos);
	    return encoder;
	  };
	
	  Util.compress = function (inStream, outStream, props, progress) {
	    var encoder = makeEncoder(props);
	
	    encoder.writeCoderProperties(outStream);
	
	    encoder.code(inStream, outStream, -1, -1, {
	      setProgress: function setProgress(inSize, outSize) {
	        if (progress) {
	          progress(inSize, outSize);
	        }
	      }
	    });
	
	    return true;
	  };
	
	  /* Also accepts a Uint8Array/Buffer/array as first argument, in which case
	   * returns the compressed file as a Uint8Array/Buffer/array. */
	  Util.compressFile = function (inStream, outStream, props, progress) {
	    var encoder = makeEncoder(props);
	    var i;
	
	    inStream = coerceInputStream(inStream);
	    // if we know the size, write it; otherwise we need to use the 'eos' property
	    var fileSize;
	    if ('size' in inStream && inStream.size >= 0) {
	      fileSize = inStream.size;
	    } else {
	      fileSize = -1;
	      encoder.setEndMarkerMode(true);
	    }
	
	    outStream = coerceOutputStream(outStream);
	
	    encoder.writeCoderProperties(outStream);
	
	    var out64 = function out64(s) {
	      // supports up to 53-bit integers
	      var i;
	      for (i = 0; i < 8; i++) {
	        outStream.writeByte(s & 0xFF);
	        s = Math.floor(s / 256);
	      }
	    };
	    out64(fileSize);
	
	    encoder.code(inStream, outStream, fileSize, -1, {
	      setProgress: function setProgress(inSize, outSize) {
	        if (progress) {
	          progress(inSize, outSize);
	        }
	      }
	    });
	
	    return 'getBuffer' in outStream ? outStream.getBuffer() : true;
	  };
	
	  return freeze(Util);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301).Buffer))

/***/ },
/* 323 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Exports the init method
	 * @module init
	 */
	
	/**
	 * Initializes InstantLink, and binds event handlers
	 */
	
	function init() {
	    var _this = this;
	
	    if (typeof window.history === 'undefined') return;
	    if (document.location.href.indexOf('file://') != 0) {
	        (function () {
	            var self = _this;
	            if (document.addEventListener) {
	                document.addEventListener(_this.options.event, function (e) {
	                    self.handler(e);
	                }, false);
	            } else {
	                document.attachEvent('on' + _this.options.event, function (e) {
	                    self.handler(e);
	                });
	            }
	            window.onpopstate = function (event) {
	                if (self.options.cache) {
	                    if (typeof self.cache.retrieve(document.location) !== 'undefined') {
	                        self.replacePage(self.cache.retrieve(document.location), document.location);
	                    } else {
	                        window.location = document.location;
	                    }
	                } else {
	                    this.fetchPage(document.location).then(function (data) {
	                        this.replacePage(data, document.location);
	                    }), function () {
	                        window.location = document.location;
	                    };
	                }
	            };
	            if (_this.options.cache) {
	                _this.cache.store(document.location.href, document.getElementsByTagName('HTML')[0].innerHTML);
	            }
	        })();
	    }
	}
	
	module.exports = init;

/***/ },
/* 324 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Exports the handler method
	 * @module handler
	 */
	
	/**
	 * Check if a given URL is local to the current website
	 * @param {string} url
	 * @returns {boolean}
	 */
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	function isExternalURL(url) {
	    var domain = function domain(url) {
	        return url.replace('http://', '').replace('https://', '').split('/')[0];
	    };
	    return domain(location.href) !== domain(url);
	}
	
	/**
	 * Event handler. Automatically fetch page if needed, and replace page content
	 * @param {Event} e - Event to handle
	 */
	function handler(e) {
	    var _this = this;
	
	    e = window.e || e;
	    var self = this;
	
	    if (e.target.tagName == 'A') {
	        var _ret = function () {
	            var link = e.target;
	            var href = link.href;
	
	            if (!/^https?:\/\//i.test(href)) return {
	                    v: true
	                };
	            if (isExternalURL(href)) return {
	                    v: true
	                };
	            if (link.getAttribute('data-no-instant') !== null) return {
	                    v: true
	                };
	
	            var addListener = function addListener(el, data, href) {
	                el.addEventListener('click', function (e) {
	                    e.preventDefault();
	                    self.replacePage(data, href);
	                    return false;
	                });
	            };
	
	            if (_this.options.cache) {
	
	                if (link.getAttribute('data-no-cache') !== null) {
	                    _this.fetchPage(href).then(function (data) {
	                        addListener(link, data, href);
	                    });
	                } else {
	                    if (typeof _this.cache.retrieve(href) === 'undefined') {
	                        _this.fetchPage(href).then(function (data) {
	                            addListener(link, data, href);
	                            _this.cache.store(href, data);
	                        }, function (err) {
	                            return;
	                        });
	                    } else {
	                        addListener(link, _this.cache.retrieve(href), href);
	                    }
	                }
	            } else {
	                _this.fetchPage(href).then(function (data) {
	                    addListener(link, data, href);
	                });
	            }
	        }();
	
	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }
	}
	
	module.exports = handler;

/***/ },
/* 325 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Exports the fetchPage method
	 * @module fetch-page
	 */
	
	/**
	 * Fetches a page using Ajax
	 * @memberof InstantLink.prototype
	 * @param {string} href - URL to fetch
	 * @returns {Promise}
	 */
	
	function fetchPage(href) {
	    var localURLexpr = new RegExp("//" + location.host + "($|/)");
	    var isLocal = href.substring(0, 4) === "http" ? localURLexpr.test(href) : true;
	
	    return new Promise(function (resolve, reject) {
	
	        if (!isLocal) {
	            reject();
	        } else {
	            var xobj = new XMLHttpRequest();
	            xobj.open('GET', href, true);
	            xobj.onreadystatechange = function () {
	                if (xobj.readyState == 4 && xobj.status == "200") {
	                    resolve(xobj.responseText);
	                }
	                if (xobj.status < 200 || xobj.status > 299) {
	                    reject(xobj);
	                }
	            };
	            xobj.send(null);
	        }
	    });
	}
	
	module.exports = fetchPage;

/***/ },
/* 326 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Exports the replacePage method
	 * @module replace-page
	 */
	
	var regex = /<script(.+)? ?data-no-instant(.+)? ?>((.|\n|\r| )+)?<\/script>/igm;
	var placeholder = "<!-- script removed by InstantLink -->";
	
	/**
	 * Replaces the documents contents, and push state to window.history
	 * @param {string} data - Data to replace in document
	 * @param {string} url - URL of new data
	 */
	function replacePage(data, url) {
	  data = data.replace(regex, this.options.comment ? placeholder : "");
	  document.open();
	  document.write(data);
	  document.close();
	  history.pushState({}, document.title, url);
	  this.init();
	}
	
	module.exports = replacePage;

/***/ }
/******/ ]);
//# sourceMappingURL=instant-link.js.map