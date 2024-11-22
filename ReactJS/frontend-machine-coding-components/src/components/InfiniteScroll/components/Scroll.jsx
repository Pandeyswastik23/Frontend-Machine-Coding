/* eslint-disable no-debugger */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/*
Implement Infinite Scrolling

Requirements:
1 - Implement infinite scrolling for fetching more products, when user reaches bottom of the page
2 - Show the loading indicator while fetching the data
3 - Implement optimizations to prevent excessive API requests during scrolling

*/

import { useEffect, useState } from "react";
import "../css/Scroll.css";

const InfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetch(
        `https://dummyjson.com/products?limit=${page * 20}`
      );
      const response = await data.json();
      setProducts(response);
      setPage(page + 1);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  const myThrottle = (cb, delay) => {
    let lastExecutionlimit;
    return function (...args) {
      const now = Date.now();
      console.log(now);
      if (!lastExecutionlimit || now - lastExecutionlimit >= delay) {
        cb.apply(this, args);
        lastExecutionlimit = now;
      }
    };
  };

  let lastScrollTop = 0;
  const handleScroll = myThrottle(() => {
    const scrollTop = document.documentElement.scrollTop || window.screenY;
    if (
      scrollTop > lastScrollTop &&
      window.innerHeight + scrollTop + 900 >
        document.documentElement.offsetHeight
    ) {
      console.log("api called");
      fetchData();
    }
  }, 500);
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const { products: allProducts } = products;
  console.log(allProducts);

  return (
    <div className="container">
      <h1>Infinite Scrolling</h1>

      {allProducts?.length > 0 && (
        <div className="products">
          {allProducts?.map((prod) => {
            return (
              <div className="products__single" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </div>
            );
          })}
        </div>
      )}
      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
};

export default InfiniteScroll;
