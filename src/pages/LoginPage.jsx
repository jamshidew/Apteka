"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("+998");
  const [code, setCode] = useState("");
  const [step, setStep] = useState(1);
  useEffect(() => {
    let storedPhone = localStorage.getItem("phoneNumber");
    if (storedPhone) {
      navigate("/");
    }
  }, []);
  const handlePhoneChange = (e) => {
    let value = e.target.value;

    if (!value.startsWith("+998")) {
      value = "+998";
    } else {
      const digits = value.slice(4).replace(/\D/g, "").slice(0, 9);
      value = "+998" + digits;
    }

    setPhoneNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length === 13) {
      setStep(2);
    }
  };

  const handleCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 5);
    setCode(value);

    if (value.length === 5) {
      setTimeout(() => {
        localStorage.setItem("phoneNumber", phoneNumber);
        navigate("/");
      }, 500);
    }
  };

  const visiblePart1 = phoneNumber.slice(0, 7);
  const visiblePart2 = phoneNumber.slice(-2);
  let hiddenPhone = `${visiblePart1}*****${visiblePart2}`;
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {step === 1 && (
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4">Вход</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="phone" className="block text-sm mb-1">
                Ваш телефон
              </label>
              <input
                id="phone"
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold"
              disabled={phoneNumber.length < 13}
            >
              Получить код
            </button>
          </form>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-2">
            Подтверждение SMS кода
          </h2>
          <p className="text-center text-gray-600 mb-4">
            SMS с кодом отправлено на номер <br />
            <span className="font-semibold">{hiddenPhone}</span>
          </p>

          <p className="text-center mb-4 text-gray-700">Введите код из смс</p>
          <div className="flex justify-center mb-4">
            <input
              type="text"
              value={code}
              onChange={handleCodeChange}
              className="w-40 text-center text-xl px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="5 xonali kod"
            />
          </div>

          <button
            onClick={() => navigate("/")}
            className="w-full bg-blue-600 hover:bg-teal-700 text-white py-2 rounded-md font-semibold"
            disabled={code.length < 5}
          >
            Войти
          </button>
        </div>
      )}
    </div>
  );
}
