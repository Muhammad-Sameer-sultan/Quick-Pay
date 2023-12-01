import { useEffect, useState } from 'react';

const Box = ({ src, show, className }:{src:string,show:boolean,className:string}) => (
  <img src={src} alt="" className={`${className} ${show ? `box-${className.slice(-1)}` : 'opacity-0'}`} />
);

const Floater2 = ({ refresh2 }:any) => {
  const [boxes, setBoxes] = useState(Array(5).fill(false));
  
  useEffect(() => {
    if (refresh2) {
      const showBoxes = Array.from({ length: 5 }, (_, index) => {
          return setTimeout(() => {
              setBoxes((prevBoxes) => {
            const newBoxes = [...prevBoxes];
            newBoxes[index] = true;
            return newBoxes;
          });
        }, (index + 1) * 1000);
    });

      // Clear all boxes after 6 seconds
      setTimeout(() => {
        setBoxes(Array(5).fill(false));
      }, 6000);

      return () => {
        showBoxes.forEach((timeoutId) => clearTimeout(timeoutId));
      };
    }
  }, [refresh2]);

  return (
    <div className="relative h-[250px]">
      <div>
        {boxes.map((show, index) => (
          <Box key={index} src={`icon${10 - index}.svg`} show={show} className={`box${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Floater2;
