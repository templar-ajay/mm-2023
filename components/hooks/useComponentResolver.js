import React from "react";
import Hero from "../sections/home-page/Hero";
import VideoReviews from "../sections/home-page/videoReview/VideoReviews";
import FaqTemplate from "../sections/home-page/Faq/FAQTemplate";
import BannerEbook from "../sections/home-page/BannerEbook/BannerEbook";
import CTATemplate from "../sections/home-page/CTA/CTATemplate";
import Features from "../sections/home-page/features/Features";
import Team from "../sections/our-team/Team";
import IframeButton from "../common/iframeButton";
import SessionEstrategica from "../common/SessionEstrategica/SessionEstrategica";
import Iframe from "../common/iFrame/Iframe";

export default function useComponentResolver({
  data,
  index,
  videoTestimonials,
  currentLang
}) {
  const key = index + data?.slice_type;
  if (data?.slice_type == "iframe") {
    console.log("data of iframe", data);
  }
  const junk = {
    hero_landing: <Hero data={data} key={key} />,
    content_with_image: (
      <Features data={data} key={key} currentLang={currentLang} />
    ),
    call_to_action: <CTATemplate data={data} key={key} />,
    video_reviews: <VideoReviews data={data} key={key} />,
    faqs: <FaqTemplate data={data} key={key} />,
    lead_magnet_book: <BannerEbook data={data} key={key} />,
    team: <Team data={data} key={key} />,
    "cta_-_iframe": <IframeButton data={data} key={key} />,
    testimonials: (
      <VideoReviews data={videoTestimonials} key={index + "testimonials"} />
    ),
    book_a_session_script: (
      <SessionEstrategica
        data={data}
        key={index + "book_a_session"}
        lang={currentLang}
      />
    ),
    iframe: <Iframe data={data} key={key} />
  };

  return junk[data.slice_type] || <></>;
}
