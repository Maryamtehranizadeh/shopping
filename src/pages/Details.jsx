import React from "react";
import { useDetails } from "../context/ProductsProvider";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./Details.module.css";

function Details() {
  const { id } = useParams();
  const details = useDetails(+id);
  console.log(details);
  if (!details) return <Loader />;

  return (
    <div className={styles.container}>
      <img src={details.image} alt={details.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{details.title}</h3>
        <p className={styles.description}>{details.description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {details.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {details.price}$
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Back to Shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Details;
