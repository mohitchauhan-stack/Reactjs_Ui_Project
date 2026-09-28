import CardText from "./CardText";

const Card = (props) => {
  return (
    <div className="h-full w-60 rounded-3xl overflow-hidden relative shrink-0">
      <img src={props.img} alt="img" className="h-full object-cover" />
      <CardText tag={props.tag} text={props.text} id={props.id} />
    </div>
  );
};

export default Card;
