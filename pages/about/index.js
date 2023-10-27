import { aboutPageData } from "@/services/dummyData";
import PageLayout from "@/components/common/layout/PageLayout";
import Background from "@/components/sections/about/Background";
import FollowUs from "@/components/sections/about/FollowUs";
import Links from "@/components/sections/about/Links";
import About from "@/components/sections/about/about/About";

const AboutPage = ({ navigation }) => {
  console.log(aboutPageData, navigation);

  return (
    <PageLayout
      seoData={{}}
      navigation={navigation}
      BackgroundWrapper={Background}
    >
      <About
        intro={aboutPageData.introduction}
        numeralHighlight={aboutPageData.numeralHighlight}
      />
      <FollowUs social={aboutPageData.socialLinks} />
      <Links services={aboutPageData.services} />
    </PageLayout>
  );
};

export default AboutPage;
