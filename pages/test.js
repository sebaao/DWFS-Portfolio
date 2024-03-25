import React from 'react';

const ImageWithOverlay = ({ src, alt, overlayText }) => {
  return (
    <div className="relative pb-full">
      <img src={src} className="rounded-lg object-cover w-full h-64" alt={alt} />
      <div className="absolute bottom-0 left-0 w-full h-full bg-black opacity-0">
        <div className="px-4 py-4 text-white text-center">
          <h2 className="text-xl font-medium">{overlayText}</h2>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full hover:opacity-75 cursor-pointer transition-opacity duration-300"></div>
    </div>
  );
};

export default ImageWithOverlay;
