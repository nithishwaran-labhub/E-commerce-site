// ===== Products =====
let products = [
    { id: 1, name: "Shoes", price: 999, img: "products/item1.jpg" },
    { id: 2, name: "Watch", price: 499, img: "products/item2.jpg" },
    { id: 3, name: "Bag", price: 799, img: "products/item3.jpg" },
];

// ===== Cart & Wishlist using localStorage =====
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// ===== DOM Elements =====
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const wishlistList = document.getElementById("wishlist-list");
const cartCountEl = document.getElementById("cart-count");
const wishlistCountEl = document.getElementById("wishlist-count");

// ===== Display Products on Home Page =====
function displayProducts() {
    if (!productList) return;
    productList.innerHTML = "";
    products.forEach(product => {
        let card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
            <button onclick="addToWishlist(${product.id})">Add to Wishlist</button>
        `;
        productList.appendChild(card);
    });
}

// ===== Add to Cart =====
function addToCart(id) {
    let product = products.find(p => p.id === id);
    if (!cart.find(p => p.id === id)) {
        cart.push({...product, quantity: 1});
        saveCart();
        updateCounts();
        alert(`${product.name} added to Cart!`);
    } else {
        alert(`${product.name} is already in Cart`);
    }
}

// ===== Add to Wishlist =====
function addToWishlist(id) {
    let product = products.find(p => p.id === id);
    if (!wishlist.find(p => p.id === id)) {
        wishlist.push(product);
        saveWishlist();
        updateCounts();
        alert(`${product.name} added to Wishlist!`);
    } else {
        alert(`${product.name} is already in Wishlist`);
    }
}

// ===== Display Cart Page =====
function displayCart() {
    if (!cartList) return;
    cartList.innerHTML = "";
    if(cart.length === 0) {
        cartList.innerHTML = "<p>Your cart is empty</p>";
        return;
    }
    cart.forEach((p, index) => {
        let card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>₹${p.price} x ${p.quantity}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
            <button onclick="increaseQuantity(${index})">+</button>
            <button onclick="decreaseQuantity(${index})">-</button>
        `;
        cartList.appendChild(card);
    });
}

// ===== Display Wishlist Page =====
function displayWishlist() {
    if (!wishlistList) return;
    wishlistList.innerHTML = "";
    if(wishlist.length === 0) {
        wishlistList.innerHTML = "<p>Your wishlist is empty</p>";
        return;
    }
    wishlist.forEach((p, index) => {
        let card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="removeFromWishlist(${index})">Remove</button>
        `;
        wishlistList.appendChild(card);
    });
}

// ===== Cart Quantity Functions =====
function increaseQuantity(index) {
    cart[index].quantity +=1;
    saveCart();
    displayCart();
    updateCounts();
}
function decreaseQuantity(index) {
    if(cart[index].quantity > 1){
        cart[index].quantity -=1;
    } else {
        cart.splice(index,1);
    }
    saveCart();
    displayCart();
    updateCounts();
}

// ===== Remove Functions =====
function removeFromCart(index) {
    cart.splice(index,1);
    saveCart();
    displayCart();
    updateCounts();
}
function removeFromWishlist(index) {
    wishlist.splice(index,1);
    saveWishlist();
    displayWishlist();
    updateCounts();
}

// ===== Save to Local Storage =====
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// ===== Update Header Counts =====
function updateCounts() {
    if(cartCountEl) cartCountEl.textContent = cart.reduce((sum,p)=>sum+p.quantity,0);
    if(wishlistCountEl) wishlistCountEl.textContent = wishlist.length;
}


