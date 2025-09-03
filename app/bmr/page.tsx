'use client'
import React, { useState } from 'react';

export default function BMRPage() {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [bmr, setBmr] = useState<string | null>(null);

  const calculateBMR = () => {
    if (!weight || !height || !age) {
      alert('กรุณากรอกข้อมูลให้ครบทุกช่อง');
      return;
    }

    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (isNaN(w) || isNaN(h) || isNaN(a) || w <= 0 || h <= 0 || a <= 0) {
      alert('กรุณากรอกข้อมูลให้ถูกต้อง');
      return;
    }

    let bmrValue: number;
    if (gender === 'male') {
      bmrValue = 88.362 + (13.397 * w) + (4.799 * h) - (5.677 * a);
    } else {
      bmrValue = 447.593 + (9.247 * w) + (3.098 * h) - (4.330 * a);
    }

    setBmr(bmrValue.toFixed(2));
  };

  const resetFields = () => {
    setGender('male');
    setWeight('');
    setHeight('');
    setAge('');
    setBmr(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full flex flex-col items-center space-y-6">

        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-4xl text-gray-800 font-bold">BMR Calculator</h1>
          <p className="text-xl text-gray-500 font-semibold mt-2">คำนวณอัตราการเผาผลาญพลังงาน (BMR)</p>
        </div>

        {/* BMR Icon */}
        <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center shadow-inner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-gray-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-4 7h8a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2zM8.5 16h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2z" />
          </svg>
        </div>

        {/* Input Fields */}
        <div className="w-full space-y-4">
          {/* Gender Selection */}
          <div>
            <label className="text-lg text-gray-700 font-medium">เพศ</label>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={() => setGender('male')}
                  className="mr-2 h-4 w-4 text-blue-600"
                />
                <span className="text-gray-700">ชาย</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={() => setGender('female')}
                  className="mr-2 h-4 w-4 text-pink-500"
                />
                <span className="text-gray-700">หญิง</span>
              </label>
            </div>
          </div>

          {/* Weight */}
          <div>
            <label htmlFor="weight" className="text-lg text-gray-700 font-medium">ป้อนน้ำหนัก (กิโลกรัม)</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="ป้อนน้ำหนัก"
              className="mt-2 w-full p-3 bg-white text-gray-800 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>

          {/* Height */}
          <div>
            <label htmlFor="height" className="text-lg text-gray-700 font-medium">ป้อนส่วนสูง (เซนติเมตร)</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="ป้อนส่วนสูง"
              className="mt-2 w-full p-3 bg-white text-gray-800 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>

          {/* Age */}
          <div>
            <label htmlFor="age" className="text-lg text-gray-700 font-medium">ป้อนอายุ (ปี)</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="ป้อนอายุ"
              className="mt-2 w-full p-3 bg-white text-gray-800 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full flex space-x-4">
          <button
            onClick={calculateBMR}
            className="flex-1 bg-blue-600 text-white text-lg font-bold py-3 rounded-xl hover:bg-blue-700 transition"
          >
            คำนวณ BMR
          </button>
          <button
            onClick={resetFields}
            className="flex-1 bg-red-500 text-white text-lg font-bold py-3 rounded-xl hover:bg-red-600 transition"
          >
            รีเซ็ต
          </button>
        </div>

        {/* Result Display */}
        <div className="w-full text-center mt-4">
          <h2 className="text-2xl font-bold text-gray-800">
            ค่า BMR ที่คำนวณได้: <span className="text-blue-600">{bmr !== null ? bmr : '0.00'}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
