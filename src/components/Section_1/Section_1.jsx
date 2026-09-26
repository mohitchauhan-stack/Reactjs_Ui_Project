import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

const Section_1 = (props) => {
  console.log(props.cardData);
  return (
    <div className="h-full w-full ">
      <Navbar />
      <HeroSection cardData={props.cardData} />
    </div>
  );
};

export default Section_1;
