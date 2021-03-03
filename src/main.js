import string from "./css.js";

const player = {
  timer: undefined,
  n: 1,
  speed: 100,
  ui: {
    styleBox1: document.querySelector("#styleBox1"),
    styleBox2: document.querySelector("#styleBox2"),
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  init: () => {
    player.ui.styleBox1.innerHTML = string.substr(0, player.n);
    player.ui.styleBox2.innerText = string.substr(0, player.n);
    player.bindEvent();
    player.play();
  },
  run: () => {
    player.n += 1;
    if (player.n > string.length) {
      clearInterval(player.timer);
      return;
    }
    player.ui.styleBox1.innerHTML = string.substr(0, player.n);
    player.ui.styleBox2.innerText = string.substr(0, player.n);
    player.ui.styleBox2.scrollTop = player.ui.styleBox2.scrollHeight;
  },

  bindEvent: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  play: () => {
    player.timer = setInterval(player.run, player.speed);
  },
  pause: () => {
    window.clearInterval(player.timer);
  },
  slow: () => {
    player.pause();
    player.speed = 200;
    player.play();
  },
  normal: () => {
    player.pause();
    player.speed = 100;
    player.play();
  },
  fast: () => {
    player.pause();
    player.speed = 0;
    player.play();
  },
};
player.init();
