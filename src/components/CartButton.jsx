import { useState, useEffect } from "react";

const CartButton = ({ product, cartDatas, setCartDatas }) => {
  const existing = cartDatas.find((item) => item.id === product);
  const [quantity, setQuantity] = useState(existing?.quantity || 0);

  useEffect(() => {
    if (quantity === 0) {
      setCartDatas((prev) => prev.filter((item) => item.id !== product));
    } else {
      const updated = cartDatas.some((item) => item.id === product)
        ? cartDatas.map((item) =>
            item.id === product ? { ...item, quantity } : item
          )
        : [...cartDatas, { ...product, quantity }];
      setCartDatas(updated);
    }
  }, [quantity]);

  if (quantity === 0) {
    return (
      <button
        onClick={() => setQuantity(1)}
        className="flex w-full justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        В корзину
      </button>
    );
  }

  return (
    <div className="flex items-center justify-between">
      <button
        onClick={() => setQuantity(quantity - 1)}
        className="w-10 h-10 bg-blue-500 text-white text-lg rounded-md"
      >
        −
      </button>
      <div className="min-w-[40px] text-center">{quantity}</div>
      <button
        onClick={() => setQuantity(quantity + 1)}
        className="w-10 h-10 bg-blue-500 text-white text-lg rounded-md"
      >
        +
      </button>
    </div>
  );
};

export default CartButton;
