// ==UserScript==
// @name         Hide Promoted Twitter Tweets
// @namespace    https://spin.rip/
// @version      1.1
// @description  Hide promoted tweets across Twitter!
// @author       Spinfal
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?domain=twitter.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = () => {
        setTimeout(() => {
            console.clear();
            const sideBar = document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div.css-1dbjc4n.r-1habvwh");
            const div = document.createElement("div");
            div.setAttribute("class", "css-1dbjc4n r-dnmrzs r-1vvnge1");
            div.innerHTML = '<h1 role="heading" class="css-4rbku5 css-1dbjc4n r-1awozwy r-1pz39u2 r-1loqt21 r-6koalj r-16y2uox r-1777fci r-4wgw6l"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0" style="color: white; font-family: Verdana; cursor: default;" id="hiddenTweetCounter"></span></h1>';
            sideBar.appendChild(div);

            let totalPromotedTweetAmount = 0;
            setInterval(() => {
                const promotedTweets = document.querySelectorAll('[data-testid="placementTracking"]');
                const promotedTweetAmount = promotedTweets.length;

                if (promotedTweetAmount > 0) {
                    promotedTweets.forEach(i => i.remove());
                    totalPromotedTweetAmount = totalPromotedTweetAmount + promotedTweetAmount;
                    document.getElementById("hiddenTweetCounter").innerText = totalPromotedTweetAmount > 1000 ? `${totalPromotedTweetAmount.toString().substring(0,1)}k+ promoted tweets hidden` : `${totalPromotedTweetAmount.toString()} ${totalPromotedTweetAmount == 1 ? "promoted tweet" : "promoted tweets"} hidden`; // if you get to 1k promoted tweets hidden, you have a problem.
                }
            }, 1000);
        }, 1000);
    }
})();
