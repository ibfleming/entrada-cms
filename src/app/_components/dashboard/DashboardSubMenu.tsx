import Link from "next/link";
import dashboardSubItems from "~/data/dashSubItems";
import "./styles/DashboardSubMenu.css";
import { useState } from "react";
import DashboardContent from "./DashboardContent";

interface DashboardSubMenuItemProp {
  dashItem: string;
}

export default function DashboardSubMenu({
  dashItem,
}: DashboardSubMenuItemProp) {
  const selectedItem = dashboardSubItems.find((item) => item.name === dashItem);

  const [activeItem, setActiveItem] = useState(selectedItem?.data[0]?.name);

  return (
    <>
      <ul className="dash-sub-menu">
        {selectedItem?.data.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            onClick={() => setActiveItem(item.name)}
            className={`dash-sub-item ${item.name === activeItem ? "active" : ""}`}
          >
            <span className="pr-2">{item.name}</span>
            <span className="dash-sub-icon">{item.count}</span>
          </Link>
        ))}
      </ul>
      <DashboardContent moduleItem={activeItem} />
    </>
  );
}
