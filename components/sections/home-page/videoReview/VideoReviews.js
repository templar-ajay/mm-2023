import { useState } from "react";
import { RichText } from "prismic-reactjs";
import { VideoReviewsStyles, VideoReviewStyles } from "./VideoReviewsStyles";
import Button from "../../../common/Button";
import Modal from "@/components/common/Modal";
import Video from "@/components/common/Video";
import Image from "next/image";

export default function VideoReviews({ data }) {
  const title = data.primary.intro_to_reviews;
  const [VideoClicked, setVideoClicked] = useState(false);
  const [currentVideoIframe, setCurrentVideoIframe] = useState("");

  const adjustVideoFrame = (video_popup) => {
    // const iframe = `<iframe src="https://player.vimeo.com/video/780826530?app_id=122963&amp;autoplay=1" style="position:absolute; top:0;left:0;width:100%;aspect-ratio:16/9;" width="" height="" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="Dr. David Molina - Medical Marketing"></iframe>`;

    let htmlString = video_popup.html;
    // Replace the width attribute
    htmlString = htmlString.replace(/width="(\d+)"/g, 'width=""');

    htmlString = htmlString.replace(/height="(\d+)"/g, 'height=""');

    // Add &autoplay=1 to the src attribute
    htmlString = htmlString.replace(
      /src="(https:\/\/player\.vimeo\.com\/video\/\d+\?app_id=\d+)"/g,
      'src="$1&autoplay=1" style="position:absolute; top:0;left:0;width:100%;aspect-ratio:16/9; loading="lazy"'
    );

    return htmlString;
  };

  return (
    <VideoReviewsStyles className="section relative">
      <div className="container container__tight">
        <div className="h1 text-center text-textPrimary">
          {RichText.render(title)}
        </div>
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
              <Image
                className="features__item--img"
                src={image_of_review.url}
                alt={image_of_review.alt}
                width={image_of_review.dimensions.width}
                height={image_of_review.dimensions.height}
              />
              <div className="features__item--content flex flex-col gap-y-6 ">
                <div className="text-2xl">
                  {RichText.render(name_of_reviwer)}
                </div>
                <div className="-mt-2">
                  {RichText.render(description_of_review)}
                </div>
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
