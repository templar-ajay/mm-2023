import React from "react";

// Components
import Header from "../../sections/navigation/Header";
import Footer from "../../sections/Footer";
import SeoBlock from "./SEO/SEO";

const PageLayout = ({
  children,
  seoData,
  navigation,
  BackgroundWrapper,
  blogPage = false
}) => {
  const navigationData = navigation.results[0] || [];

  return (
    <div>
      {!blogPage && <SeoBlock {...seoData} />}

      <BackgroundWrapper>
        <Header navigationData={navigationData} />
        <div>{children}</div>
        <Footer
          navigationData={navigationData}
          licenseText={navigation.license}
        />
      </BackgroundWrapper>
    </div>
  );
};

export default PageLayout;
