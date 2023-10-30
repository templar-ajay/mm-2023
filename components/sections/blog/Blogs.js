import React from "react";
import SectionWrapper from "../../common/layout/SectionWrapper";
import { Heading, Typography } from "../../common/text";
import Post from "./components/Post";
import FeaturedPost from "./FeaturedPost";

const Blogs = ({ data }) => {
  return (
    <SectionWrapper pt={205} pts={60} pb={265} pbs={135}>
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
      <FeaturedPost data={data[0]} />
      <div className="w-full mt-20">
        <Typography variant="preHeading" alignLarge="left">
          Recent Posts
        </Typography>

        <div className="grid grid-cols-1 gap-y-20 mt-10 largeTablet:grid-cols-2 largeTablet:gap-x-11 ">
          {data?.slice(1).map((item) => (
            <Post key={item.id} data={item} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Blogs;
