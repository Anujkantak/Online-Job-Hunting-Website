
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaSquareXTwitter,
  FaSquareInstagram,

  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <footer>
        <div>
          <img src="/logo1.png" alt="logo" />
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Pratapgarh,Uttar Pradesh, India</li>
            <li>anujkantak2004@gmail.com</li>
            <li>+91 6388880871</li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li >
              <Link to={"/"}>Home</Link>
            </li>
            <li >
              <Link to={"/jobs"}>Jobs</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <Link to={"/"}>
                <span>
                  <FaSquareXTwitter />
                </span>
                <span>Twitter (X)</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>
                  <FaSquareInstagram />
                </span>
                <span>Instagram</span>
              </Link>
            </li>
            
            <li>
              <Link to={"https://www.linkedin.com/in/anuj-kantak/"}>
                <span>
                  <FaLinkedin />
                </span>
                <span>LinkedIn</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copyright">
        &copy; CopyRight 2025. All Rights Reserved By Anuj Kantak
      </div>
    </>
  );
};

export default Footer;
