import { MdPerson } from "react-icons/md";
import { FaCartShopping, FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HeaderRespon from "./HeaderRespon";

function Header({ cartDatas }) {
  const cartCount = 4;
  return (
    <div className="container ">
      <div className="mx-auto px-4 py-3 hidden lg:block">
        <div className="py-4 bg-white mx-auto flex items-center gap-10 border-b px-10">
          <Link to={`/`}>
            <img
              src="https://www.gopharm.uz/_nuxt/logo.DL0qhU9d.svg"
              alt=""
              className="shrink-0"
            />
          </Link>
          <Link
            className="router-link-active router-link-exact-active flex justify-center items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg text-sm leading-6 font-semibold active:bg-blue-800"
            to={`/categories`}
          >
            Категории
          </Link>
          <div className="grow relative ">
            <input
              type="text"
              placeholder="Dorilar qidirish"
              className="block w-full rounded-lg border-0 p-3 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-500 text-sm leading-6"
            />
          </div>
          <Link
            to="/login"
            className="flex flex-col gap-0.5 font-semibold text-sm text-blue-500 items-center"
          >
            <MdPerson className="w-[20px] h-[20px]" />
            <span className="truncate block w-full text-center">Войти</span>
          </Link>
          <Link
            to="/shoppingcart"
            className="flex flex-col gap-0.5 font-semibold text-sm text-blue-500 items-center relative"
          >
            {cartDatas.length != 0 && (
              <div className="absolute -top-2 -right-2">
                <div className="inline-flex text-[10px] font-semibold items-center justify-center rounded-full bg-red-500 text-white w-6 h-6">
                  {cartDatas.length}
                </div>
              </div>
            )}
            <FaCartShopping className="w-[20px] h-[20px]" /> Корзина
          </Link>
        </div>
      </div>
      <HeaderRespon />
      <div className="flex lg:hidden md:block items-center justify-between p-4 gap-2 bg-white border-b ">
        <div>
          <Link
            to=""
            className="flex justify-center items-center gap-2 bg-white text-gray-500 py-2 px-3 rounded-lg text-sm leading-6 font-semibold ring-1 ring-inset ring-gray-200 min-h-10"
          >
            <FaArrowLeftLong />
          </Link>
        </div>
        <div className="grow">
          <input
            type="text"
            className="block w-full rounded-lg border-0 py-2 ring-gray-200 placeholder:text-gray-400 focus:ring-blue-500"
            placeholder="Поиск лекарств"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
