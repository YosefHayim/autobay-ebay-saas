import Logo from "../Logo/Logo";
import { AppSidebar } from "../Sidebar/Sidebar";
import { SidebarTrigger } from "../ui/sidebar";

const Navbar = () => {
  return (
    <nav aria-label="Main navigation">
      <div>
        <AppSidebar />
        <SidebarTrigger />
      </div>
      <Logo />
    </nav>
  );
};

export default Navbar;
