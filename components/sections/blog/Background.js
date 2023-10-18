import React from "react";
import Image from "next/image";

// Static Assets
import StrokeL5 from "../../../public/background-strokes/MM completo lado1.png";
import StrokeR4 from "../../../public/background-strokes/MM cruz lado3.png";
import StrokeMobile1 from "../../../public/background-strokes/MM flecha lado5.png";

const Background = ({ children }) => {
  return (
    <div className="bg-darkBG text-white h-fit overflow-hidden relative">
      <div className="absolute hidden largeTablet:block largeTablet:top-[0rem] largeTablet:right-0">
        <Image width="auto" alt="Doodles" src={StrokeR4} />
      </div>

      <div className="absolute hidden largeTablet:block largeTablet:top-[1rem] largeTablet:left-0">
        <Image width="auto" alt="Doodles" src={StrokeL5} />
      </div>

      {/* MOBILE */}

      <div className="absolute top-0 right-0  largeTablet:hidden">
        <Image width="auto" alt="Doodles" src={StrokeMobile1} />
      </div>

      <div className="relative">{children}</div>
    </div>
  );
};

export default Background;
