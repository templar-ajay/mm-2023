import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-P3D87XN";

  return (
    <Html lang="en">
      <Head>
        <link
          href="https://medicalmarketing.digital/"
          hreflang="x-default"
          rel="alternate"
        />
        <link
          href="https://medicalmarketing.digital/"
          hreflang="en-us"
          rel="alternate"
        />
        <link
          href="https://medicalmarketing.digital/es/"
          hreflang="es-es"
          rel="alternate"
        />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="apple-mobile-web-app-title" content="Medical Marketing Agency" />
        <meta name="application-name" content="Medical Marketing Agency" />
        <link rel="apple-touch-icon" sizes="180x180" href="./favicon.ico"></link>

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTM_ID}',{
              page_path: window.location.pathname,
            });`
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className="selection:bg-mm_primary selection:text-bgWhite">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
