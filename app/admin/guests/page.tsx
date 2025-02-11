import React from "react";
import { Avatar } from "@nextui-org/react";
import { FaPlusCircle, FaCircle } from "react-icons/fa";

import Layout from "../components/Layout";

const page = () => {
  const guests = [
    {
      id: "1",
      name: "John Wick",
      image: "/assets/John_Wick.jpg",
      room: "--",
      checkIn: "12/12/2024 03:00 AM",
      checkOut: "01/02/2025",
      isAvaiable: false,
      services: "Weapon",
    },
    {
      id: "2",
      name: "Anna De Arms",
      image: "/assets/Ballerina2.jpg",
      room: "Assassin's Retreat Suite",
      checkIn: "12/12/2024 03:00 AM",
      checkOut: "01/02/2025",
      isAvaiable: true,
      services: "Room services",
    },
    {
      id: "3",
      name: "Joe Ranold",
      image: "/assets/securityKing.jpg",
      room: "Safe House Quarters",
      checkIn: "12/12/2024 03:00 AM",
      checkOut: "01/02/2025",
      isAvaiable: false,
      services: "",
    },
    {
      id: "4",
      name: "Christina Delreo",
      image: "/assets/security4.jpg",
      room: "Diplomat's Refuge",
      checkIn: "12/12/2024 03:00 AM",
      checkOut: "01/02/2025",
      isAvaiable: true,
      services: "Underground Fight Club",
    },
    {
      id: "5",
      name: "Chung Ja Hun",
      image: "/assets/security3.jpg",
      room: "Continental Penthouse",
      checkIn: "12/12/2024 03:00 AM",
      checkOut: "01/02/2025",
      isAvaiable: false,
      services: "Personal Security",
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h1 className="font-heading text-2xl font-medium text-white">
            Guests
          </h1>
          <div className="flex items-center gap-2">
            <button type="button">
              <FaPlusCircle color="#fff" size={40} />
            </button>
            <input
              type="text"
              placeholder="Search here.."
              className="border-1 border-white rounded-lg p-1 text-white"
            />
          </div>
        </div>
        <table border={1} className="text-[#ababab]">
          <thead className="bg-[#191C24]">
            <tr className="">
              <th className="p-2 text-base border-1 border-black">DP</th>
              <th className="p-2 text-base border-1 border-black">Name</th>
              <th className="p-2 text-base border-1 border-black">Status</th>
              <th className="p-2 text-base border-1 border-black">Room No.</th>
              <th className="p-2 text-base border-1 border-black">
                Last Check In
              </th>
              <th className="p-2 text-base border-1 border-black">
                Last Check Out
              </th>
              <th className="p-2 text-base border-1 border-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((guest) => {
              return (
                <tr className="even:bg-[#4f4f4f] hover:bg-[#7d7d7d] cursor-pointer">
                  <td className="text-center py-2 border-1 border-black">
                    <div className="flex items-center justify-center">
                      <Avatar size="sm" color="warning" src={guest.image} />
                    </div>
                  </td>
                  <td className="text-center py-2 border-1 border-black">
                    {guest.name}
                  </td>
                  <td className="text-center py-2 border-1 border-black">
                    <div className="flex items-center justify-center">
                      {guest.isAvaiable == true ? (
                        <FaCircle color="green" />
                      ) : (
                        <FaCircle color="red" />
                      )}
                    </div>
                  </td>
                  <td className="text-center py-2 border-1 border-black">
                    {guest.room}
                  </td>
                  <td className="text-center py-2 border-1 border-black">
                    {guest.checkIn}
                  </td>
                  <td className="text-center py-2 border-1 border-black">
                    {guest.checkOut}
                  </td>
                  <td className="text-center py-2 border-1 border-black">
                    Action
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default page;
