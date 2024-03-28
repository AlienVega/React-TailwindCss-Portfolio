import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <header className=" bg-black py-6 lg:py-12 text-gray-300 uppercase">
      <div className="container flex items-center justify-between space-x-8 lg:space-x-16 ">
        <span className="pl-4 md:pl-0 text-4xl lg:text-5xl text-transparent font-bold bg-gradient-to-r bg-clip-text from-red-500 to-gray-400 ">
          Vega
        </span>
        {/* mobile menu */}
        <div className="block md:hidden pr-4">
          <div className="space-y-1 cursor-pointer">
            <div className="bg-red-500 w-8 h-1 rounded-full"></div>
            <div className="bg-red-500 w-8 h-1 rounded-full"></div>
            <div className="bg-red-500 w-8 h-1 rounded-full"></div>
          </div>
        </div>
        <nav className=" hidden md:flex  justify-between flex-1">
          <ul className="flex items-center  lg:text-lg space-x-4 lg:space-x-8">
            <li className="hover:text-yellow-300 transition duration-300">
              Movies
            </li>
            <li className="hover:text-yellow-300 transition duration-300">
              Album
            </li>
            <li className="hover:text-yellow-300 transition duration-300">
              Blog
            </li>
            <li className="hover:text-yellow-300 transition duration-300">
              News
            </li>
            <li className="hover:text-yellow-300 transition duration-300">
              About
            </li>
          </ul>
          <div className="group flex item-center space-x-4 lg:space-x-8">
            <form>
              <div className="border-r px-4 mx-4 py-1 border-red-500">
                <input
                  type="text"
                  className="bg-transparent border-b opacity-0 group-hover:opacity-100 border-red-500 focus:outline-none w-24 lg:w-44 transition duration-300"
                />
                <button className="-ml-4 group-hover:ml-0 translate duration-300">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </form>
            <div className="flex items-center  space-x-4 lg:space-x-8 lg:text-lg">
              <button>Login</button>
              <button className="bg-red-400 px-3 py-1 hover:bg-red-500 cursor-pointer transition duration-500 whitespace-nowrap">
                Sign Up
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>

    // hero section
  );
};

export default Header;
