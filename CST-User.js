// ==UserScript==
// @name         Cinemana Subtitle Timing
// @namespace    SoldierPePe
// @version      0.1
// @description  Iraq Earthlink users only
// @author       SoldierPePe
// @match        *://cinemana.shabakaty.com/page/movie/watch/*
// @run-at       document-end
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

jQuery(function () {
    jQuery(".vjs-track-settings-font").prepend("<fieldset class=\"vjs-fg-color vjs-track-setting\"><legend id=\"subtitle-timing\">Subtitle Timing <a href=\"https://www.facebook.com/Ahmed.M.H.Alnajjar\"target=\"_blank\">By SoldierPePe</a> V0.1</legend><div class=\"vjs-track-settings-controls\"><input id=\"timing-val\" type=\"number\" name=\"Timeing\" value=\"0\"class=\"vjs-default-button\"><button type=\"button\" class=\"vjs-done-button\"onclick=\"ChengSubTime()\">Apply</button></div></fieldset>");
    jQuery(document.body).append("<script>function ChengSubTime() {var timingVal = Number(jQuery('#timing-val').val());var currnt = window.videojs.players.player.textTracks()[0].cues_[0].startTime;if (window.SubTimeing == undefined || window.SubTimeing == null){window.SubTimeing = {default_value: currnt,};}var default_value = window.SubTimeing.default_value;if (timingVal == 0) {if (currnt - default_value != 0) {if (currnt - default_value < 0) {let timeTmp = default_value - currnt;for (let i = 0; i < window.videojs.players.player.textTracks()[0].cues_.length; i++) {window.videojs.players.player.textTracks()[0].cues_[i].startTime += timeTmp;window.videojs.players.player.textTracks()[0].cues_[i].endTime += timeTmp;}return;} else if (currnt - default_value > 0) {let timeTmp = currnt - default_value;for (let i = 0; i < window.videojs.players.player.textTracks()[0].cues_.length; i++) {window.videojs.players.player.textTracks()[0].cues_[i].startTime -= timeTmp;window.videojs.players.player.textTracks()[0].cues_[i].endTime -= timeTmp;}return;}}return;} else if (timingVal!= 0) {if (timingVal + default_value < currnt) {let timeTmp = currnt - (timingVal + default_value);for (let i = 0; i < window.videojs.players.player.textTracks()[0].cues_.length; i++) {window.videojs.players.player.textTracks()[0].cues_[i].startTime -= timeTmp;window.videojs.players.player.textTracks()[0].cues_[i].endTime -= timeTmp;}return;} else if (timingVal + default_value > currnt) {let timeTmp = (timingVal + default_value) - currnt;for (let i = 0; i < window.videojs.players.player.textTracks()[0].cues_.length; i++) {window.videojs.players.player.textTracks()[0].cues_[i].startTime += timeTmp;window.videojs.players.player.textTracks()[0].cues_[i].endTime += timeTmp;}return;}}}</script>");
    console.log("Cinemana Subtitle Timing: ready!");
});
