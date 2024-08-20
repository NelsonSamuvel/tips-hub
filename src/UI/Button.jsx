import React from "react";

function Button({ onClick, children, type = "primary" }) {
  const base = "px-2 py-1 rounded-sm text-slate-300";

  const btnStyles = {
    primary: `${base} bg-sky-950 tracking-wide`,
  };

  return (
    <button onClick={onClick} className={btnStyles[type]}>
      {children}
    </button>
  );
}

export default Button;
