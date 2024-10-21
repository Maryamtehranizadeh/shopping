import React from "react";
import BasketCard from "../components/BasketCard";
import { useCart } from "../context/CartProvider";
import BasketSidebar from "../components/BasketSidebar";
import styles from "./Checkout.module.css";
import { Link } from "react-router-dom";

function Checkout() {
  const [state, dispatch] = useCart();
  const clickHandler = (type, payload) => dispatch({ type, payload });
  if (!state.itemsCounter || !!state.checkout)
    return (
      <div className={styles.container}>
        <h3> Empty Cart!</h3>
        <Link to="/products" style={{ color: "tomato" }}>
          Continue Shopping
        </Link>
      </div>
    );

  console.log(state);
  return (
    <div className={styles.container}>
      <BasketSidebar state={state} clickHandler={clickHandler} />

      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            product={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default Checkout;
