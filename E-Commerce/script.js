let allProducts = [];

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    allProducts = data;
    populateProducts(allProducts);
    populateCategories(data);
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
    displayErrorMessage("Error loading products. Please try again later.");
  });

document
  .getElementById("categorySelect")
  .addEventListener("change", handleCategoryChange);
document.getElementById("searchBar").addEventListener("keyup", handleSearch);

function populateProducts(products) {
  const grid = document.getElementById("productsGrid");
  let cardsHtml = "";

  products.forEach((product) => {
    cardsHtml += createCard(product);
  });

  grid.innerHTML = cardsHtml;
}

function createCard(product) {
  return `
    <div class="col-md-3 mb-4">
      <div class="card">
        <img src="${product.image}" class="card-img-top" alt="${product.title}">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.description}</p>
          <p class="card-text"><small class="text-muted">$${product.price}</small></p>
        </div>
      </div>
    </div>
  `;
}

function populateCategories(products) {
  const categorySelect = document.getElementById("categorySelect");
  const categories = new Set();

  products.forEach((product) => {
    categories.add(product.category);
  });

  categories.forEach((category) => {
    const option = createOptionElement(category);
    categorySelect.appendChild(option);
  });
}

function createOptionElement(category) {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  return option;
}

function handleCategoryChange() {
  const selectedCategory = document.getElementById("categorySelect").value;
  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);
  populateProducts(filteredProducts);
}
