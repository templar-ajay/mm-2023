import Image from "next/image";
import React, { createElement } from "react";

// Components
import GradientBorderWrapper from "../../common/GradientBorderWrapper";
import Blog from "./components/Post";

const FeaturedPost = ({ data }) => {
  const blogData = {
    title: data.data?.h1_de_la_pagina || "",
    content: data.data?.content || "",
    topics: data?.tags || [],
    author: createElement(
      "span",
      null,
      new Date(data?.first_publication_date || Date.now()).toLocaleString()
    ),
    summary: data?.href || [],
    slug: data?.uid || "",
    id: data?.id || "",
    coverImage: Object.keys(data.data?.imagen_del_post).length || {
      url: "../../../public/medicosLogo/medicos-logo-bold.jpg"
    }
  };

  return (
    <div>
      <div className="w-full largeTablet:grid largeTablet:grid-cols-2 largeTablet:gap-x-11">
        <div className="hidden largeTablet:flex">
          <GradientBorderWrapper style={{ width: "100%" }}>
            <div className="flex-1  h-[496px] relative rounded-[5px] overflow-hidden ">
              <Image
                src={blogData.coverImage}
                width="auto"
                layout="fill"
                objectFit="cover"
                alt="Post cover"
              />
            </div>
          </GradientBorderWrapper>
        </div>

        <div className="flex-1 overflow-hidden largeTablet:flex largeTablet:items-center largeTablet:pl-8">
          <Blog featured data={blogData} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
