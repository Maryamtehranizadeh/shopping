import React, { useState } from "react";
import { createQueryObject } from "../helpers/helper.js";
import { FaListUl } from "react-icons/fa";
import styles from "./Sidebar.module.css";
import { categories } from "../constants/list.js";

function Sidebar({ setQuery, query }) {
  const categoryHandler = (e) => {
    const tagName = e.target.tagName;
    if (tagName !== "LI") return;
    const category = e.target.innerText.toLowerCase();
    console.log(category);
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map((item) => (
          <li
            key={item.id}
            className={
              query.category === item.type.toLocaleLowerCase()
                ? styles.selected
                : null
            }
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
