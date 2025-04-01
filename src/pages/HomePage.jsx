import React from 'react';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';

const featuredProducts = [
  {
    id: 1,
    name: "Нурофен Экспресс форте капс. 400мг №10",
    price: 359,
    oldPrice: 429,
    discount: 16,
    rating: 4.8,
    reviewCount: 124,
    image: "/images/products/nurofen.png"
  },
  {
    id: 2,
    name: "Терафлю порошок от гриппа и простуды №10 лимон",
    price: 549,
    oldPrice: 699,
    discount: 21,
    rating: 4.6,
    reviewCount: 98,
    image: "/images/products/theraflu.png"
  },
  {
    id: 3,
    name: "Супрадин таблетки шипучие №10",
    price: 799,
    oldPrice: 0,
    discount: 0,
    rating: 4.9,
    reviewCount: 156,
    image: "/images/products/supradyn.png"
  },
  {
    id: 4,
    name: "Компливит таблетки п.о №60",
    price: 299,
    oldPrice: 349,
    discount: 14,
    rating: 4.7,
    reviewCount: 87,
    image: "/images/products/complivit.png"
  }
];

const categories = [
  { id: 1, name: "Обезболивающие", image: "/images/categories/painkillers.png" },
  { id: 2, name: "Антибиотики", image: "/images/categories/antibiotics.png" },
  { id: 3, name: "Витамины", image: "/images/categories/vitamins.png" },
  { id: 4, name: "Простуда и грипп", image: "/images/categories/cold-flu.png" },
  { id: 5, name: "Аллергия", image: "/images/categories/allergy.png" },
  { id: 6, name: "Желудок и кишечник", image: "/images/categories/stomach.png" }
];

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-[#E6F0FF] rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Интернет-аптека с доставкой на дом</h1>
            <p className="text-gray-600 mb-6">Широкий ассортимент лекарств, витаминов и товаров для здоровья с быстрой доставкой</p>
            <button className="bg-[#4285F4] text-white px-6 py-3 rounded-full font-medium">
              Смотреть каталог
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/images/banner-image.png" 
              alt="GoPharm Banner" 
              className="max-h-64 object-contain"
            />
          </div>
        </div>
      </div>
      
      {/* Categories */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Категории</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
      
      {/* Featured Products */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Популярные товары</h2>
          <a href="#" className="text-[#4285F4] font-medium">Смотреть все</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      
      {/* Promotions */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Акции и скидки</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FFF4E6] rounded-lg p-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Скидка 20% на витамины</h3>
                <p className="text-gray-600 mb-4">Укрепите иммунитет с выгодой</p>
                <button className="bg-[#FF9500] text-white px-4 py-2 rounded-full font-medium">
                  Подробнее
                </button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="/images/vitamins-promo.png" 
                  alt="Vitamins Promotion" 
                  className="max-h-40 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#E6FFF4] rounded-lg p-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Бесплатная доставка</h3>
                <p className="text-gray-600 mb-4">При заказе от 2000 ₽</p>
                <button className="bg-[#00C853] text-white px-4 py-2 rounded-full font-medium">
                  Подробнее
                </button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="/images/delivery-promo.png" 
                  alt="Delivery Promotion" 
                  className="max-h-40 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="border border-gray-200 rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <img 
                src="/images/icons/quality.png" 
                alt="Quality" 
                className="w-16 h-16"
              />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Гарантия качества</h3>
            <p className="text-gray-600 text-sm">Все товары сертифицированы и проходят строгий контроль</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <img 
                src="/images/icons/delivery.png" 
                alt="Delivery" 
                className="w-16 h-16"
              />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Быстрая доставка</h3>
            <p className="text-gray-600 text-sm">Доставляем заказы в день оформления или на следующий день</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <img 
                src="/images/icons/price.png" 
                alt="Price" 
                className="w-16 h-16"
              />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Низкие цены</h3>
            <p className="text-gray-600 text-sm">Регулярные акции и скидки для наших клиентов</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <img 
                src="/images/icons/support.png" 
                alt="Support" 
                className="w-16 h-16"
              />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Поддержка 24/7</h3>
            <p className="text-gray-600 text-sm">Наши специалисты всегда готовы помочь вам с выбором</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;