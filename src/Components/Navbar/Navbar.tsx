import { AppSidebar } from "../Sidebar/app-sidebar";
import { SidebarTrigger } from "../ui/sidebar";

const Navbar = () => {
  return (
    <nav aria-label="Main navigation" className="mb-2 w-full">
      <AppSidebar />
      <SidebarTrigger />
    </nav>
  );
};

export default Navbar;
