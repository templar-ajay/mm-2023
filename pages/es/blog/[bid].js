import PageLayout from "@/components/common/layout/PageLayout";
import Background from "@/components/sections/home-page/Background";
import PageContent from "@/components/sections/blog/[slug]/PageContent";
import PrismicClient from "@/services/prismic";
import { useRouter } from "next/router";

export default function BlogId({ blogPageData, navigation, footer, settings }) {
  console.log(blogPageData, navigation, footer);
  console.log("blogpage data", blogPageData?.lang);
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;
  const { seo_title, seo_description, seo_icon, seo_url } = blogPageData.data;

  return (
    <PageLayout
      seoData={{ seo_title, seo_description, seo_icon, seo_url }}
      BackgroundWrapper={Background}
      settings={settings}
      navigation={navigation}
      footer={footer}
    >
      <PageContent data={blogPageData} language={blogPageData?.lang} />
    </PageLayout>
  );
}

export function getStaticPaths() {
  return {
    paths: [
      "/es/blog/marketing-de-reputacion-online-como-ayuda-a-las-clinicas",
      "/es/blog/3-conceptos-erroneos-frecuentes-sobre-el-marketing-de-clinicas",
      "/es/blog/12-tips-para-optimizar-tu-presencia-online",
      "/es/blog/7-formas-en-que-las-clinicas-pueden-beneficiarse-de-las-redes-sociales",
      "/es/blog/linicas-y-hospitales-que-deben-incluir-su-presencia-online"
    ],
    fallback: true
  };
}

export async function getStaticProps({ params, previewData }) {
  try {
    const client = PrismicClient({ previewData });
    const [blogPageData, navigation, footer, settings] = await Promise.all([
      client.getByUID("page", params.bid, {}),
      client.getByType("navigation"),
      client.getByType("footer"),
      client.getByType("settings")
    ]);
    if (!blogPageData) return { notFound: true };
    return {
      props: {
        blogPageData,
        navigation: navigation.results[0].data,
        footer: footer.results[0].data,
        settings: settings.results[0] ? settings.results[0].data : null
      },
      revalidate: 5
    };
  } catch (error) {
    console.log(error);
    return { props: error, notFound: true };
  }
}
