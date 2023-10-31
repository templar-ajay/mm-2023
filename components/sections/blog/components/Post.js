import Image from "next/image";
import { RichText } from "prismic-reactjs";
import { getReadTime } from "@/utils/dateTimeUtils";
import GradientBorderWrapper from "../../../common/GradientBorderWrapper";
import { Typography } from "../../../common/text";
import Button from "../../../common/Button";
import LocalTypography from "./LocalTypography";
import { usePathname } from "next/navigation";

const Post = ({ data, featured }) => {
  const path = usePathname();
  const title = data.data?.h1_de_la_pagina || "";
  const topics = data?.tags || [];
  const content = data.data?.content;
  const slug = data?.uid || "";
  const coverImage = data.data?.imagen_del_post;
  const stringifyContent = content?.map((obj) => obj.text) + "";
  const href = `${path.includes("/es/") ? "/es/" : "/"}blog/${slug}`;

  return (
    <div className="w-full">
      {featured && (
        <div className="mb-6 largeTablet:mb-0 ">
          <GradientBorderWrapper
            style={{ borderRadius: "24px", padding: "4px 16px 6px" }}
          >
            <span className="font-bold text-xs uppercase tracking-[0.2em] text-[#11181C]">
              Featured Post
            </span>
          </GradientBorderWrapper>
        </div>
      )}
      <div className={`${featured && "largeTablet:hidden"}`}>
        <GradientBorderWrapper style={{ width: "100%", borderRadius: "5px" }}>
          <div className="w-full h-[304px] relative rounded-[5px] overflow-hidden ">
            <Image width="580" height={304} src={coverImage?.url} alt="Cover" />
          </div>
        </GradientBorderWrapper>
      </div>

      <div className="flex justify-start pt-6 pb-2 largeTablet:pt-10">
        {topics?.map((item, i) => (
          <div key={item + i} className="mr-5">
            <Typography
              key={item + i + "2"}
              variant="body4"
            >{`#${item}`}</Typography>
          </div>
        ))}
      </div>
      <div className=" min-h-[55px] largeTablet:min-h-[90px]">
        <LocalTypography featured={featured} variant="title">
          {RichText.render(title)}
        </LocalTypography>
      </div>
      <div className="flex items-center pb-6 largeTablet:pb-10 ">
        <LocalTypography>{`${getReadTime(stringifyContent || "")} ${
          getReadTime(stringifyContent || "") === 1 ? "min" : "mins"
        } read`}</LocalTypography>
      </div>
      <div className="pt-10">
        <Button href={href}>Read More</Button>
      </div>
    </div>
  );
};

export default Post;
