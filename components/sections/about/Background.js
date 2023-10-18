import React from "react";
import Image from "next/image";

// Static Assets
import StrokeL4 from "../../../public/background-strokes/MM completo lado1.png.svg";
import StrokeR3 from "../../../public/background-strokes/MM cruz lado3.png.svg";
import StrokeMobile1 from "../../../public/background-strokes/MM flecha lado5.png.svg";

const Background = ({ children }) => {
  return (
    <div className="bg-darkBG text-white h-fit overflow-hidden relative">
      <div className="absolute hidden largeTablet:block largeTablet:top-[12rem] largeTablet:left-0">
        <Image width="auto" alt="Doodles" src={StrokeL4} />
      </div>
      <div className="absolute hidden largeTablet:block largeTablet:top-[9rem] largeTablet:right-0">
        <Image width="auto" alt="Doodles" src={StrokeR3} />
      </div>

      <div className="absolute top-0 right-0  largeTablet:hidden">
        <Image width="auto" alt="Doodles" src={StrokeMobile1} />
      </div>

      <div className="relative">{children}</div>
    </div>
  );
};

export default Background;
