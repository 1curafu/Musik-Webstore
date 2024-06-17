document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('checkout-form');
    const paymentStatus = document.getElementById('payment-status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Simulating payment processing
        setTimeout(function() {
            paymentStatus.textContent = 'Payment successful! Your order has been processed.';
            form.reset();
        }, 2000);
    });
});
