import PrismicClient, { linkResolver } from "../../services/prismic";
import * as prismicNext from "@prismicio/next";

export default async (req, res) => {
  const client = PrismicClient(req);

  await prismicNext.setPreviewData({ req, res });

  await prismicNext.redirectToPreviewURL({ req, res, client, linkResolver });
};
