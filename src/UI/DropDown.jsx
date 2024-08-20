/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const DropDown = ({ children, className, value, onChange }) => {
  return (
    <select className={className} value={value} onChange={onChange}>
      {children}
    </select>
  );
};

function Option({ children, value }) {
  return <option value={value}>{children}</option>;
}

DropDown.Option = Option;

export default DropDown;
