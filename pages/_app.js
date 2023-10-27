import "@/styles/globals.css";
import "../styles/blog_text_content_wrapper.css";
import App from "next/app";
import PrismicClient from "@/services/prismic";
import Prismic from "prismic-javascript";

export default class CustomApp extends App {
  // { Component, router, ctx } can be as props of getInitialProps
  static async getInitialProps() {
    const [navigationResponse, footerResponse] = await Promise.all([
      PrismicClient.query(Prismic.Predicates.at("document.type", "navigation")),
      PrismicClient.query(Prismic.Predicates.at("document.type", "footer"))
    ]);

    return { navigationResponse, footerResponse, pageProps: {} };
  }

  render() {
    const { Component, pageProps, navigationResponse, footerResponse } =
      this.props;

    return (
      <Component
        {...pageProps}
        navigation={navigationResponse}
        footer={footerResponse}
      />
    );
  }
}
