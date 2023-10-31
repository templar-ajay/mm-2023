import Feature from "./Feature";
import SectionWrapper from "../../../common/layout/SectionWrapper";

const classNames = [
  {
    lg: "largeTablet:-right-[100px] -right-[8px] largeTablet:px-24 ",
    sm: ""
  }
];

const Features = ({ data }) => {
  return (
    <SectionWrapper pbs={0}>
      <Feature data={data} className={classNames[0]} />
    </SectionWrapper>
  );
};

export default Features;
