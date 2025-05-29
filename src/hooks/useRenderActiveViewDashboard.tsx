import Calendar from "@/Pages/Dashboard/Calendar";
import Customers from "@/Pages/Dashboard/Customers";
import Integrations from "@/Pages/Dashboard/Integrations";
import Payments from "@/Pages/Dashboard/Payments";
import Services from "@/Pages/Dashboard/Services";
import Settings from "@/Pages/Dashboard/Settings";
import Profile from "@/Pages/Profile";

export const useRenderActiveViewDashboard = (activeView: string) => {
  switch (activeView) {
    case "calendar":
      return <Calendar />;

    case "profile":
      return <Profile />;

    case "services":
      return <Services />;

    case "payments":
      return <Payments />;

    case "customers":
      return <Customers />;

    case "integrations":
      return <Integrations />;

    case "settings":
      return <Settings />;

    default:
      return <Calendar />;
  }
};
