const products = [
  {
    name: "Syltherine",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    image: "./images/Images (15).png"
  },
  {
    name: "Liviosa",
    desc: "Stylish cafe chair",
    price: "Rp 4.500.000",
    oldPrice: "Rp 3.500.000",
    image: "./images/Images (22).png"
  },
  {
    name: "Lolito",
    desc: "Stylish cafe chair",
    price: "Rp 2.550.000",
    oldPrice: "Rp 3.500.000",
    image: "./images/Images (16).png"
  },
  {
    name: "Respira",
    desc: "Stylish cafe chair",
    price: "Rp 7.500.000",
    oldPrice: "Rp 3.500.000",
    image: "./images/Images (17).png"
  },
  {
    name: "Grifo",
    desc: "Stylish cafe chair",
    price: "Rp 2.590.000",
    oldPrice: "Rp 3.500.000",
    image: "./images/Images (18).png"
  },
  {
    name: "Muggo",
    desc: "Stylish cafe chair",
    price: "Rp 100.500.000",
    oldPrice: "Rp 3.500.000",
    image: "./images/Images (19).png"
  },
  {
    name: "Pinkgy",
    desc: "Stylish cafe chair",
    price: "Rp 2.5200.000",
    oldPrice: "Rp 3.500.000",
    image: "./images/Images (20).png"
  },
  {
    name: "Potty",
    desc: "Stylish cafe chair",
    price: "Rp 21.500.000",
    oldPrice: "Rp 3.500.000",
    image: "./images/Images (20).png"
  }
];
const container = document.getElementById("products-container");
    products.forEach((product) => {
      container.innerHTML += `
      <div class="p-3 col-lg-3 col-md-6 col-12 position-relative">
        <div class="position-relative overflow-hidden p-0 m-0">
          <div class="overlay position-absolute text-center w-100 h-100 d-flex justify-content-center align-items-center flex-column">
            <button class="btn bg-white border-0"> Add To Cart</button>
            <div class="overlay-icons d-flex justify-content-center align-items-center gap-3 mt-3">
              <div class="d-flex gap-1 text-white align-items-center justify-content-center">
                <i class="fa-solid fa-share fa-lg" style="color: #ffffff;"></i>
                <p class="mt-2 fw-medium">Share</p>
              </div>
              <div class="d-flex gap-1 text-white align-items-center justify-content-center">
                <i class="fa-solid fa-heart fa-lg" style="color: #ffffff;"></i>
                <p class="mt-2 fw-medium">Like</p>
              </div>
              <div class="d-flex gap-1 text-white align-items-center justify-content-center">
                <i class="fa-solid fa-code-compare fa-lg" style="color: #ffffff;"></i>
                <p class="mt-2 fw-medium">Compare</p>
              </div>
            </div>
          </div>
          <img src="${product.image}" alt="" class="w-100">
          <h4 class="fw-medium my-2">${product.name}</h4>
          <p class="text-muted">${product.desc}</p>
          <div class="prices d-flex justify-content-between">
            <p class="fw-bold fs-4">${product.price}</p>
            <p class="text-muted fs-6"><del>${product.oldPrice}</del></p>
          </div>
        </div>
      </div>
    `;
    });
