// ==UserScript==
// @name IamDeveloper
// @description Discordのデベロッパー機能(Experimentsなど)を有効にします
// @description:en Enable Developer Feature(e.x. Experiments) in Discord
// @author waki285
// @version 1.1.0
// @include *.discord.com/*
// @exclude support.discord.com/*
// @exclude support-dev.discord.com/*
// @namespace https://greasyfork.org/users/585161
// @run-at  document-end
// ==/UserScript==

alert("owo");
Object.defineProperty(
  (
    webpackChunkdiscord_app.push(
      [
        [''],
        {},
        (e) => {
          m = [];
          for (let c in e.c) m.push(e.c[c]) ;
        }
      ]
    ),
    m
  ).find((m) => 
    m?.exports?.default?.isDeveloper !== void 0
  ).exports.default,
  "isDeveloper",
  { 
    get: () => true
  }
);
