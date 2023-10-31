import React from "react";
import Hero from "../sections/home-page/Hero";
import VideoReviews from "../sections/home-page/videoReview/VideoReviews";
import FaqTemplate from "../sections/home-page/Faq/FAQTemplate";
import BannerEbook from "../sections/home-page/BannerEbook/BannerEbook";
import CTATemplate from "../sections/home-page/CTA/CTATemplate";
import Features from "../sections/home-page/features/Features";

export default function useComponentResolver({ data }) {
  const junk = {
    hero_landing: <Hero data={data} />,
    content_with_image: <Features data={data} />,
    call_to_action: <CTATemplate data={data} />,
    video_reviews: <VideoReviews data={data} />,
    faqs: <FaqTemplate data={data} />,
    lead_magnet_book: <BannerEbook data={data} />
  };

  return junk[data.slice_type] || <></>;
}
