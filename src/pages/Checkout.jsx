import React from "react";
import BasketCard from "../components/BasketCard";
import { useCart } from "../context/CartProvider";
import BasketSidebar from "../components/BasketSidebar";
import styles from "./Checkout.module.css";

function Checkout() {
  const [state, dispatch] = useCart();
  const clickHandler = (type, payload) => dispatch({ type, payload });

  console.log(state);
  return (
    <div className={styles.container}>
      <div>
        <BasketSidebar />
      </div>
      <div>
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
