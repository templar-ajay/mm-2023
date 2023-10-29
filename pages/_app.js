import "@/styles/globals.css";
import "../styles/blog_text_content_wrapper.css";
import { PrismicPreview } from "@prismicio/next";

export default function App({ Component, pageProps }) {
  return (
    <>
      <PrismicPreview repositoryName="gads" />
      <Component {...pageProps} />
    </>
  );
}
