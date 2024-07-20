"use client";

import Link from "next/link";
import menuItems from "~/data/menuItems";
import { type IconType } from "react-icons";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import "./styles/Menu.css";
import SubMenu from "./SubMenu";

type SubMenuItem = {
  name: string;
  link: string;
};

type MenuItem = {
  name: string;
  icon: IconType;
  link: string;
  submenu?: SubMenuItem[];
};

export default function Menu() {
  const [showDropdown, setShowDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname();

  const handleMouseEnter = (itemName: string) => {
    setShowDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setShowDropdown(null);
  };

  const handleSubmenuMouseEnter = () => {
    setShowDropdown(showDropdown);
  };

  const isActive = (menuItemLink: string) => {
    return pathname === menuItemLink;
  };

  const activeMenuItem = menuItems.find((item) => isActive(item.link));
  const activeSubMenu = activeMenuItem?.submenu ?? [];

  useEffect(() => {
    if (showDropdown) {
      if (dropdownRef.current) {
        dropdownRef.current.style.maxHeight = `${dropdownRef.current.scrollHeight}px`;
      }
    } else {
      if (dropdownRef.current) {
        dropdownRef.current.style.maxHeight = "0";
      }
    }
  }, [showDropdown]);

  return (
    <>
      <nav className="nav-parent">
        <ul className="nav-list font-ibm-plex-sans">
          {menuItems.map((item: MenuItem, index: number) => (
            <li
              className={`menu-item ${isActive(item.link) ? "active" : ""}`}
              key={index}
            >
              <Link
                className={`menu-link ${isActive(item.link) ? "active" : ""}`}
                href={item.link}
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <item.icon className="menu-icon" />
                {item.name}
              </Link>
              {item.submenu && showDropdown === item.name && (
                <ul
                  ref={dropdownRef}
                  className="submenu-container font-inter"
                  onMouseEnter={handleSubmenuMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.submenu.map((item: SubMenuItem, index: number) => (
                    <li className="submenu-item" key={index}>
                      <Link className="submenu-link" href={item.link}>
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <SubMenu submenu={activeSubMenu} />
    </>
  );
}
