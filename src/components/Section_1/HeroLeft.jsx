import Arrow from "./Arrow";
import HeroText from "./HeroText";

const HeroLeft = () => {
  return (
    <div className="flex h-full justify-between flex-col w-1/3 bg-sky-500 py-3">
      <HeroText />
      <Arrow />
    </div>
  );
};

export default HeroLeft;
