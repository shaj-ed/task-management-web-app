import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { HiDotsVertical, HiOutlineMenuAlt4 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { deleteBoard } from "../features/dataSlice";
import BoardForm from "./BoardForm";
import Button, { IconButton } from "./Button";
import TaskForm from "./TaskForm";

const Header = ({ show, setShow, showBoard, setShowBoard, setUpdateBoard }) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const data = useSelector((state) => state.data);
  const boardName = data.find((board) => board.isActive);
  const dispatch = useDispatch();

  return (
    <header className="p-4 w-full fixed z-20 top-0 right-0 bg-slate-200 dark:bg-slate-800">
      <div className="w-full flex items-center">
        <IconButton
          icon={<HiOutlineMenuAlt4 />}
          restClass="text-2xl"
          handleClick={() => setShow(!show)}
        />

        <a
          href="#"
          className="text-2xl font-unbound font-bold hidden md:block ml-4 mr-10"
        >
          edTask.
        </a>

        <div className="relative">
          <h2 className="text-xl font-semibold capitalize flex items-center gap-1 ml-2">
            {boardName.name}
            <IconButton
              icon={<HiDotsVertical />}
              handleClick={() => setShowEdit(!showEdit)}
            />
          </h2>

          <div
            className={`p-2 w-40 bg-slate-100 rounded dark:bg-slate-600 absolute bottom-[-6rem] md:left-[100%] shadow-md ${
              showEdit ? "block" : "hidden"
            }`}
          >
            <Button
              type="button"
              classes="block text-sm text-cyan-600 p-2 hover:bg-slate-200 w-full dark:text-cyan-200 dark:hover:bg-slate-500"
              handleClick={() => {
                setShowBoard(true);
                setUpdateBoard(true);
              }}
            >
              edit board
            </Button>
            <Button
              type="button"
              classes="text-sm text-red-400 p-2 hover:bg-slate-200 w-full dark:hover:bg-slate-500"
              handleClick={() => dispatch(deleteBoard())}
            >
              delete board
            </Button>
          </div>
        </div>

        <Button
          type="button"
          classes="text-xl p-3 bg-cyan-700 text-white rounded-full ml-auto hover:opacity-90"
          handleClick={() => setShowAddTask(true)}
        >
          <AiOutlinePlus />
        </Button>
        {showAddTask && (
          <TaskForm showAddTask={showAddTask} setShowAddTask={setShowAddTask} />
        )}
      </div>
    </header>
  );
};

export default Header;
