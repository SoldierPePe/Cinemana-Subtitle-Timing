// ==UserScript==
// @name         Cinemana Subtitle Timing
// @namespace    SoldierPePe
// @updateURL    https://github.com/SoldierPePe/Cinemana-Subtitle-Timing/raw/master/CST.user.js
// @downloadURL  https://github.com/SoldierPePe/Cinemana-Subtitle-Timing/raw/master/CST.user.js
// @version      0.2
// @description  Subtitle Timing for Cinemana website (Iraq Earthlink users only). V2 Added choose language option (multi-lang support)
// @author       SoldierPePe
// @match        *://cinemana.shabakaty.com/page/movie/watch/*/*
// @run-at       document-end
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

jQuery(function () {
    jQuery(".vjs-track-settings-font").prepend('<fieldset class="vjs-fg-color vjs-track-setting"><legend id="subtitle-timing">Subtitle Timing <a href="https://www.facebook.com/Ahmed.M.H.Alnajjar"target="_blank">By SoldierPePe</a> V0.2</legend><div class="vjs-track-settings-controls"><input id="timing-val" type="number" name="Timeing" value="0" step="0.50"class="vjs-default-button"><select class="CET-LANG-SEL"><optgroup class="CET-LANG" label="Languegs"></optgroup> </select></div><div class="vjs-track-settings-controls"><button class="btn btn-xs" type="button" style="margin: 0px 0px 22px 10px;" onclick="ChengSubTime()">Apply</button></div></fieldset>');
    jQuery(document.body).append('<script src="https://raw.githack.com/SoldierPePe/Cinemana-Subtitle-Timing/master/CET.JS"></script>');
    console.log("Cinemana Subtitle Timing V0.2: ready!");
});
