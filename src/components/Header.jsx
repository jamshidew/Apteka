import { PiPillLight } from "react-icons/pi";
import { TiFlashOutline } from "react-icons/ti";
import { PiFlowerLotusBold } from "react-icons/pi";
function Header() {
  return (
    <>
      <div className="flex items-center justify-between p-4 gap-2 bg-white border-b">
        <div>
          <a
            href=""
            className="flex justify-center items-center gap-2 bg-white text-gray-500 py-2 px-3 rounded-lg text-sm leading-6 font-semibold ring-1 ring-inset ring-gray-200 min-h-10"
          >
            <FaArrowLeft className="w-[20px] h-[20px]" />
          </a>
        </div>
        <div className="grow">
          <input
            type="text"
            placeholder="Dori qidirish"
            className="block w-full rounded-lg border-0 p-2 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-500 leading-6"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 p-4">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="/catalog/lekarstvennye-preparaty"
            className="flex border rounded-lg overflow-hidden border-gray-200"
          >
            <span className="flex bg-blue-50 p-3 text-blue-500 items-center shrink-0">
              <PiPillLight alt="547" className="text-[30px]" />
            </span>
            <span className="text-xs p-2 flex items-center leading-tight">
              Лекарственные препараты
            </span>
          </a>
          <a
            href="/catalog/lekarstvennye-preparaty"
            className="flex border rounded-lg overflow-hidden border-gray-200"
          >
            <span className="flex bg-blue-50 p-3 text-blue-500 items-center shrink-0">
              <TiFlashOutline alt="547" className="text-[30px]" />
            </span>
            <span className="text-xs p-2 flex items-center leading-tight">
              Витамины и БАДы
            </span>
          </a>
          <a
            href="/catalog/lekarstvennye-preparaty"
            className="flex border rounded-lg overflow-hidden border-gray-200"
          >
            <span className="flex bg-blue-50 p-3 text-blue-500 items-center shrink-0">
              <PiFlowerLotusBold alt="547" className="text-[30px]" />
            </span>
            <span className="text-xs p-2 flex items-center leading-tight">
              Фитопрепараты
            </span>
          </a>
          <a
            href="/catalog/lekarstvennye-preparaty"
            className="flex border rounded-lg overflow-hidden border-gray-200"
          >
            <span className="flex bg-blue-50 p-3 text-blue-500 items-center shrink-0">
              <FaHandHoldingHeart alt="547" className="text-[30px]" />
            </span>
            <span className="text-xs p-2 flex items-center leading-tight">
              Планирование семьи
            </span>
          </a>
          <a
            href="/catalog/lekarstvennye-preparaty"
            className="flex border rounded-lg overflow-hidden border-gray-200"
          >
            <span className="flex bg-blue-50 p-3 text-blue-500 items-center shrink-0">
              <img
                src="https://api2.gopharm.uz/storage/products/category/image/01HW8MSF33FBEK0AY8XQ28WW1J.svg"
                alt="547"
                className="text-[30px]"
              />
            </span>
            <span className="text-xs p-2 flex items-center leading-tight">
              Мама и малыш
            </span>
          </a>
          <a
            href="/catalog/lekarstvennye-preparaty"
            className="flex border rounded-lg overflow-hidden border-gray-200"
          >
            <span className="flex bg-blue-50 p-3 text-blue-500 items-center shrink-0">
              <img
                src="https://api2.gopharm.uz/storage/products/category/image/01HW8NESVZMDTAWA3XPW5QFD7G.svg"
                alt="547"
                className="text-[30px]"
              />
            </span>
            <span className="text-xs p-2 flex items-center leading-tight">
              Медицинские изделия
            </span>
          </a>
          <a
            href="/catalog/lekarstvennye-preparaty"
            className="flex border rounded-lg overflow-hidden border-gray-200"
          >
            <span className="flex bg-blue-50 p-3 text-blue-500 items-center shrink-0">
              <img
                src="https://api2.gopharm.uz/storage/products/category/image/01HW8N13KXAW66MPJW4XZJCVAN.svg"
                alt="547"
                className="text-[30px]"
              />
            </span>
            <span className="text-xs p-2 flex items-center leading-tight">
              Приборы медицинские
            </span>
          </a>
          <a
            href="/catalog/lekarstvennye-preparaty"
            className="flex border rounded-lg overflow-hidden border-gray-200"
          >
            <span className="flex bg-blue-50 p-3 text-blue-500 items-center shrink-0">
              <img
                src="https://api2.gopharm.uz/storage/products/category/image/01HW8MH5N75JX0EGNWEK7T4NWV.svg"
                alt="547"
                className="text-[30px]"
              />
            </span>
            <span className="text-xs p-2 flex items-center leading-tight">
              Гигиена, красота и уход
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
