import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const OptionStatus = ({ statusValue, setStatusValue, newTask }) => {
  const activeBoard = useSelector((state) =>
    state.data.find((board) => board.isActive)
  );

  return (
    <div className="mb-2 mt-4">
      <label
        htmlFor="status"
        className="text-sm font-semibold capitalize opacity-80 mb-2 block"
      >
        current status
      </label>

      <select
        id="status"
        className="w-full outline-none capitalize font-medium text-md p-2 cursor-pointer dark:text-stone-800"
        value={statusValue}
        onChange={(e) => {
          setStatusValue(e.target.value);
        }}
      >
        {newTask ? (
          <option value="todo">todo</option>
        ) : (
          <>
            {activeBoard.columns.map((column) => (
              <option key={column.id} value={column.name}>
                {column.name}
              </option>
            ))}
          </>
        )}
      </select>
    </div>
  );
};

export default OptionStatus;
