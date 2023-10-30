import { useRouter } from "next/router";
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
  const router = useRouter();
  if (router.isFallback) return <>Loading...</>;

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
      {faqsData ? <FaqTemplate faqs={faqsData} /> : <></>}
    </PageLayout>
  );
}

export async function getStaticPaths() {
  const paths = [
    "/es/marketing-medico-para-doctores-y-clinicas.",
    "/es/google-ads-ppc-medicos",
    "/es/seo-medico",
    "/es/google-ads-ppc-medicos",
    "/es/marketing-anuncios-redes-sociales",
    "/es/diseno-landing-page-sector-medico-pagina-aterrizaje",
    "/es/sobre-medical-marketing",
    "/es/testimonios",
    "/es/contacta-con-nosotros"
    // "/es/consultoria-doctores-clinicas-gratis-30-minutos"
  ];
  return { paths, fallback: true };
}

export async function getStaticProps({ params, previewData }) {
  const client = PrismicClient({ previewData });
  try {
    const [landingPageData, navigation, footer] = await Promise.all([
      client.getByUID("landing_page", params.uid),
      client.getByType("navigation"),
      client.getByType("footer")
    ]);
    if (!landingPageData) return { notFound: true };
    return {
      props: {
        landingPageData,
        navigation: navigation.results[0].data,
        footer: footer.results[0].data
      }
    };
  } catch (error) {
    return { props: error, notFound: true };
  }
}
