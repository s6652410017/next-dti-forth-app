'use client'
import React, { useState } from 'react';

const CarInstallment = () => {
  const [carPrice, setCarPrice] = useState('');
  const [downPayment, setDownPayment] = useState('10');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('12');
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [userName, setUserName] = useState('');

  const calculateInstallment = () => {
    const price = parseFloat(carPrice);
    const dpPercent = parseFloat(downPayment);
    const ratePercent = parseFloat(interestRate);
    const termMonths = parseInt(loanTerm, 10);

    if (isNaN(price) || isNaN(ratePercent) || price <= 0 || ratePercent < 0) {
      alert('กรุณากรอกราคารถยนต์และอัตราดอกเบี้ยให้ถูกต้อง');
      return;
    }

    const downPaymentAmount = price * (dpPercent / 100);
    const loanAmount = price - downPaymentAmount;
    const interestPerYear = loanAmount * (ratePercent / 100);
    const totalInterest = (termMonths / 12) * interestPerYear;
    const totalPayment = loanAmount + totalInterest;
    const monthly = totalPayment / termMonths;

    setMonthlyPayment(monthly);
  };

  const resetFields = () => {
    setCarPrice('');
    setDownPayment('10');
    setInterestRate('');
    setLoanTerm('12');
    setMonthlyPayment(0);
    setUserName('');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 font-inter text-gray-800">
      {/* Card Container */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full flex flex-col items-center space-y-6">

        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-4xl text-gray-900 font-bold">คำนวณค่างวดรถยนต์</h1>
          <p className="text-xl text-gray-600 font-semibold mt-2">ประเมินยอดผ่อนชำระต่อเดือน</p>
        </div>

        {/* Car Icon */}
        <div className="w-48 h-48 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-500"
          >
            <path d="M14 16H9m10 0h1c.6 0 1-.4 1-1V8c0-1.1-.9-2-2-2h-1.3L15 4H9L6.3 6H5c-1.1 0-2 .9-2 2v8c0 .6.4 1 1 1h1"/>
            <circle cx="6.5" cy="16.5" r="2.5"/>
            <circle cx="17.5" cy="16.5" r="2.5"/>
          </svg>
        </div>

        {/* Input Fields */}
        <div className="w-full space-y-4">
          <div>
            <label htmlFor="userName" className="text-lg font-medium">ชื่อผู้คำนวณ</label>
            <input
              type="text"
              id="userName"
              placeholder='ป้อนชื่อ'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="mt-2 w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="carPrice" className="text-lg font-medium">ราคารถยนต์ (บาท)</label>
            <input
              type="number"
              id="carPrice"
              placeholder='ป้อนราคารถยนต์'
              value={carPrice}
              onChange={(e) => setCarPrice(e.target.value)}
              className="mt-2 w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="interestRate" className="text-lg font-medium">อัตราดอกเบี้ยต่อปี (%)</label>
            <input
              type="number"
              id="interestRate"
              placeholder='ป้อนดอกเบี้ย'
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="mt-2 w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
            />
          </div>
          <div>
            <label className="text-lg font-medium">เงินดาวน์ (%)</label>
            <div className="flex flex-wrap gap-4 mt-2">
              {['10', '15', '20', '25', '30', '40'].map((value) => (
                <label key={value} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="downPayment"
                    value={value}
                    checked={downPayment === value}
                    onChange={(e) => setDownPayment(e.target.value)}
                    className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">{value}%</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="loanTerm" className="text-lg font-medium">ระยะเวลาผ่อนชำระ (เดือน)</label>
            <select
              id="loanTerm"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="mt-2 w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
            >
              <option value="12">12 เดือน (1 ปี)</option>
              <option value="24">24 เดือน (2 ปี)</option>
              <option value="36">36 เดือน (3 ปี)</option>
              <option value="48">48 เดือน (4 ปี)</option>
              <option value="60">60 เดือน (5 ปี)</option>
              <option value="72">72 เดือน (6 ปี)</option>
              <option value="84">84 เดือน (7 ปี)</option>
              <option value="96">96 เดือน (8 ปี)</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full flex space-x-4">
          <button
            onClick={calculateInstallment}
            className="flex-1 bg-blue-600 text-white text-lg font-bold py-3 rounded-xl shadow-md hover:bg-blue-700 transition-colors"
          >
            คำนวณค่างวด
          </button>
          <button
            onClick={resetFields}
            className="flex-1 bg-red-500 text-white text-lg font-bold py-3 rounded-xl shadow-md hover:bg-red-600 transition-colors"
          >
            รีเซ็ต
          </button>
        </div>

        {/* Result Display */}
        <div className="w-full text-center mt-4 p-4 bg-gray-100 rounded-xl border border-gray-300">
          <h2 className="text-2xl font-bold text-gray-800">
            ค่างวดต่อเดือน: <span id="monthlyPaymentResult" className="text-blue-600">{monthlyPayment.toFixed(2)}</span> บาท
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CarInstallment;
