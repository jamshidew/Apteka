const ProductCard = ({ product, setCartDatas, cartDatas }) => {
  const { cartDatas, setCartDatas } = useContext(CartContext);
  let isProductHasCart = cartDatas?.find((cartData) => cartData.id === data.id);
  const [isCart, setIsCart] = useState(isProductHasCart);
  return (
    <div className="border p-4 rounded-lg bg-white flex border-[#e5e7eb] flex-col">
      <img
        src={product.img}
        alt={product.name}
        className="w-70 h-70 object-contain"
      />
      <p className="text-2xl font-semibold">от {product.price} сум</p>
      <div className="flex flex-col gap-1 min-h-20 pt-3">
        <h2 className="line-clamp-3 text-sm break-words">{product.name}</h2>
        <p className="text-xs text-gray-400 ">{product.manufacturer}</p>
      </div>
      <button
        onClick={() => {
          setIsCart(true);
          setCartDatas((prev) => [...prev, { ...data, quantity: 1 }]);
        }}
        className="px-2 border min-h-[40px] hover:bg-[#FF6633] hover:text-white hover:border-transparent border-[#70C05B] rounded-[4px] text-base text-[#70C05B]"
      >
        Savatga qo'shish
      </button>
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
