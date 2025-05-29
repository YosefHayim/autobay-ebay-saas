import { ActiveViewProvider } from "@/contexts/active-view/active-view-context";
import DashboardLayoutSidebar from "./DashboardLayoutSidebar";

const Dashboard = () => {
  return (
    <div>
      <ActiveViewProvider>
        <DashboardLayoutSidebar />
      </ActiveViewProvider>
    </div>
  );
};

export default Dashboard;
