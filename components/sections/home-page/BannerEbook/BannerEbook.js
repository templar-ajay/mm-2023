import { BannerEbookStyles } from "./BannerEbookStyles";
import { Helmet } from "react-helmet";
import { RichText } from "prismic-reactjs";
import { PrismicRichText } from "@prismicio/react";

const BannerEbook = ({ data }) => {
  const { lead_magnet_image, title, intro, cta } = data.primary;

  return (
    <>
      <BannerEbookStyles>
        <div className="container">
          <div className="banner__content">
            <div className="titularRevela">
              <div className="h1 text-xl largeTablet:text-2xl ">
                <PrismicRichText
                  field={intro}
                  components={{
                    paragraph: (props) => (
                      <p>
                        <span className="blink block"></span>
                        {props.node.text}
                      </p>
                    )
                  }}
                />
              </div>
              <div className="text-2xl largeTablet:text-3xl">
                {RichText.render(title)}
              </div>
            </div>

            <img
              src={lead_magnet_image.url}
              alt="Resultados SEM Medical Marketing"
              layout="constrained"
              placeholder="Resultados SEM Medical Marketing"
            />

            <div className="subHeader">{RichText.render(cta)}</div>

            <iframe
              loading="lazy"
              src="https://msgsndr.com/widget/form/SOWZvPFIueOfyo3C5dkG"
              title="Descargar ebook gratuito"
              style={{ height: "400px", marginBottom: "-100px" }}
            />

            <Helmet>
              <script
                loading="lazy"
                defer="true"
                src="https://api.leadconnectorhq.com/js/form_embed.js"
              ></script>
            </Helmet>
          </div>
        </div>
      </BannerEbookStyles>
      <span id="topContent"></span>
    </>
  );
};

export default BannerEbook;
