import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="border border-gray-200 rounded-lg p-4 transition-all hover:shadow-md">
        {product.discount > 0 && (
          <div className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full inline-block mb-2">
            -{product.discount}%
          </div>
        )}
        <div className="flex justify-center h-40 mb-4">
          <img 
            src={product.image || "/placeholder.svg"} 
            alt={product.name} 
            className="h-full object-contain"
          />
        </div>
        <h3 className="font-medium text-gray-800 mb-1 line-clamp-2 h-12">{product.name}</h3>
        <div className="flex items-center mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img 
                key={i}
                src={i < Math.floor(product.rating) ? "/images/star-filled.png" : "/images/star-empty.png"}
                alt="Star"
                className="w-4 h-4"
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-bold text-lg">{product.price.toLocaleString()} ₽</div>
            {product.oldPrice > 0 && (
              <div className="text-gray-500 text-sm line-through">{product.oldPrice.toLocaleString()} ₽</div>
            )}
          </div>
          <button className="bg-[#4285F4] text-white p-2 rounded-full">
            <img 
              src="/images/cart-add-icon.png" 
              alt="Add to cart" 
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;