import PageLayout from "@/components/common/layout/PageLayout";
import Background from "@/components/sections/blog/Background";
// import Blogs from "@/components/sections/blog/Blogs";
import PrismicClient from "@/services/prismic";
import { validPaginationParams } from "@/utils/queryParamUtils";

const BlogsPage = ({ blogs, totalPageCount, navigation, footer }) => {
  console.log({ blogs, totalPageCount, navigation, footer });

  return (
    <PageLayout
      seoData={{}}
      navigation={navigation}
      BackgroundWrapper={Background}
      footer={footer}
    >
      {/* <Blogs data={blogs} /> */}
    </PageLayout>
  );
};

export default BlogsPage;

export async function getServerSideProps({ query, previewData }) {
  const { page_number, blog_count } = query;
  const client = PrismicClient({ previewData });
  const pageSize = validPaginationParams(blog_count, 20)
    ? parseInt(blog_count)
    : 15;
  const singleResponse = await client.getByType("page", { pageSize });
  const totalPageCount = singleResponse.total_pages;
  const blogs = await client.getByType("page", {
    pageSize,
    page: validPaginationParams(page_number, totalPageCount)
      ? parseInt(page_number)
      : 1
  });

  return { props: { totalPageCount: totalPageCount, blogs: blogs } };
}
