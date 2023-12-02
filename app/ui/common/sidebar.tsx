import React from "react";
import { MdDashboard } from "react-icons/md";
import { PiPackageLight } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";

type Props = {};

interface IMenuItem {
  title: string;
  path: string;
  icon: React.ReactNode;
  hasSubmenu: boolean;
}

const Sidebar = (props: Props) => {
  const menuItems: IMenuItem[] = [
    {
      title: "Dashboard",
      path: "dashboard",
      icon: <MdDashboard />,
      hasSubmenu: false,
    },
    {
      title: "Products",
      path: "dashboard/products",
      icon: <PiPackageLight />,
      hasSubmenu: false,
    },
    {
      title: "Users",
      path: "dashboard/users",
      icon: <FaUsers />,
      hasSubmenu: false,
    },
    {
      title: "Transactions",
      path: "dashboard/transactions",
      icon: <AiOutlineTransaction />,
      hasSubmenu: false,
    },
    {
      title: "Settings",
      path: "dashboard/settings",
      icon: <IoIosSettings />,
      hasSubmenu: false,
    },
  ];
  return (
    <nav className="side-bar">
      {menuItems.map((item: IMenuItem) => {
        return (
          <li
            className="w-full flex gap-2 items-center text-white cursor-pointer hover:bg-white hover:text-brand hover:shadow-md hover:shadow-brand py-2 px-4 rounded-md"
            key={item.title}
          >
            {item.icon} {item.title}
          </li>
        );
      })}
    </nav>
  );
};

export default Sidebar;
