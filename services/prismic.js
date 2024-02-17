import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";

const repositoryName = process.env.PRISMIC_REPOSITORY_NAME;
const accessToken = process.env.PRISMIC_ACCESS_TOKEN;
if (!repositoryName)
  throw Error("environment variable missing: PRISMIC_REPOSITORY_NAME");
if (!accessToken)
  throw Error("environment variable missing: PRISMIC_ACCESS_TOKEN");
export const apiEndpoint = `https://${repositoryName}.cdn.prismic.io/api/v2`;

const PrismicClient = (config = {}) => {
  const client = prismic.createClient(
    apiEndpoint,
    accessToken ? { accessToken } : {}
  );
  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req
  });
  return client;
};
export default PrismicClient;

export const linkResolver = (doc) => {
  if (doc.type === "about") return `/about/?type=${doc.type}`;
  if (["navigation", "footer", "landing_page"].includes(doc.type))
    return `/?type=${doc.type}`;
  return `/`;
};
