import React from "react";

const Button = ({ type, handleClick, classes, children }) => {
  return (
    <button
      type={type}
      className={`capitalize font-semibold cursor-pointer transition-all ${classes}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export const IconButton = ({ handleClick, icon, restClass }) => {
  return (
    <Button
      type="button"
      classes={`p-2 hover:bg-slate-300 hover:dark:bg-slate-600 rounded-full ${restClass}`}
      handleClick={handleClick}
    >
      {icon}
    </Button>
  );
};

export default Button;
