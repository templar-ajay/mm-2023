import PageLayout from "@/components/common/layout/PageLayout";
import Background from "@/components/sections/home-page/Background";
import BlogListing from "@/components/sections/blog/index";
import PrismicClient from "@/services/prismic";
import { validPaginationParams } from "@/utils/queryParamUtils";

const BlogsPage = ({
  blogListingPage,
  blogs,
  totalPageCount,
  navigation,
  footer,
  activePage,
  pageSize,
  settings
}) => {
  console.log({ blogs, totalPageCount, navigation, footer });
  const seo = {
    seo_title: blogListingPage.data.seo_title,
    seo_description: blogListingPage.data.seo_description,
    seo_icon: undefined,
    seo_url: undefined
  };

  return (
    <PageLayout
      seoData={seo}
      navigation={navigation}
      BackgroundWrapper={Background}
      settings={settings}
      footer={footer}
    >
      <BlogListing
        blogListingHeader={"PUBLICACIONES DE TENDENCIA"}
        data={blogListingPage}
        blogs={blogs}
        totalPageCount={totalPageCount}
        activePage={activePage}
        pageSize={pageSize}
      />
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
  const activePage = validPaginationParams(page_number, totalPageCount)
    ? parseInt(page_number)
    : 1;
  const blogs = await client.getByType("page", {
    pageSize,
    page: activePage
  });
  const [navigation, footer, settings, blogListingPage] = await Promise.all([
    client.getByType("navigation", { lang: "es-es" }),
    client.getByType("footer", { lang: "es-es" }),
    client.getByType("settings", { lang: "es-es" }),
    client.getByType("blog_listing", { lang: "es-es" })
  ]);

  return {
    props: {
      totalPageCount: totalPageCount,
      blogs: blogs.results,
      navigation: navigation.results[0].data,
      footer: footer.results[0].data,
      settings: settings.results[0] ? settings.results[0].data : null,
      blogListingPage: blogListingPage ? blogListingPage.results[0] : null,
      activePage,
      pageSize
    }
  };
}
