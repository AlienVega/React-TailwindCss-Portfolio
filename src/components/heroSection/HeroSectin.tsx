import { faPlay, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import batmanImage from "./batman.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HeroSectin = () => {
  return (
    <section className="h-64 md:h-96  lg:h-128 group relative">
      <img
        className="h-full w-full object-cover"
        src={batmanImage}
        alt="batman.jpg"
      />
      <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black">
        <div className="container pl-10 lg:pl-20">
          <h3 className="text-yellow-400 tracking-wider group-hover:mb-1 duration-500">
            Action,Drama,Thriller
          </h3>
          <h1 className=" text-4xl lg:text-6xl text-gray-500 group-hover:mb-1 duration-500 ">
            The dark night
          </h1>
          <p className=" text-gray-500 group-hover:mb-2 duration-500 text-sm lg:text-lg w-3/4 lg:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            inventore omnis earum dolore doloremque quisquam provident neque
            quia rerum, ipsa nostrum temporibus doloribus sint! Similique
            aperiam voluptate rerum asperiores numquam!
          </p>
          <div className="flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-10 lg:group-hover:mb-20 duration-700">
            <div className="flex space-x-2 items-center cursor-pointer">
              <button className="text-gray-500 uppercase text-lg hover:text-red-400 duration-500">
                Watch Trailler
              </button>
              <div className="flex h-8 w-8 text-center justify-center rounded-full items-center bg-red-500 text-gray-400">
                <FontAwesomeIcon icon={faPlay} />
              </div>
            </div>
            <div className="flex space-x-2 items-center cursor-pointer">
              <button className="text-gray-500 uppercase text-lg hover:text-red-400 duration-500">
                Full Watch
              </button>
              <div className="flex h-8 w-8 text-center justify-center rounded-full items-center bg-red-500 text-gray-400">
                <FontAwesomeIcon icon={faRightFromBracket} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* points */}
      <div className="flex space-x-3 absolute bottom-5 left-10 opacity-0 group-hover:opacity-100 duration-1000">
        <div className="w-3 h-3  lg:w-4 lg:h-4 rounded-full bg-red-500"></div>
        <div className="w-3 h-3  lg:w-4 lg:h-4 rounded-full bg-gray-600"></div>
        <div className="w-3 h-3  lg:w-4 lg:h-4 rounded-full bg-gray-600"></div>
        <div className="w-3 h-3  lg:w-4 lg:h-4 rounded-full bg-gray-600"></div>
      </div>
    </section>
  );
};

export default HeroSectin;
