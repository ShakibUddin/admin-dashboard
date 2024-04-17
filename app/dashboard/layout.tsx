import React from "react";
import Sidebar from "../ui/common/sidebar";
import Navbar from "../ui/common/navbar";
import "../ui/styles/dashboard.css";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="dashboard-content">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
