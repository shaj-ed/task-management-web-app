import React, { useState } from "react";
import { useSelector } from "react-redux";
import ViewTask from "./ViewTask";

const TaskCard = ({ status, taskInd }) => {
  const [showView, setShowView] = useState(false);
  const boardData = useSelector((state) => state.data);
  const activeBoard = boardData.find((board) => board.isActive);
  const todos = activeBoard.columns.filter((board) =>
    board.name === status ? board : null
  );
  const task = todos[0].tasks[taskInd];
  const completedSubTask = task.subtasks.filter((sub) => sub.isCompleted);

  return (
    <>
      <article
        className="p-4 mt-4 rounded-lg w-72 bg-zinc-200 cursor-pointer dark:bg-zinc-700 shadow-sm hover:text-cyan-800 dark:hover:text-cyan-400"
        onClick={() => {
          setShowView(true);
        }}
      >
        <h3 className="text-lg font-bold capitalize">{task.title}</h3>
        <p className="text-md font-medium mt-1 mb-2">
          {task.description ? `${task.description.slice(0, 40)}...` : null}
        </p>
        <p className="text-base font-bold opacity-80">
          {completedSubTask.length} of {task.subtasks.length} subtasks
        </p>
      </article>
      {showView ? (
        <ViewTask
          showView={showView}
          setShowView={setShowView}
          task={task}
          taskInd={taskInd}
          status={status}
        />
      ) : null}
    </>
  );
};

export default TaskCard;
