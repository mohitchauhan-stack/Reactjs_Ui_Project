import Card from "./Card";

const HeroRight = (props) => {
  return (
    <div className="w-2/2 flex justify-between items-center flex-nowrap gap-8 overflow-x-auto rounded-3xl  inset-shadow-2xl no-scrollbar">
      {props.cardData.map((card, idx) => {
        return (
          <Card
            key={idx}
            id={idx}
            img={card.img}
            text={card.text}
            tag={card.tag}
          />
        );
      })}
    </div>
  );
};

export default HeroRight;
