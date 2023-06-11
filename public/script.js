var audio = new Audio();
audio.src = 'songs/' + "Coldplay - Youre A Sky Full Of Stars" + '.mp3';
var duration = audio.duration;

// obtain an mp3 file from the songs folder and play it
function playSong() {
    // var audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
