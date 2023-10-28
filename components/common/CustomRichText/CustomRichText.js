import Image from "next/image";
import { RichText } from "prismic-reactjs";
import { ImageStyles } from "./CustomRichTextStyles";

const CustomRichText = ({ render }) => {
  const customLink = (type, element) => {
    if (type === "image") {
      // console.log("element", element);
      return (
        <ImageStyles>
          <Image
            src={element.url}
            alt={element.alt}
            width={element.dimensions.width}
            height={element.dimensions.height}
          />
        </ImageStyles>
      );
    }
    // Add other custom link handling here if needed
  };

  return <div>{render ? RichText.render(render, null, customLink) : null}</div>;
};

export default CustomRichText;
