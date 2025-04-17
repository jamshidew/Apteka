"use client";

import { useState } from "react";

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Add to Cart Example</h1>
      <AddToCartButton />
    </div>
  );
}

function AddToCartButton() {
  const [isInCart, setIsInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    setIsInCart(true);
  };

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else {
      setIsInCart(false);
    }
  };

  if (!isInCart) {
    return (
      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium"
      >
        В корзину
      </button>
    );
  }

  return (
    <div className="flex items-center">
      <button
        onClick={decrement}
        className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-lg"
      >
        <span className="text-xl font-bold">-</span>
      </button>

      <div className="mx-2 w-full">
        <input
          type="text"
          value={quantity}
          readOnly
          className="w-full h-12 text-center border border-gray-200 rounded-lg"
        />
      </div>

      <button
        onClick={increment}
        className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-lg"
      >
        <span className="text-xl font-bold">+</span>
      </button>
    </div>
  );
}
