import React from "react";
import { Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Details from "./pages/Details";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import ProductsProvider from "./context/ProductsProvider";

function App() {
  return (
    <div>
      <ProductsProvider>
        <Routes>
          <Route index element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Details />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </ProductsProvider>
    </div>
  );
}

export default App;
