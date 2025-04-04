const ProductCard2 = ({ products2 }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white flex flex-col">
      <img
        src={products2.img}
        alt={products2.name}
        className="w-70 h-70 object-contain"
      />
      <p className="text-2xl font-semibold">от {products2.price} сум</p>
      <div className="flex flex-col gap-1 min-h-20 pt-3">
        <h2 className="line-clamp-3 text-sm break-words">{products2.name}</h2>
        <p className="text-xs text-gray-400 ">{products2.manufacturer}</p>
      </div>
      <button
        onClick={() => {}}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        В корзину
      </button>
      <div className="flex flex-wrap justify-center gap-4 items-center mt-3">
        <p className="text-green-500">
          {products2.availability ? "В наличии" : "Нет в наличии"}
        </p>
        <p className="text-xs text-gray-400 font-medium">
          Доставка {products2.delivery}
        </p>
      </div>
    </div>
  );
};

export default ProductCard2;
