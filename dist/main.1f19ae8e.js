// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = ".skin * {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.skin *::after {\n  box-sizing: border-box;\n}\n.skin *::before {\n  box-sizing: border-box;\n}\n\nbody {\n  position: relative;\n}\n.face {\n  width: 300px;\n  position: absolute;\n  top: 14%;\n  left: 50%;\n  margin-left: -150px;\n}\n.eyebrow {\n  width: 70px;\n  height: 22px;\n  background-color: #000;\n  position: absolute;\n  top: 0;\n}\n.eyebrow.left {\n  left: 40px;\n  transform: rotate(-30deg);\n}\n.eyebrow.right {\n  right: 40px;\n  transform: rotate(30deg);\n}\n.eye {\n  border: 4px solid black;\n  width: 110px;\n  height: 154px;\n  background-color: #fff;\n  border-radius: 50%;\n  position: relative;\n  position: absolute;\n  overflow: hidden;\n  top: 50px;\n}\n.eye.left {\n  left: 50%;\n  margin-left: -120px;\n  transform: rotate(8deg);\n}\n.eye.right {\n  right: 50%;\n  margin-right: -120px;\n  transform: rotate(-8deg);\n}\n.eyeball {\n  width: 70px;\n  height: 100px;\n  background-color: #000;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  margin-top: -50px;\n  right: 12px;\n}\n.eye.left .eyeball {\n  right: 12px;\n  transform: rotate(-8deg);\n}\n.eye.right .eyeball {\n  left: 12px;\n  transform: rotate(8deg);\n}\n.eyeball::after {\n  content: \"\";\n  display: block;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: #fff;\n  position: absolute;\n  top: 18px;\n  left: 8px;\n}\n.eyelid {\n  border: 4px solid black;\n  width: 600px;\n  height: 600px;\n  border-radius: 50%;\n  position: absolute;\n  top: 96px;\n  right: 50%;\n  background-color: rgb(218, 212, 243);\n}\n.eye.left .eyelid {\n  margin-right: -334px;\n}\n.eye.right .eyelid {\n  margin-right: -266px;\n}\n.mouth {\n  width: 260px;\n  height: 100px;\n  position: relative;\n  position: absolute;\n  top: 220px;\n  left: 50%;\n  margin-left: -130px;\n  overflow: hidden;\n}\n.mouth .up {\n  border: 4px solid black;\n  width: 600px;\n  height: 800px;\n  position: absolute;\n  bottom: 64px;\n  left: 50%;\n  margin-left: -300px;\n  border-radius: 50%;\n  background-color: rgb(224, 144, 153);\n  z-index: 1;\n}\n\n.mouth .down {\n  border: 4px solid black;\n  width: 400px;\n  height: 1000px;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  margin-left: -200px;\n  border-radius: 50%;\n  background-color: rgb(67, 17, 26);\n  overflow: hidden;\n}\n.down::after {\n  border: 4px solid black;\n  content: \"\";\n  display: block;\n  width: 34px;\n  height: 34px;\n  background-color: #fff;\n  position: absolute;\n  bottom: 34px;\n  left: 50%;\n  margin-left: -17px;\n}\n.mouth .down .tongue {\n  width: 600px;\n  height: 800px;\n  border-radius: 50%;\n  position: absolute;\n  bottom: -760px;\n  left: 50%;\n  margin-left: -300px;\n  background-color: rgb(249, 198, 207);\n}\n.eyeball{\n  animation: 3s linear infinite blink;\n}\n@keyframes blink {\n  0% {\n      transform: translate(0,0);\n  }\n  25% {\n    transform: translate(-20px,0);\n}\n50% {\n  transform: translate(0,0);\n}\n  75% {\n      transform: translate(20px,0);\n  }\n  100% {\n      transform: translate(0,0);\n  }\n}\n";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  timer: undefined,
  n: 1,
  speed: 100,
  ui: {
    styleBox1: document.querySelector("#styleBox1"),
    styleBox2: document.querySelector("#styleBox2")
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  init: function init() {
    player.ui.styleBox1.innerHTML = _css.default.substr(0, player.n);
    player.ui.styleBox2.innerText = _css.default.substr(0, player.n);
    player.bindEvent();
    player.play();
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      clearInterval(player.timer);
      return;
    }

    player.ui.styleBox1.innerHTML = _css.default.substr(0, player.n);
    player.ui.styleBox2.innerText = _css.default.substr(0, player.n);
    player.ui.styleBox2.scrollTop = player.ui.styleBox2.scrollHeight;
  },
  bindEvent: function bindEvent() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  play: function play() {
    player.timer = setInterval(player.run, player.speed);
  },
  pause: function pause() {
    window.clearInterval(player.timer);
  },
  slow: function slow() {
    player.pause();
    player.speed = 200;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.speed = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.speed = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"css.js"}],"C:/Users/sb/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57797" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/sb/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map