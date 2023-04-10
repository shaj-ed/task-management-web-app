import { createSlice, current } from "@reduxjs/toolkit";
import data from "./../../data";

const dataSlice = createSlice({
  name: "data",
  initialState: data,
  reducers: {
    changeActive: (state, action) => {
      state.map((board) => (board.isActive = false));
      const getActive = state.find((board) => board.id === action.payload);
      getActive.isActive = true;
      return state;
    },
    toggleSubtask: (state, action) => {
      const activeBoard = state.find((board) => board.isActive);
      const currentStatusData = activeBoard.columns.filter((curr) =>
        curr.name === action.payload.status ? curr : null
      );
      const task = currentStatusData[0].tasks[action.payload.taskInd];
      const targetTask = task.subtasks.find(
        (sub) => sub.id === action.payload.id
      );
      targetTask.isCompleted = !targetTask.isCompleted;
    },
    changeStatus: (state, action) => {
      console.log(action);
      const activeBoard = state.find((board) => board.isActive);
      const currentColumn = activeBoard.columns.filter((col) =>
        col.name === action.payload.status ? col : null
      );
      const newcurrentColumn = activeBoard.columns.find(
        (col) => col.name === action.payload.statusValue
      );
      const getStatusChangeData = currentColumn[0].tasks.find(
        (curr) => curr.id === action.payload.id
      );
      const index = currentColumn[0].tasks.indexOf(getStatusChangeData);
      currentColumn[0].tasks.splice(index, 1);
      newcurrentColumn.tasks.unshift(getStatusChangeData);
    },
    addTask: (state, action) => {
      const activeBoard = state.find((board) => board.isActive);
      const todoColumn = activeBoard.columns.find((col) => col.name === "todo");
      todoColumn.tasks.push(action.payload.newTask);
    },
    updateTask: (state, action) => {
      const { newTask, status } = action.payload;
      const activeBoard = state.find((board) => board.isActive);
      const statusColumn = activeBoard.columns.find(
        (col) => col.name === status
      );
      const updatedTask = statusColumn.tasks.find(
        (task) => task.id === newTask.id
      );
      updatedTask.title = newTask.title;
      updatedTask.description = newTask.description;
      updatedTask.subtasks = newTask.subtasks;
    },
    deleteTask: (state, action) => {
      const { id, status } = action.payload;
      const activeBoard = state.find((board) => board.isActive);
      const statusColumn = activeBoard.columns.find(
        (col) => col.name === status
      );
      const deletedTask = statusColumn.tasks.find((task) => task.id === id);
      statusColumn.tasks.splice(statusColumn.tasks.indexOf(deletedTask), 1);
    },
    addBoard: (state, action) => {
      state.push(action.payload.newBoard);
    },
    editBoard: (state, action) => {
      const { name, columns } = action.payload.newBoard;
      const activeBoard = state.find((board) => board.isActive);
      activeBoard.name = name;
      activeBoard.columns = columns;
    },
    deleteBoard: (state) => {
      const activeBoard = state.find((board) => board.isActive);
      state.splice(state.indexOf(activeBoard), 1);
      state[0].isActive = true;
    },
  },
});

export const {
  changeActive,
  toggleSubtask,
  changeStatus,
  addTask,
  updateTask,
  deleteTask,
  addBoard,
  editBoard,
  deleteBoard,
} = dataSlice.actions;

export default dataSlice.reducer;
