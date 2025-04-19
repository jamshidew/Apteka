import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import { products } from "/src/data/datas.js";
import LoginPage from "./pages/LoginPage.jsx";
import Section from "./pages/HomePage.jsx";
import ShoppingSearch from "./components/ShoppingCartList.jsx";
import ShoppingCartList from "./components/ShoppingCart.jsx";
import ProductDetail from "./pages/ProductPage.jsx";
import { useState } from "react";
function HomePage() {
  const [cartDatas, setCartDatas] = useState([]);
  return (
    <>
      <Header cartDatas={cartDatas} />
      <Routes>
        <Route
          path="/"
          element={
            <Section cartDatas={cartDatas} setCartDatas={setCartDatas} />
          }
        />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cartitem" element={<ShoppingSearch />} />
        <Route
          path="/shoppingcart"
          element={<ShoppingCartList cartDatas={cartDatas} />}
        />
        <Route path="/cart" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default HomePage;
