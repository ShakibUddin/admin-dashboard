import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
type Props = {
  pageOptions: number[];
  totalPage: number;
  currentPage: number;
  handleCurrentPage: (value: number) => void;
};

const Pagination = ({
  pageOptions,
  totalPage,
  currentPage,
  handleCurrentPage,
}: Props) => {
  return (
    <div className="flex justify-end gap-4 mt-4">
      <div className="flex justify-center items-center gap-4">
        <IoIosArrowBack
          className={`text-white ${
            currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => {
            handleCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
          }}
        />
        {Array.from(Array(totalPage).keys()).map(
          (page: number, index: number) => {
            if (index > 3) {
              return <BsThreeDots key={index} className={"text-white"} />;
            }
            return (
              <p
                className="text-white flex justify-center items-center cursor-pointer hover:bg-brand-secondary hover:text-white w-6 h-6"
                key={index}
                onClick={() => {
                  handleCurrentPage(page + 1);
                }}
              >
                {page + 1}
              </p>
            );
          }
        )}
        <IoIosArrowForward
          className={`text-white ${
            currentPage === totalPage ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => {
            handleCurrentPage(
              currentPage < totalPage ? currentPage + 1 : totalPage
            );
          }}
        />
      </div>
      <label className="text-white">
        <span>Per page</span>
      </label>
      <select className="outline-none">
        {pageOptions
          ? pageOptions.map((option: number, index: number) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })
          : []}
      </select>
    </div>
  );
};

export default Pagination;
