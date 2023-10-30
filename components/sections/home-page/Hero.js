import React, { useState } from "react";
import Image from "next/image";
import { RichText } from "prismic-reactjs";
import SectionWrapper from "../../common/layout/SectionWrapper";
import ContainerWithLine from "../../common/ContainerWithLine";
import { Heading, Typography } from "../../common/text";
import Logos from "./Logos";
import Video from "@/components/common/Video";
import Modal from "@/components/common/Modal";

const Hero = ({ data }) => {
  const {
    featured_in,
    featured_in_image,
    h1,
    left_side_icon,
    header,
    sub_header,
    video_light_weight,
    long_version_of_video
  } = data.primary || {};
  const [videoClicked, setVideoClick] = useState(false);

  return (
    <>
      <SectionWrapper pt={115} pts={60} pbs={0} pb={0}>
        <ContainerWithLine>
          <div style={{ position: "relative" }}>
            <Image
              className="absolute -top-[20px] -left-[45px] first-line-icon"
              src={left_side_icon?.url}
              alt={left_side_icon?.alt}
              width={left_side_icon?.dimensions?.width}
              height={left_side_icon?.dimensions?.height}
              style={{ maxWidth: "40px" }}
            />
          </div>

          <main id={data.id}>
            <div className="flex largeTablet:items-center h-full flex-col gap-x-6 gap-y-10 largeTablet:flex-row mx-6 pb-[80px]">
              <div className="flex-1 ">
                {h1?.length ? (
                  <Typography
                    alignSmall="left"
                    alignLarge="left"
                    variant="preHeading"
                    isFeatured
                  >
                    {RichText.render(h1)}
                  </Typography>
                ) : (
                  <></>
                )}

                <div className="relative">
                  {header?.length ? (
                    <Heading
                      component="featured"
                      alignSmall="left"
                      alignLarge="left"
                    >
                      {RichText.render(header)}
                    </Heading>
                  ) : (
                    <></>
                  )}
                </div>

                {sub_header?.length ? (
                  <div className="py-10">
                    <Typography
                      alignLarge="left"
                      alignSmall="left"
                      variant="body3"
                      isFeatured
                    >
                      {RichText.render(sub_header)}
                    </Typography>
                  </div>
                ) : (
                  <></>
                )}
              </div>

              {video_light_weight?.url ? (
                <div className="flex-1">
                  <div>
                    {!videoClicked ? (
                      <img
                        onClick={() => setVideoClick(true)}
                        loading="eager"
                        className="relative  scl -right-4"
                        // scale-125 largeTablet:scale-125
                        src={video_light_weight?.url}
                        alt="Insight Dashboard"
                        style={{
                          cursor: "pointer",
                          objectFit: "cover",
                          width: "100%"
                        }}
                      />
                    ) : (
                      <Modal
                        setShowModal={setVideoClick}
                        showModal={videoClicked}
                      >
                        <Video
                          width="90vw"
                          link={long_version_of_video?.embed_url}
                        />
                      </Modal>
                    )}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </main>
        </ContainerWithLine>
      </SectionWrapper>
      {featured_in ? (
        <Logos
          data={{
            logoText: featured_in[0]?.text,
            ...(featured_in_image || {})
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Hero;
