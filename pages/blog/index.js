import PageLayout from "@/components/common/layout/PageLayout";
import Background from "@/components/sections/blog/Background";
import Blogs from "@/components/sections/blog/Blogs";
import PrismicClient from "@/services/prismic";
import { validPaginationParams } from "@/utils/queryParamUtils";
import { aboutPageData } from "@/services/dummyData";

const BlogsPage = ({ blogs, totalPageCount, navigation, footer }) => {
  console.log({ blogs, totalPageCount, navigation, footer });

  return (
    <PageLayout
      seoData={aboutPageData.seo}
      navigation={navigation}
      BackgroundWrapper={Background}
      footer={footer}
    >
      <Blogs data={blogs} />
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
