import Head from "next/head";
import React from "react";

const SeoBlock = ({
  seo_title,
  seo_description,
  seo_icon,
  seo_url,
  html_code,
  html_rich_text
}) => {
  const seoTitle =
    typeof seo_title == "string" ? seo_title : seo_title && seo_title[0]?.text;
  const seoDescription =
    typeof seo_description == "string"
      ? seo_description
      : seo_description && seo_description[0]?.text;

  console.log("html code", html_code);
  console.log("html rich text", html_rich_text);
  return (
    <Head>
      <title>{seoTitle || "Medical Marketing"}</title>
      <meta name="title" content={seoTitle || "Medical Marketing"}></meta>
      <meta
        name="description"
        content={
          seoDescription ||
          "La Agencia de Marketing Médico Que Garantiza Pacientes y Resultados【Te lo explicamos ▷ Entra Aquí】⭐ [Médicos•Clínicas•Hospitales]"
        }
      />
      <link rel="icon" href={seo_icon || "./favicon.ico"} />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={seo_url || "https://medicalmarketing.es/"}
      />
      <meta property="og:title" content={seoTitle || "Medical-Marketing"} />
      <meta
        property="og:description"
        content={
          seoDescription ||
          "La Agencia de Marketing Médico Que Garantiza Pacientes y Resultados【Te lo explicamos ▷ Entra Aquí】⭐ [Médicos•Clínicas•Hospitales]"
        }
      />
      <meta property="og:image" content={seo_icon || "./ogImage.png"} />
    </Head>
  );
};

export default SeoBlock;
