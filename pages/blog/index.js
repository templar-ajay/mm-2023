import PageLayout from "@/components/common/layout/PageLayout";
import Background from "@/components/sections/blog/Background";
// import Blogs from "@/components/sections/blog/Blogs";
import PrismicClient from "@/services/prismic";
import Prismic from "prismic-javascript";
import { validPaginationParams } from "@/utils/queryParamUtils";

const BlogsPage = ({ blogs, totalPageCount, navigation }) => {
  // console.log(blogs, ":blogs,", totalPageCount, ":totalPageCount,", navigation);

  return (
    <PageLayout
      seoData={{}}
      navigation={navigation}
      BackgroundWrapper={Background}
    >
      {/* <Blogs data={blogs} /> */}
    </PageLayout>
  );
};

export default BlogsPage;

export async function getServerSideProps(serverRes) {
  const { page_number, blog_count } = serverRes.query;
  const pageSize = validPaginationParams(blog_count, 20)
    ? parseInt(blog_count)
    : 15;

  const singleResponse = await PrismicClient.query(
    Prismic.Predicates.at("document.type", "page"),
    { pageSize }
  );
  const totalPageCount = singleResponse.total_pages;

  const options = {
    pageSize,
    page: validPaginationParams(page_number, totalPageCount)
      ? parseInt(page_number)
      : 1
  };
  const blogs = await PrismicClient.query(
    Prismic.Predicates.at("document.type", "page"),
    options
  );

  return { props: { totalPageCount, blogs: blogs.results } };
}
