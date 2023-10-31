import EndingLine from "@/components/common/EndingLine";
import SectionWrapper from "@/components/common/layout/SectionWrapper";
import CTA from "./CTA";

export default function CTATemplate({ data }) {
  return (
    <SectionWrapper pbs={0}>
      <EndingLine ImageData={data.primary.small_image_cta} />
      <CTA data={data.primary} pb={50} pbs={10} />
    </SectionWrapper>
  );
}
