import React from "react";
import { products } from "/src/data/datas.js";
import ProductCard from "/src/components/ProductCard.jsx";
import DrugList from "/src/components/CategoryCard.jsx";
import SwiperSlideList from "/src/components/HeaderSwiper.jsx";
import { PiPillLight } from "react-icons/pi";
import { TiFlashOutline } from "react-icons/ti";
import { PiFlowerLotusLight } from "react-icons/pi";
import {
  FaHandHoldingHeart,
  FaTruck,
  FaWallet,
  FaThLarge,
} from "react-icons/fa";
function Section() {
  return (
    <div className="container">
      <div className="space-y-10 mx-auto px-10 pt-10">
        <div className="flex  gap-4">
          <a
            href="/catalog/lekarstvennye-preparaty"
            className="flex flex-col gap-3 items-center flex-1 undefined"
          >
            <span className="flex bg-blue-50 p-4 rounded-full text-blue-500">
              <PiPillLight alt="547" className="text-[30px]" />
            </span>
            <span className="text-center text-sm">Лекарственные препараты</span>
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
            <span className="text-center text-sm">Гигиена, красота и уход</span>
          </a>
        </div>
      </div>
      {/* <div className="flex flex-col gap-6 p-4">
          <div className="grid grid-cols-2 gap-2">
            <a
              href="/catalog/lekarstvennye-preparaty"
              className="flex border rounded-lg overflow-hidden border-gray-200"
            >
              <span className="flex bg-blue-50 p-3 text-blue-500 items-center shrink-0">
                <PiPillLight alt="547" className="text-[30px]" />
              </span>
              <span className="text-xs p-2 flex items-center leading-tight">
                Лекарственные препараты
              </span>
            </a>
            <a
              href="/catalog/lekarstvennye-preparaty"
              className="flex border rounded-lg overflow-hidden border-gray-200"
            >
              <span className="flex bg-blue-50 p-3 text-blue-500 items-center shrink-0">
                <TiFlashOutline alt="547" className="text-[30px]" />
              </span>
              <span className="text-xs p-2 flex items-center leading-tight">
                Витамины и БАДы
              </span>
            </a>
            <a
              href="/catalog/lekarstvennye-preparaty"
              className="flex border rounded-lg overflow-hidden border-gray-200"
            >
              <span className="flex bg-blue-50 p-3 text-blue-500 items-center shrink-0">
                <PiFlowerLotusBold alt="547" className="text-[30px]" />
              </span>
              <span className="text-xs p-2 flex items-center leading-tight">
                Фитопрепараты
              </span>
            </a>
            <a
              href="/catalog/lekarstvennye-preparaty"
              className="flex border rounded-lg overflow-hidden border-gray-200"
            >
              <span className="flex bg-blue-50 p-3 text-blue-500 items-center shrink-0">
                <FaHandHoldingHeart alt="547" className="text-[30px]" />
              </span>
              <span className="text-xs p-2 flex items-center leading-tight">
                Планирование семьи
              </span>
            </a>
            <a
              href="/catalog/lekarstvennye-preparaty"
              className="flex border rounded-lg overflow-hidden border-gray-200"
            >
              <span className="flex bg-blue-50 p-3 text-blue-500 items-center shrink-0">
                <img
                  src="https://api2.gopharm.uz/storage/products/category/image/01HW8MSF33FBEK0AY8XQ28WW1J.svg"
                  alt="547"
                  className="text-[30px]"
                />
              </span>
              <span className="text-xs p-2 flex items-center leading-tight">
                Мама и малыш
              </span>
            </a>
            <a
              href="/catalog/lekarstvennye-preparaty"
              className="flex border rounded-lg overflow-hidden border-gray-200"
            >
              <span className="flex bg-blue-50 p-3 text-blue-500 items-center shrink-0">
                <img
                  src="https://api2.gopharm.uz/storage/products/category/image/01HW8NESVZMDTAWA3XPW5QFD7G.svg"
                  alt="547"
                  className="text-[30px]"
                />
              </span>
              <span className="text-xs p-2 flex items-center leading-tight">
                Медицинские изделия
              </span>
            </a>
            <a
              href="/catalog/lekarstvennye-preparaty"
              className="flex border rounded-lg overflow-hidden border-gray-200"
            >
              <span className="flex bg-blue-50 p-3 text-blue-500 items-center shrink-0">
                <img
                  src="https://api2.gopharm.uz/storage/products/category/image/01HW8N13KXAW66MPJW4XZJCVAN.svg"
                  alt="547"
                  className="text-[30px]"
                />
              </span>
              <span className="text-xs p-2 flex items-center leading-tight">
                Приборы медицинские
              </span>
            </a>
            <a
              href="/catalog/lekarstvennye-preparaty"
              className="flex border rounded-lg overflow-hidden border-gray-200"
            >
              <span className="flex bg-blue-50 p-3 text-blue-500 items-center shrink-0">
                <img
                  src="https://api2.gopharm.uz/storage/products/category/image/01HW8MH5N75JX0EGNWEK7T4NWV.svg"
                  alt="547"
                  className="text-[30px]"
                />
              </span>
              <span className="text-xs p-2 flex items-center leading-tight">
                Гигиена, красота и уход
              </span>
            </a>
          </div>
        </div> */}
      <section className="flex flex-col gap-10">
        <SwiperSlideList />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {products.map((product) => (
            <DrugList key={product.id} item={product} />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="flex justify-center items-center gap-2 bg-white text-gray-500 py-2 px-4 rounded-lg text-sm leading-6 font-semibold ring-1 ring-inset ring-gray-200">
            Смотреть все
          </button>
        </div>
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8">
            <h1 className="font-semibold text-3xl">
              Почему стоит заказывать лекарства у нас?
            </h1>
            <div className="grid grid-cols-1 pt-[50px] md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaHandHoldingHeart className="text-white w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Доверие</h3>
                <p className="text-gray-700">
                  Более 15 000 обслуженных и лояльных клиентов.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaTruck className="text-white w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Доставка</h3>
                <p className="text-gray-700">Максимально в кратчайшее время.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaWallet className="text-white w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Экономия</h3>
                <p className="text-gray-700">
                  Бонусные баллы - Покупайте и зарабатывайте.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaThLarge className="text-white w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Широкий Ассортимент</h3>
                <p className="text-gray-700">
                  Более 12,000 наименований товаров.
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Section;
