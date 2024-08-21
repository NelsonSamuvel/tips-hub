import { useSearchParams } from "react-router-dom";

function Button({ onClick, children, type = "primary", isActive = false }) {
  const base = "px-2 py-1 rounded-sm text-slate-300";

  const btnStyles = {
    primary: `${base} bg-sky-950 tracking-wide`,
    secondary: `${base} bg-transparent border hover:bg-white hover:text-slate-800 ${
      isActive && "bg-white text-slate-800"
    }`,
  };

  return (
    <button onClick={onClick} className={btnStyles[type]}>
      {children}
    </button>
  );
}

export default Button;
