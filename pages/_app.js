import "@/styles/globals.css";
import "../styles/blog_text_content_wrapper.css";
import App from "next/app";
import PrismicClient from "@/services/prismic";
import { PrismicPreview } from "@prismicio/next";

export default class CustomApp extends App {
  // { Component, router, ctx } can be as props of getInitialProps
  static async getInitialProps({ previewData }) {
    const client = PrismicClient({ previewData });
    const [navigationResponse, footerResponse] = await Promise.all([
      client.getAllByType("navigation"),
      client.getAllByType("footer")
    ]);

    return { navigationResponse, footerResponse, pageProps: {} };
  }

  render() {
    const { Component, pageProps, navigationResponse, footerResponse } =
      this.props;

    return (
      <>
        <PrismicPreview repositoryName="gads" />
        <Component
          {...pageProps}
          navigation={navigationResponse}
          footer={footerResponse}
        />
      </>
    );
  }
}
