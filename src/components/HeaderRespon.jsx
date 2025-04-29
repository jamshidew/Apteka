import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { LuLayoutGrid } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HeaderRespon = ({ cartCount }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t block lg:hidden border-gray-200 shadow-md z-50">
      <div className="container flex justify-between items-center px-4 py-2">
        <Link
          to="/"
          className="relative flex flex-col items-center text-sm text-gray-600 hover:text-blue-500 cursor-pointer"
        >
          <MdHomeFilled size={22} />
          Главная
        </Link>
        <Link
          to={`/categories`}
          className="relative flex flex-col items-center text-sm text-gray-600 hover:text-blue-500 cursor-pointer"
        >
          <LuLayoutGrid size={22} />
          Категории
        </Link>
        <Link
          to="/shoppingcart"
          className="relative flex flex-col items-center text-sm text-gray-600 hover:text-blue-500 cursor-pointer"
        >
          <FaShoppingCart size={22} />
          Корзина
        </Link>
        <Link
          to="/login"
          className="relative flex flex-col items-center text-sm text-gray-600 hover:text-blue-500 cursor-pointer"
        >
          <FaRegUser size={22} />
          Профайл
        </Link>
      </div>
    </div>
  );
};

const CartItem = ({ icon, label, count }) => (
  <div className="relative flex flex-col items-center text-sm text-gray-600 hover:text-blue-500 cursor-pointer">
    {icon}
    {count > 0 && (
      <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
        {count}
      </span>
    )}
    <span className="text-xs mt-1">{label}</span>
  </div>
);

export default HeaderRespon;
