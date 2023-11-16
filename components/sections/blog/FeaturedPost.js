import Image from "next/image";
import GradientBorderWrapper from "../../common/GradientBorderWrapper";
import Post from "./components/Post";
import clsx from "clsx";

const FeaturedPost = ({ data, featuredPostText, language }) => {
  return (
    <div className="w-full">
      <div
        className={clsx(
          "w-full largeTablet:grid  largeTablet:gap-x-11",
          data.data?.imagen_del_post?.url
            ? "largeTablet:grid-cols-2"
            : "largeTablet:grid-cols-1"
        )}
      >
        {data.data?.imagen_del_post?.url && (
          <div className="hidden largeTablet:flex largeTablet:items-center">
            <GradientBorderWrapper style={{ width: "100%" }}>
              <div className="flex-1  h-fit relative rounded-[5px] overflow-hidden ">
                <Image
                  src={data.data?.imagen_del_post?.url}
                  // width="auto"
                  width={data.data?.imagen_del_post.dimensions.width}
                  height={data.data?.imagen_del_post.dimensions.height}
                  // layout="fill"
                  // objectFit="cover"
                  alt="Post cover"
                />
              </div>
            </GradientBorderWrapper>
          </div>
        )}

        <div className="flex-1 overflow-hidden largeTablet:flex largeTablet:items-center largeTablet:pl-8">
          <Post
            featuredPostText={featuredPostText}
            language={language}
            featured
            data={data}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
