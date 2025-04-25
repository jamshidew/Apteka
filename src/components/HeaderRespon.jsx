import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { LuLayoutGrid } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";

const HeaderRespon = ({ cartCount }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md md:hidden z-50">
      <div className="flex justify-between items-center px-4 py-2">
        <NavItem icon={<MdHomeFilled size={22} />} label="Главная" />
        <NavItem icon={<LuLayoutGrid size={22} />} label="Категории" />
        <NavItem icon={<IoSearchOutline size={22} />} label="Поиск" />
        <CartItem
          icon={<FaShoppingCart size={22} />}
          label="Корзина"
          count={cartCount}
        />
        <NavItem icon={<FaRegUser size={22} />} label="Профайл" />
      </div>
    </div>
  );
};

const NavItem = ({ icon, label }) => (
  <div className="flex flex-col items-center text-sm text-gray-600 hover:text-blue-500 cursor-pointer">
    {icon}
    <span className="text-xs mt-1">{label}</span>
  </div>
);

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
