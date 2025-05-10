import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Burger Menu */}
      {/* <button
        className="p-4 z-50 fixed top-4 right-4 bg-gray-800 text-white rounded"
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button> */}
      <FontAwesomeIcon
        icon={faBars}
        size="xl"
        onClick={() => setIsOpen(true)}
        className="lg:!hidden z-5"
      />

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="p-4 text-right w-full text-xl"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>
        <nav className="p-4 space-y-4">
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            About
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
