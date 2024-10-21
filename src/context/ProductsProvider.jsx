import React, { useContext } from "react";
import { createContext, useState, useEffect } from "react";
import api from "../services/config";

const ProductContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <ProductContext.Provider value={products}>
        {children}
      </ProductContext.Provider>
    </div>
  );
}

const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};

const useDetails = (id) => {
  const products = useContext(ProductContext);
  const details = products.find((product) => product.id === id);
  return details;
};
export default ProductsProvider;
export { useProducts, useDetails };
