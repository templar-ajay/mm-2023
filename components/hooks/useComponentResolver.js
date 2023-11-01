import React from "react";
import Hero from "../sections/home-page/Hero";
import VideoReviews from "../sections/home-page/videoReview/VideoReviews";
import FaqTemplate from "../sections/home-page/Faq/FAQTemplate";
import BannerEbook from "../sections/home-page/BannerEbook/BannerEbook";
import CTATemplate from "../sections/home-page/CTA/CTATemplate";
import Features from "../sections/home-page/features/Features";
import Team from "../sections/our-team/Team";

export default function useComponentResolver({ data, index }) {
  const key = index + data?.slice_type;
  const junk = {
    hero_landing: <Hero data={data} key={key} />,
    content_with_image: <Features data={data} key={key} />,
    call_to_action: <CTATemplate data={data} key={key} />,
    video_reviews: <VideoReviews data={data} key={key} />,
    faqs: <FaqTemplate data={data} key={key} />,
    lead_magnet_book: <BannerEbook data={data} key={key} />,
    team: <Team data={data} key={key} />
  };

  return junk[data.slice_type] || <></>;
}
