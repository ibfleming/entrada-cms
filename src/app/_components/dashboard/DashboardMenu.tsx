import Link from "next/link";
import "./styles/DashboardMenu.css";
import DashboardSubMenu from "./DashboardSubMenu";
import dashboardItems from "~/data/dashItems";

export default function DashboardMenu() {
  return (
    <>
      <nav className="dashboard-menu">
        <ul className="dashboard-list">
          {dashboardItems.map((item, index) => (
            <li className="dashboard-item" key={index}>
              <Link className="dashboard-link" href="/dashboard">
                <span id="dash-name">{item.name}</span>
                <span id="dash-count">{item.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <DashboardSubMenu />
    </>
  );
}
