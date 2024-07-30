import Link from "next/link";
import "./styles/SubMenu.css";
import { useEffect, useState } from "react";

interface SubMenu {
  name: string;
  link: string;
}

export default function SubMenu({ submenu }: { submenu: SubMenu[] }) {
  const [activeItem, setActiveItem] = useState(submenu[0]?.name);

  useEffect(() => {
    setActiveItem(submenu[0]?.name);
  }, [submenu, activeItem]);

  return (
    <div className="subitem-nav-bar-parent">
      <ul className="subitem-list">
        {submenu.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            onClick={() => {
              setActiveItem(item.name);
            }}
            className={`subitem-link ${item.name === activeItem ? "active" : ""}`}
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
