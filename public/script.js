var songs = [
    "a-ha - Take On Me.mp3",
    "Backstreet Boys - I Want It That Way.mp3",
    "Coldplay - A Sky Full Of Stars.mp3",
    "Coldplay - Paradise.mp3",
    "Katy Perry - Firework.mp3",
    "Pharrell Williams - Happy.mp3",
];
var currentSongIndex = 0;

function getSongPath(name) {
    return 'songs/' + name;
}

function changeAlbumArt() {
    var albumArt = document.getElementById('albumArt');
    var random = Math.floor(Math.random() * 5) + 1;
    albumArt.src = "images/album-art" + random + ".png";
}

changeAlbumArt();

function setSongTitle() {
    var songTitle = document.getElementById('songTitle');
    songTitle.innerHTML = songs[currentSongIndex];
}

var audio = new Audio();
audio.src = getSongPath(songs[currentSongIndex]);
setSongTitle();


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
        playIcon.src = "icons/pause.png";
    } else {
        playIcon.src = "icons/play.png";
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


function previousSong() {
    currentSongIndex--;
    audio.src = getSongPath(songs[currentSongIndex]);
    audio.play();
    changeAlbumArt();
    setSongTitle();
}

function nextSong() {
    currentSongIndex++;
    audio.src = getSongPath(songs[currentSongIndex]);
    audio.play();
    changeAlbumArt();
    setSongTitle();
}
