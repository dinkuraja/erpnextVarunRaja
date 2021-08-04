(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = {exports: {}}).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
  };

  // node_modules/vue/dist/vue.js
  var require_vue = __commonJS({
    "node_modules/vue/dist/vue.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = global2 || self, global2.Vue = factory());
      })(exports, function() {
        "use strict";
        var emptyObject = Object.freeze({});
        function isUndef(v) {
          return v === void 0 || v === null;
        }
        function isDef(v) {
          return v !== void 0 && v !== null;
        }
        function isTrue(v) {
          return v === true;
        }
        function isFalse(v) {
          return v === false;
        }
        function isPrimitive(value) {
          return typeof value === "string" || typeof value === "number" || typeof value === "symbol" || typeof value === "boolean";
        }
        function isObject(obj) {
          return obj !== null && typeof obj === "object";
        }
        var _toString = Object.prototype.toString;
        function toRawType(value) {
          return _toString.call(value).slice(8, -1);
        }
        function isPlainObject(obj) {
          return _toString.call(obj) === "[object Object]";
        }
        function isRegExp(v) {
          return _toString.call(v) === "[object RegExp]";
        }
        function isValidArrayIndex(val) {
          var n = parseFloat(String(val));
          return n >= 0 && Math.floor(n) === n && isFinite(val);
        }
        function isPromise(val) {
          return isDef(val) && typeof val.then === "function" && typeof val.catch === "function";
        }
        function toString(val) {
          return val == null ? "" : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
        }
        function toNumber(val) {
          var n = parseFloat(val);
          return isNaN(n) ? val : n;
        }
        function makeMap(str2, expectsLowerCase) {
          var map = Object.create(null);
          var list = str2.split(",");
          for (var i = 0; i < list.length; i++) {
            map[list[i]] = true;
          }
          return expectsLowerCase ? function(val) {
            return map[val.toLowerCase()];
          } : function(val) {
            return map[val];
          };
        }
        var isBuiltInTag = makeMap("slot,component", true);
        var isReservedAttribute = makeMap("key,ref,slot,slot-scope,is");
        function remove(arr, item) {
          if (arr.length) {
            var index2 = arr.indexOf(item);
            if (index2 > -1) {
              return arr.splice(index2, 1);
            }
          }
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        function hasOwn(obj, key) {
          return hasOwnProperty.call(obj, key);
        }
        function cached(fn) {
          var cache = Object.create(null);
          return function cachedFn(str2) {
            var hit = cache[str2];
            return hit || (cache[str2] = fn(str2));
          };
        }
        var camelizeRE = /-(\w)/g;
        var camelize = cached(function(str2) {
          return str2.replace(camelizeRE, function(_, c) {
            return c ? c.toUpperCase() : "";
          });
        });
        var capitalize = cached(function(str2) {
          return str2.charAt(0).toUpperCase() + str2.slice(1);
        });
        var hyphenateRE = /\B([A-Z])/g;
        var hyphenate = cached(function(str2) {
          return str2.replace(hyphenateRE, "-$1").toLowerCase();
        });
        function polyfillBind(fn, ctx) {
          function boundFn(a) {
            var l = arguments.length;
            return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
          }
          boundFn._length = fn.length;
          return boundFn;
        }
        function nativeBind(fn, ctx) {
          return fn.bind(ctx);
        }
        var bind = Function.prototype.bind ? nativeBind : polyfillBind;
        function toArray(list, start) {
          start = start || 0;
          var i = list.length - start;
          var ret = new Array(i);
          while (i--) {
            ret[i] = list[i + start];
          }
          return ret;
        }
        function extend(to, _from) {
          for (var key in _from) {
            to[key] = _from[key];
          }
          return to;
        }
        function toObject(arr) {
          var res = {};
          for (var i = 0; i < arr.length; i++) {
            if (arr[i]) {
              extend(res, arr[i]);
            }
          }
          return res;
        }
        function noop(a, b, c) {
        }
        var no = function(a, b, c) {
          return false;
        };
        var identity = function(_) {
          return _;
        };
        function genStaticKeys(modules2) {
          return modules2.reduce(function(keys, m) {
            return keys.concat(m.staticKeys || []);
          }, []).join(",");
        }
        function looseEqual(a, b) {
          if (a === b) {
            return true;
          }
          var isObjectA = isObject(a);
          var isObjectB = isObject(b);
          if (isObjectA && isObjectB) {
            try {
              var isArrayA = Array.isArray(a);
              var isArrayB = Array.isArray(b);
              if (isArrayA && isArrayB) {
                return a.length === b.length && a.every(function(e, i) {
                  return looseEqual(e, b[i]);
                });
              } else if (a instanceof Date && b instanceof Date) {
                return a.getTime() === b.getTime();
              } else if (!isArrayA && !isArrayB) {
                var keysA = Object.keys(a);
                var keysB = Object.keys(b);
                return keysA.length === keysB.length && keysA.every(function(key) {
                  return looseEqual(a[key], b[key]);
                });
              } else {
                return false;
              }
            } catch (e) {
              return false;
            }
          } else if (!isObjectA && !isObjectB) {
            return String(a) === String(b);
          } else {
            return false;
          }
        }
        function looseIndexOf(arr, val) {
          for (var i = 0; i < arr.length; i++) {
            if (looseEqual(arr[i], val)) {
              return i;
            }
          }
          return -1;
        }
        function once(fn) {
          var called = false;
          return function() {
            if (!called) {
              called = true;
              fn.apply(this, arguments);
            }
          };
        }
        var SSR_ATTR = "data-server-rendered";
        var ASSET_TYPES = [
          "component",
          "directive",
          "filter"
        ];
        var LIFECYCLE_HOOKS = [
          "beforeCreate",
          "created",
          "beforeMount",
          "mounted",
          "beforeUpdate",
          "updated",
          "beforeDestroy",
          "destroyed",
          "activated",
          "deactivated",
          "errorCaptured",
          "serverPrefetch"
        ];
        var config = {
          optionMergeStrategies: Object.create(null),
          silent: false,
          productionTip: true,
          devtools: true,
          performance: false,
          errorHandler: null,
          warnHandler: null,
          ignoredElements: [],
          keyCodes: Object.create(null),
          isReservedTag: no,
          isReservedAttr: no,
          isUnknownElement: no,
          getTagNamespace: noop,
          parsePlatformTagName: identity,
          mustUseProp: no,
          async: true,
          _lifecycleHooks: LIFECYCLE_HOOKS
        };
        var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
        function isReserved(str2) {
          var c = (str2 + "").charCodeAt(0);
          return c === 36 || c === 95;
        }
        function def(obj, key, val, enumerable) {
          Object.defineProperty(obj, key, {
            value: val,
            enumerable: !!enumerable,
            writable: true,
            configurable: true
          });
        }
        var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");
        function parsePath(path) {
          if (bailRE.test(path)) {
            return;
          }
          var segments = path.split(".");
          return function(obj) {
            for (var i = 0; i < segments.length; i++) {
              if (!obj) {
                return;
              }
              obj = obj[segments[i]];
            }
            return obj;
          };
        }
        var hasProto = "__proto__" in {};
        var inBrowser = typeof window !== "undefined";
        var inWeex = typeof WXEnvironment !== "undefined" && !!WXEnvironment.platform;
        var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
        var UA = inBrowser && window.navigator.userAgent.toLowerCase();
        var isIE = UA && /msie|trident/.test(UA);
        var isIE9 = UA && UA.indexOf("msie 9.0") > 0;
        var isEdge = UA && UA.indexOf("edge/") > 0;
        var isAndroid = UA && UA.indexOf("android") > 0 || weexPlatform === "android";
        var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === "ios";
        var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
        var isPhantomJS = UA && /phantomjs/.test(UA);
        var isFF = UA && UA.match(/firefox\/(\d+)/);
        var nativeWatch = {}.watch;
        var supportsPassive = false;
        if (inBrowser) {
          try {
            var opts = {};
            Object.defineProperty(opts, "passive", {
              get: function get() {
                supportsPassive = true;
              }
            });
            window.addEventListener("test-passive", null, opts);
          } catch (e) {
          }
        }
        var _isServer;
        var isServerRendering = function() {
          if (_isServer === void 0) {
            if (!inBrowser && !inWeex && typeof global !== "undefined") {
              _isServer = global["process"] && global["process"].env.VUE_ENV === "server";
            } else {
              _isServer = false;
            }
          }
          return _isServer;
        };
        var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        function isNative(Ctor) {
          return typeof Ctor === "function" && /native code/.test(Ctor.toString());
        }
        var hasSymbol = typeof Symbol !== "undefined" && isNative(Symbol) && typeof Reflect !== "undefined" && isNative(Reflect.ownKeys);
        var _Set;
        if (typeof Set !== "undefined" && isNative(Set)) {
          _Set = Set;
        } else {
          _Set = /* @__PURE__ */ function() {
            function Set2() {
              this.set = Object.create(null);
            }
            Set2.prototype.has = function has2(key) {
              return this.set[key] === true;
            };
            Set2.prototype.add = function add2(key) {
              this.set[key] = true;
            };
            Set2.prototype.clear = function clear() {
              this.set = Object.create(null);
            };
            return Set2;
          }();
        }
        var warn = noop;
        var tip = noop;
        var generateComponentTrace = noop;
        var formatComponentName = noop;
        {
          var hasConsole = typeof console !== "undefined";
          var classifyRE = /(?:^|[-_])(\w)/g;
          var classify = function(str2) {
            return str2.replace(classifyRE, function(c) {
              return c.toUpperCase();
            }).replace(/[-_]/g, "");
          };
          warn = function(msg, vm) {
            var trace = vm ? generateComponentTrace(vm) : "";
            if (config.warnHandler) {
              config.warnHandler.call(null, msg, vm, trace);
            } else if (hasConsole && !config.silent) {
              console.error("[Vue warn]: " + msg + trace);
            }
          };
          tip = function(msg, vm) {
            if (hasConsole && !config.silent) {
              console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ""));
            }
          };
          formatComponentName = function(vm, includeFile) {
            if (vm.$root === vm) {
              return "<Root>";
            }
            var options = typeof vm === "function" && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
            var name = options.name || options._componentTag;
            var file = options.__file;
            if (!name && file) {
              var match = file.match(/([^/\\]+)\.vue$/);
              name = match && match[1];
            }
            return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : "");
          };
          var repeat = function(str2, n) {
            var res = "";
            while (n) {
              if (n % 2 === 1) {
                res += str2;
              }
              if (n > 1) {
                str2 += str2;
              }
              n >>= 1;
            }
            return res;
          };
          generateComponentTrace = function(vm) {
            if (vm._isVue && vm.$parent) {
              var tree = [];
              var currentRecursiveSequence = 0;
              while (vm) {
                if (tree.length > 0) {
                  var last = tree[tree.length - 1];
                  if (last.constructor === vm.constructor) {
                    currentRecursiveSequence++;
                    vm = vm.$parent;
                    continue;
                  } else if (currentRecursiveSequence > 0) {
                    tree[tree.length - 1] = [last, currentRecursiveSequence];
                    currentRecursiveSequence = 0;
                  }
                }
                tree.push(vm);
                vm = vm.$parent;
              }
              return "\n\nfound in\n\n" + tree.map(function(vm2, i) {
                return "" + (i === 0 ? "---> " : repeat(" ", 5 + i * 2)) + (Array.isArray(vm2) ? formatComponentName(vm2[0]) + "... (" + vm2[1] + " recursive calls)" : formatComponentName(vm2));
              }).join("\n");
            } else {
              return "\n\n(found in " + formatComponentName(vm) + ")";
            }
          };
        }
        var uid = 0;
        var Dep = function Dep2() {
          this.id = uid++;
          this.subs = [];
        };
        Dep.prototype.addSub = function addSub(sub) {
          this.subs.push(sub);
        };
        Dep.prototype.removeSub = function removeSub(sub) {
          remove(this.subs, sub);
        };
        Dep.prototype.depend = function depend() {
          if (Dep.target) {
            Dep.target.addDep(this);
          }
        };
        Dep.prototype.notify = function notify() {
          var subs = this.subs.slice();
          if (!config.async) {
            subs.sort(function(a, b) {
              return a.id - b.id;
            });
          }
          for (var i = 0, l = subs.length; i < l; i++) {
            subs[i].update();
          }
        };
        Dep.target = null;
        var targetStack = [];
        function pushTarget(target2) {
          targetStack.push(target2);
          Dep.target = target2;
        }
        function popTarget() {
          targetStack.pop();
          Dep.target = targetStack[targetStack.length - 1];
        }
        var VNode = function VNode2(tag, data, children, text2, elm, context, componentOptions, asyncFactory) {
          this.tag = tag;
          this.data = data;
          this.children = children;
          this.text = text2;
          this.elm = elm;
          this.ns = void 0;
          this.context = context;
          this.fnContext = void 0;
          this.fnOptions = void 0;
          this.fnScopeId = void 0;
          this.key = data && data.key;
          this.componentOptions = componentOptions;
          this.componentInstance = void 0;
          this.parent = void 0;
          this.raw = false;
          this.isStatic = false;
          this.isRootInsert = true;
          this.isComment = false;
          this.isCloned = false;
          this.isOnce = false;
          this.asyncFactory = asyncFactory;
          this.asyncMeta = void 0;
          this.isAsyncPlaceholder = false;
        };
        var prototypeAccessors = {child: {configurable: true}};
        prototypeAccessors.child.get = function() {
          return this.componentInstance;
        };
        Object.defineProperties(VNode.prototype, prototypeAccessors);
        var createEmptyVNode = function(text2) {
          if (text2 === void 0)
            text2 = "";
          var node = new VNode();
          node.text = text2;
          node.isComment = true;
          return node;
        };
        function createTextVNode(val) {
          return new VNode(void 0, void 0, void 0, String(val));
        }
        function cloneVNode(vnode) {
          var cloned = new VNode(vnode.tag, vnode.data, vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
          cloned.ns = vnode.ns;
          cloned.isStatic = vnode.isStatic;
          cloned.key = vnode.key;
          cloned.isComment = vnode.isComment;
          cloned.fnContext = vnode.fnContext;
          cloned.fnOptions = vnode.fnOptions;
          cloned.fnScopeId = vnode.fnScopeId;
          cloned.asyncMeta = vnode.asyncMeta;
          cloned.isCloned = true;
          return cloned;
        }
        var arrayProto = Array.prototype;
        var arrayMethods = Object.create(arrayProto);
        var methodsToPatch = [
          "push",
          "pop",
          "shift",
          "unshift",
          "splice",
          "sort",
          "reverse"
        ];
        methodsToPatch.forEach(function(method) {
          var original = arrayProto[method];
          def(arrayMethods, method, function mutator() {
            var args = [], len2 = arguments.length;
            while (len2--)
              args[len2] = arguments[len2];
            var result = original.apply(this, args);
            var ob = this.__ob__;
            var inserted;
            switch (method) {
              case "push":
              case "unshift":
                inserted = args;
                break;
              case "splice":
                inserted = args.slice(2);
                break;
            }
            if (inserted) {
              ob.observeArray(inserted);
            }
            ob.dep.notify();
            return result;
          });
        });
        var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
        var shouldObserve = true;
        function toggleObserving(value) {
          shouldObserve = value;
        }
        var Observer = function Observer2(value) {
          this.value = value;
          this.dep = new Dep();
          this.vmCount = 0;
          def(value, "__ob__", this);
          if (Array.isArray(value)) {
            if (hasProto) {
              protoAugment(value, arrayMethods);
            } else {
              copyAugment(value, arrayMethods, arrayKeys);
            }
            this.observeArray(value);
          } else {
            this.walk(value);
          }
        };
        Observer.prototype.walk = function walk(obj) {
          var keys = Object.keys(obj);
          for (var i = 0; i < keys.length; i++) {
            defineReactive$$1(obj, keys[i]);
          }
        };
        Observer.prototype.observeArray = function observeArray(items) {
          for (var i = 0, l = items.length; i < l; i++) {
            observe(items[i]);
          }
        };
        function protoAugment(target2, src) {
          target2.__proto__ = src;
        }
        function copyAugment(target2, src, keys) {
          for (var i = 0, l = keys.length; i < l; i++) {
            var key = keys[i];
            def(target2, key, src[key]);
          }
        }
        function observe(value, asRootData) {
          if (!isObject(value) || value instanceof VNode) {
            return;
          }
          var ob;
          if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
            ob = value.__ob__;
          } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
            ob = new Observer(value);
          }
          if (asRootData && ob) {
            ob.vmCount++;
          }
          return ob;
        }
        function defineReactive$$1(obj, key, val, customSetter, shallow) {
          var dep = new Dep();
          var property = Object.getOwnPropertyDescriptor(obj, key);
          if (property && property.configurable === false) {
            return;
          }
          var getter = property && property.get;
          var setter = property && property.set;
          if ((!getter || setter) && arguments.length === 2) {
            val = obj[key];
          }
          var childOb = !shallow && observe(val);
          Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get: function reactiveGetter() {
              var value = getter ? getter.call(obj) : val;
              if (Dep.target) {
                dep.depend();
                if (childOb) {
                  childOb.dep.depend();
                  if (Array.isArray(value)) {
                    dependArray(value);
                  }
                }
              }
              return value;
            },
            set: function reactiveSetter(newVal) {
              var value = getter ? getter.call(obj) : val;
              if (newVal === value || newVal !== newVal && value !== value) {
                return;
              }
              if (customSetter) {
                customSetter();
              }
              if (getter && !setter) {
                return;
              }
              if (setter) {
                setter.call(obj, newVal);
              } else {
                val = newVal;
              }
              childOb = !shallow && observe(newVal);
              dep.notify();
            }
          });
        }
        function set(target2, key, val) {
          if (isUndef(target2) || isPrimitive(target2)) {
            warn("Cannot set reactive property on undefined, null, or primitive value: " + target2);
          }
          if (Array.isArray(target2) && isValidArrayIndex(key)) {
            target2.length = Math.max(target2.length, key);
            target2.splice(key, 1, val);
            return val;
          }
          if (key in target2 && !(key in Object.prototype)) {
            target2[key] = val;
            return val;
          }
          var ob = target2.__ob__;
          if (target2._isVue || ob && ob.vmCount) {
            warn("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option.");
            return val;
          }
          if (!ob) {
            target2[key] = val;
            return val;
          }
          defineReactive$$1(ob.value, key, val);
          ob.dep.notify();
          return val;
        }
        function del(target2, key) {
          if (isUndef(target2) || isPrimitive(target2)) {
            warn("Cannot delete reactive property on undefined, null, or primitive value: " + target2);
          }
          if (Array.isArray(target2) && isValidArrayIndex(key)) {
            target2.splice(key, 1);
            return;
          }
          var ob = target2.__ob__;
          if (target2._isVue || ob && ob.vmCount) {
            warn("Avoid deleting properties on a Vue instance or its root $data - just set it to null.");
            return;
          }
          if (!hasOwn(target2, key)) {
            return;
          }
          delete target2[key];
          if (!ob) {
            return;
          }
          ob.dep.notify();
        }
        function dependArray(value) {
          for (var e = void 0, i = 0, l = value.length; i < l; i++) {
            e = value[i];
            e && e.__ob__ && e.__ob__.dep.depend();
            if (Array.isArray(e)) {
              dependArray(e);
            }
          }
        }
        var strats = config.optionMergeStrategies;
        {
          strats.el = strats.propsData = function(parent, child, vm, key) {
            if (!vm) {
              warn('option "' + key + '" can only be used during instance creation with the `new` keyword.');
            }
            return defaultStrat(parent, child);
          };
        }
        function mergeData(to, from) {
          if (!from) {
            return to;
          }
          var key, toVal, fromVal;
          var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);
          for (var i = 0; i < keys.length; i++) {
            key = keys[i];
            if (key === "__ob__") {
              continue;
            }
            toVal = to[key];
            fromVal = from[key];
            if (!hasOwn(to, key)) {
              set(to, key, fromVal);
            } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
              mergeData(toVal, fromVal);
            }
          }
          return to;
        }
        function mergeDataOrFn(parentVal, childVal, vm) {
          if (!vm) {
            if (!childVal) {
              return parentVal;
            }
            if (!parentVal) {
              return childVal;
            }
            return function mergedDataFn() {
              return mergeData(typeof childVal === "function" ? childVal.call(this, this) : childVal, typeof parentVal === "function" ? parentVal.call(this, this) : parentVal);
            };
          } else {
            return function mergedInstanceDataFn() {
              var instanceData = typeof childVal === "function" ? childVal.call(vm, vm) : childVal;
              var defaultData = typeof parentVal === "function" ? parentVal.call(vm, vm) : parentVal;
              if (instanceData) {
                return mergeData(instanceData, defaultData);
              } else {
                return defaultData;
              }
            };
          }
        }
        strats.data = function(parentVal, childVal, vm) {
          if (!vm) {
            if (childVal && typeof childVal !== "function") {
              warn('The "data" option should be a function that returns a per-instance value in component definitions.', vm);
              return parentVal;
            }
            return mergeDataOrFn(parentVal, childVal);
          }
          return mergeDataOrFn(parentVal, childVal, vm);
        };
        function mergeHook(parentVal, childVal) {
          var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
          return res ? dedupeHooks(res) : res;
        }
        function dedupeHooks(hooks2) {
          var res = [];
          for (var i = 0; i < hooks2.length; i++) {
            if (res.indexOf(hooks2[i]) === -1) {
              res.push(hooks2[i]);
            }
          }
          return res;
        }
        LIFECYCLE_HOOKS.forEach(function(hook) {
          strats[hook] = mergeHook;
        });
        function mergeAssets(parentVal, childVal, vm, key) {
          var res = Object.create(parentVal || null);
          if (childVal) {
            assertObjectType(key, childVal, vm);
            return extend(res, childVal);
          } else {
            return res;
          }
        }
        ASSET_TYPES.forEach(function(type) {
          strats[type + "s"] = mergeAssets;
        });
        strats.watch = function(parentVal, childVal, vm, key) {
          if (parentVal === nativeWatch) {
            parentVal = void 0;
          }
          if (childVal === nativeWatch) {
            childVal = void 0;
          }
          if (!childVal) {
            return Object.create(parentVal || null);
          }
          {
            assertObjectType(key, childVal, vm);
          }
          if (!parentVal) {
            return childVal;
          }
          var ret = {};
          extend(ret, parentVal);
          for (var key$1 in childVal) {
            var parent = ret[key$1];
            var child = childVal[key$1];
            if (parent && !Array.isArray(parent)) {
              parent = [parent];
            }
            ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
          }
          return ret;
        };
        strats.props = strats.methods = strats.inject = strats.computed = function(parentVal, childVal, vm, key) {
          if (childVal && true) {
            assertObjectType(key, childVal, vm);
          }
          if (!parentVal) {
            return childVal;
          }
          var ret = Object.create(null);
          extend(ret, parentVal);
          if (childVal) {
            extend(ret, childVal);
          }
          return ret;
        };
        strats.provide = mergeDataOrFn;
        var defaultStrat = function(parentVal, childVal) {
          return childVal === void 0 ? parentVal : childVal;
        };
        function checkComponents(options) {
          for (var key in options.components) {
            validateComponentName(key);
          }
        }
        function validateComponentName(name) {
          if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
            warn('Invalid component name: "' + name + '". Component names should conform to valid custom element name in html5 specification.');
          }
          if (isBuiltInTag(name) || config.isReservedTag(name)) {
            warn("Do not use built-in or reserved HTML elements as component id: " + name);
          }
        }
        function normalizeProps(options, vm) {
          var props2 = options.props;
          if (!props2) {
            return;
          }
          var res = {};
          var i, val, name;
          if (Array.isArray(props2)) {
            i = props2.length;
            while (i--) {
              val = props2[i];
              if (typeof val === "string") {
                name = camelize(val);
                res[name] = {type: null};
              } else {
                warn("props must be strings when using array syntax.");
              }
            }
          } else if (isPlainObject(props2)) {
            for (var key in props2) {
              val = props2[key];
              name = camelize(key);
              res[name] = isPlainObject(val) ? val : {type: val};
            }
          } else {
            warn('Invalid value for option "props": expected an Array or an Object, but got ' + toRawType(props2) + ".", vm);
          }
          options.props = res;
        }
        function normalizeInject(options, vm) {
          var inject = options.inject;
          if (!inject) {
            return;
          }
          var normalized = options.inject = {};
          if (Array.isArray(inject)) {
            for (var i = 0; i < inject.length; i++) {
              normalized[inject[i]] = {from: inject[i]};
            }
          } else if (isPlainObject(inject)) {
            for (var key in inject) {
              var val = inject[key];
              normalized[key] = isPlainObject(val) ? extend({from: key}, val) : {from: val};
            }
          } else {
            warn('Invalid value for option "inject": expected an Array or an Object, but got ' + toRawType(inject) + ".", vm);
          }
        }
        function normalizeDirectives(options) {
          var dirs = options.directives;
          if (dirs) {
            for (var key in dirs) {
              var def$$1 = dirs[key];
              if (typeof def$$1 === "function") {
                dirs[key] = {bind: def$$1, update: def$$1};
              }
            }
          }
        }
        function assertObjectType(name, value, vm) {
          if (!isPlainObject(value)) {
            warn('Invalid value for option "' + name + '": expected an Object, but got ' + toRawType(value) + ".", vm);
          }
        }
        function mergeOptions(parent, child, vm) {
          {
            checkComponents(child);
          }
          if (typeof child === "function") {
            child = child.options;
          }
          normalizeProps(child, vm);
          normalizeInject(child, vm);
          normalizeDirectives(child);
          if (!child._base) {
            if (child.extends) {
              parent = mergeOptions(parent, child.extends, vm);
            }
            if (child.mixins) {
              for (var i = 0, l = child.mixins.length; i < l; i++) {
                parent = mergeOptions(parent, child.mixins[i], vm);
              }
            }
          }
          var options = {};
          var key;
          for (key in parent) {
            mergeField(key);
          }
          for (key in child) {
            if (!hasOwn(parent, key)) {
              mergeField(key);
            }
          }
          function mergeField(key2) {
            var strat = strats[key2] || defaultStrat;
            options[key2] = strat(parent[key2], child[key2], vm, key2);
          }
          return options;
        }
        function resolveAsset(options, type, id, warnMissing) {
          if (typeof id !== "string") {
            return;
          }
          var assets = options[type];
          if (hasOwn(assets, id)) {
            return assets[id];
          }
          var camelizedId = camelize(id);
          if (hasOwn(assets, camelizedId)) {
            return assets[camelizedId];
          }
          var PascalCaseId = capitalize(camelizedId);
          if (hasOwn(assets, PascalCaseId)) {
            return assets[PascalCaseId];
          }
          var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
          if (warnMissing && !res) {
            warn("Failed to resolve " + type.slice(0, -1) + ": " + id, options);
          }
          return res;
        }
        function validateProp(key, propOptions, propsData, vm) {
          var prop = propOptions[key];
          var absent = !hasOwn(propsData, key);
          var value = propsData[key];
          var booleanIndex = getTypeIndex(Boolean, prop.type);
          if (booleanIndex > -1) {
            if (absent && !hasOwn(prop, "default")) {
              value = false;
            } else if (value === "" || value === hyphenate(key)) {
              var stringIndex = getTypeIndex(String, prop.type);
              if (stringIndex < 0 || booleanIndex < stringIndex) {
                value = true;
              }
            }
          }
          if (value === void 0) {
            value = getPropDefaultValue(vm, prop, key);
            var prevShouldObserve = shouldObserve;
            toggleObserving(true);
            observe(value);
            toggleObserving(prevShouldObserve);
          }
          {
            assertProp(prop, key, value, vm, absent);
          }
          return value;
        }
        function getPropDefaultValue(vm, prop, key) {
          if (!hasOwn(prop, "default")) {
            return void 0;
          }
          var def2 = prop.default;
          if (isObject(def2)) {
            warn('Invalid default value for prop "' + key + '": Props with type Object/Array must use a factory function to return the default value.', vm);
          }
          if (vm && vm.$options.propsData && vm.$options.propsData[key] === void 0 && vm._props[key] !== void 0) {
            return vm._props[key];
          }
          return typeof def2 === "function" && getType(prop.type) !== "Function" ? def2.call(vm) : def2;
        }
        function assertProp(prop, name, value, vm, absent) {
          if (prop.required && absent) {
            warn('Missing required prop: "' + name + '"', vm);
            return;
          }
          if (value == null && !prop.required) {
            return;
          }
          var type = prop.type;
          var valid = !type || type === true;
          var expectedTypes = [];
          if (type) {
            if (!Array.isArray(type)) {
              type = [type];
            }
            for (var i = 0; i < type.length && !valid; i++) {
              var assertedType = assertType(value, type[i]);
              expectedTypes.push(assertedType.expectedType || "");
              valid = assertedType.valid;
            }
          }
          if (!valid) {
            warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
            return;
          }
          var validator = prop.validator;
          if (validator) {
            if (!validator(value)) {
              warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
            }
          }
        }
        var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;
        function assertType(value, type) {
          var valid;
          var expectedType = getType(type);
          if (simpleCheckRE.test(expectedType)) {
            var t = typeof value;
            valid = t === expectedType.toLowerCase();
            if (!valid && t === "object") {
              valid = value instanceof type;
            }
          } else if (expectedType === "Object") {
            valid = isPlainObject(value);
          } else if (expectedType === "Array") {
            valid = Array.isArray(value);
          } else {
            valid = value instanceof type;
          }
          return {
            valid,
            expectedType
          };
        }
        function getType(fn) {
          var match = fn && fn.toString().match(/^\s*function (\w+)/);
          return match ? match[1] : "";
        }
        function isSameType(a, b) {
          return getType(a) === getType(b);
        }
        function getTypeIndex(type, expectedTypes) {
          if (!Array.isArray(expectedTypes)) {
            return isSameType(expectedTypes, type) ? 0 : -1;
          }
          for (var i = 0, len2 = expectedTypes.length; i < len2; i++) {
            if (isSameType(expectedTypes[i], type)) {
              return i;
            }
          }
          return -1;
        }
        function getInvalidTypeMessage(name, value, expectedTypes) {
          var message = 'Invalid prop: type check failed for prop "' + name + '". Expected ' + expectedTypes.map(capitalize).join(", ");
          var expectedType = expectedTypes[0];
          var receivedType = toRawType(value);
          var expectedValue = styleValue(value, expectedType);
          var receivedValue = styleValue(value, receivedType);
          if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
            message += " with value " + expectedValue;
          }
          message += ", got " + receivedType + " ";
          if (isExplicable(receivedType)) {
            message += "with value " + receivedValue + ".";
          }
          return message;
        }
        function styleValue(value, type) {
          if (type === "String") {
            return '"' + value + '"';
          } else if (type === "Number") {
            return "" + Number(value);
          } else {
            return "" + value;
          }
        }
        function isExplicable(value) {
          var explicitTypes = ["string", "number", "boolean"];
          return explicitTypes.some(function(elem) {
            return value.toLowerCase() === elem;
          });
        }
        function isBoolean() {
          var args = [], len2 = arguments.length;
          while (len2--)
            args[len2] = arguments[len2];
          return args.some(function(elem) {
            return elem.toLowerCase() === "boolean";
          });
        }
        function handleError(err, vm, info) {
          pushTarget();
          try {
            if (vm) {
              var cur = vm;
              while (cur = cur.$parent) {
                var hooks2 = cur.$options.errorCaptured;
                if (hooks2) {
                  for (var i = 0; i < hooks2.length; i++) {
                    try {
                      var capture = hooks2[i].call(cur, err, vm, info) === false;
                      if (capture) {
                        return;
                      }
                    } catch (e) {
                      globalHandleError(e, cur, "errorCaptured hook");
                    }
                  }
                }
              }
            }
            globalHandleError(err, vm, info);
          } finally {
            popTarget();
          }
        }
        function invokeWithErrorHandling(handler, context, args, vm, info) {
          var res;
          try {
            res = args ? handler.apply(context, args) : handler.call(context);
            if (res && !res._isVue && isPromise(res) && !res._handled) {
              res.catch(function(e) {
                return handleError(e, vm, info + " (Promise/async)");
              });
              res._handled = true;
            }
          } catch (e) {
            handleError(e, vm, info);
          }
          return res;
        }
        function globalHandleError(err, vm, info) {
          if (config.errorHandler) {
            try {
              return config.errorHandler.call(null, err, vm, info);
            } catch (e) {
              if (e !== err) {
                logError(e, null, "config.errorHandler");
              }
            }
          }
          logError(err, vm, info);
        }
        function logError(err, vm, info) {
          {
            warn("Error in " + info + ': "' + err.toString() + '"', vm);
          }
          if ((inBrowser || inWeex) && typeof console !== "undefined") {
            console.error(err);
          } else {
            throw err;
          }
        }
        var isUsingMicroTask = false;
        var callbacks = [];
        var pending = false;
        function flushCallbacks() {
          pending = false;
          var copies = callbacks.slice(0);
          callbacks.length = 0;
          for (var i = 0; i < copies.length; i++) {
            copies[i]();
          }
        }
        var timerFunc;
        if (typeof Promise !== "undefined" && isNative(Promise)) {
          var p = Promise.resolve();
          timerFunc = function() {
            p.then(flushCallbacks);
            if (isIOS) {
              setTimeout(noop);
            }
          };
          isUsingMicroTask = true;
        } else if (!isIE && typeof MutationObserver !== "undefined" && (isNative(MutationObserver) || MutationObserver.toString() === "[object MutationObserverConstructor]")) {
          var counter = 1;
          var observer = new MutationObserver(flushCallbacks);
          var textNode = document.createTextNode(String(counter));
          observer.observe(textNode, {
            characterData: true
          });
          timerFunc = function() {
            counter = (counter + 1) % 2;
            textNode.data = String(counter);
          };
          isUsingMicroTask = true;
        } else if (typeof setImmediate !== "undefined" && isNative(setImmediate)) {
          timerFunc = function() {
            setImmediate(flushCallbacks);
          };
        } else {
          timerFunc = function() {
            setTimeout(flushCallbacks, 0);
          };
        }
        function nextTick(cb, ctx) {
          var _resolve;
          callbacks.push(function() {
            if (cb) {
              try {
                cb.call(ctx);
              } catch (e) {
                handleError(e, ctx, "nextTick");
              }
            } else if (_resolve) {
              _resolve(ctx);
            }
          });
          if (!pending) {
            pending = true;
            timerFunc();
          }
          if (!cb && typeof Promise !== "undefined") {
            return new Promise(function(resolve) {
              _resolve = resolve;
            });
          }
        }
        var mark;
        var measure;
        {
          var perf = inBrowser && window.performance;
          if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
            mark = function(tag) {
              return perf.mark(tag);
            };
            measure = function(name, startTag, endTag2) {
              perf.measure(name, startTag, endTag2);
              perf.clearMarks(startTag);
              perf.clearMarks(endTag2);
            };
          }
        }
        var initProxy;
        {
          var allowedGlobals = makeMap("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,require");
          var warnNonPresent = function(target2, key) {
            warn('Property or method "' + key + '" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target2);
          };
          var warnReservedPrefix = function(target2, key) {
            warn('Property "' + key + '" must be accessed with "$data.' + key + '" because properties starting with "$" or "_" are not proxied in the Vue instance to prevent conflicts with Vue internals. See: https://vuejs.org/v2/api/#data', target2);
          };
          var hasProxy = typeof Proxy !== "undefined" && isNative(Proxy);
          if (hasProxy) {
            var isBuiltInModifier = makeMap("stop,prevent,self,ctrl,shift,alt,meta,exact");
            config.keyCodes = new Proxy(config.keyCodes, {
              set: function set2(target2, key, value) {
                if (isBuiltInModifier(key)) {
                  warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
                  return false;
                } else {
                  target2[key] = value;
                  return true;
                }
              }
            });
          }
          var hasHandler = {
            has: function has2(target2, key) {
              var has3 = key in target2;
              var isAllowed = allowedGlobals(key) || typeof key === "string" && key.charAt(0) === "_" && !(key in target2.$data);
              if (!has3 && !isAllowed) {
                if (key in target2.$data) {
                  warnReservedPrefix(target2, key);
                } else {
                  warnNonPresent(target2, key);
                }
              }
              return has3 || !isAllowed;
            }
          };
          var getHandler = {
            get: function get(target2, key) {
              if (typeof key === "string" && !(key in target2)) {
                if (key in target2.$data) {
                  warnReservedPrefix(target2, key);
                } else {
                  warnNonPresent(target2, key);
                }
              }
              return target2[key];
            }
          };
          initProxy = function initProxy2(vm) {
            if (hasProxy) {
              var options = vm.$options;
              var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
              vm._renderProxy = new Proxy(vm, handlers);
            } else {
              vm._renderProxy = vm;
            }
          };
        }
        var seenObjects = new _Set();
        function traverse(val) {
          _traverse(val, seenObjects);
          seenObjects.clear();
        }
        function _traverse(val, seen) {
          var i, keys;
          var isA = Array.isArray(val);
          if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
            return;
          }
          if (val.__ob__) {
            var depId = val.__ob__.dep.id;
            if (seen.has(depId)) {
              return;
            }
            seen.add(depId);
          }
          if (isA) {
            i = val.length;
            while (i--) {
              _traverse(val[i], seen);
            }
          } else {
            keys = Object.keys(val);
            i = keys.length;
            while (i--) {
              _traverse(val[keys[i]], seen);
            }
          }
        }
        var normalizeEvent = cached(function(name) {
          var passive = name.charAt(0) === "&";
          name = passive ? name.slice(1) : name;
          var once$$1 = name.charAt(0) === "~";
          name = once$$1 ? name.slice(1) : name;
          var capture = name.charAt(0) === "!";
          name = capture ? name.slice(1) : name;
          return {
            name,
            once: once$$1,
            capture,
            passive
          };
        });
        function createFnInvoker(fns, vm) {
          function invoker() {
            var arguments$1 = arguments;
            var fns2 = invoker.fns;
            if (Array.isArray(fns2)) {
              var cloned = fns2.slice();
              for (var i = 0; i < cloned.length; i++) {
                invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
              }
            } else {
              return invokeWithErrorHandling(fns2, null, arguments, vm, "v-on handler");
            }
          }
          invoker.fns = fns;
          return invoker;
        }
        function updateListeners(on2, oldOn, add2, remove$$1, createOnceHandler2, vm) {
          var name, def$$1, cur, old, event;
          for (name in on2) {
            def$$1 = cur = on2[name];
            old = oldOn[name];
            event = normalizeEvent(name);
            if (isUndef(cur)) {
              warn('Invalid handler for event "' + event.name + '": got ' + String(cur), vm);
            } else if (isUndef(old)) {
              if (isUndef(cur.fns)) {
                cur = on2[name] = createFnInvoker(cur, vm);
              }
              if (isTrue(event.once)) {
                cur = on2[name] = createOnceHandler2(event.name, cur, event.capture);
              }
              add2(event.name, cur, event.capture, event.passive, event.params);
            } else if (cur !== old) {
              old.fns = cur;
              on2[name] = old;
            }
          }
          for (name in oldOn) {
            if (isUndef(on2[name])) {
              event = normalizeEvent(name);
              remove$$1(event.name, oldOn[name], event.capture);
            }
          }
        }
        function mergeVNodeHook(def2, hookKey, hook) {
          if (def2 instanceof VNode) {
            def2 = def2.data.hook || (def2.data.hook = {});
          }
          var invoker;
          var oldHook = def2[hookKey];
          function wrappedHook() {
            hook.apply(this, arguments);
            remove(invoker.fns, wrappedHook);
          }
          if (isUndef(oldHook)) {
            invoker = createFnInvoker([wrappedHook]);
          } else {
            if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
              invoker = oldHook;
              invoker.fns.push(wrappedHook);
            } else {
              invoker = createFnInvoker([oldHook, wrappedHook]);
            }
          }
          invoker.merged = true;
          def2[hookKey] = invoker;
        }
        function extractPropsFromVNodeData(data, Ctor, tag) {
          var propOptions = Ctor.options.props;
          if (isUndef(propOptions)) {
            return;
          }
          var res = {};
          var attrs2 = data.attrs;
          var props2 = data.props;
          if (isDef(attrs2) || isDef(props2)) {
            for (var key in propOptions) {
              var altKey = hyphenate(key);
              {
                var keyInLowerCase = key.toLowerCase();
                if (key !== keyInLowerCase && attrs2 && hasOwn(attrs2, keyInLowerCase)) {
                  tip('Prop "' + keyInLowerCase + '" is passed to component ' + formatComponentName(tag || Ctor) + ', but the declared prop name is "' + key + '". Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "' + altKey + '" instead of "' + key + '".');
                }
              }
              checkProp(res, props2, key, altKey, true) || checkProp(res, attrs2, key, altKey, false);
            }
          }
          return res;
        }
        function checkProp(res, hash2, key, altKey, preserve) {
          if (isDef(hash2)) {
            if (hasOwn(hash2, key)) {
              res[key] = hash2[key];
              if (!preserve) {
                delete hash2[key];
              }
              return true;
            } else if (hasOwn(hash2, altKey)) {
              res[key] = hash2[altKey];
              if (!preserve) {
                delete hash2[altKey];
              }
              return true;
            }
          }
          return false;
        }
        function simpleNormalizeChildren(children) {
          for (var i = 0; i < children.length; i++) {
            if (Array.isArray(children[i])) {
              return Array.prototype.concat.apply([], children);
            }
          }
          return children;
        }
        function normalizeChildren(children) {
          return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : void 0;
        }
        function isTextNode(node) {
          return isDef(node) && isDef(node.text) && isFalse(node.isComment);
        }
        function normalizeArrayChildren(children, nestedIndex) {
          var res = [];
          var i, c, lastIndex, last;
          for (i = 0; i < children.length; i++) {
            c = children[i];
            if (isUndef(c) || typeof c === "boolean") {
              continue;
            }
            lastIndex = res.length - 1;
            last = res[lastIndex];
            if (Array.isArray(c)) {
              if (c.length > 0) {
                c = normalizeArrayChildren(c, (nestedIndex || "") + "_" + i);
                if (isTextNode(c[0]) && isTextNode(last)) {
                  res[lastIndex] = createTextVNode(last.text + c[0].text);
                  c.shift();
                }
                res.push.apply(res, c);
              }
            } else if (isPrimitive(c)) {
              if (isTextNode(last)) {
                res[lastIndex] = createTextVNode(last.text + c);
              } else if (c !== "") {
                res.push(createTextVNode(c));
              }
            } else {
              if (isTextNode(c) && isTextNode(last)) {
                res[lastIndex] = createTextVNode(last.text + c.text);
              } else {
                if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
                  c.key = "__vlist" + nestedIndex + "_" + i + "__";
                }
                res.push(c);
              }
            }
          }
          return res;
        }
        function initProvide(vm) {
          var provide = vm.$options.provide;
          if (provide) {
            vm._provided = typeof provide === "function" ? provide.call(vm) : provide;
          }
        }
        function initInjections(vm) {
          var result = resolveInject(vm.$options.inject, vm);
          if (result) {
            toggleObserving(false);
            Object.keys(result).forEach(function(key) {
              {
                defineReactive$$1(vm, key, result[key], function() {
                  warn('Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. injection being mutated: "' + key + '"', vm);
                });
              }
            });
            toggleObserving(true);
          }
        }
        function resolveInject(inject, vm) {
          if (inject) {
            var result = Object.create(null);
            var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key === "__ob__") {
                continue;
              }
              var provideKey = inject[key].from;
              var source = vm;
              while (source) {
                if (source._provided && hasOwn(source._provided, provideKey)) {
                  result[key] = source._provided[provideKey];
                  break;
                }
                source = source.$parent;
              }
              if (!source) {
                if ("default" in inject[key]) {
                  var provideDefault = inject[key].default;
                  result[key] = typeof provideDefault === "function" ? provideDefault.call(vm) : provideDefault;
                } else {
                  warn('Injection "' + key + '" not found', vm);
                }
              }
            }
            return result;
          }
        }
        function resolveSlots(children, context) {
          if (!children || !children.length) {
            return {};
          }
          var slots = {};
          for (var i = 0, l = children.length; i < l; i++) {
            var child = children[i];
            var data = child.data;
            if (data && data.attrs && data.attrs.slot) {
              delete data.attrs.slot;
            }
            if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
              var name = data.slot;
              var slot = slots[name] || (slots[name] = []);
              if (child.tag === "template") {
                slot.push.apply(slot, child.children || []);
              } else {
                slot.push(child);
              }
            } else {
              (slots.default || (slots.default = [])).push(child);
            }
          }
          for (var name$1 in slots) {
            if (slots[name$1].every(isWhitespace)) {
              delete slots[name$1];
            }
          }
          return slots;
        }
        function isWhitespace(node) {
          return node.isComment && !node.asyncFactory || node.text === " ";
        }
        function normalizeScopedSlots(slots, normalSlots, prevSlots) {
          var res;
          var hasNormalSlots = Object.keys(normalSlots).length > 0;
          var isStable = slots ? !!slots.$stable : !hasNormalSlots;
          var key = slots && slots.$key;
          if (!slots) {
            res = {};
          } else if (slots._normalized) {
            return slots._normalized;
          } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
            return prevSlots;
          } else {
            res = {};
            for (var key$1 in slots) {
              if (slots[key$1] && key$1[0] !== "$") {
                res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
              }
            }
          }
          for (var key$2 in normalSlots) {
            if (!(key$2 in res)) {
              res[key$2] = proxyNormalSlot(normalSlots, key$2);
            }
          }
          if (slots && Object.isExtensible(slots)) {
            slots._normalized = res;
          }
          def(res, "$stable", isStable);
          def(res, "$key", key);
          def(res, "$hasNormal", hasNormalSlots);
          return res;
        }
        function normalizeScopedSlot(normalSlots, key, fn) {
          var normalized = function() {
            var res = arguments.length ? fn.apply(null, arguments) : fn({});
            res = res && typeof res === "object" && !Array.isArray(res) ? [res] : normalizeChildren(res);
            return res && (res.length === 0 || res.length === 1 && res[0].isComment) ? void 0 : res;
          };
          if (fn.proxy) {
            Object.defineProperty(normalSlots, key, {
              get: normalized,
              enumerable: true,
              configurable: true
            });
          }
          return normalized;
        }
        function proxyNormalSlot(slots, key) {
          return function() {
            return slots[key];
          };
        }
        function renderList(val, render) {
          var ret, i, l, keys, key;
          if (Array.isArray(val) || typeof val === "string") {
            ret = new Array(val.length);
            for (i = 0, l = val.length; i < l; i++) {
              ret[i] = render(val[i], i);
            }
          } else if (typeof val === "number") {
            ret = new Array(val);
            for (i = 0; i < val; i++) {
              ret[i] = render(i + 1, i);
            }
          } else if (isObject(val)) {
            if (hasSymbol && val[Symbol.iterator]) {
              ret = [];
              var iterator = val[Symbol.iterator]();
              var result = iterator.next();
              while (!result.done) {
                ret.push(render(result.value, ret.length));
                result = iterator.next();
              }
            } else {
              keys = Object.keys(val);
              ret = new Array(keys.length);
              for (i = 0, l = keys.length; i < l; i++) {
                key = keys[i];
                ret[i] = render(val[key], key, i);
              }
            }
          }
          if (!isDef(ret)) {
            ret = [];
          }
          ret._isVList = true;
          return ret;
        }
        function renderSlot(name, fallback, props2, bindObject) {
          var scopedSlotFn = this.$scopedSlots[name];
          var nodes;
          if (scopedSlotFn) {
            props2 = props2 || {};
            if (bindObject) {
              if (!isObject(bindObject)) {
                warn("slot v-bind without argument expects an Object", this);
              }
              props2 = extend(extend({}, bindObject), props2);
            }
            nodes = scopedSlotFn(props2) || fallback;
          } else {
            nodes = this.$slots[name] || fallback;
          }
          var target2 = props2 && props2.slot;
          if (target2) {
            return this.$createElement("template", {slot: target2}, nodes);
          } else {
            return nodes;
          }
        }
        function resolveFilter(id) {
          return resolveAsset(this.$options, "filters", id, true) || identity;
        }
        function isKeyNotMatch(expect, actual) {
          if (Array.isArray(expect)) {
            return expect.indexOf(actual) === -1;
          } else {
            return expect !== actual;
          }
        }
        function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
          var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
          if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
            return isKeyNotMatch(builtInKeyName, eventKeyName);
          } else if (mappedKeyCode) {
            return isKeyNotMatch(mappedKeyCode, eventKeyCode);
          } else if (eventKeyName) {
            return hyphenate(eventKeyName) !== key;
          }
        }
        function bindObjectProps(data, tag, value, asProp, isSync) {
          if (value) {
            if (!isObject(value)) {
              warn("v-bind without argument expects an Object or Array value", this);
            } else {
              if (Array.isArray(value)) {
                value = toObject(value);
              }
              var hash2;
              var loop = function(key2) {
                if (key2 === "class" || key2 === "style" || isReservedAttribute(key2)) {
                  hash2 = data;
                } else {
                  var type = data.attrs && data.attrs.type;
                  hash2 = asProp || config.mustUseProp(tag, type, key2) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
                }
                var camelizedKey = camelize(key2);
                var hyphenatedKey = hyphenate(key2);
                if (!(camelizedKey in hash2) && !(hyphenatedKey in hash2)) {
                  hash2[key2] = value[key2];
                  if (isSync) {
                    var on2 = data.on || (data.on = {});
                    on2["update:" + key2] = function($event) {
                      value[key2] = $event;
                    };
                  }
                }
              };
              for (var key in value)
                loop(key);
            }
          }
          return data;
        }
        function renderStatic(index2, isInFor) {
          var cached2 = this._staticTrees || (this._staticTrees = []);
          var tree = cached2[index2];
          if (tree && !isInFor) {
            return tree;
          }
          tree = cached2[index2] = this.$options.staticRenderFns[index2].call(this._renderProxy, null, this);
          markStatic(tree, "__static__" + index2, false);
          return tree;
        }
        function markOnce(tree, index2, key) {
          markStatic(tree, "__once__" + index2 + (key ? "_" + key : ""), true);
          return tree;
        }
        function markStatic(tree, key, isOnce) {
          if (Array.isArray(tree)) {
            for (var i = 0; i < tree.length; i++) {
              if (tree[i] && typeof tree[i] !== "string") {
                markStaticNode(tree[i], key + "_" + i, isOnce);
              }
            }
          } else {
            markStaticNode(tree, key, isOnce);
          }
        }
        function markStaticNode(node, key, isOnce) {
          node.isStatic = true;
          node.key = key;
          node.isOnce = isOnce;
        }
        function bindObjectListeners(data, value) {
          if (value) {
            if (!isPlainObject(value)) {
              warn("v-on without argument expects an Object value", this);
            } else {
              var on2 = data.on = data.on ? extend({}, data.on) : {};
              for (var key in value) {
                var existing = on2[key];
                var ours = value[key];
                on2[key] = existing ? [].concat(existing, ours) : ours;
              }
            }
          }
          return data;
        }
        function resolveScopedSlots(fns, res, hasDynamicKeys, contentHashKey) {
          res = res || {$stable: !hasDynamicKeys};
          for (var i = 0; i < fns.length; i++) {
            var slot = fns[i];
            if (Array.isArray(slot)) {
              resolveScopedSlots(slot, res, hasDynamicKeys);
            } else if (slot) {
              if (slot.proxy) {
                slot.fn.proxy = true;
              }
              res[slot.key] = slot.fn;
            }
          }
          if (contentHashKey) {
            res.$key = contentHashKey;
          }
          return res;
        }
        function bindDynamicKeys(baseObj, values) {
          for (var i = 0; i < values.length; i += 2) {
            var key = values[i];
            if (typeof key === "string" && key) {
              baseObj[values[i]] = values[i + 1];
            } else if (key !== "" && key !== null) {
              warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
            }
          }
          return baseObj;
        }
        function prependModifier(value, symbol) {
          return typeof value === "string" ? symbol + value : value;
        }
        function installRenderHelpers(target2) {
          target2._o = markOnce;
          target2._n = toNumber;
          target2._s = toString;
          target2._l = renderList;
          target2._t = renderSlot;
          target2._q = looseEqual;
          target2._i = looseIndexOf;
          target2._m = renderStatic;
          target2._f = resolveFilter;
          target2._k = checkKeyCodes;
          target2._b = bindObjectProps;
          target2._v = createTextVNode;
          target2._e = createEmptyVNode;
          target2._u = resolveScopedSlots;
          target2._g = bindObjectListeners;
          target2._d = bindDynamicKeys;
          target2._p = prependModifier;
        }
        function FunctionalRenderContext(data, props2, children, parent, Ctor) {
          var this$1 = this;
          var options = Ctor.options;
          var contextVm;
          if (hasOwn(parent, "_uid")) {
            contextVm = Object.create(parent);
            contextVm._original = parent;
          } else {
            contextVm = parent;
            parent = parent._original;
          }
          var isCompiled = isTrue(options._compiled);
          var needNormalization = !isCompiled;
          this.data = data;
          this.props = props2;
          this.children = children;
          this.parent = parent;
          this.listeners = data.on || emptyObject;
          this.injections = resolveInject(options.inject, parent);
          this.slots = function() {
            if (!this$1.$slots) {
              normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
            }
            return this$1.$slots;
          };
          Object.defineProperty(this, "scopedSlots", {
            enumerable: true,
            get: function get() {
              return normalizeScopedSlots(data.scopedSlots, this.slots());
            }
          });
          if (isCompiled) {
            this.$options = options;
            this.$slots = this.slots();
            this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
          }
          if (options._scopeId) {
            this._c = function(a, b, c, d2) {
              var vnode = createElement(contextVm, a, b, c, d2, needNormalization);
              if (vnode && !Array.isArray(vnode)) {
                vnode.fnScopeId = options._scopeId;
                vnode.fnContext = parent;
              }
              return vnode;
            };
          } else {
            this._c = function(a, b, c, d2) {
              return createElement(contextVm, a, b, c, d2, needNormalization);
            };
          }
        }
        installRenderHelpers(FunctionalRenderContext.prototype);
        function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
          var options = Ctor.options;
          var props2 = {};
          var propOptions = options.props;
          if (isDef(propOptions)) {
            for (var key in propOptions) {
              props2[key] = validateProp(key, propOptions, propsData || emptyObject);
            }
          } else {
            if (isDef(data.attrs)) {
              mergeProps(props2, data.attrs);
            }
            if (isDef(data.props)) {
              mergeProps(props2, data.props);
            }
          }
          var renderContext = new FunctionalRenderContext(data, props2, children, contextVm, Ctor);
          var vnode = options.render.call(null, renderContext._c, renderContext);
          if (vnode instanceof VNode) {
            return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
          } else if (Array.isArray(vnode)) {
            var vnodes = normalizeChildren(vnode) || [];
            var res = new Array(vnodes.length);
            for (var i = 0; i < vnodes.length; i++) {
              res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
            }
            return res;
          }
        }
        function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
          var clone = cloneVNode(vnode);
          clone.fnContext = contextVm;
          clone.fnOptions = options;
          {
            (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
          }
          if (data.slot) {
            (clone.data || (clone.data = {})).slot = data.slot;
          }
          return clone;
        }
        function mergeProps(to, from) {
          for (var key in from) {
            to[camelize(key)] = from[key];
          }
        }
        var componentVNodeHooks = {
          init: function init(vnode, hydrating) {
            if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
              var mountedNode = vnode;
              componentVNodeHooks.prepatch(mountedNode, mountedNode);
            } else {
              var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
              child.$mount(hydrating ? vnode.elm : void 0, hydrating);
            }
          },
          prepatch: function prepatch(oldVnode, vnode) {
            var options = vnode.componentOptions;
            var child = vnode.componentInstance = oldVnode.componentInstance;
            updateChildComponent(child, options.propsData, options.listeners, vnode, options.children);
          },
          insert: function insert(vnode) {
            var context = vnode.context;
            var componentInstance = vnode.componentInstance;
            if (!componentInstance._isMounted) {
              componentInstance._isMounted = true;
              callHook(componentInstance, "mounted");
            }
            if (vnode.data.keepAlive) {
              if (context._isMounted) {
                queueActivatedComponent(componentInstance);
              } else {
                activateChildComponent(componentInstance, true);
              }
            }
          },
          destroy: function destroy(vnode) {
            var componentInstance = vnode.componentInstance;
            if (!componentInstance._isDestroyed) {
              if (!vnode.data.keepAlive) {
                componentInstance.$destroy();
              } else {
                deactivateChildComponent(componentInstance, true);
              }
            }
          }
        };
        var hooksToMerge = Object.keys(componentVNodeHooks);
        function createComponent(Ctor, data, context, children, tag) {
          if (isUndef(Ctor)) {
            return;
          }
          var baseCtor = context.$options._base;
          if (isObject(Ctor)) {
            Ctor = baseCtor.extend(Ctor);
          }
          if (typeof Ctor !== "function") {
            {
              warn("Invalid Component definition: " + String(Ctor), context);
            }
            return;
          }
          var asyncFactory;
          if (isUndef(Ctor.cid)) {
            asyncFactory = Ctor;
            Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
            if (Ctor === void 0) {
              return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
            }
          }
          data = data || {};
          resolveConstructorOptions(Ctor);
          if (isDef(data.model)) {
            transformModel(Ctor.options, data);
          }
          var propsData = extractPropsFromVNodeData(data, Ctor, tag);
          if (isTrue(Ctor.options.functional)) {
            return createFunctionalComponent(Ctor, propsData, data, context, children);
          }
          var listeners = data.on;
          data.on = data.nativeOn;
          if (isTrue(Ctor.options.abstract)) {
            var slot = data.slot;
            data = {};
            if (slot) {
              data.slot = slot;
            }
          }
          installComponentHooks(data);
          var name = Ctor.options.name || tag;
          var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ""), data, void 0, void 0, void 0, context, {Ctor, propsData, listeners, tag, children}, asyncFactory);
          return vnode;
        }
        function createComponentInstanceForVnode(vnode, parent) {
          var options = {
            _isComponent: true,
            _parentVnode: vnode,
            parent
          };
          var inlineTemplate = vnode.data.inlineTemplate;
          if (isDef(inlineTemplate)) {
            options.render = inlineTemplate.render;
            options.staticRenderFns = inlineTemplate.staticRenderFns;
          }
          return new vnode.componentOptions.Ctor(options);
        }
        function installComponentHooks(data) {
          var hooks2 = data.hook || (data.hook = {});
          for (var i = 0; i < hooksToMerge.length; i++) {
            var key = hooksToMerge[i];
            var existing = hooks2[key];
            var toMerge = componentVNodeHooks[key];
            if (existing !== toMerge && !(existing && existing._merged)) {
              hooks2[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
            }
          }
        }
        function mergeHook$1(f1, f2) {
          var merged = function(a, b) {
            f1(a, b);
            f2(a, b);
          };
          merged._merged = true;
          return merged;
        }
        function transformModel(options, data) {
          var prop = options.model && options.model.prop || "value";
          var event = options.model && options.model.event || "input";
          (data.attrs || (data.attrs = {}))[prop] = data.model.value;
          var on2 = data.on || (data.on = {});
          var existing = on2[event];
          var callback = data.model.callback;
          if (isDef(existing)) {
            if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
              on2[event] = [callback].concat(existing);
            }
          } else {
            on2[event] = callback;
          }
        }
        var SIMPLE_NORMALIZE = 1;
        var ALWAYS_NORMALIZE = 2;
        function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
          if (Array.isArray(data) || isPrimitive(data)) {
            normalizationType = children;
            children = data;
            data = void 0;
          }
          if (isTrue(alwaysNormalize)) {
            normalizationType = ALWAYS_NORMALIZE;
          }
          return _createElement(context, tag, data, children, normalizationType);
        }
        function _createElement(context, tag, data, children, normalizationType) {
          if (isDef(data) && isDef(data.__ob__)) {
            warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\nAlways create fresh vnode data objects in each render!", context);
            return createEmptyVNode();
          }
          if (isDef(data) && isDef(data.is)) {
            tag = data.is;
          }
          if (!tag) {
            return createEmptyVNode();
          }
          if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
            {
              warn("Avoid using non-primitive value as key, use string/number value instead.", context);
            }
          }
          if (Array.isArray(children) && typeof children[0] === "function") {
            data = data || {};
            data.scopedSlots = {default: children[0]};
            children.length = 0;
          }
          if (normalizationType === ALWAYS_NORMALIZE) {
            children = normalizeChildren(children);
          } else if (normalizationType === SIMPLE_NORMALIZE) {
            children = simpleNormalizeChildren(children);
          }
          var vnode, ns;
          if (typeof tag === "string") {
            var Ctor;
            ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);
            if (config.isReservedTag(tag)) {
              if (isDef(data) && isDef(data.nativeOn)) {
                warn("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">.", context);
              }
              vnode = new VNode(config.parsePlatformTagName(tag), data, children, void 0, void 0, context);
            } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, "components", tag))) {
              vnode = createComponent(Ctor, data, context, children, tag);
            } else {
              vnode = new VNode(tag, data, children, void 0, void 0, context);
            }
          } else {
            vnode = createComponent(tag, data, context, children);
          }
          if (Array.isArray(vnode)) {
            return vnode;
          } else if (isDef(vnode)) {
            if (isDef(ns)) {
              applyNS(vnode, ns);
            }
            if (isDef(data)) {
              registerDeepBindings(data);
            }
            return vnode;
          } else {
            return createEmptyVNode();
          }
        }
        function applyNS(vnode, ns, force) {
          vnode.ns = ns;
          if (vnode.tag === "foreignObject") {
            ns = void 0;
            force = true;
          }
          if (isDef(vnode.children)) {
            for (var i = 0, l = vnode.children.length; i < l; i++) {
              var child = vnode.children[i];
              if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== "svg")) {
                applyNS(child, ns, force);
              }
            }
          }
        }
        function registerDeepBindings(data) {
          if (isObject(data.style)) {
            traverse(data.style);
          }
          if (isObject(data.class)) {
            traverse(data.class);
          }
        }
        function initRender(vm) {
          vm._vnode = null;
          vm._staticTrees = null;
          var options = vm.$options;
          var parentVnode = vm.$vnode = options._parentVnode;
          var renderContext = parentVnode && parentVnode.context;
          vm.$slots = resolveSlots(options._renderChildren, renderContext);
          vm.$scopedSlots = emptyObject;
          vm._c = function(a, b, c, d2) {
            return createElement(vm, a, b, c, d2, false);
          };
          vm.$createElement = function(a, b, c, d2) {
            return createElement(vm, a, b, c, d2, true);
          };
          var parentData = parentVnode && parentVnode.data;
          {
            defineReactive$$1(vm, "$attrs", parentData && parentData.attrs || emptyObject, function() {
              !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
            }, true);
            defineReactive$$1(vm, "$listeners", options._parentListeners || emptyObject, function() {
              !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
            }, true);
          }
        }
        var currentRenderingInstance = null;
        function renderMixin(Vue4) {
          installRenderHelpers(Vue4.prototype);
          Vue4.prototype.$nextTick = function(fn) {
            return nextTick(fn, this);
          };
          Vue4.prototype._render = function() {
            var vm = this;
            var ref2 = vm.$options;
            var render = ref2.render;
            var _parentVnode = ref2._parentVnode;
            if (_parentVnode) {
              vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
            }
            vm.$vnode = _parentVnode;
            var vnode;
            try {
              currentRenderingInstance = vm;
              vnode = render.call(vm._renderProxy, vm.$createElement);
            } catch (e) {
              handleError(e, vm, "render");
              if (vm.$options.renderError) {
                try {
                  vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
                } catch (e2) {
                  handleError(e2, vm, "renderError");
                  vnode = vm._vnode;
                }
              } else {
                vnode = vm._vnode;
              }
            } finally {
              currentRenderingInstance = null;
            }
            if (Array.isArray(vnode) && vnode.length === 1) {
              vnode = vnode[0];
            }
            if (!(vnode instanceof VNode)) {
              if (Array.isArray(vnode)) {
                warn("Multiple root nodes returned from render function. Render function should return a single root node.", vm);
              }
              vnode = createEmptyVNode();
            }
            vnode.parent = _parentVnode;
            return vnode;
          };
        }
        function ensureCtor(comp, base) {
          if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === "Module") {
            comp = comp.default;
          }
          return isObject(comp) ? base.extend(comp) : comp;
        }
        function createAsyncPlaceholder(factory, data, context, children, tag) {
          var node = createEmptyVNode();
          node.asyncFactory = factory;
          node.asyncMeta = {data, context, children, tag};
          return node;
        }
        function resolveAsyncComponent(factory, baseCtor) {
          if (isTrue(factory.error) && isDef(factory.errorComp)) {
            return factory.errorComp;
          }
          if (isDef(factory.resolved)) {
            return factory.resolved;
          }
          var owner = currentRenderingInstance;
          if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
            factory.owners.push(owner);
          }
          if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
            return factory.loadingComp;
          }
          if (owner && !isDef(factory.owners)) {
            var owners = factory.owners = [owner];
            var sync = true;
            var timerLoading = null;
            var timerTimeout = null;
            owner.$on("hook:destroyed", function() {
              return remove(owners, owner);
            });
            var forceRender = function(renderCompleted) {
              for (var i = 0, l = owners.length; i < l; i++) {
                owners[i].$forceUpdate();
              }
              if (renderCompleted) {
                owners.length = 0;
                if (timerLoading !== null) {
                  clearTimeout(timerLoading);
                  timerLoading = null;
                }
                if (timerTimeout !== null) {
                  clearTimeout(timerTimeout);
                  timerTimeout = null;
                }
              }
            };
            var resolve = once(function(res2) {
              factory.resolved = ensureCtor(res2, baseCtor);
              if (!sync) {
                forceRender(true);
              } else {
                owners.length = 0;
              }
            });
            var reject = once(function(reason) {
              warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ""));
              if (isDef(factory.errorComp)) {
                factory.error = true;
                forceRender(true);
              }
            });
            var res = factory(resolve, reject);
            if (isObject(res)) {
              if (isPromise(res)) {
                if (isUndef(factory.resolved)) {
                  res.then(resolve, reject);
                }
              } else if (isPromise(res.component)) {
                res.component.then(resolve, reject);
                if (isDef(res.error)) {
                  factory.errorComp = ensureCtor(res.error, baseCtor);
                }
                if (isDef(res.loading)) {
                  factory.loadingComp = ensureCtor(res.loading, baseCtor);
                  if (res.delay === 0) {
                    factory.loading = true;
                  } else {
                    timerLoading = setTimeout(function() {
                      timerLoading = null;
                      if (isUndef(factory.resolved) && isUndef(factory.error)) {
                        factory.loading = true;
                        forceRender(false);
                      }
                    }, res.delay || 200);
                  }
                }
                if (isDef(res.timeout)) {
                  timerTimeout = setTimeout(function() {
                    timerTimeout = null;
                    if (isUndef(factory.resolved)) {
                      reject("timeout (" + res.timeout + "ms)");
                    }
                  }, res.timeout);
                }
              }
            }
            sync = false;
            return factory.loading ? factory.loadingComp : factory.resolved;
          }
        }
        function isAsyncPlaceholder(node) {
          return node.isComment && node.asyncFactory;
        }
        function getFirstComponentChild(children) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              var c = children[i];
              if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
                return c;
              }
            }
          }
        }
        function initEvents(vm) {
          vm._events = Object.create(null);
          vm._hasHookEvent = false;
          var listeners = vm.$options._parentListeners;
          if (listeners) {
            updateComponentListeners(vm, listeners);
          }
        }
        var target;
        function add(event, fn) {
          target.$on(event, fn);
        }
        function remove$1(event, fn) {
          target.$off(event, fn);
        }
        function createOnceHandler(event, fn) {
          var _target = target;
          return function onceHandler() {
            var res = fn.apply(null, arguments);
            if (res !== null) {
              _target.$off(event, onceHandler);
            }
          };
        }
        function updateComponentListeners(vm, listeners, oldListeners) {
          target = vm;
          updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
          target = void 0;
        }
        function eventsMixin(Vue4) {
          var hookRE = /^hook:/;
          Vue4.prototype.$on = function(event, fn) {
            var vm = this;
            if (Array.isArray(event)) {
              for (var i = 0, l = event.length; i < l; i++) {
                vm.$on(event[i], fn);
              }
            } else {
              (vm._events[event] || (vm._events[event] = [])).push(fn);
              if (hookRE.test(event)) {
                vm._hasHookEvent = true;
              }
            }
            return vm;
          };
          Vue4.prototype.$once = function(event, fn) {
            var vm = this;
            function on2() {
              vm.$off(event, on2);
              fn.apply(vm, arguments);
            }
            on2.fn = fn;
            vm.$on(event, on2);
            return vm;
          };
          Vue4.prototype.$off = function(event, fn) {
            var vm = this;
            if (!arguments.length) {
              vm._events = Object.create(null);
              return vm;
            }
            if (Array.isArray(event)) {
              for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
                vm.$off(event[i$1], fn);
              }
              return vm;
            }
            var cbs = vm._events[event];
            if (!cbs) {
              return vm;
            }
            if (!fn) {
              vm._events[event] = null;
              return vm;
            }
            var cb;
            var i = cbs.length;
            while (i--) {
              cb = cbs[i];
              if (cb === fn || cb.fn === fn) {
                cbs.splice(i, 1);
                break;
              }
            }
            return vm;
          };
          Vue4.prototype.$emit = function(event) {
            var vm = this;
            {
              var lowerCaseEvent = event.toLowerCase();
              if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
                tip('Event "' + lowerCaseEvent + '" is emitted in component ' + formatComponentName(vm) + ' but the handler is registered for "' + event + '". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "' + hyphenate(event) + '" instead of "' + event + '".');
              }
            }
            var cbs = vm._events[event];
            if (cbs) {
              cbs = cbs.length > 1 ? toArray(cbs) : cbs;
              var args = toArray(arguments, 1);
              var info = 'event handler for "' + event + '"';
              for (var i = 0, l = cbs.length; i < l; i++) {
                invokeWithErrorHandling(cbs[i], vm, args, vm, info);
              }
            }
            return vm;
          };
        }
        var activeInstance = null;
        var isUpdatingChildComponent = false;
        function setActiveInstance(vm) {
          var prevActiveInstance = activeInstance;
          activeInstance = vm;
          return function() {
            activeInstance = prevActiveInstance;
          };
        }
        function initLifecycle(vm) {
          var options = vm.$options;
          var parent = options.parent;
          if (parent && !options.abstract) {
            while (parent.$options.abstract && parent.$parent) {
              parent = parent.$parent;
            }
            parent.$children.push(vm);
          }
          vm.$parent = parent;
          vm.$root = parent ? parent.$root : vm;
          vm.$children = [];
          vm.$refs = {};
          vm._watcher = null;
          vm._inactive = null;
          vm._directInactive = false;
          vm._isMounted = false;
          vm._isDestroyed = false;
          vm._isBeingDestroyed = false;
        }
        function lifecycleMixin(Vue4) {
          Vue4.prototype._update = function(vnode, hydrating) {
            var vm = this;
            var prevEl = vm.$el;
            var prevVnode = vm._vnode;
            var restoreActiveInstance = setActiveInstance(vm);
            vm._vnode = vnode;
            if (!prevVnode) {
              vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false);
            } else {
              vm.$el = vm.__patch__(prevVnode, vnode);
            }
            restoreActiveInstance();
            if (prevEl) {
              prevEl.__vue__ = null;
            }
            if (vm.$el) {
              vm.$el.__vue__ = vm;
            }
            if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
              vm.$parent.$el = vm.$el;
            }
          };
          Vue4.prototype.$forceUpdate = function() {
            var vm = this;
            if (vm._watcher) {
              vm._watcher.update();
            }
          };
          Vue4.prototype.$destroy = function() {
            var vm = this;
            if (vm._isBeingDestroyed) {
              return;
            }
            callHook(vm, "beforeDestroy");
            vm._isBeingDestroyed = true;
            var parent = vm.$parent;
            if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
              remove(parent.$children, vm);
            }
            if (vm._watcher) {
              vm._watcher.teardown();
            }
            var i = vm._watchers.length;
            while (i--) {
              vm._watchers[i].teardown();
            }
            if (vm._data.__ob__) {
              vm._data.__ob__.vmCount--;
            }
            vm._isDestroyed = true;
            vm.__patch__(vm._vnode, null);
            callHook(vm, "destroyed");
            vm.$off();
            if (vm.$el) {
              vm.$el.__vue__ = null;
            }
            if (vm.$vnode) {
              vm.$vnode.parent = null;
            }
          };
        }
        function mountComponent(vm, el, hydrating) {
          vm.$el = el;
          if (!vm.$options.render) {
            vm.$options.render = createEmptyVNode;
            {
              if (vm.$options.template && vm.$options.template.charAt(0) !== "#" || vm.$options.el || el) {
                warn("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.", vm);
              } else {
                warn("Failed to mount component: template or render function not defined.", vm);
              }
            }
          }
          callHook(vm, "beforeMount");
          var updateComponent;
          if (config.performance && mark) {
            updateComponent = function() {
              var name = vm._name;
              var id = vm._uid;
              var startTag = "vue-perf-start:" + id;
              var endTag2 = "vue-perf-end:" + id;
              mark(startTag);
              var vnode = vm._render();
              mark(endTag2);
              measure("vue " + name + " render", startTag, endTag2);
              mark(startTag);
              vm._update(vnode, hydrating);
              mark(endTag2);
              measure("vue " + name + " patch", startTag, endTag2);
            };
          } else {
            updateComponent = function() {
              vm._update(vm._render(), hydrating);
            };
          }
          new Watcher(vm, updateComponent, noop, {
            before: function before() {
              if (vm._isMounted && !vm._isDestroyed) {
                callHook(vm, "beforeUpdate");
              }
            }
          }, true);
          hydrating = false;
          if (vm.$vnode == null) {
            vm._isMounted = true;
            callHook(vm, "mounted");
          }
          return vm;
        }
        function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
          {
            isUpdatingChildComponent = true;
          }
          var newScopedSlots = parentVnode.data.scopedSlots;
          var oldScopedSlots = vm.$scopedSlots;
          var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key);
          var needsForceUpdate = !!(renderChildren || vm.$options._renderChildren || hasDynamicScopedSlot);
          vm.$options._parentVnode = parentVnode;
          vm.$vnode = parentVnode;
          if (vm._vnode) {
            vm._vnode.parent = parentVnode;
          }
          vm.$options._renderChildren = renderChildren;
          vm.$attrs = parentVnode.data.attrs || emptyObject;
          vm.$listeners = listeners || emptyObject;
          if (propsData && vm.$options.props) {
            toggleObserving(false);
            var props2 = vm._props;
            var propKeys = vm.$options._propKeys || [];
            for (var i = 0; i < propKeys.length; i++) {
              var key = propKeys[i];
              var propOptions = vm.$options.props;
              props2[key] = validateProp(key, propOptions, propsData, vm);
            }
            toggleObserving(true);
            vm.$options.propsData = propsData;
          }
          listeners = listeners || emptyObject;
          var oldListeners = vm.$options._parentListeners;
          vm.$options._parentListeners = listeners;
          updateComponentListeners(vm, listeners, oldListeners);
          if (needsForceUpdate) {
            vm.$slots = resolveSlots(renderChildren, parentVnode.context);
            vm.$forceUpdate();
          }
          {
            isUpdatingChildComponent = false;
          }
        }
        function isInInactiveTree(vm) {
          while (vm && (vm = vm.$parent)) {
            if (vm._inactive) {
              return true;
            }
          }
          return false;
        }
        function activateChildComponent(vm, direct) {
          if (direct) {
            vm._directInactive = false;
            if (isInInactiveTree(vm)) {
              return;
            }
          } else if (vm._directInactive) {
            return;
          }
          if (vm._inactive || vm._inactive === null) {
            vm._inactive = false;
            for (var i = 0; i < vm.$children.length; i++) {
              activateChildComponent(vm.$children[i]);
            }
            callHook(vm, "activated");
          }
        }
        function deactivateChildComponent(vm, direct) {
          if (direct) {
            vm._directInactive = true;
            if (isInInactiveTree(vm)) {
              return;
            }
          }
          if (!vm._inactive) {
            vm._inactive = true;
            for (var i = 0; i < vm.$children.length; i++) {
              deactivateChildComponent(vm.$children[i]);
            }
            callHook(vm, "deactivated");
          }
        }
        function callHook(vm, hook) {
          pushTarget();
          var handlers = vm.$options[hook];
          var info = hook + " hook";
          if (handlers) {
            for (var i = 0, j = handlers.length; i < j; i++) {
              invokeWithErrorHandling(handlers[i], vm, null, vm, info);
            }
          }
          if (vm._hasHookEvent) {
            vm.$emit("hook:" + hook);
          }
          popTarget();
        }
        var MAX_UPDATE_COUNT = 100;
        var queue = [];
        var activatedChildren = [];
        var has = {};
        var circular = {};
        var waiting = false;
        var flushing = false;
        var index = 0;
        function resetSchedulerState() {
          index = queue.length = activatedChildren.length = 0;
          has = {};
          {
            circular = {};
          }
          waiting = flushing = false;
        }
        var currentFlushTimestamp = 0;
        var getNow = Date.now;
        if (inBrowser && !isIE) {
          var performance = window.performance;
          if (performance && typeof performance.now === "function" && getNow() > document.createEvent("Event").timeStamp) {
            getNow = function() {
              return performance.now();
            };
          }
        }
        function flushSchedulerQueue() {
          currentFlushTimestamp = getNow();
          flushing = true;
          var watcher, id;
          queue.sort(function(a, b) {
            return a.id - b.id;
          });
          for (index = 0; index < queue.length; index++) {
            watcher = queue[index];
            if (watcher.before) {
              watcher.before();
            }
            id = watcher.id;
            has[id] = null;
            watcher.run();
            if (has[id] != null) {
              circular[id] = (circular[id] || 0) + 1;
              if (circular[id] > MAX_UPDATE_COUNT) {
                warn("You may have an infinite update loop " + (watcher.user ? 'in watcher with expression "' + watcher.expression + '"' : "in a component render function."), watcher.vm);
                break;
              }
            }
          }
          var activatedQueue = activatedChildren.slice();
          var updatedQueue = queue.slice();
          resetSchedulerState();
          callActivatedHooks(activatedQueue);
          callUpdatedHooks(updatedQueue);
          if (devtools && config.devtools) {
            devtools.emit("flush");
          }
        }
        function callUpdatedHooks(queue2) {
          var i = queue2.length;
          while (i--) {
            var watcher = queue2[i];
            var vm = watcher.vm;
            if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
              callHook(vm, "updated");
            }
          }
        }
        function queueActivatedComponent(vm) {
          vm._inactive = false;
          activatedChildren.push(vm);
        }
        function callActivatedHooks(queue2) {
          for (var i = 0; i < queue2.length; i++) {
            queue2[i]._inactive = true;
            activateChildComponent(queue2[i], true);
          }
        }
        function queueWatcher(watcher) {
          var id = watcher.id;
          if (has[id] == null) {
            has[id] = true;
            if (!flushing) {
              queue.push(watcher);
            } else {
              var i = queue.length - 1;
              while (i > index && queue[i].id > watcher.id) {
                i--;
              }
              queue.splice(i + 1, 0, watcher);
            }
            if (!waiting) {
              waiting = true;
              if (!config.async) {
                flushSchedulerQueue();
                return;
              }
              nextTick(flushSchedulerQueue);
            }
          }
        }
        var uid$2 = 0;
        var Watcher = function Watcher2(vm, expOrFn, cb, options, isRenderWatcher) {
          this.vm = vm;
          if (isRenderWatcher) {
            vm._watcher = this;
          }
          vm._watchers.push(this);
          if (options) {
            this.deep = !!options.deep;
            this.user = !!options.user;
            this.lazy = !!options.lazy;
            this.sync = !!options.sync;
            this.before = options.before;
          } else {
            this.deep = this.user = this.lazy = this.sync = false;
          }
          this.cb = cb;
          this.id = ++uid$2;
          this.active = true;
          this.dirty = this.lazy;
          this.deps = [];
          this.newDeps = [];
          this.depIds = new _Set();
          this.newDepIds = new _Set();
          this.expression = expOrFn.toString();
          if (typeof expOrFn === "function") {
            this.getter = expOrFn;
          } else {
            this.getter = parsePath(expOrFn);
            if (!this.getter) {
              this.getter = noop;
              warn('Failed watching path: "' + expOrFn + '" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.', vm);
            }
          }
          this.value = this.lazy ? void 0 : this.get();
        };
        Watcher.prototype.get = function get() {
          pushTarget(this);
          var value;
          var vm = this.vm;
          try {
            value = this.getter.call(vm, vm);
          } catch (e) {
            if (this.user) {
              handleError(e, vm, 'getter for watcher "' + this.expression + '"');
            } else {
              throw e;
            }
          } finally {
            if (this.deep) {
              traverse(value);
            }
            popTarget();
            this.cleanupDeps();
          }
          return value;
        };
        Watcher.prototype.addDep = function addDep(dep) {
          var id = dep.id;
          if (!this.newDepIds.has(id)) {
            this.newDepIds.add(id);
            this.newDeps.push(dep);
            if (!this.depIds.has(id)) {
              dep.addSub(this);
            }
          }
        };
        Watcher.prototype.cleanupDeps = function cleanupDeps() {
          var i = this.deps.length;
          while (i--) {
            var dep = this.deps[i];
            if (!this.newDepIds.has(dep.id)) {
              dep.removeSub(this);
            }
          }
          var tmp = this.depIds;
          this.depIds = this.newDepIds;
          this.newDepIds = tmp;
          this.newDepIds.clear();
          tmp = this.deps;
          this.deps = this.newDeps;
          this.newDeps = tmp;
          this.newDeps.length = 0;
        };
        Watcher.prototype.update = function update() {
          if (this.lazy) {
            this.dirty = true;
          } else if (this.sync) {
            this.run();
          } else {
            queueWatcher(this);
          }
        };
        Watcher.prototype.run = function run() {
          if (this.active) {
            var value = this.get();
            if (value !== this.value || isObject(value) || this.deep) {
              var oldValue = this.value;
              this.value = value;
              if (this.user) {
                try {
                  this.cb.call(this.vm, value, oldValue);
                } catch (e) {
                  handleError(e, this.vm, 'callback for watcher "' + this.expression + '"');
                }
              } else {
                this.cb.call(this.vm, value, oldValue);
              }
            }
          }
        };
        Watcher.prototype.evaluate = function evaluate() {
          this.value = this.get();
          this.dirty = false;
        };
        Watcher.prototype.depend = function depend() {
          var i = this.deps.length;
          while (i--) {
            this.deps[i].depend();
          }
        };
        Watcher.prototype.teardown = function teardown() {
          if (this.active) {
            if (!this.vm._isBeingDestroyed) {
              remove(this.vm._watchers, this);
            }
            var i = this.deps.length;
            while (i--) {
              this.deps[i].removeSub(this);
            }
            this.active = false;
          }
        };
        var sharedPropertyDefinition = {
          enumerable: true,
          configurable: true,
          get: noop,
          set: noop
        };
        function proxy(target2, sourceKey, key) {
          sharedPropertyDefinition.get = function proxyGetter() {
            return this[sourceKey][key];
          };
          sharedPropertyDefinition.set = function proxySetter(val) {
            this[sourceKey][key] = val;
          };
          Object.defineProperty(target2, key, sharedPropertyDefinition);
        }
        function initState(vm) {
          vm._watchers = [];
          var opts2 = vm.$options;
          if (opts2.props) {
            initProps(vm, opts2.props);
          }
          if (opts2.methods) {
            initMethods(vm, opts2.methods);
          }
          if (opts2.data) {
            initData(vm);
          } else {
            observe(vm._data = {}, true);
          }
          if (opts2.computed) {
            initComputed(vm, opts2.computed);
          }
          if (opts2.watch && opts2.watch !== nativeWatch) {
            initWatch(vm, opts2.watch);
          }
        }
        function initProps(vm, propsOptions) {
          var propsData = vm.$options.propsData || {};
          var props2 = vm._props = {};
          var keys = vm.$options._propKeys = [];
          var isRoot = !vm.$parent;
          if (!isRoot) {
            toggleObserving(false);
          }
          var loop = function(key2) {
            keys.push(key2);
            var value = validateProp(key2, propsOptions, propsData, vm);
            {
              var hyphenatedKey = hyphenate(key2);
              if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
                warn('"' + hyphenatedKey + '" is a reserved attribute and cannot be used as component prop.', vm);
              }
              defineReactive$$1(props2, key2, value, function() {
                if (!isRoot && !isUpdatingChildComponent) {
                  warn(`Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "` + key2 + '"', vm);
                }
              });
            }
            if (!(key2 in vm)) {
              proxy(vm, "_props", key2);
            }
          };
          for (var key in propsOptions)
            loop(key);
          toggleObserving(true);
        }
        function initData(vm) {
          var data = vm.$options.data;
          data = vm._data = typeof data === "function" ? getData(data, vm) : data || {};
          if (!isPlainObject(data)) {
            data = {};
            warn("data functions should return an object:\nhttps://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function", vm);
          }
          var keys = Object.keys(data);
          var props2 = vm.$options.props;
          var methods = vm.$options.methods;
          var i = keys.length;
          while (i--) {
            var key = keys[i];
            {
              if (methods && hasOwn(methods, key)) {
                warn('Method "' + key + '" has already been defined as a data property.', vm);
              }
            }
            if (props2 && hasOwn(props2, key)) {
              warn('The data property "' + key + '" is already declared as a prop. Use prop default value instead.', vm);
            } else if (!isReserved(key)) {
              proxy(vm, "_data", key);
            }
          }
          observe(data, true);
        }
        function getData(data, vm) {
          pushTarget();
          try {
            return data.call(vm, vm);
          } catch (e) {
            handleError(e, vm, "data()");
            return {};
          } finally {
            popTarget();
          }
        }
        var computedWatcherOptions = {lazy: true};
        function initComputed(vm, computed) {
          var watchers = vm._computedWatchers = Object.create(null);
          var isSSR = isServerRendering();
          for (var key in computed) {
            var userDef = computed[key];
            var getter = typeof userDef === "function" ? userDef : userDef.get;
            if (getter == null) {
              warn('Getter is missing for computed property "' + key + '".', vm);
            }
            if (!isSSR) {
              watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
            }
            if (!(key in vm)) {
              defineComputed(vm, key, userDef);
            } else {
              if (key in vm.$data) {
                warn('The computed property "' + key + '" is already defined in data.', vm);
              } else if (vm.$options.props && key in vm.$options.props) {
                warn('The computed property "' + key + '" is already defined as a prop.', vm);
              }
            }
          }
        }
        function defineComputed(target2, key, userDef) {
          var shouldCache = !isServerRendering();
          if (typeof userDef === "function") {
            sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
            sharedPropertyDefinition.set = noop;
          } else {
            sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
            sharedPropertyDefinition.set = userDef.set || noop;
          }
          if (sharedPropertyDefinition.set === noop) {
            sharedPropertyDefinition.set = function() {
              warn('Computed property "' + key + '" was assigned to but it has no setter.', this);
            };
          }
          Object.defineProperty(target2, key, sharedPropertyDefinition);
        }
        function createComputedGetter(key) {
          return function computedGetter() {
            var watcher = this._computedWatchers && this._computedWatchers[key];
            if (watcher) {
              if (watcher.dirty) {
                watcher.evaluate();
              }
              if (Dep.target) {
                watcher.depend();
              }
              return watcher.value;
            }
          };
        }
        function createGetterInvoker(fn) {
          return function computedGetter() {
            return fn.call(this, this);
          };
        }
        function initMethods(vm, methods) {
          var props2 = vm.$options.props;
          for (var key in methods) {
            {
              if (typeof methods[key] !== "function") {
                warn('Method "' + key + '" has type "' + typeof methods[key] + '" in the component definition. Did you reference the function correctly?', vm);
              }
              if (props2 && hasOwn(props2, key)) {
                warn('Method "' + key + '" has already been defined as a prop.', vm);
              }
              if (key in vm && isReserved(key)) {
                warn('Method "' + key + '" conflicts with an existing Vue instance method. Avoid defining component methods that start with _ or $.');
              }
            }
            vm[key] = typeof methods[key] !== "function" ? noop : bind(methods[key], vm);
          }
        }
        function initWatch(vm, watch) {
          for (var key in watch) {
            var handler = watch[key];
            if (Array.isArray(handler)) {
              for (var i = 0; i < handler.length; i++) {
                createWatcher(vm, key, handler[i]);
              }
            } else {
              createWatcher(vm, key, handler);
            }
          }
        }
        function createWatcher(vm, expOrFn, handler, options) {
          if (isPlainObject(handler)) {
            options = handler;
            handler = handler.handler;
          }
          if (typeof handler === "string") {
            handler = vm[handler];
          }
          return vm.$watch(expOrFn, handler, options);
        }
        function stateMixin(Vue4) {
          var dataDef = {};
          dataDef.get = function() {
            return this._data;
          };
          var propsDef = {};
          propsDef.get = function() {
            return this._props;
          };
          {
            dataDef.set = function() {
              warn("Avoid replacing instance root $data. Use nested data properties instead.", this);
            };
            propsDef.set = function() {
              warn("$props is readonly.", this);
            };
          }
          Object.defineProperty(Vue4.prototype, "$data", dataDef);
          Object.defineProperty(Vue4.prototype, "$props", propsDef);
          Vue4.prototype.$set = set;
          Vue4.prototype.$delete = del;
          Vue4.prototype.$watch = function(expOrFn, cb, options) {
            var vm = this;
            if (isPlainObject(cb)) {
              return createWatcher(vm, expOrFn, cb, options);
            }
            options = options || {};
            options.user = true;
            var watcher = new Watcher(vm, expOrFn, cb, options);
            if (options.immediate) {
              try {
                cb.call(vm, watcher.value);
              } catch (error) {
                handleError(error, vm, 'callback for immediate watcher "' + watcher.expression + '"');
              }
            }
            return function unwatchFn() {
              watcher.teardown();
            };
          };
        }
        var uid$3 = 0;
        function initMixin(Vue4) {
          Vue4.prototype._init = function(options) {
            var vm = this;
            vm._uid = uid$3++;
            var startTag, endTag2;
            if (config.performance && mark) {
              startTag = "vue-perf-start:" + vm._uid;
              endTag2 = "vue-perf-end:" + vm._uid;
              mark(startTag);
            }
            vm._isVue = true;
            if (options && options._isComponent) {
              initInternalComponent(vm, options);
            } else {
              vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
            }
            {
              initProxy(vm);
            }
            vm._self = vm;
            initLifecycle(vm);
            initEvents(vm);
            initRender(vm);
            callHook(vm, "beforeCreate");
            initInjections(vm);
            initState(vm);
            initProvide(vm);
            callHook(vm, "created");
            if (config.performance && mark) {
              vm._name = formatComponentName(vm, false);
              mark(endTag2);
              measure("vue " + vm._name + " init", startTag, endTag2);
            }
            if (vm.$options.el) {
              vm.$mount(vm.$options.el);
            }
          };
        }
        function initInternalComponent(vm, options) {
          var opts2 = vm.$options = Object.create(vm.constructor.options);
          var parentVnode = options._parentVnode;
          opts2.parent = options.parent;
          opts2._parentVnode = parentVnode;
          var vnodeComponentOptions = parentVnode.componentOptions;
          opts2.propsData = vnodeComponentOptions.propsData;
          opts2._parentListeners = vnodeComponentOptions.listeners;
          opts2._renderChildren = vnodeComponentOptions.children;
          opts2._componentTag = vnodeComponentOptions.tag;
          if (options.render) {
            opts2.render = options.render;
            opts2.staticRenderFns = options.staticRenderFns;
          }
        }
        function resolveConstructorOptions(Ctor) {
          var options = Ctor.options;
          if (Ctor.super) {
            var superOptions = resolveConstructorOptions(Ctor.super);
            var cachedSuperOptions = Ctor.superOptions;
            if (superOptions !== cachedSuperOptions) {
              Ctor.superOptions = superOptions;
              var modifiedOptions = resolveModifiedOptions(Ctor);
              if (modifiedOptions) {
                extend(Ctor.extendOptions, modifiedOptions);
              }
              options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
              if (options.name) {
                options.components[options.name] = Ctor;
              }
            }
          }
          return options;
        }
        function resolveModifiedOptions(Ctor) {
          var modified;
          var latest = Ctor.options;
          var sealed = Ctor.sealedOptions;
          for (var key in latest) {
            if (latest[key] !== sealed[key]) {
              if (!modified) {
                modified = {};
              }
              modified[key] = latest[key];
            }
          }
          return modified;
        }
        function Vue3(options) {
          if (!(this instanceof Vue3)) {
            warn("Vue is a constructor and should be called with the `new` keyword");
          }
          this._init(options);
        }
        initMixin(Vue3);
        stateMixin(Vue3);
        eventsMixin(Vue3);
        lifecycleMixin(Vue3);
        renderMixin(Vue3);
        function initUse(Vue4) {
          Vue4.use = function(plugin) {
            var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
            if (installedPlugins.indexOf(plugin) > -1) {
              return this;
            }
            var args = toArray(arguments, 1);
            args.unshift(this);
            if (typeof plugin.install === "function") {
              plugin.install.apply(plugin, args);
            } else if (typeof plugin === "function") {
              plugin.apply(null, args);
            }
            installedPlugins.push(plugin);
            return this;
          };
        }
        function initMixin$1(Vue4) {
          Vue4.mixin = function(mixin) {
            this.options = mergeOptions(this.options, mixin);
            return this;
          };
        }
        function initExtend(Vue4) {
          Vue4.cid = 0;
          var cid = 1;
          Vue4.extend = function(extendOptions) {
            extendOptions = extendOptions || {};
            var Super = this;
            var SuperId = Super.cid;
            var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
            if (cachedCtors[SuperId]) {
              return cachedCtors[SuperId];
            }
            var name = extendOptions.name || Super.options.name;
            if (name) {
              validateComponentName(name);
            }
            var Sub = function VueComponent(options) {
              this._init(options);
            };
            Sub.prototype = Object.create(Super.prototype);
            Sub.prototype.constructor = Sub;
            Sub.cid = cid++;
            Sub.options = mergeOptions(Super.options, extendOptions);
            Sub["super"] = Super;
            if (Sub.options.props) {
              initProps$1(Sub);
            }
            if (Sub.options.computed) {
              initComputed$1(Sub);
            }
            Sub.extend = Super.extend;
            Sub.mixin = Super.mixin;
            Sub.use = Super.use;
            ASSET_TYPES.forEach(function(type) {
              Sub[type] = Super[type];
            });
            if (name) {
              Sub.options.components[name] = Sub;
            }
            Sub.superOptions = Super.options;
            Sub.extendOptions = extendOptions;
            Sub.sealedOptions = extend({}, Sub.options);
            cachedCtors[SuperId] = Sub;
            return Sub;
          };
        }
        function initProps$1(Comp) {
          var props2 = Comp.options.props;
          for (var key in props2) {
            proxy(Comp.prototype, "_props", key);
          }
        }
        function initComputed$1(Comp) {
          var computed = Comp.options.computed;
          for (var key in computed) {
            defineComputed(Comp.prototype, key, computed[key]);
          }
        }
        function initAssetRegisters(Vue4) {
          ASSET_TYPES.forEach(function(type) {
            Vue4[type] = function(id, definition) {
              if (!definition) {
                return this.options[type + "s"][id];
              } else {
                if (type === "component") {
                  validateComponentName(id);
                }
                if (type === "component" && isPlainObject(definition)) {
                  definition.name = definition.name || id;
                  definition = this.options._base.extend(definition);
                }
                if (type === "directive" && typeof definition === "function") {
                  definition = {bind: definition, update: definition};
                }
                this.options[type + "s"][id] = definition;
                return definition;
              }
            };
          });
        }
        function getComponentName(opts2) {
          return opts2 && (opts2.Ctor.options.name || opts2.tag);
        }
        function matches(pattern, name) {
          if (Array.isArray(pattern)) {
            return pattern.indexOf(name) > -1;
          } else if (typeof pattern === "string") {
            return pattern.split(",").indexOf(name) > -1;
          } else if (isRegExp(pattern)) {
            return pattern.test(name);
          }
          return false;
        }
        function pruneCache(keepAliveInstance, filter) {
          var cache = keepAliveInstance.cache;
          var keys = keepAliveInstance.keys;
          var _vnode = keepAliveInstance._vnode;
          for (var key in cache) {
            var cachedNode = cache[key];
            if (cachedNode) {
              var name = getComponentName(cachedNode.componentOptions);
              if (name && !filter(name)) {
                pruneCacheEntry(cache, key, keys, _vnode);
              }
            }
          }
        }
        function pruneCacheEntry(cache, key, keys, current) {
          var cached$$1 = cache[key];
          if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
            cached$$1.componentInstance.$destroy();
          }
          cache[key] = null;
          remove(keys, key);
        }
        var patternTypes = [String, RegExp, Array];
        var KeepAlive = {
          name: "keep-alive",
          abstract: true,
          props: {
            include: patternTypes,
            exclude: patternTypes,
            max: [String, Number]
          },
          created: function created() {
            this.cache = Object.create(null);
            this.keys = [];
          },
          destroyed: function destroyed() {
            for (var key in this.cache) {
              pruneCacheEntry(this.cache, key, this.keys);
            }
          },
          mounted: function mounted() {
            var this$1 = this;
            this.$watch("include", function(val) {
              pruneCache(this$1, function(name) {
                return matches(val, name);
              });
            });
            this.$watch("exclude", function(val) {
              pruneCache(this$1, function(name) {
                return !matches(val, name);
              });
            });
          },
          render: function render() {
            var slot = this.$slots.default;
            var vnode = getFirstComponentChild(slot);
            var componentOptions = vnode && vnode.componentOptions;
            if (componentOptions) {
              var name = getComponentName(componentOptions);
              var ref2 = this;
              var include = ref2.include;
              var exclude = ref2.exclude;
              if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
                return vnode;
              }
              var ref$12 = this;
              var cache = ref$12.cache;
              var keys = ref$12.keys;
              var key = vnode.key == null ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : "") : vnode.key;
              if (cache[key]) {
                vnode.componentInstance = cache[key].componentInstance;
                remove(keys, key);
                keys.push(key);
              } else {
                cache[key] = vnode;
                keys.push(key);
                if (this.max && keys.length > parseInt(this.max)) {
                  pruneCacheEntry(cache, keys[0], keys, this._vnode);
                }
              }
              vnode.data.keepAlive = true;
            }
            return vnode || slot && slot[0];
          }
        };
        var builtInComponents = {
          KeepAlive
        };
        function initGlobalAPI(Vue4) {
          var configDef = {};
          configDef.get = function() {
            return config;
          };
          {
            configDef.set = function() {
              warn("Do not replace the Vue.config object, set individual fields instead.");
            };
          }
          Object.defineProperty(Vue4, "config", configDef);
          Vue4.util = {
            warn,
            extend,
            mergeOptions,
            defineReactive: defineReactive$$1
          };
          Vue4.set = set;
          Vue4.delete = del;
          Vue4.nextTick = nextTick;
          Vue4.observable = function(obj) {
            observe(obj);
            return obj;
          };
          Vue4.options = Object.create(null);
          ASSET_TYPES.forEach(function(type) {
            Vue4.options[type + "s"] = Object.create(null);
          });
          Vue4.options._base = Vue4;
          extend(Vue4.options.components, builtInComponents);
          initUse(Vue4);
          initMixin$1(Vue4);
          initExtend(Vue4);
          initAssetRegisters(Vue4);
        }
        initGlobalAPI(Vue3);
        Object.defineProperty(Vue3.prototype, "$isServer", {
          get: isServerRendering
        });
        Object.defineProperty(Vue3.prototype, "$ssrContext", {
          get: function get() {
            return this.$vnode && this.$vnode.ssrContext;
          }
        });
        Object.defineProperty(Vue3, "FunctionalRenderContext", {
          value: FunctionalRenderContext
        });
        Vue3.version = "2.6.12";
        var isReservedAttr = makeMap("style,class");
        var acceptValue = makeMap("input,textarea,option,select,progress");
        var mustUseProp = function(tag, type, attr) {
          return attr === "value" && acceptValue(tag) && type !== "button" || attr === "selected" && tag === "option" || attr === "checked" && tag === "input" || attr === "muted" && tag === "video";
        };
        var isEnumeratedAttr = makeMap("contenteditable,draggable,spellcheck");
        var isValidContentEditableValue = makeMap("events,caret,typing,plaintext-only");
        var convertEnumeratedValue = function(key, value) {
          return isFalsyAttrValue(value) || value === "false" ? "false" : key === "contenteditable" && isValidContentEditableValue(value) ? value : "true";
        };
        var isBooleanAttr = makeMap("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible");
        var xlinkNS = "http://www.w3.org/1999/xlink";
        var isXlink = function(name) {
          return name.charAt(5) === ":" && name.slice(0, 5) === "xlink";
        };
        var getXlinkProp = function(name) {
          return isXlink(name) ? name.slice(6, name.length) : "";
        };
        var isFalsyAttrValue = function(val) {
          return val == null || val === false;
        };
        function genClassForVnode(vnode) {
          var data = vnode.data;
          var parentNode2 = vnode;
          var childNode = vnode;
          while (isDef(childNode.componentInstance)) {
            childNode = childNode.componentInstance._vnode;
            if (childNode && childNode.data) {
              data = mergeClassData(childNode.data, data);
            }
          }
          while (isDef(parentNode2 = parentNode2.parent)) {
            if (parentNode2 && parentNode2.data) {
              data = mergeClassData(data, parentNode2.data);
            }
          }
          return renderClass(data.staticClass, data.class);
        }
        function mergeClassData(child, parent) {
          return {
            staticClass: concat(child.staticClass, parent.staticClass),
            class: isDef(child.class) ? [child.class, parent.class] : parent.class
          };
        }
        function renderClass(staticClass, dynamicClass) {
          if (isDef(staticClass) || isDef(dynamicClass)) {
            return concat(staticClass, stringifyClass(dynamicClass));
          }
          return "";
        }
        function concat(a, b) {
          return a ? b ? a + " " + b : a : b || "";
        }
        function stringifyClass(value) {
          if (Array.isArray(value)) {
            return stringifyArray(value);
          }
          if (isObject(value)) {
            return stringifyObject(value);
          }
          if (typeof value === "string") {
            return value;
          }
          return "";
        }
        function stringifyArray(value) {
          var res = "";
          var stringified;
          for (var i = 0, l = value.length; i < l; i++) {
            if (isDef(stringified = stringifyClass(value[i])) && stringified !== "") {
              if (res) {
                res += " ";
              }
              res += stringified;
            }
          }
          return res;
        }
        function stringifyObject(value) {
          var res = "";
          for (var key in value) {
            if (value[key]) {
              if (res) {
                res += " ";
              }
              res += key;
            }
          }
          return res;
        }
        var namespaceMap = {
          svg: "http://www.w3.org/2000/svg",
          math: "http://www.w3.org/1998/Math/MathML"
        };
        var isHTMLTag = makeMap("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot");
        var isSVG = makeMap("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", true);
        var isPreTag = function(tag) {
          return tag === "pre";
        };
        var isReservedTag = function(tag) {
          return isHTMLTag(tag) || isSVG(tag);
        };
        function getTagNamespace(tag) {
          if (isSVG(tag)) {
            return "svg";
          }
          if (tag === "math") {
            return "math";
          }
        }
        var unknownElementCache = Object.create(null);
        function isUnknownElement(tag) {
          if (!inBrowser) {
            return true;
          }
          if (isReservedTag(tag)) {
            return false;
          }
          tag = tag.toLowerCase();
          if (unknownElementCache[tag] != null) {
            return unknownElementCache[tag];
          }
          var el = document.createElement(tag);
          if (tag.indexOf("-") > -1) {
            return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
          } else {
            return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
          }
        }
        var isTextInputType = makeMap("text,number,password,search,email,tel,url");
        function query(el) {
          if (typeof el === "string") {
            var selected = document.querySelector(el);
            if (!selected) {
              warn("Cannot find element: " + el);
              return document.createElement("div");
            }
            return selected;
          } else {
            return el;
          }
        }
        function createElement$1(tagName2, vnode) {
          var elm = document.createElement(tagName2);
          if (tagName2 !== "select") {
            return elm;
          }
          if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== void 0) {
            elm.setAttribute("multiple", "multiple");
          }
          return elm;
        }
        function createElementNS(namespace, tagName2) {
          return document.createElementNS(namespaceMap[namespace], tagName2);
        }
        function createTextNode(text2) {
          return document.createTextNode(text2);
        }
        function createComment(text2) {
          return document.createComment(text2);
        }
        function insertBefore(parentNode2, newNode, referenceNode) {
          parentNode2.insertBefore(newNode, referenceNode);
        }
        function removeChild(node, child) {
          node.removeChild(child);
        }
        function appendChild(node, child) {
          node.appendChild(child);
        }
        function parentNode(node) {
          return node.parentNode;
        }
        function nextSibling(node) {
          return node.nextSibling;
        }
        function tagName(node) {
          return node.tagName;
        }
        function setTextContent(node, text2) {
          node.textContent = text2;
        }
        function setStyleScope(node, scopeId) {
          node.setAttribute(scopeId, "");
        }
        var nodeOps = /* @__PURE__ */ Object.freeze({
          createElement: createElement$1,
          createElementNS,
          createTextNode,
          createComment,
          insertBefore,
          removeChild,
          appendChild,
          parentNode,
          nextSibling,
          tagName,
          setTextContent,
          setStyleScope
        });
        var ref = {
          create: function create(_, vnode) {
            registerRef(vnode);
          },
          update: function update(oldVnode, vnode) {
            if (oldVnode.data.ref !== vnode.data.ref) {
              registerRef(oldVnode, true);
              registerRef(vnode);
            }
          },
          destroy: function destroy(vnode) {
            registerRef(vnode, true);
          }
        };
        function registerRef(vnode, isRemoval) {
          var key = vnode.data.ref;
          if (!isDef(key)) {
            return;
          }
          var vm = vnode.context;
          var ref2 = vnode.componentInstance || vnode.elm;
          var refs = vm.$refs;
          if (isRemoval) {
            if (Array.isArray(refs[key])) {
              remove(refs[key], ref2);
            } else if (refs[key] === ref2) {
              refs[key] = void 0;
            }
          } else {
            if (vnode.data.refInFor) {
              if (!Array.isArray(refs[key])) {
                refs[key] = [ref2];
              } else if (refs[key].indexOf(ref2) < 0) {
                refs[key].push(ref2);
              }
            } else {
              refs[key] = ref2;
            }
          }
        }
        var emptyNode = new VNode("", {}, []);
        var hooks = ["create", "activate", "update", "remove", "destroy"];
        function sameVnode(a, b) {
          return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
        }
        function sameInputType(a, b) {
          if (a.tag !== "input") {
            return true;
          }
          var i;
          var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
          var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
          return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
        }
        function createKeyToOldIdx(children, beginIdx, endIdx) {
          var i, key;
          var map = {};
          for (i = beginIdx; i <= endIdx; ++i) {
            key = children[i].key;
            if (isDef(key)) {
              map[key] = i;
            }
          }
          return map;
        }
        function createPatchFunction(backend) {
          var i, j;
          var cbs = {};
          var modules2 = backend.modules;
          var nodeOps2 = backend.nodeOps;
          for (i = 0; i < hooks.length; ++i) {
            cbs[hooks[i]] = [];
            for (j = 0; j < modules2.length; ++j) {
              if (isDef(modules2[j][hooks[i]])) {
                cbs[hooks[i]].push(modules2[j][hooks[i]]);
              }
            }
          }
          function emptyNodeAt(elm) {
            return new VNode(nodeOps2.tagName(elm).toLowerCase(), {}, [], void 0, elm);
          }
          function createRmCb(childElm, listeners) {
            function remove$$1() {
              if (--remove$$1.listeners === 0) {
                removeNode(childElm);
              }
            }
            remove$$1.listeners = listeners;
            return remove$$1;
          }
          function removeNode(el) {
            var parent = nodeOps2.parentNode(el);
            if (isDef(parent)) {
              nodeOps2.removeChild(parent, el);
            }
          }
          function isUnknownElement$$1(vnode, inVPre) {
            return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function(ignore) {
              return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
            })) && config.isUnknownElement(vnode.tag);
          }
          var creatingElmInVPre = 0;
          function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index2) {
            if (isDef(vnode.elm) && isDef(ownerArray)) {
              vnode = ownerArray[index2] = cloneVNode(vnode);
            }
            vnode.isRootInsert = !nested;
            if (createComponent2(vnode, insertedVnodeQueue, parentElm, refElm)) {
              return;
            }
            var data = vnode.data;
            var children = vnode.children;
            var tag = vnode.tag;
            if (isDef(tag)) {
              {
                if (data && data.pre) {
                  creatingElmInVPre++;
                }
                if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
                  warn("Unknown custom element: <" + tag + '> - did you register the component correctly? For recursive components, make sure to provide the "name" option.', vnode.context);
                }
              }
              vnode.elm = vnode.ns ? nodeOps2.createElementNS(vnode.ns, tag) : nodeOps2.createElement(tag, vnode);
              setScope(vnode);
              {
                createChildren(vnode, children, insertedVnodeQueue);
                if (isDef(data)) {
                  invokeCreateHooks(vnode, insertedVnodeQueue);
                }
                insert(parentElm, vnode.elm, refElm);
              }
              if (data && data.pre) {
                creatingElmInVPre--;
              }
            } else if (isTrue(vnode.isComment)) {
              vnode.elm = nodeOps2.createComment(vnode.text);
              insert(parentElm, vnode.elm, refElm);
            } else {
              vnode.elm = nodeOps2.createTextNode(vnode.text);
              insert(parentElm, vnode.elm, refElm);
            }
          }
          function createComponent2(vnode, insertedVnodeQueue, parentElm, refElm) {
            var i2 = vnode.data;
            if (isDef(i2)) {
              var isReactivated = isDef(vnode.componentInstance) && i2.keepAlive;
              if (isDef(i2 = i2.hook) && isDef(i2 = i2.init)) {
                i2(vnode, false);
              }
              if (isDef(vnode.componentInstance)) {
                initComponent(vnode, insertedVnodeQueue);
                insert(parentElm, vnode.elm, refElm);
                if (isTrue(isReactivated)) {
                  reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
                }
                return true;
              }
            }
          }
          function initComponent(vnode, insertedVnodeQueue) {
            if (isDef(vnode.data.pendingInsert)) {
              insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
              vnode.data.pendingInsert = null;
            }
            vnode.elm = vnode.componentInstance.$el;
            if (isPatchable(vnode)) {
              invokeCreateHooks(vnode, insertedVnodeQueue);
              setScope(vnode);
            } else {
              registerRef(vnode);
              insertedVnodeQueue.push(vnode);
            }
          }
          function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
            var i2;
            var innerNode = vnode;
            while (innerNode.componentInstance) {
              innerNode = innerNode.componentInstance._vnode;
              if (isDef(i2 = innerNode.data) && isDef(i2 = i2.transition)) {
                for (i2 = 0; i2 < cbs.activate.length; ++i2) {
                  cbs.activate[i2](emptyNode, innerNode);
                }
                insertedVnodeQueue.push(innerNode);
                break;
              }
            }
            insert(parentElm, vnode.elm, refElm);
          }
          function insert(parent, elm, ref$$1) {
            if (isDef(parent)) {
              if (isDef(ref$$1)) {
                if (nodeOps2.parentNode(ref$$1) === parent) {
                  nodeOps2.insertBefore(parent, elm, ref$$1);
                }
              } else {
                nodeOps2.appendChild(parent, elm);
              }
            }
          }
          function createChildren(vnode, children, insertedVnodeQueue) {
            if (Array.isArray(children)) {
              {
                checkDuplicateKeys(children);
              }
              for (var i2 = 0; i2 < children.length; ++i2) {
                createElm(children[i2], insertedVnodeQueue, vnode.elm, null, true, children, i2);
              }
            } else if (isPrimitive(vnode.text)) {
              nodeOps2.appendChild(vnode.elm, nodeOps2.createTextNode(String(vnode.text)));
            }
          }
          function isPatchable(vnode) {
            while (vnode.componentInstance) {
              vnode = vnode.componentInstance._vnode;
            }
            return isDef(vnode.tag);
          }
          function invokeCreateHooks(vnode, insertedVnodeQueue) {
            for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
              cbs.create[i$1](emptyNode, vnode);
            }
            i = vnode.data.hook;
            if (isDef(i)) {
              if (isDef(i.create)) {
                i.create(emptyNode, vnode);
              }
              if (isDef(i.insert)) {
                insertedVnodeQueue.push(vnode);
              }
            }
          }
          function setScope(vnode) {
            var i2;
            if (isDef(i2 = vnode.fnScopeId)) {
              nodeOps2.setStyleScope(vnode.elm, i2);
            } else {
              var ancestor = vnode;
              while (ancestor) {
                if (isDef(i2 = ancestor.context) && isDef(i2 = i2.$options._scopeId)) {
                  nodeOps2.setStyleScope(vnode.elm, i2);
                }
                ancestor = ancestor.parent;
              }
            }
            if (isDef(i2 = activeInstance) && i2 !== vnode.context && i2 !== vnode.fnContext && isDef(i2 = i2.$options._scopeId)) {
              nodeOps2.setStyleScope(vnode.elm, i2);
            }
          }
          function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
            for (; startIdx <= endIdx; ++startIdx) {
              createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
            }
          }
          function invokeDestroyHook(vnode) {
            var i2, j2;
            var data = vnode.data;
            if (isDef(data)) {
              if (isDef(i2 = data.hook) && isDef(i2 = i2.destroy)) {
                i2(vnode);
              }
              for (i2 = 0; i2 < cbs.destroy.length; ++i2) {
                cbs.destroy[i2](vnode);
              }
            }
            if (isDef(i2 = vnode.children)) {
              for (j2 = 0; j2 < vnode.children.length; ++j2) {
                invokeDestroyHook(vnode.children[j2]);
              }
            }
          }
          function removeVnodes(vnodes, startIdx, endIdx) {
            for (; startIdx <= endIdx; ++startIdx) {
              var ch = vnodes[startIdx];
              if (isDef(ch)) {
                if (isDef(ch.tag)) {
                  removeAndInvokeRemoveHook(ch);
                  invokeDestroyHook(ch);
                } else {
                  removeNode(ch.elm);
                }
              }
            }
          }
          function removeAndInvokeRemoveHook(vnode, rm) {
            if (isDef(rm) || isDef(vnode.data)) {
              var i2;
              var listeners = cbs.remove.length + 1;
              if (isDef(rm)) {
                rm.listeners += listeners;
              } else {
                rm = createRmCb(vnode.elm, listeners);
              }
              if (isDef(i2 = vnode.componentInstance) && isDef(i2 = i2._vnode) && isDef(i2.data)) {
                removeAndInvokeRemoveHook(i2, rm);
              }
              for (i2 = 0; i2 < cbs.remove.length; ++i2) {
                cbs.remove[i2](vnode, rm);
              }
              if (isDef(i2 = vnode.data.hook) && isDef(i2 = i2.remove)) {
                i2(vnode, rm);
              } else {
                rm();
              }
            } else {
              removeNode(vnode.elm);
            }
          }
          function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
            var oldStartIdx = 0;
            var newStartIdx = 0;
            var oldEndIdx = oldCh.length - 1;
            var oldStartVnode = oldCh[0];
            var oldEndVnode = oldCh[oldEndIdx];
            var newEndIdx = newCh.length - 1;
            var newStartVnode = newCh[0];
            var newEndVnode = newCh[newEndIdx];
            var oldKeyToIdx, idxInOld, vnodeToMove, refElm;
            var canMove = !removeOnly;
            {
              checkDuplicateKeys(newCh);
            }
            while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
              if (isUndef(oldStartVnode)) {
                oldStartVnode = oldCh[++oldStartIdx];
              } else if (isUndef(oldEndVnode)) {
                oldEndVnode = oldCh[--oldEndIdx];
              } else if (sameVnode(oldStartVnode, newStartVnode)) {
                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
              } else if (sameVnode(oldEndVnode, newEndVnode)) {
                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                oldEndVnode = oldCh[--oldEndIdx];
                newEndVnode = newCh[--newEndIdx];
              } else if (sameVnode(oldStartVnode, newEndVnode)) {
                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                canMove && nodeOps2.insertBefore(parentElm, oldStartVnode.elm, nodeOps2.nextSibling(oldEndVnode.elm));
                oldStartVnode = oldCh[++oldStartIdx];
                newEndVnode = newCh[--newEndIdx];
              } else if (sameVnode(oldEndVnode, newStartVnode)) {
                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                canMove && nodeOps2.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                oldEndVnode = oldCh[--oldEndIdx];
                newStartVnode = newCh[++newStartIdx];
              } else {
                if (isUndef(oldKeyToIdx)) {
                  oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                }
                idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
                if (isUndef(idxInOld)) {
                  createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                } else {
                  vnodeToMove = oldCh[idxInOld];
                  if (sameVnode(vnodeToMove, newStartVnode)) {
                    patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                    oldCh[idxInOld] = void 0;
                    canMove && nodeOps2.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
                  } else {
                    createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                  }
                }
                newStartVnode = newCh[++newStartIdx];
              }
            }
            if (oldStartIdx > oldEndIdx) {
              refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
              addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
            } else if (newStartIdx > newEndIdx) {
              removeVnodes(oldCh, oldStartIdx, oldEndIdx);
            }
          }
          function checkDuplicateKeys(children) {
            var seenKeys = {};
            for (var i2 = 0; i2 < children.length; i2++) {
              var vnode = children[i2];
              var key = vnode.key;
              if (isDef(key)) {
                if (seenKeys[key]) {
                  warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
                } else {
                  seenKeys[key] = true;
                }
              }
            }
          }
          function findIdxInOld(node, oldCh, start, end) {
            for (var i2 = start; i2 < end; i2++) {
              var c = oldCh[i2];
              if (isDef(c) && sameVnode(node, c)) {
                return i2;
              }
            }
          }
          function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index2, removeOnly) {
            if (oldVnode === vnode) {
              return;
            }
            if (isDef(vnode.elm) && isDef(ownerArray)) {
              vnode = ownerArray[index2] = cloneVNode(vnode);
            }
            var elm = vnode.elm = oldVnode.elm;
            if (isTrue(oldVnode.isAsyncPlaceholder)) {
              if (isDef(vnode.asyncFactory.resolved)) {
                hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
              } else {
                vnode.isAsyncPlaceholder = true;
              }
              return;
            }
            if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
              vnode.componentInstance = oldVnode.componentInstance;
              return;
            }
            var i2;
            var data = vnode.data;
            if (isDef(data) && isDef(i2 = data.hook) && isDef(i2 = i2.prepatch)) {
              i2(oldVnode, vnode);
            }
            var oldCh = oldVnode.children;
            var ch = vnode.children;
            if (isDef(data) && isPatchable(vnode)) {
              for (i2 = 0; i2 < cbs.update.length; ++i2) {
                cbs.update[i2](oldVnode, vnode);
              }
              if (isDef(i2 = data.hook) && isDef(i2 = i2.update)) {
                i2(oldVnode, vnode);
              }
            }
            if (isUndef(vnode.text)) {
              if (isDef(oldCh) && isDef(ch)) {
                if (oldCh !== ch) {
                  updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
                }
              } else if (isDef(ch)) {
                {
                  checkDuplicateKeys(ch);
                }
                if (isDef(oldVnode.text)) {
                  nodeOps2.setTextContent(elm, "");
                }
                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
              } else if (isDef(oldCh)) {
                removeVnodes(oldCh, 0, oldCh.length - 1);
              } else if (isDef(oldVnode.text)) {
                nodeOps2.setTextContent(elm, "");
              }
            } else if (oldVnode.text !== vnode.text) {
              nodeOps2.setTextContent(elm, vnode.text);
            }
            if (isDef(data)) {
              if (isDef(i2 = data.hook) && isDef(i2 = i2.postpatch)) {
                i2(oldVnode, vnode);
              }
            }
          }
          function invokeInsertHook(vnode, queue2, initial) {
            if (isTrue(initial) && isDef(vnode.parent)) {
              vnode.parent.data.pendingInsert = queue2;
            } else {
              for (var i2 = 0; i2 < queue2.length; ++i2) {
                queue2[i2].data.hook.insert(queue2[i2]);
              }
            }
          }
          var hydrationBailed = false;
          var isRenderedModule = makeMap("attrs,class,staticClass,staticStyle,key");
          function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
            var i2;
            var tag = vnode.tag;
            var data = vnode.data;
            var children = vnode.children;
            inVPre = inVPre || data && data.pre;
            vnode.elm = elm;
            if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
              vnode.isAsyncPlaceholder = true;
              return true;
            }
            {
              if (!assertNodeMatch(elm, vnode, inVPre)) {
                return false;
              }
            }
            if (isDef(data)) {
              if (isDef(i2 = data.hook) && isDef(i2 = i2.init)) {
                i2(vnode, true);
              }
              if (isDef(i2 = vnode.componentInstance)) {
                initComponent(vnode, insertedVnodeQueue);
                return true;
              }
            }
            if (isDef(tag)) {
              if (isDef(children)) {
                if (!elm.hasChildNodes()) {
                  createChildren(vnode, children, insertedVnodeQueue);
                } else {
                  if (isDef(i2 = data) && isDef(i2 = i2.domProps) && isDef(i2 = i2.innerHTML)) {
                    if (i2 !== elm.innerHTML) {
                      if (typeof console !== "undefined" && !hydrationBailed) {
                        hydrationBailed = true;
                        console.warn("Parent: ", elm);
                        console.warn("server innerHTML: ", i2);
                        console.warn("client innerHTML: ", elm.innerHTML);
                      }
                      return false;
                    }
                  } else {
                    var childrenMatch = true;
                    var childNode = elm.firstChild;
                    for (var i$1 = 0; i$1 < children.length; i$1++) {
                      if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                        childrenMatch = false;
                        break;
                      }
                      childNode = childNode.nextSibling;
                    }
                    if (!childrenMatch || childNode) {
                      if (typeof console !== "undefined" && !hydrationBailed) {
                        hydrationBailed = true;
                        console.warn("Parent: ", elm);
                        console.warn("Mismatching childNodes vs. VNodes: ", elm.childNodes, children);
                      }
                      return false;
                    }
                  }
                }
              }
              if (isDef(data)) {
                var fullInvoke = false;
                for (var key in data) {
                  if (!isRenderedModule(key)) {
                    fullInvoke = true;
                    invokeCreateHooks(vnode, insertedVnodeQueue);
                    break;
                  }
                }
                if (!fullInvoke && data["class"]) {
                  traverse(data["class"]);
                }
              }
            } else if (elm.data !== vnode.text) {
              elm.data = vnode.text;
            }
            return true;
          }
          function assertNodeMatch(node, vnode, inVPre) {
            if (isDef(vnode.tag)) {
              return vnode.tag.indexOf("vue-component") === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
            } else {
              return node.nodeType === (vnode.isComment ? 8 : 3);
            }
          }
          return function patch2(oldVnode, vnode, hydrating, removeOnly) {
            if (isUndef(vnode)) {
              if (isDef(oldVnode)) {
                invokeDestroyHook(oldVnode);
              }
              return;
            }
            var isInitialPatch = false;
            var insertedVnodeQueue = [];
            if (isUndef(oldVnode)) {
              isInitialPatch = true;
              createElm(vnode, insertedVnodeQueue);
            } else {
              var isRealElement = isDef(oldVnode.nodeType);
              if (!isRealElement && sameVnode(oldVnode, vnode)) {
                patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
              } else {
                if (isRealElement) {
                  if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                    oldVnode.removeAttribute(SSR_ATTR);
                    hydrating = true;
                  }
                  if (isTrue(hydrating)) {
                    if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                      invokeInsertHook(vnode, insertedVnodeQueue, true);
                      return oldVnode;
                    } else {
                      warn("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.");
                    }
                  }
                  oldVnode = emptyNodeAt(oldVnode);
                }
                var oldElm = oldVnode.elm;
                var parentElm = nodeOps2.parentNode(oldElm);
                createElm(vnode, insertedVnodeQueue, oldElm._leaveCb ? null : parentElm, nodeOps2.nextSibling(oldElm));
                if (isDef(vnode.parent)) {
                  var ancestor = vnode.parent;
                  var patchable = isPatchable(vnode);
                  while (ancestor) {
                    for (var i2 = 0; i2 < cbs.destroy.length; ++i2) {
                      cbs.destroy[i2](ancestor);
                    }
                    ancestor.elm = vnode.elm;
                    if (patchable) {
                      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                        cbs.create[i$1](emptyNode, ancestor);
                      }
                      var insert2 = ancestor.data.hook.insert;
                      if (insert2.merged) {
                        for (var i$2 = 1; i$2 < insert2.fns.length; i$2++) {
                          insert2.fns[i$2]();
                        }
                      }
                    } else {
                      registerRef(ancestor);
                    }
                    ancestor = ancestor.parent;
                  }
                }
                if (isDef(parentElm)) {
                  removeVnodes([oldVnode], 0, 0);
                } else if (isDef(oldVnode.tag)) {
                  invokeDestroyHook(oldVnode);
                }
              }
            }
            invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
            return vnode.elm;
          };
        }
        var directives = {
          create: updateDirectives,
          update: updateDirectives,
          destroy: function unbindDirectives(vnode) {
            updateDirectives(vnode, emptyNode);
          }
        };
        function updateDirectives(oldVnode, vnode) {
          if (oldVnode.data.directives || vnode.data.directives) {
            _update(oldVnode, vnode);
          }
        }
        function _update(oldVnode, vnode) {
          var isCreate = oldVnode === emptyNode;
          var isDestroy = vnode === emptyNode;
          var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
          var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
          var dirsWithInsert = [];
          var dirsWithPostpatch = [];
          var key, oldDir, dir;
          for (key in newDirs) {
            oldDir = oldDirs[key];
            dir = newDirs[key];
            if (!oldDir) {
              callHook$1(dir, "bind", vnode, oldVnode);
              if (dir.def && dir.def.inserted) {
                dirsWithInsert.push(dir);
              }
            } else {
              dir.oldValue = oldDir.value;
              dir.oldArg = oldDir.arg;
              callHook$1(dir, "update", vnode, oldVnode);
              if (dir.def && dir.def.componentUpdated) {
                dirsWithPostpatch.push(dir);
              }
            }
          }
          if (dirsWithInsert.length) {
            var callInsert = function() {
              for (var i = 0; i < dirsWithInsert.length; i++) {
                callHook$1(dirsWithInsert[i], "inserted", vnode, oldVnode);
              }
            };
            if (isCreate) {
              mergeVNodeHook(vnode, "insert", callInsert);
            } else {
              callInsert();
            }
          }
          if (dirsWithPostpatch.length) {
            mergeVNodeHook(vnode, "postpatch", function() {
              for (var i = 0; i < dirsWithPostpatch.length; i++) {
                callHook$1(dirsWithPostpatch[i], "componentUpdated", vnode, oldVnode);
              }
            });
          }
          if (!isCreate) {
            for (key in oldDirs) {
              if (!newDirs[key]) {
                callHook$1(oldDirs[key], "unbind", oldVnode, oldVnode, isDestroy);
              }
            }
          }
        }
        var emptyModifiers = Object.create(null);
        function normalizeDirectives$1(dirs, vm) {
          var res = Object.create(null);
          if (!dirs) {
            return res;
          }
          var i, dir;
          for (i = 0; i < dirs.length; i++) {
            dir = dirs[i];
            if (!dir.modifiers) {
              dir.modifiers = emptyModifiers;
            }
            res[getRawDirName(dir)] = dir;
            dir.def = resolveAsset(vm.$options, "directives", dir.name, true);
          }
          return res;
        }
        function getRawDirName(dir) {
          return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join(".");
        }
        function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
          var fn = dir.def && dir.def[hook];
          if (fn) {
            try {
              fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
            } catch (e) {
              handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
            }
          }
        }
        var baseModules = [
          ref,
          directives
        ];
        function updateAttrs(oldVnode, vnode) {
          var opts2 = vnode.componentOptions;
          if (isDef(opts2) && opts2.Ctor.options.inheritAttrs === false) {
            return;
          }
          if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
            return;
          }
          var key, cur, old;
          var elm = vnode.elm;
          var oldAttrs = oldVnode.data.attrs || {};
          var attrs2 = vnode.data.attrs || {};
          if (isDef(attrs2.__ob__)) {
            attrs2 = vnode.data.attrs = extend({}, attrs2);
          }
          for (key in attrs2) {
            cur = attrs2[key];
            old = oldAttrs[key];
            if (old !== cur) {
              setAttr(elm, key, cur);
            }
          }
          if ((isIE || isEdge) && attrs2.value !== oldAttrs.value) {
            setAttr(elm, "value", attrs2.value);
          }
          for (key in oldAttrs) {
            if (isUndef(attrs2[key])) {
              if (isXlink(key)) {
                elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
              } else if (!isEnumeratedAttr(key)) {
                elm.removeAttribute(key);
              }
            }
          }
        }
        function setAttr(el, key, value) {
          if (el.tagName.indexOf("-") > -1) {
            baseSetAttr(el, key, value);
          } else if (isBooleanAttr(key)) {
            if (isFalsyAttrValue(value)) {
              el.removeAttribute(key);
            } else {
              value = key === "allowfullscreen" && el.tagName === "EMBED" ? "true" : key;
              el.setAttribute(key, value);
            }
          } else if (isEnumeratedAttr(key)) {
            el.setAttribute(key, convertEnumeratedValue(key, value));
          } else if (isXlink(key)) {
            if (isFalsyAttrValue(value)) {
              el.removeAttributeNS(xlinkNS, getXlinkProp(key));
            } else {
              el.setAttributeNS(xlinkNS, key, value);
            }
          } else {
            baseSetAttr(el, key, value);
          }
        }
        function baseSetAttr(el, key, value) {
          if (isFalsyAttrValue(value)) {
            el.removeAttribute(key);
          } else {
            if (isIE && !isIE9 && el.tagName === "TEXTAREA" && key === "placeholder" && value !== "" && !el.__ieph) {
              var blocker = function(e) {
                e.stopImmediatePropagation();
                el.removeEventListener("input", blocker);
              };
              el.addEventListener("input", blocker);
              el.__ieph = true;
            }
            el.setAttribute(key, value);
          }
        }
        var attrs = {
          create: updateAttrs,
          update: updateAttrs
        };
        function updateClass(oldVnode, vnode) {
          var el = vnode.elm;
          var data = vnode.data;
          var oldData = oldVnode.data;
          if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
            return;
          }
          var cls = genClassForVnode(vnode);
          var transitionClass = el._transitionClasses;
          if (isDef(transitionClass)) {
            cls = concat(cls, stringifyClass(transitionClass));
          }
          if (cls !== el._prevClass) {
            el.setAttribute("class", cls);
            el._prevClass = cls;
          }
        }
        var klass = {
          create: updateClass,
          update: updateClass
        };
        var validDivisionCharRE = /[\w).+\-_$\]]/;
        function parseFilters(exp) {
          var inSingle = false;
          var inDouble = false;
          var inTemplateString = false;
          var inRegex = false;
          var curly = 0;
          var square = 0;
          var paren = 0;
          var lastFilterIndex = 0;
          var c, prev, i, expression, filters;
          for (i = 0; i < exp.length; i++) {
            prev = c;
            c = exp.charCodeAt(i);
            if (inSingle) {
              if (c === 39 && prev !== 92) {
                inSingle = false;
              }
            } else if (inDouble) {
              if (c === 34 && prev !== 92) {
                inDouble = false;
              }
            } else if (inTemplateString) {
              if (c === 96 && prev !== 92) {
                inTemplateString = false;
              }
            } else if (inRegex) {
              if (c === 47 && prev !== 92) {
                inRegex = false;
              }
            } else if (c === 124 && exp.charCodeAt(i + 1) !== 124 && exp.charCodeAt(i - 1) !== 124 && !curly && !square && !paren) {
              if (expression === void 0) {
                lastFilterIndex = i + 1;
                expression = exp.slice(0, i).trim();
              } else {
                pushFilter();
              }
            } else {
              switch (c) {
                case 34:
                  inDouble = true;
                  break;
                case 39:
                  inSingle = true;
                  break;
                case 96:
                  inTemplateString = true;
                  break;
                case 40:
                  paren++;
                  break;
                case 41:
                  paren--;
                  break;
                case 91:
                  square++;
                  break;
                case 93:
                  square--;
                  break;
                case 123:
                  curly++;
                  break;
                case 125:
                  curly--;
                  break;
              }
              if (c === 47) {
                var j = i - 1;
                var p2 = void 0;
                for (; j >= 0; j--) {
                  p2 = exp.charAt(j);
                  if (p2 !== " ") {
                    break;
                  }
                }
                if (!p2 || !validDivisionCharRE.test(p2)) {
                  inRegex = true;
                }
              }
            }
          }
          if (expression === void 0) {
            expression = exp.slice(0, i).trim();
          } else if (lastFilterIndex !== 0) {
            pushFilter();
          }
          function pushFilter() {
            (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
            lastFilterIndex = i + 1;
          }
          if (filters) {
            for (i = 0; i < filters.length; i++) {
              expression = wrapFilter(expression, filters[i]);
            }
          }
          return expression;
        }
        function wrapFilter(exp, filter) {
          var i = filter.indexOf("(");
          if (i < 0) {
            return '_f("' + filter + '")(' + exp + ")";
          } else {
            var name = filter.slice(0, i);
            var args = filter.slice(i + 1);
            return '_f("' + name + '")(' + exp + (args !== ")" ? "," + args : args);
          }
        }
        function baseWarn(msg, range2) {
          console.error("[Vue compiler]: " + msg);
        }
        function pluckModuleFunction(modules2, key) {
          return modules2 ? modules2.map(function(m) {
            return m[key];
          }).filter(function(_) {
            return _;
          }) : [];
        }
        function addProp(el, name, value, range2, dynamic) {
          (el.props || (el.props = [])).push(rangeSetItem({name, value, dynamic}, range2));
          el.plain = false;
        }
        function addAttr(el, name, value, range2, dynamic) {
          var attrs2 = dynamic ? el.dynamicAttrs || (el.dynamicAttrs = []) : el.attrs || (el.attrs = []);
          attrs2.push(rangeSetItem({name, value, dynamic}, range2));
          el.plain = false;
        }
        function addRawAttr(el, name, value, range2) {
          el.attrsMap[name] = value;
          el.attrsList.push(rangeSetItem({name, value}, range2));
        }
        function addDirective(el, name, rawName, value, arg, isDynamicArg, modifiers, range2) {
          (el.directives || (el.directives = [])).push(rangeSetItem({
            name,
            rawName,
            value,
            arg,
            isDynamicArg,
            modifiers
          }, range2));
          el.plain = false;
        }
        function prependModifierMarker(symbol, name, dynamic) {
          return dynamic ? "_p(" + name + ',"' + symbol + '")' : symbol + name;
        }
        function addHandler(el, name, value, modifiers, important, warn2, range2, dynamic) {
          modifiers = modifiers || emptyObject;
          if (warn2 && modifiers.prevent && modifiers.passive) {
            warn2("passive and prevent can't be used together. Passive handler can't prevent default event.", range2);
          }
          if (modifiers.right) {
            if (dynamic) {
              name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
            } else if (name === "click") {
              name = "contextmenu";
              delete modifiers.right;
            }
          } else if (modifiers.middle) {
            if (dynamic) {
              name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
            } else if (name === "click") {
              name = "mouseup";
            }
          }
          if (modifiers.capture) {
            delete modifiers.capture;
            name = prependModifierMarker("!", name, dynamic);
          }
          if (modifiers.once) {
            delete modifiers.once;
            name = prependModifierMarker("~", name, dynamic);
          }
          if (modifiers.passive) {
            delete modifiers.passive;
            name = prependModifierMarker("&", name, dynamic);
          }
          var events2;
          if (modifiers.native) {
            delete modifiers.native;
            events2 = el.nativeEvents || (el.nativeEvents = {});
          } else {
            events2 = el.events || (el.events = {});
          }
          var newHandler = rangeSetItem({value: value.trim(), dynamic}, range2);
          if (modifiers !== emptyObject) {
            newHandler.modifiers = modifiers;
          }
          var handlers = events2[name];
          if (Array.isArray(handlers)) {
            important ? handlers.unshift(newHandler) : handlers.push(newHandler);
          } else if (handlers) {
            events2[name] = important ? [newHandler, handlers] : [handlers, newHandler];
          } else {
            events2[name] = newHandler;
          }
          el.plain = false;
        }
        function getRawBindingAttr(el, name) {
          return el.rawAttrsMap[":" + name] || el.rawAttrsMap["v-bind:" + name] || el.rawAttrsMap[name];
        }
        function getBindingAttr(el, name, getStatic) {
          var dynamicValue = getAndRemoveAttr(el, ":" + name) || getAndRemoveAttr(el, "v-bind:" + name);
          if (dynamicValue != null) {
            return parseFilters(dynamicValue);
          } else if (getStatic !== false) {
            var staticValue = getAndRemoveAttr(el, name);
            if (staticValue != null) {
              return JSON.stringify(staticValue);
            }
          }
        }
        function getAndRemoveAttr(el, name, removeFromMap) {
          var val;
          if ((val = el.attrsMap[name]) != null) {
            var list = el.attrsList;
            for (var i = 0, l = list.length; i < l; i++) {
              if (list[i].name === name) {
                list.splice(i, 1);
                break;
              }
            }
          }
          if (removeFromMap) {
            delete el.attrsMap[name];
          }
          return val;
        }
        function getAndRemoveAttrByRegex(el, name) {
          var list = el.attrsList;
          for (var i = 0, l = list.length; i < l; i++) {
            var attr = list[i];
            if (name.test(attr.name)) {
              list.splice(i, 1);
              return attr;
            }
          }
        }
        function rangeSetItem(item, range2) {
          if (range2) {
            if (range2.start != null) {
              item.start = range2.start;
            }
            if (range2.end != null) {
              item.end = range2.end;
            }
          }
          return item;
        }
        function genComponentModel(el, value, modifiers) {
          var ref2 = modifiers || {};
          var number = ref2.number;
          var trim = ref2.trim;
          var baseValueExpression = "$$v";
          var valueExpression = baseValueExpression;
          if (trim) {
            valueExpression = "(typeof " + baseValueExpression + " === 'string'? " + baseValueExpression + ".trim(): " + baseValueExpression + ")";
          }
          if (number) {
            valueExpression = "_n(" + valueExpression + ")";
          }
          var assignment = genAssignmentCode(value, valueExpression);
          el.model = {
            value: "(" + value + ")",
            expression: JSON.stringify(value),
            callback: "function (" + baseValueExpression + ") {" + assignment + "}"
          };
        }
        function genAssignmentCode(value, assignment) {
          var res = parseModel(value);
          if (res.key === null) {
            return value + "=" + assignment;
          } else {
            return "$set(" + res.exp + ", " + res.key + ", " + assignment + ")";
          }
        }
        var len, str, chr, index$1, expressionPos, expressionEndPos;
        function parseModel(val) {
          val = val.trim();
          len = val.length;
          if (val.indexOf("[") < 0 || val.lastIndexOf("]") < len - 1) {
            index$1 = val.lastIndexOf(".");
            if (index$1 > -1) {
              return {
                exp: val.slice(0, index$1),
                key: '"' + val.slice(index$1 + 1) + '"'
              };
            } else {
              return {
                exp: val,
                key: null
              };
            }
          }
          str = val;
          index$1 = expressionPos = expressionEndPos = 0;
          while (!eof()) {
            chr = next();
            if (isStringStart(chr)) {
              parseString(chr);
            } else if (chr === 91) {
              parseBracket(chr);
            }
          }
          return {
            exp: val.slice(0, expressionPos),
            key: val.slice(expressionPos + 1, expressionEndPos)
          };
        }
        function next() {
          return str.charCodeAt(++index$1);
        }
        function eof() {
          return index$1 >= len;
        }
        function isStringStart(chr2) {
          return chr2 === 34 || chr2 === 39;
        }
        function parseBracket(chr2) {
          var inBracket = 1;
          expressionPos = index$1;
          while (!eof()) {
            chr2 = next();
            if (isStringStart(chr2)) {
              parseString(chr2);
              continue;
            }
            if (chr2 === 91) {
              inBracket++;
            }
            if (chr2 === 93) {
              inBracket--;
            }
            if (inBracket === 0) {
              expressionEndPos = index$1;
              break;
            }
          }
        }
        function parseString(chr2) {
          var stringQuote = chr2;
          while (!eof()) {
            chr2 = next();
            if (chr2 === stringQuote) {
              break;
            }
          }
        }
        var warn$1;
        var RANGE_TOKEN = "__r";
        var CHECKBOX_RADIO_TOKEN = "__c";
        function model(el, dir, _warn) {
          warn$1 = _warn;
          var value = dir.value;
          var modifiers = dir.modifiers;
          var tag = el.tag;
          var type = el.attrsMap.type;
          {
            if (tag === "input" && type === "file") {
              warn$1("<" + el.tag + ' v-model="' + value + '" type="file">:\nFile inputs are read only. Use a v-on:change listener instead.', el.rawAttrsMap["v-model"]);
            }
          }
          if (el.component) {
            genComponentModel(el, value, modifiers);
            return false;
          } else if (tag === "select") {
            genSelect(el, value, modifiers);
          } else if (tag === "input" && type === "checkbox") {
            genCheckboxModel(el, value, modifiers);
          } else if (tag === "input" && type === "radio") {
            genRadioModel(el, value, modifiers);
          } else if (tag === "input" || tag === "textarea") {
            genDefaultModel(el, value, modifiers);
          } else if (!config.isReservedTag(tag)) {
            genComponentModel(el, value, modifiers);
            return false;
          } else {
            warn$1("<" + el.tag + ' v-model="' + value + `">: v-model is not supported on this element type. If you are working with contenteditable, it's recommended to wrap a library dedicated for that purpose inside a custom component.`, el.rawAttrsMap["v-model"]);
          }
          return true;
        }
        function genCheckboxModel(el, value, modifiers) {
          var number = modifiers && modifiers.number;
          var valueBinding = getBindingAttr(el, "value") || "null";
          var trueValueBinding = getBindingAttr(el, "true-value") || "true";
          var falseValueBinding = getBindingAttr(el, "false-value") || "false";
          addProp(el, "checked", "Array.isArray(" + value + ")?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === "true" ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")"));
          addHandler(el, "change", "var $$a=" + value + ",$$el=$event.target,$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");if(Array.isArray($$a)){var $$v=" + (number ? "_n(" + valueBinding + ")" : valueBinding) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + genAssignmentCode(value, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + genAssignmentCode(value, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + genAssignmentCode(value, "$$c") + "}", null, true);
        }
        function genRadioModel(el, value, modifiers) {
          var number = modifiers && modifiers.number;
          var valueBinding = getBindingAttr(el, "value") || "null";
          valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
          addProp(el, "checked", "_q(" + value + "," + valueBinding + ")");
          addHandler(el, "change", genAssignmentCode(value, valueBinding), null, true);
        }
        function genSelect(el, value, modifiers) {
          var number = modifiers && modifiers.number;
          var selectedVal = 'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (number ? "_n(val)" : "val") + "})";
          var assignment = "$event.target.multiple ? $$selectedVal : $$selectedVal[0]";
          var code = "var $$selectedVal = " + selectedVal + ";";
          code = code + " " + genAssignmentCode(value, assignment);
          addHandler(el, "change", code, null, true);
        }
        function genDefaultModel(el, value, modifiers) {
          var type = el.attrsMap.type;
          {
            var value$1 = el.attrsMap["v-bind:value"] || el.attrsMap[":value"];
            var typeBinding = el.attrsMap["v-bind:type"] || el.attrsMap[":type"];
            if (value$1 && !typeBinding) {
              var binding = el.attrsMap["v-bind:value"] ? "v-bind:value" : ":value";
              warn$1(binding + '="' + value$1 + '" conflicts with v-model on the same element because the latter already expands to a value binding internally', el.rawAttrsMap[binding]);
            }
          }
          var ref2 = modifiers || {};
          var lazy = ref2.lazy;
          var number = ref2.number;
          var trim = ref2.trim;
          var needCompositionGuard = !lazy && type !== "range";
          var event = lazy ? "change" : type === "range" ? RANGE_TOKEN : "input";
          var valueExpression = "$event.target.value";
          if (trim) {
            valueExpression = "$event.target.value.trim()";
          }
          if (number) {
            valueExpression = "_n(" + valueExpression + ")";
          }
          var code = genAssignmentCode(value, valueExpression);
          if (needCompositionGuard) {
            code = "if($event.target.composing)return;" + code;
          }
          addProp(el, "value", "(" + value + ")");
          addHandler(el, event, code, null, true);
          if (trim || number) {
            addHandler(el, "blur", "$forceUpdate()");
          }
        }
        function normalizeEvents(on2) {
          if (isDef(on2[RANGE_TOKEN])) {
            var event = isIE ? "change" : "input";
            on2[event] = [].concat(on2[RANGE_TOKEN], on2[event] || []);
            delete on2[RANGE_TOKEN];
          }
          if (isDef(on2[CHECKBOX_RADIO_TOKEN])) {
            on2.change = [].concat(on2[CHECKBOX_RADIO_TOKEN], on2.change || []);
            delete on2[CHECKBOX_RADIO_TOKEN];
          }
        }
        var target$1;
        function createOnceHandler$1(event, handler, capture) {
          var _target = target$1;
          return function onceHandler() {
            var res = handler.apply(null, arguments);
            if (res !== null) {
              remove$2(event, onceHandler, capture, _target);
            }
          };
        }
        var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);
        function add$1(name, handler, capture, passive) {
          if (useMicrotaskFix) {
            var attachedTimestamp = currentFlushTimestamp;
            var original = handler;
            handler = original._wrapper = function(e) {
              if (e.target === e.currentTarget || e.timeStamp >= attachedTimestamp || e.timeStamp <= 0 || e.target.ownerDocument !== document) {
                return original.apply(this, arguments);
              }
            };
          }
          target$1.addEventListener(name, handler, supportsPassive ? {capture, passive} : capture);
        }
        function remove$2(name, handler, capture, _target) {
          (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
        }
        function updateDOMListeners(oldVnode, vnode) {
          if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
            return;
          }
          var on2 = vnode.data.on || {};
          var oldOn = oldVnode.data.on || {};
          target$1 = vnode.elm;
          normalizeEvents(on2);
          updateListeners(on2, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
          target$1 = void 0;
        }
        var events = {
          create: updateDOMListeners,
          update: updateDOMListeners
        };
        var svgContainer;
        function updateDOMProps(oldVnode, vnode) {
          if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
            return;
          }
          var key, cur;
          var elm = vnode.elm;
          var oldProps = oldVnode.data.domProps || {};
          var props2 = vnode.data.domProps || {};
          if (isDef(props2.__ob__)) {
            props2 = vnode.data.domProps = extend({}, props2);
          }
          for (key in oldProps) {
            if (!(key in props2)) {
              elm[key] = "";
            }
          }
          for (key in props2) {
            cur = props2[key];
            if (key === "textContent" || key === "innerHTML") {
              if (vnode.children) {
                vnode.children.length = 0;
              }
              if (cur === oldProps[key]) {
                continue;
              }
              if (elm.childNodes.length === 1) {
                elm.removeChild(elm.childNodes[0]);
              }
            }
            if (key === "value" && elm.tagName !== "PROGRESS") {
              elm._value = cur;
              var strCur = isUndef(cur) ? "" : String(cur);
              if (shouldUpdateValue(elm, strCur)) {
                elm.value = strCur;
              }
            } else if (key === "innerHTML" && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
              svgContainer = svgContainer || document.createElement("div");
              svgContainer.innerHTML = "<svg>" + cur + "</svg>";
              var svg = svgContainer.firstChild;
              while (elm.firstChild) {
                elm.removeChild(elm.firstChild);
              }
              while (svg.firstChild) {
                elm.appendChild(svg.firstChild);
              }
            } else if (cur !== oldProps[key]) {
              try {
                elm[key] = cur;
              } catch (e) {
              }
            }
          }
        }
        function shouldUpdateValue(elm, checkVal) {
          return !elm.composing && (elm.tagName === "OPTION" || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
        }
        function isNotInFocusAndDirty(elm, checkVal) {
          var notInFocus = true;
          try {
            notInFocus = document.activeElement !== elm;
          } catch (e) {
          }
          return notInFocus && elm.value !== checkVal;
        }
        function isDirtyWithModifiers(elm, newVal) {
          var value = elm.value;
          var modifiers = elm._vModifiers;
          if (isDef(modifiers)) {
            if (modifiers.number) {
              return toNumber(value) !== toNumber(newVal);
            }
            if (modifiers.trim) {
              return value.trim() !== newVal.trim();
            }
          }
          return value !== newVal;
        }
        var domProps = {
          create: updateDOMProps,
          update: updateDOMProps
        };
        var parseStyleText = cached(function(cssText) {
          var res = {};
          var listDelimiter = /;(?![^(]*\))/g;
          var propertyDelimiter = /:(.+)/;
          cssText.split(listDelimiter).forEach(function(item) {
            if (item) {
              var tmp = item.split(propertyDelimiter);
              tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
            }
          });
          return res;
        });
        function normalizeStyleData(data) {
          var style2 = normalizeStyleBinding(data.style);
          return data.staticStyle ? extend(data.staticStyle, style2) : style2;
        }
        function normalizeStyleBinding(bindingStyle) {
          if (Array.isArray(bindingStyle)) {
            return toObject(bindingStyle);
          }
          if (typeof bindingStyle === "string") {
            return parseStyleText(bindingStyle);
          }
          return bindingStyle;
        }
        function getStyle(vnode, checkChild) {
          var res = {};
          var styleData;
          if (checkChild) {
            var childNode = vnode;
            while (childNode.componentInstance) {
              childNode = childNode.componentInstance._vnode;
              if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
                extend(res, styleData);
              }
            }
          }
          if (styleData = normalizeStyleData(vnode.data)) {
            extend(res, styleData);
          }
          var parentNode2 = vnode;
          while (parentNode2 = parentNode2.parent) {
            if (parentNode2.data && (styleData = normalizeStyleData(parentNode2.data))) {
              extend(res, styleData);
            }
          }
          return res;
        }
        var cssVarRE = /^--/;
        var importantRE = /\s*!important$/;
        var setProp = function(el, name, val) {
          if (cssVarRE.test(name)) {
            el.style.setProperty(name, val);
          } else if (importantRE.test(val)) {
            el.style.setProperty(hyphenate(name), val.replace(importantRE, ""), "important");
          } else {
            var normalizedName = normalize(name);
            if (Array.isArray(val)) {
              for (var i = 0, len2 = val.length; i < len2; i++) {
                el.style[normalizedName] = val[i];
              }
            } else {
              el.style[normalizedName] = val;
            }
          }
        };
        var vendorNames = ["Webkit", "Moz", "ms"];
        var emptyStyle;
        var normalize = cached(function(prop) {
          emptyStyle = emptyStyle || document.createElement("div").style;
          prop = camelize(prop);
          if (prop !== "filter" && prop in emptyStyle) {
            return prop;
          }
          var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
          for (var i = 0; i < vendorNames.length; i++) {
            var name = vendorNames[i] + capName;
            if (name in emptyStyle) {
              return name;
            }
          }
        });
        function updateStyle(oldVnode, vnode) {
          var data = vnode.data;
          var oldData = oldVnode.data;
          if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
            return;
          }
          var cur, name;
          var el = vnode.elm;
          var oldStaticStyle = oldData.staticStyle;
          var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};
          var oldStyle = oldStaticStyle || oldStyleBinding;
          var style2 = normalizeStyleBinding(vnode.data.style) || {};
          vnode.data.normalizedStyle = isDef(style2.__ob__) ? extend({}, style2) : style2;
          var newStyle = getStyle(vnode, true);
          for (name in oldStyle) {
            if (isUndef(newStyle[name])) {
              setProp(el, name, "");
            }
          }
          for (name in newStyle) {
            cur = newStyle[name];
            if (cur !== oldStyle[name]) {
              setProp(el, name, cur == null ? "" : cur);
            }
          }
        }
        var style = {
          create: updateStyle,
          update: updateStyle
        };
        var whitespaceRE = /\s+/;
        function addClass(el, cls) {
          if (!cls || !(cls = cls.trim())) {
            return;
          }
          if (el.classList) {
            if (cls.indexOf(" ") > -1) {
              cls.split(whitespaceRE).forEach(function(c) {
                return el.classList.add(c);
              });
            } else {
              el.classList.add(cls);
            }
          } else {
            var cur = " " + (el.getAttribute("class") || "") + " ";
            if (cur.indexOf(" " + cls + " ") < 0) {
              el.setAttribute("class", (cur + cls).trim());
            }
          }
        }
        function removeClass(el, cls) {
          if (!cls || !(cls = cls.trim())) {
            return;
          }
          if (el.classList) {
            if (cls.indexOf(" ") > -1) {
              cls.split(whitespaceRE).forEach(function(c) {
                return el.classList.remove(c);
              });
            } else {
              el.classList.remove(cls);
            }
            if (!el.classList.length) {
              el.removeAttribute("class");
            }
          } else {
            var cur = " " + (el.getAttribute("class") || "") + " ";
            var tar = " " + cls + " ";
            while (cur.indexOf(tar) >= 0) {
              cur = cur.replace(tar, " ");
            }
            cur = cur.trim();
            if (cur) {
              el.setAttribute("class", cur);
            } else {
              el.removeAttribute("class");
            }
          }
        }
        function resolveTransition(def$$1) {
          if (!def$$1) {
            return;
          }
          if (typeof def$$1 === "object") {
            var res = {};
            if (def$$1.css !== false) {
              extend(res, autoCssTransition(def$$1.name || "v"));
            }
            extend(res, def$$1);
            return res;
          } else if (typeof def$$1 === "string") {
            return autoCssTransition(def$$1);
          }
        }
        var autoCssTransition = cached(function(name) {
          return {
            enterClass: name + "-enter",
            enterToClass: name + "-enter-to",
            enterActiveClass: name + "-enter-active",
            leaveClass: name + "-leave",
            leaveToClass: name + "-leave-to",
            leaveActiveClass: name + "-leave-active"
          };
        });
        var hasTransition = inBrowser && !isIE9;
        var TRANSITION = "transition";
        var ANIMATION = "animation";
        var transitionProp = "transition";
        var transitionEndEvent = "transitionend";
        var animationProp = "animation";
        var animationEndEvent = "animationend";
        if (hasTransition) {
          if (window.ontransitionend === void 0 && window.onwebkittransitionend !== void 0) {
            transitionProp = "WebkitTransition";
            transitionEndEvent = "webkitTransitionEnd";
          }
          if (window.onanimationend === void 0 && window.onwebkitanimationend !== void 0) {
            animationProp = "WebkitAnimation";
            animationEndEvent = "webkitAnimationEnd";
          }
        }
        var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(fn) {
          return fn();
        };
        function nextFrame(fn) {
          raf(function() {
            raf(fn);
          });
        }
        function addTransitionClass(el, cls) {
          var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
          if (transitionClasses.indexOf(cls) < 0) {
            transitionClasses.push(cls);
            addClass(el, cls);
          }
        }
        function removeTransitionClass(el, cls) {
          if (el._transitionClasses) {
            remove(el._transitionClasses, cls);
          }
          removeClass(el, cls);
        }
        function whenTransitionEnds(el, expectedType, cb) {
          var ref2 = getTransitionInfo(el, expectedType);
          var type = ref2.type;
          var timeout = ref2.timeout;
          var propCount = ref2.propCount;
          if (!type) {
            return cb();
          }
          var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
          var ended = 0;
          var end = function() {
            el.removeEventListener(event, onEnd);
            cb();
          };
          var onEnd = function(e) {
            if (e.target === el) {
              if (++ended >= propCount) {
                end();
              }
            }
          };
          setTimeout(function() {
            if (ended < propCount) {
              end();
            }
          }, timeout + 1);
          el.addEventListener(event, onEnd);
        }
        var transformRE = /\b(transform|all)(,|$)/;
        function getTransitionInfo(el, expectedType) {
          var styles = window.getComputedStyle(el);
          var transitionDelays = (styles[transitionProp + "Delay"] || "").split(", ");
          var transitionDurations = (styles[transitionProp + "Duration"] || "").split(", ");
          var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
          var animationDelays = (styles[animationProp + "Delay"] || "").split(", ");
          var animationDurations = (styles[animationProp + "Duration"] || "").split(", ");
          var animationTimeout = getTimeout(animationDelays, animationDurations);
          var type;
          var timeout = 0;
          var propCount = 0;
          if (expectedType === TRANSITION) {
            if (transitionTimeout > 0) {
              type = TRANSITION;
              timeout = transitionTimeout;
              propCount = transitionDurations.length;
            }
          } else if (expectedType === ANIMATION) {
            if (animationTimeout > 0) {
              type = ANIMATION;
              timeout = animationTimeout;
              propCount = animationDurations.length;
            }
          } else {
            timeout = Math.max(transitionTimeout, animationTimeout);
            type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
            propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
          }
          var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + "Property"]);
          return {
            type,
            timeout,
            propCount,
            hasTransform
          };
        }
        function getTimeout(delays, durations) {
          while (delays.length < durations.length) {
            delays = delays.concat(delays);
          }
          return Math.max.apply(null, durations.map(function(d2, i) {
            return toMs(d2) + toMs(delays[i]);
          }));
        }
        function toMs(s) {
          return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
        }
        function enter(vnode, toggleDisplay) {
          var el = vnode.elm;
          if (isDef(el._leaveCb)) {
            el._leaveCb.cancelled = true;
            el._leaveCb();
          }
          var data = resolveTransition(vnode.data.transition);
          if (isUndef(data)) {
            return;
          }
          if (isDef(el._enterCb) || el.nodeType !== 1) {
            return;
          }
          var css = data.css;
          var type = data.type;
          var enterClass = data.enterClass;
          var enterToClass = data.enterToClass;
          var enterActiveClass = data.enterActiveClass;
          var appearClass = data.appearClass;
          var appearToClass = data.appearToClass;
          var appearActiveClass = data.appearActiveClass;
          var beforeEnter = data.beforeEnter;
          var enter2 = data.enter;
          var afterEnter = data.afterEnter;
          var enterCancelled = data.enterCancelled;
          var beforeAppear = data.beforeAppear;
          var appear = data.appear;
          var afterAppear = data.afterAppear;
          var appearCancelled = data.appearCancelled;
          var duration = data.duration;
          var context = activeInstance;
          var transitionNode = activeInstance.$vnode;
          while (transitionNode && transitionNode.parent) {
            context = transitionNode.context;
            transitionNode = transitionNode.parent;
          }
          var isAppear = !context._isMounted || !vnode.isRootInsert;
          if (isAppear && !appear && appear !== "") {
            return;
          }
          var startClass = isAppear && appearClass ? appearClass : enterClass;
          var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
          var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
          var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
          var enterHook = isAppear ? typeof appear === "function" ? appear : enter2 : enter2;
          var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
          var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
          var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);
          if (explicitEnterDuration != null) {
            checkDuration(explicitEnterDuration, "enter", vnode);
          }
          var expectsCSS = css !== false && !isIE9;
          var userWantsControl = getHookArgumentsLength(enterHook);
          var cb = el._enterCb = once(function() {
            if (expectsCSS) {
              removeTransitionClass(el, toClass);
              removeTransitionClass(el, activeClass);
            }
            if (cb.cancelled) {
              if (expectsCSS) {
                removeTransitionClass(el, startClass);
              }
              enterCancelledHook && enterCancelledHook(el);
            } else {
              afterEnterHook && afterEnterHook(el);
            }
            el._enterCb = null;
          });
          if (!vnode.data.show) {
            mergeVNodeHook(vnode, "insert", function() {
              var parent = el.parentNode;
              var pendingNode = parent && parent._pending && parent._pending[vnode.key];
              if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
                pendingNode.elm._leaveCb();
              }
              enterHook && enterHook(el, cb);
            });
          }
          beforeEnterHook && beforeEnterHook(el);
          if (expectsCSS) {
            addTransitionClass(el, startClass);
            addTransitionClass(el, activeClass);
            nextFrame(function() {
              removeTransitionClass(el, startClass);
              if (!cb.cancelled) {
                addTransitionClass(el, toClass);
                if (!userWantsControl) {
                  if (isValidDuration(explicitEnterDuration)) {
                    setTimeout(cb, explicitEnterDuration);
                  } else {
                    whenTransitionEnds(el, type, cb);
                  }
                }
              }
            });
          }
          if (vnode.data.show) {
            toggleDisplay && toggleDisplay();
            enterHook && enterHook(el, cb);
          }
          if (!expectsCSS && !userWantsControl) {
            cb();
          }
        }
        function leave(vnode, rm) {
          var el = vnode.elm;
          if (isDef(el._enterCb)) {
            el._enterCb.cancelled = true;
            el._enterCb();
          }
          var data = resolveTransition(vnode.data.transition);
          if (isUndef(data) || el.nodeType !== 1) {
            return rm();
          }
          if (isDef(el._leaveCb)) {
            return;
          }
          var css = data.css;
          var type = data.type;
          var leaveClass = data.leaveClass;
          var leaveToClass = data.leaveToClass;
          var leaveActiveClass = data.leaveActiveClass;
          var beforeLeave = data.beforeLeave;
          var leave2 = data.leave;
          var afterLeave = data.afterLeave;
          var leaveCancelled = data.leaveCancelled;
          var delayLeave = data.delayLeave;
          var duration = data.duration;
          var expectsCSS = css !== false && !isIE9;
          var userWantsControl = getHookArgumentsLength(leave2);
          var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);
          if (isDef(explicitLeaveDuration)) {
            checkDuration(explicitLeaveDuration, "leave", vnode);
          }
          var cb = el._leaveCb = once(function() {
            if (el.parentNode && el.parentNode._pending) {
              el.parentNode._pending[vnode.key] = null;
            }
            if (expectsCSS) {
              removeTransitionClass(el, leaveToClass);
              removeTransitionClass(el, leaveActiveClass);
            }
            if (cb.cancelled) {
              if (expectsCSS) {
                removeTransitionClass(el, leaveClass);
              }
              leaveCancelled && leaveCancelled(el);
            } else {
              rm();
              afterLeave && afterLeave(el);
            }
            el._leaveCb = null;
          });
          if (delayLeave) {
            delayLeave(performLeave);
          } else {
            performLeave();
          }
          function performLeave() {
            if (cb.cancelled) {
              return;
            }
            if (!vnode.data.show && el.parentNode) {
              (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
            }
            beforeLeave && beforeLeave(el);
            if (expectsCSS) {
              addTransitionClass(el, leaveClass);
              addTransitionClass(el, leaveActiveClass);
              nextFrame(function() {
                removeTransitionClass(el, leaveClass);
                if (!cb.cancelled) {
                  addTransitionClass(el, leaveToClass);
                  if (!userWantsControl) {
                    if (isValidDuration(explicitLeaveDuration)) {
                      setTimeout(cb, explicitLeaveDuration);
                    } else {
                      whenTransitionEnds(el, type, cb);
                    }
                  }
                }
              });
            }
            leave2 && leave2(el, cb);
            if (!expectsCSS && !userWantsControl) {
              cb();
            }
          }
        }
        function checkDuration(val, name, vnode) {
          if (typeof val !== "number") {
            warn("<transition> explicit " + name + " duration is not a valid number - got " + JSON.stringify(val) + ".", vnode.context);
          } else if (isNaN(val)) {
            warn("<transition> explicit " + name + " duration is NaN - the duration expression might be incorrect.", vnode.context);
          }
        }
        function isValidDuration(val) {
          return typeof val === "number" && !isNaN(val);
        }
        function getHookArgumentsLength(fn) {
          if (isUndef(fn)) {
            return false;
          }
          var invokerFns = fn.fns;
          if (isDef(invokerFns)) {
            return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
          } else {
            return (fn._length || fn.length) > 1;
          }
        }
        function _enter(_, vnode) {
          if (vnode.data.show !== true) {
            enter(vnode);
          }
        }
        var transition = inBrowser ? {
          create: _enter,
          activate: _enter,
          remove: function remove$$1(vnode, rm) {
            if (vnode.data.show !== true) {
              leave(vnode, rm);
            } else {
              rm();
            }
          }
        } : {};
        var platformModules = [
          attrs,
          klass,
          events,
          domProps,
          style,
          transition
        ];
        var modules = platformModules.concat(baseModules);
        var patch = createPatchFunction({nodeOps, modules});
        if (isIE9) {
          document.addEventListener("selectionchange", function() {
            var el = document.activeElement;
            if (el && el.vmodel) {
              trigger(el, "input");
            }
          });
        }
        var directive = {
          inserted: function inserted(el, binding, vnode, oldVnode) {
            if (vnode.tag === "select") {
              if (oldVnode.elm && !oldVnode.elm._vOptions) {
                mergeVNodeHook(vnode, "postpatch", function() {
                  directive.componentUpdated(el, binding, vnode);
                });
              } else {
                setSelected(el, binding, vnode.context);
              }
              el._vOptions = [].map.call(el.options, getValue);
            } else if (vnode.tag === "textarea" || isTextInputType(el.type)) {
              el._vModifiers = binding.modifiers;
              if (!binding.modifiers.lazy) {
                el.addEventListener("compositionstart", onCompositionStart);
                el.addEventListener("compositionend", onCompositionEnd);
                el.addEventListener("change", onCompositionEnd);
                if (isIE9) {
                  el.vmodel = true;
                }
              }
            }
          },
          componentUpdated: function componentUpdated(el, binding, vnode) {
            if (vnode.tag === "select") {
              setSelected(el, binding, vnode.context);
              var prevOptions = el._vOptions;
              var curOptions = el._vOptions = [].map.call(el.options, getValue);
              if (curOptions.some(function(o, i) {
                return !looseEqual(o, prevOptions[i]);
              })) {
                var needReset = el.multiple ? binding.value.some(function(v) {
                  return hasNoMatchingOption(v, curOptions);
                }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
                if (needReset) {
                  trigger(el, "change");
                }
              }
            }
          }
        };
        function setSelected(el, binding, vm) {
          actuallySetSelected(el, binding, vm);
          if (isIE || isEdge) {
            setTimeout(function() {
              actuallySetSelected(el, binding, vm);
            }, 0);
          }
        }
        function actuallySetSelected(el, binding, vm) {
          var value = binding.value;
          var isMultiple = el.multiple;
          if (isMultiple && !Array.isArray(value)) {
            warn('<select multiple v-model="' + binding.expression + '"> expects an Array value for its binding, but got ' + Object.prototype.toString.call(value).slice(8, -1), vm);
            return;
          }
          var selected, option;
          for (var i = 0, l = el.options.length; i < l; i++) {
            option = el.options[i];
            if (isMultiple) {
              selected = looseIndexOf(value, getValue(option)) > -1;
              if (option.selected !== selected) {
                option.selected = selected;
              }
            } else {
              if (looseEqual(getValue(option), value)) {
                if (el.selectedIndex !== i) {
                  el.selectedIndex = i;
                }
                return;
              }
            }
          }
          if (!isMultiple) {
            el.selectedIndex = -1;
          }
        }
        function hasNoMatchingOption(value, options) {
          return options.every(function(o) {
            return !looseEqual(o, value);
          });
        }
        function getValue(option) {
          return "_value" in option ? option._value : option.value;
        }
        function onCompositionStart(e) {
          e.target.composing = true;
        }
        function onCompositionEnd(e) {
          if (!e.target.composing) {
            return;
          }
          e.target.composing = false;
          trigger(e.target, "input");
        }
        function trigger(el, type) {
          var e = document.createEvent("HTMLEvents");
          e.initEvent(type, true, true);
          el.dispatchEvent(e);
        }
        function locateNode(vnode) {
          return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
        }
        var show = {
          bind: function bind2(el, ref2, vnode) {
            var value = ref2.value;
            vnode = locateNode(vnode);
            var transition$$1 = vnode.data && vnode.data.transition;
            var originalDisplay = el.__vOriginalDisplay = el.style.display === "none" ? "" : el.style.display;
            if (value && transition$$1) {
              vnode.data.show = true;
              enter(vnode, function() {
                el.style.display = originalDisplay;
              });
            } else {
              el.style.display = value ? originalDisplay : "none";
            }
          },
          update: function update(el, ref2, vnode) {
            var value = ref2.value;
            var oldValue = ref2.oldValue;
            if (!value === !oldValue) {
              return;
            }
            vnode = locateNode(vnode);
            var transition$$1 = vnode.data && vnode.data.transition;
            if (transition$$1) {
              vnode.data.show = true;
              if (value) {
                enter(vnode, function() {
                  el.style.display = el.__vOriginalDisplay;
                });
              } else {
                leave(vnode, function() {
                  el.style.display = "none";
                });
              }
            } else {
              el.style.display = value ? el.__vOriginalDisplay : "none";
            }
          },
          unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
            if (!isDestroy) {
              el.style.display = el.__vOriginalDisplay;
            }
          }
        };
        var platformDirectives = {
          model: directive,
          show
        };
        var transitionProps = {
          name: String,
          appear: Boolean,
          css: Boolean,
          mode: String,
          type: String,
          enterClass: String,
          leaveClass: String,
          enterToClass: String,
          leaveToClass: String,
          enterActiveClass: String,
          leaveActiveClass: String,
          appearClass: String,
          appearActiveClass: String,
          appearToClass: String,
          duration: [Number, String, Object]
        };
        function getRealChild(vnode) {
          var compOptions = vnode && vnode.componentOptions;
          if (compOptions && compOptions.Ctor.options.abstract) {
            return getRealChild(getFirstComponentChild(compOptions.children));
          } else {
            return vnode;
          }
        }
        function extractTransitionData(comp) {
          var data = {};
          var options = comp.$options;
          for (var key in options.propsData) {
            data[key] = comp[key];
          }
          var listeners = options._parentListeners;
          for (var key$1 in listeners) {
            data[camelize(key$1)] = listeners[key$1];
          }
          return data;
        }
        function placeholder(h, rawChild) {
          if (/\d-keep-alive$/.test(rawChild.tag)) {
            return h("keep-alive", {
              props: rawChild.componentOptions.propsData
            });
          }
        }
        function hasParentTransition(vnode) {
          while (vnode = vnode.parent) {
            if (vnode.data.transition) {
              return true;
            }
          }
        }
        function isSameChild(child, oldChild) {
          return oldChild.key === child.key && oldChild.tag === child.tag;
        }
        var isNotTextNode = function(c) {
          return c.tag || isAsyncPlaceholder(c);
        };
        var isVShowDirective = function(d2) {
          return d2.name === "show";
        };
        var Transition = {
          name: "transition",
          props: transitionProps,
          abstract: true,
          render: function render(h) {
            var this$1 = this;
            var children = this.$slots.default;
            if (!children) {
              return;
            }
            children = children.filter(isNotTextNode);
            if (!children.length) {
              return;
            }
            if (children.length > 1) {
              warn("<transition> can only be used on a single element. Use <transition-group> for lists.", this.$parent);
            }
            var mode = this.mode;
            if (mode && mode !== "in-out" && mode !== "out-in") {
              warn("invalid <transition> mode: " + mode, this.$parent);
            }
            var rawChild = children[0];
            if (hasParentTransition(this.$vnode)) {
              return rawChild;
            }
            var child = getRealChild(rawChild);
            if (!child) {
              return rawChild;
            }
            if (this._leaving) {
              return placeholder(h, rawChild);
            }
            var id = "__transition-" + this._uid + "-";
            child.key = child.key == null ? child.isComment ? id + "comment" : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
            var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
            var oldRawChild = this._vnode;
            var oldChild = getRealChild(oldRawChild);
            if (child.data.directives && child.data.directives.some(isVShowDirective)) {
              child.data.show = true;
            }
            if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
              var oldData = oldChild.data.transition = extend({}, data);
              if (mode === "out-in") {
                this._leaving = true;
                mergeVNodeHook(oldData, "afterLeave", function() {
                  this$1._leaving = false;
                  this$1.$forceUpdate();
                });
                return placeholder(h, rawChild);
              } else if (mode === "in-out") {
                if (isAsyncPlaceholder(child)) {
                  return oldRawChild;
                }
                var delayedLeave;
                var performLeave = function() {
                  delayedLeave();
                };
                mergeVNodeHook(data, "afterEnter", performLeave);
                mergeVNodeHook(data, "enterCancelled", performLeave);
                mergeVNodeHook(oldData, "delayLeave", function(leave2) {
                  delayedLeave = leave2;
                });
              }
            }
            return rawChild;
          }
        };
        var props = extend({
          tag: String,
          moveClass: String
        }, transitionProps);
        delete props.mode;
        var TransitionGroup = {
          props,
          beforeMount: function beforeMount() {
            var this$1 = this;
            var update = this._update;
            this._update = function(vnode, hydrating) {
              var restoreActiveInstance = setActiveInstance(this$1);
              this$1.__patch__(this$1._vnode, this$1.kept, false, true);
              this$1._vnode = this$1.kept;
              restoreActiveInstance();
              update.call(this$1, vnode, hydrating);
            };
          },
          render: function render(h) {
            var tag = this.tag || this.$vnode.data.tag || "span";
            var map = Object.create(null);
            var prevChildren = this.prevChildren = this.children;
            var rawChildren = this.$slots.default || [];
            var children = this.children = [];
            var transitionData = extractTransitionData(this);
            for (var i = 0; i < rawChildren.length; i++) {
              var c = rawChildren[i];
              if (c.tag) {
                if (c.key != null && String(c.key).indexOf("__vlist") !== 0) {
                  children.push(c);
                  map[c.key] = c;
                  (c.data || (c.data = {})).transition = transitionData;
                } else {
                  var opts2 = c.componentOptions;
                  var name = opts2 ? opts2.Ctor.options.name || opts2.tag || "" : c.tag;
                  warn("<transition-group> children must be keyed: <" + name + ">");
                }
              }
            }
            if (prevChildren) {
              var kept = [];
              var removed = [];
              for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
                var c$1 = prevChildren[i$1];
                c$1.data.transition = transitionData;
                c$1.data.pos = c$1.elm.getBoundingClientRect();
                if (map[c$1.key]) {
                  kept.push(c$1);
                } else {
                  removed.push(c$1);
                }
              }
              this.kept = h(tag, null, kept);
              this.removed = removed;
            }
            return h(tag, null, children);
          },
          updated: function updated() {
            var children = this.prevChildren;
            var moveClass = this.moveClass || (this.name || "v") + "-move";
            if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
              return;
            }
            children.forEach(callPendingCbs);
            children.forEach(recordPosition);
            children.forEach(applyTranslation);
            this._reflow = document.body.offsetHeight;
            children.forEach(function(c) {
              if (c.data.moved) {
                var el = c.elm;
                var s = el.style;
                addTransitionClass(el, moveClass);
                s.transform = s.WebkitTransform = s.transitionDuration = "";
                el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
                  if (e && e.target !== el) {
                    return;
                  }
                  if (!e || /transform$/.test(e.propertyName)) {
                    el.removeEventListener(transitionEndEvent, cb);
                    el._moveCb = null;
                    removeTransitionClass(el, moveClass);
                  }
                });
              }
            });
          },
          methods: {
            hasMove: function hasMove(el, moveClass) {
              if (!hasTransition) {
                return false;
              }
              if (this._hasMove) {
                return this._hasMove;
              }
              var clone = el.cloneNode();
              if (el._transitionClasses) {
                el._transitionClasses.forEach(function(cls) {
                  removeClass(clone, cls);
                });
              }
              addClass(clone, moveClass);
              clone.style.display = "none";
              this.$el.appendChild(clone);
              var info = getTransitionInfo(clone);
              this.$el.removeChild(clone);
              return this._hasMove = info.hasTransform;
            }
          }
        };
        function callPendingCbs(c) {
          if (c.elm._moveCb) {
            c.elm._moveCb();
          }
          if (c.elm._enterCb) {
            c.elm._enterCb();
          }
        }
        function recordPosition(c) {
          c.data.newPos = c.elm.getBoundingClientRect();
        }
        function applyTranslation(c) {
          var oldPos = c.data.pos;
          var newPos = c.data.newPos;
          var dx = oldPos.left - newPos.left;
          var dy = oldPos.top - newPos.top;
          if (dx || dy) {
            c.data.moved = true;
            var s = c.elm.style;
            s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
            s.transitionDuration = "0s";
          }
        }
        var platformComponents = {
          Transition,
          TransitionGroup
        };
        Vue3.config.mustUseProp = mustUseProp;
        Vue3.config.isReservedTag = isReservedTag;
        Vue3.config.isReservedAttr = isReservedAttr;
        Vue3.config.getTagNamespace = getTagNamespace;
        Vue3.config.isUnknownElement = isUnknownElement;
        extend(Vue3.options.directives, platformDirectives);
        extend(Vue3.options.components, platformComponents);
        Vue3.prototype.__patch__ = inBrowser ? patch : noop;
        Vue3.prototype.$mount = function(el, hydrating) {
          el = el && inBrowser ? query(el) : void 0;
          return mountComponent(this, el, hydrating);
        };
        if (inBrowser) {
          setTimeout(function() {
            if (config.devtools) {
              if (devtools) {
                devtools.emit("init", Vue3);
              } else {
                console[console.info ? "info" : "log"]("Download the Vue Devtools extension for a better development experience:\nhttps://github.com/vuejs/vue-devtools");
              }
            }
            if (config.productionTip !== false && typeof console !== "undefined") {
              console[console.info ? "info" : "log"]("You are running Vue in development mode.\nMake sure to turn on production mode when deploying for production.\nSee more tips at https://vuejs.org/guide/deployment.html");
            }
          }, 0);
        }
        var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
        var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
        var buildRegex = cached(function(delimiters2) {
          var open = delimiters2[0].replace(regexEscapeRE, "\\$&");
          var close = delimiters2[1].replace(regexEscapeRE, "\\$&");
          return new RegExp(open + "((?:.|\\n)+?)" + close, "g");
        });
        function parseText(text2, delimiters2) {
          var tagRE = delimiters2 ? buildRegex(delimiters2) : defaultTagRE;
          if (!tagRE.test(text2)) {
            return;
          }
          var tokens = [];
          var rawTokens = [];
          var lastIndex = tagRE.lastIndex = 0;
          var match, index2, tokenValue;
          while (match = tagRE.exec(text2)) {
            index2 = match.index;
            if (index2 > lastIndex) {
              rawTokens.push(tokenValue = text2.slice(lastIndex, index2));
              tokens.push(JSON.stringify(tokenValue));
            }
            var exp = parseFilters(match[1].trim());
            tokens.push("_s(" + exp + ")");
            rawTokens.push({"@binding": exp});
            lastIndex = index2 + match[0].length;
          }
          if (lastIndex < text2.length) {
            rawTokens.push(tokenValue = text2.slice(lastIndex));
            tokens.push(JSON.stringify(tokenValue));
          }
          return {
            expression: tokens.join("+"),
            tokens: rawTokens
          };
        }
        function transformNode(el, options) {
          var warn2 = options.warn || baseWarn;
          var staticClass = getAndRemoveAttr(el, "class");
          if (staticClass) {
            var res = parseText(staticClass, options.delimiters);
            if (res) {
              warn2('class="' + staticClass + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div class="{{ val }}">, use <div :class="val">.', el.rawAttrsMap["class"]);
            }
          }
          if (staticClass) {
            el.staticClass = JSON.stringify(staticClass);
          }
          var classBinding = getBindingAttr(el, "class", false);
          if (classBinding) {
            el.classBinding = classBinding;
          }
        }
        function genData(el) {
          var data = "";
          if (el.staticClass) {
            data += "staticClass:" + el.staticClass + ",";
          }
          if (el.classBinding) {
            data += "class:" + el.classBinding + ",";
          }
          return data;
        }
        var klass$1 = {
          staticKeys: ["staticClass"],
          transformNode,
          genData
        };
        function transformNode$1(el, options) {
          var warn2 = options.warn || baseWarn;
          var staticStyle = getAndRemoveAttr(el, "style");
          if (staticStyle) {
            {
              var res = parseText(staticStyle, options.delimiters);
              if (res) {
                warn2('style="' + staticStyle + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div style="{{ val }}">, use <div :style="val">.', el.rawAttrsMap["style"]);
              }
            }
            el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
          }
          var styleBinding = getBindingAttr(el, "style", false);
          if (styleBinding) {
            el.styleBinding = styleBinding;
          }
        }
        function genData$1(el) {
          var data = "";
          if (el.staticStyle) {
            data += "staticStyle:" + el.staticStyle + ",";
          }
          if (el.styleBinding) {
            data += "style:(" + el.styleBinding + "),";
          }
          return data;
        }
        var style$1 = {
          staticKeys: ["staticStyle"],
          transformNode: transformNode$1,
          genData: genData$1
        };
        var decoder;
        var he = {
          decode: function decode(html2) {
            decoder = decoder || document.createElement("div");
            decoder.innerHTML = html2;
            return decoder.textContent;
          }
        };
        var isUnaryTag = makeMap("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr");
        var canBeLeftOpenTag = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source");
        var isNonPhrasingTag = makeMap("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track");
        var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
        var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
        var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + unicodeRegExp.source + "]*";
        var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
        var startTagOpen = new RegExp("^<" + qnameCapture);
        var startTagClose = /^\s*(\/?)>/;
        var endTag = new RegExp("^<\\/" + qnameCapture + "[^>]*>");
        var doctype = /^<!DOCTYPE [^>]+>/i;
        var comment = /^<!\--/;
        var conditionalComment = /^<!\[/;
        var isPlainTextElement = makeMap("script,style,textarea", true);
        var reCache = {};
        var decodingMap = {
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&amp;": "&",
          "&#10;": "\n",
          "&#9;": "	",
          "&#39;": "'"
        };
        var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
        var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;
        var isIgnoreNewlineTag = makeMap("pre,textarea", true);
        var shouldIgnoreFirstNewline = function(tag, html2) {
          return tag && isIgnoreNewlineTag(tag) && html2[0] === "\n";
        };
        function decodeAttr(value, shouldDecodeNewlines2) {
          var re = shouldDecodeNewlines2 ? encodedAttrWithNewLines : encodedAttr;
          return value.replace(re, function(match) {
            return decodingMap[match];
          });
        }
        function parseHTML(html2, options) {
          var stack = [];
          var expectHTML = options.expectHTML;
          var isUnaryTag$$1 = options.isUnaryTag || no;
          var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
          var index2 = 0;
          var last, lastTag;
          while (html2) {
            last = html2;
            if (!lastTag || !isPlainTextElement(lastTag)) {
              var textEnd = html2.indexOf("<");
              if (textEnd === 0) {
                if (comment.test(html2)) {
                  var commentEnd = html2.indexOf("-->");
                  if (commentEnd >= 0) {
                    if (options.shouldKeepComment) {
                      options.comment(html2.substring(4, commentEnd), index2, index2 + commentEnd + 3);
                    }
                    advance(commentEnd + 3);
                    continue;
                  }
                }
                if (conditionalComment.test(html2)) {
                  var conditionalEnd = html2.indexOf("]>");
                  if (conditionalEnd >= 0) {
                    advance(conditionalEnd + 2);
                    continue;
                  }
                }
                var doctypeMatch = html2.match(doctype);
                if (doctypeMatch) {
                  advance(doctypeMatch[0].length);
                  continue;
                }
                var endTagMatch = html2.match(endTag);
                if (endTagMatch) {
                  var curIndex = index2;
                  advance(endTagMatch[0].length);
                  parseEndTag(endTagMatch[1], curIndex, index2);
                  continue;
                }
                var startTagMatch = parseStartTag();
                if (startTagMatch) {
                  handleStartTag(startTagMatch);
                  if (shouldIgnoreFirstNewline(startTagMatch.tagName, html2)) {
                    advance(1);
                  }
                  continue;
                }
              }
              var text2 = void 0, rest = void 0, next2 = void 0;
              if (textEnd >= 0) {
                rest = html2.slice(textEnd);
                while (!endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest)) {
                  next2 = rest.indexOf("<", 1);
                  if (next2 < 0) {
                    break;
                  }
                  textEnd += next2;
                  rest = html2.slice(textEnd);
                }
                text2 = html2.substring(0, textEnd);
              }
              if (textEnd < 0) {
                text2 = html2;
              }
              if (text2) {
                advance(text2.length);
              }
              if (options.chars && text2) {
                options.chars(text2, index2 - text2.length, index2);
              }
            } else {
              var endTagLength = 0;
              var stackedTag = lastTag.toLowerCase();
              var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp("([\\s\\S]*?)(</" + stackedTag + "[^>]*>)", "i"));
              var rest$1 = html2.replace(reStackedTag, function(all, text3, endTag2) {
                endTagLength = endTag2.length;
                if (!isPlainTextElement(stackedTag) && stackedTag !== "noscript") {
                  text3 = text3.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1");
                }
                if (shouldIgnoreFirstNewline(stackedTag, text3)) {
                  text3 = text3.slice(1);
                }
                if (options.chars) {
                  options.chars(text3);
                }
                return "";
              });
              index2 += html2.length - rest$1.length;
              html2 = rest$1;
              parseEndTag(stackedTag, index2 - endTagLength, index2);
            }
            if (html2 === last) {
              options.chars && options.chars(html2);
              if (!stack.length && options.warn) {
                options.warn('Mal-formatted tag at end of template: "' + html2 + '"', {start: index2 + html2.length});
              }
              break;
            }
          }
          parseEndTag();
          function advance(n) {
            index2 += n;
            html2 = html2.substring(n);
          }
          function parseStartTag() {
            var start = html2.match(startTagOpen);
            if (start) {
              var match = {
                tagName: start[1],
                attrs: [],
                start: index2
              };
              advance(start[0].length);
              var end, attr;
              while (!(end = html2.match(startTagClose)) && (attr = html2.match(dynamicArgAttribute) || html2.match(attribute))) {
                attr.start = index2;
                advance(attr[0].length);
                attr.end = index2;
                match.attrs.push(attr);
              }
              if (end) {
                match.unarySlash = end[1];
                advance(end[0].length);
                match.end = index2;
                return match;
              }
            }
          }
          function handleStartTag(match) {
            var tagName2 = match.tagName;
            var unarySlash = match.unarySlash;
            if (expectHTML) {
              if (lastTag === "p" && isNonPhrasingTag(tagName2)) {
                parseEndTag(lastTag);
              }
              if (canBeLeftOpenTag$$1(tagName2) && lastTag === tagName2) {
                parseEndTag(tagName2);
              }
            }
            var unary = isUnaryTag$$1(tagName2) || !!unarySlash;
            var l = match.attrs.length;
            var attrs2 = new Array(l);
            for (var i = 0; i < l; i++) {
              var args = match.attrs[i];
              var value = args[3] || args[4] || args[5] || "";
              var shouldDecodeNewlines2 = tagName2 === "a" && args[1] === "href" ? options.shouldDecodeNewlinesForHref : options.shouldDecodeNewlines;
              attrs2[i] = {
                name: args[1],
                value: decodeAttr(value, shouldDecodeNewlines2)
              };
              if (options.outputSourceRange) {
                attrs2[i].start = args.start + args[0].match(/^\s*/).length;
                attrs2[i].end = args.end;
              }
            }
            if (!unary) {
              stack.push({tag: tagName2, lowerCasedTag: tagName2.toLowerCase(), attrs: attrs2, start: match.start, end: match.end});
              lastTag = tagName2;
            }
            if (options.start) {
              options.start(tagName2, attrs2, unary, match.start, match.end);
            }
          }
          function parseEndTag(tagName2, start, end) {
            var pos, lowerCasedTagName;
            if (start == null) {
              start = index2;
            }
            if (end == null) {
              end = index2;
            }
            if (tagName2) {
              lowerCasedTagName = tagName2.toLowerCase();
              for (pos = stack.length - 1; pos >= 0; pos--) {
                if (stack[pos].lowerCasedTag === lowerCasedTagName) {
                  break;
                }
              }
            } else {
              pos = 0;
            }
            if (pos >= 0) {
              for (var i = stack.length - 1; i >= pos; i--) {
                if (i > pos || !tagName2 && options.warn) {
                  options.warn("tag <" + stack[i].tag + "> has no matching end tag.", {start: stack[i].start, end: stack[i].end});
                }
                if (options.end) {
                  options.end(stack[i].tag, start, end);
                }
              }
              stack.length = pos;
              lastTag = pos && stack[pos - 1].tag;
            } else if (lowerCasedTagName === "br") {
              if (options.start) {
                options.start(tagName2, [], true, start, end);
              }
            } else if (lowerCasedTagName === "p") {
              if (options.start) {
                options.start(tagName2, [], false, start, end);
              }
              if (options.end) {
                options.end(tagName2, start, end);
              }
            }
          }
        }
        var onRE = /^@|^v-on:/;
        var dirRE = /^v-|^@|^:|^#/;
        var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
        var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
        var stripParensRE = /^\(|\)$/g;
        var dynamicArgRE = /^\[.*\]$/;
        var argRE = /:(.*)$/;
        var bindRE = /^:|^\.|^v-bind:/;
        var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;
        var slotRE = /^v-slot(:|$)|^#/;
        var lineBreakRE = /[\r\n]/;
        var whitespaceRE$1 = /\s+/g;
        var invalidAttributeRE = /[\s"'<>\/=]/;
        var decodeHTMLCached = cached(he.decode);
        var emptySlotScopeToken = "_empty_";
        var warn$2;
        var delimiters;
        var transforms;
        var preTransforms;
        var postTransforms;
        var platformIsPreTag;
        var platformMustUseProp;
        var platformGetTagNamespace;
        var maybeComponent;
        function createASTElement(tag, attrs2, parent) {
          return {
            type: 1,
            tag,
            attrsList: attrs2,
            attrsMap: makeAttrsMap(attrs2),
            rawAttrsMap: {},
            parent,
            children: []
          };
        }
        function parse(template, options) {
          warn$2 = options.warn || baseWarn;
          platformIsPreTag = options.isPreTag || no;
          platformMustUseProp = options.mustUseProp || no;
          platformGetTagNamespace = options.getTagNamespace || no;
          var isReservedTag2 = options.isReservedTag || no;
          maybeComponent = function(el) {
            return !!el.component || !isReservedTag2(el.tag);
          };
          transforms = pluckModuleFunction(options.modules, "transformNode");
          preTransforms = pluckModuleFunction(options.modules, "preTransformNode");
          postTransforms = pluckModuleFunction(options.modules, "postTransformNode");
          delimiters = options.delimiters;
          var stack = [];
          var preserveWhitespace = options.preserveWhitespace !== false;
          var whitespaceOption = options.whitespace;
          var root;
          var currentParent;
          var inVPre = false;
          var inPre = false;
          var warned = false;
          function warnOnce(msg, range2) {
            if (!warned) {
              warned = true;
              warn$2(msg, range2);
            }
          }
          function closeElement(element) {
            trimEndingWhitespace(element);
            if (!inVPre && !element.processed) {
              element = processElement(element, options);
            }
            if (!stack.length && element !== root) {
              if (root.if && (element.elseif || element.else)) {
                {
                  checkRootConstraints(element);
                }
                addIfCondition(root, {
                  exp: element.elseif,
                  block: element
                });
              } else {
                warnOnce("Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.", {start: element.start});
              }
            }
            if (currentParent && !element.forbidden) {
              if (element.elseif || element.else) {
                processIfConditions(element, currentParent);
              } else {
                if (element.slotScope) {
                  var name = element.slotTarget || '"default"';
                  (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
                }
                currentParent.children.push(element);
                element.parent = currentParent;
              }
            }
            element.children = element.children.filter(function(c) {
              return !c.slotScope;
            });
            trimEndingWhitespace(element);
            if (element.pre) {
              inVPre = false;
            }
            if (platformIsPreTag(element.tag)) {
              inPre = false;
            }
            for (var i = 0; i < postTransforms.length; i++) {
              postTransforms[i](element, options);
            }
          }
          function trimEndingWhitespace(el) {
            if (!inPre) {
              var lastNode;
              while ((lastNode = el.children[el.children.length - 1]) && lastNode.type === 3 && lastNode.text === " ") {
                el.children.pop();
              }
            }
          }
          function checkRootConstraints(el) {
            if (el.tag === "slot" || el.tag === "template") {
              warnOnce("Cannot use <" + el.tag + "> as component root element because it may contain multiple nodes.", {start: el.start});
            }
            if (el.attrsMap.hasOwnProperty("v-for")) {
              warnOnce("Cannot use v-for on stateful component root element because it renders multiple elements.", el.rawAttrsMap["v-for"]);
            }
          }
          parseHTML(template, {
            warn: warn$2,
            expectHTML: options.expectHTML,
            isUnaryTag: options.isUnaryTag,
            canBeLeftOpenTag: options.canBeLeftOpenTag,
            shouldDecodeNewlines: options.shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
            shouldKeepComment: options.comments,
            outputSourceRange: options.outputSourceRange,
            start: function start(tag, attrs2, unary, start$1, end) {
              var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag);
              if (isIE && ns === "svg") {
                attrs2 = guardIESVGBug(attrs2);
              }
              var element = createASTElement(tag, attrs2, currentParent);
              if (ns) {
                element.ns = ns;
              }
              {
                if (options.outputSourceRange) {
                  element.start = start$1;
                  element.end = end;
                  element.rawAttrsMap = element.attrsList.reduce(function(cumulated, attr) {
                    cumulated[attr.name] = attr;
                    return cumulated;
                  }, {});
                }
                attrs2.forEach(function(attr) {
                  if (invalidAttributeRE.test(attr.name)) {
                    warn$2("Invalid dynamic argument expression: attribute names cannot contain spaces, quotes, <, >, / or =.", {
                      start: attr.start + attr.name.indexOf("["),
                      end: attr.start + attr.name.length
                    });
                  }
                });
              }
              if (isForbiddenTag(element) && !isServerRendering()) {
                element.forbidden = true;
                warn$2("Templates should only be responsible for mapping the state to the UI. Avoid placing tags with side-effects in your templates, such as <" + tag + ">, as they will not be parsed.", {start: element.start});
              }
              for (var i = 0; i < preTransforms.length; i++) {
                element = preTransforms[i](element, options) || element;
              }
              if (!inVPre) {
                processPre(element);
                if (element.pre) {
                  inVPre = true;
                }
              }
              if (platformIsPreTag(element.tag)) {
                inPre = true;
              }
              if (inVPre) {
                processRawAttrs(element);
              } else if (!element.processed) {
                processFor(element);
                processIf(element);
                processOnce(element);
              }
              if (!root) {
                root = element;
                {
                  checkRootConstraints(root);
                }
              }
              if (!unary) {
                currentParent = element;
                stack.push(element);
              } else {
                closeElement(element);
              }
            },
            end: function end(tag, start, end$1) {
              var element = stack[stack.length - 1];
              stack.length -= 1;
              currentParent = stack[stack.length - 1];
              if (options.outputSourceRange) {
                element.end = end$1;
              }
              closeElement(element);
            },
            chars: function chars(text2, start, end) {
              if (!currentParent) {
                {
                  if (text2 === template) {
                    warnOnce("Component template requires a root element, rather than just text.", {start});
                  } else if (text2 = text2.trim()) {
                    warnOnce('text "' + text2 + '" outside root element will be ignored.', {start});
                  }
                }
                return;
              }
              if (isIE && currentParent.tag === "textarea" && currentParent.attrsMap.placeholder === text2) {
                return;
              }
              var children = currentParent.children;
              if (inPre || text2.trim()) {
                text2 = isTextTag(currentParent) ? text2 : decodeHTMLCached(text2);
              } else if (!children.length) {
                text2 = "";
              } else if (whitespaceOption) {
                if (whitespaceOption === "condense") {
                  text2 = lineBreakRE.test(text2) ? "" : " ";
                } else {
                  text2 = " ";
                }
              } else {
                text2 = preserveWhitespace ? " " : "";
              }
              if (text2) {
                if (!inPre && whitespaceOption === "condense") {
                  text2 = text2.replace(whitespaceRE$1, " ");
                }
                var res;
                var child;
                if (!inVPre && text2 !== " " && (res = parseText(text2, delimiters))) {
                  child = {
                    type: 2,
                    expression: res.expression,
                    tokens: res.tokens,
                    text: text2
                  };
                } else if (text2 !== " " || !children.length || children[children.length - 1].text !== " ") {
                  child = {
                    type: 3,
                    text: text2
                  };
                }
                if (child) {
                  if (options.outputSourceRange) {
                    child.start = start;
                    child.end = end;
                  }
                  children.push(child);
                }
              }
            },
            comment: function comment2(text2, start, end) {
              if (currentParent) {
                var child = {
                  type: 3,
                  text: text2,
                  isComment: true
                };
                if (options.outputSourceRange) {
                  child.start = start;
                  child.end = end;
                }
                currentParent.children.push(child);
              }
            }
          });
          return root;
        }
        function processPre(el) {
          if (getAndRemoveAttr(el, "v-pre") != null) {
            el.pre = true;
          }
        }
        function processRawAttrs(el) {
          var list = el.attrsList;
          var len2 = list.length;
          if (len2) {
            var attrs2 = el.attrs = new Array(len2);
            for (var i = 0; i < len2; i++) {
              attrs2[i] = {
                name: list[i].name,
                value: JSON.stringify(list[i].value)
              };
              if (list[i].start != null) {
                attrs2[i].start = list[i].start;
                attrs2[i].end = list[i].end;
              }
            }
          } else if (!el.pre) {
            el.plain = true;
          }
        }
        function processElement(element, options) {
          processKey(element);
          element.plain = !element.key && !element.scopedSlots && !element.attrsList.length;
          processRef(element);
          processSlotContent(element);
          processSlotOutlet(element);
          processComponent(element);
          for (var i = 0; i < transforms.length; i++) {
            element = transforms[i](element, options) || element;
          }
          processAttrs(element);
          return element;
        }
        function processKey(el) {
          var exp = getBindingAttr(el, "key");
          if (exp) {
            {
              if (el.tag === "template") {
                warn$2("<template> cannot be keyed. Place the key on real elements instead.", getRawBindingAttr(el, "key"));
              }
              if (el.for) {
                var iterator = el.iterator2 || el.iterator1;
                var parent = el.parent;
                if (iterator && iterator === exp && parent && parent.tag === "transition-group") {
                  warn$2("Do not use v-for index as key on <transition-group> children, this is the same as not using keys.", getRawBindingAttr(el, "key"), true);
                }
              }
            }
            el.key = exp;
          }
        }
        function processRef(el) {
          var ref2 = getBindingAttr(el, "ref");
          if (ref2) {
            el.ref = ref2;
            el.refInFor = checkInFor(el);
          }
        }
        function processFor(el) {
          var exp;
          if (exp = getAndRemoveAttr(el, "v-for")) {
            var res = parseFor(exp);
            if (res) {
              extend(el, res);
            } else {
              warn$2("Invalid v-for expression: " + exp, el.rawAttrsMap["v-for"]);
            }
          }
        }
        function parseFor(exp) {
          var inMatch = exp.match(forAliasRE);
          if (!inMatch) {
            return;
          }
          var res = {};
          res.for = inMatch[2].trim();
          var alias = inMatch[1].trim().replace(stripParensRE, "");
          var iteratorMatch = alias.match(forIteratorRE);
          if (iteratorMatch) {
            res.alias = alias.replace(forIteratorRE, "").trim();
            res.iterator1 = iteratorMatch[1].trim();
            if (iteratorMatch[2]) {
              res.iterator2 = iteratorMatch[2].trim();
            }
          } else {
            res.alias = alias;
          }
          return res;
        }
        function processIf(el) {
          var exp = getAndRemoveAttr(el, "v-if");
          if (exp) {
            el.if = exp;
            addIfCondition(el, {
              exp,
              block: el
            });
          } else {
            if (getAndRemoveAttr(el, "v-else") != null) {
              el.else = true;
            }
            var elseif = getAndRemoveAttr(el, "v-else-if");
            if (elseif) {
              el.elseif = elseif;
            }
          }
        }
        function processIfConditions(el, parent) {
          var prev = findPrevElement(parent.children);
          if (prev && prev.if) {
            addIfCondition(prev, {
              exp: el.elseif,
              block: el
            });
          } else {
            warn$2("v-" + (el.elseif ? 'else-if="' + el.elseif + '"' : "else") + " used on element <" + el.tag + "> without corresponding v-if.", el.rawAttrsMap[el.elseif ? "v-else-if" : "v-else"]);
          }
        }
        function findPrevElement(children) {
          var i = children.length;
          while (i--) {
            if (children[i].type === 1) {
              return children[i];
            } else {
              if (children[i].text !== " ") {
                warn$2('text "' + children[i].text.trim() + '" between v-if and v-else(-if) will be ignored.', children[i]);
              }
              children.pop();
            }
          }
        }
        function addIfCondition(el, condition) {
          if (!el.ifConditions) {
            el.ifConditions = [];
          }
          el.ifConditions.push(condition);
        }
        function processOnce(el) {
          var once$$1 = getAndRemoveAttr(el, "v-once");
          if (once$$1 != null) {
            el.once = true;
          }
        }
        function processSlotContent(el) {
          var slotScope;
          if (el.tag === "template") {
            slotScope = getAndRemoveAttr(el, "scope");
            if (slotScope) {
              warn$2('the "scope" attribute for scoped slots have been deprecated and replaced by "slot-scope" since 2.5. The new "slot-scope" attribute can also be used on plain elements in addition to <template> to denote scoped slots.', el.rawAttrsMap["scope"], true);
            }
            el.slotScope = slotScope || getAndRemoveAttr(el, "slot-scope");
          } else if (slotScope = getAndRemoveAttr(el, "slot-scope")) {
            if (el.attrsMap["v-for"]) {
              warn$2("Ambiguous combined usage of slot-scope and v-for on <" + el.tag + "> (v-for takes higher priority). Use a wrapper <template> for the scoped slot to make it clearer.", el.rawAttrsMap["slot-scope"], true);
            }
            el.slotScope = slotScope;
          }
          var slotTarget = getBindingAttr(el, "slot");
          if (slotTarget) {
            el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
            el.slotTargetDynamic = !!(el.attrsMap[":slot"] || el.attrsMap["v-bind:slot"]);
            if (el.tag !== "template" && !el.slotScope) {
              addAttr(el, "slot", slotTarget, getRawBindingAttr(el, "slot"));
            }
          }
          {
            if (el.tag === "template") {
              var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
              if (slotBinding) {
                {
                  if (el.slotTarget || el.slotScope) {
                    warn$2("Unexpected mixed usage of different slot syntaxes.", el);
                  }
                  if (el.parent && !maybeComponent(el.parent)) {
                    warn$2("<template v-slot> can only appear at the root level inside the receiving component", el);
                  }
                }
                var ref2 = getSlotName(slotBinding);
                var name = ref2.name;
                var dynamic = ref2.dynamic;
                el.slotTarget = name;
                el.slotTargetDynamic = dynamic;
                el.slotScope = slotBinding.value || emptySlotScopeToken;
              }
            } else {
              var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
              if (slotBinding$1) {
                {
                  if (!maybeComponent(el)) {
                    warn$2("v-slot can only be used on components or <template>.", slotBinding$1);
                  }
                  if (el.slotScope || el.slotTarget) {
                    warn$2("Unexpected mixed usage of different slot syntaxes.", el);
                  }
                  if (el.scopedSlots) {
                    warn$2("To avoid scope ambiguity, the default slot should also use <template> syntax when there are other named slots.", slotBinding$1);
                  }
                }
                var slots = el.scopedSlots || (el.scopedSlots = {});
                var ref$12 = getSlotName(slotBinding$1);
                var name$1 = ref$12.name;
                var dynamic$1 = ref$12.dynamic;
                var slotContainer = slots[name$1] = createASTElement("template", [], el);
                slotContainer.slotTarget = name$1;
                slotContainer.slotTargetDynamic = dynamic$1;
                slotContainer.children = el.children.filter(function(c) {
                  if (!c.slotScope) {
                    c.parent = slotContainer;
                    return true;
                  }
                });
                slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
                el.children = [];
                el.plain = false;
              }
            }
          }
        }
        function getSlotName(binding) {
          var name = binding.name.replace(slotRE, "");
          if (!name) {
            if (binding.name[0] !== "#") {
              name = "default";
            } else {
              warn$2("v-slot shorthand syntax requires a slot name.", binding);
            }
          }
          return dynamicArgRE.test(name) ? {name: name.slice(1, -1), dynamic: true} : {name: '"' + name + '"', dynamic: false};
        }
        function processSlotOutlet(el) {
          if (el.tag === "slot") {
            el.slotName = getBindingAttr(el, "name");
            if (el.key) {
              warn$2("`key` does not work on <slot> because slots are abstract outlets and can possibly expand into multiple elements. Use the key on a wrapping element instead.", getRawBindingAttr(el, "key"));
            }
          }
        }
        function processComponent(el) {
          var binding;
          if (binding = getBindingAttr(el, "is")) {
            el.component = binding;
          }
          if (getAndRemoveAttr(el, "inline-template") != null) {
            el.inlineTemplate = true;
          }
        }
        function processAttrs(el) {
          var list = el.attrsList;
          var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
          for (i = 0, l = list.length; i < l; i++) {
            name = rawName = list[i].name;
            value = list[i].value;
            if (dirRE.test(name)) {
              el.hasBindings = true;
              modifiers = parseModifiers(name.replace(dirRE, ""));
              if (modifiers) {
                name = name.replace(modifierRE, "");
              }
              if (bindRE.test(name)) {
                name = name.replace(bindRE, "");
                value = parseFilters(value);
                isDynamic = dynamicArgRE.test(name);
                if (isDynamic) {
                  name = name.slice(1, -1);
                }
                if (value.trim().length === 0) {
                  warn$2('The value for a v-bind expression cannot be empty. Found in "v-bind:' + name + '"');
                }
                if (modifiers) {
                  if (modifiers.prop && !isDynamic) {
                    name = camelize(name);
                    if (name === "innerHtml") {
                      name = "innerHTML";
                    }
                  }
                  if (modifiers.camel && !isDynamic) {
                    name = camelize(name);
                  }
                  if (modifiers.sync) {
                    syncGen = genAssignmentCode(value, "$event");
                    if (!isDynamic) {
                      addHandler(el, "update:" + camelize(name), syncGen, null, false, warn$2, list[i]);
                      if (hyphenate(name) !== camelize(name)) {
                        addHandler(el, "update:" + hyphenate(name), syncGen, null, false, warn$2, list[i]);
                      }
                    } else {
                      addHandler(el, '"update:"+(' + name + ")", syncGen, null, false, warn$2, list[i], true);
                    }
                  }
                }
                if (modifiers && modifiers.prop || !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
                  addProp(el, name, value, list[i], isDynamic);
                } else {
                  addAttr(el, name, value, list[i], isDynamic);
                }
              } else if (onRE.test(name)) {
                name = name.replace(onRE, "");
                isDynamic = dynamicArgRE.test(name);
                if (isDynamic) {
                  name = name.slice(1, -1);
                }
                addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
              } else {
                name = name.replace(dirRE, "");
                var argMatch = name.match(argRE);
                var arg = argMatch && argMatch[1];
                isDynamic = false;
                if (arg) {
                  name = name.slice(0, -(arg.length + 1));
                  if (dynamicArgRE.test(arg)) {
                    arg = arg.slice(1, -1);
                    isDynamic = true;
                  }
                }
                addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
                if (name === "model") {
                  checkForAliasModel(el, value);
                }
              }
            } else {
              {
                var res = parseText(value, delimiters);
                if (res) {
                  warn$2(name + '="' + value + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div id="{{ val }}">, use <div :id="val">.', list[i]);
                }
              }
              addAttr(el, name, JSON.stringify(value), list[i]);
              if (!el.component && name === "muted" && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
                addProp(el, name, "true", list[i]);
              }
            }
          }
        }
        function checkInFor(el) {
          var parent = el;
          while (parent) {
            if (parent.for !== void 0) {
              return true;
            }
            parent = parent.parent;
          }
          return false;
        }
        function parseModifiers(name) {
          var match = name.match(modifierRE);
          if (match) {
            var ret = {};
            match.forEach(function(m) {
              ret[m.slice(1)] = true;
            });
            return ret;
          }
        }
        function makeAttrsMap(attrs2) {
          var map = {};
          for (var i = 0, l = attrs2.length; i < l; i++) {
            if (map[attrs2[i].name] && !isIE && !isEdge) {
              warn$2("duplicate attribute: " + attrs2[i].name, attrs2[i]);
            }
            map[attrs2[i].name] = attrs2[i].value;
          }
          return map;
        }
        function isTextTag(el) {
          return el.tag === "script" || el.tag === "style";
        }
        function isForbiddenTag(el) {
          return el.tag === "style" || el.tag === "script" && (!el.attrsMap.type || el.attrsMap.type === "text/javascript");
        }
        var ieNSBug = /^xmlns:NS\d+/;
        var ieNSPrefix = /^NS\d+:/;
        function guardIESVGBug(attrs2) {
          var res = [];
          for (var i = 0; i < attrs2.length; i++) {
            var attr = attrs2[i];
            if (!ieNSBug.test(attr.name)) {
              attr.name = attr.name.replace(ieNSPrefix, "");
              res.push(attr);
            }
          }
          return res;
        }
        function checkForAliasModel(el, value) {
          var _el = el;
          while (_el) {
            if (_el.for && _el.alias === value) {
              warn$2("<" + el.tag + ' v-model="' + value + '">: You are binding v-model directly to a v-for iteration alias. This will not be able to modify the v-for source array because writing to the alias is like modifying a function local variable. Consider using an array of objects and use v-model on an object property instead.', el.rawAttrsMap["v-model"]);
            }
            _el = _el.parent;
          }
        }
        function preTransformNode(el, options) {
          if (el.tag === "input") {
            var map = el.attrsMap;
            if (!map["v-model"]) {
              return;
            }
            var typeBinding;
            if (map[":type"] || map["v-bind:type"]) {
              typeBinding = getBindingAttr(el, "type");
            }
            if (!map.type && !typeBinding && map["v-bind"]) {
              typeBinding = "(" + map["v-bind"] + ").type";
            }
            if (typeBinding) {
              var ifCondition = getAndRemoveAttr(el, "v-if", true);
              var ifConditionExtra = ifCondition ? "&&(" + ifCondition + ")" : "";
              var hasElse = getAndRemoveAttr(el, "v-else", true) != null;
              var elseIfCondition = getAndRemoveAttr(el, "v-else-if", true);
              var branch0 = cloneASTElement(el);
              processFor(branch0);
              addRawAttr(branch0, "type", "checkbox");
              processElement(branch0, options);
              branch0.processed = true;
              branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
              addIfCondition(branch0, {
                exp: branch0.if,
                block: branch0
              });
              var branch1 = cloneASTElement(el);
              getAndRemoveAttr(branch1, "v-for", true);
              addRawAttr(branch1, "type", "radio");
              processElement(branch1, options);
              addIfCondition(branch0, {
                exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
                block: branch1
              });
              var branch2 = cloneASTElement(el);
              getAndRemoveAttr(branch2, "v-for", true);
              addRawAttr(branch2, ":type", typeBinding);
              processElement(branch2, options);
              addIfCondition(branch0, {
                exp: ifCondition,
                block: branch2
              });
              if (hasElse) {
                branch0.else = true;
              } else if (elseIfCondition) {
                branch0.elseif = elseIfCondition;
              }
              return branch0;
            }
          }
        }
        function cloneASTElement(el) {
          return createASTElement(el.tag, el.attrsList.slice(), el.parent);
        }
        var model$1 = {
          preTransformNode
        };
        var modules$1 = [
          klass$1,
          style$1,
          model$1
        ];
        function text(el, dir) {
          if (dir.value) {
            addProp(el, "textContent", "_s(" + dir.value + ")", dir);
          }
        }
        function html(el, dir) {
          if (dir.value) {
            addProp(el, "innerHTML", "_s(" + dir.value + ")", dir);
          }
        }
        var directives$1 = {
          model,
          text,
          html
        };
        var baseOptions = {
          expectHTML: true,
          modules: modules$1,
          directives: directives$1,
          isPreTag,
          isUnaryTag,
          mustUseProp,
          canBeLeftOpenTag,
          isReservedTag,
          getTagNamespace,
          staticKeys: genStaticKeys(modules$1)
        };
        var isStaticKey;
        var isPlatformReservedTag;
        var genStaticKeysCached = cached(genStaticKeys$1);
        function optimize(root, options) {
          if (!root) {
            return;
          }
          isStaticKey = genStaticKeysCached(options.staticKeys || "");
          isPlatformReservedTag = options.isReservedTag || no;
          markStatic$1(root);
          markStaticRoots(root, false);
        }
        function genStaticKeys$1(keys) {
          return makeMap("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (keys ? "," + keys : ""));
        }
        function markStatic$1(node) {
          node.static = isStatic(node);
          if (node.type === 1) {
            if (!isPlatformReservedTag(node.tag) && node.tag !== "slot" && node.attrsMap["inline-template"] == null) {
              return;
            }
            for (var i = 0, l = node.children.length; i < l; i++) {
              var child = node.children[i];
              markStatic$1(child);
              if (!child.static) {
                node.static = false;
              }
            }
            if (node.ifConditions) {
              for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
                var block = node.ifConditions[i$1].block;
                markStatic$1(block);
                if (!block.static) {
                  node.static = false;
                }
              }
            }
          }
        }
        function markStaticRoots(node, isInFor) {
          if (node.type === 1) {
            if (node.static || node.once) {
              node.staticInFor = isInFor;
            }
            if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
              node.staticRoot = true;
              return;
            } else {
              node.staticRoot = false;
            }
            if (node.children) {
              for (var i = 0, l = node.children.length; i < l; i++) {
                markStaticRoots(node.children[i], isInFor || !!node.for);
              }
            }
            if (node.ifConditions) {
              for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
                markStaticRoots(node.ifConditions[i$1].block, isInFor);
              }
            }
          }
        }
        function isStatic(node) {
          if (node.type === 2) {
            return false;
          }
          if (node.type === 3) {
            return true;
          }
          return !!(node.pre || !node.hasBindings && !node.if && !node.for && !isBuiltInTag(node.tag) && isPlatformReservedTag(node.tag) && !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));
        }
        function isDirectChildOfTemplateFor(node) {
          while (node.parent) {
            node = node.parent;
            if (node.tag !== "template") {
              return false;
            }
            if (node.for) {
              return true;
            }
          }
          return false;
        }
        var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
        var fnInvokeRE = /\([^)]*?\);*$/;
        var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;
        var keyCodes = {
          esc: 27,
          tab: 9,
          enter: 13,
          space: 32,
          up: 38,
          left: 37,
          right: 39,
          down: 40,
          "delete": [8, 46]
        };
        var keyNames = {
          esc: ["Esc", "Escape"],
          tab: "Tab",
          enter: "Enter",
          space: [" ", "Spacebar"],
          up: ["Up", "ArrowUp"],
          left: ["Left", "ArrowLeft"],
          right: ["Right", "ArrowRight"],
          down: ["Down", "ArrowDown"],
          "delete": ["Backspace", "Delete", "Del"]
        };
        var genGuard = function(condition) {
          return "if(" + condition + ")return null;";
        };
        var modifierCode = {
          stop: "$event.stopPropagation();",
          prevent: "$event.preventDefault();",
          self: genGuard("$event.target !== $event.currentTarget"),
          ctrl: genGuard("!$event.ctrlKey"),
          shift: genGuard("!$event.shiftKey"),
          alt: genGuard("!$event.altKey"),
          meta: genGuard("!$event.metaKey"),
          left: genGuard("'button' in $event && $event.button !== 0"),
          middle: genGuard("'button' in $event && $event.button !== 1"),
          right: genGuard("'button' in $event && $event.button !== 2")
        };
        function genHandlers(events2, isNative2) {
          var prefix = isNative2 ? "nativeOn:" : "on:";
          var staticHandlers = "";
          var dynamicHandlers = "";
          for (var name in events2) {
            var handlerCode = genHandler(events2[name]);
            if (events2[name] && events2[name].dynamic) {
              dynamicHandlers += name + "," + handlerCode + ",";
            } else {
              staticHandlers += '"' + name + '":' + handlerCode + ",";
            }
          }
          staticHandlers = "{" + staticHandlers.slice(0, -1) + "}";
          if (dynamicHandlers) {
            return prefix + "_d(" + staticHandlers + ",[" + dynamicHandlers.slice(0, -1) + "])";
          } else {
            return prefix + staticHandlers;
          }
        }
        function genHandler(handler) {
          if (!handler) {
            return "function(){}";
          }
          if (Array.isArray(handler)) {
            return "[" + handler.map(function(handler2) {
              return genHandler(handler2);
            }).join(",") + "]";
          }
          var isMethodPath = simplePathRE.test(handler.value);
          var isFunctionExpression = fnExpRE.test(handler.value);
          var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ""));
          if (!handler.modifiers) {
            if (isMethodPath || isFunctionExpression) {
              return handler.value;
            }
            return "function($event){" + (isFunctionInvocation ? "return " + handler.value : handler.value) + "}";
          } else {
            var code = "";
            var genModifierCode = "";
            var keys = [];
            for (var key in handler.modifiers) {
              if (modifierCode[key]) {
                genModifierCode += modifierCode[key];
                if (keyCodes[key]) {
                  keys.push(key);
                }
              } else if (key === "exact") {
                var modifiers = handler.modifiers;
                genModifierCode += genGuard(["ctrl", "shift", "alt", "meta"].filter(function(keyModifier) {
                  return !modifiers[keyModifier];
                }).map(function(keyModifier) {
                  return "$event." + keyModifier + "Key";
                }).join("||"));
              } else {
                keys.push(key);
              }
            }
            if (keys.length) {
              code += genKeyFilter(keys);
            }
            if (genModifierCode) {
              code += genModifierCode;
            }
            var handlerCode = isMethodPath ? "return " + handler.value + "($event)" : isFunctionExpression ? "return (" + handler.value + ")($event)" : isFunctionInvocation ? "return " + handler.value : handler.value;
            return "function($event){" + code + handlerCode + "}";
          }
        }
        function genKeyFilter(keys) {
          return "if(!$event.type.indexOf('key')&&" + keys.map(genFilterCode).join("&&") + ")return null;";
        }
        function genFilterCode(key) {
          var keyVal = parseInt(key, 10);
          if (keyVal) {
            return "$event.keyCode!==" + keyVal;
          }
          var keyCode = keyCodes[key];
          var keyName = keyNames[key];
          return "_k($event.keyCode," + JSON.stringify(key) + "," + JSON.stringify(keyCode) + ",$event.key," + JSON.stringify(keyName) + ")";
        }
        function on(el, dir) {
          if (dir.modifiers) {
            warn("v-on without argument does not support modifiers.");
          }
          el.wrapListeners = function(code) {
            return "_g(" + code + "," + dir.value + ")";
          };
        }
        function bind$1(el, dir) {
          el.wrapData = function(code) {
            return "_b(" + code + ",'" + el.tag + "'," + dir.value + "," + (dir.modifiers && dir.modifiers.prop ? "true" : "false") + (dir.modifiers && dir.modifiers.sync ? ",true" : "") + ")";
          };
        }
        var baseDirectives = {
          on,
          bind: bind$1,
          cloak: noop
        };
        var CodegenState = function CodegenState2(options) {
          this.options = options;
          this.warn = options.warn || baseWarn;
          this.transforms = pluckModuleFunction(options.modules, "transformCode");
          this.dataGenFns = pluckModuleFunction(options.modules, "genData");
          this.directives = extend(extend({}, baseDirectives), options.directives);
          var isReservedTag2 = options.isReservedTag || no;
          this.maybeComponent = function(el) {
            return !!el.component || !isReservedTag2(el.tag);
          };
          this.onceId = 0;
          this.staticRenderFns = [];
          this.pre = false;
        };
        function generate(ast, options) {
          var state = new CodegenState(options);
          var code = ast ? genElement(ast, state) : '_c("div")';
          return {
            render: "with(this){return " + code + "}",
            staticRenderFns: state.staticRenderFns
          };
        }
        function genElement(el, state) {
          if (el.parent) {
            el.pre = el.pre || el.parent.pre;
          }
          if (el.staticRoot && !el.staticProcessed) {
            return genStatic(el, state);
          } else if (el.once && !el.onceProcessed) {
            return genOnce(el, state);
          } else if (el.for && !el.forProcessed) {
            return genFor(el, state);
          } else if (el.if && !el.ifProcessed) {
            return genIf(el, state);
          } else if (el.tag === "template" && !el.slotTarget && !state.pre) {
            return genChildren(el, state) || "void 0";
          } else if (el.tag === "slot") {
            return genSlot(el, state);
          } else {
            var code;
            if (el.component) {
              code = genComponent(el.component, el, state);
            } else {
              var data;
              if (!el.plain || el.pre && state.maybeComponent(el)) {
                data = genData$2(el, state);
              }
              var children = el.inlineTemplate ? null : genChildren(el, state, true);
              code = "_c('" + el.tag + "'" + (data ? "," + data : "") + (children ? "," + children : "") + ")";
            }
            for (var i = 0; i < state.transforms.length; i++) {
              code = state.transforms[i](el, code);
            }
            return code;
          }
        }
        function genStatic(el, state) {
          el.staticProcessed = true;
          var originalPreState = state.pre;
          if (el.pre) {
            state.pre = el.pre;
          }
          state.staticRenderFns.push("with(this){return " + genElement(el, state) + "}");
          state.pre = originalPreState;
          return "_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ",true" : "") + ")";
        }
        function genOnce(el, state) {
          el.onceProcessed = true;
          if (el.if && !el.ifProcessed) {
            return genIf(el, state);
          } else if (el.staticInFor) {
            var key = "";
            var parent = el.parent;
            while (parent) {
              if (parent.for) {
                key = parent.key;
                break;
              }
              parent = parent.parent;
            }
            if (!key) {
              state.warn("v-once can only be used inside v-for that is keyed. ", el.rawAttrsMap["v-once"]);
              return genElement(el, state);
            }
            return "_o(" + genElement(el, state) + "," + state.onceId++ + "," + key + ")";
          } else {
            return genStatic(el, state);
          }
        }
        function genIf(el, state, altGen, altEmpty) {
          el.ifProcessed = true;
          return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
        }
        function genIfConditions(conditions, state, altGen, altEmpty) {
          if (!conditions.length) {
            return altEmpty || "_e()";
          }
          var condition = conditions.shift();
          if (condition.exp) {
            return "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions, state, altGen, altEmpty);
          } else {
            return "" + genTernaryExp(condition.block);
          }
          function genTernaryExp(el) {
            return altGen ? altGen(el, state) : el.once ? genOnce(el, state) : genElement(el, state);
          }
        }
        function genFor(el, state, altGen, altHelper) {
          var exp = el.for;
          var alias = el.alias;
          var iterator1 = el.iterator1 ? "," + el.iterator1 : "";
          var iterator2 = el.iterator2 ? "," + el.iterator2 : "";
          if (state.maybeComponent(el) && el.tag !== "slot" && el.tag !== "template" && !el.key) {
            state.warn("<" + el.tag + ' v-for="' + alias + " in " + exp + '">: component lists rendered with v-for should have explicit keys. See https://vuejs.org/guide/list.html#key for more info.', el.rawAttrsMap["v-for"], true);
          }
          el.forProcessed = true;
          return (altHelper || "_l") + "((" + exp + "),function(" + alias + iterator1 + iterator2 + "){return " + (altGen || genElement)(el, state) + "})";
        }
        function genData$2(el, state) {
          var data = "{";
          var dirs = genDirectives(el, state);
          if (dirs) {
            data += dirs + ",";
          }
          if (el.key) {
            data += "key:" + el.key + ",";
          }
          if (el.ref) {
            data += "ref:" + el.ref + ",";
          }
          if (el.refInFor) {
            data += "refInFor:true,";
          }
          if (el.pre) {
            data += "pre:true,";
          }
          if (el.component) {
            data += 'tag:"' + el.tag + '",';
          }
          for (var i = 0; i < state.dataGenFns.length; i++) {
            data += state.dataGenFns[i](el);
          }
          if (el.attrs) {
            data += "attrs:" + genProps(el.attrs) + ",";
          }
          if (el.props) {
            data += "domProps:" + genProps(el.props) + ",";
          }
          if (el.events) {
            data += genHandlers(el.events, false) + ",";
          }
          if (el.nativeEvents) {
            data += genHandlers(el.nativeEvents, true) + ",";
          }
          if (el.slotTarget && !el.slotScope) {
            data += "slot:" + el.slotTarget + ",";
          }
          if (el.scopedSlots) {
            data += genScopedSlots(el, el.scopedSlots, state) + ",";
          }
          if (el.model) {
            data += "model:{value:" + el.model.value + ",callback:" + el.model.callback + ",expression:" + el.model.expression + "},";
          }
          if (el.inlineTemplate) {
            var inlineTemplate = genInlineTemplate(el, state);
            if (inlineTemplate) {
              data += inlineTemplate + ",";
            }
          }
          data = data.replace(/,$/, "") + "}";
          if (el.dynamicAttrs) {
            data = "_b(" + data + ',"' + el.tag + '",' + genProps(el.dynamicAttrs) + ")";
          }
          if (el.wrapData) {
            data = el.wrapData(data);
          }
          if (el.wrapListeners) {
            data = el.wrapListeners(data);
          }
          return data;
        }
        function genDirectives(el, state) {
          var dirs = el.directives;
          if (!dirs) {
            return;
          }
          var res = "directives:[";
          var hasRuntime = false;
          var i, l, dir, needRuntime;
          for (i = 0, l = dirs.length; i < l; i++) {
            dir = dirs[i];
            needRuntime = true;
            var gen = state.directives[dir.name];
            if (gen) {
              needRuntime = !!gen(el, dir, state.warn);
            }
            if (needRuntime) {
              hasRuntime = true;
              res += '{name:"' + dir.name + '",rawName:"' + dir.rawName + '"' + (dir.value ? ",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value) : "") + (dir.arg ? ",arg:" + (dir.isDynamicArg ? dir.arg : '"' + dir.arg + '"') : "") + (dir.modifiers ? ",modifiers:" + JSON.stringify(dir.modifiers) : "") + "},";
            }
          }
          if (hasRuntime) {
            return res.slice(0, -1) + "]";
          }
        }
        function genInlineTemplate(el, state) {
          var ast = el.children[0];
          if (el.children.length !== 1 || ast.type !== 1) {
            state.warn("Inline-template components must have exactly one child element.", {start: el.start});
          }
          if (ast && ast.type === 1) {
            var inlineRenderFns = generate(ast, state.options);
            return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function(code) {
              return "function(){" + code + "}";
            }).join(",") + "]}";
          }
        }
        function genScopedSlots(el, slots, state) {
          var needsForceUpdate = el.for || Object.keys(slots).some(function(key) {
            var slot = slots[key];
            return slot.slotTargetDynamic || slot.if || slot.for || containsSlotChild(slot);
          });
          var needsKey = !!el.if;
          if (!needsForceUpdate) {
            var parent = el.parent;
            while (parent) {
              if (parent.slotScope && parent.slotScope !== emptySlotScopeToken || parent.for) {
                needsForceUpdate = true;
                break;
              }
              if (parent.if) {
                needsKey = true;
              }
              parent = parent.parent;
            }
          }
          var generatedSlots = Object.keys(slots).map(function(key) {
            return genScopedSlot(slots[key], state);
          }).join(",");
          return "scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? ",null,false," + hash(generatedSlots) : "") + ")";
        }
        function hash(str2) {
          var hash2 = 5381;
          var i = str2.length;
          while (i) {
            hash2 = hash2 * 33 ^ str2.charCodeAt(--i);
          }
          return hash2 >>> 0;
        }
        function containsSlotChild(el) {
          if (el.type === 1) {
            if (el.tag === "slot") {
              return true;
            }
            return el.children.some(containsSlotChild);
          }
          return false;
        }
        function genScopedSlot(el, state) {
          var isLegacySyntax = el.attrsMap["slot-scope"];
          if (el.if && !el.ifProcessed && !isLegacySyntax) {
            return genIf(el, state, genScopedSlot, "null");
          }
          if (el.for && !el.forProcessed) {
            return genFor(el, state, genScopedSlot);
          }
          var slotScope = el.slotScope === emptySlotScopeToken ? "" : String(el.slotScope);
          var fn = "function(" + slotScope + "){return " + (el.tag === "template" ? el.if && isLegacySyntax ? "(" + el.if + ")?" + (genChildren(el, state) || "undefined") + ":undefined" : genChildren(el, state) || "undefined" : genElement(el, state)) + "}";
          var reverseProxy = slotScope ? "" : ",proxy:true";
          return "{key:" + (el.slotTarget || '"default"') + ",fn:" + fn + reverseProxy + "}";
        }
        function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
          var children = el.children;
          if (children.length) {
            var el$1 = children[0];
            if (children.length === 1 && el$1.for && el$1.tag !== "template" && el$1.tag !== "slot") {
              var normalizationType = checkSkip ? state.maybeComponent(el$1) ? ",1" : ",0" : "";
              return "" + (altGenElement || genElement)(el$1, state) + normalizationType;
            }
            var normalizationType$1 = checkSkip ? getNormalizationType(children, state.maybeComponent) : 0;
            var gen = altGenNode || genNode;
            return "[" + children.map(function(c) {
              return gen(c, state);
            }).join(",") + "]" + (normalizationType$1 ? "," + normalizationType$1 : "");
          }
        }
        function getNormalizationType(children, maybeComponent2) {
          var res = 0;
          for (var i = 0; i < children.length; i++) {
            var el = children[i];
            if (el.type !== 1) {
              continue;
            }
            if (needsNormalization(el) || el.ifConditions && el.ifConditions.some(function(c) {
              return needsNormalization(c.block);
            })) {
              res = 2;
              break;
            }
            if (maybeComponent2(el) || el.ifConditions && el.ifConditions.some(function(c) {
              return maybeComponent2(c.block);
            })) {
              res = 1;
            }
          }
          return res;
        }
        function needsNormalization(el) {
          return el.for !== void 0 || el.tag === "template" || el.tag === "slot";
        }
        function genNode(node, state) {
          if (node.type === 1) {
            return genElement(node, state);
          } else if (node.type === 3 && node.isComment) {
            return genComment(node);
          } else {
            return genText(node);
          }
        }
        function genText(text2) {
          return "_v(" + (text2.type === 2 ? text2.expression : transformSpecialNewlines(JSON.stringify(text2.text))) + ")";
        }
        function genComment(comment2) {
          return "_e(" + JSON.stringify(comment2.text) + ")";
        }
        function genSlot(el, state) {
          var slotName = el.slotName || '"default"';
          var children = genChildren(el, state);
          var res = "_t(" + slotName + (children ? "," + children : "");
          var attrs2 = el.attrs || el.dynamicAttrs ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function(attr) {
            return {
              name: camelize(attr.name),
              value: attr.value,
              dynamic: attr.dynamic
            };
          })) : null;
          var bind$$1 = el.attrsMap["v-bind"];
          if ((attrs2 || bind$$1) && !children) {
            res += ",null";
          }
          if (attrs2) {
            res += "," + attrs2;
          }
          if (bind$$1) {
            res += (attrs2 ? "" : ",null") + "," + bind$$1;
          }
          return res + ")";
        }
        function genComponent(componentName, el, state) {
          var children = el.inlineTemplate ? null : genChildren(el, state, true);
          return "_c(" + componentName + "," + genData$2(el, state) + (children ? "," + children : "") + ")";
        }
        function genProps(props2) {
          var staticProps = "";
          var dynamicProps = "";
          for (var i = 0; i < props2.length; i++) {
            var prop = props2[i];
            var value = transformSpecialNewlines(prop.value);
            if (prop.dynamic) {
              dynamicProps += prop.name + "," + value + ",";
            } else {
              staticProps += '"' + prop.name + '":' + value + ",";
            }
          }
          staticProps = "{" + staticProps.slice(0, -1) + "}";
          if (dynamicProps) {
            return "_d(" + staticProps + ",[" + dynamicProps.slice(0, -1) + "])";
          } else {
            return staticProps;
          }
        }
        function transformSpecialNewlines(text2) {
          return text2.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
        }
        var prohibitedKeywordRE = new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b");
        var unaryOperatorsRE = new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");
        var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
        function detectErrors(ast, warn2) {
          if (ast) {
            checkNode(ast, warn2);
          }
        }
        function checkNode(node, warn2) {
          if (node.type === 1) {
            for (var name in node.attrsMap) {
              if (dirRE.test(name)) {
                var value = node.attrsMap[name];
                if (value) {
                  var range2 = node.rawAttrsMap[name];
                  if (name === "v-for") {
                    checkFor(node, 'v-for="' + value + '"', warn2, range2);
                  } else if (name === "v-slot" || name[0] === "#") {
                    checkFunctionParameterExpression(value, name + '="' + value + '"', warn2, range2);
                  } else if (onRE.test(name)) {
                    checkEvent(value, name + '="' + value + '"', warn2, range2);
                  } else {
                    checkExpression(value, name + '="' + value + '"', warn2, range2);
                  }
                }
              }
            }
            if (node.children) {
              for (var i = 0; i < node.children.length; i++) {
                checkNode(node.children[i], warn2);
              }
            }
          } else if (node.type === 2) {
            checkExpression(node.expression, node.text, warn2, node);
          }
        }
        function checkEvent(exp, text2, warn2, range2) {
          var stripped = exp.replace(stripStringRE, "");
          var keywordMatch = stripped.match(unaryOperatorsRE);
          if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== "$") {
            warn2('avoid using JavaScript unary operator as property name: "' + keywordMatch[0] + '" in expression ' + text2.trim(), range2);
          }
          checkExpression(exp, text2, warn2, range2);
        }
        function checkFor(node, text2, warn2, range2) {
          checkExpression(node.for || "", text2, warn2, range2);
          checkIdentifier(node.alias, "v-for alias", text2, warn2, range2);
          checkIdentifier(node.iterator1, "v-for iterator", text2, warn2, range2);
          checkIdentifier(node.iterator2, "v-for iterator", text2, warn2, range2);
        }
        function checkIdentifier(ident, type, text2, warn2, range2) {
          if (typeof ident === "string") {
            try {
              new Function("var " + ident + "=_");
            } catch (e) {
              warn2("invalid " + type + ' "' + ident + '" in expression: ' + text2.trim(), range2);
            }
          }
        }
        function checkExpression(exp, text2, warn2, range2) {
          try {
            new Function("return " + exp);
          } catch (e) {
            var keywordMatch = exp.replace(stripStringRE, "").match(prohibitedKeywordRE);
            if (keywordMatch) {
              warn2('avoid using JavaScript keyword as property name: "' + keywordMatch[0] + '"\n  Raw expression: ' + text2.trim(), range2);
            } else {
              warn2("invalid expression: " + e.message + " in\n\n    " + exp + "\n\n  Raw expression: " + text2.trim() + "\n", range2);
            }
          }
        }
        function checkFunctionParameterExpression(exp, text2, warn2, range2) {
          try {
            new Function(exp, "");
          } catch (e) {
            warn2("invalid function parameter expression: " + e.message + " in\n\n    " + exp + "\n\n  Raw expression: " + text2.trim() + "\n", range2);
          }
        }
        var range = 2;
        function generateCodeFrame(source, start, end) {
          if (start === void 0)
            start = 0;
          if (end === void 0)
            end = source.length;
          var lines = source.split(/\r?\n/);
          var count = 0;
          var res = [];
          for (var i = 0; i < lines.length; i++) {
            count += lines[i].length + 1;
            if (count >= start) {
              for (var j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length) {
                  continue;
                }
                res.push("" + (j + 1) + repeat$1(" ", 3 - String(j + 1).length) + "|  " + lines[j]);
                var lineLength = lines[j].length;
                if (j === i) {
                  var pad = start - (count - lineLength) + 1;
                  var length = end > count ? lineLength - pad : end - start;
                  res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
                } else if (j > i) {
                  if (end > count) {
                    var length$1 = Math.min(end - count, lineLength);
                    res.push("   |  " + repeat$1("^", length$1));
                  }
                  count += lineLength + 1;
                }
              }
              break;
            }
          }
          return res.join("\n");
        }
        function repeat$1(str2, n) {
          var result = "";
          if (n > 0) {
            while (true) {
              if (n & 1) {
                result += str2;
              }
              n >>>= 1;
              if (n <= 0) {
                break;
              }
              str2 += str2;
            }
          }
          return result;
        }
        function createFunction(code, errors) {
          try {
            return new Function(code);
          } catch (err) {
            errors.push({err, code});
            return noop;
          }
        }
        function createCompileToFunctionFn(compile2) {
          var cache = Object.create(null);
          return function compileToFunctions2(template, options, vm) {
            options = extend({}, options);
            var warn$$1 = options.warn || warn;
            delete options.warn;
            {
              try {
                new Function("return 1");
              } catch (e) {
                if (e.toString().match(/unsafe-eval|CSP/)) {
                  warn$$1("It seems you are using the standalone build of Vue.js in an environment with Content Security Policy that prohibits unsafe-eval. The template compiler cannot work in this environment. Consider relaxing the policy to allow unsafe-eval or pre-compiling your templates into render functions.");
                }
              }
            }
            var key = options.delimiters ? String(options.delimiters) + template : template;
            if (cache[key]) {
              return cache[key];
            }
            var compiled = compile2(template, options);
            {
              if (compiled.errors && compiled.errors.length) {
                if (options.outputSourceRange) {
                  compiled.errors.forEach(function(e) {
                    warn$$1("Error compiling template:\n\n" + e.msg + "\n\n" + generateCodeFrame(template, e.start, e.end), vm);
                  });
                } else {
                  warn$$1("Error compiling template:\n\n" + template + "\n\n" + compiled.errors.map(function(e) {
                    return "- " + e;
                  }).join("\n") + "\n", vm);
                }
              }
              if (compiled.tips && compiled.tips.length) {
                if (options.outputSourceRange) {
                  compiled.tips.forEach(function(e) {
                    return tip(e.msg, vm);
                  });
                } else {
                  compiled.tips.forEach(function(msg) {
                    return tip(msg, vm);
                  });
                }
              }
            }
            var res = {};
            var fnGenErrors = [];
            res.render = createFunction(compiled.render, fnGenErrors);
            res.staticRenderFns = compiled.staticRenderFns.map(function(code) {
              return createFunction(code, fnGenErrors);
            });
            {
              if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
                warn$$1("Failed to generate render function:\n\n" + fnGenErrors.map(function(ref2) {
                  var err = ref2.err;
                  var code = ref2.code;
                  return err.toString() + " in\n\n" + code + "\n";
                }).join("\n"), vm);
              }
            }
            return cache[key] = res;
          };
        }
        function createCompilerCreator(baseCompile) {
          return function createCompiler2(baseOptions2) {
            function compile2(template, options) {
              var finalOptions = Object.create(baseOptions2);
              var errors = [];
              var tips = [];
              var warn2 = function(msg, range2, tip2) {
                (tip2 ? tips : errors).push(msg);
              };
              if (options) {
                if (options.outputSourceRange) {
                  var leadingSpaceLength = template.match(/^\s*/)[0].length;
                  warn2 = function(msg, range2, tip2) {
                    var data = {msg};
                    if (range2) {
                      if (range2.start != null) {
                        data.start = range2.start + leadingSpaceLength;
                      }
                      if (range2.end != null) {
                        data.end = range2.end + leadingSpaceLength;
                      }
                    }
                    (tip2 ? tips : errors).push(data);
                  };
                }
                if (options.modules) {
                  finalOptions.modules = (baseOptions2.modules || []).concat(options.modules);
                }
                if (options.directives) {
                  finalOptions.directives = extend(Object.create(baseOptions2.directives || null), options.directives);
                }
                for (var key in options) {
                  if (key !== "modules" && key !== "directives") {
                    finalOptions[key] = options[key];
                  }
                }
              }
              finalOptions.warn = warn2;
              var compiled = baseCompile(template.trim(), finalOptions);
              {
                detectErrors(compiled.ast, warn2);
              }
              compiled.errors = errors;
              compiled.tips = tips;
              return compiled;
            }
            return {
              compile: compile2,
              compileToFunctions: createCompileToFunctionFn(compile2)
            };
          };
        }
        var createCompiler = createCompilerCreator(function baseCompile(template, options) {
          var ast = parse(template.trim(), options);
          if (options.optimize !== false) {
            optimize(ast, options);
          }
          var code = generate(ast, options);
          return {
            ast,
            render: code.render,
            staticRenderFns: code.staticRenderFns
          };
        });
        var ref$1 = createCompiler(baseOptions);
        var compile = ref$1.compile;
        var compileToFunctions = ref$1.compileToFunctions;
        var div;
        function getShouldDecode(href) {
          div = div || document.createElement("div");
          div.innerHTML = href ? '<a href="\n"/>' : '<div a="\n"/>';
          return div.innerHTML.indexOf("&#10;") > 0;
        }
        var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
        var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;
        var idToTemplate = cached(function(id) {
          var el = query(id);
          return el && el.innerHTML;
        });
        var mount = Vue3.prototype.$mount;
        Vue3.prototype.$mount = function(el, hydrating) {
          el = el && query(el);
          if (el === document.body || el === document.documentElement) {
            warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
            return this;
          }
          var options = this.$options;
          if (!options.render) {
            var template = options.template;
            if (template) {
              if (typeof template === "string") {
                if (template.charAt(0) === "#") {
                  template = idToTemplate(template);
                  if (!template) {
                    warn("Template element not found or is empty: " + options.template, this);
                  }
                }
              } else if (template.nodeType) {
                template = template.innerHTML;
              } else {
                {
                  warn("invalid template option:" + template, this);
                }
                return this;
              }
            } else if (el) {
              template = getOuterHTML(el);
            }
            if (template) {
              if (config.performance && mark) {
                mark("compile");
              }
              var ref2 = compileToFunctions(template, {
                outputSourceRange: true,
                shouldDecodeNewlines,
                shouldDecodeNewlinesForHref,
                delimiters: options.delimiters,
                comments: options.comments
              }, this);
              var render = ref2.render;
              var staticRenderFns = ref2.staticRenderFns;
              options.render = render;
              options.staticRenderFns = staticRenderFns;
              if (config.performance && mark) {
                mark("compile end");
                measure("vue " + this._name + " compile", "compile", "compile end");
              }
            }
          }
          return mount.call(this, el, hydrating);
        };
        function getOuterHTML(el) {
          if (el.outerHTML) {
            return el.outerHTML;
          } else {
            var container = document.createElement("div");
            container.appendChild(el.cloneNode(true));
            return container.innerHTML;
          }
        }
        Vue3.compile = compileToFunctions;
        return Vue3;
      });
    }
  });

  // ../erpnext/erpnext/public/js/hub/marketplace.bundle.js
  var import_vue2 = __toModule(require_vue());

  // ../erpnext/erpnext/public/js/hub/vue-plugins.js
  var import_vue = __toModule(require_vue());

  // ../erpnext/erpnext/public/js/hub/components/ItemCard.vue
  var __vue_script__ = {
    name: "item-card",
    props: ["item", "item_id_fieldname", "is_local", "on_click", "allow_clear", "seen"],
    computed: {
      title() {
        const item_name = this.item.item_name || this.item.name;
        return strip_html(item_name);
      },
      subtitle() {
        const dot_spacer = '<span aria-hidden="true"> \xB7 </span>';
        if (this.is_local) {
          return comment_when(this.item.creation);
        } else {
          let subtitle_items = [comment_when(this.item.creation)];
          const rating = this.item.average_rating;
          if (rating > 0) {
            subtitle_items.push(rating + `<i class='fa fa-fw fa-star-o'></i>`);
          }
          subtitle_items.push(this.item.company);
          return subtitle_items.join(dot_spacer);
        }
      },
      item_id() {
        return this.item[this.item_id_fieldname];
      }
    }
  };
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.seen ? _c("div", {staticClass: "col-md-3 col-sm-4 col-xs-6 hub-card-container"}, [
      _c("div", {
        staticClass: "hub-card",
        on: {
          click: function($event) {
            return _vm.on_click(_vm.item_id);
          }
        }
      }, [
        _c("div", {staticClass: "hub-card-header flex justify-between"}, [
          _c("div", {staticClass: "ellipsis", style: {width: "85%"}}, [
            _c("div", {staticClass: "hub-card-title ellipsis bold"}, [_vm._v(_vm._s(_vm.title))]),
            _vm._v(" "),
            _c("div", {
              staticClass: "hub-card-subtitle ellipsis text-muted",
              domProps: {innerHTML: _vm._s(_vm.subtitle)}
            })
          ]),
          _vm._v(" "),
          _vm.allow_clear ? _c("i", {
            staticClass: "octicon octicon-x text-extra-muted",
            on: {
              click: function($event) {
                $event.stopPropagation();
                return _vm.$emit("remove-item", _vm.item_id);
              }
            }
          }) : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", {staticClass: "hub-card-body"}, [
          _c("base-image", {
            staticClass: "hub-card-image",
            attrs: {src: _vm.item.image, alt: _vm.title}
          }),
          _vm._v(" "),
          _c("div", {staticClass: "hub-card-overlay"}, [
            _vm.is_local ? _c("div", {staticClass: "hub-card-overlay-body"}, [
              _vm._m(0)
            ]) : _vm._e()
          ])
        ], 1)
      ])
    ]) : _vm._e();
  };
  var __vue_staticRenderFns__ = [
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", {staticClass: "hub-card-overlay-button"}, [
        _c("button", {staticClass: "btn btn-default zoom-view"}, [
          _c("i", {staticClass: "octicon octicon-pencil text-muted"})
        ])
      ]);
    }
  ];
  __vue_render__._withStripped = true;
  var __vue_inject_styles__ = function(inject) {
    if (!inject)
      return;
    inject("data-v-4c2afeef_0", {source: "/* palette colors*/\n.hub-card[data-v-4c2afeef] {\n  margin-bottom: 25px;\n  position: relative;\n  border: 1px solid #ECEEF0;\n  border-radius: 4px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.hub-card:hover .hub-card-overlay[data-v-4c2afeef] {\n  display: block;\n}\n.hub-card .octicon-x[data-v-4c2afeef] {\n  display: block;\n  font-size: 20px;\n  margin-left: 10px;\n  cursor: pointer;\n}\n.hub-card.closable .octicon-x[data-v-4c2afeef] {\n  display: block;\n}\n.hub-card.is-local.active .hub-card-header[data-v-4c2afeef] {\n  background-color: #f4ffe5;\n}\n.hub-card-header[data-v-4c2afeef] {\n  position: relative;\n  padding: 12px 15px;\n  height: 60px;\n  border-bottom: 1px solid #ECEEF0;\n}\n.hub-card-body[data-v-4c2afeef] {\n  position: relative;\n  height: 200px;\n}\n.hub-card-overlay[data-v-4c2afeef] {\n  display: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.hub-card-overlay-body[data-v-4c2afeef] {\n  position: relative;\n  height: 100%;\n}\n.hub-card-overlay-button[data-v-4c2afeef] {\n  position: absolute;\n  right: 15px;\n  bottom: 15px;\n}\n.hub-card-image[data-v-4c2afeef] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n", map: {"version": 3, "sources": ["ItemCard.vue"], "names": [], "mappings": "AAAA,kBAAkB;AAClB;EACE,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,cAAc;AAChB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,gCAAgC;AAClC;AACA;EACE,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,MAAM;EACN,WAAW;EACX,YAAY;EACZ,qCAAqC;AACvC;AACA;EACE,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB", "file": "ItemCard.vue", "sourcesContent": ["/* palette colors*/\n.hub-card {\n  margin-bottom: 25px;\n  position: relative;\n  border: 1px solid #ECEEF0;\n  border-radius: 4px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.hub-card:hover .hub-card-overlay {\n  display: block;\n}\n.hub-card .octicon-x {\n  display: block;\n  font-size: 20px;\n  margin-left: 10px;\n  cursor: pointer;\n}\n.hub-card.closable .octicon-x {\n  display: block;\n}\n.hub-card.is-local.active .hub-card-header {\n  background-color: #f4ffe5;\n}\n.hub-card-header {\n  position: relative;\n  padding: 12px 15px;\n  height: 60px;\n  border-bottom: 1px solid #ECEEF0;\n}\n.hub-card-body {\n  position: relative;\n  height: 200px;\n}\n.hub-card-overlay {\n  display: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.hub-card-overlay-body {\n  position: relative;\n  height: 100%;\n}\n.hub-card-overlay-button {\n  position: absolute;\n  right: 15px;\n  bottom: 15px;\n}\n.hub-card-image {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n"]}, media: void 0});
  };
  var __vue_scope_id__ = "data-v-4c2afeef";
  var __vue_module_identifier__ = void 0;
  var __vue_is_functional_template__ = false;
  function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div v-if="seen" class="col-md-3 col-sm-4 col-xs-6 hub-card-container">
		<div class="hub-card"
			@click="on_click(item_id)"
		>
			<div class="hub-card-header flex justify-between">
				<div class="ellipsis" :style="{ width: '85%' }">
					<div class="hub-card-title ellipsis bold">{{ title }}</div>
					<div class="hub-card-subtitle ellipsis text-muted" v-html='subtitle'></div>
				</div>
				<i v-if="allow_clear"
					class="octicon octicon-x text-extra-muted"
					@click.stop="$emit('remove-item', item_id)"
				>
				</i>
			</div>
			<div class="hub-card-body">
				<base-image class="hub-card-image" :src="item.image" :alt="title" />
				<div class="hub-card-overlay">
					<div v-if="is_local" class="hub-card-overlay-body">
						<div class="hub-card-overlay-button">
							<button class="btn btn-default zoom-view">
								<i class="octicon octicon-pencil text-muted"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'item-card',
	props: ['item', 'item_id_fieldname', 'is_local', 'on_click', 'allow_clear', 'seen'],
	computed: {
		title() {
			const item_name = this.item.item_name || this.item.name;
			return strip_html(item_name);
		},
		subtitle() {
			const dot_spacer = '<span aria-hidden="true"> \xB7 </span>';
			if(this.is_local){
				return comment_when(this.item.creation);
			} else {
				let subtitle_items = [comment_when(this.item.creation)];
				const rating = this.item.average_rating;

				if (rating > 0) {
					subtitle_items.push(rating + \`<i class='fa fa-fw fa-star-o'></i>\`)
				}

				subtitle_items.push(this.item.company);

				return subtitle_items.join(dot_spacer);
			}
		},
		item_id() {
			return this.item[this.item_id_fieldname];
		}
	}
}
</script>

<style lang="less" scoped>
	@import "../../../../../../frappe/frappe/public/less/variables.less";

	.hub-card {
		margin-bottom: 25px;
		position: relative;
		border: 1px solid @border-color;
		border-radius: 4px;
		overflow: hidden;
		cursor: pointer;

		&:hover .hub-card-overlay {
			display: block;
		}

		.octicon-x {
			display: block;
			font-size: 20px;
			margin-left: 10px;
			cursor: pointer;
		}
	}

	.hub-card.closable {
		.octicon-x {
			display: block;
		}
	}

	.hub-card.is-local {
		&.active {
			.hub-card-header {
				background-color: #f4ffe5;
			}
		}
	}

	.hub-card-header {
		position: relative;
		padding: 12px 15px;
		height: 60px;
		border-bottom: 1px solid @border-color;
	}

	.hub-card-body {
		position: relative;
		height: 200px;
	}

	.hub-card-overlay {
		display: none;
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.05);
	}

	.hub-card-overlay-body {
		position: relative;
		height: 100%;
	}

	.hub-card-overlay-button {
		position: absolute;
		right: 15px;
		bottom: 15px;
	}

	.hub-card-image {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

</style>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__() {
    const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = {ids: [], parts: [], element: void 0});
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__ = /* @__PURE__ */ __vue_normalize__({render: __vue_render__, staticRenderFns: __vue_staticRenderFns__}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, __vue_create_injector__, void 0, void 0);
  var ItemCard_default = __vue_component__;

  // ../erpnext/erpnext/public/js/hub/components/EmptyState.vue
  var __vue_script__2 = {
    name: "empty-state",
    props: {
      message: String,
      bordered: Boolean,
      height: Number,
      action: Object,
      centered: {
        type: Boolean,
        default: true
      }
    }
  };
  var __vue_render__2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
      staticClass: "empty-state flex flex-column",
      class: {
        bordered: _vm.bordered,
        "align-center": _vm.centered,
        "justify-center": _vm.centered
      },
      style: {height: _vm.height + "px"}
    }, [
      _c("p", {
        staticClass: "text-muted",
        domProps: {innerHTML: _vm._s(_vm.message)}
      }),
      _vm._v(" "),
      _vm.action ? _c("p", [
        _c("button", {
          staticClass: "btn btn-default btn-xs",
          on: {click: _vm.action.on_click}
        }, [_vm._v("\n			" + _vm._s(_vm.action.label) + "\n		")])
      ]) : _vm._e()
    ]);
  };
  var __vue_staticRenderFns__2 = [];
  __vue_render__2._withStripped = true;
  var __vue_inject_styles__2 = function(inject) {
    if (!inject)
      return;
    inject("data-v-0ec5cbde_0", {source: "/* palette colors*/\n.empty-state {\n  height: 500px;\n}\n.empty-state.bordered {\n  border-radius: 4px;\n  border: 1px solid #ECEEF0;\n  border-style: dashed;\n  margin: 0 15px;\n}\n", map: {"version": 3, "sources": ["EmptyState.vue"], "names": [], "mappings": "AAAA,kBAAkB;AAClB;EACE,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,oBAAoB;EACpB,cAAc;AAChB", "file": "EmptyState.vue", "sourcesContent": ["/* palette colors*/\n.empty-state {\n  height: 500px;\n}\n.empty-state.bordered {\n  border-radius: 4px;\n  border: 1px solid #ECEEF0;\n  border-style: dashed;\n  margin: 0 15px;\n}\n"]}, media: void 0});
  };
  var __vue_scope_id__2 = void 0;
  var __vue_module_identifier__2 = void 0;
  var __vue_is_functional_template__2 = false;
  function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div class="empty-state flex flex-column"
		:class="{ 'bordered': bordered, 'align-center': centered, 'justify-center': centered }"
		:style="{ height: height + 'px' }"
	>
		<p class="text-muted" v-html="message" ></p>
		<p v-if="action">
			<button class="btn btn-default btn-xs"
				@click="action.on_click"
			>
				{{ action.label }}
			</button>
		</p>
	</div>
</template>

<script>

export default {
	name: 'empty-state',
	props: {
		message: String,
		bordered: Boolean,
		height: Number,
		action: Object,
		centered: {
			type: Boolean,
			default: true
		}
	}
}
</script>

<style lang="less">
	@import "../../../../../../frappe/frappe/public/less/variables.less";

	.empty-state {
		height: 500px;
	}

	.empty-state.bordered {
		border-radius: 4px;
		border: 1px solid @border-color;
		border-style: dashed;

		// bad, due to item card column layout, that is inner 15px margin
		margin: 0 15px;
	}

</style>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__2() {
    const styles = __vue_create_injector__2.styles || (__vue_create_injector__2.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = {ids: [], parts: [], element: void 0});
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__2 = /* @__PURE__ */ __vue_normalize__2({render: __vue_render__2, staticRenderFns: __vue_staticRenderFns__2}, __vue_inject_styles__2, __vue_script__2, __vue_scope_id__2, __vue_is_functional_template__2, __vue_module_identifier__2, false, __vue_create_injector__2, void 0, void 0);
  var EmptyState_default = __vue_component__2;

  // ../erpnext/erpnext/public/js/hub/components/ItemCardsContainer.vue
  var __vue_script__3 = {
    name: "item-cards-container",
    props: {
      container_name: String,
      items: Array,
      item_id_fieldname: String,
      is_local: Boolean,
      on_click: Function,
      editable: Boolean,
      empty_state_message: String,
      empty_state_action: Object,
      empty_state_height: Number,
      empty_state_bordered: Boolean
    },
    components: {
      ItemCard: ItemCard_default,
      EmptyState: EmptyState_default
    },
    watch: {
      items() {
        frappe.dom.handle_broken_images($(this.$el));
      }
    }
  };
  var __vue_render__3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {staticClass: "item-cards-container"}, [
      _vm.items.length === 0 ? _c("empty-state", {
        attrs: {
          message: _vm.empty_state_message,
          action: _vm.empty_state_action,
          bordered: true,
          height: _vm.empty_state_height
        }
      }) : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.items, function(item) {
        return _c("item-card", {
          key: _vm.container_name + "_" + item[_vm.item_id_fieldname],
          attrs: {
            item,
            item_id_fieldname: _vm.item_id_fieldname,
            is_local: _vm.is_local,
            on_click: _vm.on_click,
            allow_clear: _vm.editable,
            seen: item.hasOwnProperty("seen") ? item.seen : true
          },
          on: {
            "remove-item": function($event) {
              return _vm.$emit("remove-item", item[_vm.item_id_fieldname]);
            }
          }
        });
      })
    ], 2);
  };
  var __vue_staticRenderFns__3 = [];
  __vue_render__3._withStripped = true;
  var __vue_inject_styles__3 = function(inject) {
    if (!inject)
      return;
    inject("data-v-234fa926_0", {source: "\n.item-cards-container[data-v-234fa926] {\n	margin: 0 -15px;\n	overflow: overlay;\n}\n", map: {"version": 3, "sources": ["../erpnext/erpnext/public/js/hub/components/ItemCardsContainer.vue"], "names": [], "mappings": ";AAyDA;CACA,eAAA;CACA,iBAAA;AACA", "file": "ItemCardsContainer.vue", "sourcesContent": [`<template>
	<div class="item-cards-container">
		<empty-state
			v-if="items.length === 0"
			:message="empty_state_message"
			:action="empty_state_action"
			:bordered="true"
			:height="empty_state_height"
		/>
		<item-card
			v-for="item in items"
			:key="container_name + '_' +item[item_id_fieldname]"
			:item="item"
			:item_id_fieldname="item_id_fieldname"
			:is_local="is_local"
			:on_click="on_click"
			:allow_clear="editable"
			:seen="item.hasOwnProperty('seen') ? item.seen : true"
			@remove-item="$emit('remove-item', item[item_id_fieldname])"
		>
		</item-card>
	</div>
</template>

<script>
import ItemCard from './ItemCard.vue';
import EmptyState from './EmptyState.vue';

export default {
	name: 'item-cards-container',
	props: {
		container_name: String,
		items: Array,
		item_id_fieldname: String,
		is_local: Boolean,
		on_click: Function,
		editable: Boolean,

		empty_state_message: String,
		empty_state_action: Object,
		empty_state_height: Number,
		empty_state_bordered: Boolean
	},
	components: {
		ItemCard,
		EmptyState
	},
	watch: {
		items() {
			// TODO: handling doesn't work
			frappe.dom.handle_broken_images($(this.$el));
		}
	}
}
</script>

<style scoped>
	.item-cards-container {
		margin: 0 -15px;
		overflow: overlay;
	}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__3 = "data-v-234fa926";
  var __vue_module_identifier__3 = void 0;
  var __vue_is_functional_template__3 = false;
  function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div class="item-cards-container">
		<empty-state
			v-if="items.length === 0"
			:message="empty_state_message"
			:action="empty_state_action"
			:bordered="true"
			:height="empty_state_height"
		/>
		<item-card
			v-for="item in items"
			:key="container_name + '_' +item[item_id_fieldname]"
			:item="item"
			:item_id_fieldname="item_id_fieldname"
			:is_local="is_local"
			:on_click="on_click"
			:allow_clear="editable"
			:seen="item.hasOwnProperty('seen') ? item.seen : true"
			@remove-item="$emit('remove-item', item[item_id_fieldname])"
		>
		</item-card>
	</div>
</template>

<script>
import ItemCard from './ItemCard.vue';
import EmptyState from './EmptyState.vue';

export default {
	name: 'item-cards-container',
	props: {
		container_name: String,
		items: Array,
		item_id_fieldname: String,
		is_local: Boolean,
		on_click: Function,
		editable: Boolean,

		empty_state_message: String,
		empty_state_action: Object,
		empty_state_height: Number,
		empty_state_bordered: Boolean
	},
	components: {
		ItemCard,
		EmptyState
	},
	watch: {
		items() {
			// TODO: handling doesn't work
			frappe.dom.handle_broken_images($(this.$el));
		}
	}
}
</script>

<style scoped>
	.item-cards-container {
		margin: 0 -15px;
		overflow: overlay;
	}
</style>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__3() {
    const styles = __vue_create_injector__3.styles || (__vue_create_injector__3.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = {ids: [], parts: [], element: void 0});
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__3 = /* @__PURE__ */ __vue_normalize__3({render: __vue_render__3, staticRenderFns: __vue_staticRenderFns__3}, __vue_inject_styles__3, __vue_script__3, __vue_scope_id__3, __vue_is_functional_template__3, __vue_module_identifier__3, false, __vue_create_injector__3, void 0, void 0);
  var ItemCardsContainer_default = __vue_component__3;

  // ../erpnext/erpnext/public/js/hub/components/SectionHeader.vue
  var __vue_script__4 = {};
  var __vue_render__4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {staticClass: "hub-items-header level"}, [_vm._t("default")], 2);
  };
  var __vue_staticRenderFns__4 = [];
  __vue_render__4._withStripped = true;
  var __vue_inject_styles__4 = void 0;
  var __vue_scope_id__4 = void 0;
  var __vue_module_identifier__4 = void 0;
  var __vue_is_functional_template__4 = false;
  function __vue_normalize__4(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n    <div class="hub-items-header level"><slot></slot></div>\n</template>\n';
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (false) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  var __vue_component__4 = /* @__PURE__ */ __vue_normalize__4({render: __vue_render__4, staticRenderFns: __vue_staticRenderFns__4}, __vue_inject_styles__4, __vue_script__4, __vue_scope_id__4, __vue_is_functional_template__4, __vue_module_identifier__4, false, void 0, void 0, void 0);
  var SectionHeader_default = __vue_component__4;

  // ../erpnext/erpnext/public/js/hub/components/SearchInput.vue
  var __vue_script__5 = {
    props: {
      placeholder: String,
      value: String,
      on_search: Function
    },
    methods: {
      on_input(event) {
        this.$emit("input", event.target.value);
        this.on_search();
      }
    }
  };
  var __vue_render__5 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {staticClass: "hub-search-container"}, [
      _c("input", {
        staticClass: "form-control",
        attrs: {type: "text", placeholder: _vm.placeholder},
        domProps: {value: _vm.value},
        on: {
          keydown: function($event) {
            if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
              return null;
            }
            return _vm.on_input($event);
          }
        }
      })
    ]);
  };
  var __vue_staticRenderFns__5 = [];
  __vue_render__5._withStripped = true;
  var __vue_inject_styles__5 = void 0;
  var __vue_scope_id__5 = void 0;
  var __vue_module_identifier__5 = void 0;
  var __vue_is_functional_template__5 = false;
  function __vue_normalize__5(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <div class="hub-search-container">
	<input
		type="text"
		class="form-control"
		:placeholder="placeholder"
		:value="value"
		@keydown.enter="on_input">
  </div>
</template>

<script>
export default {
	props: {
		placeholder: String,
		value: String,
		on_search: Function
	},
	methods: {
		on_input(event) {
			this.$emit('input', event.target.value);
			this.on_search();
		}
	}
};
</script>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (false) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  var __vue_component__5 = /* @__PURE__ */ __vue_normalize__5({render: __vue_render__5, staticRenderFns: __vue_staticRenderFns__5}, __vue_inject_styles__5, __vue_script__5, __vue_scope_id__5, __vue_is_functional_template__5, __vue_module_identifier__5, false, void 0, void 0, void 0);
  var SearchInput_default = __vue_component__5;

  // ../erpnext/erpnext/public/js/hub/components/DetailView.vue
  var __vue_script__6 = {
    name: "detail-view",
    props: ["title", "image", "sections", "show_skeleton", "menu_items"],
    data() {
      return {
        back_to_home_text: __("Back to Home")
      };
    },
    computed: {}
  };
  var __vue_render__6 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {staticClass: "hub-item-container"}, [
      _c("div", {staticClass: "row visible-xs"}, [
        _c("div", {staticClass: "col-xs-12 margin-bottom"}, [
          _c("button", {
            staticClass: "btn btn-xs btn-default",
            attrs: {"data-route": "marketplace/home"}
          }, [_vm._v(_vm._s(_vm.back_to_home_text))])
        ])
      ]),
      _vm._v(" "),
      _vm.show_skeleton ? _c("div", {staticClass: "row margin-bottom"}, [
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1)
      ]) : _c("div", [
        _c("div", {staticClass: "row margin-bottom"}, [
          _c("div", {staticClass: "col-md-3"}, [
            _c("div", {staticClass: "hub-item-image"}, [
              _c("base-image", {
                attrs: {src: _vm.image, alt: _vm.title}
              })
            ], 1)
          ]),
          _vm._v(" "),
          _c("div", {
            staticClass: "col-md-8",
            staticStyle: {"padding-left": "30px"}
          }, [
            _c("h2", [_vm._v(_vm._s(_vm.title))]),
            _vm._v(" "),
            _c("div", {staticClass: "text-muted"}, [_vm._t("detail-header-item")], 2)
          ]),
          _vm._v(" "),
          _vm.menu_items && _vm.menu_items.length ? _c("div", {staticClass: "col-md-1"}, [
            _c("div", {staticClass: "dropdown pull-right hub-item-dropdown"}, [
              _vm._m(2),
              _vm._v(" "),
              _c("ul", {
                staticClass: "dropdown-menu dropdown-right",
                attrs: {role: "menu"}
              }, _vm._l(_vm.menu_items, function(menu_item) {
                return menu_item.condition ? _c("li", {key: menu_item.label}, [
                  _c("a", {on: {click: menu_item.action}}, [
                    _vm._v(_vm._s(menu_item.label))
                  ])
                ]) : _vm._e();
              }), 0)
            ])
          ]) : _vm._e()
        ]),
        _vm._v(" "),
        _vm._l(_vm.sections, function(section) {
          return _c("div", {
            key: section.title,
            staticClass: "row hub-item-description margin-bottom"
          }, [
            _c("h6", {staticClass: "col-md-12 margin-top"}, [
              _c("b", {staticClass: "text-muted"}, [
                _vm._v(_vm._s(section.title))
              ])
            ]),
            _vm._v(" "),
            _c("p", {
              staticClass: "col-md-12",
              domProps: {innerHTML: _vm._s(section.content)}
            })
          ]);
        })
      ], 2)
    ]);
  };
  var __vue_staticRenderFns__6 = [
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", {staticClass: "col-md-3"}, [
        _c("div", {staticClass: "hub-item-skeleton-image"})
      ]);
    },
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", {staticClass: "col-md-6"}, [
        _c("h2", {staticClass: "hub-skeleton", staticStyle: {width: "75%"}}, [
          _vm._v("Name")
        ]),
        _vm._v(" "),
        _c("div", {staticClass: "text-muted"}, [
          _c("p", {staticClass: "hub-skeleton", staticStyle: {width: "35%"}}, [_vm._v("Details")]),
          _vm._v(" "),
          _c("p", {staticClass: "hub-skeleton", staticStyle: {width: "50%"}}, [_vm._v("Ratings")])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", {staticClass: "hub-item-description"}, [
          _c("p", {staticClass: "hub-skeleton"}, [_vm._v("Desc")]),
          _vm._v(" "),
          _c("p", {staticClass: "hub-skeleton", staticStyle: {width: "85%"}}, [_vm._v("Desc")])
        ])
      ]);
    },
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("a", {
        staticClass: "dropdown-toggle btn btn-xs btn-default",
        attrs: {"data-toggle": "dropdown"}
      }, [_c("span", {staticClass: "caret"})]);
    }
  ];
  __vue_render__6._withStripped = true;
  var __vue_inject_styles__6 = void 0;
  var __vue_scope_id__6 = "data-v-68d98cae";
  var __vue_module_identifier__6 = void 0;
  var __vue_is_functional_template__6 = false;
  function __vue_normalize__6(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div class="hub-item-container">
		<div class="row visible-xs">
			<div class="col-xs-12 margin-bottom">
				<button class="btn btn-xs btn-default" data-route="marketplace/home">{{ back_to_home_text }}</button>
			</div>
		</div>

		<div v-if="show_skeleton" class="row margin-bottom">
			<div class="col-md-3">
				<div class="hub-item-skeleton-image"></div>
			</div>
			<div class="col-md-6">
				<h2 class="hub-skeleton" style="width: 75%;">Name</h2>
				<div class="text-muted">
					<p class="hub-skeleton" style="width: 35%;">Details</p>
					<p class="hub-skeleton" style="width: 50%;">Ratings</p>
				</div>
				<hr>
				<div class="hub-item-description">
					<p class="hub-skeleton">Desc</p>
					<p class="hub-skeleton" style="width: 85%;">Desc</p>
				</div>
			</div>
		</div>

		<div v-else>
			<div class="row margin-bottom">
				<div class="col-md-3">
					<div class="hub-item-image">
						<base-image :src="image" :alt="title" />
					</div>
				</div>
				<div class="col-md-8" style='padding-left: 30px;'>
					<h2>{{ title }}</h2>
					<div class="text-muted">
						<slot name="detail-header-item"></slot>
					</div>
				</div>

				<div v-if="menu_items && menu_items.length" class="col-md-1">
					<div class="dropdown pull-right hub-item-dropdown">
						<a class="dropdown-toggle btn btn-xs btn-default" data-toggle="dropdown">
							<span class="caret"></span>
						</a>
						<ul class="dropdown-menu dropdown-right" role="menu">
							<li v-for="menu_item in menu_items"
								v-if="menu_item.condition"
								:key="menu_item.label"
							>
								<a @click="menu_item.action">{{ menu_item.label }}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div v-for="section in sections" class="row hub-item-description margin-bottom"
				:key="section.title"
			>
				<h6 class="col-md-12 margin-top">
					<b class="text-muted">{{ section.title }}</b>
				</h6>
				<p class="col-md-12" v-html="section.content">
				</p>
			</div>
		</div>

	</div>
</template>

<script>

export default {
	name: 'detail-view',
	props: ['title', 'image', 'sections', 'show_skeleton', 'menu_items'],
	data() {
		return {
			back_to_home_text: __('Back to Home')
		}
	},
	computed: {}
}
</script>

<style lang="less" scoped>
</style>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (false) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  var __vue_component__6 = /* @__PURE__ */ __vue_normalize__6({render: __vue_render__6, staticRenderFns: __vue_staticRenderFns__6}, __vue_inject_styles__6, __vue_script__6, __vue_scope_id__6, __vue_is_functional_template__6, __vue_module_identifier__6, false, void 0, void 0, void 0);
  var DetailView_default = __vue_component__6;

  // ../erpnext/erpnext/public/js/hub/components/DetailHeaderItem.vue
  var spacer = '<span aria-hidden="true"> \xB7 </span>';
  var __vue_script__7 = {
    name: "detail-header-item",
    props: ["value"],
    data() {
      return {
        header_items: this.value,
        spacer
      };
    }
  };
  var __vue_render__7 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return !Array.isArray(this.header_items) ? _c("p", {
      staticClass: "text-muted",
      domProps: {innerHTML: _vm._s(_vm.header_items)}
    }) : _c("p", {staticClass: "text-muted"}, _vm._l(_vm.header_items, function(header_item, index) {
      return _c("span", {key: index}, [
        index ? _c("span", {domProps: {innerHTML: _vm._s(_vm.spacer)}}) : _vm._e(),
        _vm._v(" "),
        typeof header_item == "string" ? _c("span", {domProps: {innerHTML: _vm._s(header_item)}}) : typeof header_item == "object" ? _c("a", {
          domProps: {innerHTML: _vm._s(header_item.value)},
          on: {
            click: function($event) {
              return header_item.on_click(header_item.value);
            }
          }
        }) : _vm._e()
      ]);
    }), 0);
  };
  var __vue_staticRenderFns__7 = [];
  __vue_render__7._withStripped = true;
  var __vue_inject_styles__7 = void 0;
  var __vue_scope_id__7 = void 0;
  var __vue_module_identifier__7 = void 0;
  var __vue_is_functional_template__7 = false;
  function __vue_normalize__7(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<p class="text-muted" v-if="!Array.isArray(this.header_items)" v-html="header_items"></p>
	<p class="text-muted" v-else>
		<span v-for="(header_item , index) in header_items" :key="index">
			<span v-if="index" v-html="spacer"></span>
			<span v-if="typeof(header_item) == 'string'" v-html="header_item"></span>
			<a v-else-if="typeof(header_item) == 'object'" @click="header_item.on_click(header_item.value)" v-html="header_item.value"></a>
		</span>
	</p>
</template>

<script>

const spacer = '<span aria-hidden="true"> \xB7 </span>';

export default {
	name: 'detail-header-item',
	props: ['value'],
	data() {
		return {
			header_items: this.value,
			spacer: spacer
		}
	},
}
</script>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (false) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  var __vue_component__7 = /* @__PURE__ */ __vue_normalize__7({render: __vue_render__7, staticRenderFns: __vue_staticRenderFns__7}, __vue_inject_styles__7, __vue_script__7, __vue_scope_id__7, __vue_is_functional_template__7, __vue_module_identifier__7, false, void 0, void 0, void 0);
  var DetailHeaderItem_default = __vue_component__7;

  // ../erpnext/erpnext/public/js/hub/components/Image.vue
  var __vue_script__8 = {
    name: "Image",
    props: ["src", "alt"],
    data() {
      return {
        is_loading: true,
        is_broken: false
      };
    },
    created() {
      this.handle_image();
    },
    methods: {
      handle_image() {
        let img = new Image();
        img.src = this.src;
        img.onload = () => {
          this.is_loading = false;
        };
        img.onerror = () => {
          this.is_loading = false;
          this.is_broken = true;
        };
      }
    }
  };
  var __vue_render__8 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {staticClass: "hub-image"}, [
      _c("img", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.is_loading && !_vm.is_broken,
            expression: "!is_loading && !is_broken"
          }
        ],
        attrs: {src: _vm.src, alt: _vm.alt}
      }),
      _vm._v(" "),
      _vm.is_loading ? _c("div", {staticClass: "hub-image-loading"}, [
        _c("span", {staticClass: "octicon octicon-cloud-download"})
      ]) : _vm._e(),
      _vm._v(" "),
      _vm.is_broken ? _c("div", {staticClass: "hub-image-broken"}, [
        _c("span", {staticClass: "octicon octicon-file-media"})
      ]) : _vm._e()
    ]);
  };
  var __vue_staticRenderFns__8 = [];
  __vue_render__8._withStripped = true;
  var __vue_inject_styles__8 = void 0;
  var __vue_scope_id__8 = void 0;
  var __vue_module_identifier__8 = void 0;
  var __vue_is_functional_template__8 = false;
  function __vue_normalize__8(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div class="hub-image">
		<img :src="src" :alt="alt" v-show="!is_loading && !is_broken"/>
		<div class="hub-image-loading" v-if="is_loading">
			<span class="octicon octicon-cloud-download"></span>
		</div>
		<div class="hub-image-broken" v-if="is_broken">
			<span class="octicon octicon-file-media"></span>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Image',
	props: ['src', 'alt'],
	data() {
		return {
			is_loading: true,
			is_broken: false
		}
	},
	created() {
		this.handle_image();
	},
	methods: {
		handle_image() {
			let img = new Image();
			img.src = this.src;

			img.onload = () => {
				this.is_loading = false;
			};
			img.onerror = () => {
				this.is_loading = false;
				this.is_broken = true;
			};
		}
	}
};
</script>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (false) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  var __vue_component__8 = /* @__PURE__ */ __vue_normalize__8({render: __vue_render__8, staticRenderFns: __vue_staticRenderFns__8}, __vue_inject_styles__8, __vue_script__8, __vue_scope_id__8, __vue_is_functional_template__8, __vue_module_identifier__8, false, void 0, void 0, void 0);
  var Image_default = __vue_component__8;

  // ../erpnext/erpnext/public/js/hub/vue-plugins.js
  import_vue.default.prototype.__ = window.__;
  import_vue.default.prototype.frappe = window.frappe;
  import_vue.default.component("item-cards-container", ItemCardsContainer_default);
  import_vue.default.component("section-header", SectionHeader_default);
  import_vue.default.component("search-input", SearchInput_default);
  import_vue.default.component("detail-view", DetailView_default);
  import_vue.default.component("detail-header-item", DetailHeaderItem_default);
  import_vue.default.component("empty-state", EmptyState_default);
  import_vue.default.component("base-image", Image_default);
  import_vue.default.directive("route", {
    bind(el, binding) {
      const route = binding.value;
      if (!route)
        return;
      el.classList.add("cursor-pointer");
      el.dataset.route = route;
      el.addEventListener("click", () => frappe.set_route(route));
    },
    unbind(el) {
      el.classList.remove("cursor-pointer");
    }
  });
  import_vue.default.filter("striphtml", function(text) {
    return strip_html(text || "");
  });

  // ../erpnext/erpnext/public/js/hub/pages/Home.vue
  var __vue_script__9 = {
    name: "home-page",
    data() {
      return {
        page_name: frappe.get_route()[1],
        item_id_fieldname: "name",
        search_value: "",
        sections: [],
        show_skeleton: true,
        search_placeholder: __("Search for anything ...")
      };
    },
    created() {
      this.search_value = "";
      this.get_items();
    },
    mounted() {
      frappe.route.on("change", () => {
        if (frappe.get_route_str() === "marketplace/home") {
          this.get_items();
        }
      });
    },
    methods: {
      get_items() {
        hub.call("get_data_for_homepage", frappe.defaults ? {
          country: frappe.defaults.get_user_default("country")
        } : null).then((data) => {
          this.show_skeleton = false;
          this.sections.push({
            title: __("Explore"),
            items: data.random_items
          });
          if (data.items_by_country.length) {
            this.sections.push({
              title: __("Near you"),
              items: data.items_by_country
            });
          }
          const category_items = data.category_items;
          if (category_items) {
            Object.keys(category_items).map((category) => {
              const items = category_items[category];
              this.sections.push({
                title: __(category),
                expandable: true,
                items
              });
            });
          }
        });
      },
      go_to_item_details_page(hub_item_name) {
        frappe.set_route(`marketplace/item/${hub_item_name}`);
      },
      set_search_route() {
        frappe.set_route("marketplace", "search", "All", this.search_value);
      }
    }
  };
  var __vue_render__9 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
      staticClass: "marketplace-page",
      attrs: {"data-page-name": _vm.page_name}
    }, [
      _c("search-input", {
        attrs: {
          placeholder: _vm.search_placeholder,
          on_search: _vm.set_search_route
        },
        model: {
          value: _vm.search_value,
          callback: function($$v) {
            _vm.search_value = $$v;
          },
          expression: "search_value"
        }
      }),
      _vm._v(" "),
      _vm.show_skeleton ? _c("div", [
        _c("section-header", [
          _c("h4", {staticClass: "hub-skeleton"}, [
            _vm._v("Explore Explore Explore")
          ])
        ]),
        _vm._v(" "),
        _c("div", {staticClass: "row"}, _vm._l([1, 2, 3, 4, 5, 6, 7], function(f, $index) {
          return _c("div", {
            key: $index,
            staticClass: "col-md-3 col-sm-4 col-xs-6 hub-card-container"
          }, [
            _c("div", {
              staticClass: "hub-skeleton",
              staticStyle: {
                height: "262px",
                width: "100%",
                "margin-bottom": "25px"
              }
            })
          ]);
        }), 0)
      ], 1) : _vm._l(_vm.sections, function(section) {
        return _c("div", {key: section.title}, [
          _c("section-header", [
            _c("h4", [_vm._v(_vm._s(section.title))]),
            _vm._v(" "),
            section.expandable ? _c("p", {
              attrs: {
                "data-route": "marketplace/category/" + section.title
              }
            }, [_vm._v(_vm._s("See All"))]) : _vm._e()
          ]),
          _vm._v(" "),
          _c("item-cards-container", {
            attrs: {
              container_name: section.title,
              items: section.items,
              item_id_fieldname: _vm.item_id_fieldname,
              on_click: _vm.go_to_item_details_page
            }
          })
        ], 1);
      })
    ], 2);
  };
  var __vue_staticRenderFns__9 = [];
  __vue_render__9._withStripped = true;
  var __vue_inject_styles__9 = function(inject) {
    if (!inject)
      return;
    inject("data-v-2a752849_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "Home.vue"}, media: void 0});
  };
  var __vue_scope_id__9 = "data-v-2a752849";
  var __vue_module_identifier__9 = void 0;
  var __vue_is_functional_template__9 = false;
  function __vue_normalize__9(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div
		class="marketplace-page"
		:data-page-name="page_name"
	>
		<search-input
			:placeholder="search_placeholder"
			:on_search="set_search_route"
			v-model="search_value"
		/>

		<div v-if="show_skeleton">
			<section-header>
				<h4 class="hub-skeleton">Explore Explore Explore</h4>
			</section-header>
			<div class="row">
				<div class="col-md-3 col-sm-4 col-xs-6 hub-card-container" v-for="(f, $index) in [1, 2, 3, 4, 5, 6, 7]" :key="$index">
					<div class="hub-skeleton" style="height: 262px; width: 100%; margin-bottom: 25px;"></div>
				</div>
			</div>
		</div>

		<div v-else v-for="section in sections" :key="section.title">

			<section-header>
				<h4>{{ section.title }}</h4>
				<p v-if="section.expandable" :data-route="'marketplace/category/' + section.title">{{ 'See All' }}</p>
			</section-header>

			<item-cards-container
				:container_name="section.title"
				:items="section.items"
				:item_id_fieldname="item_id_fieldname"
				:on_click="go_to_item_details_page"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'home-page',
	data() {
		return {
			page_name: frappe.get_route()[1],
			item_id_fieldname: 'name',
			search_value: '',

			sections: [],
			show_skeleton: true,

			// Constants
			search_placeholder: __('Search for anything ...'),
		};
	},
	created() {
		// refreshed
		this.search_value = '';
		this.get_items();
	},
	mounted() {
		frappe.route.on('change', () => {
			if (frappe.get_route_str() === 'marketplace/home') {
				this.get_items();
			}
		})
	},
	methods: {
		get_items() {
			hub.call('get_data_for_homepage', frappe.defaults ? {
				country: frappe.defaults.get_user_default('country')
			} : null)
			.then((data) => {
				this.show_skeleton = false;

				this.sections.push({
					title: __('Explore'),
					items: data.random_items
				});
				if (data.items_by_country.length) {
					this.sections.push({
						title: __('Near you'),
						items: data.items_by_country
					});
				}

				const category_items = data.category_items;

				if (category_items) {
					Object.keys(category_items).map(category => {
						const items = category_items[category];

						this.sections.push({
							title: __(category),
							expandable: true,
							items
						});
					});
				}
			})
		},

		go_to_item_details_page(hub_item_name) {
			frappe.set_route(\`marketplace/item/\${hub_item_name}\`);
		},

		set_search_route() {
			frappe.set_route('marketplace', 'search', 'All', this.search_value);
		},
	}
}
</script>

<style scoped></style>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__4() {
    const styles = __vue_create_injector__4.styles || (__vue_create_injector__4.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = {ids: [], parts: [], element: void 0});
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__9 = /* @__PURE__ */ __vue_normalize__9({render: __vue_render__9, staticRenderFns: __vue_staticRenderFns__9}, __vue_inject_styles__9, __vue_script__9, __vue_scope_id__9, __vue_is_functional_template__9, __vue_module_identifier__9, false, __vue_create_injector__4, void 0, void 0);
  var Home_default = __vue_component__9;

  // ../erpnext/erpnext/public/js/hub/pages/Search.vue
  var __vue_script__10 = {
    data() {
      return {
        page_name: frappe.get_route()[1],
        items: [],
        category: frappe.get_route()[2],
        search_value: frappe.get_route()[3],
        item_id_fieldname: "name",
        filters: {},
        search_placeholder: __("Search for anything ..."),
        empty_state_message: __("")
      };
    },
    computed: {
      page_title() {
        return this.items.length ? __('Results for "{0}" {1}', [
          this.search_value,
          this.category !== "All" ? __("in category {0}", [this.category]) : ""
        ]) : __("No Items found.");
      }
    },
    created() {
      this.get_items();
    },
    methods: {
      get_items() {
        if (this.category !== "All") {
          this.filters["hub_category"] = this.category;
        }
        hub.call("get_items", {
          keyword: this.search_value,
          filters: this.filters
        }).then((items) => {
          this.items = items;
        });
      },
      set_route_and_get_items() {
        frappe.set_route("marketplace", "search", this.category, this.search_value);
        this.get_items();
      },
      go_to_item_details_page(hub_item_name) {
        frappe.set_route(`marketplace/item/${hub_item_name}`);
      }
    }
  };
  var __vue_render__10 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
      staticClass: "marketplace-page",
      attrs: {"data-page-name": _vm.page_name}
    }, [
      _c("search-input", {
        attrs: {
          placeholder: _vm.search_placeholder,
          on_search: _vm.set_route_and_get_items
        },
        model: {
          value: _vm.search_value,
          callback: function($$v) {
            _vm.search_value = $$v;
          },
          expression: "search_value"
        }
      }),
      _vm._v(" "),
      _c("h5", [_vm._v(_vm._s(_vm.page_title))]),
      _vm._v(" "),
      _c("item-cards-container", {
        attrs: {
          container_name: "Search",
          items: _vm.items,
          item_id_fieldname: _vm.item_id_fieldname,
          on_click: _vm.go_to_item_details_page,
          empty_state_message: _vm.empty_state_message
        }
      })
    ], 1);
  };
  var __vue_staticRenderFns__10 = [];
  __vue_render__10._withStripped = true;
  var __vue_inject_styles__10 = function(inject) {
    if (!inject)
      return;
    inject("data-v-7c3cdaab_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "Search.vue"}, media: void 0});
  };
  var __vue_scope_id__10 = "data-v-7c3cdaab";
  var __vue_module_identifier__10 = void 0;
  var __vue_is_functional_template__10 = false;
  function __vue_normalize__10(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div
		class="marketplace-page"
		:data-page-name="page_name"
	>
		<search-input
			:placeholder="search_placeholder"
			:on_search="set_route_and_get_items"
			v-model="search_value"
		>
		</search-input>

		<h5>{{ page_title }}</h5>

		<item-cards-container
			container_name="Search"
			:items="items"
			:item_id_fieldname="item_id_fieldname"
			:on_click="go_to_item_details_page"
			:empty_state_message="empty_state_message"
		>
		</item-cards-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			page_name: frappe.get_route()[1],
			items: [],
			category: frappe.get_route()[2],
			search_value: frappe.get_route()[3],
			item_id_fieldname: 'name',
			filters: {},

			// Constants
			search_placeholder: __('Search for anything ...'),
			empty_state_message: __('')
		};
	},
	computed: {
		page_title() {
			return this.items.length
				? __('Results for "{0}" {1}', [
					this.search_value,
					this.category !== 'All' ? __('in category {0}', [this.category]) : ''
				  ])
				: __('No Items found.');
		}
	},
	created() {
		this.get_items();
	},
	methods: {
		get_items() {
			if (this.category !== 'All') {
				this.filters['hub_category'] = this.category;
			}
			hub.call('get_items', {
				keyword: this.search_value,
				filters: this.filters
			})
			.then((items) => {
				this.items = items;
			})
		},

		set_route_and_get_items() {
			frappe.set_route('marketplace', 'search', this.category, this.search_value);
			this.get_items();
		},

		go_to_item_details_page(hub_item_name) {
			frappe.set_route(\`marketplace/item/\${hub_item_name}\`);
		}
	}
}
</script>

<style scoped></style>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__5() {
    const styles = __vue_create_injector__5.styles || (__vue_create_injector__5.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = {ids: [], parts: [], element: void 0});
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__10 = /* @__PURE__ */ __vue_normalize__10({render: __vue_render__10, staticRenderFns: __vue_staticRenderFns__10}, __vue_inject_styles__10, __vue_script__10, __vue_scope_id__10, __vue_is_functional_template__10, __vue_module_identifier__10, false, __vue_create_injector__5, void 0, void 0);
  var Search_default = __vue_component__10;

  // ../erpnext/erpnext/public/js/hub/pages/Category.vue
  var __vue_script__11 = {
    data() {
      return {
        page_name: frappe.get_route()[1],
        category: frappe.get_route()[2],
        items: [],
        item_id_fieldname: "name",
        empty_state_message: __("No items in this category yet."),
        search_value: "",
        search_placeholder: __("Search for anything ...")
      };
    },
    computed: {
      page_title() {
        return __(this.category);
      }
    },
    created() {
      this.search_value = "";
      this.get_items();
    },
    methods: {
      get_items() {
        hub.call("get_items", {
          filters: {
            hub_category: this.category
          }
        }).then((items) => {
          this.items = items;
        });
      },
      go_to_item_details_page(hub_item_name) {
        frappe.set_route(`marketplace/item/${hub_item_name}`);
      },
      set_search_route() {
        frappe.set_route("marketplace", "search", this.category, this.search_value);
      }
    }
  };
  var __vue_render__11 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
      staticClass: "marketplace-page",
      attrs: {"data-page-name": _vm.page_name}
    }, [
      _c("search-input", {
        attrs: {
          placeholder: _vm.search_placeholder,
          on_search: _vm.set_search_route
        },
        model: {
          value: _vm.search_value,
          callback: function($$v) {
            _vm.search_value = $$v;
          },
          expression: "search_value"
        }
      }),
      _vm._v(" "),
      _c("h5", [_vm._v(_vm._s(_vm.page_title))]),
      _vm._v(" "),
      _c("item-cards-container", {
        attrs: {
          container_name: _vm.page_title,
          items: _vm.items,
          item_id_fieldname: _vm.item_id_fieldname,
          on_click: _vm.go_to_item_details_page,
          empty_state_message: _vm.empty_state_message
        }
      })
    ], 1);
  };
  var __vue_staticRenderFns__11 = [];
  __vue_render__11._withStripped = true;
  var __vue_inject_styles__11 = function(inject) {
    if (!inject)
      return;
    inject("data-v-f4a69030_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "Category.vue"}, media: void 0});
  };
  var __vue_scope_id__11 = "data-v-f4a69030";
  var __vue_module_identifier__11 = void 0;
  var __vue_is_functional_template__11 = false;
  function __vue_normalize__11(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div
		class="marketplace-page"
		:data-page-name="page_name"
	>
		<search-input
			:placeholder="search_placeholder"
			:on_search="set_search_route"
			v-model="search_value"
		/>

		<h5>{{ page_title }}</h5>

		<item-cards-container
			:container_name="page_title"
			:items="items"
			:item_id_fieldname="item_id_fieldname"
			:on_click="go_to_item_details_page"
			:empty_state_message="empty_state_message"
		>
		</item-cards-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			page_name: frappe.get_route()[1],
			category: frappe.get_route()[2],
			items: [],
			item_id_fieldname: 'name',

			// Constants
			empty_state_message: __('No items in this category yet.'),

			search_value: '',

			// Constants
			search_placeholder: __('Search for anything ...'),

		};
	},
	computed: {
		page_title() {
			return __(this.category);
		}
	},
	created() {
		this.search_value = '';
		this.get_items();
	},
	methods: {
		get_items() {
			hub.call('get_items', {
				filters: {
					hub_category: this.category
				}
			})
			.then((items) => {
				this.items = items;
			})
		},

		go_to_item_details_page(hub_item_name) {
			frappe.set_route(\`marketplace/item/\${hub_item_name}\`);
		},

		set_search_route() {
			frappe.set_route('marketplace', 'search', this.category, this.search_value);
		},
	}
}
</script>

<style scoped></style>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__6() {
    const styles = __vue_create_injector__6.styles || (__vue_create_injector__6.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = {ids: [], parts: [], element: void 0});
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__11 = /* @__PURE__ */ __vue_normalize__11({render: __vue_render__11, staticRenderFns: __vue_staticRenderFns__11}, __vue_inject_styles__11, __vue_script__11, __vue_scope_id__11, __vue_is_functional_template__11, __vue_module_identifier__11, false, __vue_create_injector__6, void 0, void 0);
  var Category_default = __vue_component__11;

  // ../erpnext/erpnext/public/js/hub/pages/SavedItems.vue
  var __vue_script__12 = {
    name: "saved-items-page",
    data() {
      return {
        page_name: frappe.get_route()[1],
        items: [],
        item_id_fieldname: "name",
        page_title: __("Saved Items"),
        empty_state_message: __("You have not saved any items yet.")
      };
    },
    created() {
      this.get_items();
    },
    methods: {
      get_items() {
        hub.call("get_saved_items_of_user", {}, "action:item_save").then((items) => {
          this.items = items;
        });
      },
      go_to_item_details_page(hub_item_name) {
        frappe.set_route(`marketplace/item/${hub_item_name}`);
      },
      on_item_remove(hub_item_name) {
        const grace_period = 5e3;
        let reverted = false;
        let alert;
        const undo_remove = () => {
          this.toggle_item(hub_item_name);
          ;
          reverted = true;
          alert.hide();
          return false;
        };
        const item_name = this.items.filter((item) => item.hub_item_name === hub_item_name);
        alert = frappe.show_alert(`
				<span>
					${__("{0} removed.", [item_name], "A specific Item has been removed.")}
					<a href="#" data-action="undo-remove">
						<b>${__("Undo", None, "Undo removal of item.")}</b>
					</a>
				</span>`, grace_period / 1e3, {
          "undo-remove": undo_remove.bind(this)
        });
        this.toggle_item(hub_item_name, false);
        setTimeout(() => {
          if (!reverted) {
            this.remove_item_from_saved_items(hub_item_name);
          }
        }, grace_period);
      },
      remove_item_from_saved_items(hub_item_name) {
        erpnext.hub.trigger("action:item_save");
        hub.call("remove_item_from_user_saved_items", {
          hub_item_name,
          hub_user: frappe.session.user
        }).then(() => {
          this.get_items();
        }).catch((e) => {
          console.log(e);
        });
      },
      toggle_item(hub_item_name, show = true) {
        this.items = this.items.map((item) => {
          if (item.name === hub_item_name) {
            item.seen = show;
          }
          return item;
        });
      }
    }
  };
  var __vue_render__12 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
      staticClass: "marketplace-page",
      attrs: {"data-page-name": _vm.page_name}
    }, [
      _c("h5", [_vm._v(_vm._s(_vm.page_title))]),
      _vm._v(" "),
      _c("item-cards-container", {
        attrs: {
          container_name: _vm.page_title,
          items: _vm.items,
          item_id_fieldname: _vm.item_id_fieldname,
          on_click: _vm.go_to_item_details_page,
          editable: true,
          empty_state_message: _vm.empty_state_message
        },
        on: {"remove-item": _vm.on_item_remove}
      })
    ], 1);
  };
  var __vue_staticRenderFns__12 = [];
  __vue_render__12._withStripped = true;
  var __vue_inject_styles__12 = function(inject) {
    if (!inject)
      return;
    inject("data-v-495c2138_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "SavedItems.vue"}, media: void 0});
  };
  var __vue_scope_id__12 = "data-v-495c2138";
  var __vue_module_identifier__12 = void 0;
  var __vue_is_functional_template__12 = false;
  function __vue_normalize__12(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div
		class="marketplace-page"
		:data-page-name="page_name"
	>
		<h5>{{ page_title }}</h5>

		<item-cards-container
			:container_name="page_title"
			:items="items"
			:item_id_fieldname="item_id_fieldname"
			:on_click="go_to_item_details_page"
			:editable="true"
			@remove-item="on_item_remove"
			:empty_state_message="empty_state_message"
		>
		</item-cards-container>
	</div>
</template>

<script>
export default {
	name: 'saved-items-page',
	data() {
		return {
			page_name: frappe.get_route()[1],
			items: [],
			item_id_fieldname: 'name',

			// Constants
			page_title: __('Saved Items'),
			empty_state_message: __('You have not saved any items yet.')
		};
	},
	created() {
		this.get_items();
	},
	methods: {
		get_items() {
			hub.call(
				'get_saved_items_of_user', {},
				'action:item_save'
			)
			.then((items) => {
				this.items = items;
			})
		},

		go_to_item_details_page(hub_item_name) {
			frappe.set_route(\`marketplace/item/\${hub_item_name}\`);
		},

		on_item_remove(hub_item_name) {
			const grace_period = 5000;
			let reverted = false;
			let alert;

			const undo_remove = () => {
				this.toggle_item(hub_item_name);;
				reverted = true;
				alert.hide();
				return false;
			}

			const item_name = this.items.filter(item => item.hub_item_name === hub_item_name);

			alert = frappe.show_alert(\`
				<span>
					\${__('{0} removed.', [item_name], 'A specific Item has been removed.')}
					<a href="#" data-action="undo-remove">
						<b>\${__('Undo', None, 'Undo removal of item.')}</b>
					</a>
				</span>\`,
				grace_period/1000,
				{
					'undo-remove': undo_remove.bind(this)
				}
			);

			this.toggle_item(hub_item_name, false);

			setTimeout(() => {
				if(!reverted) {
					this.remove_item_from_saved_items(hub_item_name);
				}
			}, grace_period);
		},

		remove_item_from_saved_items(hub_item_name) {
			erpnext.hub.trigger('action:item_save');
			hub.call('remove_item_from_user_saved_items', {
				hub_item_name,
				hub_user: frappe.session.user
			})
			.then(() => {
				this.get_items();
			})
			.catch(e => {
				console.log(e);
			});
		},

		// By default show
		toggle_item(hub_item_name, show=true) {
			this.items = this.items.map(item => {
				if(item.name === hub_item_name) {
					item.seen = show;
				}
				return item;
			});
		}
	}
}
</script>

<style scoped></style>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__7() {
    const styles = __vue_create_injector__7.styles || (__vue_create_injector__7.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = {ids: [], parts: [], element: void 0});
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__12 = /* @__PURE__ */ __vue_normalize__12({render: __vue_render__12, staticRenderFns: __vue_staticRenderFns__12}, __vue_inject_styles__12, __vue_script__12, __vue_scope_id__12, __vue_is_functional_template__12, __vue_module_identifier__12, false, __vue_create_injector__7, void 0, void 0);
  var SavedItems_default = __vue_component__12;

  // ../erpnext/erpnext/public/js/hub/pages/FeaturedItems.vue
  var __vue_script__13 = {
    name: "featured-items-page",
    data() {
      return {
        page_name: frappe.get_route()[1],
        items: [],
        item_id_fieldname: "name",
        page_title: __("Your Featured Items"),
        empty_state_message: __("No featured items yet. Got to your {0} and feature up to eight items that you want to highlight to your customers.", [`<a href="#marketplace/published-items">${__("Published Items")}</a>`])
      };
    },
    created() {
      this.get_items();
    },
    methods: {
      get_items() {
        hub.call("get_featured_items_of_seller", {}, "action:item_feature").then((items) => {
          this.items = items;
        });
      },
      go_to_item_details_page(hub_item_name) {
        frappe.set_route(`marketplace/item/${hub_item_name}`);
      },
      on_item_remove(hub_item_name) {
        const grace_period = 5e3;
        let reverted = false;
        let alert;
        const undo_remove = () => {
          this.toggle_item(hub_item_name);
          ;
          reverted = true;
          alert.hide();
          return false;
        };
        const item_name = this.items.filter((item) => item.hub_item_name === hub_item_name);
        alert_message = __("{0} removed. {1}", [
          item_name,
          `<a href="#" data-action="undo-remove"><b>${__("Undo")}</b></a>`
        ]);
        alert = frappe.show_alert(alert_message, grace_period / 1e3, {
          "undo-remove": undo_remove.bind(this)
        });
        this.toggle_item(hub_item_name, false);
        setTimeout(() => {
          if (!reverted) {
            this.remove_item_from_featured_items(hub_item_name);
          }
        }, grace_period);
      },
      remove_item_from_featured_items(hub_item_name) {
        erpnext.hub.trigger("action:item_feature");
        hub.call("remove_item_from_seller_featured_items", {
          hub_item_name,
          hub_user: frappe.session.user
        }).then(() => {
          this.get_items();
        }).catch((e) => {
          console.log(e);
        });
      },
      toggle_item(hub_item_name, show = true) {
        this.items = this.items.map((item) => {
          if (item.name === hub_item_name) {
            item.seen = show;
          }
          return item;
        });
      }
    }
  };
  var __vue_render__13 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
      staticClass: "marketplace-page",
      attrs: {"data-page-name": _vm.page_name}
    }, [
      _c("h5", [_vm._v(_vm._s(_vm.page_title))]),
      _vm._v(" "),
      _vm.items.length ? _c("p", {staticClass: "text-muted margin-bottom"}, [
        _vm._v("\n		" + _vm._s(_vm.__("You can Feature upto 8 items.")) + "\n	")
      ]) : _vm._e(),
      _vm._v(" "),
      _c("item-cards-container", {
        attrs: {
          container_name: _vm.page_title,
          items: _vm.items,
          item_id_fieldname: _vm.item_id_fieldname,
          on_click: _vm.go_to_item_details_page,
          editable: true,
          empty_state_message: _vm.empty_state_message
        },
        on: {"remove-item": _vm.on_item_remove}
      })
    ], 1);
  };
  var __vue_staticRenderFns__13 = [];
  __vue_render__13._withStripped = true;
  var __vue_inject_styles__13 = function(inject) {
    if (!inject)
      return;
    inject("data-v-14c79c3e_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "FeaturedItems.vue"}, media: void 0});
  };
  var __vue_scope_id__13 = "data-v-14c79c3e";
  var __vue_module_identifier__13 = void 0;
  var __vue_is_functional_template__13 = false;
  function __vue_normalize__13(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div
		class="marketplace-page"
		:data-page-name="page_name"
	>
		<h5>{{ page_title }}</h5>
		<p v-if="items.length"
			class="text-muted margin-bottom">
			{{ __('You can Feature upto 8 items.') }}
		</p>

		<item-cards-container
			:container_name="page_title"
			:items="items"
			:item_id_fieldname="item_id_fieldname"
			:on_click="go_to_item_details_page"
			:editable="true"
			@remove-item="on_item_remove"
			:empty_state_message="empty_state_message"
		>
		</item-cards-container>
	</div>
</template>

<script>
export default {
	name: 'featured-items-page',
	data() {
		return {
			page_name: frappe.get_route()[1],
			items: [],
			item_id_fieldname: 'name',

			// Constants
			page_title: __('Your Featured Items'),
			empty_state_message: __('No featured items yet. Got to your {0} and feature up to eight items that you want to highlight to your customers.',
				[\`<a href="#marketplace/published-items">\${__("Published Items")}</a>\`])
		};
	},
	created() {
		this.get_items();
	},
	methods: {
		get_items() {
			hub.call(
				'get_featured_items_of_seller', {},
				'action:item_feature'
			)
			.then((items) => {
				this.items = items;
			})
		},

		go_to_item_details_page(hub_item_name) {
			frappe.set_route(\`marketplace/item/\${hub_item_name}\`);
		},

		on_item_remove(hub_item_name) {
			const grace_period = 5000;
			let reverted = false;
			let alert;

			const undo_remove = () => {
				this.toggle_item(hub_item_name);;
				reverted = true;
				alert.hide();
				return false;
			}

			const item_name = this.items.filter(item => item.hub_item_name === hub_item_name);

			alert_message = __('{0} removed. {1}', [item_name, 
				\`<a href="#" data-action="undo-remove"><b>\${__('Undo')}</b></a>\`]);
			alert = frappe.show_alert(alert_message, grace_period / 1000,
				{
					'undo-remove': undo_remove.bind(this)
				}
			);

			this.toggle_item(hub_item_name, false);

			setTimeout(() => {
				if(!reverted) {
					this.remove_item_from_featured_items(hub_item_name);
				}
			}, grace_period);
		},

		remove_item_from_featured_items(hub_item_name) {
			erpnext.hub.trigger('action:item_feature');
			hub.call('remove_item_from_seller_featured_items', {
				hub_item_name,
				hub_user: frappe.session.user
			})
			.then(() => {
				this.get_items();
			})
			.catch(e => {
				console.log(e);
			});
		},

		// By default show
		toggle_item(hub_item_name, show=true) {
			this.items = this.items.map(item => {
				if(item.name === hub_item_name) {
					item.seen = show;
				}
				return item;
			});
		}
	}
}
</script>

<style scoped></style>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__8() {
    const styles = __vue_create_injector__8.styles || (__vue_create_injector__8.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = {ids: [], parts: [], element: void 0});
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__13 = /* @__PURE__ */ __vue_normalize__13({render: __vue_render__13, staticRenderFns: __vue_staticRenderFns__13}, __vue_inject_styles__13, __vue_script__13, __vue_scope_id__13, __vue_is_functional_template__13, __vue_module_identifier__13, false, __vue_create_injector__8, void 0, void 0);
  var FeaturedItems_default = __vue_component__13;

  // ../erpnext/erpnext/public/js/hub/pages/PublishedItems.vue
  var __vue_script__14 = {
    data() {
      return {
        page_name: frappe.get_route()[1],
        items: [],
        item_id_fieldname: "name",
        publish_page_action: {
          label: __("Publish Your First Items"),
          on_click: () => {
            frappe.set_route(`marketplace/publish`);
          }
        }
      };
    },
    created() {
      this.get_items();
    },
    methods: {
      get_items() {
        hub.call("get_items", {
          filters: {
            hub_seller: hub.settings.hub_seller_name
          }
        }).then((items) => {
          this.items = items;
        });
      },
      go_to_item_details_page(hub_item_name) {
        frappe.set_route(`marketplace/item/${hub_item_name}`);
      }
    }
  };
  var __vue_render__14 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
      staticClass: "marketplace-page",
      attrs: {"data-page-name": _vm.page_name}
    }, [
      _c("section-header", [
        _c("div", [
          _c("h5", [_vm._v(_vm._s(_vm.__("Published Items")))]),
          _vm._v(" "),
          _vm.items.length ? _c("p", {staticClass: "text-muted margin-bottom"}, [
            _vm._v("\n				" + _vm._s(_vm.__("You can publish upto 200 items.")) + "\n			")
          ]) : _vm._e()
        ]),
        _vm._v(" "),
        _vm.items.length ? _c("button", {
          directives: [
            {
              name: "route",
              rawName: "v-route",
              value: "marketplace/publish",
              expression: "'marketplace/publish'"
            }
          ],
          staticClass: "btn btn-default btn-xs publish-items"
        }, [_c("span", [_vm._v(_vm._s(_vm.__("Publish More Items")))])]) : _vm._e()
      ]),
      _vm._v(" "),
      _c("item-cards-container", {
        attrs: {
          container_name: _vm.__("Published Items"),
          items: _vm.items,
          item_id_fieldname: _vm.item_id_fieldname,
          on_click: _vm.go_to_item_details_page,
          empty_state_message: _vm.__("You haven't published any items yet."),
          empty_state_action: _vm.publish_page_action
        }
      })
    ], 1);
  };
  var __vue_staticRenderFns__14 = [];
  __vue_render__14._withStripped = true;
  var __vue_inject_styles__14 = function(inject) {
    if (!inject)
      return;
    inject("data-v-36ef8ef4_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "PublishedItems.vue"}, media: void 0});
  };
  var __vue_scope_id__14 = "data-v-36ef8ef4";
  var __vue_module_identifier__14 = void 0;
  var __vue_is_functional_template__14 = false;
  function __vue_normalize__14(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div
		class="marketplace-page"
		:data-page-name="page_name"
	>
		<section-header>
			<div>
				<h5>{{ __('Published Items') }}</h5>
				<p v-if="items.length"
					class="text-muted margin-bottom">
					{{ __('You can publish upto 200 items.') }}
				</p>
			</div>

			<button v-if="items.length"
				class="btn btn-default btn-xs publish-items"
				v-route="'marketplace/publish'"
			>
				<span>{{ __('Publish More Items') }}</span>
			</button>

		</section-header>

		<item-cards-container
			:container_name="__('Published Items')"
			:items="items"
			:item_id_fieldname="item_id_fieldname"
			:on_click="go_to_item_details_page"
			:empty_state_message="__('You haven\\'t published any items yet.')"
			:empty_state_action="publish_page_action"
		>
		</item-cards-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			page_name: frappe.get_route()[1],
			items: [],
			item_id_fieldname: 'name',

			publish_page_action: {
				label: __('Publish Your First Items'),
				on_click: () => {
					frappe.set_route(\`marketplace/publish\`);
				}
			}
		};
	},
	created() {
		this.get_items();
	},
	methods: {
		get_items() {
			hub.call('get_items', {
				filters: {
					hub_seller: hub.settings.hub_seller_name
				}
			})
			.then((items) => {
				this.items = items;
			})
		},

		go_to_item_details_page(hub_item_name) {
			frappe.set_route(\`marketplace/item/\${hub_item_name}\`);
		}
	}
}
</script>

<style scoped></style>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__9() {
    const styles = __vue_create_injector__9.styles || (__vue_create_injector__9.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = {ids: [], parts: [], element: void 0});
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__14 = /* @__PURE__ */ __vue_normalize__14({render: __vue_render__14, staticRenderFns: __vue_staticRenderFns__14}, __vue_inject_styles__14, __vue_script__14, __vue_scope_id__14, __vue_is_functional_template__14, __vue_module_identifier__14, false, __vue_create_injector__9, void 0, void 0);
  var PublishedItems_default = __vue_component__14;

  // ../erpnext/erpnext/public/js/hub/components/Rating.vue
  var __vue_script__15 = {
    props: ["rating", "max_rating"]
  };
  var __vue_render__15 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("span", _vm._l(_vm.max_rating, function(index) {
      return _c("i", {
        key: index,
        staticClass: "fa fa-fw star-icon",
        class: {
          "fa-star": index <= _vm.rating,
          "fa-star-o": index > _vm.rating
        }
      });
    }), 0);
  };
  var __vue_staticRenderFns__15 = [];
  __vue_render__15._withStripped = true;
  var __vue_inject_styles__15 = void 0;
  var __vue_scope_id__15 = void 0;
  var __vue_module_identifier__15 = void 0;
  var __vue_is_functional_template__15 = false;
  function __vue_normalize__15(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
    <span>
        <i v-for="index in max_rating"
            :key="index"
            class="fa fa-fw star-icon"
            :class="{'fa-star': index <= rating, 'fa-star-o': index > rating}"
        >
        </i>
    </span>
</template>

<script>
export default {
    props: ['rating', 'max_rating']
}
</script>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (false) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  var __vue_component__15 = /* @__PURE__ */ __vue_normalize__15({render: __vue_render__15, staticRenderFns: __vue_staticRenderFns__15}, __vue_inject_styles__15, __vue_script__15, __vue_scope_id__15, __vue_is_functional_template__15, __vue_module_identifier__15, false, void 0, void 0, void 0);
  var Rating_default = __vue_component__15;

  // ../erpnext/erpnext/public/js/hub/components/ReviewTimelineItem.vue
  var __vue_script__16 = {
    props: ["username", "comment_when", "avatar", "rating", "subject", "content"],
    components: {
      Rating: Rating_default
    }
  };
  var __vue_render__16 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
      staticClass: "media timeline-item user-content",
      attrs: {"data-doctype": "${''}", "data-name": "${''}"}
    }, [
      _c("span", {
        staticClass: "pull-left avatar avatar-medium hidden-xs",
        staticStyle: {"margin-top": "1px"}
      }),
      _vm._v(" "),
      _c("div", {staticClass: "pull-left media-body"}, [
        _c("div", {staticClass: "media-content-wrapper"}, [
          _c("div", {staticClass: "action-btns"}),
          _vm._v(" "),
          _c("div", {staticClass: "comment-header clearfix"}, [
            _c("span", {
              staticClass: "pull-left avatar avatar-small visible-xs"
            }),
            _vm._v(" "),
            _c("div", {staticClass: "asset-details"}, [
              _c("span", {staticClass: "author-wrap"}, [
                _c("i", {
                  staticClass: "octicon octicon-quote hidden-xs fa-fw"
                }),
                _vm._v(" "),
                _c("span", [
                  _vm._v("\n                                " + _vm._s(_vm.username) + "\n                            ")
                ])
              ]),
              _vm._v(" "),
              _c("a", {staticClass: "text-muted"}, [
                _c("span", {staticClass: "text-muted hidden-xs"}, [
                  _vm._v("\u2013")
                ]),
                _vm._v(" "),
                _c("span", {
                  staticClass: "hidden-xs",
                  domProps: {innerHTML: _vm._s(_vm.comment_when)}
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", {staticClass: "reply timeline-content-show"}, [
            _c("div", {staticClass: "timeline-item-content"}, [
              _c("p", {staticClass: "text-muted"}, [
                _c("rating", {attrs: {rating: _vm.rating, max_rating: 5}})
              ], 1),
              _vm._v(" "),
              _c("h6", {staticClass: "bold"}, [_vm._v(_vm._s(_vm.subject))]),
              _vm._v(" "),
              _c("p", {
                staticClass: "text-muted",
                domProps: {innerHTML: _vm._s(_vm.content)}
              })
            ])
          ])
        ])
      ])
    ]);
  };
  var __vue_staticRenderFns__16 = [];
  __vue_render__16._withStripped = true;
  var __vue_inject_styles__16 = void 0;
  var __vue_scope_id__16 = void 0;
  var __vue_module_identifier__16 = void 0;
  var __vue_is_functional_template__16 = false;
  function __vue_normalize__16(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
    <div class="media timeline-item user-content" data-doctype="\${''}" data-name="\${''}">
		<span class="pull-left avatar avatar-medium hidden-xs" style="margin-top: 1px">
			<!-- \${image_html} -->
		</span>
		<div class="pull-left media-body">
			<div class="media-content-wrapper">
				<div class="action-btns">
                    <!-- \${edit_html} -->
                </div>

				<div class="comment-header clearfix">
					<span class="pull-left avatar avatar-small visible-xs">
						<!-- \${image_html} -->
					</span>

					<div class="asset-details">
						<span class="author-wrap">
							<i class="octicon octicon-quote hidden-xs fa-fw"></i>
							<span>
                                {{ username }}
                            </span>
						</span>
						<a class="text-muted">
							<span class="text-muted hidden-xs">&ndash;</span>
							<span class="hidden-xs" v-html="comment_when"></span>
						</a>
					</div>
				</div>
				<div class="reply timeline-content-show">
					<div class="timeline-item-content">
						<p class="text-muted">
							<rating :rating="rating" :max_rating="5"></rating>
						</p>
						<h6 class="bold">{{ subject }}</h6>
						<p class="text-muted" v-html="content"></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Rating from '../components/Rating.vue';

export default {
    props: ['username', 'comment_when', 'avatar', 'rating', 'subject', 'content'],
    components: {
        Rating
    }
}
</script>

`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (false) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  var __vue_component__16 = /* @__PURE__ */ __vue_normalize__16({render: __vue_render__16, staticRenderFns: __vue_staticRenderFns__16}, __vue_inject_styles__16, __vue_script__16, __vue_scope_id__16, __vue_is_functional_template__16, __vue_module_identifier__16, false, void 0, void 0, void 0);
  var ReviewTimelineItem_default = __vue_component__16;

  // ../erpnext/erpnext/public/js/hub/components/ReviewArea.vue
  var __vue_script__17 = {
    props: ["hub_item_name"],
    data() {
      return {
        user_review: {
          rating: 0,
          subject: "",
          content: ""
        },
        reviews: []
      };
    },
    components: {
      ReviewTimelineItem: ReviewTimelineItem_default
    },
    created() {
      this.get_item_reviews();
    },
    mounted() {
      this.make_input();
    },
    methods: {
      set_rating(i) {
        this.user_review.rating = i;
      },
      when(datetime) {
        return comment_when(datetime);
      },
      get_item_reviews() {
        hub.call("get_item_reviews", {hub_item_name: this.hub_item_name}).then((reviews) => {
          this.reviews = reviews;
        }).catch(() => {
        });
      },
      make_input() {
        this.review_content = frappe.ui.form.make_control({
          parent: this.$refs["review-content"],
          on_submit: this.on_submit_review.bind(this),
          no_wrapper: true,
          only_input: true,
          render_input: true,
          df: {
            fieldtype: "Comment",
            fieldname: "comment"
          }
        });
      },
      on_submit_review() {
        const review = Object.assign({}, this.user_review, {
          content: this.review_content.get_value()
        });
        if (!hub.is_seller_registered()) {
          frappe.throw(__("You need to login as a Marketplace User before you can add any reviews."));
        }
        hub.call("add_item_review", {
          hub_item_name: this.hub_item_name,
          review: JSON.stringify(review)
        }).then(this.push_review.bind(this));
        this.reset_user_review();
      },
      reset_user_review() {
        this.user_review.rating = 0;
        this.user_review.subject = "";
        this.review_content.set_value("");
      },
      push_review(review) {
        this.reviews.unshift(review);
      }
    }
  };
  var __vue_render__17 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("div", {staticClass: "timeline-head"}, [
        _c("div", {staticClass: "comment-input-wrapper"}, [
          _c("div", {staticClass: "comment-input-header"}, [
            _c("span", {staticClass: "text-muted"}, [
              _vm._v(_vm._s(_vm.__("Add your review")))
            ]),
            _vm._v(" "),
            _c("div", {
              staticClass: "btn btn-default btn-xs pull-right",
              attrs: {
                disabled: !(_vm.user_review.rating && _vm.user_review.subject)
              },
              on: {click: _vm.on_submit_review}
            }, [
              _vm._v("\n					" + _vm._s(_vm.__("Submit Review")) + "\n				")
            ])
          ]),
          _vm._v(" "),
          _c("div", {staticClass: "comment-input-container"}, [
            _c("div", {staticClass: "rating-area text-muted"}, [
              _c("span", [_vm._v(_vm._s(_vm.__("Your rating:")))]),
              _vm._v(" "),
              _vm._l([1, 2, 3, 4, 5], function(i) {
                return _c("div", {
                  key: i,
                  class: [
                    "fa fa-fw",
                    _vm.user_review.rating < i ? "fa-star-o" : "fa-star"
                  ],
                  attrs: {"data-index": i},
                  on: {
                    click: function($event) {
                      return _vm.set_rating(i);
                    }
                  }
                });
              })
            ], 2),
            _vm._v(" "),
            _c("div", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.user_review.rating,
                  expression: "user_review.rating"
                }
              ],
              staticClass: "comment-input-body margin-top"
            }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user_review.subject,
                    expression: "user_review.subject"
                  }
                ],
                staticClass: "form-control margin-bottom",
                staticStyle: {"border-color": "#ebeff2"},
                attrs: {type: "text", placeholder: "Subject"},
                domProps: {value: _vm.user_review.subject},
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return;
                    }
                    _vm.$set(_vm.user_review, "subject", $event.target.value);
                  }
                }
              }),
              _vm._v(" "),
              _c("div", {ref: "review-content"}),
              _vm._v(" "),
              _c("div", [
                _c("span", {staticClass: "text-muted text-small"}, [
                  _vm._v(_vm._s(_vm.__("Ctrl+Enter to submit")))
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", {staticClass: "timeline-items"}, _vm._l(_vm.reviews, function(review) {
        return _c("review-timeline-item", {
          key: review.user,
          attrs: {
            username: review.username,
            avatar: review.user_image,
            comment_when: _vm.when(review.modified),
            rating: review.rating,
            subject: review.subject,
            content: review.content
          }
        });
      }), 1)
    ]);
  };
  var __vue_staticRenderFns__17 = [];
  __vue_render__17._withStripped = true;
  var __vue_inject_styles__17 = void 0;
  var __vue_scope_id__17 = void 0;
  var __vue_module_identifier__17 = void 0;
  var __vue_is_functional_template__17 = false;
  function __vue_normalize__17(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div>
		<div class="timeline-head">
			<div class="comment-input-wrapper">
				<div class="comment-input-header">
					<span class="text-muted">{{ __('Add your review') }}</span>
					<div class="btn btn-default btn-xs pull-right"
						@click="on_submit_review"
						:disabled="!(user_review.rating && user_review.subject)"
					>
						{{ __('Submit Review') }}
					</div>
				</div>
				<div class="comment-input-container">
					<div class="rating-area text-muted">
						<span>{{ __('Your rating:') }}</span>
						<div
							v-for="i in [1, 2, 3, 4, 5]"
							:key="i"
							:class="['fa fa-fw', user_review.rating < i ? 'fa-star-o' : 'fa-star']"
							:data-index="i"
							@click="set_rating(i)"
						>
						</div>
					</div>
					<div class="comment-input-body margin-top" v-show="user_review.rating">
						<input
							type="text"
							placeholder="Subject"
							class="form-control margin-bottom"
							style="border-color: #ebeff2"
							v-model="user_review.subject"
						>
						<div ref="review-content"></div>
						<div>
							<span class="text-muted text-small">{{ __('Ctrl+Enter to submit') }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="timeline-items">
			<review-timeline-item v-for="review in reviews"
				:key="review.user"
				:username="review.username"
				:avatar="review.user_image"
				:comment_when="when(review.modified)"
				:rating="review.rating"
				:subject="review.subject"
				:content="review.content"
			>
			</review-timeline-item>
		</div>
	</div>
</template>
<script>
import ReviewTimelineItem from '../components/ReviewTimelineItem.vue';

export default {
	props: ['hub_item_name'],
	data() {
		return {
			user_review: {
				rating: 0,
				subject: '',
				content: ''
			},
			reviews: []
		}
	},
	components: {
		ReviewTimelineItem
	},
	created() {
		this.get_item_reviews();
	},
	mounted() {
		this.make_input();
	},
	methods: {
		set_rating(i) {
			this.user_review.rating = i;
		},

		when(datetime) {
			return comment_when(datetime);
		},

		get_item_reviews() {
			hub.call('get_item_reviews', { hub_item_name: this.hub_item_name })
				.then(reviews => {
					this.reviews = reviews;
				})
				.catch(() => {});
		},

		make_input() {
			this.review_content = frappe.ui.form.make_control({
				parent: this.$refs['review-content'],
				on_submit: this.on_submit_review.bind(this),
				no_wrapper: true,
				only_input: true,
				render_input: true,
				df: {
					fieldtype: 'Comment',
					fieldname: 'comment'
				}
			});
		},

		on_submit_review() {
			const review = Object.assign({}, this.user_review, {
				content: this.review_content.get_value()
			});

			if (!hub.is_seller_registered()) {
				frappe.throw(__('You need to login as a Marketplace User before you can add any reviews.'));
			}

			hub.call('add_item_review', {
				hub_item_name: this.hub_item_name,
				review: JSON.stringify(review)
			})
			.then(this.push_review.bind(this));

			this.reset_user_review();
		},

		reset_user_review() {
			this.user_review.rating = 0;
			this.user_review.subject = '';
			this.review_content.set_value('');
		},

		push_review(review){
			this.reviews.unshift(review);
		}
	}
}
</script>`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (false) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  var __vue_component__17 = /* @__PURE__ */ __vue_normalize__17({render: __vue_render__17, staticRenderFns: __vue_staticRenderFns__17}, __vue_inject_styles__17, __vue_script__17, __vue_scope_id__17, __vue_is_functional_template__17, __vue_module_identifier__17, false, void 0, void 0, void 0);
  var ReviewArea_default = __vue_component__17;

  // ../erpnext/erpnext/public/js/hub/components/reviews.js
  function get_rating_html(rating) {
    let rating_html = ``;
    for (var i = 0; i < 5; i++) {
      let star_class = "fa-star";
      if (i >= rating)
        star_class = "fa-star-o";
      rating_html += `<i class='fa fa-fw ${star_class} star-icon' data-index=${i}></i>`;
    }
    return rating_html;
  }

  // ../erpnext/erpnext/public/js/hub/components/edit_details_dialog.js
  function edit_details_dialog(params) {
    let dialog = new frappe.ui.Dialog({
      title: __("Update Details"),
      fields: [
        {
          label: "Item Name",
          fieldname: "item_name",
          fieldtype: "Data",
          default: params.defaults.item_name,
          reqd: 1
        },
        {
          label: "Hub Category",
          fieldname: "hub_category",
          fieldtype: "Autocomplete",
          default: params.defaults.hub_category,
          options: [],
          reqd: 1
        },
        {
          label: "Description",
          fieldname: "description",
          fieldtype: "Text",
          default: params.defaults.description,
          options: [],
          reqd: 1
        }
      ],
      primary_action_label: params.primary_action.label || __("Update Details"),
      primary_action: params.primary_action.fn
    });
    hub.call("get_categories").then((categories) => {
      categories = categories.map((d2) => d2.name);
      dialog.fields_dict.hub_category.set_data(categories);
    });
    return dialog;
  }

  // ../erpnext/erpnext/public/js/hub/pages/Item.vue
  var __vue_script__18 = {
    name: "item-page",
    components: {
      ReviewArea: ReviewArea_default
    },
    data() {
      return {
        page_name: frappe.get_route()[1],
        hub_item_name: frappe.get_route()[2],
        init: true,
        item: null,
        title: null,
        image: null,
        sections: []
      };
    },
    computed: {
      is_own_item() {
        let is_own_item = false;
        if (this.item) {
          if (this.item.hub_seller === hub.settings.hub_seller_name) {
            is_own_item = true;
          }
        }
        return is_own_item;
      },
      menu_items() {
        return [
          {
            label: __("Save Item"),
            condition: hub.is_user_registered() && !this.is_own_item,
            action: this.add_to_saved_items
          },
          {
            label: __("Add to Featured Item"),
            condition: hub.is_user_registered() && this.is_own_item,
            action: this.add_to_featured_items
          },
          {
            label: __("Report this Item"),
            condition: !this.is_own_item,
            action: this.report_item
          },
          {
            label: __("Edit Details"),
            condition: hub.is_user_registered() && this.is_own_item,
            action: this.edit_details
          },
          {
            label: __("Unpublish Item"),
            condition: hub.is_user_registered() && this.is_own_item,
            action: this.unpublish_item
          }
        ];
      },
      item_subtitle() {
        if (!this.item) {
          return "";
        }
        const dot_spacer = '<span aria-hidden="true"> \xB7 </span>';
        let subtitle_items = [comment_when(this.item.creation)];
        const rating = this.item.average_rating;
        if (rating > 0) {
          subtitle_items.push(rating + `<i class='fa fa-fw fa-star-o'></i>`);
        }
        subtitle_items.push({
          value: this.item.company,
          on_click: this.go_to_seller_profile_page
        });
        return subtitle_items;
      },
      item_views_and_ratings() {
        if (!this.item) {
          return "";
        }
        let stats = __("No views yet");
        if (this.item.view_count) {
          const views_message = __("{0} Views", [this.item.view_count]);
          const rating_html = get_rating_html(this.item.average_rating);
          const rating_count = this.item.no_of_ratings > 0 ? __("{0} reviews", [this.item.no_of_ratings]) : __("No reviews yet");
          stats = [views_message, rating_html, rating_count];
        }
        return stats;
      },
      primary_action() {
        if (hub.is_user_registered()) {
          return {
            label: __("Contact Seller"),
            action: this.contact_seller.bind(this)
          };
        } else {
          return void 0;
        }
      }
    },
    created() {
      this.get_item_details();
    },
    mounted() {
      this.item_received.then(() => {
        setTimeout(() => {
          hub.call("add_item_view", {
            hub_item_name: this.hub_item_name
          });
        }, 5e3);
      });
    },
    methods: {
      get_item_details() {
        this.item_received = hub.call("get_item_details", {hub_item_name: this.hub_item_name}).then((item) => {
          this.init = false;
          this.item = item;
          this.build_data();
          this.make_dialogs();
        });
      },
      go_to_seller_profile_page(seller_name) {
        frappe.set_route(`marketplace/seller/${seller_name}`);
      },
      build_data() {
        this.title = this.item.item_name || this.item.name;
        this.image = this.item.image;
        this.sections = [
          {
            title: __("Item Description"),
            content: this.item.description ? __(this.item.description) : __("No description")
          },
          {
            title: __("Seller Information"),
            content: this.item.seller_description ? __(this.item.seller_description) : __("No description")
          }
        ];
      },
      make_dialogs() {
        this.make_contact_seller_dialog();
        this.make_report_item_dialog();
        this.make_editing_dialog();
      },
      add_to_saved_items() {
        hub.call("add_item_to_user_saved_items", {
          hub_item_name: this.hub_item_name,
          hub_user: frappe.session.user
        }).then(() => {
          const saved_items_link = `<b><a href="#marketplace/saved-items">${__("Saved")}</a></b>`;
          frappe.show_alert(saved_items_link);
          erpnext.hub.trigger("action:item_save");
        }).catch((e) => {
          console.error(e);
        });
      },
      add_to_featured_items() {
        hub.call("add_item_to_seller_featured_items", {
          hub_item_name: this.hub_item_name,
          hub_user: frappe.session.user
        }).then(() => {
          const featured_items_link = `<b><a href="#marketplace/featured-items">${__("Added to Featured Items")}</a></b>`;
          frappe.show_alert(featured_items_link);
          erpnext.hub.trigger("action:item_feature");
        }).catch((e) => {
          console.error(e);
        });
      },
      make_contact_seller_dialog() {
        this.contact_seller_dialog = new frappe.ui.Dialog({
          title: __("Send a message"),
          fields: [
            {
              fieldname: "to",
              fieldtype: "Read Only",
              label: __("To"),
              default: this.item.company
            },
            {
              fieldtype: "Text",
              fieldname: "message",
              label: __("Message")
            }
          ],
          primary_action: ({message}) => {
            if (!message)
              return;
            hub.call("send_message", {
              hub_item: this.item.name,
              message
            }).then(() => {
              this.contact_seller_dialog.hide();
              frappe.set_route("marketplace", "buying", this.item.name);
              erpnext.hub.trigger("action:send_message");
            });
          }
        });
      },
      make_report_item_dialog() {
        this.report_item_dialog = new frappe.ui.Dialog({
          title: __("Report Item"),
          fields: [
            {
              label: __("Why do think this Item should be removed?"),
              fieldtype: "Text",
              fieldname: "message"
            }
          ],
          primary_action: ({message}) => {
            hub.call("add_reported_item", {
              hub_item_name: this.item.name,
              message
            }).then(() => {
              d.hide();
              frappe.show_alert(__("Item Reported"));
            });
          }
        });
      },
      make_editing_dialog() {
        this.edit_dialog = edit_details_dialog({
          primary_action: {
            fn: (values) => {
              this.update_details(values);
              this.edit_dialog.hide();
            }
          },
          defaults: {
            item_name: this.item.item_name,
            hub_category: this.item.hub_category,
            description: this.item.description
          }
        });
      },
      update_details(values) {
        frappe.call("erpnext.hub_node.api.update_item", {
          ref_doc: this.item.name,
          data: values
        }).then((r) => {
          return this.get_item_details();
        }).then(() => {
          frappe.show_alert(__("{0} Updated", [this.item.item_name]));
        });
      },
      contact_seller() {
        this.contact_seller_dialog.show();
      },
      report_item() {
        if (!hub.is_seller_registered()) {
          frappe.throw(__("Please login as a Marketplace User to report this item."));
        }
        this.report_item_dialog.show();
      },
      edit_details() {
        if (!hub.is_seller_registered()) {
          frappe.throw(__("Please login as a Marketplace User to edit this item."));
        }
        this.edit_dialog.show();
      },
      unpublish_item() {
        frappe.confirm(__("Unpublish {0}?", [this.item.item_name]), () => {
          frappe.call("erpnext.hub_node.api.unpublish_item", {
            item_code: this.item.item_code,
            hub_item_name: this.hub_item_name
          }).then((r) => {
            frappe.set_route(`marketplace/home`);
            frappe.show_alert(__("Item listing removed"));
          });
        });
      }
    }
  };
  var __vue_render__18 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.init || _vm.item ? _c("div", {
      staticClass: "marketplace-page",
      attrs: {"data-page-name": _vm.page_name}
    }, [
      _c("detail-view", {
        attrs: {
          title: _vm.title,
          image: _vm.image,
          sections: _vm.sections,
          menu_items: _vm.menu_items,
          show_skeleton: _vm.init
        }
      }, [
        _c("detail-header-item", {
          attrs: {slot: "detail-header-item", value: _vm.item_subtitle},
          slot: "detail-header-item"
        }),
        _vm._v(" "),
        _c("detail-header-item", {
          attrs: {
            slot: "detail-header-item",
            value: _vm.item_views_and_ratings
          },
          slot: "detail-header-item"
        }),
        _vm._v(" "),
        _vm.primary_action ? _c("button", {
          staticClass: "btn btn-primary btn-sm margin-top",
          attrs: {slot: "detail-header-item"},
          on: {click: _vm.primary_action.action},
          slot: "detail-header-item"
        }, [_vm._v(_vm._s(_vm.primary_action.label))]) : _vm._e()
      ], 1),
      _vm._v(" "),
      !_vm.init ? _c("review-area", {attrs: {hub_item_name: _vm.hub_item_name}}) : _vm._e()
    ], 1) : _vm._e();
  };
  var __vue_staticRenderFns__18 = [];
  __vue_render__18._withStripped = true;
  var __vue_inject_styles__18 = function(inject) {
    if (!inject)
      return;
    inject("data-v-d9352a26_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "Item.vue"}, media: void 0});
  };
  var __vue_scope_id__18 = "data-v-d9352a26";
  var __vue_module_identifier__18 = void 0;
  var __vue_is_functional_template__18 = false;
  function __vue_normalize__18(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div class="marketplace-page" :data-page-name="page_name" v-if="init || item">
		<detail-view
			:title="title"
			:image="image"
			:sections="sections"
			:menu_items="menu_items"
			:show_skeleton="init"
		>
			<detail-header-item slot="detail-header-item" :value="item_subtitle"></detail-header-item>
			<detail-header-item slot="detail-header-item" :value="item_views_and_ratings"></detail-header-item>

			<button
				v-if="primary_action"
				slot="detail-header-item"
				class="btn btn-primary btn-sm margin-top"
				@click="primary_action.action"
			>{{ primary_action.label }}</button>
		</detail-view>

		<review-area v-if="!init" :hub_item_name="hub_item_name"></review-area>
	</div>
</template>

<script>
import ReviewArea from '../components/ReviewArea.vue';
import { get_rating_html } from '../components/reviews';
import { edit_details_dialog } from '../components/edit_details_dialog';

export default {
	name: 'item-page',
	components: {
		ReviewArea
	},
	data() {
		return {
			page_name: frappe.get_route()[1],
			hub_item_name: frappe.get_route()[2],

			init: true,

			item: null,
			title: null,
			image: null,
			sections: []
		};
	},
	computed: {
		is_own_item() {
			let is_own_item = false;
			if (this.item) {
				if (this.item.hub_seller === hub.settings.hub_seller_name) {
					is_own_item = true;
				}
			}
			return is_own_item;
		},
		menu_items() {
			return [
				{
					label: __('Save Item'),
					condition: hub.is_user_registered() && !this.is_own_item,
					action: this.add_to_saved_items
				},
				{
					label: __('Add to Featured Item'),
					condition: hub.is_user_registered() && this.is_own_item,
					action: this.add_to_featured_items
				},
				{
					label: __('Report this Item'),
					condition: !this.is_own_item,
					action: this.report_item
				},
				{
					label: __('Edit Details'),
					condition: hub.is_user_registered() && this.is_own_item,
					action: this.edit_details
				},
				{
					label: __('Unpublish Item'),
					condition: hub.is_user_registered() && this.is_own_item,
					action: this.unpublish_item
				}
			];
		},

		item_subtitle() {
			if (!this.item) {
				return '';
			}

			const dot_spacer = '<span aria-hidden="true"> \xB7 </span>';
			let subtitle_items = [comment_when(this.item.creation)];
			const rating = this.item.average_rating;

			if (rating > 0) {
				subtitle_items.push(rating + \`<i class='fa fa-fw fa-star-o'></i>\`);
			}

			subtitle_items.push({
				value: this.item.company,
				on_click: this.go_to_seller_profile_page
			});

			return subtitle_items;
		},

		item_views_and_ratings() {
			if (!this.item) {
				return '';
			}

			let stats = __('No views yet');
			if (this.item.view_count) {
				const views_message = __('{0} Views', [this.item.view_count]);

				const rating_html = get_rating_html(this.item.average_rating);
				const rating_count =
					this.item.no_of_ratings > 0
						? __('{0} reviews', [this.item.no_of_ratings])
						: __('No reviews yet');

				stats = [views_message, rating_html, rating_count];
			}

			return stats;
		},

		primary_action() {
			if (hub.is_user_registered()) {
				return {
					label: __('Contact Seller'),
					action: this.contact_seller.bind(this)
				};
			} else {
				return undefined;
			}
		}
	},
	created() {
		this.get_item_details();
	},
	mounted() {
		// To record a single view per session, (later)
		// erpnext.hub.item_view_cache = erpnext.hub.item_view_cache || [];
		// if (erpnext.hub.item_view_cache.includes(this.hub_item_name)) {
		// 	return;
		// }

		this.item_received.then(() => {
			setTimeout(() => {
				hub.call('add_item_view', {
					hub_item_name: this.hub_item_name
				});
				// .then(() => {
				// 	erpnext.hub.item_view_cache.push(this.hub_item_name);
				// });
			}, 5000);
		});
	},
	methods: {
		get_item_details() {
			this.item_received = hub
				.call('get_item_details', { hub_item_name: this.hub_item_name })
				.then(item => {
					this.init = false;
					this.item = item;

					this.build_data();
					this.make_dialogs();
				});
		},
		go_to_seller_profile_page(seller_name) {
			frappe.set_route(\`marketplace/seller/\${seller_name}\`);
		},
		build_data() {
			this.title = this.item.item_name || this.item.name;
			this.image = this.item.image;

			this.sections = [
				{
					title: __('Item Description'),
					content: this.item.description
						? __(this.item.description)
						: __('No description')
				},
				{
					title: __('Seller Information'),
					content: this.item.seller_description
						? __(this.item.seller_description)
						: __('No description')
				}
			];
		},

		make_dialogs() {
			this.make_contact_seller_dialog();
			this.make_report_item_dialog();
			this.make_editing_dialog();
		},

		add_to_saved_items() {
			hub.call('add_item_to_user_saved_items', {
					hub_item_name: this.hub_item_name,
					hub_user: frappe.session.user
				})
				.then(() => {
					const saved_items_link = \`<b><a href="#marketplace/saved-items">\${__('Saved')}</a></b>\`;
					frappe.show_alert(saved_items_link);
					erpnext.hub.trigger('action:item_save');
				})
				.catch(e => {
					console.error(e);
				});
		},

		add_to_featured_items() {
			hub.call('add_item_to_seller_featured_items', {
					hub_item_name: this.hub_item_name,
					hub_user: frappe.session.user
				})
				.then(() => {
					const featured_items_link = \`<b><a href="#marketplace/featured-items">\${__('Added to Featured Items')}</a></b>\`;
					frappe.show_alert(featured_items_link);
					erpnext.hub.trigger('action:item_feature');
				})
				.catch(e => {
					console.error(e);
				});
		},

		make_contact_seller_dialog() {
			this.contact_seller_dialog = new frappe.ui.Dialog({
				title: __('Send a message'),
				fields: [
					{
						fieldname: 'to',
						fieldtype: 'Read Only',
						label: __('To'),
						default: this.item.company
					},
					{
						fieldtype: 'Text',
						fieldname: 'message',
						label: __('Message')
					}
				],
				primary_action: ({ message }) => {
					if (!message) return;

					hub.call('send_message', {
							hub_item: this.item.name,
							message
						})
						.then(() => {
							this.contact_seller_dialog.hide();
							frappe.set_route('marketplace', 'buying', this.item.name);
							erpnext.hub.trigger('action:send_message');
						});
				}
			});
		},

		make_report_item_dialog() {
			this.report_item_dialog = new frappe.ui.Dialog({
				title: __('Report Item'),
				fields: [
					{
						label: __('Why do think this Item should be removed?'),
						fieldtype: 'Text',
						fieldname: 'message'
					}
				],
				primary_action: ({ message }) => {
					hub.call('add_reported_item', {
							hub_item_name: this.item.name,
							message
						})
						.then(() => {
							d.hide();
							frappe.show_alert(__('Item Reported'));
						});
				}
			});
		},

		make_editing_dialog() {
			this.edit_dialog = edit_details_dialog({
				primary_action: {
					fn: values => {
						this.update_details(values);
						this.edit_dialog.hide();
					}
				},
				defaults: {
					item_name: this.item.item_name,
					hub_category: this.item.hub_category,
					description: this.item.description
				}
			});
		},

		update_details(values) {
			frappe.call('erpnext.hub_node.api.update_item', {
					ref_doc: this.item.name,
					data: values
				})
				.then(r => {
					return this.get_item_details();
				})
				.then(() => {
					frappe.show_alert(__('{0} Updated', [this.item.item_name]));
				});
		},

		contact_seller() {
			this.contact_seller_dialog.show();
		},

		report_item() {
			if (!hub.is_seller_registered()) {
				frappe.throw(
					__('Please login as a Marketplace User to report this item.')
				);
			}
			this.report_item_dialog.show();
		},

		edit_details() {
			if (!hub.is_seller_registered()) {
				frappe.throw(
					__('Please login as a Marketplace User to edit this item.')
				);
			}
			this.edit_dialog.show();
		},

		unpublish_item() {
			frappe.confirm(__('Unpublish {0}?', [this.item.item_name]), () => {
				frappe
					.call('erpnext.hub_node.api.unpublish_item', {
						item_code: this.item.item_code,
						hub_item_name: this.hub_item_name
					})
					.then(r => {
						frappe.set_route(\`marketplace/home\`);
						frappe.show_alert(__('Item listing removed'));
					});
			});
		}
	}
};
</script>

<style scoped></style>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__10() {
    const styles = __vue_create_injector__10.styles || (__vue_create_injector__10.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = {ids: [], parts: [], element: void 0});
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__18 = /* @__PURE__ */ __vue_normalize__18({render: __vue_render__18, staticRenderFns: __vue_staticRenderFns__18}, __vue_inject_styles__18, __vue_script__18, __vue_scope_id__18, __vue_is_functional_template__18, __vue_module_identifier__18, false, __vue_create_injector__10, void 0, void 0);
  var Item_default = __vue_component__18;

  // ../erpnext/erpnext/public/js/hub/pages/Seller.vue
  var __vue_script__19 = {
    name: "seller-page",
    components: {
      Rating: Rating_default
    },
    data() {
      return {
        page_name: frappe.get_route()[1],
        seller_company: frappe.get_route()[2],
        hub_seller: null,
        init: true,
        profile: null,
        items: [],
        recent_seller_reviews: [],
        seller_product_view_stats: [],
        seller_traffic_chart: null,
        item_id_fieldname: "name",
        item_container_heading: "Items",
        title: null,
        image: null,
        sections: [],
        country: "",
        site_name: "",
        joined_when: ""
      };
    },
    created() {
      this.get_seller_profile_and_items();
    },
    computed: {
      is_own_company() {
        let is_own_company = false;
        if (this.hub_seller) {
          if (this.hub_seller === hub.settings.hub_seller_name) {
            is_own_company = true;
          }
        }
        return is_own_company;
      }
    },
    methods: {
      comment_when(timestamp) {
        return comment_when(timestamp);
      },
      is_user_registered() {
        return hub.is_user_registered();
      },
      get_seller_profile_and_items() {
        let post_data = {company: this.seller_company};
        if (this.page_name == "profile") {
          this.seller_company = null;
          this.hub_seller = hub.settings.hub_seller_name;
          post_data = {hub_seller: this.hub_seller};
        }
        hub.call("get_hub_seller_page_info", post_data).then((data) => {
          this.init = false;
          this.profile = data.profile;
          this.items = data.items;
          this.item_container_heading = data.is_featured_item ? __("Featured Items") : __("Popular Items");
          this.hub_seller = this.items[0].hub_seller;
          this.recent_seller_reviews = data.recent_seller_reviews;
          this.seller_product_view_stats = data.seller_product_view_stats;
          const profile = this.profile;
          this.title = profile.company;
          this.country = __(profile.country);
          this.site_name = __(profile.site_name);
          this.joined_when = __("Joined {0}", [comment_when(profile.creation)]);
          this.image = profile.logo;
          this.sections = [
            {
              title: __("About the Company"),
              content: profile.company_description ? __(profile.company_description) : __("No description")
            }
          ];
          setTimeout(() => this.init_seller_traffic_chart(), 1);
        });
      },
      go_to_item_details_page(hub_item_name) {
        frappe.set_route(`marketplace/item/${hub_item_name}`);
      },
      go_to_seller_items_page(hub_seller) {
        frappe.set_route(`marketplace/seller/${hub_seller}/items`);
      },
      init_seller_traffic_chart() {
        let lables = [];
        let tooltip_lables = {};
        let datasets = [{name: "Product Views", chartType: "line", values: []}];
        this.seller_product_view_stats.map((stat) => {
          lables.push(stat.date.substring(5));
          tooltip_lables[stat.date.substring(5)] = new Date(stat.date).toDateString();
          datasets[0].values.push(stat.view_count);
        });
        let data = {labels: lables, datasets, tooltip_lables};
        this.seller_traffic_chart = new Chart("#seller_traffic_chart", {
          data,
          title: "Daily Product Views",
          type: "axis-mixed",
          height: 300,
          colors: ["purple", "#ffa3ef", "light-blue"],
          tooltipOptions: {
            formatTooltipX: (d2) => this.seller_traffic_chart.data.tooltip_lables[d2],
            formatTooltipY: (d2) => d2 + " Views"
          }
        });
      }
    }
  };
  var __vue_render__19 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.init || _vm.profile ? _c("div", {
      staticClass: "marketplace-page",
      attrs: {"data-page-name": _vm.page_name}
    }, [
      _c("detail-view", {
        attrs: {
          title: _vm.title,
          image: _vm.image,
          sections: _vm.sections,
          show_skeleton: _vm.init
        }
      }, [
        _c("detail-header-item", {
          attrs: {slot: "detail-header-item", value: _vm.country},
          slot: "detail-header-item"
        }),
        _vm._v(" "),
        _c("detail-header-item", {
          attrs: {slot: "detail-header-item", value: _vm.site_name},
          slot: "detail-header-item"
        }),
        _vm._v(" "),
        _c("detail-header-item", {
          attrs: {slot: "detail-header-item", value: _vm.joined_when},
          slot: "detail-header-item"
        })
      ], 1),
      _vm._v(" "),
      _vm.items.length ? _c("div", [
        _c("h5", [
          _vm._v("\n			" + _vm._s(_vm.item_container_heading) + " \n			"),
          _vm.is_user_registered() && _vm.is_own_company ? _c("small", [
            _c("a", {
              staticClass: "pull-right",
              attrs: {href: "#marketplace/featured-items"}
            }, [_vm._v("Customize your Featured Items")])
          ]) : _vm._e()
        ]),
        _vm._v(" "),
        _c("item-cards-container", {
          attrs: {
            container_name: _vm.item_container_heading,
            items: _vm.items,
            item_id_fieldname: _vm.item_id_fieldname,
            on_click: _vm.go_to_item_details_page
          }
        }),
        _vm._v(" "),
        _c("a", {
          staticClass: "pull-right",
          on: {
            click: function($event) {
              return _vm.go_to_seller_items_page(_vm.seller_company);
            }
          }
        }, [_vm._v("Show all items")])
      ], 1) : _vm._e(),
      _vm._v(" "),
      _vm.recent_seller_reviews.length ? _c("div", [
        _c("h5", [_vm._v("Customer Reviews")]),
        _vm._v(" "),
        _vm._l(_vm.recent_seller_reviews, function(review) {
          return _c("div", {key: review.name, staticClass: "container"}, [
            _c("br"),
            _vm._v(" "),
            _c("span", {staticClass: "text-muted"}, [
              _c("rating", {
                attrs: {rating: review.rating, max_rating: 5}
              })
            ], 1),
            _vm._v(" "),
            _c("i", {
              staticClass: "octicon octicon-quote hidden-xs fa-fw"
            }),
            _vm._v(" "),
            _c("span", {staticClass: "bold"}, [
              _vm._v(_vm._s(review.subject))
            ]),
            _vm._v(" "),
            _c("i", {
              staticClass: "octicon octicon-quote hidden-xs fa-fw fa-rotate-180"
            }),
            _vm._v(" "),
            _c("div", {staticClass: "container"}, [
              _vm._v("\n				by " + _vm._s(review.username) + "\n				"),
              _c("a", {staticClass: "text-muted"}, [
                _c("span", {staticClass: "text-muted hidden-xs"}, [_vm._v("\u2013")]),
                _vm._v(" "),
                _c("span", {
                  staticClass: "hidden-xs",
                  domProps: {
                    innerHTML: _vm._s(_vm.comment_when(review.timestamp))
                  }
                })
              ])
            ])
          ]);
        })
      ], 2) : _vm._e(),
      _vm._v(" "),
      _vm.seller_product_view_stats.length ? _c("div", [
        _c("h5", [_vm._v("Stats")]),
        _vm._v(" "),
        _c("div", {attrs: {id: "seller_traffic_chart"}})
      ]) : _vm._e()
    ], 1) : _vm._e();
  };
  var __vue_staticRenderFns__19 = [];
  __vue_render__19._withStripped = true;
  var __vue_inject_styles__19 = function(inject) {
    if (!inject)
      return;
    inject("data-v-332c93ea_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "Seller.vue"}, media: void 0});
  };
  var __vue_scope_id__19 = "data-v-332c93ea";
  var __vue_module_identifier__19 = void 0;
  var __vue_is_functional_template__19 = false;
  function __vue_normalize__19(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div
		class="marketplace-page"
		:data-page-name="page_name"
		v-if="init || profile"
	>
		<detail-view
			:title="title"
			:image="image"
			:sections="sections"
			:show_skeleton="init"
		>
			<detail-header-item slot="detail-header-item"
				:value="country"
			></detail-header-item>
			<detail-header-item slot="detail-header-item"
				:value="site_name"
			></detail-header-item>
			<detail-header-item slot="detail-header-item"
				:value="joined_when"
			></detail-header-item>

		</detail-view>

		<div v-if="items.length">
			<h5>
				{{ item_container_heading }} 
				<small v-if="is_user_registered() && is_own_company">
					<a class="pull-right" href="#marketplace/featured-items">Customize your Featured Items</a>
				</small>
			</h5>
			<item-cards-container
				:container_name="item_container_heading"
				:items="items"
				:item_id_fieldname="item_id_fieldname"
				:on_click="go_to_item_details_page"
			>
			</item-cards-container>
			<a class="pull-right" @click="go_to_seller_items_page(seller_company)">Show all items</a>
		</div>

		<div v-if="recent_seller_reviews.length">
			<h5>Customer Reviews</h5>
			<div class="container" v-for="review in recent_seller_reviews" :key="review.name">
				<br>
				<span class="text-muted">
					<rating :rating="review.rating" :max_rating="5"></rating>
				</span>
				<i class="octicon octicon-quote hidden-xs fa-fw"></i>
				<span class="bold">{{ review.subject }}</span>
				<i class="octicon octicon-quote hidden-xs fa-fw fa-rotate-180"></i>
				<div class="container">
					by {{ review.username }}
					<a class="text-muted">
						<span class="text-muted hidden-xs">&ndash;</span>
						<span class="hidden-xs" v-html="comment_when(review.timestamp)"></span>
					</a>
				</div>
			</div>
		</div>

		<div v-if="seller_product_view_stats.length">
			<h5>Stats</h5>
			<div id="seller_traffic_chart"></div>
		</div>



	</div>
</template>

<script>
import Rating from '../components/Rating.vue';


export default {
	name: 'seller-page',
	components: {
        Rating
    },
	data() {
		return {
			page_name: frappe.get_route()[1],
			seller_company: frappe.get_route()[2],
			hub_seller: null,

			init: true,

			profile: null,
			items:[],
			recent_seller_reviews: [],
			seller_product_view_stats: [],
			seller_traffic_chart: null,
			item_id_fieldname: 'name',
			item_container_heading: 'Items',

			title: null,
			image: null,
			sections: [],

			country: '',
			site_name: '',
			joined_when: '',
		};
	},
	created() {
		this.get_seller_profile_and_items();
	},
	computed: {
		is_own_company() {
			let is_own_company = false;
			if(this.hub_seller) {
				if(this.hub_seller === hub.settings.hub_seller_name) {
					is_own_company = true;
				}
			}
			return is_own_company;
		},
	},
	methods: {
		comment_when(timestamp){
			return comment_when(timestamp)
		},
		is_user_registered(){
			return hub.is_user_registered()
		},
		get_seller_profile_and_items() {
			let post_data = {company: this.seller_company}
			if (this.page_name == 'profile'){
				this.seller_company = null;
				this.hub_seller = hub.settings.hub_seller_name
				post_data = {hub_seller: this.hub_seller}
			}
			hub.call('get_hub_seller_page_info', post_data)
			.then(data => {
				this.init = false;
				this.profile = data.profile;
				this.items = data.items;
				this.item_container_heading = data.is_featured_item ? __('Featured Items') : __('Popular Items');
				this.hub_seller = this.items[0].hub_seller;
				this.recent_seller_reviews = data.recent_seller_reviews;
				this.seller_product_view_stats = data.seller_product_view_stats;

				const profile = this.profile;

				this.title = profile.company;

				this.country = __(profile.country);
				this.site_name = __(profile.site_name);
				this.joined_when = __('Joined {0}', [comment_when(profile.creation)]);

				this.image = profile.logo;
				this.sections = [
					{
						title: __('About the Company'),
						content: profile.company_description
							? __(profile.company_description)
							: __('No description')
					}
				];

				setTimeout(() => this.init_seller_traffic_chart(), 1);
				
			});
		},

		go_to_item_details_page(hub_item_name) {
			frappe.set_route(\`marketplace/item/\${hub_item_name}\`);
		},
		go_to_seller_items_page(hub_seller) {
			frappe.set_route(\`marketplace/seller/\${hub_seller}/items\`);
		},
		init_seller_traffic_chart() {
			let lables = []
			let tooltip_lables = {}
			let datasets = [{name:"Product Views",chartType: 'line',values: []}]
			this.seller_product_view_stats.map((stat) => {
				lables.push(stat.date.substring(5));
				tooltip_lables[stat.date.substring(5)] = new Date(stat.date).toDateString();
				datasets[0].values.push(stat.view_count);
			});
			let data = {labels: lables, datasets:datasets, tooltip_lables:tooltip_lables}
			this.seller_traffic_chart = new Chart( "#seller_traffic_chart", { // or DOM element
			data: data,

			title: "Daily Product Views",
			type: 'axis-mixed', // or 'bar', 'line', 'pie', 'percentage'
			height: 300,
			colors: ['purple', '#ffa3ef', 'light-blue'],

			tooltipOptions: {
			formatTooltipX: d => this.seller_traffic_chart.data.tooltip_lables[d],
			formatTooltipY: d => d + ' Views',
			}
		});
		}
	}
}
</script>

<style scoped></style>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__11() {
    const styles = __vue_create_injector__11.styles || (__vue_create_injector__11.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = {ids: [], parts: [], element: void 0});
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__19 = /* @__PURE__ */ __vue_normalize__19({render: __vue_render__19, staticRenderFns: __vue_staticRenderFns__19}, __vue_inject_styles__19, __vue_script__19, __vue_scope_id__19, __vue_is_functional_template__19, __vue_module_identifier__19, false, __vue_create_injector__11, void 0, void 0);
  var Seller_default = __vue_component__19;

  // ../erpnext/erpnext/public/js/hub/pages/SellerItems.vue
  var __vue_script__20 = {
    name: "seller-items-page",
    data() {
      return {
        page_name: frappe.get_route()[1],
        seller_company: frappe.get_route()[2],
        init: true,
        items: [],
        item_id_fieldname: "name"
      };
    },
    created() {
      this.get_seller_and_items();
    },
    computed: {
      item_container_heading() {
        return __("Items by " + this.seller_company);
      }
    },
    methods: {
      get_seller_and_items() {
        hub.call("get_items", {company: this.seller_company}).then((data) => {
          this.init = false;
          this.items = data;
        });
      },
      go_to_item_details_page(hub_item_name) {
        frappe.set_route(`marketplace/item/${hub_item_name}`);
      }
    }
  };
  var __vue_render__20 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.init || _vm.items.length ? _c("div", {
      staticClass: "marketplace-page",
      attrs: {"data-page-name": _vm.page_name}
    }, [
      _c("h5", [_vm._v(_vm._s(_vm.item_container_heading))]),
      _vm._v(" "),
      _c("item-cards-container", {
        attrs: {
          container_name: _vm.item_container_heading,
          items: _vm.items,
          item_id_fieldname: _vm.item_id_fieldname,
          on_click: _vm.go_to_item_details_page
        }
      })
    ], 1) : _vm._e();
  };
  var __vue_staticRenderFns__20 = [];
  __vue_render__20._withStripped = true;
  var __vue_inject_styles__20 = function(inject) {
    if (!inject)
      return;
    inject("data-v-abb941d4_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "SellerItems.vue"}, media: void 0});
  };
  var __vue_scope_id__20 = "data-v-abb941d4";
  var __vue_module_identifier__20 = void 0;
  var __vue_is_functional_template__20 = false;
  function __vue_normalize__20(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div
		class="marketplace-page"
		:data-page-name="page_name"
		v-if="init || items.length"
	>
		<h5>{{ item_container_heading }}</h5>
		<item-cards-container
			:container_name="item_container_heading"
			:items="items"
			:item_id_fieldname="item_id_fieldname"
			:on_click="go_to_item_details_page"
		>
		</item-cards-container>
	</div>
</template>

<script>
export default {
	name: 'seller-items-page',
	data() {
		return {
			page_name: frappe.get_route()[1],
			seller_company: frappe.get_route()[2],

			init: true,
			items:[],
			item_id_fieldname: 'name',
		};
	},
	created() {
		this.get_seller_and_items();
	},
	computed: {
		item_container_heading() {
			return __('Items by ' + this.seller_company);
		}
	},
	methods: {
		get_seller_and_items() {
			hub.call(
				'get_items',
				{ company: this.seller_company }
			).then(data => {
				this.init = false;
				this.items = data;
			});
		},

		go_to_item_details_page(hub_item_name) {
			frappe.set_route(\`marketplace/item/\${hub_item_name}\`);
		}
	}
}
</script>

<style scoped></style>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__12() {
    const styles = __vue_create_injector__12.styles || (__vue_create_injector__12.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = {ids: [], parts: [], element: void 0});
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__20 = /* @__PURE__ */ __vue_normalize__20({render: __vue_render__20, staticRenderFns: __vue_staticRenderFns__20}, __vue_inject_styles__20, __vue_script__20, __vue_scope_id__20, __vue_is_functional_template__20, __vue_module_identifier__20, false, __vue_create_injector__12, void 0, void 0);
  var SellerItems_default = __vue_component__20;

  // ../erpnext/erpnext/public/js/hub/components/NotificationMessage.vue
  var __vue_script__21 = {
    name: "notification-message",
    props: {
      message: String
    }
  };
  var __vue_render__21 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.message ? _c("div", {staticClass: "subpage-message"}, [
      _c("p", {staticClass: "text-muted flex"}, [
        _c("span", {domProps: {innerHTML: _vm._s(_vm.message)}}),
        _vm._v(" "),
        _c("i", {
          staticClass: "octicon octicon-x text-extra-muted",
          on: {
            click: function($event) {
              return _vm.$emit("remove-message");
            }
          }
        })
      ])
    ]) : _vm._e();
  };
  var __vue_staticRenderFns__21 = [];
  __vue_render__21._withStripped = true;
  var __vue_inject_styles__21 = function(inject) {
    if (!inject)
      return;
    inject("data-v-0fa51069_0", {source: ".subpage-message p[data-v-0fa51069] {\n  padding: 10px 15px;\n  margin-top: 0px;\n  margin-bottom: 15px;\n  background-color: #f9fbf7;\n  border-radius: 4px;\n  justify-content: space-between;\n}\n.subpage-message .octicon-x[data-v-0fa51069] {\n  cursor: pointer;\n}\n", map: {"version": 3, "sources": ["NotificationMessage.vue"], "names": [], "mappings": "AAAA;EACE,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;EAClB,8BAA8B;AAChC;AACA;EACE,eAAe;AACjB", "file": "NotificationMessage.vue", "sourcesContent": [".subpage-message p {\n  padding: 10px 15px;\n  margin-top: 0px;\n  margin-bottom: 15px;\n  background-color: #f9fbf7;\n  border-radius: 4px;\n  justify-content: space-between;\n}\n.subpage-message .octicon-x {\n  cursor: pointer;\n}\n"]}, media: void 0});
  };
  var __vue_scope_id__21 = "data-v-0fa51069";
  var __vue_module_identifier__21 = void 0;
  var __vue_is_functional_template__21 = false;
  function __vue_normalize__21(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div v-if="message" class="subpage-message">
        <p class="text-muted flex">
            <span v-html="message"></span>
            <i class="octicon octicon-x text-extra-muted"
                @click="$emit('remove-message')"
            >
            </i>
        </p>
    </div>
</template>

<script>

export default {
	name: 'notification-message',
	props: {
		message: String,
    }
}
</script>

<style lang="less" scoped>
    .subpage-message {
		p {
			padding: 10px 15px;
			margin-top: 0px;
			margin-bottom: 15px;
			background-color: #f9fbf7;
			border-radius: 4px;
			justify-content: space-between;
		}

		.octicon-x {
			cursor: pointer;
		}
	}
</style>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__13() {
    const styles = __vue_create_injector__13.styles || (__vue_create_injector__13.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = {ids: [], parts: [], element: void 0});
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__21 = /* @__PURE__ */ __vue_normalize__21({render: __vue_render__21, staticRenderFns: __vue_staticRenderFns__21}, __vue_inject_styles__21, __vue_script__21, __vue_scope_id__21, __vue_is_functional_template__21, __vue_module_identifier__21, false, __vue_create_injector__13, void 0, void 0);
  var NotificationMessage_default = __vue_component__21;

  // ../erpnext/erpnext/public/js/hub/components/item_publish_dialog.js
  function ItemPublishDialog(primary_action, secondary_action) {
    let dialog = new frappe.ui.Dialog({
      title: __("Edit Publishing Details"),
      fields: [
        {
          label: __("Item Code"),
          fieldname: "item_code",
          fieldtype: "Data",
          read_only: 1
        },
        {
          label: __("Hub Category"),
          fieldname: "hub_category",
          fieldtype: "Autocomplete",
          options: [],
          reqd: 1
        },
        {
          label: __("Images"),
          fieldname: "image_list",
          fieldtype: "MultiSelect",
          options: [],
          reqd: 1
        }
      ],
      primary_action_label: primary_action.label || __("Set Details"),
      primary_action: primary_action.fn,
      secondary_action: secondary_action.fn
    });
    hub.call("get_categories").then((categories) => {
      categories = categories.map((d2) => d2.name);
      dialog.fields_dict.hub_category.set_data(categories);
    });
    return dialog;
  }

  // ../erpnext/erpnext/public/js/hub/pages/Publish.vue
  var __vue_script__22 = {
    name: "publish-page",
    components: {
      NotificationMessage: NotificationMessage_default
    },
    data() {
      return {
        page_name: frappe.get_route()[1],
        valid_items: [],
        selected_items: [],
        items_data_to_publish: {},
        search_value: "",
        item_id_fieldname: "item_code",
        page_title: __("Publish Items"),
        search_placeholder: __("Search Items ..."),
        empty_state_message: __("No Items selected yet. Browse and click on items below to publish."),
        valid_items_instruction: __("Only items with an image and description can be published. Please update them if an item in your inventory does not appear."),
        last_sync_message: hub.settings.last_sync_datetime ? __("Last sync was {0}.", [`<a href="#marketplace/profile">${comment_when(hub.settings.last_sync_datetime)}</a>`]) + ` <a href="#marketplace/published-items">${__("See your Published Items.")}</a>` : ""
      };
    },
    computed: {
      no_selected_items() {
        return this.selected_items.length === 0;
      },
      publish_button_text() {
        const number = this.selected_items.length;
        let text = __("Publish");
        if (number === 1) {
          text = __("Publish 1 Item");
        }
        if (number > 1) {
          text = __("Publish {0} Items", [number]);
        }
        return text;
      },
      items_dict() {
        let items_dict = {};
        this.valid_items.map((item) => {
          items_dict[item[this.item_id_fieldname]] = item;
        });
        return items_dict;
      }
    },
    created() {
      this.get_valid_items();
      this.make_publishing_dialog();
    },
    methods: {
      get_valid_items() {
        frappe.call("erpnext.hub_node.api.get_valid_items", {
          search_value: this.search_value
        }).then((r) => {
          this.valid_items = r.message;
        });
      },
      publish_selected_items() {
        frappe.call("erpnext.hub_node.api.publish_selected_items", {
          items_to_publish: this.selected_items
        }).then((r) => {
          this.selected_items = [];
          return frappe.db.get_doc("Marketplace Settings");
        }).then((doc) => {
          hub.settings = doc;
          this.add_last_sync_message();
        });
      },
      add_last_sync_message() {
        this.last_sync_message = __("Last sync was {0}.", [`<a href="#marketplace/profile">${comment_when(hub.settings.last_sync_datetime)}</a>`]) + `<a href="#marketplace/published-items">${__("See your Published Items")}</a>.`;
      },
      clear_last_sync_message() {
        this.last_sync_message = "";
      },
      remove_item_from_selection(item_code) {
        this.selected_items = this.selected_items.filter((item) => item.item_code !== item_code);
      },
      make_publishing_dialog() {
        this.item_publish_dialog = ItemPublishDialog({
          fn: (values) => {
            this.add_item_to_publish(values);
            this.item_publish_dialog.hide();
          }
        }, {
          fn: () => {
            const values = this.item_publish_dialog.get_values(true);
            this.update_items_data_to_publish(values);
          }
        });
      },
      add_item_to_publish(values) {
        this.update_items_data_to_publish(values);
        const item_code = values.item_code;
        let item_doc = this.items_dict[item_code];
        const item_to_publish = Object.assign({}, item_doc, values);
        this.selected_items.push(item_to_publish);
      },
      update_items_data_to_publish(values) {
        this.items_data_to_publish[values.item_code] = values;
      },
      show_publishing_dialog_for_item(item_code) {
        let item_data = this.items_data_to_publish[item_code];
        if (!item_data) {
          item_data = {item_code};
        }
        ;
        this.item_publish_dialog.clear();
        const item_doc = this.items_dict[item_code];
        if (item_doc) {
          this.item_publish_dialog.fields_dict.image_list.set_data(item_doc.attachments.map((attachment) => attachment.file_url));
        }
        this.item_publish_dialog.set_values(item_data);
        this.item_publish_dialog.show();
      }
    }
  };
  var __vue_render__22 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
      staticClass: "marketplace-page",
      attrs: {"data-page-name": _vm.page_name}
    }, [
      _vm.last_sync_message ? _c("notification-message", {
        attrs: {message: _vm.last_sync_message},
        on: {"remove-message": _vm.clear_last_sync_message}
      }) : _vm._e(),
      _vm._v(" "),
      _c("div", {staticClass: "flex justify-between align-flex-end margin-bottom"}, [
        _c("h5", [_vm._v(_vm._s(_vm.page_title))]),
        _vm._v(" "),
        _c("button", {
          staticClass: "btn btn-primary btn-sm publish-items",
          attrs: {disabled: _vm.no_selected_items},
          on: {click: _vm.publish_selected_items}
        }, [_c("span", [_vm._v(_vm._s(_vm.publish_button_text))])])
      ]),
      _vm._v(" "),
      _c("item-cards-container", {
        attrs: {
          container_name: _vm.page_title,
          items: _vm.selected_items,
          item_id_fieldname: _vm.item_id_fieldname,
          is_local: true,
          editable: true,
          empty_state_message: _vm.empty_state_message,
          empty_state_bordered: true,
          empty_state_height: 80
        },
        on: {"remove-item": _vm.remove_item_from_selection}
      }),
      _vm._v(" "),
      _c("p", {staticClass: "text-muted"}, [
        _vm._v(_vm._s(_vm.valid_items_instruction))
      ]),
      _vm._v(" "),
      _c("search-input", {
        attrs: {
          placeholder: _vm.search_placeholder,
          on_search: _vm.get_valid_items
        },
        model: {
          value: _vm.search_value,
          callback: function($$v) {
            _vm.search_value = $$v;
          },
          expression: "search_value"
        }
      }),
      _vm._v(" "),
      _c("item-cards-container", {
        attrs: {
          items: _vm.valid_items,
          item_id_fieldname: _vm.item_id_fieldname,
          is_local: true,
          on_click: _vm.show_publishing_dialog_for_item
        }
      })
    ], 1);
  };
  var __vue_staticRenderFns__22 = [];
  __vue_render__22._withStripped = true;
  var __vue_inject_styles__22 = function(inject) {
    if (!inject)
      return;
    inject("data-v-753fcd0f_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "Publish.vue"}, media: void 0});
  };
  var __vue_scope_id__22 = "data-v-753fcd0f";
  var __vue_module_identifier__22 = void 0;
  var __vue_is_functional_template__22 = false;
  function __vue_normalize__22(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div
		class="marketplace-page"
		:data-page-name="page_name"
	>
		<notification-message
			v-if="last_sync_message"
			:message="last_sync_message"
			@remove-message="clear_last_sync_message"
		></notification-message>

		<div class="flex justify-between align-flex-end margin-bottom">
			<h5>{{ page_title }}</h5>

			<button class="btn btn-primary btn-sm publish-items"
				:disabled="no_selected_items"
				@click="publish_selected_items"
			>
				<span>{{ publish_button_text }}</span>
			</button>
		</div>

		<item-cards-container
			:container_name="page_title"
			:items="selected_items"
			:item_id_fieldname="item_id_fieldname"
			:is_local="true"
			:editable="true"
			@remove-item="remove_item_from_selection"

			:empty_state_message="empty_state_message"
			:empty_state_bordered="true"
			:empty_state_height="80"
		>
		</item-cards-container>

		<p class="text-muted">{{ valid_items_instruction }}</p>

		<search-input
			:placeholder="search_placeholder"
			:on_search="get_valid_items"
			v-model="search_value"
		>
		</search-input>

		<item-cards-container
			:items="valid_items"
			:item_id_fieldname="item_id_fieldname"
			:is_local="true"
			:on_click="show_publishing_dialog_for_item"
		>
		</item-cards-container>
	</div>
</template>

<script>
import NotificationMessage from '../components/NotificationMessage.vue';
import { ItemPublishDialog } from '../components/item_publish_dialog';

export default {
	name: 'publish-page',
	components: {
		NotificationMessage
	},
	data() {
		return {
			page_name: frappe.get_route()[1],
			valid_items: [],
			selected_items: [],
			items_data_to_publish: {},
			search_value: '',
			item_id_fieldname: 'item_code',

			// Constants
			// TODO: multiline translations don't work
			page_title: __('Publish Items'),
			search_placeholder: __('Search Items ...'),
			empty_state_message: __('No Items selected yet. Browse and click on items below to publish.'),
			valid_items_instruction: __('Only items with an image and description can be published. Please update them if an item in your inventory does not appear.'),
			last_sync_message: (hub.settings.last_sync_datetime)
				? __('Last sync was {0}.', [\`<a href="#marketplace/profile">\${comment_when(hub.settings.last_sync_datetime)}</a>\`]) + 
				  \` <a href="#marketplace/published-items">\${__('See your Published Items.')}</a>\`
				: ''
		};
	},
	computed: {
		no_selected_items() {
			return this.selected_items.length === 0;
		},

		publish_button_text() {
			const number = this.selected_items.length;
			let text = __('Publish');
			if(number === 1) {
				text = __('Publish 1 Item');
			}
			if(number > 1) {
				text = __('Publish {0} Items', [number]);
			}
			return text;
		},

		items_dict() {
			let items_dict = {};
			this.valid_items.map(item => {
				items_dict[item[this.item_id_fieldname]] = item
			})

			return items_dict;
		},
	},
	created() {
		this.get_valid_items();
		this.make_publishing_dialog();
	},
	methods: {
		get_valid_items() {
			frappe.call(
				'erpnext.hub_node.api.get_valid_items',
				{
					search_value: this.search_value
				}
			)
			.then((r) => {
				this.valid_items = r.message;
			})
		},

		publish_selected_items() {
			frappe.call(
			'erpnext.hub_node.api.publish_selected_items',
				{
					items_to_publish: this.selected_items
				}
			)
			.then((r) => {
				this.selected_items = [];
				return frappe.db.get_doc('Marketplace Settings');
			})
			.then(doc => {
				hub.settings = doc;
				this.add_last_sync_message();
			});
		},

		add_last_sync_message() {
			this.last_sync_message = __('Last sync was {0}.',
				[\`<a href="#marketplace/profile">\${comment_when(hub.settings.last_sync_datetime)}</a>\`]
			) + \`<a href="#marketplace/published-items">\${__('See your Published Items')}</a>.\`;
		},

		clear_last_sync_message() {
			this.last_sync_message = '';
		},

		remove_item_from_selection(item_code) {
			this.selected_items = this.selected_items
				.filter(item => item.item_code !== item_code);
		},

		make_publishing_dialog() {
			this.item_publish_dialog = ItemPublishDialog(
				{
					fn: (values) => {
						this.add_item_to_publish(values);
						this.item_publish_dialog.hide();
					}
				},
				{
					fn: () => {
						const values = this.item_publish_dialog.get_values(true);
						this.update_items_data_to_publish(values);
					}
				}
			);
		},

		add_item_to_publish(values) {
			this.update_items_data_to_publish(values);

			const item_code  = values.item_code;
			let item_doc = this.items_dict[item_code];

			const item_to_publish = Object.assign({}, item_doc, values);
			this.selected_items.push(item_to_publish);
		},

		update_items_data_to_publish(values) {
			this.items_data_to_publish[values.item_code] = values;
		},

		show_publishing_dialog_for_item(item_code) {
			let item_data = this.items_data_to_publish[item_code];
			if(!item_data) { item_data = { item_code }; };

			this.item_publish_dialog.clear();

			const item_doc = this.items_dict[item_code];
			if(item_doc) {
				this.item_publish_dialog.fields_dict.image_list.set_data(
					item_doc.attachments.map(attachment => attachment.file_url)
				);
			}

			this.item_publish_dialog.set_values(item_data);
			this.item_publish_dialog.show();
		}
	}
}
</script>

<style scoped></style>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__14() {
    const styles = __vue_create_injector__14.styles || (__vue_create_injector__14.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = {ids: [], parts: [], element: void 0});
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__22 = /* @__PURE__ */ __vue_normalize__22({render: __vue_render__22, staticRenderFns: __vue_staticRenderFns__22}, __vue_inject_styles__22, __vue_script__22, __vue_scope_id__22, __vue_is_functional_template__22, __vue_module_identifier__22, false, __vue_create_injector__14, void 0, void 0);
  var Publish_default = __vue_component__22;

  // ../erpnext/erpnext/public/js/hub/components/ItemListCard.vue
  var __vue_script__23 = {
    props: ["item", "message"]
  };
  var __vue_render__23 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {staticClass: "hub-list-item", attrs: {"data-route": _vm.item.route}}, [
      _c("div", {staticClass: "hub-list-left"}, [
        _c("base-image", {
          staticClass: "hub-list-image",
          attrs: {src: _vm.item.image}
        }),
        _vm._v(" "),
        _c("div", {staticClass: "hub-list-body ellipsis"}, [
          _c("div", {staticClass: "hub-list-title"}, [
            _vm._v(_vm._s(_vm.item.item_name))
          ]),
          _vm._v(" "),
          _c("div", {staticClass: "hub-list-subtitle ellipsis"}, [_vm._t("subtitle")], 2)
        ])
      ], 1),
      _vm._v(" "),
      _vm.message ? _c("div", {staticClass: "hub-list-right"}, [
        _c("span", {
          staticClass: "text-muted",
          domProps: {
            innerHTML: _vm._s(_vm.frappe.datetime.comment_when(_vm.message.creation, true))
          }
        })
      ]) : _vm._e()
    ]);
  };
  var __vue_staticRenderFns__23 = [];
  __vue_render__23._withStripped = true;
  var __vue_inject_styles__23 = void 0;
  var __vue_scope_id__23 = void 0;
  var __vue_module_identifier__23 = void 0;
  var __vue_is_functional_template__23 = false;
  function __vue_normalize__23(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div class="hub-list-item" :data-route="item.route">
		<div class="hub-list-left">
			<base-image class="hub-list-image" :src="item.image" />
			<div class="hub-list-body ellipsis">
				<div class="hub-list-title">{{item.item_name}}</div>
				<div class="hub-list-subtitle ellipsis">
					<slot name="subtitle"></slot>
				</div>
			</div>
		</div>
		<div class="hub-list-right" v-if="message">
			<span class="text-muted" v-html="frappe.datetime.comment_when(message.creation, true)" />
		</div>
	</div>
</template>
<script>
export default {
	props: ['item', 'message']
}
</script>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (false) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  var __vue_component__23 = /* @__PURE__ */ __vue_normalize__23({render: __vue_render__23, staticRenderFns: __vue_staticRenderFns__23}, __vue_inject_styles__23, __vue_script__23, __vue_scope_id__23, __vue_is_functional_template__23, __vue_module_identifier__23, false, void 0, void 0, void 0);
  var ItemListCard_default = __vue_component__23;

  // ../erpnext/erpnext/public/js/hub/pages/Buying.vue
  var __vue_script__24 = {
    components: {
      SectionHeader: SectionHeader_default,
      ItemListCard: ItemListCard_default,
      EmptyState: EmptyState_default
    },
    data() {
      return {
        items: null
      };
    },
    created() {
      this.get_items_for_messages().then((items) => {
        this.items = items;
      });
    },
    methods: {
      get_items_for_messages() {
        return hub.call("get_buying_items_for_messages", {}, "action:send_message");
      },
      get_sender(message) {
        return message.sender === frappe.session.user ? __("You") : message.sender_name || message.sender;
      }
    }
  };
  var __vue_render__24 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("section-header", [_c("h4", [_vm._v(_vm._s(_vm.__("Buying")))])]),
      _vm._v(" "),
      _vm.items && _vm.items.length ? _c("div", {staticClass: "row"}, _vm._l(_vm.items, function(item) {
        return _c("div", {key: item.name, staticClass: "col-md-7 margin-bottom"}, [
          _c("item-list-card", {
            directives: [
              {
                name: "route",
                rawName: "v-route",
                value: "marketplace/buying/" + item.name,
                expression: "'marketplace/buying/' + item.name"
              }
            ],
            attrs: {item}
          }, [
            _c("div", {attrs: {slot: "subtitle"}, slot: "subtitle"}, [
              _c("span", [
                _vm._v(_vm._s(_vm.get_sender(item.recent_message)) + ": ")
              ]),
              _vm._v(" "),
              _c("span", [
                _vm._v(_vm._s(_vm._f("striphtml")(item.recent_message.message)))
              ])
            ])
          ])
        ], 1);
      }), 0) : _c("empty-state", {
        attrs: {
          message: _vm.__("This page keeps track of items you want to buy from sellers."),
          centered: false
        }
      })
    ], 1);
  };
  var __vue_staticRenderFns__24 = [];
  __vue_render__24._withStripped = true;
  var __vue_inject_styles__24 = void 0;
  var __vue_scope_id__24 = void 0;
  var __vue_module_identifier__24 = void 0;
  var __vue_is_functional_template__24 = false;
  function __vue_normalize__24(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div>
		<section-header>
			<h4>{{ __('Buying') }}</h4>
		</section-header>
		<div class="row" v-if="items && items.length">
			<div class="col-md-7 margin-bottom"
				v-for="item of items"
				:key="item.name"
			>
				<item-list-card
					:item="item"
					v-route="'marketplace/buying/' + item.name"
				>
					<div slot="subtitle">
						<span>{{ get_sender(item.recent_message) }}: </span>
						<span>{{ item.recent_message.message | striphtml }}</span>
					</div>
				</item-list-card>
			</div>
		</div>
		<empty-state v-else :message="__('This page keeps track of items you want to buy from sellers.')" :centered="false" />
	</div>
</template>
<script>
import EmptyState from '../components/EmptyState.vue';
import SectionHeader from '../components/SectionHeader.vue';
import ItemListCard from '../components/ItemListCard.vue';

export default {
	components: {
		SectionHeader,
		ItemListCard,
		EmptyState
	},
	data() {
		return {
			items: null
		}
	},
	created() {
		this.get_items_for_messages()
			.then(items => {
				this.items = items;
			});
	},
	methods: {
		get_items_for_messages() {
			return hub.call('get_buying_items_for_messages', {}, 'action:send_message');
		},
		get_sender(message) {
			return message.sender === frappe.session.user ? __('You') : (message.sender_name || message.sender);
		}
	}
}
</script>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (false) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  var __vue_component__24 = /* @__PURE__ */ __vue_normalize__24({render: __vue_render__24, staticRenderFns: __vue_staticRenderFns__24}, __vue_inject_styles__24, __vue_script__24, __vue_scope_id__24, __vue_is_functional_template__24, __vue_module_identifier__24, false, void 0, void 0, void 0);
  var Buying_default = __vue_component__24;

  // ../erpnext/erpnext/public/js/hub/pages/Selling.vue
  var __vue_script__25 = {
    components: {
      SectionHeader: SectionHeader_default,
      ItemListCard: ItemListCard_default,
      EmptyState: EmptyState_default
    },
    data() {
      return {
        items: null
      };
    },
    created() {
      this.get_items_for_messages().then((items) => {
        this.items = items;
      });
    },
    methods: {
      get_items_for_messages() {
        return hub.call("get_selling_items_for_messages");
      }
    }
  };
  var __vue_render__25 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("section-header", [_c("h4", [_vm._v(_vm._s(_vm.__("Selling")))])]),
      _vm._v(" "),
      _vm.items && _vm.items.length ? _c("div", {staticClass: "row"}, _vm._l(_vm.items, function(item) {
        return _c("div", {
          key: item.name,
          staticClass: "col-md-7",
          staticStyle: {"margin-bottom": "30px"}
        }, [
          _c("item-list-card", {attrs: {item}}, [
            _c("div", {attrs: {slot: "subtitle"}, slot: "subtitle"}, [
              _c("span", {staticClass: "text-muted"}, [
                _vm._v(_vm._s(_vm.__("{0} conversations", [
                  item.received_messages.length
                ])))
              ])
            ])
          ]),
          _vm._v(" "),
          _vm._l(item.received_messages, function(message, index) {
            return _c("div", {
              directives: [
                {
                  name: "route",
                  rawName: "v-route",
                  value: "marketplace/selling/" + message.buyer + "/" + item.name,
                  expression: "'marketplace/selling/' + message.buyer + '/' + item.name"
                }
              ],
              key: index,
              staticClass: "hub-list-item"
            }, [
              _c("div", {staticClass: "hub-list-left"}, [
                _c("div", {staticClass: "hub-list-body"}, [
                  _c("div", {staticClass: "hub-list-title"}, [
                    _vm._v("\n							" + _vm._s(message.buyer_name) + "\n						")
                  ]),
                  _vm._v(" "),
                  _c("div", {staticClass: "hub-list-subtitle"}, [
                    _vm._v("\n							" + _vm._s(message.sender) + ": " + _vm._s(_vm._f("striphtml")(message.message)) + "\n						")
                  ])
                ])
              ])
            ]);
          })
        ], 2);
      }), 0) : _c("empty-state", {
        attrs: {
          message: _vm.__("This page keeps track of your items in which buyers have showed some interest."),
          centered: false
        }
      })
    ], 1);
  };
  var __vue_staticRenderFns__25 = [];
  __vue_render__25._withStripped = true;
  var __vue_inject_styles__25 = void 0;
  var __vue_scope_id__25 = void 0;
  var __vue_module_identifier__25 = void 0;
  var __vue_is_functional_template__25 = false;
  function __vue_normalize__25(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div>
		<section-header>
			<h4>{{ __('Selling') }}</h4>
		</section-header>
		<div class="row" v-if="items && items.length">
			<div class="col-md-7"
				style="margin-bottom: 30px;"
				v-for="item of items"
				:key="item.name"
			>
				<item-list-card
					:item="item"
				>
					<div slot="subtitle">
						<span class="text-muted">{{ __('{0} conversations', [item.received_messages.length]) }}</span>
					</div>
				</item-list-card>
				<div class="hub-list-item" v-for="(message, index) in item.received_messages" :key="index"
					v-route="'marketplace/selling/' + message.buyer + '/' + item.name"
				>
					<div class="hub-list-left">
						<div class="hub-list-body">
							<div class="hub-list-title">
								{{ message.buyer_name }}
							</div>
							<div class="hub-list-subtitle">
								{{ message.sender }}: {{ message.message | striphtml }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<empty-state v-else :message="__('This page keeps track of your items in which buyers have showed some interest.')" :centered="false" />
	</div>
</template>
<script>
import EmptyState from '../components/EmptyState.vue';
import SectionHeader from '../components/SectionHeader.vue';
import ItemListCard from '../components/ItemListCard.vue';

export default {
	components: {
		SectionHeader,
		ItemListCard,
		EmptyState
	},
	data() {
		return {
			items: null
		}
	},
	created() {
		this.get_items_for_messages()
			.then(items => {
				this.items = items;
			});
	},
	methods: {
		get_items_for_messages() {
			return hub.call('get_selling_items_for_messages');
		}
	}
}
</script>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (false) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  var __vue_component__25 = /* @__PURE__ */ __vue_normalize__25({render: __vue_render__25, staticRenderFns: __vue_staticRenderFns__25}, __vue_inject_styles__25, __vue_script__25, __vue_scope_id__25, __vue_is_functional_template__25, __vue_module_identifier__25, false, void 0, void 0, void 0);
  var Selling_default = __vue_component__25;

  // ../erpnext/erpnext/public/js/hub/components/CommentInput.vue
  var __vue_script__26 = {
    mounted() {
      this.make_input();
    },
    methods: {
      make_input() {
        this.message_input = frappe.ui.form.make_control({
          parent: this.$refs["comment-input"],
          on_submit: (message) => {
            this.message_input.reset();
            this.$emit("change", message);
          },
          only_input: true,
          no_wrapper: true
        });
      },
      submit_input() {
        if (!this.message_input)
          return;
        const value = this.message_input.get_value();
        if (!value)
          return;
        this.message_input.submit();
      }
    }
  };
  var __vue_render__26 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("div", {ref: "comment-input"}),
      _vm._v(" "),
      _c("div", {staticClass: "level"}, [
        _c("div", {staticClass: "level-left"}, [
          _c("span", {staticClass: "text-muted"}, [
            _vm._v(_vm._s(_vm.__("Ctrl + Enter to submit")))
          ])
        ]),
        _vm._v(" "),
        _c("div", {staticClass: "level-right"}, [
          _c("button", {
            staticClass: "btn btn-primary btn-xs",
            on: {click: _vm.submit_input}
          }, [_vm._v(_vm._s(_vm.__("Submit")))])
        ])
      ])
    ]);
  };
  var __vue_staticRenderFns__26 = [];
  __vue_render__26._withStripped = true;
  var __vue_inject_styles__26 = void 0;
  var __vue_scope_id__26 = void 0;
  var __vue_module_identifier__26 = void 0;
  var __vue_is_functional_template__26 = false;
  function __vue_normalize__26(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div>
		<div ref="comment-input"></div>
		<div class="level">
			<div class="level-left">
				<span class="text-muted">{{ __('Ctrl + Enter to submit') }}</span>
			</div>
			<div class="level-right">
				<button class="btn btn-primary btn-xs" @click="submit_input">{{ __('Submit') }}</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	mounted() {
		this.make_input();
	},
	methods: {
		make_input() {
			this.message_input = frappe.ui.form.make_control({
				parent: this.$refs['comment-input'],
				on_submit: (message) => {
					this.message_input.reset();
					this.$emit('change', message);
				},
				only_input: true,
				no_wrapper: true
			});
		},
		submit_input() {
			if (!this.message_input) return;
			const value = this.message_input.get_value();
			if (!value) return;
			this.message_input.submit();
		}
	}
}
</script>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (false) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  var __vue_component__26 = /* @__PURE__ */ __vue_normalize__26({render: __vue_render__26, staticRenderFns: __vue_staticRenderFns__26}, __vue_inject_styles__26, __vue_script__26, __vue_scope_id__26, __vue_is_functional_template__26, __vue_module_identifier__26, false, void 0, void 0, void 0);
  var CommentInput_default = __vue_component__26;

  // ../erpnext/erpnext/public/js/hub/pages/Messages.vue
  var __vue_script__27 = {
    components: {
      CommentInput: CommentInput_default,
      ItemListCard: ItemListCard_default
    },
    data() {
      return {
        message_type: frappe.get_route()[1],
        item_details: null,
        messages: []
      };
    },
    created() {
      const hub_item_name = this.get_hub_item_name();
      this.get_item_details(hub_item_name).then((item_details) => {
        this.item_details = item_details;
        this.get_messages().then((messages) => {
          this.messages = messages;
        });
      });
    },
    computed: {
      back_link() {
        return "marketplace/" + this.message_type;
      }
    },
    methods: {
      send_message(message) {
        this.messages.push({
          sender: frappe.session.user,
          message,
          creation: Date.now(),
          name: frappe.utils.get_random(6)
        });
        hub.call("send_message", {
          to_seller: this.get_against_seller(),
          hub_item: this.item_details.name,
          message
        });
      },
      get_item_details(hub_item_name) {
        return hub.call("get_item_details", {hub_item_name});
      },
      get_messages() {
        if (!this.item_details)
          return [];
        return hub.call("get_messages", {
          against_seller: this.get_against_seller(),
          against_item: this.item_details.name
        });
      },
      get_against_seller() {
        if (this.message_type === "buying") {
          return this.item_details.hub_seller;
        } else if (this.message_type === "selling") {
          return frappe.get_route()[2];
        }
      },
      get_hub_item_name() {
        if (this.message_type === "buying") {
          return frappe.get_route()[2];
        } else if (this.message_type === "selling") {
          return frappe.get_route()[3];
        }
      }
    }
  };
  var __vue_render__27 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.item_details ? _c("div", [
      _c("div", [
        _c("a", {
          directives: [
            {
              name: "route",
              rawName: "v-route",
              value: _vm.back_link,
              expression: "back_link"
            }
          ],
          staticClass: "text-muted"
        }, [_vm._v("\u2190 " + _vm._s(_vm.__("Back to Messages")))])
      ]),
      _vm._v(" "),
      _c("section-header", [
        _c("div", {staticClass: "flex flex-column margin-bottom"}, [
          _c("h4", [_vm._v(_vm._s(_vm.item_details.item_name))]),
          _vm._v(" "),
          _c("span", {staticClass: "text-muted"}, [
            _vm._v(_vm._s(_vm.item_details.company))
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", {staticClass: "row"}, [
        _c("div", {staticClass: "col-md-7"}, [
          _c("div", {staticClass: "message-container"}, [
            _c("div", {staticClass: "message-list"}, _vm._l(_vm.messages, function(message) {
              return _c("div", {key: message.name, staticClass: "level margin-bottom"}, [
                _c("div", {
                  staticClass: "level-left ellipsis",
                  staticStyle: {width: "80%"}
                }, [
                  _c("div", {
                    domProps: {
                      innerHTML: _vm._s(_vm.frappe.avatar(message.sender))
                    }
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticStyle: {"white-space": "normal"},
                    domProps: {innerHTML: _vm._s(message.message)}
                  })
                ]),
                _vm._v(" "),
                _c("div", {
                  staticClass: "level-right text-muted",
                  domProps: {
                    innerHTML: _vm._s(_vm.frappe.datetime.comment_when(message.creation, true))
                  }
                })
              ]);
            }), 0),
            _vm._v(" "),
            _c("div", {staticClass: "message-input"}, [_c("comment-input", {on: {change: _vm.send_message}})], 1)
          ])
        ])
      ])
    ], 1) : _vm._e();
  };
  var __vue_staticRenderFns__27 = [];
  __vue_render__27._withStripped = true;
  var __vue_inject_styles__27 = void 0;
  var __vue_scope_id__27 = void 0;
  var __vue_module_identifier__27 = void 0;
  var __vue_is_functional_template__27 = false;
  function __vue_normalize__27(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div v-if="item_details">
		<div>
			<a class="text-muted" v-route="back_link">\u2190 {{ __('Back to Messages') }}</a>
		</div>
		<section-header>
			<div class="flex flex-column margin-bottom">
				<h4>{{ item_details.item_name }}</h4>
				<span class="text-muted">{{ item_details.company }}</span>
			</div>
		</section-header>
		<div class="row">
			<div class="col-md-7">
				<div class="message-container">
					<div class="message-list">
						<div class="level margin-bottom" v-for="message in messages" :key="message.name">
							<div class="level-left ellipsis" style="width: 80%;">
								<div v-html="frappe.avatar(message.sender)" />
								<div style="white-space: normal;" v-html="message.message" />
							</div>
							<div class="level-right text-muted" v-html="frappe.datetime.comment_when(message.creation, true)" />
						</div>
					</div>
					<div class="message-input">
						<comment-input @change="send_message" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import CommentInput from '../components/CommentInput.vue';
import ItemListCard from '../components/ItemListCard.vue';

export default {
	components: {
		CommentInput,
		ItemListCard
	},
	data() {
		return {
			message_type: frappe.get_route()[1],
			item_details: null,
			messages: []
		}
	},
	created() {
		const hub_item_name = this.get_hub_item_name();
		this.get_item_details(hub_item_name)
			.then(item_details => {
				this.item_details = item_details;
				this.get_messages()
					.then(messages => {
						this.messages = messages;
					});
			});
	},
	computed: {
		back_link() {
			return 'marketplace/' + this.message_type;
		}
	},
	methods: {
		send_message(message) {
			this.messages.push({
				sender: frappe.session.user,
				message: message,
				creation: Date.now(),
				name: frappe.utils.get_random(6)
			});
			hub.call('send_message', {
				to_seller: this.get_against_seller(),
				hub_item: this.item_details.name,
				message
			});
		},
		get_item_details(hub_item_name) {
			return hub.call('get_item_details', { hub_item_name })
		},
		get_messages() {
			if (!this.item_details) return [];
			return hub.call('get_messages', {
				against_seller: this.get_against_seller(),
				against_item: this.item_details.name
			});
		},
		get_against_seller() {
			if (this.message_type === 'buying') {
				return this.item_details.hub_seller;
			} else if (this.message_type === 'selling') {
				return frappe.get_route()[2];
			}
		},
		get_hub_item_name() {
			if (this.message_type === 'buying') {
				return frappe.get_route()[2];
			} else if (this.message_type === 'selling') {
				return frappe.get_route()[3];
			}
		}
	}
}
</script>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (false) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  var __vue_component__27 = /* @__PURE__ */ __vue_normalize__27({render: __vue_render__27, staticRenderFns: __vue_staticRenderFns__27}, __vue_inject_styles__27, __vue_script__27, __vue_scope_id__27, __vue_is_functional_template__27, __vue_module_identifier__27, false, void 0, void 0, void 0);
  var Messages_default = __vue_component__27;

  // ../erpnext/erpnext/public/js/hub/pages/NotFound.vue
  var __vue_script__28 = {
    name: "not-found-page",
    data() {
      return {
        page_name: "not-found",
        action: {
          label: __("Back to Home"),
          on_click: () => {
            frappe.set_route(`marketplace/home`);
          }
        },
        empty_state_message: __("Sorry! We could not find what you were looking for.")
      };
    }
  };
  var __vue_render__28 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
      staticClass: "marketplace-page",
      attrs: {"data-page-name": _vm.page_name}
    }, [
      _c("empty-state", {
        attrs: {
          message: _vm.empty_state_message,
          height: 500,
          action: _vm.action
        }
      })
    ], 1);
  };
  var __vue_staticRenderFns__28 = [];
  __vue_render__28._withStripped = true;
  var __vue_inject_styles__28 = function(inject) {
    if (!inject)
      return;
    inject("data-v-8a430b94_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "NotFound.vue"}, media: void 0});
  };
  var __vue_scope_id__28 = "data-v-8a430b94";
  var __vue_module_identifier__28 = void 0;
  var __vue_is_functional_template__28 = false;
  function __vue_normalize__28(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div
		class="marketplace-page"
		:data-page-name="page_name"
	>
		<empty-state
			:message="empty_state_message"
			:height="500"
			:action="action"
		>
		</empty-state>

	</div>
</template>

<script>
export default {
	name: 'not-found-page',
	data() {
		return {
			page_name: 'not-found',
			action: {
				label: __('Back to Home'),
				on_click: () => {
					frappe.set_route(\`marketplace/home\`);
				}
			},

			// Constants
			empty_state_message: __('Sorry! We could not find what you were looking for.')
		};
	},
}
</script>

<style scoped></style>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__15() {
    const styles = __vue_create_injector__15.styles || (__vue_create_injector__15.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = {ids: [], parts: [], element: void 0});
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__28 = /* @__PURE__ */ __vue_normalize__28({render: __vue_render__28, staticRenderFns: __vue_staticRenderFns__28}, __vue_inject_styles__28, __vue_script__28, __vue_scope_id__28, __vue_is_functional_template__28, __vue_module_identifier__28, false, __vue_create_injector__15, void 0, void 0);
  var NotFound_default = __vue_component__28;

  // ../erpnext/erpnext/public/js/hub/PageContainer.vue
  function get_route_map() {
    const read_only_routes = {
      "marketplace/home": Home_default,
      "marketplace/search/:category/:keyword": Search_default,
      "marketplace/category/:category": Category_default,
      "marketplace/item/:item": Item_default,
      "marketplace/seller/:seller": Seller_default,
      "marketplace/seller/:seller/items": SellerItems_default,
      "marketplace/not-found": NotFound_default
    };
    const registered_routes = {
      "marketplace/profile": Seller_default,
      "marketplace/saved-items": SavedItems_default,
      "marketplace/featured-items": FeaturedItems_default,
      "marketplace/publish": Publish_default,
      "marketplace/published-items": PublishedItems_default,
      "marketplace/buying": Buying_default,
      "marketplace/buying/:item": Messages_default,
      "marketplace/selling": Selling_default,
      "marketplace/selling/:buyer/:item": Messages_default
    };
    return hub.is_seller_registered() ? Object.assign({}, read_only_routes, registered_routes) : read_only_routes;
  }
  var __vue_script__29 = {
    data() {
      return {
        current_page: this.get_current_page()
      };
    },
    mounted() {
      frappe.route.on("change", () => {
        if (frappe.get_route()[0] === "marketplace") {
          this.set_current_page();
          frappe.utils.scroll_to(0);
        }
      });
    },
    methods: {
      set_current_page() {
        this.current_page = this.get_current_page();
      },
      get_current_page() {
        const route_map = get_route_map();
        const curr_route = frappe.get_route_str();
        let route = Object.keys(route_map).filter((route2) => route2 == curr_route)[0];
        if (!route) {
          const curr_route_parts = curr_route.split("/");
          const weighted_routes = Object.keys(route_map).map((route_str) => route_str.split("/")).filter((route_parts) => route_parts.length === curr_route_parts.length).reduce((obj, route_parts) => {
            const key = route_parts.join("/");
            let weight = 0;
            route_parts.forEach((part, i) => {
              const curr_route_part = curr_route_parts[i];
              if (part === curr_route_part || part.includes(":")) {
                weight += 1;
              }
            });
            obj[key] = weight;
            return obj;
          }, {});
          for (let key in weighted_routes) {
            const route_weight = weighted_routes[key];
            if (route_weight === curr_route_parts.length) {
              route = key;
              break;
            } else {
              route = null;
            }
          }
        }
        if (!route) {
          return {
            key: "not-found",
            component: NotFound_default
          };
        }
        return {
          key: curr_route,
          component: route_map[route]
        };
      }
    }
  };
  var __vue_render__29 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {staticClass: "hub-page-container"}, [
      _c(_vm.current_page.component, {
        key: _vm.current_page.key,
        tag: "component"
      })
    ], 1);
  };
  var __vue_staticRenderFns__29 = [];
  __vue_render__29._withStripped = true;
  var __vue_inject_styles__29 = void 0;
  var __vue_scope_id__29 = void 0;
  var __vue_module_identifier__29 = void 0;
  var __vue_is_functional_template__29 = false;
  function __vue_normalize__29(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div class="hub-page-container">
		<component :is="current_page.component" :key="current_page.key"></component>
	</div>
</template>

<script>

import Home from './pages/Home.vue';
import Search from './pages/Search.vue';
import Category from './pages/Category.vue';
import SavedItems from './pages/SavedItems.vue';
import FeaturedItems from './pages/FeaturedItems.vue';
import PublishedItems from './pages/PublishedItems.vue';
import Item from './pages/Item.vue';
import Seller from './pages/Seller.vue';
import SellerItems from './pages/SellerItems.vue';
import Publish from './pages/Publish.vue';
import Buying from './pages/Buying.vue';
import Selling from './pages/Selling.vue';
import Messages from './pages/Messages.vue';
import NotFound from './pages/NotFound.vue';

function get_route_map() {
	const read_only_routes = {
		'marketplace/home': Home,
		'marketplace/search/:category/:keyword': Search,
		'marketplace/category/:category': Category,
		'marketplace/item/:item': Item,
		'marketplace/seller/:seller': Seller,
		'marketplace/seller/:seller/items': SellerItems,
		'marketplace/not-found': NotFound,
	}
	const registered_routes = {
		'marketplace/profile': Seller,
		'marketplace/saved-items': SavedItems,
		'marketplace/featured-items': FeaturedItems,
		'marketplace/publish': Publish,
		'marketplace/published-items': PublishedItems,
		'marketplace/buying': Buying,
		'marketplace/buying/:item': Messages,
		'marketplace/selling': Selling,
		'marketplace/selling/:buyer/:item': Messages
	}

	return hub.is_seller_registered()
		? Object.assign({}, read_only_routes, registered_routes)
		: read_only_routes;
}

export default {
	data() {
		return {
			current_page: this.get_current_page()
		}
	},
	mounted() {
		frappe.route.on('change', () => {
			if (frappe.get_route()[0] === 'marketplace') {
				this.set_current_page();
				frappe.utils.scroll_to(0);
			}
		});
	},
	methods: {
		set_current_page() {
			this.current_page = this.get_current_page();
		},
		get_current_page() {
			const route_map = get_route_map();
			const curr_route = frappe.get_route_str();
			let route = Object.keys(route_map).filter(route => route == curr_route)[0];
			if (!route) {
				// find route by matching it with dynamic part
				const curr_route_parts = curr_route.split('/');
				const weighted_routes = Object.keys(route_map)
					.map(route_str => route_str.split('/'))
					.filter(route_parts => route_parts.length === curr_route_parts.length)
					.reduce((obj, route_parts) => {
						const key = route_parts.join('/');
						let weight = 0;
						route_parts.forEach((part, i) => {
							const curr_route_part = curr_route_parts[i];
							if (part === curr_route_part || part.includes(':')) {
								weight += 1;
							}
						});

						obj[key] = weight;
						return obj;
					}, {});

				// get the route with the highest weight
				for (let key in weighted_routes) {
					const route_weight = weighted_routes[key];
					if (route_weight === curr_route_parts.length) {
						route = key;
						break;
					} else {
						route = null;
					}
				}
			}

			if (!route) {
				return {
					key: 'not-found',
					component: NotFound
				};
			}

			return {
				key: curr_route,
				component: route_map[route]
			}
		}
	}
}
</script>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (false) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  var __vue_component__29 = /* @__PURE__ */ __vue_normalize__29({render: __vue_render__29, staticRenderFns: __vue_staticRenderFns__29}, __vue_inject_styles__29, __vue_script__29, __vue_scope_id__29, __vue_is_functional_template__29, __vue_module_identifier__29, false, void 0, void 0, void 0);
  var PageContainer_default = __vue_component__29;

  // ../erpnext/erpnext/public/js/hub/Sidebar.vue
  var __vue_script__30 = {
    data() {
      return {
        hub_registered: hub.is_user_registered(),
        items: [
          {
            label: __("Browse"),
            route: "marketplace/home"
          },
          {
            label: __("Saved Items"),
            route: "marketplace/saved-items",
            condition: () => this.hub_registered
          },
          {
            label: __("Your Featured Items"),
            route: "marketplace/featured-items",
            condition: () => this.hub_registered
          },
          {
            label: __("Your Profile"),
            route: "marketplace/profile",
            condition: () => this.hub_registered
          },
          {
            label: __("Your Items"),
            route: "marketplace/published-items",
            condition: () => this.hub_registered
          },
          {
            label: __("Publish Items"),
            route: "marketplace/publish",
            condition: () => this.hub_registered
          },
          {
            label: __("Selling"),
            route: "marketplace/selling",
            condition: () => this.hub_registered
          },
          {
            label: __("Buying"),
            route: "marketplace/buying",
            condition: () => this.hub_registered
          }
        ],
        categories: []
      };
    },
    created() {
      this.get_categories().then((categories) => {
        this.categories = categories.map((c) => {
          return {
            label: __(c.name),
            route: "marketplace/category/" + c.name
          };
        });
        this.categories.unshift({
          label: __("All"),
          route: "marketplace/home"
        });
        this.$nextTick(() => {
          this.update_sidebar_state();
        });
      });
      erpnext.hub.on("seller-registered", () => {
        this.hub_registered = true;
      });
    },
    mounted() {
      this.update_sidebar_state();
      frappe.route.on("change", () => this.update_sidebar_state());
    },
    methods: {
      get_categories() {
        return hub.call("get_categories");
      },
      update_sidebar_state() {
        const container = $(this.$refs["sidebar-container"]);
        const route = frappe.get_route();
        const route_str = route.join("/");
        const part_route_str = route.slice(0, 2).join("/");
        const $sidebar_item = container.find(`[data-route="${route_str}"], [data-route="${part_route_str}"]`);
        const $siblings = container.find("[data-route]");
        $siblings.removeClass("active").addClass("text-muted");
        $sidebar_item.addClass("active").removeClass("text-muted");
      }
    }
  };
  var __vue_render__30 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {ref: "sidebar-container"}, [
      _c("ul", {
        staticClass: "list-unstyled hub-sidebar-group",
        attrs: {"data-nav-buttons": ""}
      }, _vm._l(_vm.items, function(item) {
        return _c("li", {
          directives: [
            {
              name: "route",
              rawName: "v-route",
              value: item.route,
              expression: "item.route"
            },
            {
              name: "show",
              rawName: "v-show",
              value: item.condition === void 0 || item.condition(),
              expression: "item.condition === undefined || item.condition()"
            }
          ],
          key: item.label,
          staticClass: "hub-sidebar-item"
        }, [_vm._v("\n			" + _vm._s(item.label) + "\n		")]);
      }), 0),
      _vm._v(" "),
      _c("ul", {
        staticClass: "list-unstyled hub-sidebar-group",
        attrs: {"data-categories": ""}
      }, [
        _c("li", {staticClass: "hub-sidebar-item is-title bold text-muted"}, [
          _vm._v("\n			" + _vm._s(_vm.__("Categories")) + "\n		")
        ]),
        _vm._v(" "),
        _vm._l(_vm.categories, function(category) {
          return _c("li", {
            directives: [
              {
                name: "route",
                rawName: "v-route",
                value: category.route,
                expression: "category.route"
              }
            ],
            key: category.label,
            staticClass: "hub-sidebar-item"
          }, [_vm._v("\n			" + _vm._s(category.label) + "\n		")]);
        })
      ], 2)
    ]);
  };
  var __vue_staticRenderFns__30 = [];
  __vue_render__30._withStripped = true;
  var __vue_inject_styles__30 = void 0;
  var __vue_scope_id__30 = void 0;
  var __vue_module_identifier__30 = void 0;
  var __vue_is_functional_template__30 = false;
  function __vue_normalize__30(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div ref="sidebar-container">
		<ul class="list-unstyled hub-sidebar-group" data-nav-buttons>
			<li class="hub-sidebar-item" v-for="item in items" :key="item.label" v-route="item.route" v-show="item.condition === undefined || item.condition()">
				{{ item.label }}
			</li>
		</ul>
		<ul class="list-unstyled hub-sidebar-group" data-categories>
			<li class="hub-sidebar-item is-title bold text-muted">
				{{ __('Categories') }}
			</li>
			<li class="hub-sidebar-item" v-for="category in categories" :key="category.label" v-route="category.route">
				{{ category.label }}
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	data() {
		return {
			hub_registered: hub.is_user_registered(),
			items: [
				{
					label: __('Browse'),
					route: 'marketplace/home'
				},
				{
					label: __('Saved Items'),
					route: 'marketplace/saved-items',
					condition: () => this.hub_registered
				},
				{
					label: __('Your Featured Items'),
					route: 'marketplace/featured-items',
					condition: () => this.hub_registered
				},
				{
					label: __('Your Profile'),
					route: 'marketplace/profile',
					condition: () => this.hub_registered
				},
				{
					label: __('Your Items'),
					route: 'marketplace/published-items',
					condition: () => this.hub_registered
				},
				{
					label: __('Publish Items'),
					route: 'marketplace/publish',
					condition: () => this.hub_registered
				},
				{
					label: __('Selling'),
					route: 'marketplace/selling',
					condition: () => this.hub_registered
				},
				{
					label: __('Buying'),
					route: 'marketplace/buying',
					condition: () => this.hub_registered
				},
			],
			categories: []
		}
	},
	created() {
		this.get_categories()
			.then(categories => {
				this.categories = categories.map(c => {
					return {
						label: __(c.name),
						route: 'marketplace/category/' + c.name
					}
				});
				this.categories.unshift({
					label: __('All'),
					route: 'marketplace/home'
				});
				this.$nextTick(() => {
					this.update_sidebar_state();
				});
			});

		erpnext.hub.on('seller-registered', () => {
			this.hub_registered = true;
		})
	},
	mounted() {
		this.update_sidebar_state();
		frappe.route.on('change', () => this.update_sidebar_state());
	},
	methods: {
		get_categories() {
			return hub.call('get_categories');
		},
		update_sidebar_state() {
			const container = $(this.$refs['sidebar-container']);
			const route = frappe.get_route();
			const route_str = route.join('/');
			const part_route_str = route.slice(0, 2).join('/');
			const $sidebar_item = container.find(\`[data-route="\${route_str}"], [data-route="\${part_route_str}"]\`);

			const $siblings = container.find('[data-route]');
			$siblings.removeClass('active').addClass('text-muted');
			$sidebar_item.addClass('active').removeClass('text-muted');
		},
	}
}
</script>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (false) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  var __vue_component__30 = /* @__PURE__ */ __vue_normalize__30({render: __vue_render__30, staticRenderFns: __vue_staticRenderFns__30}, __vue_inject_styles__30, __vue_script__30, __vue_scope_id__30, __vue_is_functional_template__30, __vue_module_identifier__30, false, void 0, void 0, void 0);
  var Sidebar_default = __vue_component__30;

  // ../erpnext/erpnext/public/js/hub/components/profile_dialog.js
  var ProfileDialog = (title = __("Edit Profile"), action = {}) => {
    const fields = [
      {
        fieldtype: "Link",
        fieldname: "company",
        label: __("Company"),
        options: "Company"
      },
      {
        fieldtype: "Read Only",
        fieldname: "email",
        label: __("Email")
      },
      {
        label: __("About your company"),
        fieldname: "company_description",
        fieldtype: "Text"
      }
    ];
    let dialog = new frappe.ui.Dialog({
      title,
      fields,
      primary_action_label: action.label || __("Update"),
      primary_action: () => {
        const form_values = dialog.get_values();
        let values_filled = true;
        const mandatory_fields = ["company", "company_description"];
        mandatory_fields.forEach((field) => {
          const value = form_values[field];
          if (!value) {
            dialog.set_df_property(field, "reqd", 1);
            values_filled = false;
          }
        });
        if (!values_filled)
          return;
        action.on_submit(form_values);
      }
    });
    const default_company = frappe.defaults.get_default("company");
    dialog.set_value("company", default_company);
    dialog.set_value("email", frappe.session.user);
    return dialog;
  };

  // ../erpnext/erpnext/public/js/hub/hub_call.js
  frappe.provide("hub");
  frappe.provide("erpnext.hub");
  erpnext.hub.cache = {};
  hub.call = function call_hub_method(method, args = {}, clear_cache_on_event) {
    return new Promise((resolve, reject) => {
      const key = method + JSON.stringify(args);
      if (erpnext.hub.cache[key]) {
        resolve(erpnext.hub.cache[key]);
      }
      const clear_cache = () => delete erpnext.hub.cache[key];
      if (!clear_cache_on_event) {
        invalidate_after_5_mins(clear_cache);
      } else {
        erpnext.hub.on(clear_cache_on_event, () => {
          clear_cache(key);
        });
      }
      let res;
      if (hub.is_server) {
        res = frappe.call({
          method: "hub.hub.api." + method,
          args
        });
      } else {
        res = frappe.call({
          method: "erpnext.hub_node.api.call_hub_method",
          args: {
            method,
            params: args
          }
        });
      }
      res.then((r) => {
        if (r.message) {
          const response = r.message;
          if (response.error) {
            frappe.throw({
              title: __("Marketplace Error"),
              message: response.error
            });
          }
          erpnext.hub.cache[key] = response;
          erpnext.hub.trigger(`response:${key}`, {response});
          resolve(response);
        }
        reject(r);
      }).fail(reject);
    });
  };
  function invalidate_after_5_mins(clear_cache) {
    const timeout = 5 * 60 * 1e3;
    setTimeout(() => {
      clear_cache();
    }, timeout);
  }

  // ../erpnext/erpnext/public/js/hub/marketplace.bundle.js
  frappe.provide("hub");
  frappe.provide("erpnext.hub");
  frappe.provide("frappe.route");
  frappe.utils.make_event_emitter(frappe.route);
  frappe.utils.make_event_emitter(erpnext.hub);
  erpnext.hub.Marketplace = class Marketplace {
    constructor({parent}) {
      this.$parent = $(parent);
      this.page = parent.page;
      this.update_hub_settings().then(() => {
        this.setup_header();
        this.make_sidebar();
        this.make_body();
        this.setup_events();
        this.refresh();
        if (!hub.is_server) {
          if (!hub.is_seller_registered()) {
            this.page.set_primary_action("Become a Seller", this.show_register_dialog.bind(this));
          } else {
            this.page.set_secondary_action("Add Users", this.show_add_user_dialog.bind(this));
          }
        }
      });
    }
    setup_header() {
      if (hub.is_server)
        return;
      this.page.set_title(__("Marketplace"));
    }
    setup_events() {
      this.$parent.on("click", "[data-route]", (e) => {
        const $target = $(e.currentTarget);
        const route = $target.data().route;
        frappe.set_route(route);
      });
      this.$parent.on("click", "[data-action]", (e) => {
        const $target = $(e.currentTarget);
        const action = $target.data().action;
        if (action && this[action]) {
          this[action].apply(this, $target);
        }
      });
    }
    make_sidebar() {
      this.$sidebar = this.$parent.find(".layout-side-section").addClass("hidden-xs");
      new import_vue2.default({
        el: $("<div>").appendTo(this.$sidebar)[0],
        render: (h) => h(Sidebar_default)
      });
    }
    make_body() {
      this.$body = this.$parent.find(".layout-main-section");
      this.$page_container = $('<div class="hub-page-container">').appendTo(this.$body);
      new import_vue2.default({
        el: ".hub-page-container",
        render: (h) => h(PageContainer_default)
      });
      if (!hub.is_server) {
        erpnext.hub.on("seller-registered", () => {
          this.page.clear_primary_action();
        });
      }
    }
    refresh() {
    }
    show_register_dialog() {
      if (frappe.session.user === "Administrator") {
        frappe.msgprint(__("You need to be a user other than Administrator with System Manager and Item Manager roles to register on Marketplace."));
        return;
      }
      if (!is_subset(["System Manager", "Item Manager"], frappe.user_roles)) {
        frappe.msgprint(__("You need to be a user with System Manager and Item Manager roles to register on Marketplace."));
        return;
      }
      this.register_dialog = ProfileDialog(__("Become a Seller"), {
        label: __("Register"),
        on_submit: this.register_marketplace.bind(this)
      });
      this.register_dialog.show();
    }
    register_marketplace({company, company_description}) {
      frappe.call({
        method: "erpnext.hub_node.api.register_marketplace",
        args: {
          company,
          company_description
        }
      }).then((r) => {
        if (r.message && r.message.ok) {
          this.register_dialog.hide();
          this.update_hub_settings().then(() => {
            frappe.set_route("marketplace", "publish");
            erpnext.hub.trigger("seller-registered");
          });
        }
      });
    }
    show_add_user_dialog() {
      if (!is_subset(["System Manager", "Item Manager"], frappe.user_roles)) {
        frappe.msgprint(__("You need to be a user with System Manager and Item Manager roles to add users to Marketplace."));
        return;
      }
      this.get_unregistered_users().then((r) => {
        const user_list = r.message;
        const d2 = new frappe.ui.Dialog({
          title: __("Add Users to Marketplace"),
          fields: [
            {
              label: __("Users"),
              fieldname: "users",
              fieldtype: "MultiSelect",
              reqd: 1,
              get_data() {
                return user_list;
              }
            }
          ],
          primary_action({users}) {
            const selected_users = users.split(",").map((d3) => d3.trim()).filter(Boolean);
            if (!selected_users.every((user) => user_list.includes(user))) {
              d2.set_df_property("users", "description", __("Some emails are invalid"));
              return;
            } else {
              d2.set_df_property("users", "description", "");
            }
            frappe.call("erpnext.hub_node.api.register_users", {
              user_list: selected_users
            }).then((r2) => {
              d2.hide();
              if (r2.message && r2.message.length) {
                frappe.show_alert(__("Added {0} users", [r2.message.length]));
              }
            });
          }
        });
        d2.show();
      });
    }
    get_unregistered_users() {
      return frappe.call("erpnext.hub_node.api.get_unregistered_users");
    }
    update_hub_settings() {
      return hub.get_settings().then((doc) => {
        hub.settings = doc;
      });
    }
  };
  Object.assign(hub, {
    is_seller_registered() {
      return hub.settings.registered;
    },
    is_user_registered() {
      return this.is_seller_registered() && hub.settings.users.filter((hub_user) => hub_user.user === frappe.session.user).length === 1;
    },
    get_settings() {
      if (frappe.session.user === "Guest") {
        return Promise.resolve({
          registered: 0
        });
      }
      return frappe.db.get_doc("Marketplace Settings");
    }
  });
  function is_subset(list_a, list_b) {
    return list_a.every((item) => list_b.includes(item));
  }
})();
/*!
 * Vue.js v2.6.12
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
//# sourceMappingURL=marketplace.bundle.LOGVLEOY.js.map
