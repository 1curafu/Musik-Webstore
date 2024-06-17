document.addEventListener('DOMContentLoaded', function() {
    function loadCart() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }

    function clearCart() {
        localStorage.removeItem('cart');
        updateCartUI();
        updateCartNotification();
    }

    function updateCartUI() {
        const cart = loadCart();
        const cartItemsContainer = document.querySelector('.song-grid');
        const totalItemsElement = document.querySelector('.total-items');
        const totalPriceElement = document.querySelector('.total-price');

        cartItemsContainer.innerHTML = '';

        let totalItems = 0;
        let totalPrice = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'song-item';
            itemElement.innerHTML = `
                <img src="${item.cover}" alt="Song Cover" class="cover-image">
                <p>${item.title}</p>
                <p>$${item.price.toFixed(2)}</p>
            `;
            cartItemsContainer.appendChild(itemElement);

            totalItems += 1;
            totalPrice += item.price;
        });

        totalItemsElement.textContent = totalItems;
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }

    function updateCartNotification() {
        const cart = loadCart();
        document.querySelector('.notification-count').textContent = cart.length;
    }

    document.getElementById('clear-cart').addEventListener('click', clearCart);

    updateCartUI();
    updateCartNotification();
});


document.addEventListener('DOMContentLoaded', function() {
    const checkoutButton = document.getElementById('checkout-button');

    checkoutButton.addEventListener('click', function() {
        // Perform checkout actions here
        // For example, redirect to a payment page
        window.location.href = '/pages/checkout.html'; // Redirect to checkout page
    });
});
