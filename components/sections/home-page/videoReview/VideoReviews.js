import { RichText } from "prismic-reactjs";
// import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

// components
import { VideoReviewsStyles, VideoReviewStyles } from "./VideoReviewsStyles";
import Button from "../../../common/Button";

export default function FeatureSlides({ videoReviews }) {
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
            cta_to_watch_video
          }) => (
            <VideoReviewStyles
              onClick={() =>
                ___openModal(
                  "https://player.vimeo.com/video/780826530?h=4d1108cf0c"
                )
              }
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
    </VideoReviewsStyles>
  );
}
