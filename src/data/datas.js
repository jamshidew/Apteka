import React from "react";

export const products = [
  {
    name: "Лораталь таб. №10",
    price: 26800,
    currency: "сум",
    manufacturer: "Нобель-Фармсаноат, Узбекистан",
    availability: true,
    delivery: "Доставка сегодня",
  },  
  {
    name: "Алер-G таб. 10мг №20",
    price: 41500,
    manufacturer: "GM PHARMACEUTICALS, Грузия",
  },
  {
    name: "Вольтарен Эмульгель гель 1% 100г",
    price: 72300,
    manufacturer: "Novartis pharma AG, Швейцария",
  },
  {
    name: "Диалак Форте капс. 240мг №20",
    price: 70000,
    manufacturer: "Alcala Farma S.L, Испания",
  },
  {
    name: "Стрепсилс Интенсив спрей 8,75мг/доза 15мл №1 (вишня/мята)",
    price: 62800,
    manufacturer: "Reckitt Benckiser Healthcare, Таиланд",
  },
  {
    name: "Терафлекс Хондрокрем Форте крем 30г",
    price: 52800,
    manufacturer: "Bayer Pharma AG, Германия",
  },
  {
    name: "Элевит Пронаталь таб. №100",
    price: 346700,
    manufacturer: "Bayer Pharma AG, Германия",
    availability: true,
  },
  {
    name: "Нурофен сусп. дет. клубника 100мг/5мл 150мл",
    price: 54400,
    manufacturer: "Reckitt Benckiser, Великобритания",
    availability: true,
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">{product.manufacturer}</p>
      <p className="text-blue-500 font-bold">{product.price} сум</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        В корзину
      </button>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
