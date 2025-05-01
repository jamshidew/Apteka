import { TbAlertCircleFilled } from "react-icons/tb";
import { FaShare } from "react-icons/fa";
import { useParams } from "react-router-dom";

function ProductDetail({ products, cartDatas, setCartDatas }) {
  const { id } = useParams();
  let product = products.find((item) => item.id == id);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Product Image */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex justify-center">
            <img
              src={product.img}
              alt={product.name}
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="md:col-span-1 lg:col-span-1">
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
              Без рецепта
            </span>
            <button
              variant="ghost"
              size="sm"
              className="text-blue-500 flex items-center gap-1"
            >
              <FaShare className="h-4 w-4" />
              Поделиться
            </button>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3 text-gray-500">Бренд</td>
                  <td className="px-4 py-3">
                    Алер-G таб. 10мг
                    <br />
                    Aler-G tab. 10mg
                  </td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 text-gray-500">Производитель</td>
                  <td className="px-4 py-3">{product.manufacturer}</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 text-gray-500">Доставка</td>
                  <td className="px-4 py-3">{product.delivery}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-500">Наличие</td>
                  <td className="px-4 py-3">
                    {product.availability ? "Есть" : "Нет"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <button
            variant="outline"
            className="w-full mt-6 text-gray-500 flex items-center justify-center gap-2"
          >
            <TbAlertCircleFilled className="h-4 w-4" />
            Сообщить о неточности
          </button>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <div className="text-2xl font-bold mb-4">
            {product.price.toLocaleString()} сум
          </div>

          <div className="mb-6">
            <a href="#" className="text-blue-500 hover:underline">
              Укажите свой адрес
            </a>
            <span className="text-gray-600">, что бы точно узнать цену</span>
          </div>

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white mb-4">
            В корзину
          </button>

          <p className="text-gray-500 text-sm">
            Цена действует только при заказе на сайте
          </p>

          <div className="mt-16 text-center text-gray-500 text-sm">
            Перед употреблением лекарств проконсультируйтесь с врачом!
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
