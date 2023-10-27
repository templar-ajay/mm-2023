import "@/styles/globals.css";
import "../styles/blog_text_content_wrapper.css";
import App from "next/app";
import PrismicClient from "@/services/prismic";
import Prismic from "prismic-javascript";

export default class CustomApp extends App {
  // { Component, router, ctx } can be as props of getInitialProps
  static async getInitialProps() {
    const navigationResponse = await PrismicClient.query(
      Prismic.Predicates.at("document.type", "navigation")
    );
    return { data: navigationResponse, pageProps: {} };
  }

  render() {
    const { Component, pageProps, data } = this.props;

    return <Component {...pageProps} navigation={data} />;
  }
}
