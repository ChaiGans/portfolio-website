import { AiOutlineVerified } from "react-icons/ai";

const SkillsCard = (props) => {
    return (
      <div className="bg-black border-black border py-4 flex flex-col bg-opacity-75 w-[90%] md:w-[40%] rounded-xl space-y-4 text-white font-poppinsmedium px-7">
        <p className=" border-b border-white py-2 text-center">{props.role}</p>
        <div className="flex flex-col space-y-4">
          {props.skills.map((item, index) => {
            return (
              <div key={index} className="flex flex-row justify-between">
                <p>
                  <AiOutlineVerified
                    className="inline-block mr-2"
                    color="skyblue"
                  ></AiOutlineVerified>
                  {item.tech}
                </p>
                <p>{item.time}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
};

export default SkillsCard;