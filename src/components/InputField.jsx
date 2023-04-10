import React from "react";

const InputField = ({ whatFor, labelText, type, classes, ...rest }) => {
  return (
    <label htmlFor={whatFor} className={`flex flex-col gap-2 ${classes}`}>
      <span className="text-md font-medium capitalize">{labelText}</span>
      <input
        id={whatFor}
        type={type}
        className="px-4 py-2 rounded outline-none dark:bg-slate-700 capitalize"
        {...rest}
      />
    </label>
  );
};

export default InputField;
