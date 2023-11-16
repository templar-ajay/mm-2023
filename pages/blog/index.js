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
  footer: footerData,
  activePage,
  pageSize,
  settings
}) => {
  console.log({ blogs, totalPageCount, navigation, footerData });
  const seo = {
    seo_title: blogListingPage.data.seo_title,
    seo_description: blogListingPage.data.seo_description,
    seo_icon: undefined,
    seo_url: undefined
  };

  const footer = footerData.results[0].data;
  const currentLang = { lang: footerData.lang, uid: footerData.uid };
  const alternateLang = footerData.alternate_languages;

  return (
    <PageLayout
      seoData={seo}
      navigation={navigation}
      BackgroundWrapper={Background}
      settings={settings}
      footer={{ footer, currentLang, alternateLang }}
    >
      <BlogListing
        blogListingHeader={"TRENDING POSTS"}
        data={blogListingPage}
        blogs={blogs}
        totalPageCount={totalPageCount}
        activePage={activePage}
        pageSize={pageSize}
        language="en-us"
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
    page: activePage,
    lang: "en-us"
  });
  const [navigation, footer, settings, blogListingPage] = await Promise.all([
    client.getByType("navigation", { lang: "en-us" }),
    client.getByType("footer", { lang: "en-us" }),
    client.getByType("settings", { lang: "en-us" }),
    client.getByType("blog_listing", { lang: "en-us" })
  ]);
  console.log("found footer", footer);

  return {
    props: {
      totalPageCount: totalPageCount,
      blogs: blogs.results,
      navigation: navigation.results[0].data,
      footer: footer,
      settings: settings.results[0] ? settings.results[0].data : null,
      blogListingPage: blogListingPage ? blogListingPage.results[0] : null,
      activePage,
      pageSize
    }
  };
}
