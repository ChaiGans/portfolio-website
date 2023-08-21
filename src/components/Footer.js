import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";

//  TODO : INTEGRATE SUBMITTING FORM TO EMAIL AND POPUP NOTIFICATIONS
const Footer = () => {
  return (
    <div className="bg-gray-800 py-4">
      <div className="flex flex-row space-x-4 justify-center">
        <a
          href="https://github.com/ChaiGans"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-[1.3] hover:cursor-pointer transition-all"
        >
          <AiFillGithub size={20} color="white" />
        </a>
        <a
          href="https://www.instagram.com/elbertchailes/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-[1.3] hover:cursor-pointer transition-all"
        >
          <AiFillInstagram size={20} color="white" />
        </a>
        <a
          href="https://www.linkedin.com/in/elbert-chailes-b497a9241/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-[1.3] hover:cursor-pointer transition-all"
        >
          <AiFillLinkedin size={20} color="white" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B628994960697&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-[1.3] hover:cursor-pointer transition-all"
        >
          <AiOutlineWhatsApp size={20} color="white" />
        </a>
        <a
          href="mailto:elbertchailes888@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-[1.3] hover:cursor-pointer transition-all"
        >
          <AiOutlineMail size={20} color="white" />
        </a>
      </div>
      <div className="text-white text-center font-manropebold pt-5 text-lg relative hover:scale-110 duration-300 transition ease-in-out delay-150 hover:cursor-pointer">
        Elbert Chailes
      </div>
      <p className="text-white text-center text-xs">
        - Stay Hungry Stay Foolish -
      </p>
      <form
        action="https://formsubmit.co/elbertchailes888@gmail.com"
        method="POST"
        className="flex flex-col items-center justify-center py-6 space-y-4"
        // onSubmit={(event) => event.preventDefault()}
      >
        <input
          type="text"
          placeholder="Your full name"
          className="rounded-lg px-4 py-2 w-[90%] text-md md:max-w-[70%] lg:max-w-[60%]"
          required
        ></input>
        <input
          type="email"
          name="email"
          placeholder="Your e-mail"
          className="rounded-lg px-4 py-2 w-[90%] text-md md:max-w-[70%] lg:max-w-[60%]"
          required
        ></input>
        <textarea
          rows="7"
          placeholder="Your message"
          className="rounded-lg px-4 py-2 w-[90%] text-md md:max-w-[70%] lg:max-w-[60%]"
          required
        ></textarea>
        <button className="bg-amber-900 text-white rounded-lg px-4 py-2  hover:bg-amber-950 hover:scale-110 transition-all duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Footer;
