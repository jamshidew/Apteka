import { Route, Routes, useParams } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import { products } from "/src/data/datas.js";
import LoginPage from "./pages/LoginPage.jsx";
import Section from "./pages/HomePage.jsx";
import ShoppingSearch from "./components/ShoppingCartList.jsx";
import ProductDetail from "./pages/ProductPage.jsx";
import { useEffect, useState } from "react";
import CartPage from "./pages/CartPage.jsx";
function HomePage() {
  const [cartDatas, setCartDatas] = useState(
    JSON.parse(localStorage.getItem("cartDatas")) || []
  );
  useEffect(() => {
    localStorage.setItem("cartDatas", JSON.stringify(cartDatas));
  }, [cartDatas]);
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
          element={
            <CartPage
              products={products}
              cartDatas={cartDatas}
              setCartDatas={setCartDatas}
            />
          }
        />
        <Route
          path="/carddetail/:id"
          element={
            <ProductDetail
              key={products.id}
              products={products}
              cartDatas={cartDatas}
              setCartDatas={setCartDatas}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default HomePage;
