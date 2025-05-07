let cart = document.querySelector('.shoping__bag');
let cartIcon = document.getElementById('cart-icon');
let closeCart = document.getElementById('close-cart');

// --- Lógica para mostrar y ocultar el carrito ---

// Mostrar carrito
if (cartIcon && cart) { // Verifica que ambos elementos existan
    cartIcon.addEventListener('click', () => {
        cart.classList.add('active'); // Añade la clase 'active' al contenedor del carrito
    });
}

// Ocultar carrito
if (closeCart && cart) { // Verifica que ambos elementos existan
    closeCart.addEventListener('click', () => {
        cart.classList.remove('active'); // Elimina la clase 'active' del contenedor del carrito
    });
}