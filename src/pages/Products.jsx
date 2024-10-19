import React from "react";
import { useState, useEffect } from "react";
import { useProducts } from "../context/ProductsProvider";
import styles from "./Products.module.css";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";
import { searchProducts, filterProducts } from "../helpers/helper.js";
import { useSearchParams } from "react-router-dom";
import { createQueryObject } from "../helpers/helper.js";

function Products() {
  const [search, setSearch] = useState("");
  const products = useProducts();
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchparams, setSearchParams] = useSearchParams();
  useEffect(() => {
    console.log(products);
    setDisplayed(products);
  }, [products]);
  useEffect(() => {
    console.log(query);
    setSearchParams(query);
    let finalProducts = searchProducts(products, query.search);
    // console.log(finalProducts);
    finalProducts = filterProducts(finalProducts, query.category);
    console.log(finalProducts);
    setDisplayed(finalProducts);
  }, [query]);

  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  const categoryHandler = (e) => {
    const tagName = e.target.tagName;
    if (tagName !== "LI") return;
    const category = e.target.innerText.toLowerCase();
    // console.log(category);
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search here"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Products;
