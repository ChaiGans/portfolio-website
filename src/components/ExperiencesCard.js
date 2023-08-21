import { useState } from "react";

const ExperiencesCard = (props) => {
  const [readStatus, setReadStatus] = useState(false);
  const description = readStatus ? props.description : props.description.slice(0, 120);

  return (
    <div className="bg-gray-300 w-[90%] md:max-w-[50%] rounded-lg flex flex-row items-start px-6 py-2 space-x-5">
      <img
        src={props.image}
        alt="logo"
        className="w-24 h-24 rounded-full object-cover object-center"
      ></img>
      <div className="flex flex-col w-full">
        <p className="text-xl">{props.title}</p>
        <p className="text-xs font-poppins">{props.period}</p>
        <p className="text-xs font-manropebold">{props.position}</p>
        <p className="text-justify font-normal md:hidden">
          {description}
          <span className={readStatus ? "hidden" : "inline-block"}>...</span>
        </p>
        <p className="hidden md:block">
          {props.description}
        </p>
        <p
          onClick={() => setReadStatus(!readStatus)}
          className="text-end text-amber-800 hover:cursor-pointer hover:underline-offset-1 md:hidden"
        >
          {readStatus ? "Read less" : "Read more..."}
        </p>
      </div>
    </div>
  );
};

export default ExperiencesCard;
