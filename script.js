// ===== Products =====
let products = [
    { id: 1, name: "Shoes", price: 999, img: "products/item1.jpg" },
    { id: 2, name: "Watch", price: 499, img: "products/item2.jpg" },
    { id: 3, name: "Bag", price: 799, img: "products/item3.jpg" },
];

// ===== Cart & Wishlist =====
let cart = [];
let wishlist = [];

// ===== DOM Elements =====
const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");
const wishlistCount = document.getElementById("wishlist-count");

// ===== Display Products =====
function displayProducts() {
    productList.innerHTML = "";
    products.forEach(product => {
        let productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
            <button onclick="addToWishlist(${product.id})">Add to Wishlist</button>
        `;
        productList.appendChild(productCard);
    });
}

// ===== Add to Cart =====
function addToCart(id) {
    let product = products.find(p => p.id === id);

    // Prevent duplicate in cart
    if (!cart.includes(product)) {
        cart.push(product);
        cartCount.textContent = cart.length;
        alert(`${product.name} added to Cart!`);
    } else {
        alert(`${product.name} is already in your Cart.`);
    }
}

// ===== Add to Wishlist =====
function addToWishlist(id) {
    let product = products.find(p => p.id === id);

    // Prevent duplicate in wishlist
    if (!wishlist.includes(product)) {
        wishlist.push(product);
        wishlistCount.textContent = wishlist.length;
        alert(`${product.name} added to Wishlist!`);
    } else {
        alert(`${product.name} is already in your Wishlist.`);
    }
}

// ===== View Cart =====
document.getElementById("cart-btn").onclick = () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        let list = cart.map(p => `${p.name} - ₹${p.price}`).join("\n");
        alert("Your Cart:\n" + list);
    }
};

// ===== View Wishlist =====
document.getElementById("wishlist-btn").onclick = () => {
    if (wishlist.length === 0) {
        alert("Your wishlist is empty!");
    } else {
        let list = wishlist.map(p => `${p.name} - ₹${p.price}`).join("\n");
        alert("Your Wishlist:\n" + list);
    }
};

// ===== Initialize =====
displayProducts();

