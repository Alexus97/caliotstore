let cart = document.querySelector(".shoping__bag");
let cartIcon = document.getElementById("cart-icon");
let closeCart = document.getElementById("close-cart");

// --- Lógica para mostrar y ocultar el carrito ---

// Mostrar carrito
if (cartIcon && cart) {
  // Verifica que ambos elementos existan
  cartIcon.addEventListener("click", () => {
    cart.classList.add("active"); // Añade la clase 'active' al contenedor del carrito
  });
}

// Ocultar carrito
if (closeCart && cart) {
  // Verifica que ambos elementos existan
  closeCart.addEventListener("click", () => {
    cart.classList.remove("active"); // Elimina la clase 'active' del contenedor del carrito
  });
}

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// Making Function
function ready() {
  // Remove Item From Cart
  var removeCartButtons = document.getElementsByClassName("cart__remove");

  for (let i = 0; i < removeCartButtons.length; i++) {
    let button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  //Quantity Change
  let quantityInputs = document.getElementsByClassName("cart__quantity");
  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  // add to cart
  let addCart = document.getElementsByClassName("add__cart");
  for (let i = 0; i < addCart.length; i++) {
    let button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
}

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}

function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}

// Add cart Function
function addCartClicked(event) {
  let button = event.target;
  let shopProducts = button.parentElement;
  let title =
    shopProducts.getElementsByClassName("product__title")[0].innerHTML;
  let price =
    shopProducts.getElementsByClassName("product__price")[0].innerHTML;
  let productImg = shopProducts.getElementsByClassName("product__img")[0].src;
  addProductToCart(title, price, productImg);
  updateTotal();
}

// Add Product To Cart.
function addProductToCart(title, price, productImg) {
  let cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart__box");
  let cartItems = document.getElementsByClassName("cart__content")[0];
  let cartItemsNames = cartItems.getElementsByClassName("cart__product--title");
  for (let i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerHTML == title) {
      alert("You have already added this item to cart");
      return;
    }
  }
  let cartBoxContent = `
    <img src="${productImg}" alt="" class="cart__img">
    <div class="detail__box">
    <div class="cart__producto--title">${title}</div>
    <div class="cart__price">${price}</div>
    <input
    type="number"
    name=""
    id=""
    value="1"
    class="cart__quantity">
    </div>
    <i class="ri-delete-bin-7-line cart__remove"></i>`;

  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart__remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart__quantity")[0]
    .addEventListener("change", quantityChanged);
}

// function updateTotal.
function updateTotal() {
  let cartContent = document.getElementsByClassName("cart__content")[0];
  let cartBoxes = cartContent.getElementsByClassName("cart__box");
  let total = 0;
  for (let i = 0; i < cartBoxes.length; i++) {
    let cartBox = cartBoxes[i];
    let priceElement = cartBox.getElementsByClassName("cart__price")[0];
    let quantityElement = cartBox.getElementsByClassName("cart__quantity")[0];
    let price = parseFloat(priceElement.textContent.replace("$", ""));
    // let quantity = quantityElement.value;
    let quantity = parseFloat(quantityElement.value);
    total += price * quantity;

    // document.getElementsByClassName("total__price")[0].textContent = "$" + total;
  }
  // if price contain some cents
  // total = Math.round(total * 100) / 100;
  document.getElementsByClassName("total__price")[0].textContent = "$" + total;
}
