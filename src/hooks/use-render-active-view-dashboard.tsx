import Appointments from "@/Pages/Dashboard/Appointments";
import BusinessHours from "@/Pages/Dashboard/BusinessHours/BusinessHours";
import ContactDetails from "@/Pages/Dashboard/ContactDetails";
import Customers from "@/Pages/Dashboard/Customers";
import General from "@/Pages/Dashboard/General";
import Integrations from "@/Pages/Dashboard/Integrations";
import Location from "@/Pages/Dashboard/Location";
import Payments from "@/Pages/Dashboard/Payments";
import Services from "@/Pages/Dashboard/Services";
import Settings from "@/Pages/Dashboard/Settings";
import SocialLinks from "@/Pages/Dashboard/SocialLinks/SocialLinks";
import Profile from "@/Pages/Profile";

export const useRenderActiveViewDashboard = (activeView: string) => {
  switch (activeView) {
    case "Appointments":
      return <Appointments />;

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

    case "General":
      return <General />;

    case "Social links":
      return <SocialLinks />;

    case "Business hours":
      return <BusinessHours />;

    case "Contact details":
      return <ContactDetails />;

    case "Location":
      return <Location />;

    default:
      return <Appointments />;
  }
};
