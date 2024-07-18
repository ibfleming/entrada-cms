import Link from "next/link";
import dashboardSubItems from "~/data/dashSubItems";

interface DashboardSubMenuItemProp {
  dashItem: string;
}

export default function DashboardSubMenu({
  dashItem,
}: DashboardSubMenuItemProp) {
  const selectedItem = dashboardSubItems.find((item) => item.name === dashItem);

  return (
    <div className="flex flex-wrap items-center justify-start gap-8 rounded-tr-md border-x-[1px] border-b-[1px] border-t-[1px] border-[#ccc] py-3 pl-5 text-xs text-secondary">
      {selectedItem?.data.map((item, index) => (
        <Link key={index} href={item.link} className="hover:text-[#777]">
          <span className="pr-2">{item.name}</span>
          <span className="rounded-md border-[1px] border-secondary bg-tertiary px-1.5 py-0.5 text-[10px] text-secondary">
            {item.count}
          </span>
        </Link>
      ))}
    </div>
  );
}
