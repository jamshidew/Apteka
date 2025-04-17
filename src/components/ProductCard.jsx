"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard"; // Agar alohida faylda bo‘lsa

const products = [
  {
    id: 1,
    name: "Парацетамол таблетки 500 мг, 20 шт.",
    price: 12000,
    img: "/placeholder.svg?height=150&width=150",
    manufacturer: "Фармстандарт",
    availability: true,
    delivery: "1-2 дня",
  },
  {
    id: 2,
    name: "Ибупрофен капсулы 200 мг, 30 шт.",
    price: 15000,
    img: "/placeholder.svg?height=150&width=150",
    manufacturer: "Озон",
    availability: true,
    delivery: "1-3 дня",
  },
  {
    id: 3,
    name: "Аспирин таблетки 100 мг, 20 шт.",
    price: 8500,
    img: "/placeholder.svg?height=150&width=150",
    manufacturer: "Байер",
    availability: false,
    delivery: "2-5 дня",
  },
  {
    id: 4,
    name: "Амоксициллин капсулы 500 мг, 16 шт.",
    price: 18000,
    img: "/placeholder.svg?height=150&width=150",
    manufacturer: "Хемофарм",
    availability: true,
    delivery: "1-2 дня",
  },
];

export default function Home() {
  const [cart, setCart] = useState({});

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Sync cart to localStorage on update
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1,
    }));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      const newCart = { ...cart };
      delete newCart[productId];
      setCart(newCart);
    } else {
      setCart((prevCart) => ({
        ...prevCart,
        [productId]: newQuantity,
      }));
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Продукты</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            quantity={cart[product.id] || 0}
            onAddToCart={() => addToCart(product.id)}
            onUpdateQuantity={(qty) => updateQuantity(product.id, qty)}
          />
        ))}
      </div>
    </div>
  );
}
  