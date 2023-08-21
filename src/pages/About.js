

const About = () => {
    return (
      <div className="flex justify-center flex-col items-center min-h-screen py-6 ">
        <h1 className="text-amber-900 text-2xl text-center font-manropemed mb-2">
          About Me
        </h1>
        <img
          src="123.jpg"
          alt="profpic"
          className="object-cover object-center animate-blob w-[70%] max-h-[400px] md:max-w-[400px] mt-3"
        ></img>
        <h1 className="mt-2 md:mt-4 font-rubikreg text-xl md:text-3xl text-center">
          Informatics Engineering Student
        </h1>
        <p className="text-md md:text-lg text-center">
          Bandung Institute of Technology
        </p>
        <div className="flex space-x-3 mt-4">
          <a href="/CV_ElbertChailes.pdf" download>
            <button className="border-solid border-2 border-gray-800 rounded-lg px-3 py-2 hover:scale-110 duration-300 transition-all md:text-xl md:px-6">
              Download CV
            </button>
          </a>
          <button className="border-solid border-2 border-gray-800 bg-amber-900 text-white hover:scale-110 rounded-lg px-3 py-2 duration-300 transition-all md:text-xl md:px-6">
            Stalk me
          </button>
        </div>
        <div className="w-[90%] border-2 rounded-lg border-solid border-black mt-7 px-1 py-1 bg-white hover:bg-opacity-10 transition-all md:max-w-[800px]">
          <p className="text-center text-lg font-manropexb">Halo gans 👋</p>
          <p className="text-center px-2">
            I am an enthusiast of both technology and finance. I have been
            investing in stocks since 2021 and have been developing programs
            since 2022. I am eager to continue growing and learning in these
            fields. I began learning web development in March 2023, so there is
            still a long journey ahead for me to explore. I am also currently
            looking for an internship to accelerate my improvement in software
            development.
          </p>
        </div>
      </div>
    );
;}

export default About;