'use client'

import Image from "next/image";
import Bmi from "../images/bmi.png"; 

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-sm w-full">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          BMI Calculator
        </h1>

        <p className="text-xl font-medium text-gray-600 text-center mb-6">
          คำนวณ BMI
        </p>

        <div className="flex justify-center mb-6">
          <Image
            src={Bmi}
            alt="BMI Image"
            className="rounded-lg"
            width={200} 
            height={200}
          />
        </div>

        {/* Weight Input */}
        <div className="mb-4">
          <label htmlFor="weight" className="block text-gray-700 font-medium mb-2">
            ป้อนน้ำหนัก (กิโลกรัม)
          </label>
          <input
            type="number"
            id="weight"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="เช่น 65"
          />
        </div>

        {/* Height Input */}
        <div className="mb-6">
          <label htmlFor="height" className="block text-gray-700 font-medium mb-2">
            ป้อนส่วนสูง (เซนติเมตร)
          </label>
          <input
            type="number"
            id="height"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="เช่น 170"
          />
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mb-6">
          <button className="flex-1 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
            คำนวณ BMI
          </button>
          <button className="flex-1 bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300">
            รีเซ็ต
          </button>
        </div>

        {/* Result Display */}
        <div className="text-center text-lg font-semibold text-gray-700">
          ค่า BMI ที่คำนวณได้: 0.00
        </div>
      </div>
    </div>
  );
};

export default App;
