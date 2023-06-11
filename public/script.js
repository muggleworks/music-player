var audio = new Audio();
audio.src = 'songs/' + "Coldplay - Youre A Sky Full Of Stars" + '.mp3';

function updateCurrentTime() {
    var currentTime = Math.floor(audio.currentTime);
    // document.getElementById('duration').innerHTML = `00:${currentTime}`;
    // format current time to mm:ss
    var minutes = Math.floor(currentTime / 60);
    var seconds = currentTime - minutes * 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementById('duration').innerHTML = `${minutes}:${seconds}`;

    // update progress bar
    var progressBar = document.getElementById('progress-bar');
    var progress = (currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
}
setInterval(updateCurrentTime, 1000);

function togglePlayIcon() {
    var playIcon = document.getElementById('play-icon');
    if (audio.paused) {
        playIcon.src="icons/pause.png";
    } else {
        playIcon.src="icons/play.png";
    }
}

function togglePlayOrPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function togglebackgroundAnimation() {
    var background = document.getElementById('wave');
    if (audio.paused) {
        background.classList.remove('animate');
    } else {
        background.classList.add('animate');
    }
}

// obtain an mp3 file from the songs folder and play it
function playSong() {
    togglePlayIcon();
    togglePlayOrPause();
    togglebackgroundAnimation();
}
