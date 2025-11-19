// List of products
let products = [
    { id: 1, name: "Shoes", price: 999, img: "products/item1.jpg" },
    { id: 2, name: "Watch", price: 499, img: "products/item2.jpg" },
    { id: 3, name: "Bag", price: 799, img: "products/item3.jpg" },
];

// Cart array
let cart = [];

// Select DOM elements
const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");

// Display products
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
        `;
        productList.appendChild(productCard);
    });
}

// Add to cart
function addToCart(id) {
    let product = products.find(p => p.id === id);
    cart.push(product);
    cartCount.textContent = cart.length;
    alert(`${product.name} added to cart!`);
}

// Initialize
displayProducts();

