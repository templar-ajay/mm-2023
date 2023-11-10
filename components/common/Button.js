import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Button = ({
  targetBlank = true,
  contactNumber,
  navigationButton = false,
  children,
  href = "#",
  borderVariant = "neon",
  backgroundVariant = "dark",
  fullWidth,
  gitHub
}) => {
  const path = usePathname();
  const commonStyle = `h-fit min-h-[38px] ${
    !navigationButton && "min-w-[110px]"
  } rounded-md p-[1px] cursor-pointer`;
  const widthStyle = fullWidth ? `w-full largeTablet:w-fit` : `w-fit`;
  const borderVariantStyle =
    borderVariant === "neon"
      ? `bg-gradient-to-br from-[#A428BC] via-[#FFF8C9] to-[#A428BC] drop-shadow-[0_0_4px_#ED5432] hover:via-[#FFF8C9] hover:to-[#ED5432] [&_div]:hover:bg-[#610C9F]`
      : `bg-[#687076] hover:bg-[#ECE5E5] [&_div]:hover:bg-[#ECE5E5] [&_span]:hover:text-[#11181C]`;
  const backgroundVariantStyle =
    backgroundVariant === "orange" || gitHub ? "bg-[#211E1C]" : "bg-darkBG";

  return (
    <>
      {contactNumber ? (
        <div
          style={{ scale: "0.8" }}
          className={`${commonStyle} ${widthStyle} ${borderVariantStyle}  transition-all ease-in-out duration-400`}
        >
          <a href={contactNumber}>
            <div
              // style={{ minHeight: "130px" }}
              className={`h-full w-full min-h-[38px] rounded-md flex justify-center items-center px-3 py-[6px] ${backgroundVariantStyle} transition-all ease-in-out duration-400`}
            >
              {children}
            </div>
          </a>
        </div>
      ) : (
        <Link
          target={targetBlank ? "_blank" : ""}
          href={
            href != "javascript:void(0)"
              ? (path.includes("/es") ? "/es/" : "") + href
              : href
          }
        >
          <div
            className={`${commonStyle} ${widthStyle} ${borderVariantStyle} transition-all ease-in-out duration-400`}
          >
            <div
              className={`h-full w-full min-h-[38px] rounded-md flex justify-center items-center px-3 py-[6px] ${backgroundVariantStyle} `}
            >
              <span className="font-bold text-sm leading-[1] text-[#FEF8F4] flex ">
                {gitHub && (
                  <span className="mr-2">
                    <AiFillGithub />
                  </span>
                )}
                {children}
              </span>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Button;
