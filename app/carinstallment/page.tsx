'use client'

import Image from "next/image";
import Car from "../images/car.png"; 
// Main App component for the Car Installment Calculator UI
const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-sm w-full">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Car Installment Calculator
        </h1>

        {/* Subtitle */}
        <p className="text-xl font-medium text-gray-600 text-center mb-6">
          Car Installment
        </p>

        {/* Car Icon */}
        <div className="flex justify-center mb-6">
         <Image
            src={Car}
            alt="BMR Image"
            className="rounded-lg"
            width={200} 
            height={200}
          />
        </div>

        {/* User Name Input */}
        <div className="mb-4">
          <label htmlFor="userName" className="block text-gray-700 font-medium mb-2">
            ชื่อผู้คำนวณ
          </label>
          <input
            type="text"
            id="userName"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="กรอกชื่อ"
          />
        </div>

        {/* Car Price Input */}
        <div className="mb-4">
          <label htmlFor="carPrice" className="block text-gray-700 font-medium mb-2">
            ราคารถ (บาท)
          </label>
          <input
            type="number"
            id="carPrice"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="กรอกราคารถ"
          />
        </div>

        {/* Interest Rate Input */}
        <div className="mb-4">
          <label htmlFor="interestRate" className="block text-gray-700 font-medium mb-2">
            อัตราดอกเบี้ยต่อปี (%)
          </label>
          <input
            type="number"
            id="interestRate"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="กรอกดอกเบี้ย"
          />
        </div>

        {/* Down Payment Selection (Radio Buttons) */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            เงินดาวน์ (%)
          </label>
          <div className="flex flex-wrap space-x-4">
            <div className="flex items-center">
              <input type="radio" id="down10" name="downPayment" value="10" className="mr-1" />
              <label htmlFor="down10">10%</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="down20" name="downPayment" value="20" className="mr-1" />
              <label htmlFor="down20">20%</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="down25" name="downPayment" value="25" className="mr-1" />
              <label htmlFor="down25">25%</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="down30" name="downPayment" value="30" className="mr-1" />
              <label htmlFor="down30">30%</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="down35" name="downPayment" value="35" className="mr-1" />
              <label htmlFor="down35">35%</label>
            </div>
          </div>
        </div>

        {/* Loan Term Selection */}
        <div className="mb-6">
          <label htmlFor="loanTerm" className="block text-gray-700 font-medium mb-2">
            จำนวนเดือนที่ผ่อน
          </label>
          <select
            id="loanTerm"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="12">12 เดือน</option>
            <option value="24">24 เดือน</option>
            <option value="36">36 เดือน</option>
            <option value="48">48 เดือน</option>
            <option value="60">60 เดือน</option>
            <option value="72">72 เดือน</option>
            <option value="84">84 เดือน</option>
            <option value="96">96 เดือน</option>
            <option value="108">108 เดือน</option>
            <option value="120">120 เดือน</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mb-6">
          <button className="flex-1 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
            คำนวณ
          </button>
          <button className="flex-1 bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">
            ล้างข้อมูล
          </button>
        </div>

        {/* Result Display */}
        <div className="text-center text-lg font-semibold text-gray-700">
          ค่างวดต่อเดือน: 0.00 บาท
        </div>
      </div>
    </div>
  );
};

export default App;
