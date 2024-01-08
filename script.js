const audio = document.getElementById('background-music');
const playButton = document.querySelector('.play-music-button');

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = 'Pause Music';
    } else {
        audio.pause();
        playButton.textContent = 'Play Music';
    }
}

function shareWebsite() {
    const url = window.location.href;
    const shareMessage = 'Check out this awesome website: ';
    const shareLink = `${shareMessage}${url}`;

    if (navigator.share) {
        navigator.share({
            title: document.title,
            text: shareMessage,
            url: url,
        })
        .catch(error => console.error('Error sharing:', error));
    } else {
        window.open(shareLink, '_blank');
    }
}
