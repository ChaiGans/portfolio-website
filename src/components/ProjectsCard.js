import { BsRocketTakeoff } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const ProjectsCard = (props) => {
  return (
    <div className="w-[90%] md:h-full md:max-w-[40%] flex flex-col rounded-2xl border-2 border-black items-center justify-center">
      <img
        className="flex-1 object-cover object-top rounded-t-xl w-full"
        alt="web1"
        src={props.image}
      ></img>
      <div className="flex-1  border-t-2 border-black flex flex-row w-full justify-between px-4 py-3 items-center space-x-2">
        <p className="font-poppinssb text-md md:text-lg leading-5">
          {props.title} <br />
          <span className="font-manropemed text-xs md:text-sm">{props.role}</span> <br />
          <span className="font-manropemed text-[10px] md:text-[15px]">{props.tech}</span>
        </p>  
        <div className="flex-col flex space-y-2">
          <button
            href={props.link}
            target="_blank"
            className="md:px-5 md:text-lg hover:scale-110 transition-all duration-200 hover:bg-amber-900 hover:text-white flex flex-row justify-center items-center px-2 py-2 border-2 rounded-lg border-black h-[10%]"
          >
            <BsRocketTakeoff className="mr-2"></BsRocketTakeoff>
            Explore
          </button>
          <button
            href={props.github}
            target="_blank"
            className="hover:scale-110 transition-all duration-200 hover:bg-amber-900 hover:text-white flex flex-row justify-center items-center px-2 py-2 border-2 rounded-lg border-black h-[10%]"
          >
            <AiFillGithub className="mr-2"></AiFillGithub>
            Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
