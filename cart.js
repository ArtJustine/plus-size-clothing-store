document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const cartItemsContainer = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    const clearCartButton = document.querySelector('.clear-cart');

    // Load cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Update cart display
    function updateCartDisplay() {
        cartItemsContainer.innerHTML = '';
        let subtotal = 0;

        cart.forEach(item => {
            subtotal += item.price * item.quantity;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <div>
                        <h3>${item.name}</h3>
                        <p class="price">$${item.price.toFixed(2)}</p>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1">
                        <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-item" data-id="${item.id}">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        // Update totals
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        totalElement.textContent = `$${subtotal.toFixed(2)}`; // No shipping charges for now

        // Add event listeners to quantity buttons
        document.querySelectorAll('.quantity-btn').forEach(button => {
            button.addEventListener('click', handleQuantityChange);
        });

        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', handleRemoveItem);
        });

        // Add event listeners to quantity inputs
        document.querySelectorAll('.quantity-input').forEach(input => {
            input.addEventListener('change', handleQuantityChange);
        });

        // Show empty cart message if needed
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        }
    }

    // Handle quantity changes
    function handleQuantityChange(event) {
        const target = event.target;
        const id = target.dataset.id;
        const item = cart.find(item => item.id === parseInt(id));

        if (!item) return;

        if (target.dataset.action === 'decrease') {
            item.quantity = Math.max(1, item.quantity - 1);
        } else if (target.dataset.action === 'increase') {
            item.quantity += 1;
        } else if (target.type === 'number') {
            item.quantity = Math.max(1, parseInt(target.value));
        }

        saveCart();
        updateCartDisplay();
    }

    // Handle remove item
    function handleRemoveItem(event) {
        const id = event.target.dataset.id;
        cart = cart.filter(item => item.id !== parseInt(id));
        saveCart();
        updateCartDisplay();
    }

    // Clear cart
    clearCartButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear your cart?')) {
            cart = [];
            saveCart();
            updateCartDisplay();
        }
    });

    // Save cart to localStorage
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Checkout button
    document.querySelector('.checkout-button').addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        // In a real application, this would redirect to a checkout page
        alert('Thank you for your order! Checkout functionality will be implemented soon.');
    });

    // Initial load
    updateCartDisplay();
});
