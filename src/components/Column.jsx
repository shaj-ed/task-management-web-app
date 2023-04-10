import React from "react";
import TaskCard from "./TaskCard";

const Column = ({ column }) => {
  return (
    <div>
      <span className="text-base font-bold uppercase">
        {column.name}({column.tasks ? column.tasks.length : 0})
      </span>
      {column.tasks &&
        column.tasks.map((task, index) => {
          return (
            <TaskCard key={task.id} status={column.name} taskInd={index} />
          );
        })}
    </div>
  );
};

export default Column;
