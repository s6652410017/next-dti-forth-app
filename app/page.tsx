import Image from "next/image";
import bmi from "./images/bmi.png";
import bmr from "./images/bmr.png";
import car from "./images/car.png";
import logo from "./images/logo.png";
import Link from "next/link";

// Main App component to display the landing page
const App = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo at the top */}
        <div className="mb-8">
          <Image src={logo} alt="logo" width={150} height={150} className="mx-auto" />
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 mb-8 sm:mb-12">
          เครื่องมือคำนวณอเนกประสงค์
        </h1>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* BMI Card with SVG Icon */}
          <Link 
            href="/bmi"
            className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex justify-center items-center mb-4">
              {/* BMI Icon */}
              <Image src={bmi} alt="logo" width={150} height={150} className="mx-auto" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">คำนวณ BMI</h2>
            <p className="text-gray-600">คำนวณดัชนีมวลกายเพื่อประเมินความเสี่ยงด้านสุขภาพของคุณ</p>
          </Link>

          {/* BMR Card with SVG Icon */}
          <Link
            href="/bmr"
            className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex justify-center items-center mb-4">
              {/* BMR Icon */}
               <Image src={bmr} alt="logo" width={150} height={150} className="mx-auto" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">คำนวณ BMR</h2>
            <p className="text-gray-600">คำนวณอัตราการเผาผลาญพลังงานพื้นฐานของร่างกาย</p>
          </Link>

          {/* Car Installment Card with SVG Icon */}
          <Link
            href="/carinstallment"
            className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex justify-center items-center mb-4">
              {/* Car Installment Icon */}
               <Image src={car} alt="logo" width={150} height={150} className="mx-auto" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">คำนวณค่างวดรถ</h2>
            <p className="text-gray-600">คำนวณยอดผ่อนชำระรถยนต์ต่อเดือน</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
