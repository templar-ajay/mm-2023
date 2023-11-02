import { useRouter } from "next/router";
import PrismicClient from "@/services/prismic";
import PageLayout from "@/components/common/layout/PageLayout";
import Background from "@/components/sections/home-page/Background";
import useComponentResolver from "@/components/hooks/useComponentResolver";

export default function RootPages({
  landingPageData,
  navigation,
  footer,
  videoTestimonials
}) {
  console.log({ landingPageData, navigation, footer, videoTestimonials });
  const router = useRouter();
  if (router.isFallback) return <>Loading...</>;

  const { body, seo_title, seo_description, seo_icon, seo_url } =
    landingPageData.data;

  return (
    <PageLayout
      seoData={{ seo_title, seo_description, seo_icon, seo_url }}
      navigation={navigation}
      BackgroundWrapper={Background}
      footer={footer}
    >
      {body.map((x, i) =>
        useComponentResolver({ data: x, index: i, videoTestimonials })
      )}
    </PageLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      "/medical-seo"
      // ,"/google-ads-ppc-medicos",
      // "/marketing-anuncios-redes-sociales",
      // "/diseno-landing-page-sector-medico-pagina-aterrizaje",
      // "/sobre-medical-marketing",
      // "/testimonios",
      // "/contacta-con-nosotros",
      // "/consultoria-doctores-clinicas-gratis-30-minutos"
    ],
    fallback: true
  };
}

export async function getStaticProps({ params, previewData }) {
  try {
    const client = PrismicClient({ previewData });
    const [landingPageData, navigation, footer] = await Promise.all([
      client.getByUID("landing_page", params.uid, { lang: "en-us" }),
      client.getByType("navigation", { lang: "en-us" }),
      client.getByType("footer")
    ]);
    if (!landingPageData) return { notFound: true };

    const testimonialsFetch = landingPageData.data.body?.find(
      (ele) => ele?.slice_type === "testimonials"
    );
    let videoTestimonials = null;
    if (!!testimonialsFetch) {
      const testimonialId = testimonialsFetch.primary.all_testimonials.id;
      videoTestimonials = await client.getByID(testimonialId, {
        lang: "en-us"
      });
      videoTestimonials && (videoTestimonials = videoTestimonials.data.body[0]);
    }

    return {
      props: {
        landingPageData,
        navigation: navigation.results[0].data,
        footer: footer.results[0].data,
        videoTestimonials
      },
      revalidate: 5
    };
  } catch (error) {
    console.log(error);
    return { props: error, notFound: true };
  }
}
