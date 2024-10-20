import React from "react";
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from "../helpers/helper";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartProvider";

function Card({ data }) {
  //   console.log(data);
  const { id, title, image, price } = data;

  const [state, dispatch] = useCart();

  console.log(state);

  const clickHandler = () => {
    dispatch({ type: "ADD_ITEM", payload: data });
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3> {shortenText(title)}</h3>
      <p>{price}$</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <button onClick={clickHandler}>
          <TbShoppingBagCheck />
        </button>
      </div>
    </div>
  );
}

export default Card;
