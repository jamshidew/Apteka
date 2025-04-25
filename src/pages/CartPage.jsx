import React, { useState } from "react";
import { products } from "../data/datas.js";
const Cart = () => {
  const [cartItems, setCartItems] = useState(
    products.slice(0, 4).map((item) => ({ ...item, quantity: 1 }))
  );

  const increment = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalSum = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container flex flex-col md:flex-row gap-10 p-6">
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl font-bold mb-4">
          Savatcha: {cartItems.length}
        </h2>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between mb-6 border-b pb-4"
          >
            <div className="flex gap-4 items-center">
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.manufacturer}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => decrement(item.id)}
                className="bg-blue-500 text-white w-8 h-8 rounded hover:bg-blue-600"
              >
                −
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => increment(item.id)}
                className="bg-blue-500 text-white w-8 h-8 rounded hover:bg-blue-600"
              >
                +
              </button>
            </div>
            <div className="w-24 text-right font-medium">
              {(item.price * item.quantity).toLocaleString()} сум
            </div>
          </div>
        ))}
      </div>

      <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-xl shadow">
        <div className="flex justify-between mb-2">
          <span>Сумма заказа</span>
          <span>{totalSum.toLocaleString()} сум</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Доставка</span>
          <span>10 000 сум</span>
        </div>
        <div className="flex justify-between font-bold text-lg mt-4 border-t pt-4">
          <span>Итого</span>
          <span>{(totalSum + 10000).toLocaleString()} сум</span>
        </div>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Оплатить {(totalSum + 10000).toLocaleString()} сум
        </button>
        <p className="text-sm text-center text-gray-400 mt-2">
          Цена действует только при заказе на сайте
        </p>
      </div>
    </div>
  );
};

export default Cart;
