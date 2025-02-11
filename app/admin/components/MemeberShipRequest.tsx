import React from "react";
import { Avatar } from "@nextui-org/react";
import { GiCaesar } from "react-icons/gi";
import { IoEyeOutline } from "react-icons/io5";

const MemeberShipRequest = () => {
  const ActiveAssassin = [
    { id: "1", name: "Spirling Spirit", profileImg: "/assets/security3.jpg" },
    { id: "2", name: "Tony Strawbery", profileImg: "/assets/security3.jpg" },
    { id: "3", name: "CM Punk", profileImg: "/assets/security3.jpg" },
  ];
  return (
    <div className="p-5 rounded-lg bg-[#191C24] w-full flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GiCaesar color="#f3cc8a" size={25} />
          <span className="text-white font-heading text-lg">
            Memebership Requests
          </span>
        </div>
        <button type="button" className="text-red-500 font-heading text-lg">
          View All
        </button>
      </div>
      <ul className="flex flex-col gap-2">
        {ActiveAssassin.map((Assassin) => {
          return (
            <li
              className="flex items-center justify-between pb-2 cursor-pointer border-b-1 border-[#545454] p-[5px] last:border-none hover:bg-[#474747] hover:rounded-md"
              key={Assassin.id}
            >
              <div className="flex items-center gap-3">
                <Avatar size="sm" color="warning" src={Assassin.profileImg} />
                <span className="text-white font-body text-sm">
                  {Assassin.name}
                </span>
              </div>
              <button type="button">
                <IoEyeOutline color="#ffffff" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MemeberShipRequest;
