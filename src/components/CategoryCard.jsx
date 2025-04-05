const DrugList = ({ item }) => {
  return (
    <div
      key={item.id}
      className="border p-4 rounded-lg bg-white flex flex-col border-[#e5e7eb]"
    >
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-32 object-contain"
      />
      <p className="text-2xl font-semibold">от {item.price} сум</p>
      <h2 className="line-clamp-2 text-sm break-words">{item.name}</h2>
      <p className="text-xs text-gray-400">{item.manufacturer}</p>
      <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        В корзину
      </button>
      <p className="text-green-500">
        {item.availability ? "В наличии" : "Нет в наличии"}
      </p>
      <p className="text-xs text-gray-400 font-medium">
        Доставка {item.delivery}
      </p>
    </div>
  );
};
export default DrugList;
