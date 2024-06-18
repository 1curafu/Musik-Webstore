document.addEventListener('DOMContentLoaded', function() {
    const demoSound = document.getElementById('demoSound');
    const playPauseButton = document.querySelector('.play-pause');
    const seekBar = document.querySelector('.seek-bar');
    const currentTime = document.querySelector('.current-time');
    const duration = document.querySelector('.duration');
    const navbarAvatar = document.getElementById('navbar-avatar');

    if (playPauseButton) {
        playPauseButton.addEventListener('click', () => {
            if (demoSound.paused) {
                demoSound.play();
                playPauseButton.textContent = 'Pause';
            } else {
                demoSound.pause();
                playPauseButton.textContent = 'Play';
            }
        });
    }

    if (seekBar) {
        seekBar.addEventListener('input', () => {
            const seekTime = demoSound.duration * (seekBar.value / 100);
            demoSound.currentTime = seekTime;
        });
    }

    if (demoSound) {
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
    }

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    }

    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        return cart;
    }

    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function addToCart(itemTitle) {
        const itemsForSale = JSON.parse(localStorage.getItem('itemsForSale'));
        const item = itemsForSale.find(item => item.title === itemTitle);
        if (!item) {
            console.error('Item not found');
            return;
        }
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
    if (addToCartButton) {
        addToCartButton.addEventListener('click', () => {
            const itemTitle = document.querySelector('.song-title').textContent;
            addToCart(itemTitle);
        });
    }

    updateCartNotification();

    // Load and set profile avatar
    const savedProfile = JSON.parse(localStorage.getItem('profile'));
    if (savedProfile && savedProfile.avatar) {
        navbarAvatar.src = savedProfile.avatar;
    } else {
        console.log('No profile or avatar found in localStorage');
    }
});

// Initialize items for sale
function initializeItemsForSale() {
    const itemsForSale = [
        { title: 'Dog Song', price: 0.50, cover: '/images/doge.webp' },
        { title: 'Bear Song', price: 0.75, cover: '/images/bear.avif' },
        { title: 'Duck Song', price: 0.65, cover: '/images/duck.webp' },
        { title: 'Penguin Song', price: 0.55, cover: '/images/penguin.webp' },
        { title: 'Panda Song', price: 0.80, cover: '/images/panda.jpg' }
    ];

    if (!localStorage.getItem('itemsForSale')) {
        localStorage.setItem('itemsForSale', JSON.stringify(itemsForSale));
    }
}

initializeItemsForSale();
