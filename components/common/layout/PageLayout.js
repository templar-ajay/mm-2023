import React from "react";
import Header from "../../sections/navigation/Header";
import Footer from "../../sections/Footer";
import SeoBlock from "./SEO/SEO";

const PageLayout = ({
  children,
  seoData,
  navigation,
  footer,
  BackgroundWrapper,
  blogPage = false
}) => {
  return (
    <div>
      {!blogPage && <SeoBlock {...seoData} />}

      <BackgroundWrapper>
        <Header navigationData={navigation || {}} />
        <div>{children}</div>
        <Footer footerData={footer || {}} />
      </BackgroundWrapper>
    </div>
  );
};

export default PageLayout;
