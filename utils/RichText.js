// components/RichText.js

import { RichText as PrismicRichText } from "prismic-reactjs";
import Image from "next/image";

const RichText = ({ render }) => {
  const customLink = (type, element, content, children, index) => {
    if (type === "image") {
      console.log("element", element);
      return (
        <Image
          src={element.url}
          alt={element.alt}
          width={element.dimensions.width}
          height={element.dimensions.height}
        />
      );
    }
    // Add other custom link handling here if needed
  };

  return (
    <div>
      {render ? PrismicRichText.render(render, null, customLink) : null}
    </div>
  );
};

export default RichText;