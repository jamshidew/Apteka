import { useState, useEffect } from "react";
import { products } from "/src/data/datas.js";

export default function ShoppingCart() {
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

  // return <ShoppingCartList />;
}
