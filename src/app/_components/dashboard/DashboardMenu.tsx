"use client";

import Link from "next/link";
import "./styles/DashboardMenu.css";
import DashboardSubMenu from "./DashboardSubMenu";
import dashboardItems from "~/data/dashItems";
import { useState } from "react";

export default function DashboardMenu() {
  const [activeItem, setActiveItem] = useState("Approvals");

  return (
    <>
      <nav className="dashboard-menu">
        <ul className="dashboard-list">
          {dashboardItems.map((item, index) => (
            <Link
              key={index}
              className={`dashboard-link ${item.name === activeItem ? "active" : ""}`}
              href="/dashboard"
              onClick={() => setActiveItem(item.name)}
            >
              <span id="dash-name">{item.name}</span>
              <span id="dash-count">{item.count}</span>
            </Link>
          ))}
        </ul>
      </nav>
      <DashboardSubMenu dashItem={activeItem} />
    </>
  );
}
