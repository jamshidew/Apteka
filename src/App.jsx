import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Section from "./pages/HomePage.jsx";
import ShoppingSearch from "./components/ShoppingCartList.jsx";
import ShoppingCart from "./components/ShoppingCartList.jsx";
function HomePage() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cartitem" element={<ShoppingSearch />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default HomePage;
