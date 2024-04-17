import React from "react";
import DataCard from "../ui/dashboard/dataCard";
import { IoIosLogOut } from "react-icons/io";
import { PiPackageLight } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoAnalyticsSharp } from "react-icons/io5";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <div className="flex gap-4 w-full flex-wrap">
        <DataCard
          title={"Products"}
          icon={<PiPackageLight size={20} className="text-cyan-600" />}
          data={10000}
          link={"/dashboard/products"}
          linkTextColor={"text-cyan-600"}
          iconBgColor={"bg-cyan-50"}
        />
        <DataCard
          title={"Users"}
          icon={<FaUsers size={20} className="text-yellow-600" />}
          data={341210}
          link={"/dashboard/users"}
          linkTextColor={"text-yellow-600"}
          iconBgColor={"bg-yellow-50"}
        />
        <DataCard
          title={"Transactions"}
          icon={<AiOutlineTransaction size={20} className="text-purple-600" />}
          data={331230123012}
          link={"/dashboard/transactions"}
          linkTextColor={"text-purple-600"}
          iconBgColor={"bg-purple-50"}
        />
        <DataCard
          title={"Daily Visitors"}
          icon={<IoAnalyticsSharp size={20} className="text-pink-600" />}
          data={4321}
          link={""}
          linkTextColor={"text-pink-600"}
          iconBgColor={"bg-pink-50"}
        />
      </div>
    </div>
  );
};

export default Dashboard;
