import React from "react";
import Header from "../../sections/navigation/Header";
import Footer from "../../sections/Footer";
import SeoBlock from "./SEO/SEO";

const PageLayout = ({
  children,
  seoData,
  navigation,
  footer,
  settings,
  BackgroundWrapper
}) => {
  // console.log("Settings", settings);
  return (
    <div>
      <SeoBlock {...seoData} />

      <BackgroundWrapper backgroundImages={settings.background_images_array}>
        <Header navigationData={navigation || {}} />
        <div>{children}</div>
        <Footer footerData={footer || {}} />
      </BackgroundWrapper>
    </div>
  );
};

export default PageLayout;
