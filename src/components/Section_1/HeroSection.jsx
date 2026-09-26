import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const HeroSection = (props) => {
  return (
    <div className="justify-between flex gap-8 py-10">
      <HeroLeft />
      <HeroRight cardData={props.cardData} />
    </div>
  );
};

export default HeroSection;
