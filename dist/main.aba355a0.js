parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"K4Xi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n='.skin * {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.skin *::after {\n  box-sizing: border-box;\n}\n.skin *::before {\n  box-sizing: border-box;\n}\n\nbody {\n  position: relative;\n}\n.face {\n  width: 300px;\n  position: absolute;\n  top: 14%;\n  left: 50%;\n  margin-left: -150px;\n}\n.eyebrow {\n  width: 70px;\n  height: 22px;\n  background-color: #000;\n  position: absolute;\n  top: 0;\n}\n.eyebrow.left {\n  left: 40px;\n  transform: rotate(-30deg);\n}\n.eyebrow.right {\n  right: 40px;\n  transform: rotate(30deg);\n}\n.eye {\n  border: 4px solid black;\n  width: 110px;\n  height: 154px;\n  background-color: #fff;\n  border-radius: 50%;\n  position: relative;\n  position: absolute;\n  overflow: hidden;\n  top: 50px;\n}\n.eye.left {\n  left: 50%;\n  margin-left: -120px;\n  transform: rotate(8deg);\n}\n.eye.right {\n  right: 50%;\n  margin-right: -120px;\n  transform: rotate(-8deg);\n}\n.eyeball {\n  width: 70px;\n  height: 100px;\n  background-color: #000;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  margin-top: -50px;\n  right: 12px;\n}\n.eye.left .eyeball {\n  right: 12px;\n  transform: rotate(-8deg);\n}\n.eye.right .eyeball {\n  left: 12px;\n  transform: rotate(8deg);\n}\n.eyeball::after {\n  content: "";\n  display: block;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: #fff;\n  position: absolute;\n  top: 18px;\n  left: 8px;\n}\n.eyelid {\n  border: 4px solid black;\n  width: 600px;\n  height: 600px;\n  border-radius: 50%;\n  position: absolute;\n  top: 96px;\n  right: 50%;\n  background-color: rgb(218, 212, 243);\n}\n.eye.left .eyelid {\n  margin-right: -334px;\n}\n.eye.right .eyelid {\n  margin-right: -266px;\n}\n.mouth {\n  width: 260px;\n  height: 100px;\n  position: relative;\n  position: absolute;\n  top: 220px;\n  left: 50%;\n  margin-left: -130px;\n  overflow: hidden;\n}\n.mouth .up {\n  border: 4px solid black;\n  width: 600px;\n  height: 800px;\n  position: absolute;\n  bottom: 64px;\n  left: 50%;\n  margin-left: -300px;\n  border-radius: 50%;\n  background-color: rgb(224, 144, 153);\n  z-index: 1;\n}\n\n.mouth .down {\n  border: 4px solid black;\n  width: 400px;\n  height: 1000px;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  margin-left: -200px;\n  border-radius: 50%;\n  background-color: rgb(67, 17, 26);\n  overflow: hidden;\n}\n.down::after {\n  border: 4px solid black;\n  content: "";\n  display: block;\n  width: 34px;\n  height: 34px;\n  background-color: #fff;\n  position: absolute;\n  bottom: 34px;\n  left: 50%;\n  margin-left: -17px;\n}\n.mouth .down .tongue {\n  width: 600px;\n  height: 800px;\n  border-radius: 50%;\n  position: absolute;\n  bottom: -760px;\n  left: 50%;\n  margin-left: -300px;\n  background-color: rgb(249, 198, 207);\n}\n.eyeball{\n  animation: 3s linear infinite blink;\n}\n@keyframes blink {\n  0% {\n      transform: translate(0,0);\n  }\n  25% {\n    transform: translate(-20px,0);\n}\n50% {\n  transform: translate(0,0);\n}\n  75% {\n      transform: translate(20px,0);\n  }\n  100% {\n      transform: translate(0,0);\n  }\n}\n',o=n;exports.default=o;
},{}],"epB2":[function(require,module,exports) {
"use strict";var e=t(require("./css.js"));function t(e){return e&&e.__esModule?e:{default:e}}var n={timer:void 0,n:1,speed:100,ui:{styleBox1:document.querySelector("#styleBox1"),styleBox2:document.querySelector("#styleBox2")},events:{"#btnPause":"pause","#btnPlay":"play","#btnSlow":"slow","#btnNormal":"normal","#btnFast":"fast"},init:function(){n.ui.styleBox1.innerHTML=e.default.substr(0,n.n),n.ui.styleBox2.innerText=e.default.substr(0,n.n),n.bindEvent(),n.play()},run:function(){n.n+=1,n.n>e.default.length?clearInterval(n.timer):(n.ui.styleBox1.innerHTML=e.default.substr(0,n.n),n.ui.styleBox2.innerText=e.default.substr(0,n.n),n.ui.styleBox2.scrollTop=n.ui.styleBox2.scrollHeight)},bindEvent:function(){for(var e in n.events)if(n.events.hasOwnProperty(e)){var t=n.events[e];document.querySelector(e).onclick=n[t]}},play:function(){n.timer=setInterval(n.run,n.speed)},pause:function(){window.clearInterval(n.timer)},slow:function(){n.pause(),n.speed=200,n.play()},normal:function(){n.pause(),n.speed=100,n.play()},fast:function(){n.pause(),n.speed=0,n.play()}};n.init();
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.aba355a0.js.map