import Link from "next/link"
import { HandHeart, Truck, Wallet, Grid2X2 } from "lucide-react"

export default function PharmacySection() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-8">Почему стоит заказывать лекарства у нас?</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Trust */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <HandHeart className="text-white w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Доверие</h3>
              <p className="text-gray-700">Более 15 000 обслуженных и лояльных клиентов.</p>
            </div>

            {/* Delivery */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Truck className="text-white w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Доставка</h3>
              <p className="text-gray-700">Максимально в кратчайшее время.</p>
            </div>

            {/* Savings */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Wallet className="text-white w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Экономия</h3>
              <p className="text-gray-700">Бонусные баллы - Покупайте и зарабатывайте.</p>
            </div>

            {/* Wide Assortment */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Grid2X2 className="text-white w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Широкий Ассортимент</h3>
              <p className="text-gray-700">Более 12,000 наименований товаров.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Contact bar */}
      <div className="bg-blue-500 text-white py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-4 md:mb-0">
            <div>
              <p className="font-bold">+998 (71) 205-0-888</p>
              <p className="text-sm">Круглосуточный колл-центр</p>
            </div>
            <div>
              <p className="font-bold">Telegram</p>
              <p className="text-sm">Служба поддержки</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-2xl font-bold">GoPharm</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* For Buyers */}
            <div>
              <h4 className="font-bold mb-4">Покупателям</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Как сделать заказ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Карта аптек
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Оплата
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Доставка
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Контакты
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Публичная оферта
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Правила сайта
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Безопасность
                  </Link>
                </li>
              </ul>
            </div>

            {/* For Business */}
            <div>
              <h4 className="font-bold mb-4">Бизнесу</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Стать поставщиком
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Открыть пункт выдачи
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Тендеры
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Аренда
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Партнерская программа
                  </Link>
                </li>
              </ul>
            </div>

            {/* Career */}
            <div>
              <h4 className="font-bold mb-4">Карьера</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Вакансии
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Водитель-курьер
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Кассир
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Сборщик
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Продавец
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    О компании GoPharm
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Реквизиты
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Информация для СМИ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Политика компании
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Инвесторам и акционерам
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">GoPharm в соцсетях</h4>
              <div className="flex space-x-4 mb-6">
                <Link href="#" className="text-blue-600 hover:text-blue-800">
                  <div className="bg-blue-100 rounded-full p-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-6.7c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2zM17 17h-2v-3c0-.77-.23-1.3-.8-1.3-.56 0-.89.39-1.04.77-.05.14-.06.33-.06.52V17h-2v-6h2v.93c.34-.54.87-.93 1.56-.93 1.15 0 2.34.76 2.34 2.4V17z" />
                    </svg>
                  </div>
                </Link>
                <Link href="#" className="text-blue-600 hover:text-blue-800">
                  <div className="bg-blue-100 rounded-full p-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                    </svg>
                  </div>
                </Link>
                <Link href="#" className="text-blue-600 hover:text-blue-800">
                  <div className="bg-blue-100 rounded-full p-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm-2-9c0-.55.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1zm-3-3c0-.55.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1h-8c-.55 0-1-.45-1-1zm0 6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1h-8c-.55 0-1-.45-1-1z" />
                    </svg>
                  </div>
                </Link>
                <Link href="#" className="text-blue-600 hover:text-blue-800">
                  <div className="bg-blue-100 rounded-full p-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.582 7.172a2.503 2.503 0 0 0-1.768-1.768C18.254 5 12 5 12 5s-6.254 0-7.814.404a2.503 2.503 0 0 0-1.768 1.768C2.012 8.746 2 12 2 12s.012 3.254.418 4.828a2.503 2.503 0 0 0 1.768 1.768C5.746 19 12 19 12 19s6.254 0 7.814-.404a2.503 2.503 0 0 0 1.768-1.768C22 15.254 22 12 22 12s0-3.254-.418-4.828zM10 15V9l5.2 3-5.2 3z" />
                    </svg>
                  </div>
                </Link>
                <Link href="#" className="text-blue-600 hover:text-blue-800">
                  <div className="bg-blue-100 rounded-full p-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.53 20c6.237 0 9.65-5.166 9.65-9.65 0-.15 0-.298-.01-.447A6.922 6.922 0 0 0 24 7.766a6.779 6.779 0 0 1-1.95.535 3.397 3.397 0 0 0 1.488-1.87 6.778 6.778 0 0 1-2.156.823A3.38 3.38 0 0 0 16.62 9.67c0 .266.03.525.085.776a9.59 9.59 0 0 1-6.96-3.526 3.39 3.39 0 0 0 1.044 4.51 3.35 3.35 0 0 1-1.525-.42v.043a3.379 3.379 0 0 0 2.709 3.312 3.36 3.36 0 0 1-1.525.058 3.38 3.38 0 0 0 3.156 2.347A6.78 6.78 0 0 1 0 18.186 9.55 9.55 0 0 0 5.175 20" />
                    </svg>
                  </div>
                </Link>
              </div>

              <div className="mb-4">
                <p className="font-bold mb-2">Скидки, промокоды и акции в мобильном приложении</p>
                <div className="flex items-center justify-center bg-gray-200 rounded-lg p-4 mb-4">
                  <div className="w-24 h-24 bg-white p-2 rounded-lg flex items-center justify-center">
                    <div className="w-20 h-20 bg-gray-800 rounded-lg"></div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Link href="#" className="bg-blue-500 text-white px-4 py-2 rounded-lg flex-1 text-center">
                    App Store
                  </Link>
                  <Link href="#" className="bg-blue-500 text-white px-4 py-2 rounded-lg flex-1 text-center">
                    Telegram
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">© 2020–2025 GoPharm. Все права защищены.</p>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg">Ташкент</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg">O'zbekcha</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

