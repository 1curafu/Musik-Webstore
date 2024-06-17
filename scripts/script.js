document.addEventListener('DOMContentLoaded', function() {
    const demoSound = document.getElementById('demoSound');
    const playPauseButton = document.querySelector('.play-pause');
    const seekBar = document.querySelector('.seek-bar');
    const currentTime = document.querySelector('.current-time');
    const duration = document.querySelector('.duration');
    const navbarAvatar = document.getElementById('navbar-avatar');

    playPauseButton.addEventListener('click', () => {
        if (demoSound.paused) {
            demoSound.play();
            playPauseButton.textContent = 'Pause';
        } else {
            demoSound.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    seekBar.addEventListener('input', () => {
        const seekTime = demoSound.duration * (seekBar.value / 100);
        demoSound.currentTime = seekTime;
    });

    demoSound.addEventListener('loadedmetadata', () => {
        duration.textContent = formatTime(demoSound.duration);
    });

    demoSound.addEventListener('timeupdate', () => {
        seekBar.value = (demoSound.currentTime / demoSound.duration) * 100;
        currentTime.textContent = formatTime(demoSound.currentTime);
    });

    demoSound.addEventListener('error', () => {
        console.error('Failed to load audio metadata.');
        duration.textContent = '0:00';
        currentTime.textContent = '0:00';
    });

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    }

    // Shopping cart functionality
    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        return cart;
    }

    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function addToCart(item) {
        const cart = loadCart();
        cart.push(item);
        saveCart(cart);
        updateCartNotification();
    }

    function updateCartNotification() {
        const cart = loadCart();
        document.querySelector('.notification-count').textContent = cart.length;
    }

    const addToCartButton = document.getElementById('add-to-cart');
    addToCartButton.addEventListener('click', () => {
        const item = {
            title: document.querySelector('.song-title').textContent,
            price: 0.50,
            cover: document.querySelector('.cover-image').src
        };
        addToCart(item);
    });

    updateCartNotification();

    // Load and set profile avatar
    const savedProfile = JSON.parse(localStorage.getItem('profile'));
    if (savedProfile && savedProfile.avatar) {
        navbarAvatar.src = savedProfile.avatar;
    }
});
