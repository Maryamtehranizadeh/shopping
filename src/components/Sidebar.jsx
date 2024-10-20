import React from "react";
import { createQueryObject } from "../helpers/helper.js";
import { FaListUl } from "react-icons/fa";

function Sidebar({ setQuery, query }) {
  const categoryHandler = (e) => {
    const tagName = e.target.tagName;
    if (tagName !== "LI") return;
    const category = e.target.innerText.toLowerCase();
    // console.log(category);
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
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
  );
}

export default Sidebar;
