import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-16 items-center backdrop-blur-lg z-40 fixed top-0 left-0 right-0 bg-[#f9f9f9]/50 md:h-20 border-b-[1px] border-solid border-gray-300 flex p-2 flex-row gap-2">
      <strong>
        <p className="text-xl">CelebrityClothes</p>
      </strong>
    </nav>
  );
};

export default Navbar;
