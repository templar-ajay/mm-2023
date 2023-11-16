import Image from "next/image";
import { RichText } from "prismic-reactjs";
import { getReadTime } from "@/utils/dateTimeUtils";
import GradientBorderWrapper from "../../../common/GradientBorderWrapper";
import { Typography } from "../../../common/text";
import Button from "../../../common/Button";
import LocalTypography from "./LocalTypography";

const Post = ({ data, featured, language = "es-es", featuredPostText }) => {
  const title = data.data?.h1_de_la_pagina || "";
  const topics = data?.tags || [];
  const content = data.data?.content;
  const slug = data?.uid || "";
  const coverImage = data.data?.imagen_del_post;
  const stringifyContent = content?.map((obj) => obj.text) + "";
  const href = `blog/${slug}`;
  const buttonText = language == "es-es" ? "Leer Más" : "Read More";

  return (
    <div className="w-full">
      {featured && (
        <div className="mb-6 largeTablet:mb-0 ">
          <GradientBorderWrapper
            style={{ borderRadius: "24px", padding: "4px 16px 6px" }}
          >
            <span className="font-bold text-xs uppercase tracking-[0.2em] text-[#11181C]">
              {featuredPostText}
            </span>
          </GradientBorderWrapper>
        </div>
      )}
      {coverImage?.url && (
        <div className={`${featured && "largeTablet:hidden"}`}>
          <GradientBorderWrapper style={{ width: "100%", borderRadius: "5px" }}>
            <div className="w-fit h-fit relative rounded-[5px] overflow-hidden">
              <Image
                width={820}
                height={400}
                src={coverImage?.url}
                className="object-cover"
                alt="Cover"
              />
            </div>
          </GradientBorderWrapper>
        </div>
      )}

      <div className="flex flex-wrap justify-start pt-6 pb-2 largeTablet:pt-10">
        {topics?.map((item, i) => (
          <div key={item + i} className="mr-5">
            <Typography
              key={item + i + "2"}
              variant="body4"
            >{`#${item}`}</Typography>
          </div>
        ))}
      </div>
      <div className=" min-h-[40px] largeTablet:min-h-[60px] mb-3">
        <LocalTypography featured={featured} variant="title">
          {RichText.render(title)}
        </LocalTypography>
      </div>
      <div className="flex items-center pb-1 largeTablet:pb-1 ">
        <LocalTypography>{stringifyContent.slice(0, 200)}...</LocalTypography>
      </div>

      <div className="flex items-center pb-1 largeTablet:pb-2 ">
        <LocalTypography>{`${getReadTime(stringifyContent || "")} ${
          getReadTime(stringifyContent || "") === 1
            ? language == "es-es"
              ? "minuto"
              : "minute"
            : language == "es-es"
            ? "minutos"
            : "minutes"
        } ${language == "es-es" ? "de lectura" : "read"}`}</LocalTypography>
      </div>
      <div className="pt-1">
        <Button href={href}>{buttonText}</Button>
      </div>
    </div>
  );
};

export default Post;
