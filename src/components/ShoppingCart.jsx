import { FiPlus, FiMinus } from "react-icons/fi";
function ShoppingCartList({ cartDatas }) {
  return (
    <div className="container flex justify-between max-w-3xl mx-auto p-4">
      <div>
        <h1 className="text-2xl font-bold mb-6">Корзина: {cartDatas.length}</h1>
        <div className="space-y-4">
          {cartDatas.map((cartDatas) => (
            <div
              key={cartDatas.id}
              className="border rounded-lg p-4 flex items-center gap-4"
            >
              <div className="w-24 h-24 flex-shrink-0">
                <img
                  src={cartDatas.img || "/placeholder.svg"}
                  alt={cartDatas.name}
                  width={100}
                  height={100}
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="flex-grow">
                <h3 className="font-medium text-lg">{cartDatas.name}</h3>
                <p className="text-gray-500 text-sm">
                  {cartDatas.manufacturer}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(cartDatas.id, -1)}
                  className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-lg"
                >
                  <FiMinus size={20} />
                </button>

                <input
                  type="text"
                  value={quantities[cartDatas.id] || 1}
                  readOnly
                  className="w-10 h-10 text-center border rounded-lg"
                />

                <button
                  onClick={() => updateQuantity(cartDatas.id, 1)}
                  className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-lg"
                >
                  <FiPlus size={20} />
                </button>
              </div>

              <div className="text-right min-w-[120px] font-medium">
                {(
                  cartDatas.price * (quantities[cartDatas.id] || 1)
                ).toLocaleString()}{" "}
                сум
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t w-[300px] ml-8 pt-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Умумий:</h2>
          <div className="text-xl font-bold">{cartDatas.toLocaleString()} сум</div>
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
