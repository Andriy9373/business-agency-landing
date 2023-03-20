// Navbar
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    navbar.classList.toggle('change');
    menu.classList.toggle('change');
})
// End of Navbar

// Video
const video = document.querySelector('.video');
const btn = document.querySelector('.buttons i');
const bar = document.querySelector('.video-bar');

btn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        video.style.opacity = 0.7;
        btn.classList = 'far fa-pause-circle';
    }
    else {
        video.pause();
        video.style.opacity = 0.3;
        btn.classList = 'far fa-play-circle';
    }
})

video.addEventListener('timeupdate', () => {
    const barWidth = video.currentTime / video.duration * 100;
    bar.style.width = `${barWidth}%`;
    if (video.ended) {
        video.style.opacity = 0.3;
        btn.classList = 'far fa-play-circle';
    }
})
// End of Video

document.querySelector('.contact-form').addEventListener('submit', e => {
    e.preventDefault();
})