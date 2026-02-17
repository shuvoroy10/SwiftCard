const allProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((allProducts) => {

      const products3 = allProducts.slice(0, 3);
      const productsContainer = document.getElementById("products-container");
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
allProducts();
