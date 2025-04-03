const ProductCard2 = ({ product2 }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white flex flex-col">
      <img
        src={product2.img}
        alt={product2.name}
        className="w-70 h-70 object-contain"
      />
      <p className="text-2xl font-semibold">от {product2.price} сум</p>
      <div className="flex flex-col gap-1 min-h-20 pt-3">
        <h2 className="line-clamp-3 text-sm break-words">{product2.name}</h2>
        <p className="text-xs text-gray-400 ">{product2.manufacturer}</p>
      </div>
      <button
        onClick={() => {}}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        В корзину
      </button>
      <div className="flex flex-wrap justify-center gap-4 items-center mt-3">
        <p className="text-green-500">
          {product2.availability ? "В наличии" : "Нет в наличии"}
        </p>
        <p className="text-xs text-gray-400 font-medium">
          Доставка {product2.delivery}
        </p>
      </div>
    </div>
  );
};

export default ProductCard2;
