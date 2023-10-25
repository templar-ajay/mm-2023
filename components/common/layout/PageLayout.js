import React from "react";

// Components
import Header from "../../sections/navigation/Header";
import Footer from "../../sections/Footer";
import SeoBlock from "./SEO/SEO";
import { commonData } from "@/services/dummyData";

const PageLayout = ({
  children,
  seoData,
  navigationURLs,
  BackgroundWrapper,
  pressPage,
  blogPage = false
}) => {
  return (
    <div>
      {!blogPage && <SeoBlock {...seoData} />}

      <BackgroundWrapper>
        {!pressPage && <Header navigationItems={navigationURLs} />}
        <div>{children}</div>
        <Footer
          pressPage={pressPage}
          navigationItems={commonData.navigationLinks}
        />
      </BackgroundWrapper>
    </div>
  );
};

export default PageLayout;
