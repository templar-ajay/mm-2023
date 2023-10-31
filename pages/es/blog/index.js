import PageLayout from "@/components/common/layout/PageLayout";
import Background from "@/components/sections/blog/Background";
import BlogListing from "@/components/sections/blog/index";
import PrismicClient from "@/services/prismic";
import { validPaginationParams } from "@/utils/queryParamUtils";

const BlogsPage = ({ blogs, totalPageCount, navigation, footer }) => {
  console.log({ blogs, totalPageCount, navigation, footer });
  const seo = {
    seo_title: [
      {
        type: "heading1",
        text: "▷ SEO Médico ⭐  SEO para Doctores y Clínicas",
        spans: []
      }
    ],
    seo_description: [
      {
        type: "heading1",
        text: "Agencia de SEO Médico - Alcanza la cima en Google y atrae a miles de pacientes con nuestro SEO médico 【Multiplica tus pacientes ▷ Entra Aquí】- Medical Marketing",
        spans: []
      }
    ],
    seo_icon: undefined,
    seo_url: undefined
  };

  return (
    <PageLayout
      seoData={seo}
      navigation={navigation}
      BackgroundWrapper={Background}
      footer={footer}
    >
      <BlogListing blogs={blogs} totalPageCount={totalPageCount} />
    </PageLayout>
  );
};

export default BlogsPage;

export async function getServerSideProps({ query, previewData }) {
  const { page_number, blog_count } = query;
  const pageSize = validPaginationParams(blog_count, 20)
    ? parseInt(blog_count)
    : 15;
  const client = PrismicClient({ previewData });
  const singleResponse = await client.getByType("page", { pageSize });
  const totalPageCount = singleResponse.total_pages;
  const blogs = await client.getByType("page", {
    pageSize,
    page: validPaginationParams(page_number, totalPageCount)
      ? parseInt(page_number)
      : 1
  });
  const [navigation, footer] = await Promise.all([
    client.getByType("navigation", { lang: "en-us" }),
    client.getByType("footer")
  ]);

  return {
    props: {
      totalPageCount: totalPageCount,
      blogs: blogs.results,
      navigation: navigation.results[0].data,
      footer: footer.results[0].data
    }
  };
}
