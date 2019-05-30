// ==UserScript==
// @name         Cinemana Subtitle Timing
// @namespace    SoldierPePe
// @updateURL    https://github.com/SoldierPePe/Cinemana-Subtitle-Timing/raw/master/CST.user.js
// @downloadURL  https://github.com/SoldierPePe/Cinemana-Subtitle-Timing/raw/master/CST.user.js
// @version      0.1
// @description  Subtitle Timing for Cinemana website (Iraq Earthlink users only).
// @author       SoldierPePe
// @match        *://cinemana.shabakaty.com/page/movie/watch/*/*
// @run-at       document-end
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

jQuery(function () {
    jQuery(".vjs-track-settings-font").prepend("<fieldset class=\"vjs-fg-color vjs-track-setting\"><legend id=\"subtitle-timing\">Subtitle Timing <a href=\"https://www.facebook.com/Ahmed.M.H.Alnajjar\"target=\"_blank\">By SoldierPePe</a> V0.1</legend><div class=\"vjs-track-settings-controls\"><input id=\"timing-val\" type=\"number\" name=\"Timeing\" value=\"0\" step=\"0.50\" class=\"vjs-default-button\"><button type=\"button\" class=\"vjs-done-button\"onclick=\"ChengSubTime()\">Apply</button></div></fieldset>");
    jQuery(document.body).append('<script src="https://raw.githack.com/SoldierPePe/Cinemana-Subtitle-Timing/master/CET.JS"></script>');
    console.log("Cinemana Subtitle Timing: ready!");
});
