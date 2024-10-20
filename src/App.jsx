import React from "react";
import { Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Details from "./pages/Details";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import ProductsProvider from "./context/ProductsProvider";
import CartProvider from "./context/CartProvider";
import Layout from "./layouts/Layout";
function App() {
  return (
    <div>
      <CartProvider>
        <ProductsProvider>
          <Layout>
            <Routes>
              <Route index element={<Navigate to="/products" replace />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<Details />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Layout>
        </ProductsProvider>
      </CartProvider>
    </div>
  );
}

export default App;
