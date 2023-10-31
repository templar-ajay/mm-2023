import PrismicClient from "@/services/prismic";
import PageLayout from "@/components/common/layout/PageLayout";
import Background from "@/components/sections/home-page/Background";
import Error from "@/components/sections/Error";
import useComponentResolver from "@/components/hooks/useComponentResolver";

export default function EnHome({ landingPageData, navigation, footer }) {
  console.log({ landingPageData, navigation, footer });
  if (!landingPageData) return <Error />;
  const { body, seo_title, seo_description, seo_icon, seo_url } =
    landingPageData.data;

  return (
    <PageLayout
      seoData={{ seo_title, seo_description, seo_icon, seo_url }}
      navigation={navigation}
      BackgroundWrapper={Background}
      footer={footer}
    >
      {body.map((x) => useComponentResolver({ data: x }))}
    </PageLayout>
  );
}

export async function getServerSideProps({ previewData }) {
  try {
    const client = PrismicClient({ previewData });
    const [landingPageData, navigation, footer] = await Promise.all([
      client.getByUID(
        "landing_page",
        "marketing-medico-para-doctores-y-clinicas."
      ),
      client.getByType("navigation"),
      client.getByType("footer")
    ]);
    return {
      props: {
        landingPageData,
        navigation: navigation.results[0].data,
        footer: footer.results[0].data
      }
    };
  } catch (error) {
    console.log(error);
    return { props: { landingPageData: null } };
  }
}
