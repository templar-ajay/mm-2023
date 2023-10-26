import Prismic from "prismic-javascript";
import PageLayout from "@/components/common/layout/PageLayout";
import Background from "@/components/sections/home-page/Background";
import Hero from "@/components/sections/home-page/Hero";
// import Logos from "@/components/sections/home-page/Logos";
// import Newsletter from "@/components/sections/home-page/Newsletter";
import Features from "@/components/sections/home-page/features/Features";
import PrismicClient from "@/services/prismic";
import VideoReviews from "@/components/sections/home-page/videoReview/VideoReviews";

export default function Home({ landingPageData, navLinks }) {
  console.log(landingPageData, navLinks);

  const { body, seo_title, seo_description, seo_icon, seo_url } =
    landingPageData[0].data;
  const heroData = body.find((x) => x.slice_type == "hero_landing");
  const videoReviewsData = body.find((x) => x.slice_type == "video_reviews");
  const featuresData = body.filter((x) =>
    ["content_with_image", "call_to_action"].includes(x.slice_type)
  );

  return (
    <PageLayout
      seoData={{ seo_title, seo_description, seo_icon, seo_url }}
      navigationURLs={navLinks[0].data}
      BackgroundWrapper={Background}
    >
      <Hero data={heroData} />
      {/* <Logos data={homePageData.hero.users} /> */}
      <Features data={featuresData} />
      <VideoReviews videoReviews={videoReviewsData.items} />
      {/* <Newsletter /> */}
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const [landingPageData, { results: navLinks }] = await Promise.all([
    PrismicClient.query(Prismic.Predicates.at("document.type", "landing_page")),
    PrismicClient.query(Prismic.Predicates.at("document.type", "navigation"))
  ]);

  return {
    props: { landingPageData: landingPageData.results, navLinks }
  };
}
