import { RichText } from "prismic-reactjs";
// import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

// components
import { VideoReviewsStyles, VideoReviewStyles } from "./VideoReviewsStyles";
import Button from "../../../common/Button";
import { useState } from "react";
import Modal from "@/components/common/Modal";
import Video from "@/components/common/Video";

export default function FeatureSlides({ videoReviews }) {
  const [VideoClicked, setVideoClicked] = useState(false);
  const [currentVideoIframe, setCurrentVideoIframe] = useState("");
  console.log("videoReviews", videoReviews);
  return (
    <VideoReviewsStyles className="section relative">
      <div className="container container__tight">
        <h3 className="h1 text-center">{"LA PRUEBA:"}</h3>
        <div className="theCopyP"></div>
        {/* <div className="absolute h-[4rem] w-[4rem] top-[50%] left-2 transform-y-[-50%] bg-[#fff] rounded-full cursor-pointer z-50">
          <AiOutlineLeft
            fill="black"
            size="4rem"
            className="absolute -left-1"
          />
        </div>
        <div className="absolute h-[4rem] w-[4rem] top-[50%] -right-2 transform-y-[-50%] bg-[#fff] rounded-full cursor-pointer z-50">
          <AiOutlineRight
            fill="black"
            size="4rem"
            className="absolute left-1"
            onClick={(event) => {
              event.currentTarget.parentElement.scrollBy();
            }}
          />
        </div> */}
      </div>
      <div className="container container__tight container__scroll relative">
        {videoReviews.map(
          ({
            image_of_review,
            name_of_reviwer,
            description_of_review,
            cta_to_watch_video,
            video_popup
          }) => (
            <VideoReviewStyles
              onClick={() => {
                setVideoClicked(() => true);
                setCurrentVideoIframe(() => {
                  let htmlString = video_popup.html;
                  // Replace the width attribute
                  htmlString = htmlString.replace(/width="(\d+)"/g, 'width=""');

                  htmlString = htmlString.replace(
                    /height="(\d+)"/g,
                    'height=""'
                  );

                  // Add &autoplay=1 to the src attribute
                  htmlString = htmlString.replace(
                    /src="(https:\/\/player\.vimeo\.com\/video\/\d+\?app_id=\d+)"/g,
                    'src="$1&autoplay=1" style="position:absolute; top:0;left:0;width:100%;aspect-ratio:16/9;"'
                  );

                  return htmlString;
                });
                // ___openModal(
                //   "https://player.vimeo.com/video/780826530?h=4d1108cf0c"
                // )
              }}
            >
              <img
                className="features__item--img"
                src={image_of_review.url}
                alt={image_of_review.alt}
              />
              <div className="features__item--content flex flex-col gap-y-6 ">
                {RichText.render(name_of_reviwer)}
                <div>{RichText.render(description_of_review)}</div>
                <div className="block">
                  <Button as="span" arrow={true}>
                    {RichText.render(cta_to_watch_video)}
                  </Button>
                </div>
              </div>
            </VideoReviewStyles>
          )
        )}
      </div>
      {VideoClicked && (
        <Modal setShowModal={setVideoClicked} showModal={VideoClicked}>
          <Video width="90vw" given_iframe={currentVideoIframe}></Video>
        </Modal>
      )}
    </VideoReviewsStyles>
  );
}
