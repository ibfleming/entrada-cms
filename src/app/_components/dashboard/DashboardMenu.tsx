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
            <li
              className={`dashboard-item ${item.name === activeItem ? "active" : ""}`}
              key={index}
            >
              <Link
                className={`dashboard-link ${item.name === activeItem ? "active" : ""}`}
                href="#"
                onClick={() => setActiveItem(item.name)}
              >
                <span id="dash-name">{item.name}</span>
                <span id="dash-count">{item.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <DashboardSubMenu dashItem={activeItem} />
    </>
  );
}
