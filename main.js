// script.js
async function loadProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    const container = document.getElementById('product-container');

    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'bg-white rounded-2xl shadow p-4 flex flex-col';

      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="h-48 object-contain mb-4 mx-auto" />
        <h2 class="text-lg font-semibold mb-2 line-clamp-2">${product.title}</h2>
        <p class="text-sm text-gray-600 mb-2 capitalize">${product.category}</p>
        <p class="text-red-500 font-bold mb-4">$${product.price}</p>
        <button class="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Add to Cart
        </button>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error('Failed to load products:', error);
  }
}

// Run function on page load
loadProducts();


            
            document.addEventListener("DOMContentLoaded", function () {
                // Custom checkbox functionality
                const checkboxes = document.querySelectorAll(".custom-checkbox");
                checkboxes.forEach((checkbox) => {
                checkbox.addEventListener("click", function () {
                    this.classList.toggle("checked");
                });
                });
            });
        