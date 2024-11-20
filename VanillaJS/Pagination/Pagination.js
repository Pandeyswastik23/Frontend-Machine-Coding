document.addEventListener("DOMContentLoaded", function () {
  let products = [];
  let pageNum = 1;

  const containerDiv = document.querySelector(".container");

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();
      if (data && data.products) {
        products = data.products;
        console.log(products);
      }
      renderImage();
    } catch (error) {
      console.log("Error fetching products: ", error);
    }
  };

  const renderImage = () => {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    const paginationContainer = document.createElement("div");
    paginationContainer.classList.add("pagination-btn");

    if (products.length > 0) {
      products.slice(pageNum * 10 - 10, pageNum * 10).forEach((prod) => {
        const singleImg = document.createElement("div");
        singleImg.classList.add("image-single");
        singleImg.innerHTML = `<img src="${prod.thumbnail}" alt="${prod.title}"/> <span>${prod.title}</span>`;
        imageContainer.appendChild(singleImg);
      });
    }

    if (pageNum > 1) {
      const prevBtn = createPagination("◀️", () => {
        selectPageHandler(pageNum - 1);
      });
      paginationContainer.appendChild(prevBtn);
    }

    for (let i = 0; i < products.length / 10; i++) {
      const pageButton = createPagination(
        i + 1,
        () => {
          selectPageHandler(i + 1);
        },
        pageNum === i + 1
      );
      paginationContainer.appendChild(pageButton);
    }

    if (pageNum < products.length / 10) {
      const nextBtn = createPagination("▶️", () => {
        selectPageHandler(pageNum + 1);
      });
      paginationContainer.appendChild(nextBtn);
    }

    containerDiv.appendChild(imageContainer);
    containerDiv.appendChild(paginationContainer);
  };
  const createPagination = (text, clickHandler, isSelected = false) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", clickHandler);

    if (isSelected) {
      button.classList.add("btn-selected");
    }
    return button;
  };
  const selectPageHandler = (page) => {
    pageNum = page;
    containerDiv.innerHTML = "";
    renderImage();
  };

  fetchProducts();
});
