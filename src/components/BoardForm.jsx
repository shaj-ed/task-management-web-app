import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { addBoard, editBoard } from "../features/dataSlice";
import Button, { IconButton } from "./Button";
import InputField from "./InputField";

const BoardForm = ({
  showBoard,
  setShowBoard,
  updateBoard,
  setUpdateBoard,
}) => {
  const activeBoard = useSelector((state) =>
    state.data.find((board) => board.isActive)
  );
  const [board, setBoard] = useState(updateBoard ? activeBoard.name : "");
  const [newColumns, setNewColumns] = useState(
    updateBoard
      ? activeBoard.columns
      : [
          {
            id: crypto.randomUUID(),
            name: "todo",
            tasks: [],
          },
          {
            id: crypto.randomUUID(),
            name: "doing",
            tasks: [],
          },
          {
            id: crypto.randomUUID(),
            name: "done",
            tasks: [],
          },
        ]
  );
  const dispatch = useDispatch();

  const handleChange = (id, value) => {
    setNewColumns((prev) => {
      const columns = [...prev];
      const column = columns.find((col) => col.id === id);
      column.name = value;
      return columns;
    });
  };

  const deleteColumn = (id) => {
    setNewColumns((prev) => {
      let columns = [...prev];
      const newColumns = columns.filter((e) => e.id !== id);
      return (columns = newColumns);
    });
  };

  const handleClose = (e) => {
    if (e.currentTarget === e.target) {
      setShowBoard(false);
      setUpdateBoard(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBoard = {
      id: updateBoard ? activeBoard.id : crypto.randomUUID(),
      name: board,
      isActive: false,
      columns: newColumns,
    };
    if (updateBoard) {
      dispatch(editBoard({ newBoard }));
    } else {
      dispatch(addBoard({ newBoard }));
    }
    setShowBoard(false);
    setUpdateBoard(false);
  };

  return (
    <div
      className={`fixed w-full h-screen flex items-center justify-center left-0 top-0 bottom-0  z-40 bg-opacity transition-all ${
        showBoard ? "scale-1" : "scale-0"
      }`}
      onClick={handleClose}
    >
      <div className="p-6 z-40 w-full h-[70%] max-w-xs bg-slate-200 dark:bg-slate-800 md:max-w-md shadow-md rounded overflow-y-scroll">
        <h3 className="text-lg font-semibold capitalize">
          {updateBoard ? "update board" : "add new board"}
        </h3>
        <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit}>
          <InputField
            whatFor="board-name"
            type="text"
            labelText="board name"
            value={board}
            onChange={(e) => setBoard(e.target.value)}
            placeholder="ex: Job activity"
            required
          />

          {newColumns.map((col, index) => {
            return (
              <div className="flex gap-2 items-center" key={col.id}>
                <InputField
                  whatFor={col.name}
                  labelText={`column ${index + 1}`}
                  type="text"
                  value={col.name}
                  classes="flex-1"
                  onChange={(e) => handleChange(col.id, e.target.value)}
                  required
                />
                <IconButton
                  icon={<RxCross2 />}
                  restClass="text-xl mt-8"
                  handleClick={() => deleteColumn(col.id)}
                />
              </div>
            );
          })}

          <Button
            type="button"
            classes="w-full text-sm p-2 bg-stone-500 rounded text-white hover:opacity-90"
            handleClick={() => {
              setNewColumns((prev) => [
                ...prev,
                {
                  id: crypto.randomUUID(),
                  name: "",
                  tasks: [],
                },
              ]);
            }}
          >
            add new column
          </Button>

          <Button
            type="submit"
            classes="w-full mt-6 text-sm p-2 capitalize bg-cyan-800 rounded text-white hover:opacity-90"
          >
            {updateBoard ? "update" : "create"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BoardForm;
