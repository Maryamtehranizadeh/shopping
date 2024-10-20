import React from "react";
import { useState, useEffect } from "react";
import { useProducts } from "../context/ProductsProvider";
import styles from "./Products.module.css";
import Card from "../components/Card";
import Loader from "../components/Loader";
import {
  searchProducts,
  filterProducts,
  getInitialQuery,
} from "../helpers/helper.js";

import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox.jsx";
import Sidebar from "../components/Sidebar.jsx";

function Products() {
  const [search, setSearch] = useState("");
  const products = useProducts();
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchparams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // console.log(products);
    setDisplayed(products);
    setQuery(getInitialQuery(searchparams));
  }, [products]);

  useEffect(() => {
    // console.log(query);
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    // console.log(finalProducts);
    finalProducts = filterProducts(finalProducts, query.category);
    console.log(finalProducts);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <Sidebar setQuery={setQuery} query={query} />
      </div>
    </>
  );
}

export default Products;
