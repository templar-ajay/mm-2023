import SectionWrapper from "../../../common/layout/SectionWrapper";
import { Typography } from "../../../common/text";
import Button from "../../../common/Button";
import { RichText } from "prismic-reactjs";

const CTA = ({ data, pb, pbs }) => {
  const {
    after_cta,
    main_text,
    secondary_text,
    below_text,
    destination_link_of_cta
  } = data;
  const { url, uid } = destination_link_of_cta;

  return (
    <>
      {(main_text[0] || secondary_text[0] || below_text[0] || after_cta[0]) && (
        <div style={{ marginBottom: "60px", width: "100%" }}>
          {/* {"after_CTA" + JSON.stringify(after_cta)}
          {"main_text" + JSON.stringify(main_text)}
          {"secondary_text" + JSON.stringify(secondary_text)}
          {"below_text" + JSON.stringify(below_text)}
          {("destination_link_of_cta", JSON.stringify(destination_link_of_cta))} */}
          <SectionWrapper pb={pb ? pb : 150} pbs={pbs ? pbs : 105}>
            <div className="w-full items-center flex flex-col">
              {main_text[0] && secondary_text[0] && (
                <Button href={url || uid}>
                  <div
                    className="flex flex-col mt-2"
                    style={{ minHeight: "70px" }}
                  >
                    <Typography
                      fontSize="28px"
                      alignSmall="center"
                      variant="subHeading"
                    >
                      {RichText.render(main_text)}
                    </Typography>
                    <br />
                    {secondary_text[0]?.text && (
                      <Typography alignSmall="center" variant="body4">
                        {RichText.render(secondary_text)}
                      </Typography>
                    )}
                  </div>
                </Button>
              )}
            </div>
            {below_text[0]?.text && (
              <div className="w-full largeTablet:w-2/3 pb-16 largeTablet:pb-20 ">
                <Typography
                  alignSmall="center"
                  variant="subheading"
                  fontSize="12px"
                >
                  {RichText.render(below_text)}
                </Typography>
              </div>
            )}
          </SectionWrapper>
          <div>
            {after_cta[0]?.text && (
              <Typography variant="body1">
                {RichText.render(after_cta)}
              </Typography>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CTA;
