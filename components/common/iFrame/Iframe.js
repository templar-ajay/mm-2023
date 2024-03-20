import { PrismicRichText } from "@prismicio/react";
import { Heading } from "../text";

const Iframe = ({ data }) => {
  const { iframe, max_width, height, title } = data.primary;
  return (
    <section className="mt-20 mobile_480:mt-32 tablet:mt-48">
      <PrismicRichText
        field={title}
        components={{
          heading2: ({ children }) => (
            <h2 className="h1 text-center font-bold mx-8 text-3xl mobile_480:text-4xl tablet:text-5xl text-textPrimary">
              {children}
            </h2>
          )
        }}
      />
      <div
        className="mx-auto mt-5 mobile_480:mt-10"
        style={{ maxWidth: max_width + "px", height: height + "px" }}
        dangerouslySetInnerHTML={{ __html: iframe }}
      />
    </section>
  );
};

export default Iframe;
