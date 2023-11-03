import PrismicClient from "@/services/prismic";
import PageLayout from "@/components/common/layout/PageLayout";
import Background from "@/components/sections/home-page/Background";
import Error from "@/components/sections/Error";
import useComponentResolver from "@/components/hooks/useComponentResolver";

export default function EsHome({
  landingPageData,
  navigation,
  footer,
  videoTestimonials
}) {
  console.log("landing page data", landingPageData, navigation, footer, videoTestimonials );
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
      {body.map((x, i) =>
        useComponentResolver({ data: x, index: i, videoTestimonials })
      )}
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

    const testimonialsFetch = landingPageData.data.body?.find(
      (ele) => ele?.slice_type === "testimonials"
    );
    let videoTestimonials = null;
    if (!!testimonialsFetch) {
      const testimonialId = testimonialsFetch.primary.all_testimonials.id;
      videoTestimonials = await client.getByID(testimonialId);
      videoTestimonials && (videoTestimonials = videoTestimonials.data.body[0]);
    }

    return {
      props: {
        landingPageData,
        navigation: navigation.results[0] ? navigation.results[0].data : null,
        footer: footer.results[0] ? footer.results[0].data : null,
        videoTestimonials
      }
    };
  } catch (error) {
    console.log(error);
    return { props: { landingPageData: null } };
  }
}
