import React from "react";

function Header() {
  return (
    <div className="px-6 sm:px-5 py-4 flex justify-between items-center gap-2">
      <div className="text-lg sm:text-xl font-semibold tracking-widest">
        <p>TipsHub</p>
      </div>
      <div className="text-sm sm:text-lg italic tracking-wider ">
        <p>Learn to Code Better</p>
      </div>
      <div className="hidden sm:block">
        <p className="text-base">Guest</p>
      </div>
    </div>
  );
}

export default Header;
