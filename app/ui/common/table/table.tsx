"use client";
import React, { useState } from "react";
import Pagination from "./pagination";

type TableColumn = {
  title: string;
  key: string;
};

type TableRow = Record<string, string | React.ReactNode>;

type Props = {
  columns: TableColumn[];
  rows: TableRow[];
  total: number;
  perPage?: number;
  pageOptions?: number[];
};

const Table = ({
  columns,
  rows,
  total,
  perPage = 10,
  pageOptions = [10, 20, 50, 100],
}: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage =
    total >= perPage
      ? total % perPage === 0
        ? total / perPage
        : Math.floor(total / perPage) + 1
      : 1;

  const handleCurrentPage = (value: number) => {
    setCurrentPage(value);
  };
  console.log("currentPage", currentPage);
  return (
    <>
      <div className="max-h-[500px] overflow-auto !rounded-md">
        <table className="w-full h-full">
          <thead className="bg-brand-secondary text-white h-16">
            <tr>
              {columns.map((column: TableColumn, index: number) => {
                return (
                  <th className="w-32" key={index}>
                    {column.title}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="bg-brand-secondary text-white text-center">
            {rows.map((row: TableRow, rowIndex: number) => {
              return (
                <tr key={rowIndex}>
                  {columns.map((column: TableColumn, columnIndex: number) => {
                    return (
                      <td className="p-4 w-32" key={columnIndex}>
                        {row[column.key]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination
        pageOptions={pageOptions}
        totalPage={totalPage}
        currentPage={currentPage}
        handleCurrentPage={handleCurrentPage}
      />
    </>
  );
};

export default Table;
