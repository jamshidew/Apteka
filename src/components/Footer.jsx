import {
  FaTelegram,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import SocialIcons from "./SocialIcons ";

export default function Footer() {
  return (
    <div className="container flex flex-col">
      <footer className="bg-gray-100 text-gray-800 mb-7 rounded-2xl">
        <div className="bg-blue-500 text-white px-6 py-4 flex flex-col md:flex-row justify-between items-center rounded-t-2xl">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold">+998 (77) 087-67-74</p>
            <p>Круглосуточный колл-центр</p>
          </div>
          <div className="text-center md:text-left mt-4 md:mt-0">
            <p className="text-lg font-bold">Telegram</p>
            <p>Служба поддержки</p>
          </div>
          <img
            src="data:image/png;base64,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"
            alt="GoPharm Logo"
            className="w-36 mt-4 md:mt-0"
          />
        </div>
        <div className="mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-5 gap-2">
          <div>
            <h4 className="font-semibold mb-2">Покупателям</h4>
            <ul className="space-y-1 text-sm">
              <li>Как сделать заказ</li>
              <li>Карта аптек</li>
              <li>Оплата</li>
              <li>Доставка</li>
              <li>Контакты</li>
              <li>Публичная оферта</li>
              <li>Правила сайта</li>
              <li>Безопасность</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Бизнесу</h4>
            <ul className="space-y-1 text-sm">
              <li>Стать поставщиком</li>
              <li>Открыть пункт выдачи</li>
              <li>Тендеры</li>
              <li>Аренда</li>
              <li>Партнерская программа</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Компания</h4>
            <ul className="space-y-1 text-sm">
              <li>О компании GoPharm</li>
              <li>Реквизиты</li>
              <li>Информация для СМИ</li>
              <li>Политика компании</li>
              <li>Инвесторам и акционерам</li>
            </ul>
          </div>

          <div className="col-span-2 flex flex-col gap-4">
            <p className="font-semibold mb-3 pl-5">GoPharm в соцсетях</p>
            <div className="flex flex-wrap gap-4 mb-4">
              <SocialIcons />
            </div>
            <div className="flex items-center p-4 gap-3 bg-white rounded-2xl pl-6">
              <div className="w-[100px] h-full">
                <img
                  src="/src/assets/imgs/qr-code-footer.png"
                  alt="QR"
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">
                  Скидки, промокоды и акции в мобильном приложении
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href="#"
                    className="flex justify-center items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg text-sm leading-6 font-semibold"
                  >
                    App Store
                  </a>
                  <a
                    href="#"
                    className="flex justify-center items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg text-sm leading-6 font-semibold"
                  >
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 border-t text-sm">
          <p className="mb-2 md:mb-0">© 2020–2025 GoPharm. Все права защищены.</p>
          <div className="flex gap-2">
            <button className="border px-3 py-1 rounded-md">Ruscha</button>
            <button className="border px-3 py-1 rounded-md">O'zbekcha</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
