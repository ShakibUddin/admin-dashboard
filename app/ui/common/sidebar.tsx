"use client";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { PiPackageLight } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {};

interface IMenuItem {
  title: string;
  path: string;
  icon: React.ReactNode;
  hasSubmenu: boolean;
}

const Sidebar = (props: Props) => {
  const pathname = usePathname();
  const menuItems: IMenuItem[] = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <MdDashboard />,
      hasSubmenu: false,
    },
    {
      title: "Products",
      path: "/dashboard/products",
      icon: <PiPackageLight />,
      hasSubmenu: false,
    },
    {
      title: "Users",
      path: "/dashboard/users",
      icon: <FaUsers />,
      hasSubmenu: false,
    },
    {
      title: "Transactions",
      path: "/dashboard/transactions",
      icon: <AiOutlineTransaction />,
      hasSubmenu: false,
    },
    {
      title: "Settings",
      path: "/dashboard/settings",
      icon: <IoIosSettings />,
      hasSubmenu: false,
    },
  ];
  return (
    <nav className="side-bar">
      {menuItems.map((item: IMenuItem) => {
        return (
          <Link
            href={item.path}
            className={
              item.path === pathname
                ? "side-bar-active-link"
                : "side-bar-inactive-link"
            }
            key={item.title}
          >
            {item.icon} {item.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Sidebar;
