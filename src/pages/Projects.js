import ProjectsCard from "../components/ProjectsCard";
import { Carousel } from "@material-tailwind/react";

const Projects = () => {
    const dummy = [
      {
        image: "/web1.png",
        title: "Medals and Trophies",
        tech: "NextJs, TypeScript, Tailwind CSS",
        role: "Front-end Web Developer",
        link: "https://milestone-2-sparta.vercel.app/",
        github: "https://github.com/ChaiGans/Milestone02_K13",
      },
      {
        image: "/chatbot.png",
        title: "Business Chatbot Simulation",
        tech: "Python",
        role: "Logic",
        link: "https://t.me/tubes_chatbiz_bot",
        github: "https://github.com/ChaiGans/Business-ChatBot-Simulation",
      },
      {
        image: "/idx.png",
        title: "Indonesia's Stocks Data Analysis and Data Graphing",
        tech: "Pandas, Jupyter Notebook, Python",
        role: "Data Analyst",
        link: "https://drive.google.com/file/d/1YWdlJPPtNbFIFmcpHGwfrihSYAsQUi9Z/view?usp=sharing",
        github: "https://github.com/ChaiGans/tubes-pengkom-2",
      },
    ];

    return (
    <div className="min-w-screen flex items-center justify-center flex-col space-y-4 py-9">
      <h1 className="text-amber-900 text-2xl text-center font-manropemed">
        Projects
      </h1>
      {dummy.map((item, index) => {
        return (
            <ProjectsCard image={item.image} title={item.title} tech={item.tech} role={item.role} link={item.link} github={item.github} key={index}/>
        )
      })}
    </div>
    );
};

export default Projects;