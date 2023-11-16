import { getReadTime } from "@/utils/dateTimeUtils";
import { RichText } from "prismic-reactjs";
import SectionWrapper from "../../../common/layout/SectionWrapper";
import { Heading, Typography } from "../../../common/text";
import OrangeClock from "../../../../public/icons/mobile_menu.svg";
import OrangeAuthor from "../../../../public/icons/close_btn.svg";
import Image from "next/image";
import LocalTypography from "../components/LocalTypography";
import GradientBorderWrapper from "../../../common/GradientBorderWrapper";
import CustomRichText from "@/components/common/CustomRichText/CustomRichText";

const PageContent = ({ data, language }) => {
  const { first_publication_date, tags: topics, slug } = data;
  const { h1_de_la_pagina: title, imagen_del_post, content } = data.data;
  const stringifyContent = content?.map((obj) => obj.text) + "";
  const image = imagen_del_post || { url: "" };

  return (
    <SectionWrapper pt={120} pts={60} pb={180}>
      <div className="w-full max-w-[750px] pt-3 pb-4 largeTablet:pt-4 largeTablet:pb-10 ">
        <Heading component="featuredTitle">{RichText.render(title)}</Heading>
      </div>
      <div className=" w-full flex justify-start largeTablet:justify-center">
        {topics?.map((item) => (
          <div key={item} className="mr-5">
            <Typography key={item} variant="body4">{`#${item}`}</Typography>
          </div>
        ))}
      </div>
      <div className="w-full pt-8 flex justify-start pb-6 largeTablet:pb-4 largeTablet:justify-between">
        <LocalTypography>
          {language == "es-es" ? "Publicado: " : "Published on: "}
          {`${new Date(first_publication_date).getDate()}/${new Date(
            first_publication_date
          ).getMonth()}/${new Date(first_publication_date).getFullYear()}`}
        </LocalTypography>
        <LocalTypography>
          {`${language == "es-es" ? "Lectura de" : ""} ${getReadTime(
            stringifyContent || ""
          )} ${getReadTime(stringifyContent || "") === 1 ? "min" : "mins"} ${
            language == "es-es" ? "" : "read"
          }`}
        </LocalTypography>
      </div>
      <GradientBorderWrapper style={{ width: "100%", borderRadius: "8px" }}>
        <div className="w-full h-fit relative rounded-[5px] overflow-hidden largeTablet:h-[496px]  ">
          <Image width={1206} height={496} src={image.url} alt="Cover" />
        </div>
      </GradientBorderWrapper>
      <div className="w-full max-w-[780px] mt-6 largeTablet:mt-24 text-textPrimary contentWrapper text-lg ">
        <CustomRichText render={content} />
      </div>
    </SectionWrapper>
  );
};

export default PageContent;
