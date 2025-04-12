import { products } from "/src/data/datas.js";
import DrugList from "/src/components/CategoryCard.jsx";
import ProductCard from "/src/components/ProductCard.jsx";
import React from "react";

function CategoryPage() {
  return (
    <div className="container">
      <h1 className="flex justify-center items-center text-5xl py-5">
        Категории
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
