import React from "react";

const DropDown = ({ children, className, value, onChange }) => {
  return (
    <select className={className} value={value} onChange={onChange}>
      {children}
    </select>
  );
};

export default DropDown;
