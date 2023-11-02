import { useState } from "react";
import { RichText } from "prismic-reactjs";
import { VideoReviewsStyles, VideoReviewStyles } from "./VideoReviewsStyles";
import Button from "../../../common/Button";
import Modal from "@/components/common/Modal";
import Video from "@/components/common/Video";

export default function VideoReviews({ data }) {
  const [VideoClicked, setVideoClicked] = useState(false);
  const [currentVideoIframe, setCurrentVideoIframe] = useState("");

  const adjustVideoFrame = (video_popup) => {
    let htmlString = video_popup.html;
    // Replace the width attribute
    htmlString = htmlString.replace(/width="(\d+)"/g, 'width=""');

    htmlString = htmlString.replace(/height="(\d+)"/g, 'height=""');

    // Add &autoplay=1 to the src attribute
    htmlString = htmlString.replace(
      /src="(https:\/\/player\.vimeo\.com\/video\/\d+\?app_id=\d+)"/g,
      'src="$1&autoplay=1" style="position:absolute; top:0;left:0;width:100%;aspect-ratio:16/9;"'
    );

    return htmlString;
  };

  return (
    <VideoReviewsStyles className="section relative">
      <div className="container container__tight">
        <h3 className="h1 text-center text-textPrimary">{"LA PRUEBA:"}</h3>
        <div className="theCopyP"></div>
      </div>
      <div className="container container__tight container__scroll relative">
        {data.items.map(
          (
            {
              image_of_review,
              name_of_reviwer,
              description_of_review,
              cta_to_watch_video,
              video_popup
            },
            i
          ) => (
            <VideoReviewStyles
              key={i + Math.random().toString()}
              onClick={() => {
                setVideoClicked(() => true);
                setCurrentVideoIframe(() => adjustVideoFrame(video_popup));
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
                  <Button as="span" href="javascript:void(0)" arrow={true}>
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
