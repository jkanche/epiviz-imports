(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function() {
  var d3 = {
    version: "3.5.17"
  };
  var d3_arraySlice = [].slice, d3_array = function(list) {
    return d3_arraySlice.call(list);
  };
  var d3_document = this.document;
  function d3_documentElement(node) {
    return node && (node.ownerDocument || node.document || node).documentElement;
  }
  function d3_window(node) {
    return node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
  }
  if (d3_document) {
    try {
      d3_array(d3_document.documentElement.childNodes)[0].nodeType;
    } catch (e) {
      d3_array = function(list) {
        var i = list.length, array = new Array(i);
        while (i--) array[i] = list[i];
        return array;
      };
    }
  }
  if (!Date.now) Date.now = function() {
    return +new Date();
  };
  if (d3_document) {
    try {
      d3_document.createElement("DIV").style.setProperty("opacity", 0, "");
    } catch (error) {
      var d3_element_prototype = this.Element.prototype, d3_element_setAttribute = d3_element_prototype.setAttribute, d3_element_setAttributeNS = d3_element_prototype.setAttributeNS, d3_style_prototype = this.CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
      d3_element_prototype.setAttribute = function(name, value) {
        d3_element_setAttribute.call(this, name, value + "");
      };
      d3_element_prototype.setAttributeNS = function(space, local, value) {
        d3_element_setAttributeNS.call(this, space, local, value + "");
      };
      d3_style_prototype.setProperty = function(name, value, priority) {
        d3_style_setProperty.call(this, name, value + "", priority);
      };
    }
  }
  d3.ascending = d3_ascending;
  function d3_ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }
  d3.descending = function(a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
  };
  d3.min = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
    }
    return a;
  };
  d3.max = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
    }
    return a;
  };
  d3.extent = function(array, f) {
    var i = -1, n = array.length, a, b, c;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = c = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = c = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    }
    return [ a, c ];
  };
  function d3_number(x) {
    return x === null ? NaN : +x;
  }
  function d3_numeric(x) {
    return !isNaN(x);
  }
  d3.sum = function(array, f) {
    var s = 0, n = array.length, a, i = -1;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = +array[i])) s += a;
    } else {
      while (++i < n) if (d3_numeric(a = +f.call(array, array[i], i))) s += a;
    }
    return s;
  };
  d3.mean = function(array, f) {
    var s = 0, n = array.length, a, i = -1, j = n;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) s += a; else --j;
    } else {
      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) s += a; else --j;
    }
    if (j) return s / j;
  };
  d3.quantile = function(values, p) {
    var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
    return e ? v + e * (values[h] - v) : v;
  };
  d3.median = function(array, f) {
    var numbers = [], n = array.length, a, i = -1;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) numbers.push(a);
    } else {
      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) numbers.push(a);
    }
    if (numbers.length) return d3.quantile(numbers.sort(d3_ascending), .5);
  };
  d3.variance = function(array, f) {
    var n = array.length, m = 0, a, d, s = 0, i = -1, j = 0;
    if (arguments.length === 1) {
      while (++i < n) {
        if (d3_numeric(a = d3_number(array[i]))) {
          d = a - m;
          m += d / ++j;
          s += d * (a - m);
        }
      }
    } else {
      while (++i < n) {
        if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) {
          d = a - m;
          m += d / ++j;
          s += d * (a - m);
        }
      }
    }
    if (j > 1) return s / (j - 1);
  };
  d3.deviation = function() {
    var v = d3.variance.apply(this, arguments);
    return v ? Math.sqrt(v) : v;
  };
  function d3_bisector(compare) {
    return {
      left: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) < 0) lo = mid + 1; else hi = mid;
        }
        return lo;
      },
      right: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) > 0) hi = mid; else lo = mid + 1;
        }
        return lo;
      }
    };
  }
  var d3_bisect = d3_bisector(d3_ascending);
  d3.bisectLeft = d3_bisect.left;
  d3.bisect = d3.bisectRight = d3_bisect.right;
  d3.bisector = function(f) {
    return d3_bisector(f.length === 1 ? function(d, x) {
      return d3_ascending(f(d), x);
    } : f);
  };
  d3.shuffle = function(array, i0, i1) {
    if ((m = arguments.length) < 3) {
      i1 = array.length;
      if (m < 2) i0 = 0;
    }
    var m = i1 - i0, t, i;
    while (m) {
      i = Math.random() * m-- | 0;
      t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
    }
    return array;
  };
  d3.permute = function(array, indexes) {
    var i = indexes.length, permutes = new Array(i);
    while (i--) permutes[i] = array[indexes[i]];
    return permutes;
  };
  d3.pairs = function(array) {
    var i = 0, n = array.length - 1, p0, p1 = array[0], pairs = new Array(n < 0 ? 0 : n);
    while (i < n) pairs[i] = [ p0 = p1, p1 = array[++i] ];
    return pairs;
  };
  d3.transpose = function(matrix) {
    if (!(n = matrix.length)) return [];
    for (var i = -1, m = d3.min(matrix, d3_transposeLength), transpose = new Array(m); ++i < m; ) {
      for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n; ) {
        row[j] = matrix[j][i];
      }
    }
    return transpose;
  };
  function d3_transposeLength(d) {
    return d.length;
  }
  d3.zip = function() {
    return d3.transpose(arguments);
  };
  d3.keys = function(map) {
    var keys = [];
    for (var key in map) keys.push(key);
    return keys;
  };
  d3.values = function(map) {
    var values = [];
    for (var key in map) values.push(map[key]);
    return values;
  };
  d3.entries = function(map) {
    var entries = [];
    for (var key in map) entries.push({
      key: key,
      value: map[key]
    });
    return entries;
  };
  d3.merge = function(arrays) {
    var n = arrays.length, m, i = -1, j = 0, merged, array;
    while (++i < n) j += arrays[i].length;
    merged = new Array(j);
    while (--n >= 0) {
      array = arrays[n];
      m = array.length;
      while (--m >= 0) {
        merged[--j] = array[m];
      }
    }
    return merged;
  };
  var abs = Math.abs;
  d3.range = function(start, stop, step) {
    if (arguments.length < 3) {
      step = 1;
      if (arguments.length < 2) {
        stop = start;
        start = 0;
      }
    }
    if ((stop - start) / step === Infinity) throw new Error("infinite range");
    var range = [], k = d3_range_integerScale(abs(step)), i = -1, j;
    start *= k, stop *= k, step *= k;
    if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k); else while ((j = start + step * ++i) < stop) range.push(j / k);
    return range;
  };
  function d3_range_integerScale(x) {
    var k = 1;
    while (x * k % 1) k *= 10;
    return k;
  }
  function d3_class(ctor, properties) {
    for (var key in properties) {
      Object.defineProperty(ctor.prototype, key, {
        value: properties[key],
        enumerable: false
      });
    }
  }
  d3.map = function(object, f) {
    var map = new d3_Map();
    if (object instanceof d3_Map) {
      object.forEach(function(key, value) {
        map.set(key, value);
      });
    } else if (Array.isArray(object)) {
      var i = -1, n = object.length, o;
      if (arguments.length === 1) while (++i < n) map.set(i, object[i]); else while (++i < n) map.set(f.call(object, o = object[i], i), o);
    } else {
      for (var key in object) map.set(key, object[key]);
    }
    return map;
  };
  function d3_Map() {
    this._ = Object.create(null);
  }
  var d3_map_proto = "__proto__", d3_map_zero = "\x00";
  d3_class(d3_Map, {
    has: d3_map_has,
    get: function(key) {
      return this._[d3_map_escape(key)];
    },
    set: function(key, value) {
      return this._[d3_map_escape(key)] = value;
    },
    remove: d3_map_remove,
    keys: d3_map_keys,
    values: function() {
      var values = [];
      for (var key in this._) values.push(this._[key]);
      return values;
    },
    entries: function() {
      var entries = [];
      for (var key in this._) entries.push({
        key: d3_map_unescape(key),
        value: this._[key]
      });
      return entries;
    },
    size: d3_map_size,
    empty: d3_map_empty,
    forEach: function(f) {
      for (var key in this._) f.call(this, d3_map_unescape(key), this._[key]);
    }
  });
  function d3_map_escape(key) {
    return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key : key;
  }
  function d3_map_unescape(key) {
    return (key += "")[0] === d3_map_zero ? key.slice(1) : key;
  }
  function d3_map_has(key) {
    return d3_map_escape(key) in this._;
  }
  function d3_map_remove(key) {
    return (key = d3_map_escape(key)) in this._ && delete this._[key];
  }
  function d3_map_keys() {
    var keys = [];
    for (var key in this._) keys.push(d3_map_unescape(key));
    return keys;
  }
  function d3_map_size() {
    var size = 0;
    for (var key in this._) ++size;
    return size;
  }
  function d3_map_empty() {
    for (var key in this._) return false;
    return true;
  }
  d3.nest = function() {
    var nest = {}, keys = [], sortKeys = [], sortValues, rollup;
    function map(mapType, array, depth) {
      if (depth >= keys.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
      var i = -1, n = array.length, key = keys[depth++], keyValue, object, setter, valuesByKey = new d3_Map(), values;
      while (++i < n) {
        if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
          values.push(object);
        } else {
          valuesByKey.set(keyValue, [ object ]);
        }
      }
      if (mapType) {
        object = mapType();
        setter = function(keyValue, values) {
          object.set(keyValue, map(mapType, values, depth));
        };
      } else {
        object = {};
        setter = function(keyValue, values) {
          object[keyValue] = map(mapType, values, depth);
        };
      }
      valuesByKey.forEach(setter);
      return object;
    }
    function entries(map, depth) {
      if (depth >= keys.length) return map;
      var array = [], sortKey = sortKeys[depth++];
      map.forEach(function(key, keyMap) {
        array.push({
          key: key,
          values: entries(keyMap, depth)
        });
      });
      return sortKey ? array.sort(function(a, b) {
        return sortKey(a.key, b.key);
      }) : array;
    }
    nest.map = function(array, mapType) {
      return map(mapType, array, 0);
    };
    nest.entries = function(array) {
      return entries(map(d3.map, array, 0), 0);
    };
    nest.key = function(d) {
      keys.push(d);
      return nest;
    };
    nest.sortKeys = function(order) {
      sortKeys[keys.length - 1] = order;
      return nest;
    };
    nest.sortValues = function(order) {
      sortValues = order;
      return nest;
    };
    nest.rollup = function(f) {
      rollup = f;
      return nest;
    };
    return nest;
  };
  d3.set = function(array) {
    var set = new d3_Set();
    if (array) for (var i = 0, n = array.length; i < n; ++i) set.add(array[i]);
    return set;
  };
  function d3_Set() {
    this._ = Object.create(null);
  }
  d3_class(d3_Set, {
    has: d3_map_has,
    add: function(key) {
      this._[d3_map_escape(key += "")] = true;
      return key;
    },
    remove: d3_map_remove,
    values: d3_map_keys,
    size: d3_map_size,
    empty: d3_map_empty,
    forEach: function(f) {
      for (var key in this._) f.call(this, d3_map_unescape(key));
    }
  });
  d3.behavior = {};
  function d3_identity(d) {
    return d;
  }
  d3.rebind = function(target, source) {
    var i = 1, n = arguments.length, method;
    while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
    return target;
  };
  function d3_rebind(target, source, method) {
    return function() {
      var value = method.apply(source, arguments);
      return value === source ? target : value;
    };
  }
  function d3_vendorSymbol(object, name) {
    if (name in object) return name;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    for (var i = 0, n = d3_vendorPrefixes.length; i < n; ++i) {
      var prefixName = d3_vendorPrefixes[i] + name;
      if (prefixName in object) return prefixName;
    }
  }
  var d3_vendorPrefixes = [ "webkit", "ms", "moz", "Moz", "o", "O" ];
  function d3_noop() {}
  d3.dispatch = function() {
    var dispatch = new d3_dispatch(), i = -1, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    return dispatch;
  };
  function d3_dispatch() {}
  d3_dispatch.prototype.on = function(type, listener) {
    var i = type.indexOf("."), name = "";
    if (i >= 0) {
      name = type.slice(i + 1);
      type = type.slice(0, i);
    }
    if (type) return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
    if (arguments.length === 2) {
      if (listener == null) for (type in this) {
        if (this.hasOwnProperty(type)) this[type].on(name, null);
      }
      return this;
    }
  };
  function d3_dispatch_event(dispatch) {
    var listeners = [], listenerByName = new d3_Map();
    function event() {
      var z = listeners, i = -1, n = z.length, l;
      while (++i < n) if (l = z[i].on) l.apply(this, arguments);
      return dispatch;
    }
    event.on = function(name, listener) {
      var l = listenerByName.get(name), i;
      if (arguments.length < 2) return l && l.on;
      if (l) {
        l.on = null;
        listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
        listenerByName.remove(name);
      }
      if (listener) listeners.push(listenerByName.set(name, {
        on: listener
      }));
      return dispatch;
    };
    return event;
  }
  d3.event = null;
  function d3_eventPreventDefault() {
    d3.event.preventDefault();
  }
  function d3_eventSource() {
    var e = d3.event, s;
    while (s = e.sourceEvent) e = s;
    return e;
  }
  function d3_eventDispatch(target) {
    var dispatch = new d3_dispatch(), i = 0, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    dispatch.of = function(thiz, argumentz) {
      return function(e1) {
        try {
          var e0 = e1.sourceEvent = d3.event;
          e1.target = target;
          d3.event = e1;
          dispatch[e1.type].apply(thiz, argumentz);
        } finally {
          d3.event = e0;
        }
      };
    };
    return dispatch;
  }
  d3.requote = function(s) {
    return s.replace(d3_requote_re, "\\$&");
  };
  var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
  var d3_subclass = {}.__proto__ ? function(object, prototype) {
    object.__proto__ = prototype;
  } : function(object, prototype) {
    for (var property in prototype) object[property] = prototype[property];
  };
  function d3_selection(groups) {
    d3_subclass(groups, d3_selectionPrototype);
    return groups;
  }
  var d3_select = function(s, n) {
    return n.querySelector(s);
  }, d3_selectAll = function(s, n) {
    return n.querySelectorAll(s);
  }, d3_selectMatches = function(n, s) {
    var d3_selectMatcher = n.matches || n[d3_vendorSymbol(n, "matchesSelector")];
    d3_selectMatches = function(n, s) {
      return d3_selectMatcher.call(n, s);
    };
    return d3_selectMatches(n, s);
  };
  if (typeof Sizzle === "function") {
    d3_select = function(s, n) {
      return Sizzle(s, n)[0] || null;
    };
    d3_selectAll = Sizzle;
    d3_selectMatches = Sizzle.matchesSelector;
  }
  d3.selection = function() {
    return d3.select(d3_document.documentElement);
  };
  var d3_selectionPrototype = d3.selection.prototype = [];
  d3_selectionPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, group, node;
    selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroup.push(subnode = selector.call(node, node.__data__, i, j));
          if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selector(selector) {
    return typeof selector === "function" ? selector : function() {
      return d3_select(selector, this);
    };
  }
  d3_selectionPrototype.selectAll = function(selector) {
    var subgroups = [], subgroup, node;
    selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
          subgroup.parentNode = node;
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selectorAll(selector) {
    return typeof selector === "function" ? selector : function() {
      return d3_selectAll(selector, this);
    };
  }
  var d3_nsXhtml = "http://www.w3.org/1999/xhtml";
  var d3_nsPrefix = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: d3_nsXhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  d3.ns = {
    prefix: d3_nsPrefix,
    qualify: function(name) {
      var i = name.indexOf(":"), prefix = name;
      if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
      return d3_nsPrefix.hasOwnProperty(prefix) ? {
        space: d3_nsPrefix[prefix],
        local: name
      } : name;
    }
  };
  d3_selectionPrototype.attr = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node();
        name = d3.ns.qualify(name);
        return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
      }
      for (value in name) this.each(d3_selection_attr(value, name[value]));
      return this;
    }
    return this.each(d3_selection_attr(name, value));
  };
  function d3_selection_attr(name, value) {
    name = d3.ns.qualify(name);
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    function attrConstant() {
      this.setAttribute(name, value);
    }
    function attrConstantNS() {
      this.setAttributeNS(name.space, name.local, value);
    }
    function attrFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttribute(name); else this.setAttribute(name, x);
    }
    function attrFunctionNS() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttributeNS(name.space, name.local); else this.setAttributeNS(name.space, name.local, x);
    }
    return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
  }
  function d3_collapse(s) {
    return s.trim().replace(/\s+/g, " ");
  }
  d3_selectionPrototype.classed = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node(), n = (name = d3_selection_classes(name)).length, i = -1;
        if (value = node.classList) {
          while (++i < n) if (!value.contains(name[i])) return false;
        } else {
          value = node.getAttribute("class");
          while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;
        }
        return true;
      }
      for (value in name) this.each(d3_selection_classed(value, name[value]));
      return this;
    }
    return this.each(d3_selection_classed(name, value));
  };
  function d3_selection_classedRe(name) {
    return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
  }
  function d3_selection_classes(name) {
    return (name + "").trim().split(/^|\s+/);
  }
  function d3_selection_classed(name, value) {
    name = d3_selection_classes(name).map(d3_selection_classedName);
    var n = name.length;
    function classedConstant() {
      var i = -1;
      while (++i < n) name[i](this, value);
    }
    function classedFunction() {
      var i = -1, x = value.apply(this, arguments);
      while (++i < n) name[i](this, x);
    }
    return typeof value === "function" ? classedFunction : classedConstant;
  }
  function d3_selection_classedName(name) {
    var re = d3_selection_classedRe(name);
    return function(node, value) {
      if (c = node.classList) return value ? c.add(name) : c.remove(name);
      var c = node.getAttribute("class") || "";
      if (value) {
        re.lastIndex = 0;
        if (!re.test(c)) node.setAttribute("class", d3_collapse(c + " " + name));
      } else {
        node.setAttribute("class", d3_collapse(c.replace(re, " ")));
      }
    };
  }
  d3_selectionPrototype.style = function(name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";
        for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
        return this;
      }
      if (n < 2) {
        var node = this.node();
        return d3_window(node).getComputedStyle(node, null).getPropertyValue(name);
      }
      priority = "";
    }
    return this.each(d3_selection_style(name, value, priority));
  };
  function d3_selection_style(name, value, priority) {
    function styleNull() {
      this.style.removeProperty(name);
    }
    function styleConstant() {
      this.style.setProperty(name, value, priority);
    }
    function styleFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.style.removeProperty(name); else this.style.setProperty(name, x, priority);
    }
    return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
  }
  d3_selectionPrototype.property = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") return this.node()[name];
      for (value in name) this.each(d3_selection_property(value, name[value]));
      return this;
    }
    return this.each(d3_selection_property(name, value));
  };
  function d3_selection_property(name, value) {
    function propertyNull() {
      delete this[name];
    }
    function propertyConstant() {
      this[name] = value;
    }
    function propertyFunction() {
      var x = value.apply(this, arguments);
      if (x == null) delete this[name]; else this[name] = x;
    }
    return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
  }
  d3_selectionPrototype.text = function(value) {
    return arguments.length ? this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    } : value == null ? function() {
      this.textContent = "";
    } : function() {
      this.textContent = value;
    }) : this.node().textContent;
  };
  d3_selectionPrototype.html = function(value) {
    return arguments.length ? this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    } : value == null ? function() {
      this.innerHTML = "";
    } : function() {
      this.innerHTML = value;
    }) : this.node().innerHTML;
  };
  d3_selectionPrototype.append = function(name) {
    name = d3_selection_creator(name);
    return this.select(function() {
      return this.appendChild(name.apply(this, arguments));
    });
  };
  function d3_selection_creator(name) {
    function create() {
      var document = this.ownerDocument, namespace = this.namespaceURI;
      return namespace === d3_nsXhtml && document.documentElement.namespaceURI === d3_nsXhtml ? document.createElement(name) : document.createElementNS(namespace, name);
    }
    function createNS() {
      return this.ownerDocument.createElementNS(name.space, name.local);
    }
    return typeof name === "function" ? name : (name = d3.ns.qualify(name)).local ? createNS : create;
  }
  d3_selectionPrototype.insert = function(name, before) {
    name = d3_selection_creator(name);
    before = d3_selection_selector(before);
    return this.select(function() {
      return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
    });
  };
  d3_selectionPrototype.remove = function() {
    return this.each(d3_selectionRemove);
  };
  function d3_selectionRemove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }
  d3_selectionPrototype.data = function(value, key) {
    var i = -1, n = this.length, group, node;
    if (!arguments.length) {
      value = new Array(n = (group = this[0]).length);
      while (++i < n) {
        if (node = group[i]) {
          value[i] = node.__data__;
        }
      }
      return value;
    }
    function bind(group, groupData) {
      var i, n = group.length, m = groupData.length, n0 = Math.min(n, m), updateNodes = new Array(m), enterNodes = new Array(m), exitNodes = new Array(n), node, nodeData;
      if (key) {
        var nodeByKeyValue = new d3_Map(), keyValues = new Array(n), keyValue;
        for (i = -1; ++i < n; ) {
          if (node = group[i]) {
            if (nodeByKeyValue.has(keyValue = key.call(node, node.__data__, i))) {
              exitNodes[i] = node;
            } else {
              nodeByKeyValue.set(keyValue, node);
            }
            keyValues[i] = keyValue;
          }
        }
        for (i = -1; ++i < m; ) {
          if (!(node = nodeByKeyValue.get(keyValue = key.call(groupData, nodeData = groupData[i], i)))) {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          } else if (node !== true) {
            updateNodes[i] = node;
            node.__data__ = nodeData;
          }
          nodeByKeyValue.set(keyValue, true);
        }
        for (i = -1; ++i < n; ) {
          if (i in keyValues && nodeByKeyValue.get(keyValues[i]) !== true) {
            exitNodes[i] = group[i];
          }
        }
      } else {
        for (i = -1; ++i < n0; ) {
          node = group[i];
          nodeData = groupData[i];
          if (node) {
            node.__data__ = nodeData;
            updateNodes[i] = node;
          } else {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          }
        }
        for (;i < m; ++i) {
          enterNodes[i] = d3_selection_dataNode(groupData[i]);
        }
        for (;i < n; ++i) {
          exitNodes[i] = group[i];
        }
      }
      enterNodes.update = updateNodes;
      enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
      enter.push(enterNodes);
      update.push(updateNodes);
      exit.push(exitNodes);
    }
    var enter = d3_selection_enter([]), update = d3_selection([]), exit = d3_selection([]);
    if (typeof value === "function") {
      while (++i < n) {
        bind(group = this[i], value.call(group, group.parentNode.__data__, i));
      }
    } else {
      while (++i < n) {
        bind(group = this[i], value);
      }
    }
    update.enter = function() {
      return enter;
    };
    update.exit = function() {
      return exit;
    };
    return update;
  };
  function d3_selection_dataNode(data) {
    return {
      __data__: data
    };
  }
  d3_selectionPrototype.datum = function(value) {
    return arguments.length ? this.property("__data__", value) : this.property("__data__");
  };
  d3_selectionPrototype.filter = function(filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
          subgroup.push(node);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_filter(selector) {
    return function() {
      return d3_selectMatches(this, selector);
    };
  }
  d3_selectionPrototype.order = function() {
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
        if (node = group[i]) {
          if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  };
  d3_selectionPrototype.sort = function(comparator) {
    comparator = d3_selection_sortComparator.apply(this, arguments);
    for (var j = -1, m = this.length; ++j < m; ) this[j].sort(comparator);
    return this.order();
  };
  function d3_selection_sortComparator(comparator) {
    if (!arguments.length) comparator = d3_ascending;
    return function(a, b) {
      return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
    };
  }
  d3_selectionPrototype.each = function(callback) {
    return d3_selection_each(this, function(node, i, j) {
      callback.call(node, node.__data__, i, j);
    });
  };
  function d3_selection_each(groups, callback) {
    for (var j = 0, m = groups.length; j < m; j++) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
        if (node = group[i]) callback(node, i, j);
      }
    }
    return groups;
  }
  d3_selectionPrototype.call = function(callback) {
    var args = d3_array(arguments);
    callback.apply(args[0] = this, args);
    return this;
  };
  d3_selectionPrototype.empty = function() {
    return !this.node();
  };
  d3_selectionPrototype.node = function() {
    for (var j = 0, m = this.length; j < m; j++) {
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        var node = group[i];
        if (node) return node;
      }
    }
    return null;
  };
  d3_selectionPrototype.size = function() {
    var n = 0;
    d3_selection_each(this, function() {
      ++n;
    });
    return n;
  };
  function d3_selection_enter(selection) {
    d3_subclass(selection, d3_selection_enterPrototype);
    return selection;
  }
  var d3_selection_enterPrototype = [];
  d3.selection.enter = d3_selection_enter;
  d3.selection.enter.prototype = d3_selection_enterPrototype;
  d3_selection_enterPrototype.append = d3_selectionPrototype.append;
  d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
  d3_selection_enterPrototype.node = d3_selectionPrototype.node;
  d3_selection_enterPrototype.call = d3_selectionPrototype.call;
  d3_selection_enterPrototype.size = d3_selectionPrototype.size;
  d3_selection_enterPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, upgroup, group, node;
    for (var j = -1, m = this.length; ++j < m; ) {
      upgroup = (group = this[j]).update;
      subgroups.push(subgroup = []);
      subgroup.parentNode = group.parentNode;
      for (var i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
          subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  d3_selection_enterPrototype.insert = function(name, before) {
    if (arguments.length < 2) before = d3_selection_enterInsertBefore(this);
    return d3_selectionPrototype.insert.call(this, name, before);
  };
  function d3_selection_enterInsertBefore(enter) {
    var i0, j0;
    return function(d, i, j) {
      var group = enter[j].update, n = group.length, node;
      if (j != j0) j0 = j, i0 = 0;
      if (i >= i0) i0 = i + 1;
      while (!(node = group[i0]) && ++i0 < n) ;
      return node;
    };
  }
  d3.select = function(node) {
    var group;
    if (typeof node === "string") {
      group = [ d3_select(node, d3_document) ];
      group.parentNode = d3_document.documentElement;
    } else {
      group = [ node ];
      group.parentNode = d3_documentElement(node);
    }
    return d3_selection([ group ]);
  };
  d3.selectAll = function(nodes) {
    var group;
    if (typeof nodes === "string") {
      group = d3_array(d3_selectAll(nodes, d3_document));
      group.parentNode = d3_document.documentElement;
    } else {
      group = d3_array(nodes);
      group.parentNode = null;
    }
    return d3_selection([ group ]);
  };
  d3_selectionPrototype.on = function(type, listener, capture) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof type !== "string") {
        if (n < 2) listener = false;
        for (capture in type) this.each(d3_selection_on(capture, type[capture], listener));
        return this;
      }
      if (n < 2) return (n = this.node()["__on" + type]) && n._;
      capture = false;
    }
    return this.each(d3_selection_on(type, listener, capture));
  };
  function d3_selection_on(type, listener, capture) {
    var name = "__on" + type, i = type.indexOf("."), wrap = d3_selection_onListener;
    if (i > 0) type = type.slice(0, i);
    var filter = d3_selection_onFilters.get(type);
    if (filter) type = filter, wrap = d3_selection_onFilter;
    function onRemove() {
      var l = this[name];
      if (l) {
        this.removeEventListener(type, l, l.$);
        delete this[name];
      }
    }
    function onAdd() {
      var l = wrap(listener, d3_array(arguments));
      onRemove.call(this);
      this.addEventListener(type, this[name] = l, l.$ = capture);
      l._ = listener;
    }
    function removeAll() {
      var re = new RegExp("^__on([^.]+)" + d3.requote(type) + "$"), match;
      for (var name in this) {
        if (match = name.match(re)) {
          var l = this[name];
          this.removeEventListener(match[1], l, l.$);
          delete this[name];
        }
      }
    }
    return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
  }
  var d3_selection_onFilters = d3.map({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  });
  if (d3_document) {
    d3_selection_onFilters.forEach(function(k) {
      if ("on" + k in d3_document) d3_selection_onFilters.remove(k);
    });
  }
  function d3_selection_onListener(listener, argumentz) {
    return function(e) {
      var o = d3.event;
      d3.event = e;
      argumentz[0] = this.__data__;
      try {
        listener.apply(this, argumentz);
      } finally {
        d3.event = o;
      }
    };
  }
  function d3_selection_onFilter(listener, argumentz) {
    var l = d3_selection_onListener(listener, argumentz);
    return function(e) {
      var target = this, related = e.relatedTarget;
      if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
        l.call(target, e);
      }
    };
  }
  var d3_event_dragSelect, d3_event_dragId = 0;
  function d3_event_dragSuppress(node) {
    var name = ".dragsuppress-" + ++d3_event_dragId, click = "click" + name, w = d3.select(d3_window(node)).on("touchmove" + name, d3_eventPreventDefault).on("dragstart" + name, d3_eventPreventDefault).on("selectstart" + name, d3_eventPreventDefault);
    if (d3_event_dragSelect == null) {
      d3_event_dragSelect = "onselectstart" in node ? false : d3_vendorSymbol(node.style, "userSelect");
    }
    if (d3_event_dragSelect) {
      var style = d3_documentElement(node).style, select = style[d3_event_dragSelect];
      style[d3_event_dragSelect] = "none";
    }
    return function(suppressClick) {
      w.on(name, null);
      if (d3_event_dragSelect) style[d3_event_dragSelect] = select;
      if (suppressClick) {
        var off = function() {
          w.on(click, null);
        };
        w.on(click, function() {
          d3_eventPreventDefault();
          off();
        }, true);
        setTimeout(off, 0);
      }
    };
  }
  d3.mouse = function(container) {
    return d3_mousePoint(container, d3_eventSource());
  };
  var d3_mouse_bug44083 = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
  function d3_mousePoint(container, e) {
    if (e.changedTouches) e = e.changedTouches[0];
    var svg = container.ownerSVGElement || container;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      if (d3_mouse_bug44083 < 0) {
        var window = d3_window(container);
        if (window.scrollX || window.scrollY) {
          svg = d3.select("body").append("svg").style({
            position: "absolute",
            top: 0,
            left: 0,
            margin: 0,
            padding: 0,
            border: "none"
          }, "important");
          var ctm = svg[0][0].getScreenCTM();
          d3_mouse_bug44083 = !(ctm.f || ctm.e);
          svg.remove();
        }
      }
      if (d3_mouse_bug44083) point.x = e.pageX, point.y = e.pageY; else point.x = e.clientX, 
      point.y = e.clientY;
      point = point.matrixTransform(container.getScreenCTM().inverse());
      return [ point.x, point.y ];
    }
    var rect = container.getBoundingClientRect();
    return [ e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop ];
  }
  d3.touch = function(container, touches, identifier) {
    if (arguments.length < 3) identifier = touches, touches = d3_eventSource().changedTouches;
    if (touches) for (var i = 0, n = touches.length, touch; i < n; ++i) {
      if ((touch = touches[i]).identifier === identifier) {
        return d3_mousePoint(container, touch);
      }
    }
  };
  d3.behavior.drag = function() {
    var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"), origin = null, mousedown = dragstart(d3_noop, d3.mouse, d3_window, "mousemove", "mouseup"), touchstart = dragstart(d3_behavior_dragTouchId, d3.touch, d3_identity, "touchmove", "touchend");
    function drag() {
      this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart);
    }
    function dragstart(id, position, subject, move, end) {
      return function() {
        var that = this, target = d3.event.target.correspondingElement || d3.event.target, parent = that.parentNode, dispatch = event.of(that, arguments), dragged = 0, dragId = id(), dragName = ".drag" + (dragId == null ? "" : "-" + dragId), dragOffset, dragSubject = d3.select(subject(target)).on(move + dragName, moved).on(end + dragName, ended), dragRestore = d3_event_dragSuppress(target), position0 = position(parent, dragId);
        if (origin) {
          dragOffset = origin.apply(that, arguments);
          dragOffset = [ dragOffset.x - position0[0], dragOffset.y - position0[1] ];
        } else {
          dragOffset = [ 0, 0 ];
        }
        dispatch({
          type: "dragstart"
        });
        function moved() {
          var position1 = position(parent, dragId), dx, dy;
          if (!position1) return;
          dx = position1[0] - position0[0];
          dy = position1[1] - position0[1];
          dragged |= dx | dy;
          position0 = position1;
          dispatch({
            type: "drag",
            x: position1[0] + dragOffset[0],
            y: position1[1] + dragOffset[1],
            dx: dx,
            dy: dy
          });
        }
        function ended() {
          if (!position(parent, dragId)) return;
          dragSubject.on(move + dragName, null).on(end + dragName, null);
          dragRestore(dragged);
          dispatch({
            type: "dragend"
          });
        }
      };
    }
    drag.origin = function(x) {
      if (!arguments.length) return origin;
      origin = x;
      return drag;
    };
    return d3.rebind(drag, event, "on");
  };
  function d3_behavior_dragTouchId() {
    return d3.event.changedTouches[0].identifier;
  }
  d3.touches = function(container, touches) {
    if (arguments.length < 2) touches = d3_eventSource().touches;
    return touches ? d3_array(touches).map(function(touch) {
      var point = d3_mousePoint(container, touch);
      point.identifier = touch.identifier;
      return point;
    }) : [];
  };
  var ε = 1e-6, ε2 = ε * ε, π = Math.PI, τ = 2 * π, τε = τ - ε, halfπ = π / 2, d3_radians = π / 180, d3_degrees = 180 / π;
  function d3_sgn(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
  }
  function d3_cross2d(a, b, c) {
    return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
  }
  function d3_acos(x) {
    return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
  }
  function d3_asin(x) {
    return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
  }
  function d3_sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
  }
  function d3_cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
  }
  function d3_tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
  }
  function d3_haversin(x) {
    return (x = Math.sin(x / 2)) * x;
  }
  var ρ = Math.SQRT2, ρ2 = 2, ρ4 = 4;
  d3.interpolateZoom = function(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    if (d2 < ε2) {
      S = Math.log(w1 / w0) / ρ;
      i = function(t) {
        return [ ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(ρ * t * S) ];
      };
    } else {
      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + ρ4 * d2) / (2 * w0 * ρ2 * d1), b1 = (w1 * w1 - w0 * w0 - ρ4 * d2) / (2 * w1 * ρ2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / ρ;
      i = function(t) {
        var s = t * S, coshr0 = d3_cosh(r0), u = w0 / (ρ2 * d1) * (coshr0 * d3_tanh(ρ * s + r0) - d3_sinh(r0));
        return [ ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / d3_cosh(ρ * s + r0) ];
      };
    }
    i.duration = S * 1e3;
    return i;
  };
  d3.behavior.zoom = function() {
    var view = {
      x: 0,
      y: 0,
      k: 1
    }, translate0, center0, center, size = [ 960, 500 ], scaleExtent = d3_behavior_zoomInfinity, duration = 250, zooming = 0, mousedown = "mousedown.zoom", mousemove = "mousemove.zoom", mouseup = "mouseup.zoom", mousewheelTimer, touchstart = "touchstart.zoom", touchtime, event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend"), x0, x1, y0, y1;
    if (!d3_behavior_zoomWheel) {
      d3_behavior_zoomWheel = "onwheel" in d3_document ? (d3_behavior_zoomDelta = function() {
        return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
      }, "wheel") : "onmousewheel" in d3_document ? (d3_behavior_zoomDelta = function() {
        return d3.event.wheelDelta;
      }, "mousewheel") : (d3_behavior_zoomDelta = function() {
        return -d3.event.detail;
      }, "MozMousePixelScroll");
    }
    function zoom(g) {
      g.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + ".zoom", mousewheeled).on("dblclick.zoom", dblclicked).on(touchstart, touchstarted);
    }
    zoom.event = function(g) {
      g.each(function() {
        var dispatch = event.of(this, arguments), view1 = view;
        if (d3_transitionInheritId) {
          d3.select(this).transition().each("start.zoom", function() {
            view = this.__chart__ || {
              x: 0,
              y: 0,
              k: 1
            };
            zoomstarted(dispatch);
          }).tween("zoom:zoom", function() {
            var dx = size[0], dy = size[1], cx = center0 ? center0[0] : dx / 2, cy = center0 ? center0[1] : dy / 2, i = d3.interpolateZoom([ (cx - view.x) / view.k, (cy - view.y) / view.k, dx / view.k ], [ (cx - view1.x) / view1.k, (cy - view1.y) / view1.k, dx / view1.k ]);
            return function(t) {
              var l = i(t), k = dx / l[2];
              this.__chart__ = view = {
                x: cx - l[0] * k,
                y: cy - l[1] * k,
                k: k
              };
              zoomed(dispatch);
            };
          }).each("interrupt.zoom", function() {
            zoomended(dispatch);
          }).each("end.zoom", function() {
            zoomended(dispatch);
          });
        } else {
          this.__chart__ = view;
          zoomstarted(dispatch);
          zoomed(dispatch);
          zoomended(dispatch);
        }
      });
    };
    zoom.translate = function(_) {
      if (!arguments.length) return [ view.x, view.y ];
      view = {
        x: +_[0],
        y: +_[1],
        k: view.k
      };
      rescale();
      return zoom;
    };
    zoom.scale = function(_) {
      if (!arguments.length) return view.k;
      view = {
        x: view.x,
        y: view.y,
        k: null
      };
      scaleTo(+_);
      rescale();
      return zoom;
    };
    zoom.scaleExtent = function(_) {
      if (!arguments.length) return scaleExtent;
      scaleExtent = _ == null ? d3_behavior_zoomInfinity : [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.center = function(_) {
      if (!arguments.length) return center;
      center = _ && [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.size = function(_) {
      if (!arguments.length) return size;
      size = _ && [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.duration = function(_) {
      if (!arguments.length) return duration;
      duration = +_;
      return zoom;
    };
    zoom.x = function(z) {
      if (!arguments.length) return x1;
      x1 = z;
      x0 = z.copy();
      view = {
        x: 0,
        y: 0,
        k: 1
      };
      return zoom;
    };
    zoom.y = function(z) {
      if (!arguments.length) return y1;
      y1 = z;
      y0 = z.copy();
      view = {
        x: 0,
        y: 0,
        k: 1
      };
      return zoom;
    };
    function location(p) {
      return [ (p[0] - view.x) / view.k, (p[1] - view.y) / view.k ];
    }
    function point(l) {
      return [ l[0] * view.k + view.x, l[1] * view.k + view.y ];
    }
    function scaleTo(s) {
      view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
    }
    function translateTo(p, l) {
      l = point(l);
      view.x += p[0] - l[0];
      view.y += p[1] - l[1];
    }
    function zoomTo(that, p, l, k) {
      that.__chart__ = {
        x: view.x,
        y: view.y,
        k: view.k
      };
      scaleTo(Math.pow(2, k));
      translateTo(center0 = p, l);
      that = d3.select(that);
      if (duration > 0) that = that.transition().duration(duration);
      that.call(zoom.event);
    }
    function rescale() {
      if (x1) x1.domain(x0.range().map(function(x) {
        return (x - view.x) / view.k;
      }).map(x0.invert));
      if (y1) y1.domain(y0.range().map(function(y) {
        return (y - view.y) / view.k;
      }).map(y0.invert));
    }
    function zoomstarted(dispatch) {
      if (!zooming++) dispatch({
        type: "zoomstart"
      });
    }
    function zoomed(dispatch) {
      rescale();
      dispatch({
        type: "zoom",
        scale: view.k,
        translate: [ view.x, view.y ]
      });
    }
    function zoomended(dispatch) {
      if (!--zooming) dispatch({
        type: "zoomend"
      }), center0 = null;
    }
    function mousedowned() {
      var that = this, dispatch = event.of(that, arguments), dragged = 0, subject = d3.select(d3_window(that)).on(mousemove, moved).on(mouseup, ended), location0 = location(d3.mouse(that)), dragRestore = d3_event_dragSuppress(that);
      d3_selection_interrupt.call(that);
      zoomstarted(dispatch);
      function moved() {
        dragged = 1;
        translateTo(d3.mouse(that), location0);
        zoomed(dispatch);
      }
      function ended() {
        subject.on(mousemove, null).on(mouseup, null);
        dragRestore(dragged);
        zoomended(dispatch);
      }
    }
    function touchstarted() {
      var that = this, dispatch = event.of(that, arguments), locations0 = {}, distance0 = 0, scale0, zoomName = ".zoom-" + d3.event.changedTouches[0].identifier, touchmove = "touchmove" + zoomName, touchend = "touchend" + zoomName, targets = [], subject = d3.select(that), dragRestore = d3_event_dragSuppress(that);
      started();
      zoomstarted(dispatch);
      subject.on(mousedown, null).on(touchstart, started);
      function relocate() {
        var touches = d3.touches(that);
        scale0 = view.k;
        touches.forEach(function(t) {
          if (t.identifier in locations0) locations0[t.identifier] = location(t);
        });
        return touches;
      }
      function started() {
        var target = d3.event.target;
        d3.select(target).on(touchmove, moved).on(touchend, ended);
        targets.push(target);
        var changed = d3.event.changedTouches;
        for (var i = 0, n = changed.length; i < n; ++i) {
          locations0[changed[i].identifier] = null;
        }
        var touches = relocate(), now = Date.now();
        if (touches.length === 1) {
          if (now - touchtime < 500) {
            var p = touches[0];
            zoomTo(that, p, locations0[p.identifier], Math.floor(Math.log(view.k) / Math.LN2) + 1);
            d3_eventPreventDefault();
          }
          touchtime = now;
        } else if (touches.length > 1) {
          var p = touches[0], q = touches[1], dx = p[0] - q[0], dy = p[1] - q[1];
          distance0 = dx * dx + dy * dy;
        }
      }
      function moved() {
        var touches = d3.touches(that), p0, l0, p1, l1;
        d3_selection_interrupt.call(that);
        for (var i = 0, n = touches.length; i < n; ++i, l1 = null) {
          p1 = touches[i];
          if (l1 = locations0[p1.identifier]) {
            if (l0) break;
            p0 = p1, l0 = l1;
          }
        }
        if (l1) {
          var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1, scale1 = distance0 && Math.sqrt(distance1 / distance0);
          p0 = [ (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2 ];
          l0 = [ (l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2 ];
          scaleTo(scale1 * scale0);
        }
        touchtime = null;
        translateTo(p0, l0);
        zoomed(dispatch);
      }
      function ended() {
        if (d3.event.touches.length) {
          var changed = d3.event.changedTouches;
          for (var i = 0, n = changed.length; i < n; ++i) {
            delete locations0[changed[i].identifier];
          }
          for (var identifier in locations0) {
            return void relocate();
          }
        }
        d3.selectAll(targets).on(zoomName, null);
        subject.on(mousedown, mousedowned).on(touchstart, touchstarted);
        dragRestore();
        zoomended(dispatch);
      }
    }
    function mousewheeled() {
      var dispatch = event.of(this, arguments);
      if (mousewheelTimer) clearTimeout(mousewheelTimer); else d3_selection_interrupt.call(this), 
      translate0 = location(center0 = center || d3.mouse(this)), zoomstarted(dispatch);
      mousewheelTimer = setTimeout(function() {
        mousewheelTimer = null;
        zoomended(dispatch);
      }, 50);
      d3_eventPreventDefault();
      scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * view.k);
      translateTo(center0, translate0);
      zoomed(dispatch);
    }
    function dblclicked() {
      var p = d3.mouse(this), k = Math.log(view.k) / Math.LN2;
      zoomTo(this, p, location(p), d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1);
    }
    return d3.rebind(zoom, event, "on");
  };
  var d3_behavior_zoomInfinity = [ 0, Infinity ], d3_behavior_zoomDelta, d3_behavior_zoomWheel;
  d3.color = d3_color;
  function d3_color() {}
  d3_color.prototype.toString = function() {
    return this.rgb() + "";
  };
  d3.hsl = d3_hsl;
  function d3_hsl(h, s, l) {
    return this instanceof d3_hsl ? void (this.h = +h, this.s = +s, this.l = +l) : arguments.length < 2 ? h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : new d3_hsl(h, s, l);
  }
  var d3_hslPrototype = d3_hsl.prototype = new d3_color();
  d3_hslPrototype.brighter = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_hsl(this.h, this.s, this.l / k);
  };
  d3_hslPrototype.darker = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_hsl(this.h, this.s, k * this.l);
  };
  d3_hslPrototype.rgb = function() {
    return d3_hsl_rgb(this.h, this.s, this.l);
  };
  function d3_hsl_rgb(h, s, l) {
    var m1, m2;
    h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
    s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
    l = l < 0 ? 0 : l > 1 ? 1 : l;
    m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
    m1 = 2 * l - m2;
    function v(h) {
      if (h > 360) h -= 360; else if (h < 0) h += 360;
      if (h < 60) return m1 + (m2 - m1) * h / 60;
      if (h < 180) return m2;
      if (h < 240) return m1 + (m2 - m1) * (240 - h) / 60;
      return m1;
    }
    function vv(h) {
      return Math.round(v(h) * 255);
    }
    return new d3_rgb(vv(h + 120), vv(h), vv(h - 120));
  }
  d3.hcl = d3_hcl;
  function d3_hcl(h, c, l) {
    return this instanceof d3_hcl ? void (this.h = +h, this.c = +c, this.l = +l) : arguments.length < 2 ? h instanceof d3_hcl ? new d3_hcl(h.h, h.c, h.l) : h instanceof d3_lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : new d3_hcl(h, c, l);
  }
  var d3_hclPrototype = d3_hcl.prototype = new d3_color();
  d3_hclPrototype.brighter = function(k) {
    return new d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.darker = function(k) {
    return new d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.rgb = function() {
    return d3_hcl_lab(this.h, this.c, this.l).rgb();
  };
  function d3_hcl_lab(h, c, l) {
    if (isNaN(h)) h = 0;
    if (isNaN(c)) c = 0;
    return new d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
  }
  d3.lab = d3_lab;
  function d3_lab(l, a, b) {
    return this instanceof d3_lab ? void (this.l = +l, this.a = +a, this.b = +b) : arguments.length < 2 ? l instanceof d3_lab ? new d3_lab(l.l, l.a, l.b) : l instanceof d3_hcl ? d3_hcl_lab(l.h, l.c, l.l) : d3_rgb_lab((l = d3_rgb(l)).r, l.g, l.b) : new d3_lab(l, a, b);
  }
  var d3_lab_K = 18;
  var d3_lab_X = .95047, d3_lab_Y = 1, d3_lab_Z = 1.08883;
  var d3_labPrototype = d3_lab.prototype = new d3_color();
  d3_labPrototype.brighter = function(k) {
    return new d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.darker = function(k) {
    return new d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.rgb = function() {
    return d3_lab_rgb(this.l, this.a, this.b);
  };
  function d3_lab_rgb(l, a, b) {
    var y = (l + 16) / 116, x = y + a / 500, z = y - b / 200;
    x = d3_lab_xyz(x) * d3_lab_X;
    y = d3_lab_xyz(y) * d3_lab_Y;
    z = d3_lab_xyz(z) * d3_lab_Z;
    return new d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb(-.969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z));
  }
  function d3_lab_hcl(l, a, b) {
    return l > 0 ? new d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : new d3_hcl(NaN, NaN, l);
  }
  function d3_lab_xyz(x) {
    return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
  }
  function d3_xyz_lab(x) {
    return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
  }
  function d3_xyz_rgb(r) {
    return Math.round(255 * (r <= .00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055));
  }
  d3.rgb = d3_rgb;
  function d3_rgb(r, g, b) {
    return this instanceof d3_rgb ? void (this.r = ~~r, this.g = ~~g, this.b = ~~b) : arguments.length < 2 ? r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : new d3_rgb(r, g, b);
  }
  function d3_rgbNumber(value) {
    return new d3_rgb(value >> 16, value >> 8 & 255, value & 255);
  }
  function d3_rgbString(value) {
    return d3_rgbNumber(value) + "";
  }
  var d3_rgbPrototype = d3_rgb.prototype = new d3_color();
  d3_rgbPrototype.brighter = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    var r = this.r, g = this.g, b = this.b, i = 30;
    if (!r && !g && !b) return new d3_rgb(i, i, i);
    if (r && r < i) r = i;
    if (g && g < i) g = i;
    if (b && b < i) b = i;
    return new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k));
  };
  d3_rgbPrototype.darker = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_rgb(k * this.r, k * this.g, k * this.b);
  };
  d3_rgbPrototype.hsl = function() {
    return d3_rgb_hsl(this.r, this.g, this.b);
  };
  d3_rgbPrototype.toString = function() {
    return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
  };
  function d3_rgb_hex(v) {
    return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
  }
  function d3_rgb_parse(format, rgb, hsl) {
    var r = 0, g = 0, b = 0, m1, m2, color;
    m1 = /([a-z]+)\((.*)\)/.exec(format = format.toLowerCase());
    if (m1) {
      m2 = m1[2].split(",");
      switch (m1[1]) {
       case "hsl":
        {
          return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
        }

       case "rgb":
        {
          return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
        }
      }
    }
    if (color = d3_rgb_names.get(format)) {
      return rgb(color.r, color.g, color.b);
    }
    if (format != null && format.charAt(0) === "#" && !isNaN(color = parseInt(format.slice(1), 16))) {
      if (format.length === 4) {
        r = (color & 3840) >> 4;
        r = r >> 4 | r;
        g = color & 240;
        g = g >> 4 | g;
        b = color & 15;
        b = b << 4 | b;
      } else if (format.length === 7) {
        r = (color & 16711680) >> 16;
        g = (color & 65280) >> 8;
        b = color & 255;
      }
    }
    return rgb(r, g, b);
  }
  function d3_rgb_hsl(r, g, b) {
    var min = Math.min(r /= 255, g /= 255, b /= 255), max = Math.max(r, g, b), d = max - min, h, s, l = (max + min) / 2;
    if (d) {
      s = l < .5 ? d / (max + min) : d / (2 - max - min);
      if (r == max) h = (g - b) / d + (g < b ? 6 : 0); else if (g == max) h = (b - r) / d + 2; else h = (r - g) / d + 4;
      h *= 60;
    } else {
      h = NaN;
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new d3_hsl(h, s, l);
  }
  function d3_rgb_lab(r, g, b) {
    r = d3_rgb_xyz(r);
    g = d3_rgb_xyz(g);
    b = d3_rgb_xyz(b);
    var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X), y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y), z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
    return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
  }
  function d3_rgb_xyz(r) {
    return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
  }
  function d3_rgb_parseNumber(c) {
    var f = parseFloat(c);
    return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
  }
  var d3_rgb_names = d3.map({
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  });
  d3_rgb_names.forEach(function(key, value) {
    d3_rgb_names.set(key, d3_rgbNumber(value));
  });
  function d3_functor(v) {
    return typeof v === "function" ? v : function() {
      return v;
    };
  }
  d3.functor = d3_functor;
  d3.xhr = d3_xhrType(d3_identity);
  function d3_xhrType(response) {
    return function(url, mimeType, callback) {
      if (arguments.length === 2 && typeof mimeType === "function") callback = mimeType, 
      mimeType = null;
      return d3_xhr(url, mimeType, response, callback);
    };
  }
  function d3_xhr(url, mimeType, response, callback) {
    var xhr = {}, dispatch = d3.dispatch("beforesend", "progress", "load", "error"), headers = {}, request = new XMLHttpRequest(), responseType = null;
    if (this.XDomainRequest && !("withCredentials" in request) && /^(http(s)?:)?\/\//.test(url)) request = new XDomainRequest();
    "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
      request.readyState > 3 && respond();
    };
    function respond() {
      var status = request.status, result;
      if (!status && d3_xhrHasResponse(request) || status >= 200 && status < 300 || status === 304) {
        try {
          result = response.call(xhr, request);
        } catch (e) {
          dispatch.error.call(xhr, e);
          return;
        }
        dispatch.load.call(xhr, result);
      } else {
        dispatch.error.call(xhr, request);
      }
    }
    request.onprogress = function(event) {
      var o = d3.event;
      d3.event = event;
      try {
        dispatch.progress.call(xhr, request);
      } finally {
        d3.event = o;
      }
    };
    xhr.header = function(name, value) {
      name = (name + "").toLowerCase();
      if (arguments.length < 2) return headers[name];
      if (value == null) delete headers[name]; else headers[name] = value + "";
      return xhr;
    };
    xhr.mimeType = function(value) {
      if (!arguments.length) return mimeType;
      mimeType = value == null ? null : value + "";
      return xhr;
    };
    xhr.responseType = function(value) {
      if (!arguments.length) return responseType;
      responseType = value;
      return xhr;
    };
    xhr.response = function(value) {
      response = value;
      return xhr;
    };
    [ "get", "post" ].forEach(function(method) {
      xhr[method] = function() {
        return xhr.send.apply(xhr, [ method ].concat(d3_array(arguments)));
      };
    });
    xhr.send = function(method, data, callback) {
      if (arguments.length === 2 && typeof data === "function") callback = data, data = null;
      request.open(method, url, true);
      if (mimeType != null && !("accept" in headers)) headers["accept"] = mimeType + ",*/*";
      if (request.setRequestHeader) for (var name in headers) request.setRequestHeader(name, headers[name]);
      if (mimeType != null && request.overrideMimeType) request.overrideMimeType(mimeType);
      if (responseType != null) request.responseType = responseType;
      if (callback != null) xhr.on("error", callback).on("load", function(request) {
        callback(null, request);
      });
      dispatch.beforesend.call(xhr, request);
      request.send(data == null ? null : data);
      return xhr;
    };
    xhr.abort = function() {
      request.abort();
      return xhr;
    };
    d3.rebind(xhr, dispatch, "on");
    return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
  }
  function d3_xhr_fixCallback(callback) {
    return callback.length === 1 ? function(error, request) {
      callback(error == null ? request : null);
    } : callback;
  }
  function d3_xhrHasResponse(request) {
    var type = request.responseType;
    return type && type !== "text" ? request.response : request.responseText;
  }
  d3.dsv = function(delimiter, mimeType) {
    var reFormat = new RegExp('["' + delimiter + "\n]"), delimiterCode = delimiter.charCodeAt(0);
    function dsv(url, row, callback) {
      if (arguments.length < 3) callback = row, row = null;
      var xhr = d3_xhr(url, mimeType, row == null ? response : typedResponse(row), callback);
      xhr.row = function(_) {
        return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;
      };
      return xhr;
    }
    function response(request) {
      return dsv.parse(request.responseText);
    }
    function typedResponse(f) {
      return function(request) {
        return dsv.parse(request.responseText, f);
      };
    }
    dsv.parse = function(text, f) {
      var o;
      return dsv.parseRows(text, function(row, i) {
        if (o) return o(row, i - 1);
        var a = new Function("d", "return {" + row.map(function(name, i) {
          return JSON.stringify(name) + ": d[" + i + "]";
        }).join(",") + "}");
        o = f ? function(row, i) {
          return f(a(row), i);
        } : a;
      });
    };
    dsv.parseRows = function(text, f) {
      var EOL = {}, EOF = {}, rows = [], N = text.length, I = 0, n = 0, t, eol;
      function token() {
        if (I >= N) return EOF;
        if (eol) return eol = false, EOL;
        var j = I;
        if (text.charCodeAt(j) === 34) {
          var i = j;
          while (i++ < N) {
            if (text.charCodeAt(i) === 34) {
              if (text.charCodeAt(i + 1) !== 34) break;
              ++i;
            }
          }
          I = i + 2;
          var c = text.charCodeAt(i + 1);
          if (c === 13) {
            eol = true;
            if (text.charCodeAt(i + 2) === 10) ++I;
          } else if (c === 10) {
            eol = true;
          }
          return text.slice(j + 1, i).replace(/""/g, '"');
        }
        while (I < N) {
          var c = text.charCodeAt(I++), k = 1;
          if (c === 10) eol = true; else if (c === 13) {
            eol = true;
            if (text.charCodeAt(I) === 10) ++I, ++k;
          } else if (c !== delimiterCode) continue;
          return text.slice(j, I - k);
        }
        return text.slice(j);
      }
      while ((t = token()) !== EOF) {
        var a = [];
        while (t !== EOL && t !== EOF) {
          a.push(t);
          t = token();
        }
        if (f && (a = f(a, n++)) == null) continue;
        rows.push(a);
      }
      return rows;
    };
    dsv.format = function(rows) {
      if (Array.isArray(rows[0])) return dsv.formatRows(rows);
      var fieldSet = new d3_Set(), fields = [];
      rows.forEach(function(row) {
        for (var field in row) {
          if (!fieldSet.has(field)) {
            fields.push(fieldSet.add(field));
          }
        }
      });
      return [ fields.map(formatValue).join(delimiter) ].concat(rows.map(function(row) {
        return fields.map(function(field) {
          return formatValue(row[field]);
        }).join(delimiter);
      })).join("\n");
    };
    dsv.formatRows = function(rows) {
      return rows.map(formatRow).join("\n");
    };
    function formatRow(row) {
      return row.map(formatValue).join(delimiter);
    }
    function formatValue(text) {
      return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
    }
    return dsv;
  };
  d3.csv = d3.dsv(",", "text/csv");
  d3.tsv = d3.dsv("	", "text/tab-separated-values");
  var d3_timer_queueHead, d3_timer_queueTail, d3_timer_interval, d3_timer_timeout, d3_timer_frame = this[d3_vendorSymbol(this, "requestAnimationFrame")] || function(callback) {
    setTimeout(callback, 17);
  };
  d3.timer = function() {
    d3_timer.apply(this, arguments);
  };
  function d3_timer(callback, delay, then) {
    var n = arguments.length;
    if (n < 2) delay = 0;
    if (n < 3) then = Date.now();
    var time = then + delay, timer = {
      c: callback,
      t: time,
      n: null
    };
    if (d3_timer_queueTail) d3_timer_queueTail.n = timer; else d3_timer_queueHead = timer;
    d3_timer_queueTail = timer;
    if (!d3_timer_interval) {
      d3_timer_timeout = clearTimeout(d3_timer_timeout);
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
    return timer;
  }
  function d3_timer_step() {
    var now = d3_timer_mark(), delay = d3_timer_sweep() - now;
    if (delay > 24) {
      if (isFinite(delay)) {
        clearTimeout(d3_timer_timeout);
        d3_timer_timeout = setTimeout(d3_timer_step, delay);
      }
      d3_timer_interval = 0;
    } else {
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
  }
  d3.timer.flush = function() {
    d3_timer_mark();
    d3_timer_sweep();
  };
  function d3_timer_mark() {
    var now = Date.now(), timer = d3_timer_queueHead;
    while (timer) {
      if (now >= timer.t && timer.c(now - timer.t)) timer.c = null;
      timer = timer.n;
    }
    return now;
  }
  function d3_timer_sweep() {
    var t0, t1 = d3_timer_queueHead, time = Infinity;
    while (t1) {
      if (t1.c) {
        if (t1.t < time) time = t1.t;
        t1 = (t0 = t1).n;
      } else {
        t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;
      }
    }
    d3_timer_queueTail = t0;
    return time;
  }
  function d3_format_precision(x, p) {
    return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
  }
  d3.round = function(x, n) {
    return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
  };
  var d3_formatPrefixes = [ "y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y" ].map(d3_formatPrefix);
  d3.formatPrefix = function(value, precision) {
    var i = 0;
    if (value = +value) {
      if (value < 0) value *= -1;
      if (precision) value = d3.round(value, d3_format_precision(value, precision));
      i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
      i = Math.max(-24, Math.min(24, Math.floor((i - 1) / 3) * 3));
    }
    return d3_formatPrefixes[8 + i / 3];
  };
  function d3_formatPrefix(d, i) {
    var k = Math.pow(10, abs(8 - i) * 3);
    return {
      scale: i > 8 ? function(d) {
        return d / k;
      } : function(d) {
        return d * k;
      },
      symbol: d
    };
  }
  function d3_locale_numberFormat(locale) {
    var locale_decimal = locale.decimal, locale_thousands = locale.thousands, locale_grouping = locale.grouping, locale_currency = locale.currency, formatGroup = locale_grouping && locale_thousands ? function(value, width) {
      var i = value.length, t = [], j = 0, g = locale_grouping[0], length = 0;
      while (i > 0 && g > 0) {
        if (length + g + 1 > width) g = Math.max(1, width - length);
        t.push(value.substring(i -= g, i + g));
        if ((length += g + 1) > width) break;
        g = locale_grouping[j = (j + 1) % locale_grouping.length];
      }
      return t.reverse().join(locale_thousands);
    } : d3_identity;
    return function(specifier) {
      var match = d3_format_re.exec(specifier), fill = match[1] || " ", align = match[2] || ">", sign = match[3] || "-", symbol = match[4] || "", zfill = match[5], width = +match[6], comma = match[7], precision = match[8], type = match[9], scale = 1, prefix = "", suffix = "", integer = false, exponent = true;
      if (precision) precision = +precision.substring(1);
      if (zfill || fill === "0" && align === "=") {
        zfill = fill = "0";
        align = "=";
      }
      switch (type) {
       case "n":
        comma = true;
        type = "g";
        break;

       case "%":
        scale = 100;
        suffix = "%";
        type = "f";
        break;

       case "p":
        scale = 100;
        suffix = "%";
        type = "r";
        break;

       case "b":
       case "o":
       case "x":
       case "X":
        if (symbol === "#") prefix = "0" + type.toLowerCase();

       case "c":
        exponent = false;

       case "d":
        integer = true;
        precision = 0;
        break;

       case "s":
        scale = -1;
        type = "r";
        break;
      }
      if (symbol === "$") prefix = locale_currency[0], suffix = locale_currency[1];
      if (type == "r" && !precision) type = "g";
      if (precision != null) {
        if (type == "g") precision = Math.max(1, Math.min(21, precision)); else if (type == "e" || type == "f") precision = Math.max(0, Math.min(20, precision));
      }
      type = d3_format_types.get(type) || d3_format_typeDefault;
      var zcomma = zfill && comma;
      return function(value) {
        var fullSuffix = suffix;
        if (integer && value % 1) return "";
        var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign === "-" ? "" : sign;
        if (scale < 0) {
          var unit = d3.formatPrefix(value, precision);
          value = unit.scale(value);
          fullSuffix = unit.symbol + suffix;
        } else {
          value *= scale;
        }
        value = type(value, precision);
        var i = value.lastIndexOf("."), before, after;
        if (i < 0) {
          var j = exponent ? value.lastIndexOf("e") : -1;
          if (j < 0) before = value, after = ""; else before = value.substring(0, j), after = value.substring(j);
        } else {
          before = value.substring(0, i);
          after = locale_decimal + value.substring(i + 1);
        }
        if (!zfill && comma) before = formatGroup(before, Infinity);
        var length = prefix.length + before.length + after.length + (zcomma ? 0 : negative.length), padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
        if (zcomma) before = formatGroup(padding + before, padding.length ? width - after.length : Infinity);
        negative += prefix;
        value = before + after;
        return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + fullSuffix;
      };
    };
  }
  var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
  var d3_format_types = d3.map({
    b: function(x) {
      return x.toString(2);
    },
    c: function(x) {
      return String.fromCharCode(x);
    },
    o: function(x) {
      return x.toString(8);
    },
    x: function(x) {
      return x.toString(16);
    },
    X: function(x) {
      return x.toString(16).toUpperCase();
    },
    g: function(x, p) {
      return x.toPrecision(p);
    },
    e: function(x, p) {
      return x.toExponential(p);
    },
    f: function(x, p) {
      return x.toFixed(p);
    },
    r: function(x, p) {
      return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
    }
  });
  function d3_format_typeDefault(x) {
    return x + "";
  }
  var d3_time = d3.time = {}, d3_date = Date;
  function d3_date_utc() {
    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
  }
  d3_date_utc.prototype = {
    getDate: function() {
      return this._.getUTCDate();
    },
    getDay: function() {
      return this._.getUTCDay();
    },
    getFullYear: function() {
      return this._.getUTCFullYear();
    },
    getHours: function() {
      return this._.getUTCHours();
    },
    getMilliseconds: function() {
      return this._.getUTCMilliseconds();
    },
    getMinutes: function() {
      return this._.getUTCMinutes();
    },
    getMonth: function() {
      return this._.getUTCMonth();
    },
    getSeconds: function() {
      return this._.getUTCSeconds();
    },
    getTime: function() {
      return this._.getTime();
    },
    getTimezoneOffset: function() {
      return 0;
    },
    valueOf: function() {
      return this._.valueOf();
    },
    setDate: function() {
      d3_time_prototype.setUTCDate.apply(this._, arguments);
    },
    setDay: function() {
      d3_time_prototype.setUTCDay.apply(this._, arguments);
    },
    setFullYear: function() {
      d3_time_prototype.setUTCFullYear.apply(this._, arguments);
    },
    setHours: function() {
      d3_time_prototype.setUTCHours.apply(this._, arguments);
    },
    setMilliseconds: function() {
      d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
    },
    setMinutes: function() {
      d3_time_prototype.setUTCMinutes.apply(this._, arguments);
    },
    setMonth: function() {
      d3_time_prototype.setUTCMonth.apply(this._, arguments);
    },
    setSeconds: function() {
      d3_time_prototype.setUTCSeconds.apply(this._, arguments);
    },
    setTime: function() {
      d3_time_prototype.setTime.apply(this._, arguments);
    }
  };
  var d3_time_prototype = Date.prototype;
  function d3_time_interval(local, step, number) {
    function round(date) {
      var d0 = local(date), d1 = offset(d0, 1);
      return date - d0 < d1 - date ? d0 : d1;
    }
    function ceil(date) {
      step(date = local(new d3_date(date - 1)), 1);
      return date;
    }
    function offset(date, k) {
      step(date = new d3_date(+date), k);
      return date;
    }
    function range(t0, t1, dt) {
      var time = ceil(t0), times = [];
      if (dt > 1) {
        while (time < t1) {
          if (!(number(time) % dt)) times.push(new Date(+time));
          step(time, 1);
        }
      } else {
        while (time < t1) times.push(new Date(+time)), step(time, 1);
      }
      return times;
    }
    function range_utc(t0, t1, dt) {
      try {
        d3_date = d3_date_utc;
        var utc = new d3_date_utc();
        utc._ = t0;
        return range(utc, t1, dt);
      } finally {
        d3_date = Date;
      }
    }
    local.floor = local;
    local.round = round;
    local.ceil = ceil;
    local.offset = offset;
    local.range = range;
    var utc = local.utc = d3_time_interval_utc(local);
    utc.floor = utc;
    utc.round = d3_time_interval_utc(round);
    utc.ceil = d3_time_interval_utc(ceil);
    utc.offset = d3_time_interval_utc(offset);
    utc.range = range_utc;
    return local;
  }
  function d3_time_interval_utc(method) {
    return function(date, k) {
      try {
        d3_date = d3_date_utc;
        var utc = new d3_date_utc();
        utc._ = date;
        return method(utc, k)._;
      } finally {
        d3_date = Date;
      }
    };
  }
  d3_time.year = d3_time_interval(function(date) {
    date = d3_time.day(date);
    date.setMonth(0, 1);
    return date;
  }, function(date, offset) {
    date.setFullYear(date.getFullYear() + offset);
  }, function(date) {
    return date.getFullYear();
  });
  d3_time.years = d3_time.year.range;
  d3_time.years.utc = d3_time.year.utc.range;
  d3_time.day = d3_time_interval(function(date) {
    var day = new d3_date(2e3, 0);
    day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    return day;
  }, function(date, offset) {
    date.setDate(date.getDate() + offset);
  }, function(date) {
    return date.getDate() - 1;
  });
  d3_time.days = d3_time.day.range;
  d3_time.days.utc = d3_time.day.utc.range;
  d3_time.dayOfYear = function(date) {
    var year = d3_time.year(date);
    return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
  };
  [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ].forEach(function(day, i) {
    i = 7 - i;
    var interval = d3_time[day] = d3_time_interval(function(date) {
      (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
      return date;
    }, function(date, offset) {
      date.setDate(date.getDate() + Math.floor(offset) * 7);
    }, function(date) {
      var day = d3_time.year(date).getDay();
      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
    });
    d3_time[day + "s"] = interval.range;
    d3_time[day + "s"].utc = interval.utc.range;
    d3_time[day + "OfYear"] = function(date) {
      var day = d3_time.year(date).getDay();
      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7);
    };
  });
  d3_time.week = d3_time.sunday;
  d3_time.weeks = d3_time.sunday.range;
  d3_time.weeks.utc = d3_time.sunday.utc.range;
  d3_time.weekOfYear = d3_time.sundayOfYear;
  function d3_locale_timeFormat(locale) {
    var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_days = locale.days, locale_shortDays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
    function d3_time_format(template) {
      var n = template.length;
      function format(date) {
        var string = [], i = -1, j = 0, c, p, f;
        while (++i < n) {
          if (template.charCodeAt(i) === 37) {
            string.push(template.slice(j, i));
            if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null) c = template.charAt(++i);
            if (f = d3_time_formats[c]) c = f(date, p == null ? c === "e" ? " " : "0" : p);
            string.push(c);
            j = i + 1;
          }
        }
        string.push(template.slice(j, i));
        return string.join("");
      }
      format.parse = function(string) {
        var d = {
          y: 1900,
          m: 0,
          d: 1,
          H: 0,
          M: 0,
          S: 0,
          L: 0,
          Z: null
        }, i = d3_time_parse(d, template, string, 0);
        if (i != string.length) return null;
        if ("p" in d) d.H = d.H % 12 + d.p * 12;
        var localZ = d.Z != null && d3_date !== d3_date_utc, date = new (localZ ? d3_date_utc : d3_date)();
        if ("j" in d) date.setFullYear(d.y, 0, d.j); else if ("W" in d || "U" in d) {
          if (!("w" in d)) d.w = "W" in d ? 1 : 0;
          date.setFullYear(d.y, 0, 1);
          date.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + d.W * 7 - (date.getDay() + 5) % 7 : d.w + d.U * 7 - (date.getDay() + 6) % 7);
        } else date.setFullYear(d.y, d.m, d.d);
        date.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L);
        return localZ ? date._ : date;
      };
      format.toString = function() {
        return template;
      };
      return format;
    }
    function d3_time_parse(date, template, string, j) {
      var c, p, t, i = 0, n = template.length, m = string.length;
      while (i < n) {
        if (j >= m) return -1;
        c = template.charCodeAt(i++);
        if (c === 37) {
          t = template.charAt(i++);
          p = d3_time_parsers[t in d3_time_formatPads ? template.charAt(i++) : t];
          if (!p || (j = p(date, string, j)) < 0) return -1;
        } else if (c != string.charCodeAt(j++)) {
          return -1;
        }
      }
      return j;
    }
    d3_time_format.utc = function(template) {
      var local = d3_time_format(template);
      function format(date) {
        try {
          d3_date = d3_date_utc;
          var utc = new d3_date();
          utc._ = date;
          return local(utc);
        } finally {
          d3_date = Date;
        }
      }
      format.parse = function(string) {
        try {
          d3_date = d3_date_utc;
          var date = local.parse(string);
          return date && date._;
        } finally {
          d3_date = Date;
        }
      };
      format.toString = local.toString;
      return format;
    };
    d3_time_format.multi = d3_time_format.utc.multi = d3_time_formatMulti;
    var d3_time_periodLookup = d3.map(), d3_time_dayRe = d3_time_formatRe(locale_days), d3_time_dayLookup = d3_time_formatLookup(locale_days), d3_time_dayAbbrevRe = d3_time_formatRe(locale_shortDays), d3_time_dayAbbrevLookup = d3_time_formatLookup(locale_shortDays), d3_time_monthRe = d3_time_formatRe(locale_months), d3_time_monthLookup = d3_time_formatLookup(locale_months), d3_time_monthAbbrevRe = d3_time_formatRe(locale_shortMonths), d3_time_monthAbbrevLookup = d3_time_formatLookup(locale_shortMonths);
    locale_periods.forEach(function(p, i) {
      d3_time_periodLookup.set(p.toLowerCase(), i);
    });
    var d3_time_formats = {
      a: function(d) {
        return locale_shortDays[d.getDay()];
      },
      A: function(d) {
        return locale_days[d.getDay()];
      },
      b: function(d) {
        return locale_shortMonths[d.getMonth()];
      },
      B: function(d) {
        return locale_months[d.getMonth()];
      },
      c: d3_time_format(locale_dateTime),
      d: function(d, p) {
        return d3_time_formatPad(d.getDate(), p, 2);
      },
      e: function(d, p) {
        return d3_time_formatPad(d.getDate(), p, 2);
      },
      H: function(d, p) {
        return d3_time_formatPad(d.getHours(), p, 2);
      },
      I: function(d, p) {
        return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
      },
      j: function(d, p) {
        return d3_time_formatPad(1 + d3_time.dayOfYear(d), p, 3);
      },
      L: function(d, p) {
        return d3_time_formatPad(d.getMilliseconds(), p, 3);
      },
      m: function(d, p) {
        return d3_time_formatPad(d.getMonth() + 1, p, 2);
      },
      M: function(d, p) {
        return d3_time_formatPad(d.getMinutes(), p, 2);
      },
      p: function(d) {
        return locale_periods[+(d.getHours() >= 12)];
      },
      S: function(d, p) {
        return d3_time_formatPad(d.getSeconds(), p, 2);
      },
      U: function(d, p) {
        return d3_time_formatPad(d3_time.sundayOfYear(d), p, 2);
      },
      w: function(d) {
        return d.getDay();
      },
      W: function(d, p) {
        return d3_time_formatPad(d3_time.mondayOfYear(d), p, 2);
      },
      x: d3_time_format(locale_date),
      X: d3_time_format(locale_time),
      y: function(d, p) {
        return d3_time_formatPad(d.getFullYear() % 100, p, 2);
      },
      Y: function(d, p) {
        return d3_time_formatPad(d.getFullYear() % 1e4, p, 4);
      },
      Z: d3_time_zone,
      "%": function() {
        return "%";
      }
    };
    var d3_time_parsers = {
      a: d3_time_parseWeekdayAbbrev,
      A: d3_time_parseWeekday,
      b: d3_time_parseMonthAbbrev,
      B: d3_time_parseMonth,
      c: d3_time_parseLocaleFull,
      d: d3_time_parseDay,
      e: d3_time_parseDay,
      H: d3_time_parseHour24,
      I: d3_time_parseHour24,
      j: d3_time_parseDayOfYear,
      L: d3_time_parseMilliseconds,
      m: d3_time_parseMonthNumber,
      M: d3_time_parseMinutes,
      p: d3_time_parseAmPm,
      S: d3_time_parseSeconds,
      U: d3_time_parseWeekNumberSunday,
      w: d3_time_parseWeekdayNumber,
      W: d3_time_parseWeekNumberMonday,
      x: d3_time_parseLocaleDate,
      X: d3_time_parseLocaleTime,
      y: d3_time_parseYear,
      Y: d3_time_parseFullYear,
      Z: d3_time_parseZone,
      "%": d3_time_parseLiteralPercent
    };
    function d3_time_parseWeekdayAbbrev(date, string, i) {
      d3_time_dayAbbrevRe.lastIndex = 0;
      var n = d3_time_dayAbbrevRe.exec(string.slice(i));
      return n ? (date.w = d3_time_dayAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseWeekday(date, string, i) {
      d3_time_dayRe.lastIndex = 0;
      var n = d3_time_dayRe.exec(string.slice(i));
      return n ? (date.w = d3_time_dayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseMonthAbbrev(date, string, i) {
      d3_time_monthAbbrevRe.lastIndex = 0;
      var n = d3_time_monthAbbrevRe.exec(string.slice(i));
      return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseMonth(date, string, i) {
      d3_time_monthRe.lastIndex = 0;
      var n = d3_time_monthRe.exec(string.slice(i));
      return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseLocaleFull(date, string, i) {
      return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
    }
    function d3_time_parseLocaleDate(date, string, i) {
      return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
    }
    function d3_time_parseLocaleTime(date, string, i) {
      return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
    }
    function d3_time_parseAmPm(date, string, i) {
      var n = d3_time_periodLookup.get(string.slice(i, i += 2).toLowerCase());
      return n == null ? -1 : (date.p = n, i);
    }
    return d3_time_format;
  }
  var d3_time_formatPads = {
    "-": "",
    _: " ",
    "0": "0"
  }, d3_time_numberRe = /^\s*\d+/, d3_time_percentRe = /^%/;
  function d3_time_formatPad(value, fill, width) {
    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
  }
  function d3_time_formatRe(names) {
    return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i");
  }
  function d3_time_formatLookup(names) {
    var map = new d3_Map(), i = -1, n = names.length;
    while (++i < n) map.set(names[i].toLowerCase(), i);
    return map;
  }
  function d3_time_parseWeekdayNumber(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 1));
    return n ? (date.w = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseWeekNumberSunday(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i));
    return n ? (date.U = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseWeekNumberMonday(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i));
    return n ? (date.W = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseFullYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 4));
    return n ? (date.y = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.y = d3_time_expandYear(+n[0]), i + n[0].length) : -1;
  }
  function d3_time_parseZone(date, string, i) {
    return /^[+-]\d{4}$/.test(string = string.slice(i, i + 5)) ? (date.Z = -string, 
    i + 5) : -1;
  }
  function d3_time_expandYear(d) {
    return d + (d > 68 ? 1900 : 2e3);
  }
  function d3_time_parseMonthNumber(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.m = n[0] - 1, i + n[0].length) : -1;
  }
  function d3_time_parseDay(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.d = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseDayOfYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
    return n ? (date.j = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseHour24(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.H = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseMinutes(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.M = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseSeconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.S = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseMilliseconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
    return n ? (date.L = +n[0], i + n[0].length) : -1;
  }
  function d3_time_zone(d) {
    var z = d.getTimezoneOffset(), zs = z > 0 ? "-" : "+", zh = abs(z) / 60 | 0, zm = abs(z) % 60;
    return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2);
  }
  function d3_time_parseLiteralPercent(date, string, i) {
    d3_time_percentRe.lastIndex = 0;
    var n = d3_time_percentRe.exec(string.slice(i, i + 1));
    return n ? i + n[0].length : -1;
  }
  function d3_time_formatMulti(formats) {
    var n = formats.length, i = -1;
    while (++i < n) formats[i][0] = this(formats[i][0]);
    return function(date) {
      var i = 0, f = formats[i];
      while (!f[1](date)) f = formats[++i];
      return f[0](date);
    };
  }
  d3.locale = function(locale) {
    return {
      numberFormat: d3_locale_numberFormat(locale),
      timeFormat: d3_locale_timeFormat(locale)
    };
  };
  var d3_locale_enUS = d3.locale({
    decimal: ".",
    thousands: ",",
    grouping: [ 3 ],
    currency: [ "$", "" ],
    dateTime: "%a %b %e %X %Y",
    date: "%m/%d/%Y",
    time: "%H:%M:%S",
    periods: [ "AM", "PM" ],
    days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
    shortDays: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
    months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
    shortMonths: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
  });
  d3.format = d3_locale_enUS.numberFormat;
  d3.geo = {};
  function d3_adder() {}
  d3_adder.prototype = {
    s: 0,
    t: 0,
    add: function(y) {
      d3_adderSum(y, this.t, d3_adderTemp);
      d3_adderSum(d3_adderTemp.s, this.s, this);
      if (this.s) this.t += d3_adderTemp.t; else this.s = d3_adderTemp.t;
    },
    reset: function() {
      this.s = this.t = 0;
    },
    valueOf: function() {
      return this.s;
    }
  };
  var d3_adderTemp = new d3_adder();
  function d3_adderSum(a, b, o) {
    var x = o.s = a + b, bv = x - a, av = x - bv;
    o.t = a - av + (b - bv);
  }
  d3.geo.stream = function(object, listener) {
    if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
      d3_geo_streamObjectType[object.type](object, listener);
    } else {
      d3_geo_streamGeometry(object, listener);
    }
  };
  function d3_geo_streamGeometry(geometry, listener) {
    if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
      d3_geo_streamGeometryType[geometry.type](geometry, listener);
    }
  }
  var d3_geo_streamObjectType = {
    Feature: function(feature, listener) {
      d3_geo_streamGeometry(feature.geometry, listener);
    },
    FeatureCollection: function(object, listener) {
      var features = object.features, i = -1, n = features.length;
      while (++i < n) d3_geo_streamGeometry(features[i].geometry, listener);
    }
  };
  var d3_geo_streamGeometryType = {
    Sphere: function(object, listener) {
      listener.sphere();
    },
    Point: function(object, listener) {
      object = object.coordinates;
      listener.point(object[0], object[1], object[2]);
    },
    MultiPoint: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) object = coordinates[i], listener.point(object[0], object[1], object[2]);
    },
    LineString: function(object, listener) {
      d3_geo_streamLine(object.coordinates, listener, 0);
    },
    MultiLineString: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) d3_geo_streamLine(coordinates[i], listener, 0);
    },
    Polygon: function(object, listener) {
      d3_geo_streamPolygon(object.coordinates, listener);
    },
    MultiPolygon: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) d3_geo_streamPolygon(coordinates[i], listener);
    },
    GeometryCollection: function(object, listener) {
      var geometries = object.geometries, i = -1, n = geometries.length;
      while (++i < n) d3_geo_streamGeometry(geometries[i], listener);
    }
  };
  function d3_geo_streamLine(coordinates, listener, closed) {
    var i = -1, n = coordinates.length - closed, coordinate;
    listener.lineStart();
    while (++i < n) coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1], coordinate[2]);
    listener.lineEnd();
  }
  function d3_geo_streamPolygon(coordinates, listener) {
    var i = -1, n = coordinates.length;
    listener.polygonStart();
    while (++i < n) d3_geo_streamLine(coordinates[i], listener, 1);
    listener.polygonEnd();
  }
  d3.geo.area = function(object) {
    d3_geo_areaSum = 0;
    d3.geo.stream(object, d3_geo_area);
    return d3_geo_areaSum;
  };
  var d3_geo_areaSum, d3_geo_areaRingSum = new d3_adder();
  var d3_geo_area = {
    sphere: function() {
      d3_geo_areaSum += 4 * π;
    },
    point: d3_noop,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: function() {
      d3_geo_areaRingSum.reset();
      d3_geo_area.lineStart = d3_geo_areaRingStart;
    },
    polygonEnd: function() {
      var area = 2 * d3_geo_areaRingSum;
      d3_geo_areaSum += area < 0 ? 4 * π + area : area;
      d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
    }
  };
  function d3_geo_areaRingStart() {
    var λ00, φ00, λ0, cosφ0, sinφ0;
    d3_geo_area.point = function(λ, φ) {
      d3_geo_area.point = nextPoint;
      λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), 
      sinφ0 = Math.sin(φ);
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      φ = φ * d3_radians / 2 + π / 4;
      var dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, cosφ = Math.cos(φ), sinφ = Math.sin(φ), k = sinφ0 * sinφ, u = cosφ0 * cosφ + k * Math.cos(adλ), v = k * sdλ * Math.sin(adλ);
      d3_geo_areaRingSum.add(Math.atan2(v, u));
      λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
    }
    d3_geo_area.lineEnd = function() {
      nextPoint(λ00, φ00);
    };
  }
  function d3_geo_cartesian(spherical) {
    var λ = spherical[0], φ = spherical[1], cosφ = Math.cos(φ);
    return [ cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ) ];
  }
  function d3_geo_cartesianDot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }
  function d3_geo_cartesianCross(a, b) {
    return [ a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0] ];
  }
  function d3_geo_cartesianAdd(a, b) {
    a[0] += b[0];
    a[1] += b[1];
    a[2] += b[2];
  }
  function d3_geo_cartesianScale(vector, k) {
    return [ vector[0] * k, vector[1] * k, vector[2] * k ];
  }
  function d3_geo_cartesianNormalize(d) {
    var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l;
    d[1] /= l;
    d[2] /= l;
  }
  function d3_geo_spherical(cartesian) {
    return [ Math.atan2(cartesian[1], cartesian[0]), d3_asin(cartesian[2]) ];
  }
  function d3_geo_sphericalEqual(a, b) {
    return abs(a[0] - b[0]) < ε && abs(a[1] - b[1]) < ε;
  }
  d3.geo.bounds = function() {
    var λ0, φ0, λ1, φ1, λ_, λ__, φ__, p0, dλSum, ranges, range;
    var bound = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() {
        bound.point = ringPoint;
        bound.lineStart = ringStart;
        bound.lineEnd = ringEnd;
        dλSum = 0;
        d3_geo_area.polygonStart();
      },
      polygonEnd: function() {
        d3_geo_area.polygonEnd();
        bound.point = point;
        bound.lineStart = lineStart;
        bound.lineEnd = lineEnd;
        if (d3_geo_areaRingSum < 0) λ0 = -(λ1 = 180), φ0 = -(φ1 = 90); else if (dλSum > ε) φ1 = 90; else if (dλSum < -ε) φ0 = -90;
        range[0] = λ0, range[1] = λ1;
      }
    };
    function point(λ, φ) {
      ranges.push(range = [ λ0 = λ, λ1 = λ ]);
      if (φ < φ0) φ0 = φ;
      if (φ > φ1) φ1 = φ;
    }
    function linePoint(λ, φ) {
      var p = d3_geo_cartesian([ λ * d3_radians, φ * d3_radians ]);
      if (p0) {
        var normal = d3_geo_cartesianCross(p0, p), equatorial = [ normal[1], -normal[0], 0 ], inflection = d3_geo_cartesianCross(equatorial, normal);
        d3_geo_cartesianNormalize(inflection);
        inflection = d3_geo_spherical(inflection);
        var dλ = λ - λ_, s = dλ > 0 ? 1 : -1, λi = inflection[0] * d3_degrees * s, antimeridian = abs(dλ) > 180;
        if (antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
          var φi = inflection[1] * d3_degrees;
          if (φi > φ1) φ1 = φi;
        } else if (λi = (λi + 360) % 360 - 180, antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
          var φi = -inflection[1] * d3_degrees;
          if (φi < φ0) φ0 = φi;
        } else {
          if (φ < φ0) φ0 = φ;
          if (φ > φ1) φ1 = φ;
        }
        if (antimeridian) {
          if (λ < λ_) {
            if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
          } else {
            if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
          }
        } else {
          if (λ1 >= λ0) {
            if (λ < λ0) λ0 = λ;
            if (λ > λ1) λ1 = λ;
          } else {
            if (λ > λ_) {
              if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
            } else {
              if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
            }
          }
        }
      } else {
        point(λ, φ);
      }
      p0 = p, λ_ = λ;
    }
    function lineStart() {
      bound.point = linePoint;
    }
    function lineEnd() {
      range[0] = λ0, range[1] = λ1;
      bound.point = point;
      p0 = null;
    }
    function ringPoint(λ, φ) {
      if (p0) {
        var dλ = λ - λ_;
        dλSum += abs(dλ) > 180 ? dλ + (dλ > 0 ? 360 : -360) : dλ;
      } else λ__ = λ, φ__ = φ;
      d3_geo_area.point(λ, φ);
      linePoint(λ, φ);
    }
    function ringStart() {
      d3_geo_area.lineStart();
    }
    function ringEnd() {
      ringPoint(λ__, φ__);
      d3_geo_area.lineEnd();
      if (abs(dλSum) > ε) λ0 = -(λ1 = 180);
      range[0] = λ0, range[1] = λ1;
      p0 = null;
    }
    function angle(λ0, λ1) {
      return (λ1 -= λ0) < 0 ? λ1 + 360 : λ1;
    }
    function compareRanges(a, b) {
      return a[0] - b[0];
    }
    function withinRange(x, range) {
      return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
    }
    return function(feature) {
      φ1 = λ1 = -(λ0 = φ0 = Infinity);
      ranges = [];
      d3.geo.stream(feature, bound);
      var n = ranges.length;
      if (n) {
        ranges.sort(compareRanges);
        for (var i = 1, a = ranges[0], b, merged = [ a ]; i < n; ++i) {
          b = ranges[i];
          if (withinRange(b[0], a) || withinRange(b[1], a)) {
            if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
            if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
          } else {
            merged.push(a = b);
          }
        }
        var best = -Infinity, dλ;
        for (var n = merged.length - 1, i = 0, a = merged[n], b; i <= n; a = b, ++i) {
          b = merged[i];
          if ((dλ = angle(a[1], b[0])) > best) best = dλ, λ0 = b[0], λ1 = a[1];
        }
      }
      ranges = range = null;
      return λ0 === Infinity || φ0 === Infinity ? [ [ NaN, NaN ], [ NaN, NaN ] ] : [ [ λ0, φ0 ], [ λ1, φ1 ] ];
    };
  }();
  d3.geo.centroid = function(object) {
    d3_geo_centroidW0 = d3_geo_centroidW1 = d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
    d3.geo.stream(object, d3_geo_centroid);
    var x = d3_geo_centroidX2, y = d3_geo_centroidY2, z = d3_geo_centroidZ2, m = x * x + y * y + z * z;
    if (m < ε2) {
      x = d3_geo_centroidX1, y = d3_geo_centroidY1, z = d3_geo_centroidZ1;
      if (d3_geo_centroidW1 < ε) x = d3_geo_centroidX0, y = d3_geo_centroidY0, z = d3_geo_centroidZ0;
      m = x * x + y * y + z * z;
      if (m < ε2) return [ NaN, NaN ];
    }
    return [ Math.atan2(y, x) * d3_degrees, d3_asin(z / Math.sqrt(m)) * d3_degrees ];
  };
  var d3_geo_centroidW0, d3_geo_centroidW1, d3_geo_centroidX0, d3_geo_centroidY0, d3_geo_centroidZ0, d3_geo_centroidX1, d3_geo_centroidY1, d3_geo_centroidZ1, d3_geo_centroidX2, d3_geo_centroidY2, d3_geo_centroidZ2;
  var d3_geo_centroid = {
    sphere: d3_noop,
    point: d3_geo_centroidPoint,
    lineStart: d3_geo_centroidLineStart,
    lineEnd: d3_geo_centroidLineEnd,
    polygonStart: function() {
      d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
    },
    polygonEnd: function() {
      d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
    }
  };
  function d3_geo_centroidPoint(λ, φ) {
    λ *= d3_radians;
    var cosφ = Math.cos(φ *= d3_radians);
    d3_geo_centroidPointXYZ(cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ));
  }
  function d3_geo_centroidPointXYZ(x, y, z) {
    ++d3_geo_centroidW0;
    d3_geo_centroidX0 += (x - d3_geo_centroidX0) / d3_geo_centroidW0;
    d3_geo_centroidY0 += (y - d3_geo_centroidY0) / d3_geo_centroidW0;
    d3_geo_centroidZ0 += (z - d3_geo_centroidZ0) / d3_geo_centroidW0;
  }
  function d3_geo_centroidLineStart() {
    var x0, y0, z0;
    d3_geo_centroid.point = function(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians);
      x0 = cosφ * Math.cos(λ);
      y0 = cosφ * Math.sin(λ);
      z0 = Math.sin(φ);
      d3_geo_centroid.point = nextPoint;
      d3_geo_centroidPointXYZ(x0, y0, z0);
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
      d3_geo_centroidW1 += w;
      d3_geo_centroidX1 += w * (x0 + (x0 = x));
      d3_geo_centroidY1 += w * (y0 + (y0 = y));
      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
      d3_geo_centroidPointXYZ(x0, y0, z0);
    }
  }
  function d3_geo_centroidLineEnd() {
    d3_geo_centroid.point = d3_geo_centroidPoint;
  }
  function d3_geo_centroidRingStart() {
    var λ00, φ00, x0, y0, z0;
    d3_geo_centroid.point = function(λ, φ) {
      λ00 = λ, φ00 = φ;
      d3_geo_centroid.point = nextPoint;
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians);
      x0 = cosφ * Math.cos(λ);
      y0 = cosφ * Math.sin(λ);
      z0 = Math.sin(φ);
      d3_geo_centroidPointXYZ(x0, y0, z0);
    };
    d3_geo_centroid.lineEnd = function() {
      nextPoint(λ00, φ00);
      d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
      d3_geo_centroid.point = d3_geo_centroidPoint;
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), cx = y0 * z - z0 * y, cy = z0 * x - x0 * z, cz = x0 * y - y0 * x, m = Math.sqrt(cx * cx + cy * cy + cz * cz), u = x0 * x + y0 * y + z0 * z, v = m && -d3_acos(u) / m, w = Math.atan2(m, u);
      d3_geo_centroidX2 += v * cx;
      d3_geo_centroidY2 += v * cy;
      d3_geo_centroidZ2 += v * cz;
      d3_geo_centroidW1 += w;
      d3_geo_centroidX1 += w * (x0 + (x0 = x));
      d3_geo_centroidY1 += w * (y0 + (y0 = y));
      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
      d3_geo_centroidPointXYZ(x0, y0, z0);
    }
  }
  function d3_geo_compose(a, b) {
    function compose(x, y) {
      return x = a(x, y), b(x[0], x[1]);
    }
    if (a.invert && b.invert) compose.invert = function(x, y) {
      return x = b.invert(x, y), x && a.invert(x[0], x[1]);
    };
    return compose;
  }
  function d3_true() {
    return true;
  }
  function d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener) {
    var subject = [], clip = [];
    segments.forEach(function(segment) {
      if ((n = segment.length - 1) <= 0) return;
      var n, p0 = segment[0], p1 = segment[n];
      if (d3_geo_sphericalEqual(p0, p1)) {
        listener.lineStart();
        for (var i = 0; i < n; ++i) listener.point((p0 = segment[i])[0], p0[1]);
        listener.lineEnd();
        return;
      }
      var a = new d3_geo_clipPolygonIntersection(p0, segment, null, true), b = new d3_geo_clipPolygonIntersection(p0, null, a, false);
      a.o = b;
      subject.push(a);
      clip.push(b);
      a = new d3_geo_clipPolygonIntersection(p1, segment, null, false);
      b = new d3_geo_clipPolygonIntersection(p1, null, a, true);
      a.o = b;
      subject.push(a);
      clip.push(b);
    });
    clip.sort(compare);
    d3_geo_clipPolygonLinkCircular(subject);
    d3_geo_clipPolygonLinkCircular(clip);
    if (!subject.length) return;
    for (var i = 0, entry = clipStartInside, n = clip.length; i < n; ++i) {
      clip[i].e = entry = !entry;
    }
    var start = subject[0], points, point;
    while (1) {
      var current = start, isSubject = true;
      while (current.v) if ((current = current.n) === start) return;
      points = current.z;
      listener.lineStart();
      do {
        current.v = current.o.v = true;
        if (current.e) {
          if (isSubject) {
            for (var i = 0, n = points.length; i < n; ++i) listener.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.n.x, 1, listener);
          }
          current = current.n;
        } else {
          if (isSubject) {
            points = current.p.z;
            for (var i = points.length - 1; i >= 0; --i) listener.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.p.x, -1, listener);
          }
          current = current.p;
        }
        current = current.o;
        points = current.z;
        isSubject = !isSubject;
      } while (!current.v);
      listener.lineEnd();
    }
  }
  function d3_geo_clipPolygonLinkCircular(array) {
    if (!(n = array.length)) return;
    var n, i = 0, a = array[0], b;
    while (++i < n) {
      a.n = b = array[i];
      b.p = a;
      a = b;
    }
    a.n = b = array[0];
    b.p = a;
  }
  function d3_geo_clipPolygonIntersection(point, points, other, entry) {
    this.x = point;
    this.z = points;
    this.o = other;
    this.e = entry;
    this.v = false;
    this.n = this.p = null;
  }
  function d3_geo_clip(pointVisible, clipLine, interpolate, clipStart) {
    return function(rotate, listener) {
      var line = clipLine(listener), rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);
      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          clip.point = pointRing;
          clip.lineStart = ringStart;
          clip.lineEnd = ringEnd;
          segments = [];
          polygon = [];
        },
        polygonEnd: function() {
          clip.point = point;
          clip.lineStart = lineStart;
          clip.lineEnd = lineEnd;
          segments = d3.merge(segments);
          var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, polygon);
          if (segments.length) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            d3_geo_clipPolygon(segments, d3_geo_clipSort, clipStartInside, interpolate, listener);
          } else if (clipStartInside) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            listener.lineStart();
            interpolate(null, null, 1, listener);
            listener.lineEnd();
          }
          if (polygonStarted) listener.polygonEnd(), polygonStarted = false;
          segments = polygon = null;
        },
        sphere: function() {
          listener.polygonStart();
          listener.lineStart();
          interpolate(null, null, 1, listener);
          listener.lineEnd();
          listener.polygonEnd();
        }
      };
      function point(λ, φ) {
        var point = rotate(λ, φ);
        if (pointVisible(λ = point[0], φ = point[1])) listener.point(λ, φ);
      }
      function pointLine(λ, φ) {
        var point = rotate(λ, φ);
        line.point(point[0], point[1]);
      }
      function lineStart() {
        clip.point = pointLine;
        line.lineStart();
      }
      function lineEnd() {
        clip.point = point;
        line.lineEnd();
      }
      var segments;
      var buffer = d3_geo_clipBufferListener(), ringListener = clipLine(buffer), polygonStarted = false, polygon, ring;
      function pointRing(λ, φ) {
        ring.push([ λ, φ ]);
        var point = rotate(λ, φ);
        ringListener.point(point[0], point[1]);
      }
      function ringStart() {
        ringListener.lineStart();
        ring = [];
      }
      function ringEnd() {
        pointRing(ring[0][0], ring[0][1]);
        ringListener.lineEnd();
        var clean = ringListener.clean(), ringSegments = buffer.buffer(), segment, n = ringSegments.length;
        ring.pop();
        polygon.push(ring);
        ring = null;
        if (!n) return;
        if (clean & 1) {
          segment = ringSegments[0];
          var n = segment.length - 1, i = -1, point;
          if (n > 0) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            listener.lineStart();
            while (++i < n) listener.point((point = segment[i])[0], point[1]);
            listener.lineEnd();
          }
          return;
        }
        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
        segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
      }
      return clip;
    };
  }
  function d3_geo_clipSegmentLength1(segment) {
    return segment.length > 1;
  }
  function d3_geo_clipBufferListener() {
    var lines = [], line;
    return {
      lineStart: function() {
        lines.push(line = []);
      },
      point: function(λ, φ) {
        line.push([ λ, φ ]);
      },
      lineEnd: d3_noop,
      buffer: function() {
        var buffer = lines;
        lines = [];
        line = null;
        return buffer;
      },
      rejoin: function() {
        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
      }
    };
  }
  function d3_geo_clipSort(a, b) {
    return ((a = a.x)[0] < 0 ? a[1] - halfπ - ε : halfπ - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfπ - ε : halfπ - b[1]);
  }
  var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, [ -π, -π / 2 ]);
  function d3_geo_clipAntimeridianLine(listener) {
    var λ0 = NaN, φ0 = NaN, sλ0 = NaN, clean;
    return {
      lineStart: function() {
        listener.lineStart();
        clean = 1;
      },
      point: function(λ1, φ1) {
        var sλ1 = λ1 > 0 ? π : -π, dλ = abs(λ1 - λ0);
        if (abs(dλ - π) < ε) {
          listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? halfπ : -halfπ);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          listener.point(λ1, φ0);
          clean = 0;
        } else if (sλ0 !== sλ1 && dλ >= π) {
          if (abs(λ0 - sλ0) < ε) λ0 -= sλ0 * ε;
          if (abs(λ1 - sλ1) < ε) λ1 -= sλ1 * ε;
          φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          clean = 0;
        }
        listener.point(λ0 = λ1, φ0 = φ1);
        sλ0 = sλ1;
      },
      lineEnd: function() {
        listener.lineEnd();
        λ0 = φ0 = NaN;
      },
      clean: function() {
        return 2 - clean;
      }
    };
  }
  function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
    var cosφ0, cosφ1, sinλ0_λ1 = Math.sin(λ0 - λ1);
    return abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
  }
  function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
    var φ;
    if (from == null) {
      φ = direction * halfπ;
      listener.point(-π, φ);
      listener.point(0, φ);
      listener.point(π, φ);
      listener.point(π, 0);
      listener.point(π, -φ);
      listener.point(0, -φ);
      listener.point(-π, -φ);
      listener.point(-π, 0);
      listener.point(-π, φ);
    } else if (abs(from[0] - to[0]) > ε) {
      var s = from[0] < to[0] ? π : -π;
      φ = direction * s / 2;
      listener.point(-s, φ);
      listener.point(0, φ);
      listener.point(s, φ);
    } else {
      listener.point(to[0], to[1]);
    }
  }
  function d3_geo_pointInPolygon(point, polygon) {
    var meridian = point[0], parallel = point[1], meridianNormal = [ Math.sin(meridian), -Math.cos(meridian), 0 ], polarAngle = 0, winding = 0;
    d3_geo_areaRingSum.reset();
    for (var i = 0, n = polygon.length; i < n; ++i) {
      var ring = polygon[i], m = ring.length;
      if (!m) continue;
      var point0 = ring[0], λ0 = point0[0], φ0 = point0[1] / 2 + π / 4, sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), j = 1;
      while (true) {
        if (j === m) j = 0;
        point = ring[j];
        var λ = point[0], φ = point[1] / 2 + π / 4, sinφ = Math.sin(φ), cosφ = Math.cos(φ), dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, antimeridian = adλ > π, k = sinφ0 * sinφ;
        d3_geo_areaRingSum.add(Math.atan2(k * sdλ * Math.sin(adλ), cosφ0 * cosφ + k * Math.cos(adλ)));
        polarAngle += antimeridian ? dλ + sdλ * τ : dλ;
        if (antimeridian ^ λ0 >= meridian ^ λ >= meridian) {
          var arc = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));
          d3_geo_cartesianNormalize(arc);
          var intersection = d3_geo_cartesianCross(meridianNormal, arc);
          d3_geo_cartesianNormalize(intersection);
          var φarc = (antimeridian ^ dλ >= 0 ? -1 : 1) * d3_asin(intersection[2]);
          if (parallel > φarc || parallel === φarc && (arc[0] || arc[1])) {
            winding += antimeridian ^ dλ >= 0 ? 1 : -1;
          }
        }
        if (!j++) break;
        λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ, point0 = point;
      }
    }
    return (polarAngle < -ε || polarAngle < ε && d3_geo_areaRingSum < -ε) ^ winding & 1;
  }
  function d3_geo_clipCircle(radius) {
    var cr = Math.cos(radius), smallRadius = cr > 0, notHemisphere = abs(cr) > ε, interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);
    return d3_geo_clip(visible, clipLine, interpolate, smallRadius ? [ 0, -radius ] : [ -π, radius - π ]);
    function visible(λ, φ) {
      return Math.cos(λ) * Math.cos(φ) > cr;
    }
    function clipLine(listener) {
      var point0, c0, v0, v00, clean;
      return {
        lineStart: function() {
          v00 = v0 = false;
          clean = 1;
        },
        point: function(λ, φ) {
          var point1 = [ λ, φ ], point2, v = visible(λ, φ), c = smallRadius ? v ? 0 : code(λ, φ) : v ? code(λ + (λ < 0 ? π : -π), φ) : 0;
          if (!point0 && (v00 = v0 = v)) listener.lineStart();
          if (v !== v0) {
            point2 = intersect(point0, point1);
            if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
              point1[0] += ε;
              point1[1] += ε;
              v = visible(point1[0], point1[1]);
            }
          }
          if (v !== v0) {
            clean = 0;
            if (v) {
              listener.lineStart();
              point2 = intersect(point1, point0);
              listener.point(point2[0], point2[1]);
            } else {
              point2 = intersect(point0, point1);
              listener.point(point2[0], point2[1]);
              listener.lineEnd();
            }
            point0 = point2;
          } else if (notHemisphere && point0 && smallRadius ^ v) {
            var t;
            if (!(c & c0) && (t = intersect(point1, point0, true))) {
              clean = 0;
              if (smallRadius) {
                listener.lineStart();
                listener.point(t[0][0], t[0][1]);
                listener.point(t[1][0], t[1][1]);
                listener.lineEnd();
              } else {
                listener.point(t[1][0], t[1][1]);
                listener.lineEnd();
                listener.lineStart();
                listener.point(t[0][0], t[0][1]);
              }
            }
          }
          if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
            listener.point(point1[0], point1[1]);
          }
          point0 = point1, v0 = v, c0 = c;
        },
        lineEnd: function() {
          if (v0) listener.lineEnd();
          point0 = null;
        },
        clean: function() {
          return clean | (v00 && v0) << 1;
        }
      };
    }
    function intersect(a, b, two) {
      var pa = d3_geo_cartesian(a), pb = d3_geo_cartesian(b);
      var n1 = [ 1, 0, 0 ], n2 = d3_geo_cartesianCross(pa, pb), n2n2 = d3_geo_cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
      if (!determinant) return !two && a;
      var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = d3_geo_cartesianCross(n1, n2), A = d3_geo_cartesianScale(n1, c1), B = d3_geo_cartesianScale(n2, c2);
      d3_geo_cartesianAdd(A, B);
      var u = n1xn2, w = d3_geo_cartesianDot(A, u), uu = d3_geo_cartesianDot(u, u), t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);
      if (t2 < 0) return;
      var t = Math.sqrt(t2), q = d3_geo_cartesianScale(u, (-w - t) / uu);
      d3_geo_cartesianAdd(q, A);
      q = d3_geo_spherical(q);
      if (!two) return q;
      var λ0 = a[0], λ1 = b[0], φ0 = a[1], φ1 = b[1], z;
      if (λ1 < λ0) z = λ0, λ0 = λ1, λ1 = z;
      var δλ = λ1 - λ0, polar = abs(δλ - π) < ε, meridian = polar || δλ < ε;
      if (!polar && φ1 < φ0) z = φ0, φ0 = φ1, φ1 = z;
      if (meridian ? polar ? φ0 + φ1 > 0 ^ q[1] < (abs(q[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q[1] && q[1] <= φ1 : δλ > π ^ (λ0 <= q[0] && q[0] <= λ1)) {
        var q1 = d3_geo_cartesianScale(u, (-w + t) / uu);
        d3_geo_cartesianAdd(q1, A);
        return [ q, d3_geo_spherical(q1) ];
      }
    }
    function code(λ, φ) {
      var r = smallRadius ? radius : π - radius, code = 0;
      if (λ < -r) code |= 1; else if (λ > r) code |= 2;
      if (φ < -r) code |= 4; else if (φ > r) code |= 8;
      return code;
    }
  }
  function d3_geom_clipLine(x0, y0, x1, y1) {
    return function(line) {
      var a = line.a, b = line.b, ax = a.x, ay = a.y, bx = b.x, by = b.y, t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
      r = x0 - ax;
      if (!dx && r > 0) return;
      r /= dx;
      if (dx < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      } else if (dx > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      }
      r = x1 - ax;
      if (!dx && r < 0) return;
      r /= dx;
      if (dx < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      } else if (dx > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      }
      r = y0 - ay;
      if (!dy && r > 0) return;
      r /= dy;
      if (dy < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      } else if (dy > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      }
      r = y1 - ay;
      if (!dy && r < 0) return;
      r /= dy;
      if (dy < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      } else if (dy > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      }
      if (t0 > 0) line.a = {
        x: ax + t0 * dx,
        y: ay + t0 * dy
      };
      if (t1 < 1) line.b = {
        x: ax + t1 * dx,
        y: ay + t1 * dy
      };
      return line;
    };
  }
  var d3_geo_clipExtentMAX = 1e9;
  d3.geo.clipExtent = function() {
    var x0, y0, x1, y1, stream, clip, clipExtent = {
      stream: function(output) {
        if (stream) stream.valid = false;
        stream = clip(output);
        stream.valid = true;
        return stream;
      },
      extent: function(_) {
        if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
        clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);
        if (stream) stream.valid = false, stream = null;
        return clipExtent;
      }
    };
    return clipExtent.extent([ [ 0, 0 ], [ 960, 500 ] ]);
  };
  function d3_geo_clipExtent(x0, y0, x1, y1) {
    return function(listener) {
      var listener_ = listener, bufferListener = d3_geo_clipBufferListener(), clipLine = d3_geom_clipLine(x0, y0, x1, y1), segments, polygon, ring;
      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          listener = bufferListener;
          segments = [];
          polygon = [];
          clean = true;
        },
        polygonEnd: function() {
          listener = listener_;
          segments = d3.merge(segments);
          var clipStartInside = insidePolygon([ x0, y1 ]), inside = clean && clipStartInside, visible = segments.length;
          if (inside || visible) {
            listener.polygonStart();
            if (inside) {
              listener.lineStart();
              interpolate(null, null, 1, listener);
              listener.lineEnd();
            }
            if (visible) {
              d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener);
            }
            listener.polygonEnd();
          }
          segments = polygon = ring = null;
        }
      };
      function insidePolygon(p) {
        var wn = 0, n = polygon.length, y = p[1];
        for (var i = 0; i < n; ++i) {
          for (var j = 1, v = polygon[i], m = v.length, a = v[0], b; j < m; ++j) {
            b = v[j];
            if (a[1] <= y) {
              if (b[1] > y && d3_cross2d(a, b, p) > 0) ++wn;
            } else {
              if (b[1] <= y && d3_cross2d(a, b, p) < 0) --wn;
            }
            a = b;
          }
        }
        return wn !== 0;
      }
      function interpolate(from, to, direction, listener) {
        var a = 0, a1 = 0;
        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
          do {
            listener.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
          } while ((a = (a + direction + 4) % 4) !== a1);
        } else {
          listener.point(to[0], to[1]);
        }
      }
      function pointVisible(x, y) {
        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
      }
      function point(x, y) {
        if (pointVisible(x, y)) listener.point(x, y);
      }
      var x__, y__, v__, x_, y_, v_, first, clean;
      function lineStart() {
        clip.point = linePoint;
        if (polygon) polygon.push(ring = []);
        first = true;
        v_ = false;
        x_ = y_ = NaN;
      }
      function lineEnd() {
        if (segments) {
          linePoint(x__, y__);
          if (v__ && v_) bufferListener.rejoin();
          segments.push(bufferListener.buffer());
        }
        clip.point = point;
        if (v_) listener.lineEnd();
      }
      function linePoint(x, y) {
        x = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x));
        y = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y));
        var v = pointVisible(x, y);
        if (polygon) ring.push([ x, y ]);
        if (first) {
          x__ = x, y__ = y, v__ = v;
          first = false;
          if (v) {
            listener.lineStart();
            listener.point(x, y);
          }
        } else {
          if (v && v_) listener.point(x, y); else {
            var l = {
              a: {
                x: x_,
                y: y_
              },
              b: {
                x: x,
                y: y
              }
            };
            if (clipLine(l)) {
              if (!v_) {
                listener.lineStart();
                listener.point(l.a.x, l.a.y);
              }
              listener.point(l.b.x, l.b.y);
              if (!v) listener.lineEnd();
              clean = false;
            } else if (v) {
              listener.lineStart();
              listener.point(x, y);
              clean = false;
            }
          }
        }
        x_ = x, y_ = y, v_ = v;
      }
      return clip;
    };
    function corner(p, direction) {
      return abs(p[0] - x0) < ε ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < ε ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
    }
    function compare(a, b) {
      return comparePoints(a.x, b.x);
    }
    function comparePoints(a, b) {
      var ca = corner(a, 1), cb = corner(b, 1);
      return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
    }
  }
  function d3_geo_conic(projectAt) {
    var φ0 = 0, φ1 = π / 3, m = d3_geo_projectionMutator(projectAt), p = m(φ0, φ1);
    p.parallels = function(_) {
      if (!arguments.length) return [ φ0 / π * 180, φ1 / π * 180 ];
      return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);
    };
    return p;
  }
  function d3_geo_conicEqualArea(φ0, φ1) {
    var sinφ0 = Math.sin(φ0), n = (sinφ0 + Math.sin(φ1)) / 2, C = 1 + sinφ0 * (2 * n - sinφ0), ρ0 = Math.sqrt(C) / n;
    function forward(λ, φ) {
      var ρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
      return [ ρ * Math.sin(λ *= n), ρ0 - ρ * Math.cos(λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = ρ0 - y;
      return [ Math.atan2(x, ρ0_y) / n, d3_asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n)) ];
    };
    return forward;
  }
  (d3.geo.conicEqualArea = function() {
    return d3_geo_conic(d3_geo_conicEqualArea);
  }).raw = d3_geo_conicEqualArea;
  d3.geo.albers = function() {
    return d3.geo.conicEqualArea().rotate([ 96, 0 ]).center([ -.6, 38.7 ]).parallels([ 29.5, 45.5 ]).scale(1070);
  };
  d3.geo.albersUsa = function() {
    var lower48 = d3.geo.albers();
    var alaska = d3.geo.conicEqualArea().rotate([ 154, 0 ]).center([ -2, 58.5 ]).parallels([ 55, 65 ]);
    var hawaii = d3.geo.conicEqualArea().rotate([ 157, 0 ]).center([ -3, 19.9 ]).parallels([ 8, 18 ]);
    var point, pointStream = {
      point: function(x, y) {
        point = [ x, y ];
      }
    }, lower48Point, alaskaPoint, hawaiiPoint;
    function albersUsa(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      point = null;
      (lower48Point(x, y), point) || (alaskaPoint(x, y), point) || hawaiiPoint(x, y);
      return point;
    }
    albersUsa.invert = function(coordinates) {
      var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
      return (y >= .12 && y < .234 && x >= -.425 && x < -.214 ? alaska : y >= .166 && y < .234 && x >= -.214 && x < -.115 ? hawaii : lower48).invert(coordinates);
    };
    albersUsa.stream = function(stream) {
      var lower48Stream = lower48.stream(stream), alaskaStream = alaska.stream(stream), hawaiiStream = hawaii.stream(stream);
      return {
        point: function(x, y) {
          lower48Stream.point(x, y);
          alaskaStream.point(x, y);
          hawaiiStream.point(x, y);
        },
        sphere: function() {
          lower48Stream.sphere();
          alaskaStream.sphere();
          hawaiiStream.sphere();
        },
        lineStart: function() {
          lower48Stream.lineStart();
          alaskaStream.lineStart();
          hawaiiStream.lineStart();
        },
        lineEnd: function() {
          lower48Stream.lineEnd();
          alaskaStream.lineEnd();
          hawaiiStream.lineEnd();
        },
        polygonStart: function() {
          lower48Stream.polygonStart();
          alaskaStream.polygonStart();
          hawaiiStream.polygonStart();
        },
        polygonEnd: function() {
          lower48Stream.polygonEnd();
          alaskaStream.polygonEnd();
          hawaiiStream.polygonEnd();
        }
      };
    };
    albersUsa.precision = function(_) {
      if (!arguments.length) return lower48.precision();
      lower48.precision(_);
      alaska.precision(_);
      hawaii.precision(_);
      return albersUsa;
    };
    albersUsa.scale = function(_) {
      if (!arguments.length) return lower48.scale();
      lower48.scale(_);
      alaska.scale(_ * .35);
      hawaii.scale(_);
      return albersUsa.translate(lower48.translate());
    };
    albersUsa.translate = function(_) {
      if (!arguments.length) return lower48.translate();
      var k = lower48.scale(), x = +_[0], y = +_[1];
      lower48Point = lower48.translate(_).clipExtent([ [ x - .455 * k, y - .238 * k ], [ x + .455 * k, y + .238 * k ] ]).stream(pointStream).point;
      alaskaPoint = alaska.translate([ x - .307 * k, y + .201 * k ]).clipExtent([ [ x - .425 * k + ε, y + .12 * k + ε ], [ x - .214 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
      hawaiiPoint = hawaii.translate([ x - .205 * k, y + .212 * k ]).clipExtent([ [ x - .214 * k + ε, y + .166 * k + ε ], [ x - .115 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
      return albersUsa;
    };
    return albersUsa.scale(1070);
  };
  var d3_geo_pathAreaSum, d3_geo_pathAreaPolygon, d3_geo_pathArea = {
    point: d3_noop,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: function() {
      d3_geo_pathAreaPolygon = 0;
      d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
    },
    polygonEnd: function() {
      d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
      d3_geo_pathAreaSum += abs(d3_geo_pathAreaPolygon / 2);
    }
  };
  function d3_geo_pathAreaRingStart() {
    var x00, y00, x0, y0;
    d3_geo_pathArea.point = function(x, y) {
      d3_geo_pathArea.point = nextPoint;
      x00 = x0 = x, y00 = y0 = y;
    };
    function nextPoint(x, y) {
      d3_geo_pathAreaPolygon += y0 * x - x0 * y;
      x0 = x, y0 = y;
    }
    d3_geo_pathArea.lineEnd = function() {
      nextPoint(x00, y00);
    };
  }
  var d3_geo_pathBoundsX0, d3_geo_pathBoundsY0, d3_geo_pathBoundsX1, d3_geo_pathBoundsY1;
  var d3_geo_pathBounds = {
    point: d3_geo_pathBoundsPoint,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: d3_noop,
    polygonEnd: d3_noop
  };
  function d3_geo_pathBoundsPoint(x, y) {
    if (x < d3_geo_pathBoundsX0) d3_geo_pathBoundsX0 = x;
    if (x > d3_geo_pathBoundsX1) d3_geo_pathBoundsX1 = x;
    if (y < d3_geo_pathBoundsY0) d3_geo_pathBoundsY0 = y;
    if (y > d3_geo_pathBoundsY1) d3_geo_pathBoundsY1 = y;
  }
  function d3_geo_pathBuffer() {
    var pointCircle = d3_geo_pathBufferCircle(4.5), buffer = [];
    var stream = {
      point: point,
      lineStart: function() {
        stream.point = pointLineStart;
      },
      lineEnd: lineEnd,
      polygonStart: function() {
        stream.lineEnd = lineEndPolygon;
      },
      polygonEnd: function() {
        stream.lineEnd = lineEnd;
        stream.point = point;
      },
      pointRadius: function(_) {
        pointCircle = d3_geo_pathBufferCircle(_);
        return stream;
      },
      result: function() {
        if (buffer.length) {
          var result = buffer.join("");
          buffer = [];
          return result;
        }
      }
    };
    function point(x, y) {
      buffer.push("M", x, ",", y, pointCircle);
    }
    function pointLineStart(x, y) {
      buffer.push("M", x, ",", y);
      stream.point = pointLine;
    }
    function pointLine(x, y) {
      buffer.push("L", x, ",", y);
    }
    function lineEnd() {
      stream.point = point;
    }
    function lineEndPolygon() {
      buffer.push("Z");
    }
    return stream;
  }
  function d3_geo_pathBufferCircle(radius) {
    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
  }
  var d3_geo_pathCentroid = {
    point: d3_geo_pathCentroidPoint,
    lineStart: d3_geo_pathCentroidLineStart,
    lineEnd: d3_geo_pathCentroidLineEnd,
    polygonStart: function() {
      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
    },
    polygonEnd: function() {
      d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
      d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
    }
  };
  function d3_geo_pathCentroidPoint(x, y) {
    d3_geo_centroidX0 += x;
    d3_geo_centroidY0 += y;
    ++d3_geo_centroidZ0;
  }
  function d3_geo_pathCentroidLineStart() {
    var x0, y0;
    d3_geo_pathCentroid.point = function(x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    };
    function nextPoint(x, y) {
      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
      d3_geo_centroidX1 += z * (x0 + x) / 2;
      d3_geo_centroidY1 += z * (y0 + y) / 2;
      d3_geo_centroidZ1 += z;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    }
  }
  function d3_geo_pathCentroidLineEnd() {
    d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
  }
  function d3_geo_pathCentroidRingStart() {
    var x00, y00, x0, y0;
    d3_geo_pathCentroid.point = function(x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      d3_geo_pathCentroidPoint(x00 = x0 = x, y00 = y0 = y);
    };
    function nextPoint(x, y) {
      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
      d3_geo_centroidX1 += z * (x0 + x) / 2;
      d3_geo_centroidY1 += z * (y0 + y) / 2;
      d3_geo_centroidZ1 += z;
      z = y0 * x - x0 * y;
      d3_geo_centroidX2 += z * (x0 + x);
      d3_geo_centroidY2 += z * (y0 + y);
      d3_geo_centroidZ2 += z * 3;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    }
    d3_geo_pathCentroid.lineEnd = function() {
      nextPoint(x00, y00);
    };
  }
  function d3_geo_pathContext(context) {
    var pointRadius = 4.5;
    var stream = {
      point: point,
      lineStart: function() {
        stream.point = pointLineStart;
      },
      lineEnd: lineEnd,
      polygonStart: function() {
        stream.lineEnd = lineEndPolygon;
      },
      polygonEnd: function() {
        stream.lineEnd = lineEnd;
        stream.point = point;
      },
      pointRadius: function(_) {
        pointRadius = _;
        return stream;
      },
      result: d3_noop
    };
    function point(x, y) {
      context.moveTo(x + pointRadius, y);
      context.arc(x, y, pointRadius, 0, τ);
    }
    function pointLineStart(x, y) {
      context.moveTo(x, y);
      stream.point = pointLine;
    }
    function pointLine(x, y) {
      context.lineTo(x, y);
    }
    function lineEnd() {
      stream.point = point;
    }
    function lineEndPolygon() {
      context.closePath();
    }
    return stream;
  }
  function d3_geo_resample(project) {
    var δ2 = .5, cosMinDistance = Math.cos(30 * d3_radians), maxDepth = 16;
    function resample(stream) {
      return (maxDepth ? resampleRecursive : resampleNone)(stream);
    }
    function resampleNone(stream) {
      return d3_geo_transformPoint(stream, function(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      });
    }
    function resampleRecursive(stream) {
      var λ00, φ00, x00, y00, a00, b00, c00, λ0, x0, y0, a0, b0, c0;
      var resample = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          stream.polygonStart();
          resample.lineStart = ringStart;
        },
        polygonEnd: function() {
          stream.polygonEnd();
          resample.lineStart = lineStart;
        }
      };
      function point(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      }
      function lineStart() {
        x0 = NaN;
        resample.point = linePoint;
        stream.lineStart();
      }
      function linePoint(λ, φ) {
        var c = d3_geo_cartesian([ λ, φ ]), p = project(λ, φ);
        resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
        stream.point(x0, y0);
      }
      function lineEnd() {
        resample.point = point;
        stream.lineEnd();
      }
      function ringStart() {
        lineStart();
        resample.point = ringPoint;
        resample.lineEnd = ringEnd;
      }
      function ringPoint(λ, φ) {
        linePoint(λ00 = λ, φ00 = φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
        resample.point = linePoint;
      }
      function ringEnd() {
        resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
        resample.lineEnd = lineEnd;
        lineEnd();
      }
      return resample;
    }
    function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
      var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
      if (d2 > 4 * δ2 && depth--) {
        var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = Math.sqrt(a * a + b * b + c * c), φ2 = Math.asin(c /= m), λ2 = abs(abs(c) - 1) < ε || abs(λ0 - λ1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a), p = project(λ2, φ2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
        if (dz * dz / d2 > δ2 || abs((dx * dx2 + dy * dy2) / d2 - .5) > .3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
          resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
          stream.point(x2, y2);
          resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
        }
      }
    }
    resample.precision = function(_) {
      if (!arguments.length) return Math.sqrt(δ2);
      maxDepth = (δ2 = _ * _) > 0 && 16;
      return resample;
    };
    return resample;
  }
  d3.geo.path = function() {
    var pointRadius = 4.5, projection, context, projectStream, contextStream, cacheStream;
    function path(object) {
      if (object) {
        if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
        if (!cacheStream || !cacheStream.valid) cacheStream = projectStream(contextStream);
        d3.geo.stream(object, cacheStream);
      }
      return contextStream.result();
    }
    path.area = function(object) {
      d3_geo_pathAreaSum = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathArea));
      return d3_geo_pathAreaSum;
    };
    path.centroid = function(object) {
      d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
      return d3_geo_centroidZ2 ? [ d3_geo_centroidX2 / d3_geo_centroidZ2, d3_geo_centroidY2 / d3_geo_centroidZ2 ] : d3_geo_centroidZ1 ? [ d3_geo_centroidX1 / d3_geo_centroidZ1, d3_geo_centroidY1 / d3_geo_centroidZ1 ] : d3_geo_centroidZ0 ? [ d3_geo_centroidX0 / d3_geo_centroidZ0, d3_geo_centroidY0 / d3_geo_centroidZ0 ] : [ NaN, NaN ];
    };
    path.bounds = function(object) {
      d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
      d3.geo.stream(object, projectStream(d3_geo_pathBounds));
      return [ [ d3_geo_pathBoundsX0, d3_geo_pathBoundsY0 ], [ d3_geo_pathBoundsX1, d3_geo_pathBoundsY1 ] ];
    };
    path.projection = function(_) {
      if (!arguments.length) return projection;
      projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
      return reset();
    };
    path.context = function(_) {
      if (!arguments.length) return context;
      contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
      if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
      return reset();
    };
    path.pointRadius = function(_) {
      if (!arguments.length) return pointRadius;
      pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
      return path;
    };
    function reset() {
      cacheStream = null;
      return path;
    }
    return path.projection(d3.geo.albersUsa()).context(null);
  };
  function d3_geo_pathProjectStream(project) {
    var resample = d3_geo_resample(function(x, y) {
      return project([ x * d3_degrees, y * d3_degrees ]);
    });
    return function(stream) {
      return d3_geo_projectionRadians(resample(stream));
    };
  }
  d3.geo.transform = function(methods) {
    return {
      stream: function(stream) {
        var transform = new d3_geo_transform(stream);
        for (var k in methods) transform[k] = methods[k];
        return transform;
      }
    };
  };
  function d3_geo_transform(stream) {
    this.stream = stream;
  }
  d3_geo_transform.prototype = {
    point: function(x, y) {
      this.stream.point(x, y);
    },
    sphere: function() {
      this.stream.sphere();
    },
    lineStart: function() {
      this.stream.lineStart();
    },
    lineEnd: function() {
      this.stream.lineEnd();
    },
    polygonStart: function() {
      this.stream.polygonStart();
    },
    polygonEnd: function() {
      this.stream.polygonEnd();
    }
  };
  function d3_geo_transformPoint(stream, point) {
    return {
      point: point,
      sphere: function() {
        stream.sphere();
      },
      lineStart: function() {
        stream.lineStart();
      },
      lineEnd: function() {
        stream.lineEnd();
      },
      polygonStart: function() {
        stream.polygonStart();
      },
      polygonEnd: function() {
        stream.polygonEnd();
      }
    };
  }
  d3.geo.projection = d3_geo_projection;
  d3.geo.projectionMutator = d3_geo_projectionMutator;
  function d3_geo_projection(project) {
    return d3_geo_projectionMutator(function() {
      return project;
    })();
  }
  function d3_geo_projectionMutator(projectAt) {
    var project, rotate, projectRotate, projectResample = d3_geo_resample(function(x, y) {
      x = project(x, y);
      return [ x[0] * k + δx, δy - x[1] * k ];
    }), k = 150, x = 480, y = 250, λ = 0, φ = 0, δλ = 0, δφ = 0, δγ = 0, δx, δy, preclip = d3_geo_clipAntimeridian, postclip = d3_identity, clipAngle = null, clipExtent = null, stream;
    function projection(point) {
      point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
      return [ point[0] * k + δx, δy - point[1] * k ];
    }
    function invert(point) {
      point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
      return point && [ point[0] * d3_degrees, point[1] * d3_degrees ];
    }
    projection.stream = function(output) {
      if (stream) stream.valid = false;
      stream = d3_geo_projectionRadians(preclip(rotate, projectResample(postclip(output))));
      stream.valid = true;
      return stream;
    };
    projection.clipAngle = function(_) {
      if (!arguments.length) return clipAngle;
      preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
      return invalidate();
    };
    projection.clipExtent = function(_) {
      if (!arguments.length) return clipExtent;
      clipExtent = _;
      postclip = _ ? d3_geo_clipExtent(_[0][0], _[0][1], _[1][0], _[1][1]) : d3_identity;
      return invalidate();
    };
    projection.scale = function(_) {
      if (!arguments.length) return k;
      k = +_;
      return reset();
    };
    projection.translate = function(_) {
      if (!arguments.length) return [ x, y ];
      x = +_[0];
      y = +_[1];
      return reset();
    };
    projection.center = function(_) {
      if (!arguments.length) return [ λ * d3_degrees, φ * d3_degrees ];
      λ = _[0] % 360 * d3_radians;
      φ = _[1] % 360 * d3_radians;
      return reset();
    };
    projection.rotate = function(_) {
      if (!arguments.length) return [ δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees ];
      δλ = _[0] % 360 * d3_radians;
      δφ = _[1] % 360 * d3_radians;
      δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
      return reset();
    };
    d3.rebind(projection, projectResample, "precision");
    function reset() {
      projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
      var center = project(λ, φ);
      δx = x - center[0] * k;
      δy = y + center[1] * k;
      return invalidate();
    }
    function invalidate() {
      if (stream) stream.valid = false, stream = null;
      return projection;
    }
    return function() {
      project = projectAt.apply(this, arguments);
      projection.invert = project.invert && invert;
      return reset();
    };
  }
  function d3_geo_projectionRadians(stream) {
    return d3_geo_transformPoint(stream, function(x, y) {
      stream.point(x * d3_radians, y * d3_radians);
    });
  }
  function d3_geo_equirectangular(λ, φ) {
    return [ λ, φ ];
  }
  (d3.geo.equirectangular = function() {
    return d3_geo_projection(d3_geo_equirectangular);
  }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
  d3.geo.rotation = function(rotate) {
    rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);
    function forward(coordinates) {
      coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
    }
    forward.invert = function(coordinates) {
      coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
    };
    return forward;
  };
  function d3_geo_identityRotation(λ, φ) {
    return [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
  }
  d3_geo_identityRotation.invert = d3_geo_equirectangular;
  function d3_geo_rotation(δλ, δφ, δγ) {
    return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_identityRotation;
  }
  function d3_geo_forwardRotationλ(δλ) {
    return function(λ, φ) {
      return λ += δλ, [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
    };
  }
  function d3_geo_rotationλ(δλ) {
    var rotation = d3_geo_forwardRotationλ(δλ);
    rotation.invert = d3_geo_forwardRotationλ(-δλ);
    return rotation;
  }
  function d3_geo_rotationφγ(δφ, δγ) {
    var cosδφ = Math.cos(δφ), sinδφ = Math.sin(δφ), cosδγ = Math.cos(δγ), sinδγ = Math.sin(δγ);
    function rotation(λ, φ) {
      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδφ + x * sinδφ;
      return [ Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ), d3_asin(k * cosδγ + y * sinδγ) ];
    }
    rotation.invert = function(λ, φ) {
      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδγ - y * sinδγ;
      return [ Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ), d3_asin(k * cosδφ - x * sinδφ) ];
    };
    return rotation;
  }
  d3.geo.circle = function() {
    var origin = [ 0, 0 ], angle, precision = 6, interpolate;
    function circle() {
      var center = typeof origin === "function" ? origin.apply(this, arguments) : origin, rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert, ring = [];
      interpolate(null, null, 1, {
        point: function(x, y) {
          ring.push(x = rotate(x, y));
          x[0] *= d3_degrees, x[1] *= d3_degrees;
        }
      });
      return {
        type: "Polygon",
        coordinates: [ ring ]
      };
    }
    circle.origin = function(x) {
      if (!arguments.length) return origin;
      origin = x;
      return circle;
    };
    circle.angle = function(x) {
      if (!arguments.length) return angle;
      interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
      return circle;
    };
    circle.precision = function(_) {
      if (!arguments.length) return precision;
      interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
      return circle;
    };
    return circle.angle(90);
  };
  function d3_geo_circleInterpolate(radius, precision) {
    var cr = Math.cos(radius), sr = Math.sin(radius);
    return function(from, to, direction, listener) {
      var step = direction * precision;
      if (from != null) {
        from = d3_geo_circleAngle(cr, from);
        to = d3_geo_circleAngle(cr, to);
        if (direction > 0 ? from < to : from > to) from += direction * τ;
      } else {
        from = radius + direction * τ;
        to = radius - .5 * step;
      }
      for (var point, t = from; direction > 0 ? t > to : t < to; t -= step) {
        listener.point((point = d3_geo_spherical([ cr, -sr * Math.cos(t), -sr * Math.sin(t) ]))[0], point[1]);
      }
    };
  }
  function d3_geo_circleAngle(cr, point) {
    var a = d3_geo_cartesian(point);
    a[0] -= cr;
    d3_geo_cartesianNormalize(a);
    var angle = d3_acos(-a[1]);
    return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
  }
  d3.geo.distance = function(a, b) {
    var Δλ = (b[0] - a[0]) * d3_radians, φ0 = a[1] * d3_radians, φ1 = b[1] * d3_radians, sinΔλ = Math.sin(Δλ), cosΔλ = Math.cos(Δλ), sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), sinφ1 = Math.sin(φ1), cosφ1 = Math.cos(φ1), t;
    return Math.atan2(Math.sqrt((t = cosφ1 * sinΔλ) * t + (t = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ);
  };
  d3.geo.graticule = function() {
    var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
    function graticule() {
      return {
        type: "MultiLineString",
        coordinates: lines()
      };
    }
    function lines() {
      return d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
        return abs(x % DX) > ε;
      }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
        return abs(y % DY) > ε;
      }).map(y));
    }
    graticule.lines = function() {
      return lines().map(function(coordinates) {
        return {
          type: "LineString",
          coordinates: coordinates
        };
      });
    };
    graticule.outline = function() {
      return {
        type: "Polygon",
        coordinates: [ X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1)) ]
      };
    };
    graticule.extent = function(_) {
      if (!arguments.length) return graticule.minorExtent();
      return graticule.majorExtent(_).minorExtent(_);
    };
    graticule.majorExtent = function(_) {
      if (!arguments.length) return [ [ X0, Y0 ], [ X1, Y1 ] ];
      X0 = +_[0][0], X1 = +_[1][0];
      Y0 = +_[0][1], Y1 = +_[1][1];
      if (X0 > X1) _ = X0, X0 = X1, X1 = _;
      if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
      return graticule.precision(precision);
    };
    graticule.minorExtent = function(_) {
      if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
      x0 = +_[0][0], x1 = +_[1][0];
      y0 = +_[0][1], y1 = +_[1][1];
      if (x0 > x1) _ = x0, x0 = x1, x1 = _;
      if (y0 > y1) _ = y0, y0 = y1, y1 = _;
      return graticule.precision(precision);
    };
    graticule.step = function(_) {
      if (!arguments.length) return graticule.minorStep();
      return graticule.majorStep(_).minorStep(_);
    };
    graticule.majorStep = function(_) {
      if (!arguments.length) return [ DX, DY ];
      DX = +_[0], DY = +_[1];
      return graticule;
    };
    graticule.minorStep = function(_) {
      if (!arguments.length) return [ dx, dy ];
      dx = +_[0], dy = +_[1];
      return graticule;
    };
    graticule.precision = function(_) {
      if (!arguments.length) return precision;
      precision = +_;
      x = d3_geo_graticuleX(y0, y1, 90);
      y = d3_geo_graticuleY(x0, x1, precision);
      X = d3_geo_graticuleX(Y0, Y1, 90);
      Y = d3_geo_graticuleY(X0, X1, precision);
      return graticule;
    };
    return graticule.majorExtent([ [ -180, -90 + ε ], [ 180, 90 - ε ] ]).minorExtent([ [ -180, -80 - ε ], [ 180, 80 + ε ] ]);
  };
  function d3_geo_graticuleX(y0, y1, dy) {
    var y = d3.range(y0, y1 - ε, dy).concat(y1);
    return function(x) {
      return y.map(function(y) {
        return [ x, y ];
      });
    };
  }
  function d3_geo_graticuleY(x0, x1, dx) {
    var x = d3.range(x0, x1 - ε, dx).concat(x1);
    return function(y) {
      return x.map(function(x) {
        return [ x, y ];
      });
    };
  }
  function d3_source(d) {
    return d.source;
  }
  function d3_target(d) {
    return d.target;
  }
  d3.geo.greatArc = function() {
    var source = d3_source, source_, target = d3_target, target_;
    function greatArc() {
      return {
        type: "LineString",
        coordinates: [ source_ || source.apply(this, arguments), target_ || target.apply(this, arguments) ]
      };
    }
    greatArc.distance = function() {
      return d3.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments));
    };
    greatArc.source = function(_) {
      if (!arguments.length) return source;
      source = _, source_ = typeof _ === "function" ? null : _;
      return greatArc;
    };
    greatArc.target = function(_) {
      if (!arguments.length) return target;
      target = _, target_ = typeof _ === "function" ? null : _;
      return greatArc;
    };
    greatArc.precision = function() {
      return arguments.length ? greatArc : 0;
    };
    return greatArc;
  };
  d3.geo.interpolate = function(source, target) {
    return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
  };
  function d3_geo_interpolate(x0, y0, x1, y1) {
    var cy0 = Math.cos(y0), sy0 = Math.sin(y0), cy1 = Math.cos(y1), sy1 = Math.sin(y1), kx0 = cy0 * Math.cos(x0), ky0 = cy0 * Math.sin(x0), kx1 = cy1 * Math.cos(x1), ky1 = cy1 * Math.sin(x1), d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))), k = 1 / Math.sin(d);
    var interpolate = d ? function(t) {
      var B = Math.sin(t *= d) * k, A = Math.sin(d - t) * k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
      return [ Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees ];
    } : function() {
      return [ x0 * d3_degrees, y0 * d3_degrees ];
    };
    interpolate.distance = d;
    return interpolate;
  }
  d3.geo.length = function(object) {
    d3_geo_lengthSum = 0;
    d3.geo.stream(object, d3_geo_length);
    return d3_geo_lengthSum;
  };
  var d3_geo_lengthSum;
  var d3_geo_length = {
    sphere: d3_noop,
    point: d3_noop,
    lineStart: d3_geo_lengthLineStart,
    lineEnd: d3_noop,
    polygonStart: d3_noop,
    polygonEnd: d3_noop
  };
  function d3_geo_lengthLineStart() {
    var λ0, sinφ0, cosφ0;
    d3_geo_length.point = function(λ, φ) {
      λ0 = λ * d3_radians, sinφ0 = Math.sin(φ *= d3_radians), cosφ0 = Math.cos(φ);
      d3_geo_length.point = nextPoint;
    };
    d3_geo_length.lineEnd = function() {
      d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
    };
    function nextPoint(λ, φ) {
      var sinφ = Math.sin(φ *= d3_radians), cosφ = Math.cos(φ), t = abs((λ *= d3_radians) - λ0), cosΔλ = Math.cos(t);
      d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cosφ * Math.sin(t)) * t + (t = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);
      λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ;
    }
  }
  function d3_geo_azimuthal(scale, angle) {
    function azimuthal(λ, φ) {
      var cosλ = Math.cos(λ), cosφ = Math.cos(φ), k = scale(cosλ * cosφ);
      return [ k * cosφ * Math.sin(λ), k * Math.sin(φ) ];
    }
    azimuthal.invert = function(x, y) {
      var ρ = Math.sqrt(x * x + y * y), c = angle(ρ), sinc = Math.sin(c), cosc = Math.cos(c);
      return [ Math.atan2(x * sinc, ρ * cosc), Math.asin(ρ && y * sinc / ρ) ];
    };
    return azimuthal;
  }
  var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cosλcosφ) {
    return Math.sqrt(2 / (1 + cosλcosφ));
  }, function(ρ) {
    return 2 * Math.asin(ρ / 2);
  });
  (d3.geo.azimuthalEqualArea = function() {
    return d3_geo_projection(d3_geo_azimuthalEqualArea);
  }).raw = d3_geo_azimuthalEqualArea;
  var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cosλcosφ) {
    var c = Math.acos(cosλcosφ);
    return c && c / Math.sin(c);
  }, d3_identity);
  (d3.geo.azimuthalEquidistant = function() {
    return d3_geo_projection(d3_geo_azimuthalEquidistant);
  }).raw = d3_geo_azimuthalEquidistant;
  function d3_geo_conicConformal(φ0, φ1) {
    var cosφ0 = Math.cos(φ0), t = function(φ) {
      return Math.tan(π / 4 + φ / 2);
    }, n = φ0 === φ1 ? Math.sin(φ0) : Math.log(cosφ0 / Math.cos(φ1)) / Math.log(t(φ1) / t(φ0)), F = cosφ0 * Math.pow(t(φ0), n) / n;
    if (!n) return d3_geo_mercator;
    function forward(λ, φ) {
      if (F > 0) {
        if (φ < -halfπ + ε) φ = -halfπ + ε;
      } else {
        if (φ > halfπ - ε) φ = halfπ - ε;
      }
      var ρ = F / Math.pow(t(φ), n);
      return [ ρ * Math.sin(n * λ), F - ρ * Math.cos(n * λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = F - y, ρ = d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y);
      return [ Math.atan2(x, ρ0_y) / n, 2 * Math.atan(Math.pow(F / ρ, 1 / n)) - halfπ ];
    };
    return forward;
  }
  (d3.geo.conicConformal = function() {
    return d3_geo_conic(d3_geo_conicConformal);
  }).raw = d3_geo_conicConformal;
  function d3_geo_conicEquidistant(φ0, φ1) {
    var cosφ0 = Math.cos(φ0), n = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0), G = cosφ0 / n + φ0;
    if (abs(n) < ε) return d3_geo_equirectangular;
    function forward(λ, φ) {
      var ρ = G - φ;
      return [ ρ * Math.sin(n * λ), G - ρ * Math.cos(n * λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = G - y;
      return [ Math.atan2(x, ρ0_y) / n, G - d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y) ];
    };
    return forward;
  }
  (d3.geo.conicEquidistant = function() {
    return d3_geo_conic(d3_geo_conicEquidistant);
  }).raw = d3_geo_conicEquidistant;
  var d3_geo_gnomonic = d3_geo_azimuthal(function(cosλcosφ) {
    return 1 / cosλcosφ;
  }, Math.atan);
  (d3.geo.gnomonic = function() {
    return d3_geo_projection(d3_geo_gnomonic);
  }).raw = d3_geo_gnomonic;
  function d3_geo_mercator(λ, φ) {
    return [ λ, Math.log(Math.tan(π / 4 + φ / 2)) ];
  }
  d3_geo_mercator.invert = function(x, y) {
    return [ x, 2 * Math.atan(Math.exp(y)) - halfπ ];
  };
  function d3_geo_mercatorProjection(project) {
    var m = d3_geo_projection(project), scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, clipAuto;
    m.scale = function() {
      var v = scale.apply(m, arguments);
      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
    };
    m.translate = function() {
      var v = translate.apply(m, arguments);
      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
    };
    m.clipExtent = function(_) {
      var v = clipExtent.apply(m, arguments);
      if (v === m) {
        if (clipAuto = _ == null) {
          var k = π * scale(), t = translate();
          clipExtent([ [ t[0] - k, t[1] - k ], [ t[0] + k, t[1] + k ] ]);
        }
      } else if (clipAuto) {
        v = null;
      }
      return v;
    };
    return m.clipExtent(null);
  }
  (d3.geo.mercator = function() {
    return d3_geo_mercatorProjection(d3_geo_mercator);
  }).raw = d3_geo_mercator;
  var d3_geo_orthographic = d3_geo_azimuthal(function() {
    return 1;
  }, Math.asin);
  (d3.geo.orthographic = function() {
    return d3_geo_projection(d3_geo_orthographic);
  }).raw = d3_geo_orthographic;
  var d3_geo_stereographic = d3_geo_azimuthal(function(cosλcosφ) {
    return 1 / (1 + cosλcosφ);
  }, function(ρ) {
    return 2 * Math.atan(ρ);
  });
  (d3.geo.stereographic = function() {
    return d3_geo_projection(d3_geo_stereographic);
  }).raw = d3_geo_stereographic;
  function d3_geo_transverseMercator(λ, φ) {
    return [ Math.log(Math.tan(π / 4 + φ / 2)), -λ ];
  }
  d3_geo_transverseMercator.invert = function(x, y) {
    return [ -y, 2 * Math.atan(Math.exp(x)) - halfπ ];
  };
  (d3.geo.transverseMercator = function() {
    var projection = d3_geo_mercatorProjection(d3_geo_transverseMercator), center = projection.center, rotate = projection.rotate;
    projection.center = function(_) {
      return _ ? center([ -_[1], _[0] ]) : (_ = center(), [ _[1], -_[0] ]);
    };
    projection.rotate = function(_) {
      return _ ? rotate([ _[0], _[1], _.length > 2 ? _[2] + 90 : 90 ]) : (_ = rotate(), 
      [ _[0], _[1], _[2] - 90 ]);
    };
    return rotate([ 0, 0, 90 ]);
  }).raw = d3_geo_transverseMercator;
  d3.geom = {};
  function d3_geom_pointX(d) {
    return d[0];
  }
  function d3_geom_pointY(d) {
    return d[1];
  }
  d3.geom.hull = function(vertices) {
    var x = d3_geom_pointX, y = d3_geom_pointY;
    if (arguments.length) return hull(vertices);
    function hull(data) {
      if (data.length < 3) return [];
      var fx = d3_functor(x), fy = d3_functor(y), i, n = data.length, points = [], flippedPoints = [];
      for (i = 0; i < n; i++) {
        points.push([ +fx.call(this, data[i], i), +fy.call(this, data[i], i), i ]);
      }
      points.sort(d3_geom_hullOrder);
      for (i = 0; i < n; i++) flippedPoints.push([ points[i][0], -points[i][1] ]);
      var upper = d3_geom_hullUpper(points), lower = d3_geom_hullUpper(flippedPoints);
      var skipLeft = lower[0] === upper[0], skipRight = lower[lower.length - 1] === upper[upper.length - 1], polygon = [];
      for (i = upper.length - 1; i >= 0; --i) polygon.push(data[points[upper[i]][2]]);
      for (i = +skipLeft; i < lower.length - skipRight; ++i) polygon.push(data[points[lower[i]][2]]);
      return polygon;
    }
    hull.x = function(_) {
      return arguments.length ? (x = _, hull) : x;
    };
    hull.y = function(_) {
      return arguments.length ? (y = _, hull) : y;
    };
    return hull;
  };
  function d3_geom_hullUpper(points) {
    var n = points.length, hull = [ 0, 1 ], hs = 2;
    for (var i = 2; i < n; i++) {
      while (hs > 1 && d3_cross2d(points[hull[hs - 2]], points[hull[hs - 1]], points[i]) <= 0) --hs;
      hull[hs++] = i;
    }
    return hull.slice(0, hs);
  }
  function d3_geom_hullOrder(a, b) {
    return a[0] - b[0] || a[1] - b[1];
  }
  d3.geom.polygon = function(coordinates) {
    d3_subclass(coordinates, d3_geom_polygonPrototype);
    return coordinates;
  };
  var d3_geom_polygonPrototype = d3.geom.polygon.prototype = [];
  d3_geom_polygonPrototype.area = function() {
    var i = -1, n = this.length, a, b = this[n - 1], area = 0;
    while (++i < n) {
      a = b;
      b = this[i];
      area += a[1] * b[0] - a[0] * b[1];
    }
    return area * .5;
  };
  d3_geom_polygonPrototype.centroid = function(k) {
    var i = -1, n = this.length, x = 0, y = 0, a, b = this[n - 1], c;
    if (!arguments.length) k = -1 / (6 * this.area());
    while (++i < n) {
      a = b;
      b = this[i];
      c = a[0] * b[1] - b[0] * a[1];
      x += (a[0] + b[0]) * c;
      y += (a[1] + b[1]) * c;
    }
    return [ x * k, y * k ];
  };
  d3_geom_polygonPrototype.clip = function(subject) {
    var input, closed = d3_geom_polygonClosed(subject), i = -1, n = this.length - d3_geom_polygonClosed(this), j, m, a = this[n - 1], b, c, d;
    while (++i < n) {
      input = subject.slice();
      subject.length = 0;
      b = this[i];
      c = input[(m = input.length - closed) - 1];
      j = -1;
      while (++j < m) {
        d = input[j];
        if (d3_geom_polygonInside(d, a, b)) {
          if (!d3_geom_polygonInside(c, a, b)) {
            subject.push(d3_geom_polygonIntersect(c, d, a, b));
          }
          subject.push(d);
        } else if (d3_geom_polygonInside(c, a, b)) {
          subject.push(d3_geom_polygonIntersect(c, d, a, b));
        }
        c = d;
      }
      if (closed) subject.push(subject[0]);
      a = b;
    }
    return subject;
  };
  function d3_geom_polygonInside(p, a, b) {
    return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
  }
  function d3_geom_polygonIntersect(c, d, a, b) {
    var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3, y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3, ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
    return [ x1 + ua * x21, y1 + ua * y21 ];
  }
  function d3_geom_polygonClosed(coordinates) {
    var a = coordinates[0], b = coordinates[coordinates.length - 1];
    return !(a[0] - b[0] || a[1] - b[1]);
  }
  var d3_geom_voronoiEdges, d3_geom_voronoiCells, d3_geom_voronoiBeaches, d3_geom_voronoiBeachPool = [], d3_geom_voronoiFirstCircle, d3_geom_voronoiCircles, d3_geom_voronoiCirclePool = [];
  function d3_geom_voronoiBeach() {
    d3_geom_voronoiRedBlackNode(this);
    this.edge = this.site = this.circle = null;
  }
  function d3_geom_voronoiCreateBeach(site) {
    var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach();
    beach.site = site;
    return beach;
  }
  function d3_geom_voronoiDetachBeach(beach) {
    d3_geom_voronoiDetachCircle(beach);
    d3_geom_voronoiBeaches.remove(beach);
    d3_geom_voronoiBeachPool.push(beach);
    d3_geom_voronoiRedBlackNode(beach);
  }
  function d3_geom_voronoiRemoveBeach(beach) {
    var circle = beach.circle, x = circle.x, y = circle.cy, vertex = {
      x: x,
      y: y
    }, previous = beach.P, next = beach.N, disappearing = [ beach ];
    d3_geom_voronoiDetachBeach(beach);
    var lArc = previous;
    while (lArc.circle && abs(x - lArc.circle.x) < ε && abs(y - lArc.circle.cy) < ε) {
      previous = lArc.P;
      disappearing.unshift(lArc);
      d3_geom_voronoiDetachBeach(lArc);
      lArc = previous;
    }
    disappearing.unshift(lArc);
    d3_geom_voronoiDetachCircle(lArc);
    var rArc = next;
    while (rArc.circle && abs(x - rArc.circle.x) < ε && abs(y - rArc.circle.cy) < ε) {
      next = rArc.N;
      disappearing.push(rArc);
      d3_geom_voronoiDetachBeach(rArc);
      rArc = next;
    }
    disappearing.push(rArc);
    d3_geom_voronoiDetachCircle(rArc);
    var nArcs = disappearing.length, iArc;
    for (iArc = 1; iArc < nArcs; ++iArc) {
      rArc = disappearing[iArc];
      lArc = disappearing[iArc - 1];
      d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
    }
    lArc = disappearing[0];
    rArc = disappearing[nArcs - 1];
    rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);
    d3_geom_voronoiAttachCircle(lArc);
    d3_geom_voronoiAttachCircle(rArc);
  }
  function d3_geom_voronoiAddBeach(site) {
    var x = site.x, directrix = site.y, lArc, rArc, dxl, dxr, node = d3_geom_voronoiBeaches._;
    while (node) {
      dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x;
      if (dxl > ε) node = node.L; else {
        dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix);
        if (dxr > ε) {
          if (!node.R) {
            lArc = node;
            break;
          }
          node = node.R;
        } else {
          if (dxl > -ε) {
            lArc = node.P;
            rArc = node;
          } else if (dxr > -ε) {
            lArc = node;
            rArc = node.N;
          } else {
            lArc = rArc = node;
          }
          break;
        }
      }
    }
    var newArc = d3_geom_voronoiCreateBeach(site);
    d3_geom_voronoiBeaches.insert(lArc, newArc);
    if (!lArc && !rArc) return;
    if (lArc === rArc) {
      d3_geom_voronoiDetachCircle(lArc);
      rArc = d3_geom_voronoiCreateBeach(lArc.site);
      d3_geom_voronoiBeaches.insert(newArc, rArc);
      newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
      d3_geom_voronoiAttachCircle(lArc);
      d3_geom_voronoiAttachCircle(rArc);
      return;
    }
    if (!rArc) {
      newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
      return;
    }
    d3_geom_voronoiDetachCircle(lArc);
    d3_geom_voronoiDetachCircle(rArc);
    var lSite = lArc.site, ax = lSite.x, ay = lSite.y, bx = site.x - ax, by = site.y - ay, rSite = rArc.site, cx = rSite.x - ax, cy = rSite.y - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = {
      x: (cy * hb - by * hc) / d + ax,
      y: (bx * hc - cx * hb) / d + ay
    };
    d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
    newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
    rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
    d3_geom_voronoiAttachCircle(lArc);
    d3_geom_voronoiAttachCircle(rArc);
  }
  function d3_geom_voronoiLeftBreakPoint(arc, directrix) {
    var site = arc.site, rfocx = site.x, rfocy = site.y, pby2 = rfocy - directrix;
    if (!pby2) return rfocx;
    var lArc = arc.P;
    if (!lArc) return -Infinity;
    site = lArc.site;
    var lfocx = site.x, lfocy = site.y, plby2 = lfocy - directrix;
    if (!plby2) return lfocx;
    var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;
    if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
    return (rfocx + lfocx) / 2;
  }
  function d3_geom_voronoiRightBreakPoint(arc, directrix) {
    var rArc = arc.N;
    if (rArc) return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
    var site = arc.site;
    return site.y === directrix ? site.x : Infinity;
  }
  function d3_geom_voronoiCell(site) {
    this.site = site;
    this.edges = [];
  }
  d3_geom_voronoiCell.prototype.prepare = function() {
    var halfEdges = this.edges, iHalfEdge = halfEdges.length, edge;
    while (iHalfEdge--) {
      edge = halfEdges[iHalfEdge].edge;
      if (!edge.b || !edge.a) halfEdges.splice(iHalfEdge, 1);
    }
    halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);
    return halfEdges.length;
  };
  function d3_geom_voronoiCloseCells(extent) {
    var x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], x2, y2, x3, y3, cells = d3_geom_voronoiCells, iCell = cells.length, cell, iHalfEdge, halfEdges, nHalfEdges, start, end;
    while (iCell--) {
      cell = cells[iCell];
      if (!cell || !cell.prepare()) continue;
      halfEdges = cell.edges;
      nHalfEdges = halfEdges.length;
      iHalfEdge = 0;
      while (iHalfEdge < nHalfEdges) {
        end = halfEdges[iHalfEdge].end(), x3 = end.x, y3 = end.y;
        start = halfEdges[++iHalfEdge % nHalfEdges].start(), x2 = start.x, y2 = start.y;
        if (abs(x3 - x2) > ε || abs(y3 - y2) > ε) {
          halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs(x3 - x0) < ε && y1 - y3 > ε ? {
            x: x0,
            y: abs(x2 - x0) < ε ? y2 : y1
          } : abs(y3 - y1) < ε && x1 - x3 > ε ? {
            x: abs(y2 - y1) < ε ? x2 : x1,
            y: y1
          } : abs(x3 - x1) < ε && y3 - y0 > ε ? {
            x: x1,
            y: abs(x2 - x1) < ε ? y2 : y0
          } : abs(y3 - y0) < ε && x3 - x0 > ε ? {
            x: abs(y2 - y0) < ε ? x2 : x0,
            y: y0
          } : null), cell.site, null));
          ++nHalfEdges;
        }
      }
    }
  }
  function d3_geom_voronoiHalfEdgeOrder(a, b) {
    return b.angle - a.angle;
  }
  function d3_geom_voronoiCircle() {
    d3_geom_voronoiRedBlackNode(this);
    this.x = this.y = this.arc = this.site = this.cy = null;
  }
  function d3_geom_voronoiAttachCircle(arc) {
    var lArc = arc.P, rArc = arc.N;
    if (!lArc || !rArc) return;
    var lSite = lArc.site, cSite = arc.site, rSite = rArc.site;
    if (lSite === rSite) return;
    var bx = cSite.x, by = cSite.y, ax = lSite.x - bx, ay = lSite.y - by, cx = rSite.x - bx, cy = rSite.y - by;
    var d = 2 * (ax * cy - ay * cx);
    if (d >= -ε2) return;
    var ha = ax * ax + ay * ay, hc = cx * cx + cy * cy, x = (cy * ha - ay * hc) / d, y = (ax * hc - cx * ha) / d, cy = y + by;
    var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle();
    circle.arc = arc;
    circle.site = cSite;
    circle.x = x + bx;
    circle.y = cy + Math.sqrt(x * x + y * y);
    circle.cy = cy;
    arc.circle = circle;
    var before = null, node = d3_geom_voronoiCircles._;
    while (node) {
      if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
        if (node.L) node = node.L; else {
          before = node.P;
          break;
        }
      } else {
        if (node.R) node = node.R; else {
          before = node;
          break;
        }
      }
    }
    d3_geom_voronoiCircles.insert(before, circle);
    if (!before) d3_geom_voronoiFirstCircle = circle;
  }
  function d3_geom_voronoiDetachCircle(arc) {
    var circle = arc.circle;
    if (circle) {
      if (!circle.P) d3_geom_voronoiFirstCircle = circle.N;
      d3_geom_voronoiCircles.remove(circle);
      d3_geom_voronoiCirclePool.push(circle);
      d3_geom_voronoiRedBlackNode(circle);
      arc.circle = null;
    }
  }
  function d3_geom_voronoiClipEdges(extent) {
    var edges = d3_geom_voronoiEdges, clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]), i = edges.length, e;
    while (i--) {
      e = edges[i];
      if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs(e.a.x - e.b.x) < ε && abs(e.a.y - e.b.y) < ε) {
        e.a = e.b = null;
        edges.splice(i, 1);
      }
    }
  }
  function d3_geom_voronoiConnectEdge(edge, extent) {
    var vb = edge.b;
    if (vb) return true;
    var va = edge.a, x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], lSite = edge.l, rSite = edge.r, lx = lSite.x, ly = lSite.y, rx = rSite.x, ry = rSite.y, fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb;
    if (ry === ly) {
      if (fx < x0 || fx >= x1) return;
      if (lx > rx) {
        if (!va) va = {
          x: fx,
          y: y0
        }; else if (va.y >= y1) return;
        vb = {
          x: fx,
          y: y1
        };
      } else {
        if (!va) va = {
          x: fx,
          y: y1
        }; else if (va.y < y0) return;
        vb = {
          x: fx,
          y: y0
        };
      }
    } else {
      fm = (lx - rx) / (ry - ly);
      fb = fy - fm * fx;
      if (fm < -1 || fm > 1) {
        if (lx > rx) {
          if (!va) va = {
            x: (y0 - fb) / fm,
            y: y0
          }; else if (va.y >= y1) return;
          vb = {
            x: (y1 - fb) / fm,
            y: y1
          };
        } else {
          if (!va) va = {
            x: (y1 - fb) / fm,
            y: y1
          }; else if (va.y < y0) return;
          vb = {
            x: (y0 - fb) / fm,
            y: y0
          };
        }
      } else {
        if (ly < ry) {
          if (!va) va = {
            x: x0,
            y: fm * x0 + fb
          }; else if (va.x >= x1) return;
          vb = {
            x: x1,
            y: fm * x1 + fb
          };
        } else {
          if (!va) va = {
            x: x1,
            y: fm * x1 + fb
          }; else if (va.x < x0) return;
          vb = {
            x: x0,
            y: fm * x0 + fb
          };
        }
      }
    }
    edge.a = va;
    edge.b = vb;
    return true;
  }
  function d3_geom_voronoiEdge(lSite, rSite) {
    this.l = lSite;
    this.r = rSite;
    this.a = this.b = null;
  }
  function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
    var edge = new d3_geom_voronoiEdge(lSite, rSite);
    d3_geom_voronoiEdges.push(edge);
    if (va) d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va);
    if (vb) d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb);
    d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
    d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
    return edge;
  }
  function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
    var edge = new d3_geom_voronoiEdge(lSite, null);
    edge.a = va;
    edge.b = vb;
    d3_geom_voronoiEdges.push(edge);
    return edge;
  }
  function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
    if (!edge.a && !edge.b) {
      edge.a = vertex;
      edge.l = lSite;
      edge.r = rSite;
    } else if (edge.l === rSite) {
      edge.b = vertex;
    } else {
      edge.a = vertex;
    }
  }
  function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
    var va = edge.a, vb = edge.b;
    this.edge = edge;
    this.site = lSite;
    this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y) : Math.atan2(va.x - vb.x, vb.y - va.y);
  }
  d3_geom_voronoiHalfEdge.prototype = {
    start: function() {
      return this.edge.l === this.site ? this.edge.a : this.edge.b;
    },
    end: function() {
      return this.edge.l === this.site ? this.edge.b : this.edge.a;
    }
  };
  function d3_geom_voronoiRedBlackTree() {
    this._ = null;
  }
  function d3_geom_voronoiRedBlackNode(node) {
    node.U = node.C = node.L = node.R = node.P = node.N = null;
  }
  d3_geom_voronoiRedBlackTree.prototype = {
    insert: function(after, node) {
      var parent, grandpa, uncle;
      if (after) {
        node.P = after;
        node.N = after.N;
        if (after.N) after.N.P = node;
        after.N = node;
        if (after.R) {
          after = after.R;
          while (after.L) after = after.L;
          after.L = node;
        } else {
          after.R = node;
        }
        parent = after;
      } else if (this._) {
        after = d3_geom_voronoiRedBlackFirst(this._);
        node.P = null;
        node.N = after;
        after.P = after.L = node;
        parent = after;
      } else {
        node.P = node.N = null;
        this._ = node;
        parent = null;
      }
      node.L = node.R = null;
      node.U = parent;
      node.C = true;
      after = node;
      while (parent && parent.C) {
        grandpa = parent.U;
        if (parent === grandpa.L) {
          uncle = grandpa.R;
          if (uncle && uncle.C) {
            parent.C = uncle.C = false;
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.R) {
              d3_geom_voronoiRedBlackRotateLeft(this, parent);
              after = parent;
              parent = after.U;
            }
            parent.C = false;
            grandpa.C = true;
            d3_geom_voronoiRedBlackRotateRight(this, grandpa);
          }
        } else {
          uncle = grandpa.L;
          if (uncle && uncle.C) {
            parent.C = uncle.C = false;
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.L) {
              d3_geom_voronoiRedBlackRotateRight(this, parent);
              after = parent;
              parent = after.U;
            }
            parent.C = false;
            grandpa.C = true;
            d3_geom_voronoiRedBlackRotateLeft(this, grandpa);
          }
        }
        parent = after.U;
      }
      this._.C = false;
    },
    remove: function(node) {
      if (node.N) node.N.P = node.P;
      if (node.P) node.P.N = node.N;
      node.N = node.P = null;
      var parent = node.U, sibling, left = node.L, right = node.R, next, red;
      if (!left) next = right; else if (!right) next = left; else next = d3_geom_voronoiRedBlackFirst(right);
      if (parent) {
        if (parent.L === node) parent.L = next; else parent.R = next;
      } else {
        this._ = next;
      }
      if (left && right) {
        red = next.C;
        next.C = node.C;
        next.L = left;
        left.U = next;
        if (next !== right) {
          parent = next.U;
          next.U = node.U;
          node = next.R;
          parent.L = node;
          next.R = right;
          right.U = next;
        } else {
          next.U = parent;
          parent = next;
          node = next.R;
        }
      } else {
        red = node.C;
        node = next;
      }
      if (node) node.U = parent;
      if (red) return;
      if (node && node.C) {
        node.C = false;
        return;
      }
      do {
        if (node === this._) break;
        if (node === parent.L) {
          sibling = parent.R;
          if (sibling.C) {
            sibling.C = false;
            parent.C = true;
            d3_geom_voronoiRedBlackRotateLeft(this, parent);
            sibling = parent.R;
          }
          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
            if (!sibling.R || !sibling.R.C) {
              sibling.L.C = false;
              sibling.C = true;
              d3_geom_voronoiRedBlackRotateRight(this, sibling);
              sibling = parent.R;
            }
            sibling.C = parent.C;
            parent.C = sibling.R.C = false;
            d3_geom_voronoiRedBlackRotateLeft(this, parent);
            node = this._;
            break;
          }
        } else {
          sibling = parent.L;
          if (sibling.C) {
            sibling.C = false;
            parent.C = true;
            d3_geom_voronoiRedBlackRotateRight(this, parent);
            sibling = parent.L;
          }
          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
            if (!sibling.L || !sibling.L.C) {
              sibling.R.C = false;
              sibling.C = true;
              d3_geom_voronoiRedBlackRotateLeft(this, sibling);
              sibling = parent.L;
            }
            sibling.C = parent.C;
            parent.C = sibling.L.C = false;
            d3_geom_voronoiRedBlackRotateRight(this, parent);
            node = this._;
            break;
          }
        }
        sibling.C = true;
        node = parent;
        parent = parent.U;
      } while (!node.C);
      if (node) node.C = false;
    }
  };
  function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
    var p = node, q = node.R, parent = p.U;
    if (parent) {
      if (parent.L === p) parent.L = q; else parent.R = q;
    } else {
      tree._ = q;
    }
    q.U = parent;
    p.U = q;
    p.R = q.L;
    if (p.R) p.R.U = p;
    q.L = p;
  }
  function d3_geom_voronoiRedBlackRotateRight(tree, node) {
    var p = node, q = node.L, parent = p.U;
    if (parent) {
      if (parent.L === p) parent.L = q; else parent.R = q;
    } else {
      tree._ = q;
    }
    q.U = parent;
    p.U = q;
    p.L = q.R;
    if (p.L) p.L.U = p;
    q.R = p;
  }
  function d3_geom_voronoiRedBlackFirst(node) {
    while (node.L) node = node.L;
    return node;
  }
  function d3_geom_voronoi(sites, bbox) {
    var site = sites.sort(d3_geom_voronoiVertexOrder).pop(), x0, y0, circle;
    d3_geom_voronoiEdges = [];
    d3_geom_voronoiCells = new Array(sites.length);
    d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree();
    d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree();
    while (true) {
      circle = d3_geom_voronoiFirstCircle;
      if (site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {
        if (site.x !== x0 || site.y !== y0) {
          d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
          d3_geom_voronoiAddBeach(site);
          x0 = site.x, y0 = site.y;
        }
        site = sites.pop();
      } else if (circle) {
        d3_geom_voronoiRemoveBeach(circle.arc);
      } else {
        break;
      }
    }
    if (bbox) d3_geom_voronoiClipEdges(bbox), d3_geom_voronoiCloseCells(bbox);
    var diagram = {
      cells: d3_geom_voronoiCells,
      edges: d3_geom_voronoiEdges
    };
    d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null;
    return diagram;
  }
  function d3_geom_voronoiVertexOrder(a, b) {
    return b.y - a.y || b.x - a.x;
  }
  d3.geom.voronoi = function(points) {
    var x = d3_geom_pointX, y = d3_geom_pointY, fx = x, fy = y, clipExtent = d3_geom_voronoiClipExtent;
    if (points) return voronoi(points);
    function voronoi(data) {
      var polygons = new Array(data.length), x0 = clipExtent[0][0], y0 = clipExtent[0][1], x1 = clipExtent[1][0], y1 = clipExtent[1][1];
      d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function(cell, i) {
        var edges = cell.edges, site = cell.site, polygon = polygons[i] = edges.length ? edges.map(function(e) {
          var s = e.start();
          return [ s.x, s.y ];
        }) : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [ [ x0, y1 ], [ x1, y1 ], [ x1, y0 ], [ x0, y0 ] ] : [];
        polygon.point = data[i];
      });
      return polygons;
    }
    function sites(data) {
      return data.map(function(d, i) {
        return {
          x: Math.round(fx(d, i) / ε) * ε,
          y: Math.round(fy(d, i) / ε) * ε,
          i: i
        };
      });
    }
    voronoi.links = function(data) {
      return d3_geom_voronoi(sites(data)).edges.filter(function(edge) {
        return edge.l && edge.r;
      }).map(function(edge) {
        return {
          source: data[edge.l.i],
          target: data[edge.r.i]
        };
      });
    };
    voronoi.triangles = function(data) {
      var triangles = [];
      d3_geom_voronoi(sites(data)).cells.forEach(function(cell, i) {
        var site = cell.site, edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder), j = -1, m = edges.length, e0, s0, e1 = edges[m - 1].edge, s1 = e1.l === site ? e1.r : e1.l;
        while (++j < m) {
          e0 = e1;
          s0 = s1;
          e1 = edges[j].edge;
          s1 = e1.l === site ? e1.r : e1.l;
          if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
            triangles.push([ data[i], data[s0.i], data[s1.i] ]);
          }
        }
      });
      return triangles;
    };
    voronoi.x = function(_) {
      return arguments.length ? (fx = d3_functor(x = _), voronoi) : x;
    };
    voronoi.y = function(_) {
      return arguments.length ? (fy = d3_functor(y = _), voronoi) : y;
    };
    voronoi.clipExtent = function(_) {
      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;
      clipExtent = _ == null ? d3_geom_voronoiClipExtent : _;
      return voronoi;
    };
    voronoi.size = function(_) {
      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];
      return voronoi.clipExtent(_ && [ [ 0, 0 ], _ ]);
    };
    return voronoi;
  };
  var d3_geom_voronoiClipExtent = [ [ -1e6, -1e6 ], [ 1e6, 1e6 ] ];
  function d3_geom_voronoiTriangleArea(a, b, c) {
    return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
  }
  d3.geom.delaunay = function(vertices) {
    return d3.geom.voronoi().triangles(vertices);
  };
  d3.geom.quadtree = function(points, x1, y1, x2, y2) {
    var x = d3_geom_pointX, y = d3_geom_pointY, compat;
    if (compat = arguments.length) {
      x = d3_geom_quadtreeCompatX;
      y = d3_geom_quadtreeCompatY;
      if (compat === 3) {
        y2 = y1;
        x2 = x1;
        y1 = x1 = 0;
      }
      return quadtree(points);
    }
    function quadtree(data) {
      var d, fx = d3_functor(x), fy = d3_functor(y), xs, ys, i, n, x1_, y1_, x2_, y2_;
      if (x1 != null) {
        x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
      } else {
        x2_ = y2_ = -(x1_ = y1_ = Infinity);
        xs = [], ys = [];
        n = data.length;
        if (compat) for (i = 0; i < n; ++i) {
          d = data[i];
          if (d.x < x1_) x1_ = d.x;
          if (d.y < y1_) y1_ = d.y;
          if (d.x > x2_) x2_ = d.x;
          if (d.y > y2_) y2_ = d.y;
          xs.push(d.x);
          ys.push(d.y);
        } else for (i = 0; i < n; ++i) {
          var x_ = +fx(d = data[i], i), y_ = +fy(d, i);
          if (x_ < x1_) x1_ = x_;
          if (y_ < y1_) y1_ = y_;
          if (x_ > x2_) x2_ = x_;
          if (y_ > y2_) y2_ = y_;
          xs.push(x_);
          ys.push(y_);
        }
      }
      var dx = x2_ - x1_, dy = y2_ - y1_;
      if (dx > dy) y2_ = y1_ + dx; else x2_ = x1_ + dy;
      function insert(n, d, x, y, x1, y1, x2, y2) {
        if (isNaN(x) || isNaN(y)) return;
        if (n.leaf) {
          var nx = n.x, ny = n.y;
          if (nx != null) {
            if (abs(nx - x) + abs(ny - y) < .01) {
              insertChild(n, d, x, y, x1, y1, x2, y2);
            } else {
              var nPoint = n.point;
              n.x = n.y = n.point = null;
              insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);
              insertChild(n, d, x, y, x1, y1, x2, y2);
            }
          } else {
            n.x = x, n.y = y, n.point = d;
          }
        } else {
          insertChild(n, d, x, y, x1, y1, x2, y2);
        }
      }
      function insertChild(n, d, x, y, x1, y1, x2, y2) {
        var xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym, i = below << 1 | right;
        n.leaf = false;
        n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
        if (right) x1 = xm; else x2 = xm;
        if (below) y1 = ym; else y2 = ym;
        insert(n, d, x, y, x1, y1, x2, y2);
      }
      var root = d3_geom_quadtreeNode();
      root.add = function(d) {
        insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_);
      };
      root.visit = function(f) {
        d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);
      };
      root.find = function(point) {
        return d3_geom_quadtreeFind(root, point[0], point[1], x1_, y1_, x2_, y2_);
      };
      i = -1;
      if (x1 == null) {
        while (++i < n) {
          insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
        }
        --i;
      } else data.forEach(root.add);
      xs = ys = data = d = null;
      return root;
    }
    quadtree.x = function(_) {
      return arguments.length ? (x = _, quadtree) : x;
    };
    quadtree.y = function(_) {
      return arguments.length ? (y = _, quadtree) : y;
    };
    quadtree.extent = function(_) {
      if (!arguments.length) return x1 == null ? null : [ [ x1, y1 ], [ x2, y2 ] ];
      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], 
      y2 = +_[1][1];
      return quadtree;
    };
    quadtree.size = function(_) {
      if (!arguments.length) return x1 == null ? null : [ x2 - x1, y2 - y1 ];
      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = y1 = 0, x2 = +_[0], y2 = +_[1];
      return quadtree;
    };
    return quadtree;
  };
  function d3_geom_quadtreeCompatX(d) {
    return d.x;
  }
  function d3_geom_quadtreeCompatY(d) {
    return d.y;
  }
  function d3_geom_quadtreeNode() {
    return {
      leaf: true,
      nodes: [],
      point: null,
      x: null,
      y: null
    };
  }
  function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
    if (!f(node, x1, y1, x2, y2)) {
      var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, children = node.nodes;
      if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
      if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
      if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
      if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
    }
  }
  function d3_geom_quadtreeFind(root, x, y, x0, y0, x3, y3) {
    var minDistance2 = Infinity, closestPoint;
    (function find(node, x1, y1, x2, y2) {
      if (x1 > x3 || y1 > y3 || x2 < x0 || y2 < y0) return;
      if (point = node.point) {
        var point, dx = x - node.x, dy = y - node.y, distance2 = dx * dx + dy * dy;
        if (distance2 < minDistance2) {
          var distance = Math.sqrt(minDistance2 = distance2);
          x0 = x - distance, y0 = y - distance;
          x3 = x + distance, y3 = y + distance;
          closestPoint = point;
        }
      }
      var children = node.nodes, xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym;
      for (var i = below << 1 | right, j = i + 4; i < j; ++i) {
        if (node = children[i & 3]) switch (i & 3) {
         case 0:
          find(node, x1, y1, xm, ym);
          break;

         case 1:
          find(node, xm, y1, x2, ym);
          break;

         case 2:
          find(node, x1, ym, xm, y2);
          break;

         case 3:
          find(node, xm, ym, x2, y2);
          break;
        }
      }
    })(root, x0, y0, x3, y3);
    return closestPoint;
  }
  d3.interpolateRgb = d3_interpolateRgb;
  function d3_interpolateRgb(a, b) {
    a = d3.rgb(a);
    b = d3.rgb(b);
    var ar = a.r, ag = a.g, ab = a.b, br = b.r - ar, bg = b.g - ag, bb = b.b - ab;
    return function(t) {
      return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
    };
  }
  d3.interpolateObject = d3_interpolateObject;
  function d3_interpolateObject(a, b) {
    var i = {}, c = {}, k;
    for (k in a) {
      if (k in b) {
        i[k] = d3_interpolate(a[k], b[k]);
      } else {
        c[k] = a[k];
      }
    }
    for (k in b) {
      if (!(k in a)) {
        c[k] = b[k];
      }
    }
    return function(t) {
      for (k in i) c[k] = i[k](t);
      return c;
    };
  }
  d3.interpolateNumber = d3_interpolateNumber;
  function d3_interpolateNumber(a, b) {
    a = +a, b = +b;
    return function(t) {
      return a * (1 - t) + b * t;
    };
  }
  d3.interpolateString = d3_interpolateString;
  function d3_interpolateString(a, b) {
    var bi = d3_interpolate_numberA.lastIndex = d3_interpolate_numberB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
    a = a + "", b = b + "";
    while ((am = d3_interpolate_numberA.exec(a)) && (bm = d3_interpolate_numberB.exec(b))) {
      if ((bs = bm.index) > bi) {
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs; else s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) {
        if (s[i]) s[i] += bm; else s[++i] = bm;
      } else {
        s[++i] = null;
        q.push({
          i: i,
          x: d3_interpolateNumber(am, bm)
        });
      }
      bi = d3_interpolate_numberB.lastIndex;
    }
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs; else s[++i] = bs;
    }
    return s.length < 2 ? q[0] ? (b = q[0].x, function(t) {
      return b(t) + "";
    }) : function() {
      return b;
    } : (b = q.length, function(t) {
      for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    });
  }
  var d3_interpolate_numberA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, d3_interpolate_numberB = new RegExp(d3_interpolate_numberA.source, "g");
  d3.interpolate = d3_interpolate;
  function d3_interpolate(a, b) {
    var i = d3.interpolators.length, f;
    while (--i >= 0 && !(f = d3.interpolators[i](a, b))) ;
    return f;
  }
  d3.interpolators = [ function(a, b) {
    var t = typeof b;
    return (t === "string" ? d3_rgb_names.has(b.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(b) ? d3_interpolateRgb : d3_interpolateString : b instanceof d3_color ? d3_interpolateRgb : Array.isArray(b) ? d3_interpolateArray : t === "object" && isNaN(b) ? d3_interpolateObject : d3_interpolateNumber)(a, b);
  } ];
  d3.interpolateArray = d3_interpolateArray;
  function d3_interpolateArray(a, b) {
    var x = [], c = [], na = a.length, nb = b.length, n0 = Math.min(a.length, b.length), i;
    for (i = 0; i < n0; ++i) x.push(d3_interpolate(a[i], b[i]));
    for (;i < na; ++i) c[i] = a[i];
    for (;i < nb; ++i) c[i] = b[i];
    return function(t) {
      for (i = 0; i < n0; ++i) c[i] = x[i](t);
      return c;
    };
  }
  var d3_ease_default = function() {
    return d3_identity;
  };
  var d3_ease = d3.map({
    linear: d3_ease_default,
    poly: d3_ease_poly,
    quad: function() {
      return d3_ease_quad;
    },
    cubic: function() {
      return d3_ease_cubic;
    },
    sin: function() {
      return d3_ease_sin;
    },
    exp: function() {
      return d3_ease_exp;
    },
    circle: function() {
      return d3_ease_circle;
    },
    elastic: d3_ease_elastic,
    back: d3_ease_back,
    bounce: function() {
      return d3_ease_bounce;
    }
  });
  var d3_ease_mode = d3.map({
    "in": d3_identity,
    out: d3_ease_reverse,
    "in-out": d3_ease_reflect,
    "out-in": function(f) {
      return d3_ease_reflect(d3_ease_reverse(f));
    }
  });
  d3.ease = function(name) {
    var i = name.indexOf("-"), t = i >= 0 ? name.slice(0, i) : name, m = i >= 0 ? name.slice(i + 1) : "in";
    t = d3_ease.get(t) || d3_ease_default;
    m = d3_ease_mode.get(m) || d3_identity;
    return d3_ease_clamp(m(t.apply(null, d3_arraySlice.call(arguments, 1))));
  };
  function d3_ease_clamp(f) {
    return function(t) {
      return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
    };
  }
  function d3_ease_reverse(f) {
    return function(t) {
      return 1 - f(1 - t);
    };
  }
  function d3_ease_reflect(f) {
    return function(t) {
      return .5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t));
    };
  }
  function d3_ease_quad(t) {
    return t * t;
  }
  function d3_ease_cubic(t) {
    return t * t * t;
  }
  function d3_ease_cubicInOut(t) {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    var t2 = t * t, t3 = t2 * t;
    return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
  }
  function d3_ease_poly(e) {
    return function(t) {
      return Math.pow(t, e);
    };
  }
  function d3_ease_sin(t) {
    return 1 - Math.cos(t * halfπ);
  }
  function d3_ease_exp(t) {
    return Math.pow(2, 10 * (t - 1));
  }
  function d3_ease_circle(t) {
    return 1 - Math.sqrt(1 - t * t);
  }
  function d3_ease_elastic(a, p) {
    var s;
    if (arguments.length < 2) p = .45;
    if (arguments.length) s = p / τ * Math.asin(1 / a); else a = 1, s = p / 4;
    return function(t) {
      return 1 + a * Math.pow(2, -10 * t) * Math.sin((t - s) * τ / p);
    };
  }
  function d3_ease_back(s) {
    if (!s) s = 1.70158;
    return function(t) {
      return t * t * ((s + 1) * t - s);
    };
  }
  function d3_ease_bounce(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
  }
  d3.interpolateHcl = d3_interpolateHcl;
  function d3_interpolateHcl(a, b) {
    a = d3.hcl(a);
    b = d3.hcl(b);
    var ah = a.h, ac = a.c, al = a.l, bh = b.h - ah, bc = b.c - ac, bl = b.l - al;
    if (isNaN(bc)) bc = 0, ac = isNaN(ac) ? b.c : ac;
    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
    return function(t) {
      return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
    };
  }
  d3.interpolateHsl = d3_interpolateHsl;
  function d3_interpolateHsl(a, b) {
    a = d3.hsl(a);
    b = d3.hsl(b);
    var ah = a.h, as = a.s, al = a.l, bh = b.h - ah, bs = b.s - as, bl = b.l - al;
    if (isNaN(bs)) bs = 0, as = isNaN(as) ? b.s : as;
    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
    return function(t) {
      return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + "";
    };
  }
  d3.interpolateLab = d3_interpolateLab;
  function d3_interpolateLab(a, b) {
    a = d3.lab(a);
    b = d3.lab(b);
    var al = a.l, aa = a.a, ab = a.b, bl = b.l - al, ba = b.a - aa, bb = b.b - ab;
    return function(t) {
      return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
    };
  }
  d3.interpolateRound = d3_interpolateRound;
  function d3_interpolateRound(a, b) {
    b -= a;
    return function(t) {
      return Math.round(a + b * t);
    };
  }
  d3.transform = function(string) {
    var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
    return (d3.transform = function(string) {
      if (string != null) {
        g.setAttribute("transform", string);
        var t = g.transform.baseVal.consolidate();
      }
      return new d3_transform(t ? t.matrix : d3_transformIdentity);
    })(string);
  };
  function d3_transform(m) {
    var r0 = [ m.a, m.b ], r1 = [ m.c, m.d ], kx = d3_transformNormalize(r0), kz = d3_transformDot(r0, r1), ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
    if (r0[0] * r1[1] < r1[0] * r0[1]) {
      r0[0] *= -1;
      r0[1] *= -1;
      kx *= -1;
      kz *= -1;
    }
    this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
    this.translate = [ m.e, m.f ];
    this.scale = [ kx, ky ];
    this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
  }
  d3_transform.prototype.toString = function() {
    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
  };
  function d3_transformDot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
  }
  function d3_transformNormalize(a) {
    var k = Math.sqrt(d3_transformDot(a, a));
    if (k) {
      a[0] /= k;
      a[1] /= k;
    }
    return k;
  }
  function d3_transformCombine(a, b, k) {
    a[0] += k * b[0];
    a[1] += k * b[1];
    return a;
  }
  var d3_transformIdentity = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0
  };
  d3.interpolateTransform = d3_interpolateTransform;
  function d3_interpolateTransformPop(s) {
    return s.length ? s.pop() + "," : "";
  }
  function d3_interpolateTranslate(ta, tb, s, q) {
    if (ta[0] !== tb[0] || ta[1] !== tb[1]) {
      var i = s.push("translate(", null, ",", null, ")");
      q.push({
        i: i - 4,
        x: d3_interpolateNumber(ta[0], tb[0])
      }, {
        i: i - 2,
        x: d3_interpolateNumber(ta[1], tb[1])
      });
    } else if (tb[0] || tb[1]) {
      s.push("translate(" + tb + ")");
    }
  }
  function d3_interpolateRotate(ra, rb, s, q) {
    if (ra !== rb) {
      if (ra - rb > 180) rb += 360; else if (rb - ra > 180) ra += 360;
      q.push({
        i: s.push(d3_interpolateTransformPop(s) + "rotate(", null, ")") - 2,
        x: d3_interpolateNumber(ra, rb)
      });
    } else if (rb) {
      s.push(d3_interpolateTransformPop(s) + "rotate(" + rb + ")");
    }
  }
  function d3_interpolateSkew(wa, wb, s, q) {
    if (wa !== wb) {
      q.push({
        i: s.push(d3_interpolateTransformPop(s) + "skewX(", null, ")") - 2,
        x: d3_interpolateNumber(wa, wb)
      });
    } else if (wb) {
      s.push(d3_interpolateTransformPop(s) + "skewX(" + wb + ")");
    }
  }
  function d3_interpolateScale(ka, kb, s, q) {
    if (ka[0] !== kb[0] || ka[1] !== kb[1]) {
      var i = s.push(d3_interpolateTransformPop(s) + "scale(", null, ",", null, ")");
      q.push({
        i: i - 4,
        x: d3_interpolateNumber(ka[0], kb[0])
      }, {
        i: i - 2,
        x: d3_interpolateNumber(ka[1], kb[1])
      });
    } else if (kb[0] !== 1 || kb[1] !== 1) {
      s.push(d3_interpolateTransformPop(s) + "scale(" + kb + ")");
    }
  }
  function d3_interpolateTransform(a, b) {
    var s = [], q = [];
    a = d3.transform(a), b = d3.transform(b);
    d3_interpolateTranslate(a.translate, b.translate, s, q);
    d3_interpolateRotate(a.rotate, b.rotate, s, q);
    d3_interpolateSkew(a.skew, b.skew, s, q);
    d3_interpolateScale(a.scale, b.scale, s, q);
    a = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  }
  function d3_uninterpolateNumber(a, b) {
    b = (b -= a = +a) || 1 / b;
    return function(x) {
      return (x - a) / b;
    };
  }
  function d3_uninterpolateClamp(a, b) {
    b = (b -= a = +a) || 1 / b;
    return function(x) {
      return Math.max(0, Math.min(1, (x - a) / b));
    };
  }
  d3.layout = {};
  d3.layout.bundle = function() {
    return function(links) {
      var paths = [], i = -1, n = links.length;
      while (++i < n) paths.push(d3_layout_bundlePath(links[i]));
      return paths;
    };
  };
  function d3_layout_bundlePath(link) {
    var start = link.source, end = link.target, lca = d3_layout_bundleLeastCommonAncestor(start, end), points = [ start ];
    while (start !== lca) {
      start = start.parent;
      points.push(start);
    }
    var k = points.length;
    while (end !== lca) {
      points.splice(k, 0, end);
      end = end.parent;
    }
    return points;
  }
  function d3_layout_bundleAncestors(node) {
    var ancestors = [], parent = node.parent;
    while (parent != null) {
      ancestors.push(node);
      node = parent;
      parent = parent.parent;
    }
    ancestors.push(node);
    return ancestors;
  }
  function d3_layout_bundleLeastCommonAncestor(a, b) {
    if (a === b) return a;
    var aNodes = d3_layout_bundleAncestors(a), bNodes = d3_layout_bundleAncestors(b), aNode = aNodes.pop(), bNode = bNodes.pop(), sharedNode = null;
    while (aNode === bNode) {
      sharedNode = aNode;
      aNode = aNodes.pop();
      bNode = bNodes.pop();
    }
    return sharedNode;
  }
  d3.layout.chord = function() {
    var chord = {}, chords, groups, matrix, n, padding = 0, sortGroups, sortSubgroups, sortChords;
    function relayout() {
      var subgroups = {}, groupSums = [], groupIndex = d3.range(n), subgroupIndex = [], k, x, x0, i, j;
      chords = [];
      groups = [];
      k = 0, i = -1;
      while (++i < n) {
        x = 0, j = -1;
        while (++j < n) {
          x += matrix[i][j];
        }
        groupSums.push(x);
        subgroupIndex.push(d3.range(n));
        k += x;
      }
      if (sortGroups) {
        groupIndex.sort(function(a, b) {
          return sortGroups(groupSums[a], groupSums[b]);
        });
      }
      if (sortSubgroups) {
        subgroupIndex.forEach(function(d, i) {
          d.sort(function(a, b) {
            return sortSubgroups(matrix[i][a], matrix[i][b]);
          });
        });
      }
      k = (τ - padding * n) / k;
      x = 0, i = -1;
      while (++i < n) {
        x0 = x, j = -1;
        while (++j < n) {
          var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x, a1 = x += v * k;
          subgroups[di + "-" + dj] = {
            index: di,
            subindex: dj,
            startAngle: a0,
            endAngle: a1,
            value: v
          };
        }
        groups[di] = {
          index: di,
          startAngle: x0,
          endAngle: x,
          value: groupSums[di]
        };
        x += padding;
      }
      i = -1;
      while (++i < n) {
        j = i - 1;
        while (++j < n) {
          var source = subgroups[i + "-" + j], target = subgroups[j + "-" + i];
          if (source.value || target.value) {
            chords.push(source.value < target.value ? {
              source: target,
              target: source
            } : {
              source: source,
              target: target
            });
          }
        }
      }
      if (sortChords) resort();
    }
    function resort() {
      chords.sort(function(a, b) {
        return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
      });
    }
    chord.matrix = function(x) {
      if (!arguments.length) return matrix;
      n = (matrix = x) && matrix.length;
      chords = groups = null;
      return chord;
    };
    chord.padding = function(x) {
      if (!arguments.length) return padding;
      padding = x;
      chords = groups = null;
      return chord;
    };
    chord.sortGroups = function(x) {
      if (!arguments.length) return sortGroups;
      sortGroups = x;
      chords = groups = null;
      return chord;
    };
    chord.sortSubgroups = function(x) {
      if (!arguments.length) return sortSubgroups;
      sortSubgroups = x;
      chords = null;
      return chord;
    };
    chord.sortChords = function(x) {
      if (!arguments.length) return sortChords;
      sortChords = x;
      if (chords) resort();
      return chord;
    };
    chord.chords = function() {
      if (!chords) relayout();
      return chords;
    };
    chord.groups = function() {
      if (!groups) relayout();
      return groups;
    };
    return chord;
  };
  d3.layout.force = function() {
    var force = {}, event = d3.dispatch("start", "tick", "end"), timer, size = [ 1, 1 ], drag, alpha, friction = .9, linkDistance = d3_layout_forceLinkDistance, linkStrength = d3_layout_forceLinkStrength, charge = -30, chargeDistance2 = d3_layout_forceChargeDistance2, gravity = .1, theta2 = .64, nodes = [], links = [], distances, strengths, charges;
    function repulse(node) {
      return function(quad, x1, _, x2) {
        if (quad.point !== node) {
          var dx = quad.cx - node.x, dy = quad.cy - node.y, dw = x2 - x1, dn = dx * dx + dy * dy;
          if (dw * dw / theta2 < dn) {
            if (dn < chargeDistance2) {
              var k = quad.charge / dn;
              node.px -= dx * k;
              node.py -= dy * k;
            }
            return true;
          }
          if (quad.point && dn && dn < chargeDistance2) {
            var k = quad.pointCharge / dn;
            node.px -= dx * k;
            node.py -= dy * k;
          }
        }
        return !quad.charge;
      };
    }
    force.tick = function() {
      if ((alpha *= .99) < .005) {
        timer = null;
        event.end({
          type: "end",
          alpha: alpha = 0
        });
        return true;
      }
      var n = nodes.length, m = links.length, q, i, o, s, t, l, k, x, y;
      for (i = 0; i < m; ++i) {
        o = links[i];
        s = o.source;
        t = o.target;
        x = t.x - s.x;
        y = t.y - s.y;
        if (l = x * x + y * y) {
          l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
          x *= l;
          y *= l;
          t.x -= x * (k = s.weight + t.weight ? s.weight / (s.weight + t.weight) : .5);
          t.y -= y * k;
          s.x += x * (k = 1 - k);
          s.y += y * k;
        }
      }
      if (k = alpha * gravity) {
        x = size[0] / 2;
        y = size[1] / 2;
        i = -1;
        if (k) while (++i < n) {
          o = nodes[i];
          o.x += (x - o.x) * k;
          o.y += (y - o.y) * k;
        }
      }
      if (charge) {
        d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
        i = -1;
        while (++i < n) {
          if (!(o = nodes[i]).fixed) {
            q.visit(repulse(o));
          }
        }
      }
      i = -1;
      while (++i < n) {
        o = nodes[i];
        if (o.fixed) {
          o.x = o.px;
          o.y = o.py;
        } else {
          o.x -= (o.px - (o.px = o.x)) * friction;
          o.y -= (o.py - (o.py = o.y)) * friction;
        }
      }
      event.tick({
        type: "tick",
        alpha: alpha
      });
    };
    force.nodes = function(x) {
      if (!arguments.length) return nodes;
      nodes = x;
      return force;
    };
    force.links = function(x) {
      if (!arguments.length) return links;
      links = x;
      return force;
    };
    force.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return force;
    };
    force.linkDistance = function(x) {
      if (!arguments.length) return linkDistance;
      linkDistance = typeof x === "function" ? x : +x;
      return force;
    };
    force.distance = force.linkDistance;
    force.linkStrength = function(x) {
      if (!arguments.length) return linkStrength;
      linkStrength = typeof x === "function" ? x : +x;
      return force;
    };
    force.friction = function(x) {
      if (!arguments.length) return friction;
      friction = +x;
      return force;
    };
    force.charge = function(x) {
      if (!arguments.length) return charge;
      charge = typeof x === "function" ? x : +x;
      return force;
    };
    force.chargeDistance = function(x) {
      if (!arguments.length) return Math.sqrt(chargeDistance2);
      chargeDistance2 = x * x;
      return force;
    };
    force.gravity = function(x) {
      if (!arguments.length) return gravity;
      gravity = +x;
      return force;
    };
    force.theta = function(x) {
      if (!arguments.length) return Math.sqrt(theta2);
      theta2 = x * x;
      return force;
    };
    force.alpha = function(x) {
      if (!arguments.length) return alpha;
      x = +x;
      if (alpha) {
        if (x > 0) {
          alpha = x;
        } else {
          timer.c = null, timer.t = NaN, timer = null;
          event.end({
            type: "end",
            alpha: alpha = 0
          });
        }
      } else if (x > 0) {
        event.start({
          type: "start",
          alpha: alpha = x
        });
        timer = d3_timer(force.tick);
      }
      return force;
    };
    force.start = function() {
      var i, n = nodes.length, m = links.length, w = size[0], h = size[1], neighbors, o;
      for (i = 0; i < n; ++i) {
        (o = nodes[i]).index = i;
        o.weight = 0;
      }
      for (i = 0; i < m; ++i) {
        o = links[i];
        if (typeof o.source == "number") o.source = nodes[o.source];
        if (typeof o.target == "number") o.target = nodes[o.target];
        ++o.source.weight;
        ++o.target.weight;
      }
      for (i = 0; i < n; ++i) {
        o = nodes[i];
        if (isNaN(o.x)) o.x = position("x", w);
        if (isNaN(o.y)) o.y = position("y", h);
        if (isNaN(o.px)) o.px = o.x;
        if (isNaN(o.py)) o.py = o.y;
      }
      distances = [];
      if (typeof linkDistance === "function") for (i = 0; i < m; ++i) distances[i] = +linkDistance.call(this, links[i], i); else for (i = 0; i < m; ++i) distances[i] = linkDistance;
      strengths = [];
      if (typeof linkStrength === "function") for (i = 0; i < m; ++i) strengths[i] = +linkStrength.call(this, links[i], i); else for (i = 0; i < m; ++i) strengths[i] = linkStrength;
      charges = [];
      if (typeof charge === "function") for (i = 0; i < n; ++i) charges[i] = +charge.call(this, nodes[i], i); else for (i = 0; i < n; ++i) charges[i] = charge;
      function position(dimension, size) {
        if (!neighbors) {
          neighbors = new Array(n);
          for (j = 0; j < n; ++j) {
            neighbors[j] = [];
          }
          for (j = 0; j < m; ++j) {
            var o = links[j];
            neighbors[o.source.index].push(o.target);
            neighbors[o.target.index].push(o.source);
          }
        }
        var candidates = neighbors[i], j = -1, l = candidates.length, x;
        while (++j < l) if (!isNaN(x = candidates[j][dimension])) return x;
        return Math.random() * size;
      }
      return force.resume();
    };
    force.resume = function() {
      return force.alpha(.1);
    };
    force.stop = function() {
      return force.alpha(0);
    };
    force.drag = function() {
      if (!drag) drag = d3.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
      if (!arguments.length) return drag;
      this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
    };
    function dragmove(d) {
      d.px = d3.event.x, d.py = d3.event.y;
      force.resume();
    }
    return d3.rebind(force, event, "on");
  };
  function d3_layout_forceDragstart(d) {
    d.fixed |= 2;
  }
  function d3_layout_forceDragend(d) {
    d.fixed &= ~6;
  }
  function d3_layout_forceMouseover(d) {
    d.fixed |= 4;
    d.px = d.x, d.py = d.y;
  }
  function d3_layout_forceMouseout(d) {
    d.fixed &= ~4;
  }
  function d3_layout_forceAccumulate(quad, alpha, charges) {
    var cx = 0, cy = 0;
    quad.charge = 0;
    if (!quad.leaf) {
      var nodes = quad.nodes, n = nodes.length, i = -1, c;
      while (++i < n) {
        c = nodes[i];
        if (c == null) continue;
        d3_layout_forceAccumulate(c, alpha, charges);
        quad.charge += c.charge;
        cx += c.charge * c.cx;
        cy += c.charge * c.cy;
      }
    }
    if (quad.point) {
      if (!quad.leaf) {
        quad.point.x += Math.random() - .5;
        quad.point.y += Math.random() - .5;
      }
      var k = alpha * charges[quad.point.index];
      quad.charge += quad.pointCharge = k;
      cx += k * quad.point.x;
      cy += k * quad.point.y;
    }
    quad.cx = cx / quad.charge;
    quad.cy = cy / quad.charge;
  }
  var d3_layout_forceLinkDistance = 20, d3_layout_forceLinkStrength = 1, d3_layout_forceChargeDistance2 = Infinity;
  d3.layout.hierarchy = function() {
    var sort = d3_layout_hierarchySort, children = d3_layout_hierarchyChildren, value = d3_layout_hierarchyValue;
    function hierarchy(root) {
      var stack = [ root ], nodes = [], node;
      root.depth = 0;
      while ((node = stack.pop()) != null) {
        nodes.push(node);
        if ((childs = children.call(hierarchy, node, node.depth)) && (n = childs.length)) {
          var n, childs, child;
          while (--n >= 0) {
            stack.push(child = childs[n]);
            child.parent = node;
            child.depth = node.depth + 1;
          }
          if (value) node.value = 0;
          node.children = childs;
        } else {
          if (value) node.value = +value.call(hierarchy, node, node.depth) || 0;
          delete node.children;
        }
      }
      d3_layout_hierarchyVisitAfter(root, function(node) {
        var childs, parent;
        if (sort && (childs = node.children)) childs.sort(sort);
        if (value && (parent = node.parent)) parent.value += node.value;
      });
      return nodes;
    }
    hierarchy.sort = function(x) {
      if (!arguments.length) return sort;
      sort = x;
      return hierarchy;
    };
    hierarchy.children = function(x) {
      if (!arguments.length) return children;
      children = x;
      return hierarchy;
    };
    hierarchy.value = function(x) {
      if (!arguments.length) return value;
      value = x;
      return hierarchy;
    };
    hierarchy.revalue = function(root) {
      if (value) {
        d3_layout_hierarchyVisitBefore(root, function(node) {
          if (node.children) node.value = 0;
        });
        d3_layout_hierarchyVisitAfter(root, function(node) {
          var parent;
          if (!node.children) node.value = +value.call(hierarchy, node, node.depth) || 0;
          if (parent = node.parent) parent.value += node.value;
        });
      }
      return root;
    };
    return hierarchy;
  };
  function d3_layout_hierarchyRebind(object, hierarchy) {
    d3.rebind(object, hierarchy, "sort", "children", "value");
    object.nodes = object;
    object.links = d3_layout_hierarchyLinks;
    return object;
  }
  function d3_layout_hierarchyVisitBefore(node, callback) {
    var nodes = [ node ];
    while ((node = nodes.pop()) != null) {
      callback(node);
      if ((children = node.children) && (n = children.length)) {
        var n, children;
        while (--n >= 0) nodes.push(children[n]);
      }
    }
  }
  function d3_layout_hierarchyVisitAfter(node, callback) {
    var nodes = [ node ], nodes2 = [];
    while ((node = nodes.pop()) != null) {
      nodes2.push(node);
      if ((children = node.children) && (n = children.length)) {
        var i = -1, n, children;
        while (++i < n) nodes.push(children[i]);
      }
    }
    while ((node = nodes2.pop()) != null) {
      callback(node);
    }
  }
  function d3_layout_hierarchyChildren(d) {
    return d.children;
  }
  function d3_layout_hierarchyValue(d) {
    return d.value;
  }
  function d3_layout_hierarchySort(a, b) {
    return b.value - a.value;
  }
  function d3_layout_hierarchyLinks(nodes) {
    return d3.merge(nodes.map(function(parent) {
      return (parent.children || []).map(function(child) {
        return {
          source: parent,
          target: child
        };
      });
    }));
  }
  d3.layout.partition = function() {
    var hierarchy = d3.layout.hierarchy(), size = [ 1, 1 ];
    function position(node, x, dx, dy) {
      var children = node.children;
      node.x = x;
      node.y = node.depth * dy;
      node.dx = dx;
      node.dy = dy;
      if (children && (n = children.length)) {
        var i = -1, n, c, d;
        dx = node.value ? dx / node.value : 0;
        while (++i < n) {
          position(c = children[i], x, d = c.value * dx, dy);
          x += d;
        }
      }
    }
    function depth(node) {
      var children = node.children, d = 0;
      if (children && (n = children.length)) {
        var i = -1, n;
        while (++i < n) d = Math.max(d, depth(children[i]));
      }
      return 1 + d;
    }
    function partition(d, i) {
      var nodes = hierarchy.call(this, d, i);
      position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
      return nodes;
    }
    partition.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return partition;
    };
    return d3_layout_hierarchyRebind(partition, hierarchy);
  };
  d3.layout.pie = function() {
    var value = Number, sort = d3_layout_pieSortByValue, startAngle = 0, endAngle = τ, padAngle = 0;
    function pie(data) {
      var n = data.length, values = data.map(function(d, i) {
        return +value.call(pie, d, i);
      }), a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle), da = (typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - a, p = Math.min(Math.abs(da) / n, +(typeof padAngle === "function" ? padAngle.apply(this, arguments) : padAngle)), pa = p * (da < 0 ? -1 : 1), sum = d3.sum(values), k = sum ? (da - n * pa) / sum : 0, index = d3.range(n), arcs = [], v;
      if (sort != null) index.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
        return values[j] - values[i];
      } : function(i, j) {
        return sort(data[i], data[j]);
      });
      index.forEach(function(i) {
        arcs[i] = {
          data: data[i],
          value: v = values[i],
          startAngle: a,
          endAngle: a += v * k + pa,
          padAngle: p
        };
      });
      return arcs;
    }
    pie.value = function(_) {
      if (!arguments.length) return value;
      value = _;
      return pie;
    };
    pie.sort = function(_) {
      if (!arguments.length) return sort;
      sort = _;
      return pie;
    };
    pie.startAngle = function(_) {
      if (!arguments.length) return startAngle;
      startAngle = _;
      return pie;
    };
    pie.endAngle = function(_) {
      if (!arguments.length) return endAngle;
      endAngle = _;
      return pie;
    };
    pie.padAngle = function(_) {
      if (!arguments.length) return padAngle;
      padAngle = _;
      return pie;
    };
    return pie;
  };
  var d3_layout_pieSortByValue = {};
  d3.layout.stack = function() {
    var values = d3_identity, order = d3_layout_stackOrderDefault, offset = d3_layout_stackOffsetZero, out = d3_layout_stackOut, x = d3_layout_stackX, y = d3_layout_stackY;
    function stack(data, index) {
      if (!(n = data.length)) return data;
      var series = data.map(function(d, i) {
        return values.call(stack, d, i);
      });
      var points = series.map(function(d) {
        return d.map(function(v, i) {
          return [ x.call(stack, v, i), y.call(stack, v, i) ];
        });
      });
      var orders = order.call(stack, points, index);
      series = d3.permute(series, orders);
      points = d3.permute(points, orders);
      var offsets = offset.call(stack, points, index);
      var m = series[0].length, n, i, j, o;
      for (j = 0; j < m; ++j) {
        out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
        for (i = 1; i < n; ++i) {
          out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
        }
      }
      return data;
    }
    stack.values = function(x) {
      if (!arguments.length) return values;
      values = x;
      return stack;
    };
    stack.order = function(x) {
      if (!arguments.length) return order;
      order = typeof x === "function" ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
      return stack;
    };
    stack.offset = function(x) {
      if (!arguments.length) return offset;
      offset = typeof x === "function" ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
      return stack;
    };
    stack.x = function(z) {
      if (!arguments.length) return x;
      x = z;
      return stack;
    };
    stack.y = function(z) {
      if (!arguments.length) return y;
      y = z;
      return stack;
    };
    stack.out = function(z) {
      if (!arguments.length) return out;
      out = z;
      return stack;
    };
    return stack;
  };
  function d3_layout_stackX(d) {
    return d.x;
  }
  function d3_layout_stackY(d) {
    return d.y;
  }
  function d3_layout_stackOut(d, y0, y) {
    d.y0 = y0;
    d.y = y;
  }
  var d3_layout_stackOrders = d3.map({
    "inside-out": function(data) {
      var n = data.length, i, j, max = data.map(d3_layout_stackMaxIndex), sums = data.map(d3_layout_stackReduceSum), index = d3.range(n).sort(function(a, b) {
        return max[a] - max[b];
      }), top = 0, bottom = 0, tops = [], bottoms = [];
      for (i = 0; i < n; ++i) {
        j = index[i];
        if (top < bottom) {
          top += sums[j];
          tops.push(j);
        } else {
          bottom += sums[j];
          bottoms.push(j);
        }
      }
      return bottoms.reverse().concat(tops);
    },
    reverse: function(data) {
      return d3.range(data.length).reverse();
    },
    "default": d3_layout_stackOrderDefault
  });
  var d3_layout_stackOffsets = d3.map({
    silhouette: function(data) {
      var n = data.length, m = data[0].length, sums = [], max = 0, i, j, o, y0 = [];
      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
        if (o > max) max = o;
        sums.push(o);
      }
      for (j = 0; j < m; ++j) {
        y0[j] = (max - sums[j]) / 2;
      }
      return y0;
    },
    wiggle: function(data) {
      var n = data.length, x = data[0], m = x.length, i, j, k, s1, s2, s3, dx, o, o0, y0 = [];
      y0[0] = o = o0 = 0;
      for (j = 1; j < m; ++j) {
        for (i = 0, s1 = 0; i < n; ++i) s1 += data[i][j][1];
        for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
          for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
            s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
          }
          s2 += s3 * data[i][j][1];
        }
        y0[j] = o -= s1 ? s2 / s1 * dx : 0;
        if (o < o0) o0 = o;
      }
      for (j = 0; j < m; ++j) y0[j] -= o0;
      return y0;
    },
    expand: function(data) {
      var n = data.length, m = data[0].length, k = 1 / n, i, j, o, y0 = [];
      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
        if (o) for (i = 0; i < n; i++) data[i][j][1] /= o; else for (i = 0; i < n; i++) data[i][j][1] = k;
      }
      for (j = 0; j < m; ++j) y0[j] = 0;
      return y0;
    },
    zero: d3_layout_stackOffsetZero
  });
  function d3_layout_stackOrderDefault(data) {
    return d3.range(data.length);
  }
  function d3_layout_stackOffsetZero(data) {
    var j = -1, m = data[0].length, y0 = [];
    while (++j < m) y0[j] = 0;
    return y0;
  }
  function d3_layout_stackMaxIndex(array) {
    var i = 1, j = 0, v = array[0][1], k, n = array.length;
    for (;i < n; ++i) {
      if ((k = array[i][1]) > v) {
        j = i;
        v = k;
      }
    }
    return j;
  }
  function d3_layout_stackReduceSum(d) {
    return d.reduce(d3_layout_stackSum, 0);
  }
  function d3_layout_stackSum(p, d) {
    return p + d[1];
  }
  d3.layout.histogram = function() {
    var frequency = true, valuer = Number, ranger = d3_layout_histogramRange, binner = d3_layout_histogramBinSturges;
    function histogram(data, i) {
      var bins = [], values = data.map(valuer, this), range = ranger.call(this, values, i), thresholds = binner.call(this, range, values, i), bin, i = -1, n = values.length, m = thresholds.length - 1, k = frequency ? 1 : 1 / n, x;
      while (++i < m) {
        bin = bins[i] = [];
        bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
        bin.y = 0;
      }
      if (m > 0) {
        i = -1;
        while (++i < n) {
          x = values[i];
          if (x >= range[0] && x <= range[1]) {
            bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
            bin.y += k;
            bin.push(data[i]);
          }
        }
      }
      return bins;
    }
    histogram.value = function(x) {
      if (!arguments.length) return valuer;
      valuer = x;
      return histogram;
    };
    histogram.range = function(x) {
      if (!arguments.length) return ranger;
      ranger = d3_functor(x);
      return histogram;
    };
    histogram.bins = function(x) {
      if (!arguments.length) return binner;
      binner = typeof x === "number" ? function(range) {
        return d3_layout_histogramBinFixed(range, x);
      } : d3_functor(x);
      return histogram;
    };
    histogram.frequency = function(x) {
      if (!arguments.length) return frequency;
      frequency = !!x;
      return histogram;
    };
    return histogram;
  };
  function d3_layout_histogramBinSturges(range, values) {
    return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
  }
  function d3_layout_histogramBinFixed(range, n) {
    var x = -1, b = +range[0], m = (range[1] - b) / n, f = [];
    while (++x <= n) f[x] = m * x + b;
    return f;
  }
  function d3_layout_histogramRange(values) {
    return [ d3.min(values), d3.max(values) ];
  }
  d3.layout.pack = function() {
    var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort), padding = 0, size = [ 1, 1 ], radius;
    function pack(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0], w = size[0], h = size[1], r = radius == null ? Math.sqrt : typeof radius === "function" ? radius : function() {
        return radius;
      };
      root.x = root.y = 0;
      d3_layout_hierarchyVisitAfter(root, function(d) {
        d.r = +r(d.value);
      });
      d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
      if (padding) {
        var dr = padding * (radius ? 1 : Math.max(2 * root.r / w, 2 * root.r / h)) / 2;
        d3_layout_hierarchyVisitAfter(root, function(d) {
          d.r += dr;
        });
        d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
        d3_layout_hierarchyVisitAfter(root, function(d) {
          d.r -= dr;
        });
      }
      d3_layout_packTransform(root, w / 2, h / 2, radius ? 1 : 1 / Math.max(2 * root.r / w, 2 * root.r / h));
      return nodes;
    }
    pack.size = function(_) {
      if (!arguments.length) return size;
      size = _;
      return pack;
    };
    pack.radius = function(_) {
      if (!arguments.length) return radius;
      radius = _ == null || typeof _ === "function" ? _ : +_;
      return pack;
    };
    pack.padding = function(_) {
      if (!arguments.length) return padding;
      padding = +_;
      return pack;
    };
    return d3_layout_hierarchyRebind(pack, hierarchy);
  };
  function d3_layout_packSort(a, b) {
    return a.value - b.value;
  }
  function d3_layout_packInsert(a, b) {
    var c = a._pack_next;
    a._pack_next = b;
    b._pack_prev = a;
    b._pack_next = c;
    c._pack_prev = b;
  }
  function d3_layout_packSplice(a, b) {
    a._pack_next = b;
    b._pack_prev = a;
  }
  function d3_layout_packIntersects(a, b) {
    var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;
    return .999 * dr * dr > dx * dx + dy * dy;
  }
  function d3_layout_packSiblings(node) {
    if (!(nodes = node.children) || !(n = nodes.length)) return;
    var nodes, xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, a, b, c, i, j, k, n;
    function bound(node) {
      xMin = Math.min(node.x - node.r, xMin);
      xMax = Math.max(node.x + node.r, xMax);
      yMin = Math.min(node.y - node.r, yMin);
      yMax = Math.max(node.y + node.r, yMax);
    }
    nodes.forEach(d3_layout_packLink);
    a = nodes[0];
    a.x = -a.r;
    a.y = 0;
    bound(a);
    if (n > 1) {
      b = nodes[1];
      b.x = b.r;
      b.y = 0;
      bound(b);
      if (n > 2) {
        c = nodes[2];
        d3_layout_packPlace(a, b, c);
        bound(c);
        d3_layout_packInsert(a, c);
        a._pack_prev = c;
        d3_layout_packInsert(c, b);
        b = a._pack_next;
        for (i = 3; i < n; i++) {
          d3_layout_packPlace(a, b, c = nodes[i]);
          var isect = 0, s1 = 1, s2 = 1;
          for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
            if (d3_layout_packIntersects(j, c)) {
              isect = 1;
              break;
            }
          }
          if (isect == 1) {
            for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
              if (d3_layout_packIntersects(k, c)) {
                break;
              }
            }
          }
          if (isect) {
            if (s1 < s2 || s1 == s2 && b.r < a.r) d3_layout_packSplice(a, b = j); else d3_layout_packSplice(a = k, b);
            i--;
          } else {
            d3_layout_packInsert(a, c);
            b = c;
            bound(c);
          }
        }
      }
    }
    var cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cr = 0;
    for (i = 0; i < n; i++) {
      c = nodes[i];
      c.x -= cx;
      c.y -= cy;
      cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
    }
    node.r = cr;
    nodes.forEach(d3_layout_packUnlink);
  }
  function d3_layout_packLink(node) {
    node._pack_next = node._pack_prev = node;
  }
  function d3_layout_packUnlink(node) {
    delete node._pack_next;
    delete node._pack_prev;
  }
  function d3_layout_packTransform(node, x, y, k) {
    var children = node.children;
    node.x = x += k * node.x;
    node.y = y += k * node.y;
    node.r *= k;
    if (children) {
      var i = -1, n = children.length;
      while (++i < n) d3_layout_packTransform(children[i], x, y, k);
    }
  }
  function d3_layout_packPlace(a, b, c) {
    var db = a.r + c.r, dx = b.x - a.x, dy = b.y - a.y;
    if (db && (dx || dy)) {
      var da = b.r + c.r, dc = dx * dx + dy * dy;
      da *= da;
      db *= db;
      var x = .5 + (db - da) / (2 * dc), y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
      c.x = a.x + x * dx + y * dy;
      c.y = a.y + x * dy - y * dx;
    } else {
      c.x = a.x + db;
      c.y = a.y;
    }
  }
  d3.layout.tree = function() {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = null;
    function tree(d, i) {
      var nodes = hierarchy.call(this, d, i), root0 = nodes[0], root1 = wrapTree(root0);
      d3_layout_hierarchyVisitAfter(root1, firstWalk), root1.parent.m = -root1.z;
      d3_layout_hierarchyVisitBefore(root1, secondWalk);
      if (nodeSize) d3_layout_hierarchyVisitBefore(root0, sizeNode); else {
        var left = root0, right = root0, bottom = root0;
        d3_layout_hierarchyVisitBefore(root0, function(node) {
          if (node.x < left.x) left = node;
          if (node.x > right.x) right = node;
          if (node.depth > bottom.depth) bottom = node;
        });
        var tx = separation(left, right) / 2 - left.x, kx = size[0] / (right.x + separation(right, left) / 2 + tx), ky = size[1] / (bottom.depth || 1);
        d3_layout_hierarchyVisitBefore(root0, function(node) {
          node.x = (node.x + tx) * kx;
          node.y = node.depth * ky;
        });
      }
      return nodes;
    }
    function wrapTree(root0) {
      var root1 = {
        A: null,
        children: [ root0 ]
      }, queue = [ root1 ], node1;
      while ((node1 = queue.pop()) != null) {
        for (var children = node1.children, child, i = 0, n = children.length; i < n; ++i) {
          queue.push((children[i] = child = {
            _: children[i],
            parent: node1,
            children: (child = children[i].children) && child.slice() || [],
            A: null,
            a: null,
            z: 0,
            m: 0,
            c: 0,
            s: 0,
            t: null,
            i: i
          }).a = child);
        }
      }
      return root1.children[0];
    }
    function firstWalk(v) {
      var children = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
      if (children.length) {
        d3_layout_treeShift(v);
        var midpoint = (children[0].z + children[children.length - 1].z) / 2;
        if (w) {
          v.z = w.z + separation(v._, w._);
          v.m = v.z - midpoint;
        } else {
          v.z = midpoint;
        }
      } else if (w) {
        v.z = w.z + separation(v._, w._);
      }
      v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
    }
    function secondWalk(v) {
      v._.x = v.z + v.parent.m;
      v.m += v.parent.m;
    }
    function apportion(v, w, ancestor) {
      if (w) {
        var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
        while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
          vom = d3_layout_treeLeft(vom);
          vop = d3_layout_treeRight(vop);
          vop.a = v;
          shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
          if (shift > 0) {
            d3_layout_treeMove(d3_layout_treeAncestor(vim, v, ancestor), v, shift);
            sip += shift;
            sop += shift;
          }
          sim += vim.m;
          sip += vip.m;
          som += vom.m;
          sop += vop.m;
        }
        if (vim && !d3_layout_treeRight(vop)) {
          vop.t = vim;
          vop.m += sim - sop;
        }
        if (vip && !d3_layout_treeLeft(vom)) {
          vom.t = vip;
          vom.m += sip - som;
          ancestor = v;
        }
      }
      return ancestor;
    }
    function sizeNode(node) {
      node.x *= size[0];
      node.y = node.depth * size[1];
    }
    tree.separation = function(x) {
      if (!arguments.length) return separation;
      separation = x;
      return tree;
    };
    tree.size = function(x) {
      if (!arguments.length) return nodeSize ? null : size;
      nodeSize = (size = x) == null ? sizeNode : null;
      return tree;
    };
    tree.nodeSize = function(x) {
      if (!arguments.length) return nodeSize ? size : null;
      nodeSize = (size = x) == null ? null : sizeNode;
      return tree;
    };
    return d3_layout_hierarchyRebind(tree, hierarchy);
  };
  function d3_layout_treeSeparation(a, b) {
    return a.parent == b.parent ? 1 : 2;
  }
  function d3_layout_treeLeft(v) {
    var children = v.children;
    return children.length ? children[0] : v.t;
  }
  function d3_layout_treeRight(v) {
    var children = v.children, n;
    return (n = children.length) ? children[n - 1] : v.t;
  }
  function d3_layout_treeMove(wm, wp, shift) {
    var change = shift / (wp.i - wm.i);
    wp.c -= change;
    wp.s += shift;
    wm.c += change;
    wp.z += shift;
    wp.m += shift;
  }
  function d3_layout_treeShift(v) {
    var shift = 0, change = 0, children = v.children, i = children.length, w;
    while (--i >= 0) {
      w = children[i];
      w.z += shift;
      w.m += shift;
      shift += w.s + (change += w.c);
    }
  }
  function d3_layout_treeAncestor(vim, v, ancestor) {
    return vim.a.parent === v.parent ? vim.a : ancestor;
  }
  d3.layout.cluster = function() {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = false;
    function cluster(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0], previousNode, x = 0;
      d3_layout_hierarchyVisitAfter(root, function(node) {
        var children = node.children;
        if (children && children.length) {
          node.x = d3_layout_clusterX(children);
          node.y = d3_layout_clusterY(children);
        } else {
          node.x = previousNode ? x += separation(node, previousNode) : 0;
          node.y = 0;
          previousNode = node;
        }
      });
      var left = d3_layout_clusterLeft(root), right = d3_layout_clusterRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
      d3_layout_hierarchyVisitAfter(root, nodeSize ? function(node) {
        node.x = (node.x - root.x) * size[0];
        node.y = (root.y - node.y) * size[1];
      } : function(node) {
        node.x = (node.x - x0) / (x1 - x0) * size[0];
        node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
      });
      return nodes;
    }
    cluster.separation = function(x) {
      if (!arguments.length) return separation;
      separation = x;
      return cluster;
    };
    cluster.size = function(x) {
      if (!arguments.length) return nodeSize ? null : size;
      nodeSize = (size = x) == null;
      return cluster;
    };
    cluster.nodeSize = function(x) {
      if (!arguments.length) return nodeSize ? size : null;
      nodeSize = (size = x) != null;
      return cluster;
    };
    return d3_layout_hierarchyRebind(cluster, hierarchy);
  };
  function d3_layout_clusterY(children) {
    return 1 + d3.max(children, function(child) {
      return child.y;
    });
  }
  function d3_layout_clusterX(children) {
    return children.reduce(function(x, child) {
      return x + child.x;
    }, 0) / children.length;
  }
  function d3_layout_clusterLeft(node) {
    var children = node.children;
    return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
  }
  function d3_layout_clusterRight(node) {
    var children = node.children, n;
    return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
  }
  d3.layout.treemap = function() {
    var hierarchy = d3.layout.hierarchy(), round = Math.round, size = [ 1, 1 ], padding = null, pad = d3_layout_treemapPadNull, sticky = false, stickies, mode = "squarify", ratio = .5 * (1 + Math.sqrt(5));
    function scale(children, k) {
      var i = -1, n = children.length, child, area;
      while (++i < n) {
        area = (child = children[i]).value * (k < 0 ? 0 : k);
        child.area = isNaN(area) || area <= 0 ? 0 : area;
      }
    }
    function squarify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), row = [], remaining = children.slice(), child, best = Infinity, score, u = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy), n;
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while ((n = remaining.length) > 0) {
          row.push(child = remaining[n - 1]);
          row.area += child.area;
          if (mode !== "squarify" || (score = worst(row, u)) <= best) {
            remaining.pop();
            best = score;
          } else {
            row.area -= row.pop().area;
            position(row, u, rect, false);
            u = Math.min(rect.dx, rect.dy);
            row.length = row.area = 0;
            best = Infinity;
          }
        }
        if (row.length) {
          position(row, u, rect, true);
          row.length = row.area = 0;
        }
        children.forEach(squarify);
      }
    }
    function stickify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), remaining = children.slice(), child, row = [];
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while (child = remaining.pop()) {
          row.push(child);
          row.area += child.area;
          if (child.z != null) {
            position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
            row.length = row.area = 0;
          }
        }
        children.forEach(stickify);
      }
    }
    function worst(row, u) {
      var s = row.area, r, rmax = 0, rmin = Infinity, i = -1, n = row.length;
      while (++i < n) {
        if (!(r = row[i].area)) continue;
        if (r < rmin) rmin = r;
        if (r > rmax) rmax = r;
      }
      s *= s;
      u *= u;
      return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
    }
    function position(row, u, rect, flush) {
      var i = -1, n = row.length, x = rect.x, y = rect.y, v = u ? round(row.area / u) : 0, o;
      if (u == rect.dx) {
        if (flush || v > rect.dy) v = rect.dy;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dy = v;
          x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
        }
        o.z = true;
        o.dx += rect.x + rect.dx - x;
        rect.y += v;
        rect.dy -= v;
      } else {
        if (flush || v > rect.dx) v = rect.dx;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dx = v;
          y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
        }
        o.z = false;
        o.dy += rect.y + rect.dy - y;
        rect.x += v;
        rect.dx -= v;
      }
    }
    function treemap(d) {
      var nodes = stickies || hierarchy(d), root = nodes[0];
      root.x = root.y = 0;
      if (root.value) root.dx = size[0], root.dy = size[1]; else root.dx = root.dy = 0;
      if (stickies) hierarchy.revalue(root);
      scale([ root ], root.dx * root.dy / root.value);
      (stickies ? stickify : squarify)(root);
      if (sticky) stickies = nodes;
      return nodes;
    }
    treemap.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return treemap;
    };
    treemap.padding = function(x) {
      if (!arguments.length) return padding;
      function padFunction(node) {
        var p = x.call(treemap, node, node.depth);
        return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [ p, p, p, p ] : p);
      }
      function padConstant(node) {
        return d3_layout_treemapPad(node, x);
      }
      var type;
      pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === "function" ? padFunction : type === "number" ? (x = [ x, x, x, x ], 
      padConstant) : padConstant;
      return treemap;
    };
    treemap.round = function(x) {
      if (!arguments.length) return round != Number;
      round = x ? Math.round : Number;
      return treemap;
    };
    treemap.sticky = function(x) {
      if (!arguments.length) return sticky;
      sticky = x;
      stickies = null;
      return treemap;
    };
    treemap.ratio = function(x) {
      if (!arguments.length) return ratio;
      ratio = x;
      return treemap;
    };
    treemap.mode = function(x) {
      if (!arguments.length) return mode;
      mode = x + "";
      return treemap;
    };
    return d3_layout_hierarchyRebind(treemap, hierarchy);
  };
  function d3_layout_treemapPadNull(node) {
    return {
      x: node.x,
      y: node.y,
      dx: node.dx,
      dy: node.dy
    };
  }
  function d3_layout_treemapPad(node, padding) {
    var x = node.x + padding[3], y = node.y + padding[0], dx = node.dx - padding[1] - padding[3], dy = node.dy - padding[0] - padding[2];
    if (dx < 0) {
      x += dx / 2;
      dx = 0;
    }
    if (dy < 0) {
      y += dy / 2;
      dy = 0;
    }
    return {
      x: x,
      y: y,
      dx: dx,
      dy: dy
    };
  }
  d3.random = {
    normal: function(µ, σ) {
      var n = arguments.length;
      if (n < 2) σ = 1;
      if (n < 1) µ = 0;
      return function() {
        var x, y, r;
        do {
          x = Math.random() * 2 - 1;
          y = Math.random() * 2 - 1;
          r = x * x + y * y;
        } while (!r || r > 1);
        return µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);
      };
    },
    logNormal: function() {
      var random = d3.random.normal.apply(d3, arguments);
      return function() {
        return Math.exp(random());
      };
    },
    bates: function(m) {
      var random = d3.random.irwinHall(m);
      return function() {
        return random() / m;
      };
    },
    irwinHall: function(m) {
      return function() {
        for (var s = 0, j = 0; j < m; j++) s += Math.random();
        return s;
      };
    }
  };
  d3.scale = {};
  function d3_scaleExtent(domain) {
    var start = domain[0], stop = domain[domain.length - 1];
    return start < stop ? [ start, stop ] : [ stop, start ];
  }
  function d3_scaleRange(scale) {
    return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
  }
  function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
    var u = uninterpolate(domain[0], domain[1]), i = interpolate(range[0], range[1]);
    return function(x) {
      return i(u(x));
    };
  }
  function d3_scale_nice(domain, nice) {
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], dx;
    if (x1 < x0) {
      dx = i0, i0 = i1, i1 = dx;
      dx = x0, x0 = x1, x1 = dx;
    }
    domain[i0] = nice.floor(x0);
    domain[i1] = nice.ceil(x1);
    return domain;
  }
  function d3_scale_niceStep(step) {
    return step ? {
      floor: function(x) {
        return Math.floor(x / step) * step;
      },
      ceil: function(x) {
        return Math.ceil(x / step) * step;
      }
    } : d3_scale_niceIdentity;
  }
  var d3_scale_niceIdentity = {
    floor: d3_identity,
    ceil: d3_identity
  };
  function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
    var u = [], i = [], j = 0, k = Math.min(domain.length, range.length) - 1;
    if (domain[k] < domain[0]) {
      domain = domain.slice().reverse();
      range = range.slice().reverse();
    }
    while (++j <= k) {
      u.push(uninterpolate(domain[j - 1], domain[j]));
      i.push(interpolate(range[j - 1], range[j]));
    }
    return function(x) {
      var j = d3.bisect(domain, x, 1, k) - 1;
      return i[j](u[j](x));
    };
  }
  d3.scale.linear = function() {
    return d3_scale_linear([ 0, 1 ], [ 0, 1 ], d3_interpolate, false);
  };
  function d3_scale_linear(domain, range, interpolate, clamp) {
    var output, input;
    function rescale() {
      var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear, uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
      output = linear(domain, range, uninterpolate, interpolate);
      input = linear(range, domain, uninterpolate, d3_interpolate);
      return scale;
    }
    function scale(x) {
      return output(x);
    }
    scale.invert = function(y) {
      return input(y);
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(Number);
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.rangeRound = function(x) {
      return scale.range(x).interpolate(d3_interpolateRound);
    };
    scale.clamp = function(x) {
      if (!arguments.length) return clamp;
      clamp = x;
      return rescale();
    };
    scale.interpolate = function(x) {
      if (!arguments.length) return interpolate;
      interpolate = x;
      return rescale();
    };
    scale.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    scale.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    scale.nice = function(m) {
      d3_scale_linearNice(domain, m);
      return rescale();
    };
    scale.copy = function() {
      return d3_scale_linear(domain, range, interpolate, clamp);
    };
    return rescale();
  }
  function d3_scale_linearRebind(scale, linear) {
    return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
  }
  function d3_scale_linearNice(domain, m) {
    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
    return domain;
  }
  function d3_scale_linearTickRange(domain, m) {
    if (m == null) m = 10;
    var extent = d3_scaleExtent(domain), span = extent[1] - extent[0], step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)), err = m / span * step;
    if (err <= .15) step *= 10; else if (err <= .35) step *= 5; else if (err <= .75) step *= 2;
    extent[0] = Math.ceil(extent[0] / step) * step;
    extent[1] = Math.floor(extent[1] / step) * step + step * .5;
    extent[2] = step;
    return extent;
  }
  function d3_scale_linearTicks(domain, m) {
    return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
  }
  function d3_scale_linearTickFormat(domain, m, format) {
    var range = d3_scale_linearTickRange(domain, m);
    if (format) {
      var match = d3_format_re.exec(format);
      match.shift();
      if (match[8] === "s") {
        var prefix = d3.formatPrefix(Math.max(abs(range[0]), abs(range[1])));
        if (!match[7]) match[7] = "." + d3_scale_linearPrecision(prefix.scale(range[2]));
        match[8] = "f";
        format = d3.format(match.join(""));
        return function(d) {
          return format(prefix.scale(d)) + prefix.symbol;
        };
      }
      if (!match[7]) match[7] = "." + d3_scale_linearFormatPrecision(match[8], range);
      format = match.join("");
    } else {
      format = ",." + d3_scale_linearPrecision(range[2]) + "f";
    }
    return d3.format(format);
  }
  var d3_scale_linearFormatSignificant = {
    s: 1,
    g: 1,
    p: 1,
    r: 1,
    e: 1
  };
  function d3_scale_linearPrecision(value) {
    return -Math.floor(Math.log(value) / Math.LN10 + .01);
  }
  function d3_scale_linearFormatPrecision(type, range) {
    var p = d3_scale_linearPrecision(range[2]);
    return type in d3_scale_linearFormatSignificant ? Math.abs(p - d3_scale_linearPrecision(Math.max(abs(range[0]), abs(range[1])))) + +(type !== "e") : p - (type === "%") * 2;
  }
  d3.scale.log = function() {
    return d3_scale_log(d3.scale.linear().domain([ 0, 1 ]), 10, true, [ 1, 10 ]);
  };
  function d3_scale_log(linear, base, positive, domain) {
    function log(x) {
      return (positive ? Math.log(x < 0 ? 0 : x) : -Math.log(x > 0 ? 0 : -x)) / Math.log(base);
    }
    function pow(x) {
      return positive ? Math.pow(base, x) : -Math.pow(base, -x);
    }
    function scale(x) {
      return linear(log(x));
    }
    scale.invert = function(x) {
      return pow(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      positive = x[0] >= 0;
      linear.domain((domain = x.map(Number)).map(log));
      return scale;
    };
    scale.base = function(_) {
      if (!arguments.length) return base;
      base = +_;
      linear.domain(domain.map(log));
      return scale;
    };
    scale.nice = function() {
      var niced = d3_scale_nice(domain.map(log), positive ? Math : d3_scale_logNiceNegative);
      linear.domain(niced);
      domain = niced.map(pow);
      return scale;
    };
    scale.ticks = function() {
      var extent = d3_scaleExtent(domain), ticks = [], u = extent[0], v = extent[1], i = Math.floor(log(u)), j = Math.ceil(log(v)), n = base % 1 ? 2 : base;
      if (isFinite(j - i)) {
        if (positive) {
          for (;i < j; i++) for (var k = 1; k < n; k++) ticks.push(pow(i) * k);
          ticks.push(pow(i));
        } else {
          ticks.push(pow(i));
          for (;i++ < j; ) for (var k = n - 1; k > 0; k--) ticks.push(pow(i) * k);
        }
        for (i = 0; ticks[i] < u; i++) {}
        for (j = ticks.length; ticks[j - 1] > v; j--) {}
        ticks = ticks.slice(i, j);
      }
      return ticks;
    };
    scale.tickFormat = function(n, format) {
      if (!arguments.length) return d3_scale_logFormat;
      if (arguments.length < 2) format = d3_scale_logFormat; else if (typeof format !== "function") format = d3.format(format);
      var k = Math.max(1, base * n / scale.ticks().length);
      return function(d) {
        var i = d / pow(Math.round(log(d)));
        if (i * base < base - .5) i *= base;
        return i <= k ? format(d) : "";
      };
    };
    scale.copy = function() {
      return d3_scale_log(linear.copy(), base, positive, domain);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  var d3_scale_logFormat = d3.format(".0e"), d3_scale_logNiceNegative = {
    floor: function(x) {
      return -Math.ceil(-x);
    },
    ceil: function(x) {
      return -Math.floor(-x);
    }
  };
  d3.scale.pow = function() {
    return d3_scale_pow(d3.scale.linear(), 1, [ 0, 1 ]);
  };
  function d3_scale_pow(linear, exponent, domain) {
    var powp = d3_scale_powPow(exponent), powb = d3_scale_powPow(1 / exponent);
    function scale(x) {
      return linear(powp(x));
    }
    scale.invert = function(x) {
      return powb(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      linear.domain((domain = x.map(Number)).map(powp));
      return scale;
    };
    scale.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    scale.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    scale.nice = function(m) {
      return scale.domain(d3_scale_linearNice(domain, m));
    };
    scale.exponent = function(x) {
      if (!arguments.length) return exponent;
      powp = d3_scale_powPow(exponent = x);
      powb = d3_scale_powPow(1 / exponent);
      linear.domain(domain.map(powp));
      return scale;
    };
    scale.copy = function() {
      return d3_scale_pow(linear.copy(), exponent, domain);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  function d3_scale_powPow(e) {
    return function(x) {
      return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
    };
  }
  d3.scale.sqrt = function() {
    return d3.scale.pow().exponent(.5);
  };
  d3.scale.ordinal = function() {
    return d3_scale_ordinal([], {
      t: "range",
      a: [ [] ]
    });
  };
  function d3_scale_ordinal(domain, ranger) {
    var index, range, rangeBand;
    function scale(x) {
      return range[((index.get(x) || (ranger.t === "range" ? index.set(x, domain.push(x)) : NaN)) - 1) % range.length];
    }
    function steps(start, step) {
      return d3.range(domain.length).map(function(i) {
        return start + step * i;
      });
    }
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = [];
      index = new d3_Map();
      var i = -1, n = x.length, xi;
      while (++i < n) if (!index.has(xi = x[i])) index.set(xi, domain.push(xi));
      return scale[ranger.t].apply(scale, ranger.a);
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      rangeBand = 0;
      ranger = {
        t: "range",
        a: arguments
      };
      return scale;
    };
    scale.rangePoints = function(x, padding) {
      if (arguments.length < 2) padding = 0;
      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = (start + stop) / 2, 
      0) : (stop - start) / (domain.length - 1 + padding);
      range = steps(start + step * padding / 2, step);
      rangeBand = 0;
      ranger = {
        t: "rangePoints",
        a: arguments
      };
      return scale;
    };
    scale.rangeRoundPoints = function(x, padding) {
      if (arguments.length < 2) padding = 0;
      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = stop = Math.round((start + stop) / 2), 
      0) : (stop - start) / (domain.length - 1 + padding) | 0;
      range = steps(start + Math.round(step * padding / 2 + (stop - start - (domain.length - 1 + padding) * step) / 2), step);
      rangeBand = 0;
      ranger = {
        t: "rangeRoundPoints",
        a: arguments
      };
      return scale;
    };
    scale.rangeBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = (stop - start) / (domain.length - padding + 2 * outerPadding);
      range = steps(start + step * outerPadding, step);
      if (reverse) range.reverse();
      rangeBand = step * (1 - padding);
      ranger = {
        t: "rangeBands",
        a: arguments
      };
      return scale;
    };
    scale.rangeRoundBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding));
      range = steps(start + Math.round((stop - start - (domain.length - padding) * step) / 2), step);
      if (reverse) range.reverse();
      rangeBand = Math.round(step * (1 - padding));
      ranger = {
        t: "rangeRoundBands",
        a: arguments
      };
      return scale;
    };
    scale.rangeBand = function() {
      return rangeBand;
    };
    scale.rangeExtent = function() {
      return d3_scaleExtent(ranger.a[0]);
    };
    scale.copy = function() {
      return d3_scale_ordinal(domain, ranger);
    };
    return scale.domain(domain);
  }
  d3.scale.category10 = function() {
    return d3.scale.ordinal().range(d3_category10);
  };
  d3.scale.category20 = function() {
    return d3.scale.ordinal().range(d3_category20);
  };
  d3.scale.category20b = function() {
    return d3.scale.ordinal().range(d3_category20b);
  };
  d3.scale.category20c = function() {
    return d3.scale.ordinal().range(d3_category20c);
  };
  var d3_category10 = [ 2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175 ].map(d3_rgbString);
  var d3_category20 = [ 2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725 ].map(d3_rgbString);
  var d3_category20b = [ 3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654 ].map(d3_rgbString);
  var d3_category20c = [ 3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081 ].map(d3_rgbString);
  d3.scale.quantile = function() {
    return d3_scale_quantile([], []);
  };
  function d3_scale_quantile(domain, range) {
    var thresholds;
    function rescale() {
      var k = 0, q = range.length;
      thresholds = [];
      while (++k < q) thresholds[k - 1] = d3.quantile(domain, k / q);
      return scale;
    }
    function scale(x) {
      if (!isNaN(x = +x)) return range[d3.bisect(thresholds, x)];
    }
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(d3_number).filter(d3_numeric).sort(d3_ascending);
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.quantiles = function() {
      return thresholds;
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      return y < 0 ? [ NaN, NaN ] : [ y > 0 ? thresholds[y - 1] : domain[0], y < thresholds.length ? thresholds[y] : domain[domain.length - 1] ];
    };
    scale.copy = function() {
      return d3_scale_quantile(domain, range);
    };
    return rescale();
  }
  d3.scale.quantize = function() {
    return d3_scale_quantize(0, 1, [ 0, 1 ]);
  };
  function d3_scale_quantize(x0, x1, range) {
    var kx, i;
    function scale(x) {
      return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
    }
    function rescale() {
      kx = range.length / (x1 - x0);
      i = range.length - 1;
      return scale;
    }
    scale.domain = function(x) {
      if (!arguments.length) return [ x0, x1 ];
      x0 = +x[0];
      x1 = +x[x.length - 1];
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      y = y < 0 ? NaN : y / kx + x0;
      return [ y, y + 1 / kx ];
    };
    scale.copy = function() {
      return d3_scale_quantize(x0, x1, range);
    };
    return rescale();
  }
  d3.scale.threshold = function() {
    return d3_scale_threshold([ .5 ], [ 0, 1 ]);
  };
  function d3_scale_threshold(domain, range) {
    function scale(x) {
      if (x <= x) return range[d3.bisect(domain, x)];
    }
    scale.domain = function(_) {
      if (!arguments.length) return domain;
      domain = _;
      return scale;
    };
    scale.range = function(_) {
      if (!arguments.length) return range;
      range = _;
      return scale;
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      return [ domain[y - 1], domain[y] ];
    };
    scale.copy = function() {
      return d3_scale_threshold(domain, range);
    };
    return scale;
  }
  d3.scale.identity = function() {
    return d3_scale_identity([ 0, 1 ]);
  };
  function d3_scale_identity(domain) {
    function identity(x) {
      return +x;
    }
    identity.invert = identity;
    identity.domain = identity.range = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(identity);
      return identity;
    };
    identity.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    identity.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    identity.copy = function() {
      return d3_scale_identity(domain);
    };
    return identity;
  }
  d3.svg = {};
  function d3_zero() {
    return 0;
  }
  d3.svg.arc = function() {
    var innerRadius = d3_svg_arcInnerRadius, outerRadius = d3_svg_arcOuterRadius, cornerRadius = d3_zero, padRadius = d3_svg_arcAuto, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle, padAngle = d3_svg_arcPadAngle;
    function arc() {
      var r0 = Math.max(0, +innerRadius.apply(this, arguments)), r1 = Math.max(0, +outerRadius.apply(this, arguments)), a0 = startAngle.apply(this, arguments) - halfπ, a1 = endAngle.apply(this, arguments) - halfπ, da = Math.abs(a1 - a0), cw = a0 > a1 ? 0 : 1;
      if (r1 < r0) rc = r1, r1 = r0, r0 = rc;
      if (da >= τε) return circleSegment(r1, cw) + (r0 ? circleSegment(r0, 1 - cw) : "") + "Z";
      var rc, cr, rp, ap, p0 = 0, p1 = 0, x0, y0, x1, y1, x2, y2, x3, y3, path = [];
      if (ap = (+padAngle.apply(this, arguments) || 0) / 2) {
        rp = padRadius === d3_svg_arcAuto ? Math.sqrt(r0 * r0 + r1 * r1) : +padRadius.apply(this, arguments);
        if (!cw) p1 *= -1;
        if (r1) p1 = d3_asin(rp / r1 * Math.sin(ap));
        if (r0) p0 = d3_asin(rp / r0 * Math.sin(ap));
      }
      if (r1) {
        x0 = r1 * Math.cos(a0 + p1);
        y0 = r1 * Math.sin(a0 + p1);
        x1 = r1 * Math.cos(a1 - p1);
        y1 = r1 * Math.sin(a1 - p1);
        var l1 = Math.abs(a1 - a0 - 2 * p1) <= π ? 0 : 1;
        if (p1 && d3_svg_arcSweep(x0, y0, x1, y1) === cw ^ l1) {
          var h1 = (a0 + a1) / 2;
          x0 = r1 * Math.cos(h1);
          y0 = r1 * Math.sin(h1);
          x1 = y1 = null;
        }
      } else {
        x0 = y0 = 0;
      }
      if (r0) {
        x2 = r0 * Math.cos(a1 - p0);
        y2 = r0 * Math.sin(a1 - p0);
        x3 = r0 * Math.cos(a0 + p0);
        y3 = r0 * Math.sin(a0 + p0);
        var l0 = Math.abs(a0 - a1 + 2 * p0) <= π ? 0 : 1;
        if (p0 && d3_svg_arcSweep(x2, y2, x3, y3) === 1 - cw ^ l0) {
          var h0 = (a0 + a1) / 2;
          x2 = r0 * Math.cos(h0);
          y2 = r0 * Math.sin(h0);
          x3 = y3 = null;
        }
      } else {
        x2 = y2 = 0;
      }
      if (da > ε && (rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments))) > .001) {
        cr = r0 < r1 ^ cw ? 0 : 1;
        var rc1 = rc, rc0 = rc;
        if (da < π) {
          var oc = x3 == null ? [ x2, y2 ] : x1 == null ? [ x0, y0 ] : d3_geom_polygonIntersect([ x0, y0 ], [ x3, y3 ], [ x1, y1 ], [ x2, y2 ]), ax = x0 - oc[0], ay = y0 - oc[1], bx = x1 - oc[0], by = y1 - oc[1], kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2), lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
          rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
        }
        if (x1 != null) {
          var t30 = d3_svg_arcCornerTangents(x3 == null ? [ x2, y2 ] : [ x3, y3 ], [ x0, y0 ], r1, rc1, cw), t12 = d3_svg_arcCornerTangents([ x1, y1 ], [ x2, y2 ], r1, rc1, cw);
          if (rc === rc1) {
            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 0,", cr, " ", t30[1], "A", r1, ",", r1, " 0 ", 1 - cw ^ d3_svg_arcSweep(t30[1][0], t30[1][1], t12[1][0], t12[1][1]), ",", cw, " ", t12[1], "A", rc1, ",", rc1, " 0 0,", cr, " ", t12[0]);
          } else {
            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 1,", cr, " ", t12[0]);
          }
        } else {
          path.push("M", x0, ",", y0);
        }
        if (x3 != null) {
          var t03 = d3_svg_arcCornerTangents([ x0, y0 ], [ x3, y3 ], r0, -rc0, cw), t21 = d3_svg_arcCornerTangents([ x2, y2 ], x1 == null ? [ x0, y0 ] : [ x1, y1 ], r0, -rc0, cw);
          if (rc === rc0) {
            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t21[1], "A", r0, ",", r0, " 0 ", cw ^ d3_svg_arcSweep(t21[1][0], t21[1][1], t03[1][0], t03[1][1]), ",", 1 - cw, " ", t03[1], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
          } else {
            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
          }
        } else {
          path.push("L", x2, ",", y2);
        }
      } else {
        path.push("M", x0, ",", y0);
        if (x1 != null) path.push("A", r1, ",", r1, " 0 ", l1, ",", cw, " ", x1, ",", y1);
        path.push("L", x2, ",", y2);
        if (x3 != null) path.push("A", r0, ",", r0, " 0 ", l0, ",", 1 - cw, " ", x3, ",", y3);
      }
      path.push("Z");
      return path.join("");
    }
    function circleSegment(r1, cw) {
      return "M0," + r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + -r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + r1;
    }
    arc.innerRadius = function(v) {
      if (!arguments.length) return innerRadius;
      innerRadius = d3_functor(v);
      return arc;
    };
    arc.outerRadius = function(v) {
      if (!arguments.length) return outerRadius;
      outerRadius = d3_functor(v);
      return arc;
    };
    arc.cornerRadius = function(v) {
      if (!arguments.length) return cornerRadius;
      cornerRadius = d3_functor(v);
      return arc;
    };
    arc.padRadius = function(v) {
      if (!arguments.length) return padRadius;
      padRadius = v == d3_svg_arcAuto ? d3_svg_arcAuto : d3_functor(v);
      return arc;
    };
    arc.startAngle = function(v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return arc;
    };
    arc.endAngle = function(v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return arc;
    };
    arc.padAngle = function(v) {
      if (!arguments.length) return padAngle;
      padAngle = d3_functor(v);
      return arc;
    };
    arc.centroid = function() {
      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - halfπ;
      return [ Math.cos(a) * r, Math.sin(a) * r ];
    };
    return arc;
  };
  var d3_svg_arcAuto = "auto";
  function d3_svg_arcInnerRadius(d) {
    return d.innerRadius;
  }
  function d3_svg_arcOuterRadius(d) {
    return d.outerRadius;
  }
  function d3_svg_arcStartAngle(d) {
    return d.startAngle;
  }
  function d3_svg_arcEndAngle(d) {
    return d.endAngle;
  }
  function d3_svg_arcPadAngle(d) {
    return d && d.padAngle;
  }
  function d3_svg_arcSweep(x0, y0, x1, y1) {
    return (x0 - x1) * y0 - (y0 - y1) * x0 > 0 ? 0 : 1;
  }
  function d3_svg_arcCornerTangents(p0, p1, r1, rc, cw) {
    var x01 = p0[0] - p1[0], y01 = p0[1] - p1[1], lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x1 = p0[0] + ox, y1 = p0[1] + oy, x2 = p1[0] + ox, y2 = p1[1] + oy, x3 = (x1 + x2) / 2, y3 = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, d2 = dx * dx + dy * dy, r = r1 - rc, D = x1 * y2 - x2 * y1, d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x3, dy0 = cy0 - y3, dx1 = cx1 - x3, dy1 = cy1 - y3;
    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
    return [ [ cx0 - ox, cy0 - oy ], [ cx0 * r1 / r, cy0 * r1 / r ] ];
  }
  function d3_svg_line(projection) {
    var x = d3_geom_pointX, y = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, tension = .7;
    function line(data) {
      var segments = [], points = [], i = -1, n = data.length, d, fx = d3_functor(x), fy = d3_functor(y);
      function segment() {
        segments.push("M", interpolate(projection(points), tension));
      }
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points.push([ +fx.call(this, d, i), +fy.call(this, d, i) ]);
        } else if (points.length) {
          segment();
          points = [];
        }
      }
      if (points.length) segment();
      return segments.length ? segments.join("") : null;
    }
    line.x = function(_) {
      if (!arguments.length) return x;
      x = _;
      return line;
    };
    line.y = function(_) {
      if (!arguments.length) return y;
      y = _;
      return line;
    };
    line.defined = function(_) {
      if (!arguments.length) return defined;
      defined = _;
      return line;
    };
    line.interpolate = function(_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      return line;
    };
    line.tension = function(_) {
      if (!arguments.length) return tension;
      tension = _;
      return line;
    };
    return line;
  }
  d3.svg.line = function() {
    return d3_svg_line(d3_identity);
  };
  var d3_svg_lineInterpolators = d3.map({
    linear: d3_svg_lineLinear,
    "linear-closed": d3_svg_lineLinearClosed,
    step: d3_svg_lineStep,
    "step-before": d3_svg_lineStepBefore,
    "step-after": d3_svg_lineStepAfter,
    basis: d3_svg_lineBasis,
    "basis-open": d3_svg_lineBasisOpen,
    "basis-closed": d3_svg_lineBasisClosed,
    bundle: d3_svg_lineBundle,
    cardinal: d3_svg_lineCardinal,
    "cardinal-open": d3_svg_lineCardinalOpen,
    "cardinal-closed": d3_svg_lineCardinalClosed,
    monotone: d3_svg_lineMonotone
  });
  d3_svg_lineInterpolators.forEach(function(key, value) {
    value.key = key;
    value.closed = /-closed$/.test(key);
  });
  function d3_svg_lineLinear(points) {
    return points.length > 1 ? points.join("L") : points + "Z";
  }
  function d3_svg_lineLinearClosed(points) {
    return points.join("L") + "Z";
  }
  function d3_svg_lineStep(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("H", (p[0] + (p = points[i])[0]) / 2, "V", p[1]);
    if (n > 1) path.push("H", p[0]);
    return path.join("");
  }
  function d3_svg_lineStepBefore(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("V", (p = points[i])[1], "H", p[0]);
    return path.join("");
  }
  function d3_svg_lineStepAfter(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("H", (p = points[i])[0], "V", p[1]);
    return path.join("");
  }
  function d3_svg_lineCardinalOpen(points, tension) {
    return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, -1), d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineCardinalClosed(points, tension) {
    return points.length < 3 ? d3_svg_lineLinearClosed(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), 
    points), d3_svg_lineCardinalTangents([ points[points.length - 2] ].concat(points, [ points[1] ]), tension));
  }
  function d3_svg_lineCardinal(points, tension) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineHermite(points, tangents) {
    if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
      return d3_svg_lineLinear(points);
    }
    var quad = points.length != tangents.length, path = "", p0 = points[0], p = points[1], t0 = tangents[0], t = t0, pi = 1;
    if (quad) {
      path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
      p0 = points[1];
      pi = 2;
    }
    if (tangents.length > 1) {
      t = tangents[1];
      p = points[pi];
      pi++;
      path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
      for (var i = 2; i < tangents.length; i++, pi++) {
        p = points[pi];
        t = tangents[i];
        path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
      }
    }
    if (quad) {
      var lp = points[pi];
      path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
    }
    return path;
  }
  function d3_svg_lineCardinalTangents(points, tension) {
    var tangents = [], a = (1 - tension) / 2, p0, p1 = points[0], p2 = points[1], i = 1, n = points.length;
    while (++i < n) {
      p0 = p1;
      p1 = p2;
      p2 = points[i];
      tangents.push([ a * (p2[0] - p0[0]), a * (p2[1] - p0[1]) ]);
    }
    return tangents;
  }
  function d3_svg_lineBasis(points) {
    if (points.length < 3) return d3_svg_lineLinear(points);
    var i = 1, n = points.length, pi = points[0], x0 = pi[0], y0 = pi[1], px = [ x0, x0, x0, (pi = points[1])[0] ], py = [ y0, y0, y0, pi[1] ], path = [ x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
    points.push(points[n - 1]);
    while (++i <= n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    points.pop();
    path.push("L", pi);
    return path.join("");
  }
  function d3_svg_lineBasisOpen(points) {
    if (points.length < 4) return d3_svg_lineLinear(points);
    var path = [], i = -1, n = points.length, pi, px = [ 0 ], py = [ 0 ];
    while (++i < 3) {
      pi = points[i];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
    --i;
    while (++i < n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBasisClosed(points) {
    var path, i = -1, n = points.length, m = n + 4, pi, px = [], py = [];
    while (++i < 4) {
      pi = points[i % n];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path = [ d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
    --i;
    while (++i < m) {
      pi = points[i % n];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBundle(points, tension) {
    var n = points.length - 1;
    if (n) {
      var x0 = points[0][0], y0 = points[0][1], dx = points[n][0] - x0, dy = points[n][1] - y0, i = -1, p, t;
      while (++i <= n) {
        p = points[i];
        t = i / n;
        p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
        p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
      }
    }
    return d3_svg_lineBasis(points);
  }
  function d3_svg_lineDot4(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }
  var d3_svg_lineBasisBezier1 = [ 0, 2 / 3, 1 / 3, 0 ], d3_svg_lineBasisBezier2 = [ 0, 1 / 3, 2 / 3, 0 ], d3_svg_lineBasisBezier3 = [ 0, 1 / 6, 2 / 3, 1 / 6 ];
  function d3_svg_lineBasisBezier(path, x, y) {
    path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
  }
  function d3_svg_lineSlope(p0, p1) {
    return (p1[1] - p0[1]) / (p1[0] - p0[0]);
  }
  function d3_svg_lineFiniteDifferences(points) {
    var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = d3_svg_lineSlope(p0, p1);
    while (++i < j) {
      m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
    }
    m[i] = d;
    return m;
  }
  function d3_svg_lineMonotoneTangents(points) {
    var tangents = [], d, a, b, s, m = d3_svg_lineFiniteDifferences(points), i = -1, j = points.length - 1;
    while (++i < j) {
      d = d3_svg_lineSlope(points[i], points[i + 1]);
      if (abs(d) < ε) {
        m[i] = m[i + 1] = 0;
      } else {
        a = m[i] / d;
        b = m[i + 1] / d;
        s = a * a + b * b;
        if (s > 9) {
          s = d * 3 / Math.sqrt(s);
          m[i] = s * a;
          m[i + 1] = s * b;
        }
      }
    }
    i = -1;
    while (++i <= j) {
      s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
      tangents.push([ s || 0, m[i] * s || 0 ]);
    }
    return tangents;
  }
  function d3_svg_lineMonotone(points) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
  }
  d3.svg.line.radial = function() {
    var line = d3_svg_line(d3_svg_lineRadial);
    line.radius = line.x, delete line.x;
    line.angle = line.y, delete line.y;
    return line;
  };
  function d3_svg_lineRadial(points) {
    var point, i = -1, n = points.length, r, a;
    while (++i < n) {
      point = points[i];
      r = point[0];
      a = point[1] - halfπ;
      point[0] = r * Math.cos(a);
      point[1] = r * Math.sin(a);
    }
    return points;
  }
  function d3_svg_area(projection) {
    var x0 = d3_geom_pointX, x1 = d3_geom_pointX, y0 = 0, y1 = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, interpolateReverse = interpolate, L = "L", tension = .7;
    function area(data) {
      var segments = [], points0 = [], points1 = [], i = -1, n = data.length, d, fx0 = d3_functor(x0), fy0 = d3_functor(y0), fx1 = x0 === x1 ? function() {
        return x;
      } : d3_functor(x1), fy1 = y0 === y1 ? function() {
        return y;
      } : d3_functor(y1), x, y;
      function segment() {
        segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
      }
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points0.push([ x = +fx0.call(this, d, i), y = +fy0.call(this, d, i) ]);
          points1.push([ +fx1.call(this, d, i), +fy1.call(this, d, i) ]);
        } else if (points0.length) {
          segment();
          points0 = [];
          points1 = [];
        }
      }
      if (points0.length) segment();
      return segments.length ? segments.join("") : null;
    }
    area.x = function(_) {
      if (!arguments.length) return x1;
      x0 = x1 = _;
      return area;
    };
    area.x0 = function(_) {
      if (!arguments.length) return x0;
      x0 = _;
      return area;
    };
    area.x1 = function(_) {
      if (!arguments.length) return x1;
      x1 = _;
      return area;
    };
    area.y = function(_) {
      if (!arguments.length) return y1;
      y0 = y1 = _;
      return area;
    };
    area.y0 = function(_) {
      if (!arguments.length) return y0;
      y0 = _;
      return area;
    };
    area.y1 = function(_) {
      if (!arguments.length) return y1;
      y1 = _;
      return area;
    };
    area.defined = function(_) {
      if (!arguments.length) return defined;
      defined = _;
      return area;
    };
    area.interpolate = function(_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      interpolateReverse = interpolate.reverse || interpolate;
      L = interpolate.closed ? "M" : "L";
      return area;
    };
    area.tension = function(_) {
      if (!arguments.length) return tension;
      tension = _;
      return area;
    };
    return area;
  }
  d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
  d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
  d3.svg.area = function() {
    return d3_svg_area(d3_identity);
  };
  d3.svg.area.radial = function() {
    var area = d3_svg_area(d3_svg_lineRadial);
    area.radius = area.x, delete area.x;
    area.innerRadius = area.x0, delete area.x0;
    area.outerRadius = area.x1, delete area.x1;
    area.angle = area.y, delete area.y;
    area.startAngle = area.y0, delete area.y0;
    area.endAngle = area.y1, delete area.y1;
    return area;
  };
  d3.svg.chord = function() {
    var source = d3_source, target = d3_target, radius = d3_svg_chordRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
    function chord(d, i) {
      var s = subgroup(this, source, d, i), t = subgroup(this, target, d, i);
      return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
    }
    function subgroup(self, f, d, i) {
      var subgroup = f.call(self, d, i), r = radius.call(self, subgroup, i), a0 = startAngle.call(self, subgroup, i) - halfπ, a1 = endAngle.call(self, subgroup, i) - halfπ;
      return {
        r: r,
        a0: a0,
        a1: a1,
        p0: [ r * Math.cos(a0), r * Math.sin(a0) ],
        p1: [ r * Math.cos(a1), r * Math.sin(a1) ]
      };
    }
    function equals(a, b) {
      return a.a0 == b.a0 && a.a1 == b.a1;
    }
    function arc(r, p, a) {
      return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p;
    }
    function curve(r0, p0, r1, p1) {
      return "Q 0,0 " + p1;
    }
    chord.radius = function(v) {
      if (!arguments.length) return radius;
      radius = d3_functor(v);
      return chord;
    };
    chord.source = function(v) {
      if (!arguments.length) return source;
      source = d3_functor(v);
      return chord;
    };
    chord.target = function(v) {
      if (!arguments.length) return target;
      target = d3_functor(v);
      return chord;
    };
    chord.startAngle = function(v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return chord;
    };
    chord.endAngle = function(v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return chord;
    };
    return chord;
  };
  function d3_svg_chordRadius(d) {
    return d.radius;
  }
  d3.svg.diagonal = function() {
    var source = d3_source, target = d3_target, projection = d3_svg_diagonalProjection;
    function diagonal(d, i) {
      var p0 = source.call(this, d, i), p3 = target.call(this, d, i), m = (p0.y + p3.y) / 2, p = [ p0, {
        x: p0.x,
        y: m
      }, {
        x: p3.x,
        y: m
      }, p3 ];
      p = p.map(projection);
      return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
    }
    diagonal.source = function(x) {
      if (!arguments.length) return source;
      source = d3_functor(x);
      return diagonal;
    };
    diagonal.target = function(x) {
      if (!arguments.length) return target;
      target = d3_functor(x);
      return diagonal;
    };
    diagonal.projection = function(x) {
      if (!arguments.length) return projection;
      projection = x;
      return diagonal;
    };
    return diagonal;
  };
  function d3_svg_diagonalProjection(d) {
    return [ d.x, d.y ];
  }
  d3.svg.diagonal.radial = function() {
    var diagonal = d3.svg.diagonal(), projection = d3_svg_diagonalProjection, projection_ = diagonal.projection;
    diagonal.projection = function(x) {
      return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
    };
    return diagonal;
  };
  function d3_svg_diagonalRadialProjection(projection) {
    return function() {
      var d = projection.apply(this, arguments), r = d[0], a = d[1] - halfπ;
      return [ r * Math.cos(a), r * Math.sin(a) ];
    };
  }
  d3.svg.symbol = function() {
    var type = d3_svg_symbolType, size = d3_svg_symbolSize;
    function symbol(d, i) {
      return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
    }
    symbol.type = function(x) {
      if (!arguments.length) return type;
      type = d3_functor(x);
      return symbol;
    };
    symbol.size = function(x) {
      if (!arguments.length) return size;
      size = d3_functor(x);
      return symbol;
    };
    return symbol;
  };
  function d3_svg_symbolSize() {
    return 64;
  }
  function d3_svg_symbolType() {
    return "circle";
  }
  function d3_svg_symbolCircle(size) {
    var r = Math.sqrt(size / π);
    return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
  }
  var d3_svg_symbols = d3.map({
    circle: d3_svg_symbolCircle,
    cross: function(size) {
      var r = Math.sqrt(size / 5) / 2;
      return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
    },
    diamond: function(size) {
      var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)), rx = ry * d3_svg_symbolTan30;
      return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
    },
    square: function(size) {
      var r = Math.sqrt(size) / 2;
      return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
    },
    "triangle-down": function(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
    },
    "triangle-up": function(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
    }
  });
  d3.svg.symbolTypes = d3_svg_symbols.keys();
  var d3_svg_symbolSqrt3 = Math.sqrt(3), d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
  d3_selectionPrototype.transition = function(name) {
    var id = d3_transitionInheritId || ++d3_transitionId, ns = d3_transitionNamespace(name), subgroups = [], subgroup, node, transition = d3_transitionInherit || {
      time: Date.now(),
      ease: d3_ease_cubicInOut,
      delay: 0,
      duration: 250
    };
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) d3_transitionNode(node, i, ns, id, transition);
        subgroup.push(node);
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_selectionPrototype.interrupt = function(name) {
    return this.each(name == null ? d3_selection_interrupt : d3_selection_interruptNS(d3_transitionNamespace(name)));
  };
  var d3_selection_interrupt = d3_selection_interruptNS(d3_transitionNamespace());
  function d3_selection_interruptNS(ns) {
    return function() {
      var lock, activeId, active;
      if ((lock = this[ns]) && (active = lock[activeId = lock.active])) {
        active.timer.c = null;
        active.timer.t = NaN;
        if (--lock.count) delete lock[activeId]; else delete this[ns];
        lock.active += .5;
        active.event && active.event.interrupt.call(this, this.__data__, active.index);
      }
    };
  }
  function d3_transition(groups, ns, id) {
    d3_subclass(groups, d3_transitionPrototype);
    groups.namespace = ns;
    groups.id = id;
    return groups;
  }
  var d3_transitionPrototype = [], d3_transitionId = 0, d3_transitionInheritId, d3_transitionInherit;
  d3_transitionPrototype.call = d3_selectionPrototype.call;
  d3_transitionPrototype.empty = d3_selectionPrototype.empty;
  d3_transitionPrototype.node = d3_selectionPrototype.node;
  d3_transitionPrototype.size = d3_selectionPrototype.size;
  d3.transition = function(selection, name) {
    return selection && selection.transition ? d3_transitionInheritId ? selection.transition(name) : selection : d3.selection().transition(selection);
  };
  d3.transition.prototype = d3_transitionPrototype;
  d3_transitionPrototype.select = function(selector) {
    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnode, node;
    selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i, j))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          d3_transitionNode(subnode, i, ns, id, node[ns][id]);
          subgroup.push(subnode);
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_transitionPrototype.selectAll = function(selector) {
    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnodes, node, subnode, transition;
    selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          transition = node[ns][id];
          subnodes = selector.call(node, node.__data__, i, j);
          subgroups.push(subgroup = []);
          for (var k = -1, o = subnodes.length; ++k < o; ) {
            if (subnode = subnodes[k]) d3_transitionNode(subnode, k, ns, id, transition);
            subgroup.push(subnode);
          }
        }
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_transitionPrototype.filter = function(filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
          subgroup.push(node);
        }
      }
    }
    return d3_transition(subgroups, this.namespace, this.id);
  };
  d3_transitionPrototype.tween = function(name, tween) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 2) return this.node()[ns][id].tween.get(name);
    return d3_selection_each(this, tween == null ? function(node) {
      node[ns][id].tween.remove(name);
    } : function(node) {
      node[ns][id].tween.set(name, tween);
    });
  };
  function d3_transition_tween(groups, name, value, tween) {
    var id = groups.id, ns = groups.namespace;
    return d3_selection_each(groups, typeof value === "function" ? function(node, i, j) {
      node[ns][id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
    } : (value = tween(value), function(node) {
      node[ns][id].tween.set(name, value);
    }));
  }
  d3_transitionPrototype.attr = function(nameNS, value) {
    if (arguments.length < 2) {
      for (value in nameNS) this.attr(value, nameNS[value]);
      return this;
    }
    var interpolate = nameNS == "transform" ? d3_interpolateTransform : d3_interpolate, name = d3.ns.qualify(nameNS);
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    function attrTween(b) {
      return b == null ? attrNull : (b += "", function() {
        var a = this.getAttribute(name), i;
        return a !== b && (i = interpolate(a, b), function(t) {
          this.setAttribute(name, i(t));
        });
      });
    }
    function attrTweenNS(b) {
      return b == null ? attrNullNS : (b += "", function() {
        var a = this.getAttributeNS(name.space, name.local), i;
        return a !== b && (i = interpolate(a, b), function(t) {
          this.setAttributeNS(name.space, name.local, i(t));
        });
      });
    }
    return d3_transition_tween(this, "attr." + nameNS, value, name.local ? attrTweenNS : attrTween);
  };
  d3_transitionPrototype.attrTween = function(nameNS, tween) {
    var name = d3.ns.qualify(nameNS);
    function attrTween(d, i) {
      var f = tween.call(this, d, i, this.getAttribute(name));
      return f && function(t) {
        this.setAttribute(name, f(t));
      };
    }
    function attrTweenNS(d, i) {
      var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
      return f && function(t) {
        this.setAttributeNS(name.space, name.local, f(t));
      };
    }
    return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
  };
  d3_transitionPrototype.style = function(name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";
        for (priority in name) this.style(priority, name[priority], value);
        return this;
      }
      priority = "";
    }
    function styleNull() {
      this.style.removeProperty(name);
    }
    function styleString(b) {
      return b == null ? styleNull : (b += "", function() {
        var a = d3_window(this).getComputedStyle(this, null).getPropertyValue(name), i;
        return a !== b && (i = d3_interpolate(a, b), function(t) {
          this.style.setProperty(name, i(t), priority);
        });
      });
    }
    return d3_transition_tween(this, "style." + name, value, styleString);
  };
  d3_transitionPrototype.styleTween = function(name, tween, priority) {
    if (arguments.length < 3) priority = "";
    function styleTween(d, i) {
      var f = tween.call(this, d, i, d3_window(this).getComputedStyle(this, null).getPropertyValue(name));
      return f && function(t) {
        this.style.setProperty(name, f(t), priority);
      };
    }
    return this.tween("style." + name, styleTween);
  };
  d3_transitionPrototype.text = function(value) {
    return d3_transition_tween(this, "text", value, d3_transition_text);
  };
  function d3_transition_text(b) {
    if (b == null) b = "";
    return function() {
      this.textContent = b;
    };
  }
  d3_transitionPrototype.remove = function() {
    var ns = this.namespace;
    return this.each("end.transition", function() {
      var p;
      if (this[ns].count < 2 && (p = this.parentNode)) p.removeChild(this);
    });
  };
  d3_transitionPrototype.ease = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].ease;
    if (typeof value !== "function") value = d3.ease.apply(d3, arguments);
    return d3_selection_each(this, function(node) {
      node[ns][id].ease = value;
    });
  };
  d3_transitionPrototype.delay = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].delay;
    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
      node[ns][id].delay = +value.call(node, node.__data__, i, j);
    } : (value = +value, function(node) {
      node[ns][id].delay = value;
    }));
  };
  d3_transitionPrototype.duration = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].duration;
    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
      node[ns][id].duration = Math.max(1, value.call(node, node.__data__, i, j));
    } : (value = Math.max(1, value), function(node) {
      node[ns][id].duration = value;
    }));
  };
  d3_transitionPrototype.each = function(type, listener) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 2) {
      var inherit = d3_transitionInherit, inheritId = d3_transitionInheritId;
      try {
        d3_transitionInheritId = id;
        d3_selection_each(this, function(node, i, j) {
          d3_transitionInherit = node[ns][id];
          type.call(node, node.__data__, i, j);
        });
      } finally {
        d3_transitionInherit = inherit;
        d3_transitionInheritId = inheritId;
      }
    } else {
      d3_selection_each(this, function(node) {
        var transition = node[ns][id];
        (transition.event || (transition.event = d3.dispatch("start", "end", "interrupt"))).on(type, listener);
      });
    }
    return this;
  };
  d3_transitionPrototype.transition = function() {
    var id0 = this.id, id1 = ++d3_transitionId, ns = this.namespace, subgroups = [], subgroup, group, node, transition;
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if (node = group[i]) {
          transition = node[ns][id0];
          d3_transitionNode(node, i, ns, id1, {
            time: transition.time,
            ease: transition.ease,
            delay: transition.delay + transition.duration,
            duration: transition.duration
          });
        }
        subgroup.push(node);
      }
    }
    return d3_transition(subgroups, ns, id1);
  };
  function d3_transitionNamespace(name) {
    return name == null ? "__transition__" : "__transition_" + name + "__";
  }
  function d3_transitionNode(node, i, ns, id, inherit) {
    var lock = node[ns] || (node[ns] = {
      active: 0,
      count: 0
    }), transition = lock[id], time, timer, duration, ease, tweens;
    function schedule(elapsed) {
      var delay = transition.delay;
      timer.t = delay + time;
      if (delay <= elapsed) return start(elapsed - delay);
      timer.c = start;
    }
    function start(elapsed) {
      var activeId = lock.active, active = lock[activeId];
      if (active) {
        active.timer.c = null;
        active.timer.t = NaN;
        --lock.count;
        delete lock[activeId];
        active.event && active.event.interrupt.call(node, node.__data__, active.index);
      }
      for (var cancelId in lock) {
        if (+cancelId < id) {
          var cancel = lock[cancelId];
          cancel.timer.c = null;
          cancel.timer.t = NaN;
          --lock.count;
          delete lock[cancelId];
        }
      }
      timer.c = tick;
      d3_timer(function() {
        if (timer.c && tick(elapsed || 1)) {
          timer.c = null;
          timer.t = NaN;
        }
        return 1;
      }, 0, time);
      lock.active = id;
      transition.event && transition.event.start.call(node, node.__data__, i);
      tweens = [];
      transition.tween.forEach(function(key, value) {
        if (value = value.call(node, node.__data__, i)) {
          tweens.push(value);
        }
      });
      ease = transition.ease;
      duration = transition.duration;
    }
    function tick(elapsed) {
      var t = elapsed / duration, e = ease(t), n = tweens.length;
      while (n > 0) {
        tweens[--n].call(node, e);
      }
      if (t >= 1) {
        transition.event && transition.event.end.call(node, node.__data__, i);
        if (--lock.count) delete lock[id]; else delete node[ns];
        return 1;
      }
    }
    if (!transition) {
      time = inherit.time;
      timer = d3_timer(schedule, 0, time);
      transition = lock[id] = {
        tween: new d3_Map(),
        time: time,
        timer: timer,
        delay: inherit.delay,
        duration: inherit.duration,
        ease: inherit.ease,
        index: i
      };
      inherit = null;
      ++lock.count;
    }
  }
  d3.svg.axis = function() {
    var scale = d3.scale.linear(), orient = d3_svg_axisDefaultOrient, innerTickSize = 6, outerTickSize = 6, tickPadding = 3, tickArguments_ = [ 10 ], tickValues = null, tickFormat_;
    function axis(g) {
      g.each(function() {
        var g = d3.select(this);
        var scale0 = this.__chart__ || scale, scale1 = this.__chart__ = scale.copy();
        var ticks = tickValues == null ? scale1.ticks ? scale1.ticks.apply(scale1, tickArguments_) : scale1.domain() : tickValues, tickFormat = tickFormat_ == null ? scale1.tickFormat ? scale1.tickFormat.apply(scale1, tickArguments_) : d3_identity : tickFormat_, tick = g.selectAll(".tick").data(ticks, scale1), tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ε), tickExit = d3.transition(tick.exit()).style("opacity", ε).remove(), tickUpdate = d3.transition(tick.order()).style("opacity", 1), tickSpacing = Math.max(innerTickSize, 0) + tickPadding, tickTransform;
        var range = d3_scaleRange(scale1), path = g.selectAll(".domain").data([ 0 ]), pathUpdate = (path.enter().append("path").attr("class", "domain"), 
        d3.transition(path));
        tickEnter.append("line");
        tickEnter.append("text");
        var lineEnter = tickEnter.select("line"), lineUpdate = tickUpdate.select("line"), text = tick.select("text").text(tickFormat), textEnter = tickEnter.select("text"), textUpdate = tickUpdate.select("text"), sign = orient === "top" || orient === "left" ? -1 : 1, x1, x2, y1, y2;
        if (orient === "bottom" || orient === "top") {
          tickTransform = d3_svg_axisX, x1 = "x", y1 = "y", x2 = "x2", y2 = "y2";
          text.attr("dy", sign < 0 ? "0em" : ".71em").style("text-anchor", "middle");
          pathUpdate.attr("d", "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize);
        } else {
          tickTransform = d3_svg_axisY, x1 = "y", y1 = "x", x2 = "y2", y2 = "x2";
          text.attr("dy", ".32em").style("text-anchor", sign < 0 ? "end" : "start");
          pathUpdate.attr("d", "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize);
        }
        lineEnter.attr(y2, sign * innerTickSize);
        textEnter.attr(y1, sign * tickSpacing);
        lineUpdate.attr(x2, 0).attr(y2, sign * innerTickSize);
        textUpdate.attr(x1, 0).attr(y1, sign * tickSpacing);
        if (scale1.rangeBand) {
          var x = scale1, dx = x.rangeBand() / 2;
          scale0 = scale1 = function(d) {
            return x(d) + dx;
          };
        } else if (scale0.rangeBand) {
          scale0 = scale1;
        } else {
          tickExit.call(tickTransform, scale1, scale0);
        }
        tickEnter.call(tickTransform, scale0, scale1);
        tickUpdate.call(tickTransform, scale1, scale1);
      });
    }
    axis.scale = function(x) {
      if (!arguments.length) return scale;
      scale = x;
      return axis;
    };
    axis.orient = function(x) {
      if (!arguments.length) return orient;
      orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient;
      return axis;
    };
    axis.ticks = function() {
      if (!arguments.length) return tickArguments_;
      tickArguments_ = d3_array(arguments);
      return axis;
    };
    axis.tickValues = function(x) {
      if (!arguments.length) return tickValues;
      tickValues = x;
      return axis;
    };
    axis.tickFormat = function(x) {
      if (!arguments.length) return tickFormat_;
      tickFormat_ = x;
      return axis;
    };
    axis.tickSize = function(x) {
      var n = arguments.length;
      if (!n) return innerTickSize;
      innerTickSize = +x;
      outerTickSize = +arguments[n - 1];
      return axis;
    };
    axis.innerTickSize = function(x) {
      if (!arguments.length) return innerTickSize;
      innerTickSize = +x;
      return axis;
    };
    axis.outerTickSize = function(x) {
      if (!arguments.length) return outerTickSize;
      outerTickSize = +x;
      return axis;
    };
    axis.tickPadding = function(x) {
      if (!arguments.length) return tickPadding;
      tickPadding = +x;
      return axis;
    };
    axis.tickSubdivide = function() {
      return arguments.length && axis;
    };
    return axis;
  };
  var d3_svg_axisDefaultOrient = "bottom", d3_svg_axisOrients = {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  };
  function d3_svg_axisX(selection, x0, x1) {
    selection.attr("transform", function(d) {
      var v0 = x0(d);
      return "translate(" + (isFinite(v0) ? v0 : x1(d)) + ",0)";
    });
  }
  function d3_svg_axisY(selection, y0, y1) {
    selection.attr("transform", function(d) {
      var v0 = y0(d);
      return "translate(0," + (isFinite(v0) ? v0 : y1(d)) + ")";
    });
  }
  d3.svg.brush = function() {
    var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"), x = null, y = null, xExtent = [ 0, 0 ], yExtent = [ 0, 0 ], xExtentDomain, yExtentDomain, xClamp = true, yClamp = true, resizes = d3_svg_brushResizes[0];
    function brush(g) {
      g.each(function() {
        var g = d3.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
        var background = g.selectAll(".background").data([ 0 ]);
        background.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
        g.selectAll(".extent").data([ 0 ]).enter().append("rect").attr("class", "extent").style("cursor", "move");
        var resize = g.selectAll(".resize").data(resizes, d3_identity);
        resize.exit().remove();
        resize.enter().append("g").attr("class", function(d) {
          return "resize " + d;
        }).style("cursor", function(d) {
          return d3_svg_brushCursor[d];
        }).append("rect").attr("x", function(d) {
          return /[ew]$/.test(d) ? -3 : null;
        }).attr("y", function(d) {
          return /^[ns]/.test(d) ? -3 : null;
        }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
        resize.style("display", brush.empty() ? "none" : null);
        var gUpdate = d3.transition(g), backgroundUpdate = d3.transition(background), range;
        if (x) {
          range = d3_scaleRange(x);
          backgroundUpdate.attr("x", range[0]).attr("width", range[1] - range[0]);
          redrawX(gUpdate);
        }
        if (y) {
          range = d3_scaleRange(y);
          backgroundUpdate.attr("y", range[0]).attr("height", range[1] - range[0]);
          redrawY(gUpdate);
        }
        redraw(gUpdate);
      });
    }
    brush.event = function(g) {
      g.each(function() {
        var event_ = event.of(this, arguments), extent1 = {
          x: xExtent,
          y: yExtent,
          i: xExtentDomain,
          j: yExtentDomain
        }, extent0 = this.__chart__ || extent1;
        this.__chart__ = extent1;
        if (d3_transitionInheritId) {
          d3.select(this).transition().each("start.brush", function() {
            xExtentDomain = extent0.i;
            yExtentDomain = extent0.j;
            xExtent = extent0.x;
            yExtent = extent0.y;
            event_({
              type: "brushstart"
            });
          }).tween("brush:brush", function() {
            var xi = d3_interpolateArray(xExtent, extent1.x), yi = d3_interpolateArray(yExtent, extent1.y);
            xExtentDomain = yExtentDomain = null;
            return function(t) {
              xExtent = extent1.x = xi(t);
              yExtent = extent1.y = yi(t);
              event_({
                type: "brush",
                mode: "resize"
              });
            };
          }).each("end.brush", function() {
            xExtentDomain = extent1.i;
            yExtentDomain = extent1.j;
            event_({
              type: "brush",
              mode: "resize"
            });
            event_({
              type: "brushend"
            });
          });
        } else {
          event_({
            type: "brushstart"
          });
          event_({
            type: "brush",
            mode: "resize"
          });
          event_({
            type: "brushend"
          });
        }
      });
    };
    function redraw(g) {
      g.selectAll(".resize").attr("transform", function(d) {
        return "translate(" + xExtent[+/e$/.test(d)] + "," + yExtent[+/^s/.test(d)] + ")";
      });
    }
    function redrawX(g) {
      g.select(".extent").attr("x", xExtent[0]);
      g.selectAll(".extent,.n>rect,.s>rect").attr("width", xExtent[1] - xExtent[0]);
    }
    function redrawY(g) {
      g.select(".extent").attr("y", yExtent[0]);
      g.selectAll(".extent,.e>rect,.w>rect").attr("height", yExtent[1] - yExtent[0]);
    }
    function brushstart() {
      var target = this, eventTarget = d3.select(d3.event.target), event_ = event.of(target, arguments), g = d3.select(target), resizing = eventTarget.datum(), resizingX = !/^(n|s)$/.test(resizing) && x, resizingY = !/^(e|w)$/.test(resizing) && y, dragging = eventTarget.classed("extent"), dragRestore = d3_event_dragSuppress(target), center, origin = d3.mouse(target), offset;
      var w = d3.select(d3_window(target)).on("keydown.brush", keydown).on("keyup.brush", keyup);
      if (d3.event.changedTouches) {
        w.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
      } else {
        w.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
      }
      g.interrupt().selectAll("*").interrupt();
      if (dragging) {
        origin[0] = xExtent[0] - origin[0];
        origin[1] = yExtent[0] - origin[1];
      } else if (resizing) {
        var ex = +/w$/.test(resizing), ey = +/^n/.test(resizing);
        offset = [ xExtent[1 - ex] - origin[0], yExtent[1 - ey] - origin[1] ];
        origin[0] = xExtent[ex];
        origin[1] = yExtent[ey];
      } else if (d3.event.altKey) center = origin.slice();
      g.style("pointer-events", "none").selectAll(".resize").style("display", null);
      d3.select("body").style("cursor", eventTarget.style("cursor"));
      event_({
        type: "brushstart"
      });
      brushmove();
      function keydown() {
        if (d3.event.keyCode == 32) {
          if (!dragging) {
            center = null;
            origin[0] -= xExtent[1];
            origin[1] -= yExtent[1];
            dragging = 2;
          }
          d3_eventPreventDefault();
        }
      }
      function keyup() {
        if (d3.event.keyCode == 32 && dragging == 2) {
          origin[0] += xExtent[1];
          origin[1] += yExtent[1];
          dragging = 0;
          d3_eventPreventDefault();
        }
      }
      function brushmove() {
        var point = d3.mouse(target), moved = false;
        if (offset) {
          point[0] += offset[0];
          point[1] += offset[1];
        }
        if (!dragging) {
          if (d3.event.altKey) {
            if (!center) center = [ (xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2 ];
            origin[0] = xExtent[+(point[0] < center[0])];
            origin[1] = yExtent[+(point[1] < center[1])];
          } else center = null;
        }
        if (resizingX && move1(point, x, 0)) {
          redrawX(g);
          moved = true;
        }
        if (resizingY && move1(point, y, 1)) {
          redrawY(g);
          moved = true;
        }
        if (moved) {
          redraw(g);
          event_({
            type: "brush",
            mode: dragging ? "move" : "resize"
          });
        }
      }
      function move1(point, scale, i) {
        var range = d3_scaleRange(scale), r0 = range[0], r1 = range[1], position = origin[i], extent = i ? yExtent : xExtent, size = extent[1] - extent[0], min, max;
        if (dragging) {
          r0 -= position;
          r1 -= size + position;
        }
        min = (i ? yClamp : xClamp) ? Math.max(r0, Math.min(r1, point[i])) : point[i];
        if (dragging) {
          max = (min += position) + size;
        } else {
          if (center) position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
          if (position < min) {
            max = min;
            min = position;
          } else {
            max = position;
          }
        }
        if (extent[0] != min || extent[1] != max) {
          if (i) yExtentDomain = null; else xExtentDomain = null;
          extent[0] = min;
          extent[1] = max;
          return true;
        }
      }
      function brushend() {
        brushmove();
        g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
        d3.select("body").style("cursor", null);
        w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
        dragRestore();
        event_({
          type: "brushend"
        });
      }
    }
    brush.x = function(z) {
      if (!arguments.length) return x;
      x = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.y = function(z) {
      if (!arguments.length) return y;
      y = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.clamp = function(z) {
      if (!arguments.length) return x && y ? [ xClamp, yClamp ] : x ? xClamp : y ? yClamp : null;
      if (x && y) xClamp = !!z[0], yClamp = !!z[1]; else if (x) xClamp = !!z; else if (y) yClamp = !!z;
      return brush;
    };
    brush.extent = function(z) {
      var x0, x1, y0, y1, t;
      if (!arguments.length) {
        if (x) {
          if (xExtentDomain) {
            x0 = xExtentDomain[0], x1 = xExtentDomain[1];
          } else {
            x0 = xExtent[0], x1 = xExtent[1];
            if (x.invert) x0 = x.invert(x0), x1 = x.invert(x1);
            if (x1 < x0) t = x0, x0 = x1, x1 = t;
          }
        }
        if (y) {
          if (yExtentDomain) {
            y0 = yExtentDomain[0], y1 = yExtentDomain[1];
          } else {
            y0 = yExtent[0], y1 = yExtent[1];
            if (y.invert) y0 = y.invert(y0), y1 = y.invert(y1);
            if (y1 < y0) t = y0, y0 = y1, y1 = t;
          }
        }
        return x && y ? [ [ x0, y0 ], [ x1, y1 ] ] : x ? [ x0, x1 ] : y && [ y0, y1 ];
      }
      if (x) {
        x0 = z[0], x1 = z[1];
        if (y) x0 = x0[0], x1 = x1[0];
        xExtentDomain = [ x0, x1 ];
        if (x.invert) x0 = x(x0), x1 = x(x1);
        if (x1 < x0) t = x0, x0 = x1, x1 = t;
        if (x0 != xExtent[0] || x1 != xExtent[1]) xExtent = [ x0, x1 ];
      }
      if (y) {
        y0 = z[0], y1 = z[1];
        if (x) y0 = y0[1], y1 = y1[1];
        yExtentDomain = [ y0, y1 ];
        if (y.invert) y0 = y(y0), y1 = y(y1);
        if (y1 < y0) t = y0, y0 = y1, y1 = t;
        if (y0 != yExtent[0] || y1 != yExtent[1]) yExtent = [ y0, y1 ];
      }
      return brush;
    };
    brush.clear = function() {
      if (!brush.empty()) {
        xExtent = [ 0, 0 ], yExtent = [ 0, 0 ];
        xExtentDomain = yExtentDomain = null;
      }
      return brush;
    };
    brush.empty = function() {
      return !!x && xExtent[0] == xExtent[1] || !!y && yExtent[0] == yExtent[1];
    };
    return d3.rebind(brush, event, "on");
  };
  var d3_svg_brushCursor = {
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
  };
  var d3_svg_brushResizes = [ [ "n", "e", "s", "w", "nw", "ne", "se", "sw" ], [ "e", "w" ], [ "n", "s" ], [] ];
  var d3_time_format = d3_time.format = d3_locale_enUS.timeFormat;
  var d3_time_formatUtc = d3_time_format.utc;
  var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
  d3_time_format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
  function d3_time_formatIsoNative(date) {
    return date.toISOString();
  }
  d3_time_formatIsoNative.parse = function(string) {
    var date = new Date(string);
    return isNaN(date) ? null : date;
  };
  d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
  d3_time.second = d3_time_interval(function(date) {
    return new d3_date(Math.floor(date / 1e3) * 1e3);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 1e3);
  }, function(date) {
    return date.getSeconds();
  });
  d3_time.seconds = d3_time.second.range;
  d3_time.seconds.utc = d3_time.second.utc.range;
  d3_time.minute = d3_time_interval(function(date) {
    return new d3_date(Math.floor(date / 6e4) * 6e4);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 6e4);
  }, function(date) {
    return date.getMinutes();
  });
  d3_time.minutes = d3_time.minute.range;
  d3_time.minutes.utc = d3_time.minute.utc.range;
  d3_time.hour = d3_time_interval(function(date) {
    var timezone = date.getTimezoneOffset() / 60;
    return new d3_date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 36e5);
  }, function(date) {
    return date.getHours();
  });
  d3_time.hours = d3_time.hour.range;
  d3_time.hours.utc = d3_time.hour.utc.range;
  d3_time.month = d3_time_interval(function(date) {
    date = d3_time.day(date);
    date.setDate(1);
    return date;
  }, function(date, offset) {
    date.setMonth(date.getMonth() + offset);
  }, function(date) {
    return date.getMonth();
  });
  d3_time.months = d3_time.month.range;
  d3_time.months.utc = d3_time.month.utc.range;
  function d3_time_scale(linear, methods, format) {
    function scale(x) {
      return linear(x);
    }
    scale.invert = function(x) {
      return d3_time_scaleDate(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return linear.domain().map(d3_time_scaleDate);
      linear.domain(x);
      return scale;
    };
    function tickMethod(extent, count) {
      var span = extent[1] - extent[0], target = span / count, i = d3.bisect(d3_time_scaleSteps, target);
      return i == d3_time_scaleSteps.length ? [ methods.year, d3_scale_linearTickRange(extent.map(function(d) {
        return d / 31536e6;
      }), count)[2] ] : !i ? [ d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2] ] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i];
    }
    scale.nice = function(interval, skip) {
      var domain = scale.domain(), extent = d3_scaleExtent(domain), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" && tickMethod(extent, interval);
      if (method) interval = method[0], skip = method[1];
      function skipped(date) {
        return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;
      }
      return scale.domain(d3_scale_nice(domain, skip > 1 ? {
        floor: function(date) {
          while (skipped(date = interval.floor(date))) date = d3_time_scaleDate(date - 1);
          return date;
        },
        ceil: function(date) {
          while (skipped(date = interval.ceil(date))) date = d3_time_scaleDate(+date + 1);
          return date;
        }
      } : interval));
    };
    scale.ticks = function(interval, skip) {
      var extent = d3_scaleExtent(scale.domain()), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" ? tickMethod(extent, interval) : !interval.range && [ {
        range: interval
      }, skip ];
      if (method) interval = method[0], skip = method[1];
      return interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), skip < 1 ? 1 : skip);
    };
    scale.tickFormat = function() {
      return format;
    };
    scale.copy = function() {
      return d3_time_scale(linear.copy(), methods, format);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  function d3_time_scaleDate(t) {
    return new Date(t);
  }
  var d3_time_scaleSteps = [ 1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6 ];
  var d3_time_scaleLocalMethods = [ [ d3_time.second, 1 ], [ d3_time.second, 5 ], [ d3_time.second, 15 ], [ d3_time.second, 30 ], [ d3_time.minute, 1 ], [ d3_time.minute, 5 ], [ d3_time.minute, 15 ], [ d3_time.minute, 30 ], [ d3_time.hour, 1 ], [ d3_time.hour, 3 ], [ d3_time.hour, 6 ], [ d3_time.hour, 12 ], [ d3_time.day, 1 ], [ d3_time.day, 2 ], [ d3_time.week, 1 ], [ d3_time.month, 1 ], [ d3_time.month, 3 ], [ d3_time.year, 1 ] ];
  var d3_time_scaleLocalFormat = d3_time_format.multi([ [ ".%L", function(d) {
    return d.getMilliseconds();
  } ], [ ":%S", function(d) {
    return d.getSeconds();
  } ], [ "%I:%M", function(d) {
    return d.getMinutes();
  } ], [ "%I %p", function(d) {
    return d.getHours();
  } ], [ "%a %d", function(d) {
    return d.getDay() && d.getDate() != 1;
  } ], [ "%b %d", function(d) {
    return d.getDate() != 1;
  } ], [ "%B", function(d) {
    return d.getMonth();
  } ], [ "%Y", d3_true ] ]);
  var d3_time_scaleMilliseconds = {
    range: function(start, stop, step) {
      return d3.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate);
    },
    floor: d3_identity,
    ceil: d3_identity
  };
  d3_time_scaleLocalMethods.year = d3_time.year;
  d3_time.scale = function() {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
  };
  var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function(m) {
    return [ m[0].utc, m[1] ];
  });
  var d3_time_scaleUtcFormat = d3_time_formatUtc.multi([ [ ".%L", function(d) {
    return d.getUTCMilliseconds();
  } ], [ ":%S", function(d) {
    return d.getUTCSeconds();
  } ], [ "%I:%M", function(d) {
    return d.getUTCMinutes();
  } ], [ "%I %p", function(d) {
    return d.getUTCHours();
  } ], [ "%a %d", function(d) {
    return d.getUTCDay() && d.getUTCDate() != 1;
  } ], [ "%b %d", function(d) {
    return d.getUTCDate() != 1;
  } ], [ "%B", function(d) {
    return d.getUTCMonth();
  } ], [ "%Y", d3_true ] ]);
  d3_time_scaleUtcMethods.year = d3_time.year.utc;
  d3_time.scale.utc = function() {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat);
  };
  d3.text = d3_xhrType(function(request) {
    return request.responseText;
  });
  d3.json = function(url, callback) {
    return d3_xhr(url, "application/json", d3_json, callback);
  };
  function d3_json(request) {
    return JSON.parse(request.responseText);
  }
  d3.html = function(url, callback) {
    return d3_xhr(url, "text/html", d3_html, callback);
  };
  function d3_html(request) {
    var range = d3_document.createRange();
    range.selectNode(d3_document.body);
    return range.createContextualFragment(request.responseText);
  }
  d3.xml = d3_xhrType(function(request) {
    return request.responseXML;
  });
  if (true) this.d3 = d3, !(__WEBPACK_AMD_DEFINE_FACTORY__ = (d3),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); else if (typeof module === "object" && module.exports) module.exports = d3; else this.d3 = d3;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(3).epiviz;



/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
sprintf() for JavaScript 0.7-beta1
http://www.diveintojavascript.com/projects/javascript-sprintf

Copyright (c) Alexandru Marasteanu <alexaholic [at) gmail (dot] com>
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of sprintf() for JavaScript nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL Alexandru Marasteanu BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


Changelog:
2010.11.07 - 0.7-beta1-node
  - converted it to a node.js compatible module

2010.09.06 - 0.7-beta1
  - features: vsprintf, support for named placeholders
  - enhancements: format cache, reduced global namespace pollution

2010.05.22 - 0.6:
 - reverted to 0.4 and fixed the bug regarding the sign of the number 0
 Note:
 Thanks to Raphael Pigulla <raph (at] n3rd [dot) org> (http://www.n3rd.org/)
 who warned me about a bug in 0.5, I discovered that the last update was
 a regress. I appologize for that.

2010.05.09 - 0.5:
 - bug fix: 0 is now preceeded with a + sign
 - bug fix: the sign was not at the right position on padded results (Kamal Abdali)
 - switched from GPL to BSD license

2007.10.21 - 0.4:
 - unit test and patch (David Baird)

2007.09.17 - 0.3:
 - bug fix: no longer throws exception on empty paramenters (Hans Pufal)

2007.09.11 - 0.2:
 - feature: added argument swapping

2007.04.03 - 0.1:
 - initial release
**/

var sprintf = (function() {
	function get_type(variable) {
		return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
	}
	function str_repeat(input, multiplier) {
		for (var output = []; multiplier > 0; output[--multiplier] = input) {/* do nothing */}
		return output.join('');
	}

	var str_format = function() {
		if (!str_format.cache.hasOwnProperty(arguments[0])) {
			str_format.cache[arguments[0]] = str_format.parse(arguments[0]);
		}
		return str_format.format.call(null, str_format.cache[arguments[0]], arguments);
	};

	// convert object to simple one line string without indentation or
	// newlines. Note that this implementation does not print array
	// values to their actual place for sparse arrays. 
	//
	// For example sparse array like this
	//    l = []
	//    l[4] = 1
	// Would be printed as "[1]" instead of "[, , , , 1]"
	// 
	// If argument 'seen' is not null and array the function will check for 
	// circular object references from argument.
	str_format.object_stringify = function(obj, depth, maxdepth, seen) {
		var str = '';
		if (obj != null) {
			switch( typeof(obj) ) {
			case 'function': 
				return '[Function' + (obj.name ? ': '+obj.name : '') + ']';
			    break;
			case 'object':
				if ( obj instanceof Error) { return '[' + obj.toString() + ']' };
				if (depth >= maxdepth) return '[Object]'
				if (seen) {
					// add object to seen list
					seen = seen.slice(0)
					seen.push(obj);
				}
				if (obj.length != null) { //array
					str += '[';
					var arr = []
					for (var i in obj) {
						if (seen && seen.indexOf(obj[i]) >= 0) arr.push('[Circular]');
						else arr.push(str_format.object_stringify(obj[i], depth+1, maxdepth, seen));
					}
					str += arr.join(', ') + ']';
				} else if ('getMonth' in obj) { // date
					return 'Date(' + obj + ')';
				} else { // object
					str += '{';
					var arr = []
					for (var k in obj) { 
						if(obj.hasOwnProperty(k)) {
							if (seen && seen.indexOf(obj[k]) >= 0) arr.push(k + ': [Circular]');
							else arr.push(k +': ' +str_format.object_stringify(obj[k], depth+1, maxdepth, seen)); 
						}
					}
					str += arr.join(', ') + '}';
				}
				return str;
				break;
			case 'string':				
				return '"' + obj + '"';
				break
			}
		}
		return '' + obj;
	}

	str_format.format = function(parse_tree, argv) {
		var cursor = 1, tree_length = parse_tree.length, node_type = '', arg, output = [], i, k, match, pad, pad_character, pad_length;
		for (i = 0; i < tree_length; i++) {
			node_type = get_type(parse_tree[i]);
			if (node_type === 'string') {
				output.push(parse_tree[i]);
			}
			else if (node_type === 'array') {
				match = parse_tree[i]; // convenience purposes only
				if (match[2]) { // keyword argument
					arg = argv[cursor];
					for (k = 0; k < match[2].length; k++) {
						if (!arg.hasOwnProperty(match[2][k])) {
							throw new Error(sprintf('[sprintf] property "%s" does not exist', match[2][k]));
						}
						arg = arg[match[2][k]];
					}
				}
				else if (match[1]) { // positional argument (explicit)
					arg = argv[match[1]];
				}
				else { // positional argument (implicit)
					arg = argv[cursor++];
				}

				if (/[^sO]/.test(match[8]) && (get_type(arg) != 'number')) {
					throw new Error(sprintf('[sprintf] expecting number but found %s "' + arg + '"', get_type(arg)));
				}
				switch (match[8]) {
					case 'b': arg = arg.toString(2); break;
					case 'c': arg = String.fromCharCode(arg); break;
					case 'd': arg = parseInt(arg, 10); break;
					case 'e': arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential(); break;
					case 'f': arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg); break;
				    case 'O': arg = str_format.object_stringify(arg, 0, parseInt(match[7]) || 5); break;
					case 'o': arg = arg.toString(8); break;
					case 's': arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg); break;
					case 'u': arg = Math.abs(arg); break;
					case 'x': arg = arg.toString(16); break;
					case 'X': arg = arg.toString(16).toUpperCase(); break;
				}
				arg = (/[def]/.test(match[8]) && match[3] && arg >= 0 ? '+'+ arg : arg);
				pad_character = match[4] ? match[4] == '0' ? '0' : match[4].charAt(1) : ' ';
				pad_length = match[6] - String(arg).length;
				pad = match[6] ? str_repeat(pad_character, pad_length) : '';
				output.push(match[5] ? arg + pad : pad + arg);
			}
		}
		return output.join('');
	};

	str_format.cache = {};

	str_format.parse = function(fmt) {
		var _fmt = fmt, match = [], parse_tree = [], arg_names = 0;
		while (_fmt) {
			if ((match = /^[^\x25]+/.exec(_fmt)) !== null) {
				parse_tree.push(match[0]);
			}
			else if ((match = /^\x25{2}/.exec(_fmt)) !== null) {
				parse_tree.push('%');
			}
			else if ((match = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosOuxX])/.exec(_fmt)) !== null) {
				if (match[2]) {
					arg_names |= 1;
					var field_list = [], replacement_field = match[2], field_match = [];
					if ((field_match = /^([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
						field_list.push(field_match[1]);
						while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
							if ((field_match = /^\.([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
								field_list.push(field_match[1]);
							}
							else if ((field_match = /^\[(\d+)\]/.exec(replacement_field)) !== null) {
								field_list.push(field_match[1]);
							}
							else {
								throw new Error('[sprintf] ' + replacement_field);
							}
						}
					}
					else {
                        throw new Error('[sprintf] ' + replacement_field);
					}
					match[2] = field_list;
				}
				else {
					arg_names |= 2;
				}
				if (arg_names === 3) {
					throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported');
				}
				parse_tree.push(match);
			}
			else {
				throw new Error('[sprintf] ' + _fmt);
			}
			_fmt = _fmt.substring(match[0].length);
		}
		return parse_tree;
	};

	return str_format;
})();

var vsprintf = function(fmt, argv) {
	var argvClone = argv.slice();
	argvClone.unshift(fmt);
	return sprintf.apply(null, argvClone);
};

module.exports = sprintf;
sprintf.sprintf = sprintf;
sprintf.vsprintf = vsprintf;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(a){return $jscomp.SYMBOL_PREFIX+(a||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(a){var b=0;return $jscomp.iteratorPrototype(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(a,b){$jscomp.initSymbolIterator();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d};
$jscomp.polyfill=function(a,b,c,d){if(b){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};$jscomp.polyfill("Array.prototype.keys",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(a){return a})}},"es6-impl","es3");
$jscomp.polyfill("Array.prototype.values",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(a,c){return c})}},"es6","es3");$jscomp.checkStringArgs=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
$jscomp.polyfill("String.prototype.includes",function(a){return a?a:function(a,c){return-1!==$jscomp.checkStringArgs(this,a,"includes").indexOf(a,c||0)}},"es6-impl","es3");$jscomp.findInternal=function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(b.call(c,f,e,a))return{i:e,v:f}}return{i:-1,v:void 0}};$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,c){return $jscomp.findInternal(this,a,c).v}},"es6-impl","es3");
$jscomp.polyfill("Math.log2",function(a){return a?a:function(a){return Math.log(a)/Math.LN2}},"es6-impl","es3");var COMPILED=!0,goog=goog||{};goog.global=this;goog.isDef=function(a){return void 0!==a};goog.exportPath_=function(a,b,c){a=a.split(".");c=c||goog.global;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&goog.isDef(b)?c[d]=b:c=c[d]?c[d]:c[d]={}};
goog.define=function(a,b){var c=b;COMPILED||(goog.global.CLOSURE_UNCOMPILED_DEFINES&&Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES,a)?c=goog.global.CLOSURE_UNCOMPILED_DEFINES[a]:goog.global.CLOSURE_DEFINES&&Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES,a)&&(c=goog.global.CLOSURE_DEFINES[a]));goog.exportPath_(a,c)};goog.DEBUG=!0;goog.LOCALE="en";goog.TRUSTED_SITE=!0;goog.STRICT_MODE_COMPATIBLE=!1;goog.DISALLOW_TEST_ONLY_CODE=COMPILED&&!goog.DEBUG;
goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING=!1;goog.provide=function(a){if(goog.isInModuleLoader_())throw Error("goog.provide can not be used within a goog.module.");if(!COMPILED&&goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');goog.constructNamespace_(a)};goog.constructNamespace_=function(a,b){if(!COMPILED){delete goog.implicitNamespaces_[a];for(var c=a;(c=c.substring(0,c.lastIndexOf(".")))&&!goog.getObjectByName(c);)goog.implicitNamespaces_[c]=!0}goog.exportPath_(a,b)};
goog.VALID_MODULE_RE_=/^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module=function(a){if(!goog.isString(a)||!a||-1==a.search(goog.VALID_MODULE_RE_))throw Error("Invalid module identifier");if(!goog.isInModuleLoader_())throw Error("Module "+a+" has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");if(goog.moduleLoaderState_.moduleName)throw Error("goog.module may only be called once per module.");
goog.moduleLoaderState_.moduleName=a;if(!COMPILED){if(goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');delete goog.implicitNamespaces_[a]}};goog.module.get=function(a){return goog.module.getInternal_(a)};goog.module.getInternal_=function(a){if(!COMPILED){if(a in goog.loadedModules_)return goog.loadedModules_[a];if(!goog.implicitNamespaces_[a])return a=goog.getObjectByName(a),null!=a?a:null}return null};goog.moduleLoaderState_=null;
goog.isInModuleLoader_=function(){return null!=goog.moduleLoaderState_};goog.module.declareLegacyNamespace=function(){if(!COMPILED&&!goog.isInModuleLoader_())throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");if(!COMPILED&&!goog.moduleLoaderState_.moduleName)throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");goog.moduleLoaderState_.declareLegacyNamespace=!0};
goog.setTestOnly=function(a){if(goog.DISALLOW_TEST_ONLY_CODE)throw a=a||"",Error("Importing test-only code into non-debug environment"+(a?": "+a:"."));};goog.forwardDeclare=function(a){};COMPILED||(goog.isProvided_=function(a){return a in goog.loadedModules_||!goog.implicitNamespaces_[a]&&goog.isDefAndNotNull(goog.getObjectByName(a))},goog.implicitNamespaces_={"goog.module":!0});
goog.getObjectByName=function(a,b){for(var c=a.split("."),d=b||goog.global,e;e=c.shift();)if(goog.isDefAndNotNull(d[e]))d=d[e];else return null;return d};goog.globalize=function(a,b){var c=b||goog.global,d;for(d in a)c[d]=a[d]};
goog.addDependency=function(a,b,c,d){if(goog.DEPENDENCIES_ENABLED){var e;a=a.replace(/\\/g,"/");var f=goog.dependencies_;d&&"boolean"!==typeof d||(d=d?{module:"goog"}:{});for(var g=0;e=b[g];g++)f.nameToPath[e]=a,f.loadFlags[a]=d;for(d=0;b=c[d];d++)a in f.requires||(f.requires[a]={}),f.requires[a][b]=!0}};goog.ENABLE_DEBUG_LOADER=!0;goog.logToConsole_=function(a){goog.global.console&&goog.global.console.error(a)};
goog.require=function(a){if(!COMPILED){goog.ENABLE_DEBUG_LOADER&&goog.IS_OLD_IE_&&goog.maybeProcessDeferredDep_(a);if(goog.isProvided_(a)){if(goog.isInModuleLoader_())return goog.module.getInternal_(a)}else if(goog.ENABLE_DEBUG_LOADER){var b=goog.getPathFromDeps_(a);if(b)goog.writeScripts_(b);else throw a="goog.require could not find: "+a,goog.logToConsole_(a),Error(a);}return null}};goog.basePath="";goog.nullFunction=function(){};
goog.abstractMethod=function(){throw Error("unimplemented abstract method");};goog.addSingletonGetter=function(a){a.instance_=void 0;a.getInstance=function(){if(a.instance_)return a.instance_;goog.DEBUG&&(goog.instantiatedSingletons_[goog.instantiatedSingletons_.length]=a);return a.instance_=new a}};goog.instantiatedSingletons_=[];goog.LOAD_MODULE_USING_EVAL=!0;goog.SEAL_MODULE_EXPORTS=goog.DEBUG;goog.loadedModules_={};goog.DEPENDENCIES_ENABLED=!COMPILED&&goog.ENABLE_DEBUG_LOADER;goog.TRANSPILE="detect";
goog.TRANSPILER="transpile.js";
goog.DEPENDENCIES_ENABLED&&(goog.dependencies_={loadFlags:{},nameToPath:{},requires:{},visited:{},written:{},deferred:{}},goog.inHtmlDocument_=function(){var a=goog.global.document;return null!=a&&"write"in a},goog.findBasePath_=function(){if(goog.isDef(goog.global.CLOSURE_BASE_PATH))goog.basePath=goog.global.CLOSURE_BASE_PATH;else if(goog.inHtmlDocument_())for(var a=goog.global.document.getElementsByTagName("SCRIPT"),b=a.length-1;0<=b;--b){var c=a[b].src,d=c.lastIndexOf("?"),d=-1==d?c.length:d;if("base.js"==
c.substr(d-7,7)){goog.basePath=c.substr(0,d-7);break}}},goog.importScript_=function(a,b){(goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_)(a,b)&&(goog.dependencies_.written[a]=!0)},goog.IS_OLD_IE_=!(goog.global.atob||!goog.global.document||!goog.global.document.all),goog.importProcessedScript_=function(a,b,c){goog.importScript_("",'goog.retrieveAndExec_("'+a+'", '+b+", "+c+");")},goog.queuedModules_=[],goog.wrapModule_=function(a,b){return goog.LOAD_MODULE_USING_EVAL&&goog.isDef(goog.global.JSON)?
"goog.loadModule("+goog.global.JSON.stringify(b+"\n//# sourceURL="+a+"\n")+");":'goog.loadModule(function(exports) {"use strict";'+b+"\n;return exports});\n//# sourceURL="+a+"\n"},goog.loadQueuedModules_=function(){var a=goog.queuedModules_.length;if(0<a){var b=goog.queuedModules_;goog.queuedModules_=[];for(var c=0;c<a;c++)goog.maybeProcessDeferredPath_(b[c])}},goog.maybeProcessDeferredDep_=function(a){goog.isDeferredModule_(a)&&goog.allDepsAreAvailable_(a)&&(a=goog.getPathFromDeps_(a),goog.maybeProcessDeferredPath_(goog.basePath+
a))},goog.isDeferredModule_=function(a){var b=(a=goog.getPathFromDeps_(a))&&goog.dependencies_.loadFlags[a]||{},c=b.lang||"es3";return a&&("goog"==b.module||goog.needsTranspile_(c))?goog.basePath+a in goog.dependencies_.deferred:!1},goog.allDepsAreAvailable_=function(a){if((a=goog.getPathFromDeps_(a))&&a in goog.dependencies_.requires)for(var b in goog.dependencies_.requires[a])if(!goog.isProvided_(b)&&!goog.isDeferredModule_(b))return!1;return!0},goog.maybeProcessDeferredPath_=function(a){if(a in
goog.dependencies_.deferred){var b=goog.dependencies_.deferred[a];delete goog.dependencies_.deferred[a];goog.globalEval(b)}},goog.loadModuleFromUrl=function(a){goog.retrieveAndExec_(a,!0,!1)},goog.writeScriptSrcNode_=function(a){goog.global.document.write('<script type="text/javascript" src="'+a+'">\x3c/script>')},goog.appendScriptSrcNode_=function(a){var b=goog.global.document,c=b.createElement("script");c.type="text/javascript";c.src=a;c.defer=!1;c.async=!1;b.head.appendChild(c)},goog.writeScriptTag_=
function(a,b){if(goog.inHtmlDocument_()){var c=goog.global.document;if(!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING&&"complete"==c.readyState){if(/\bdeps.js$/.test(a))return!1;throw Error('Cannot write "'+a+'" after document load');}if(void 0===b)if(goog.IS_OLD_IE_){var d=" onreadystatechange='goog.onScriptLoad_(this, "+ ++goog.lastNonModuleScriptIndex_+")' ";c.write('<script type="text/javascript" src="'+a+'"'+d+">\x3c/script>")}else goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING?goog.appendScriptSrcNode_(a):
goog.writeScriptSrcNode_(a);else c.write('<script type="text/javascript">'+goog.protectScriptTag_(b)+"\x3c/script>");return!0}return!1},goog.protectScriptTag_=function(a){return a.replace(/<\/(SCRIPT)/ig,"\\x3c\\$1")},goog.needsTranspile_=function(a){if("always"==goog.TRANSPILE)return!0;if("never"==goog.TRANSPILE)return!1;goog.requiresTranspilation_||(goog.requiresTranspilation_=goog.createRequiresTranspilation_());if(a in goog.requiresTranspilation_)return goog.requiresTranspilation_[a];throw Error("Unknown language mode: "+
a);},goog.requiresTranspilation_=null,goog.lastNonModuleScriptIndex_=0,goog.onScriptLoad_=function(a,b){"complete"==a.readyState&&goog.lastNonModuleScriptIndex_==b&&goog.loadQueuedModules_();return!0},goog.writeScripts_=function(a){function b(a){if(!(a in e.written||a in e.visited)){e.visited[a]=!0;if(a in e.requires)for(var f in e.requires[a])if(!goog.isProvided_(f))if(f in e.nameToPath)b(e.nameToPath[f]);else throw Error("Undefined nameToPath for "+f);a in d||(d[a]=!0,c.push(a))}}var c=[],d={},
e=goog.dependencies_;b(a);for(a=0;a<c.length;a++){var f=c[a];goog.dependencies_.written[f]=!0}var g=goog.moduleLoaderState_;goog.moduleLoaderState_=null;for(a=0;a<c.length;a++)if(f=c[a]){var h=e.loadFlags[f]||{},l=goog.needsTranspile_(h.lang||"es3");"goog"==h.module||l?goog.importProcessedScript_(goog.basePath+f,"goog"==h.module,l):goog.importScript_(goog.basePath+f)}else throw goog.moduleLoaderState_=g,Error("Undefined script input");goog.moduleLoaderState_=g},goog.getPathFromDeps_=function(a){return a in
goog.dependencies_.nameToPath?goog.dependencies_.nameToPath[a]:null},goog.findBasePath_(),goog.global.CLOSURE_NO_DEPS||goog.importScript_(goog.basePath+"deps.js"));
goog.loadModule=function(a){var b=goog.moduleLoaderState_;try{goog.moduleLoaderState_={moduleName:void 0,declareLegacyNamespace:!1};var c;if(goog.isFunction(a))c=a.call(void 0,{});else if(goog.isString(a))c=goog.loadModuleFromSource_.call(void 0,a);else throw Error("Invalid module definition");var d=goog.moduleLoaderState_.moduleName;if(!goog.isString(d)||!d)throw Error('Invalid module name "'+d+'"');goog.moduleLoaderState_.declareLegacyNamespace?goog.constructNamespace_(d,c):goog.SEAL_MODULE_EXPORTS&&
Object.seal&&goog.isObject(c)&&Object.seal(c);goog.loadedModules_[d]=c}finally{goog.moduleLoaderState_=b}};goog.loadModuleFromSource_=function(a){eval(a);return{}};goog.normalizePath_=function(a){a=a.split("/");for(var b=0;b<a.length;)"."==a[b]?a.splice(b,1):b&&".."==a[b]&&a[b-1]&&".."!=a[b-1]?a.splice(--b,2):b++;return a.join("/")};
goog.loadFileSync_=function(a){if(goog.global.CLOSURE_LOAD_FILE_SYNC)return goog.global.CLOSURE_LOAD_FILE_SYNC(a);try{var b=new goog.global.XMLHttpRequest;b.open("get",a,!1);b.send();return 0==b.status||200==b.status?b.responseText:null}catch(c){return null}};
goog.retrieveAndExec_=function(a,b,c){if(!COMPILED){var d=a;a=goog.normalizePath_(a);var e=goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_,f=goog.loadFileSync_(a);if(null==f)throw Error('Load of "'+a+'" failed');c&&(f=goog.transpile_.call(goog.global,f,a));f=b?goog.wrapModule_(a,f):f+("\n//# sourceURL="+a);goog.IS_OLD_IE_?(goog.dependencies_.deferred[d]=f,goog.queuedModules_.push(d)):e(a,f)}};
goog.transpile_=function(a,b){var c=goog.global.$jscomp;c||(goog.global.$jscomp=c={});var d=c.transpile;if(!d){var e=goog.basePath+goog.TRANSPILER,f=goog.loadFileSync_(e);if(f){eval(f+"\n//# sourceURL="+e);if(goog.global.$gwtExport&&goog.global.$gwtExport.$jscomp&&!goog.global.$gwtExport.$jscomp.transpile)throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: '+JSON.stringify(goog.global.$gwtExport));goog.global.$jscomp.transpile=goog.global.$gwtExport.$jscomp.transpile;
c=goog.global.$jscomp;d=c.transpile}}d||(d=c.transpile=function(a,b){goog.logToConsole_(b+" requires transpilation but no transpiler was found.");return a});return d(a,b)};
goog.typeOf=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};goog.isNull=function(a){return null===a};goog.isDefAndNotNull=function(a){return null!=a};goog.isArray=function(a){return"array"==goog.typeOf(a)};goog.isArrayLike=function(a){var b=goog.typeOf(a);return"array"==b||"object"==b&&"number"==typeof a.length};goog.isDateLike=function(a){return goog.isObject(a)&&"function"==typeof a.getFullYear};goog.isString=function(a){return"string"==typeof a};
goog.isBoolean=function(a){return"boolean"==typeof a};goog.isNumber=function(a){return"number"==typeof a};goog.isFunction=function(a){return"function"==goog.typeOf(a)};goog.isObject=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};goog.getUid=function(a){return a[goog.UID_PROPERTY_]||(a[goog.UID_PROPERTY_]=++goog.uidCounter_)};goog.hasUid=function(a){return!!a[goog.UID_PROPERTY_]};
goog.removeUid=function(a){null!==a&&"removeAttribute"in a&&a.removeAttribute(goog.UID_PROPERTY_);try{delete a[goog.UID_PROPERTY_]}catch(b){}};goog.UID_PROPERTY_="closure_uid_"+(1E9*Math.random()>>>0);goog.uidCounter_=0;goog.getHashCode=goog.getUid;goog.removeHashCode=goog.removeUid;goog.cloneObject=function(a){var b=goog.typeOf(a);if("object"==b||"array"==b){if(a.clone)return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=goog.cloneObject(a[c]);return b}return a};
goog.bindNative_=function(a,b,c){return a.call.apply(a.bind,arguments)};goog.bindJs_=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};
goog.bind=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?goog.bind=goog.bindNative_:goog.bind=goog.bindJs_;return goog.bind.apply(null,arguments)};goog.partial=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};goog.mixin=function(a,b){for(var c in b)a[c]=b[c]};goog.now=goog.TRUSTED_SITE&&Date.now||function(){return+new Date};
goog.globalEval=function(a){if(goog.global.execScript)goog.global.execScript(a,"JavaScript");else if(goog.global.eval){if(null==goog.evalWorksForGlobals_)if(goog.global.eval("var _evalTest_ = 1;"),"undefined"!=typeof goog.global._evalTest_){try{delete goog.global._evalTest_}catch(d){}goog.evalWorksForGlobals_=!0}else goog.evalWorksForGlobals_=!1;if(goog.evalWorksForGlobals_)goog.global.eval(a);else{var b=goog.global.document,c=b.createElement("SCRIPT");c.type="text/javascript";c.defer=!1;c.appendChild(b.createTextNode(a));
b.body.appendChild(c);b.body.removeChild(c)}}else throw Error("goog.globalEval not available");};goog.evalWorksForGlobals_=null;
goog.getCssName=function(a,b){if("."==String(a).charAt(0))throw Error('className passed in goog.getCssName must not start with ".". You passed: '+a);var c=function(a){return goog.cssNameMapping_[a]||a},d=function(a){a=a.split("-");for(var b=[],d=0;d<a.length;d++)b.push(c(a[d]));return b.join("-")},d=goog.cssNameMapping_?"BY_WHOLE"==goog.cssNameMappingStyle_?c:d:function(a){return a},d=b?a+"-"+d(b):d(a);return goog.global.CLOSURE_CSS_NAME_MAP_FN?goog.global.CLOSURE_CSS_NAME_MAP_FN(d):d};
goog.setCssNameMapping=function(a,b){goog.cssNameMapping_=a;goog.cssNameMappingStyle_=b};!COMPILED&&goog.global.CLOSURE_CSS_NAME_MAPPING&&(goog.cssNameMapping_=goog.global.CLOSURE_CSS_NAME_MAPPING);goog.getMsg=function(a,b){b&&(a=a.replace(/\{\$([^}]+)}/g,function(a,d){return null!=b&&d in b?b[d]:a}));return a};goog.getMsgWithFallback=function(a,b){return a};goog.exportSymbol=function(a,b,c){goog.exportPath_(a,b,c)};goog.exportProperty=function(a,b,c){a[b]=c};
goog.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};
goog.base=function(a,b,c){var d=arguments.callee.caller;if(goog.STRICT_MODE_COMPATIBLE||goog.DEBUG&&!d)throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");if(d.superClass_){for(var e=Array(arguments.length-1),f=1;f<arguments.length;f++)e[f-1]=arguments[f];return d.superClass_.constructor.apply(a,e)}e=Array(arguments.length-2);for(f=2;f<arguments.length;f++)e[f-2]=arguments[f];for(var f=!1,g=a.constructor;g;g=
g.superClass_&&g.superClass_.constructor)if(g.prototype[b]===d)f=!0;else if(f)return g.prototype[b].apply(a,e);if(a[b]===d)return a.constructor.prototype[b].apply(a,e);throw Error("goog.base called from a method of one name to a method of a different name");};goog.scope=function(a){if(goog.isInModuleLoader_())throw Error("goog.scope is not supported within a goog.module.");a.call(goog.global)};COMPILED||(goog.global.COMPILED=COMPILED);
goog.defineClass=function(a,b){var c=b.constructor,d=b.statics;c&&c!=Object.prototype.constructor||(c=function(){throw Error("cannot instantiate an interface (no constructor defined).");});c=goog.defineClass.createSealingConstructor_(c,a);a&&goog.inherits(c,a);delete b.constructor;delete b.statics;goog.defineClass.applyProperties_(c.prototype,b);null!=d&&(d instanceof Function?d(c):goog.defineClass.applyProperties_(c,d));return c};goog.defineClass.SEAL_CLASS_INSTANCES=goog.DEBUG;
goog.defineClass.createSealingConstructor_=function(a,b){if(!goog.defineClass.SEAL_CLASS_INSTANCES)return a;var c=!goog.defineClass.isUnsealable_(b),d=function(){var b=a.apply(this,arguments)||this;b[goog.UID_PROPERTY_]=b[goog.UID_PROPERTY_];this.constructor===d&&c&&Object.seal instanceof Function&&Object.seal(b);return b};return d};goog.defineClass.isUnsealable_=function(a){return a&&a.prototype&&a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]};goog.defineClass.OBJECT_PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.defineClass.applyProperties_=function(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c]);for(var d=0;d<goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;d++)c=goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d],Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c])};goog.tagUnsealableClass=function(a){!COMPILED&&goog.defineClass.SEAL_CLASS_INSTANCES&&(a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]=!0)};goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_="goog_defineClass_legacy_unsealable";
goog.createRequiresTranspilation_=function(){function a(a,b){d?c[a]=!0:b()?c[a]=!1:d=c[a]=!0}function b(a){try{return!!eval(a)}catch(f){return!1}}var c={es3:!1},d=!1;a("es5",function(){return b("[1,].length==1")});a("es6",function(){return b('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()')});
a("es6-impl",function(){return!0});a("es7",function(){return b("2 ** 2 == 4")});a("es8",function(){return b("async () => 1, true")});return c};var epiviz={deferred:{}};epiviz.deferred.Deferred=function(a){this._deferred=a||$.Deferred()};epiviz.deferred.Deferred.State={PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"};epiviz.deferred.Deferred.prototype.then=function(a,b,c){return new epiviz.deferred.Promise(this._deferred.then(a,b,c))};epiviz.deferred.Deferred.prototype.done=function(a,b){return new epiviz.deferred.Deferred(this._deferred.done(a,b))};
epiviz.deferred.Deferred.prototype.fail=function(a,b){return new epiviz.deferred.Deferred(this._deferred.fail(a,b))};epiviz.deferred.Deferred.prototype.always=function(a,b){return new epiviz.deferred.Deferred(this._deferred.always(a,b))};epiviz.deferred.Deferred.prototype.state=function(){return this._deferred.state()};epiviz.deferred.Deferred.prototype.notify=function(a){return new epiviz.deferred.Deferred(this._deferred.notify(a))};
epiviz.deferred.Deferred.prototype.notifyWith=function(a,b){return new epiviz.deferred.Deferred(this._deferred.notifyWith(a,b))};epiviz.deferred.Deferred.prototype.progress=function(a,b){return new epiviz.deferred.Deferred(this._deferred.progress(a,b))};epiviz.deferred.Deferred.prototype.promise=function(a){return new epiviz.deferred.Promise(this._deferred.promise(a))};epiviz.deferred.Deferred.prototype.reject=function(a){return new epiviz.deferred.Deferred(this._deferred.reject(a))};
epiviz.deferred.Deferred.prototype.rejectWith=function(a,b){return new epiviz.deferred.Deferred(this._deferred.rejectWith(a,b))};epiviz.deferred.Deferred.prototype.resolve=function(a){return new epiviz.deferred.Deferred(this._deferred.resolve(a))};epiviz.deferred.Deferred.prototype.resolveWith=function(a,b){return new epiviz.deferred.Deferred(this._deferred.resolveWith(a,b))};epiviz.utils=function(){};epiviz.utils.capitalizeFirstLetter=function(a){return a.charAt(0).toUpperCase()+a.slice(1)};epiviz.utils.stringContains=function(a,b){return-1!=a.indexOf(b)};epiviz.utils.stringStartsWith=function(a,b){return 0==a.indexOf(b)};epiviz.utils.stringEndsWith=function(a,b){return a.lastIndexOf(b)==a.length-b.length};epiviz.utils.fillArray=function(a,b){a=a||0;for(var c=Array(a),d=0;d<a;++d)c[d]=b;return c};
epiviz.utils.indexOf=function(a,b){for(var c=0;c<a.length;++c)if(b(a[c]))return c;return-1};epiviz.utils.arraysEqual=function(a,b){if(a==b)return!0;if(!a||!b||a.length!=b.length||a<b||b<a)return!1;for(var c=0;c<a.length;++c)if(a[c]!=b[c])return!1;return!0};epiviz.utils.elementsEqual=function(a,b){if(a==b)return!0;if(!a||!b||a.length!=b.length)return!1;var c={},d;for(d=0;d<a.length;++d)a[d]in c||(c[a[d]]=0),++c[a[d]];for(d=0;d<b.length;++d){if(!c[b[d]])return!1;--c[b[d]]}return!0};
epiviz.utils.range=function(a,b){b=b||0;a=a||0;for(var c=Array(a),d=0;d<a;++d)c[d]=d+b;return c};epiviz.utils.arrayAppend=function(a,b){a.push.apply(a,b)};epiviz.utils.arrayFlip=function(a){for(var b={},c=0;c<a.length;++c)b[a[c]]=c;return b};epiviz.utils.indexOfMin=function(a,b){for(var c=null,d=null,e=0;e<a.length;++e)for(var f=b?e+1:0;f<a[e].length;++f)if(null==d||a[e][f]<d)d=a[e][f],c=[e,f];return{min:d,index:c}};
epiviz.utils.arrayIntersection=function(a,b){var c={};a.forEach(function(a){c[a]=a});var d=[];b.forEach(function(a){a in c&&d.push(a)});return d};epiviz.utils.asyncFor=function(a,b,c){if(a){var d=function(e){e>=a?c&&c():b(e,function(a){a?c&&c():d(e+1)})};d(0)}else c&&c()};
epiviz.utils.deferredFor=function(a,b){for(var c=new epiviz.deferred.Deferred,d=new epiviz.deferred.Deferred,e=c.promise(),f=0;f<a;++f)(function(c){e=e.then(function(){var e=b(c);c==a-1&&e.then(function(){d.resolve()});return e})})(f);c.resolve();return d};epiviz.utils.mapCopy=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b};
epiviz.utils.mapEquals=function(a,b){if(a==b)return!0;if(!a||!b)return!1;for(var c in a)if(a.hasOwnProperty(c)&&(!b.hasOwnProperty(c)||a[c]!=b[c]))return!1;for(c in b)if(b.hasOwnProperty(c)&&!a.hasOwnProperty(c))return!1;return!0};epiviz.utils.mapCombine=function(a,b,c){var d={},e;if(b)for(e in b)b.hasOwnProperty(e)&&(d[e]=b[e]);if(a)for(e in a)a.hasOwnProperty(e)&&(c&&d[e]&&$.isArray(d[e])&&a[e]&&$.isArray(a[e])?d[e]=d[e].concat(a[e]):d[e]=a[e]);return d};
epiviz.utils.mapJoin=function(a,b,c){b||""===b||(b=":");c||""===c||(c=",");var d="",e;for(e in a)a.hasOwnProperty(e)&&(d&&(d+=c),d+=e+b+a[e]);return d};epiviz.utils.mapKeyIntersection=function(a,b){var c=[];if(!a||!b)return c;for(var d in a)a.hasOwnProperty(d)&&d in b&&c.push(d);return c};epiviz.utils.forEach=function(a,b){for(var c in a)if(a.hasOwnProperty(c)&&b(a[c],c,a))break};
epiviz.utils.evaluateFullyQualifiedTypeName=function(a){try{for(var b=a.split("."),c=b.pop(),d=window,e=0;e<b.length;++e)d=d[b[e]];var f=d[c];return"function"!==typeof f?(console.error("Unknown type name: "+a),null):f}catch(g){return console.error("Unknown type name: "+a),null}};epiviz.utils.applyConstructor=function(a,b){var c;c=function(){};c.prototype=a.prototype;c=new c;c.constructor=a;a.apply(c,b);return c};epiviz.utils.RAD_TO_DEG=180/Math.PI;epiviz.utils.DEG_TO_RAD=Math.PI/180;
epiviz.utils.getInternetExplorerVersion=function(){var a=-1;if("Microsoft Internet Explorer"==navigator.appName){var b=/MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent);null!=b&&(a=parseFloat(b[1]))}return a};epiviz.utils.generatePseudoGUID=function(a){for(var b="",c=0;c<a;++c)b+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.round(61*Math.random())];return b};epiviz.utils.colorize=function(a,b,c,d,e,f){return d3.scale.linear().domain([a,c,b]).range([d,f,e])};
epiviz.utils.colorizeBinary=function(a,b,c,d){return d3.scale.linear().domain([a,b]).range([c,d])};epiviz.utils.sign=function(a){return 0>a?-1:0==a?0:1};var caja={};epiviz.caja={};caja.initialize=function(){};epiviz.caja.cajole=function(a,b){var c=new epiviz.deferred.Deferred;setTimeout(function(){c.resolve(eval("("+a+")"))},0);return c};epiviz.caja.run=function(a,b){var c=new epiviz.deferred.Deferred;setTimeout(function(){var b=document.getElementsByTagName("head")[0],e=document.createElement("script");e.type="text/javascript";e.src=a;e.onreadystatechange=e.onload=function(){c.resolve()};b.appendChild(e)},0);return c};
epiviz.caja.chain=function(a,b){$.isArray(b)||(b=epiviz.utils.fillArray(a.length,b));return epiviz.utils.deferredFor(a.length,function(c){return epiviz.caja.run(a[c],b[c])})};
epiviz.caja.buildChartMethodContext=function(){return{epiviz:{ui:{charts:epiviz.ui.charts,controls:epiviz.ui.controls},utils:epiviz.utils,plugins:epiviz.plugins,measurements:epiviz.measurements,events:epiviz.events,deferred:epiviz.deferred,datatypes:epiviz.datatypes,data:{DataProvider:epiviz.data.DataProvider,Request:epiviz.data.Request,Response:epiviz.data.Response,WebServerDataProvider:{makeGetRequest:epiviz.data.WebServerDataProvider.makeGetRequest}},Config:epiviz.Config},d3:d3,$:$,sprintf:sprintf,
goog:goog}};epiviz.events={};epiviz.events.EventListener=function(a){this._id=epiviz.events.EventListener._nextId++;this._updateCallback=a};epiviz.events.EventListener._nextId=0;epiviz.events.EventListener.prototype.update=function(a){this._updateCallback(a)};epiviz.events.EventListener.prototype.id=function(){return this._id};epiviz.ui={};epiviz.ui.WebArgsManager=function(a,b){this._locationManager=a;this._workspaceManager=b;this._registerLocationChanged();this._registerActiveWorkspaceChanged()};epiviz.ui.WebArgsManager.WEB_ARGS=epiviz.ui.WebArgsManager.WEB_ARGS||{};
epiviz.ui.WebArgsManager.extractWindowLocationArgs=function(){var a={};(0<window.location.search.length?window.location.search.substr(1):"").split("&").forEach(function(b,c){if(0!=b.trim().length){var d=b.indexOf("[]");if(0!=d){var e,f;f=b.indexOf("=");0>f?(e=0>d?b:b.substr(0,d),f="true"):(e=0>d?b.substr(0,f):b.substr(0,d),f=b.substr(f+1));e=decodeURIComponent(e);f=decodeURIComponent(f);0>d?a[e]=f:(e in a||(a[e]=[]),a[e].push(f))}}});return a};
epiviz.ui.WebArgsManager.prototype._updateUrl=function(){var a="?",b=epiviz.ui.WebArgsManager.WEB_ARGS;!("ws"in b)&&"workspace"in b&&(b.ws=b.workspace,delete b.workspace);for(var c in b)if(b.hasOwnProperty(c))if(Array.isArray(b[c]))for(var d,e=0;e<b[c].length;++e)d=b[c][e],void 0==d&&(d="undefined"),a+=sprintf("%s[]=%s&",c,d);else d=b[c],void 0==d&&(d="undefined"),a+=sprintf("%s=%s&",c,d);b=epiviz.utils.getInternetExplorerVersion();if(0>b||10<=b)switch(window.location.protocol){case "http:":case "https:":history.replaceState(null,
"",a)}};epiviz.ui.WebArgsManager.prototype._registerLocationChanged=function(){var a=this;this._locationManager.onCurrentLocationChanged().addListener(new epiviz.events.EventListener(function(b){epiviz.ui.WebArgsManager.WEB_ARGS.seqName=b.newValue.seqName();epiviz.ui.WebArgsManager.WEB_ARGS.start=b.newValue.start();epiviz.ui.WebArgsManager.WEB_ARGS.end=b.newValue.end();a._updateUrl()}))};
epiviz.ui.WebArgsManager.prototype._registerActiveWorkspaceChanged=function(){var a=this;this._workspaceManager.onActiveWorkspaceChanged().addListener(new epiviz.events.EventListener(function(b){epiviz.ui.WebArgsManager.WEB_ARGS.ws=b.workspaceId||"";delete epiviz.ui.WebArgsManager.WEB_ARGS.workspace;a._updateUrl()}))};epiviz.events.Event=function(){this._count=0;this._listeners={};this._firing=!1};epiviz.events.Event.prototype.addListener=function(a){this._listeners[a.id()]||++this._count;this._listeners[a.id()]=a};epiviz.events.Event.prototype.removeListener=function(a){this._listeners[a.id()]&&(delete this._listeners[a.id()],--this._count)};
epiviz.events.Event.prototype.notify=function(a){if(!this._firing&&0!=this._count){this._firing=!0;for(var b in this._listeners)this._listeners.hasOwnProperty(b)&&this._listeners[b].update(a);this._firing=!1}};epiviz.events.Event.prototype.isFiring=function(){return this._firing};epiviz.data={};epiviz.data.MessageType={REQUEST:"request",RESPONSE:"response"};epiviz.data.Response=function(a,b){this._id=a;this._data=b};epiviz.data.Response.prototype.id=function(){return this._id};epiviz.data.Response.prototype.data=function(){var a=this._data,b=Object.keys(a);0<b.length&&-1!=b.indexOf("success")&&(b.splice(b.indexOf("success"),1),delete a.success);return a};epiviz.data.Response.prototype.type=function(){return epiviz.data.MessageType.RESPONSE};epiviz.data.Response.prototype.raw=function(){return{requestId:this._id,type:this.type(),data:this._data}};
epiviz.data.Response.fromRawObject=function(a){return new epiviz.data.Response(a.requestId,a.data)};epiviz.data.DataProvider=function(a){this._id=a;this._requestAddSeqInfos=new epiviz.events.Event;this._requestRemoveSeqNames=new epiviz.events.Event;this._requestAddMeasurements=new epiviz.events.Event;this._requestRemoveMeasurements=new epiviz.events.Event;this._requestAddChart=new epiviz.events.Event;this._requestRemoveChart=new epiviz.events.Event;this._requestFlushCache=new epiviz.events.Event;this._requestClearDatasourceGroupCache=new epiviz.events.Event;this._requestNavigate=new epiviz.events.Event;
this._requestRedraw=new epiviz.events.Event;this._requestCurrentLocation=new epiviz.events.Event;this._requestPrintWorkspace=new epiviz.events.Event;this._requestSetChartSettings=new epiviz.events.Event;this._requestGetChartSettings=new epiviz.events.Event;this._requestGetAvailableCharts=new epiviz.events.Event;this._requestLoadWorkspace=new epiviz.events.Event};epiviz.data.DataProvider.prototype.id=function(){return this._id};
epiviz.data.DataProvider.prototype.getData=function(a,b){b(epiviz.data.Response.fromRawObject({requestId:a.id(),data:null}))};epiviz.data.DataProvider.prototype.onRequestAddSeqInfos=function(){return this._requestAddSeqInfos};epiviz.data.DataProvider.prototype.onRequestRemoveSeqNames=function(){return this._requestRemoveSeqNames};epiviz.data.DataProvider.prototype.onRequestAddMeasurements=function(){return this._requestAddMeasurements};
epiviz.data.DataProvider.prototype.onRequestRemoveMeasurements=function(){return this._requestRemoveMeasurements};epiviz.data.DataProvider.prototype.onRequestAddChart=function(){return this._requestAddChart};epiviz.data.DataProvider.prototype.onRequestRemoveChart=function(){return this._requestRemoveChart};epiviz.data.DataProvider.prototype.onRequestFlushCache=function(){return this._requestFlushCache};epiviz.data.DataProvider.prototype.onRequestClearDatasourceGroupCache=function(){return this._requestClearDatasourceGroupCache};
epiviz.data.DataProvider.prototype.onRequestNavigate=function(){return this._requestNavigate};epiviz.data.DataProvider.prototype.onRequestRedraw=function(){return this._requestRedraw};epiviz.data.DataProvider.prototype.onRequestCurrentLocation=function(){return this._requestCurrentLocation};epiviz.data.DataProvider.prototype.onRequestPrintWorkspace=function(){return this._requestPrintWorkspace};epiviz.data.DataProvider.prototype.onRequestGetChartSettings=function(){return this._requestGetChartSettings};
epiviz.data.DataProvider.prototype.onRequestSetChartSettings=function(){return this._requestSetChartSettings};epiviz.data.DataProvider.prototype.onRequestGetAvailableCharts=function(){return this._requestGetAvailableCharts};epiviz.data.DataProvider.prototype.onRequestLoadWorkspace=function(){return this._requestLoadWorkspace};epiviz.data.Request=function(a,b,c){this._id=a;this._args=b;this._method=c};epiviz.data.Request.Method={GET:"get",POST:"post"};
epiviz.data.Request.Action={GET_ROWS:"getRows",GET_VALUES:"getValues",GET_COMBINED:"getCombined",GET_MEASUREMENTS:"getMeasurements",SEARCH:"search",GET_SEQINFOS:"getSeqInfos",SAVE_WORKSPACE:"saveWorkspace",DELETE_WORKSPACE:"deleteWorkspace",GET_WORKSPACES:"getWorkspaces",GET_HIERARCHY:"getHierarchy",PROPAGATE_HIERARCHY_CHANGES:"propagateHierarchyChanges",GET_PCA:"getPCA",GET_DIVERSITY:"getDiversity",GET_FEATURE_DATA:"getFeatureData",GET_CHART_SETTINGS:"getChartSettings",SET_CHART_SETTINGS:"setChartSettings",
GET_AVAILABLE_CHARTS:"getAvailableCharts",ADD_MEASUREMENTS:"addMeasurements",REMOVE_MEASUREMENTS:"removeMeasurements",ADD_SEQINFOS:"addSeqInfos",REMOVE_SEQNAMES:"removeSeqNames",ADD_CHART:"addChart",REMOVE_CHART:"removeChart",CLEAR_DATASOURCE_GROUP_CACHE:"clearDatasourceGroupCache",FLUSH_CACHE:"flushCache",NAVIGATE:"navigate",REDRAW:"redraw",GET_CURRENT_LOCATION:"getCurrentLocation",WRITE_DEBUG_MSG:"writeMsg",PRINT_WORKSPACE:"printWorkspace",LOAD_WORKSPACE:"loadWorkspace",REGISTER_CHART_TYPES:"registerChartTypes"};
epiviz.data.Request.createRequest=function(a,b){return new epiviz.data.Request(epiviz.data.Request._nextId++,a,b||epiviz.data.Request.Method.GET)};epiviz.data.Request.fromRawObject=function(a){return new epiviz.data.Request(a.requestId,a.data)};epiviz.data.Request._nextId=0;epiviz.data.Request.prototype.id=function(){return this._id};epiviz.data.Request.prototype.type=function(){return epiviz.data.MessageType.REQUEST};epiviz.data.Request.prototype.method=function(){return this._method};
epiviz.data.Request.prototype.joinArgs=function(a,b){a=a||"=";b=b||"&";var c=sprintf("requestId%s%s",a,this._id),d;for(d in this._args)if(this._args.hasOwnProperty(d))if(Array.isArray(this._args[d]))for(var e=0;e<this._args[d].length;++e)c+=sprintf("%s%s[]%s%s",b,d,a,this._args[d][e]);else c+=sprintf("%s%s%s%s",b,d,a,this._args[d]||"");return c};epiviz.data.Request.prototype.isEmpty=function(){for(var a in this._args)if(this._args.hasOwnProperty(a))return!1;return!0};
epiviz.data.Request.prototype.get=function(a){return a in this._args?this._args[a]:null};epiviz.data.Request.prototype.raw=function(){return{requestId:this._id,type:this.type(),data:epiviz.utils.mapCopy(this._args)}};epiviz.data.Request.emptyRequest=function(){return epiviz.data.Request.createRequest({})};
epiviz.data.Request.getRows=function(a,b){return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.GET_ROWS,datasource:a.id(),seqName:b?b.seqName():void 0,start:b?b.start():void 0,end:b?b.end():void 0,metadata:a.metadata()})};
epiviz.data.Request.getValues=function(a,b){return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.GET_VALUES,datasource:a.datasource().id(),measurement:a.id(),seqName:b?b.seqName():void 0,start:b?b.start():void 0,end:b?b.end():void 0})};
epiviz.data.Request.getCombined=function(a,b){var c={},d;for(d in a)a.hasOwnProperty(d)&&(c[d]=function(){var b=[];a[d].foreach(function(a){b.push(a.id())});return b}());return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.GET_COMBINED,seqName:b?b.seqName():void 0,start:b?b.start():void 0,end:b?b.end():void 0,measurements:c})};
epiviz.data.Request.getMeasurements=function(a){return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.GET_MEASUREMENTS,datasourceGroup:a})};epiviz.data.Request.search=function(a,b,c){return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.SEARCH,q:a||"",datasourceGroup:c,maxResults:b})};
epiviz.data.Request.getSeqInfos=function(a){return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.GET_SEQINFOS,datasourceGroup:a})};epiviz.data.Request.saveWorkspace=function(a,b){return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.SAVE_WORKSPACE,id:a.id(),name:a.name(),content:encodeURIComponent(JSON.stringify(a.raw(b).content))},epiviz.data.Request.Method.POST)};
epiviz.data.Request.deleteWorkspace=function(a){return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.DELETE_WORKSPACE,id:a.id()},epiviz.data.Request.Method.POST)};epiviz.data.Request.getWorkspaces=function(a,b){return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.GET_WORKSPACES,q:a||"",ws:b})};
epiviz.data.Request.getHierarchy=function(a,b){return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.GET_HIERARCHY,datasourceGroup:a,nodeId:b})};epiviz.data.Request.propagateHierarchyChanges=function(a,b,c,d){return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.PROPAGATE_HIERARCHY_CHANGES,datasourceGroup:a,selection:b,order:c,selectedLevels:d})};
epiviz.data.Request.getPCA=function(a,b){var c={},d;for(d in a)a.hasOwnProperty(d)&&(c[d]=function(){var b=[];a[d].foreach(function(a){b.push(a.id())});return b}());return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.GET_PCA,measurements:c})};
epiviz.data.Request.getDiversity=function(a,b){var c={},d;for(d in a)a.hasOwnProperty(d)&&(c[d]=function(){var b=[];a[d].foreach(function(a){b.push(a.id())});return b}());return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.GET_DIVERSITY,measurements:c})};
epiviz.data.Request.getFeatureData=function(a,b,c){c={};for(var d in a)a.hasOwnProperty(d)&&(c[d]=function(){var b=[];a[d].foreach(function(a){b.push(a.id())});return b}());return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.GET_FEATURE_DATA,measurements:c,feature:b.featureId})};epiviz.measurements={};
epiviz.measurements.Measurement=function(a,b,c,d,e,f,g,h,l,m,n,p,t){var q=epiviz.measurements.Measurement.Type;this._id=a;this._name=b;this._type=c;this._datasource=c==q.RANGE?this:new epiviz.measurements.Measurement(d,d,q.RANGE,d,e,f,null,"Blocks Track",null,null,null,p);this._datasourceGroup=e;this._dataprovider=f;this._formula=g||null;this._defaultChartType=h||null;this._annotation=l||null;this._minValue=m||0===m?m:null;this._maxValue=n||0===n?n:null;this._metadata=p||null;this._description=t||
null};epiviz.measurements.Measurement.Type={FEATURE:"feature",RANGE:"range",UNORDERED:"unordered"};epiviz.measurements.Measurement.Type.isOrdered=function(a){return a==epiviz.measurements.Measurement.Type.FEATURE||a==epiviz.measurements.Measurement.Type.RANGE};epiviz.measurements.Measurement.Type.hasValues=function(a){return a==epiviz.measurements.Measurement.Type.FEATURE||a==epiviz.measurements.Measurement.Type.UNORDERED};epiviz.measurements.Measurement.prototype.id=function(){return this._id};
epiviz.measurements.Measurement.prototype.name=function(){return this._name};epiviz.measurements.Measurement.prototype.type=function(){return this._type};epiviz.measurements.Measurement.prototype.datasource=function(){return this._datasource};epiviz.measurements.Measurement.prototype.datasourceId=function(){return this._datasource.id()};epiviz.measurements.Measurement.prototype.datasourceGroup=function(){return this._datasourceGroup};epiviz.measurements.Measurement.prototype.dataprovider=function(){return this._dataprovider};
epiviz.measurements.Measurement.prototype.formula=function(){return this._formula};epiviz.measurements.Measurement.prototype.formulaStr=function(){if(!this._formula)return"";var a=this._formula.referredMeasurements,b=this._formula.expression.toString(),c;for(c in a)a.hasOwnProperty(c)&&(b=b.replace(new RegExp("\\{"+c+"\\}","g")," {"+a[c].name()+"} "));return b};
epiviz.measurements.Measurement.prototype.evaluate=function(a){var b={},c;for(c in this._formula.referredMeasurements)if(this._formula.referredMeasurements.hasOwnProperty(c)){var d=this._formula.referredMeasurements[c];b["{"+c+"}"]=d.isComputed()?d.evaluate(a):a.get(d)}return this._formula.expression.evaluate(b)};
epiviz.measurements.Measurement.prototype.evaluateArr=function(a){var b={},c;for(c in this._formula.referredMeasurements)if(this._formula.referredMeasurements.hasOwnProperty(c)){var d=this._formula.referredMeasurements[c];b["{"+c+"}"]=d.isComputed()?d.evaluateArr(a):a.get(d)}return this._formula.expression.evaluateArr(b)};epiviz.measurements.Measurement.prototype.defaultChartType=function(){return this._defaultChartType};epiviz.measurements.Measurement.prototype.annotation=function(){return this._annotation};
epiviz.measurements.Measurement.prototype.minValue=function(){return this._minValue};epiviz.measurements.Measurement.prototype.maxValue=function(){return this._maxValue};epiviz.measurements.Measurement.prototype.metadata=function(){return this._metadata||[]};
epiviz.measurements.Measurement.prototype.componentMeasurements=function(){var a=new epiviz.measurements.MeasurementSet;if(!this._formula)return a.add(this),a;for(var b in this._formula.referredMeasurements)this._formula.referredMeasurements.hasOwnProperty(b)&&a.addAll(this._formula.referredMeasurements[b].componentMeasurements());return a};epiviz.measurements.Measurement.prototype.isComputed=function(){return this._formula?!0:!1};
epiviz.measurements.Measurement.prototype.raw=function(a){if(this._formula){var b=this._formula.referredMeasurements,c={},d;for(d in b)b.hasOwnProperty(d)&&(c[d]=a.get(b[d]))}return{id:this._id,name:this._name,type:this._type,datasourceId:this._datasource._id,datasourceGroup:this._datasourceGroup,dataprovider:this._dataprovider,formula:this._formula?{expression:this._formula.expression.toString(),referredMeasurements:c}:null,defaultChartType:this._defaultChartType,annotation:this._annotation,minValue:this._minValue,
maxValue:this._maxValue,metadata:this._metadata,description:this._description}};epiviz.measurements.Measurement.prototype.toString=function(){return this.name()};
epiviz.measurements.Measurement.fromRawObject=function(a,b){var c=null;if(a.formula){for(var c=epiviz.utils.ExpressionParser.parse(a.formula.expression),d={},e=c.variables(),f=0;f<e.length;++f)if(epiviz.utils.stringStartsWith(e[f],"{")&&epiviz.utils.stringEndsWith(e[f],"}")){var g=parseInt(e[f].substring(1,e[f].length-1));d[g]=b[a.formula.referredMeasurements[g]]}c={expression:c,referredMeasurements:d}}return new epiviz.measurements.Measurement(a.id,a.name,a.type,a.datasourceId,a.datasourceGroup,
a.dataprovider,c,a.defaultChartType,a.annotation,a.minValue,a.maxValue,a.metadata)};epiviz.utils.Iterable=function(){};epiviz.utils.Iterable.prototype.foreach=function(a){};epiviz.utils.Iterator=function(){};epiviz.utils.Iterator.prototype.first=function(){throw Error("unimplemented abstract method");};epiviz.utils.Iterator.prototype.next=function(){throw Error("unimplemented abstract method");};epiviz.measurements.MeasurementSet=function(a){this._measurementTree={};this._size=0;this._order=[];a&&this.addAll(a)};
epiviz.measurements.MeasurementSet.prototype.add=function(a){a.dataprovider()in this._measurementTree||(this._measurementTree[a.dataprovider()]={});a.type()in this._measurementTree[a.dataprovider()]||(this._measurementTree[a.dataprovider()][a.type()]={});a.datasourceGroup()in this._measurementTree[a.dataprovider()][a.type()]||(this._measurementTree[a.dataprovider()][a.type()][a.datasourceGroup()]={});a.datasource().id()in this._measurementTree[a.dataprovider()][a.type()][a.datasourceGroup()]||(this._measurementTree[a.dataprovider()][a.type()][a.datasourceGroup()][a.datasource().id()]=
{});if(a.id()in this._measurementTree[a.dataprovider()][a.type()][a.datasourceGroup()][a.datasource().id()])return!1;this._measurementTree[a.dataprovider()][a.type()][a.datasourceGroup()][a.datasource().id()][a.id()]={measurement:a,index:this._order.length};this._order.push({measurement:a,contained:!0});++this._size;return!0};
epiviz.measurements.MeasurementSet.prototype.remove=function(a){if(!(a.dataprovider()in this._measurementTree&&a.type()in this._measurementTree[a.dataprovider()]&&a.datasourceGroup()in this._measurementTree[a.dataprovider()][a.type()]&&a.datasource().id()in this._measurementTree[a.dataprovider()][a.type()][a.datasourceGroup()]&&a.id()in this._measurementTree[a.dataprovider()][a.type()][a.datasourceGroup()][a.datasource().id()]))return!1;this._order[this._measurementTree[a.dataprovider()][a.type()][a.datasourceGroup()][a.datasource().id()][a.id()].index].contained=
!1;delete this._measurementTree[a.dataprovider()][a.type()][a.datasourceGroup()][a.datasource().id()][a.id()];--this._size;return!0};epiviz.measurements.MeasurementSet.prototype.addAll=function(a){if(!a||!a.size())return!1;var b=!1,c=this;a.foreach(function(a){c.add(a)&&(b=!0);return!1});return b};epiviz.measurements.MeasurementSet.prototype.removeAll=function(a){var b=!1,c=this;a.foreach(function(a){c.remove(a)&&(b=!0);return!1});return b};
epiviz.measurements.MeasurementSet.prototype.foreach=function(a,b){for(var c=this.iterator(),d=c.first(),e=0;null!==d&&(b&&!b(d)||!a(d,e));d=c.next(),++e);};epiviz.measurements.MeasurementSet.prototype.iterator=function(){return new epiviz.measurements.MeasurementSet.Iterator(this)};epiviz.measurements.MeasurementSet.prototype.subset=function(a){var b=new epiviz.measurements.MeasurementSet;this.foreach(function(a){b.add(a)},a);return b};
epiviz.measurements.MeasurementSet.prototype.map=function(a){var b=new epiviz.measurements.MeasurementSet;this.foreach(function(c){b.add(a(c))});return b};epiviz.measurements.MeasurementSet.prototype.size=function(){return this._size};
epiviz.measurements.MeasurementSet.prototype.contains=function(a){return a.dataprovider()in this._measurementTree&&a.type()in this._measurementTree[a.dataprovider()]&&a.datasourceGroup()in this._measurementTree[a.dataprovider()][a.type()]&&a.datasource().id()in this._measurementTree[a.dataprovider()][a.type()][a.datasourceGroup()]?a.id()in this._measurementTree[a.dataprovider()][a.type()][a.datasourceGroup()][a.datasource().id()]:!1};epiviz.measurements.MeasurementSet.prototype.first=function(){return this.iterator().first()};
epiviz.measurements.MeasurementSet.prototype.get=function(a){if(a>=this._size||0>a)return null;if(this._size==this._order.length)return this._order[a].measurement;var b=null;this.foreach(function(c,d){return d==a?(b=c,!0):!1});return b};epiviz.measurements.MeasurementSet.prototype.toArray=function(){var a=Array(this._size);this.foreach(function(b,c){a[c]=b});return a};
epiviz.measurements.MeasurementSet.prototype.sorted=function(a){a=this.toArray().sort(a);var b=new epiviz.measurements.MeasurementSet;a.forEach(function(a){b.add(a)});return b};epiviz.measurements.MeasurementSet.prototype.raw=function(){var a=Array(this._size);this.foreach(function(b,c){a[c]=b.raw()});return a};
epiviz.measurements.MeasurementSet.prototype.split=function(a){var b={};this.foreach(function(c,d){var e=a(c),f=b[e];void 0==f&&(f=new epiviz.measurements.MeasurementSet,b[e]=f);f.add(c)});return b};epiviz.measurements.MeasurementSet.Iterator=function(a){this._parent=a;this._lastIndex=null};
epiviz.measurements.MeasurementSet.Iterator.prototype.first=function(){if(0==this._parent.size())return null;for(var a=0;a<this._parent._order.length;++a)if(this._parent._order[a].contained)return this._lastIndex=a,this._parent._order[a].measurement;throw Error("Inconsistent MeasurementSet with size() > 0 and no first element");};
epiviz.measurements.MeasurementSet.Iterator.prototype.next=function(){if(null===this._lastIndex)throw Error("Iterator.next() called before calling Iterator.first()");for(var a=this._lastIndex+1;a<this._parent._order.length;++a)if(this._parent._order[a].contained)return this._lastIndex=a,this._parent._order[a].measurement;this._lastIndex=this._parent._order.length;return null};epiviz.ui.controls={};epiviz.ui.controls.VisConfigSelection=function(a,b,c,d,e,f,g,h){this.measurements=a;this.datasource=b;this.datasourceGroup=c;this.dataprovider=d;this.annotation=e;this.defaultChartType=f;this.minSelectedMeasurements=g||1;this.customData=h};epiviz.events.EventResult=function(){this.value=this.errorMessage=this.success=null};epiviz.datatypes={};epiviz.datatypes.GenomicRange=function(a,b,c){void 0!=c&&0>c&&(c=-c,void 0!=b&&(b-=c));this._seqname=a;this._start=b;this._width=c};epiviz.datatypes.GenomicRange.fromStartEnd=function(a,b,c){return new epiviz.datatypes.GenomicRange(a,b,void 0!=b&&void 0!=c?c-b:void 0)};epiviz.datatypes.GenomicRange.prototype.seqName=function(){return this._seqname};epiviz.datatypes.GenomicRange.prototype.start=function(){return this._start};epiviz.datatypes.GenomicRange.prototype.width=function(){return this._width};
epiviz.datatypes.GenomicRange.prototype.end=function(){return void 0!=this._start&&void 0!=this._width?this._start+this._width:void 0};epiviz.datatypes.GenomicRange.prototype.isEmpty=function(){return 0>=this._width};
epiviz.datatypes.GenomicRange.prototype.subtract=function(a){return!a||a.seqName()!=this._seqname||a.isEmpty()||a.start()>=this.end()||this._start>=a.end()?[this]:a.start()<=this._start&&a.end()>=this.end()?[]:a.start()>this._start&&a.end()<this.end()?[epiviz.datatypes.GenomicRange.fromStartEnd(this._seqname,this._start,a.start()),epiviz.datatypes.GenomicRange.fromStartEnd(this._seqname,a.end(),this.end())]:a.start()>this._start?[epiviz.datatypes.GenomicRange.fromStartEnd(this._seqname,this._start,
a.start())]:[epiviz.datatypes.GenomicRange.fromStartEnd(this._seqname,a.end(),this.end())]};epiviz.datatypes.GenomicRange.prototype.equals=function(a){return a?a==this?!0:this._seqname==a._seqname&&this._start==a._start&&this._width==a._width:!1};epiviz.datatypes.GenomicRange.prototype.overlapsWith=function(a){return a?this==a?!0:this.seqName()!=a.seqName()?!1:this.start()<a.end()&&this.end()>a.start():!1};
epiviz.datatypes.GenomicRange.prototype.raw=function(){return{seqName:this._seqname,start:this._start,width:this._width}};epiviz.datatypes.GenomicRange.fromRawObject=function(a){return new epiviz.datatypes.GenomicRange(a.seqName,a.start,a.width)};epiviz.ui.charts={};epiviz.ui.charts.ColorPalette=function(a,b,c,d){this._colors=a;this._id=c||epiviz.utils.generatePseudoGUID(6);this._name=b||"Custom ("+this._id+")";this._keyIndices=d||{};this._nKeys=0};epiviz.ui.charts.ColorPalette.prototype.id=function(){return this._id};epiviz.ui.charts.ColorPalette.prototype.name=function(){return this._name};epiviz.ui.charts.ColorPalette.prototype.get=function(a){return this._colors[a%this._colors.length]};
epiviz.ui.charts.ColorPalette.prototype.getByKey=function(a){var b=this._keyIndices[a];void 0==b&&(b=this._nKeys,this._keyIndices[a]=this._nKeys,++this._nKeys);return this.get(b)};epiviz.ui.charts.ColorPalette.prototype.keyColorIndex=function(a){a=this._keyIndices[a];return void 0==a?-1:a};epiviz.ui.charts.ColorPalette.prototype.keyIndices=function(){return this._keyIndices};epiviz.ui.charts.ColorPalette.prototype.size=function(){return this._colors.length};
epiviz.ui.charts.ColorPalette.prototype.equals=function(a){return this==a?!0:a?epiviz.utils.arraysEqual(this._colors,a._colors):!1};epiviz.ui.charts.ColorPalette.prototype.copy=function(){return new epiviz.ui.charts.ColorPalette(this._colors.slice(0))};epiviz.ui.charts.ColorPalette.prototype.raw=function(a){return a&&this._id in a.colorPalettesMap?{id:this._id}:{id:this._id,name:this._name,colors:this._colors}};
epiviz.ui.charts.ColorPalette.fromRawObject=function(a,b){if($.isArray(a))return new epiviz.ui.charts.ColorPalette(a);if(b&&a.id in b.colorPalettesMap)return b.colorPalettesMap[a.id];a.colors&&a.colors.length||(a.colors=epiviz.Config.COLORS_BRIGHT);return new epiviz.ui.charts.ColorPalette(a.colors,a.name,a.id)};epiviz.data.WebsocketDataProvider=function(a,b){epiviz.data.DataProvider.call(this,a||epiviz.data.WebsocketDataProvider.DEFAULT_ID);this._websocketHost=b;this._socket=null;this._useUI="true"!=epiviz.ui.WebArgsManager.WEB_ARGS.websocketNoUI;this._debug="true"==epiviz.ui.WebArgsManager.WEB_ARGS.debug;this._callbacks={};this._requestsStack=[];this._initialize()};epiviz.data.WebsocketDataProvider.prototype=epiviz.utils.mapCopy(epiviz.data.DataProvider.prototype);
epiviz.data.WebsocketDataProvider.constructor=epiviz.data.WebsocketDataProvider;epiviz.data.WebsocketDataProvider.DEFAULT_ID="websocket";
epiviz.data.WebsocketDataProvider.prototype._initialize=function(){if(this._websocketHost&&"None"!=this._websocketHost)try{this._socket=new WebSocket(this._websocketHost);this._log("WebSocket - status "+this._socket.readyState);var a=this;this._socket.onopen=function(){a._onSocketOpen()};this._socket.onmessage=function(b){a._onSocketMessage(b)};this._socket.onclose=function(){a._onSocketClose()}}catch(b){this._log(b.toString())}};
epiviz.data.WebsocketDataProvider.prototype._onSocketOpen=function(){for(var a=0;a<this._requestsStack.length;++a)this._socket.send(this._requestsStack[a]);this._requestsStack=[];this._registerAvailableCharts()};epiviz.data.WebsocketDataProvider.prototype._onSocketClose=function(){this._socket=null};epiviz.data.WebsocketDataProvider.prototype._sendMessage=function(a){this.connected()&&this._socket.readyState?this._socket.send(a):this._requestsStack.push(a)};
epiviz.data.WebsocketDataProvider.prototype._onSocketMessage=function(a){this._log("Local Controller Received: "+a.data);var b=JSON.parse(a.data);b.data.dataprovidertype="websocket";if(b.type==epiviz.data.MessageType.RESPONSE)a=epiviz.data.Response.fromRawObject(b),b=this._callbacks[a.id()],delete this._callbacks[a.id()],b(a);else if(b.type==epiviz.data.MessageType.REQUEST)switch(a=epiviz.data.Request.Action,b=epiviz.data.Request.fromRawObject(b),b.get("action")){case a.ADD_MEASUREMENTS:this._addMeasurements(b);
break;case a.REMOVE_MEASUREMENTS:this._removeMeasurements(b);break;case a.ADD_SEQINFOS:this._addSeqInfos(b);break;case a.REMOVE_SEQNAMES:this._removeSeqNames(b);break;case a.ADD_CHART:this._addChart(b);break;case a.REMOVE_CHART:this._removeChart(b);break;case a.CLEAR_DATASOURCE_GROUP_CACHE:this._clearDatasourceGroupCache(b);break;case a.FLUSH_CACHE:this._flushCache(b);break;case a.NAVIGATE:this._navigate(b);break;case a.REDRAW:this._redraw(b);break;case a.GET_CURRENT_LOCATION:this._getCurrentLocation(b);
break;case a.WRITE_DEBUG_MSG:this._writeDebugMsg(b);break;case a.PRINT_WORKSPACE:this._printWorkspace(b);break;case a.SET_CHART_SETTINGS:this._setChartSettings(b);break;case a.GET_CHART_SETTINGS:this._getChartSettings(b);break;case a.GET_AVAILABLE_CHARTS:this._getAvailableCharts(b);break;case a.LOAD_WORKSPACE:this._loadWorkspace(b)}};epiviz.data.WebsocketDataProvider.prototype._log=function(a){this._debug&&console.log(a)};
epiviz.data.WebsocketDataProvider.prototype._fireEvent=function(a,b){this._useUI?a.notify(b):b.result.success=!0};epiviz.data.WebsocketDataProvider.prototype.connected=function(){return null!=this._socket};epiviz.data.WebsocketDataProvider.prototype.getData=function(a,b){var c=JSON.stringify(a.raw());this._callbacks[a.id()]=b;this._sendMessage(c)};
epiviz.data.WebsocketDataProvider.prototype._addMeasurements=function(a){for(var b=new epiviz.events.EventResult,c=new epiviz.measurements.MeasurementSet,d=JSON.parse(a.get("measurements")),e=0;e<d.length;++e)c.add(new epiviz.measurements.Measurement(d[e].id,d[e].name,d[e].type,d[e].datasourceId,d[e].datasourceGroup,this.id(),null,d[e].defaultChartType,d[e].annotation,d[e].minValue,d[e].maxValue,d[e].metadata));this._fireEvent(this.onRequestAddMeasurements(),{measurements:c,result:b});a=new epiviz.data.Response(a.id(),
b);this._sendMessage(JSON.stringify(a.raw()))};
epiviz.data.WebsocketDataProvider.prototype._removeMeasurements=function(a){for(var b=new epiviz.events.EventResult,c=new epiviz.measurements.MeasurementSet,d=JSON.parse(a.get("measurements")),e=0;e<d.length;++e)c.add(new epiviz.measurements.Measurement(d[e].id,d[e].name,d[e].type,d[e].datasourceId,d[e].datasourceGroup,this.id(),null,d[e].defaultChartType,d[e].annotation,d[e].minValue,d[e].maxValue,d[e].metadata));this._fireEvent(this.onRequestRemoveMeasurements(),{measurements:c,result:b});a=new epiviz.data.Response(a.id(),
b);this._sendMessage(JSON.stringify(a.raw()))};epiviz.data.WebsocketDataProvider.prototype._addSeqInfos=function(a){var b=new epiviz.events.EventResult,c=JSON.parse(a.get("seqInfos"));this._fireEvent(this.onRequestAddSeqInfos(),{seqInfos:c,result:b});a=new epiviz.data.Response(a.id(),b);this._sendMessage(JSON.stringify(a.raw()))};
epiviz.data.WebsocketDataProvider.prototype._removeSeqNames=function(a){var b=new epiviz.events.EventResult,c=JSON.parse(a.get("seqNames"));this._fireEvent(this.onRequestRemoveSeqNames(),{seqNames:c,result:b});a=new epiviz.data.Response(a.id(),b);this._sendMessage(JSON.stringify(a.raw()))};
epiviz.data.WebsocketDataProvider.prototype._addChart=function(a){var b=new epiviz.events.EventResult,c,d,e;if(void 0!=a.get("measurements"))for(c=new epiviz.measurements.MeasurementSet,d=JSON.parse(a.get("measurements")),e=0;e<d.length;++e)c.add(new epiviz.measurements.Measurement(d[e].id,d[e].name,d[e].type,d[e].datasourceId,d[e].datasourceGroup,this.id(),null,d[e].defaultChartType,d[e].annotation,d[e].minValue,d[e].maxValue,d[e].metadata));d=a.get("datasource");e=a.get("datasourceGroup")||d;this._fireEvent(this.onRequestAddChart(),
{type:a.get("type"),visConfigSelection:new epiviz.ui.controls.VisConfigSelection(c,d,e),result:b});a=new epiviz.data.Response(a.id(),b);this._sendMessage(JSON.stringify(a.raw()))};epiviz.data.WebsocketDataProvider.prototype._removeChart=function(a){var b=a.get("chartId"),c=new epiviz.events.EventResult;this._fireEvent(this.onRequestRemoveChart(),{id:b,result:c});a=new epiviz.data.Response(a.id(),c);this._sendMessage(JSON.stringify(a.raw()))};
epiviz.data.WebsocketDataProvider.prototype._clearDatasourceGroupCache=function(a){var b=new epiviz.events.EventResult;this._fireEvent(this.onRequestClearDatasourceGroupCache(),{datasourceGroup:a.get("datasourceGroup"),result:b});a=new epiviz.data.Response(a.id(),b);this._sendMessage(JSON.stringify(a.raw()))};
epiviz.data.WebsocketDataProvider.prototype._flushCache=function(a){var b=new epiviz.events.EventResult;this._fireEvent(this.onRequestFlushCache(),{result:b});a=new epiviz.data.Response(a.id(),b);this._sendMessage(JSON.stringify(a.raw()))};
epiviz.data.WebsocketDataProvider.prototype._navigate=function(a){var b=JSON.parse(a.get("range")),c=new epiviz.events.EventResult;this._fireEvent(this.onRequestNavigate(),{range:epiviz.datatypes.GenomicRange.fromStartEnd(b.seqName,b.start,b.end),result:c});a=new epiviz.data.Response(a.id(),c);this._sendMessage(JSON.stringify(a.raw()))};
epiviz.data.WebsocketDataProvider.prototype._redraw=function(a){var b=new epiviz.events.EventResult;this._fireEvent(this.onRequestRedraw(),{result:b});a=new epiviz.data.Response(a.id(),b);this._sendMessage(JSON.stringify(a.raw()))};epiviz.data.WebsocketDataProvider.prototype._getCurrentLocation=function(a){var b=new epiviz.events.EventResult;this._fireEvent(this.onRequestCurrentLocation(),{result:b});a=new epiviz.data.Response(a.id(),b);this._sendMessage(JSON.stringify(a.raw()))};
epiviz.data.WebsocketDataProvider.prototype._writeDebugMsg=function(a){var b=a.get("msg"),c=document.createElement("pre");c.innerHTML=b.replace(/&/g,"&amp;").replace(/\\</g,"&lt;");a=new epiviz.data.Response(a.id(),{msg:"that msg"});document.getElementById("chart-container").appendChild(c);this._sendMessage(JSON.stringify(a.raw()))};
epiviz.data.WebsocketDataProvider.prototype._printWorkspace=function(a){var b=a.get("chartId"),c=a.get("fileName"),d=a.get("fileType"),e=new epiviz.events.EventResult;this._fireEvent(this.onRequestPrintWorkspace(),{chartId:b,fileName:c,fileType:d,result:e});a=new epiviz.data.Response(a.id(),e);this._sendMessage(JSON.stringify(a.raw()))};
epiviz.data.WebsocketDataProvider.prototype._setChartSettings=function(a){var b=a.get("chartId"),c=a.get("settings"),d=a.get("colorMap"),d=new epiviz.ui.charts.ColorPalette(d),e=new epiviz.events.EventResult;this._fireEvent(this.onRequestSetChartSettings(),{chartId:b,settings:c,colorMap:d,result:e});a=new epiviz.data.Response(a.id(),e);this._sendMessage(JSON.stringify(a.raw()))};
epiviz.data.WebsocketDataProvider.prototype._getChartSettings=function(a){var b=a.get("chartId"),c=new epiviz.events.EventResult;this._fireEvent(this.onRequestGetChartSettings(),{chartId:b,result:c});a=new epiviz.data.Response(a.id(),c);this._sendMessage(JSON.stringify(a.raw()))};epiviz.data.WebsocketDataProvider.prototype._getAvailableCharts=function(a){var b=new epiviz.events.EventResult;this._fireEvent(this.onRequestGetChartSettings(),{result:b});a=new epiviz.data.Response(a.id(),b);this._sendMessage(JSON.stringify(a.raw()))};
epiviz.data.WebsocketDataProvider.prototype._registerAvailableCharts=function(){var a=new epiviz.events.EventResult;this._fireEvent(this.onRequestGetChartSettings(),{result:a});request=epiviz.data.Request.createRequest({action:epiviz.data.Request.Action.REGISTER_CHART_TYPES,data:a.value});a=JSON.stringify(request.raw());this._callbacks[request.id()]=function(a){};this._sendMessage(a)};
epiviz.data.WebsocketDataProvider.prototype.updateChartSettings=function(a,b){var c=JSON.stringify(a.raw());this._callbacks[a.id()]=b;this._sendMessage(c)};epiviz.data.WebsocketDataProvider.prototype._loadWorkspace=function(a){var b=a.get("workspaceId"),c=new epiviz.events.EventResult;this._fireEvent(this.onRequestLoadWorkspace(),{workspace:b});a=new epiviz.data.Response(a.id(),c);this._sendMessage(JSON.stringify(a.raw()))};epiviz.data.WebServerDataProvider=function(a,b){epiviz.data.DataProvider.call(this,a||epiviz.Config.DEFAULT_DATA_PROVIDER_ID);this._serverEndpoint=b||epiviz.data.WebServerDataProvider.DEFAULT_SERVER_ENDPOINT};epiviz.data.WebServerDataProvider.prototype=epiviz.utils.mapCopy(epiviz.data.DataProvider.prototype);epiviz.data.WebServerDataProvider.constructor=epiviz.data.WebServerDataProvider;epiviz.data.WebServerDataProvider.DEFAULT_SERVER_ENDPOINT="data/main.php";
epiviz.data.WebServerDataProvider.prototype.getData=function(a,b){if(!a.isEmpty())if(a.method()==epiviz.data.Request.Method.GET){var c=sprintf("%s?%s",this._serverEndpoint,a.joinArgs());epiviz.data.WebServerDataProvider.makeGetRequest(c,function(a){b(epiviz.data.Response.fromRawObject(a))})}else epiviz.data.WebServerDataProvider.makePostRequest(this._serverEndpoint,a.joinArgs(),function(a){b(epiviz.data.Response.fromRawObject(a))})};
epiviz.data.WebServerDataProvider.makeGetRequest=function(a,b){var c=$.ajax({type:"get",url:a,dataType:"json",async:!0,cache:!1,processData:!0});c.done(function(a){b(a)});c.fail(function(a,b,c){});c.always(function(){})};epiviz.data.WebServerDataProvider.makePostRequest=function(a,b,c){a=$.ajax({type:"post",url:a,data:b,dataType:"json",async:!0,cache:!1,processData:!0});a.done(function(a,b,f){c(a)});a.fail(function(a,b,c){console.error("The following error occured: "+b,c)});a.always(function(){})};epiviz.Config=function(a){this.workspacesDataProvider=this.dataProviders=this.defaultWorkspaceSettings=this.navigationDelay=this.navigationStepRatio=this.zoomoutRatio=this.zoominRatio=this.chartSaverLocation=this.dataServerLocation=null;this.useCookie=this.useCache=!1;this.appTitle=null;this.cacheUpdateIntervalMilliseconds=3E4;this.colorPalettesMap=this.colorPalettes=this.clustering=this.chartCustomSettings=this.chartSettings=this.chartTypes=this.maxSearchResults=null;if(a){for(var b in a)a.hasOwnProperty(b)&&
(this[b]=a[b]);if("epivizr_standalone"!=a.configType&&(b=epiviz.ui.WebArgsManager.WEB_ARGS["websocket-host"])&&b.length)for(var c=0;c<b.length;++c)this.dataProviders.push(sprintf("epiviz.data.WebsocketDataProvider,%s,%s",epiviz.data.WebsocketDataProvider.DEFAULT_ID+"-"+c,b[c]))}var d={};this.colorPalettes.forEach(function(a){d[a.id()]=a});this.colorPalettesMap=d;"default"!=a.configType&&(this.useCookie=epiviz.ui.WebArgsManager.WEB_ARGS.useCookie)};epiviz.Config.SETTINGS={};
epiviz.Config.DEFAULT_DATA_PROVIDER_ID="umd";epiviz.Config.DEFAULT_WORKSPACE_NAME="Default Workspace";epiviz.Config.EPIVIZ_V1_COLORS="#025167 #e7003e #ffcd00 #057d9f #970026 #ffe373 #ff8100".split(" ");epiviz.Config.COLORS_BRIGHT="#1859a9 #ed2d2e #008c47 #010101 #f37d22 #662c91 #a11d20 #b33893".split(" ");epiviz.Config.COLORS_LIGHT="#b8d2eb #f2aeac #d8e4aa #cccccc #f2d1b0 #d4b2d3 #ddb8a9 #ebbfd9".split(" ");epiviz.Config.COLORS_MEDIUM="#599ad3 #f1595f #79c36a #727272 #f9a65a #9e66ab #cd7058 #d77fb3".split(" ");
epiviz.Config.COLORS_D3_CAT10="#1f77b4 #ff7f0e #2ca02c #d62728 #9467bd #8c564b #e377c2 #7f7f7f #bcbd22 #17becf".split(" ");epiviz.Config.COLORS_D3_CAT20="#1f77b4 #aec7e8 #ff7f0e #ffbb78 #2ca02c #98df8a #d62728 #ff9896 #9467bd #c5b0d5 #8c564b #c49c94 #e377c2 #f7b6d2 #7f7f7f #c7c7c7 #bcbd22 #dbdb8d #17becf #9edae5".split(" ");epiviz.Config.COLORS_D3_CAT20B="#393b79 #5254a3 #6b6ecf #9c9ede #637939 #8ca252 #b5cf6b #cedb9c #8c6d31 #bd9e39 #e7ba52 #e7cb94 #843c39 #ad494a #d6616b #e7969c #7b4173 #a55194 #ce6dbd #de9ed6".split(" ");
epiviz.Config.COLORS_D3_CAT20C="#3182bd #6baed6 #9ecae1 #c6dbef #e6550d #fd8d3c #fdae6b #fdd0a2 #31a354 #74c476 #a1d99b #c7e9c0 #756bb1 #9e9ac8 #bcbddc #dadaeb #636363 #969696 #bdbdbd #d9d9d9".split(" ");epiviz.Config.VisualizationPropertySettings={WIDTH:"width",HEIGHT:"height",MARGINS:"margins",COLORS:"colors",DECORATIONS:"decorations"};epiviz.data.RequestStack=function(){this._requests=[];this._callbacks={};this._dataMap={}};epiviz.data.RequestStack.prototype.pushRequest=function(a,b){this._requests.push(a);this._callbacks[a.id()]=b};
epiviz.data.RequestStack.prototype.serveData=function(a){if(this._callbacks[a.id()])if(0<this._requests.length&&this._requests[0].id()==a.id()){var b=this._callbacks[a.id()];delete this._callbacks[a.id()];this._requests=this._requests.slice(1);for(b(a.data());0<this._requests.length&&this._requests[0].id()in this._dataMap;)b=this._callbacks[this._requests[0].id()],a=this._dataMap[this._requests[0].id()],delete this._callbacks[this._requests[0].id()],delete this._dataMap[this._requests[0].id()],this._requests=
this._requests.slice(1),b(a)}else this._dataMap[a.id()]=a.data()};epiviz.data.RequestStack.prototype.clear=function(){this._requests=[];this._callbacks={};this._dataMap={}};epiviz.measurements.MeasurementHashtable=function(){this._size=0;this._measurementTree={};this._order=[]};
epiviz.measurements.MeasurementHashtable.prototype.put=function(a,b){if(this.contains(a)){var c=this._measurementTree[a.dataprovider()][a.type()][a.datasourceGroup()][a.datasource().id()][a.id()];this._measurementTree[a.dataprovider()][a.type()][a.datasourceGroup()][a.datasource().id()][a.id()]={key:a,value:b,index:c.index};this._order[c.index]={key:a,value:b,contained:!0}}else a.dataprovider()in this._measurementTree||(this._measurementTree[a.dataprovider()]={}),a.type()in this._measurementTree[a.dataprovider()]||
(this._measurementTree[a.dataprovider()][a.type()]={}),a.datasourceGroup()in this._measurementTree[a.dataprovider()][a.type()]||(this._measurementTree[a.dataprovider()][a.type()][a.datasourceGroup()]={}),a.datasource().id()in this._measurementTree[a.dataprovider()][a.type()][a.datasourceGroup()]||(this._measurementTree[a.dataprovider()][a.type()][a.datasourceGroup()][a.datasource().id()]={}),this._measurementTree[a.dataprovider()][a.type()][a.datasourceGroup()][a.datasource().id()][a.id()]={key:a,
value:b,index:this._order.length},this._order.push({key:a,value:b,contained:!0}),++this._size};epiviz.measurements.MeasurementHashtable.prototype.get=function(a){return this.contains(a)?this._measurementTree[a.dataprovider()][a.type()][a.datasourceGroup()][a.datasource().id()][a.id()].value:null};
epiviz.measurements.MeasurementHashtable.prototype.remove=function(a){if(!this.contains(a))return!1;var b=this._measurementTree[a.dataprovider()][a.type()][a.datasourceGroup()][a.datasource().id()][a.id()];delete this._measurementTree[a.dataprovider()][a.type()][a.datasourceGroup()][a.datasource().id()][a.id()];this._order[b.index].contained=!1;--this._size;return!0};
epiviz.measurements.MeasurementHashtable.prototype.contains=function(a){return a.dataprovider()in this._measurementTree&&a.type()in this._measurementTree[a.dataprovider()]&&a.datasourceGroup()in this._measurementTree[a.dataprovider()][a.type()]&&a.datasource().id()in this._measurementTree[a.dataprovider()][a.type()][a.datasourceGroup()]?a.id()in this._measurementTree[a.dataprovider()][a.type()][a.datasourceGroup()][a.datasource().id()]:!1};
epiviz.measurements.MeasurementHashtable.prototype.clear=function(){this._size=0;this._measurementTree={};this._order=[]};epiviz.measurements.MeasurementHashtable.prototype.isEmpty=function(){return 0==this._size};epiviz.measurements.MeasurementHashtable.prototype.size=function(){return this._size};epiviz.measurements.MeasurementHashtable.prototype.foreach=function(a,b){for(var c=this.iterator(),d=c.first(),e=0;null!==d&&(b&&!b(d.key)||!a(d.key,d.value,e));d=c.next(),++e);};
epiviz.measurements.MeasurementHashtable.prototype.first=function(){return this.iterator().first()};epiviz.measurements.MeasurementHashtable.prototype.sorted=function(a){var b=new epiviz.measurements.MeasurementHashtable,c=this._order.slice(0);c.sort(function(b,c){return a(b.key,c.key)});c.forEach(function(a){a.contained&&b.put(a.key,a.value)});return b};epiviz.measurements.MeasurementHashtable.prototype.keys=function(){var a=[];this._order.forEach(function(b){b.contained&&a.push(b.key)});return a};
epiviz.measurements.MeasurementHashtable.prototype.iterator=function(){return new epiviz.measurements.MeasurementHashtable.Iterator(this)};epiviz.measurements.MeasurementHashtable.prototype.toString=function(){var a={};this.foreach(function(b,c){for(var d=b.id(),e=2;d in a;)d=b.id()+" ("+e++ +")";a[d]=c});return JSON.stringify(a)};epiviz.measurements.MeasurementHashtable.Iterator=function(a){this._parent=a;this._lastIndex=null};
epiviz.measurements.MeasurementHashtable.Iterator.prototype.first=function(){if(0==this._parent.size())return null;for(var a=0;a<this._parent._order.length;++a)if(this._parent._order[a].contained)return this._lastIndex=a,{key:this._parent._order[a].key,value:this._parent._order[a].value};throw Error("Inconsistent MeasurementHashtable with size() > 0 and no first element");};
epiviz.measurements.MeasurementHashtable.Iterator.prototype.next=function(){if(null===this._lastIndex)throw Error("Iterator.next() called before calling Iterator.first()");for(var a=this._lastIndex+1;a<this._parent._order.length;++a)if(this._parent._order[a].contained)return this._lastIndex=a,{key:this._parent._order[a].key,value:this._parent._order[a].value};this._lastIndex=this._parent._order.length;return null};epiviz.datatypes.MeasurementGenomicData=function(){};epiviz.datatypes.MeasurementGenomicData.prototype.get=function(a){throw Error("unimplemented abstract method");};epiviz.datatypes.MeasurementGenomicData.prototype.getRow=function(a){throw Error("unimplemented abstract method");};epiviz.datatypes.MeasurementGenomicData.prototype.measurement=function(){throw Error("unimplemented abstract method");};
epiviz.datatypes.MeasurementGenomicData.prototype.globalStartIndex=function(){throw Error("unimplemented abstract method");};epiviz.datatypes.MeasurementGenomicData.prototype.globalEndIndex=function(){throw Error("unimplemented abstract method");};epiviz.datatypes.MeasurementGenomicData.prototype.size=function(){throw Error("unimplemented abstract method");};epiviz.datatypes.MeasurementGenomicData.prototype.getByGlobalIndex=function(a){throw Error("unimplemented abstract method");};
epiviz.datatypes.MeasurementGenomicData.prototype.getRowByGlobalIndex=function(a){throw Error("unimplemented abstract method");};epiviz.datatypes.MeasurementGenomicData.prototype.binarySearchStarts=function(a){throw Error("unimplemented abstract method");};epiviz.datatypes.MeasurementGenomicDataArrayWrapper=function(a,b,c){this._measurement=a;this._items=b;this._itemsByGlobalIndex=c};epiviz.datatypes.MeasurementGenomicDataArrayWrapper.prototype.get=function(a){return this._items&&0<=a&&a<this._items.length?this._items[a]:null};epiviz.datatypes.MeasurementGenomicDataArrayWrapper.prototype.getRow=function(a){return this._items&&0<=a&&a<this._items.length?this._items[a].rowItem:null};
epiviz.datatypes.MeasurementGenomicDataArrayWrapper.prototype.measurement=function(){return this._measurement};epiviz.datatypes.MeasurementGenomicDataArrayWrapper.prototype.globalStartIndex=function(){return this._items&&this._items.length?this._items[0].globalIndex:null};epiviz.datatypes.MeasurementGenomicDataArrayWrapper.prototype.globalEndIndex=function(){return this._items&&this._items.length?this._items[this._items.length-1].globalIndex+1:null};
epiviz.datatypes.MeasurementGenomicDataArrayWrapper.prototype.size=function(){return this._items?this._items.length:0};epiviz.datatypes.MeasurementGenomicDataArrayWrapper.prototype.getByGlobalIndex=function(a){return this._itemsByGlobalIndex&&a in this._itemsByGlobalIndex?this._itemsByGlobalIndex[a]:null};epiviz.datatypes.MeasurementGenomicDataArrayWrapper.prototype.getRowByGlobalIndex=function(a){return this._itemsByGlobalIndex&&a in this._itemsByGlobalIndex?this._itemsByGlobalIndex[a].rowItem:null};
epiviz.datatypes.MeasurementGenomicDataArrayWrapper.prototype.binarySearchStarts=function(a){if(!this._items||!this._items.length||this._items[0].rowItem.start()>a.end()||this._items[this._items.length-1].rowItem.start()<a.start())return{index:null,length:0};for(var b=0,c=this._items.length-1,d,e=null;b<=c;)d=Math.floor(.5*(b+c)),this._items[d].rowItem.start()==a.start()?(e=d,c=d-1):this._items[d].rowItem.start()<a.start()?b=d+1:c=d-1;null===e&&(e=b);for(var b=0,c=this._items.length-1,f=null;b<=c;)d=
Math.floor(.5*(b+c)),this._items[d].rowItem.start()==a.end()?(f=d,b=d+1):this._items[d].rowItem.start()<a.end()?b=d+1:c=d-1;null===f&&(f=b-1);return{index:e,length:f+1-e}};epiviz.datatypes.GenomicData=function(){};epiviz.datatypes.GenomicData.prototype.ready=function(a){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.prototype.isReady=function(){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.prototype.firstSeries=function(){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.prototype.getSeries=function(a){throw Error("unimplemented abstract method");};
epiviz.datatypes.GenomicData.prototype.get=function(a,b){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.prototype.getRow=function(a,b){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.prototype.measurements=function(){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.prototype.globalStartIndex=function(a){throw Error("unimplemented abstract method");};
epiviz.datatypes.GenomicData.prototype.globalEndIndex=function(a){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.prototype.size=function(a){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.prototype.getByGlobalIndex=function(a,b){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.prototype.getRowByGlobalIndex=function(a,b){throw Error("unimplemented abstract method");};
epiviz.datatypes.GenomicData.prototype.binarySearchStarts=function(a,b){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.prototype.foreach=function(a){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.ValueItem=function(a,b,c,d,e){this.globalIndex=a;this.rowItem=b;this.value=0===c||c?c:null;this.measurement=d;this.valueAnnotation=e};epiviz.datatypes.GenomicData.RowItem=function(){};
epiviz.datatypes.GenomicData.RowItem.prototype.id=function(){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.RowItem.prototype.seqName=function(){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.RowItem.prototype.start=function(){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.RowItem.prototype.end=function(){throw Error("unimplemented abstract method");};
epiviz.datatypes.GenomicData.RowItem.prototype.globalIndex=function(){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.RowItem.prototype.strand=function(){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.RowItem.prototype.metadata=function(a){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.RowItem.prototype.rowMetadata=function(){throw Error("unimplemented abstract method");};epiviz.datatypes.MapGenomicData=function(a){this._measurements=(this._map=a)?a.keys():null;this._mapLoaded=new epiviz.deferred.Deferred;this._map&&this._mapLoaded.resolve()};epiviz.datatypes.MapGenomicData.prototype.ready=function(a){this._mapLoaded.done(a)};epiviz.datatypes.MapGenomicData.prototype.isReady=function(){return this._mapLoaded.state()==epiviz.deferred.Deferred.State.RESOLVED};
epiviz.datatypes.MapGenomicData.prototype._setMap=function(a){if(this._map)throw Error("MapGenomicData is immutable");if(this._map=a)this._measurements=a.keys(),this._mapLoaded.resolve()};epiviz.datatypes.MapGenomicData.prototype.firstSeries=function(){return 0==this._map.size()?null:this._map.first().value};epiviz.datatypes.MapGenomicData.prototype.getSeries=function(a){return this._map.get(a)};epiviz.datatypes.MapGenomicData.prototype.get=function(a,b){var c=this._map.get(a);return c?c.get(b):null};
epiviz.datatypes.MapGenomicData.prototype.getRow=function(a,b){var c=this._map.get(a);return c?c.getRow(b):null};epiviz.datatypes.MapGenomicData.prototype.measurements=function(){return this._measurements};epiviz.datatypes.MapGenomicData.prototype.globalStartIndex=function(a){return(a=this._map.get(a))?a.globalStartIndex():null};epiviz.datatypes.MapGenomicData.prototype.globalEndIndex=function(a){return(a=this._map.get(a))?a.globalEndIndex():null};
epiviz.datatypes.MapGenomicData.prototype.size=function(a){return(a=this._map.get(a))?a.size():null};epiviz.datatypes.MapGenomicData.prototype.getByGlobalIndex=function(a,b){var c=this._map.get(a);return c?c.getByGlobalIndex(b):null};epiviz.datatypes.MapGenomicData.prototype.getRowByGlobalIndex=function(a,b){var c=this._map.get(a);return c?c.getRowByGlobalIndex(b):null};
epiviz.datatypes.MapGenomicData.prototype.binarySearchStarts=function(a,b){var c=this._map.get(a);return c?c.binarySearchStarts(b):{index:null,length:0}};epiviz.datatypes.MapGenomicData.prototype.foreach=function(a){this._map.foreach(function(b,c,d){a(b,c,d)})};epiviz.datatypes.PartialSummarizedExperiment=function(){this._rowData=null;this._values=new epiviz.measurements.MeasurementHashtable};epiviz.datatypes.PartialSummarizedExperiment.prototype.ranges=function(){return this.rowData()};epiviz.datatypes.PartialSummarizedExperiment.prototype.rowData=function(){return this._rowData};
epiviz.datatypes.PartialSummarizedExperiment.prototype.addRowData=function(a){a&&(!this._rowData||this._rowData.boundaries().seqName()!=a.boundaries().seqName()||this._rowData.boundaries().start()>a.boundaries().end()||this._rowData.boundaries().end()<a.boundaries().start()||a.measurement().type()==epiviz.measurements.Measurement.Type.UNORDERED?this._rowData=a:this._rowData=this._rowData.merge(a))};
epiviz.datatypes.PartialSummarizedExperiment.prototype.addValues=function(a){if(a){var b=this._values.get(a.measurement());!b||b.boundaries().seqName()!=a.boundaries().seqName()||b.boundaries().start()>a.boundaries().end()||b.boundaries().end()<a.boundaries().start()||a.measurement().type()==epiviz.measurements.Measurement.Type.UNORDERED?this._values.put(a.measurement(),a):this._values.put(a.measurement(),b.merge(a))}};
epiviz.datatypes.PartialSummarizedExperiment.prototype.trim=function(a){var b=new epiviz.datatypes.PartialSummarizedExperiment;this._rowData&&b.addRowData(this._rowData.trim(a));b.rowData()&&this._values.foreach(function(c,d){b.addValues(d.trim(a,b.rowData().globalStartIndex(),b.rowData().size()))});return b};epiviz.datatypes.PartialSummarizedExperiment.prototype.values=function(a){return this._values.get(a)};
epiviz.datatypes.PartialSummarizedExperiment.prototype.calcMinGlobalIndex=function(){var a=this._rowData?this._rowData.globalStartIndex():null;this._values&&this._values.foreach(function(b,c){c&&void 0!=c.globalStartIndex()&&(void 0==a||a>c.globalStartIndex())&&(a=c.globalStartIndex())});return a};
epiviz.datatypes.PartialSummarizedExperiment.prototype.calcMaxGlobalIndex=function(){var a=this._rowData&&void 0!=this._rowData.globalStartIndex()?this._rowData.globalStartIndex()+this._rowData.size():null;this._values&&this._values.foreach(function(b,c){c&&void 0!=c.globalStartIndex()&&(void 0==a||a<c.globalStartIndex()+c.size())&&(a=c.globalStartIndex()+c.size())});return a};
epiviz.datatypes.PartialSummarizedExperiment.prototype.toString=function(){var a="",b=this.calcMinGlobalIndex(),c=this.calcMaxGlobalIndex(),a=a+sprintf("%25s",this._rowData&&this._rowData.measurement()?this._rowData.measurement().name().substr(0,22):"[undefined datasource]"),d,e,f,g,h;this._rowData&&this._rowData.boundaries()?(d=this._rowData.boundaries().seqName(),e=this._rowData.boundaries().start(),f=this._rowData.boundaries().end(),g=void 0!=this._rowData.globalStartIndex()?this._rowData.globalStartIndex():
"*",h=this._rowData.size()):(d=e=f=g="*",h=0);var a=a+sprintf(" [%6s%10s%10s] [globalStartIndex: %10s] [size: %7s]\n",d,e,f,g,h),l=sprintf("%15s%15s%15s%15s%15s","id","idx","chr","start","end");this._values&&this._values.foreach(function(b,c){a+=sprintf("%25s",b.name().substr(0,22));c&&c.boundaries()?(d=c.boundaries().seqName(),e=c.boundaries().start(),f=c.boundaries().end()):d=e=f="*";a+=sprintf(" [%6s%10s%10s] [globalStartIndex: %10s] [size: %7s]\n",d,e,f,void 0!=c.globalStartIndex()?c.globalStartIndex():
"*",c.size());l+=sprintf("%25s",b.name().substr(0,22))});for(var a=a+(l+"\n"),m=b;m<c;++m)this._rowData&&void 0!=this._rowData.globalStartIndex()&&this._rowData.globalStartIndex()<=m&&this._rowData.globalStartIndex()+this._rowData.size()>m?(g=this._rowData.getByGlobalIndex(m),b=g.id(),d=g.seqName(),e=g.start(),f=g.end()):b=d=e=f="*",a+=sprintf("%15s%15s%15s%15s%15s",b,m,d,e,f),this._values&&this._values.foreach(function(b,c){a=c&&void 0!=c.globalStartIndex()&&c.globalStartIndex()<=m&&c.globalStartIndex()+
c.size()>m?a+sprintf("%25s",c.getByGlobalIndex(m)):a+sprintf("%25s","*")}),a+="\n";return a};epiviz.data.Cache=function(a,b){this._config=a;this._dataProviderFactory=b;this._data={};this._measurementRequestStackMap=new epiviz.measurements.MeasurementHashtable;this._measurementPendingRequestsMap=new epiviz.measurements.MeasurementHashtable;this._lastRequest=null;if(0<this._config.cacheUpdateIntervalMilliseconds){var c=this;this._intervalId=window.setTimeout(function(){c._clearUnneededData()},a.cacheUpdateIntervalMilliseconds)}};
epiviz.data.Cache.prototype.getData=function(a,b,c){var d=epiviz.measurements.Measurement.Type,e=this;this._lastRequest=epiviz.datatypes.GenomicRange.fromStartEnd(a.seqName(),a.start()-a.width(),a.end()+a.width());0<this._config.cacheUpdateIntervalMilliseconds&&(window.clearInterval(this._intervalId),this._intervalId=window.setTimeout(function(){e._clearUnneededData()},this._config.cacheUpdateIntervalMilliseconds));var f=this._extractComputedMeasurements(b);this._updateComputedMeasurementsData(f);
this._serveAvailableData(a,b,c);f=[a,epiviz.datatypes.GenomicRange.fromStartEnd(a.seqName(),Math.max(a.start()-a.width(),0),a.start()),new epiviz.datatypes.GenomicRange(a.seqName(),a.end(),a.width())];this._calcMeasurementNeededRanges(f,b).foreach(function(f,h){var g=e._measurementRequestStackMap.get(f);g||(g=new epiviz.data.RequestStack,e._measurementRequestStackMap.put(f,g));var m;if(0==h.length)m=epiviz.data.Request.emptyRequest(),g.pushRequest(m,function(){e._handleResponse(c,a,b,m,null,f,null)}),
g.serveData(new epiviz.data.Response(m.id(),{}));else for(var n=0;n<h.length;++n){m=f.type()==d.RANGE?epiviz.data.Request.getRows(f,h[n]):epiviz.data.Request.getValues(f,h[n]);(function(d,h){g.pushRequest(h,function(g){e._handleResponse(c,a,b,h,d,f,g)})})(h[n],m);var p=e._measurementPendingRequestsMap.get(f);p||(p={},e._measurementPendingRequestsMap.put(f,p));p[m.id()]=h[n];(e._dataProviderFactory.get(f.dataprovider())||e._dataProviderFactory.get(epiviz.data.EmptyResponseDataProvider.DEFAULT_ID)).getData(m,
function(a){g.serveData(a)})}})};
epiviz.data.Cache.prototype._handleResponse=function(a,b,c,d,e,f,g){e&&(e=f.type()==epiviz.measurements.Measurement.Type.RANGE?new epiviz.datatypes.GenomicRangeArray(f,e,g.globalStartIndex,g.values,g.useOffset):new epiviz.datatypes.FeatureValueArray(f,e,g.globalStartIndex,g.values),this._mergeData(f,e));e=this._extractComputedMeasurements(c);this._updateComputedMeasurementsData(e);(f=this._measurementPendingRequestsMap.get(f))&&delete f[d.id()];this._serveAvailableData(b,c,a)};
epiviz.data.Cache.prototype._serveAvailableData=function(a,b,c){var d=epiviz.measurements.Measurement.Type,e=this,f=[],g;for(g in b)if(b.hasOwnProperty(g)){var h=b[g],l=!0,m=new epiviz.measurements.MeasurementHashtable;(function(b){h.foreach(function(c){var f=e._data[c.datasourceGroup()];if(!f||!f.rowData()||c.type()==d.FEATURE&&!f.values(c))return l=!1,!0;var g=f.rowData(),f=c.type()==d.FEATURE?f.values(c):null,g=a.subtract(g.boundaries());if(g.length||f&&(g=a.subtract(f.boundaries()),g.length))return l=
!1,!0;b.put(c,new epiviz.datatypes.MeasurementGenomicDataWrapper(c,e._data[c.datasourceGroup()]));return!1})})(m);l&&(c(g,new epiviz.datatypes.MapGenomicData(m)),f.push(g))}for(c=0;c<f.length;++c)delete b[f[c]]};
epiviz.data.Cache.prototype._calcMeasurementNeededRanges=function(a,b){var c=epiviz.measurements.Measurement.Type,d=this,e=new epiviz.measurements.MeasurementHashtable,f;for(f in b)if(b.hasOwnProperty(f)){var g=new epiviz.measurements.MeasurementSet;(function(a){b[f].foreach(function(b){b.componentMeasurements().foreach(function(b){a.add(b);a.add(b.datasource())});b.isComputed()||a.add(b.datasource())})})(g);g.foreach(function(b){var f;f=d._data[b.datasourceGroup()];if(!f||b.type()==c.FEATURE&&!f.values(b))f=
a.slice(0);else{var g=b.type()==c.FEATURE?f.values(b):f.rowData();if(g){f=[];for(var g=g.boundaries(),h=0;h<a.length;++h)f=f.concat(a[h].subtract(g))}else f=a.slice(0)}if(g=d._measurementPendingRequestsMap.get(b))for(h=0;h<f.length;++h)for(var p in g)if(g.hasOwnProperty(p)){var t=f[h].subtract(g[p]);Array.prototype.splice.apply(f,[h,1].concat(t));if(0==t.length){--h;break}if(h>=f.length)break}e.put(b,f)})}return e};
epiviz.data.Cache.prototype._extractComputedMeasurements=function(a){var b=new epiviz.measurements.MeasurementSet,c;for(c in a)a.hasOwnProperty(c)&&a[c].foreach(function(a){a.isComputed()&&b.add(a)});return b};epiviz.data.Cache.prototype._mergeData=function(a,b){var c=epiviz.measurements.Measurement.Type,d=this._data[a.datasourceGroup()];d||(d=new epiviz.datatypes.PartialSummarizedExperiment,this._data[a.datasourceGroup()]=d);a.type()==c.RANGE?d.addRowData(b):d.addValues(b)};
epiviz.data.Cache.prototype._clearUnneededData=function(){if(this._lastRequest){console.log(sprintf("Clearing data outside of range [%7s%10s%10s]",this._lastRequest.seqName(),this._lastRequest.start(),this._lastRequest.end()));var a={},b;for(b in this._data)this._data.hasOwnProperty(b)&&(a[b]=this._data[b].trim(this._lastRequest));this._data=a}};
epiviz.data.Cache.prototype._updateComputedMeasurementsData=function(a){var b=this,c=epiviz.datatypes.GenomicRange;a.foreach(function(a){var d=b._data[a.datasourceGroup()];if(!d)return!1;var f=a.componentMeasurements(),g=null,h=null,l=null;f.foreach(function(a){a=d.values(a);if(!a||!a.boundaries())return l=h=g=null,!0;if(null===l)return g=a.globalStartIndex(),h=a.size(),l=a.boundaries(),null===g;if(a.boundaries().seqName()!=l.seqName())return h=0,!0;if(g<a.globalStartIndex()){h-=a.globalStartIndex()-
g;if(0>h)return h=0,!0;g=a.globalStartIndex();var b=a.boundaries().start(),e=l.end();h>a.size()&&(h=a.size(),e=a.boundaries().end());l=c.fromStartEnd(l.seqName(),b,e)}else if(b=a.size()-g+a.globalStartIndex(),h>b){h=b;if(0>=h)return h=0,!0;l=c.fromStartEnd(l.seqName(),l.start(),a.boundaries().end())}return 0==h?!0:!1});if(null===l)return!1;var m=d.values(a);if(m&&(null===g||m.globalStartIndex()<g&&m.globalStartIndex()+m.size()>g+h))return!1;var n=new epiviz.measurements.MeasurementHashtable,p=null;
if(m&&m.size())return f.foreach(function(a){var b=d.values(a),c=[];if(null!==g)for(var e=g;e<m.globalStartIndex();++e)c.push(b.getByGlobalIndex(e));n.put(a,c)}),p=new epiviz.datatypes.FeatureValueArray(a,c.fromStartEnd(l.seqName(),l.start(),m.boundaries().start()),g,a.evaluateArr(n)),b._mergeData(a,p),n=new epiviz.measurements.MeasurementHashtable,f.foreach(function(a){var b=d.values(a),c=[];if(null!==g)for(var e=m.globalStartIndex()+m.size();e<g+h;++e)c.push(b.getByGlobalIndex(e));n.put(a,c)}),p=
new epiviz.datatypes.FeatureValueArray(a,c.fromStartEnd(l.seqName(),m.boundaries().end(),l.end()),m.globalStartIndex()+m.size(),a.evaluateArr(n)),b._mergeData(a,p),!1;n=new epiviz.measurements.MeasurementHashtable;f.foreach(function(a){var b=d.values(a),c=[];if(null!==g)for(var e=g;e<g+h;++e)c.push(b.getByGlobalIndex(e));n.put(a,c)});p=new epiviz.datatypes.FeatureValueArray(a,l,g,a.evaluateArr(n));b._mergeData(a,p);return!1})};
epiviz.data.Cache.prototype.flush=function(){this._data={};this._measurementRequestStackMap.foreach(function(a,b){b.clear()});this._measurementPendingRequestsMap.clear()};
epiviz.data.Cache.prototype.clearDatasourceGroupCache=function(a){delete this._data[a];this._measurementRequestStackMap.foreach(function(b,c){b.datasourceGroup()==a&&c.clear()});var b=[];this._measurementPendingRequestsMap.foreach(function(c,e){c.datasourceGroup()==a&&b.push(c)});for(var c=0;c<b.length;++c)this._measurementPendingRequestsMap.put(b[c],{})};epiviz.data.EmptyResponseDataProvider=function(){epiviz.data.DataProvider.call(this,epiviz.data.EmptyResponseDataProvider.DEFAULT_ID)};epiviz.data.EmptyResponseDataProvider.prototype=epiviz.utils.mapCopy(epiviz.data.DataProvider.prototype);epiviz.data.EmptyResponseDataProvider.constructor=epiviz.data.EmptyResponseDataProvider;epiviz.data.EmptyResponseDataProvider.DEFAULT_ID="empty";
epiviz.data.EmptyResponseDataProvider.prototype.getData=function(a,b){var c=a.id();switch(a.get("action")){case epiviz.data.Request.Action.GET_ROWS:b(epiviz.data.Response.fromRawObject({data:{values:{id:null,start:[],end:[],strand:[],metadata:{my_metadata:[]}},globalStartIndex:null,useOffset:!1},requestId:c}));break;case epiviz.data.Request.Action.GET_VALUES:b(epiviz.data.Response.fromRawObject({data:{values:[],globalStartIndex:null},requestId:c}));break;case epiviz.data.Request.Action.GET_MEASUREMENTS:b(epiviz.data.Response.fromRawObject({requestId:a.id(),
data:{id:[],name:[],type:[],datasourceId:[],datasourceGroup:[],defaultChartType:[],annotation:[],minValue:[],maxValue:[],metadata:[]}}));break;case epiviz.data.Request.Action.GET_SEQINFOS:b(epiviz.data.Response.fromRawObject({requestId:a.id(),data:[]}));break;case epiviz.data.Request.Action.SEARCH:b(epiviz.data.Response.fromRawObject({requestId:a.id(),data:[]}));break;case epiviz.data.Request.Action.SAVE_WORKSPACE:b(epiviz.data.Response.fromRawObject({requestId:a.id(),data:[]}));break;case epiviz.data.Request.Action.DELETE_WORKSPACE:b(epiviz.data.Response.fromRawObject({requestId:a.id(),
data:[]}));break;case epiviz.data.Request.Action.GET_WORKSPACES:b(epiviz.data.Response.fromRawObject({requestId:a.id(),data:[]}));break;default:epiviz.data.DataProvider.prototype.getData.call(this,a,b)}};epiviz.data.DataProviderFactory=function(a){this._config=a;this._providers={};for(var b=this._size=0;b<this._config.dataProviders.length;++b){a=$.isArray(this._config.dataProviders[b])?this._config.dataProviders[b]:this._config.dataProviders[b].split(",");var c=epiviz.utils.evaluateFullyQualifiedTypeName(a[0]);c&&(a=epiviz.utils.applyConstructor(c,a.slice(1)),this._providers[a.id()]=a,++this._size)}a=new epiviz.data.EmptyResponseDataProvider;this._providers[a.id()]=a;++this._size;a=this._config.workspacesDataProvider.split(",");
b=epiviz.utils.evaluateFullyQualifiedTypeName(a[0]);this._workspacesDataProvider=epiviz.utils.applyConstructor(b,a.slice(1))};epiviz.data.DataProviderFactory.prototype.foreach=function(a){for(var b in this._providers)if(this._providers.hasOwnProperty(b)&&a(this._providers[b]))break};epiviz.data.DataProviderFactory.prototype.isEmpty=function(){return!this._size};epiviz.data.DataProviderFactory.prototype.size=function(){return this._size};
epiviz.data.DataProviderFactory.prototype.get=function(a){return a in this._providers?this._providers[a]:null};epiviz.data.DataProviderFactory.prototype.workspacesDataProvider=function(){return this._workspacesDataProvider};epiviz.datatypes.GenomicArray=function(a,b,c,d){this._measurement=a;this._boundaries=b;this._globalStartIndex=c;this._values=d};epiviz.datatypes.GenomicArray.prototype.boundaries=function(){return this._boundaries};epiviz.datatypes.GenomicArray.prototype.globalStartIndex=function(){return this._globalStartIndex};epiviz.datatypes.GenomicArray.prototype.measurement=function(){return this._measurement};
epiviz.datatypes.GenomicArray.prototype.get=function(a){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicArray.prototype.size=function(){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicArray.prototype.getByGlobalIndex=function(a){return this.get(a-this._globalStartIndex)};epiviz.datatypes.GenomicArray.prototype.concatValues=function(a,b){throw Error("unimplemented abstract method");};
epiviz.datatypes.GenomicArray.prototype.createNew=function(a,b,c,d){throw Error("unimplemented abstract method");};
epiviz.datatypes.GenomicArray.prototype.merge=function(a){if(!a||void 0==a.boundaries())return this;if(this.boundaries().seqName()!=a.boundaries().seqName()||this.boundaries().start()>a.boundaries().end()||a.boundaries().start()>this.boundaries().end())throw Error("Two genomic arrays can only be merged if they overlap or are in continuation to one another");var b=this.boundaries().start()<a.boundaries().start()?this:a,c=b==this?a:this;if(b.boundaries().end()>=c.boundaries().end())return b;var d=void 0!=
b.globalStartIndex()&&void 0!=c.globalStartIndex()?b.globalStartIndex()+b.size()-c.globalStartIndex():0;a=b.measurement();var e=void 0!=b.globalStartIndex()?b.globalStartIndex():c.globalStartIndex(),f=epiviz.datatypes.GenomicRange.fromStartEnd(b.boundaries().seqName(),b.boundaries().start(),c.boundaries().end()),b=b.concatValues(c,d);return this.createNew(a,f,e,b)};epiviz.datatypes.GenomicRangeArray=function(a,b,c,d,e){epiviz.datatypes.GenomicArray.call(this,a,b,c,d);this._id=d.id;this._start=d.start;this._end=d.end;this._strand=d.strand||null;this._metadata=d.metadata;this._size=null;if(e)for(a=1;a<this._start.length;++a)this._start[a]+=this._start[a-1],this._end&&(this._end[a]+=this._end[a-1])};epiviz.datatypes.GenomicRangeArray.prototype=epiviz.utils.mapCopy(epiviz.datatypes.GenomicArray.prototype);epiviz.datatypes.GenomicRangeArray.constructor=epiviz.datatypes.GenomicRangeArray;
epiviz.datatypes.GenomicRangeArray.prototype.createNew=function(a,b,c,d){return new epiviz.datatypes.GenomicRangeArray(a,b,c,d)};epiviz.datatypes.GenomicRangeArray.prototype.get=function(a){return 0>a||a>=this.size()?null:new epiviz.datatypes.GenomicRangeArray.RowItemWrapper(this,a)};
epiviz.datatypes.GenomicRangeArray.prototype.size=function(){void 0==this._size&&(this._size=Math.max(this._id?this._id.length:0,this._start?this._start.length:0,this._end?this._end.length:0,this._metadata&&Object.keys(this._metadata).length?Math.max.apply(void 0,$.map(this._metadata,function(a){return a.length})):0));return this._size};
epiviz.datatypes.GenomicRangeArray.prototype.concatValues=function(a,b){var c;if(Array.isArray(this._strand)||Array.isArray(a._strand)||this._strand!=a._strand){c=Array.isArray(this._strand)?this._strand:epiviz.utils.fillArray(this.size(),this._strand);var d=Array.isArray(a._strand)?a._strand:epiviz.utils.fillArray(a.size(),a._strand);c=c.concat(d.slice(b))}else c=this._strand;var d=this._id?this._id.concat(a._id.slice(b)):null,e=this._start.concat(a._start.slice(b)),f=this._end?this._end.concat(a._end.slice(b)):
null,g={},h;for(h in this._metadata)this._metadata.hasOwnProperty(h)&&(g[h]=this._metadata[h].concat(a._metadata[h].slice(b)));return{id:d,start:e,end:f,strand:c,metadata:g}};
epiviz.datatypes.GenomicRangeArray.prototype.trim=function(a){if(void 0==this.globalStartIndex()||!this.size()||!a||!this.boundaries()||this.boundaries().seqName()!=a.seqName())return null;var b=Math.max(this.boundaries().start(),a.start()),c=Math.min(this.boundaries().end(),a.end());if(c<=b)return null;a=epiviz.datatypes.GenomicRange.fromStartEnd(a.seqName(),b,c);for(var c=b=-1,d=0;d<this.size();++d)0>b&&this.end(d)>=a.start()&&(b=d),this._start[d]<a.end()&&(c=d+1);if(c<=b)return null;var e;if(0<=
b&&c>=b){d={id:this._id?this._id.slice(b,c):null,start:this._start.slice(b,c),end:this._end?this._end.slice(b,c):null,strand:Array.isArray(this._strand)?this._strand.slice(b,c):this._strand,metadata:{}};for(e in this._metadata)this._metadata.hasOwnProperty(e)&&(d.metadata[e]=this._metadata[e].slice(b,c));e=this.globalStartIndex()+b}else{d={id:this._id?[]:null,start:[],end:this._end?[]:null,strand:Array.isArray(this._strand)?[]:this._strand,metadata:{}};for(e in this._metadata)this._metadata.hasOwnProperty(e)&&
(d.metadata[e]=[]);e=null}return new epiviz.datatypes.GenomicRangeArray(this.measurement(),a,e,d)};epiviz.datatypes.GenomicRangeArray.prototype.ranges=function(){return this};epiviz.datatypes.GenomicRangeArray.prototype.foreach=function(a){for(var b=this.size(),c=0;c<b&&!a(this.get(c));++c);};epiviz.datatypes.GenomicRangeArray.prototype.metadataColumns=function(){return this._metadata?Object.keys(this._metadata):[]};
epiviz.datatypes.GenomicRangeArray.prototype.id=function(a){return this._id?this._id[a]:this.globalStartIndex()+a};epiviz.datatypes.GenomicRangeArray.prototype.start=function(a){return this._start?this._start[a]:void 0};epiviz.datatypes.GenomicRangeArray.prototype.end=function(a){return this._end?this._end[a]:this.start(a)};epiviz.datatypes.GenomicRangeArray.prototype.strand=function(a){return Array.isArray(this._strand)?this._strand[a]:this._strand};
epiviz.datatypes.GenomicRangeArray.prototype.metadata=function(a,b){return this._metadata&&this._metadata[a]?this._metadata[a][b]:null};epiviz.datatypes.GenomicRangeArray.prototype.rowMetadata=function(a){var b={},c;for(c in this._metadata)this._metadata.hasOwnProperty(c)&&(b[c]=this._metadata[c][a]);return b};
epiviz.datatypes.GenomicRangeArray.prototype.toString=function(){var a,b,c;this.boundaries()?(a=this.boundaries().seqName(),b=this.boundaries().start(),c=this.boundaries().end()):a=b=c="*";a=sprintf("%25s",this.measurement().name().substr(0,22))+sprintf(" [%6s%10s%10s]",a,b,c);b=sprintf("%10s:","id");c=sprintf("%10s:","idx");var d=sprintf("%10s:","chr"),e=sprintf("%10s:","start"),f=sprintf("%10s:","end");if(void 0!=this.globalStartIndex())for(var g=this.globalStartIndex();g<this.globalStartIndex()+
this.size();++g){var h=this.getByGlobalIndex(g);b+=sprintf("%10s",h.id());c+=sprintf("%10s",g);d+=sprintf("%10s",h.seqName());e+=sprintf("%10s",h.start());f+=sprintf("%10s",h.end())}return[a,b,c,d,e,f].join("\n")};epiviz.datatypes.GenomicRangeArray.RowItemWrapper=function(a,b){this._index=b;this._parent=a};epiviz.datatypes.GenomicRangeArray.RowItemWrapper.prototype.parent=function(){return this._parent};epiviz.datatypes.GenomicRangeArray.RowItemWrapper.prototype.id=function(){return this._parent.id(this._index)};
epiviz.datatypes.GenomicRangeArray.RowItemWrapper.prototype.seqName=function(){return this._parent.boundaries()?this._parent.boundaries().seqName():void 0};epiviz.datatypes.GenomicRangeArray.RowItemWrapper.prototype.start=function(){return this._parent.start(this._index)};epiviz.datatypes.GenomicRangeArray.RowItemWrapper.prototype.end=function(){return this._parent.end(this._index)};epiviz.datatypes.GenomicRangeArray.RowItemWrapper.prototype.index=function(){return this._index};
epiviz.datatypes.GenomicRangeArray.RowItemWrapper.prototype.globalIndex=function(){return this._index+this._parent.globalStartIndex()};epiviz.datatypes.GenomicRangeArray.RowItemWrapper.prototype.equals=function(a){return a?this==a?!0:a.seqName()==this.seqName()&&a.start()==this.start()&&a.end()==this.end():!1};epiviz.datatypes.GenomicRangeArray.RowItemWrapper.prototype.strand=function(){return this._parent.strand(this._index)};
epiviz.datatypes.GenomicRangeArray.RowItemWrapper.prototype.metadata=function(a){return this._parent.metadata(a,this._index)};epiviz.datatypes.GenomicRangeArray.RowItemWrapper.prototype.rowMetadata=function(){return this._parent.rowMetadata(this._index)};epiviz.datatypes.GenomicRangeArray.RowItemWrapper.prototype.overlapsWith=function(a){return a?this==a?!0:this.seqName()!=a.seqName()?!1:this.start()<a.end()&&this.end()>a.start():!1};epiviz.datatypes.FeatureValueArray=function(a,b,c,d){var e;!d||$.isArray(d)?(e=d,d={values:d}):e=d.values;epiviz.datatypes.GenomicArray.call(this,a,b,c,e);this._valuesAnnotation=d};epiviz.datatypes.FeatureValueArray.prototype=epiviz.utils.mapCopy(epiviz.datatypes.GenomicArray.prototype);epiviz.datatypes.FeatureValueArray.constructor=epiviz.datatypes.FeatureValueArray;epiviz.datatypes.FeatureValueArray.prototype.createNew=function(a,b,c,d){return new epiviz.datatypes.FeatureValueArray(a,b,c,d)};
epiviz.datatypes.FeatureValueArray.prototype.get=function(a){return this._values[a]};epiviz.datatypes.FeatureValueArray.prototype.getAnnotation=function(a){if(void 0==this._valuesAnnotation)return null;var b={},c;for(c in this._valuesAnnotation)this._valuesAnnotation.hasOwnProperty(c)&&(b[c]=this._valuesAnnotation[c][a]);return b};epiviz.datatypes.FeatureValueArray.prototype.size=function(){return this._values?this._values.length:0};
epiviz.datatypes.FeatureValueArray.prototype.concatValues=function(a,b){if(!a||!a.size())return this._valuesAnnotation;this._valuesAnnotation&&this._valuesAnnotation.values||(this._valuesAnnotation={values:[]});var c={},d;for(d in this._valuesAnnotation)this._valuesAnnotation.hasOwnProperty(d)&&a._valuesAnnotation.hasOwnProperty(d)&&(c[d]=this._valuesAnnotation[d].concat(a._valuesAnnotation[d].slice(b)));return c};
epiviz.datatypes.FeatureValueArray.prototype.trim=function(a,b,c){if(void 0==this.globalStartIndex()||!this.size()||void 0==b||!a||!this.boundaries()||this.boundaries().seqName()!=a.seqName())return null;var d=Math.max(this.boundaries().start(),a.start()),e=Math.min(this.boundaries().end(),a.end());if(e<=d)return null;a=epiviz.datatypes.GenomicRange.fromStartEnd(a.seqName(),d,e);d=Math.max(b,this.globalStartIndex())-this.globalStartIndex();b=Math.min(b+c,this.globalStartIndex()+this.size())-this.globalStartIndex();
if(b<=d)return null;c={};for(var f in this._valuesAnnotation)this._valuesAnnotation.hasOwnProperty(f)&&(c[f]=this._valuesAnnotation[f].slice(d,b));return new epiviz.datatypes.FeatureValueArray(this.measurement(),a,d+this.globalStartIndex(),c)};
epiviz.datatypes.FeatureValueArray.prototype.toString=function(){var a,b,c;this.boundaries()?(a=this.boundaries().seqName(),b=this.boundaries().start(),c=this.boundaries().end()):a=b=c="*";a=sprintf("%25s",this.measurement().name().substr(0,22))+sprintf(" [%6s%10s%10s]",a,b,c);b=sprintf("%10s:","idx");c=sprintf("%10s:","val");if(void 0!=this.globalStartIndex())for(var d=this.globalStartIndex();d<this.globalStartIndex()+this.size();++d){var e=this.getByGlobalIndex(d);b+=sprintf("%10s",d);c+=sprintf("%10s",
e)}return[a,b,c].join("\n")};epiviz.datatypes.MeasurementGenomicDataWrapper=function(a,b){this._measurement=a;this._container=b;this._globalStartIndex=this._size=null};
epiviz.datatypes.MeasurementGenomicDataWrapper.prototype.get=function(a){var b=this._container.rowData(),c,d=this.globalStartIndex(),e=null,f=null,g=c=null,h=this.size();if(!h||a>=h||0>a)return new epiviz.datatypes.GenomicData.ValueItem(g,e,f,this._measurement,c);if(void 0!=d){if(this._measurement.type()==epiviz.measurements.Measurement.Type.FEATURE||this._measurement.type()==epiviz.measurements.Measurement.Type.UNORDERED)c=this._container.values(this._measurement),e=d-c.globalStartIndex()+a,f=c.get(e),
c=c.getAnnotation(e);e=d-b.globalStartIndex()+a;e=b.get(e);g=d+a}return new epiviz.datatypes.GenomicData.ValueItem(g,e,f,this._measurement,c)};epiviz.datatypes.MeasurementGenomicDataWrapper.prototype.getRow=function(a){var b=this._container.rowData(),c=this.globalStartIndex(),d=null,e=this.size();if(!e||a>=e||0>a)return d;void 0!=c&&(a=c-b.globalStartIndex()+a,d=b.get(a));return d};epiviz.datatypes.MeasurementGenomicDataWrapper.prototype.measurement=function(){return this._measurement};
epiviz.datatypes.MeasurementGenomicDataWrapper.prototype.globalStartIndex=function(){if(null!==this._globalStartIndex)return this._globalStartIndex;var a,b=this._container.rowData().globalStartIndex();if(null===b)return b;if(this._measurement.type()==epiviz.measurements.Measurement.Type.FEATURE||this._measurement.type()==epiviz.measurements.Measurement.Type.UNORDERED){a=this._container.values(this._measurement);if(!a.globalStartIndex())return a.globalStartIndex();b=Math.max(b,a.globalStartIndex())}return this._globalStartIndex=
b};epiviz.datatypes.MeasurementGenomicDataWrapper.prototype.globalEndIndex=function(){var a=this.globalStartIndex();return null==a?null:a+this.size()};
epiviz.datatypes.MeasurementGenomicDataWrapper.prototype.size=function(){if(null!==this._size)return this._size;var a=this.globalStartIndex();if(void 0==a)return 0;var b=this._container.rowData(),c=this._container.values(this._measurement),b=b.size()-a+b.globalStartIndex();if(this._measurement.type()==epiviz.measurements.Measurement.Type.FEATURE||this._measurement.type()==epiviz.measurements.Measurement.Type.UNORDERED)b=Math.min(b,c.size()-a+c.globalStartIndex());return this._size=Math.max(0,b)};
epiviz.datatypes.MeasurementGenomicDataWrapper.prototype.getByGlobalIndex=function(a){var b=this.globalStartIndex();return void 0==b?new epiviz.datatypes.GenomicData.ValueItem(null,null,null,this._measurement,null):this.get(a-b)};epiviz.datatypes.MeasurementGenomicDataWrapper.prototype.getRowByGlobalIndex=function(a){var b=this.globalStartIndex();return void 0==b?null:this.getRow(a-b)};
epiviz.datatypes.MeasurementGenomicDataWrapper.prototype.binarySearchStarts=function(a){var b=this._container.rowData();if(0==this.size()||!b||0==b.size()||b.start(0)>=a.end()||b.start(b.size()-1)<=a.start())return{index:null,length:0};for(var c=0,d=b.size()-1,e,f=null;c<=d;)e=Math.floor(.5*(c+d)),b.start(e)==a.start()?(f=e,d=e-1):b.start(e)<a.start()?c=e+1:d=e-1;null===f&&(f=c);for(var c=0,d=b.size()-1,g=null;c<=d;)e=Math.floor(.5*(c+d)),b.start(e)==a.end()?(g=e,c=e+1):b.start(e)<a.end()?c=e+1:d=
e-1;null===g&&(g=c-1);a=Math.max(f+b.globalStartIndex(),this.globalStartIndex());b=Math.min(g+b.globalStartIndex(),this.globalStartIndex()+this.size()-1);return{index:a-this.globalStartIndex(),length:b-a+1}};epiviz.datatypes.SeqInfo=function(a,b,c){this.seqName=a;this.min=b;this.max=c};epiviz.datatypes.SeqInfo.prototype.raw=function(){return[this.seqName,this.min,this.max]};epiviz.datatypes.SeqInfo.fromRawObject=function(a){return new epiviz.datatypes.SeqInfo(a[0],parseFloat(a[1]),parseFloat(a[2]))};
epiviz.datatypes.SeqInfo.compare=function(a,b){if(a.seqName==b.seqName)return 0;if(void 0==a.seqName)return-1;if(void 0==b.seqName)return 1;var c=a.seqName.replace(/\D/g,""),d=b.seqName.replace(/\D/g,"");return""==c||""==d||!epiviz.utils.stringStartsWith(a.seqName,c)&&!epiviz.utils.stringEndsWith(a.seqName,c)||!epiviz.utils.stringStartsWith(b.seqName,d)&&!epiviz.utils.stringEndsWith(b.seqName,d)?a.seqName<b.seqName?-1:a.seqName>b.seqName?1:0:parseInt(c)-parseInt(d)};epiviz.data.DataManager=function(a,b){this._config=a;this._measurements=new epiviz.measurements.MeasurementSet;this._dataProviderFactory=b;this._cache=new epiviz.data.Cache(a,b);this._combinedRequestsStacks={};this._requestDataFailed=new epiviz.events.Event;this._requestAddMeasurements=new epiviz.events.Event;this._requestRemoveMeasurements=new epiviz.events.Event;this._requestAddChart=new epiviz.events.Event;this._requestRemoveChart=new epiviz.events.Event;this._requestPrintWorkspace=new epiviz.events.Event;
this._requestLoadWorkspace=new epiviz.events.Event;this._requestAddSeqInfos=new epiviz.events.Event;this._requestRemoveSeqNames=new epiviz.events.Event;this._requestNavigate=new epiviz.events.Event;this._requestRedraw=new epiviz.events.Event;this._flushCache=new epiviz.events.Event;this._clearDatasourceGroupCache=new epiviz.events.Event;this._requestCurrentLocation=new epiviz.events.Event;this._requestGetChartSettings=new epiviz.events.Event;this._requestSetChartSettings=new epiviz.events.Event;this._requestGetAvailableCharts=
new epiviz.events.Event;this._loadingCurrentDataSet=new epiviz.events.Event;this._registerProviderAddMeasurements();this._registerProviderRemoveMeasurements();this._registerProviderAddChart();this._registerProviderRemoveChart();this._registerProviderPrintWorkspace();this._registerProviderLoadWorkspace();this._registerProviderAddSeqInfos();this._registerProviderRemoveSeqNames();this._registerProviderNavigate();this._registerProviderRedraw();this._registerProviderFlushCache();this._registerProviderClearDatasourceGroupCache();
this._registerProviderGetCurrentLocation();this._registerProviderGetChartSettings();this._registerProviderSetChartSettings();this._registerProviderGetAvailableCharts()};epiviz.data.DataManager.prototype.onRequestAddMeasurements=function(){return this._requestAddMeasurements};epiviz.data.DataManager.prototype.onRequestRemoveMeasurements=function(){return this._requestRemoveMeasurements};epiviz.data.DataManager.prototype.onRequestAddChart=function(){return this._requestAddChart};
epiviz.data.DataManager.prototype.onRequestRemoveChart=function(){return this._requestRemoveChart};epiviz.data.DataManager.prototype.onRequestPrintWorkspace=function(){return this._requestPrintWorkspace};epiviz.data.DataManager.prototype.onRequestLoadWorkspace=function(){return this._requestLoadWorkspace};epiviz.data.DataManager.prototype.onRequestAddSeqInfos=function(){return this._requestAddSeqInfos};epiviz.data.DataManager.prototype.onRequestRemoveSeqNames=function(){return this._requestRemoveSeqNames};
epiviz.data.DataManager.prototype.onRequestNavigate=function(){return this._requestNavigate};epiviz.data.DataManager.prototype.onRequestRedraw=function(){return this._requestRedraw};epiviz.data.DataManager.prototype.onClearDatasourceGroupCache=function(){return this._clearDatasourceGroupCache};epiviz.data.DataManager.prototype.onFlushCache=function(){return this._flushCache};epiviz.data.DataManager.prototype.onRequestCurrentLocation=function(){return this._requestCurrentLocation};
epiviz.data.DataManager.prototype.onRequestGetChartSettings=function(){return this._requestGetChartSettings};epiviz.data.DataManager.prototype.onRequestSetChartSettings=function(){return this._requestSetChartSettings};epiviz.data.DataManager.prototype.onRequestGetAvailableCharts=function(){return this._requestGetAvailableCharts};
epiviz.data.DataManager.prototype.getSeqInfos=function(a){var b=this,c=0,d={},e=[];this._dataProviderFactory.foreach(function(f){f.getData(epiviz.data.Request.getSeqInfos(f.id()),function(f){if(f=f.data())if(Array.isArray(f))for(l=0;l<f.length;++l)f[l][0]in d||(e.push(epiviz.datatypes.SeqInfo.fromRawObject(f[l])),d[f[l][0]]=!0);else for(var g=Object.keys(f),l=0;l<g.length;l++)g[l]in d||(e.push(epiviz.datatypes.SeqInfo.fromRawObject([g[l],f[g[l]][0],f[g[l]][1]])),d[g[l]]=!0);++c<b._dataProviderFactory.size()||
a(e.sort(epiviz.datatypes.SeqInfo.compare))})})};epiviz.data.DataManager.prototype.updateChartSettings=function(a){this._dataProviderFactory.foreach(function(b){if(b.id().includes("websocket-")){var c=null;null!=a.colorMap&&(c=a.colorMap._colors);b.updateChartSettings(epiviz.data.Request.createRequest({action:epiviz.data.Request.Action.SET_CHART_SETTINGS,settings:a.settings,colorMap:c,chartId:a.chartId}),function(){})}})};
epiviz.data.DataManager.prototype.getMeasurements=function(a){var b=this,c=new epiviz.measurements.MeasurementSet,d=0;this._dataProviderFactory.foreach(function(e){e.getData(epiviz.data.Request.getMeasurements(e.id()),function(f){f=f.data();"default"==b._config.configType&&b._loadingCurrentDataSet.notify({dataset:e.id(),count:d,size:b._dataProviderFactory.size(),sampleSize:f.id.length,sequencingType:f.sequencingType?f.sequencingType[0]:null});if(f)for(var g=f.id?f.id.length||0:0,h=0;h<g;++h)f.annotation[h].sequencingType=
f.sequencingType[h],c.add(new epiviz.measurements.Measurement(f.id[h],f.name[h],$.isArray(f.type)?f.type[h]:f.type,$.isArray(f.datasourceId)?f.datasourceId[h]:f.datasourceId,$.isArray(f.datasourceGroup)?f.datasourceGroup[h]:f.datasourceGroup,e.id(),null,$.isArray(f.defaultChartType)?f.defaultChartType[h]:f.defaultChartType,f.annotation[h],$.isArray(f.minValue)?f.minValue[h]:f.minValue,$.isArray(f.maxValue)?f.maxValue[h]:f.maxValue,$.isArray(f.metadata)&&$.isArray(f.metadata[0])?f.metadata[h]:f.metadata,
f.datasourceDescription[h]));++d<b._dataProviderFactory.size()||a(c)})})};epiviz.data.DataManager.prototype.getData=function(a,b,c){this._config.useCache?this._cache.getData(a,b,c):this._getDataNoCache(a,b,c)};
epiviz.data.DataManager.prototype._getDataNoCache=function(a,b,c){var d=this,e={},f;for(f in b)if(b.hasOwnProperty(f)){var g=b[f].split(function(a){return a.dataprovider()}),h;for(h in g)if(g.hasOwnProperty(h)){var l=e[h];void 0==l?e[h]=g[h]:l.addAll(g[h])}}var m={};epiviz.utils.forEach(e,function(e,f){var g=e.split(function(a){return a.datasource().id()}),h=epiviz.data.Request.getCombined(g,a),l=d._combinedRequestsStacks[f];void 0==l&&(l=new epiviz.data.RequestStack,d._combinedRequestsStacks[f]=
l);l.pushRequest(h,function(e){var h={};epiviz.utils.forEach(g,function(b,c){for(var d=b.first().datasource(),f=e[c],g=new epiviz.datatypes.PartialSummarizedExperiment,m=[],l=0;l<f.cols[Object.keys(f.cols)[0]].length;l++)m[l]=0;var n=f.globalStartIndex;isNaN(a._start)&&(a._start=n);isNaN(a._width)&&(a._width=f.rows.end[f.rows.end.length-1]-a._start);d=new epiviz.datatypes.GenomicRangeArray(d,a,n,f.rows);g.addRowData(d);b.foreach(function(b){b=new epiviz.datatypes.FeatureValueArray(b,a,n,f.cols[b.id()]||
m);g.addValues(b)});h[c]=g});m[f]=h;d._serveAvailableData(a,b,c,m)});var n=d._dataProviderFactory.get(f)||d._dataProviderFactory.get(epiviz.data.EmptyResponseDataProvider.DEFAULT_ID);n.getData(h,function(a){null==a._data?(l.clear(),d._requestDataFailed.notify({selection:n._lastSelection,order:n._lastOrder,selectedLevels:n._lastSelectedLevels})):l.serveData(a)})})};
epiviz.data.DataManager.prototype._serveAvailableData=function(a,b,c,d){var e=[];epiviz.utils.forEach(b,function(a,b){var f=!0,g=new epiviz.measurements.MeasurementHashtable;a.foreach(function(a){if(!(a.dataprovider()in d))return f=!1,!0;var b=new epiviz.datatypes.MeasurementGenomicDataWrapper(a,d[a.dataprovider()][a.datasource().id()]);g.put(a,b)});if(f){var m=new epiviz.datatypes.MapGenomicData(g);c(b,m);e.push(b)}});e.forEach(function(a){delete b[a]})};
epiviz.data.DataManager.prototype.getPCA=function(a,b,c){var d=this,e={},f;for(f in b)if(b.hasOwnProperty(f)){var g=b[f].split(function(a){return a.dataprovider()}),h;for(h in g)if(g.hasOwnProperty(h)){var l=e[h];void 0==l?e[h]=g[h]:l.addAll(g[h])}}epiviz.utils.forEach(e,function(b,e){var g=b.split(function(a){return a.datasource().id()}),h=epiviz.data.Request.getPCA(g,a),m=Object.keys(g)[0];(d._dataProviderFactory.get(e)||d._dataProviderFactory.get(epiviz.data.EmptyResponseDataProvider.DEFAULT_ID)).getData(h,
function(a){var b=a.data();"websocket"==a.data().dataprovidertype&&(b=b[m]);c(f,b)})})};
epiviz.data.DataManager.prototype.getDiversity=function(a,b,c){var d=this,e={},f;for(f in b)if(b.hasOwnProperty(f)){var g=b[f].split(function(a){return a.dataprovider()}),h;for(h in g)if(g.hasOwnProperty(h)){var l=e[h];void 0==l?e[h]=g[h]:l.addAll(g[h])}}epiviz.utils.forEach(e,function(b,e){var g=b.split(function(a){return a.datasource().id()}),h=epiviz.data.Request.getDiversity(g,a),m=Object.keys(g)[0];(d._dataProviderFactory.get(e)||d._dataProviderFactory.get(epiviz.data.EmptyResponseDataProvider.DEFAULT_ID)).getData(h,
function(a){var b=a.data();"websocket"==a.data().dataprovidertype&&(b=b[m]);c(f,b)})})};
epiviz.data.DataManager.prototype.getFeatureData=function(a,b,c,d){var e=this,f={},g;for(g in b)if(b.hasOwnProperty(g)){var h=b[g].split(function(a){return a.dataprovider()}),l;for(l in h)if(h.hasOwnProperty(l)){var m=f[l];void 0==m?f[l]=h[l]:m.addAll(h[l])}}epiviz.utils.forEach(f,function(b,f){var h=b.split(function(a){return a.datasource().id()}),m=epiviz.data.Request.getFeatureData(h,c,a),l=Object.keys(h)[0];(e._dataProviderFactory.get(f)||e._dataProviderFactory.get(epiviz.data.EmptyResponseDataProvider.DEFAULT_ID)).getData(m,
function(a){var b=a.data();"websocket"==a.data().dataprovidertype&&(b=b[l]);d(g,b)})})};
epiviz.data.DataManager.prototype.getHierarchy=function(a,b){for(var c in a)if(a.hasOwnProperty(c))var d=a[c];var e=d.dataprovider;e||d.measurements.foreach(function(a){return a.dataprovider()?(e=a.dataprovider(),!0):!1});var f=d.datasourceGroup;f||d.measurements.foreach(function(a){return a.datasourceGroup()?(f=a.datasourceGroup(),!0):!1});(this._dataProviderFactory.get(e)||this._dataProviderFactory.get(epiviz.data.EmptyResponseDataProvider.DEFAULT_ID)).getData(epiviz.data.Request.getHierarchy(f,d.customData),
function(a){b(c,a.data())})};
epiviz.data.DataManager.prototype.propagateHierarchyChanges=function(a,b){for(var c in a)if(a.hasOwnProperty(c)){var d=a[c],e=d.dataprovider;e||d.measurements.foreach(function(a){return a.dataprovider()?(e=a.dataprovider(),!0):!1});var f=this._dataProviderFactory.get(e)||this._dataProviderFactory.get(epiviz.data.EmptyResponseDataProvider.DEFAULT_ID);(function(a,c,d){c.getData(epiviz.data.Request.propagateHierarchyChanges(d.datasourceGroup,d.customData.selection,d.customData.order,d.customData.selectedLevels),
function(e){setTimeout(function(){c.onRequestClearDatasourceGroupCache().notify({datasourceGroup:d.datasourceGroup,result:new epiviz.events.EventResult});c.onRequestRedraw().notify({result:new epiviz.events.EventResult});b(a,e.data())},0)})})(c,f,d)}};
epiviz.data.DataManager.prototype.getWorkspaces=function(a,b,c){var d=this._dataProviderFactory.workspacesDataProvider();if(!d)throw Error("Invalid data provider for workspaces (see Config.workspaceDataProvider)");d.getData(epiviz.data.Request.getWorkspaces(b,c),function(b){b=b.data();var c=[];if(b&&b.length)for(var d=0;d<b.length;++d)c.push({id:b[d].id,name:b[d].name,content:JSON.parse(b[d].content)});a(c)})};
epiviz.data.DataManager.prototype.saveWorkspace=function(a,b,c){var d=this._dataProviderFactory.workspacesDataProvider();if(!d)throw Error("Invalid data provider for workspaces (see Config.workspaceDataProvider)");d.getData(epiviz.data.Request.saveWorkspace(a,b),function(a){a=a.data();c(a)})};
epiviz.data.DataManager.prototype.deleteWorkspace=function(a){var b=this._dataProviderFactory.workspacesDataProvider();if(!b)throw Error("Invalid data provider for workspaces (see Config.workspaceDataProvider)");b.getData(epiviz.data.Request.deleteWorkspace(a),function(a){a.data()})};
epiviz.data.DataManager.prototype.search=function(a,b,c){var d=[];c=c._properties.visConfigSelection;var e=c.dataprovider;e||c.measurements.foreach(function(a){return a.dataprovider()?(e=a.dataprovider(),!0):!1});var f=c.datasourceGroup;f||c.measurements.foreach(function(a){return a.datasourceGroup()?(f=a.datasourceGroup(),!0):!1});(this._dataProviderFactory.get(e)||this._dataProviderFactory.get(epiviz.data.EmptyResponseDataProvider.DEFAULT_ID)).getData(epiviz.data.Request.search(b,this._config.maxSearchResults,
f),function(b){(b=b.data().nodes)&&epiviz.utils.arrayAppend(d,b);a(d)})};epiviz.data.DataManager.prototype.clearDatasourceGroupCache=function(a){this._cache.clearDatasourceGroupCache(a);this._clearDatasourceGroupCache.notify({datasourceGroup:a})};epiviz.data.DataManager.prototype._registerProviderAddMeasurements=function(){var a=this;this._dataProviderFactory.foreach(function(b){b.onRequestAddMeasurements().addListener(new epiviz.events.EventListener(function(b){a._requestAddMeasurements.notify(b)}))})};
epiviz.data.DataManager.prototype._registerProviderRemoveMeasurements=function(){var a=this;this._dataProviderFactory.foreach(function(b){b.onRequestRemoveMeasurements().addListener(new epiviz.events.EventListener(function(b){a._requestRemoveMeasurements.notify(b)}))})};epiviz.data.DataManager.prototype._registerProviderAddChart=function(){var a=this;this._dataProviderFactory.foreach(function(b){b.onRequestAddChart().addListener(new epiviz.events.EventListener(function(b){a._requestAddChart.notify(b)}))})};
epiviz.data.DataManager.prototype._registerProviderRemoveChart=function(){var a=this;this._dataProviderFactory.foreach(function(b){b.onRequestRemoveChart().addListener(new epiviz.events.EventListener(function(b){a._requestRemoveChart.notify(b)}))})};epiviz.data.DataManager.prototype._registerProviderPrintWorkspace=function(){var a=this;this._dataProviderFactory.foreach(function(b){b.onRequestPrintWorkspace().addListener(new epiviz.events.EventListener(function(b){a._requestPrintWorkspace.notify(b)}))})};
epiviz.data.DataManager.prototype._registerProviderLoadWorkspace=function(){var a=this;this._dataProviderFactory.foreach(function(b){b.onRequestLoadWorkspace().addListener(new epiviz.events.EventListener(function(b){a._requestLoadWorkspace.notify(b)}))})};
epiviz.data.DataManager.prototype._registerProviderAddSeqInfos=function(){var a=this;this._dataProviderFactory.foreach(function(b){b.onRequestAddSeqInfos().addListener(new epiviz.events.EventListener(function(b){for(var c=[],e=0;e<b.seqInfos.length;++e)c.push(epiviz.datatypes.SeqInfo.fromRawObject(b.seqInfos[e]));a._requestAddSeqInfos.notify({seqInfos:c,result:b.result})}))})};epiviz.data.DataManager.prototype._registerProviderRemoveSeqNames=function(){var a=this;this._dataProviderFactory.foreach(function(b){b.onRequestRemoveSeqNames().addListener(new epiviz.events.EventListener(function(b){a._requestRemoveSeqNames.notify(b)}))})};
epiviz.data.DataManager.prototype._registerProviderNavigate=function(){var a=this;this._dataProviderFactory.foreach(function(b){b.onRequestNavigate().addListener(new epiviz.events.EventListener(function(b){a._requestNavigate.notify(b)}))})};epiviz.data.DataManager.prototype._registerProviderRedraw=function(){var a=this;this._dataProviderFactory.foreach(function(b){b.onRequestRedraw().addListener(new epiviz.events.EventListener(function(b){a._requestRedraw.notify(b)}))})};
epiviz.data.DataManager.prototype._registerProviderClearDatasourceGroupCache=function(){var a=this;this._dataProviderFactory.foreach(function(b){b.onRequestClearDatasourceGroupCache().addListener(new epiviz.events.EventListener(function(b){a.clearDatasourceGroupCache(b.datasourceGroup);b.result.success=!0}))})};
epiviz.data.DataManager.prototype._registerProviderFlushCache=function(){var a=this;this._dataProviderFactory.foreach(function(b){b.onRequestFlushCache().addListener(new epiviz.events.EventListener(function(b){a.flushCache();b.result.success=!0}))})};epiviz.data.DataManager.prototype._registerProviderGetCurrentLocation=function(){var a=this;this._dataProviderFactory.foreach(function(b){b.onRequestCurrentLocation().addListener(new epiviz.events.EventListener(function(b){a._requestCurrentLocation.notify(b)}))})};
epiviz.data.DataManager.prototype._registerProviderSetChartSettings=function(){var a=this;this._dataProviderFactory.foreach(function(b){b.onRequestSetChartSettings().addListener(new epiviz.events.EventListener(function(b){a._requestSetChartSettings.notify(b)}))})};epiviz.data.DataManager.prototype._registerProviderGetChartSettings=function(){var a=this;this._dataProviderFactory.foreach(function(b){b.onRequestGetChartSettings().addListener(new epiviz.events.EventListener(function(b){a._requestGetChartSettings.notify(b)}))})};
epiviz.data.DataManager.prototype._registerProviderGetAvailableCharts=function(){var a=this;this._dataProviderFactory.foreach(function(b){b.onRequestGetChartSettings().addListener(new epiviz.events.EventListener(function(b){a._requestGetAvailableCharts.notify(b)}))})};epiviz.datatypes.ItemFilteredGenomicData=function(a,b){epiviz.datatypes.MapGenomicData.call(this);this._data=a;this._filter=b;this._deferredInit=null;this._initialize()};epiviz.datatypes.ItemFilteredGenomicData.prototype=epiviz.utils.mapCopy(epiviz.datatypes.MapGenomicData.prototype);epiviz.datatypes.ItemFilteredGenomicData.constructor=epiviz.datatypes.ItemFilteredGenomicData;
epiviz.datatypes.ItemFilteredGenomicData.prototype._initialize=function(){if(this._deferredInit)return this._deferredInit;this._deferredInit=new epiviz.deferred.Deferred;var a=this,b=this._filter,c=this._data;c.ready(function(){b.preMark()(c).done(function(d){var e=new epiviz.measurements.MeasurementHashtable,f=c.measurements();epiviz.utils.deferredFor(f.length,function(a){var g=new epiviz.deferred.Deferred,l=f[a],m=[],n={};epiviz.utils.deferredFor(c.size(l),function(a){var e=new epiviz.deferred.Deferred,
f=c.get(l,a);b.mark()(f,c,d).done(function(a){a&&(m.push(f),n[f.globalIndex]=f);e.resolve()});return e}).done(function(){e.put(l,new epiviz.datatypes.MeasurementGenomicDataArrayWrapper(l,m,n));g.resolve()});return g}).done(function(){a._setMap(e);a._deferredInit.resolve()})})});return this._deferredInit};epiviz.datatypes.RowItemImpl=function(a,b,c,d,e,f,g){this._id=a;this._seqName=b;this._start=c;this._end=d;this._globalIndex=e;this._strand=f;this._rowMetadata=g};epiviz.datatypes.RowItemImpl.prototype.id=function(){return this._id};epiviz.datatypes.RowItemImpl.prototype.seqName=function(){return this._seqName};epiviz.datatypes.RowItemImpl.prototype.start=function(){return this._start};epiviz.datatypes.RowItemImpl.prototype.end=function(){return this._end};
epiviz.datatypes.RowItemImpl.prototype.globalIndex=function(){return this._globalIndex};epiviz.datatypes.RowItemImpl.prototype.strand=function(){return this._strand};epiviz.datatypes.RowItemImpl.prototype.metadata=function(a){a=this._rowMetadata[a];return void 0==a?null:a};epiviz.datatypes.RowItemImpl.prototype.rowMetadata=function(){return this._rowMetadata};epiviz.datatypes.MeasurementAggregatedGenomicData=function(a,b,c){epiviz.datatypes.MapGenomicData.call(this);this._data=a;this._groupByMarker=b;this._aggregator=c;this._deferredInit=null;this._initialize()};epiviz.datatypes.MeasurementAggregatedGenomicData.prototype=epiviz.utils.mapCopy(epiviz.datatypes.MapGenomicData.prototype);epiviz.datatypes.MeasurementAggregatedGenomicData.constructor=epiviz.datatypes.MeasurementAggregatedGenomicData;
epiviz.datatypes.MeasurementAggregatedGenomicData.prototype._initialize=function(){if(this._deferredInit)return this._deferredInit;this._deferredInit=new epiviz.deferred.Deferred;var a=this,b=this._groupByMarker,c=this._data;c.ready(function(){b.preMark()(c).done(function(d){var e=new epiviz.measurements.MeasurementHashtable,f={},g=c.measurements();epiviz.utils.deferredFor(g.length,function(a){var e=new epiviz.deferred.Deferred,h=g[a];b.mark()(h,c,d).done(function(a){a in f||(f[a]=[]);f[a].push(h);
e.resolve()});return e}).done(function(){var b={},d,g;for(d in f)if(f.hasOwnProperty(d)){g=f[d];var n=d+"-group",p=d,t=g[0].type(),q=g[0].datasourceId(),r=g[0].datasourceGroup(),u=g[0].dataprovider(),v=g[0].defaultChartType(),x=epiviz.utils.mapCopy(g[0].annotation()),y=g[0].minValue(),A=g[0].maxValue(),C=g[0].metadata(),D={};C.forEach(function(a){D[a]=a});f[d].forEach(function(a){q!=a.datasourceId()&&(q="*");r!=a.datasourceGroup()&&(r="*");u!=a.dataprovider()&&(u="*");v!=a.defaultChartType()&&(v=
"*");var b=a.annotation();if(x!=b)if(void 0==x)x=epiviz.utils.mapCopy(b);else if(void 0!=b)for(var c in b)b.hasOwnProperty(c)&&(c in x?x[c]!=b[c]&&(x[c]="*"):x[c]=b[c]);y=Math.min(y,a.minValue());A=Math.max(A,a.maxValue());a.metadata().forEach(function(a){a in D||(D[a]=a,C.push(a))})});b[d]=new epiviz.measurements.Measurement(n,p,t,q,r,u,null,v,x,y,A,C)}for(d in f)if(f.hasOwnProperty(d)){n=b[d];p=[];t={};g=f[d];for(var B=Math.min.apply(void 0,g.map(function(a){return c.globalStartIndex(a)})),H=Math.max.apply(void 0,
g.map(function(a){return c.globalEndIndex(a)})),z=B;z<H;++z){var w=g.map(function(a){return c.getByGlobalIndex(a,z)}).filter(function(a){return a});w.length&&(B=w.map(function(a){return a.value}),B=a._aggregator.aggregate(d,g,B),w=w[0].rowItem,w=new epiviz.datatypes.RowItemImpl(w.id(),w.seqName(),w.start(),w.end(),w.globalIndex(),w.strand(),w.rowMetadata()||{}),B=new epiviz.datatypes.GenomicData.ValueItem(z,w,B.value,n,{errMinus:B.errMinus,errPlus:B.errPlus}),p.push(B),t[z]=B)}g=new epiviz.datatypes.MeasurementGenomicDataArrayWrapper(n,
p,t);e.put(n,g)}a._setMap(e);a._deferredInit.resolve()})})});return this._deferredInit};epiviz.datatypes.MeasurementOrderedGenomicData=function(a,b){epiviz.datatypes.MapGenomicData.call(this);this._data=a;this._order=b;this._deferredInit=null;this._initialize()};epiviz.datatypes.MeasurementOrderedGenomicData.prototype=epiviz.utils.mapCopy(epiviz.datatypes.MapGenomicData.prototype);epiviz.datatypes.MeasurementOrderedGenomicData.constructor=epiviz.datatypes.MeasurementOrderedGenomicData;
epiviz.datatypes.MeasurementOrderedGenomicData.prototype._initialize=function(){if(this._deferredInit)return this._deferredInit;this._deferredInit=new epiviz.deferred.Deferred;var a=this,b=this._data,c=this._order;b.ready(function(){c.preMark()(b).done(function(d){var e=new epiviz.measurements.MeasurementHashtable,f=b.measurements(),g=new epiviz.measurements.MeasurementHashtable;epiviz.utils.deferredFor(f.length,function(a){var e=new epiviz.deferred.Deferred,h=f[a];c.mark()(h,b,d).done(function(a){g.put(h,
a);e.resolve()});return e}).done(function(){f.sort(function(a,b){var c=g.get(a),d=g.get(b);return c==d?0:c<d?-1:1});f.forEach(function(a){e.put(a,b.getSeries(a))});a._setMap(e);a._deferredInit.resolve()})})});return this._deferredInit};epiviz.deferred.Promise=function(a){this._promise=a};epiviz.deferred.Promise.prototype.then=function(a,b,c){return new epiviz.deferred.Promise(this._promise.then(a,b,c))};epiviz.deferred.Promise.prototype.done=function(a,b){return new epiviz.deferred.Deferred(this._promise.done(a,b))};epiviz.deferred.Promise.prototype.fail=function(a,b){return new epiviz.deferred.Deferred(this._promise.fail(a,b))};
epiviz.deferred.Promise.prototype.always=function(a,b){return new epiviz.deferred.Deferred(this._promise.always(a,b))};epiviz.deferred.Promise.prototype.state=function(){return this._promise.state()};epiviz.ui.charts.CustomSetting=function(a,b,c,d,e){this.id=a;this.type=b;this.defaultValue=c;this.label=d||a;this.possibleValues=e||null};epiviz.ui.charts.CustomSetting.Type={NUMBER:"number",STRING:"string",ARRAY:"array",BOOLEAN:"boolean",CATEGORICAL:"categorical",MEASUREMENTS_METADATA:"measurementsMetadata",MEASUREMENTS_ANNOTATION:"measurementsAnnotation"};epiviz.ui.charts.CustomSetting.DEFAULT="default";epiviz.ui.charts.VisEventArgs=function(a,b){this.id=a;this.args=b};epiviz.ui.charts.Axis={X:"x",Y:"y"};epiviz.ui.charts.Margins=function(a,b,c,d){this._top=a;this._left=b;this._bottom=c;this._right=d};epiviz.ui.charts.Margins.ZERO_MARGIN=new epiviz.ui.charts.Margins(0,0,0,0);epiviz.ui.charts.Margins.prototype.top=function(){return this._top};epiviz.ui.charts.Margins.prototype.left=function(){return this._left};epiviz.ui.charts.Margins.prototype.bottom=function(){return this._bottom};epiviz.ui.charts.Margins.prototype.right=function(){return this._right};
epiviz.ui.charts.Margins.prototype.sumAxis=function(a){switch(a){case epiviz.ui.charts.Axis.X:return this._left+this._right;case epiviz.ui.charts.Axis.Y:return this._top+this._bottom;default:throw Error("Invalid argument: "+a);}};epiviz.ui.charts.Margins.prototype.raw=function(){return{top:this._top,left:this._left,bottom:this._bottom,right:this._right}};epiviz.ui.charts.Margins.fromRawObject=function(a){return new epiviz.ui.charts.Margins(a.top,a.left,a.bottom,a.right)};
epiviz.ui.charts.Margins.prototype.copy=function(){return new epiviz.ui.charts.Margins(this._top,this._left,this._bottom,this._right)};epiviz.ui.charts.Margins.prototype.equals=function(a){return a?this==a?!0:this._top==a._top&&this._left==a._left&&this._bottom==a._bottom&&this._right==a._right:!1};epiviz.ui.charts.Visualization=function(a,b,c){this._id=a;this._container=b;this._properties=c;this._originalMethods={};this._hasModifiedMethods=!1;this._lastModifiedMethod="draw";var d=this;if(c.modifiedMethods){var e=new epiviz.deferred.Deferred,f=c.modifiedMethods,g=Object.keys(f),h={},l=0,m;for(m in f)f.hasOwnProperty(m)&&"_setModifiedMethods"!=m&&function(a){epiviz.caja.cajole(f[a],epiviz.caja.buildChartMethodContext()).done(function(b){b&&(h[a]=b,l+=1,l>=g.length&&e.resolve())})}(m);e.done(function(){for(var a in h)h.hasOwnProperty(a)&&
(d._originalMethods[a]=d[a],d[a]=h[a],d._lastModifiedMethod=a);d._hasModifiedMethods=!0;d.draw()})}this._customSettingsValues={};for(a=0;a<c.customSettingsDefs.length;++a)switch(b=c.customSettingsDefs[a],m=c.customSettingsValues[b.id],b.type){case epiviz.ui.charts.CustomSetting.Type.BOOLEAN:this._customSettingsValues[b.id]=!1===m||m?m:b.defaultValue;break;case epiviz.ui.charts.CustomSetting.Type.NUMBER:this._customSettingsValues[b.id]=0===m||m?m:b.defaultValue;break;case epiviz.ui.charts.CustomSetting.Type.STRING:this._customSettingsValues[b.id]=
""===m||m?m:b.defaultValue;break;case epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_METADATA:var n={};c.visConfigSelection.measurements.foreach(function(a){a.metadata().forEach(function(a){n[a]=a})});b.possibleValues=Object.keys(n);b.possibleValues.sort();m=m||b.defaultValue;this._customSettingsValues[b.id]=m in n?m:b.possibleValues.length?b.possibleValues[0]:"";break;case epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_ANNOTATION:n={name:"name"};c.visConfigSelection.measurements.foreach(function(a){(a=
a.annotation())&&Object.keys(a).forEach(function(a){n[a]=a})});b.possibleValues=Object.keys(n);b.possibleValues.sort();m=m||b.defaultValue;this._customSettingsValues[b.id]=m in n?m:b.possibleValues.length?b.possibleValues[0]:"";break;default:this._customSettingsValues[b.id]=m||b.defaultValue}this._svgId=sprintf("%s-svg",this._id);this._lastRange=this._lastData=this._unalteredData=this._svg=null;this._slide=0;this._zoom=1;this._markers=c.chartMarkers;this._markersMap={};this._markersIndices={};this._markers.forEach(function(a,
b){a&&(d._markersMap[a.id()]=a,d._markersIndices[a.id()]=b)});this._autoPropagateChanges=!0;this._hover=new epiviz.events.Event;this._unhover=new epiviz.events.Event;this._select=new epiviz.events.Event;this._deselect=new epiviz.events.Event;this._save=new epiviz.events.Event;this._remove=new epiviz.events.Event;this._colorsChanged=new epiviz.events.Event;this._methodsModified=new epiviz.events.Event;this._methodsReset=new epiviz.events.Event;this._markersModified=new epiviz.events.Event;this._customSettingsChanged=
new epiviz.events.Event;this._sizeChanged=new epiviz.events.Event;this._marginsChanged=new epiviz.events.Event;this._dataWaitStart=new epiviz.events.Event;this._dataWaitEnd=new epiviz.events.Event};epiviz.ui.charts.Visualization.SVG_MARGIN=20;
epiviz.ui.charts.Visualization.prototype._initialize=function(){"100%"==this._properties.height&&(this._properties.height=this._container.height()-epiviz.ui.charts.Visualization.SVG_MARGIN);"100%"==this._properties.width&&(this._properties.width=this._container.width()-epiviz.ui.charts.Visualization.SVG_MARGIN);var a=this.width(),b=this.height();this._container.addClass("visualization-container");this._container.append(sprintf('<svg id="%s" class="visualization" width="%s" height="%s"><style type="text/css"></style><defs></defs></svg>',
this._svgId,a,b));this._svg=d3.select("#"+this._svgId);this._widthDif=$("#"+this._svgId).width()-(this._container.width()-epiviz.ui.charts.Visualization.SVG_MARGIN);this._heightDif=b-(this._container.height()-epiviz.ui.charts.Visualization.SVG_MARGIN);this._properties.width=a;this._properties.height=b;var c=this;this._container.click(function(){c._deselect.notify(new epiviz.ui.charts.VisEventArgs(c._id))})};
epiviz.ui.charts.Visualization.prototype._clearAxes=function(a){a=a||this._svg;a.selectAll(".xAxis").remove();a.selectAll(".yAxis").remove()};
epiviz.ui.charts.Visualization.prototype._drawAxes=function(a,b,c,d,e,f,g,h,l,m,n,p,t,q){e=e||this._svg;h=h||this.margins();g=g||this.height();f=f||this.width();var r=e.select(".axes"),u=r.select(".xAxis-grid");q=r.select(".yAxis-grid");var v=r.select(".xAxis-line");m=r.select(".yAxis-line");r.empty()&&(r=e.append("g").attr("class","axes"));u.empty()&&(u=r.append("g").attr("class","xAxis xAxis-grid"));q.empty()&&(q=r.append("g").attr("class","yAxis yAxis-grid"));v.empty()&&(v=r.append("g").attr("class",
"xAxis xAxis-line"));m.empty()&&(m=r.append("g").attr("class","yAxis yAxis-line"));a&&(u.attr("transform","translate("+h.left()+", "+h.top()+")").selectAll("line.x").data(a.ticks(c)).enter().append("line").attr("x1",a).attr("x2",a).attr("y1",0).attr("y2",g-h.top()-h.bottom()).style("stroke","#eeeeee").style("shape-rendering","crispEdges"),e=l||(n?function(a){return n[a]}:function(a){return d3.format("s")(Math.round(1E3*a)/1E3)}),c=d3.svg.axis().scale(a).orient("bottom").ticks(c).tickFormat(e),v.attr("transform",
"translate("+h.left()+", "+(g-h.bottom())+")").call(c),n&&(g="rotate(-90)",t&&(g+="translate(0,"+(a(.5)-a(0))+")"),v.selectAll("text").style("text-anchor","end").attr("dx","-.8em").attr("dy","-0.5em").attr("transform",g)));b&&(q.attr("transform","translate("+h.left()+", "+h.top()+")").selectAll("line.y").data(b.ticks(d-1)).enter().append("line").attr("x1",0).attr("x2",f-h.left()-h.right()).attr("y1",b).attr("y2",b).style("stroke","#eeeeee").style("shape-rendering","crispEdges"),a=p?function(a){return p[a]}:
function(a){return d3.format("s")(Math.round(1E3*a)/1E3)},b=d3.svg.axis().ticks(d-1).scale(b).orient("left").tickFormat(a),m.attr("transform","translate("+h.left()+", "+h.top()+")").call(b))};
epiviz.ui.charts.Visualization.prototype._drawTitle=function(){var a=this._svg.selectAll(".visualization-title"),b=epiviz.ui.charts.Visualization.CustomSettings;(b=this.customSettingsValues()[b.TITLE])&&""!=b.trim()?(a.empty()&&(a=this._svg.append("text").attr("class","visualization-title").attr("text-anchor","middle")),a.attr("x",.5*this.width()).attr("y",25).text(b)):a.empty()||a.remove()};
epiviz.ui.charts.Visualization.prototype.resize=function(a,b){a&&(this._properties.width=a);b&&(this._properties.height=b);this.draw();this._sizeChanged.notify(new epiviz.ui.charts.VisEventArgs(this._id,{width:this._properties.width,height:this._properties.height}))};epiviz.ui.charts.Visualization.prototype.updateSize=function(){this.resize(this._widthDif+this._container.width()-epiviz.ui.charts.Visualization.SVG_MARGIN,this._heightDif+this._container.height()-epiviz.ui.charts.Visualization.SVG_MARGIN)};
epiviz.ui.charts.Visualization.prototype.draw=function(a,b){void 0!=a&&(this._lastRange=a);void 0!=b&&(this._unalteredData=this._lastData=b,this._dataWaitEnd.notify(new epiviz.ui.charts.VisEventArgs(this._id)));this._svg.attr("width",this.width()).attr("height",this.height());this._drawTitle();return[]};epiviz.ui.charts.Visualization.prototype.container=function(){return this._container};epiviz.ui.charts.Visualization.prototype.id=function(){return this._id};
epiviz.ui.charts.Visualization.prototype.properties=function(){return this._properties};epiviz.ui.charts.Visualization.prototype.height=function(){return this._properties.height};epiviz.ui.charts.Visualization.prototype.width=function(){return this._properties.width};epiviz.ui.charts.Visualization.prototype.margins=function(){return this._properties.margins};epiviz.ui.charts.Visualization.prototype.colors=function(){return this._properties.colors};
epiviz.ui.charts.Visualization.prototype.setColors=function(a){a&&!a.equals(this._properties.colors)&&(this._properties.colors=a,this.draw(),this._colorsChanged.notify(new epiviz.ui.charts.VisEventArgs(this._id,this._properties.colors)))};epiviz.ui.charts.Visualization.prototype.colorLabels=function(){var a=Array(this.measurements().size());this.measurements().foreach(function(b,c){a[c]=b.name()});return a};epiviz.ui.charts.Visualization.prototype.measurements=function(){return this.properties().visConfigSelection.measurements};
epiviz.ui.charts.Visualization.prototype.customSettingsValues=function(){return this._customSettingsValues};
epiviz.ui.charts.Visualization.prototype.setCustomSettingsValues=function(a){if(this._customSettingsValues!=a&&a&&!epiviz.utils.mapEquals(this._customSettingsValues,a)){var b=epiviz.ui.charts.Visualization.CustomSettings,c=a[b.TITLE]||"",d=(this._customSettingsValues[b.TITLE]||"").trim().length,c=c.trim().length;if(!(d*c)&&d+c){var d=20*epiviz.utils.sign(c-d),c=a[b.MARGIN_TOP]||this._properties.margins.top(),e=a[b.MARGIN_LEFT]||this._properties.margins.left(),f=a[b.MARGIN_RIGHT]||this._properties.margins.right(),
g=a[b.MARGIN_BOTTOM]||this._properties.margins.bottom();a[b.MARGIN_TOP]=c+d;a[b.MARGIN_LEFT]=e;a[b.MARGIN_RIGHT]=f;a[b.MARGIN_BOTTOM]=g}d=this._customSettingsValues[epiviz.ui.charts.ChartType.CustomSettings.MEASUREMENT_GROUPS_AGGREGATOR];c=a[epiviz.ui.charts.ChartType.CustomSettings.MEASUREMENT_GROUPS_AGGREGATOR];this._customSettingsValues=a;b.MARGIN_TOP in a&&b.MARGIN_BOTTOM in a&&b.MARGIN_LEFT in a&&b.MARGIN_RIGHT in a&&(this._properties.margins=new epiviz.ui.charts.Margins(a[b.MARGIN_TOP],a[b.MARGIN_LEFT],
a[b.MARGIN_BOTTOM],a[b.MARGIN_RIGHT]),this._marginsChanged.notify(new epiviz.ui.charts.VisEventArgs(this._id,this._properties.margins)));if(d!=c){var h=this;this.transformData(this._lastRange,this._unalteredData).done(function(){h.draw()})}else this.draw();this._customSettingsChanged.notify(new epiviz.ui.charts.VisEventArgs(this._id,a))}};
epiviz.ui.charts.Visualization.prototype.setModifiedMethods=function(a){var b=this,c=!1;if(a){var d=Object.keys(a),e=new epiviz.deferred.Deferred,f=0,g={},h;for(h in a)a.hasOwnProperty(h)&&"_setModifiedMethods"!=h&&this[h].toString()!=a[h]&&(h in this._originalMethods||(this._originalMethods[h]=this[h]),function(b){epiviz.caja.cajole(a[b],epiviz.caja.buildChartMethodContext()).done(function(a){a&&(g[b]=a,c=!0,f+=1,f>=d.length&&e.resolve())})}(h));e.done(function(){if(c){for(var d in g)g.hasOwnProperty(d)&&
(b[d]=g[d],b._lastModifiedMethod=d);b._hasModifiedMethods=!0;b.draw();b._methodsModified.notify(new epiviz.ui.charts.VisEventArgs(b._id,a))}})}};epiviz.ui.charts.Visualization.prototype.hasModifiedMethods=function(){return this._hasModifiedMethods};epiviz.ui.charts.Visualization.prototype.lastModifiedMethod=function(){return this._lastModifiedMethod};
epiviz.ui.charts.Visualization.prototype.resetModifiedMethods=function(){if(this._hasModifiedMethods){for(var a in this._originalMethods)this._originalMethods.hasOwnProperty(a)&&(this[a]=this._originalMethods[a]);this._hasModifiedMethods=!1;this.draw();this._methodsReset.notify(new epiviz.ui.charts.VisEventArgs(this._id))}};
epiviz.ui.charts.Visualization.prototype.putMarker=function(a){if(a){var b;if(a.id()in this._markersMap){b=this._markersIndices[a.id()];var c=this._markers[b];if(c==a||c.type()==a.type()&&c.preMarkStr()==a.preMarkStr()&&c.markStr()==a.markStr())return;this._markers[b]=a}else b=this._markers.length,this._markers.push(a),this._markersIndices[a.id()]=b;this._markersMap[a.id()]=a;var d=this;this.transformData(this._lastRange,this._unalteredData).done(function(){d.draw()});this._markersModified.notify(new epiviz.ui.charts.VisEventArgs(this._id,
this._markers))}};epiviz.ui.charts.Visualization.prototype.removeMarker=function(a){if(a in this._markersMap){this._markers[this._markersIndices[a]]=null;delete this._markersMap[a];delete this._markersIndices[a];var b=this;this.transformData(this._lastRange,this._unalteredData).done(function(){b.draw()});this._markersModified.notify(new epiviz.ui.charts.VisEventArgs(this._id,this._markers))}};
epiviz.ui.charts.Visualization.prototype.getMarker=function(a){return a&&a in this._markersMap?this._markersMap[a]:null};epiviz.ui.charts.Visualization.prototype.displayType=function(){throw Error("unimplemented abstract method");};epiviz.ui.charts.Visualization.prototype.autoPropagateChanges=function(){return this._autoPropagateChanges};epiviz.ui.charts.Visualization.prototype.setAutoPropagateChanges=function(a){this._autoPropagateChanges=a};
epiviz.ui.charts.Visualization.prototype.transformData=function(a,b){var c=this._lastRange;void 0!=a&&(this._lastRange=a);void 0!=b&&(this._unalteredData=this._lastData=b);c&&a&&c.overlapsWith(a)&&c.width()==a.width()&&(this._slide=a.start()-c.start());c&&a&&c.overlapsWith(a)&&c.width()!=a.width()&&(this._zoom=c.width()/a.width());c=new epiviz.deferred.Deferred;c.resolve();return c};epiviz.ui.charts.Visualization.prototype.onHover=function(){return this._hover};
epiviz.ui.charts.Visualization.prototype.onUnhover=function(){return this._unhover};epiviz.ui.charts.Visualization.prototype.onSelect=function(){return this._select};epiviz.ui.charts.Visualization.prototype.onDeselect=function(){return this._deselect};
epiviz.ui.charts.Visualization.prototype.doHover=function(a){var b=this._container.find(".items"),c=b.find("> .hovered"),d=b.find("> .selected"),e=d.find("> .hovered"),f=function(){return a.overlapsWith(d3.select(this).data()[0])},b=b.find("> .item").filter(f);c.append(b);b=d.find("> .item").filter(f);e.append(b)};
epiviz.ui.charts.Visualization.prototype.doUnhover=function(){var a=this._container.find(".items"),b=a.find("> .hovered"),c=a.find("> .selected"),d=c.find("> .hovered");a.prepend(b.children());c.prepend(d.children())};
epiviz.ui.charts.Visualization.prototype.doSelect=function(a){var b=this._container.find(".items"),c=b.find("> .hovered"),d=b.find("> .selected"),e=d.find("> .hovered"),f=function(){return a.overlapsWith(d3.select(this).data()[0])},b=b.find("> .item").filter(f);d.append(b);b=c.find("> .item").filter(f);e.append(b)};
epiviz.ui.charts.Visualization.prototype.doDeselect=function(){var a=this._container.find(".items"),b=a.find("> .hovered"),c=a.find("> .selected"),d=c.find("> .hovered");a.prepend(c.find("> .item"));b.prepend(d.children())};epiviz.ui.charts.Visualization.prototype.onSave=function(){return this._save};epiviz.ui.charts.Visualization.prototype.onRemove=function(){return this._remove};epiviz.ui.charts.Visualization.prototype.onColorsChanged=function(){return this._colorsChanged};
epiviz.ui.charts.Visualization.prototype.onMethodsModified=function(){return this._methodsModified};epiviz.ui.charts.Visualization.prototype.onMethodsReset=function(){return this._methodsReset};epiviz.ui.charts.Visualization.prototype.onMarkersModified=function(){return this._markersModified};epiviz.ui.charts.Visualization.prototype.onCustomSettingsChanged=function(){return this._customSettingsChanged};epiviz.ui.charts.Visualization.prototype.onSizeChanged=function(){return this._sizeChanged};
epiviz.ui.charts.Visualization.prototype.onMarginsChanged=function(){return this._marginsChanged};epiviz.ui.charts.Visualization.prototype.onDataWaitStart=function(){return this._dataWaitStart};epiviz.ui.charts.Visualization.prototype.onDataWaitEnd=function(){return this._dataWaitEnd};
epiviz.ui.charts.Visualization.CustomSettings={TITLE:"title",MARGIN_LEFT:"marginLeft",MARGIN_RIGHT:"marginRight",MARGIN_TOP:"marginTop",MARGIN_BOTTOM:"marginBottom",X_MIN:"xMin",X_MAX:"xMax",Y_MIN:"yMin",Y_MAX:"yMax",COL_LABEL:"colLabel",ROW_LABEL:"rowLabel"};epiviz.ui.charts.VisualizationType=function(a){var b=epiviz.Config.VisualizationPropertySettings;this._config=a;this._defaultSettings=epiviz.utils.mapCombine(epiviz.utils.mapCombine(a.chartSettings[this.typeName()],a.chartSettings[this.chartDisplayType()],!0),a.chartSettings["default"],!0);this._defaultWidth=this._defaultSettings[b.WIDTH];this._defaultHeight=this._defaultSettings[b.HEIGHT];this._defaultMargins=this._defaultSettings[b.MARGINS];this._defaultColors=a.colorPalettesMap[this._defaultSettings[b.COLORS]];
this._decorations=this._defaultSettings[b.DECORATIONS];this._customSettingsValues=a.chartCustomSettings[this.typeName()]||null};epiviz.ui.charts.VisualizationType.DisplayType={PLOT:"plot",TRACK:"track",DATA_STRUCTURE:"data-structure"};epiviz.ui.charts.VisualizationType.prototype.createNew=function(a,b,c){throw Error("unimplemented abstract method");};epiviz.ui.charts.VisualizationType.prototype.typeName=function(){throw Error("unimplemented abstract method");};
epiviz.ui.charts.VisualizationType.prototype.chartName=function(){throw Error("unimplemented abstract method");};epiviz.ui.charts.VisualizationType.prototype.chartHtmlAttributeName=function(){throw Error("unimplemented abstract method");};epiviz.ui.charts.VisualizationType.prototype.chartDisplayType=function(){throw Error("unimplemented abstract method");};epiviz.ui.charts.VisualizationType.prototype.measurementsFilter=function(){return function(a){return!0}};
epiviz.ui.charts.VisualizationType.prototype.isRestrictedToSameDatasourceGroup=function(){return!1};epiviz.ui.charts.VisualizationType.prototype.isRestrictedToRangeMeasurements=function(){return!1};epiviz.ui.charts.VisualizationType.prototype.isRestrictedToFeatureMeasurements=function(){return!this.isRestrictedToRangeMeasurements()};epiviz.ui.charts.VisualizationType.prototype.minSelectedMeasurements=function(){return 1};epiviz.ui.charts.VisualizationType.prototype.chartContainer=function(){return epiviz.ui.ControlManager.CHART_TYPE_CONTAINERS[this.chartDisplayType()]};
epiviz.ui.charts.VisualizationType.prototype.cssClass=function(){throw Error("unimplemented abstract method");};epiviz.ui.charts.VisualizationType.prototype.defaultWidth=function(){return this._defaultWidth};epiviz.ui.charts.VisualizationType.prototype.defaultHeight=function(){return this._defaultHeight};epiviz.ui.charts.VisualizationType.prototype.defaultMargins=function(){return this._defaultMargins};epiviz.ui.charts.VisualizationType.prototype.defaultColors=function(){return this._defaultColors};
epiviz.ui.charts.VisualizationType.prototype.decorations=function(){return this._decorations};epiviz.ui.charts.VisualizationType.prototype.customSettingsValues=function(){return this._customSettingsValues};
epiviz.ui.charts.VisualizationType.prototype.customSettingsDefs=function(){return[new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.TITLE,epiviz.ui.charts.CustomSetting.Type.STRING,"","Title"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.MARGIN_TOP,epiviz.ui.charts.CustomSetting.Type.NUMBER,this._defaultMargins.top(),"Top margin"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.MARGIN_BOTTOM,epiviz.ui.charts.CustomSetting.Type.NUMBER,
this._defaultMargins.bottom(),"Bottom margin"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.MARGIN_LEFT,epiviz.ui.charts.CustomSetting.Type.NUMBER,this._defaultMargins.left(),"Left margin"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.MARGIN_RIGHT,epiviz.ui.charts.CustomSetting.Type.NUMBER,this._defaultMargins.right(),"Right margin")]};epiviz.ui.charts.markers={};
epiviz.ui.charts.markers.VisualizationMarker=function(a,b,c,d,e){this._type=a;this._id=b||epiviz.utils.generatePseudoGUID(6);this._name=c||"Custom Marker "+this._id;this._preMarkStr=d||"";this._markStr=e||"";var f=new epiviz.deferred.Deferred,g=null;epiviz.caja.cajole(this._preMarkStr).done(function(a){g=a;f.resolve()});this._preMark=function(a){var b=new epiviz.deferred.Deferred;f.done(function(){var c=g(a);b.resolve(c)});return b};var h=new epiviz.deferred.Deferred,l=null;epiviz.caja.cajole(this._markStr).done(function(a){l=
a;h.resolve()});this._mark=function(a,b,c){var d=new epiviz.deferred.Deferred;h.done(function(){var e=l(a,b,c);d.resolve(e)});return d}};epiviz.ui.charts.markers.VisualizationMarker.prototype.type=function(){return this._type};epiviz.ui.charts.markers.VisualizationMarker.prototype.id=function(){return this._id};epiviz.ui.charts.markers.VisualizationMarker.prototype.name=function(){return this._name};epiviz.ui.charts.markers.VisualizationMarker.prototype.preMark=function(){return this._preMark};
epiviz.ui.charts.markers.VisualizationMarker.prototype.mark=function(){return this._mark};epiviz.ui.charts.markers.VisualizationMarker.prototype.preMarkStr=function(){return this._preMarkStr};epiviz.ui.charts.markers.VisualizationMarker.prototype.markStr=function(){return this._markStr};epiviz.ui.charts.markers.VisualizationMarker.Type={FILTER:"filter",COLOR_BY_ROW:"colorByRow",ORDER_BY_MEASUREMENTS:"orderByMeasurements",COLOR_BY_MEASUREMENTS:"colorByMeasurements",GROUP_BY_MEASUREMENTS:"groupByMeasurements"};
epiviz.ui.charts.markers.VisualizationMarker.prototype.raw=function(){return{type:this._type,id:this._id,name:this._name,preMark:this._preMarkStr,mark:this._markStr}};epiviz.ui.charts.markers.VisualizationMarker.fromRawObject=function(a){return new epiviz.ui.charts.markers.VisualizationMarker(a.type,a.id,a.name,a.preMark,a.mark)};epiviz.ui.charts.VisualizationProperties=function(a,b,c,d,e,f,g,h,l){this.width=a;this.height=b;this.margins=c;this.visConfigSelection=d;this.colors=e;this.modifiedMethods=f;this.customSettingsValues=g||{};this.customSettingsDefs=h||[];this.chartMarkers=l||[]};
epiviz.ui.charts.VisualizationProperties.prototype.copy=function(){var a=new epiviz.ui.controls.VisConfigSelection(this.visConfigSelection.measurements?new epiviz.measurements.MeasurementSet(this.visConfigSelection.measurements):void 0,this.visConfigSelection.datasource,this.visConfigSelection.datasourceGroup,this.visConfigSelection.dataprovider,epiviz.utils.mapCopy(this.visConfigSelection.annotation),this.visConfigSelection.defaultChartType,this.visConfigSelection.minSelectedMeasurements);return new epiviz.ui.charts.VisualizationProperties(this.width,
this.height,this.margins?this.margins.copy():this.margins,a,this.colors,this.modifiedMethods?epiviz.utils.mapCopy(this.modifiedMethods):this.modifiedMethods,this.customSettingsValues?epiviz.utils.mapCopy(this.customSettingsValues):this.customSettingsValues,this.customSettingsDefs?this.customSettingsDefs.slice(0):this.customSettingsDefs,this.chartMarkers.slice(0))};epiviz.workspaces={};epiviz.workspaces.Workspace=function(a,b,c){this._id=a;this._name=b;this._range=c.range;this._chartsOrder={};this._chartsById={};for(var d in c.charts)if(c.charts.hasOwnProperty(d))for(this._chartsOrder[d]=[],a=0;a<c.charts[d].length;++a)this._chartsById[c.charts[d][a].id]=c.charts[d][a],this._chartsOrder[d].push(c.charts[d][a].id);this._computedMeasurements=c.computedMeasurements||new epiviz.measurements.MeasurementSet;this._changed=!1;this._contentChanged=new epiviz.events.Event};
epiviz.workspaces.Workspace.DEFAULT_WORKSPACE_NAME=epiviz.Config.DEFAULT_WORKSPACE_NAME;epiviz.workspaces.Workspace.prototype.id=function(){return this._id};epiviz.workspaces.Workspace.prototype.name=function(){return this._name};epiviz.workspaces.Workspace.prototype.range=function(){return this._range};epiviz.workspaces.Workspace.prototype.charts=function(){var a={},b;for(b in this._chartsOrder)if(this._chartsOrder.hasOwnProperty(b)){a[b]=[];for(var c=0;c<this._chartsOrder[b].length;++c)a[b].push(this._chartsById[this._chartsOrder[b][c]])}return a};
epiviz.workspaces.Workspace.prototype.chartsOrder=function(){return this._chartsOrder};epiviz.workspaces.Workspace.prototype.computedMeasurements=function(){return this._computedMeasurements};epiviz.workspaces.Workspace.prototype.chartAdded=function(a,b,c,d){this._chartsById[a]={id:a,type:b,properties:c.copy()};this._chartsOrder=d;this._setChanged()};epiviz.workspaces.Workspace.prototype.chartRemoved=function(a,b){this._chartsById[a]&&(delete this._chartsById[a],this._chartsOrder=b,this._setChanged())};
epiviz.workspaces.Workspace.prototype.chartSizeChanged=function(a,b,c){!this._chartsById[a]||this._chartsById[a].properties.width==b&&this._chartsById[a].properties.height==c||(this._chartsById[a].properties.width=b,this._chartsById[a].properties.height=c,this._setChanged())};epiviz.workspaces.Workspace.prototype.chartMarginsChanged=function(a,b){this._chartsById[a].properties.margins.equals(b)||(this._chartsById[a].properties.margins=b?b.copy():b,this._setChanged())};
epiviz.workspaces.Workspace.prototype.chartColorsChanged=function(a,b){this._chartsById[a].properties.colors.equals(b)||(this._chartsById[a].properties.colors=b,this._setChanged())};epiviz.workspaces.Workspace.prototype.chartMethodsModified=function(a,b){epiviz.utils.mapEquals(this._chartsById[a].properties.modifiedMethods,b)||(this._chartsById[a].properties.modifiedMethods=epiviz.utils.mapCombine(b,this._chartsById[a].properties.modifiedMethods),this._setChanged())};
epiviz.workspaces.Workspace.prototype.chartMethodsReset=function(a){this._chartsById[a].properties.modifiedMethods&&0!=Object.keys(this._chartsById[a].properties.modifiedMethods).length&&(this._chartsById[a].properties.modifiedMethods={},this._setChanged())};epiviz.workspaces.Workspace.prototype.chartMarkersModified=function(a,b){epiviz.utils.arraysEqual(this._chartsById[a].properties.chartMarkers,b)||(this._chartsById[a].properties.chartMarkers=b.filter(function(a){return null!=a}),this._setChanged())};
epiviz.workspaces.Workspace.prototype.chartCustomSettingsChanged=function(a,b){epiviz.utils.mapEquals(this._chartsById[a].properties.customSettingsValues,b)||(this._chartsById[a].properties.customSettingsValues=b?epiviz.utils.mapCopy(b):b,this._setChanged())};epiviz.workspaces.Workspace.prototype.locationChanged=function(a){this._range.equals(a)||(this._range=a,this._setChanged())};
epiviz.workspaces.Workspace.prototype.computedMeasurementsAdded=function(a){var b=this._computedMeasurements.size();this._computedMeasurements.addAll(a);b!=this._computedMeasurements.size()&&this._setChanged()};epiviz.workspaces.Workspace.prototype.computedMeasurementsRemoved=function(a){var b=this._computedMeasurements.size();this._computedMeasurements.removeAll(a);b!=this._computedMeasurements.size()&&this._setChanged()};
epiviz.workspaces.Workspace.prototype.chartsOrderChanged=function(a){this._chartsOrder=a;this._setChanged()};epiviz.workspaces.Workspace.prototype.changed=function(){return this._changed};epiviz.workspaces.Workspace.prototype.resetChanged=function(){this._changed=!1};epiviz.workspaces.Workspace.prototype._setChanged=function(){this._changed=!0;this._contentChanged.notify(this)};
epiviz.workspaces.Workspace.prototype.copy=function(a,b){var c=this.charts();return new epiviz.workspaces.Workspace(b||null,a,{range:this._range,computedMeasurements:new epiviz.measurements.MeasurementSet(this._computedMeasurements),charts:c})};
epiviz.workspaces.Workspace.prototype.raw=function(a){var b=new epiviz.measurements.MeasurementHashtable,c={};this._computedMeasurements.foreach(function(a){var c;a.componentMeasurements().foreach(function(a){var c=b.get(a);null===c&&(c=b.size(),b.put(a,c))});var d=a.formula().referredMeasurements,e;for(e in d)d.hasOwnProperty(e)&&(c=b.get(d[e]),null===c&&(c=b.size(),b.put(d[e],c)));c=b.get(a);null===c&&(c=b.size(),b.put(a,c))});for(var d in this._chartsOrder)if(this._chartsOrder.hasOwnProperty(d)){c[d]=
[];for(var e=0;e<this._chartsOrder[d].length;++e){var f=this._chartsById[this._chartsOrder[d][e]],g=f.properties,h=[];(function(a){g.visConfigSelection.measurements.foreach(function(c){var d=b.get(c);null===d&&(d=b.size(),b.put(c,d));a.push(d)})})(h);c[d].push({id:f.id,type:f.type.typeName(),properties:{width:g.width,height:g.height,margins:g.margins.raw(),visConfigSelection:{measurements:h,datasource:g.visConfigSelection.datasource,datasourceGroup:g.visConfigSelection.datasourceGroup,dataprovider:g.visConfigSelection.dataprovider,
annotation:g.visConfigSelection.annotation,defaultChartType:g.visConfigSelection.defaultChartType,minSelectedMeasurements:g.visConfigSelection.minSelectedMeasurements,customData:g.visConfigSelection.customData},colors:g.colors.raw(a),modifiedMethods:epiviz.utils.mapCopy(g.modifiedMethods),customSettings:g.customSettingsValues||null,chartMarkers:g.chartMarkers.map(function(a){return a.raw()})}})}}var l=Array(b.size());b.foreach(function(a,c){l[c]=a.raw(b)});return{id:this._id,name:this._name,content:{range:this._range.raw(),
measurements:l,charts:c}}};
epiviz.workspaces.Workspace.fromRawObject=function(a,b,c){var d,e=Array(a.content.measurements.length),f=new epiviz.measurements.MeasurementSet;for(d=0;d<a.content.measurements.length;++d)a.content.measurements[d].formula||(e[d]=epiviz.measurements.Measurement.fromRawObject(a.content.measurements[d]));for(d=0;d<a.content.measurements.length;++d)a.content.measurements[d].formula&&(e[d]=epiviz.measurements.Measurement.fromRawObject(a.content.measurements[d],e),f.add(e[d]));var g={},h;for(h in a.content.charts)if(a.content.charts.hasOwnProperty(h))for(g[h]=
[],d=0;d<a.content.charts[h].length;++d){var l=a.content.charts[h][d],m,n=l.properties.visConfigSelection,p=n?n.measurements:l.properties.measurements;if(p){m=new epiviz.measurements.MeasurementSet;for(var t=0;t<p.length;++t)m.add(e[p[t]])}n=n?new epiviz.ui.controls.VisConfigSelection(m,n.datasource,n.datasourceGroup,n.dataprovider,n.annotation,n.defaultChartType,n.minSelectedMeasurements,n.customData):new epiviz.ui.controls.VisConfigSelection(m);(p=b.get(l.type))&&g[h].push({id:l.id,type:p,properties:new epiviz.ui.charts.VisualizationProperties(l.properties.width,
l.properties.height,epiviz.ui.charts.Margins.fromRawObject(l.properties.margins),n,epiviz.ui.charts.ColorPalette.fromRawObject(l.properties.colors,c),l.properties.modifiedMethods,l.properties.customSettings,p.customSettingsDefs(),l.properties.chartMarkers?l.properties.chartMarkers.map(function(a){return epiviz.ui.charts.markers.VisualizationMarker.fromRawObject(a)}):[])})}return new epiviz.workspaces.Workspace(a.id,a.name,{range:epiviz.datatypes.GenomicRange.fromRawObject(a.content.range),computedMeasurements:f,
charts:g})};epiviz.workspaces.Workspace.prototype.onContentChanged=function(){return this._contentChanged};epiviz.ui.controls.Dialog=function(a,b){this._container=$("#dialogs");this._title=a;this._id=epiviz.ui.controls.Dialog.generateId();this._handlers=b;this._container.append(sprintf('<div id="%s" title="%s" style="display: none;"></div>',this._id,this._title));this._dialog=null};epiviz.ui.controls.Dialog._nextIdIndex=0;epiviz.ui.controls.Dialog.generateId=function(){return sprintf("dialog-%s",epiviz.utils.generatePseudoGUID(5))};epiviz.ui.controls.Dialog.prototype.show=function(){};epiviz.ui.controls.MessageDialog=function(a,b,c,d){epiviz.ui.controls.Dialog.call(this,a,b);this._message=c;this._icon=d||epiviz.ui.controls.MessageDialog.Icon.INFO};epiviz.ui.controls.MessageDialog.prototype=epiviz.utils.mapCopy(epiviz.ui.controls.Dialog.prototype);epiviz.ui.controls.MessageDialog.constructor=epiviz.ui.controls.MessageDialog;epiviz.ui.controls.MessageDialog.Icon={INFO:"info",ERROR:"error",QUESTION:"question"};
epiviz.ui.controls.MessageDialog.prototype.show=function(){epiviz.ui.controls.Dialog.prototype.show.call(this);var a=epiviz.ui.controls.MessageDialog.Icon;if(!this._dialog){var b=this;this._dialog=$("#"+this._id);this._dialog.css("display","inline");this._dialog.append(sprintf('<div class="ui-state-%s ui-corner-all" style="margin: 5px; padding: 5px; height: auto;"><div class="ui-icon ui-icon-%s" style="float: left; margin-right: 5px;"></div><div class="dialog-text">%s</div></div>',this._icon==a.ERROR?
"error":"highlight",this._icon==a.ERROR?"alert":"info",this._message));var c={},d;for(d in this._handlers)this._handlers.hasOwnProperty(d)&&function(a){c[a]=function(){b._handlers[a]();$(this).dialog("close")}}(d);this._dialog.dialog({autoOpen:!1,resizable:!1,buttons:c,modal:!0});this._dialog.dialog({close:function(a,c){$(this).remove();b._dialog=null}})}this._dialog.dialog("open");this._dialog.dialog("option","position","center")};epiviz.EpiViz=function(a,b,c,d,e,f,g,h,l,m,n){this._config=a;this._locationManager=b;this._measurementsManager=c;this._controlManager=d;this._dataManager=e;this._chartFactory=f;this._chartManager=g;this._workspaceManager=h;this._userManager=l;this._webArgsManager=m;this._cookieManager=n;this._registerRequestSeqInfos();this._registerRequestMeasurements();this._registerUiAddChart();this._registerUiSaveWorkspace();this._registerUiDeleteActiveWorkspace();this._registerUiRevertActiveWorkspace();this._registerUiLoginLinkClicked();
this._registerUiSearchWorkspaces();this._registerUiActiveWorkspaceChanged();this._registerUiSearch();this._registerChartRequestHierarchy();this._registerChartPropagateHierarchySelection();this._registerChartPropogateIcicleLocationChange();this._registerUiSettingsChanged();this._registerDataAddMeasurements();this._registerDataRemoveMeasurements();this._registerDataAddChart();this._registerDataRemoveChart();this._registerDataAddSeqInfos();this._registerDataRemoveSeqNames();this._registerDataNavigate();
this._registerDataRedraw();this._registerDataGetCurrentLocation();this._registerPrintWorkspace();this._registerLoadWorkspace();this._registerDataSetChartSettings();this._registerDataGetChartSettings();this._registerDataGetAvailableCharts();this._registerRequestWorkspaces();this._registerWorkspacesLoaded();this._registerActiveWorkspaceChanged();this._registerActiveWorkspaceContentChanged();this._registerLocationChanged();this._registerLoadingAppScreen();this._registerChartRequestFeature();this._registerHierarchyChartRequestAddFeature();
this._registerDataFailed()};epiviz.EpiViz.VERSION="4";epiviz.EpiViz.prototype.start=function(){this._measurementsManager.initialize();this._cookieManager.initialize();this._locationManager.initialize();this._controlManager.initialize();this._workspaceManager.initialize();null==(epiviz.ui.WebArgsManager.WEB_ARGS.ws||epiviz.ui.WebArgsManager.WEB_ARGS.workspace||null)&&this._controlManager.startApp()};epiviz.EpiViz.prototype.config=function(){return this._config};
epiviz.EpiViz.prototype._addChart=function(a,b,c,d,e){c=this._chartManager.addChart(a,b,c,d,e);var f=this;if("epiviz.plugins.charts.PCAScatterPlot"==a.typeName()){var g=null;e={};e[c]=b.measurements;this._dataManager.getPCA(g,e,function(a,b){f._chartManager.updateCharts(g,b,[a])})}else"epiviz.plugins.charts.DiversityScatterPlot"==a.typeName()?(g=null,e={},e[c]=b.measurements,this._dataManager.getDiversity(g,e,function(a,b){f._chartManager.updateCharts(g,b,[a])})):a.chartDisplayType()==epiviz.ui.charts.VisualizationType.DisplayType.DATA_STRUCTURE?
(d={},d[c]=b,g=this._workspaceManager.activeWorkspace().range(),(b=this._locationManager._seqInfos[b.datasourceGroup]||this._locationManager._seqInfos.metavizr)&&(g=new epiviz.datatypes.GenomicRange(b.seqName,b.min,b.max)),this._locationManager.changeCurrentLocation(g),this._dataManager.getHierarchy(d,function(a,b){f._chartManager.updateCharts(g,b,[a])})):"epiviz.plugins.charts.FeatureScatterPlot"==a.typeName()?(g=null,e={},e[c]=b.measurements,b=a.customSettingsValues(),d&&(b=d.customSettingsValues),
this._dataManager.getFeatureData(g,e,b,function(a,b){f._chartManager.updateCharts(g,b,[a])})):(g=this._workspaceManager.activeWorkspace().range(),this._chartManager.dataWaitStart(c),e={},e[c]=b.measurements,this._dataManager.getData(g,e,function(a,b){f._chartManager.updateCharts(g,b,[a])}));return c};epiviz.EpiViz.prototype._registerRequestSeqInfos=function(){var a=this;this._locationManager.onRequestSeqInfos().addListener(new epiviz.events.EventListener(function(){a._dataManager.getSeqInfos(function(b){a._locationManager.updateSeqInfos(b)})}))};
epiviz.EpiViz.prototype._registerRequestMeasurements=function(){var a=this;this._measurementsManager.onRequestMeasurements().addListener(new epiviz.events.EventListener(function(){a._dataManager.getMeasurements(function(b){a._measurementsManager.addMeasurements(b)})}))};
epiviz.EpiViz.prototype._registerRequestWorkspaces=function(){var a=this;this._workspaceManager.onRequestWorkspaces().addListener(new epiviz.events.EventListener(function(b){var c=a._cookieManager.getWorkspace(a._chartFactory,a._config);a._dataManager.getWorkspaces(function(d){for(var e=[],f=null,g=null,h=0;h<d.length;++h){var l=epiviz.workspaces.Workspace.fromRawObject(d[h],a._chartFactory,a._config);null===l.id()?f=l:(l.id()==b.activeWorkspaceId&&(c&&c.id()==b.activeWorkspaceId&&(g=l,l=c),f=l),
e.push(l))}a._workspaceManager.updateWorkspaces(e,f,b.activeWorkspaceId,g);c||a._workspaceManager.activeWorkspace().resetChanged()},"",b.activeWorkspaceId)}))};epiviz.EpiViz.prototype._registerUiAddChart=function(){var a=this;this._controlManager.onAddChart().addListener(new epiviz.events.EventListener(function(b){a._addChart(b.type,b.visConfigSelection,void 0,void 0,b.title)}))};
epiviz.EpiViz.prototype._registerUiSaveWorkspace=function(){var a=this;this._controlManager.onSaveWorkspace().addListener(new epiviz.events.EventListener(function(b){var c=a._workspaceManager.getByName(b.name),c=c?a._workspaceManager.activeWorkspace().copy(b.name,c.id()):a._workspaceManager.activeWorkspace().copy(b.name);a._dataManager.saveWorkspace(c,a._config,function(b){c=c.copy(c.name(),b);c.resetChanged();a._workspaceManager.updateWorkspace(c);a._workspaceManager.changeActiveWorkspace(b)})}))};
epiviz.EpiViz.prototype._registerUiDeleteActiveWorkspace=function(){var a=this;this._controlManager.onDeleteActiveWorkspace().addListener(new epiviz.events.EventListener(function(){a._dataManager.deleteWorkspace(a._workspaceManager.activeWorkspace());a._workspaceManager.deleteActiveWorkspace()}))};epiviz.EpiViz.prototype._registerUiRevertActiveWorkspace=function(){var a=this;this._controlManager.onRevertActiveWorkspace().addListener(new epiviz.events.EventListener(function(){a._workspaceManager.revertActiveWorkspace()}))};
epiviz.EpiViz.prototype._registerUiLoginLinkClicked=function(){var a=this;this._controlManager.onLoginLinkClicked().addListener(new epiviz.events.EventListener(function(){a._userManager.toggleLogin()}))};epiviz.EpiViz.prototype._registerUiSearchWorkspaces=function(){var a=this;this._controlManager.onSearchWorkspaces().addListener(new epiviz.events.EventListener(function(b){a._dataManager.getWorkspaces(function(a){b.callback(a)},b.searchTerm,b.searchTerm)}))};
epiviz.EpiViz.prototype._registerUiActiveWorkspaceChanged=function(){var a=this;this._controlManager.onActiveWorkspaceChanged().addListener(new epiviz.events.EventListener(function(b){var c=function(){b.newValue.id&&!a._workspaceManager.get(b.newValue.id)?a._dataManager.getWorkspaces(function(c){for(var d=null,f=0;f<c.length;++f){var g=epiviz.workspaces.Workspace.fromRawObject(c[f],a._chartFactory,a._config);if(null===g.id()){d=g;break}}d&&a._workspaceManager.changeActiveWorkspace(b.newValue.id,d)},
b.newValue.name,b.newValue.id):a._workspaceManager.changeActiveWorkspace(b.newValue.id)};epiviz.workspaces.UserManager.USER_STATUS.loggedIn&&!a._workspaceManager.activeWorkspaceChanging()&&a._workspaceManager.activeWorkspace().changed()?(new epiviz.ui.controls.MessageDialog("Discard workspace changes",{Yes:function(){c()},No:function(){b.cancel()}},"There are unsaved changes in the current workspace. Do you wish to discard them?",epiviz.ui.controls.MessageDialog.Icon.QUESTION)).show():c()}))};
epiviz.EpiViz.prototype._registerUiSearch=function(){var a=this;this._controlManager.onSearch().addListener(new epiviz.events.EventListener(function(b){var c,d;for(d in a._chartManager._charts)a._chartManager._charts.hasOwnProperty(d)&&a._chartManager._charts[d].displayType()==epiviz.ui.charts.VisualizationType.DisplayType.DATA_STRUCTURE&&(c=a._chartManager._charts[d]);null==c&&void 0==c||a._dataManager.search(function(a){b.callback(a)},b.searchTerm,c)}));this._chartManager._chartFeatureSearchEvent.addListener(new epiviz.events.EventListener(function(b){var c,
d;for(d in a._chartManager._charts)a._chartManager._charts.hasOwnProperty(d)&&a._chartManager._charts[d].displayType()==epiviz.ui.charts.VisualizationType.DisplayType.DATA_STRUCTURE&&(c=a._chartManager._charts[d]);null==c&&void 0==c||a._dataManager.search(function(a){b.callback(a)},b.searchTerm,c)}))};
epiviz.EpiViz.prototype._registerChartRequestHierarchy=function(){var a=this;this._chartManager.onChartRequestHierarchy().addListener(new epiviz.events.EventListener(function(b){var c={};c[b.id]=b.args;a._dataManager.getHierarchy(c,function(b,c){a._chartManager.updateCharts(void 0,c,[b])})}))};
epiviz.EpiViz.prototype._registerChartRequestFeature=function(){var a=this;a._chartManager._chartFeatureGetDataEvent.addListener(new epiviz.events.EventListener(function(b){var c=a._chartManager._charts[b.chartId],d={};d[b.chartId]=c._properties.visConfigSelection.measurements;a._dataManager.getFeatureData(null,d,c.customSettingsValues(),function(b,c){a._chartManager.updateCharts(null,c,[b])})}))};
epiviz.EpiViz.prototype._registerHierarchyChartRequestAddFeature=function(){var a=this;a._chartManager._heatmapAddFeatureChartEvent.addListener(new epiviz.events.EventListener(function(b){var c=null,d=null,e;for(e in a._chartManager._charts)a._chartManager._charts.hasOwnProperty(e)&&"featureScatterPlot"==a._chartManager._charts[e]._featureType&&(c=a._chartManager._charts[e],d=e);c?(c=c.customSettingsValues(),c.featureId=b.featureId,c.featureName=b.featureName,c.rowLabel=b.rowLabel,a._chartManager._chartFeatureGetDataEvent.notify({chartId:d})):
(d=a._chartFactory._types["epiviz.plugins.charts.FeatureScatterPlot"],c=new epiviz.ui.controls.VisConfigSelection(b.measurements,void 0,void 0,void 0,void 0,d.chartName(),d.minSelectedMeasurements()),e=new epiviz.ui.charts.VisualizationProperties(d.defaultWidth(),d.defaultHeight(),d.defaultMargins(),c,d.defaultColors(),null,d.customSettingsValues(),d.customSettingsDefs(),[]),e.customSettingsValues.featureId=b.featureId,e.customSettingsValues.featureName=b.featureName,e.customSettingsValues.rowLabel=
b.rowLabel,a._addChart(d,c,void 0,e,""))}))};epiviz.EpiViz.prototype._registerChartPropagateHierarchySelection=function(){var a=this;this._chartManager.onChartPropagateHierarchyChanges().addListener(new epiviz.events.EventListener(function(b){var c={};c[b.id]=b.args;a._dataManager.propagateHierarchyChanges(c,function(b,c){a._chartManager.updateCharts(void 0,c,[b])})}))};
epiviz.EpiViz.prototype._registerDataFailed=function(){var a=this;this._dataManager._requestDataFailed.addListener(new epiviz.events.EventListener(function(b){var c,d,e;for(e in a._chartManager._charts)a._chartManager._charts.hasOwnProperty(e)&&a._chartManager._charts[e].displayType()==epiviz.ui.charts.VisualizationType.DisplayType.DATA_STRUCTURE&&(c=a._chartManager._charts[e],d=e);e={};e[d]=new epiviz.ui.controls.VisConfigSelection(void 0,void 0,c.datasourceGroup(),c.dataprovider(),void 0,void 0,
void 0,b);d=_.omit(c._selectedNodes,function(a,c){return b.selection[c]==a});c.selectNode(c._uiDataMap[Object.keys(d)[0]]);c.selectNode(c._uiDataMap[Object.keys(d)[0]]);c._selectedNodes=b.selection;c._nodesOrder=b.order;c._selectedLevels=b.selectedLevels;d=a._dataManager._dataProviderFactory.get(c.dataprovider())||a._dataManager._dataProviderFactory.get(epiviz.data.EmptyResponseDataProvider.DEFAULT_ID);d._selectedLevels=d._lastSelectedLevels;d._lastRoot=d._lastLastRoot;d._selection=d._lastSelection;
d._order=d._lastOrder;c._svg.select(".items").empty();c.draw();a._dataManager.propagateHierarchyChanges(e,function(b,c){a._chartManager.updateCharts(void 0,c,[b])})}))};epiviz.EpiViz.prototype._registerUiSettingsChanged=function(){var a=this;this._workspaceManager.onUiChartSettingsChanged().addListener(new epiviz.events.EventListener(function(b){a._dataManager.updateChartSettings(b)}))};
epiviz.EpiViz.prototype._registerDataAddMeasurements=function(){var a=this;this._dataManager.onRequestAddMeasurements().addListener(new epiviz.events.EventListener(function(b){try{a._measurementsManager.addMeasurements(b.measurements),b.result.success=!0}catch(c){b.result.success=!1,b.result.errorMessage=c.toString()}}))};
epiviz.EpiViz.prototype._registerDataRemoveMeasurements=function(){var a=this;this._dataManager.onRequestRemoveMeasurements().addListener(new epiviz.events.EventListener(function(b){try{a._measurementsManager.removeMeasurements(b.measurements),b.result.success=!0}catch(c){b.result.success=!1,b.result.errorMessage=c.toString()}}))};
epiviz.EpiViz.prototype._registerDataAddChart=function(){var a=this;this._dataManager.onRequestAddChart().addListener(new epiviz.events.EventListener(function(b){try{var c=a._chartFactory.get(b.type),d=a._addChart(c,b.visConfigSelection);b.result.success=!0;b.result.value={id:d}}catch(e){b.result.success=!1,b.result.errorMessage=e.toString()}}))};
epiviz.EpiViz.prototype._registerDataRemoveChart=function(){var a=this;this._dataManager.onRequestRemoveChart().addListener(new epiviz.events.EventListener(function(b){try{a._chartManager.removeChart(b.id),b.result.success=!0}catch(c){b.result.success=!1,b.errorMessage=c.toString()}}))};
epiviz.EpiViz.prototype._registerPrintWorkspace=function(){this._dataManager.onRequestPrintWorkspace().addListener(new epiviz.events.EventListener(function(a){try{(new epiviz.ui.PrintManager(a.chartId,a.fileName,a.fileType)).print(),a.result.success=!0}catch(b){a.result.success=!1,a.errorMessage=b.toString()}}))};
epiviz.EpiViz.prototype._registerLoadWorkspace=function(){var a=this;this._dataManager.onRequestLoadWorkspace().addListener(new epiviz.events.EventListener(function(b){try{a._workspaceManager._requestWorkspaces.notify({activeWorkspaceId:b.workspace})}catch(c){b.result.success=!1,b.errorMessage=c.toString()}}))};
epiviz.EpiViz.prototype._registerDataSetChartSettings=function(){var a=this;this._dataManager.onRequestSetChartSettings().addListener(new epiviz.events.EventListener(function(b){try{a._chartManager.setChartSettings(b.chartId,b.settings,b.colorMap),b.result.success=!0}catch(c){b.result.success=!1,b.result.errorMessage=c.toString()}}))};
epiviz.EpiViz.prototype._registerDataGetChartSettings=function(){var a=this;this._dataManager.onRequestGetChartSettings().addListener(new epiviz.events.EventListener(function(b){try{a._chartManager.getChartSettings(b.chartId),b.result.success=!0}catch(c){b.result.success=!1,b.result.errorMessage=c.toString()}}))};
epiviz.EpiViz.prototype._registerDataGetAvailableCharts=function(){var a=this;this._dataManager.onRequestGetChartSettings().addListener(new epiviz.events.EventListener(function(b){try{b.result.value=[],a._chartFactory.foreach(function(a,d){b.result.value.push({chartName:a,customSettings:d.customSettingsDefs(),colorMap:d.defaultColors()._colors})}),b.result.success=!0}catch(c){b.result.success=!1,b.result.errorMessage=c.toString()}}))};
epiviz.EpiViz.prototype._registerDataAddSeqInfos=function(){var a=this;this._dataManager.onRequestAddSeqInfos().addListener(new epiviz.events.EventListener(function(b){try{a._locationManager.addSeqInfos(b.seqInfos),b.result.success=!0}catch(c){b.result.success=!1,b.errorMessage=c.toString()}}))};
epiviz.EpiViz.prototype._registerDataRemoveSeqNames=function(){var a=this;this._dataManager.onRequestRemoveSeqNames().addListener(new epiviz.events.EventListener(function(b){try{a._locationManager.removeSeqNames(b.seqNames),b.result.success=!0}catch(c){b.result.success=!1,b.errorMessage=c.toString()}}))};
epiviz.EpiViz.prototype._registerDataNavigate=function(){var a=this;this._dataManager.onRequestNavigate().addListener(new epiviz.events.EventListener(function(b){try{a._locationManager.changeCurrentLocation(b.range),b.result.success=!0}catch(c){b.result.success=!1,b.errorMessage=c.toString()}}))};
epiviz.EpiViz.prototype._registerDataRedraw=function(){var a=this;this._dataManager.onRequestRedraw().addListener(new epiviz.events.EventListener(function(b){try{var c=a._locationManager.currentLocation();a._locationManager.changeCurrentLocation(c);b.result.success=!0;a._chartManager.updateDataStructureCharts()}catch(d){b.result.success=!1,b.errorMessage=d.toString()}}))};
epiviz.EpiViz.prototype._registerDataGetCurrentLocation=function(){var a=this;this._dataManager.onRequestCurrentLocation().addListener(new epiviz.events.EventListener(function(b){try{var c=a._locationManager.currentLocation();b.result.value={seqName:c.seqName(),start:c.start(),end:c.end()};b.result.success=!0}catch(d){b.result.success=!1,b.errorMessage=d.toString()}}))};epiviz.EpiViz.prototype._registerWorkspacesLoaded=function(){this._workspaceManager.onWorkspacesLoaded().addListener(new epiviz.events.EventListener(function(a){}))};
epiviz.EpiViz.prototype._registerActiveWorkspaceChanged=function(){var a=this;this._workspaceManager.onActiveWorkspaceChanged().addListener(new epiviz.events.EventListener(function(b){a._workspaceManager.startChangingActiveWorkspace();a._controlManager.updateSelectedWorkspace({id:b.newValue.id(),name:b.newValue.name()});a._locationManager.changeCurrentLocation(b.newValue.range());a._measurementsManager.removeMeasurements(a._measurementsManager.computedMeasurements());a._measurementsManager.addMeasurements(b.newValue.computedMeasurements());
a._chartManager.clear();b=b.newValue.charts();for(var c in b)if(b.hasOwnProperty(c))for(var d=0;d<b[c].length;++d)a._addChart(b[c][d].type,b[c][d].properties.visConfigSelection,b[c][d].id,b[c][d].properties.copy());a._workspaceManager.endChangingActiveWorkspace()}))};epiviz.EpiViz.prototype._registerActiveWorkspaceContentChanged=function(){var a=this;this._workspaceManager.onActiveWorkspaceContentChanged().addListener(new epiviz.events.EventListener(function(b){a._cookieManager.saveWorkspace(b,a._config)}))};
epiviz.EpiViz.prototype._registerLocationChanged=function(){var a=this;this._locationManager.onCurrentLocationChanged().addListener(new epiviz.events.EventListener(function(b){a._chartManager.dataWaitStart(void 0,function(a){return a.displayType()!=epiviz.ui.charts.VisualizationType.DisplayType.DATA_STRUCTURE});var c=a._chartManager.chartsMeasurements(),d;for(d in c){var e={};e[d]=c[d];-1!=d.indexOf("pca_scatter")?(a._dataManager.getPCA(b.newValue,e,function(c,d){a._chartManager.updateCharts(b.newValue,
d,[c])}),delete c[d]):-1!=d.indexOf("diversity_scatter")?(a._dataManager.getDiversity(b.newValue,e,function(c,d){a._chartManager.updateCharts(b.newValue,d,[c])}),delete c[d]):-1!=d.indexOf("feature_scatter")&&delete c[d]}a._dataManager.getData(b.newValue,c,function(c,d){a._chartManager.updateCharts(b.newValue,d,[c])});a._chartManager.onChartPropogateIcicleLocationChanges().isFiring()||a._chartManager.onChartIcicleLocationChanges().notify(new epiviz.ui.charts.VisEventArgs("1",{start:b.newValue._start,
width:b.newValue._width}))}))};epiviz.EpiViz.prototype._registerChartPropogateIcicleLocationChange=function(){var a=this;a._chartManager.onChartPropogateIcicleLocationChanges().addListener(new epiviz.events.EventListener(function(b){var c=a._locationManager.currentLocation();null!=c&&a._locationManager.changeCurrentLocation(new epiviz.datatypes.GenomicRange(c.seqName(),b.start,b.width))}))};epiviz.EpiViz.prototype._registerLoadingAppScreen=function(){var a=this;a._dataManager._loadingCurrentDataSet.addListener(new epiviz.events.EventListener(function(b){a._controlManager.updateLoadingScreen(b)}))};epiviz.localstorage={};epiviz.localstorage.LocalStorageManager=function(a){this._workspace=a;this._availStorage="undefined"===typeof Storage||null==localStorage?!1:!0};epiviz.localstorage.LocalStorageManager.MODE={INCOGNITO_MODE:"incognito_workspace",COOKIE_MODE:"workspace"};epiviz.localstorage.LocalStorageManager.prototype.initialize=function(){};
epiviz.localstorage.LocalStorageManager.prototype.getWorkspace=function(a,b){if(this._availStorage){var c=localStorage.getItem(this._workspace);return c?epiviz.workspaces.Workspace.fromRawObject(JSON.parse(c),a,b):null}};epiviz.localstorage.LocalStorageManager.prototype.saveWorkspace=function(a,b){if(this._availStorage){var c=a.raw(b);localStorage.setItem(this._workspace,JSON.stringify(c))}};epiviz.localstorage.LocalStorageManager.prototype.clearWorkspace=function(){this._availStorage&&localStorage.removeItem(this._workspace)};
epiviz.localstorage.LocalStorageManager.prototype.clearAll=function(){this._availStorage&&localStorage.clear()};epiviz.ui.LocationManager=function(a){this._seqInfos={};this._timeout=this._lastUnfilledRequest=this._currentLocation=null;this._navigationDelay=a.navigationDelay;this._currentLocationChanged=new epiviz.events.Event;this._seqInfosUpdated=new epiviz.events.Event;this._requestSeqInfos=new epiviz.events.Event};epiviz.ui.LocationManager.prototype.initialize=function(){this._requestSeqInfos.notify()};
epiviz.ui.LocationManager.prototype.changeCurrentLocation=function(a){if(!this._currentLocationChanged.isFiring()){this._lastUnfilledRequest=a;null!==this._timeout&&(window.clearTimeout(this._timeout),this._timeout=null);var b=this;a=function(){var a=b._lastUnfilledRequest;null!==a&&b._doChangeCurrentLocation(a)};this._navigationDelay?this._timeout=window.setTimeout(a,this._navigationDelay):a()}};
epiviz.ui.LocationManager.prototype._doChangeCurrentLocation=function(a){var b=this._currentLocation,c=a.seqName();if(!(a.seqName()in this._seqInfos)){if(!b)return;c=b.seqName()}var d=void 0,e=void 0;this._seqInfos[c]&&void 0!=this._seqInfos[c].min&&void 0!=this._seqInfos[c].max&&(d=void 0!=a.start()&&a.start()>=this._seqInfos[c].min?a.start():this._seqInfos[c].min,e=void 0!=a.width()?d+a.width():d+9999);void 0!=d&&void 0!=e&&e>this._seqInfos[c].max&&(d=Math.max(this._seqInfos[c].min,this._seqInfos[c].max-
e+d),e=this._seqInfos[c].max);this._lastUnfilledRequest=null;this._currentLocation=epiviz.datatypes.GenomicRange.fromStartEnd(c,d,e);this._currentLocationChanged.notify({oldValue:b,newValue:this._currentLocation})};epiviz.ui.LocationManager.prototype.currentLocation=function(){return this._currentLocation};epiviz.ui.LocationManager.prototype.lastUnfilledLocationChangeRequest=function(){return this._lastUnfilledRequest};
epiviz.ui.LocationManager.prototype.updateSeqInfos=function(a){this._seqInfos={};for(var b=0;b<a.length;++b)this._seqInfos[a[b].seqName]=a[b];this._seqInfosUpdated.notify(a);null!==this._lastUnfilledRequest&&(this._lastUnfilledRequest.seqName()in this._seqInfos?this._doChangeCurrentLocation(this._lastUnfilledRequest):0<a.length&&(a=new epiviz.datatypes.GenomicRange(a[0].seqName,this._lastUnfilledRequest.start(),this._lastUnfilledRequest.width()),this._doChangeCurrentLocation(a)))};
epiviz.ui.LocationManager.prototype.addSeqInfos=function(a){for(var b=0;b<a.length;++b)this._seqInfos[a[b].seqName]||(this._seqInfos[a[b].seqName]=a[b]);a=[];for(var c in this._seqInfos)this._seqInfos.hasOwnProperty(c)&&a.push(this._seqInfos[c]);this._seqInfosUpdated.notify(a)};
epiviz.ui.LocationManager.prototype.removeSeqNames=function(a){for(var b=0;b<a.length;++b)delete this._seqInfos[a[b]];a=[];for(var c in this._seqInfos)this._seqInfos.hasOwnProperty(c)&&a.push(this._seqInfos[c]);this._seqInfosUpdated.notify(a);this._currentLocation.seqName()in this._seqInfos||this.changeCurrentLocation(new epiviz.datatypes.GenomicRange(a[0].seqName,this._currentLocation.start(),this._currentLocation.width()))};epiviz.ui.LocationManager.prototype.seqInfos=function(){return this._seqInfos};
epiviz.ui.LocationManager.prototype.onCurrentLocationChanged=function(){return this._currentLocationChanged};epiviz.ui.LocationManager.prototype.onSeqInfosUpdated=function(){return this._seqInfosUpdated};epiviz.ui.LocationManager.prototype.onRequestSeqInfos=function(){return this._requestSeqInfos};epiviz.measurements.MeasurementsManager=function(){this._requestMeasurements=new epiviz.events.Event;this._measurementsAdded=new epiviz.events.Event;this._measurementsRemoved=new epiviz.events.Event;this._computedMeasurementsAdded=new epiviz.events.Event;this._computedMeasurementsRemoved=new epiviz.events.Event;this._measurements=new epiviz.measurements.MeasurementSet;this._computedMeasurements=new epiviz.measurements.MeasurementSet};epiviz.measurements.MeasurementsManager.prototype.initialize=function(){this._requestMeasurements.notify()};
epiviz.measurements.MeasurementsManager.prototype.onRequestMeasurements=function(){return this._requestMeasurements};epiviz.measurements.MeasurementsManager.prototype.onMeasurementsAdded=function(){return this._measurementsAdded};epiviz.measurements.MeasurementsManager.prototype.onMeasurementsRemoved=function(){return this._measurementsRemoved};epiviz.measurements.MeasurementsManager.prototype.onComputedMeasurementsAdded=function(){return this._computedMeasurementsAdded};
epiviz.measurements.MeasurementsManager.prototype.onComputedMeasurementsRemoved=function(){return this._computedMeasurementsRemoved};epiviz.measurements.MeasurementsManager.prototype.measurements=function(){return this._measurements};epiviz.measurements.MeasurementsManager.prototype.computedMeasurements=function(){return this._computedMeasurements};
epiviz.measurements.MeasurementsManager.prototype.addMeasurements=function(a){if(a&&a.size()){var b=this;this._measurements.addAll(a);var c=new epiviz.measurements.MeasurementSet;a.foreach(function(a){a.isComputed()&&(c.add(a),b._computedMeasurements.add(a))});this._measurementsAdded.notify(a);0<c.size()&&this._computedMeasurementsAdded.notify(c)}};
epiviz.measurements.MeasurementsManager.prototype.removeMeasurements=function(a){var b=this;this._measurements.removeAll(a);var c=new epiviz.measurements.MeasurementSet;a.foreach(function(a){a.isComputed()&&(c.add(a),b._computedMeasurements.remove(a))});this._measurementsRemoved.notify(a);0<c.size()&&this._computedMeasurementsRemoved.notify(c)};epiviz.measurements.MeasurementsManager.prototype.addMeasurement=function(a){var b=new epiviz.measurements.MeasurementSet;b.add(a);this.addMeasurements(b)};
epiviz.measurements.MeasurementsManager.prototype.removeMeasurement=function(a){var b=new epiviz.measurements.MeasurementSet;b.add(a);this.removeMeasurements(b)};epiviz.ui.charts.markers.MeasurementAggregator=function(a,b){this._id=a;this._aggregator=b};epiviz.ui.charts.markers.MeasurementAggregator.prototype.aggregate=function(a,b,c){return this._aggregator(a,b,c)};epiviz.ui.charts.markers.MeasurementAggregator.prototype.id=function(){return this._id};
epiviz.ui.charts.markers.MeasurementAggregators={"mean-stdev":new epiviz.ui.charts.markers.MeasurementAggregator("mean-stdev",function(a,b,c){if(!c||0==c.length)return null;var d=c.reduce(function(a,b){return a+b})/c.length;a=c.map(function(a){return(a-d)*(a-d)}).reduce(function(a,b){return a+b})/c.length;a=Math.sqrt(a);return{value:d,errMinus:d-a,errPlus:d+a}}),quartiles:new epiviz.ui.charts.markers.MeasurementAggregator("quartiles",function(a,b,c){if(!c||0==c.length)return null;c=c.slice(0).sort(function(a,
b){return a-b});a=c.length;b=Math.floor(.5*a);var d=Math.ceil(.5*a);return{value:.5*(c[Math.floor(.5*(a-1))]+c[b]),errMinus:.5*(c[Math.floor(.5*(b-1))]+c[Math.floor(.5*b)]),errPlus:.5*(c[d+Math.floor(.5*(a-d-1))]+c[d+Math.floor(.5*(a-d))])}}),count:new epiviz.ui.charts.markers.MeasurementAggregator("count",function(a,b,c){return c&&0!=c.length?{value:c.length}:0}),min:new epiviz.ui.charts.markers.MeasurementAggregator("min",function(a,b,c){return c&&0!=c.length?{value:Math.min.apply(void 0,c)}:null}),
max:new epiviz.ui.charts.markers.MeasurementAggregator("max",function(a,b,c){return c&&0!=c.length?{value:Math.max.apply(void 0,c)}:null}),sum:new epiviz.ui.charts.markers.MeasurementAggregator("sum",function(a,b,c){return c&&0!=c.length?{value:c.reduce(function(a,b){return a+b})}:null})};epiviz.ui.charts.ChartType=function(a){epiviz.ui.charts.VisualizationType.call(this,a)};epiviz.ui.charts.ChartType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.VisualizationType.prototype);epiviz.ui.charts.ChartType.constructor=epiviz.ui.charts.ChartType;epiviz.ui.charts.ChartType.prototype.createNew=function(a,b,c){throw Error("unimplemented abstract method");};
epiviz.ui.charts.ChartType.prototype.customSettingsDefs=function(){var a=epiviz.ui.charts.VisualizationType.prototype.customSettingsDefs.call(this);if(this.isRestrictedToRangeMeasurements())return a;var b=Object.keys(epiviz.ui.charts.markers.MeasurementAggregators);return a.concat([new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.ChartType.CustomSettings.MEASUREMENT_GROUPS_AGGREGATOR,epiviz.ui.charts.CustomSetting.Type.CATEGORICAL,b[0],"Aggregator for measurement groups",b)])};
epiviz.ui.charts.ChartType.CustomSettings={MEASUREMENT_GROUPS_AGGREGATOR:"measurementGroupsAggregator"};epiviz.ui.charts.Chart=function(a,b,c){epiviz.ui.charts.Visualization.call(this,a,b,c);this._nBins=100;this._globalIndexColorLabels=this._measurementColorLabels=this._binSize=null};epiviz.ui.charts.Chart.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Visualization.prototype);epiviz.ui.charts.Chart.constructor=epiviz.ui.charts.Chart;epiviz.ui.charts.Chart.prototype._initialize=function(){epiviz.ui.charts.Visualization.prototype._initialize.call(this);this._svg.classed("base-chart",!0)};
epiviz.ui.charts.Chart.prototype._addFilters=function(){var a=this._svg.append("defs"),b=a.append("filter").attr("id",this.id()+"-glow");b.append("feGaussianBlur").attr("id","gaussianBlur").attr("stdDeviation","2").attr("result","blurResult");b.append("feComposite").attr("id","composite").attr("in","SourceGraphic").attr("in2","blurResult").attr("operator","over");b=a.append("filter").attr("id",this.id()+"-contour");b.append("feGaussianBlur").attr("in","SourceAlpha").attr("stdDeviation","1").attr("result",
"blur");b.append("feColorMatrix").attr("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 10 -1 ").attr("result","colorMatrix");b.append("feFlood").attr("result","fillColor").attr("flood-color","#800000").attr("in","blur");b.append("feComposite").attr("result","composite").attr("in","fillColor").attr("in2","colorMatrix").attr("operator","atop");b.append("feComposite").attr("in","SourceGraphic").attr("in2","composite").attr("operator","atop");a=a.append("filter").attr("id",this.id()+"-dropshadow").attr("filterUnits",
"userSpaceOnUse").attr("color-interpolation-filters","sRGB");b=a.append("feComponentTransfer").attr("in","SourceAlpha");b.append("feFuncR").attr("type","discrete").attr("tableValues","1");b.append("feFuncG").attr("type","discrete").attr("tableValues",198/255);b.append("feFuncB").attr("type","discrete").attr("tableValues","0");a.append("feGaussianBlur").attr("stdDeviation","2");a.append("feOffset").attr("dx","0").attr("dy","0").attr("result","shadow");a.append("feComposite").attr("in","SourceGraphic").attr("in2",
"shadow").attr("operator","over")};epiviz.ui.charts.Chart.prototype.draw=function(a,b){epiviz.ui.charts.Visualization.prototype.draw.call(this,a,b);a&&(this._binSize=Math.ceil((a.end()-a.start())/this._nBins));return[]};
epiviz.ui.charts.Chart.prototype.transformData=function(a,b){var c=new epiviz.deferred.Deferred,d=this;epiviz.ui.charts.Visualization.prototype.transformData.call(this,a,b).done(function(){d._lastData?d._lastData.ready(function(){var a=!1;d._lastData.measurements().every(function(b){a=b.type()!==epiviz.measurements.Measurement.Type.RANGE;return!a});if(a){var b;d._markers.every(function(a){a&&a.type()==epiviz.ui.charts.markers.VisualizationMarker.Type.GROUP_BY_MEASUREMENTS&&(b=a);return!b});if(b){var g=
epiviz.ui.charts.markers.MeasurementAggregators[d.customSettingsValues()[epiviz.ui.charts.ChartType.CustomSettings.MEASUREMENT_GROUPS_AGGREGATOR]];d._lastData=new epiviz.datatypes.MeasurementAggregatedGenomicData(d._lastData,b,g)}}var h;d._markers.every(function(a){a&&a.type()==epiviz.ui.charts.markers.VisualizationMarker.Type.FILTER&&(h=a);return!h});h&&(d._lastData=new epiviz.datatypes.ItemFilteredGenomicData(d._lastData,h));var l;d._markers.every(function(a){a&&a.type()==epiviz.ui.charts.markers.VisualizationMarker.Type.ORDER_BY_MEASUREMENTS&&
(l=a);return!l});l&&(d._lastData=new epiviz.datatypes.MeasurementOrderedGenomicData(d._lastData,l));d._lastData.ready(function(){var a=d._lastData;if(a.isReady()){var b=new epiviz.deferred.Deferred,e;d._markers.every(function(a){a&&a.type()==epiviz.ui.charts.markers.VisualizationMarker.Type.COLOR_BY_MEASUREMENTS&&(e=a);return!e});d._measurementColorLabels=null;if(e){var f=new epiviz.measurements.MeasurementHashtable;e.preMark()(a).done(function(c){var g=a.measurements();epiviz.utils.deferredFor(g.length,
function(b){var d=new epiviz.deferred.Deferred;e.mark()(g[b],a,c).done(function(a){f.put(g[b],a);d.resolve()});return d}).done(function(){d._measurementColorLabels=f;b.resolve()})})}else b.resolve();var g=new epiviz.deferred.Deferred,h;d._markers.every(function(a){a&&a.type()==epiviz.ui.charts.markers.VisualizationMarker.Type.COLOR_BY_ROW&&(h=a);return!h});d._globalIndexColorLabels=null;if(h){var l={};h.preMark()(a).done(function(b){var c=a.firstSeries();epiviz.utils.deferredFor(c.size(),function(d){var e=
new epiviz.deferred.Deferred;h.mark()(c.getRow(d),a,b).done(function(a){l[d+c.globalStartIndex()]=a;e.resolve()});return e}).done(function(){d._globalIndexColorLabels=l;g.resolve()})})}else g.resolve();b.done(function(){g.state()==epiviz.deferred.Deferred.State.RESOLVED&&(d._dataWaitEnd.notify(new epiviz.ui.charts.VisEventArgs(d.id())),c.resolve())});g.done(function(){b.state()==epiviz.deferred.Deferred.State.RESOLVED&&(d._dataWaitEnd.notify(new epiviz.ui.charts.VisEventArgs(d.id())),c.resolve())})}})}):
c.resolve()});return c};epiviz.ui.charts.Chart.prototype.properties=function(){return epiviz.ui.charts.Visualization.prototype.properties.call(this)};epiviz.ui.charts.VisObject=function(){};epiviz.ui.charts.VisObject.prototype.regionStart=function(){return null};epiviz.ui.charts.VisObject.prototype.regionEnd=function(){return null};epiviz.ui.charts.VisObject.prototype.getMetadata=function(a,b,c){return null};epiviz.ui.charts.VisObject.prototype.getStart=function(a,b){return null};epiviz.ui.charts.VisObject.prototype.getEnd=function(a,b){return null};epiviz.ui.charts.VisObject.prototype.metadataColumns=function(){return null};
epiviz.ui.charts.VisObject.prototype.dimensions=function(){return[0,0]};epiviz.ui.charts.VisObject.prototype.metadataLooseCompare=function(){return!1};
epiviz.ui.charts.VisObject.prototype.overlapsWith=function(a){if(!a)return!1;if(this===a)return!0;var b,c,d,e=this.dimensions(),f=a.dimensions();if(!(e[0]&&f[0]||void 0!=this.regionStart()&&void 0!=a.regionStart()&&void 0!=this.regionEnd()&&void 0!=a.regionEnd()))return!1;if(!e[0]){if(!f[0])return this.regionStart()<a.regionEnd()&&this.regionEnd()>a.regionStart();for(c=0;c<f[1];++c)if(b=a.getStart(0,c),d=a.getEnd(0,c),void 0!=b&&void 0!=d&&this.regionStart()<d&&this.regionEnd()>b)return!0;return!1}var g=
epiviz.utils.arrayIntersection(this.metadataColumns(),a.metadataColumns());if(g.length){for(b=0;b<e[1];++b)for(c=0;c<f[1];++c){var h=!0;for(d=0;d<g.length;++d){var l=this.metadataLooseCompare()||a.metadataLooseCompare(),m=this.getMetadata(0,b,g[d]),n=a.getMetadata(0,c,g[d]);if(m!=n){if(!l){h=!1;break}m.length<=n.length?(l=m,m=n):l=n;if(!(new RegExp("^(.+,)?"+l+"(,.+)?$")).test(m)){h=!1;break}}}if(h)return!0}return!1}for(b=0;b<e[1];++b)for(c=0;c<f[1];++c)if(this.getStart(0,b)<a.getEnd(0,c)&&this.getEnd(0,
b)>a.getStart(0,c))return!0;return!1};epiviz.ui.charts.ChartObject=function(a,b,c,d,e,f,g,h){epiviz.ui.charts.VisObject.call(this);this.id=a;this.start=b;this.end=c;this.values=d;this.seriesIndex=e;this.valueItems=f;this.measurements=g;this.cssClasses=h};epiviz.ui.charts.ChartObject.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.VisObject.prototype);epiviz.ui.charts.ChartObject.constructor=epiviz.ui.charts.ChartObject;epiviz.ui.charts.ChartObject.prototype.regionStart=function(){return this.start};
epiviz.ui.charts.ChartObject.prototype.regionEnd=function(){return this.end};epiviz.ui.charts.ChartObject.prototype.getMetadata=function(a,b,c){return this.valueItems?this.valueItems[a][b].rowItem.metadata(c):null};epiviz.ui.charts.ChartObject.prototype.getStart=function(a,b){return this.valueItems[a][b].rowItem.start()};epiviz.ui.charts.ChartObject.prototype.getEnd=function(a,b){return this.valueItems[a][b].rowItem.end()};epiviz.ui.charts.ChartObject.prototype.metadataColumns=function(){return Object.keys(this.valueItems[0][0].rowItem.rowMetadata())};
epiviz.ui.charts.ChartObject.prototype.dimensions=function(){var a=[];return this.valueItems?(a.push(this.valueItems.length),this.valueItems.length?a.push(this.valueItems[0].length):a.push(0),a):[0,0]};epiviz.ui.charts.Track=function(a,b,c){epiviz.ui.charts.Chart.call(this,a,b,c);this._highlightGroup=this._background=null};epiviz.ui.charts.Track.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Chart.prototype);epiviz.ui.charts.Track.constructor=epiviz.ui.charts.Track;
epiviz.ui.charts.Track.prototype._initialize=function(){this._properties.width="100%";epiviz.ui.charts.Chart.prototype._initialize.call(this);var a=this;this._highlightGroup=this._svg.append("g").attr("class","track-highlight");this._background=this._svg.append("rect").attr("class","chart-background").attr("x",0).attr("y",0).attr("width","100%").attr("height","100%").attr("fill","#ffffff").attr("fill-opacity","0");this._background.on("mouseover",function(){a._captureMouseHover()}).on("mousemove",
function(){a._captureMouseHover()}).on("mouseout",function(){a._unhover.notify(new epiviz.ui.charts.VisEventArgs(a.id()))})};epiviz.ui.charts.Track.prototype.draw=function(a,b,c,d){a=epiviz.ui.charts.Chart.prototype.draw.call(this,a,b);this._drawLegend();return a};epiviz.ui.charts.Track.prototype.displayType=function(){return epiviz.ui.charts.VisualizationType.DisplayType.TRACK};
epiviz.ui.charts.Track.prototype.doHover=function(a){epiviz.ui.charts.Chart.prototype.doHover.call(this,a);if(void 0!=a.start&&void 0!=a.end&&this._lastRange){this._highlightGroup.selectAll("rect").remove();this._highlightGroup.attr("transform","translate("+this.margins().left()+", 0)");var b=epiviz.ui.charts.Axis,c=d3.scale.linear().domain([this._lastRange.start(),this._lastRange.end()]).range([0,this.width()-this.margins().sumAxis(b.X)]),b=[];if(a.measurements&&a.measurements.length)for(var d=0;d<
a.valueItems[0].length;++d){var e=a.valueItems[0][d].rowItem;b.push({start:e.start(),end:e.end()})}else b.push({start:a.start,end:a.end});this._highlightGroup.selectAll("rect").data(b,function(a){return sprintf("%s-%s",a.start,a.end)}).enter().append("rect").style("fill",this.colors().get(0)).style("fill-opacity","0.1").attr("x",function(a){var b=c(a.end+1)-c(a.start),d=Math.max(5,b);return c(a.start)+.5*b-.5*d}).attr("width",function(a){return Math.max(5,c(a.end+1)-c(a.start))}).attr("y",0).attr("height",
this.height())}};epiviz.ui.charts.Track.prototype.doUnhover=function(){epiviz.ui.charts.Chart.prototype.doUnhover.call(this);this._highlightGroup.selectAll("rect").remove()};
epiviz.ui.charts.Track.prototype._captureMouseHover=function(){if(this._lastRange){this._unhover.notify(new epiviz.ui.charts.VisEventArgs(this.id()));var a=d3.scale.linear().domain([0,this.width()]).range([this._lastRange.start(),this._lastRange.end()])(d3.mouse(this._background[0][0])[0])-this._binSize/2,b=a+this._binSize,a=new epiviz.ui.charts.ChartObject(sprintf("%s-highlight",this.id()),a,b);this._hover.notify(new epiviz.ui.charts.VisEventArgs(this.id(),a))}};
epiviz.ui.charts.Track.prototype._drawLegend=function(){var a=this;this._svg.selectAll(".chart-title").remove();this._svg.selectAll(".chart-title-color ").remove();if(this._lastData&&this._lastData.isReady()){var b=this._lastData.measurements(),c=this._svg.selectAll(".chart-title").data(b).enter().append("text").attr("class","chart-title").attr("font-weight","bold").attr("fill",function(b,c){return a._measurementColorLabels?a.colors().getByKey(a._measurementColorLabels.get(b)):a.colors().get(c)}).attr("y",
a.margins().top()-5).text(function(a,b){return a.name()}),d=0,e=[];$("#"+this.id()+" .chart-title").each(function(a){e.push(d);d+=this.getBBox().width+15});c.attr("x",function(b,c){return a.margins().left()+10+e[c]});this._svg.selectAll(".chart-title-color").data(b).enter().append("circle").attr("class","chart-title-color").attr("cx",function(b,c){return a.margins().left()+4+e[c]}).attr("cy",a.margins().top()-9).attr("r",4).style("shape-rendering","auto").style("stroke-width","0").style("fill",function(b,
c){return a._measurementColorLabels?a.colors().getByKey(a._measurementColorLabels.get(b)):a.colors().get(c)})}};epiviz.plugins={};epiviz.plugins.charts={};epiviz.plugins.charts.BlocksTrack=function(a,b,c){epiviz.ui.charts.Track.call(this,a,b,c);this._initialize()};epiviz.plugins.charts.BlocksTrack.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Track.prototype);epiviz.plugins.charts.BlocksTrack.constructor=epiviz.plugins.charts.BlocksTrack;epiviz.plugins.charts.BlocksTrack.prototype._initialize=function(){epiviz.ui.charts.Track.prototype._initialize.call(this);this._svg.classed("blocks-track",!0)};
epiviz.plugins.charts.BlocksTrack.prototype.draw=function(a,b,c,d){epiviz.ui.charts.Track.prototype.draw.call(this,a,b,c,d);b=this._lastData;a=this._lastRange;return b&&a&&b.isReady()?this._drawBlocks(a,b,c||0,d||1):[]};
epiviz.plugins.charts.BlocksTrack.prototype._drawBlocks=function(a,b,c,d){var e=epiviz.ui.charts.Axis,f=a.start(),g=a.end(),h=this.width(),l=this.height(),m=this.margins();this.measurements();var n=this.colors(),p=this.customSettingsValues()[epiviz.plugins.charts.BlocksTrackType.CustomSettings.MIN_BLOCK_DISTANCE],t=this.customSettingsValues()[epiviz.plugins.charts.BlocksTrackType.CustomSettings.BLOCK_COLOR_BY],q=this.customSettingsValues()[epiviz.plugins.charts.BlocksTrackType.CustomSettings.USE_COLOR_BY],
r=d3.scale.linear().domain([f,g]).range([0,h-m.sumAxis(e.X)]),u=c*(h-m.sumAxis(e.X))/(g-f);this._clearAxes();this._drawAxes(r,null,10,5);var v=this,x=[],y=0;b.foreach(function(b,c,d){d=[];for(var e=0;e<c.size();++e){var f=c.get(e);if(!(f.rowItem.start()>a.end()||f.rowItem.end()<a.start())){var g=sprintf("item data-series-%s",y);if(null!==p&&0<d.length){var h=d[d.length-1],l=r(f.rowItem.start()),m=r(h.end);if(l-m<p){h.end=Math.max(h.end,f.rowItem.end());h.valueItems[0].push(f);h.id=sprintf("b-%s-%s-%s",
y,h.start,h.end);continue}}d.push(new epiviz.ui.charts.ChartObject(sprintf("b-%s-%s-%s",y,f.rowItem.start(),f.rowItem.end()),f.rowItem.start(),f.rowItem.end(),f.rowItem.metadata(t),y,[[f]],[b],g))}}x=x.concat(d);++y});c=this._svg.select(".items");f=c.select(".selected");f=this._svg.select("#clip-"+this.id());c.empty()&&(f.empty()&&this._svg.select("defs").append("clipPath").attr("id","clip-"+this.id()).append("rect").attr("class","clip-path-rect"),c=this._svg.append("g").attr("class","items").attr("id",
this.id()+"-gene-content").attr("clip-path","url(#clip-"+this.id()+")"),f=c.append("g").attr("class","selected"),c.append("g").attr("class","hovered"),f.append("g").attr("class","hovered"));c.attr("transform","translate("+m.left()+", "+m.top()+")");this._svg.select(".clip-path-rect").attr("x",0).attr("y",0).attr("width",h-m.sumAxis(e.X)).attr("height",l-m.sumAxis(e.Y));c.selectAll(".item").remove();h=c.selectAll(".item").data(x,function(a){return a.id});h.enter().insert("rect",":first-child").attr("class",
function(a){return a.cssClasses}).style("fill",function(a){a=1<b.measurements().length?n.get(a.seriesIndex):q?n.getByKey(a.values):n.get(a.seriesIndex);return a}).attr("x",function(a){return r(a.start)/d+u}).attr("width",function(a){return d*(r(a.end+1)-r(a.start))}).on("mouseout",function(){v._unhover.notify(new epiviz.ui.charts.VisEventArgs(v.id()))}).on("mouseover",function(a){v._hover.notify(new epiviz.ui.charts.VisEventArgs(v.id(),a))}).on("click",function(a){v._deselect.notify(new epiviz.ui.charts.VisEventArgs(v.id()));
v._select.notify(new epiviz.ui.charts.VisEventArgs(v.id(),a));d3.event.stopPropagation()});h.attr("class",function(a){return a.cssClasses}).attr("height",l-m.sumAxis(e.Y)).attr("y",0).transition().duration(500).attr("x",function(a){return r(a.start)}).attr("width",function(a){return r(a.end+1)-r(a.start)});h.exit().transition().duration(500).attr("x",function(a){return r(a.start)}).remove();return x};
epiviz.plugins.charts.BlocksTrack.prototype.setColors=function(a){this.container().find(".items").remove();epiviz.ui.charts.Visualization.prototype.setColors.call(this,a)};epiviz.ui.charts.TrackType=function(a){epiviz.ui.charts.ChartType.call(this,a)};epiviz.ui.charts.TrackType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.ChartType.prototype);epiviz.ui.charts.TrackType.constructor=epiviz.ui.charts.TrackType;epiviz.ui.charts.TrackType.prototype.chartDisplayType=function(){return epiviz.ui.charts.VisualizationType.DisplayType.TRACK};epiviz.ui.charts.TrackType.prototype.cssClass=function(){return"track-container ui-widget-content"};epiviz.plugins.charts.BlocksTrackType=function(a){epiviz.ui.charts.TrackType.call(this,a)};epiviz.plugins.charts.BlocksTrackType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.TrackType.prototype);epiviz.plugins.charts.BlocksTrackType.constructor=epiviz.plugins.charts.BlocksTrackType;epiviz.plugins.charts.BlocksTrackType.prototype.createNew=function(a,b,c){return new epiviz.plugins.charts.BlocksTrack(a,b,c)};epiviz.plugins.charts.BlocksTrackType.prototype.typeName=function(){return"epiviz.plugins.charts.BlocksTrack"};
epiviz.plugins.charts.BlocksTrackType.prototype.chartName=function(){return"Blocks Track"};epiviz.plugins.charts.BlocksTrackType.prototype.chartHtmlAttributeName=function(){return"blocks"};epiviz.plugins.charts.BlocksTrackType.prototype.isRestrictedToRangeMeasurements=function(){return!0};epiviz.plugins.charts.BlocksTrackType.prototype.measurementsFilter=function(){return function(a){return a.type()==epiviz.measurements.Measurement.Type.RANGE}};
epiviz.plugins.charts.BlocksTrackType.prototype.customSettingsDefs=function(){return epiviz.ui.charts.TrackType.prototype.customSettingsDefs.call(this).concat([new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.BlocksTrackType.CustomSettings.MIN_BLOCK_DISTANCE,epiviz.ui.charts.CustomSetting.Type.NUMBER,5,"Minimum block distance"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.BlocksTrackType.CustomSettings.USE_COLOR_BY,epiviz.ui.charts.CustomSetting.Type.BOOLEAN,!1,"Use Block Color by"),
new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.BlocksTrackType.CustomSettings.BLOCK_COLOR_BY,epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_METADATA,"colLabel","Block color by")])};epiviz.plugins.charts.BlocksTrackType.CustomSettings={MIN_BLOCK_DISTANCE:"minBlockDistance",BLOCK_COLOR_BY:"blockColorBy",USE_COLOR_BY:"useColorBy"};epiviz.plugins.charts.LineTrack=function(a,b,c){epiviz.ui.charts.Track.call(this,a,b,c);this._initialize()};epiviz.plugins.charts.LineTrack.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Track.prototype);epiviz.plugins.charts.LineTrack.constructor=epiviz.plugins.charts.LineTrack;epiviz.plugins.charts.LineTrack.prototype._initialize=function(){epiviz.ui.charts.Track.prototype._initialize.call(this)};
epiviz.plugins.charts.LineTrack.prototype.draw=function(a,b,c,d){epiviz.ui.charts.Track.prototype.draw.call(this,a,b,c,d);b=this._lastData;a=this._lastRange;c=c||this._slide||0;d=d||this._zoom||1;this._slide=0;this._zoom=1;if(!b||!a)return[];var e=epiviz.ui.charts.CustomSetting,f=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.Y_MIN],g=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.Y_MAX];f==e.DEFAULT&&(f=null,this.measurements().foreach(function(a){null!==
a&&(null===f||a.minValue()<f)&&(f=a.minValue())}));g==e.DEFAULT&&(g=null,this.measurements().foreach(function(a){null!==a&&(null===g||a.maxValue()>g)&&(g=a.maxValue())}));null===f&&null===g&&(f=-1,g=1);null===f&&(f=g-1);null===g&&(g=f+1);var h=epiviz.ui.charts.Axis,e=d3.scale.linear().domain([a.start(),a.end()]).range([0,this.width()-this.margins().sumAxis(h.X)]),l=d3.scale.linear().domain([f,g]).range([this.height()-this.margins().sumAxis(h.Y),0]);this._clearAxes();this._drawAxes(e,l,10,5);c=c*(this.width()-
this.margins().sumAxis(h.X))/a.width();var m=this._svg.selectAll(".lines");m.empty()&&(m=this._svg.append("g").attr("class","lines").attr("transform","translate("+this.margins().left()+", "+this.margins().top()+")"));b.measurements().forEach(function(a,b){var c=m.selectAll(".line-series-index-"+b),d=m.selectAll(".point-series-index-"+b);c.empty()&&m.append("g").attr("class","line-series-index-"+b);d.empty()&&m.append("g").attr("class","point-series-index-"+b)});for(h=b.measurements().length;;++h){var n=
m.selectAll(".line-series-index-"+h),p=m.selectAll(".point-series-index-"+h);if(n.empty())break;n.remove();p.remove()}return this._drawLines(a,b,c,d,e,l)};
epiviz.plugins.charts.LineTrack.prototype._drawLines=function(a,b,c,d,e,f){var g=this.colors(),h=parseInt(this.customSettingsValues()[epiviz.plugins.charts.LineTrackType.CustomSettings.STEP]),l=this.customSettingsValues()[epiviz.plugins.charts.LineTrackType.CustomSettings.SHOW_POINTS],m=this.customSettingsValues()[epiviz.plugins.charts.LineTrackType.CustomSettings.SHOW_LINES],n=this.customSettingsValues()[epiviz.plugins.charts.LineTrackType.CustomSettings.SHOW_ERROR_BARS],p=this.customSettingsValues()[epiviz.plugins.charts.LineTrackType.CustomSettings.POINT_RADIUS],
t=this.customSettingsValues()[epiviz.plugins.charts.LineTrackType.CustomSettings.LINE_THICKNESS],q=this.customSettingsValues()[epiviz.plugins.charts.LineTrackType.CustomSettings.INTERPOLATION],r=this;d=d3.scale.linear().domain([0,this.width()-this.margins().sumAxis(epiviz.ui.charts.Axis.X)]).range([a.start(),a.end()])(c)-a.start();var u=epiviz.datatypes.GenomicRange.fromStartEnd(a.seqName(),Math.min(a.start(),a.start()+d),Math.max(a.end(),a.end()+d)),v=this._svg.select(".lines"),x=[];b.foreach(function(a,
b,d){var A=r._measurementColorLabels?g.getByKey(r._measurementColorLabels.get(a)):g.get(d),y=b.binarySearchStarts(u);if(0!=y.length){var C=Math.ceil(y.index/h)*h;y.length=Math.max(0,y.length-C+y.index);y.index=C;for(var C=epiviz.utils.range(y.length,y.index).filter(function(a){return!h||1>=h||0==(a-y.index)%h}),z=0;z<C.length;++z){var w=b.get(C[z]);x.push(new epiviz.ui.charts.ChartObject(sprintf("line_%s_%s",d,w.globalIndex),w.rowItem.start(),w.rowItem.end(),[w.value],d,[[w]],[a],sprintf("item data-series-%s",
d)))}var E=function(a){a=b.get(a);return e(a.rowItem.start())};a=function(a){a=b.get(a);return f(a.value)};m?(z=d3.svg.line().x(E).y(a).interpolate(q),w=v.select(".line-series-index-"+d).selectAll("path").data([C]),w.enter().append("path").attr("d",z).style("shape-rendering","auto").style("stroke-opacity","0.8").on("mouseover",function(){r._captureMouseHover()}).on("mousemove",function(){r._captureMouseHover()}).on("mouseout",function(){r._unhover.notify(new epiviz.ui.charts.VisEventArgs(r.id()))}),
w.attr("d",z).style("stroke",A).style("stroke-width",t).attr("transform","translate("+ +c+")").transition().duration(500).attr("transform","translate(0)")):v.select(".line-series-index-"+d).selectAll("path").remove();v.select(".point-series-index-"+d).selectAll("circle").remove();v.select(".point-series-index-"+d).selectAll(".error-bar").remove();l&&(z=v.select(".point-series-index-"+d).selectAll("circle").data(C),z.enter().append("circle").attr("class","point-series-index-"+d).attr("r",p).attr("cx",
E).attr("cy",a).attr("fill",A).attr("stroke",A).attr("transform","translate("+ +c+")").transition().duration(500).attr("transform","translate(0)"),z.on("mouseover",function(){r._captureMouseHover()}).on("mousemove",function(){r._captureMouseHover()}).on("mouseout",function(){r._unhover.notify(new epiviz.ui.charts.VisEventArgs(r.id()))}),z.exit().transition().duration(500).style("opacity",0).remove(),n&&(d=v.select(".point-series-index-"+d).selectAll(".error-bar").data(C),d.enter().append("g").attr("class",
"error-bar").each(function(a){var c;c=b.get(a);c=c.valueAnnotation?c.valueAnnotation.errMinus:null;c=void 0!=c?f(c):null;var d;d=b.get(a);d=d.valueAnnotation?d.valueAnnotation.errPlus:null;d=void 0!=d?f(d):null;null!=c&&null!=d&&(d3.select(this).append("line").attr("x1",E(a)).attr("x2",E(a)).attr("y1",c).attr("y2",d).style("stroke",A).style("shape-rendering","auto"),d3.select(this).append("line").attr("x1",E(a)-2).attr("x2",E(a)+2).attr("y1",c).attr("y2",c).style("stroke",A).style("shape-rendering",
"auto"),d3.select(this).append("line").attr("x1",E(a)-2).attr("x2",E(a)+2).attr("y1",d).attr("y2",d).style("stroke",A).style("shape-rendering","auto"))}).attr("transform","translate("+ +c+")").transition().duration(500).attr("transform","translate(0)"),d.on("mouseover",function(){r._captureMouseHover()}).on("mousemove",function(){r._captureMouseHover()}).on("mouseout",function(){r._unhover.notify(new epiviz.ui.charts.VisEventArgs(r.id()))}),d.exit().transition().duration(500).style("opacity",0).remove()))}});
absLine!=epiviz.ui.charts.CustomSetting.DEFAULT&&(v.selectAll(".abLine").remove(),v.append("svg:line").attr("class","abLine").attr("x1",0).attr("x2",r.width()-r.margins().sumAxis(epiviz.ui.charts.Axis.X)).attr("y1",f(absLine)).attr("y2",f(absLine)).style("stroke","black").style("stroke-dasharray","5, 5"));return x};epiviz.plugins.charts.LineTrackType=function(a){epiviz.ui.charts.TrackType.call(this,a)};epiviz.plugins.charts.LineTrackType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.TrackType.prototype);epiviz.plugins.charts.LineTrackType.constructor=epiviz.plugins.charts.LineTrackType;epiviz.plugins.charts.LineTrackType.prototype.createNew=function(a,b,c){return new epiviz.plugins.charts.LineTrack(a,b,c)};epiviz.plugins.charts.LineTrackType.prototype.typeName=function(){return"epiviz.plugins.charts.LineTrack"};
epiviz.plugins.charts.LineTrackType.prototype.chartName=function(){return"Line Track"};epiviz.plugins.charts.LineTrackType.prototype.chartHtmlAttributeName=function(){return"lines"};epiviz.plugins.charts.LineTrackType.prototype.measurementsFilter=function(){return function(a){return a.type()==epiviz.measurements.Measurement.Type.FEATURE}};
epiviz.plugins.charts.LineTrackType.prototype.customSettingsDefs=function(){return epiviz.ui.charts.TrackType.prototype.customSettingsDefs.call(this).concat([new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LineTrackType.CustomSettings.STEP,epiviz.ui.charts.CustomSetting.Type.NUMBER,50,"Step"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LineTrackType.CustomSettings.SHOW_POINTS,epiviz.ui.charts.CustomSetting.Type.BOOLEAN,!1,"Show points"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LineTrackType.CustomSettings.SHOW_LINES,
epiviz.ui.charts.CustomSetting.Type.BOOLEAN,!0,"Show lines"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LineTrackType.CustomSettings.SHOW_ERROR_BARS,epiviz.ui.charts.CustomSetting.Type.BOOLEAN,!0,"Show error bars"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LineTrackType.CustomSettings.POINT_RADIUS,epiviz.ui.charts.CustomSetting.Type.NUMBER,1,"Point radius"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LineTrackType.CustomSettings.LINE_THICKNESS,epiviz.ui.charts.CustomSetting.Type.NUMBER,
1,"Line thickness"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.Y_MIN,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Min Y"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.Y_MAX,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Max Y"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LineTrackType.CustomSettings.INTERPOLATION,epiviz.ui.charts.CustomSetting.Type.CATEGORICAL,
"linear","Interpolation","linear step-before step-after basis basis-open basis-closed bundle cardinal cardinal-open monotone".split(" ")),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LineTrackType.CustomSettings.ABS_LINE_VAL,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Draw abline")])};
epiviz.plugins.charts.LineTrackType.CustomSettings={STEP:"step",SHOW_POINTS:"showPoints",SHOW_ERROR_BARS:"showErrorBars",SHOW_LINES:"showLines",POINT_RADIUS:"pointRadius",LINE_THICKNESS:"lineThickness",INTERPOLATION:"interpolation",ABS_LINE_VAL:"abLine"};epiviz.plugins.charts.StackedLineTrack=function(a,b,c){epiviz.ui.charts.Track.call(this,a,b,c);this._initialize()};epiviz.plugins.charts.StackedLineTrack.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Track.prototype);epiviz.plugins.charts.StackedLineTrack.constructor=epiviz.plugins.charts.StackedLineTrack;epiviz.plugins.charts.StackedLineTrack.prototype._initialize=function(){epiviz.ui.charts.Track.prototype._initialize.call(this)};
epiviz.plugins.charts.StackedLineTrack.prototype.draw=function(a,b,c,d){epiviz.ui.charts.Track.prototype.draw.call(this,a,b,c,d);b=this._lastData;a=this._lastRange;c=c||this._slide;d=d||this._zoom;this._slide=0;this._zoom=1;if(!b||!a)return[];var e=epiviz.ui.charts.Axis;c=(c||0)*(this.width()-this.margins().sumAxis(e.X))/a.width();return this._drawLines(a,b,c,d||1)};
epiviz.plugins.charts.StackedLineTrack.prototype._drawLines=function(a,b,c,d){d=epiviz.ui.charts.Axis;var e=this.colors(),f=this.customSettingsValues()[epiviz.plugins.charts.StackedLineTrackType.CustomSettings.STEP],g=this.customSettingsValues()[epiviz.plugins.charts.StackedLineTrackType.CustomSettings.INTERPOLATION],h=this.customSettingsValues()[epiviz.plugins.charts.StackedLineTrackType.CustomSettings.OFFSET],l=this,m=d3.scale.linear().domain([0,this.width()-this.margins().sumAxis(d.X)]).range([a.start(),
a.end()])(c)-a.start();epiviz.datatypes.GenomicRange.fromStartEnd(a.seqName(),Math.min(a.start(),a.start()+m),Math.max(a.end(),a.end()+m));var n=[],p=[],t=b.firstSeries().globalStartIndex(),q=b.firstSeries().globalEndIndex();b.foreach(function(a,b){var c=b.globalStartIndex(),d=b.globalEndIndex();c>t&&(t=c);d<q&&(q=d)});var t=Math.ceil(t/f)*f,q=Math.floor(q/f)*f,r;b.foreach(function(a,b,c){for(var d=epiviz.utils.range((q-t)/f).map(function(a){return a*f+t}).filter(function(a){return b.getByGlobalIndex(a)}),
e=0;e<d.length;++e){var g=b.getByGlobalIndex(d[e]);n.push(new epiviz.ui.charts.ChartObject(sprintf("line_%s_%s",c,g.globalIndex),g.rowItem.start(),g.rowItem.end(),[g.value],c,[[g]],[a],sprintf("item data-series-%s",c)))}var h=[];d.forEach(function(a){h.push({x:b.getByGlobalIndex(a).rowItem.start(),y:b.getByGlobalIndex(a).value})});p.push(h);r||(r=[],d.forEach(function(a){a=b.getByGlobalIndex(a);r.push(a.rowItem.metadata("bacteria"))}))});var u=d3.scale.linear().domain([a.start(),a.end()]).range([0,
this.width()-this.margins().sumAxis(d.X)]);this._clearAxes();this._drawAxes(u,void 0,10);a=this._svg.select(".lines");a.empty()&&(a=this._svg.append("g").attr("class","lines").attr("transform","translate("+this.margins().left()+", "+this.margins().top()+")"));b=d3.layout.stack().offset(h)(p);var v=d3.scale.linear().domain([Math.min(0,d3.min(b,function(a){return d3.min(a,function(a){return a.y0+a.y})})),d3.max(b,function(a){return d3.max(a,function(a){return a.y0+a.y})})]).range([this.height()-this.margins().sumAxis(d.Y),
0]);d=d3.svg.area().x(function(a){return u(a.x)}).y0(function(a){return v(a.y0)}).y1(function(a){return v(a.y0+a.y)}).interpolate(g);g=a.selectAll("path").data(b);g.enter().append("path").attr("d",d).style("shape-rendering","auto").style("stroke-width","0").style("fill",function(a,b){return e.get(b)}).on("mouseover",function(){l._captureMouseHover()}).on("mousemove",function(){l._captureMouseHover()}).on("mouseout",function(){l._unhover.notify(new epiviz.ui.charts.VisEventArgs(l.id()))});g.attr("d",
d).style("fill",function(a,b){return e.get(b)}).attr("transform","translate("+ +c+")").transition().duration(500).attr("transform","translate(0)");absLine!=epiviz.ui.charts.CustomSetting.DEFAULT&&(a.selectAll(".abLine").remove(),a.append("svg:line").attr("class","abLine").attr("x1",0).attr("x2",l.width()-l.margins().sumAxis(epiviz.ui.charts.Axis.X)).attr("y1",v(absLine)).attr("y2",v(absLine)).style("stroke","black").style("stroke-dasharray","5, 5"));return n};epiviz.plugins.charts.StackedLineTrackType=function(a){epiviz.ui.charts.TrackType.call(this,a)};epiviz.plugins.charts.StackedLineTrackType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.TrackType.prototype);epiviz.plugins.charts.StackedLineTrackType.constructor=epiviz.plugins.charts.StackedLineTrackType;epiviz.plugins.charts.StackedLineTrackType.prototype.createNew=function(a,b,c){return new epiviz.plugins.charts.StackedLineTrack(a,b,c)};
epiviz.plugins.charts.StackedLineTrackType.prototype.typeName=function(){return"epiviz.plugins.charts.StackedLineTrack"};epiviz.plugins.charts.StackedLineTrackType.prototype.chartName=function(){return"Stacked Track"};epiviz.plugins.charts.StackedLineTrackType.prototype.chartHtmlAttributeName=function(){return"stacked-lines"};epiviz.plugins.charts.StackedLineTrackType.prototype.measurementsFilter=function(){return function(a){return a.type()==epiviz.measurements.Measurement.Type.FEATURE}};
epiviz.plugins.charts.StackedLineTrackType.prototype.isRestrictedToSameDatasourceGroup=function(){return!0};
epiviz.plugins.charts.StackedLineTrackType.prototype.customSettingsDefs=function(){return epiviz.ui.charts.TrackType.prototype.customSettingsDefs.call(this).concat([new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.StackedLineTrackType.CustomSettings.STEP,epiviz.ui.charts.CustomSetting.Type.NUMBER,1,"Step"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.StackedLineTrackType.CustomSettings.OFFSET,epiviz.ui.charts.CustomSetting.Type.CATEGORICAL,"zero","Offset",["zero","wiggle"]),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.StackedLineTrackType.CustomSettings.INTERPOLATION,
epiviz.ui.charts.CustomSetting.Type.CATEGORICAL,"basis","Interpolation","linear step-before step-after basis basis-open basis-closed bundle cardinal cardinal-open monotone".split(" ")),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.StackedLineTrackType.CustomSettings.ABS_LINE_VAL,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Draw abline")])};
epiviz.plugins.charts.StackedLineTrackType.CustomSettings={STEP:"step",OFFSET:"offset",INTERPOLATION:"interpolation",ABS_LINE_VAL:"abLine"};epiviz.ui.charts.Plot=function(a,b,c){epiviz.ui.charts.Chart.call(this,a,b,c)};epiviz.ui.charts.Plot.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Chart.prototype);epiviz.ui.charts.Plot.constructor=epiviz.ui.charts.Plot;epiviz.ui.charts.Plot.prototype.displayType=function(){return epiviz.ui.charts.VisualizationType.DisplayType.PLOT};epiviz.plugins.charts.ScatterPlot=function(a,b,c){epiviz.ui.charts.Plot.call(this,a,b,c);this._legend=this._chartContent=null;this._measurementsX=[];this._measurementsY=[];var d=this;this.measurements().foreach(function(a,b){0==b%2?d._measurementsX.push(a):d._measurementsY.push(a)});this._yLabel=this._xLabel="";for(a=0;a<Math.min(this._measurementsX.length,this._measurementsY.length);++a)0<a&&(this._xLabel+=", ",this._yLabel+=", "),this._xLabel+=this._measurementsX[a].name(),this._yLabel+=this._measurementsY[a].name();
this._colorLabels=[];this._initialize()};epiviz.plugins.charts.ScatterPlot.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Plot.prototype);epiviz.plugins.charts.ScatterPlot.constructor=epiviz.plugins.charts.ScatterPlot;epiviz.plugins.charts.ScatterPlot.prototype._initialize=function(){epiviz.ui.charts.Plot.prototype._initialize.call(this);this._svg.classed("scatter-plot",!0);this._chartContent=this._svg.append("g").attr("class","chart-content");this._legend=this._svg.append("g").attr("class","chart-legend")};
epiviz.plugins.charts.ScatterPlot.prototype.draw=function(a,b){epiviz.ui.charts.Plot.prototype.draw.call(this,a,b);b=this._lastData;a=this._lastRange;if(!b||!a)return[];var c=this;if(this.customSettingsValues()[epiviz.plugins.charts.ScatterPlotType.CustomSettings.LOG_TRANSFORM])this._applyLogTransformation(b,function(b){return c._drawCircles(a,b)});else return c._drawCircles(a,b)};
epiviz.plugins.charts.ScatterPlot.prototype._drawCircles=function(a,b){var c=this,d=epiviz.ui.charts.Axis,e=Math.max(1,this.customSettingsValues()[epiviz.plugins.charts.ScatterPlotType.CustomSettings.CIRCLE_RADIUS_RATIO]*Math.min(this.width(),this.height())),f=Math.max(Math.floor(e),1),g=Math.min(this._measurementsX.length,this._measurementsY.length),h=this.customSettingsValues()[epiviz.plugins.charts.ScatterPlotType.CustomSettings.ABS_LINE_VAL],l=b.firstSeries().globalStartIndex(),m=b.firstSeries().globalEndIndex();
b.foreach(function(a,b){var c=b.globalStartIndex(),d=b.globalEndIndex();c>l&&(l=c);d<m&&(m=d)});var n=m-l,p=this.margins(),t=this.width(),q=this.height(),r=epiviz.ui.charts.CustomSetting,u=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.Y_MIN],v=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.Y_MAX],x=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.X_MIN],y=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.X_MAX];
x==r.DEFAULT&&(x=this._measurementsX[0].minValue());u==r.DEFAULT&&(u=this._measurementsY[0].minValue());y==r.DEFAULT&&(y=this._measurementsX[0].maxValue());v==r.DEFAULT&&(v=this._measurementsY[0].maxValue());var A=epiviz.measurements.Measurement.Type.isOrdered(this._measurementsX[0].type()),r=d3.scale.linear().domain([x,y]).range([0,t-p.sumAxis(d.X)]),C=d3.scale.linear().domain([u,v]).range([q-p.sumAxis(d.Y),0]);this._clearAxes(this._chartContent);this._drawAxes(r,C,5,5,this._chartContent);var D,
B,H=[];for(D=0;D<n;++D){B=D+l;var z=b.getSeries(this._measurementsX[0]).getRowByGlobalIndex(B);if(z&&(!A||void 0==a.start()||void 0==a.end()||z.start()<a.end()&&z.end()>a.start()))for(z=0;z<g;++z)H.push(z*n+D)}var z={},g=[],w=1;for(D=0;D<H.length;++D){B=H[D]%n;var E=B+l,A=Math.floor(H[D]/n);B=c._measurementsX[A];var I=c._measurementsY[A],J=b.getSeries(B).getByGlobalIndex(E),E=b.getSeries(I).getByGlobalIndex(E);if(J&&E){var L=sprintf("item data-series-%s",A),K=r(J.value),F=C(E.value),K=Math.floor(K/
f)*f,F=Math.floor(F/f)*f,G=null;z[F]&&z[F][K]?(G=z[F][K],G.id+="_"+J.globalIndex,G.start=Math.min(G.start,J.rowItem.start()),G.end=Math.max(G.end,J.rowItem.end()),G.values[0]=(G.values[0]*G.valueItems[0].length+J.value)/(G.valueItems[0].length+1),G.values[1]=(G.values[1]*G.valueItems[1].length+E.value)/(G.valueItems[1].length+1),G.valueItems[0].push(J),G.valueItems[1].push(E),G.valueItems[0].length>w&&(w=G.valueItems[0].length)):(G=new epiviz.ui.charts.ChartObject(sprintf("scatter_%s_%s",A,J.globalIndex),
J.rowItem.start(),J.rowItem.end(),[J.value,E.value],A,[[J],[E]],[B,I],L),z[F]||(z[F]={}),z[F][K]=G,g.push(G))}}f=this._chartContent.select(".items");f.empty()&&(f=this._chartContent.append("g").attr("class","items"),n=f.append("g").attr("class","selected"),f.append("g").attr("class","hovered"),n.append("g").attr("class","hovered"));n=f.selectAll("circle").data(g,function(a){return a.id});n.enter().insert("circle",":first-child").attr("id",function(a){return sprintf("%s-item-%s-%s",c.id(),a.seriesIndex,
a.valueItems[0][0].globalIndex)}).style("opacity",0).style("fill-opacity",0).attr("r",0);n.each(function(a){var b=d3.select(this),e;e=c._globalIndexColorLabels?c.colors().getByKey(c._globalIndexColorLabels[a.valueItems[0][0].globalIndex]):c.colors().get(a.seriesIndex);b.attr("cx",p.left()+(a.values[0]-x)*(t-p.sumAxis(d.X))/(y-x)).attr("cy",q-p.bottom()-(a.values[1]-u)*(q-p.sumAxis(d.Y))/(v-u)).attr("class",a.cssClasses).style("fill",e)});n.transition().duration(1E3).style("fill-opacity",function(a){return Math.max(.6,
a.valueItems[0].length/w)}).style("opacity",null).attr("r",e);n.exit().transition().duration(1E3).style("opacity",0).attr("r",0).remove();n.on("mouseover",function(a){c._hover.notify(new epiviz.ui.charts.VisEventArgs(c.id(),a))}).on("mouseout",function(){c._unhover.notify(new epiviz.ui.charts.VisEventArgs(c.id()))}).on("click",function(a){c._deselect.notify(new epiviz.ui.charts.VisEventArgs(c.id()));c._select.notify(new epiviz.ui.charts.VisEventArgs(c.id(),a));d3.event.stopPropagation()});if(this._globalIndexColorLabels){e=
{};for(z=l;z<m;++z)e[this._globalIndexColorLabels[z]]=this._globalIndexColorLabels[z];this._colorLabels=Object.keys(e);this._svg.selectAll(".chart-title").remove();this._svg.selectAll(".chart-title-color ").remove();e=this._svg.selectAll(".chart-title").data(this._colorLabels);e.enter().append("text").attr("class","chart-title").attr("font-weight","bold").attr("y",c.margins().top()-5);e.attr("fill",function(a,b){return c.colors().getByKey(a)}).text(function(a){return a});var M=0,N=[];$("#"+this.id()+
" .chart-title").each(function(a){N.push(M);M+=this.getBBox().width+15});e.attr("x",function(a,b){return c.margins().left()+10+N[b]});this._svg.selectAll(".chart-title-color").data(this._colorLabels).enter().append("circle").attr("class","chart-title-color").attr("cx",function(a,b){return c.margins().left()+4+N[b]}).attr("cy",c.margins().top()-9).attr("r",4).style("shape-rendering","auto").style("stroke-width","0").attr("fill",function(a,b){return c.colors().getByKey(a)}).style("stroke-width",0)}else{e=
Math.min(this._measurementsX.length,this._measurementsY.length);n=Array(e);for(z=0;z<e;++z)n[z]=sprintf("%s vs %s",this._measurementsX[z].name(),this._measurementsY[z].name());this._colorLabels=n}h!=epiviz.ui.charts.CustomSetting.DEFAULT&&(f.selectAll(".abLine").remove(),f.append("svg:line").attr("class","abLine").attr("x1",p.left()+(x-x)*(t-p.sumAxis(d.X))/(y-x)).attr("x2",p.left()+(y-x)*(t-p.sumAxis(d.X))/(y-x)).attr("y1",q-p.bottom()-(h-u)*(q-p.sumAxis(d.Y))/(v-u)).attr("y2",q-p.bottom()-(h-u)*
(q-p.sumAxis(d.Y))/(v-u)).style("stroke","black").style("stroke-dasharray","5, 5"));return g};epiviz.plugins.charts.ScatterPlot.prototype.colorLabels=function(){return this._colorLabels};
epiviz.plugins.charts.ScatterPlot.prototype._drawAxes=function(a,b,c,d,e,f,g,h){epiviz.ui.charts.Plot.prototype._drawAxes.call(this,a,b,c,d,e,f,g,h);this._legend.selectAll("text").remove();a=this._measurementsX;var l=this;this._legend.selectAll(".x-measurement").remove();this._legend.selectAll(".x-measurement-color").remove();b=this._legend.selectAll(".x-measurement").data(a).enter().append("text").attr("class","x-measurement").attr("font-weight","bold").attr("fill",function(a,b){return l._globalIndexColorLabels?
"#000000":l.colors().get(b)}).attr("y",this.height()-this.margins().bottom()+35).text(function(a,b){return a.name()});var m=0,n=[];$("#"+this.id()+" .x-measurement").each(function(a){n.push(m);m+=this.getBBox().width+15});b.attr("x",function(a,b){return.5*(l.width()-m)+7+n[b]});this._legend.selectAll(".x-measurement-color").data(a).enter().append("circle").attr("class","x-measurement-color").attr("cx",function(a,b){return.5*(l.width()-m)+1+n[b]}).attr("cy",this.height()-this.margins().bottom()+31).attr("r",
4).style("shape-rendering","auto").style("stroke-width","0").style("fill",function(a,b){return l._globalIndexColorLabels?"#ffffff":l.colors().get(b)});a=this._measurementsY;this._legend.selectAll(".y-measurement").remove();this._legend.selectAll(".y-measurement-color").remove();b=this._legend.selectAll(".y-measurement").data(a).enter().append("text").attr("class","y-measurement").attr("font-weight","bold").attr("fill",function(a,b){return l._globalIndexColorLabels?"#000000":l.colors().get(b)}).attr("y",
this.margins().left()-35).attr("transform","rotate(-90)").text(function(a,b){return a.name()});var p=0,t=[];$("#"+this.id()+" .y-measurement").each(function(a){t.push(p);p+=this.getBBox().width+15});b.attr("x",function(a,b){return-l.height()+.5*(l.height()-p)+12+l.margins().top()+t[b]});this._legend.selectAll(".y-measurement-color").data(a).enter().append("circle").attr("class","y-measurement-color").attr("cx",function(a,b){return-l.height()+.5*(l.height()-p)+6+l.margins().top()+t[b]}).attr("cy",
this.margins().left()-39).attr("transform","rotate(-90)").attr("r",4).style("shape-rendering","auto").style("stroke-width","0").style("fill",function(a,b){return l._globalIndexColorLabels?"#ffffff":l.colors().get(b)})};
epiviz.plugins.charts.ScatterPlot.prototype._applyLogTransformation=function(a,b){var c=new epiviz.datatypes.PartialSummarizedExperiment,d=0;a.foreach(function(a,b,e){0==d&&(e=b._container.rowData(a),c._rowData=e,d++);b=b._container.values(a);var f=[];b._values.forEach(function(a,b){f[b]=Math.log2(a+1)});a=new epiviz.datatypes.FeatureValueArray(a,b._boundaries,b._globalStartIndex,f);c.addValues(a)});var e=new epiviz.measurements.MeasurementHashtable;a.foreach(function(a){a._maxValue=Math.log2(a._maxValue+
1);a._minValue=Math.log2(a._minValue+1);var b=new epiviz.datatypes.MeasurementGenomicDataWrapper(a,c);e.put(a,b)});var f=new epiviz.datatypes.MapGenomicData(e);b(f)};epiviz.ui.charts.PlotType=function(a){epiviz.ui.charts.ChartType.call(this,a)};epiviz.ui.charts.PlotType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.ChartType.prototype);epiviz.ui.charts.PlotType.constructor=epiviz.ui.charts.PlotType;epiviz.ui.charts.PlotType.prototype.chartDisplayType=function(){return epiviz.ui.charts.VisualizationType.DisplayType.PLOT};epiviz.ui.charts.PlotType.prototype.cssClass=function(){return"plot-container ui-widget-content"};epiviz.plugins.charts.ScatterPlotType=function(a){epiviz.ui.charts.PlotType.call(this,a)};epiviz.plugins.charts.ScatterPlotType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.PlotType.prototype);epiviz.plugins.charts.ScatterPlotType.constructor=epiviz.plugins.charts.ScatterPlotType;epiviz.plugins.charts.ScatterPlotType.prototype.createNew=function(a,b,c){return new epiviz.plugins.charts.ScatterPlot(a,b,c)};epiviz.plugins.charts.ScatterPlotType.prototype.typeName=function(){return"epiviz.plugins.charts.ScatterPlot"};
epiviz.plugins.charts.ScatterPlotType.prototype.chartName=function(){return"Scatter Plot"};epiviz.plugins.charts.ScatterPlotType.prototype.chartHtmlAttributeName=function(){return"scatter"};epiviz.plugins.charts.ScatterPlotType.prototype.measurementsFilter=function(){return function(a){return epiviz.measurements.Measurement.Type.hasValues(a.type())}};epiviz.plugins.charts.ScatterPlotType.prototype.isRestrictedToSameDatasourceGroup=function(){return!0};
epiviz.plugins.charts.ScatterPlotType.prototype.minSelectedMeasurements=function(){return 2};
epiviz.plugins.charts.ScatterPlotType.prototype.customSettingsDefs=function(){return epiviz.ui.charts.PlotType.prototype.customSettingsDefs.call(this).concat([new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.ScatterPlotType.CustomSettings.CIRCLE_RADIUS_RATIO,epiviz.ui.charts.CustomSetting.Type.NUMBER,.015,"Circle radius ratio"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.X_MIN,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,
"Min X"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.X_MAX,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Max X"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.Y_MIN,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Min Y"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.Y_MAX,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,
"Max Y"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.ScatterPlotType.CustomSettings.ABS_LINE_VAL,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Draw abline"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.ScatterPlotType.CustomSettings.LOG_TRANSFORM,epiviz.ui.charts.CustomSetting.Type.BOOLEAN,!0,"Log Transform count data")])};
epiviz.plugins.charts.ScatterPlotType.CustomSettings={CIRCLE_RADIUS_RATIO:"circleRadiusRatio",ABS_LINE_VAL:"abLine",LOG_TRANSFORM:"logTransform"};epiviz.plugins.charts.GenesTrack=function(a,b,c){epiviz.ui.charts.Track.call(this,a,b,c);this._initialize()};epiviz.plugins.charts.GenesTrack.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Track.prototype);epiviz.plugins.charts.GenesTrack.constructor=epiviz.plugins.charts.GenesTrack;epiviz.plugins.charts.GenesTrack.prototype._initialize=function(){epiviz.ui.charts.Track.prototype._initialize.call(this);this._svg.classed("genes-track",!0)};
epiviz.plugins.charts.GenesTrack.prototype.draw=function(a,b,c,d){epiviz.ui.charts.Track.prototype.draw.call(this,a,b,c,d);b=this._lastData;a=this._lastRange;if(!b||!a)return[];c=c||this._slide;d=d||this._zoom;this._slide=0;this._zoom=1;return this._drawGenes(a,b,c||0,d||1)};
epiviz.plugins.charts.GenesTrack.prototype._drawGenes=function(a,b,c,d){var e=epiviz.ui.charts.Axis,f=a.start(),g=a.end();a=this.width();var h=this.height(),l=this.margins(),m=d3.scale.linear().domain([f,g]).range([0,a-l.sumAxis(e.X)]),n=c*(a-l.sumAxis(e.X))/(g-f);this._clearAxes();this._drawAxes(m,null,10,5);var p=this,t=b.firstSeries();b=epiviz.utils.range(t.size()).map(function(a){a=t.get(a);var b=a.rowItem,c=sprintf("item gene-%s",b.metadata("gene"));return new epiviz.ui.charts.ChartObject(b.metadata("gene"),
b.start(),b.end(),null,0,[[a]],[t.measurement()],c)});d&&(this._svg.select(".items").remove(),this._svg.select("defs").select("#clip-"+this.id()).remove());d=this._svg.select(".items");c=d.select(".selected");d.empty()&&(this._svg.select("defs").append("clipPath").attr("id","clip-"+this.id()).append("rect").attr("x",0).attr("y",0).attr("width",a-l.sumAxis(e.X)).attr("height",h-l.sumAxis(e.Y)),d=this._svg.append("g").attr("class","items").attr("transform","translate("+l.left()+", "+l.top()+")").attr("id",
this.id()+"-gene-content").attr("clip-path","url(#clip-"+this.id()+")"),c=d.append("g").attr("class","selected"),d.append("g").attr("class","hovered"),c.append("g").attr("class","hovered"));e=d.selectAll(".item").data(b,function(a){return a.id});e.enter().insert("g",":first-child").on("mouseout",function(){p._unhover.notify(new epiviz.ui.charts.VisEventArgs(p.id()))}).on("mouseover",function(a){p._hover.notify(new epiviz.ui.charts.VisEventArgs(p.id(),a))}).on("click",function(a){p._deselect.notify(new epiviz.ui.charts.VisEventArgs(p.id()));
p._select.notify(new epiviz.ui.charts.VisEventArgs(p.id(),a));d3.event.stopPropagation()}).attr("transform","translate("+n+", 0) scale(1, 1)").each(function(a){p._drawGene(this,a,m)});n&&e.each(function(a){p._translateGene(this,a,n)});e.exit().transition().duration(500).style("opacity",0).remove();return b};
epiviz.plugins.charts.GenesTrack.prototype._translateGene=function(a,b,c){a=d3.select(a);b=a.attr("transform");var d=RegExp("translate\\([\\d\\.\\-]+[\\,\\s]+[\\d\\.\\-]+\\)","g"),e=RegExp("[\\d\\.\\-]+","g"),f=b.match(d)[0],e=parseFloat(f.match(e)[0]);b=b.replace(d,"translate("+(e-c)+", 0)");a.transition().duration(500).attr("transform",b)};
epiviz.plugins.charts.GenesTrack.prototype._drawGene=function(a,b,c){var d=epiviz.ui.charts.Axis,e=this,f=b.valueItems[0][0].rowItem,g=c(b.start),h=c(b.end),l="+"==f.strand()?1:-1,m=-l*(this.height()-this.margins().sumAxis(d.Y))*.25,n=f.metadata("exon_starts").split(",").map(function(a){return parseInt(a)}),p=f.metadata("exon_ends").split(",").map(function(a){return parseInt(a)}),t=d3.range(0,n.length),q=.08*this.height(),r=.16*this.height(),u=q*Math.sqrt(3)*.5;a=d3.select(a);a.attr("class",b.cssClasses);
a.append("polygon").attr("class","gene-body").style("fill",this.colors().get(0)).attr("points",function(){var a,b;a=.5*(e.height()-e.margins().sumAxis(d.Y)-q)+m;b=[a,a,a+.5*q,a+q,a+q];a="+"==f.strand()?[g,h,h+u,h,g]:[h,g,g-u,g,h];return sprintf("%s,%s %s,%s %s,%s %s,%s %s,%s",a[0],b[0],a[1],b[1],a[2],b[2],a[3],b[3],a[4],b[4])});a.append("g").attr("class","exons").style("fill",this.colors().get(1)).selectAll("rect").data(t).enter().append("rect").attr("x",function(a){return c(n[a])}).attr("y",.5*(e.height()-
r-e.margins().sumAxis(d.Y))+m).attr("width",function(a){return c(p[a])-c(n[a])}).attr("height",r);a.append("text").attr("class","gene-name").attr("x",g+2).attr("y",.5*(e.height()-e.margins().sumAxis(d.Y))+m-l*(q+2)).style("dominant-baseline","central").text(b.id)};epiviz.plugins.charts.GenesTrack.prototype.colorLabels=function(){return["Genes","Exons"]};
epiviz.plugins.charts.GenesTrack.prototype._drawAxes=function(a,b,c,d,e,f,g,h){epiviz.ui.charts.Track.prototype._drawAxes.call(this,a,b,c,d,e,f,g,h);a=epiviz.ui.charts.Axis;this._svg.select(".axes").append("g").attr("class","xAxis").append("line").attr("x1",this.margins().left()).attr("x2",this.width()-this.margins().left()).attr("y1",this.margins().top()+.5*(this.height()-this.margins().sumAxis(a.Y))).attr("y2",this.margins().top()+.5*(this.height()-this.margins().sumAxis(a.Y))).style("stroke","#555555").style("shape-rendering",
"crispEdges")};epiviz.plugins.charts.GenesTrackType=function(a){epiviz.ui.charts.TrackType.call(this,a)};epiviz.plugins.charts.GenesTrackType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.TrackType.prototype);epiviz.plugins.charts.GenesTrackType.constructor=epiviz.plugins.charts.GenesTrackType;epiviz.plugins.charts.GenesTrackType.prototype.createNew=function(a,b,c){return new epiviz.plugins.charts.GenesTrack(a,b,c)};epiviz.plugins.charts.GenesTrackType.prototype.typeName=function(){return"epiviz.plugins.charts.GenesTrack"};
epiviz.plugins.charts.GenesTrackType.prototype.chartName=function(){return"Genes Track"};epiviz.plugins.charts.GenesTrackType.prototype.chartHtmlAttributeName=function(){return"genes"};epiviz.plugins.charts.GenesTrackType.prototype.isRestrictedToRangeMeasurements=function(){return!0};epiviz.plugins.charts.GenesTrackType.prototype.measurementsFilter=function(){return function(a){return a.type()==epiviz.measurements.Measurement.Type.RANGE}};epiviz.ui.charts.transform={};epiviz.ui.charts.transform.clustering={};epiviz.ui.charts.transform.clustering.ClusterSubtree=function(a,b){this._children=a;this._weight=null;this._distance=b;this._sorted=!1};epiviz.ui.charts.transform.clustering.ClusterSubtree.prototype.weight=function(){if(void 0==this._weight){for(var a=0,b=0;b<this._children.length;++b)a+=this._children[b].weight();this._weight=a}return this._weight};epiviz.ui.charts.transform.clustering.ClusterSubtree.prototype.children=function(){return this._children};
epiviz.ui.charts.transform.clustering.ClusterSubtree.prototype.data=function(){for(var a=[],b=0;b<this._children.length;++b)a=a.concat(this._children[b].data());return a};epiviz.ui.charts.transform.clustering.ClusterSubtree.prototype.sort=function(a){if(!this.sorted()&&(this._children.sort(function(a,b){return a.weight()-b.weight()}),a)){for(var b=0;b<this._children.length;++b)this._children[b].sort(a);this._sorted=!0}};
epiviz.ui.charts.transform.clustering.ClusterSubtree.prototype.copy=function(){for(var a=[],b=0;b<this._children.length;++b)a.push(this._children[b].copy());return new epiviz.ui.charts.transform.clustering.ClusterSubtree(a)};epiviz.ui.charts.transform.clustering.ClusterSubtree.prototype.distance=function(){return this._distance};epiviz.ui.charts.transform.clustering.ClusterSubtree.prototype.sorted=function(){return this._sorted};epiviz.ui.charts.transform.clustering.ClusterLeaf=function(a){this._dataIndex=a};epiviz.ui.charts.transform.clustering.ClusterLeaf.prototype.weight=function(){return 1};epiviz.ui.charts.transform.clustering.ClusterLeaf.prototype.children=function(){return[]};epiviz.ui.charts.transform.clustering.ClusterLeaf.prototype.data=function(){return[this._dataIndex]};epiviz.ui.charts.transform.clustering.ClusterLeaf.prototype.sort=function(){};
epiviz.ui.charts.transform.clustering.ClusterLeaf.prototype.copy=function(){return new epiviz.ui.charts.transform.clustering.ClusterLeaf(this._dataIndex)};epiviz.ui.charts.transform.clustering.ClusterLeaf.prototype.distance=function(){return 0};epiviz.ui.charts.transform.clustering.ClusterLeaf.prototype.sorted=function(){return!0};epiviz.ui.charts.transform.clustering.ClusterTree=function(a,b){this._root=a;this._data=b};epiviz.ui.charts.transform.clustering.ClusterTree.prototype.root=function(){return this._root};epiviz.ui.charts.transform.clustering.ClusterTree.prototype.orderedData=function(){this._root.sorted()||this._root.sort(!0);for(var a=this._root.data(),b=[],c=0;c<a.length;++c)b.push(this._data[a[c]]);return b};epiviz.ui.charts.transform.clustering.NoneClustering=function(){};epiviz.ui.charts.transform.clustering.NoneClustering.prototype.cluster=function(a,b,c){b=[];for(c=0;c<a.length;++c)b.push(new epiviz.ui.charts.transform.clustering.ClusterLeaf(c));b=new epiviz.ui.charts.transform.clustering.ClusterSubtree(b,0);return new epiviz.ui.charts.transform.clustering.ClusterTree(b,a)};epiviz.ui.charts.transform.clustering.NoneClustering.prototype.id=function(){return"none"};epiviz.ui.charts.transform.clustering.AgglomerativeClustering=function(){};
epiviz.ui.charts.transform.clustering.AgglomerativeClustering.prototype.cluster=function(a,b,c){var d,e,f=Array(a.length);for(d=0;d<a.length;++d)for(f[d]=Array(a.length),e=d+1;e<a.length;++e)f[d][e]=b.distance(a[d],a[e]);b=[];for(d=0;d<a.length;++d)b.push(new epiviz.ui.charts.transform.clustering.ClusterLeaf(d));for(;1<b.length;){e=epiviz.utils.indexOfMin(f,!0);d=e.index;e=new epiviz.ui.charts.transform.clustering.ClusterSubtree([b[d[0]],b[d[1]]],e.min);if(d[0]<d[1]){var g=d[0];d[0]=d[1];d[1]=g}b.splice(d[0],
1);b.splice(d[1],1);b.push(e);f=c.link(f,d)}return new epiviz.ui.charts.transform.clustering.ClusterTree(b[0],a)};epiviz.ui.charts.transform.clustering.AgglomerativeClustering.prototype.id=function(){return"agglomerative"};epiviz.ui.charts.transform.clustering.HierarchicalClusteringAlgorithm=function(){};epiviz.ui.charts.transform.clustering.HierarchicalClusteringAlgorithm.prototype.cluster=function(a,b,c){};epiviz.ui.charts.transform.clustering.HierarchicalClusteringAlgorithm.prototype.id=function(){};epiviz.ui.charts.transform.clustering.EuclideanMetric=function(){};epiviz.ui.charts.transform.clustering.EuclideanMetric.prototype.distance=function(a,b){if(void 0==a||void 0==b)return null;var c=a.length,d=0,e=0,f=0,g;for(g=0;g<c;++g)if(void 0!=a[g]&&void 0!=b[g]){++d;var h=a[g]-b[g],e=e+h,f=f+h*h}0<d&&(e/=d);return f+(c-d)*e*e};epiviz.ui.charts.transform.clustering.EuclideanMetric.prototype.id=function(){return"euclidean"};epiviz.ui.charts.transform.clustering.CompleteLinkage=function(){};epiviz.ui.charts.transform.clustering.CompleteLinkage.prototype.link=function(a,b){var c=Array(a.length-1);if(b[0]<b[1]){var d=b[0];b[0]=b[1];b[1]=d}for(var e=d=0;d<a.length;++d,++e)if(d==b[0]||d==b[1])--e;else{c[e]=a[d].slice(0);c[e].splice(b[0],1);c[e].splice(b[1],1);var f=[d<b[0]?a[d][b[0]]:a[b[0]][d],d<b[1]?a[d][b[1]]:a[b[1]][d]];c[e].push(Math.max(f[0],f[1]))}c[c.length-1]=Array(c.length);return c};
epiviz.ui.charts.transform.clustering.CompleteLinkage.prototype.id=function(){return"complete"};epiviz.ui.charts.transform.clustering.ClusteringLinkage=function(){};epiviz.ui.charts.transform.clustering.ClusteringLinkage.prototype.link=function(a,b){};epiviz.ui.charts.transform.clustering.ClusteringLinkage.prototype.id=function(){};epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory=function(a){this._config=a;this._algorithms={};this._metrics={};this._linkages={};var b;for(b=0;b<a.clustering.algorithms.length;++b){var c=epiviz.utils.evaluateFullyQualifiedTypeName(a.clustering.algorithms[b]),c=epiviz.utils.applyConstructor(c);this._algorithms[c.id()]=c}for(b=0;b<a.clustering.metrics.length;++b)c=epiviz.utils.evaluateFullyQualifiedTypeName(a.clustering.metrics[b]),c=epiviz.utils.applyConstructor(c),this._metrics[c.id()]=
c;for(b=0;b<a.clustering.linkages.length;++b)c=epiviz.utils.evaluateFullyQualifiedTypeName(a.clustering.linkages[b]),c=epiviz.utils.applyConstructor(c),this._linkages[c.id()]=c};epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory._instance=null;epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory.instance=function(){return epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory._instance};
epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory.initialize=function(a){epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory._instance=new epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory(a)};epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory.prototype.algorithm=function(a){return this._algorithms[a]};epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory.prototype.metric=function(a){return this._metrics[a]};
epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory.prototype.linkage=function(a){return this._linkages[a]};epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory.prototype.algorithms=function(){return Object.keys(this._algorithms)};epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory.prototype.metrics=function(){return Object.keys(this._metrics)};epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory.prototype.linkages=function(){return Object.keys(this._linkages)};epiviz.plugins.charts.HeatmapPlot=function(a,b,c){epiviz.ui.charts.Plot.call(this,a,b,c);this._chartContent=null;this._min=this.measurements().first().minValue();this._max=this.measurements().first().maxValue();this._colorScale=epiviz.utils.colorizeBinary(this._min,this._max,"#ffffff",this.colors().getByKey("Max"));this._colorLabels=[];this._dendrogramRatio=.1;this._addFeaturePlot=new epiviz.events.Event;this._featureType="heatmapPlot";this._initialize()};
epiviz.plugins.charts.HeatmapPlot.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Plot.prototype);epiviz.plugins.charts.HeatmapPlot.constructor=epiviz.plugins.charts.HeatmapPlot;epiviz.plugins.charts.HeatmapPlot.prototype._initialize=function(){epiviz.ui.charts.Plot.prototype._initialize.call(this);this._svg.classed("heatmap-plot",!0);this._chartContent=this._svg.append("g").attr("class","chart-content")};
epiviz.plugins.charts.HeatmapPlot.prototype.draw=function(a,b){epiviz.ui.charts.Plot.prototype.draw.call(this,a,b);b=this._lastData;a=this._lastRange;if(!b||!a)return[];this.customSettingsValues();var c=this;if(this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.LOG_TRANSFORM])this._applyLogTransformation(b,function(b){b=c._applyClustering(a,b);return c._drawCells(a,b.data,b.columnOrder)});else{var d=c._applyClustering(a,b);return c._drawCells(a,d.data,d.columnOrder)}};
epiviz.plugins.charts.HeatmapPlot.prototype._applyClustering=function(a,b){var c=epiviz.measurements.Measurement.Type.isOrdered(this.measurements().first().type()),d=this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.CLUSTER],e=this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.SHOW_DENDROGRAM],f=epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory.instance(),g=f.algorithm(this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.CLUSTERING_ALG]),
h=f.metric(this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.CLUSTERING_METRIC]),l=f.linkage(this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.CLUSTERING_LINKAGE]),m=this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.MAX_COLUMNS],n=b.firstSeries().globalStartIndex(),p=b.firstSeries().size()+n;b.foreach(function(a,b){var c=b.globalStartIndex(),d=b.globalEndIndex();c>n&&(n=c);d<p&&(p=d)});var t=p-n,f=d==epiviz.plugins.charts.HeatmapPlotType.Cluster.ROWS||
d==epiviz.plugins.charts.HeatmapPlotType.Cluster.BOTH,q=d==epiviz.plugins.charts.HeatmapPlotType.Cluster.COLS||d==epiviz.plugins.charts.HeatmapPlotType.Cluster.BOTH,d=e*this._dendrogramRatio,m=e&&q&&m>=t,r,u,v,x,y,A,C=this._svg;["dendrogram-horizontal","dendrogram-vertical"].forEach(function(a){C.select("."+a).remove()});var D=b;if(f){r=[];b.foreach(function(b,d){for(var e=[],f=0;f<t;++f){var g=d.getByGlobalIndex(f+n),h=g.rowItem;(!c||void 0==a.start()||void 0==a.end()||h.start()<a.end()&&h.end()>=
a.start())&&e.push(g.value)}r.push(e)});e=g.cluster(r,h,l);u=e.root().data();var B=[];b.foreach(function(a){B.push(a)});v=[];for(x=0;x<u.length;++x)v[x]=B[u[x]];u=new epiviz.measurements.MeasurementHashtable;for(x=0;x<v.length;++x)u.put(v[x],b.getSeries(v[x]));D=new epiviz.datatypes.MapGenomicData(u);d&&(A=this.width()*d,y=this.height()*(1-d*m)-this.margins().sumAxis(epiviz.ui.charts.Axis.Y),v=this.margins().top(),x=this.width()-A-this.margins().right(),this._drawDendrogram(e,v,x,y,A))}u=null;if(q){r=
[];b.foreach(function(b,d){for(var e=0,f=0;e<t;++e){var g=d.getByGlobalIndex(e+n),h=g.rowItem;if(!c||void 0==a.start()||void 0==a.end()||h.start()<a.end()&&h.end()>=a.start())r.length<=f&&r.push([]),r[f].push(g.value),++f}});if(0==r.length)return{data:D,columnOrder:[]};e=g.cluster(r,h,l);u=e.root().data();m&&(g=this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.SHOW_COLORS_FOR_ROW_LABELS]?20:0,x=this.margins().left(),v=this.height()*(1-d)-this.margins().bottom(),A=this.height()*
d,y=this.width()*(1-d*f)-this.margins().left()-this.margins().right()-g,this._drawDendrogram(e,v,x,y,A,!0))}return{data:D,columnOrder:u}};
epiviz.plugins.charts.HeatmapPlot.prototype._drawCells=function(a,b,c){var d=this,e=epiviz.ui.charts.Axis,f=this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.MAX_COLUMNS],g=b.firstSeries().globalStartIndex(),h=b.firstSeries().size()+g,l=[],m=epiviz.measurements.Measurement.Type.isOrdered(this.measurements().first().type());b.foreach(function(a,b){var c=b.globalStartIndex(),d=b.globalEndIndex();c>g&&(g=c);d<h&&(h=d);l.push(a)});for(var n=h-g,p=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.COL_LABEL],
t=this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.CLUSTER],q=t==epiviz.plugins.charts.HeatmapPlotType.Cluster.ROWS||t==epiviz.plugins.charts.HeatmapPlotType.Cluster.BOTH,t=(t==epiviz.plugins.charts.HeatmapPlotType.Cluster.COLS||t==epiviz.plugins.charts.HeatmapPlotType.Cluster.BOTH)&&f>=n,r=this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.SHOW_DENDROGRAM]*this._dendrogramRatio,u=this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.SHOW_COLORS_FOR_ROW_LABELS]?
20:0,q=this.width()*(1-r*q)-u,r=this.height()*(1-r*t),v=[],x=[],t=[],y,u=0;u<n;++u){y=u+g;var A;b.foreach(function(a,b){return A=b.getRowByGlobalIndex(y)});if(A&&(!m||void 0==a.start()||void 0==a.end()||A.start()<a.end()&&A.end()>=a.start())){v.push(y);var C=A.metadata(p)||""+A.id();x.push(C);t.push(A.metadata("id"))}}if(c)for(a=v,m=x,v=Array(v.length),x=Array(x.length),u=0;u<v.length;++u)v[u]=a[c[u]],x[u]=m[c[u]];var D=[],B={};b.foreach(function(a,b,c){for(var d,e=0,g=f,h=0;h<x.length;++h)if(y=v[h],
d=b.getByGlobalIndex(y)){var l;0==e?(e=sprintf("item data-series-%s",c),l=new epiviz.ui.charts.ChartObject(sprintf("heatmap_%s_%s",c,y),d.rowItem.start(),d.rowItem.end(),[d.value],c,[[d]],[a],e),D.push(l),e=d=Math.ceil((x.length-h)/g),--g):(l=D[D.length-1],l.id+="_"+y,epiviz.measurements.Measurement.Type.isOrdered(b.measurement().type())&&(l.start=Math.min(l.start,d.rowItem.start()),l.end=Math.max(l.end,d.rowItem.end())),l.values[0]=(l.values[0]*l.valueItems[0].length+d.value)/(l.valueItems[0].length+
1),l.valueItems[0].push(d));0==c&&(B[y]=D.length-1);--e}});var H;this._min=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.Y_MIN];this._max=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.Y_MAX];c=epiviz.ui.charts.CustomSetting;var z=1E5,w=-1E5;b.foreach(function(a,b){var c=b._container.values(a)._values,d=Math.min.apply(null,c),c=Math.max.apply(null,c);d<z&&(z=d);c>w&&(w=c)});this._min==c.DEFAULT&&(this._min=z);this._max==c.DEFAULT&&(this._max=
w);if(this._globalIndexColorLabels){c={};for(a=g;a<h;++a)c[this._globalIndexColorLabels[a]]=this._globalIndexColorLabels[a];this._colorLabels=Object.keys(c);H={};this._colorLabels.forEach(function(a,b){var c=d.colors().getByKey(a);H[a]=epiviz.utils.colorizeBinary(d._min,d._max,"#ffffff",c)})}else this._colorLabels=[sprintf("Max",b.firstSeries().measurement().maxValue())],this._colorScale=epiviz.utils.colorizeBinary(this._min,this._max,"#ffffff",this.colors().getByKey("Max"));var E=(c=Math.min(x.length,
f))?(q-this.margins().sumAxis(e.X))/c:0,I=(r-this.margins().sumAxis(e.Y))/b.measurements().length;b=this._chartContent.select(".items");b.empty()&&(b=this._chartContent.append("g").attr("class","items"),e=b.append("g").attr("class","selected"),b.append("g").attr("class","hovered"),e.append("g").attr("class","hovered"));b.attr("transform","translate("+this.margins().left()+", "+this.margins().top()+")");e=b.selectAll("rect").data(D,function(a){return a.id});e.enter().append("rect").attr("id",function(a){return sprintf("%s-item-%s-%s",
d.id(),a.seriesIndex,a.valueItems[0][0].globalIndex)}).attr("class",function(a){return a.cssClasses}).style("opacity",0).style("fill-opacity",0).attr("x",function(a){return E*B[a.valueItems[0][0].globalIndex]}).attr("y",function(a){return I*a.seriesIndex}).attr("width",E).attr("height",I).style("fill",function(a,b){return d._globalIndexColorLabels?H[d._globalIndexColorLabels[a.valueItems[0][0].globalIndex]](a.values[0]):d._colorScale(a.values[0])});e.transition().duration(1E3).style("fill-opacity",
null).style("opacity",null).attr("x",function(a){return E*B[a.valueItems[0][0].globalIndex]}).attr("y",function(a){return I*a.seriesIndex}).attr("width",E).attr("height",I).style("fill",function(a){return d._globalIndexColorLabels?H[d._globalIndexColorLabels[a.valueItems[0][0].globalIndex]](a.values[0]):d._colorScale(a.values[0])});e.exit().transition().duration(1E3).style("opacity",0).remove();e.on("mouseover",function(a){d._hover.notify(new epiviz.ui.charts.VisEventArgs(d.id(),a))}).on("mouseout",
function(){d._unhover.notify(new epiviz.ui.charts.VisEventArgs(d.id()))}).on("click",function(a){d._deselect.notify(new epiviz.ui.charts.VisEventArgs(d.id()));d._select.notify(new epiviz.ui.charts.VisEventArgs(d.id(),a));d3.event.stopPropagation()});this._drawLabels(b,x,t,v,c,l,E,I,g,q);return D};
epiviz.plugins.charts.HeatmapPlot.prototype._drawDendrogram=function(a,b,c,d,e,f){var g=f?"dendrogram-horizontal":"dendrogram-vertical",h=this._svg.append("g").attr("class",g);f?h.attr("transform","translate("+c+","+b+")scale(-1, 1)rotate(90, 0, 0)"):h.attr("transform","translate("+c+","+b+")");this._drawSubDendrogram(this._svg.select("."+g),a.root(),0,0,e,d,!1)};
epiviz.plugins.charts.HeatmapPlot.prototype._drawSubDendrogram=function(a,b,c,d,e,f,g){var h=b.children();if(0==h.length)return c+.5*f;for(var l=d3.scale.linear().domain([0,b.distance()]).range([0,e]),m=0,n,p,t=0;t<h.length;++t){var q=c+m,r=f/b.weight()*h[t].weight(),u=l(h[t].distance()),q=this._drawSubDendrogram(a,h[t],q,d,u,r,g);a.append("line").attr("x1",d+u).attr("x2",d+e).attr("y1",q).attr("y2",q).style("stroke","#555555").style("stroke-width",1).style("shape-rendering","auto");0==t&&g&&a.append("text").attr("class",
"row-text").attr("x",Math.max(d+10,d+.5*(u+e))).attr("y",q-10).style("text-anchor","middle").text(Globalize.format(b.distance(),"n2"));if(void 0==n||n>q)n=q;if(void 0==p||p<q)p=q;m+=f/b.weight()*h[t].weight()}a.append("line").attr("x1",d+e).attr("x2",d+e).attr("y1",n).attr("y2",p).style("stroke","#555555").style("stroke-width",1).style("shape-rendering","auto");return.5*(n+p)};
epiviz.plugins.charts.HeatmapPlot.prototype._drawLabels=function(a,b,c,d,e,f,g,h,l,m){var n=this,p=function(a){a="name"==r?a.name():(a=a.annotation())&&r in a?a[r]:"<NA>";return v[a]=a},t=a.selectAll(".col-text"),q=0;b.length>e?t.transition().duration(500).style("opacity",0).remove():(t=t.data(b,function(a,b){return a+d[b]}),t.enter().append("text").attr("class","col-text").style("opacity","0").attr("x",0).attr("y",0).attr("transform",function(a,b){return"translate("+(b*g+.5*g)+",-5)rotate(-60)"}).text(function(a){return a}).style("text-decoration",
"underline").on("mouseover",function(a){d3.select(this).style("cursor","pointer")}).on("mouseout",function(a){d3.select(this).style("cursor","default")}).on("click",function(a,d){n._addFeaturePlot.notify({featureName:b[d],featureId:c[d],measurements:n.measurements(),rowLabel:n.customSettingsValues().rowLabel})}),t.transition().duration(500).attr("x",0).attr("y",0).attr("transform",function(a,b){return"translate("+(b*g+.5*g)+",-5)rotate(-60)"}).style("opacity",null).attr("fill",function(a,b){var c=
b+l;return n._globalIndexColorLabels?n.colors().getByKey(n._globalIndexColorLabels[c]):"#000000"}),t.exit().transition().duration(500).style("opacity",0).remove(),$("#"+this.id()+" .col-text").each(function(a){a=this.getBBox().width;q<a&&(q=a)}));var r=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.ROW_LABEL];e=this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.SHOW_COLORS_FOR_ROW_LABELS];e||(a.selectAll(".row-color-label").remove(),t=a.selectAll(".row-text").data(f,
function(a){return a.id()}),t.enter().append("text").attr("class","row-text").attr("x",0).attr("y",0).attr("transform",function(a,b){return"translate(-5,"+(b*h+.5*h)+")rotate(30)"}),t.text(function(a){return"name"==r?a.name():(a=a.annotation())&&r in a?a[r]:"<NA>"}),t.transition().duration(500).attr("x",0).attr("y",0).attr("transform",function(a,b){return"translate(-5,"+(b*h+.5*h)+")rotate(30)"}),t.exit().remove());var u;if(e){a.selectAll(".row-text").remove();var v={};f.forEach(function(a){a=p(a);
v[a]=a});u=Object.keys(v);a=a.selectAll(".row-color-label").data(f,function(a){return a.id()});a.enter().append("rect").attr("class","row-color-label").attr("x",m-n.margins().sumAxis(epiviz.ui.charts.Axis.X)).attr("y",.5*-h).attr("width",20).attr("height",h).attr("transform",function(a,b){return"translate(0,"+(b*h+.5*h)+")"});a.style("fill",function(a){a=p(a);return n.colors().getByKey(a)});a.transition().duration(500).attr("x",m-n.margins().sumAxis(epiviz.ui.charts.Axis.X)).attr("y",.5*-h).attr("height",
h).attr("transform",function(a,b){return"translate(0,"+(b*h+.5*h)+")"});a.exit().remove()}this._svg.selectAll(".chart-title").remove();this._svg.selectAll(".chart-title-color ").remove();m=this._svg.selectAll(".chart-title").data(["Min"].concat(this._colorLabels));m.enter().append("text").attr("class","chart-title").attr("font-weight","bold").attr("y",n.margins().top()-5-q);m.attr("fill",function(a,b){return 0==b?"#000000":n.colors().getByKey(a)}).text(function(a){return a});var x=0,y=[];$("#"+this.id()+
" .chart-title").each(function(a){y.push(x);x+=this.getBBox().width+15});m.attr("x",function(a,b){return n.margins().left()+10+y[b]});this._svg.selectAll(".chart-title-color").data(["Min"].concat(this._colorLabels)).enter().append("circle").attr("class","chart-title-color").attr("cx",function(a,b){return n.margins().left()+4+y[b]}).attr("cy",n.margins().top()-9-q).attr("r",4).style("shape-rendering","auto").style("stroke-width","0").attr("fill",function(a,b){return 0==b?"#ffffff":n.colors().getByKey(a)}).style("stroke-width",
function(a,b){return b?0:1}).style("stroke","#000000");this._svg.selectAll(".row-legend").remove();this._svg.selectAll(".row-legend-color").remove();e&&(m=this._svg.selectAll(".row-legend").data(u),m.enter().append("text").attr("class","row-legend").attr("font-weight","bold").attr("x",-20),m.attr("fill",function(a){return n.colors().getByKey(a)}).text(function(a){return a}).attr("transform",function(a,b){return"translate("+n.margins().left()+","+n.margins().top()+")"}),m.attr("y",function(a,b){return 10+
15*b}),this._svg.selectAll(".row-legend-color").data(u).enter().append("rect").attr("class","chart-title-color").attr("x",-18).attr("y",function(a,b){return 2+15*b}).attr("width",10).attr("height",10).style("shape-rendering","auto").style("stroke-width","0").attr("fill",function(a){return n.colors().getByKey(a)}).style("stroke-width",0).attr("transform",function(a,b){return"translate("+n.margins().left()+","+n.margins().top()+")"}),this._colorLabels=this._colorLabels.concat(u))};
epiviz.plugins.charts.HeatmapPlot.prototype.colorLabels=function(){return this._colorLabels};
epiviz.plugins.charts.HeatmapPlot.prototype._applyLogTransformation=function(a,b){var c=new epiviz.datatypes.PartialSummarizedExperiment,d=0;a.foreach(function(a,b,e){0==d&&(e=b._container.rowData(a),c._rowData=e,d++);b=b._container.values(a);var f=[];void 0!=b._values?b._values.forEach(function(a,b){f[b]=Math.log2(a+1)}):f=void 0;a=new epiviz.datatypes.FeatureValueArray(a,b._boundaries,b._globalStartIndex,f);c.addValues(a)});var e=new epiviz.measurements.MeasurementHashtable;a.foreach(function(a){a._maxValue=
Math.log2(a._maxValue+1);a._minValue=Math.log2(a._minValue+1);var b=new epiviz.datatypes.MeasurementGenomicDataWrapper(a,c);e.put(a,b)});var f=new epiviz.datatypes.MapGenomicData(e);b(f)};epiviz.plugins.charts.HeatmapPlotType=function(a){epiviz.ui.charts.PlotType.call(this,a)};epiviz.plugins.charts.HeatmapPlotType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.PlotType.prototype);epiviz.plugins.charts.HeatmapPlotType.constructor=epiviz.plugins.charts.HeatmapPlotType;epiviz.plugins.charts.HeatmapPlotType.prototype.createNew=function(a,b,c){return new epiviz.plugins.charts.HeatmapPlot(a,b,c)};epiviz.plugins.charts.HeatmapPlotType.prototype.typeName=function(){return"epiviz.plugins.charts.HeatmapPlot"};
epiviz.plugins.charts.HeatmapPlotType.prototype.chartName=function(){return"Heatmap"};epiviz.plugins.charts.HeatmapPlotType.prototype.chartHtmlAttributeName=function(){return"heatmap"};epiviz.plugins.charts.HeatmapPlotType.prototype.measurementsFilter=function(){return function(a){return epiviz.measurements.Measurement.Type.hasValues(a.type())}};epiviz.plugins.charts.HeatmapPlotType.prototype.isRestrictedToSameDatasourceGroup=function(){return!0};
epiviz.plugins.charts.HeatmapPlotType.prototype.customSettingsDefs=function(){var a=epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory.instance();return epiviz.ui.charts.PlotType.prototype.customSettingsDefs.call(this).concat([new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.COL_LABEL,epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_METADATA,"colLabel","Columns labels"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.ROW_LABEL,
epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_ANNOTATION,"name","Row labels"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.HeatmapPlotType.CustomSettings.SHOW_COLORS_FOR_ROW_LABELS,epiviz.ui.charts.CustomSetting.Type.BOOLEAN,!1,"Row labels as colors"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.HeatmapPlotType.CustomSettings.MAX_COLUMNS,epiviz.ui.charts.CustomSetting.Type.NUMBER,40,"Max columns"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.Y_MIN,
epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Min Value"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.Y_MAX,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Max Value"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.HeatmapPlotType.CustomSettings.CLUSTER,epiviz.ui.charts.CustomSetting.Type.CATEGORICAL,"rows","Cluster",Object.keys(epiviz.plugins.charts.HeatmapPlotType.Cluster).map(function(a){return epiviz.plugins.charts.HeatmapPlotType.Cluster[a]})),
new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.HeatmapPlotType.CustomSettings.CLUSTERING_ALG,epiviz.ui.charts.CustomSetting.Type.CATEGORICAL,a.algorithms()[0],"Clustering Algorithm",a.algorithms()),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.HeatmapPlotType.CustomSettings.CLUSTERING_METRIC,epiviz.ui.charts.CustomSetting.Type.CATEGORICAL,a.metrics()[0],"Clustering Metric",a.metrics()),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.HeatmapPlotType.CustomSettings.CLUSTERING_LINKAGE,
epiviz.ui.charts.CustomSetting.Type.CATEGORICAL,a.linkages()[0],"Clustering Linkage",a.linkages()),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.HeatmapPlotType.CustomSettings.SHOW_DENDROGRAM,epiviz.ui.charts.CustomSetting.Type.BOOLEAN,!0,"Show Dendrogram"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.HeatmapPlotType.CustomSettings.LOG_TRANSFORM,epiviz.ui.charts.CustomSetting.Type.BOOLEAN,!0,"Log Transform count data")])};
epiviz.plugins.charts.HeatmapPlotType.Cluster={NONE:"none",ROWS:"rows",COLS:"columns",BOTH:"both"};epiviz.plugins.charts.HeatmapPlotType.CustomSettings={MAX_COLUMNS:"maxColumns",CLUSTER:"cluster",CLUSTERING_ALG:"clusteringAlg",CLUSTERING_METRIC:"clusteringMetric",CLUSTERING_LINKAGE:"clusteringLinkage",SHOW_DENDROGRAM:"showDendrogram",SHOW_COLORS_FOR_ROW_LABELS:"showColorsForRowLabels",LOG_TRANSFORM:"logTransform"};epiviz.plugins.charts.LinePlot=function(a,b,c){epiviz.ui.charts.Plot.call(this,a,b,c);this._initialize()};epiviz.plugins.charts.LinePlot.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Plot.prototype);epiviz.plugins.charts.LinePlot.constructor=epiviz.plugins.charts.LinePlot;epiviz.plugins.charts.LinePlot.prototype._initialize=function(){epiviz.ui.charts.Plot.prototype._initialize.call(this);this._svg.classed("line-plot",!0)};
epiviz.plugins.charts.LinePlot.prototype.draw=function(a,b,c,d){epiviz.ui.charts.Plot.prototype.draw.call(this,a,b,c,d);b=this._lastData;a=this._lastRange;if(!b||!a)return[];c=epiviz.ui.charts.CustomSetting;var e=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.Y_MIN],f=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.Y_MAX],g=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.ROW_LABEL];e==c.DEFAULT&&(e=null,b.measurements().forEach(function(a){null!==
a&&(null===e||a.minValue()<e)&&(e=a.minValue())}));f==c.DEFAULT&&(f=null,b.measurements().forEach(function(a){null!==a&&(null===f||a.maxValue()>f)&&(f=a.maxValue())}));null===e&&null===f&&(e=-1,f=1);null===e&&(e=f-1);null===f&&(f=e+1);d=epiviz.ui.charts.Axis;c=d3.scale.linear().domain([0,b.measurements().length-1]).range([0,this.width()-this.margins().sumAxis(d.X)]);d=d3.scale.linear().domain([e,f]).range([this.height()-this.margins().sumAxis(d.Y),0]);this._clearAxes();this._drawAxes(c,d,b.measurements().length,
5,void 0,void 0,void 0,void 0,void 0,void 0,b.measurements().map(function(a){return"name"==g?a.name():(a=a.annotation())&&g in a?a[g]:"<NA>"}));var h=this._svg.selectAll(".lines");if(h.empty()){var h=this._svg.append("g").attr("class","lines items"),l=h.append("g").attr("class","selected");h.append("g").attr("class","hovered");l.append("g").attr("class","hovered")}h.attr("transform","translate("+this.margins().left()+", "+this.margins().top()+")");return this._drawLines(a,b,c,d)};
epiviz.plugins.charts.LinePlot.prototype._drawLines=function(a,b,c,d){var e=this.colors(),f=this.customSettingsValues()[epiviz.plugins.charts.LinePlotType.CustomSettings.SHOW_POINTS],g=this.customSettingsValues()[epiviz.plugins.charts.LinePlotType.CustomSettings.SHOW_LINES],h=this.customSettingsValues()[epiviz.plugins.charts.LinePlotType.CustomSettings.SHOW_ERROR_BARS],l=this.customSettingsValues()[epiviz.plugins.charts.LinePlotType.CustomSettings.POINT_RADIUS],m=this.customSettingsValues()[epiviz.plugins.charts.LinePlotType.CustomSettings.LINE_THICKNESS],
n=this.customSettingsValues()[epiviz.plugins.charts.LinePlotType.CustomSettings.INTERPOLATION],p=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.COL_LABEL],t=this.customSettingsValues()[epiviz.plugins.charts.LinePlotType.CustomSettings.ABS_LINE_VAL],q=this,r=this._svg.select(".lines"),u=b.firstSeries().globalStartIndex(),v=b.firstSeries().globalEndIndex();b.foreach(function(a,b){var c=b.globalStartIndex(),d=b.globalEndIndex();c>u&&(u=c);d<v&&(v=d)});for(var x=v-u,y=epiviz.measurements.Measurement.Type.isOrdered(b.measurements()[0].type()),
A,C,D=0;D<x;++D){var B=D+u,H=b.firstSeries().getRowByGlobalIndex(B);if(!y||void 0==a.start()||void 0==a.end()||H.start()<a.end()&&H.end()>=a.start())void 0==A&&(A=B),C=B+1}u=A;v=C;x=C-A;this.width();var z=d3.svg.line().x(function(a){return c(a.x)}).y(function(a){return d(a.y)}).interpolate(n),w=function(a){return q._globalIndexColorLabels?q._globalIndexColorLabels[a.globalIndex()]:a.metadata(p)},E=function(a){return b.measurements().map(function(c,d){var e=b.getByGlobalIndex(c,a);return{x:d,y:e?e.value:
null,errMinus:e&&e.valueAnnotation?e.valueAnnotation.errMinus:null,errPlus:e&&e.valueAnnotation?e.valueAnnotation.errPlus:null}}).filter(function(a){return null!==a.y})};a=epiviz.utils.range(x,u);var I;g?(I=a.map(function(a){var c=b.firstSeries().getRowByGlobalIndex(a);return new epiviz.ui.charts.ChartObject(sprintf("line-series-%s",a),c.start(),c.end(),E(a),a,b.measurements().map(function(c,d){return[b.getByGlobalIndex(c,a)]}),b.measurements(),"")}),g=r.selectAll(".line-series").data(I,function(a){return a.id}),
g.enter().insert("g",":first-child").attr("class","line-series item").style("opacity","0").on("mouseover",function(a){q._hover.notify(new epiviz.ui.charts.VisEventArgs(q.id(),a));q._svg.selectAll("g.lines.items").selectAll(".item").style("opacity",1-.8);q._svg.selectAll("g.lines.items").selectAll("g.hovered .item").style("opacity",.8)}).on("mouseout",function(){q._unhover.notify(new epiviz.ui.charts.VisEventArgs(q.id()));q._svg.selectAll("g.lines.items").selectAll(".item").style("opacity",.7)}).each(function(a){d3.select(this).append("path").attr("class",
"bg-line").attr("d",z(a.values)).style("shape-rendering","auto").style("stroke-width",10).style("stroke","#dddddd").style("stroke-opacity","0.1");d3.select(this).append("path").attr("class","main-line").attr("d",z(a.values)).style("shape-rendering","auto")}),g.transition().duration(500).style("opacity","0.7").each(function(a){var c=e.getByKey(w(b.firstSeries().getRowByGlobalIndex(a.seriesIndex)));d3.select(this).selectAll(".bg-line").attr("d",z(a.values));d3.select(this).selectAll(".main-line").attr("d",
z(a.values)).style("stroke",c).style("stroke-width",m)}),g.exit().transition().duration(500).style("opacity","0").remove()):r.selectAll(".line-series").remove();f?(f=r.selectAll(".points").data(I,function(a){return a.id}),f.enter().append("g").attr("class","points").style("opacity","0"),f.each(function(a){d3.select(this).selectAll(".data-point").remove();var f=d3.select(this).selectAll(".data-point").data(a.values);f.enter().append("g").attr("class","data-point").each(function(f){d3.select(this).append("circle").attr("cx",
function(a){return c(a.x)}).attr("cy",function(a){return d(a.y)}).attr("r",l).style("stroke-width",2).attr("fill","none").attr("stroke",e.getByKey(w(b.firstSeries().getRowByGlobalIndex(a.seriesIndex))));d3.select(this).selectAll(".error-bar").remove();h&&void 0!=f.errMinus&&void 0!=f.errPlus&&(d3.select(this).append("line").attr("x1",c(f.x)).attr("x2",c(f.x)).attr("y1",d(f.errMinus)).attr("y2",d(f.errPlus)).style("stroke",e.getByKey(w(b.firstSeries().getRowByGlobalIndex(a.seriesIndex)))).style("stroke-width",
2).attr("class","error-bar"),d3.select(this).append("line").attr("x1",c(f.x)-4).attr("x2",c(f.x)+4).attr("y1",d(f.errMinus)).attr("y2",d(f.errMinus)).style("stroke",e.getByKey(w(b.firstSeries().getRowByGlobalIndex(a.seriesIndex)))).style("stroke-width",2).attr("class","error-bar"),d3.select(this).append("line").attr("x1",c(f.x)-4).attr("x2",c(f.x)+4).attr("y1",d(f.errPlus)).attr("y2",d(f.errPlus)).style("stroke",e.getByKey(w(b.firstSeries().getRowByGlobalIndex(a.seriesIndex)))).style("stroke-width",
2).attr("class","error-bar"))});f.exit().remove()}).transition().duration(500).style("opacity","1"),f.exit().transition().duration(500).style("opacity","0").remove()):r.selectAll(".points").remove();var J={};a.forEach(function(a){a=w(b.firstSeries().getRowByGlobalIndex(a));J[a]=a});this._svg.selectAll(".chart-title").remove();this._svg.selectAll(".chart-title-color").remove();f=this._svg.selectAll(".chart-title").data(Object.keys(J));f.enter().append("text").attr("class","chart-title").attr("font-weight",
"bold").attr("y",q.margins().top()-5);f.attr("fill",function(a){return e.getByKey(a)}).text(function(a){return a});var L=0,K=[];$("#"+this.id()+" .chart-title").each(function(a){K.push(L);L+=this.getBBox().width+15});f.attr("x",function(a,b){return q.margins().left()+10+K[b]});this._svg.selectAll(".chart-title-color").data(Object.keys(J)).enter().append("circle").attr("class","chart-title-color").attr("cx",function(a,b){return q.margins().left()+4+K[b]}).attr("cy",q.margins().top()-9).attr("r",4).style("shape-rendering",
"auto").style("stroke-width","0").style("fill",function(a){return e.getByKey(a)});t!=epiviz.ui.charts.CustomSetting.DEFAULT&&(t=JSON.parse("["+t+"]"),r.selectAll(".abLine").remove(),t.forEach(function(a){r.append("svg:line").attr("class","abLine").attr("x1",0).attr("x2",q.width()-q.margins().sumAxis(epiviz.ui.charts.Axis.X)).attr("y1",d(a)).attr("y2",d(a)).style("stroke","black").style("stroke-dasharray","5, 5")}));return I};
epiviz.plugins.charts.LinePlot.prototype.colorLabels=function(){for(var a=[],b=0;b<this.colors().size()&&20>b;++b)a.push("Color "+(b+1));return a};
epiviz.plugins.charts.LinePlot.prototype.doHover=function(a){var b=this._container.find(".items"),c=b.find("> .hovered"),d=b.find("> .selected"),e=d.find("> .hovered"),f=function(){return a.overlapsWith(d3.select(this).data()[0])},b=b.find("> .item").filter(f);c.append(b);b=d.find("> .item").filter(f);e.append(b);this._svg.selectAll(".item").style("opacity",1-.7);this._svg.selectAll(".hovered .item").style("opacity",.7)};
epiviz.plugins.charts.LinePlot.prototype.doUnhover=function(){var a=this._container.find(".items"),b=a.find("> .hovered"),c=a.find("> .selected"),d=c.find("> .hovered");a.prepend(b.children());c.prepend(d.children());this._svg.selectAll(".item").style("opacity",1);this._svg.selectAll(".hovered .item").style("opacity",1)};epiviz.plugins.charts.LinePlotType=function(a){epiviz.ui.charts.PlotType.call(this,a)};epiviz.plugins.charts.LinePlotType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.PlotType.prototype);epiviz.plugins.charts.LinePlotType.constructor=epiviz.plugins.charts.LinePlotType;epiviz.plugins.charts.LinePlotType.prototype.createNew=function(a,b,c){return new epiviz.plugins.charts.LinePlot(a,b,c)};epiviz.plugins.charts.LinePlotType.prototype.typeName=function(){return"epiviz.plugins.charts.LinePlot"};
epiviz.plugins.charts.LinePlotType.prototype.chartName=function(){return"Line Plot"};epiviz.plugins.charts.LinePlotType.prototype.chartHtmlAttributeName=function(){return"line-plot"};epiviz.plugins.charts.LinePlotType.prototype.measurementsFilter=function(){return function(a){return a.type()==epiviz.measurements.Measurement.Type.FEATURE}};epiviz.plugins.charts.LinePlotType.prototype.isRestrictedToSameDatasourceGroup=function(){return!0};
epiviz.plugins.charts.LinePlotType.prototype.customSettingsDefs=function(){return epiviz.ui.charts.PlotType.prototype.customSettingsDefs.call(this).concat([new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.COL_LABEL,epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_METADATA,"colLabel","Columns labels"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.ROW_LABEL,epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_ANNOTATION,"name","Row labels"),
new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LinePlotType.CustomSettings.SHOW_POINTS,epiviz.ui.charts.CustomSetting.Type.BOOLEAN,!1,"Show points"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LinePlotType.CustomSettings.SHOW_LINES,epiviz.ui.charts.CustomSetting.Type.BOOLEAN,!0,"Show lines"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LinePlotType.CustomSettings.SHOW_ERROR_BARS,epiviz.ui.charts.CustomSetting.Type.BOOLEAN,!0,"Show error bars"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LinePlotType.CustomSettings.POINT_RADIUS,
epiviz.ui.charts.CustomSetting.Type.NUMBER,4,"Point radius"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LinePlotType.CustomSettings.LINE_THICKNESS,epiviz.ui.charts.CustomSetting.Type.NUMBER,3,"Line thickness"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.Y_MIN,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Min Y"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.Y_MAX,epiviz.ui.charts.CustomSetting.Type.NUMBER,
epiviz.ui.charts.CustomSetting.DEFAULT,"Max Y"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LinePlotType.CustomSettings.INTERPOLATION,epiviz.ui.charts.CustomSetting.Type.CATEGORICAL,"basis","Interpolation","linear step-before step-after basis basis-open basis-closed bundle cardinal cardinal-open monotone".split(" ")),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LinePlotType.CustomSettings.ABS_LINE_VAL,epiviz.ui.charts.CustomSetting.Type.STRING,epiviz.ui.charts.CustomSetting.DEFAULT,
"Draw abline")])};epiviz.plugins.charts.LinePlotType.CustomSettings={SHOW_POINTS:"showPoints",SHOW_ERROR_BARS:"showErrorBars",SHOW_LINES:"showLines",POINT_RADIUS:"pointRadius",LINE_THICKNESS:"lineThickness",INTERPOLATION:"interpolation",ABS_LINE_VAL:"abLine"};epiviz.plugins.charts.StackedLinePlot=function(a,b,c){epiviz.ui.charts.Plot.call(this,a,b,c);this._initialize()};epiviz.plugins.charts.StackedLinePlot.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Plot.prototype);epiviz.plugins.charts.StackedLinePlot.constructor=epiviz.plugins.charts.StackedLinePlot;epiviz.plugins.charts.StackedLinePlot.prototype._initialize=function(){epiviz.ui.charts.Plot.prototype._initialize.call(this);this._svg.classed("stacked-line-plot",!0)};
epiviz.plugins.charts.StackedLinePlot.prototype.draw=function(a,b,c,d){epiviz.ui.charts.Plot.prototype.draw.call(this,a,b,c,d);b=this._lastData;a=this._lastRange;if(!b||!a)return[];b=this.customSettingsValues()[epiviz.plugins.charts.StackedLinePlotType.CustomSettings.ROW_GROUP_BY];var e=this,f=function(){for(var a=0;a<e._markers.length;a++)if(e._markers[a]._type==epiviz.ui.charts.markers.VisualizationMarker.Type.GROUP_BY_MEASUREMENTS){var b=e._markers[a].id();delete e._markersMap[b];delete e._markersIndices[b];
delete e._markers[a];e._markers.length--}};a=function(a){if(!a)return null;var b;if(a.id()in e._markersMap){b=e._markersIndices[a.id()];var c=e._markers[b];if(c==a||c.type()==a.type()&&c.preMarkStr()==a.preMarkStr()&&c.markStr()==a.markStr())return null;e._markers[b]=a}else f(),b=e._markers.length,e._markers.push(a),e._markersIndices[a.id()]=b;e._markersMap[a.id()]=a};this.customSettingsValues()[epiviz.plugins.charts.StackedLinePlotType.CustomSettings.USE_GROUP_BY]?(b=new epiviz.ui.charts.markers.VisualizationMarker(epiviz.ui.charts.markers.VisualizationMarker.Type.GROUP_BY_MEASUREMENTS,
null,null,"function(data){return null}","function(m, data, preMarkResult) {return m.annotation()['"+b+"'];}"),a(b)):f();(function(){e.transformData(e._lastRange,e._unalteredData).done(function(){e._drawPlot(e._lastRange,e._lastData,c,d)});e._markersModified.notify(new epiviz.ui.charts.VisEventArgs(e._id,e._markers))})()};
epiviz.plugins.charts.StackedLinePlot.prototype._drawPlot=function(a,b,c,d){var e=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.ROW_LABEL];c=this.customSettingsValues()[epiviz.plugins.charts.StackedLinePlotType.CustomSettings.INTERPOLATION];d=0==c.indexOf("step")?b.measurements().length:b.measurements().length-1;var f=epiviz.ui.charts.Axis;d=d3.scale.linear().domain([0,d]).range([0,this.width()-this.margins().sumAxis(f.X)]);this._clearAxes();this._drawAxes(d,void 0,b.measurements().length,
5,void 0,void 0,void 0,void 0,void 0,void 0,b.measurements().map(function(a){return"name"==e?a.name():(a=a.annotation())&&e in a?a[e]:"<NA>"}),void 0,0==c.indexOf("step"));c=this._svg.selectAll(".lines");c.empty()&&(c=this._svg.append("g").attr("class","lines items"),f=c.append("g").attr("class","selected"),c.append("g").attr("class","hovered"),f.append("g").attr("class","hovered"));c.attr("transform","translate("+this.margins().left()+", "+this.margins().top()+")");return this._drawLines(a,b,d)};
epiviz.plugins.charts.StackedLinePlot.prototype._drawLines=function(a,b,c){var d=epiviz.ui.charts.Axis,e=this.colors(),f=this.customSettingsValues()[epiviz.plugins.charts.StackedLinePlotType.CustomSettings.INTERPOLATION],g=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.COL_LABEL],h=this.customSettingsValues()[epiviz.plugins.charts.StackedLinePlotType.CustomSettings.OFFSET],l=this.customSettingsValues()[epiviz.plugins.charts.StackedLinePlotType.CustomSettings.SCALE_TO_PERCENT],
m=this.customSettingsValues()[epiviz.plugins.charts.StackedLinePlotType.CustomSettings.HOVER_OPACITY],n=this,p=this._svg.select(".lines"),t=b.firstSeries().globalStartIndex(),q=b.firstSeries().globalEndIndex();b.foreach(function(a,b){var c=b.globalStartIndex(),d=b.globalEndIndex();c>t&&(t=c);d<q&&(q=d)});for(var r=q-t,u=epiviz.measurements.Measurement.Type.isOrdered(this.measurements().first().type()),v,x,y=0;y<r;++y){var A=y+t,C=b.firstSeries().getRowByGlobalIndex(A);C&&(!u||void 0==a.start()||void 0==
a.end()||C.start()<a.end()&&C.end()>=a.start())&&(void 0==v&&(v=A),x=A+1)}var t=v,q=x,D=epiviz.utils.range(x-v,t);if(0==D.length)return[];var B=null;l&&(B=new epiviz.measurements.MeasurementHashtable,b.measurements().forEach(function(a){var c=D.filter(function(c){return b.getByGlobalIndex(a,c)}).map(function(c){return b.getByGlobalIndex(a,c).value}).reduce(function(a,b){return a+b});B.put(a,c)}));var H=function(a){return n._globalIndexColorLabels?n._globalIndexColorLabels[a.globalIndex()]:a.metadata(g)},
z=function(a){var c=[];"step-before"==f&&c.push({x:0,y:0});var d=b.measurements(),c=c.concat(d.map(function(d,e){var f=l?B.get(d):1,f=f||1,g=b.getByGlobalIndex(d,a);return{x:c.length+e,y:g?g.value/f:null}}));"step-after"==f&&c.push({x:c.length,y:0});return c.filter(function(a){return null!==a.y})};a=D.filter(function(a){return b.firstSeries().getRowByGlobalIndex(a)}).map(function(a){var c=b.firstSeries().getRowByGlobalIndex(a),d=b.measurements();return new epiviz.ui.charts.ChartObject(sprintf("line-series-%s",
a),c.start(),c.end(),z(a),a,d.map(function(c,d){return[b.getByGlobalIndex(c,a)]}),d,"")});var r=D.map(function(a){return z(a)}),w=d3.layout.stack().offset(h)(r),E=d3.scale.linear().domain([Math.min(0,d3.min(w,function(a){return d3.min(a,function(a){return a.y0+a.y})})),d3.max(w,function(a){return d3.max(a,function(a){return a.y0+a.y})})]).range([this.height()-this.margins().sumAxis(d.Y),0]),I=d3.svg.area().x(function(a){return c(a.x)}).y0(function(a){return E(a.y0)}).y1(function(a){return E(a.y0+
a.y)}).interpolate(f),d=p.selectAll(".line-series").data(a,function(a){return a.seriesIndex});d.enter().insert("path",":first-child").attr("class","line-series item").attr("d",function(a,b){return I(w[b])}).style("opacity","0").style("shape-rendering","auto").style("fill",function(a,c){return e.getByKey(H(b.firstSeries().getRowByGlobalIndex(a.seriesIndex)))}).on("mouseover",function(a,b){n._hover.notify(new epiviz.ui.charts.VisEventArgs(n.id(),a));p.selectAll(".item").style("opacity",1-m);p.selectAll(".hovered .item").style("opacity",
m)}).on("mouseout",function(){n._unhover.notify(new epiviz.ui.charts.VisEventArgs(n.id()))});d.transition().duration(500).style("opacity","0.7").attr("d",function(a,b){return I(w[b])}).style("fill",function(a,c){return e.getByKey(H(b.firstSeries().getRowByGlobalIndex(a.seriesIndex)))});d.exit().transition().duration(500).style("opacity","0").remove();var J={};D.forEach(function(a){b.firstSeries().getByGlobalIndex(a)&&(a=H(b.firstSeries().getRowByGlobalIndex(a)),J[a]=a)});this._svg.selectAll(".chart-title").remove();
this._svg.selectAll(".chart-title-color ").remove();d=this._svg.selectAll(".chart-title").data(Object.keys(J));d.enter().append("text").attr("class","chart-title").attr("font-weight","bold").attr("y",n.margins().top()-5);d.attr("fill",function(a){return e.getByKey(a)}).text(function(a){return a});var L=0,K=[];$("#"+this.id()+" .chart-title").each(function(a){K.push(L);L+=this.getBBox().width+15});d.attr("x",function(a,b){return n.margins().left()+10+K[b]});this._svg.selectAll(".chart-title-color").data(Object.keys(J)).enter().append("circle").attr("class",
"chart-title-color").attr("cx",function(a,b){return n.margins().left()+4+K[b]}).attr("cy",n.margins().top()-9).attr("r",4).style("shape-rendering","auto").style("stroke-width","0").attr("fill",function(a){return e.getByKey(a)});return a};epiviz.plugins.charts.StackedLinePlot.prototype.colorLabels=function(){for(var a=[],b=0;b<this.colors().size()&&20>b;++b)a.push("Color "+(b+1));return a};
epiviz.plugins.charts.StackedLinePlot.prototype.doHover=function(a){var b=this.customSettingsValues()[epiviz.plugins.charts.StackedLinePlotType.CustomSettings.HOVER_OPACITY],c=this._container.find(".items"),d=c.find("> .hovered"),e=c.find("> .selected"),f=e.find("> .hovered"),g=function(){return a.overlapsWith(d3.select(this).data()[0])},c=c.find("> .item").filter(g);d.append(c);c=e.find("> .item").filter(g);f.append(c);this._svg.selectAll(".item").style("opacity",1-b);this._svg.selectAll(".hovered .item").style("opacity",
b)};epiviz.plugins.charts.StackedLinePlot.prototype.doUnhover=function(){this.customSettingsValues();var a=this._container.find(".items"),b=a.find("> .hovered"),c=a.find("> .selected"),d=c.find("> .hovered");a.prepend(b.children());c.prepend(d.children());this._svg.selectAll(".item").style("opacity",1);this._svg.selectAll(".hovered .item").style("opacity",1)};epiviz.plugins.charts.StackedLinePlotType=function(a){epiviz.ui.charts.PlotType.call(this,a)};epiviz.plugins.charts.StackedLinePlotType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.PlotType.prototype);epiviz.plugins.charts.StackedLinePlotType.constructor=epiviz.plugins.charts.StackedLinePlotType;epiviz.plugins.charts.StackedLinePlotType.prototype.createNew=function(a,b,c){return new epiviz.plugins.charts.StackedLinePlot(a,b,c)};epiviz.plugins.charts.StackedLinePlotType.prototype.typeName=function(){return"epiviz.plugins.charts.StackedLinePlot"};
epiviz.plugins.charts.StackedLinePlotType.prototype.chartName=function(){return"Stacked Plot"};epiviz.plugins.charts.StackedLinePlotType.prototype.chartHtmlAttributeName=function(){return"stacked-line-plot"};epiviz.plugins.charts.StackedLinePlotType.prototype.measurementsFilter=function(){return function(a){return a.type()==epiviz.measurements.Measurement.Type.FEATURE}};epiviz.plugins.charts.StackedLinePlotType.prototype.isRestrictedToSameDatasourceGroup=function(){return!0};
epiviz.plugins.charts.StackedLinePlotType.prototype.customSettingsDefs=function(){return epiviz.ui.charts.PlotType.prototype.customSettingsDefs.call(this).concat([new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.COL_LABEL,epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_METADATA,"colLabel","Color by"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.ROW_LABEL,epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_ANNOTATION,"name","Labels"),
new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.StackedLinePlotType.CustomSettings.OFFSET,epiviz.ui.charts.CustomSetting.Type.CATEGORICAL,"zero","Offset",["zero","wiggle"]),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.StackedLinePlotType.CustomSettings.INTERPOLATION,epiviz.ui.charts.CustomSetting.Type.CATEGORICAL,"step-after","Interpolation","linear step-before step-after basis basis-open basis-closed bundle cardinal cardinal-open monotone".split(" ")),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.StackedLinePlotType.CustomSettings.SCALE_TO_PERCENT,
epiviz.ui.charts.CustomSetting.Type.BOOLEAN,!0,"Scale to Percent"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.StackedLinePlotType.CustomSettings.USE_GROUP_BY,epiviz.ui.charts.CustomSetting.Type.BOOLEAN,!1,"Use Group by"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.StackedLinePlotType.CustomSettings.ROW_GROUP_BY,epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_ANNOTATION,"name","Group By"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.StackedLinePlotType.CustomSettings.HOVER_OPACITY,
epiviz.ui.charts.CustomSetting.Type.NUMBER,.6,"Hover Opacity")])};epiviz.plugins.charts.StackedLinePlotType.CustomSettings={INTERPOLATION:"interpolation",OFFSET:"offset",SCALE_TO_PERCENT:"scaleToPercent",ROW_GROUP_BY:"groupBy",USE_GROUP_BY:"useGroupBy",HOVER_OPACITY:"hoverOpacity"};epiviz.ui.charts.DataStructureVisualizationType=function(a){epiviz.ui.charts.VisualizationType.call(this,a)};epiviz.ui.charts.DataStructureVisualizationType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.VisualizationType.prototype);epiviz.ui.charts.DataStructureVisualizationType.constructor=epiviz.ui.charts.DataStructureVisualizationType;epiviz.ui.charts.DataStructureVisualizationType.prototype.chartDisplayType=function(){return epiviz.ui.charts.VisualizationType.DisplayType.DATA_STRUCTURE};
epiviz.ui.charts.DataStructureVisualizationType.prototype.cssClass=function(){return"data-structure-container ui-widget-content"};epiviz.ui.charts.DataStructureVisualizationType.prototype.isRestrictedToSameDatasourceGroup=function(){return!0};epiviz.ui.charts.DataStructureVisualizationType.prototype.hasMeasurements=function(){return!1};epiviz.ui.charts.DataStructureVisualizationType.prototype.customSettingsDefs=function(){return epiviz.ui.charts.VisualizationType.prototype.customSettingsDefs.call(this)};epiviz.ui.charts.tree={};epiviz.ui.charts.tree.HierarchyVisualizationType=function(a){epiviz.ui.charts.DataStructureVisualizationType.call(this,a)};epiviz.ui.charts.tree.HierarchyVisualizationType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.DataStructureVisualizationType.prototype);epiviz.ui.charts.tree.HierarchyVisualizationType.constructor=epiviz.ui.charts.tree.HierarchyVisualizationType;epiviz.ui.charts.tree.IcicleType=function(a){epiviz.ui.charts.tree.HierarchyVisualizationType.call(this,a)};epiviz.ui.charts.tree.IcicleType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.tree.HierarchyVisualizationType.prototype);epiviz.ui.charts.tree.IcicleType.constructor=epiviz.ui.charts.tree.IcicleType;epiviz.ui.charts.tree.IcicleType.prototype.createNew=function(a,b,c){return new epiviz.ui.charts.tree.Icicle(a,b,c)};epiviz.ui.charts.tree.IcicleType.prototype.typeName=function(){return"epiviz.ui.charts.tree.Icicle"};
epiviz.ui.charts.tree.IcicleType.prototype.chartName=function(){return"Navigation Control"};epiviz.ui.charts.tree.IcicleType.prototype.chartHtmlAttributeName=function(){return"icicle"};
epiviz.ui.charts.tree.IcicleType.prototype.customSettingsDefs=function(){return epiviz.ui.charts.tree.HierarchyVisualizationType.prototype.customSettingsDefs.call(this).concat([new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.tree.IcicleType.CustomSettings.HOVER_OPACITY,epiviz.ui.charts.CustomSetting.Type.NUMBER,.9,"Hover Opacity"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.tree.IcicleType.CustomSettings.AGG_LEVEL,epiviz.ui.charts.CustomSetting.Type.STRING,"","Agg Level"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.tree.IcicleType.CustomSettings.NODE_SEL,
epiviz.ui.charts.CustomSetting.Type.STRING,"{}","Node Selection"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.tree.IcicleType.CustomSettings.ICICLE_ROOT,epiviz.ui.charts.CustomSetting.Type.STRING,"","Current Root of the tree"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.tree.IcicleType.CustomSettings.AUTO_PROPAGATE,epiviz.ui.charts.CustomSetting.Type.BOOLEAN,!0,"Auto Propogate Range")])};
epiviz.ui.charts.tree.IcicleType.CustomSettings={HOVER_OPACITY:"hoverOpacity",AGG_LEVEL:"aggLevel",NODE_SEL:"nodeSel",ICICLE_ROOT:"icicleRoot",AUTO_PROPAGATE:"icicleAutoPropagate"};epiviz.ui.charts.ChartIndexObject=function(a,b,c,d,e,f,g,h){epiviz.ui.charts.VisObject.call(this);this.id=a;this.keys=b;this.keyValues=c;this.values=d;this.seriesIndex=g;this.valueItems=e;this.measurements=f;this.cssClasses=h};epiviz.ui.charts.ChartIndexObject.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.VisObject.prototype);epiviz.ui.charts.ChartIndexObject.constructor=epiviz.ui.charts.ChartIndexObject;
epiviz.ui.charts.ChartIndexObject.prototype.getMetadata=function(a,b,c){return this.valueItems?this.valueItems[a][b][c]:null};epiviz.ui.charts.ChartIndexObject.prototype.metadataColumns=function(){return this.keys};epiviz.ui.charts.ChartIndexObject.prototype.dimensions=function(){return[1,1]};epiviz.plugins.charts.DiversityScatterPlot=function(a,b,c){epiviz.ui.charts.Plot.call(this,a,b,c);this._legend=this._chartContent=null;this._measurementsX=[];this._measurementsY=[];var d=this;this.measurements().foreach(function(a,b){0==b%2?d._measurementsX.push(a):d._measurementsY.push(a)});this._yLabel=this._xLabel="";for(a=0;a<Math.min(this._measurementsX.length,this._measurementsY.length);++a)0<a&&(this._xLabel+=", ",this._yLabel+=", "),this._xLabel+=this._measurementsX[a].name(),this._yLabel+=
this._measurementsY[a].name();this._colorLabels=[];this._initialize()};epiviz.plugins.charts.DiversityScatterPlot.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Plot.prototype);epiviz.plugins.charts.DiversityScatterPlot.constructor=epiviz.plugins.charts.DiversityScatterPlot;
epiviz.plugins.charts.DiversityScatterPlot.prototype._initialize=function(){epiviz.ui.charts.Plot.prototype._initialize.call(this);this._svg.classed("scatter-plot",!0);this._chartContent=this._svg.append("g").attr("class","chart-content");this._legend=this._svg.append("g").attr("class","chart-legend")};
epiviz.plugins.charts.DiversityScatterPlot.prototype.draw=function(){epiviz.ui.charts.Plot.prototype.draw.call(this,void 0,void 0);return this.drawScatter(this._lastRange,this._lastData.data,"sample_id",this._xLabel,"alphaDiversity")};
epiviz.plugins.charts.DiversityScatterPlot.prototype.drawScatter=function(a,b,c,d,e){this.xTag=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.ROW_LABEL];a=this._measurementsX[0].annotation();this._measurementsX=[];a=new epiviz.measurements.Measurement(this.xTag,this.xTag,"feature","ihmp","ihmp","ihmp",null,null,a,-1,1,[]);this._measurementsX.push(a);return this._drawCircles(b,this.xTag,e,c)};
epiviz.plugins.charts.DiversityScatterPlot.prototype._drawCircles=function(a,b,c,d){function e(a){a.sort(d3.ascending);var b=d3.quantile(a,.25);a=d3.quantile(a,.75);return[b,a]}var f=this,g=epiviz.ui.charts.Axis,h=Math.max(1,this.customSettingsValues()[epiviz.plugins.charts.DiversityScatterPlotType.CustomSettings.CIRCLE_RADIUS_RATIO]*Math.min(this.width(),this.height())),l=Math.max(Math.floor(h),1),m=this.margins(),n=this.width(),p=this.height(),t=epiviz.ui.charts.CustomSetting,q=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.Y_MIN],
r=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.Y_MAX],u=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.X_MIN],v=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.X_MAX];q==t.DEFAULT&&(q=this._measurementsY[0].minValue());r==t.DEFAULT&&(r=this._measurementsY[0].maxValue());var x=[];a.forEach(function(a){x.push(a[b])});var y=[];x.forEach(function(a){-1==y.indexOf(a)&&y.push(a)});this.xTickValues=y;a.forEach(function(a){var c=
y.indexOf(a[b]);a._xVal=c+1});var A=0,C=[];y.forEach(function(a){C[A]=[];C[A][0]=A;C[A][1]=[];A++});a.forEach(function(a){var d=y.indexOf(a[b]);C[d][1].push(a[c])});u==t.DEFAULT&&(u=0);v==t.DEFAULT&&(v=y.length+1);var t=d3.scale.linear().domain([u,v]).range([0,n-m.sumAxis(g.X)]),D=d3.scale.linear().domain([q,r]).range([p-m.sumAxis(g.Y),0]);this._clearAxes(this._chartContent);xLabelsPadded=[""];y.forEach(function(a){xLabelsPadded.push(a)});this._drawAxes(t,D,xLabelsPadded.length,15,this._chartContent,
n,p,m,void 0,void 0,xLabelsPadded,void 0,void 0);for(var B={},H=[],z=1,w=0;w<a.length;++w){var E=a[w]._xVal,I=a[w][c];if(E&&I){var J=sprintf("item data-series-%s",0),L=t(E),K=D(I),L=Math.floor(L/l)*l,K=Math.floor(K/l)*l,F=null;B[K]&&B[K][L]?(F=B[K][L],F.id+="_"+a[w][d],F.values[0]=(F.values[0]*F.valueItems[0].length+E)/(F.valueItems[0].length+1),F.values[1]=(F.values[1]*F.valueItems[1].length+I)/(F.valueItems[1].length+1),F.valueItems[0].push(a[w]),F.valueItems[1].push(a[w]),F.valueItems[0].length>
z&&(z=F.valueItems[0].length)):(F=new epiviz.ui.charts.ChartIndexObject(sprintf("scatter_%s_%s_%s_%s",E,I,0,a[w][d]),[d],a[w][d],[E,I],[[a[w]],[a[w]]],["_xVal",c],0,J),B[K]||(B[K]={}),B[K][L]=F,H.push(F))}}w=this._chartContent.select(".items");w.empty()&&(w=this._chartContent.append("g").attr("class","items"),a=w.append("g").attr("class","selected"),w.append("g").attr("class","hovered"),a.append("g").attr("class","hovered"));a=w.selectAll("circle").data(H,function(a){return a.id});a.enter().insert("circle",
":first-child").attr("id",function(a){return sprintf("%s-item-%s",f.id(),a.seriesIndex)}).style("opacity",0).style("fill-opacity",0).attr("r",0);a.each(function(a){var b=d3.select(this),c=f.colors().get(a.seriesIndex);b.attr("cx",m.left()+(a.values[0]-u)*(n-m.sumAxis(g.X))/(v-u)).attr("cy",p-m.bottom()-(a.values[1]-q)*(p-m.sumAxis(g.Y))/(r-q)).attr("class",a.cssClasses).style("fill",c)});a.transition().duration(1E3).style("fill-opacity",function(a){return Math.max(.6,a.valueItems[0].length/z)}).style("opacity",
null).attr("r",h);a.exit().transition().duration(1E3).style("opacity",0).attr("r",0).remove();a.on("click",function(a){f._deselect.notify(new epiviz.ui.charts.VisEventArgs(f.id()));f._select.notify(new epiviz.ui.charts.VisEventArgs(f.id(),a));f._dispatch.click(f.id(),null);d3.event.stopPropagation()});if(this._globalIndexColorLabels){h={};for(j=firstGlobalIndex;j<lastGlobalIndex;++j)h[this._globalIndexColorLabels[j]]=this._globalIndexColorLabels[j];this._colorLabels=Object.keys(h);this._svg.selectAll(".chart-title").remove();
this._svg.selectAll(".chart-title-color ").remove();h=this._svg.selectAll(".chart-title").data(this._colorLabels);h.enter().append("text").attr("class","chart-title").attr("font-weight","bold").attr("y",f.margins().top()-5);h.attr("fill",function(a,b){return f.colors().getByKey(a)}).text(function(a){return a});var G=0,M=[];$("#"+this.id()+" .chart-title").each(function(a){M.push(G);G+=this.getBBox().width+15});h.attr("x",function(a,b){return f.margins().left()+10+M[b]});this._svg.selectAll(".chart-title-color").data(this._colorLabels).enter().append("circle").attr("class",
"chart-title-color").attr("cx",function(a,b){return f.margins().left()+4+M[b]}).attr("cy",f.margins().top()-9).attr("r",4).style("shape-rendering","auto").style("stroke-width","0").attr("fill",function(a,b){return f.colors().getByKey(a)}).style("stroke-width",0)}else{h=Math.min(this._measurementsX.length,this._measurementsY.length);a=Array(h);for(j=0;j<h;++j)a[j]=sprintf("%s vs %s",this._measurementsX[j].name(),this._measurementsY[j].name());this._colorLabels=a}h=w;h.selectAll(".iqr-range").remove();
h.selectAll(".whisker").remove();for(w=0;w<C.length;w++){a=C[w][1];d=[];d=e(a);l=1.5*(d[1]-d[0]);B=0;E=a.length-1;for(j=0;j<a.length;j++)if(a[j]<d[0]-l)B=j;else break;for(k=a.length-1;0<k;k--)if(a[k]>d[1]+l)E=k;else break;h.append("rect").attr("id","0").attr("class","iqr-range").style("opacity",1).style("fill-opacity",.2).attr("x",m.left()+(.6+C[w][0]-u)*(n-m.sumAxis(g.X))/(v-u)).attr("y",p-m.bottom()-(d[1]-q)*(p-m.sumAxis(g.Y))/(r-q)).attr("width",t(.8)).attr("height",Math.abs(D(d[1])-D(d[0]))).attr("fill",
"#1E90FF");h.append("line").style("stroke","gray").attr("class","whisker").attr("x1",m.left()+(1+C[w][0]-u)*(n-m.sumAxis(g.X))/(v-u)).attr("y1",p-m.bottom()-(d[1]-q)*(p-m.sumAxis(g.Y))/(r-q)).attr("x2",m.left()+(1+C[w][0]-u)*(n-m.sumAxis(g.X))/(v-u)).attr("y2",p-m.bottom()-(a[E]-q)*(p-m.sumAxis(g.Y))/(r-q));h.append("line").style("stroke","gray").attr("class","whisker").attr("x1",m.left()+(1+C[w][0]-u)*(n-m.sumAxis(g.X))/(v-u)).attr("y1",p-m.bottom()-(d[0]-q)*(p-m.sumAxis(g.Y))/(r-q)).attr("x2",m.left()+
(1+C[w][0]-u)*(n-m.sumAxis(g.X))/(v-u)).attr("y2",p-m.bottom()-(a[B]-q)*(p-m.sumAxis(g.Y))/(r-q));h.append("line").style("stroke","gray").attr("class","whisker").attr("x1",m.left()+(.6+C[w][0]-u)*(n-m.sumAxis(g.X))/(v-u)).attr("y1",p-m.bottom()-(a[E]-q)*(p-m.sumAxis(g.Y))/(r-q)).attr("x2",m.left()+(1.4+C[w][0]-u)*(n-m.sumAxis(g.X))/(v-u)).attr("y2",p-m.bottom()-(a[E]-q)*(p-m.sumAxis(g.Y))/(r-q));h.append("line").style("stroke","gray").attr("class","whisker").attr("x1",m.left()+(.6+C[w][0]-u)*(n-m.sumAxis(g.X))/
(v-u)).attr("y1",p-m.bottom()-(a[B]-q)*(p-m.sumAxis(g.Y))/(r-q)).attr("x2",m.left()+(1.4+C[w][0]-u)*(n-m.sumAxis(g.X))/(v-u)).attr("y2",p-m.bottom()-(a[B]-q)*(p-m.sumAxis(g.Y))/(r-q))}return H};epiviz.plugins.charts.DiversityScatterPlot.prototype.colorLabels=function(){return this._colorLabels};
epiviz.plugins.charts.DiversityScatterPlot.prototype.transformData=function(a,b){void 0!=a&&(this._lastRange=a);void 0!=b&&(this._unalteredData=this._lastData=b);var c=new epiviz.deferred.Deferred;c.resolve();return c};epiviz.plugins.charts.DiversityScatterPlotType=function(a){epiviz.ui.charts.PlotType.call(this,a)};epiviz.plugins.charts.DiversityScatterPlotType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.PlotType.prototype);epiviz.plugins.charts.DiversityScatterPlotType.constructor=epiviz.plugins.charts.DiversityScatterPlotType;epiviz.plugins.charts.DiversityScatterPlotType.prototype.createNew=function(a,b,c){return new epiviz.plugins.charts.DiversityScatterPlot(a,b,c)};
epiviz.plugins.charts.DiversityScatterPlotType.prototype.typeName=function(){return"epiviz.plugins.charts.DiversityScatterPlot"};epiviz.plugins.charts.DiversityScatterPlotType.prototype.chartName=function(){return"Diversity Box Plot"};epiviz.plugins.charts.DiversityScatterPlotType.prototype.chartHtmlAttributeName=function(){return"diversity_scatter"};epiviz.plugins.charts.DiversityScatterPlotType.prototype.measurementsFilter=function(){return function(a){return epiviz.measurements.Measurement.Type.hasValues(a.type())}};
epiviz.plugins.charts.DiversityScatterPlotType.prototype.isRestrictedToSameDatasourceGroup=function(){return!0};epiviz.plugins.charts.DiversityScatterPlotType.prototype.minSelectedMeasurements=function(){return 2};
epiviz.plugins.charts.DiversityScatterPlotType.prototype.customSettingsDefs=function(){return epiviz.ui.charts.PlotType.prototype.customSettingsDefs.call(this).concat([new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.DiversityScatterPlotType.CustomSettings.CIRCLE_RADIUS_RATIO,epiviz.ui.charts.CustomSetting.Type.NUMBER,.015,"Circle radius ratio"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.ROW_LABEL,epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_ANNOTATION,
"name","Row labels"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.X_MIN,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Min X"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.X_MAX,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Max X"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.Y_MIN,epiviz.ui.charts.CustomSetting.Type.NUMBER,
epiviz.ui.charts.CustomSetting.DEFAULT,"Min Y"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.Y_MAX,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Max Y")])};epiviz.plugins.charts.DiversityScatterPlotType.CustomSettings={CIRCLE_RADIUS_RATIO:"circleRadiusRatio"};epiviz.plugins.charts.FeatureScatterPlotType=function(a){epiviz.ui.charts.PlotType.call(this,a)};epiviz.plugins.charts.FeatureScatterPlotType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.PlotType.prototype);epiviz.plugins.charts.FeatureScatterPlotType.constructor=epiviz.plugins.charts.FeatureScatterPlotType;epiviz.plugins.charts.FeatureScatterPlotType.prototype.createNew=function(a,b,c){return new epiviz.plugins.charts.FeatureScatterPlot(a,b,c)};
epiviz.plugins.charts.FeatureScatterPlotType.prototype.typeName=function(){return"epiviz.plugins.charts.FeatureScatterPlot"};epiviz.plugins.charts.FeatureScatterPlotType.prototype.chartName=function(){return"Feature Plot"};epiviz.plugins.charts.FeatureScatterPlotType.prototype.chartHtmlAttributeName=function(){return"feature_scatter"};epiviz.plugins.charts.FeatureScatterPlotType.prototype.measurementsFilter=function(){return function(a){return epiviz.measurements.Measurement.Type.hasValues(a.type())}};
epiviz.plugins.charts.FeatureScatterPlotType.prototype.isRestrictedToSameDatasourceGroup=function(){return!0};epiviz.plugins.charts.FeatureScatterPlotType.prototype.minSelectedMeasurements=function(){return 2};
epiviz.plugins.charts.FeatureScatterPlotType.prototype.customSettingsDefs=function(){return epiviz.ui.charts.PlotType.prototype.customSettingsDefs.call(this).concat([new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.FeatureScatterPlotType.CustomSettings.CIRCLE_RADIUS_RATIO,epiviz.ui.charts.CustomSetting.Type.NUMBER,.015,"Circle radius ratio"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.ROW_LABEL,epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_ANNOTATION,
"name","Row labels"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.X_MIN,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Min X"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.X_MAX,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Max X"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.Y_MIN,epiviz.ui.charts.CustomSetting.Type.NUMBER,
epiviz.ui.charts.CustomSetting.DEFAULT,"Min Y"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.Y_MAX,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Max Y"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.FeatureScatterPlotType.CustomSettings.FEATURE_NAME,epiviz.ui.charts.CustomSetting.Type.STRING,"Bacteria","Feature Name"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.FeatureScatterPlotType.CustomSettings.FEATURE_ID,
epiviz.ui.charts.CustomSetting.Type.STRING,"0-0","Feature ID"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.FeatureScatterPlotType.CustomSettings.LOG_TRANSFORM,epiviz.ui.charts.CustomSetting.Type.BOOLEAN,!0,"Log Transform count data"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.FeatureScatterPlotType.CustomSettings.SHOW_POINTS,epiviz.ui.charts.CustomSetting.Type.BOOLEAN,!1,"Show points on box plot")])};
epiviz.plugins.charts.FeatureScatterPlotType.CustomSettings={CIRCLE_RADIUS_RATIO:"circleRadiusRatio",FEATURE_NAME:"featureName",FEATURE_ID:"featureId",LOG_TRANSFORM:"logTransform",SHOW_POINTS:"showPoints"};epiviz.ui.charts.ChartFactory=function(a){this._config=a;this._types={};for(var b=this._size=0;b<a.chartTypes.length;++b)this.register(a.chartTypes[b])};epiviz.ui.charts.ChartFactory.prototype.size=function(){return this._size};epiviz.ui.charts.ChartFactory.prototype.registerType=function(a){a.typeName()in this._types||++this._size;this._types[a.typeName()]=a};
epiviz.ui.charts.ChartFactory.prototype.unregisterType=function(a){if(!(a.typeName()in this._types))return!1;--this._size;delete this._types[a.typeName()];return!0};epiviz.ui.charts.ChartFactory.prototype.register=function(a){a=epiviz.utils.evaluateFullyQualifiedTypeName(a);if(!a)return!1;this.registerType(new a(this._config));return!0};epiviz.ui.charts.ChartFactory.prototype.unregister=function(a){return(a=epiviz.utils.evaluateFullyQualifiedTypeName(a))?this.unregisterType(new a(this._config)):!1};
epiviz.ui.charts.ChartFactory.prototype.get=function(a){return a&&a in this._types?this._types[a]:null};epiviz.ui.charts.ChartFactory.prototype.foreach=function(a){for(var b in this._types)if(this._types.hasOwnProperty(b)&&a(b,this._types[b]))break};epiviz.ui.controls.Control=function(a,b,c){this._container=a;this._title=b||"";this._id=c||epiviz.utils.generatePseudoGUID(6)};epiviz.ui.controls.Control.prototype.initialize=function(){};epiviz.ui.controls.Control.prototype.id=function(){return this._id};epiviz.ui.controls.Control.prototype.title=function(){return this._title};epiviz.ui.controls.DataTable=function(a,b,c,d,e,f){epiviz.ui.controls.Control.call(this,a);this._columns=b;this._rows=c;this._rowsArray=[];var g=this;this._rows.foreach(function(a){g._rowsArray.push(a)});this._rowParser=d;this._multiselect=e||!1;this._showColumnSelector=f||!1;this._columnSelector=this._table=null;this._selectedIndices=[];this._selectedIndicesMap={};this._lastSelection=this._deselectList=this._selectList=null};epiviz.ui.controls.DataTable.prototype=epiviz.utils.mapCopy(epiviz.ui.controls.Control.prototype);
epiviz.ui.controls.DataTable.constructor=epiviz.ui.controls.DataTable;epiviz.ui.controls.DataTable.ColumnType={STRING:"string",NUMBER:"number",BOOLEAN:"boolean"};
epiviz.ui.controls.DataTable.prototype.initialize=function(){this._container.append('<div class="epiviz-data-table"><table style="width: 100%!important;"><thead></thead><tbody></tbody><tfoot></tfoot></table></div>');this._table=this._container.find("table");var a=this._table.find("thead"),b=this._table.find("tfoot"),c=this._table.find("tbody"),d=sprintf("<tr><th>%s</th></tr>",this._columns.join("</th><th>"));a.append(d);b.append(d);var e=this;this._rows.foreach(function(a){for(var b="",d=0;d<e._columns.length;++d)b+=
sprintf("<td>%s</td>",e._rowParser(a,e._columns[d]));c.append(sprintf("<tr>%s</tr>",b))});b=Array(this._columns.length);for(a=0;a<this._columns.length;++a)b[a]={type:"text",bRegex:!0,bSmart:!0};this._table.dataTable({bJQueryUI:!0,sDom:'<"H"lfr>Tt<"F"ip>',oTableTools:{sRowSelect:this._multiselect?"multi":"single",aButtons:["select_all"],fnPreRowSelect:function(a,b,c){return e._preRowSelect(this,a,b,c)},fnRowSelected:function(a){return e._select(this,a)},fnRowDeselected:function(a){return e._select(this,
a)}}}).columnFilter({aoColumns:b});b=-1;for(a=0;a<this._columns.length;++a)this._columns[a].isVisible&&++b,this._table.fnSetColumnVis(a,this._columns[a].isVisible),this._columns[a].defaultFilter&&(this._table.fnFilter(this._columns[a].defaultFilter,a,!0,!0),this._table.find("tfoot").find(sprintf("th:eq(%s)",b)).find("input").removeClass("search_init").val(this._columns[a].defaultFilter));this._container.find(".ui-buttonset").first().attr("style","position: absolute!important;");if(this._showColumnSelector){this._container.find(".fg-toolbar").first().append(sprintf('<div style="float: right; margin-right: 5px;"><label>Selected Columns: </label><select class="%s" multiple="multiple" style=""><option value="-1">All</option></select></div>',
"epiviz-data-table-column-selector"));this._columnSelector=this._container.find(".epiviz-data-table-column-selector");for(a=0;a<this._columns.length;++a)b=sprintf('<option value="%s"%s%s>%s</option>',a,this._columns[a].isVisible?' selected="selected"':"",this._columns[a].isFixed?' disabled="disabled"':"",this._columns[a].name),this._columnSelector.append(b);this._columnSelector.dropdownchecklist({width:"80px",firstItemChecksAll:!0,onComplete:function(a){e._selectColumns(a)}})}};
epiviz.ui.controls.DataTable.prototype.selectedIndices=function(){return this._selectedIndices||[]};epiviz.ui.controls.DataTable.prototype.selectedRows=function(){if(!this._selectedIndices)return[];for(var a=Array(this._selectedIndices.length),b=0;b<this._selectedIndices.length;++b)a[b]=this._rowsArray[this._selectedIndices[b]];return a};
epiviz.ui.controls.DataTable.prototype._preRowSelect=function(a,b,c,d){b&&(this._selectList=this._deselectList=null,b.shiftKey&&1==c.length?(this._deselectList=a.fnGetSelected(),this._lastSelection||(this._lastSelection=c[0]),this._selectList=this._getRangeOfRows(this._lastSelection,c[0])):(this._lastSelection=c[0],b.ctrlKey||b.metaKey||(this._deselectList=a.fnGetSelected(),d||(this._selectList=c))));return!0};
epiviz.ui.controls.DataTable.prototype._getRangeOfRows=function(a,b){var c=this._table.fnGetPosition(a),d=this._table.fnGetPosition(b),e=this._table.fnSettings(),c=$.inArray(c,e.aiDisplay),d=$.inArray(d,e.aiDisplay),f=[];if(0<=c&&0<=d)for(var g=Math.min(c,d);g<=Math.max(c,d);++g)f.push(e.aoData[e.aiDisplay[g]].nTr);return 0<f.length?f:null};
epiviz.ui.controls.DataTable.prototype._select=function(a,b){var c;this._deselectList&&(c=this._deselectList,this._deselectList=null,a.fnDeselect(c));this._selectList&&(c=this._selectList,!this._multiselect&&0<c.length&&(c=[c[c.length-1]]),this._selectList=null,a.fnSelect(c));c=a.fnGetSelected();var d=Array(c.length),e={},f;for(f=0;f<c.length;++f)d[f]=this._table.fnGetPosition(c[f]),e[d[f]]=!0;for(f=0;f<this._selectedIndices.length;++f)e[this._selectedIndices[f]]||(delete this._selectedIndicesMap[this._selectedIndices[f]],
this._selectedIndices.splice(f,1),--f);for(f=0;f<d.length;++f)this._selectedIndicesMap[d[f]]||(this._selectedIndicesMap[d[f]]=!0,this._selectedIndices.push(d[f]));return!0};epiviz.ui.controls.DataTable.prototype._selectColumns=function(a){var b={},c;for(c=0;c<a.options.length;++c)a.options[c].selected&&a.options[c].value&&(b[parseInt(a.options[c].value)]=!0);for(c=0;c<this._columns.length;++c)this._table.fnSetColumnVis(c,b[c]||this._columns[c].isFixed)};
epiviz.ui.controls.DataTable.Column=function(a,b,c,d,e,f){this.id=a;this.name=b;this.type=c;this.isVisible=!d;this.isFixed=e||!1;this.defaultFilter=f||""};epiviz.ui.controls.DataTable.Column.prototype.toString=function(){return this.name};epiviz.utils.IterableArray=function(a){this._array=a};epiviz.utils.IterableArray.prototype.foreach=function(a){for(var b=0;b<this._array.length&&!a(this._array[b]);++b);};epiviz.ui.controls.DatasourceGroupWizardStep=function(){this._data=this._dataTable=null};
epiviz.ui.controls.DatasourceGroupWizardStep.prototype.initialize=function(a,b){this._data=b;a.find(".epiviz-data-table").remove();var c=[new epiviz.ui.controls.DataTable.Column("datasourceGroup","Data Source Group",epiviz.ui.controls.DataTable.ColumnType.STRING)],d={};b.measurements.foreach(function(a){if(!b.dataprovider||b.dataprovider==a.dataprovider()){if(b.annotation)for(var c in b.annotation)if(b.annotation.hasOwnProperty(c)&&(!a.annotation()||a.annotation()[c]!=b.annotation[c]))return;d[a.datasourceGroup()]=
!0}});this._dataTable=new epiviz.ui.controls.DataTable(a,c,new epiviz.utils.IterableArray(Object.keys(d)),function(a){return a});this._dataTable.initialize()};
epiviz.ui.controls.DatasourceGroupWizardStep.prototype.next=function(){var a=this._dataTable?this._dataTable.selectedRows():[];if(0==a.length)return{error:"No rows selected"};this._data.datasourceGroup=a[0];return{data:new epiviz.ui.controls.VisConfigSelection(this._data.measurements.subset(function(b){return b.datasourceGroup()==a[0]}),this._data.datasource,this._data.datasourceGroup,this._data.dataprovider,this._data.annotation?epiviz.utils.mapCopy(this._data.annotation):this._data.annotation,this._data.defaultChartType,
this._data.minSelectedMeasurements,this._data.customData)}};epiviz.ui.controls.DatasourceGroupWizardStep.prototype.title=function(){return"Select Datasource Group"};epiviz.ui.controls.MeaurementsWizardStep=function(){this._measurements=this._data=this._dataTable=null};
epiviz.ui.controls.MeaurementsWizardStep.prototype.initialize=function(a,b){this._data=b;a.find(".epiviz-data-table").remove();var c=2,d=epiviz.ui.controls.DataTable.ColumnType,e=[new epiviz.ui.controls.DataTable.Column("id","Id",d.STRING,!0),new epiviz.ui.controls.DataTable.Column("name","Name",d.STRING,!1,!0),new epiviz.ui.controls.DataTable.Column("type","Type",d.STRING,!0),new epiviz.ui.controls.DataTable.Column("datasourceId","Data Source",d.STRING,!0),new epiviz.ui.controls.DataTable.Column("datasourceGroup",
"Data Source Group",d.STRING,!0),new epiviz.ui.controls.DataTable.Column("dataprovider","Data Provider",d.STRING,!0),new epiviz.ui.controls.DataTable.Column("formulaStr","Formula",d.STRING,!0)],f=[],g={};b.measurements.foreach(function(a){a=a.annotation();if(void 0!=a)for(var b in a)!a.hasOwnProperty(b)||b in g||(f.push(b),g[b]=!0)});f.sort();e=e.concat(f.map(function(a){var b=!1;0>=c&&(b=!0);c--;return new epiviz.ui.controls.DataTable.Column("[anno] "+a,a,d.STRING,b)}));this._measurements=b.measurements.subset(function(a){if(b.datasource&&
b.datasource!=a.datasourceId()||b.datasourceGroup&&b.datasourceGroup!=a.datasourceGroup()||b.dataprovider&&b.dataprovider!=a.dataprovider())return!1;if(b.annotation)for(var c in b.annotation)if(b.annotation.hasOwnProperty(c)&&(!a.annotation()||a.annotation()[c]!=b.annotation[c]))return!1;return!0});this._dataTable=new epiviz.ui.controls.DataTable(a,e,this._measurements,function(a,b){var c;if(epiviz.utils.stringStartsWith(b.id,"[anno] "))c="",void 0!=a.annotation()&&(c=a.annotation()[b.name]||"");
else switch(b.id){case "annotation":c=epiviz.utils.mapJoin(a.annotation(),": ","<br />");break;default:c=a[b.id]()}return 0===c||c?c:""},!0,!0);this._dataTable.initialize()};
epiviz.ui.controls.MeaurementsWizardStep.prototype.next=function(){var a=this._dataTable?this._dataTable.selectedRows():[];if(a.length<this._data.minSelectedMeasurements)return{error:"Minimum selected rows required is "+this._data.minSelectedMeasurements};for(var b=new epiviz.measurements.MeasurementSet,c=0;c<a.length;++c)b.add(a[c]);this._data.measurements=b;return{data:this._data}};epiviz.ui.controls.MeaurementsWizardStep.prototype.title=function(){return"Select Measurements"};epiviz.ui.controls.Wizard=function(a,b,c,d,e,f,g){epiviz.ui.controls.Dialog.call(this,a,b);this._steps=c;this._initialData=d;this._width=e;this._height=f;this._showTabs=g||!1;this._tabs=null;this._initialize()};epiviz.ui.controls.Wizard.prototype=epiviz.utils.mapCopy(epiviz.ui.controls.Dialog.prototype);epiviz.ui.controls.Wizard.constructor=epiviz.ui.controls.Wizard;
epiviz.ui.controls.Wizard.prototype._initialize=function(){var a=this;this._dialog=$("#"+this._id);this._dialog.append('<div id="wizardDialog" class="wizard-dialog"><div class="wizard-tabs"><ul class="wizard-tabs-title-list"></ul></div></div>');this._tabs=this._dialog.find(".wizard-tabs");for(var b=this._tabs.find(".wizard-tabs-title-list"),c=0;c<this._steps.length;++c)b.append(sprintf('<li><a href="#%s-tab-%s">%s</a></li>',this._id,c,this._steps[c].title())),this._tabs.append(sprintf('<div id="%s-tab-%s"></div>',
this._id,c));this._showTabs||(b.css("visibility","hidden"),b.css("position","absolute"));this._tabs.tabs({activate:function(b,c){a._tabActivate(c)},disabled:epiviz.utils.range(this._steps.length-1,1)});this._dialog.dialog({autoOpen:!1,resizable:!0,width:this._width||void 0,height:this._height||void 0,buttons:{Back:function(){var b=a._tabs.tabs("option","active");0!=b&&(a._tabs.tabs("option","disabled",epiviz.utils.range(a._steps.length-b,b)),a._tabs.tabs("option","active",b-1))},Next:function(){var b=
a._tabs.tabs("option","active"),c=a._steps[b].next();c.error?(new epiviz.ui.controls.MessageDialog("Error",{Ok:function(){}},c.error,epiviz.ui.controls.MessageDialog.Icon.ERROR)).show():(a._steps[b+1].initialize($(sprintf("#%s-tab-%s",a._id,b+1)),c.data),a._tabs.tabs("option","disabled",epiviz.utils.range(a._steps.length-b-2,b+2)),a._tabs.tabs("option","active",b+1))},Finish:function(){var b=a._steps[a._steps.length-1].next();b.error?(new epiviz.ui.controls.MessageDialog("Error",{Ok:function(){}},
b.error,epiviz.ui.controls.MessageDialog.Icon.ERROR)).show():(a._handlers.finish&&a._handlers.finish(b.data),$(this).dialog("close"))},Cancel:function(){a._handlers.close&&a._handlers.close();$(this).dialog("close")}},modal:!0});1<this._steps.length?(this._dialog.parent().find('button:contains("Finish")').button("disable"),this._dialog.parent().find('button:contains("Next")').button("enable")):(this._dialog.parent().find('button:contains("Finish")').button("enable"),this._dialog.parent().find('button:contains("Next")').button("disable"));
this._steps[0].initialize($(sprintf("#%s-tab-0",a._id)),this._initialData);this._dialog.css("overflow","visible")};
epiviz.ui.controls.Wizard.prototype._tabActivate=function(a){a=this._tabs.tabs("option","active");var b=this._dialog.parent().find('button:contains("Finish")'),c=this._dialog.parent().find('button:contains("Next")');a==this._steps.length-1?(c.button("disable"),b.button("enable")):(c.button("enable"),b.button("disable"));this._tabs.tabs("option","disabled",epiviz.utils.range(this._steps.length-a-1,a+1))};
epiviz.ui.controls.Wizard.prototype.show=function(){var a=this;this._dialog.dialog("open");this._dialog.dialog("option","position","center");this._dialog.dialog({close:function(b,c){$(this).remove();a._dialog=null}})};epiviz.ui.controls.Wizard.Step=function(){};epiviz.ui.controls.Wizard.Step.prototype.initialize=function(a,b){};epiviz.ui.controls.Wizard.Step.prototype.next=function(){};epiviz.ui.controls.Wizard.Step.prototype.title=function(){};epiviz.ui.controls.ComputedMeasurementsDialog=function(a,b,c,d){epiviz.ui.controls.Dialog.call(this,a,b);this._measurements=c;this._chartsMeasurements=d;this._measurementsList=this._maxTextBox=this._minTextBox=this._nameTextBox=this._idTextBox=this._expressionTextBox=null;this._addButtonProperties={text:!1,icons:{primary:"ui-icon ui-icon-plus"}};this._deleteButtonsProperties={text:!1,icons:{primary:"ui-icon ui-icon-trash"}};this._datasourceGroupMeasurements=this._selectedDatasourceGroup=this._tabs=
null;this._addTabs();this._addDialogContents();this._addDatasourceGroupTable(c)};epiviz.ui.controls.ComputedMeasurementsDialog.prototype=epiviz.utils.mapCopy(epiviz.ui.controls.Dialog.prototype);epiviz.ui.controls.ComputedMeasurementsDialog.constructor=epiviz.ui.controls.ComputedMeasurementsDialog;
epiviz.ui.controls.ComputedMeasurementsDialog.prototype.show=function(){epiviz.ui.controls.Dialog.prototype.show.call(this);var a=this;this._dialog&&(this._dialog.dialog("open"),this._dialog.dialog("option","position","center"),this._dialog.dialog({close:function(b,c){$(this).remove();a._dialog=null;a._handlers.close()}}))};
epiviz.ui.controls.ComputedMeasurementsDialog.prototype._addDatasourceGroupTable=function(a){var b=this,c=$(sprintf("#datasource-group-tab-%s",this._id)),d="",e={};a.foreach(function(a){a.type()==epiviz.measurements.Measurement.Type.FEATURE&&(a.datasourceGroup()in e||(e[a.datasourceGroup()]=[]),e[a.datasourceGroup()].push(a))});for(var f in e)e.hasOwnProperty(f)&&(d+=sprintf('<tr><td class="center">%s</td></tr>',f));c.append(sprintf('<table style="border-spacing:0; border-collapse:collapse; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: moz-none; -ms-user-select: none; user-select: none; width: 100%%;" class="computed-measurements-dialog-raw-table">%s</table>',
"<thead><tr><th>Data Source Group</th></tr></thead>"+d+"<tfoot><tr><th>Data Source Group</th></tr></tfoot>"));var g=c.find(".computed-measurements-dialog-raw-table").dataTable({bJQueryUI:!0,sDom:'<"H"lfr>Tt<"F"ip>',oTableTools:{sRowSelect:"single",aButtons:[],fnPreRowSelect:function(a,b,c){return!0},fnRowSelected:function(a){a=g.fnGetData(a[0]);b._selectedDatasourceGroup=a[0];b._datasourceGroupMeasurements=e[b._selectedDatasourceGroup]},fnRowDeselected:function(a){g.fnGetData(a[0])==b._selectedDatasourceGroup&&
(b._selectedDatasourceGroup=null,b._datasourceGroupMeasurements=null)}}});c.find(".DTTT_container").css("position","absolute")};
epiviz.ui.controls.ComputedMeasurementsDialog.prototype._addTabs=function(){var a=this;this._selectDialog().append('<div id="computedMeasurementsDialog" class="computed-measurements-dialog"><div class="computed-measurements-tabs"><ul>'+sprintf('<li><a href="#datasource-group-tab-%s">Data Source Group</a></li>',this._id)+sprintf('<li><a href="#formula-tab-%s">Expression</a></li>',this._id)+"</ul>"+sprintf('<div id="datasource-group-tab-%s"></div>',this._id)+sprintf('<div id="formula-tab-%s"></div>',
this._id)+"</div></div>");this._tabs=this._selectTabs();this._tabs.tabs({activate:function(b,c){a._tabActivate(c)}})};
epiviz.ui.controls.ComputedMeasurementsDialog.prototype._addDialogContents=function(){var a=this;this._selectDialog().dialog({autoOpen:!1,resizable:!0,width:"600",height:"550",buttons:{Back:function(){0!=a._tabs.tabs("option","active")&&a._tabs.tabs("option","active",0)},Next:function(){1!=a._tabs.tabs("option","active")&&a._tabs.tabs("option","active",1)},Add:function(){for(var b=epiviz.utils.ExpressionParser.parse(a._selectExpressionTextBox().val().trim()),c={},d=b.variables(),e=null,f=null,g=[],
h={},l=0;l<d.length;++l){var m=d[l];if(epiviz.utils.stringStartsWith(m,"{")&&epiviz.utils.stringEndsWith(m,"}")){var n=parseInt(m.substring(1,m.length-1)),m=a._datasourceGroupMeasurements[n];c[n]=m;if(null===e||e>m.minValue())e=m.minValue();if(null===f||f<m.maxValue())f=m.maxValue();if(m.metadata())for(n=0;n<m.metadata().length;++n)h[m.metadata()[n]]||(h[m.metadata()[n]]=!0,g.push(m.metadata()[n]))}}d=a._selectMinTextBox().val().trim();h=a._selectMaxTextBox().val().trim();e=d?parseFloat(d):e;f=h?
parseFloat(h):f;d=a._selectIdTextBox().val().trim()||epiviz.utils.generatePseudoGUID(5);b=new epiviz.measurements.Measurement(d,a._selectNameTextBox().val().trim()||"Unnamed ["+d+"]",epiviz.measurements.Measurement.Type.FEATURE,null,a._selectedDatasourceGroup,null,{referredMeasurements:c,expression:b},"any",null,e,f,g);c=a._datasourceGroupMeasurements.length;$(sprintf("#computed-measurement-measurements-%s",a._id)).append(sprintf('<div style="min-height: 30px; padding: 2px;"><div style="margin: 6px; float: left;">%1$s {<b>%2$s</b>}</div><div style="float: right;"><button id="delete-button-%2$s-%3$s" data-measurement="%2$s">Delete</button><button style="" id="measurement-button-%2$s-%3$s" data-measurement="%2$s">Insert %2$s</button></div></div>',
b.name(),c,a._id));$("#measurement-button-"+c+"-"+a._id).button(a._addButtonProperties).click(function(){a._addButtonClick($(this))});$("#delete-button-"+c+"-"+a._id).button(a._deleteButtonsProperties).click(function(){a._deleteButtonClick($(this))});a._datasourceGroupMeasurements.push(b);a._handlers.add(b)},Close:function(){a._handlers.close();$(this).dialog("close")}},modal:!0})};
epiviz.ui.controls.ComputedMeasurementsDialog.prototype._addButtonClick=function(a){a=a.data("measurement");var b=this._selectExpressionTextBox();b.val(b.val().trim()+" {"+a+"}")};
epiviz.ui.controls.ComputedMeasurementsDialog.prototype._deleteButtonClick=function(a){for(var b=a.data("measurement"),c=this._datasourceGroupMeasurements[b],d=0;d<this._datasourceGroupMeasurements.length;++d){var e=this._datasourceGroupMeasurements[d];if(null!=e&&e!==c&&e.isComputed()&&e.componentMeasurements().contains(c)){a=new epiviz.ui.controls.MessageDialog("Measurement cannot be deleted",{Ok:function(){}},"There are other measurements that depend on the one selected. Please delete those before deleting this.",
epiviz.ui.controls.MessageDialog.Icon.ERROR);a.show();return}}for(var f in this._chartsMeasurements)if(this._chartsMeasurements.hasOwnProperty(f)&&this._chartsMeasurements[f].contains(c)){a=new epiviz.ui.controls.MessageDialog("Measurement cannot be deleted",{Ok:function(){}},"There are charts using the selected measurement. Remove them from the workspace and then try again.",epiviz.ui.controls.MessageDialog.Icon.ERROR);a.show();return}this._datasourceGroupMeasurements[b]=null;a.parent().parent().remove();
this._handlers.remove(c)};
epiviz.ui.controls.ComputedMeasurementsDialog.prototype._tabActivate=function(a){if(0!=this._selectTabs().tabs("option","active")&&(a.newPanel.empty(),this._measurementsList=this._maxTextBox=this._minTextBox=this._expressionTextBox=this._nameTextBox=this._idTextBox=null,this._selectedDatasourceGroup)){a.newPanel.append(sprintf('<label for="computed-measurement-key-%1$s"><b>Id:</b></label> <input id="computed-measurement-key-%1$s" class="ui-widget-content ui-corner-all" style="padding: 2px;" type="text"/>&nbsp;<label for="computed-measurement-name-%1$s"><b>Name:</b></label> <input id="computed-measurement-name-%1$s" class="ui-widget-content ui-corner-all" style="padding: 2px;" type="text"/><br /><br /><div id="computed-measurement-measurements-%1$s" style="overflow: auto; max-height: 200px; border-style: solid; border-width: 1px; border-color: #999999;"></div><br/><label for="computed-measurement-min-%1$s"><b>Min:</b></label> <input id="computed-measurement-min-%1$s" class="ui-widget-content ui-corner-all" style="padding: 2px;" type="text"/>&nbsp;<label for="computed-measurement-max-%1$s"><b>Max:</b></label> <input id="computed-measurement-max-%1$s" class="ui-widget-content ui-corner-all" style="padding: 2px;" type="text"/><br/><div style="overflow: hidden; padding: 10px; padding-right: 20px; margin: 0px;"><textarea id="computed-measurement-expr-%1$s" class="ui-widget-content ui-corner-all" style="width: 100%%; height: 55px; padding: 5px; margin: 0; resize: none;"></textarea></div>',this._id));
a=this._selectMeasurementsList();for(var b="",c=0;c<this._datasourceGroupMeasurements.length;++c){var d=this._datasourceGroupMeasurements[c],e="";d.isComputed()&&(e='<button id="delete-button-%2$s-%3$s" data-measurement="%2$s">Delete %2$s</button>');b+=sprintf('<div style="min-height: 30px; padding: 2px;"><div style="margin: 6px; float: left;">%1$s {<b>%2$s</b>}</div><div style="float: right;">'+e+'<button style="" id="measurement-button-%2$s-%3$s" data-measurement="%2$s">Insert %2$s</button></div></div>',
d.name(),c,this._id)}a.append(b);for(var f=this,c=0;c<this._datasourceGroupMeasurements.length;++c)d=this._datasourceGroupMeasurements[c],d.isComputed()&&$("#delete-button-"+c+"-"+this._id).button(this._deleteButtonsProperties).click(function(){f._deleteButtonClick($(this))}),$("#measurement-button-"+c+"-"+this._id).button(this._addButtonProperties).click(function(){f._addButtonClick($(this))});this._selectIdTextBox().watermark("[auto]");this._selectNameTextBox().watermark("[auto]");this._selectMinTextBox().watermark("[auto]");
this._selectMaxTextBox().watermark("[auto]");this._selectExpressionTextBox().watermark("[expression; for example: {0} - {1}]")}};epiviz.ui.controls.ComputedMeasurementsDialog.prototype._selectDialog=function(){this._dialog||(this._dialog=$("#"+this._id));return this._dialog};epiviz.ui.controls.ComputedMeasurementsDialog.prototype._selectExpressionTextBox=function(){this._expressionTextBox||(this._expressionTextBox=$("#computed-measurement-expr-"+this._id));return this._expressionTextBox};
epiviz.ui.controls.ComputedMeasurementsDialog.prototype._selectIdTextBox=function(){this._idTextBox||(this._idTextBox=$("#computed-measurement-key-"+this._id));return this._idTextBox};epiviz.ui.controls.ComputedMeasurementsDialog.prototype._selectNameTextBox=function(){this._nameTextBox||(this._nameTextBox=$("#computed-measurement-name-"+this._id));return this._nameTextBox};
epiviz.ui.controls.ComputedMeasurementsDialog.prototype._selectMinTextBox=function(){this._minTextBox||(this._minTextBox=$("#computed-measurement-min-"+this._id));return this._minTextBox};epiviz.ui.controls.ComputedMeasurementsDialog.prototype._selectMaxTextBox=function(){this._maxTextBox||(this._maxTextBox=$("#computed-measurement-max-"+this._id));return this._maxTextBox};
epiviz.ui.controls.ComputedMeasurementsDialog.prototype._selectTabs=function(){this._tabs||(this._tabs=this._dialog.find(".computed-measurements-tabs"));return this._tabs};epiviz.ui.controls.ComputedMeasurementsDialog.prototype._selectMeasurementsList=function(){this._measurementsList||(this._measurementsList=$("#computed-measurement-measurements-"+this._id));return this._measurementsList};epiviz.ui.tutorials=function(){this._tutorialList=[{name:"Metaviz Overview",id:"tut_epiviz_overview",tutorial:[{target:"body",content:"<p class='intro-header'>Welcome to Metaviz Genomic Browser!<br></p><p class='intro-text'>This tutorial will walk you through the functionality available in Metaviz.</p>",position:"center"},{target:"#intro-navigation",content:"<p class='intro-text'>The navigation section of Metaviz lets you select a chromosome and explore the genome. Options are available to move left/right and zoom in/out.</p><p class='intro-text'>The settings icon allows you to control the navigation parameters.</p>",
position:"right",buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:"#vis-menu-button",content:'<p class="intro-text">Choose from a list of available data sources, measurements or chart types to add visualizations to the Metaviz Workspace.</p>',position:"right",buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:"#intro-workspace",content:'<p class="intro-header">managing workspaces.</p><p class="intro-text">If you are logged in, you will be able to save your Metaviz analysis and workspaces.You will also be able to retrieve them at a later time from your account.</p>',
position:"right",buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:"#login-link",content:'<p class="intro-text">Please login to save and manage Metaviz workspaces.</p>',position:"left",buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:"body",content:'<p class=\'intro-header\'>Thank you for using Metaviz!</p><p class="intro-text">If you would like to give us some feedback or stay informed with updates, Please visit the <a target="_blank" href="http://epiviz.github.io/">Metaviz webpage</a>.</p>',
position:"center"}]},{name:"Data Visualization and Controls",id:"tut_data_controls",tutorial:[{target:"body",content:"<p class='intro-header'>Welcome to Metaviz Genomic Browser!<br><br>Data visualization tutorial<br></p><p class='intro-text'>This tutorial will help create/add new data visualizations to the Metaviz workspace and controls available for each visualization.</p>",position:"center"},{target:"#vis-menu-button",content:'<p class="intro-text">The Data Visualizations button helps users add new charts to the workspace.</p><p>Users have the option to choose data sources and measurements to add to the workspace.</p>',
position:"right",onHide:function(a,b,c,d){$("#vis-menu-button").button().trigger("click")},showOverlay:function(){},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:"#vis-menu",content:'<p class="intro-text">Choose the type of chart to add to your workspace. We choose scatter plot to continue with the tutorial</p>',position:"right",onShow:function(a,b,c){$(".anno-overlay").zIndex(0)},onHide:function(a,b,c,d){$("#plot-menu-add-scatter").trigger("click")},showOverlay:function(){},buttons:[AnnoButton.BackButton,
AnnoButton.NextButton]},{target:function(){var a=$("#wizardDialog").parent().attr("id");return $("#"+a).parent()},content:'<p class="intro-text">This window lets you choose form a list of data sources and the measurements available from each data source to add to your Epiviz workspace</p><p>We selected the first data source in the table or choose a data source from the list.</p>',showOverlay:function(){},onShow:function(a,b,c){$("#wizardDialog table tbody tr:first").trigger("click")},onHide:function(a,
b,c,d){$('.ui-button:contains("Next")').trigger("click")},position:"right",buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:function(){var a=$("#wizardDialog").parent().attr("id");return $("#"+a).parent()},content:'<p class="intro-text">After choosing a data source, the next tab lists all the measurements (or features) available from this data source. If you have any computed measurements for this data source, they will be added to this list.</p><p>To add a plot to the workspace, pick a few measurements and select finish on this window. </p>',
showOverlay:function(){},position:"right",onShow:function(a,b,c){$("#wizardDialog table tbody tr:eq(1)").toggleClass("DTTT_selected");$("#wizardDialog table tbody tr:eq(2)").toggleClass("DTTT_selected");$("#wisardDialog table tbdoy tr:eq(3)").toggleClass("DTTT_selected")},onHide:function(a,b,c,d){$("#wizardDialog").parent().attr("id");$('.ui-button:contains("Finish")').trigger("click")},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:"#feature-view",content:'<p class="intro-text">Visualizations are added to the workspace based on the type of chart. </p><p>Brushing is implemented on all the plots. When you hover over a data point, it highlight that region in the gene on all the visualizations.</p>',
position:{top:"24em",left:"14em"},showOverlay:function(){},onShow:function(a,b,c){$(".anno-inner").zIndex(1E3);$(".anno-overlay").zIndex(1)},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:function(){return $('button:contains("Remove"):first')},content:'<p class="intro-text">Removes the plot from the workspace</p>',position:"left",showOverlay:function(){},className:"anno-width-175",onShow:function(a,b,c){$('button:contains("Save"):eq(1)').css("display","block")},onHide:function(a,b,
c,d){$(b).css("display","none")},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:function(){return $('button:contains("Save"):eq(1)')},content:'<p class="intro-text">Save a plot to your local machine (image, pdf)</p>',position:"left",showOverlay:function(){},className:"anno-width-175",onShow:function(a,b,c){$('button:contains("Custom settings"):first').css("display","inline-block")},onHide:function(a,b,c,d){$(b).css("display","none")},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},
{target:function(){return $('button:contains("Custom settings"):first')},content:'<p class="intro-text">Change chart display properties and aggregation methods for grouping.</p>',position:"left",showOverlay:function(){},className:"anno-width-175",onShow:function(a,b,c){$('button:contains("Code"):first').css("display","inline-block")},onHide:function(a,b,c,d){$(b).css("display","none")},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:function(){return $('button:contains("Code"):first')},
content:'<p class="intro-text">Edit code to redraw the chart on the workspace.</p>',position:"left",showOverlay:function(){},className:"anno-width-175",onShow:function(a,b,c){$('button:contains("Colors"):first').css("display","inline-block")},onHide:function(a,b,c,d){$(b).css("display","none")},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:function(){return $('button:contains("Colors"):first')},content:'<p class="intro-text">Choose colors for data points on the plot</p>',position:"left",
showOverlay:function(){},className:"anno-width-175",onShow:function(a,b,c){$('label:contains("Toggle tooltip"):first').css("display","block")},onHide:function(a,b,c,d){$(b).css("display","none")},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:function(){return $('label:contains("Toggle tooltip"):first')},content:'<p class="intro-text">Toggle tooltips for data points</p>',position:"right",showOverlay:function(){},className:"anno-width-175",onHide:function(a,b,c,d){$(b).css("display",
"none")},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:"body",content:'<p class=\'intro-header\'>Thank you for using Metaviz!</p><p class="intro-text">If you would like to give us some feedback or stay informed with updates, Please visit the <a target="_blank" href="http://epiviz.github.io/">Epiviz webpage</a>.</p>',position:"center"}]},{name:"Computed Measurements",id:"tut_comp_measurements",tutorial:[{target:"body",content:"<p class='intro-header'>Welcome to Metaviz Genomic Browser!<br>Compute Measurements Tutorial<br></p><p class='intro-text'>This tutorial will help you create new measurements (derived from existing measurements) and generate plots to add to the workspace.</p>",
position:"center"},{target:"#computed-measurements-button",content:"<p class='intro-text'>The computed measurements button helps users add new measurements to data sources</p>",position:"right",onShow:function(a,b,c){$("#computed-measurements-button").button().trigger("click")},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:"#computedMeasurementsDialog",content:"<p class='intro-text'>This tab lets you choose a data source where you will create a new measurement.</p><p>We choose the first data source in the list or choose any data source.</p>",
position:{top:"20em",left:"1em"},showOverlay:function(){},onShow:function(a,b,c){$("#computedMeasurementsDialog table tbody tr td:first").trigger("click")},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:"#computedMeasurementsDialog",content:"<p class='intro-text'>The measurements tab lists all available measurements from the selected data source (including previously created computed measurements).</p><p>Use the buttons next to each measurement to add to the expression window</p>",
position:{top:"20em",left:"1em"},showOverlay:function(){},onShow:function(a,b,c){$('.ui-button:contains("Next")').trigger("click")},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:"#computedMeasurementsDialog",content:"<p class='intro-text'> After choosing measurements, use mathematical operators to evaluate the expression.</p><p><a target='_blank' href='https://silentmatt.com/javascript-expression-evaluator/'>supported operators</a> </p>",position:{top:"33em",left:"1em"},showOverlay:function(){},
buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:"#computedMeasurementsDialog",content:"<p class='intro-text'>After adding a computed measurement, use the data visualization button to plot the measurement to your workspace.</p><p>To learn how to add new plots to the workspace, please use the Metaviz data visualization tutorial.</p>",position:{top:"10em",left:"1em"},showOverlay:function(){},onHide:function(a,b,c,d){a=$("#computedMeasurementsDialog").parent().attr("id");$("#"+a).dialog("close")},
buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:"body",content:'<p class=\'intro-header\'>Thank you for using Metaviz!</p><p class="intro-text">If you would like to give us some feedback or stay informed with updates, Please visit the <a target="_blank" href="http://epiviz.github.io/">Metaviz webpage</a>.</p>',position:"center"}]}]};epiviz.ui.PrintManager=function(a,b,c,d){this._containerId=a?a:"pagemain";this._fName=b?b:"metaviz_"+Math.floor($.now()/1E3);this._fType=c?c:"pdf";this._workspaceId=d};
epiviz.ui.PrintManager.prototype.print=function(){function a(a){$(a).find(".domain").each(function(){$(this).css({fill:"none","stroke-width":"1px",stroke:"#000000","shape-rendering":"crispEdges"})});$(a).find(".gene-name").each(function(){$(this).remove()});epiviz.utils.stringContains($(a).attr("id"),"track-lines")&&$(a).find(".lines path").each(function(){$(this).css({fill:"none"})});$(a).find("text").each(function(){$(this).css({"font-size":"11px"})});$(a).find(".chart-legend").each(function(){$(this).css({border:"none",
background:"transparent"})});$(a).find(".row-legend").each(function(){$(this).attr("x","-50");$(this).css({"font-size":"11px"})})}var b=this,c=$("#"+b._containerId),d=c.find("svg");d.each(function(){var b,c;b=document.createElement("canvas");b.className="tempCanvas";a(this);c=(new XMLSerializer).serializeToString(this);c=c.replace(/xmlns=\"http:\/\/www\.w3\.org\/2000\/svg\"/,"");canvg(b,c,{useCORS:!0,renderCallback:function(){$(b).insertAfter(this);$(this).hide()}})});html2canvas(c,{timeout:0,width:c[0].scrollWidth+
200,height:c[0].scrollHeight+200,useCORS:!0}).then(function(a){var e=a.getContext("2d");e.mozImageSmoothingEnabled=!1;e.imageSmoothingEnabled=!1;var e=b._fName+"."+b._fType,g=b._fType,h=a.toDataURL("image/png");"pdf"==g?(a=new jsPDF("l","px",[.6*(1400<c[0].scrollWidth?c[0].scrollWidth:1400),.65*(1E3<c[0].scrollHeight?c[0].scrollHeight:1E3)]),g="http://metaviz.cbcb.umd.edu/?ws="+b._workspaceId,a.addImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAAyCAYAAACtfjXHAAAVX0lEQVR4nO1de5QU1Zn/db27errnxVMcHAaF+AxmiKLBRN3Bo+7RELOAB4OS1YVN9piHyQmY1SSuiYKJa8IxcSFZwyZRw2BO3NWsCeJj1SO7hEHFVzAwIIg4wsz0dE/XVHU9ev+oLqem+lZ3VVd1z6j1O6fOzNS9db9bNfd+93vd78balm/BREWit1tgWk8/T2cbLlDZxnlGjJ1tUPRkytAnq0yCYXUpb1DsAGWoBwHspoz8U/zgq9szUxYOjXffAXQAWAdgSfHv7QDWAugJmc46AGuKv/cUaWwPmUaEDykOPbC0qudiE41xJHq7Of3Erit1ir3aoLjLdIoX/TxPG3kNMLaxWu5+Lv3GI5kpC/Va9bUC9sNkHnYMApgPoDckGk8A6CLcn4/wGVSEDyGqZRxUyP2oGo3pPZN4LXu73L74sMy1bFWZ5Of9Mg0A0CmO0SnhcplrfTg36ZN/FdTBf0y99zxXiz6XwRqUMg0AaAawMSQaq0BmGoAphUSIUDNQydyBk8e5Dw2sLt0x3HjqAYVJ3qJT3JSwGtYpfpbMNt+Xa+3cK+QHqmOt1WFJmbIumAwkKFbVgUaECERQknjia7w29MPG9J6GehPn1cwywNir0uLNeowl0qcNuY/Vhp9mtez9rJa7W8j3387q0l2sLm2iDfkxFPSDlejodLxd5lq2sFruqcTIkTmhv0gpSNKGHeUmvdf2OyvUcZNGIkx8rANQALALE3QBoPQYyylM4zeHU3P3NEiHLq4H0Qbp8CRWy3UrbOq3AHWCvYw28mley/yGLqgrEvLRWTolTFOZhotVJnm9yiS+KXOt31FpcY1Ki6t1SrgCMXpWQj46nTbyqwHjccBQ3eiqTOIimZ/8UnJ439rDDy6ja/R6Haj8zw46qctJNPZ+TER0wJwU9mtN2Sc+erAWlk4EX2RqgvdtHDrFzxqOz3hCyA/c0Zjew9SKoKj0XTYiTHlFZRK2wW8YvJb9E6+mP8e++eA0hUmt0GPsb3LC9INe2swJ09/VKW4TQF2eGni5ndZHbqON/HukujrFxbMNJ9859/Mbnm489sJJobzUWHiZsEFVCS+MZ6IyjgiVsan4s8f2+4TCWONojKZkruXm4eQpzyZGjrSFSSjR280I+YF1EjfpDzrFTzPvGnley9wvKsdPVZjkpQrb9Ij8sZVKEDqZlrPf0en493h1sJ3XMl8DjHdJ9SR+6gVSy7yXROXYlUHoEUBSIbYS7lW7kjSjlHGQ2o8YxwcXawHEYHrHBse5L0QQvSo6HT9P5if/WZTf/VQYRJLD+6fIJ13xlMy1rEGMjgEGROXY75PZ/acrTOp6iZ/yZhh07JD4qSMKk/qJkE+fAuAHKOglDEmlxSaJa3kkIR/9QYiqC0mSIK0a1aorJIbTg1L3ayUbSIQIVcPVHatT3FRJmPKkkB+4PgiBhHx0niSe+Gedjl9g3jFeTMh9F0n85KuyyVP2BWnbC2SuZRjALYI6dAZtKNtKKsToWE6Y/u25V214tOGtR5IhkCSt9D0olQqqVVdIDGcTSmNDmqtsP0KEiqAA5MsU8zLX9Atey9x++MFlMb+NC/n+q2R+0vM6xc9EQZd5LXsTQM3PCdOfqb7L1UHmWvYd/O21lxaNqFlnuSRMvUydcfELjcd3zgpIyrnSDxYvUkCWX3WFpKZsL7ZPCiqL1JUINQGVzB04nS6oW2Bat0lVoDCpWzqW/fL+1JFtrJdGDz+4LMZqw7fIbNPDeoxN0EZ+l6AOdipM8h4ARnjd94e25VsKOsVtonXl47Q+ssNZrjCpM4ZbztohqINBxHznZLUYRhjqCsmbYoWXk3ThoOpKF0yPxy6UekJ2Fcsmott3TfFy9rkAoBvuAXoRPILKJmbt02Ps1byaXkgb8ituFVVaXDkybeEjjcd3lo3mTB3Zxp68ZON/qEzD7YjFQBvKnTrFnSdzk14Pv/vVQafjB4S3Hv00q0t3wsHIdEqYqjINTwv5/r+pomnSRLUkgUGU7iHxq664qSkAWaKpVlVZBTNk/gmYMQWk9+oslj1RrOvFRewGK27B7fLirm22tbMO7tGzS4pl1vt5Za4W89zlsX4lNAMYAPn9rPfoLvNsue9V7hog0PON920cCtv0QuLos528NnQzCrpMqqzS4uXDzWc+nsq8kSKVNw7sToxM/dR/KmzTCgBpVpcX6xT/bQBa0I6GjVzHUk2lxW8L+f7FtJHP2Mv0GJtU2dR/C/kBv5OBtIrZVQjS5jOvNJoJdS01xUmnXH8q0XgCZli8n2c7YA7yboyPXaULJiPwOyG6YDICLyH664s/OxGO4XkVzG81iPq6XC0GG0hSHGMczcy4RFWYxnWCmv4kbSgvkx7Q6finc4n2pxqkw5Ps91OZv7RKjR97UmUSl9GGspfXsueotPhfQTpXD8hc66MNQ68v4LXsXvt9PcZyMtv4EK8NfcFHc5UYRxB1pZyaYtFxqit+BngnzEkUZEAtgcl46qkGrCrSDMKw1hTbKIetGP1fBpGuLFj2LTvz94pBmO7aai5LMg3E/IheFZlrfbVh8JVzeS2zgWSS0Ol454gw+VlR7jsBABIj70zNNbQ/o9LiuawuPSuOvHO+wiT/GqRj9cRQ87w3+L4d5/Ja5g9jCmI0rTCNm3k17dWzVIlxkIykS+Bt0JMmtNNT45Q6vE5gS2Ig1d8EYCnGDr4WmLEGJCmnE/WTPJbAfdPgegCLUDpx3NIOdMFdNbBgfe+gjKMLo9+aFINTK3Ta6AZKveDqjh1qna8oTOqrQj59NQr6sLNcp4RTFa75eVHumx0rqBqAAq9lHxLTr1+STcwaCNKp8UBmxiVDzKE/Xslq2TsczJJWmOTPeTX9JQ/NVGIcAHmgVBqIJG9KD6Htal2yJKbRAzMAaTVK+zwIc2LOxqgIb0cn/O0CtgKe3C4SjQ4XGtsxythIk8NiKEtRutIvQXl1x/oOHQjGPKxne1E/xmEtDs1FmoHSLlTcVi9zLVtE5dgC2pDfcpbpFDdL4ZqeU9nGaYnju87e133DNUOt8wNFfo4nch1LDZVJ/nNC7rvezOtRRIyOKWzTT3k1fWOFJpziH0l9IA2USuoByYhKasdNAiiHNYQ62+E9p8dakCf2EtR2n8VGlH6TTTCZghfRf6tL3XVwl9TsgXZhMI562jasxaEH5mIQCJ7ycUjCtNfEkaMLaEPZ6SzTKX66RovP5ps+1tm2fIuLS/eDhZww/X5ROnwFbch2SSumsKkNvJq+2eUx0upOmsi98K+ukAapV8ZRTl1pRukK2wtzNfYCaxVzW6VrtXmtE2QJzO+EcHvGi9SxBNXZciyjqL2tWsPyHln/28Bh7J4T+WQTs94Vc29dxOrSY84yneJaVCb1pJDvr8vu2nog2zD7jw1Df/kMq2Vte10oKGzTHbya/hEhIM6LmmLBj7riVU1xo1ducNsHsYW1qDywrIRE5dyw1upfC1sHiWa1+Va2olSlKcfI12P0+1QjddhTSYaVCa4cLA/KIMxvFApNXxnAssk5kpjd9zm6oD7gLNMprsF0YfZ/NoyOTQQMNc/bLfa/dB6vZt6w31fYpm+0L9v8UCrzRtx2u1wMhxNuxjkSvKopbvTKMQ7nwPeic6+BGQvgpoZYas5qkFW1MECKng0yIZwqA4lZ22F9I7+qWIet3XpIG6swKj2Fmu/Wd+rAoaazNGrPfdexWnazs0yPsbzKpn4n5I9fG0rvxgGJkbdTrJbbxmvZLezLG+ihqRcc5I/tXMir6efs9XQ6vmwkcdL/iMqxmcVbpBXKbTCTNqW5BYORBrCbRZw0UcsxDiezKzeYV8FkGG4xDz0wJYxFqG2+02aQbTJBQHq+3HezG0n9uK/tRtFa2ze6MGo8Xhs2vapyjqof/4quMsm/57Whf3OW6TGWltnmzayWvSl49+oLXhuaKfNTnleZxCID1HSxbaEAAJkTugaYw9suEfIDYyaWSouflPjJu3ktsxj+VBWgdJK6rXJOqYDEdMrRdDOOum3GI9HfD7Ix0qK3GqaUUY/s6n6/sxeQ3OTlGIddwvGjrlgSSq2lDcv2BJgMg2S8DoQgyYoL+7pXfZnXMj8uKYnRMZVJ3s1r2XvZlzfUKtNWqBDyx8/RaPH/dIo7k9Vyj4vp1y4davlEzirPdSyV//rwl64WlffucbhrW1Ew1sOfqgJ4iyIl6dqVBp1XdYV0zy6tdME0qrnFdwzCXMlmo/6Rj6S+BIUfSQ0YfWevjMNuTK0l42jGqNt1O0LwoJAQKNNX2/ItBQX4Oq+mhxU2dYuTDylM8p/YM25oE/ID1xS3t09I8FrmOpmbdB+AOK9lf8337bh+aMYlJSkI25ZvMSTgJlF+96DET/5XxGgaADRaOBlAxlG9kn5vSQ52hmOpK4O2v52otKr3oHQwWxZ1L3CeB0PCephM46OMTTDtB80wJYlKzNP6npUkxqDohvn/tlTH9/HA/95eUvm52SX3VgKwZ8a7rXhvs71SKMcjKGzTrUI+fSNglJxhotLilSrTsENU+sY7m3oJEvJRgdWljQqT2gwgLirH7t7XfcN1GQLTsEMSpm0Q88eXoKBLAKBTAgWgyVHNy0StpK6QjJeVBh2JWXkV75uL991W200YDa5yg7UZbI3tChOk9xuP/TH2TYt+AvhqKW1sLNLx41K3Yx6AXwL4XvFqhzmu73FWDO1cFZlruVfID1xNF9SSDXI6xZ2hsM1/FvIDl4VFLygapEPzZbapR6XFVXRB1YX8wI0SP/mbXmNRJH7q73ktexEKOjG3KbwxjnLqih9vSiW6Xg23lvTjZAxbMeopKSdF2Q2X1g7VMPZ12FFNkFutYP0/uir0oR4b2tYU6QRxu9oZRBrA1wF8FaWLYrgHMsncpIcF5fjFtJEvyfOpU1yTzLU8xurSjxr7d/Fh0vWDZPZNVlAHbxuJT9+h0/HTaCOfEeT3rpC5lnv9tqWwTTtpI7+ALmikvKZe/nGkeAyLYXjZm+LWphNug5oUiAaYDG1T8acVnu1FvK60Ec8NfiQGkiFzvHKCeN34ZpVtRW3c01aqAMBk7tWoQhcWLwuW7fJrpMqhn+SWE6bv4NWhc1hdeolET6XFbww3n7FTyB8/PWzalSAqfZ+REu0vymzzd/QYy9CG/GZc6VuQi894vNo2dTp+QI9RpHM0vXJ8N3XFGSPgRU0BRjOO2eGmejhp2/dgrIbJNPx4SkhqifN5rxJROTj7TYokrRcqbXyzb8OvhZpi37OzNgCNX9p+PwjgJzAlkBJpA6jREZASP/mwIL39KVaXNpPKdUo4S+Ym7Wa13Pp6HASVGDkyh9Wl30n81Kd1ijsdAHgt+4eGzJvnDsfb3qj0fGWMPRumiGoZB2CuHtWoKW603c562QTyXo1qbAakrFq9IDMeJ02/k570LdzcxbWGpXq4bXyzx26E7a628qc0I5jbdSVMe4aF22AyjJVuD9Ts7Nhsco6k0uIXhXz/P9AFdYRQhVOZxLeGU3P/wmvZLyR6u0M/yyUx8vZprJb9VS4+/TWVFq8CEKMLqibkj6/d133DFUNNZ6VDIhUktoCkrpDa88M4SJKJm0vVOdjsMQBe0QVyYJibEZX0vn6YBymAqpp+hwE7QyjHOGph27Bc5UHcrk7j50swPSjt5R6q+aHTMtf6C1F6ez5tyLtJ5TrFz1CY5K/l9sV7eTX95cb0HiEIvURvNyfk+z/ParltufgJr6pMcgVAMQBAG8pBQX7vIpmbtD7kDXkOG4JxKLbrrjJJoEtQiSm4JTt2g5/Q8/WEtq3MWF6MjlYiHSe2wv293CQGP5vGSPlArH57bcduGwgCu5HULvWsKvalFkZRy4NS4nb1Cafx8+teHqrLafXZxKzXxdyhBbya/j5dUIkTSqe4DoVt+ulwau5RUXnvV8nh/Vcmers9MZHGYy9MF/L9y3gt8yu5fXGfzLU+rDKJRQBV3IhmgNWlf08M9348F5/xfHhvBoA4SKk3C/O/lSu974pKIqzfQefVJWuBZIW3MoJtROlKau2qtcqdsKJJ3eB2gNR+eE9rZ3kPnOjEaKQraS+JlYB5P0ZjHoLCUvmsmA4LdmNzmEZRy4PSi2BMowljjZ/PFK+KqNlRj05kk3NUALcmRo5syXPNG1VaPJ9UT6f4JomfsgL8lBW0eGKe14ZeB/BKzNDfAQppoFAoxBhRo8UmwJgDUHOHJp07CzFygCpt5A/wavorEj/lMTV1qqe+HnrAuwt85jXdpIHn16ptDSw3Hd2vbuxVVbFgDUBS2r9V8LeZy2qr3ETphSkxkFZ7UuyHW84Pa7UlSTxWn/0kFAqCrUWaS2D2tVYb2iymPQjvuUfc4DR+ftHrg3VjHBZy8RmvHn5w2cJT/u5nV6tMYp1OCTPd6uoUz+kUPw9mYIov0EY+QxW0H8b7d9+dmbKQZGMJC5VCt71iPcgTqRqjWjWxDr0wYzW6Ub2HYju853tYD3I+kGpozofJIMbz9LpNMBlHJ0zmYfUl7Cxf1jaEXgTbo9OOscbPzTC9KZ5QF1XFibblWwoy1/pQw+Crc3ht6EZaHzkSVtusLh3jtey/iNLb7Sotfr/GTAPwtyu2HEinsQHVhXb7cck6n7PiNvy8g6Wa+F0B11ZBiwQrzWE13yqsnBg9GGXw9uRGYds2rP52wOfRCNcsuPX96/DUkw7Y2rSCvTxjXBiHBTOvaeO91Ks/70gO718h5Ad2oFAStV4ZBV0X8v1PJrN7r9Vf+lmbwiS/m23oqNdhvaTVuZrBaOnsPY6/q12tnOqKnyMht8LcvLYI7nkceoplixBso5uTVpDVeT3MHKWr4Z6QyNqctxZm+HyYm8CWYqx0uB7h70zdDm/JllzRJfeirW9MJtAfw2QenhFrW06KXRo/NEiH5o4I0z6LWOxvAZyvx1iiOkUb+eOUkX+SgvEnbuTdP2aTc46G1Qc/No4IET4oeG72mdavL2JU/T8I4GyUMo4LATxt+3tMxru62zgqYVicuRfAXQDuSh56NG5M/sRphRh9ms6ITSgYlEFxR1DQ9/R237CvbfkWAwCUJPF8qAgRIpRiJcbaDG+DT2kDmICMw47szCtG4LINeaJJShEifEDwXdvvVrCXb0xoxhEhQoRQsRhjI0IPYiwjsaPd8feYerFC4UNxokGECBEq4LnZZ34XZp6NwBhXr0qECBHqipJD1apFpKpEiPDRwWaYkaJejjBpwlgj6jP2wkhViRDhIwKbO9YLLkQZd2ykqkSIEME3IsYRIUIE34gYR4QIEXwjYhwRIkTwjcirEiFCBBLSKJPU5/8B11FP6b8S6U4AAAAASUVORK5CYII=",
"PNG",20,20,100,21),a.setFontSize(10),a.setTextColor(0,0,0),a.setFontSize(10),null!=b._workspaceId&&(a.text(350,25,"Workspace ID"),a.setTextColor(0,0,255),a.setFontSize(16),a.text(350,45,g)),a.addImage(h,"PNG",15,55),a.save(e)):(navigator.msSaveBlob?(h=a.msToBlob(),a=new Blob([h],{type:"image/png"}),navigator.msSaveBlob(a,e)):(a=new Blob([h],{type:"image/png"}),g=document.createElement("a"),void 0!==g.download?(URL.createObjectURL(a),g.setAttribute("href",h),g.setAttribute("download",e),g.style="visibility:hidden",
g.setAttribute("target","_blank"),document.body.appendChild(g),g.click(),document.body.removeChild(g)):(e=h.replace("image/png","image/octet-stream"),window.open(e))),c.find(".tempCanvas").remove(),d.each(function(){$(this).show()}))})};epiviz.ui.ControlManager=function(a,b,c,d,e,f){this._config=a;this._chartFactory=b;this._chartManager=c;this._measurementsManager=d;this._locationManager=e;this._workspaceManager=f;this._addChart=new epiviz.events.Event;this._activeWorkspaceChanged=new epiviz.events.Event;this._saveWorkspace=new epiviz.events.Event;this._deleteActiveWorkspace=new epiviz.events.Event;this._revertActiveWorkspace=new epiviz.events.Event;this._loginLinkClicked=new epiviz.events.Event;this._searchWorkspaces=new epiviz.events.Event;
this._search=new epiviz.events.Event;this._activeWorkspaceInfo=null;this._stepRatio=a.navigationStepRatio;this._zoominRatio=a.zoominRatio;this._zoomoutRatio=a.zoomoutRatio};epiviz.ui.ControlManager.CHART_TYPE_CONTAINERS={plot:"feature-view",track:"location-view","data-structure":"data-structure-view"};epiviz.ui.ControlManager.DISPLAY_TYPE_LABELS={plot:"Feature",track:"Location","data-structure":"Data Structure"};
epiviz.ui.ControlManager.prototype.initialize=function(){this._initializeChromosomeSelector();this._initializeLocationTextbox();this._initializeNavigationButtons();this._initializeZoomButtons();this._initializeLocationSettingsDialog();this._initializeChartMenus();this._initializeComputedMeasurementsMenu();this._initializeHelpButton();this._initializeSearchBox();this._initializeWorkspaceSaving();this._initializeTutorials();this._initializeScreenshotMenu();this._initializeManifestUploadMenu();this._initializeLoginLink();
this._initializeLayout();this._checkBrowserCompatibility();this._registerLocationChanged();this._registerSeqInfosUpdated()};epiviz.ui.ControlManager.prototype.onAddChart=function(){return this._addChart};epiviz.ui.ControlManager.prototype.onActiveWorkspaceChanged=function(){return this._activeWorkspaceChanged};epiviz.ui.ControlManager.prototype.onSaveWorkspace=function(){return this._saveWorkspace};epiviz.ui.ControlManager.prototype.onDeleteActiveWorkspace=function(){return this._deleteActiveWorkspace};
epiviz.ui.ControlManager.prototype.onRevertActiveWorkspace=function(){return this._revertActiveWorkspace};epiviz.ui.ControlManager.prototype.onLoginLinkClicked=function(){return this._loginLinkClicked};epiviz.ui.ControlManager.prototype.onSearchWorkspaces=function(){return this._searchWorkspaces};epiviz.ui.ControlManager.prototype.onSearch=function(){return this._search};
epiviz.ui.ControlManager.prototype._updateSeqNames=function(a){var b=$("#chromosome-selector");b.empty();for(var c=0;c<a.length;++c){var d=sprintf('<option value="%s"%s>%s</option>',a[c].seqName,this._locationManager.currentLocation()&&a[c].seqName==this._locationManager.currentLocation().seqName()?'selected="selected"':"",a[c].seqName);b.append(d)}b.selectmenu()};
epiviz.ui.ControlManager.prototype._updateSelectedLocation=function(a){if(a){this._locationManager.changeCurrentLocation(a);a=this._locationManager.currentLocation();$("#text-location").val(Globalize.format(a.start(),"n0")+" - "+Globalize.format(a.end(),"n0"));var b=$("#chromosome-selector");b.val(a.seqName());b.selectmenu()}};
epiviz.ui.ControlManager.prototype.updateSelectedWorkspace=function(a){var b=this,c=$("#save-workspace-text"),d=this._activeWorkspaceInfo;c.val(a.name);this._activeWorkspaceInfo=a;this._activeWorkspaceChanged.notify({oldValue:d,newValue:a,cancel:function(){c.val(d.name);b._activeWorkspaceInfo=d}})};
epiviz.ui.ControlManager.prototype._initializeChromosomeSelector=function(){var a=$("#chromosome-selector");a.selectmenu({style:"popup",width:"90",maxHeight:"100",menuWidth:"90"});var b=this;a.change(function(){var a=b._locationManager.lastUnfilledLocationChangeRequest()||b._locationManager.currentLocation(),d=$(this).val();b._updateSelectedLocation(new epiviz.datatypes.GenomicRange(d,a.start(),a.width()))})};
epiviz.ui.ControlManager.prototype._initializeLocationTextbox=function(){var a=this;$("#text-location").keypress(function(b){if(13!=b.which)return!0;try{var c=$(this).val().split("-"),d=Globalize.parseInt(c[0]),e=Globalize.parseInt(c[1]),f=a._locationManager.lastUnfilledLocationChangeRequest()||a._locationManager.currentLocation();a._updateSelectedLocation(epiviz.datatypes.GenomicRange.fromStartEnd(f.seqName(),d,e));return!0}catch(g){return!1}})};
epiviz.ui.ControlManager.prototype._initializeNavigationButtons=function(){var a=this;$("#moveright").button({icons:{primary:"ui-icon ui-icon-seek-next"},text:!1}).click(function(){var b=a._locationManager.lastUnfilledLocationChangeRequest()||a._locationManager.currentLocation(),c=b.start()+Math.round(b.width()*a._stepRatio);a._updateSelectedLocation(new epiviz.datatypes.GenomicRange(b.seqName(),c,b.width()))});$("#moveleft").button({icons:{primary:"ui-icon ui-icon-seek-prev"},text:!1}).click(function(){var b=
a._locationManager.lastUnfilledLocationChangeRequest()||a._locationManager.currentLocation(),c=b.start()-Math.round(b.width()*a._stepRatio);a._updateSelectedLocation(new epiviz.datatypes.GenomicRange(b.seqName(),c,b.width()))})};
epiviz.ui.ControlManager.prototype._initializeZoomButtons=function(){var a=this,b=$("#zoomin");b.button({icons:{primary:"ui-icon ui-icon-zoomin"},text:!1});var c=$("#zoomout");c.button({icons:{primary:"ui-icon ui-icon-zoomout"},text:!1});var d=function(b){var c=a._locationManager.lastUnfilledLocationChangeRequest()||a._locationManager.currentLocation(),d=c.start()+.5*c.width();b=Math.round(c.width()*b);d=Math.round(d-.5*b);a._updateSelectedLocation(new epiviz.datatypes.GenomicRange(c.seqName(),d,
b))};b.click(function(){d(a._zoominRatio)});c.click(function(){d(a._zoomoutRatio)})};
epiviz.ui.ControlManager.prototype._initializeLocationSettingsDialog=function(){var a=this;$("#location-settings").button({text:!1,icons:{primary:"ui-icon ui-icon-gear"}}).click(function(){$("#location-settings-dialog").dialog("open")});$("#location-settings-dialog").dialog({autoOpen:!1,resizable:!1,width:"300",buttons:{Ok:function(){a._zoominRatio=$("#zoomin-ratio-text").val();a._zoomoutRatio=$("#zoomout-ratio-text").val();a._stepRatio=$("#navigation-step-ratio-text").val();$(this).dialog("close")},
Cancel:function(){$("#zoomin-ratio-text").val(Globalize.format(a._zoominRatio,"n3"));$("#zoomout-ratio-text").val(Globalize.format(a._zoomoutRatio,"n3"));$("#navigation-step-ratio-text").val(Globalize.format(a._stepRatio,"n6"));$(this).dialog("close")}},modal:!0});$("#zoomout-ratio-text").spinner({min:1.001,max:1E3,step:.001,start:1.2,numberFormat:"n3"}).val(a._zoomoutRatio);$("#zoomin-ratio-text").spinner({min:.001,max:.999,step:.01,start:.8,numberFormat:"n3"}).val(a._zoominRatio);$("#navigation-step-ratio-text").spinner({min:1E-6,
max:1,step:1E-6,start:.2,numberFormat:"n6"}).val(a._stepRatio)};
epiviz.ui.ControlManager.prototype._initializeChartMenus=function(){var a=this,b=$("#vis-menu");$("#vis-menu-button").button({label:"Add Visualization",icons:{primary:"ui-icon ui-icon-scatterplot",secondary:"ui-icon-triangle-1-s"},iconPosition:{iconPositon:"end"}}).click(function(){var a=b.is(":visible");$(".dropdown-menu").find(">:first-child").hide();a?b.hide():b.show().position({my:"left top",at:"left bottom",of:this});return!1});$("#data-source-button").button({label:"Start Here"}).click(function(){var b=
a._measurementsManager.measurements();b.addAll(a._measurementsManager.measurements().map(function(a){return a.datasource()}));var c={},d=a._chartFactory._types["epiviz.ui.charts.tree.Icicle"];b.foreach(function(a){if(!b.dataprovider||b.dataprovider==a.dataprovider()){if(b.annotation)for(var d in b.annotation)if(b.annotation.hasOwnProperty(d)&&(!a.annotation()||a.annotation()[d]!=b.annotation[d]))return;a._description||(a._description="description not available");d=!1;void 0==a.datasourceGroup()&&
(d=!0);c[a.datasourceGroup()]&&"description not available"!=c[a.datasourceGroup()][0]?c[a.datasourceGroup()][2]++:c[a.datasourceGroup()]=[a._description,d,0,a._annotation.sequencingType]}});initialize(c);$("#sourcemodal").modal({closable:!1,selector:{deny:".ui.grey.button",approve:".ui.blue.submit.button"},onDeny:function(){$("#sourcemodal").modal("hide");$("form").empty();$("#newmodal").remove()},onApprove:function(){var c=$("#form").form("get value","source");if(1==c.length)return $("#warning-message").show(),
!1;var e=b.subset(function(a){return a.datasourceGroup()===c}),e=new epiviz.ui.controls.VisConfigSelection(e,void 0,c,void 0,void 0,d.chartName(),d.minSelectedMeasurements());a._addChart.notify({type:d,visConfigSelection:e})}});$("#sourcemodal").modal("show")});var c={},d=epiviz.ui.ControlManager.DISPLAY_TYPE_LABELS;this._chartFactory.foreach(function(a,b){b.chartDisplayType()in c||(c[b.chartDisplayType()]=[]);c[b.chartDisplayType()].push(b)});for(var e in c)c.hasOwnProperty(e)&&"data-structure"!=
e&&($(sprintf('<li class="ui-widget-header">%s</li>',d[e])).appendTo(b),c[e].forEach(function(c,d){var e=sprintf("%s-menu-add-%s",c.chartDisplayType(),c.chartHtmlAttributeName());b.append(sprintf('<li><a href="javascript:void(0)" id="%s">%s</a></li>',e,c.chartName()));$("#"+e).click(function(){var d=a._measurementsManager.measurements().subset(c.measurementsFilter());d.addAll(a._measurementsManager.measurements().map(function(a){return a.datasource()}).subset(c.measurementsFilter()));var e={},f,g,
h;for(h in a._chartManager._charts)a._chartManager._charts.hasOwnProperty(h)&&a._chartManager._charts[h].displayType()==epiviz.ui.charts.VisualizationType.DisplayType.DATA_STRUCTURE&&(f=a._chartManager._charts[h],g=a._chartManager._charts[h].measurements());var q;g&&(f=f._properties.visConfigSelection,(q=f.datasourceGroup)||f.measurements.foreach(function(a){return a.datasourceGroup()?(q=a.datasourceGroup(),!0):!1}));d.foreach(function(a){if(!d.dataprovider||d.dataprovider==a.dataprovider()){if(d.annotation)for(var b in d.annotation)if(d.annotation.hasOwnProperty(b)&&
(!a.annotation()||a.annotation()[b]!=d.annotation[b]))return;a._description||(a._description="description not available");b=!1;a.datasourceGroup()==q&&(b=!0);e[a.datasourceGroup()]&&"description not available"!=e[a.datasourceGroup()][0]||(e[a.datasourceGroup()]=[a._description,b])}});f=d.subset(function(a){return a.datasourceGroup()===q});showModal(q,f.raw(),function(b,d){for(var e=new epiviz.measurements.MeasurementSet,f=0;f<b.length;f++){var g=b[f];e.add(new epiviz.measurements.Measurement(g.id,
g.name,g.type,g.datasourceId,g.datasourceGroup,g.dataprovider,g.formula,g.defaultChartType,g.annotation,g.minValue,g.maxValue,g.metadata,g.description))}var e=new epiviz.ui.controls.VisConfigSelection(e,void 0,void 0,void 0,void 0,c.chartName(),c.minSelectedMeasurements()),f=[],h;for(h in d)g=d[h],"range"==g.type?1<g.values.length&&f.push(h+" IN ["+g.values.join(", ")+"]"):1<g.values.length?f.push(h+" IN ("+g.values.join(" | ")+")"):1==g.values.length&&f.push(h+" = "+g.values[0]);f=f.join(" AND ");
a._addChart.notify({type:c,visConfigSelection:e,title:f});$("#resultmodal").remove()});b.hide()})}));b.hide().menu()};
epiviz.ui.ControlManager.prototype._initializeComputedMeasurementsMenu=function(){var a=this;$("#computed-measurements-button").button({text:!1,icons:{primary:"ui-icon ui-icon-calculator"}}).click(function(){(new epiviz.ui.controls.ComputedMeasurementsDialog("Computed Measurements",{add:function(b){a._measurementsManager.addMeasurement(b)},remove:function(b){a._measurementsManager.removeMeasurement(b)},close:function(){}},a._measurementsManager.measurements(),a._chartManager.chartsMeasurements())).show()})};
epiviz.ui.ControlManager.prototype._initializeHelpButton=function(){$("#help-button").button({text:!1,icons:{primary:"ui-icon ui-icon-help"}}).click(function(){window.open("http://epiviz.github.io/","_blank").focus()})};
epiviz.ui.ControlManager.prototype._initializeTutorials=function(){var a=$("#help-tutorials"),b=new epiviz.ui.tutorials,c='<div class="dropdown-menu"><ul id="tutorial-list"><li class="ui-widget-header">Tutorials</li>';0<b._tutorialList.length?b._tutorialList.forEach(function(a){c+='<li><a href="javascript:void(0);" id="'+a.id+'">'+a.name+"</a></li>"}):c+="<li>No Tutorials available</li>";c+="</ul></div>";$(sprintf(c)).insertAfter(a);var d=$("#tutorial-list");d.hide().menu();a.button({icons:{primary:"ui-icon ui-icon-info",
secondary:"ui-icon-triangle-1-s"},text:!1}).click(function(){d.is(":visible")?d.hide():d.show().position({my:"left top",at:"left bottom",of:this});return!1});0<b._tutorialList.length&&b._tutorialList.forEach(function(a){$("#"+a.id).click(function(){(new Anno(a.tutorial)).show();d.hide()})})};
epiviz.ui.ControlManager.prototype._initializeScreenshotMenu=function(){var a=this,b=$("#save-page");b.button({icons:{primary:"ui-icon ui-icon-print"},text:!1}).click(function(){var c=$("#save-workspace-text").val();a._saveWorkspace.notify({name:c,id:c==a._activeWorkspaceInfo.name?a._activeWorkspaceInfo.id:null});b.append(sprintf('<div id="loading" title="printing workspace"><p>Save/Print the existing MetaViz workspace.</p><div style="position:absolute; right:15px;"><select class="screenshot-file-format"><option value="pdf" selected="selected">PDF</option><option value="png" >PNG</option></select></div></div>'));
b.find("#loading").dialog({resizable:!1,modal:!0,title:"Print workspace as image",buttons:{Print:function(){$(this).dialog("close");var b=$(".screenshot-file-format option:selected").val(),c=Math.floor($.now()/1E3);(new epiviz.ui.PrintManager("pagemain","metaviz_"+c,b,a._activeWorkspaceInfo.id)).print();$(this).dialog("destroy").remove()},cancel:function(){$(this).dialog("destroy").remove()}}}).show()})};
epiviz.ui.ControlManager.prototype._initializeManifestUploadMenu=function(){var a=this,b=$("#manifest-upload");b.button({text:!0}).click(function(){b.append(sprintf('<div id="loading_manifest" title="Uploading Manifest"><p>Upload/Upload Manifest File.</p><div style="position:absolute; right:15px;"><input type="file" id = "manifestPath"></div></div>'));b.find("#loading_manifest").dialog({resizable:!1,modal:!0,title:"Upload Manifest",buttons:{Upload:function(){var b=document.getElementById("manifestPath"),
d=new FileReader;d.onload=function(){for(var b=d3.tsv.parseRows(d.result),c=b.map(function(a){console.log(a);return a[3]}),g=b.map(function(a){return a[4]}),c=c.slice(1),g=g.slice(1),g=[],h=[],l=0;l<c.length;l++)b=c[l].slice(0,c[l].indexOf(",")).split("/"),g.push(b[4]),b=b[b.length-1],h.push(b.slice(0,b.indexOf(".biom")));for(var c=[],m=[],b=a._measurementsManager.measurements(),l=0;l<g.length;l++){var n=h[l],p=b.subset(function(a){return a.id()==n});c.push(p.raw()[0]);m.push(l)}g=epiviz.workspaces.Workspace.fromRawObject({id:"ihmp_auto",
name:"ihmp_auto",content:{range:{seqName:g[0],start:0,width:1E4},measurements:c,charts:{"data-structure":[{id:"data-structure-icicle-Kc08V",type:"epiviz.ui.charts.tree.Icicle",properties:{width:800,height:350,margins:{top:50,left:10,bottom:10,right:10},visConfigSelection:{measurements:[0],datasourceGroup:g[0],annotation:{},defaultChartType:"Navigation Control",minSelectedMeasurements:1},colors:{id:"d3-category20"},modifiedMethods:{},customSettings:{},chartMarkers:[]}}],plot:[{id:"plot-heatmap-XhHot",
type:"epiviz.plugins.charts.HeatmapPlot",properties:{width:800,height:400,margins:{top:120,left:60,bottom:20,right:40},visConfigSelection:{measurements:m,annotation:{},defaultChartType:"Heatmap",minSelectedMeasurements:1},colors:{id:"heatmap-default"},modifiedMethods:{},customSettings:{colLabel:"label",maxColumns:120,clusteringAlg:"agglomerative"},chartMarkers:[]}}]}}},a._chartFactory,a._config);a._workspaceManager.changeActiveWorkspace(g.id(),g)};d.readAsBinaryString(b.files[0]);$(this).dialog("destroy").remove()},
cancel:function(){$(this).dialog("destroy").remove()}}}).show()})};
epiviz.ui.ControlManager.prototype._initializeSearchBox=function(){var a=this,b=$("#search-box");b.watermark("Find a taxonomic feature");b.autocomplete({source:function(b,d){a._search.notify({searchTerm:b.term,callback:function(a){for(var b=[],c=0;c<a.length;++c)b.push({value:a[c].probe||a[c].gene,label:a[c].probe||a[c].gene,html:sprintf("<b>%s</b>, [%s]",a[c].gene,a[c].level),range:epiviz.datatypes.GenomicRange.fromStartEnd(a[c].seqName,a[c].start,a[c].end),level:a[c].level||null,node:a[c].nodeId||
null});d(b)}})},minLength:1,select:function(b,d){a._locationManager.lastUnfilledLocationChangeRequest()||a._locationManager.currentLocation();var c=d.item.range.seqName(),f=d.item.range.start(),g=d.item.range.width();a._updateSelectedLocation(new epiviz.datatypes.GenomicRange(c,f,g))},focus:function(a){a.preventDefault()},open:function(){},close:function(){}}).data("autocomplete")._renderItem=function(a,b){return $("<li></li>").data("item.autocomplete",b).append(sprintf("<a>%s</a>",b.html)).appendTo(a)}};
epiviz.ui.ControlManager.prototype._initializeWorkspaceSaving=function(){var a=this,b=$("#save-workspace-text"),c=$("#save-workspace-button"),d=$("#revert-workspace-button"),e=$("#delete-workspace-button");c.button({text:!1,icons:{primary:"ui-icon-disk"}}).click(function(){var c=null;try{var d=b.val();/[a-zA-Z0-9_\s]+/g.exec(d)==d?epiviz.workspaces.UserManager.USER_STATUS.loggedIn?a._saveWorkspace.notify({name:d,id:d==a._activeWorkspaceInfo.name?a._activeWorkspaceInfo.id:null}):(c=new epiviz.ui.controls.MessageDialog("User not logged in",
{Yes:function(){a._loginLinkClicked.notify()},No:function(){}},"You need to log in in order to save the workspace. Do you wish to log in now?",epiviz.ui.controls.MessageDialog.Icon.QUESTION),c.show()):(c=new epiviz.ui.controls.MessageDialog("Invalid workspace name",{Ok:function(){$(this).remove()}},"Invalid workspace name: "+d,epiviz.ui.controls.MessageDialog.Icon.ERROR),c.show())}catch(h){c=new epiviz.ui.controls.MessageDialog("Error",{ok:function(){$(this).remove()}},"An error occurred while trying to save workspace: "+
h.message,epiviz.ui.controls.MessageDialog.Icon.ERROR),c.show()}});e.button({text:!1,icons:{primary:"ui-icon-trash"}}).click(function(b){epiviz.workspaces.UserManager.USER_STATUS.loggedIn&&(new epiviz.ui.controls.MessageDialog("Delete active workspace",{Yes:function(){a._deleteActiveWorkspace.notify()},No:function(){}},"Are you sure you want to delete the active workspace?",epiviz.ui.controls.MessageDialog.Icon.QUESTION)).show()});d.button({text:!1,icons:{primary:"ui-icon-arrowreturnthick-1-w"}}).click(function(b){(new epiviz.ui.controls.MessageDialog("Delete active workspace",
{Yes:function(){a._revertActiveWorkspace.notify()},No:function(){}},"Are you sure you want to revert the changes on the active workspace?",epiviz.ui.controls.MessageDialog.Icon.QUESTION)).show()});b.watermark("Save Workspace Name");b.autocomplete({source:function(b,c){a._searchWorkspaces.notify({searchTerm:b.term,callback:function(a){for(var b=[],d=0;d<a.length;++d)b.push({value:a[d].id,label:a[d].name,html:sprintf("<b>%s</b> %s",a[d].name,a[d].id||"")});c(b)}})},minLength:0,select:function(c,d){c.preventDefault();
a.updateSelectedWorkspace({id:d.item.value||b.val(),name:d.item.label})},focus:function(a){a.preventDefault()},open:function(){},close:function(){}}).data("autocomplete")._renderItem=function(a,b){return $("<li></li>").data("item.autocomplete",b).append(sprintf("<a>%s</a>",b.html)).appendTo(a)};b.click(function(){b.autocomplete("search","")})};epiviz.ui.ControlManager.prototype._initializeLoginLink=function(){var a=this;$("#login-link").live({click:function(){a._loginLinkClicked.notify()}})};
epiviz.ui.ControlManager.prototype._initializeLayout=function(){$("body").layout({applyDefaultStyles:!0,east__size:390,east__minSize:390,east__initHidden:!0,north__resizable:!1,north__initHidden:!1,south__initHidden:!0,east__initClosed:!0})};
epiviz.ui.ControlManager.prototype._checkBrowserCompatibility=function(){0<epiviz.utils.getInternetExplorerVersion()&&(new epiviz.ui.controls.MessageDialog("Browser compatibility warning",{Ok:function(){}},"EpiViz works best on Google Chrome, Apple Safari or Mozilla Firefox. Please open it using one of those browsers.",epiviz.ui.controls.MessageDialog.Icon.ERROR)).show()};epiviz.ui.ControlManager.prototype._registerLocationChanged=function(){var a=this;this._locationManager.onCurrentLocationChanged().addListener(new epiviz.events.EventListener(function(b){a._updateSelectedLocation(b.newValue)}))};
epiviz.ui.ControlManager.prototype._registerSeqInfosUpdated=function(){var a=this;this._locationManager.onSeqInfosUpdated().addListener(new epiviz.events.EventListener(function(b){a._updateSeqNames(b)}))};
epiviz.ui.ControlManager.prototype.startApp=function(){var a='<div id ="startScreenApp" class="ui small modal"><div class="header"><div class="ui grid"><div class="row"><div class="four wide column"><img src="img/metaviz_4_logo_medium.png" alt="Epiviz" width="100" height="21" /></div><div class="one wide column"></div><div class="eleven wide column">'+this._config.appTitle+'</div></div></div></div><div class="content m"><p> <span class="sampleCount">0</span> Samples from <span class="dataCount">0</span> datasets are available.</p><div class="ui segment"><div id="loaderScreenApp" class="ui tiny active inverted dimmer"><div class="ui text loader">Loading data sets and sample annotations..</div></div><table id="sourceLoaderList" class="ui very basic table"><thead><tr><th> Dataset</th><th> Sample Count</th><th> Sequencing Type</th></tr></thead><tbody id="listScreenApp" style="overflow:auto"></tbody></table></div></div><div class="actions"><div class="ui grey back button" id="cancel">Close</div><div class="ui primary button disabled" id="okScreenApp">Start App</div></div></div>';
$("body").append(a);$("#startScreenApp").modal({closable:!0,selector:{deny:".ui.grey.button"}});$("#startScreenApp").modal("show");$("#okScreenApp").click(function(a){$("#startScreenApp").modal("hide");$("#data-source-button").trigger("click")})};
epiviz.ui.ControlManager.prototype.updateLoadingScreen=function(a){if("empty"!=a.dataset){var b=parseInt($("#startScreenApp").find(".sampleCount").text()),c=parseInt($("#startScreenApp").find(".dataCount").text());$("#startScreenApp").find(".sampleCount").text(b+a.sampleSize);$("#startScreenApp").find(".dataCount").text(c+1);b="<tr><td>"+a.dataset+"</td><td>"+a.sampleSize+"</td><td>"+a.sequencingType+"</td></tr>";$("#listScreenApp").append(b);a.count+1==a.size&&($("#loaderScreenApp").removeClass("active"),
$("#loaderScreenApp").addClass("disabled"),$("#okScreenApp").removeClass("disabled"))}};epiviz.ui.controls.SaveSvgAsImageDialog=function(a,b,c){epiviz.ui.controls.Dialog.call(this,"Save Chart SVG as Image",a);this._dialog=$("#"+this._id);this._dialog.append('<div class="save-svg-dialog"><label class="dialog-label">Choose file format:</label><br/><br/><div style="position:absolute; right:15px;"><select class="svg-file-format"><option value="pdf" selected="selected">PDF</option><option value="ps" >PS</option><option value="png" >PNG</option><option value="svg">SVG</option><option value="eps">EPS</option></select></div>'+
sprintf('<form name="%s-svg-save-form" method="POST">',this._id)+'<div><input type="hidden" name="svg" /><input type="hidden" name="format" /><br/><br/></div></form></div>');this._chartId=b;this._chartSaverLocation=c;var d=this;this._dialog.dialog({autoOpen:!1,resizable:!1,width:"200",buttons:{Ok:function(){var a=$("#"+d._chartId).find("svg").clone();a.attr("xmlns","http://www.w3.org/2000/svg");a.attr("version","1.1");var b=d._dialog.find(".svg-file-format"),c=document.forms[sprintf("%s-svg-save-form",
d._id)];c.action=d._chartSaverLocation;c.svg.value=$("<div>").append(a).html();c.format.value=b.val();c.submit();d._handlers.ok();$(this).dialog("close")},Cancel:function(){d._handlers.cancel();$(this).dialog("close")}},modal:!0})};epiviz.ui.controls.SaveSvgAsImageDialog.prototype=epiviz.utils.mapCopy(epiviz.ui.controls.Dialog.prototype);epiviz.ui.controls.SaveSvgAsImageDialog.constructor=epiviz.ui.controls.SaveSvgAsImageDialog;
epiviz.ui.controls.SaveSvgAsImageDialog.prototype.show=function(){epiviz.ui.controls.Dialog.prototype.show.call(this);var a=this;this._dialog&&(this._dialog.dialog("open"),this._dialog.dialog("option","position","center"),this._dialog.dialog({close:function(b,c){$(this).remove();a._dialog=null}}))};epiviz.ui.charts.decoration={};epiviz.ui.charts.decoration.VisualizationDecoration=function(a,b,c){this._visualization=a;this._otherDecoration=b;this._config=c};epiviz.ui.charts.decoration.VisualizationDecoration.prototype.decorate=function(){this._otherDecoration&&this._otherDecoration.decorate()};epiviz.ui.charts.decoration.VisualizationDecoration.prototype.visualization=function(){return this._visualization};epiviz.ui.charts.decoration.VisualizationDecoration.prototype.otherDecoration=function(){return this._otherDecoration};
epiviz.ui.charts.decoration.VisualizationDecoration.prototype.config=function(){return this._config};epiviz.ui.charts.decoration.ChartOptionButton=function(a,b,c){epiviz.ui.charts.decoration.VisualizationDecoration.call(this,a,b,c);this.isChartOptionButton=!0};epiviz.ui.charts.decoration.ChartOptionButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.VisualizationDecoration.prototype);epiviz.ui.charts.decoration.ChartOptionButton.constructor=epiviz.ui.charts.decoration.ChartOptionButton;
epiviz.ui.charts.decoration.ChartOptionButton.prototype.decorate=function(){epiviz.ui.charts.decoration.VisualizationDecoration.prototype.decorate.call(this);if(this.isChartOptionButton){for(var a=0,b=this.otherDecoration();b;b=b.otherDecoration())b.isChartOptionButton&&++a;var c=$(sprintf('<button style="position: absolute; top: 5px; right: %spx">%s</button>',5+30*a,this._text())).appendTo(this.visualization().container()).button(this._renderOptions()).click(this._click());this.visualization().container().mousemove(function(){c.show()}).mouseleave(function(){c.hide()})}};
epiviz.ui.charts.decoration.ChartOptionButton.prototype._click=function(){return function(){}};epiviz.ui.charts.decoration.ChartOptionButton.prototype._renderOptions=function(){return{}};epiviz.ui.charts.decoration.ChartOptionButton.prototype._text=function(){return""};epiviz.ui.charts.decoration.RemoveChartButton=function(a,b){epiviz.ui.charts.decoration.ChartOptionButton.call(this,a,b)};epiviz.ui.charts.decoration.RemoveChartButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.ChartOptionButton.prototype);epiviz.ui.charts.decoration.RemoveChartButton.constructor=epiviz.ui.charts.decoration.RemoveChartButton;epiviz.ui.charts.decoration.RemoveChartButton.prototype._click=function(){var a=this;return function(){a.visualization().onRemove().notify(new epiviz.ui.charts.VisEventArgs(a.visualization().id()))}};
epiviz.ui.charts.decoration.RemoveChartButton.prototype._renderOptions=function(){return{icons:{primary:"ui-icon ui-icon-cancel"},text:!1}};epiviz.ui.charts.decoration.RemoveChartButton.prototype._text=function(){return"Remove"};epiviz.ui.charts.decoration.SaveChartButton=function(a,b){epiviz.ui.charts.decoration.ChartOptionButton.call(this,a,b)};epiviz.ui.charts.decoration.SaveChartButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.ChartOptionButton.prototype);epiviz.ui.charts.decoration.SaveChartButton.constructor=epiviz.ui.charts.decoration.SaveChartButton;epiviz.ui.charts.decoration.SaveChartButton.prototype._click=function(){var a=this;return function(){a.visualization().onSave().notify(new epiviz.ui.charts.VisEventArgs(a.visualization().id()))}};
epiviz.ui.charts.decoration.SaveChartButton.prototype._renderOptions=function(){return{icons:{primary:"ui-icon ui-icon-disk"},text:!1}};epiviz.ui.charts.decoration.SaveChartButton.prototype._text=function(){return"Save"};epiviz.ui.controls.CustomSettingsDialog=function(a,b,c,d){epiviz.ui.controls.Dialog.call(this,a,b);this._customSettingsDefs=c;this._customSettingsValues=epiviz.utils.mapCopy(d)};epiviz.ui.controls.CustomSettingsDialog.prototype=epiviz.utils.mapCopy(epiviz.ui.controls.Dialog.prototype);epiviz.ui.controls.CustomSettingsDialog.constructor=epiviz.ui.controls.CustomSettingsDialog;
epiviz.ui.controls.CustomSettingsDialog.prototype.show=function(){epiviz.ui.controls.Dialog.prototype.show.call(this);var a=epiviz.ui.charts.CustomSetting.Type;if(!this._dialog){var b=this;this._dialog=$("#"+this._id);this._dialog.css("display","inline");var c,d,e,f,g="";for(c=0;c<this._customSettingsDefs.length;++c){d=sprintf("%s-%s",this._id,this._customSettingsDefs[c].id);var h=sprintf('<tr><td><label for="%s">%s</label></td><td style="text-align: right;">%%s</td></tr>',d,this._customSettingsDefs[c].label);
e=null;f=this._customSettingsValues[this._customSettingsDefs[c].id];switch(this._customSettingsDefs[c].type){case a.BOOLEAN:h=sprintf(h,sprintf('<div id="%1$s"><label for="%1$s-true">On</label><input type="radio" id="%1$s-true" name="%1$s" %2$s /><label for="%1$s-false">Off</label><input type="radio" id="%1$s-false" name="%1$s" %3$s /></div>',d,f?'checked="checked"':"",f?"":'checked="checked"'));break;case a.ARRAY:h=sprintf(h,sprintf('<input id="%s" value="%s" class="ui-widget-content ui-corner-all" style="text-align: right; padding: 5px;" />',
d,f.join(",")));break;case a.NUMBER:case a.STRING:h=sprintf(h,sprintf('<input id="%s" value="%s" class="ui-widget-content ui-corner-all" style="text-align: right; padding: 5px;" />',d,f));break;case a.CATEGORICAL:case a.MEASUREMENTS_METADATA:case a.MEASUREMENTS_ANNOTATION:var l="",m=this._customSettingsDefs[c];if(m.possibleValues)for(var n=0;n<m.possibleValues.length;++n)l+=sprintf('<option value="%1$s"%2$s>%1$s</option>',m.possibleValues[n],m.possibleValues[n]==f?'selected="selected"':"");f=sprintf('<select id="%s">%s</select>',
d,l);h=sprintf(h,f)}g+=h}g=sprintf('<div style="margin: 5px; padding: 5px; height: auto;"><table style="width: 100%%;">%s</table></div>',g);this._dialog.append(g);for(c=0;c<this._customSettingsDefs.length;++c)switch(d=sprintf("%s-%s",this._id,this._customSettingsDefs[c].id),e=$("#"+d),f=this._customSettingsValues[this._customSettingsDefs[c].id],this._customSettingsDefs[c].type){case a.BOOLEAN:e.buttonset();break;case a.NUMBER:case a.ARRAY:case a.STRING:e.watermark(this._customSettingsDefs[c].label);
break;case a.CATEGORICAL:case a.MEASUREMENTS_METADATA:case a.MEASUREMENTS_ANNOTATION:e.selectmenu()}this._dialog.dialog({autoOpen:!1,resizable:!1,buttons:{Ok:function(){for(var c=0;c<b._customSettingsDefs.length;++c){d=sprintf("%s-%s",b._id,b._customSettingsDefs[c].id);e=$("#"+d);var f=null;if(e.val()==epiviz.ui.charts.CustomSetting.DEFAULT)f=b._customSettingsDefs[c].defaultValue;else{var g=null;try{switch(b._customSettingsDefs[c].type){case a.BOOLEAN:var h=$("#"+d+" :radio:checked").attr("id"),f=
"true"==h.substr(h.lastIndexOf("-")+1);break;case a.NUMBER:f=e.val()==epiviz.ui.charts.CustomSetting.DEFAULT?b._customSettingsDefs[c].defaultValue:parseFloat(e.val());if(isNaN(f)){g=new epiviz.ui.controls.MessageDialog("Invalid property value",{Ok:function(){}},sprintf('Invalid value for setting "%s" (%s)',b._customSettingsDefs[c].label,b._customSettingsDefs[c].id),epiviz.ui.controls.MessageDialog.Icon.ERROR);g.show();return}break;case a.ARRAY:f=e.val().split(/[\s,]+/g);break;case a.STRING:case a.CATEGORICAL:case a.MEASUREMENTS_METADATA:case a.MEASUREMENTS_ANNOTATION:f=
e.val()}}catch(u){g=new epiviz.ui.controls.MessageDialog("Invalid property value",{Ok:function(){}},sprintf('Invalid value for setting "%s" (%s)',b._customSettingsDefs[c].label,b._customSettingsDefs[c].id),epiviz.ui.controls.MessageDialog.Icon.ERROR);g.show();return}}b._customSettingsValues[b._customSettingsDefs[c].id]=f}b._handlers.ok(b._customSettingsValues);$(this).dialog("close")},Cancel:function(){b._handlers.cancel();$(this).dialog("close")}},modal:!0});this._dialog.dialog({close:function(a,
c){$(this).remove();b._dialog=null}})}this._dialog.dialog("open");this._dialog.dialog("option","position","center")};epiviz.ui.charts.decoration.CustomSettingsButton=function(a,b){epiviz.ui.charts.decoration.ChartOptionButton.call(this,a,b)};epiviz.ui.charts.decoration.CustomSettingsButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.ChartOptionButton.prototype);epiviz.ui.charts.decoration.CustomSettingsButton.constructor=epiviz.ui.charts.decoration.CustomSettingsButton;
epiviz.ui.charts.decoration.CustomSettingsButton.prototype._click=function(){var a=this;return function(){(new epiviz.ui.controls.CustomSettingsDialog("Edit custom settings",{ok:function(b){a.visualization().setCustomSettingsValues(b)},cancel:function(){}},a.visualization().properties().customSettingsDefs,a.visualization().customSettingsValues())).show()}};epiviz.ui.charts.decoration.CustomSettingsButton.prototype._renderOptions=function(){return{icons:{primary:"ui-icon ui-icon-gear"},text:!1}};
epiviz.ui.charts.decoration.CustomSettingsButton.prototype._text=function(){return"Custom settings"};epiviz.ui.controls.CodeDialog=function(a,b,c){epiviz.ui.controls.Dialog.call(this,a,b);this._controlCreators=c;this._dialog=$("#"+this._id);this._controls=[];var d=this;this._dialog.append('<div class="code-tabs"><ul></ul></div>');var e=this._dialog.find(".code-tabs"),f=e.find("ul");this._controlCreators.forEach(function(a,b){var c=d._id+"-code-tab-"+b;e.append(sprintf('<div id="%s"></div>',c));var g=e.find("#"+c),g=a(g);f.append(sprintf('<li><a href="#%s">%s</a></li>',c,g.title()));d._controls.push(g)});
e.tabs({activate:function(a,b){d._tabActivate(e)}});this._dialog.dialog({autoOpen:!1,resizable:!1,width:"800",buttons:{Save:function(){var a=[];d._controls.forEach(function(b){b.save();a.push(b.result())});d._handlers.save(a);$(this).dialog("close")},Cancel:function(){d._controls.forEach(function(a){a.revert()});d._handlers.cancel();$(this).dialog("close")}},modal:!0});this._dialog.dialog("option","position","center")};epiviz.ui.controls.CodeDialog.prototype=epiviz.utils.mapCopy(epiviz.ui.controls.Dialog.prototype);
epiviz.ui.controls.CodeDialog.constructor=epiviz.ui.controls.CodeDialog;epiviz.ui.controls.CodeDialog.prototype.show=function(){epiviz.ui.controls.Dialog.prototype.show.call(this);this._dialog.dialog("open");this._controls[0].initialize();this._dialog.dialog("option","position","center")};epiviz.ui.controls.CodeDialog.prototype._tabActivate=function(a){a=a.tabs("option","active");this._controls[a].initialize();this._dialog.dialog("option","position","center")};epiviz.ui.charts.decoration.CodeButton=function(a,b,c){epiviz.ui.charts.decoration.ChartOptionButton.call(this,a,b,c);this.isCodeButton=!0;this._controlCreators=[];a=!0;var d;for(b=this.otherDecoration();b;b=b.otherDecoration())b.isCodeButton&&(a=!1,d=b);d&&d._addControlCreator(this._controlCreator(),this._saveHandler(),this._cancelHandler());(this.isChartOptionButton=a)&&this._addControlCreator(this._controlCreator(),this._saveHandler(),this._cancelHandler())};
epiviz.ui.charts.decoration.CodeButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.ChartOptionButton.prototype);epiviz.ui.charts.decoration.CodeButton.constructor=epiviz.ui.charts.decoration.CodeButton;
epiviz.ui.charts.decoration.CodeButton.prototype._click=function(){var a=this;return function(){(new epiviz.ui.controls.CodeDialog("Chart Code",{save:function(b){b.forEach(function(b,d){a._controlCreators[d].save(b)})},cancel:function(){a._controlCreators.forEach(function(a){a.cancel()})}},a._controlCreators.map(function(a){return a.creator}))).show()}};epiviz.ui.charts.decoration.CodeButton.prototype._renderOptions=function(){return{icons:{primary:"ui-icon ui-icon-pencil"},text:!1}};
epiviz.ui.charts.decoration.CodeButton.prototype._text=function(){return"Code"};epiviz.ui.charts.decoration.CodeButton.prototype._addControlCreator=function(a,b,c){this._controlCreators.push({creator:a,save:b,cancel:c})};epiviz.ui.charts.decoration.CodeButton.prototype._controlCreator=function(){return null};epiviz.ui.charts.decoration.CodeButton.prototype._saveHandler=function(){return null};epiviz.ui.charts.decoration.CodeButton.prototype._cancelHandler=function(){return null};epiviz.ui.controls.CodeControl=function(a,b,c,d){epiviz.ui.controls.Control.call(this,a,b,c);this._targetObj=d;this._text="// TODO: Your code here\n"};epiviz.ui.controls.CodeControl.prototype=epiviz.utils.mapCopy(epiviz.ui.controls.Control.prototype);epiviz.ui.controls.CodeControl.constructor=epiviz.ui.controls.CodeControl;epiviz.ui.controls.CodeControl.prototype.initialize=function(){};epiviz.ui.controls.CodeControl.prototype.save=function(){};epiviz.ui.controls.CodeControl.prototype.revert=function(){};
epiviz.ui.controls.CodeControl.prototype.text=function(){return this._text};epiviz.ui.controls.CodeControl.prototype.result=function(){return null};epiviz.ui.controls.EditCodeControl=function(a,b,c,d,e,f){epiviz.ui.controls.CodeControl.call(this,a,b,c,d);this._defaultMethod=e;this._editor=null;this._methodsCode={};this._selectedMethod=null;this._hasModifiedMethods=f||!1};epiviz.ui.controls.EditCodeControl.prototype=epiviz.utils.mapCopy(epiviz.ui.controls.CodeControl.prototype);epiviz.ui.controls.EditCodeControl.constructor=epiviz.ui.controls.EditCodeControl;
epiviz.ui.controls.EditCodeControl.prototype.initialize=function(){if(!this._editor){this._container.append('<div style="float: left; margin-right: 5px;"><select class="obj-methods"></select></div>'+sprintf('<div id="%1$s"><label for="%1$s-true">On</label><input type="radio" id="%1$s-true" name="%1$s" %2$s /><label for="%1$s-false">Off</label><input type="radio" id="%1$s-false" name="%1$s" %3$s /></div>',this.id()+"-switch",this._hasModifiedMethods?'checked="checked"':"",this._hasModifiedMethods?
"":'checked="checked"')+'<br /><div style="overflow-y: scroll; max-height: 500px;"><textarea autofocus="autofocus" class="code-edit"></textarea></div>');this._methodsSelector=this._container.find(".obj-methods");var a=this._container.find("#"+this.id()+"-switch");a.buttonset();var b=this,c=function(a){a=$("#"+b.id()+"-switch :radio:checked").attr("id");a="true"==a.substr(a.lastIndexOf("-")+1);b._editor&&b._editor.setOption("disableInput",!a);b._hasModifiedMethods=a};a.find("#"+this.id()+"-switch-true").on("change",
c);a.find("#"+this.id()+"-switch-false").on("change",c);var d=this._container.find(".code-edit"),a=[],c=this._targetObj,e;for(e in c)$.isFunction(c[e])&&a.push(e);a.sort();for(var f=0;f<a.length;++f){e=a[f];var g=0==f&&!this._defaultMethod||this._defaultMethod==e;this._methodsSelector.append(sprintf('<option value="%s"%s>%s</option>',e,g?' selected="selected"':"",e));g&&(this._text=c[e].toString(),this._selectedMethod=e)}this._methodsSelector.change(function(){b._methodsCode[b._selectedMethod]=b._editor.getValue();
var a=$(this).val(),c=b._methodsCode[a];c||(c=b._targetObj[a].toString(),b._methodsCode[a]=c);b._text=c;b._editor?b._editor.getDoc().setValue(b._text):d.val(b._text);b._selectedMethod=a});d.val(this._text);this._methodsSelector.selectmenu({style:"popup",width:"150",maxHeight:"150",menuWidth:"150"});this._editor=CodeMirror.fromTextArea(this._container.find(".code-edit")[0],{lineNumbers:!0,matchBrackets:!0,continueComments:"Enter",extraKeys:{"Ctrl-Q":"toggleComment"},autofocus:!0});this._editor.setOption("disableInput",
!this._hasModifiedMethods)}};epiviz.ui.controls.EditCodeControl.prototype.save=function(){this._methodsCode[this._selectedMethod]=this._editor.getValue();this._text=this._editor.getValue()};epiviz.ui.controls.EditCodeControl.prototype.revert=function(){this._editor&&this._editor.setOption("value",this._text)};
epiviz.ui.controls.EditCodeControl.prototype.modifiedMethods=function(){var a={},b;for(b in this._methodsCode)this._methodsCode.hasOwnProperty(b)&&this._methodsCode[b]!=this._targetObj[b].toString()&&(a[b]=this._methodsCode[b]);return a};epiviz.ui.controls.EditCodeControl.prototype.result=function(){return{hasModifiedMethods:this._hasModifiedMethods,modifiedMethods:this._hasModifiedMethods?this.modifiedMethods():{}}};epiviz.ui.charts.decoration.EditCodeButton=function(a,b,c){epiviz.ui.charts.decoration.CodeButton.call(this,a,b,c)};epiviz.ui.charts.decoration.EditCodeButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.CodeButton.prototype);epiviz.ui.charts.decoration.EditCodeButton.constructor=epiviz.ui.charts.decoration.EditCodeButton;
epiviz.ui.charts.decoration.EditCodeButton.prototype._controlCreator=function(){var a=this;return function(b){return new epiviz.ui.controls.EditCodeControl(b,"Edit Code",null,a.visualization(),a.visualization().lastModifiedMethod(),a.visualization().hasModifiedMethods())}};epiviz.ui.charts.decoration.EditCodeButton.prototype._saveHandler=function(){var a=this;return function(b){b.hasModifiedMethods?a.visualization().setModifiedMethods(b.modifiedMethods):a.visualization().resetModifiedMethods()}};
epiviz.ui.charts.decoration.EditCodeButton.prototype._cancelHandler=function(){return function(){}};epiviz.ui.controls.ColorPickerDialog=function(a,b,c,d){epiviz.ui.controls.Dialog.call(this,"Pick Colors",a);this._dialog=$("#"+this._id);this._dialog.append('<div class="color-picker-form" action="" style="width: 420px;"><div class="chart-picker" style="float: right;"></div></div>');var e=this._dialog.find(".color-picker-form");a="";for(var f=0;f<b.length;++f){var g=sprintf("color-%s",f);a+=sprintf('<tr><td><label>%s:&nbsp;</label></td><td><input type="text" name="%s" class="colorwell %s" value="%s" /></td></tr>',
b[f],g,g,0<=d.keyColorIndex(b[f])?d.getByKey(b[f]):d.get(f))}e.append(sprintf('<table class="color-picker-table">%s</table>',a));var h=$.farbtastic(sprintf("#%s .chart-picker",this._id)),l=$(sprintf("#%s .chart-picker",this._id)).css("opacity",.25),m;$(sprintf("#%s .colorwell",this._id)).each(function(){h.linkTo(this);$(this).css("opacity",.75)}).focus(function(){m&&$(m).css("opacity",.75).removeClass("colorwell-selected");h.linkTo(this);l.css("opacity",1);$(m=this).css("opacity",1).addClass("colorwell-selected")});
e.append('<select class="palettes-selector"></select>');var n=e.find(".palettes-selector"),p={};c&&c.forEach(function(a){n.append(sprintf('<option value="%s"%s>%s</option>',a.id(),a.id()==d.id()?' selected="selected"':"",a.name()));p[a.id()]=a});d.id()in p||(n.prepend(sprintf('<option value="%s" selected="selected">%s</option>',d.id(),d.name())),p[d.id()]=d);n.selectmenu({style:"popup",width:"200",maxHeight:"150",menuWidth:"200"});var t=function(){for(var a=e.find(".colorwell"),b=0;b<a.length;++b)h.linkTo($(a[b])),
h.setColor(d.get(b));m&&h.linkTo(m)};n.change(function(){d=p[$(this).val()];t()});var q=this;this._dialog.dialog({autoOpen:!1,resizable:!1,width:"440",buttons:{Ok:function(){var a=e.find(".colorwell"),c=!1,f=[],g;for(g=0;g<d.size();++g)f.push(d.get(g));for(g=0;g<a.length;++g){var h=a[g].value,l=d.keyColorIndex(b[g]);0>l&&(l=g);h!=f[l]&&(c=!0,f[l]=h)}c&&(d=new epiviz.ui.charts.ColorPalette(f,void 0,void 0,d.keyIndices()));q._handlers.ok(d);$(this).dialog("close")},Cancel:function(){q._handlers.cancel();
$(this).dialog("close")},Reset:function(){t();q._handlers.reset()}},modal:!0})};epiviz.ui.controls.ColorPickerDialog.prototype=epiviz.utils.mapCopy(epiviz.ui.controls.Dialog.prototype);epiviz.ui.controls.ColorPickerDialog.constructor=epiviz.ui.controls.ColorPickerDialog;
epiviz.ui.controls.ColorPickerDialog.prototype.show=function(){epiviz.ui.controls.Dialog.prototype.show.call(this);var a=this;this._dialog&&(this._dialog.dialog("open"),this._dialog.dialog("option","position","center"),this._dialog.dialog({close:function(b,c){$(this).remove();a._dialog=null}}))};epiviz.ui.charts.decoration.ChartColorsButton=function(a,b,c){epiviz.ui.charts.decoration.ChartOptionButton.call(this,a,b,c)};epiviz.ui.charts.decoration.ChartColorsButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.ChartOptionButton.prototype);epiviz.ui.charts.decoration.ChartColorsButton.constructor=epiviz.ui.charts.decoration.ChartColorsButton;
epiviz.ui.charts.decoration.ChartColorsButton.prototype._click=function(){var a=this;return function(){var b=a.visualization().colorLabels();(new epiviz.ui.controls.ColorPickerDialog({ok:function(b){a.visualization().setColors(b)},cancel:function(){},reset:function(){}},b,a.config().colorPalettes,a.visualization().colors())).show()}};epiviz.ui.charts.decoration.ChartColorsButton.prototype._renderOptions=function(){return{icons:{primary:"ui-icon ui-icon-colorpicker"},text:!1}};
epiviz.ui.charts.decoration.ChartColorsButton.prototype._text=function(){return"Colors"};epiviz.ui.charts.decoration.ChartLoaderAnimation=function(a,b){epiviz.ui.charts.decoration.VisualizationDecoration.call(this,a,b);this._loaderTimeout=0;this._animationShowing=!1};epiviz.ui.charts.decoration.ChartLoaderAnimation.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.VisualizationDecoration.prototype);epiviz.ui.charts.decoration.ChartLoaderAnimation.constructor=epiviz.ui.charts.decoration.ChartLoaderAnimation;
epiviz.ui.charts.decoration.ChartLoaderAnimation.prototype.decorate=function(){epiviz.ui.charts.decoration.VisualizationDecoration.prototype.decorate.call(this);var a=this;this.visualization().onDataWaitStart().addListener(new epiviz.events.EventListener(function(){a._addLoaderAnimation()}));this.visualization().onDataWaitEnd().addListener(new epiviz.events.EventListener(function(){a._removeLoaderAnimation()}));this.visualization().onSizeChanged().addListener(new epiviz.events.EventListener(function(){a._animationShowing&&
a._addLoaderAnimation()}))};
epiviz.ui.charts.decoration.ChartLoaderAnimation.prototype._addLoaderAnimation=function(){this._loaderTimeout&&clearTimeout(this._loaderTimeout);var a=function(){b._animationShowing=!0;var a=b.visualization(),d=a.container();d.find(".chart-loader").remove();d.append(sprintf('<div class="loader-icon %s" style="top: %spx; left: %spx;"></div>',"chart-loader",Math.floor(.5*a.height()),Math.floor(.5*a.width())));d.find(".chart-loader").activity({segments:8,steps:5,opacity:.3,width:4,space:0,length:10,
color:"#0b0b0b",speed:1})},b=this;this._animationShowing?a():this._loaderTimeout=setTimeout(a,500)};epiviz.ui.charts.decoration.ChartLoaderAnimation.prototype._removeLoaderAnimation=function(){this._loaderTimeout&&clearTimeout(this._loaderTimeout);this._animationShowing=!1;this.visualization().container().find(".chart-loader").remove()};epiviz.ui.charts.decoration.ChartResize=function(a,b){epiviz.ui.charts.decoration.VisualizationDecoration.call(this,a,b)};epiviz.ui.charts.decoration.ChartResize.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.VisualizationDecoration.prototype);epiviz.ui.charts.decoration.ChartResize.constructor=epiviz.ui.charts.decoration.ChartResize;
epiviz.ui.charts.decoration.ChartResize.prototype.decorate=function(){epiviz.ui.charts.decoration.VisualizationDecoration.prototype.decorate.call(this);var a=this;this.visualization().container().resizable({stop:function(b,c){a.visualization().updateSize()}})};epiviz.ui.charts.decoration.ToggleTooltipButton=function(a,b){epiviz.ui.charts.decoration.VisualizationDecoration.call(this,a,b);this.isChartOptionButton=!0;this._checked=!1};epiviz.ui.charts.decoration.ToggleTooltipButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.VisualizationDecoration.prototype);epiviz.ui.charts.decoration.ToggleTooltipButton.constructor=epiviz.ui.charts.decoration.ToggleTooltipButton;
epiviz.ui.charts.decoration.ToggleTooltipButton.prototype.decorate=function(){epiviz.ui.charts.decoration.VisualizationDecoration.prototype.decorate.call(this);for(var a=0,b=this.otherDecoration();b;b=b.otherDecoration())b.isChartOptionButton&&++a;var c=this,b=sprintf("%s-tooltip-button",this.visualization().id());this.visualization().container().append(sprintf('<div id="%1$s-container" style="position: absolute; top: 5px; right: %2$spx"><input type="checkbox" id="%1$s" %3$s /><label for="%1$s" >Toggle tooltip</label></div>',
b,5+30*a,this._checked?'checked="checked"':""));var d=$("#"+b),e=$("#"+b+"-container");d.button({text:!1,icons:{primary:"ui-icon-comment"}}).click(function(){c._checked=d.is(":checked")});this.visualization().container().mousemove(function(){e.show()}).mouseleave(function(){e.hide()})};epiviz.ui.charts.decoration.ToggleTooltipButton.prototype.checked=function(){return this._checked};epiviz.ui.charts.decoration.ChartTooltip=function(a,b){epiviz.ui.charts.decoration.VisualizationDecoration.call(this,a,b)};epiviz.ui.charts.decoration.ChartTooltip.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.VisualizationDecoration.prototype);epiviz.ui.charts.decoration.ChartTooltip.constructor=epiviz.ui.charts.decoration.ChartTooltip;
epiviz.ui.charts.decoration.ChartTooltip.prototype.decorate=function(){epiviz.ui.charts.decoration.VisualizationDecoration.prototype.decorate.call(this);for(var a=void 0,b=this.otherDecoration();b;b=b.otherDecoration())if(b.constructor==epiviz.ui.charts.decoration.ToggleTooltipButton){a=b;break}var c=this;this.visualization().container().tooltip({items:".item",content:function(){if(!a.checked())return!1;var b=d3.select(this).data()[0];return b.valueItems[0].length>b.measurements.length+b.measurements[0].metadata().length?
c._horizontalContent(b):c._verticalContent(b)},track:!0,show:!1})};
epiviz.ui.charts.decoration.ChartTooltip.prototype._horizontalContent=function(a){for(var b=a.measurements[0].metadata(),c=sprintf("%s%s%s",void 0!=a.start&&void 0!=a.end?"<th><b>Start</b></th><th><b>End</b></th>":"",b?"<th><b>"+b.join("</b></th><th><b>")+"</b></th>":"",a.values?"<th><b>"+a.measurements.join("</b></th><th><b>")+"</b></th>":""),d="",e=0;e<a.valueItems[0].length&&10>e;++e){var f="",g=a.valueItems[0][e].rowItem,h=Globalize.format(g.start(),"n0"),l=Globalize.format(g.end(),"n0");void 0!=
h&&void 0!=l&&(f+=sprintf("<td>%s</td><td>%s</td>",h,l));g=g.rowMetadata();if(b&&g)for(h=0;h<b.length;++h)l=g[b[h]]||"",f+=sprintf("<td>%s</td>",15>=l.length?l:l.substr(0,15)+"...");if(a.values)for(g=0;g<a.measurements.length;++g)f+=sprintf("<td>%s</td>",Globalize.format(a.valueItems[g][e].value,"n3"));d+=sprintf("<tr>%s</tr>",f)}e<a.valueItems[0].length&&(d+=sprintf('<tr><td colspan="%s" style="text-align: center;">...</td></tr>',2+(b?b.length:0)+(a.values?a.measurements.length:0)));return sprintf('<table class="tooltip-table"><thead><tr>%s</tr></thead><tbody>%s</tbody></table>',
c,d)};
epiviz.ui.charts.decoration.ChartTooltip.prototype._verticalContent=function(a){var b=[],c=[0,0];if(void 0!=a.start&&void 0!=a.end){var d=["Start"],e=["End"];a.valueItems[0].every(function(a,b){d.push(Globalize.format(a.rowItem.start(),"n0"));e.push(Globalize.format(a.rowItem.end(),"n0"));return 5>b});b.push(d);b.push(e);c=[0,2]}var f=a.measurements[0].metadata(),g=[c[1],c[1]+f.length];f.forEach(function(c){var d=[c];a.valueItems[0].every(function(a,b){var e=a.rowItem.metadata(c)||"[NA]";15<e.length&&
(e=e.substr(0,15)+"...");d.push(e);return 5>b});b.push(d)});f=[g[1],g[1]];a.values&&(f=[g[1],g[1]+a.measurements.length],a.measurements.forEach(function(c,d){var e=[c.name()];a.valueItems[d].every(function(a,b){e.push(Globalize.format(a.value,"n3"));return 5>b});b.push(e)}));var h=f[1];10<h&&(c[1]=1,g[1]=Math.min(g[1],g[0]+4),h=c[1]-c[0]+g[1]-g[0]+f[1]-f[0],10<h&&(f[1]-=h-10));var h="",l;for(l=c[0];l<c[1];++l)h+="<tr><td><b>"+b[l][0]+"</b></td><td>"+b[l].slice(1).join("</td><td>")+"</td></tr>";for(l=
g[0];l<g[1];++l)h+="<tr><td><b>"+b[l][0]+"</b></td><td>"+b[l].slice(1).join("</td><td>")+"</td></tr>";for(l=f[0];l<f[1];++l)h+="<tr><td><b>"+b[l][0]+"</b></td><td>"+b[l].slice(1).join("</td><td>")+"</td></tr>";return'<table class="tooltip-table"><tbody>'+h+"</tbody></table>"};epiviz.ui.controls.MarkerCodeControl=function(a,b,c,d,e,f,g){epiviz.ui.controls.CodeControl.call(this,a,b,c,d);this._markEditor=this._editor=null;this._editorText=e;this._markText=f;this._enabled=g||!1};epiviz.ui.controls.MarkerCodeControl.prototype=epiviz.utils.mapCopy(epiviz.ui.controls.CodeControl.prototype);epiviz.ui.controls.MarkerCodeControl.constructor=epiviz.ui.controls.MarkerCodeControl;
epiviz.ui.controls.MarkerCodeControl.prototype.initialize=function(){if(!this._editor){this._container.append(sprintf('<div id="%1$s"><label for="%1$s-true">On</label><input type="radio" id="%1$s-true" name="%1$s" %2$s /><label for="%1$s-false">Off</label><input type="radio" id="%1$s-false" name="%1$s" %3$s /></div>',this.id()+"-switch",this._enabled?'checked="checked"':"",this._enabled?"":'checked="checked"')+'<br /><div><label><b>Pre-mark Method</b></label></div><br /><div style="overflow-y: scroll; max-height: 250px;"><textarea autofocus="autofocus" class="pre-filter-code"></textarea></div><br/><div><label><b>Mark Method</b></label></div><br/><div style="overflow-y: scroll; max-height: 250px;"><textarea autofocus="autofocus" class="filter-code"></textarea></div>');
var a=this._container.find("#"+this.id()+"-switch");a.buttonset();var b=this,c=function(a){a=$("#"+b.id()+"-switch :radio:checked").attr("id");a="true"==a.substr(a.lastIndexOf("-")+1);b._editor&&b._editor.setOption("disableInput",!a);b._markEditor&&b._markEditor.setOption("disableInput",!a);b._enabled=a};a.find("#"+this.id()+"-switch-true").on("change",c);a.find("#"+this.id()+"-switch-false").on("change",c);a=this._container.find(".pre-filter-code");a.val(this._editorText);c=this._container.find(".filter-code");
c.val(this._markText);this._editor=CodeMirror.fromTextArea(a[0],{lineNumbers:!0,matchBrackets:!0,continueComments:"Enter",extraKeys:{"Ctrl-Q":"toggleComment"},autofocus:!0});this._editor.setOption("disableInput",!this._enabled);this._markEditor=CodeMirror.fromTextArea(c[0],{lineNumbers:!0,matchBrackets:!0,continueComments:"Enter",extraKeys:{"Ctrl-Q":"toggleComment"},autofocus:!0});this._markEditor.setOption("disableInput",!this._enabled)}};
epiviz.ui.controls.MarkerCodeControl.prototype.save=function(){this._editor&&(this._editorText=this._editor.getValue(),this._markText=this._markEditor.getValue())};epiviz.ui.controls.MarkerCodeControl.prototype.revert=function(){this._editor&&this._editor.setOption("value",this._editorText);this._markEditor&&this._markEditor.setOption("value",this._markText)};
epiviz.ui.controls.MarkerCodeControl.prototype.result=function(){return{enabled:this._enabled,preMark:this._enabled?this._editorText:null,mark:this._enabled?this._markText:null}};epiviz.ui.charts.decoration.MarkerCodeButton=function(a,b,c){epiviz.ui.charts.decoration.CodeButton.call(this,a,b,c)};epiviz.ui.charts.decoration.MarkerCodeButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.CodeButton.prototype);epiviz.ui.charts.decoration.MarkerCodeButton.constructor=epiviz.ui.charts.decoration.MarkerCodeButton;
epiviz.ui.charts.decoration.MarkerCodeButton.prototype._controlCreator=function(){var a=this;return function(b){var c=a.visualization().getMarker(a.markerId()),d,e;c&&(d=c.preMarkStr(),e=c.markStr());d=d||a.preMarkTemplate();e=e||a.markTemplate();return new epiviz.ui.controls.MarkerCodeControl(b,a.markerLabel(),null,a.visualization(),d,e,void 0!=c)}};
epiviz.ui.charts.decoration.MarkerCodeButton.prototype._saveHandler=function(){var a=this;return function(b){b.enabled?a.visualization().putMarker(a.createMarker(b.preMark,b.mark)):a.visualization().removeMarker(a.markerId())}};epiviz.ui.charts.decoration.MarkerCodeButton.prototype._cancelHandler=function(){return function(){}};
epiviz.ui.charts.decoration.MarkerCodeButton.prototype.createMarker=function(a,b){return new epiviz.ui.charts.markers.VisualizationMarker(this.markerType(),this.markerId(),this.markerLabel(),a,b)};epiviz.ui.charts.decoration.MarkerCodeButton.prototype.markerType=function(){throw Error("unimplemented abstract method");};epiviz.ui.charts.decoration.MarkerCodeButton.prototype.markerLabel=function(){throw Error("unimplemented abstract method");};
epiviz.ui.charts.decoration.MarkerCodeButton.prototype.markerId=function(){throw Error("unimplemented abstract method");};epiviz.ui.charts.decoration.MarkerCodeButton.prototype.preMarkTemplate=function(){throw Error("unimplemented abstract method");};epiviz.ui.charts.decoration.MarkerCodeButton.prototype.markTemplate=function(){throw Error("unimplemented abstract method");};epiviz.ui.charts.decoration.ChartFilterCodeButton=function(a,b,c){epiviz.ui.charts.decoration.MarkerCodeButton.call(this,a,b,c)};epiviz.ui.charts.decoration.ChartFilterCodeButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.MarkerCodeButton.prototype);epiviz.ui.charts.decoration.ChartFilterCodeButton.constructor=epiviz.ui.charts.decoration.ChartFilterCodeButton;epiviz.ui.charts.decoration.ChartFilterCodeButton.prototype.markerType=function(){return epiviz.ui.charts.markers.VisualizationMarker.Type.FILTER};
epiviz.ui.charts.decoration.ChartFilterCodeButton.prototype.markerLabel=function(){return"User Filter"};epiviz.ui.charts.decoration.ChartFilterCodeButton.prototype.markerId=function(){return"user-filter"};epiviz.ui.charts.decoration.ChartFilterCodeButton.prototype.preMarkTemplate=function(){return"/**\n * This method is called once before every draw, for all data available to the visualization,\n * for initialization. Its result can be used inside the filter method.\n * @param {epiviz.datatypes.GenomicData} [data]\n * @returns {InitialVars}\n * @template InitialVars\n */\nfunction(data) {\n  // TODO: Your code here\n  return null;\n}\n"};
epiviz.ui.charts.decoration.ChartFilterCodeButton.prototype.markTemplate=function(){return"/**\n * This method is called for every data object. If it returns false, the object will not be drawn.\n * @param {epiviz.datatypes.GenomicData.ValueItem} [item]\n * @param {epiviz.datatypes.GenomicData} [data]\n * @param {InitialVars} [preMarkResult]\n * @returns {boolean}\n * @template InitialVars\n */\nfunction(item, data, preMarkResult) {\n  // TODO: Your code here\n  return true;\n}\n"};epiviz.ui.charts.tree.decoration={};epiviz.ui.charts.tree.decoration.TogglePropagateSelectionButton=function(a,b){epiviz.ui.charts.decoration.VisualizationDecoration.call(this,a,b);this._checked=this.isChartOptionButton=!0};epiviz.ui.charts.tree.decoration.TogglePropagateSelectionButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.VisualizationDecoration.prototype);epiviz.ui.charts.tree.decoration.TogglePropagateSelectionButton.constructor=epiviz.ui.charts.tree.decoration.TogglePropagateSelectionButton;
epiviz.ui.charts.tree.decoration.TogglePropagateSelectionButton.prototype.decorate=function(){epiviz.ui.charts.decoration.VisualizationDecoration.prototype.decorate.call(this);for(var a=0,b=this.otherDecoration();b;b=b.otherDecoration())b.isChartOptionButton&&++a;var c=this,b=sprintf("%s-propagate-selection-button",this.visualization().id());this.visualization().container().append(sprintf('<div id="%1$s-container" style="position: absolute; top: 5px; right: %2$spx"><input type="checkbox" id="%1$s" %3$s /><label for="%1$s" >Toggle propagate selection</label></div>',
b,5+30*a,this._checked?'checked="checked"':""));var d=$("#"+b),e=$("#"+b+"-container");d.button({text:!1,icons:{primary:"ui-icon ui-icon-refresh"}}).click(function(){c._checked=d.is(":checked");c.visualization().setAutoPropagateChanges(c._checked)});this.visualization().container().mousemove(function(){e.show()}).mouseleave(function(){e.hide()})};epiviz.ui.charts.tree.decoration.TogglePropagateSelectionButton.prototype.checked=function(){return this._checked};epiviz.ui.charts.decoration.HierarchyFilterCodeButton=function(a,b,c){epiviz.ui.charts.decoration.MarkerCodeButton.call(this,a,b,c)};epiviz.ui.charts.decoration.HierarchyFilterCodeButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.MarkerCodeButton.prototype);epiviz.ui.charts.decoration.HierarchyFilterCodeButton.constructor=epiviz.ui.charts.decoration.HierarchyFilterCodeButton;epiviz.ui.charts.decoration.HierarchyFilterCodeButton.prototype.markerType=function(){return epiviz.ui.charts.markers.VisualizationMarker.Type.FILTER};
epiviz.ui.charts.decoration.HierarchyFilterCodeButton.prototype.markerLabel=function(){return"User Filter"};epiviz.ui.charts.decoration.HierarchyFilterCodeButton.prototype.markerId=function(){return"user-filter"};epiviz.ui.charts.decoration.HierarchyFilterCodeButton.prototype.preMarkTemplate=function(){return"/**\n * This method is called once before every draw, for all data available to the visualization,\n * for initialization. Its result can be used inside the filter method.\n * @param {epiviz.ui.charts.tree.Node} [root]\n * @returns {InitialVars}\n * @template InitialVars\n */\nfunction(root) {\n  // TODO: Your code here\n  return null;\n}\n"};
epiviz.ui.charts.decoration.HierarchyFilterCodeButton.prototype.markTemplate=function(){return"/**\n * This method is called for every data object. If it returns false, the object will not be drawn.\n * @param {epiviz.ui.charts.tree.Node} [node]\n * @param {epiviz.ui.charts.tree.Node} [root]\n * @param {InitialVars} [preMarkResult]\n * @returns {boolean}\n * @template InitialVars\n */\nfunction(node, root, preMarkResult) {\n  // TODO: Your code here\n  return true;\n}\n"};epiviz.ui.charts.decoration.ChartGroupByMeasurementsCodeButton=function(a,b,c){epiviz.ui.charts.decoration.MarkerCodeButton.call(this,a,b,c)};epiviz.ui.charts.decoration.ChartGroupByMeasurementsCodeButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.MarkerCodeButton.prototype);epiviz.ui.charts.decoration.ChartGroupByMeasurementsCodeButton.constructor=epiviz.ui.charts.decoration.ChartGroupByMeasurementsCodeButton;
epiviz.ui.charts.decoration.ChartGroupByMeasurementsCodeButton.prototype.markerType=function(){return epiviz.ui.charts.markers.VisualizationMarker.Type.GROUP_BY_MEASUREMENTS};epiviz.ui.charts.decoration.ChartGroupByMeasurementsCodeButton.prototype.markerLabel=function(){return"Group by"};epiviz.ui.charts.decoration.ChartGroupByMeasurementsCodeButton.prototype.markerId=function(){return"group-by-measurements"};
epiviz.ui.charts.decoration.ChartGroupByMeasurementsCodeButton.prototype.preMarkTemplate=function(){return"/**\n * This method is called once before every draw, for all data available to the visualization,\n * for initialization. Its result can be used inside the filter method.\n * @param {epiviz.datatypes.GenomicData} [data]\n * @returns {InitialVars}\n * @template InitialVars\n */\nfunction(data) {\n  // TODO: Your code here\n  return null;\n}\n"};
epiviz.ui.charts.decoration.ChartGroupByMeasurementsCodeButton.prototype.markTemplate=function(){return"/**\n * @param {epiviz.measurements.Measurement} m\n * @param {epiviz.datatypes.GenomicData} [data]\n * @param {InitialVars} [preMarkResult]\n * @returns {string}\n * @template InitialVars\n */\nfunction(m, data, preMarkResult) {\n  // TODO: Your code here\n  return 0;\n}\n"};epiviz.ui.charts.decoration.ChartColorByMeasurementsCodeButton=function(a,b,c){epiviz.ui.charts.decoration.MarkerCodeButton.call(this,a,b,c)};epiviz.ui.charts.decoration.ChartColorByMeasurementsCodeButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.MarkerCodeButton.prototype);epiviz.ui.charts.decoration.ChartColorByMeasurementsCodeButton.constructor=epiviz.ui.charts.decoration.ChartColorByMeasurementsCodeButton;
epiviz.ui.charts.decoration.ChartColorByMeasurementsCodeButton.prototype.markerType=function(){return epiviz.ui.charts.markers.VisualizationMarker.Type.COLOR_BY_MEASUREMENTS};epiviz.ui.charts.decoration.ChartColorByMeasurementsCodeButton.prototype.markerLabel=function(){return"Color by Measurements"};epiviz.ui.charts.decoration.ChartColorByMeasurementsCodeButton.prototype.markerId=function(){return"color-by-measurements"};
epiviz.ui.charts.decoration.ChartColorByMeasurementsCodeButton.prototype.preMarkTemplate=function(){return"/**\n * This method is called once before every draw, for all data available to the visualization,\n * for initialization. Its result can be used inside the filter method.\n * @param {epiviz.datatypes.GenomicData} [data]\n * @returns {InitialVars}\n * @template InitialVars\n */\nfunction(data) {\n  // TODO: Your code here\n  return null;\n}\n"};
epiviz.ui.charts.decoration.ChartColorByMeasurementsCodeButton.prototype.markTemplate=function(){return"/**\n * @param {epiviz.measurements.Measurement} m\n * @param {epiviz.datatypes.GenomicData} [data]\n * @param {InitialVars} [preMarkResult]\n * @returns {string|number}\n * @template InitialVars\n */\nfunction(m, data, preMarkResult) {\n  // TODO: Your code here\n  return 0;\n}\n"};epiviz.ui.charts.decoration.ChartOrderByMeasurementsCodeButton=function(a,b,c){epiviz.ui.charts.decoration.MarkerCodeButton.call(this,a,b,c)};epiviz.ui.charts.decoration.ChartOrderByMeasurementsCodeButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.MarkerCodeButton.prototype);epiviz.ui.charts.decoration.ChartOrderByMeasurementsCodeButton.constructor=epiviz.ui.charts.decoration.ChartOrderByMeasurementsCodeButton;
epiviz.ui.charts.decoration.ChartOrderByMeasurementsCodeButton.prototype.markerType=function(){return epiviz.ui.charts.markers.VisualizationMarker.Type.ORDER_BY_MEASUREMENTS};epiviz.ui.charts.decoration.ChartOrderByMeasurementsCodeButton.prototype.markerLabel=function(){return"Order By"};epiviz.ui.charts.decoration.ChartOrderByMeasurementsCodeButton.prototype.markerId=function(){return"order-by-measurements"};
epiviz.ui.charts.decoration.ChartOrderByMeasurementsCodeButton.prototype.preMarkTemplate=function(){return"/**\n * This method is called once before every draw, for all data available to the visualization,\n * for initialization. Its result can be used inside the filter method.\n * @param {epiviz.datatypes.GenomicData} [data]\n * @returns {InitialVars}\n * @template InitialVars\n */\nfunction(data) {\n  // TODO: Your code here\n  return null;\n}\n"};
epiviz.ui.charts.decoration.ChartOrderByMeasurementsCodeButton.prototype.markTemplate=function(){return"/**\n * @param {epiviz.measurements.Measurement} m\n * @param {epiviz.datatypes.GenomicData} [data]\n * @param {InitialVars} [preMarkResult]\n * @returns {string|number}\n * @template InitialVars\n */\nfunction(m, data, preMarkResult) {\n  // TODO: Your code here\n  return 0;\n}\n"};epiviz.ui.charts.decoration.ChartColorByRowCodeButton=function(a,b,c){epiviz.ui.charts.decoration.MarkerCodeButton.call(this,a,b,c)};epiviz.ui.charts.decoration.ChartColorByRowCodeButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.MarkerCodeButton.prototype);epiviz.ui.charts.decoration.ChartColorByRowCodeButton.constructor=epiviz.ui.charts.decoration.ChartColorByRowCodeButton;epiviz.ui.charts.decoration.ChartColorByRowCodeButton.prototype.markerType=function(){return epiviz.ui.charts.markers.VisualizationMarker.Type.COLOR_BY_ROW};
epiviz.ui.charts.decoration.ChartColorByRowCodeButton.prototype.markerLabel=function(){return"Color By"};epiviz.ui.charts.decoration.ChartColorByRowCodeButton.prototype.markerId=function(){return"color-by"};epiviz.ui.charts.decoration.ChartColorByRowCodeButton.prototype.preMarkTemplate=function(){return"/**\n * This method is called once before every draw, for all data available to the visualization,\n * for initialization. Its result can be used inside the filter method.\n * @param {epiviz.datatypes.GenomicData} [data]\n * @returns {InitialVars}\n * @template InitialVars\n */\nfunction(data) {\n  // TODO: Your code here\n  return null;\n}\n"};
epiviz.ui.charts.decoration.ChartColorByRowCodeButton.prototype.markTemplate=function(){return"/**\n * This method is called for every data object. If it returns false, the object will not be drawn.\n * @param {epiviz.datatypes.GenomicData.RowItem} [row]\n * @param {epiviz.datatypes.GenomicData} [data]\n * @param {InitialVars} [preMarkResult]\n * @returns {string}\n * @template InitialVars\n */\nfunction(row, data, preMarkResult) {\n  // TODO: Your code here\n  return row.metadata('colLabel');\n}\n"};epiviz.ui.charts.ChartManager=function(a){this._config=a;this._charts={};this._chartsOrder={};this._resizeInterval=null;this._chartAdded=new epiviz.events.Event;this._chartRemoved=new epiviz.events.Event;this._chartsOrderChanged=new epiviz.events.Event;this._chartsCleared=new epiviz.events.Event;this._chartColorsChanged=new epiviz.events.Event;this._chartMethodsModified=new epiviz.events.Event;this._chartMethodsReset=new epiviz.events.Event;this._chartMarkersModified=new epiviz.events.Event;this._chartCustomSettingsChanged=
new epiviz.events.Event;this._chartSizeChanged=new epiviz.events.Event;this._chartMarginsChanged=new epiviz.events.Event;this._chartRequestHierarchy=new epiviz.events.Event;this._chartPropagateHierarchyChanges=new epiviz.events.Event;this._chartPropogateIcicleLocationChanges=new epiviz.events.Event;this._chartIcicleLocationChanges=new epiviz.events.Event;this._chartFeatureSearchEvent=new epiviz.events.Event;this._chartFeatureGetDataEvent=new epiviz.events.Event;this._heatmapAddFeatureChartEvent=new epiviz.events.Event;
this._registerWindowResize()};
epiviz.ui.charts.ChartManager.prototype.addChart=function(a,b,c,d,e){c=c||sprintf("%s-%s-%s",a.chartDisplayType(),a.chartHtmlAttributeName(),epiviz.utils.generatePseudoGUID(5));e=a.cssClass();var f=$("#"+a.chartContainer()),g=f.find(".accordion"),h=g.find(".vis-container");0==g.length&&(g=$('<div class="accordion"></div>').appendTo(f),f=a.chartDisplayType(),g.append(sprintf('<h3><a href="#"><b><span style="color: #025167">Views by %s</span></b></a></h3>',epiviz.ui.ControlManager.DISPLAY_TYPE_LABELS[f])),h=
$('<div class="vis-container"></div>').appendTo(g),g.multiAccordion(),g.multiAccordion("option","active","all"));h.append(sprintf('<div id="%s" class="%s"></div>',c,e));g=h.find("#"+c);f=[];if(null!=a._defaultSettings.chartMarkers||void 0!=a._defaultSettings.chartMarkers)for(e=0;e<a._defaultSettings.chartMarkers.length;e++)h=a._defaultSettings.chartMarkers[e],f.push(new epiviz.ui.charts.markers.VisualizationMarker(h.type,h.id,h.name,h.preMark,h.mark));d=d||new epiviz.ui.charts.VisualizationProperties(a.defaultWidth(),
a.defaultHeight(),a.defaultMargins(),b,a.defaultColors(),null,a.customSettingsValues(),a.customSettingsDefs(),f);d.customSettingsValues.title="";a.chartDisplayType()==epiviz.ui.charts.VisualizationType.DisplayType.DATA_STRUCTURE&&(d.customSettingsValues.title=b.datasourceGroup);b=a.createNew(c,g,d);this._charts[c]=b;this._registerChartHover(b);this._registerChartUnhover(b);this._registerChartSelect(b);this._registerChartDeselect(b);this._registerChartColorsChanged(b);this._registerChartMethodsModified(b);
this._registerChartMethodsReset(b);this._registerChartMarkersModified(b);this._registerChartCustomSettingsChanged(b);this._registerChartSizeChanged(b);this._registerChartMarginsChanged(b);this._registerChartRemove(b);this._registerChartSave(b);this._registerChartRequestHierarchy(b);this._registerChartPropagateHierarchyChanges(b);this._registerChartPropogateIcicleLocationChanges(b);this._registerChartIcicleLocationChanges(b);this._registerChartSearchFeature(b);this._registerChartFeatureGetData(b);
this._registerHeatmapAddFeatureChart(b);if(a.decorations()){g=void 0;for(e=0;e<a.decorations().length;++e)(f=epiviz.utils.evaluateFullyQualifiedTypeName(a.decorations()[e]))&&(g=epiviz.utils.applyConstructor(f,[b,g,this._config]));g&&g.decorate()}a.chartDisplayType()in this._chartsOrder||(this._chartsOrder[a.chartDisplayType()]=[]);this._chartsOrder[a.chartDisplayType()].push(c);var l=!1;Object.keys(this._charts).forEach(function(a){-1!=a.indexOf("data-structure")&&(l=!0)});l?$("#data-source-button").hide():
$("#data-source-button").show();this._chartAdded.notify(new epiviz.ui.charts.VisEventArgs(c,{type:a,properties:d,chartsOrder:this._chartsOrder}));return c};
epiviz.ui.charts.ChartManager.prototype.removeChart=function(a){$("#"+a).remove();var b=this._charts[a];delete this._charts[a];this._chartsOrder[b.displayType()].splice(this._chartsOrder[b.displayType()].indexOf(a),1);b=$("#"+epiviz.ui.ControlManager.CHART_TYPE_CONTAINERS[b.displayType()]);0==b.find(".accordion").find(".vis-container").children().length&&b.empty();var c=!1;Object.keys(this._charts).forEach(function(a){-1!=a.indexOf("data-structure")&&(c=!0)});c?$("#data-source-button").hide():$("#data-source-button").show();
this._chartRemoved.notify(new epiviz.ui.charts.VisEventArgs(a,this._chartsOrder))};epiviz.ui.charts.ChartManager.prototype.chartsMeasurements=function(){var a={},b;for(b in this._charts)this._charts.hasOwnProperty(b)&&this._charts[b].displayType()!=epiviz.ui.charts.VisualizationType.DisplayType.DATA_STRUCTURE&&(a[b]=this._charts[b].measurements());return a};
epiviz.ui.charts.ChartManager.prototype.updateCharts=function(a,b,c){c=c||Object.keys(this._charts);for(var d=0;d<c.length;++d)if(this._charts.hasOwnProperty(c[d])){var e=this._charts[c[d]];e&&function(c){c.transformData(a,b).done(function(){c.draw()})}(e)}};
epiviz.ui.charts.ChartManager.prototype.updateDataStructureCharts=function(){for(var a=Object.keys(this._charts),b=0;b<a.length;++b)if(this._charts.hasOwnProperty(a[b])){var c=this._charts[a[b]];c&&c.displayType()==epiviz.ui.charts.VisualizationType.DisplayType.DATA_STRUCTURE&&function(a){setTimeout(function(){a.fireRequestHierarchy()},0)}(c)}};
epiviz.ui.charts.ChartManager.prototype.clear=function(){this._charts={};this._chartsOrder={};var a=epiviz.ui.ControlManager.CHART_TYPE_CONTAINERS,b;for(b in a)a.hasOwnProperty(b)&&$("#"+a[b]).empty();this._chartsCleared.notify()};epiviz.ui.charts.ChartManager.prototype.dataWaitStart=function(a,b){if(a&&this._charts[a])this._charts[a].onDataWaitStart().notify(new epiviz.ui.charts.VisEventArgs(a));else for(var c in this._charts)this._charts.hasOwnProperty(c)&&b&&b[this._charts[c]]&&this._charts[c].onDataWaitStart().notify(new epiviz.ui.charts.VisEventArgs(c))};
epiviz.ui.charts.ChartManager.prototype.onChartAdded=function(){return this._chartAdded};epiviz.ui.charts.ChartManager.prototype.onChartRemoved=function(){return this._chartRemoved};epiviz.ui.charts.ChartManager.prototype.onChartsOrderChanged=function(){return this._chartsOrderChanged};epiviz.ui.charts.ChartManager.prototype.onChartsCleared=function(){return this._chartsCleared};epiviz.ui.charts.ChartManager.prototype.onChartColorsChanged=function(){return this._chartColorsChanged};
epiviz.ui.charts.ChartManager.prototype.onChartMethodsModified=function(){return this._chartMethodsModified};epiviz.ui.charts.ChartManager.prototype.onChartMethodsReset=function(){return this._chartMethodsReset};epiviz.ui.charts.ChartManager.prototype.onChartMarkersModified=function(){return this._chartMarkersModified};epiviz.ui.charts.ChartManager.prototype.onChartCustomSettingsChanged=function(){return this._chartCustomSettingsChanged};
epiviz.ui.charts.ChartManager.prototype.onChartSizeChanged=function(){return this._chartSizeChanged};epiviz.ui.charts.ChartManager.prototype.onChartMarginsChanged=function(){return this._chartMarginsChanged};epiviz.ui.charts.ChartManager.prototype.onChartRequestHierarchy=function(){return this._chartRequestHierarchy};epiviz.ui.charts.ChartManager.prototype.onChartPropagateHierarchyChanges=function(){return this._chartPropagateHierarchyChanges};
epiviz.ui.charts.ChartManager.prototype.onChartPropogateIcicleLocationChanges=function(){return this._chartPropogateIcicleLocationChanges};epiviz.ui.charts.ChartManager.prototype.onChartIcicleLocationChanges=function(){return this._chartIcicleLocationChanges};
epiviz.ui.charts.ChartManager.prototype._registerWindowResize=function(){var a=this;$(window).resize(function(){null!==a._resizeInterval&&window.clearTimeout(a._resizeInterval);a._resizeInterval=window.setTimeout(function(){for(var b in a._charts)a._charts.hasOwnProperty(b)&&a._charts[b].updateSize();a._resizeInterval=null},500)})};
epiviz.ui.charts.ChartManager.prototype._registerChartHover=function(a){var b=this;a.onHover().addListener(new epiviz.events.EventListener(function(a){for(var c in b._charts)b._charts.hasOwnProperty(c)&&b._charts[c].doHover(a.args)}))};epiviz.ui.charts.ChartManager.prototype._registerChartUnhover=function(a){var b=this;a.onUnhover().addListener(new epiviz.events.EventListener(function(){for(var a in b._charts)b._charts.hasOwnProperty(a)&&b._charts[a].doUnhover()}))};
epiviz.ui.charts.ChartManager.prototype._registerChartSelect=function(a){var b=this;a.onSelect().addListener(new epiviz.events.EventListener(function(a){a=a.args;for(var c in b._charts)b._charts.hasOwnProperty(c)&&b._charts[c].doSelect(a)}))};epiviz.ui.charts.ChartManager.prototype._registerChartDeselect=function(a){var b=this;a.onDeselect().addListener(new epiviz.events.EventListener(function(){for(var a in b._charts)b._charts.hasOwnProperty(a)&&b._charts[a].doDeselect()}))};
epiviz.ui.charts.ChartManager.prototype._registerChartRemove=function(a){var b=this;a.onRemove().addListener(new epiviz.events.EventListener(function(a){b.removeChart(a.id)}))};
epiviz.ui.charts.ChartManager.prototype._registerChartSave=function(a){var b=this;"default"!=b._config.configType?a.onSave().addListener(new epiviz.events.EventListener(function(a){(new epiviz.ui.PrintManager(a.id,"epiviz_"+Math.floor($.now()/1E3),"pdf")).print()})):a.onSave().addListener(new epiviz.events.EventListener(function(a){(new epiviz.ui.controls.SaveSvgAsImageDialog({ok:function(){},cancel:function(){}},a.id,b._config.dataServerLocation+b._config.chartSaverLocation)).show()}))};
epiviz.ui.charts.ChartManager.prototype._registerChartColorsChanged=function(a){var b=this;a.onColorsChanged().addListener(new epiviz.events.EventListener(function(a){b._chartColorsChanged.notify(a)}))};epiviz.ui.charts.ChartManager.prototype._registerChartMethodsModified=function(a){var b=this;a.onMethodsModified().addListener(new epiviz.events.EventListener(function(a){b._chartMethodsModified.notify(a)}))};
epiviz.ui.charts.ChartManager.prototype._registerChartMethodsReset=function(a){var b=this;a.onMethodsReset().addListener(new epiviz.events.EventListener(function(a){b._chartMethodsReset.notify(a)}))};epiviz.ui.charts.ChartManager.prototype._registerChartMarkersModified=function(a){var b=this;a.onMarkersModified().addListener(new epiviz.events.EventListener(function(a){b._chartMarkersModified.notify(a)}))};
epiviz.ui.charts.ChartManager.prototype._registerChartCustomSettingsChanged=function(a){var b=this;a.onCustomSettingsChanged().addListener(new epiviz.events.EventListener(function(a){b._chartCustomSettingsChanged.notify(a)}))};epiviz.ui.charts.ChartManager.prototype._registerChartSizeChanged=function(a){var b=this;a.onSizeChanged().addListener(new epiviz.events.EventListener(function(a){b._chartSizeChanged.notify(a)}))};
epiviz.ui.charts.ChartManager.prototype._registerChartMarginsChanged=function(a){var b=this;a.onMarginsChanged().addListener(new epiviz.events.EventListener(function(a){b._chartMarginsChanged.notify(a)}))};epiviz.ui.charts.ChartManager.prototype._registerChartRequestHierarchy=function(a){var b=this;a.displayType()==epiviz.ui.charts.VisualizationType.DisplayType.DATA_STRUCTURE&&a.onRequestHierarchy().addListener(new epiviz.events.EventListener(function(a){b._chartRequestHierarchy.notify(a)}))};
epiviz.ui.charts.ChartManager.prototype._registerChartPropagateHierarchyChanges=function(a){var b=this;a.displayType()==epiviz.ui.charts.VisualizationType.DisplayType.DATA_STRUCTURE&&a.onPropagateHierarchyChanges().addListener(new epiviz.events.EventListener(function(a){b._chartPropagateHierarchyChanges.notify(a)}))};
epiviz.ui.charts.ChartManager.prototype._registerChartPropogateIcicleLocationChanges=function(a){var b=this;a.displayType()==epiviz.ui.charts.VisualizationType.DisplayType.DATA_STRUCTURE&&a.onPropagateIcicleLocationChanges().addListener(new epiviz.events.EventListener(function(a){b._chartPropogateIcicleLocationChanges.notify(a)}))};
epiviz.ui.charts.ChartManager.prototype._registerChartIcicleLocationChanges=function(a){this.onChartIcicleLocationChanges().addListener(new epiviz.events.EventListener(function(b){a.displayType()==epiviz.ui.charts.VisualizationType.DisplayType.DATA_STRUCTURE&&(a._updateLocation(b.args.start,b.args.width),a._drawAxes(a._lastRoot))}))};epiviz.ui.charts.ChartManager.prototype._registerChartSearchFeature=function(a){var b=this;"featureScatterPlot"==a._featureType&&a._searchFeatureChart.addListener(new epiviz.events.EventListener(function(a){b._chartFeatureSearchEvent.notify(a)}))};
epiviz.ui.charts.ChartManager.prototype._registerHeatmapAddFeatureChart=function(a){var b=this;"heatmapPlot"==a._featureType&&a._addFeaturePlot.addListener(new epiviz.events.EventListener(function(a){b._heatmapAddFeatureChartEvent.notify(a)}))};epiviz.ui.charts.ChartManager.prototype._registerChartFeatureGetData=function(a){var b=this;"featureScatterPlot"==a._featureType&&a._registerFeatureGetData.addListener(new epiviz.events.EventListener(function(a){b._chartFeatureGetDataEvent.notify(a)}))};
epiviz.ui.charts.ChartManager.prototype.getChartSettings=function(a){a=this._charts[a];var b={};b.settings=a.customSettingsValues();b.colorMap=a.properties().colors;return b};epiviz.ui.charts.ChartManager.prototype.setChartSettings=function(a,b,c){a=this._charts[a];if(null!=b){var d=a.customSettingsValues();Object.keys(b).forEach(function(a){d[a]=b[a]});a.setCustomSettingsValues(d)}null!=c&&a.setColors(c);a.draw()};epiviz.workspaces.WorkspaceManager=function(a,b,c,d,e){this._config=a;this._locationManager=b;this._measurementsManager=c;this._chartManager=d;this._chartFactory=e;this._workspacesByName=this._workspaces=this._unchangedActiveWorkspace=this._activeWorkspace=null;this._workspacesLoaded=new epiviz.events.Event;this._activeWorkspaceChanged=new epiviz.events.Event;this._activeWorkspaceChanging=!1;this._requestWorkspaces=new epiviz.events.Event;this._activeWorkspaceContentChanged=new epiviz.events.Event;
this._uiChartSettingsChanged=new epiviz.events.Event;var f=this;this._activeWorkspaceContentChangedListener=new epiviz.events.EventListener(function(a){f._activeWorkspaceContentChanged.notify(a)});this._registerLocationChanged();this._registerComputedMeasurementAdded();this._registerComputedMeasurementRemoved();this._registerChartAdded();this._registerChartRemoved();this._registerChartsOrderChanged();this._registerChartColorsChanged();this._registerChartMethodsModified();this._registerChartMethodsReset();
this._registerChartMarkersModified();this._registerChartSizeChanged();this._registerChartMarginsChanged();this._registerChartCustomSettingsChanged()};epiviz.workspaces.WorkspaceManager.prototype.onUiChartSettingsChanged=function(){return this._uiChartSettingsChanged};epiviz.workspaces.WorkspaceManager.prototype.activeWorkspace=function(){return this._activeWorkspace||null};epiviz.workspaces.WorkspaceManager.prototype.get=function(a){return a&&this._workspaces?this._workspaces[a]||null:null};
epiviz.workspaces.WorkspaceManager.prototype.getByName=function(a){return a&&this._workspacesByName?this._workspacesByName[a]||null:null};epiviz.workspaces.WorkspaceManager.prototype.initialize=function(){this._requestWorkspaces.notify({activeWorkspaceId:epiviz.ui.WebArgsManager.WEB_ARGS.ws||epiviz.ui.WebArgsManager.WEB_ARGS.workspace||null})};
epiviz.workspaces.WorkspaceManager.prototype.updateWorkspaces=function(a,b,c,d){if(a){this._workspaces={};this._workspacesByName={};for(var e=0;e<a.length;++e)null!==a[e].id()&&(this._workspaces[a[e].id()]=a[e],this._workspacesByName[a[e].name()]=a[e])}b||(b=a&&a.length?a[0]:epiviz.workspaces.Workspace.fromRawObject(this._config.defaultWorkspaceSettings,this._chartFactory,this._config));e=this._activeWorkspace;this._activeWorkspace=b;this._unchangedActiveWorkspace=d?d:b?b.copy(b.name(),b.id()):null;
e&&e.onContentChanged().removeListener(this._activeWorkspaceContentChangedListener);this._activeWorkspace&&this._activeWorkspace.onContentChanged().addListener(this._activeWorkspaceContentChangedListener);b=epiviz.ui.WebArgsManager.WEB_ARGS;d=void 0!=b.seqName?b.seqName:this._activeWorkspace.range().seqName();var f=null,g=null;"undefined"!=b.start&&(f=parseInt(b.start)||this._activeWorkspace.range().start());"undefined"!=b.end&&(g=parseInt(b.end)||this._activeWorkspace.range().end());this._activeWorkspace.locationChanged(epiviz.datatypes.GenomicRange.fromStartEnd(d,
f,g));this._workspacesLoaded.notify({activeWorkspace:this._activeWorkspace,workspaces:a});this._activeWorkspaceChanged.notify({oldValue:e,newValue:this._activeWorkspace,workspaceId:this._activeWorkspace.id()||c})};epiviz.workspaces.WorkspaceManager.prototype.updateWorkspace=function(a){this._workspaces[a.id()]=a;this._workspacesByName[a.name()]=a};
epiviz.workspaces.WorkspaceManager.prototype.deleteActiveWorkspace=function(){var a=this._activeWorkspace;if(a&&a.id()){delete this._workspaces[a.id()];delete this._workspacesByName[a.name()];var b=null,c;for(c in this._workspaces)if(this._workspaces.hasOwnProperty(c)){b=this._workspaces[c];break}b||(b=epiviz.workspaces.Workspace.fromRawObject(this._config.defaultWorkspaceSettings,this._chartFactory,this._config));this._unchangedActiveWorkspace=(this._activeWorkspace=b)?b.copy(b.name(),b.id()):null;
b=a.range().seqName();c=a.range().start();var d=a.range().end();this._activeWorkspace.locationChanged(epiviz.datatypes.GenomicRange.fromStartEnd(b,c,d));this._activeWorkspaceChanged.notify({oldValue:a,newValue:this._activeWorkspace,workspaceId:this._activeWorkspace.id()})}};
epiviz.workspaces.WorkspaceManager.prototype.revertActiveWorkspace=function(){if(this._unchangedActiveWorkspace){var a=this._activeWorkspace,b=a.range().seqName(),c=a.range().start(),a=a.range().end();this._activeWorkspace=this._unchangedActiveWorkspace.copy(this._unchangedActiveWorkspace.name(),this._unchangedActiveWorkspace.id());this._activeWorkspace.locationChanged(epiviz.datatypes.GenomicRange.fromStartEnd(b,c,a));this._activeWorkspaceChanged.notify({oldValue:null,newValue:this._activeWorkspace,
workspaceId:this._activeWorkspace.id()})}};epiviz.workspaces.WorkspaceManager.prototype.onWorkspacesLoaded=function(){return this._workspacesLoaded};epiviz.workspaces.WorkspaceManager.prototype.onActiveWorkspaceChanged=function(){return this._activeWorkspaceChanged};epiviz.workspaces.WorkspaceManager.prototype.startChangingActiveWorkspace=function(){this._activeWorkspaceChanging=!0};epiviz.workspaces.WorkspaceManager.prototype.endChangingActiveWorkspace=function(){this._activeWorkspaceChanging=!1};
epiviz.workspaces.WorkspaceManager.prototype.activeWorkspaceChanging=function(){return this._activeWorkspaceChanging};epiviz.workspaces.WorkspaceManager.prototype.onRequestWorkspaces=function(){return this._requestWorkspaces};epiviz.workspaces.WorkspaceManager.prototype.onActiveWorkspaceContentChanged=function(){return this._activeWorkspaceContentChanged};
epiviz.workspaces.WorkspaceManager.prototype.changeActiveWorkspace=function(a,b){if((b=b||this._workspaces[a])&&b!==this._activeWorkspace){var c=this._activeWorkspace;this._unchangedActiveWorkspace=(this._activeWorkspace=b)?this._activeWorkspace.copy(this._activeWorkspace.name(),this._activeWorkspace.id()):null;this._activeWorkspaceChanged.notify({oldValue:c,newValue:this._activeWorkspace,workspaceId:a})}};
epiviz.workspaces.WorkspaceManager.prototype._registerLocationChanged=function(){var a=this;this._locationManager.onCurrentLocationChanged().addListener(new epiviz.events.EventListener(function(b){a._activeWorkspaceChanging||a._activeWorkspace&&a._activeWorkspace.locationChanged(b.newValue)}))};
epiviz.workspaces.WorkspaceManager.prototype._registerChartAdded=function(){var a=this;this._chartManager.onChartAdded().addListener(new epiviz.events.EventListener(function(b){a._activeWorkspaceChanging||a._activeWorkspace&&a._activeWorkspace.chartAdded(b.id,b.args.type,b.args.properties,b.args.chartsOrder)}))};
epiviz.workspaces.WorkspaceManager.prototype._registerChartRemoved=function(){var a=this;this._chartManager.onChartRemoved().addListener(new epiviz.events.EventListener(function(b){a._activeWorkspaceChanging||a._activeWorkspace&&a._activeWorkspace.chartRemoved(b.id,b.args)}))};
epiviz.workspaces.WorkspaceManager.prototype._registerChartsOrderChanged=function(){var a=this;this._chartManager.onChartsOrderChanged().addListener(new epiviz.events.EventListener(function(b){a._activeWorkspaceChanging||a._activeWorkspace&&a._activeWorkspace.chartsOrderChanged(b)}))};
epiviz.workspaces.WorkspaceManager.prototype._registerChartColorsChanged=function(){var a=this;this._chartManager.onChartColorsChanged().addListener(new epiviz.events.EventListener(function(b){!a._activeWorkspaceChanging&&a._activeWorkspace&&(a._activeWorkspace.chartColorsChanged(b.id,b.args),a.onUiChartSettingsChanged().notify({chartId:b.id,colorMap:b.args}))}))};
epiviz.workspaces.WorkspaceManager.prototype._registerChartMethodsModified=function(){var a=this;this._chartManager.onChartMethodsModified().addListener(new epiviz.events.EventListener(function(b){a._activeWorkspaceChanging||a._activeWorkspace&&a._activeWorkspace.chartMethodsModified(b.id,b.args)}))};
epiviz.workspaces.WorkspaceManager.prototype._registerChartMethodsReset=function(){var a=this;this._chartManager.onChartMethodsReset().addListener(new epiviz.events.EventListener(function(b){a._activeWorkspaceChanging||a._activeWorkspace&&a._activeWorkspace.chartMethodsReset(b.id)}))};
epiviz.workspaces.WorkspaceManager.prototype._registerChartMarkersModified=function(){var a=this;this._chartManager.onChartMarkersModified().addListener(new epiviz.events.EventListener(function(b){a._activeWorkspaceChanging||a._activeWorkspace&&a._activeWorkspace.chartMarkersModified(b.id,b.args)}))};
epiviz.workspaces.WorkspaceManager.prototype._registerChartCustomSettingsChanged=function(){var a=this;this._chartManager.onChartCustomSettingsChanged().addListener(new epiviz.events.EventListener(function(b){!a._activeWorkspaceChanging&&a._activeWorkspace&&(a._activeWorkspace.chartCustomSettingsChanged(b.id,b.args),a.onUiChartSettingsChanged().notify({chartId:b.id,settings:b.args}))}))};
epiviz.workspaces.WorkspaceManager.prototype._registerChartSizeChanged=function(){var a=this;this._chartManager.onChartSizeChanged().addListener(new epiviz.events.EventListener(function(b){a._activeWorkspaceChanging||a._activeWorkspace&&a._activeWorkspace.chartSizeChanged(b.id,b.args.width,b.args.height)}))};
epiviz.workspaces.WorkspaceManager.prototype._registerChartMarginsChanged=function(){var a=this;this._chartManager.onChartMarginsChanged().addListener(new epiviz.events.EventListener(function(b){a._activeWorkspaceChanging||a._activeWorkspace&&a._activeWorkspace.chartMarginsChanged(b.id,b.args)}))};
epiviz.workspaces.WorkspaceManager.prototype._registerComputedMeasurementAdded=function(){var a=this;this._measurementsManager.onComputedMeasurementsAdded().addListener(new epiviz.events.EventListener(function(b){a._activeWorkspaceChanging||a._activeWorkspace&&a._activeWorkspace.computedMeasurementsAdded(b)}))};
epiviz.workspaces.WorkspaceManager.prototype._registerComputedMeasurementRemoved=function(){var a=this;this._measurementsManager.onComputedMeasurementsRemoved().addListener(new epiviz.events.EventListener(function(b){a._activeWorkspaceChanging||a._activeWorkspace&&a._activeWorkspace.computedMeasurementsRemoved(b)}))};epiviz.workspaces.UserManager=function(a){this._config=a};epiviz.workspaces.UserManager.USER_STATUS=epiviz.workspaces.UserManager.USER_STATUS||{loggedIn:!1,userData:null,oauthProvider:null};epiviz.workspaces.UserManager.prototype.toggleLogin=function(){epiviz.workspaces.UserManager.USER_STATUS.loggedIn?this._logout():this._login()};
epiviz.workspaces.UserManager.prototype._login=function(){var a=window.location.toString();0<a.length&&(a=encodeURIComponent(a));window.location=this._config.dataServerLocation+"login.php?location="+a};epiviz.workspaces.UserManager.prototype._logout=function(){var a=window.location.toString();0<a.length&&(a=encodeURIComponent(a));window.location=this._config.dataServerLocation+"logout.php?logout&location="+a};epiviz.main=function(){var a=new epiviz.Config(epiviz.Config.SETTINGS),b=new epiviz.ui.LocationManager(a),c=new epiviz.measurements.MeasurementsManager,d=new epiviz.ui.charts.ChartFactory(a),e=new epiviz.ui.charts.ChartManager(a),f=new epiviz.workspaces.WorkspaceManager(a,b,c,e,d),g=new epiviz.ui.ControlManager(a,d,e,c,b,f),h=new epiviz.data.DataProviderFactory(a),h=new epiviz.data.DataManager(a,h),l;"false"==a.useCookie?(l=new epiviz.localstorage.LocalStorageManager(epiviz.localstorage.LocalStorageManager.MODE.INCOGNITO_MODE),
l.clearWorkspace(),a.defaultWorkspaceSettings.content.charts=null):l=new epiviz.localstorage.LocalStorageManager(epiviz.localstorage.LocalStorageManager.MODE.COOKIE_MODE);var m=new epiviz.workspaces.UserManager(a),n=new epiviz.ui.WebArgsManager(b,f),b=new epiviz.EpiViz(a,b,c,g,h,d,e,f,m,n,l);epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory.initialize(a);b.start()};goog.exportSymbol("epiviz",epiviz);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// var jquery = require('./src/js/lib/jquery/jquery-1.8.2.js');
var d3 = __webpack_require__(0);
var sprintf = __webpack_require__(2);
var epiviz = __webpack_require__(1);

module.exports = {
    sprintf: sprintf,
    epiviz : epiviz
};

// window.sprintf = sprintf;
// window.epiviz = epiviz;


/***/ })
/******/ ])));