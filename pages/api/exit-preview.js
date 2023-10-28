import * as prismicNext from "@prismicio/next";

export default async (req, res) => {
  prismicNext.exitPreview({ req, res });
};
