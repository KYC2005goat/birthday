function showPage(pageId) {
    const pages = document.querySelectorAll('.info-page');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    });

    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        if (link.getAttribute('onclick').includes(pageId)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Toggle play/pause for custom audio controls
function togglePlay(audioId) {
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
        if (audio.id !== audioId) {
            audio.pause();
            audio.currentTime = 0;
        }
    });

    const audio = document.getElementById(audioId);
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Example function to set images, video, and audio sources dynamically
function setMedia() {
    document.getElementById('home-img').src = 'images/its your day.jpg';
    document.getElementById('first-meet-img').src = 'images/first.png';
    document.getElementById('happier-audio').src = 'songs/YUNG.mp3';
    document.getElementById('super-shy-audio').src = 'songs/newjeans.mp3';
    document.getElementById('sorry-img').src = 'images/sorry1.jpg';
    const birthdayImages = document.querySelectorAll('#birthday-images .birthday-img');
    birthdayImages.forEach((img, index) => {
        img.src = `images/${index + 1}.jpg`;
    });
}

// Call setMedia function to initialize sources
setMedia();
