import { useEffect, useRef } from "react";

export function useOutsideClick(close, eventPhase = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      e.preventDefault();
      if (ref.current && !ref.current.contains(e.target)) {
        close({ type: "toggleModal" });
      }
    }

    document.addEventListener("click", handleClick, eventPhase);
    return () => document.removeEventListener("click", handleClick, eventPhase);
  }, [close, eventPhase]);

  return ref;
}
