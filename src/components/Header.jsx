import { MdPerson } from "react-icons/md";
import { FaCartShopping, FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <div className="mx-auto px-4 py-6">
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
          <a
            href="/cart"
            className="flex flex-col gap-0.5 font-semibold text-sm text-blue-500 items-center relative"
          >
            <div className="absolute -top-2 -right-2">
              <div className="inline-flex text-[10px] font-semibold items-center justify-center rounded-full bg-red-500 text-white w-6 h-6">
                1
              </div>
            </div>
            <FaCartShopping className="w-[20px] h-[20px]" /> Корзина
          </a>
        </div>
      </div>
      {/* <div>
        <div className="flex items-center justify-between p-4 gap-2 bg-white border-b">
          <div>
            <a
              href=""
              className="flex justify-center items-center gap-2 bg-white text-gray-500 py-2 px-3 rounded-lg text-sm leading-6 font-semibold ring-1 ring-inset ring-gray-200 min-h-10"
            >
              <FaArrowLeft className="w-[20px] h-[20px]" />
            </a>
          </div>
          <div className="grow">
            <input
              type="text"
              placeholder="Dori qidirish"
              className="block w-full rounded-lg border-0 p-2 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-500 leading-6"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Header;
