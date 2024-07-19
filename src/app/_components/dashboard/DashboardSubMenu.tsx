import Link from "next/link";
import dashboardSubItems from "~/data/dashSubItems";
import "./styles/DashboardSubMenu.css";

interface DashboardSubMenuItemProp {
  dashItem: string;
}

export default function DashboardSubMenu({
  dashItem,
}: DashboardSubMenuItemProp) {
  const selectedItem = dashboardSubItems.find((item) => item.name === dashItem);

  return (
    <ul className="dash-sub-menu">
      {selectedItem?.data.map((item, index) => (
        <Link key={index} href={item.link} className="dash-sub-item active">
          <span className="pr-2">{item.name}</span>
          <span className="dash-sub-icon">{item.count}</span>
        </Link>
      ))}
    </ul>
  );
}
