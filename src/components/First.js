
import React from 'react';
import video1 from '../Assets/video.mp4';

const First = () => {
  return (
    <div>
     
      <div className="h-[60px] sm:h-[80px] md:h-[100px] border-b-2 border-black bg-white fixed w-full opacity-80 z-10 flex items-center justify-center">
        <p className="text-xl sm:text-3xl md:text-5xl font-bold text-center  ">
          C-commerce
        </p>
      </div>

    
      <div className="relative h-screen w-full pt-[60px] sm:pt-[80px] md:pt-[100px]">
        <video
          src={video1}
          autoPlay
          muted
          loop
          className="h-full w-full object-cover"
          aria-label="Background video"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default First;
