import { useRouter } from "next/router";
import PrismicClient from "@/services/prismic";
import PageLayout from "@/components/common/layout/PageLayout";
import Background from "@/components/sections/home-page/Background";
import useComponentResolver from "@/components/hooks/useComponentResolver";
import Head from "next/head";

export default function RootPages({
  landingPageData,
  navigation,
  footer,
  videoTestimonials,
  settings
}) {
  console.log("landingPageData", {
    landingPageData,
    navigation,
    footer,
    videoTestimonials,
    settings
  });

  const currentLang = {
    lang: landingPageData.lang,
    uid: landingPageData.uid
  };
  const alternateLang = landingPageData.alternate_languages;

  const router = useRouter();
  const { asPath } = router;
  if (router.isFallback) return <>Loading...</>;

  const {
    body,
    seo_title,
    seo_description,
    seo_icon,
    seo_url,
    html_code,
    html_rich_text
  } = landingPageData.data;

  return (
    <>
      <Head>
        <link
          href={`https://medicalmarketing.digital/${asPath}`}
          hreflang="en-us"
          rel="alternate"
        />
        <link
          rel="canonical"
          href={`https://medicalmarketing.digital/${asPath}`}
        ></link>
      </Head>
      <PageLayout
        seoData={{
          seo_title,
          seo_description,
          seo_icon,
          seo_url,
          html_code,
          html_rich_text
        }}
        navigation={navigation}
        BackgroundWrapper={Background}
        footer={{ footer, currentLang, alternateLang }}
        settings={settings}
      >
        {body.map((x, i) =>
          useComponentResolver({ data: x, index: i, videoTestimonials })
        )}
      </PageLayout>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: ["/medical-healthcare-seo-for-medical-practice"],
    fallback: "blocking"
  };
}

export async function getStaticProps({ params, previewData }) {
  try {
    const client = PrismicClient({ previewData });
    const [landingPageData, navigation, footer, settings] = await Promise.all([
      client.getByUID("landing_page", params.uid, { lang: "en-us" }),
      client.getByType("navigation", { lang: "en-us" }),
      client.getByType("footer", { lang: "en-us" }),
      client.getByType("settings", { lang: "en-us" })
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
