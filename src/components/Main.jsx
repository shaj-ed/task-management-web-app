import React from "react";
import { useSelector } from "react-redux";
import Column from "./Column";

const Main = ({ show }) => {
  const activeBoard = useSelector((state) =>
    state.data.find((board) => board.isActive)
  );

  return (
    <main
      className={`overflow-scroll no-scrollbar min-h-screen  bg-slate-300 dark:bg-slate-700  p-4 md:p-8 relative top-[76px] left-0 min-w-fit md:left-[216px] ${
        show ? "md:left-[216px]" : "md:left-0"
      }`}
    >
      <div className="flex gap-6">
        {activeBoard.columns.map((column) => {
          return <Column key={column.id} column={column} />;
        })}
      </div>
    </main>
  );
};

export default Main;
