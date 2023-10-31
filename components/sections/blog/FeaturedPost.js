import Image from "next/image";
import GradientBorderWrapper from "../../common/GradientBorderWrapper";
import Post from "./components/Post";

const FeaturedPost = ({ data }) => {
  return (
    <div>
      <div className="w-full largeTablet:grid largeTablet:grid-cols-2 largeTablet:gap-x-11">
        <div className="hidden largeTablet:flex">
          <GradientBorderWrapper style={{ width: "100%" }}>
            <div className="flex-1  h-[496px] relative rounded-[5px] overflow-hidden ">
              <Image
                src={data.data?.imagen_del_post?.url}
                width="auto"
                layout="fill"
                objectFit="cover"
                alt="Post cover"
              />
            </div>
          </GradientBorderWrapper>
        </div>

        <div className="flex-1 overflow-hidden largeTablet:flex largeTablet:items-center largeTablet:pl-8">
          <Post featured data={data} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
