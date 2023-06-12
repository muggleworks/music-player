// List of songs
var songs = [
    "a-ha - Take On Me",
    "Backstreet Boys - I Want It That Way",
    "Coldplay - A Sky Full Of Stars",
    "Coldplay - Paradise",
    "Katy Perry - Firework",
    "Pharrell Williams - Happy",
];
var currentSongPosition = 0;

function getSongPath(name) {
    return 'songs/' + name + '.mp3';
}

function changeAlbumArt() {
    var albumArt = document.getElementById('albumArt');
    var random = Math.floor(Math.random() * 5) + 1;
    albumArt.src = "images/album-art" + random + ".png";
}
changeAlbumArt();

function setSongTitle() {
    var songTitle = document.getElementById('songTitle');
    songTitle.innerHTML = songs[currentSongPosition];
}

var audio = new Audio();
audio.src = getSongPath(songs[currentSongPosition]);
setSongTitle();


function updateCurrentTime() {
    var currentTime = Math.floor(audio.currentTime);
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
        playIcon.src = "icons/play.png";
    } else {
        playIcon.src = "icons/pause.png";
    }
}

function togglePlayOrPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function toggleBackgroundAnimation() {
    var background = document.getElementById('wave');
    if (audio.paused) {
        background.classList.remove('animate');
    } else {
        background.classList.add('animate');
    }
}

function playSong() {
    togglePlayOrPause();
    togglePlayIcon();
    toggleBackgroundAnimation();
}

function previousSong() {
    currentSongPosition = (currentSongPosition === 0) ? (songs.length - 1) : (currentSongPosition - 1);
    const wasPlaying = !audio.paused;
    audio.src = getSongPath(songs[currentSongPosition]);
    
    if (wasPlaying) {
        playSong();
    }
    changeAlbumArt();
    setSongTitle();
}

function nextSong() {
    currentSongPosition = (currentSongPosition + 1) % songs.length;
    const wasPlaying = !audio.paused;
    audio.src = getSongPath(songs[currentSongPosition]);

    if (wasPlaying) {
        playSong();
    }
    changeAlbumArt();
    setSongTitle();
}
