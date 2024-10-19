import React from "react";
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from "../helpers/helper";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function Card({ data }) {
  //   console.log(data);
  const { id, title, image, price } = data;
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3> {shortenText(title)}</h3>
      <p>{price}$</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <button>
          <TbShoppingBagCheck />
        </button>
      </div>
    </div>
  );
}

export default Card;
