import CartButton from "../components/CartButton";
const ProductCard = ({ product, cartDatas, setCartDatas }) => {
  return (
    <div className="border p-4 rounded-lg bg-white flex border-[#e5e7eb] flex-col">
      <img
        className="w-70 h-70 object-contain"
        src={product.img}
        alt={product.name}
      />
      <p className="text-2xl font-semibold">
        от {product.price.toLocaleString()} сум
      </p>
      <div className="flex flex-col gap-1 min-h-20 pt-3">
        <h2 className="line-clamp-3 text-sm break-words">{product.name}</h2>
        <p className="text-xs text-gray-400 ">{product.manufacturer}</p>
      </div>

      <div className="mt-4">
        <CartButton
          cartDatas={cartDatas}
          setCartDatas={setCartDatas}
          product={product}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 items-center mt-3">
        <p className="text-green-500">
          {product.availability ? "В наличии" : "Нет в наличии"}
        </p>
        <p className="text-xs text-gray-400 font-medium">
          Доставка {product.delivery}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
