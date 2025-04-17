import {
  PiFlowerLotusLight,
  PiFlowerLotusBold,
  PiPillLight,
} from "react-icons/pi";
import { TiFlashOutline } from "react-icons/ti";
import { FaHandHoldingHeart } from "react-icons/fa6";

function CategoryPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="font-semibold text-3xl pb-10">Категории</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex flex-col items-center mb-3">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-2">
              <PiPillLight className="w-6 h-6" />
            </div>
            <h3 className="text-center font-medium">Лекарственные препараты</h3>
          </div>

          <ul className="mt-2 space-y-1">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Тест на определение беременности
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex flex-col items-center mb-3">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-2">
              <TiFlashOutline className="w-6 h-6" />
            </div>
            <h3 className="text-center font-medium">Витамины и БАДы</h3>
          </div>

          <ul className="mt-2 space-y-1">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Тест на определение беременности
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex flex-col items-center mb-3">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-2">
              <PiFlowerLotusBold className="w-6 h-6" />
            </div>
            <h3 className="text-center font-medium">Фитопрепараты</h3>
          </div>

          <ul className="mt-2 space-y-1">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Гигиена и косметика
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Подгузники и пеленки
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Средства для ухода за зубами и полостью рта
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex flex-col items-center mb-3">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-2">
              <img
                src="https://api2.gopharm.uz/storage/products/category/image/01HW8PD9GY6RB60SQJM7G30ZS3.svg"
                className="w-6 h-6"
              />
            </div>
            <h3 className="text-center font-medium">Планирование семьи</h3>
          </div>

          <ul className="mt-2 space-y-1">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Медицинские инструменты
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Медицинский трикотаж
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Перевязочные материалы
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Перчатки медицинские
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Шприцы, катетеры, системы для инфузий
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex flex-col items-center mb-3">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-2">
              <img
                src="https://api2.gopharm.uz/storage/products/category/image/01HW8MSF33FBEK0AY8XQ28WW1J.svg"
                className="w-6 h-6"
              />
            </div>
            <h3 className="text-center font-medium">Мама и малыш</h3>
          </div>

          <ul className="mt-2 space-y-1">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Ингаляторы / небулайзеры
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Термометры
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Тонометры и Стетоскопы
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex flex-col items-center mb-3">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-2">
              <img
                src="https://api2.gopharm.uz/storage/products/category/image/01HW8N13KXAW66MPJW4XZJCVAN.svg"
                className="w-6 h-6"
              />
            </div>
            <h3 className="text-center font-medium">Приборы медицинские</h3>
          </div>

          <ul className="mt-2 space-y-1">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Антисептики и гигиенически средства
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Женские гигиенические средства
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Интимная Гигиена
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Лечебные масла
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Личная Гигиена
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Средства для ухода за зубами и полостью рта
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Средства для ухода за кожей лица
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Средства для ухода за кожей рук, ног и ногтями
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex flex-col items-center mb-3">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-2">
              <img src="https://api2.gopharm.uz/storage/products/category/image/01HW8NESVZMDTAWA3XPW5QFD7G.svg" />
            </div>
            <h3 className="text-center font-medium">Медицинские изделия</h3>
          </div>

          <ul className="mt-2 space-y-1">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Ингаляторы / небулайзеры
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Термометры
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Тонометры и Стетоскопы
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex flex-col items-center mb-3">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-2">
              <img
                src="https://api2.gopharm.uz/storage/products/category/image/01HW8MH5N75JX0EGNWEK7T4NWV.svg"
                className="w-6 h-6"
              />
            </div>
            <h3 className="text-center font-medium">Гигиена, красота и уход</h3>
          </div>

          <ul className="mt-2 space-y-1">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Антисептики и гигиенически средства
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Женские гигиенические средства
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Интимная Гигиена
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Лечебные масла
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Личная Гигиена
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Средства для ухода за зубами и полостью рта
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Средства для ухода за кожей лица
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 text-sm block py-0.5"
              >
                Средства для ухода за кожей рук, ног и ногтями
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default CategoryPage;
