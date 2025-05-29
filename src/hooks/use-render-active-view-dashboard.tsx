import Calendar from "@/Pages/Dashboard/Calendar";
import Customers from "@/Pages/Dashboard/Customers";
import Integrations from "@/Pages/Dashboard/Integrations";
import Payments from "@/Pages/Dashboard/Payments";
import Services from "@/Pages/Dashboard/Services";
import Settings from "@/Pages/Dashboard/Settings";
import Profile from "@/Pages/Profile";

export const useRenderActiveViewDashboard = (activeView: string) => {
  switch (activeView) {
    case "Appointments":
      return <Calendar />;

    case "Profile":
      return <Profile />;

    case "Services":
      return <Services />;

    case "Payments":
      return <Payments />;

    case "Customers":
      return <Customers />;

    case "Integrations":
      return <Integrations />;

    case "Settings":
      return <Settings />;

    default:
      return <Calendar />;
  }
};
