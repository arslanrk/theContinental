import React from "react";
import Image from "next/image";
import { Card, CardBody, Progress } from "@nextui-org/react";
import { FaPlusCircle, FaShieldAlt, FaCircle, FaLocationArrow, FaPhoneVolume } from "react-icons/fa";
import { FaBarcode, FaStarHalfStroke } from "react-icons/fa6";
import {
  GiAk47U,
  GiBiceps,
  GiAngelWings,
  GiBrain,
  GiCardKingClubs,
  GiSeaDragon,
  GiWolfHowl,
  GiRaven,
  GiBullHorns,
  GiAnubis,
  GiAbbotMeeple,
} from "react-icons/gi";
import { AiOutlineEdit } from "react-icons/ai";
import { VscCompassActive } from "react-icons/vsc";

import Layout from "../components/Layout";
import assassin1 from "../../../public/assets/John_Wick.jpg";
import assassin2 from "../../../public/assets/Ballerina2.jpg";
import assassin3 from "../../../public/assets/securityKing.jpg";
import assassin4 from "../../../public/assets/security4.jpg";
import assassin5 from "../../../public/assets/security3.jpg";
import RatingComponent from "../components/RatingComponent";

const page = () => {
  const assassins = [
    {
      id: "1",
      name: "John Wick",
      image: assassin1,
      codeName: "Baba Yaga",
      Oaths: "Blood Oath",
      level: "Dragon",
      strength: 90,
      tactics: 90,
      Assignment: 96,
      agility: 90,
      totalMissions:"500",
      rating:5,
      location:"Unknow",
      contact:"+1 642-26-10", 
      isAvailable: false,
      price: "150",
    },
    {
      id: "2",
      name: "Anna De Arms",
      image: assassin2,
      codeName: "Bellrina",
      Oaths: "Blood Oath",
      strength: 70,
      tactics: 80,
      Assignment: 86,
      agility: 80,
      level: "Wolf",
      totalMissions:"300",
      rating:3,
      location:"LA",
      contact:"+1 305-05-68", 
      isAvailable: true,
      price: "100",
    },
    {
      id: "3",
      name: "Joe Ranold",
      image: assassin3,
      codeName: "King J",
      Oaths: "Blood Oath",
      strength: 90,
      tactics: 88,
      Assignment: 69,
      agility: 88,
      level: "Falcon",
      totalMissions:"320",
      rating:4,
      location:"Japan",
      contact:"+1 660-50-96", 
      isAvailable: true,
      price: "250",
    },
    {
      id: "4",
      name: "Christina Delreo",
      image: assassin4,
      codeName: "C Cross",
      Oaths: "Blood Oath",
      strength: 85,
      tactics: 80,
      Assignment: 76,
      agility: 78,
      level: "Panther",
      totalMissions:"106",
      rating:3,
      location:"Queens",
      contact:"+1 433-52-42", 
      isAvailable: false,
      price: "350",
    },
    {
      id: "5",
      name: "Chung Ja Hun",
      image: assassin5,
      codeName: "Jani",
      Oaths: "Blood Oath",
      strength: 80,
      tactics: 96,
      Assignment: 86,
      agility: 80,
      level: "Raven",
      totalMissions:"100",
      rating:3,
      location:"Osaka",
      contact:"+1 042-30-15", 
      isAvailable: false,
      price: "550",
    },
  ];

  const GetAssassinLevelIcon = (level: string) => {
    switch (level) {
      case "Dragon":
        return <GiSeaDragon size={20} />;
        break;
      case "Wolf":
        return <GiWolfHowl size={20} />;
        break;
      case "Falcon":
        return <GiAngelWings size={20} />;
        break;
      case "Panther":
        return <GiAnubis size={20} />;
        break;
      case "Raven":
        return <GiRaven />;
        break;
      default:
        break;
    }
  };

  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h1 className="font-heading text-2xl font-medium text-white">
            Assassins
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
        <div className="grid gap-5">
          {assassins.map((assassin) => {
            return (
              <Card className="py-4 bg-[#191C24]" key={assassin.id}>
                <CardBody className="pb-0 pt-2 px-4 flex-row gap-10 h-fit">
                  <Image
                    src={assassin.image}
                    width={200}
                    height={80}
                    className="object-fill rounded-xl h-[150px]"
                    objectFit="cover"
                    alt="room"
                  />
                  <div className="flex flex-col gap-5 w-[85%]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-cutomGold">
                        <span className="font-heading text-2xl font-medium">
                          {assassin.name}
                        </span>
                        {GetAssassinLevelIcon(assassin.level)}
                      </div>

                      <button>
                        <AiOutlineEdit size={30} color="#ababab" />
                      </button>
                    </div>
                    <div className="grid grid-cols-3 gap-5 w-full">
                      <div className="grid gap-x-5 gap-y-2">
                        <div className="flex items-center gap-2">
                          <label className="text-[#ababab] flex items-center gap-2 text-sm font-semibold font-heading w-[115px]">
                            <FaBarcode size={15} />
                            Code Name:
                          </label>
                          <span className="text-cutomGold text-sm font-medium font-body whitespace-nowrap uppercase italic">
                            {assassin.codeName}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <label className="text-[#ababab] flex items-center gap-2 text-sm font-semibold font-heading w-[115px]">
                            <FaShieldAlt size={15} />
                            Oath:
                          </label>
                          <span className="text-cutomGold text-sm font-medium font-body whitespace-nowrap">
                            {assassin.Oaths}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <label className="text-[#ababab] flex items-center gap-2 text-sm font-semibold font-heading w-[115px]">
                            <GiBullHorns size={15} />
                            Level:
                          </label>
                          <span className="text-cutomGold text-sm font-medium font-body">
                            {assassin.level}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <label className="text-[#ababab] flex items-center gap-2 text-sm font-semibold font-heading w-[115px]">
                            <GiAk47U size={15} />
                            Status:
                          </label>
                          {assassin.isAvailable == true ? (
                            <FaCircle size={15} color="green" />
                          ) : (
                            <FaCircle size={15} color="red" />
                          )}
                        </div>
                      </div>
                      <div className="grid gap-x-5 gap-y-2">
                        <div className="flex items-center gap-2">
                          <label className="text-[#ababab] flex items-center gap-2 text-sm font-semibold font-heading w-[100px]">
                            <VscCompassActive size={15} />
                            Stealth:
                          </label>
                          <div className="w-[150px]">
                            <Progress
                              aria-label="Loading..."
                              color="success"
                              value={assassin.Assignment}
                            />
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <label className="text-[#ababab] text-sm flex items-center gap-2 font-semibold font-heading w-[100px]">
                            <GiBiceps size={15} />
                            Strength:
                          </label>
                          <div className="w-[150px]">
                            <Progress
                              aria-label="Loading..."
                              color="danger"
                              value={assassin.strength}
                            />
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <label className="text-[#ababab] flex items-center gap-2 text-sm font-semibold font-heading w-[100px]">
                            <GiBrain size={15} />
                            Tactics:
                          </label>
                          <div className="w-[150px]">
                            <Progress
                              aria-label="Loading..."
                              color="warning"
                              value={assassin.tactics}
                            />
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <label className="text-[#ababab] flex items-center gap-2 text-sm font-semibold font-heading w-[100px]">
                            <GiCardKingClubs size={15} />
                            Agility:
                          </label>
                          <div className="w-[150px]">
                            <Progress
                              aria-label="Loading..."
                              color="secondary"
                              value={assassin.agility}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid gap-x-5 gap-y-2">
                        <div className="flex items-center gap-2">
                          <label className="text-[#ababab] flex items-center gap-2 text-sm font-semibold font-heading w-[165px]">
                            <GiAbbotMeeple size={15} />
                            Completed Missions:
                          </label>
                          <span className="text-cutomGold text-sm font-medium font-body whitespace-nowrap uppercase italic">
                            {assassin.totalMissions}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <label className="text-[#ababab] flex items-center gap-2 text-sm font-semibold font-heading w-[165px]">
                            <FaStarHalfStroke size={15} />
                            Reviews:
                          </label>
                          <RatingComponent rating={assassin.rating} />
                        </div>
                        <div className="flex items-center gap-2">
                          <label className="text-[#ababab] flex items-center gap-2 text-sm font-semibold font-heading w-[165px]">
                            <FaLocationArrow size={15} />
                            Last Location:
                          </label>
                          <span className="text-cutomGold text-sm font-medium font-body">
                            {assassin.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <label className="text-[#ababab] flex items-center gap-2 text-sm font-semibold font-heading w-[165px]">
                            <FaPhoneVolume size={15} />
                            Contact:
                          </label>
                          <span className="text-cutomGold text-sm font-medium font-body">
                            {assassin.contact}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default page;
