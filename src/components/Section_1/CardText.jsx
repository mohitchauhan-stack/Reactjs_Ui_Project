import { ArrowRight } from "lucide-react";

const CardText = (props) => {
  return (
    <div className="absolute w-full h-full bg-linear-to-t from-neutral-800 to-transparent top-0 left-0 p-4 flex flex-col justify-between">
      <h1 className="bg-white rounded-full w-fit px-2">{props.id + 1}</h1>
      <div className="flex flex-col gap-8 text-white">
        <p>{props.text}</p>
        <div className="flex items-center w-full justify-between text-white">
          <button className="bg-sky-600 px-4 py-1 rounded-full">
            {props.tag}
          </button>
          <div className=" bg-sky-600 rounded-full px-3 py-2 flex items-center">
            <ArrowRight className="size-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardText;
