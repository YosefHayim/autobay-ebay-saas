import Logo from "../Logo/Logo";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div>
        <Logo />
        <div className="flex w-full items-center justify-around gap-2">
          <FaInstagram />
          <FaFacebookF />
          <RiYoutubeLine />
          <SiTiktok />
        </div>
      </div>
      <div className="flex w-full items-center justify-around">
        <div>
          <b>Contact </b>
          <p>Call us</p>
          <p>Send message</p>
          <p>Customer service</p>
        </div>
        <div>
          <b>Our product</b>
          <p>Arrival confirmation</p>
          <p>Schedule manegent</p>
          <p>Accepting payments</p>
          <p>Reports</p>
        </div>
        <div>
          <b>About</b>
          <p>Download the app</p>
          <p>Pricing</p>
          <p>Contact us</p>
          <p>Start trail</p>
        </div>
      </div>
      <hr className="w-full" />
      <div className="flex w-full justify-around">
        <p>Terms of use</p>
        <p>Privacy policy</p>
      </div>
    </footer>
  );
};

export default Footer;
