const Navbar = () => {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center justify-center gap-1 w-full">
        <li>
          <a href="#reserve">Reserve Me</a>
        </li>
        <li>
          <a href="#business-types">Business Types</a>
        </li>
        <li>
          <a href="#support">Information and Support</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
        <li>
          <a href="#price">Price</a>
        </li>
        <li>
          <a href="">Start Now</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
