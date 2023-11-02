import { useRouter } from "next/router";
import PrismicClient from "@/services/prismic";
import PageLayout from "@/components/common/layout/PageLayout";
import Background from "@/components/sections/home-page/Background";
import useComponentResolver from "@/components/hooks/useComponentResolver";

export default function EsRootPages({
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
  try {
    const client = PrismicClient({ previewData });
    let [landingPageData, navigation, footer] = await Promise.all([
      client.getByUID("landing_page", params.uid),
      client.getByType("navigation"),
      client.getByType("footer")
    ]);
    if (!landingPageData) return { notFound: true };

    const testimonialsFetch = landingPageData?.data?.body?.find(
      (ele) => ele?.slice_type === "testimonials"
    );
    let videoTestimonials = null;
    if (!!testimonialsFetch) {
      const testimonialId = testimonialsFetch.primary.all_testimonials.id;
      videoTestimonials = await client.getByID(testimonialId);
      videoTestimonials && (videoTestimonials = videoTestimonials.data.body[0]);
    }

    return {
      props: {
        landingPageData,
        navigation: navigation.results[0] ? navigation.results[0].data : null,
        footer: footer.results[0] ? footer.results[0].data : null,
        videoTestimonials
      },
      revalidate: 5
    };
  } catch (error) {
    console.log(error);
    return { props: error, notFound: true };
  }
}
