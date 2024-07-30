import Link from "next/link";
import dashboardSubItems from "~/data/dashSubItems";
import { useEffect, useState } from "react";
import ApplicantsContent from "./_components/ApplicantsContent";
import "./styles/DashboardSubMenu.css";

interface DashboardSubMenuItemProp {
  dashItem: string | undefined;
}

export default function DashboardSubMenu({
  dashItem,
}: DashboardSubMenuItemProp) {
  const selectedItem = dashboardSubItems.find((item) => item.name === dashItem);

  const [activeItem, setActiveItem] = useState(selectedItem?.data[0]?.name);

  useEffect(() => {
    setActiveItem(selectedItem?.data[0]?.name);
  }, [dashItem, selectedItem]);

  return (
    <>
      <ul className="dash-sub-menu">
        {selectedItem?.data.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            onClick={() => {
              setActiveItem(item.name);
            }}
            className={`dash-sub-item ${item.name === activeItem ? "active" : ""}`}
          >
            <span className="pr-1.5">{item.name}</span>
            <span className="dash-sub-icon">{item.count}</span>
          </Link>
        ))}
      </ul>
      {dashItem === dashboardSubItems[2]?.name && (
        <ApplicantsContent moduleItem={activeItem} />
      )}
    </>
  );
}
