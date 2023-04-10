import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { addTask, changeStatus, updateTask } from "../features/dataSlice";
import Button, { IconButton } from "./Button";
import InputField from "./InputField";
import OptionStatus from "./OptionStatus";

const TaskForm = ({ showAddTask, setShowAddTask, task, updating, status }) => {
  const [name, setName] = useState(updating ? task.title : "");
  const [description, setDescription] = useState(
    updating ? task.description : ""
  );
  const [statusValue, setStatusValue] = useState(status);
  const [subTasks, setSubTasks] = useState(
    updating
      ? task.subtasks
      : [
          {
            id: crypto.randomUUID(),
            title: "",
            isCompleted: false,
          },
          {
            id: crypto.randomUUID(),
            title: "",
            isCompleted: false,
          },
        ]
  );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: updating ? task.id : crypto.randomUUID(),
      title: name,
      description,
      subtasks: subTasks,
    };
    if (updating) {
      dispatch(updateTask({ newTask, status }));
      dispatch(changeStatus({ id: newTask.id, status, statusValue }));
    } else {
      dispatch(addTask({ newTask }));
    }
    setName("");
    setDescription("");
    setSubTasks([
      {
        id: crypto.randomUUID(),
        title: "",
        isCompleted: false,
      },
      {
        id: crypto.randomUUID(),
        title: "",
        isCompleted: false,
      },
    ]);
    setShowAddTask(false);
  };

  const handleSubtaskChange = (value, id) => {
    setSubTasks((prev) => {
      let subtasks = [...prev];
      const targetTask = subTasks.find((task) => task.id === id);
      targetTask.title = value;
      return subtasks;
    });
  };

  const deleteSubtask = (id) => {
    const newSubtasks = subTasks.filter((task) => task.id !== id);
    setSubTasks(newSubtasks);
  };

  return (
    <div
      className={`fixed w-full h-screen flex items-center justify-center left-0 top-0 bottom-0 z-40 bg-opacity transition-all ${
        showAddTask ? "scale-1" : "scale-0"
      }`}
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          setShowAddTask(false);
        }
      }}
    >
      <div className="p-6 z-40 w-full h-[70%] max-w-xs bg-slate-200 dark:bg-slate-800 md:max-w-md shadow-md rounded overflow-y-scroll">
        <h2 className="text-xl font-semibold capitalize">
          {updating ? "update task" : "add new task"}
        </h2>

        <form
          className="mt-4 flex flex-col gap-3"
          onSubmit={(e) => handleSubmit(e)}
        >
          <InputField
            typw="text"
            whatFor="task-name"
            labelText="task name"
            placeholder="ex: Build a portfolio"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="description">
            <span className="text-md font-medium capitalize mb-2 block">
              Description
            </span>
            <textarea
              id="description"
              rows="5"
              cols="50"
              className="px-4 py-2 rounded outline-none dark:bg-slate-700 capitalize w-full"
              placeholder="Write a short description about your task"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </label>

          <div className="flex flex-col gap-2">
            {/* <span className="text-md font-medium mb-4 block">Subtasks</span> */}
            {subTasks.map((subtask, index) => {
              return (
                <div className="flex gap-2 items-center" key={subtask.id}>
                  <InputField
                    whatFor={`${subtask.name}`}
                    labelText={`subtask ${index + 1}`}
                    type="text"
                    classes="flex-1"
                    value={subtask.title}
                    onChange={(e) =>
                      handleSubtaskChange(e.target.value, subtask.id)
                    }
                    required
                  />
                  <IconButton
                    icon={<RxCross2 />}
                    restClass="text-xl mt-8"
                    handleClick={() => {
                      deleteSubtask(subtask.id);
                    }}
                  />
                </div>
              );
            })}
          </div>

          <Button
            type="button"
            classes="w-full text-sm p-2 bg-stone-500 rounded text-white hover:opacity-90 mt-2"
            handleClick={() => {
              setSubTasks((prev) => [
                ...prev,
                {
                  id: crypto.randomUUID(),
                  title: "",
                  isCompleted: false,
                },
              ]);
            }}
          >
            add new column
          </Button>

          <OptionStatus
            newTask={!updating}
            statusValue={statusValue}
            setStatusValue={setStatusValue}
          />

          <Button
            type="submit"
            classes="w-full mt-6 text-sm p-2 bg-cyan-800 rounded text-white hover:opacity-90"
          >
            {updating ? "update" : "create"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
