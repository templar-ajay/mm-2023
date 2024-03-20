import "@/styles/globals.css";
import "../styles/blog_text_content_wrapper.css";
import { PrismicPreview } from "@prismicio/next";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <PrismicPreview repositoryName="gads" />
      <Component {...pageProps} />
    </>
  );
}
