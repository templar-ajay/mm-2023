import React from "react";

const GradientBorderWrapper = ({ children, style }) => {
  return (
    <div
      style={{
        borderRadius: "6px",
        ...style
      }}
      className={`h-fit w-fit p-[1px] bg-gradient-to-tr from-[#a428bc] via-[#ffc400] to-[#a428bc] drop-shadow-[0_0_4px_#ED5432]`}
    >
      {children}
    </div>
  );
};

export default GradientBorderWrapper;
