import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaYoutubeSquare,
  FaPhoneAlt,
  FaRegEnvelope,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="lg:py-4 lg:block justify-between  hidden  mx-auto bg-transparent">
      <div className="flex justify-between text-white">
        <div className="info flex gap-4">
          <h2 className="flex items-center ">
            <span className="mr-3">
              <FaPhoneAlt />
            </span>
            +880 1903-333-110
          </h2>
          <h2 className="flex items-center">
            <span className="mr-3">
              <FaRegEnvelope />
            </span>
            admin@srhostel.com
          </h2>
        </div>
        <div className="social">
          <ul className="flex gap-2">
            <li>
              <FaFacebookSquare />
            </li>
            <li>
              <FaTwitterSquare />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaYoutubeSquare />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
