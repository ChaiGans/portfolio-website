import SkillsCard from "../components/Skillscard";

const Skills = (props) => {
    const dummy = [
      {
        role: "Frontend Development",
        skills: [
          { tech: "ReactJs", time: "4 month exp." },
          { tech: "NextJs", time: "2 month exp." },
          { tech: "Tailwind CSS", time: "4 month exp." },
          { tech: "Chakra UI", time: "2 month exp." },
        ],
      },
      {
        role: "Fundamental Programming",
        skills: [
          { tech: "Python", time: "1 year exp." },
          { tech: "Pandas", time: "3 month exp." },
          { tech: "Haskell", time: "1 month exp." },
        ],
      },
      {
        role: "Database",
        skills: [
          { tech: "MongoDB", time: "1 week exp." },
        ],
      },
    ];
    return (
      <div className="min-w-screen bg-amber-900 py-8 flex flex-col space-y-4 items-center">
        <h1 className="text-white text-2xl text-center font-manropemed">
          Skills
        </h1>
        {dummy.map((item,index) => {
            return (
                <SkillsCard role={item.role} skills={item.skills} key={index}></SkillsCard>
            )
        })}
      </div>
    );
};

export default Skills;