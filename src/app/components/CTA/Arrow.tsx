import Image from "next/image";
import { useState, useEffect } from "react";

const Arrow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["Arrow3.svg", "Arrow2.svg"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((previous) => (previous + 1) % images.length);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className="mx-5">
        <Image
          className="w-full"
          width={0}
          height={0}
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
      </div>
    </div>
  );
};

export default Arrow;
