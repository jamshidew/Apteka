import { FiPlus, FiMinus } from "react-icons/fi";
import { products } from "/src/data/datas.js";
import { useState } from "react";

function ShoppingCartList() {
  const [quantities, setQuantities] = useState({
    1: 1,
    2: 1,
    3: 1,
  });
  const [total, setTotal] = useState(0);

  const updateQuantity = (id, change) => {
    setQuantities((prev) => {
      const newQuantity = Math.max(1, prev[id] + change);
      return { ...prev, [id]: newQuantity };
    });
  };

  useEffect(() => {
    const newTotal = products.reduce((sum, product) => {
      return sum + product.price * quantities[product.id];
    }, 0);

    setTotal(newTotal);
  }, [quantities]);
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Корзина: {products.length}</h1>

      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 flex items-center gap-4"
          >
            <div className="w-24 h-24 flex-shrink-0">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={100}
                height={100}
                className="object-contain w-full h-full"
              />
            </div>

            <div className="flex-grow">
              <h3 className="font-medium text-lg">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.manufacturer}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(product.id, -1)}
                className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-lg"
              >
                <FiMinus size={20} />
              </button>

              <input
                type="text"
                value={quantities[product.id]}
                readOnly
                className="w-10 h-10 text-center border rounded-lg"
              />

              <button
                onClick={() => updateQuantity(product.id, 1)}
                className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-lg"
              >
                <FiPlus size={20} />
              </button>
            </div>

            <div className="text-right min-w-[120px] font-medium">
              {(product.price * quantities[product.id]).toLocaleString()} сум
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t pt-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Умумий:</h2>
          <div className="text-xl font-bold">{total.toLocaleString()} сум</div>
        </div>

        <div className="mt-4">
          <button className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors">
            Буюртма бериш
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartList;
