import React from 'react';
import logo from '../Assets/ba1.jpg';
import aman from '../Assets/ba2.jpg';
import img from '../Assets/ba4.jpg';
import img2 from '../Assets/ba7.jpg';
import img3 from '../Assets/ba10.avif';
import img4 from '../Assets/ba9.jpg';

const Second = () => {
  return (
    <div>
      
      <div className="h-60 w-full border-b-2 border-black bg-slate-100 font-sans font-extrabold flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg sm:text-2xl md:text-3xl">WELCOME TO</p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl text-slate-800">C-Commerce</h1>
        </div>
      </div>

      
      <div className="w-full bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <img
          className="rounded-lg shadow-2xl shadow-gray-600 w-full h-80 object-cover"
          src={logo}
          alt="Logo"
        />
        <img
          className="rounded-lg shadow-2xl shadow-gray-600 w-full h-80 object-cover"
          src={aman}
          alt="aman loading"
        />
        <img
          className="rounded-lg shadow-2xl shadow-gray-600 w-full h-80 object-cover"
          src={img}
          alt="Image 1"
        />
        <img
          className="rounded-lg shadow-2xl shadow-gray-600 w-full h-80 object-cover"
          src={img2}
          alt="Image 2"
        />
        <img
          className="rounded-lg shadow-2xl shadow-gray-600 w-full h-80 object-cover"
          src={img3}
          alt="Image 3"
        />
        <img
          className="rounded-lg shadow-2xl shadow-gray-600 w-full h-80 object-cover"
          src={img4}
          alt="Image 4"
        />
      </div>
    </div>
  );
};

export default Second;
