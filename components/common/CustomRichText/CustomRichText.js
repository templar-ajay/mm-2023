import Image from "next/image";
import { RichText } from "prismic-reactjs";
import { ImageStyles } from "./CustomRichTextStyles";
import { PrismicRichText } from "@prismicio/react";

const components = {
  image: (props) => {
    // console.log("all", props);
    return (
      <ImageStyles>
        <Image
          key={props.key}
          src={props.node.url}
          alt={props.node.alt}
          width={props.node.dimensions.width}
          height={props.node.dimensions.height}
        />
      </ImageStyles>
    );
  }
};

// const hi = {
//   type: "image",
//   node: {
//     type: "image",
//     url: "https://images.prismic.io/gads/97a60728-dd15-4c7d-9ff8-f966cb65cf25_Google-Ads-low-b384835751b100eccaab3d76713fe4e2.gif?auto=compress,format",
//     alt: "Resultados de marketing medico por medical marketing",
//     copyright: null,
//     dimensions: {
//       width: 640,
//       height: 360
//     }
//   },
//   children: [],
//   key: "1467"
// };

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

  return (
    <>{render && <PrismicRichText field={render} components={components} />}</>
  );
  // return <div>{render ? RichText.render(render, null, customLink) : null}</div>;
};

export default CustomRichText;
