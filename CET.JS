var langIndex = Number(jQuery('select.CET-LANG-SEL').val());
(function () {
    for (let index = 0; index < window.videojs.players.player.textTracks_.length; index++) {
        jQuery(".CET-LANG").append(`<option value="${index}">${window.videojs.players.player.textTracks_[index].label}</option>`); 
    }
    if (window.SubTimeing == undefined || window.SubTimeing == null) {
        window.SubTimeing = {
            default_value: [],
            last_value:[]
        };
    }
    jQuery("select.CET-LANG-SEL").change(function(){
        langIndex = Number(jQuery('select.CET-LANG-SEL').val());
        if(window.SubTimeing.last_value[langIndex] == undefined){
            jQuery('#timing-val').val(0);
        }
        else{
            jQuery('#timing-val').val(window.SubTimeing.last_value[langIndex]);
        }
    });
    console.log("Cinemana Subtitle Timing: CET FILE Loaded!");
})();

function ChengSubTime() {
    var timingVal = Number(jQuery('#timing-val').val());
    var currnt = window.videojs.players.player.textTracks_[langIndex].cues_[0].startTime;
    if(window.SubTimeing.default_value[langIndex] == undefined ){
        window.SubTimeing.default_value[langIndex] = currnt;
    }
    window.SubTimeing.last_value[langIndex] = timingVal;
    var default_value = window.SubTimeing.default_value;

    if (timingVal == 0) {
        if (currnt - default_value != 0) {
            if (currnt - default_value < 0) {
                let timeTmp = default_value - currnt;
                for (let i = 0; i < window.videojs.players.player.textTracks_[langIndex].cues_.length; i++) {
                    window.videojs.players.player.textTracks_[langIndex].cues_[i].startTime += timeTmp;
                    window.videojs.players.player.textTracks_[langIndex].cues_[i].endTime += timeTmp;
                }
                return;
            } else if (currnt - default_value > 0) {
                let timeTmp = currnt - default_value;
                for (let i = 0; i < window.videojs.players.player.textTracks_[langIndex].cues_.length; i++) {
                    window.videojs.players.player.textTracks_[langIndex].cues_[i].startTime -= timeTmp;
                    window.videojs.players.player.textTracks_[langIndex].cues_[i].endTime -= timeTmp;
                }
                return;
            }
        }
        return;
    } else if (timingVal != 0) {
        if (timingVal + default_value < currnt) {
            let timeTmp = currnt - (timingVal + default_value);
            for (let i = 0; i < window.videojs.players.player.textTracks_[langIndex].cues_.length; i++) {
                window.videojs.players.player.textTracks_[langIndex].cues_[i].startTime -= timeTmp;
                window.videojs.players.player.textTracks_[langIndex].cues_[i].endTime -= timeTmp;
            }
            return;
        } else if (timingVal + default_value > currnt) {
            let timeTmp = (timingVal + default_value) - currnt;
            for (let i = 0; i < window.videojs.players.player.textTracks_[langIndex].cues_.length; i++) {
                window.videojs.players.player.textTracks_[langIndex].cues_[i].startTime += timeTmp;
                window.videojs.players.player.textTracks_[langIndex].cues_[i].endTime += timeTmp;
            }
            return;
        }
    }
}
