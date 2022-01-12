"use strict";
let linkText = [
    "<p>↓料理</p>",
    "<p>↓料金</p>",
    "<p>↓ご予約・問い合わせ</p>",
    "<p>↑トップ</p>",
    "<p>↓美肌の湯</p>",
];
let url = ["#bihada", "#ryouri", "#price", "#yoyaku", "#"];
let i = 0;

function linkClick(aTag) {
    if (i >= linkText.length) {
        i = 0;
    }
    aTag.innerHTML = linkText[i];
    aTag.href = url[i];
    i++;
}
