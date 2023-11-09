import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
import Script from "next/script";

export default function Document() {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-WRL5GCRR";

  return (
    <Html lang="en">
      <Head>
        <link
          href="https://medicalmarketing.digital/"
          hrefLang="x-default"
          rel="alternate"
        />
        <link
          href="https://medicalmarketing.digital/"
          hrefLang="en-us"
          rel="alternate"
        />
        <link
          target="_blank"
          href={`https://medicalmarketing.digital/es/`}
          hrefLang="es-es"
          rel="alternate"
        />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta
          name="apple-mobile-web-app-title"
          content="Medical Marketing Agency"
        />
        <meta name="application-name" content="Medical Marketing Agency"></meta>

        <link
          href="./sitemap.xml"
          rel="sitemap"
          title="Medical Marketing Sitemap"
          type="application/xml"
        />
        <link
          href="/blog-sitemap.xml"
          rel="sitemap"
          title="Medical Marketing Sitemap"
          type="application/xml"
        ></link>

        <meta
          name="facebook-domain-verification"
          content="oj47j8b5zs6sk0nnnmil05csbcry5a"
        ></meta>

        <Script
          async
          defer
          src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
        />

        <Script
          async
          defer
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');`
          }}
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>

        <Link
          defer
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
