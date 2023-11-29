import Image from 'next/image';
import React from 'react';

const ImageCarousel = ({ display = '' }: any) => {
  const images = [
    {
      source: 'cta-stroke1.svg',
      height: 10,
    },
    {
      source: 'cta-stroke2.svg',
      height: 427,
    },
    {
      source: 'cta-stroke3.svg',
      height: 351,
    },
  ];

  return (
    <div className='h-full justify-end items-center flex'>
      {display && (
        <div className={`absolute right-[200px]  bottom-[20%]  ${display}`}>
          <Image className='w-full' src={images[0].source} alt={`Image1`} width={0} height={images[0].height} />
        </div>
      )}

      {images.map((image, index) => (
        <div key={index} className={`absolute ${index === 0 ? 'bottom-0 right-[200px]  ellipsis' : 'top-[8%] ellipsis2 '}`}>
          <Image className='w-full' src={image.source} alt={`Image${index + 1}`} height={image.height} width={0} />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
