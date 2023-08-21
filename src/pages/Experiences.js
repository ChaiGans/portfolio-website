import React from "react"; // Don't forget to import React
import ExperiencesCard from "../components/ExperiencesCard";

const Experiences = () => {
  const dummy = [
    {
      image: "/oskmitb2023.jpg",
      title: "OSKM ITB 2023",
      period: "Juli - September 2023",
      position: "Front-end Web Developer",
      description:
        "During OSKM ITB 2023, I learned to integrate Next.js and Chakra UI with the backend tRPC, and the project concluded successfully. Throughout this experience, we completed four main sprints to implement features that were set to be released within the span of one and a half months. The website has been launched at oskmitb.com. Throughout the project, we employed a branching system on GitHub and followed an Agile approach. Additionally, we utilized Scrum to monitor our daily progress and Trello to organize task assignment.",
    },
    {
      image: "/ksep.png",
      title: "KSEP ITB",
      period: "March - September 2023",
      position: "Front-end Web Developer",
      description:
        "In KSEP ITB, my frontend team and I are developing a website for internal users of KSEP. This project spans three months, and we are utilizing frameworks such as ReactJS for the frontend and Tailwind CSS for the UI. To organize our tasks, we are employing Jira work management. We have ensured that the pages are responsive across various breakpoints, including small (sm), medium (md), large (lg), and extra-large (xl) screens. Currently, the website is not accessible to the public as it is meant solely for internal use, and our GitHub repository is set to private. Recently, we have initiated the process of migrating from ReactJS to Next.js, following a directive from our tech lead.",
    },
  ];

  return (
    <div className="min-w-screen bg-amber-900 py-8 flex flex-col items-center space-y-4">
      <h1 className="text-white text-2xl text-center font-manropemed mb-2">
        Experiences
      </h1>
      {dummy.map((item, index) => (
        <ExperiencesCard
          image={item.image}
          title={item.title}
          period={item.period}
          position={item.position}
          description={item.description}
          key={index}
        />
      ))}
    </div>
  );
};

export default Experiences;
