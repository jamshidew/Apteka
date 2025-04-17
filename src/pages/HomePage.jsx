import { products } from "../data/datas.js";
import ProductCard from "../components/ProductCard.jsx";
import { TiFlashOutline } from "react-icons/ti";
import {
  PiFlowerLotusLight,
  PiFlowerLotusBold,
  PiPillLight,
} from "react-icons/pi";
import { FaArrowLeftLong } from "react-icons/fa6";
import SwiperSlideList from "./../components/HeaderSwiper";
import {
  FaHandHoldingHeart,
  FaTruck,
  FaWallet,
  FaThLarge,
} from "react-icons/fa";
import CategoryLink from "../components/CategoryLink.jsx";
import CategoryLinkLaptop from "../components/CategoryLinkLaptop.jsx";
function Section({ setCartDatas, cartDatas }) {
  const categDatas = [
    {
      id: 1,
      name: "Лекарственные препараты",
      Icon: PiPillLight,
    },
    {
      id: 2,
      name: "Витамины и БАДы",
      Icon: TiFlashOutline,
    },
    {
      id: 3,
      name: "Фитопрепараты",
      Icon: PiFlowerLotusBold,
    },
    {
      id: 4,
      name: "Планирование семьи",
      Icon: FaHandHoldingHeart,
    },
    {
      id: 5,
      name: "Мама и малыш",
      image:
        "https://api2.gopharm.uz/storage/products/category/image/01HW8MSF33FBEK0AY8XQ28WW1J.svg",
    },
    {
      id: 6,
      name: "Медицинские изделия",
      image:
        "https://api2.gopharm.uz/storage/products/category/image/01HW8NESVZMDTAWA3XPW5QFD7G.svg",
    },
    {
      id: 7,
      name: "Приборы медицинские",
      image:
        "https://api2.gopharm.uz/storage/products/category/image/01HW8N13KXAW66MPJW4XZJCVAN.svg",
    },
    {
      id: 8,
      name: "Гигиена, красота и уход",
      image:
        "https://api2.gopharm.uz/storage/products/category/image/01HW8MH5N75JX0EGNWEK7T4NWV.svg",
    },
  ];
  return (
    <div className="container">
      <div className="space-y-10 hidden lg:block mx-auto px-10 pt-10">
        <div className="flex  gap-4">
          {categDatas.map((categData) => {
            return <CategoryLinkLaptop data={categData} key={categData.id} />;
          })}
        </div>
      </div>

      <div className="flex  lg:hidden flex-col gap-6 p-4">
        <div className="grid grid-cols-2 gap-2">
          {categDatas.map((categData) => {
            return <CategoryLink key={categData.id} data={categData} />;
          })}
        </div>
      </div>
      <section className="flex flex-col gap-10">
        <SwiperSlideList />
        <div className="flex justify-between items-baseline">
          <h2 className="font-semibold text-3xl">Популярные препараты</h2>
          <a href="/categories" className="text-blue-500 text-sm">
            Смотреть все
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {products.map((product) => (
            <ProductCard
              cartDatas={cartDatas}
              setCartDatas={setCartDatas}
              key={product.id}
              product={product}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="flex justify-center items-center gap-2 bg-white text-gray-500 py-2 px-4 rounded-lg text-sm leading-6 font-semibold ring-1 ring-inset ring-gray-200">
            Смотреть все Популярные препараты
          </button>
        </div>
        <div className="flex justify-between items-baseline">
          <h2 className="font-semibold text-3xl">Популярные препараты</h2>
          <a href="/categories" className="text-blue-500 text-sm">
            Смотреть все
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {products.map((product) => (
            <ProductCard
              cartDatas={cartDatas}
              setCartDatas={setCartDatas}
              key={product.id}
              product={product}
            />
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
