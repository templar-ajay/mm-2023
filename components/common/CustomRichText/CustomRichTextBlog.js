import Image from "next/image";
import { ImageStyles } from "./CustomRichTextStyles";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { linkFromDocument } from "@/utils/LinkUtils";

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
  },
  hyperlink: (props) => {
    // console.log("hyperlink", props);
    const {
      node: {
        data: { link_type: linkType, lang, uid, url }
      },
      text,
      key
    } = props;

    if (linkType === "Document") {
      return (
        <PrismicNextLink
          key={key}
          href={linkFromDocument(lang, uid)}
          target="_blank"
        >
          {text}
        </PrismicNextLink>
      );
    } else if (linkType === "Web") {
      return (
        <PrismicNextLink key={key} href={url} target="_blank">
          {text}
        </PrismicNextLink>
      );
    }
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
  return (
    <>{render && <PrismicRichText field={render} components={components} />}</>
  );
  // return <div>{render && RichText.render(render, null, customLink)}</div>;
};

export default CustomRichText;
