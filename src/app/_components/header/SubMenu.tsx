import Link from "next/link";
import "./styles/SubMenu.css";

interface SubMenu {
  name: string;
  link: string;
}

export default function SubMenu({ submenu }: { submenu: SubMenu[] }) {
  return (
    <div className="subitem-nav-bar-parent">
      <ul className="subitem-list">
        {submenu.map((item, index) => (
          <Link key={index} href={item.link} className="subitem-link">
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
