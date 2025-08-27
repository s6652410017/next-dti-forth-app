'use client'

import Image from "next/image";
import Bmr from "../images/bmr.png"; 

// Main App component for the BMR Calculator UI
const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-sm w-full">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          BMR Calculator
        </h1>

        {/* Subtitle */}
        <p className="text-xl font-medium text-gray-600 text-center mb-6">
          คำนวณ BMR
        </p>

        {/* BMR Icon */}
        <div className="flex justify-center mb-6">
          <Image
            src={Bmr}
            alt="BMR Image"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="เช่น 65"
          />
        </div>

        {/* Height Input */}
        <div className="mb-4">
          <label htmlFor="height" className="block text-gray-700 font-medium mb-2">
            ป้อนส่วนสูง (เซนติเมตร)
          </label>
          <input
            type="number"
            id="height"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="เช่น 170"
          />
        </div>

        {/* Age Input */}
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
            ป้อนอายุ
          </label>
          <input
            type="number"
            id="age"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="เช่น 30"
          />
        </div>

        {/* Gender Selection */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            เลือกเพศ
          </label>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <input type="radio" id="male" name="gender" value="male" className="mr-2" />
              <label htmlFor="male">ชาย</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="female" name="gender" value="female" className="mr-2" />
              <label htmlFor="female">หญิง</label>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mb-6">
          <button className="flex-1 bg-amber-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-amber-600 transition duration-300">
            คำนวณ BMR
          </button>
          <button className="flex-1 bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300">
            รีเซ็ต
          </button>
        </div>

        {/* Result Display */}
        <div className="text-center text-lg font-semibold text-gray-700">
          ค่า BMR ที่คำนวณได้: 0.00
        </div>
      </div>
    </div>
  );
};

export default App;
