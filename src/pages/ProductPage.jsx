const ProductCard = ({ products }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-2xl shadow-md max-w-6xl mx-auto">
      <div className="flex-shrink-0 w-full md:w-1/3">
        <img
          src={products.img}
          alt={products.name}
          className="rounded-xl w-full object-cover"
        />
      </div>

      <div className="flex flex-col md:flex-row w-full gap-6">
        <div className="flex-1 space-y-3">
          <h2 className="text-2xl font-semibold">{products.name}</h2>

          {products.availability ? (
            <span className="text-green-600 font-medium bg-green-100 px-3 py-1 rounded-full text-sm inline-block w-fit">
              В наличии
            </span>
          ) : (
            <span className="text-red-600 font-medium bg-red-100 px-3 py-1 rounded-full text-sm inline-block w-fit">
              Нет в наличии
            </span>
          )}

          <div className="bg-gray-50 rounded-xl p-4 text-sm space-y-2 border">
            <p>
              <span className="font-semibold">Производитель:</span>{" "}
              {products.manufacturer}
            </p>
            <p>
              <span className="font-semibold">Доставка:</span>{" "}
              {products.delivery}
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded-xl flex flex-col justify-between">
          <div>
            <p className="text-2xl font-bold text-gray-800 mb-2">
              {products.price}
            </p>
            <button className="bg-blue-600 text-white text-center py-2 px-4 rounded-xl w-full hover:bg-blue-700 transition">
              В корзину
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">
            Перед употреблением лекарств проконсультируйтесь с врачом!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
