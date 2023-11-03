import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Typography } from "./text";
import SectionWrapper from "./layout/SectionWrapper";
import EndingLine from "./EndingLine";
import { RichText } from "prismic-reactjs";

const IframeButton = ({ data }) => {
  const { iframe, after_cta, small_image_above_cta } = data.primary;
  console.log("iframeButton data", data);
  const path = usePathname();
  const commonStyle = `h-fit min-h-[38px] min-w-[110px] rounded-md p-[1px] cursor-pointer`;
  const widthStyle = `w-full largeTablet:w-fit`;
  const borderVariantStyle = `bg-gradient-to-br from-[#A428BC] via-[#FFF8C9] to-[#A428BC] drop-shadow-[0_0_4px_#ED5432] hover:via-[#FFF8C9] hover:to-[#ED5432]`;
  const backgroundVariantStyle = "bg-darkBG";

  return (
    <>
      <SectionWrapper pbs={0}>
        <EndingLine ImageData={small_image_above_cta} />
        <div style={{ marginBottom: "60px", height: "1200px" }}>
          <SectionWrapper pb={150} pbs={105}>
            <div className="w-full h-full items-center flex flex-col">
              {/* <Link href={path.includes("/es") ? "/es/" : "/" + href} passHref> */}
              <div
                className={`${commonStyle} ${widthStyle} ${borderVariantStyle} h-full transition-all ease-in-out duration-400`}
              >
                <div
                  className={`h-full w-full min-h-[38px] rounded-md flex justify-center items-center px-3 py-[6px] ${backgroundVariantStyle} `}
                >
                  <span className="font-bold text-sm leading-[1] text-[#FEF8F4] flex h-full ">
                    <div
                      className="flex flex-col mt-2 h-full w-[500px]"
                      style={{ minHeight: "70px" }}
                    >
                      <Typography
                        fontSize="28px"
                        alignSmall="center"
                        variant="subHeading"
                      >
                        <div
                          className="h-[950px]"
                          dangerouslySetInnerHTML={{ __html: iframe }}
                        ></div>
                      </Typography>
                    </div>
                  </span>
                </div>
              </div>
              {/* </Link> */}
            </div>
          </SectionWrapper>
          <div>
            {after_cta && (
              <Typography alignSmall="center" variant="body1">
                {RichText.render(after_cta)}
              </Typography>
            )}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default IframeButton;
