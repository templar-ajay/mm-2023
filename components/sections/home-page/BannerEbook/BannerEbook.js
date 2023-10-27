import * as React from "react";
import { BannerEbookStyles } from "./BannerEbookStyles";
import { Helmet } from "react-helmet";
import { RichText } from "prismic-reactjs";

const BannerEbook = ({ ebookData: { primary } }) => {
  console.log(primary, "ebook");
  const { lead_magnet_image, title, intro, cta } = primary;

  return (
    <>
      <BannerEbookStyles>
        <div className="container">
          <div className="banner__content">
            <div className="titularRevela">
              <span className="blink"></span>
              {RichText.render(title)}
            </div>

            <div className="h1">{RichText.render(intro)}</div>

            <img
              src={lead_magnet_image.url}
              alt="Resultados SEM Medical Marketing"
              layout="constrained"
              placeholder="Resultados SEM Medical Marketing"
            />

            <div className="subHeader">{RichText.render(cta)}</div>

            <iframe
              src="https://msgsndr.com/widget/form/SOWZvPFIueOfyo3C5dkG"
              title="Descargar ebook gratuito"
              style={{ height: "400px", marginBottom: "-100px" }}
            />

            <Helmet>
              <script src="https://api.leadconnectorhq.com/js/form_embed.js"></script>
            </Helmet>
          </div>
        </div>
      </BannerEbookStyles>
      <span id="topContent"></span>
    </>
  );
};

export default BannerEbook;
