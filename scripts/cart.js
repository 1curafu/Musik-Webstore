
document.addEventListener('DOMContentLoaded', function() {
    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        return cart;
    }

    function clearCart() {
        localStorage.removeItem('cart');
        updateCartUI();
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

    document.getElementById('clear-cart').addEventListener('click', clearCart);

    updateCartUI();
});

