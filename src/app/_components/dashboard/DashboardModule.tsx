import DashboardMenu from "./DashboardMenu";

import "./styles/DashboardModule.css";

export default function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <DashboardMenu />
      <div className="dashboard-module">
        <h1>Dashboard Module</h1>
      </div>
    </div>
  );
}
