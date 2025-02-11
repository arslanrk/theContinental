import React from "react";
import { Avatar } from "@nextui-org/react";

import GlobalSearch from "./GlobalSearch";

const TopBar = () => {
  return (
    <header className="flex justify-between px-5 py-5 bg-[#191C24]">
      <GlobalSearch />
      <div className="flex items-center gap-5">
        <span className="text-white font-medium">Ella Jones</span>
        <Avatar
          isBordered
          size="sm"
          color="warning"
          src="https://i.pravatar.cc/150?u=a04258114e29026702d"
        />
      </div>
    </header>
  );
};

export default TopBar;
