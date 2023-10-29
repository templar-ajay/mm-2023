import { aboutPageData } from "@/services/dummyData";
import PageLayout from "@/components/common/layout/PageLayout";
import Background from "@/components/sections/about/Background";
import FollowUs from "@/components/sections/about/FollowUs";
import Links from "@/components/sections/about/Links";
import About from "@/components/sections/about/about/About";
import PrismicClient from "@/services/prismic";

const AboutPage = ({ navigation, footer }) => {
  console.log({ aboutPageData, navigation, footer });

  return (
    <PageLayout
      seoData={{}}
      navigation={navigation}
      BackgroundWrapper={Background}
      footer={footer}
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

export async function getStaticProps({ previewData }) {
  const client = PrismicClient({ previewData });
  const [navigation, footer] = await Promise.all([
    client.getByType("navigation"),
    client.getByType("footer")
  ]);

  return { props: { navigation, footer } };
}
