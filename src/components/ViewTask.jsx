import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { changeStatus, deleteTask, toggleSubtask } from "../features/dataSlice";
import Button, { IconButton } from "./Button";
import OptionStatus from "./OptionStatus";
import TaskForm from "./TaskForm";

const ViewTask = ({ showView, setShowView, task, status, taskInd }) => {
  const [showEditTask, setShowEditTask] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);
  const [statusValue, setStatusValue] = useState(status);
  const [updating, setUpdating] = useState(false);
  const dispatch = useDispatch();
  const { id, title, description, subtasks } = task;

  const completedSubTask = task.subtasks.filter((sub) => sub.isCompleted);

  const handleCheck = (id) => {
    dispatch(toggleSubtask({ id, status, taskInd }));
  };

  const handleClose = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    dispatch(changeStatus({ id, status, statusValue }));
    setShowView(false);
  };

  return (
    <div
      className={`fixed w-full h-screen flex items-center justify-center left-0 right-0 top-0 bottom-0 z-40 bg-opacity transition-all ${
        showView ? "scale-1" : "scale-0"
      }`}
      onClick={handleClose}
    >
      <div className="p-6 z-40 w-full h-[70%] max-w-xs bg-slate-200 dark:bg-slate-800 md:max-w-md shadow-md rounded overflow-y-scroll">
        <div className="flex justify-between mb-4 relative gap-4">
          <h2 className="text-lg font-semibold capitalize">{title}</h2>
          <IconButton
            restClass="self-center"
            icon={<HiDotsVertical />}
            handleClick={() => setShowEditTask(!showEditTask)}
          />

          <div
            className={`p-2 w-40 bg-slate-100 rounded dark:bg-slate-600 absolute bottom-[-100px] right-[20px] shadow-md z-10 ${
              showEditTask ? "block" : "hidden"
            }`}
          >
            <Button
              type="button"
              classes="block text-sm text-cyan-600 p-2 hover:bg-slate-200 w-full dark:text-cyan-200 dark:hover:bg-slate-500"
              handleClick={() => {
                setUpdating(true);
                setShowAddTask(true);
              }}
            >
              edit task
            </Button>
            <Button
              type="button"
              classes="text-sm text-red-400 p-2 hover:bg-slate-200 w-full dark:hover:bg-slate-500"
              handleClick={() => dispatch(deleteTask({ id, status }))}
            >
              delete task
            </Button>
          </div>
        </div>

        <p className="text-base">{description && description}</p>
        <span className="text-sm font-semibold capitalize opacity-80 mt-4 mb-2 block">
          {completedSubTask.length} of {subtasks.length} subtasks
        </span>
        <div>
          {subtasks.map((subTask) => {
            return (
              <label
                key={subTask.id}
                htmlFor={subTask.id}
                className="flex items-center gap-2 p-3 rounded bg-slate-300 cursor-pointer mb-2 dark:text-stone-800"
              >
                <input
                  type="checkbox"
                  id={subTask.id}
                  onChange={() => handleCheck(subTask.id)}
                  checked={subTask.isCompleted}
                />
                <span
                  className={`text-sm font-medium capitalize ${
                    subTask.isCompleted ? "line-through" : null
                  }`}
                >
                  {subTask.title}
                </span>
              </label>
            );
          })}
        </div>
        <OptionStatus
          statusValue={statusValue}
          setStatusValue={setStatusValue}
        />
      </div>
      {showAddTask && (
        <TaskForm
          showAddTask={showAddTask}
          setShowAddTask={setShowAddTask}
          updating={updating}
          task={task}
          status={status}
          statusValue={statusValue}
        />
      )}
    </div>
  );
};

export default ViewTask;
