import React from "react";
import { shortenText } from "../helpers/helper";
import { MdDeleteOutline } from "react-icons/md";
import styles from "./BasketCard.module.css";

function BasketCard({ product, clickHandler }) {
  const { image, title, quantity, id } = product;
  return (
    <div className={styles.card}>
      <img src={image} alt={title} style={{ width: "100px" }} />
      <p>{shortenText(title)}</p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM", product)}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => clickHandler("DECREASE", product)}>-</button>
        )}
        <button onClick={() => clickHandler("INCREASE", product)}>+</button>

        <span>{quantity}</span>
      </div>
    </div>
  );
}

export default BasketCard;
