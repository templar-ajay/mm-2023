import PrismicClient from "@/services/prismic";
import PageLayout from "@/components/common/layout/PageLayout";
import Background from "@/components/sections/home-page/Background";
import Hero from "@/components/sections/home-page/Hero";
import Features from "@/components/sections/home-page/features/Features";
import VideoReviews from "@/components/sections/home-page/videoReview/VideoReviews";
import FaqTemplate from "@/components/sections/home-page/Faq/FAQTemplate";
import BannerEbook from "@/components/sections/home-page/BannerEbook/BannerEbook";

export default function EnRootPages({ landingPageData, navigation, footer }) {
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
      ) : null}
      {ebookData ? <BannerEbook ebookData={ebookData} /> : <></>}
      <FaqTemplate faqs={faqsData || { items: [] }} />
    </PageLayout>
  );
}

export async function getStaticPaths(params) {
  console.log({ params });
  return {
    paths: [
      "/es/marketing-medico-para-doctores-y-clinicas.",
      "/es/google-ads-ppc-medicos",
      "/es/seo-medico",
      "/es/google-ads-ppc-medicos",
      "/es/marketing-anuncios-redes-sociales",
      "/es/diseno-landing-page-sector-medico-pagina-aterrizaje",
      // "/es/sobre-medical-marketing",
      "/es/testimonios",
      "/es/contacta-con-nosotros"
      // "/es/consultoria-doctores-clinicas-gratis-30-minutos"
    ],
    fallback: false
  };
}

export async function getStaticProps({ params, previewData }) {
  const client = PrismicClient({ previewData });
  const [landingPageData, navigation, footer] = await Promise.all([
    client.getByUID("landing_page", params.uid),
    client.getByType("navigation"),
    client.getByType("footer")
  ]);

  return { props: { landingPageData, navigation, footer } };
}
