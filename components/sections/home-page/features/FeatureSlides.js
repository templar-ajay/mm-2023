import { useState } from "react";

// components
import {
  FeaturedProductsStyles,
  FeaturedProductStyles
} from "./FeaturesStyles";
import Button from "../../../common/Button";

export default function FeatureSlides() {
  const [show, setShow] = useState(false);
  const [link, setLink] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ___openModal = (url) => {
    setLink(url);
    handleShow();
  };

  return (
    <FeaturedProductsStyles className="section">
      <div className="container container__tight">
        <h3 className="h1">{"feature_product.feature_title"}</h3>
        <div className="theCopyP"></div>
      </div>

      <div className="container container__tight container__scroll">
        <FeaturedProductStyles
          onClick={() =>
            ___openModal(
              "https://player.vimeo.com/video/780826530?h=4d1108cf0c"
            )
          }
        >
          <img
            className="features__item--img"
            src="../../public/orange_right_arrow.png"
            alt="Doctor David Molina Obesis"
          />
          <div className="features__item--content">
            <h4>{"feature_product.feature_text_1.title"}</h4>
            <p>{"feature_product.feature_text_1.text"}</p>
            <Button text="Ver Video" as="span" arrow={true} />
          </div>
        </FeaturedProductStyles>

        <FeaturedProductStyles
          onClick={() =>
            ___openModal("https://player.vimeo.com/video/841623575")
          }
        >
          <img
            className="features__item--img"
            src="../../public/orange_right_arrow.png"
            alt="DOCclinic Review"
          />
          <div className="features__item--content">
            <h4>DOCclinic</h4>
            <p>"Me llevan incluso mis redes con 21.000 seguidores."</p>
            <Button text="Ver Video" as="span" arrow={true} />
          </div>
        </FeaturedProductStyles>

        <FeaturedProductStyles
          onClick={() =>
            ___openModal("https://player.vimeo.com/video/841489549")
          }
        >
          <img
            className="features__item--img"
            src="../../public/orange_right_arrow-medical-marketing.png"
            alt="DOCclinic Review"
          />
          <div className="features__item--content">
            <h4>KERERt Dental</h4>
            <p>"Muy contentos con la calidad del lead."</p>
            <Button text="Ver Video" as="span" arrow={true} />
          </div>
        </FeaturedProductStyles>

        <FeaturedProductStyles
          onClick={() =>
            ___openModal(
              "https://player.vimeo.com/video/792489513?h=e582de6f4f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            )
          }
        >
          <img
            className="features__item--img"
            src="../../public/orange_right_arrow"
            alt="Doctor Nestor Pisano"
          />
          <div className="features__item--content">
            <h4>{"feature_product.feature_text_2.title"}</h4>
            <p>{"feature_product.feature_text_2.text"}</p>
            <Button text="Ver Video" as="span" arrow={true} />
          </div>
        </FeaturedProductStyles>

        <FeaturedProductStyles
          onClick={() =>
            ___openModal(
              "https://player.vimeo.com/video/720600525?h=3aa90762fa&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            )
          }
        >
          <img
            className="features__item--img"
            src="../../public/orange_right_arrow-malaga.webp"
            alt="Doctor Cesar Padilla Sinergy"
          />
          <div className="features__item--content">
            <h4>{"feature_product.feature_text_3.title"}</h4>
            <p>{"feature_product.feature_text_3.text"}</p>
            <Button text="Ver video" as="span" arrow={true} />
          </div>
        </FeaturedProductStyles>

        <FeaturedProductStyles
          onClick={() =>
            ___openModal(
              "https://player.vimeo.com/video/715172081?h=a8fbee5ad8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            )
          }
        >
          <img
            className="features__item--img"
            src="../../public/orange_right_arrow"
            alt="Doctor Nestor Pisano"
          />
          <div className="features__item--content">
            <h4>{"feature_product.feature_text_4.title"}</h4>
            <p>{"feature_product.feature_text_4.text"}</p>
            <Button text="Ver Video" as="span" arrow={true} />
          </div>
        </FeaturedProductStyles>

        <FeaturedProductStyles
          onClick={() =>
            ___openModal(
              "https://player.vimeo.com/video/720604401?h=2c53e600d3&badge=0&autopause=0&player_id=0&app_id=58479"
            )
          }
        >
          <img
            className="features__item--img"
            src="../../public/orange_right_arrow.png"
            alt="Urbistondo"
          />
          <div className="features__item--content">
            <h4>{"feature_product.feature_text_5.title"}</h4>
            <p>{"feature_product.feature_text_5.text"}</p>
            <Button text="Ver Video" as="span" arrow={true} />
          </div>
        </FeaturedProductStyles>

        <FeaturedProductStyles
          onClick={() =>
            ___openModal(
              "https://player.vimeo.com/video/720603182?h=7f0564c54a&badge=0&autopause=0&player_id=0&app_id=58479"
            )
          }
        >
          <img
            className="features__item--img"
            src="../../public/orange_right_arrow.png"
            alt="Doctor Colombo"
          />
          <div className="features__item--content">
            <h4>{"feature_product.feature_text_6.title"}</h4>
            <p>{"feature_product.feature_text_6.text"}</p>
            <Button text="Ver Video" as="span" arrow={true} />
          </div>
        </FeaturedProductStyles>

        <FeaturedProductStyles
          onClick={() =>
            ___openModal(
              "https://player.vimeo.com/video/720605330?h=eee0cfc6a8&badge=0&autopause=0&player_id=0&app_id=58479"
            )
          }
        >
          <img
            className="features__item--img"
            src="../../public/orange_right_arrow"
            alt="Doctor Beltrán"
          />
          <div className="features__item--content">
            <h4>{"feature_product.feature_text_7.title"}</h4>
            <p>{"feature_product.feature_text_7.text"}</p>
            <Button text="Ver Video" as="span" arrow={true} />
          </div>
        </FeaturedProductStyles>

        {/* <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body className="p-0">
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src={link}
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%"
                }}
                title="PISANO (Medical Marketing)V2.mp4"
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </Modal.Body>
        </Modal> */}
      </div>
      {/* </div> */}
    </FeaturedProductsStyles>
  );
}
