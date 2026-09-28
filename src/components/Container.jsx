import Section_1 from "./Section_1/Section_1";

const Container = (props) => {
  return (
    <div className="h-screen mx-auto p-5 max-w-7xl">
      <Section_1 cardData={props.cardData} />
    </div>
  );
};

export default Container;
