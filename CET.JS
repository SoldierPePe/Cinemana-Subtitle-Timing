(function () {
    console.log("Cinemana Subtitle Timing: CET FILE Loaded!");
    for (let index = 0; index < window.videojs.players.player.textTracks_.length-1; index++) {
        jQuery(".CET-LANG").append(`<option value="${index}">${window.videojs.players.player.textTracks_[index].label}</option>`); 
    }
})();

function ChengSubTime() {
    var timingVal = Number(jQuery('#timing-val').val());
    var currnt = window.videojs.players.player.textTracks()[0].cues_[0].startTime;

    if (window.SubTimeing == undefined || window.SubTimeing == null) {
        window.SubTimeing = {
            default_value: currnt,
        };
    }
    var default_value = window.SubTimeing.default_value;

    if (timingVal == 0) {
        if (currnt - default_value != 0) {
            if (currnt - default_value < 0) {
                let timeTmp = default_value - currnt;
                for (let i = 0; i < window.videojs.players.player.textTracks()[0].cues_.length; i++) {
                    window.videojs.players.player.textTracks()[0].cues_[i].startTime += timeTmp;
                    window.videojs.players.player.textTracks()[0].cues_[i].endTime += timeTmp;
                }
                return;
            } else if (currnt - default_value > 0) {
                let timeTmp = currnt - default_value;
                for (let i = 0; i < window.videojs.players.player.textTracks()[0].cues_.length; i++) {
                    window.videojs.players.player.textTracks()[0].cues_[i].startTime -= timeTmp;
                    window.videojs.players.player.textTracks()[0].cues_[i].endTime -= timeTmp;
                }
                return;
            }
        }
        return;
    } else if (timingVal != 0) {
        if (timingVal + default_value < currnt) {
            let timeTmp = currnt - (timingVal + default_value);
            for (let i = 0; i < window.videojs.players.player.textTracks()[0].cues_.length; i++) {
                window.videojs.players.player.textTracks()[0].cues_[i].startTime -= timeTmp;
                window.videojs.players.player.textTracks()[0].cues_[i].endTime -= timeTmp;
            }
            return;
        } else if (timingVal + default_value > currnt) {
            let timeTmp = (timingVal + default_value) - currnt;
            for (let i = 0; i < window.videojs.players.player.textTracks()[0].cues_.length; i++) {
                window.videojs.players.player.textTracks()[0].cues_[i].startTime += timeTmp;
                window.videojs.players.player.textTracks()[0].cues_[i].endTime += timeTmp;
            }
            return;
        }
    }
}