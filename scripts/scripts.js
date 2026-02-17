const threeProducts = () => {
  document.getElementById("hero-section").classList.remove("hiddan");
  document.getElementById("choose-section").classList.remove("hiddan");
  document.getElementById("three-products").classList.remove("hiddan");
  document.getElementById("all-products").classList.add("hiddan");
  document.getElementById("cart-view").classList.add("hiddan");

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((allProducts) => {
      const products3 = allProducts.slice(0, 3);
      const productsContainer = document.getElementById("3products-container");
      productsContainer.innerHTML = "";
      for (let product of products3) {
        const productId = product.id;
        const productPrice = product.price;
        const productCategory = product.category;
        const productDescription = product.description;
        const productName = product.title;
        const imgName = product.image;
        const productRate = product.rating.rate;
        const productCount = product.rating.count;
        //   console.log({productId,productPrice,productCategory,productDescription,productName,imgName})
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `<div class="bg-white shadow-lg rounded-2xl h-[550px] ">


              <div class="h-[300px] bg-black/10 rounded-t-md">
           <img class="w-full h-[300px] object-contain rounded-t-2xl" src="${imgName}" alt="" />
          </div>

                 <div class="flex justify-between items-center p-3">
                  <button class="btn rounded-2xl h-5 text-blue-600 border-blue-700">${productCategory}</button>
                  <h4 class="text-balck"><span id="price-${productId}"><i class="fa-solid fa-star text-yellow-500"></i>${productRate}(${productCount})</span></h4>
                </div>


              <div class="p-4 space-y-4 h-[400px]">


                <div>
                  <h4 id="name-${productId}" onclick="my_modal_1.showModal(),modal(${productId})" class="text-2xl mb-3 line-clamp-1">${productName}</h4>
                  
                </div>
                
               <h2 class="text-2xl">$${productPrice}</h2>

                
               <div class="flex gap-2 justify-between">
               <button id="card-${productId}" onclick="productDetails(${productId})" class="btn bg-white rounded-2xl flex-1"><i class="fa-solid fa-eye"></i>Details</button>
               <button id="card-${productId}" onclick="addToCardAll(${productId})" class="btn btn-success rounded-2xl flex-1"><i class="fa-solid fa-cart-shopping"></i>Add to Cart</button>
               </div>
               
              </div>
            </div>
`;
        productsContainer.append(productDiv);
      }
    });
};
threeProducts();

// all products
const allProducts = () => {
  //   document.getElementById("hero-section").style.display = "none";
  //   document.getElementById("choose-section").style.display = "none";
  //   document.getElementById("three-products").style.display = "none";

  document.getElementById("hero-section").classList.add("hiddan");
  document.getElementById("choose-section").classList.add("hiddan");
  document.getElementById("three-products").classList.add("hiddan");
  document.getElementById("all-products").classList.remove("hiddan");
  document.getElementById("cart-view").classList.add("hiddan");

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((allProducts) => {
      const products = allProducts;
      const productsContainer = document.getElementById("products-container");
      productsContainer.innerHTML = "";
      for (let product of products) {
        const productId = product.id;
        const productPrice = product.price;
        const productCategory = product.category;
        const productDescription = product.description;
        const productName = product.title;
        const imgName = product.image;
        const productRate = product.rating.rate;
        const productCount = product.rating.count;
        //   console.log({productId,productPrice,productCategory,productDescription,productName,imgName})
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `<div class="bg-white shadow-lg rounded-2xl h-[550px] ">


              <div class="h-[300px] bg-black/10 rounded-t-md">
           <img class="w-full h-[300px] object-contain rounded-t-2xl" src="${imgName}" alt="" />
          </div>

                 <div class="flex justify-between items-center p-3">
                  <button class="btn rounded-2xl h-5 text-blue-600 border-blue-700">${productCategory}</button>
                  <h4 class="text-balck"><span id="price-${productId}"><i class="fa-solid fa-star text-yellow-500"></i>${productRate}(${productCount})</span></h4>
                </div>


              <div class="p-4 space-y-4 h-[400px]">


                <div>
                  <h4 id="name-${productId}" onclick="my_modal_1.showModal(),modal(${productId})" class="text-2xl mb-3 line-clamp-1">${productName}</h4>
                  
                </div>
                
               <h2 class="text-2xl">$${productPrice}</h2>

                
               <div class="flex gap-2 justify-between">
               <button id="card-${productId}" onclick="productDetails(${productId})" class="btn bg-white rounded-2xl flex-1"><i class="fa-solid fa-eye"></i>Details</button>
               <button id="card-${productId}" onclick="addToCardAll(${productId})" class="btn btn-success rounded-2xl flex-1"><i class="fa-solid fa-cart-shopping"></i>Add to Cart</button>
               </div>
               
              </div>
            </div>
`;
        productsContainer.append(productDiv);
      }
    });
};

// all category
const allCategory = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((json) => {
      const categories = json;
      const categoryContainer = document.getElementById("category-container");
      for (let category of categories) {
        const CategoryDiv = document.createElement("div");
        // CategoryDiv.innerHTML = `<button id="category-btn-${category}" onclick="categoryList('${category}')" class="btn btn-dash btn-success w-full my-1 justify-start category-btn">${category}</button>`;
        // categoryContainer.append(CategoryDiv);
        const button = document.createElement("button");
        button.id = `category-btn-${category}`;
        button.className =
          "btn btn-dash btn-success w-full my-1 justify-start category-btn";
        button.innerText = category;

        button.addEventListener("click", () => {
          categoryList(category);
        });

        CategoryDiv.append(button);
        categoryContainer.append(CategoryDiv);
      }
    });
};
allCategory();

// Dynamic Category
const categoryList = (category) => {
  const url = `https://fakestoreapi.com/products/category/${category}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const products = data;
      const categoryBtn = document.getElementById(`category-btn-${category}`);
      removeActive();
      categoryBtn.classList.add("active");
      console.log(categoryBtn);
      const productsContainer = document.getElementById("products-container");
      productsContainer.innerHTML = "";
      for (let product of products) {
        const productId = product.id;
        const productPrice = product.price;
        const productCategory = product.category;
        const productDescription = product.description;
        const productName = product.title;
        const imgName = product.image;
        const productRate = product.rating.rate;
        const productCount = product.rating.count;
        //   console.log({productId,productPrice,productCategory,productDescription,productName,imgName})
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `<div class="bg-white shadow-lg rounded-2xl h-[550px] ">


              <div class="h-[300px] bg-black/10 rounded-t-md">
           <img class="w-full h-[300px] object-contain rounded-t-2xl" src="${imgName}" alt="" />
          </div>

                 <div class="flex justify-between items-center p-3">
                  <button class="btn rounded-2xl h-5 text-blue-600 border-blue-700">${productCategory}</button>
                  <h4 class="text-balck"><span id="price-${productId}"><i class="fa-solid fa-star text-yellow-500"></i>${productRate}(${productCount})</span></h4>
                </div>


              <div class="p-4 space-y-4 h-[400px]">


                <div>
                  <h4 id="name-${productId}" onclick="my_modal_1.showModal(),modal(${productId})" class="text-2xl mb-3 line-clamp-1">${productName}</h4>
                  <p class="text-[14px] line-clamp-1">
                    ${productDescription}
                  </p>
                </div>
                
               <h2 class="text-2xl">$${productPrice}</h2>

                
               <div class="flex gap-2 justify-between">
               <button id="card-${productId}" onclick="productDetails(${productId})" class="btn bg-white rounded-2xl flex-1"><i class="fa-solid fa-eye"></i>Details</button>
               <button id="card-${productId}" onclick="addToCardAll(${productId})" class="btn btn-success rounded-2xl flex-1"><i class="fa-solid fa-cart-shopping"></i>Add to Cart</button>
               </div>
               
              </div>
            </div>
`;
        productsContainer.append(productDiv);
      }
    });
};

// Category-color-all
document.getElementById("all-category").addEventListener("click", () => {
  const allCategoryBtn = document.getElementById("all-category");

  const categoryBtnAll = document.querySelectorAll(".category-btn");
  categoryBtnAll.forEach((btn) => btn.classList.remove("active"));
  allCategoryBtn.classList.add("active");

  allProducts();
});

// Category-color-other
const removeActive = () => {
  const categoryBtnAll = document.querySelectorAll(".category-btn");
  categoryBtnAll.forEach((btn) => btn.classList.remove("active"));
  const allCategoryBtn = document.getElementById("all-category");
  allCategoryBtn.classList.remove("active");
};

// productDetails
const productDetails = (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const product = data;
      const productId = product.id;
      const productPrice = product.price;
      const productCategory = product.category;
      const productDescription = product.description;
      const productName = product.title;
      const imgName = product.image;
      const productRate = product.rating.rate;
      const productCount = product.rating.count;
      const productsDetailsContainer =
        document.getElementById("product-details");
      productsDetailsContainer.innerHTML = `
        <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
          <div class="modal-box h-[700px]">
            <div class="bg-white shadow-lg rounded-2xl h-[600px] absolute">
              <div>
                <img class="w-[100%] h-[350px] object-contain rounded-t-2xl" src="${imgName}" alt="" />
              </div>

              <div class="p-4 space-y-4">
                <div>
                  <h4 class="text-2xl mb-3">${productName}</h4>
                  <p class="text-[14px]">
                    ${productDescription}
                  </p>
                </div>
                <div class="flex justify-between items-center">
                  <h4 class="text-balck"><span id="price-${productId}"><i class="fa-solid fa-star text-yellow-500"></i>${productRate}(${productCount})</span></h4>
                  <h4 class="text-green-600">$<span>500</span></h4>
                </div>
                <button class="btn btn-success rounded-2xl w-full" onclick="addToCardAll(${productId})">Add to Cart</button>
              </div>
            </div>
            <div class="modal-action">
              <form method="dialog">
                <button class="btn absolute text-red-700 right-10">Close<i class="fa-solid fa-circle-xmark"></i></button>
              </form>
            </div>
          </div>
        </dialog>
        `;
      my_modal_5.showModal();
    });
};

// Add to cart
let cart = [];

function addToCardAll(id) {
  document.getElementById("cart-view").classList.add("hiddan");
  alert("The Product added to cart");
  const url = `https://fakestoreapi.com/products/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const selectProduct = {
        id: data.id,
        name: data.title,
        price: data.price,
      };

      cart.push(selectProduct);

      const showCart = document.getElementById("cart-count");
      showCart.innerHTML = `
        <p class="text-black">${cart.length}</p>
        `;
      // const showcartDiv = document.createElement("div");
      // showcartDiv.innerHTML = `
      // <p>${cart.length}</p>
      // `
      // showCart.append(showcartDiv);
    });
}

const cartView = () => {
  document.getElementById("cart-view").classList.remove("hiddan");
  const cartContainer = document.getElementById("cart-view");
  cartContainer.innerHTML = "";

  for (let car of cart) {
    const li = document.createElement("li");
    li.innerText = car.name;
    cartContainer.appendChild(li);
  }
};
