import heroImage from "../assets/heroImg.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div id="contact" className="mt-30 max-lg:px-5 lg:px-30 py-10">
      <div className="mb-40 flex max-lg:justify-center max-lg:items-center max-lg:flex-wrap gap-16 justify-between items-top">
        <img className="lg:w-1/2" src={heroImage} alt="" />
        <div className="">
          <h3 className="max-lg:text-center  text-4xl font-bold bg-gradient-to-b from-violet-800 to-violet-400 bg-clip-text text-transparent">
            Don't Be Shy to Contact Us
          </h3>
          <div className="mt-12">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-violet-500 w-5 h-5 mr-3"
              />
              <span>support@btogo.com</span>
            </div>

            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-violet-500 w-5 h-5 mr-3"
              />
              <span>+61 2 9876 5432</span>
            </div>

            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-violet-500 w-5 h-5 mr-3"
              />
              <span>42 Techway Street, Sydney NSW 2000, Australia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
