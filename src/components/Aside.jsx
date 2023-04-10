import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/themeSlice";
import { changeActive } from "../features/dataSlice";

const Aside = ({ show, showBoard, setShowBoard }) => {
  const theme = useSelector((state) => state.theme);
  const boardData = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);

  const handleCheck = (e) => {
    dispatch(toggleTheme());
    setCheck(e.target.checked);
  };

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === "dark";
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <aside
      className={`h-full-screen fixed top-0 bottom-0  pt-[100px] pb-8 pr-4 flex flex-col dark:bg-slate-800 bg-slate-200 transition-all z-10 ${
        show ? "translate-x-0" : "-translate-x-full"
      }  md:pt-10 md:h-full-custom md:top-[76px]`}
    >
      <span className="text-base font-medium uppercase px-4">Boards(3)</span>
      <div className="flex flex-col  mt-8 w-[200px]">
        {boardData.map((board) => {
          const { name, id, isActive } = board;
          return (
            <button
              key={id}
              type="button"
              className={`text-lg font-semibold capitalize p-4 pr-8 cursor-pointer rounded-tr-3xl rounded-br-3xl text-left hover:bg-cyan-400 hover:dark:bg-cyan-700 ${
                isActive ? "bg-cyan-400 dark:bg-cyan-700" : null
              }`}
              onClick={() => dispatch(changeActive(id))}
            >
              <h2>{name}</h2>
            </button>
          );
        })}
      </div>

      <Button
        type="button"
        classes="ml-2 mt-2 text-sm w-full p-2 bg-slate-300 dark:bg-slate-500 rounded hover:opacity-90"
        handleClick={() => setShowBoard(true)}
      >
        add new board
      </Button>

      <div className="px-4 flex gap-4 items-center mt-auto">
        <CiDark className="text-2xl" />
        <label
          htmlFor="switch"
          className="w-[50px] h-6 p-2 block bg-gray-400 relative rounded-full cursor-pointer"
        >
          <input
            type="checkbox"
            id="switch"
            className="absolute w-full cursor-pointer opacity-0"
            value={check}
            onChange={(e) => handleCheck(e)}
          />
          <span
            className={`w-5 h-5 bg-cyan-900 rounded-full absolute top-1/2 -translate-y-2/4 transition-all  ${
              check ? "translate-x-[17px]" : "-translate-x-[5px]"
            }`}
          ></span>
        </label>
        <MdDarkMode className="text-2xl" />
      </div>
    </aside>
  );
};

export default Aside;
