import PaginationBar from "@/components/common/PaginationBar";
import SectionWrapper from "@/components/common/layout/SectionWrapper";
import { Heading, Typography } from "@/components/common/text";
import FeaturedPost from "./FeaturedPost";
import Post from "./components/Post";
// import { PrismicRichText } from "@prismicio/react";
import { RichText } from "prismic-reactjs";
import CustomRichText from "@/components/common/CustomRichText/CustomRichText";

export default function BlogListing({
  blogListingHeader,
  data,
  blogs,
  totalPageCount,
  activePage,
  pageSize,
  language
}) {
  console.log("blog listing data", data);
  const heading = data.data.heading;
  const subHeading = data.data.sub_heading;
  return (
    <>
      <SectionWrapper pt={180} pts={60} pb={120} pbs={140}>
        {/* <Typography variant="preHeading">Blog</Typography> */}
        <div className="w-full max-w-[750px] blog-heading">
          <Heading>
            <CustomRichText render={heading} />
          </Heading>
        </div>
        <div className="w-full max-w-[750px] pt-4 pb-16 largeTablet:pt-10 largeTablet:pb-32 ">
          <Typography variant="subheading">
            {RichText.render(subHeading)}
          </Typography>
        </div>
        <FeaturedPost
          featuredPostText={
            language == "en-us" ? "Featured Post" : "Artículo destacado"
          }
          data={blogs[0]}
          language={language}
        />
        <div className="w-full mt-20">
          <Typography variant="preHeading" alignLarge="left">
            {Boolean(blogs.slice(1).length) && blogListingHeader}
          </Typography>

          <div className="grid grid-cols-1 gap-y-20 mt-10 largeTablet:grid-cols-2 largeTablet:gap-x-11 ">
            {blogs?.slice(1).map((item) => (
              <Post key={item.id} data={item} language={language} />
            ))}
          </div>
        </div>
      </SectionWrapper>
      <div className="w-100 flex justify-center pb-12">
        <PaginationBar
          totalPage={totalPageCount}
          activePage={activePage}
          pageSize={pageSize}
        />
      </div>
    </>
  );
}
