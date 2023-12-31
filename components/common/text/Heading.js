import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

// Components
import DecoratedText from "./utils/DecoratedText";

const Heading = ({
  children,
  component = "h1",
  alignLarge = "center",
  alignSmall = "left"
}) => {
  const isLargeTablet = useMediaQuery();
  const commonStyle = `w-full font-bold text-textPrimary tracking-[-0.02em] text-3xl`;
  if (component === "h2") {
    return (
      <h2
        style={{
          textAlign: isLargeTablet ? alignLarge : alignSmall
        }}
        className={`${commonStyle}
        largeTablet:text-5xl`}
      >
        <DecoratedText content={children} />
      </h2>
    );
  }
  if (component === "h3") {
    return (
      <h3
        style={{
          textAlign: isLargeTablet ? alignLarge : alignSmall
        }}
        className={`${commonStyle} largeTablet:
        largeTablet:text-4xl`}
      >
        <DecoratedText content={children} />
      </h3>
    );
  }
  if (component === "featured") {
    return (
      <div
        style={{ textAlign: isLargeTablet ? alignLarge : alignSmall }}
        className={`featuredHeading ${commonStyle} text-[26px] leading-tight mobile_480:leading-snug mobile_480:text-3xl largeTablet:text-4xl largeTablet:leading-normal 
        `}
      >
        {children}
      </div>
    );
  }
  if (component === "featuredTitle") {
    return (
      <div
        style={{ textAlign: isLargeTablet ? alignLarge : alignSmall }}
        className={`featuredHeading ${commonStyle} largeTablet:
        largeTablet:text-5xl`}
      >
        {children}
      </div>
    );
  }
  return (
    <div
      style={{
        textAlign: isLargeTablet ? alignLarge : alignSmall
      }}
      className={`${commonStyle}
      largeTablet:text-6xl largeTablet:tracking-[-0.03em]`}
    >
      {children}
    </div>
  );
};

export default Heading;
