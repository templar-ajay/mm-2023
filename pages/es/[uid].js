import { useRouter } from "next/router";
import PrismicClient from "@/services/prismic";
import PageLayout from "@/components/common/layout/PageLayout";
import Background from "@/components/sections/home-page/Background";
import useComponentResolver from "@/components/hooks/useComponentResolver";

export default function EnRootPages({ landingPageData, navigation, footer }) {
  console.log({ landingPageData, navigation, footer });
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
      {body.map((x, i) => useComponentResolver({ data: x, index: i }))}
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
    console.log(error);
    return { props: error, notFound: true };
  }
}
