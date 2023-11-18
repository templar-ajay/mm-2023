import PrismicClient from "@/services/prismic";
import PageLayout from "@/components/common/layout/PageLayout";
import Background from "@/components/sections/home-page/Background";
import useComponentResolver from "@/components/hooks/useComponentResolver";
import Head from "next/head";

export default function Home({
  landingPageData,
  navigation,
  footer,
  videoTestimonials,
  settings
}) {
  console.log({ landingPageData, navigation, footer, videoTestimonials });
  // if (!landingPageData) return <Error />;
  const { body, seo_title, seo_description, seo_icon, seo_url, html_code } =
    landingPageData.data;
  const currentLang = { lang: landingPageData.lang, uid: landingPageData.uid };
  const alternateLang = landingPageData.alternate_languages;
  // console.log("footer", footer);
  // console.log("currentLang", currentLang);
  // console.log("alternateLang", alternateLang);

  return (
    <>
      <Head>
        <link rel="canonical" href={`https://medicalmarketing.digital`}></link>
        <link
          href={`https://medicalmarketing.digital`}
          hreflang="en-us"
          rel="alternate"
        />
        <link
          href={`https://medicalmarketing.digital/es`}
          hreflang="es-es"
          rel="alternate"
        />
      </Head>
      <PageLayout
        seoData={{ seo_title, seo_description, seo_icon, seo_url, html_code }}
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
    </>
  );
}

export async function getServerSideProps({ previewData }) {
  try {
    const client = PrismicClient({ previewData });
    const [landingPageData, navigation, footer, settings] = await Promise.all([
      client.getByUID(
        "landing_page",
        "marketing-medico-para-doctores-y-clinicas.",
        { lang: "en-us" }
      ),
      client.getByType("navigation", { lang: "en-us" }),
      client.getByType("footer", { lang: "en-us" }),
      client.getByType("settings", { lang: "en-us" })
    ]);

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
        navigation: navigation.results[0] ? navigation.results[0].data : null,
        footer: footer.results[0] ? footer.results[0].data : null,
        videoTestimonials,
        settings: settings.results[0] ? settings.results[0].data : null
      }
    };
  } catch (error) {
    console.log(error);
    return { props: { landingPageData: null } };
  }
}
