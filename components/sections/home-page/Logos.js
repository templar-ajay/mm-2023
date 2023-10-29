import React from "react";
import SectionWrapper from "../../common/layout/SectionWrapper";
import ContainerWithLine from "../../common/ContainerWithLine";
import { Typography } from "../../common/text";

const Logos = ({ data }) => {
  return (
    <SectionWrapper pbs={0}>
      <ContainerWithLine>
        {!!data?.logoText && (
          <div className="px-6 pt-32 pb-4 largeTablet:pt-10 ">
            <Typography
              alignLarge="left"
              alignSmall="center"
              variant="preHeading"
            >
              {data.logoText}
            </Typography>
          </div>
        )}
        {!!data?.url && (
          <div className="w-full px-0 pb-20 ">
            <span className="relative h-[18px] largeTablet:h-6 mx-auto">
              <img
                className="h-full"
                src={data.url}
                alt={data.alt}
                loading="lazy"
              />
            </span>
          </div>
        )}
      </ContainerWithLine>
    </SectionWrapper>
  );
};

export default Logos;
