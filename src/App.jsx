import { MdPerson } from "react-icons/md";
import { PiPillLight } from "react-icons/pi";
import { FaCartShopping, FaHandHoldingHeart } from "react-icons/fa6";
import { TiFlashOutline } from "react-icons/ti";
import { PiFlowerLotusLight } from "react-icons/pi";
import { products, products2 } from "/src/data/datas.js";
import ProductCard from "./components/ProductCard";
import ProductCard2 from "./components/CategoryCard";
function HomePage() {
  return (
    <div className="container">
      <div className="mx-auto px-4 py-6">
        <div className="py-4 bg-white mx-auto flex items-center gap-10 border-b px-10">
          <a href="">
            <img src="https://www.gopharm.uz/_nuxt/logo.DL0qhU9d.svg" alt="" />
          </a>
          <a
            href="#"
            className="router-link-active router-link-exact-active flex justify-center items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg text-sm leading-6 font-semibold active:bg-blue-800"
          >
            Категории
          </a>
          <div className="grow relative ">
            <input
              type="text"
              placeholder="Dorilar qidirish"
              className="block w-full rounded-lg border-0 p-3 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-500 text-sm leading-6"
            />
          </div>
          <a
            href="/auth"
            class="flex flex-col gap-0.5 font-semibold text-sm text-blue-500 items-center"
          >
            <MdPerson className="w-[20px] h-[20px]" />
            <span className="truncate block w-full text-center">Войти</span>
          </a>
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
        <div className="space-y-10 mx-auto px-10 pt-10">
          <div className="flex  gap-4">
            <a
              href="/catalog/lekarstvennye-preparaty"
              className="flex flex-col gap-3 items-center flex-1 undefined"
            >
              <span className="flex bg-blue-50 p-4 rounded-full text-blue-500">
                <PiPillLight alt="547" className="text-[30px]" />
              </span>
              <span className="text-center text-sm">
                Лекарственные препараты
              </span>
            </a>
            <a
              href="/catalog/lekarstvennye-preparaty"
              className="flex flex-col gap-3 items-center flex-1 undefined"
            >
              <span className="flex bg-blue-50 p-4 rounded-full text-blue-500">
                <TiFlashOutline alt="547" className="text-[30px]" />
              </span>
              <span className="text-center text-sm">Витамины и БАДы</span>
            </a>
            <a
              href="/catalog/lekarstvennye-preparaty"
              className="flex flex-col gap-3 items-center flex-1 undefined"
            >
              <span className="flex bg-blue-50 p-4 rounded-full text-blue-500">
                <PiFlowerLotusLight alt="547" className="text-[30px]" />
              </span>
              <span className="text-center text-sm">Фитопрепараты</span>
            </a>
            <a
              href="/catalog/lekarstvennye-preparaty"
              className="flex flex-col gap-3 items-center flex-1 undefined"
            >
              <span className="flex bg-blue-50 p-4 rounded-full text-blue-500">
                <FaHandHoldingHeart alt="547" className="text-[30px]" />
              </span>
              <span className="text-center text-sm">Планирование семьи</span>
            </a>
            <a
              href="/catalog/lekarstvennye-preparaty"
              className="flex flex-col gap-3 items-center flex-1 undefined"
            >
              <span className="flex bg-blue-50 p-4 rounded-full text-blue-500">
                <img
                  src="https://api2.gopharm.uz/storage/products/category/image/01HW8MSF33FBEK0AY8XQ28WW1J.svg"
                  alt="547"
                  className="text-[30px]"
                />
              </span>
              <span className="text-center text-sm">Мама и малыш</span>
            </a>
            <a
              href="/catalog/lekarstvennye-preparaty"
              className="flex flex-col gap-3 items-center flex-1 undefined"
            >
              <span className="flex bg-blue-50 p-4 rounded-full text-blue-500">
                <img
                  src="https://api2.gopharm.uz/storage/products/category/image/01HW8NESVZMDTAWA3XPW5QFD7G.svg"
                  alt="547"
                  className="text-[30px]"
                />
              </span>
              <span className="text-center text-sm">Медицинские изделия</span>
            </a>
            <a
              href="/catalog/lekarstvennye-preparaty"
              className="flex flex-col gap-3 items-center flex-1 undefined"
            >
              <span className="flex bg-blue-50 p-4 rounded-full text-blue-500">
                <img
                  src="https://api2.gopharm.uz/storage/products/category/image/01HW8N13KXAW66MPJW4XZJCVAN.svg"
                  alt="547"
                  className="text-[30px]"
                />
              </span>
              <span className="text-center text-sm">Приборы медицинские</span>
            </a>
            <a
              href="/catalog/lekarstvennye-preparaty"
              className="flex flex-col gap-3 items-center flex-1 undefined"
            >
              <span className="flex bg-blue-50 p-4 rounded-full text-blue-500">
                <img
                  src="https://api2.gopharm.uz/storage/products/category/image/01HW8MH5N75JX0EGNWEK7T4NWV.svg"
                  alt="547"
                  className="text-[30px]"
                />
              </span>
              <span className="text-center text-sm">
                Гигиена, красота и уход
              </span>
            </a>
          </div>
        </div>
        <div></div>
      </div>
      <section className="flex flex-col gap-10">
        <div className="flex justify-between items-baseline">
          <h2 className="font-semibold text-3xl">Популярные препараты</h2>
          <a href="/collection/popular" className="text-blue-500 text-sm">
            Смотреть все
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="flex justify-center items-center gap-2 bg-white text-gray-500 py-2 px-4 rounded-lg text-sm leading-6 font-semibold ring-1 ring-inset ring-gray-200">
            Смотреть все Популярные препараты
          </button>
        </div>
        <div className="flex justify-between items-baseline">
          <h2 className="font-semibold text-3xl">Популярные препараты</h2>
          <a href="/collection/popular" className="text-blue-500 text-sm">
            Смотреть все
          </a>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {products2.map((products2) => (
            <ProductCard2 key={products2.id} product={products2} />
          ))}
        </div> */}
      </section>
    </div>
  );
}

export default HomePage;
