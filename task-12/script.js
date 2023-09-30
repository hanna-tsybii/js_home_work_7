const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
const cartItemsList = document.getElementById('cart-items');
const cartItems = [];

cartIcon.addEventListener('click', () => {
    showCartModal();
});

function showCartModal() {
    cartItemsList.innerHTML = ''; // Clear previous cart items

    if (cartItems.length === 0) {
        cartItemsList.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartItems.forEach((item, index) => {
            const cartItem = document.createElement('li');
            cartItem.className = 'cart-item';
            cartItem.textContent = `${index + 1}. ${item}`;
            cartItemsList.appendChild(cartItem);
        });
    }

    cartModal.style.display = 'flex';
}

function addToCart(productName) {
    cartItems.push(productName);
}

function emptyCart() {
    cartItems.length = 0; // Clear the cart array
    showCartModal(); // Update the modal content
}

function goBackToProducts() {
    cartModal.style.display = 'none'; // Hide the cart modal
}