import React from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const EndingLine = ({ ImageData }) => {
  const { ref, inView } = useInView();

  return (
    <div className="w-full flex px-1 largeTablet:px-6 mb-0">
      <div
        ref={ref}
        className="relative flex-1 bg-gradient-to-b border-b-0 border-l-0 border-r-[#A428BC] border-t-[#A428BC] border h-[200px] w-full to-gray-800"
      >
        <motion.img
          loading="lazy"
          defer
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
          className="absolute -right-[28px] -top-[28px]"
          src={ImageData?.url || "/icons/quote.svg"}
          alt={ImageData?.alt || "Ending line Image"}
        />
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default EndingLine;
