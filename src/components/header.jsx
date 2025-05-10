import Blob1 from "./blob1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./sidebar";

const Header = () => {
  return (
    <header className="z-1 flex items-center justify-between max-lg:px-10 max-lg:py-5 lg:px-30 lg:py-8 bg-white">
      <Blob1 cssClass="max-sm:w-115 absolute w-140 -top-85 -left-17 -rotate-170 z-2"></Blob1>
      <div className=" z-3">
        <h3 className="text-white max-sm:text-2xl sm:text-3xl font-bold">
          BtoGo
        </h3>
      </div>

      {/* <FontAwesomeIcon icon={faBars} size="xl" /> */}
      <Sidebar />

      <nav className="max-lg:hidden">
        <ul className="flex gap-6">
          <li className="hover:scale-110 transition-transform">
            <a href="#about" className="font-bold text-gray-800 hover:text-blue-600">
              ABOUT
            </a>
          </li>
          <li className="hover:scale-110 transition-transform">
            <a
              href="#pricing"
              className="font-bold text-gray-800 hover:text-blue-600"
            >
              PRICING
            </a>
          </li>
          <li className="hover:scale-110 transition-transform">
            <a
              href="#contact"
              className="font-bold text-gray-800 hover:text-blue-600"
            >
              CONTACT
            </a>
          </li>
          <li className="hover:scale-110 transition-transform">
            <a
              href="/login"
              className="gradient-border text-white font-bold hover:bg-blue-100 rounded-sm py-3 px-14 "
            >
              LOGIN
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
