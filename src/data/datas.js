export const products = [
  {
    name: "Лораталь таб. №10",
    price: 26800,
    currency: "сум",
    manufacturer: "Нобель-Фармсаноат, Узбекистан",
    availability: true,
    delivery: "Доставка сегодня",
    button_text: "В корзину",
  },
  {
    name: "Алер-G таб. 10мг №20",
    price: 41500,
    currency: "сум",
    manufacturer: "GM PHARMACEUTICALS, Грузия",
    availability: true,
    delivery: "Доставка сегодня",
    button_text: "В корзину",
  },
  {
    name: "Вольтарен Эмульгель гель 1% 100г",
    price: 72300,
    currency: "сум",
    manufacturer: "Novartis pharma AG, Швейцария",
    availability: true,
    delivery: "Доставка сегодня",
    button_text: "В корзину",
  },
  {
    name: "Диалак Форте капс. 240мг №20",
    price: 70000,
    currency: "сум",
    manufacturer: "Alcala Farma S.L, Испания",
    availability: true,
    delivery: "Доставка сегодня",
    button_text: "В корзину",
  },
  {
    name: "Стрепсилс Интенсив спрей 8,75мг/доза 15мл №1 (вишня/мята)",
    price: 62800,
    currency: "сум",
    manufacturer: "Reckitt Benckiser Healthcare, Таиланд",
    availability: true,
    delivery: "Доставка сегодня",
    button_text: "В корзину",
  },
  {
    name: "Терафлекс Хондрокрем Форте крем 30г",
    price: 52800,
    currency: "сум",
    manufacturer: "Bayer Pharma AG, Германия",
    availability: true,
    delivery: "Доставка сегодня",
    button_text: "В корзину",
  },
  {
    name: "Элевит Пронаталь таб. №100",
    price: 346700,
    currency: "сум",
    manufacturer: "Bayer Pharma AG, Германия",
    availability: true,
    delivery: "Доставка сегодня",
    button_text: "В корзину",
  },
  {
    name: "Нурофен сусп. дет. клубника 100мг/5мл 150мл",
    price: 54400,
    currency: "сум",
    manufacturer: "Reckitt Benckiser, Великобритания",
    availability: true,
    delivery: "Доставка сегодня",
    button_text: "В корзину",
  },
  {
    name: "Канефрон Н таб. №60",
    price: 125100,
    currency: "сум",
    manufacturer: "Bionorica SE, Германия",
    availability: true,
    delivery: "Доставка завтра",
    button_text: "В корзину",
  },
  {
    name: "Тивортин р-р 42мг/мл 100мл",
    price: 66600,
    currency: "сум",
    manufacturer: "Юрия фарм ООО, Украина",
    availability: true,
    delivery: "Доставка завтра",
    button_text: "В корзину",
  },
  {
    name: "Клинтопик гель 10мг/50мг 15г",
    price: 109700,
    currency: "сум",
    manufacturer: "Farmaprim, Молдова",
    availability: true,
    delivery: "Доставка завтра",
    button_text: "В корзину",
  },
  {
    name: "Магне B6 форте таб. №40",
    price: 78000,
    currency: "сум",
    manufacturer: "Chinohin Pharm & ChemWorks PVT Co.Ltd, Венгрия",
    availability: true,
    delivery: "Доставка завтра",
    button_text: "В корзину",
  },
  {
    name: "Эссенциале форте H капс.№30",
    price: 160000,
    currency: "сум",
    manufacturer: "Sanofi Winthrop Industries, Франция",
    availability: true,
    delivery: "Доставка завтра",
    button_text: "В корзину",
  },
  {
    name: "Хофитол таблетки №180",
    price: 169000,
    currency: "сум",
    manufacturer: "Rosa Phyto pharm, Дания",
    availability: true,
    delivery: "Доставка завтра",
    button_text: "В корзину",
  },
  {
    name: "Бепантен мазь 5% 30г",
    price: 81800,
    currency: "сум",
    manufacturer: "Bayer Pharma AG, Германия",
    availability: true,
    delivery: "Доставка завтра",
    button_text: "В корзину",
  },
  {
    name: "Дюфастон таб. 10мг №20",
    price: 161000,
    currency: "сум",
    manufacturer: "Эббот, Франция",
    availability: true,
    delivery: "Доставка завтра",
    button_text: "В корзину",
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">{product.manufacturer}</p>
      <p className="text-blue-500 font-bold">
        {product.price} {product.currency}
      </p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        {product.button_text}
      </button>
      {product.availability ? (
        <p className="text-green-500 mt-2">В наличии</p>
      ) : (
        <p className="text-red-500 mt-2">Нет в наличии</p>
      )}
      <p className="text-gray-500">{product.delivery}</p>
    </div>
  );
};
console.log(products)
// const ProductList = () => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
//       {products.map((product, index) => (
//         <ProductCard key={index} product={product} />
//       ))}
//     </div>
//   );
// };

export default ProductList;
