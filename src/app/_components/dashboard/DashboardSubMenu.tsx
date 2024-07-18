import dashboardSubItems from "~/data/dashSubItems";

interface DashboardSubMenuItemProp {
  dashItem: string;
}

export default function DashboardSubMenu({
  dashItem,
}: DashboardSubMenuItemProp) {
  const selectedItem = dashboardSubItems.find((item) => item.name === dashItem);

  return (
    <div className="border-t-[1px] border-[#ccc] p-4">
      {selectedItem?.data.map((item, index) => (
        <div key={index}>
          <a href={item.link}>
            {item.name} ({item.count})
          </a>
        </div>
      ))}
    </div>
  );
}
