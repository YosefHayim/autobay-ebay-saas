import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex w-full items-center justify-center gap-1">
        <li>
          <Link to="/">Reserve Me</Link>
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/pricing">Price</Link>
        </li>
        <li>
          <Link to="/register">Start Now</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
