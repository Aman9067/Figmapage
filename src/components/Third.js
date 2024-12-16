import React from 'react';
import ca1 from '../Assets/ca1.avif';
import ca2 from '../Assets/ca2.avif';
import ca33 from '../Assets/ca33.avif';
import ca3 from '../Assets/ca3.avif';
import ca5 from '../Assets/ca5.avif';

const Third = () => {
  return (
    <div>
      <div className="w-full border-8 border-red-600 bg-white px-4 py-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold">
            Elevating Your Style Game
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-red-600 mt-4 font-bold">
            Discover the Perfect Blend of Comfort and Trend with Our Exclusive
            Collection. Explore Deals on Jeans, Sneakers, and More!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-gray-50">
        <div className="bg-gray-200 p-4 rounded-lg">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-center">JEANS</h1>
          <p className="text-sm sm:text-base mt-4">
            Style meets comfort in our collection of jeans. Discover the latest
            trends and perfect cuts for an impeccable look.
          </p>
          <img
            className="h-60 sm:h-72 w-full mt-4 rounded-lg object-cover shadow-lg"
            src={ca1}
            alt="Jeans"
          />
        </div>

       
        <div className="bg-gray-200 p-4 rounded-lg">
          <img
            className="h-80 w-full rounded-lg object-cover shadow-lg"
            src={ca33}
            alt="Promotion"
          />
          <h1 className="text-2xl sm:text-3xl font-extrabold text-center mt-6">
            PROMOTION
          </h1>
          <p className="text-sm sm:text-base mt-4">
            Explore exclusive deals on our top products. The perfect opportunity to
            enrich your wardrobe with trendy pieces at affordable prices.
          </p>
        </div>

       
        <div className="space-y-6">
        
          <div className="bg-gray-200 p-4 rounded-lg">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-center">T-SHIRT</h1>
            <img
              className="h-60 sm:h-72 w-full mt-4 rounded-lg object-cover shadow-lg"
              src={ca3}
              alt="T-Shirt"
            />
          </div>

          <div className="bg-gray-200 p-4 rounded-lg">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-center">
              SNEAKERS
            </h1>
            <p className="text-sm sm:text-base mt-4">
              Passion for fashion and comfort is reflected in every pair of sneakers.
              Experience style and functionality in a single step.
            </p>
            <img
              className="h-40 sm:h-48 w-full mt-4 rounded-lg object-cover shadow-lg"
              src={ca5}
              alt="Sneakers"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
