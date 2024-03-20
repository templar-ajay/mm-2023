import PageLayout from "@/components/common/layout/PageLayout";
import Background from "@/components/sections/home-page/Background";
import PageContent from "@/components/sections/blog/[slug]/PageContent";
import PrismicClient from "@/services/prismic";
import { useRouter } from "next/router";

export default function BlogId({
  blogPageData,
  navigation,
  footer: footerData,
  settings
}) {
  // console.log(
  //   "blogPageData",
  //   blogPageData,
  //   "navigation",
  //   navigation,
  //   "footerData",
  //   footerData
  // );
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;
  const { seo_title, seo_description, seo_icon, seo_url } = blogPageData.data;

  const footer = footerData.results[0].data;
  const currentLang = {
    lang: blogPageData.lang,
    uid: "blog/" + blogPageData.uid
  };
  const alternateLang = blogPageData.alternate_languages.map((x) => {
    const y = { ...x, uid: "blog/" + x.uid };
    return y;
  });

  return (
    <PageLayout
      seoData={{ seo_title, seo_description, seo_icon, seo_url }}
      BackgroundWrapper={Background}
      settings={settings}
      navigation={navigation}
      footer={{ footer, currentLang, alternateLang }}
    >
      <PageContent data={blogPageData} />
    </PageLayout>
  );
}

export function getStaticPaths() {
  return {
    paths: [
      "/blog/marketing-de-reputacion-online-como-ayuda-a-las-clinicas",
      "/blog/3-conceptos-erroneos-frecuentes-sobre-el-marketing-de-clinicas",
      "/blog/12-tips-para-optimizar-tu-presencia-online",
      "/blog/7-formas-en-que-las-clinicas-pueden-beneficiarse-de-las-redes-sociales",
      "/blog/linicas-y-hospitales-que-deben-incluir-su-presencia-online"
    ],
    fallback: true
  };
}

export async function getStaticProps({ params, previewData }) {
  try {
    const client = PrismicClient({ previewData });
    const [blogPageData, navigation, footer, settings] = await Promise.all([
      client.getByUID("page", params.bid, { lang: "en-us" }),
      client.getByType("navigation", { lang: "en-us" }),
      client.getByType("footer", { lang: "en-us" }),
      client.getByType("settings", { lang: "en-us" })
    ]);
    if (!blogPageData) return { notFound: true };
    return {
      props: {
        blogPageData,
        navigation: navigation.results[0].data,
        footer: footer,
        settings: settings.results[0] ? settings.results[0].data : null
      },
      revalidate: 5
    };
  } catch (error) {
    console.log(error);
    return { props: error, notFound: true };
  }
}
