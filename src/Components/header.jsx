import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className="header-container bg-black text-white h-10 py-2 px-8 font-sans font-light text-sm">
      <div className="header flex">
        <div className="header-left">
          <ul className="flex space-x-4 ml-4 px-4">
            <li>
              <a href="#">info@zayshop.com</a>
            </li>
            <li>
              <a href="#">011-01010236</a>
            </li>
          </ul>
        </div>
        <div className="header-right flex ml-auto pr-10 ">
          <ul className="flex space-x-6">
            <li>
              <a href="https://www.facebook.com/login.php/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="x" />
              </a>
            </li>

            <li>
              <a href="https://github.com/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="x" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="x" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
