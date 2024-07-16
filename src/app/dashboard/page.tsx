import DashboardModule from "@/app/components/dashboard/DashboardModule";
import "./styles/Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-parent">
      <div className="dashboard">
        <div className="column left">
          <DashboardModule />
        </div>
        <div className="column right">Dashboard Right</div>
      </div>
    </div>
  );
}
