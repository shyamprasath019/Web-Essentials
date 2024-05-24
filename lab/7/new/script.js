// Sample product data
const products = [
    { name: "iPhone 13 Pro Max", price: 1099.99, description: "The latest iPhone with the most advanced features yet." },
    { name: "Samsung 4K UHD Smart TV", price: 899.99, description: "Experience crystal clear picture quality with smart features." },
    { name: "Nike Air Max Shoes", price: 129.99, description: "Stylish and comfortable shoes for everyday wear." },
    // Add more products as needed
];

// Function to display products
function displayProducts(products) {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>${product.description}</p>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Event listener for search input
document.getElementById("searchInput").addEventListener("input", function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});

// Event listeners for view options
document.getElementById("gridViewBtn").addEventListener("click", function() {
    document.getElementById("products").classList.remove("list-view");
});

document.getElementById("listViewBtn").addEventListener("click", function() {
    document.getElementById("products").classList.add("list-view");
});

// Display products on page load
displayProducts(products);
