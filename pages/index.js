import PrismicClient from "@/services/prismic";
import PageLayout from "@/components/common/layout/PageLayout";
import Background from "@/components/sections/home-page/Background";
import Hero from "@/components/sections/home-page/Hero";
import Features from "@/components/sections/home-page/features/Features";
import VideoReviews from "@/components/sections/home-page/videoReview/VideoReviews";
import FaqTemplate from "@/components/sections/home-page/Faq/FAQTemplate";
import BannerEbook from "@/components/sections/home-page/BannerEbook/BannerEbook";

export default function Home({ landingPageData, navigation, footer }) {
  console.log({ landingPageData, navigation, footer });

  const { body, seo_title, seo_description, seo_icon, seo_url } =
    landingPageData.data;
  const heroData = body.find((x) => x.slice_type == "hero_landing");
  const videoReviewsData = body.find((x) => x.slice_type == "video_reviews");
  const faqsData = body.find((x) => x.slice_type == "faqs");
  const ebookData = body.find((x) => x.slice_type == "lead_magnet_book");
  const featuresData = body.filter((x) =>
    ["content_with_image", "call_to_action"].includes(x.slice_type)
  );

  return (
    <PageLayout
      seoData={{ seo_title, seo_description, seo_icon, seo_url }}
      navigation={navigation}
      BackgroundWrapper={Background}
      footer={footer}
    >
      <Hero data={heroData} />
      <Features data={featuresData} />
      {videoReviewsData ? (
        <VideoReviews videoReviews={videoReviewsData.items} />
      ) : (
        <></>
      )}
      {ebookData ? <BannerEbook ebookData={ebookData} /> : <></>}
      {faqsData ? <FaqTemplate faqs={faqsData} /> : <></>}
    </PageLayout>
  );
}

export async function getServerSideProps({ previewData }) {
  const client = PrismicClient({ previewData });
  const [landingPageData, navigation, footer] = await Promise.all([
    client.getByUID("landing_page", "home", { lang: "en-us" }),
    client.getByType("navigation", { lang: "en-us" }),
    client.getByType("footer")
  ]);

  return {
    props: {
      landingPageData,
      navigation: navigation.results[0].data,
      footer: footer.results[0].data
    }
  };
}
