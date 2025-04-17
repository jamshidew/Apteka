import { FiPlus, FiMinus } from "react-icons/fi";
import { products } from "/src/data/datas.js";
import { useEffect, useState } from "react";

function ShoppingCartList() {
  const initialQuantities = products.reduce((acc, product) => {
    acc[product.id] = 1;
    return acc;
  }, {});

  const [quantities, setQuantities] = useState(initialQuantities);
  const [total, setTotal] = useState(0);

  const updateQuantity = (id, change) => {
    setQuantities((prev) => {
      const newQuantity = Math.max(1, (prev[id] || 1) + change);
      return { ...prev, [id]: newQuantity };
    });
  };

  useEffect(() => {
    const newTotal = products.reduce((sum, product) => {
      const quantity = quantities[product.id] || 0;
      return sum + product.price * quantity;
    }, 0);
    setTotal(newTotal);
  }, [quantities, products]);

  return (
    <div className="container flex justify-between max-w-3xl mx-auto p-4">
      <div>
        <h1 className="text-2xl font-bold mb-6">Корзина: {products.length}</h1>
        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 flex items-center gap-4"
            >
              <div className="w-24 h-24 flex-shrink-0">
                <img
                  src={product.img || "/placeholder.svg"}
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
                  value={quantities[product.id] || 1}
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
                {(product.price * (quantities[product.id] || 1)).toLocaleString()} сум
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t w-[300px] ml-8 pt-4">
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
