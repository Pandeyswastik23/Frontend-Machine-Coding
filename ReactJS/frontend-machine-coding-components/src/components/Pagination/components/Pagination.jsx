/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "../css/Pagination.css";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();
      if (data && data.products) {
        setProducts(data.products);
      }
      //console.log(data);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };
  console.log(products);
  useEffect(() => {
    fetchProducts();
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(products.length / 10) &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <div className="products__container">
      {products.length > 0 && (
        <div className="products">
          {" "}
          {products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <span className="products__single" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </span>
            );
          })}{" "}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span
            className={page > 1 ? "" : "pagination_disabled"}
            onClick={() => selectPageHandler(page - 1)}
          >
            ◀️
          </span>
          {[...Array(Math.ceil(products.length / 10))].map((id, i) => {
            return (
              <span
                className={page === i + 1 ? "selected_btn" : ""}
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className={
              page < Math.ceil(products.length / 10)
                ? ""
                : "pagination_disabled"
            }
            onClick={() => selectPageHandler(page + 1)}
          >
            ▶️
          </span>
        </div>
      )}
    </div>
  );
};

export default Pagination;
