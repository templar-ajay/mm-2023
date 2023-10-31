import PaginationBar from "@/components/common/PaginationBar";
import SectionWrapper from "@/components/common/layout/SectionWrapper";
import { Heading, Typography } from "@/components/common/text";
import FeaturedPost from "./FeaturedPost";
import Post from "./components/Post";

export default function BlogListing({
  blogs,
  totalPageCount,
  activePage,
  pageSize
}) {
  return (
    <>
      <SectionWrapper pt={180} pts={60} pb={120} pbs={140}>
        <Typography variant="preHeading">Blog</Typography>
        <div className="w-full max-w-[750px]">
          <Heading>
            $yellow-to-orangeArticles and updates$yellow-to-orange from
            Medical-Marketing
          </Heading>
        </div>
        <div className="w-full max-w-[750px] pt-4 pb-16 largeTablet:pt-10 largeTablet:pb-32 ">
          <Typography variant="subheading">
            A collection of the latest Medical-Marketing thoughts, insights,
            updates and announcements.
          </Typography>
        </div>
        <FeaturedPost data={blogs[0]} />
        <div className="w-full mt-20">
          <Typography variant="preHeading" alignLarge="left">
            Trending Posts
          </Typography>

          <div className="grid grid-cols-1 gap-y-20 mt-10 largeTablet:grid-cols-2 largeTablet:gap-x-11 ">
            {blogs?.slice(1).map((item) => (
              <Post key={item.id} data={item} />
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
