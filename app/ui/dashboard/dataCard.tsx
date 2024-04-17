import Link from "next/link";
import React from "react";
import millify from "millify";

type Props = {
  title: string;
  icon: React.ReactNode;
  data: number;
  link: string;
  linkTextColor: string;
  iconBgColor: string;
};

const DataCard = ({
  title,
  icon,
  data,
  link,
  linkTextColor,
  iconBgColor,
}: Props) => {
  return (
    <div className="dashboard-data-card">
      <div
        className={`${iconBgColor} bg-opacity-10 w-fit h-fit p-2 rounded-full flex justify-center items-center`}
      >
        {icon}
      </div>

      <p className="text-2xl font-bold text-white">{millify(data)}</p>
      <div className="w-full flex flex-row justify-between">
        <p className="text-white text-sm">{title}</p>
        <Link
          className={`${linkTextColor} text-sm hover:underline`}
          href={link}
        >
          {"See More"}
        </Link>
      </div>
    </div>
  );
};

export default DataCard;
