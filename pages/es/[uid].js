import { useRouter } from "next/router";
import PrismicClient from "@/services/prismic";
import PageLayout from "@/components/common/layout/PageLayout";
import Background from "@/components/sections/home-page/Background";
import useComponentResolver from "@/components/hooks/useComponentResolver";
import Head from "next/head";
import Script4Html from "@/utils/Script4Html";

export default function EsRootPages({
  landingPageData,
  navigation,
  footer,
  videoTestimonials,
  settings
}) {
  console.log("landing page data", {
    landingPageData,
    navigation,
    footer,
    videoTestimonials,
    settings
  });
  const router = useRouter();
  const { asPath } = router;
  if (router.isFallback) return <>Loading...</>;

  const { body, seo_title, seo_description, seo_icon, seo_url } =
    landingPageData.data;

  const currentLang = { lang: landingPageData.lang, uid: landingPageData.uid };
  const alternateLang = landingPageData.alternate_languages;

  const alternateUID = landingPageData?.alternate_languages?.[0]?.uid;

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`https://medicalmarketing.digital${asPath}`}
        ></link>
        <link
          href={`https://medicalmarketing.digital${asPath}`}
          hrefLang="x-default"
          rel="alternate"
        />
        {Boolean(alternateUID?.length) && (
          <link
            href={`https://medicalmarketing.digital/${alternateUID}`}
            hreflang="en-us"
            rel="alternate"
          />
        )}
        <link
          href={`https://medicalmarketing.digital${asPath}`}
          hreflang="es-es"
          rel="alternate"
        />
      </Head>
      <PageLayout
        seoData={{ seo_title, seo_description, seo_icon, seo_url }}
        navigation={navigation}
        BackgroundWrapper={Background}
        settings={settings}
        footer={{ footer, currentLang, alternateLang }}
      >
        {body.map((x, i) =>
          useComponentResolver({
            data: x,
            index: i,
            videoTestimonials,
            currentLang
          })
        )}
      </PageLayout>
      <Script4Html lang="es" />
    </>
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
    "/es/contacta-con-nosotros",
    "/es/consultoria-doctores-clinicas-gratis-30-minutos"
  ];
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params, previewData }) {
  try {
    const client = PrismicClient({ previewData });
    let [landingPageData, navigation, footer, settings] = await Promise.all([
      client.getByUID("landing_page", params.uid),
      client.getByType("navigation"),
      client.getByType("footer"),
      client.getByType("settings")
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
        videoTestimonials,
        settings: settings.results[0] ? settings.results[0].data : null
      },
      revalidate: 5
    };
  } catch (error) {
    console.log(error);
    return { props: error, notFound: true };
  }
}
