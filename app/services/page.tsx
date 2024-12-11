"use client";

import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";

import CustomLayout from "../components/CustomLayout";
import Coin from "../../public/assets/coinside2.png";
import TimeLine from "../components/TimeLine";

const page = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <CustomLayout>
      <div className="flex flex-col">
        <div className="flex justify-between items-center h-[92vh] aboutUsbg serviceMain">
          <div className="w-full flex flex-col justify-center items-center gap-5 z-[1]">
            <div className="rounded-full ring-2 ring-[#f3cc8a] animate-pulse">
              <Image
                src={Coin}
                alt="Coin"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
            <p className="text-cutomGold font-heading font-bold text-3xl textshadow text-center">
              Unmatched Services for the Underworld Elite
            </p>
            <p className="text-cutomGold font-heading font-light text-3xl textshadow text-center">
              Where Business and Pleasure Meet – In Absolute Secrecy.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 p-10">
          <h2 className="text-cutomGold font-heading font-bold text-3xl text-center">
            Concierge Services
          </h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            <Card className="py-4 bg-[#000]">
              <CardHeader className="py-2">
                <img
                  src="/assets/Concierge1.jpg"
                  className="w-full h-[400px] rounded-lg"
                />
              </CardHeader>
              <CardBody className="pb-0 pt-2 px-4 flex-col items-center h-fit">
                <span className="text-cutomGold font-heading text-lg">
                  Underworld Concierge
                </span>
                <p className="text-cutomGold font-body text-base text-center mt-3">
                  Skilled staff available to discreetly handle any
                  unconventional requests, such as locating hard-to-find
                  resources or setting up clandestine meetings.
                </p>
              </CardBody>
            </Card>
            <Card className="py-4 bg-[#000]">
              <CardHeader className="py-2">
                <img
                  src="/assets/Concierge2.jpg"
                  className="w-full h-[400px] rounded-lg"
                />
              </CardHeader>
              <CardBody className="pb-0 pt-2 px-4 flex-col items-center h-fit">
                <span className="text-cutomGold font-heading text-lg">
                  Coin Exchange
                </span>
                <p className="text-cutomGold font-body text-base text-center mt-3">
                  In-house service for converting Continental Coins into goods,
                  services, or special favors.
                </p>
              </CardBody>
            </Card>
            <Card className="py-4 bg-[#000]">
              <CardHeader className="py-2">
                <img
                  src="/assets/Concierge3.jpg"
                  className="w-full h-[400px] rounded-lg"
                />
              </CardHeader>
              <CardBody className="pb-0 pt-2 px-4 flex-col items-center h-fit">
                <span className="text-cutomGold font-heading text-lg">
                  Favors Brokerage
                </span>
                <p className="text-cutomGold font-body text-base text-center mt-3">
                  Facilitating exchanges of favors between guests, ensuring that
                  debts are honored in accordance with the underworld’s
                  unwritten code.
                </p>
              </CardBody>
            </Card>
            <Card className="py-4 bg-[#000]">
              <CardHeader className="py-2">
                <img
                  src="/assets/WeaponStorage.jpg"
                  className="w-full h-[400px] rounded-lg"
                />
              </CardHeader>
              <CardBody className="pb-0 pt-2 px-4 flex-col items-center h-fit">
                <span className="text-cutomGold font-heading text-lg">
                  Weaponry & Gear Procurement
                </span>
                <p className="text-cutomGold font-body text-base text-center mt-3">
                  Our concierge can discreetly source and deliver specialized
                  weaponry, tactical gear, or bespoke armor.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="flex flex-col gap-8 p-10">
          <h2 className="text-cutomGold font-heading font-bold text-3xl text-center">
            Specialized Security Services
          </h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            <Card className="py-4 bg-[#0000]">
              <CardHeader className="py-2">
                <img
                  src="/assets/JohnWick.jpg"
                  className="w-full h-[400px]  rounded-lg"
                />
              </CardHeader>
              <CardBody className="pb-0 pt-2 px-4 flex-col items-center h-fit">
                <span className="text-cutomGold font-heading text-lg">
                  Sanctuary Assurance
                </span>
                <p className="text-cutomGold font-body text-base text-center mt-3">
                  Guarantees of neutral territory within hotel grounds, enforced
                  by The Continental’s rules. Violations are met with immediate
                  and uncompromising consequences.
                </p>
              </CardBody>
            </Card>
            <Card className="py-4 bg-[#0000]">
              <CardHeader className="py-2">
                <img
                  src="/assets/Ballerina2.jpg"
                  className="w-full h-[400px]  rounded-lg"
                />
              </CardHeader>
              <CardBody className="pb-0 pt-2 px-4 flex-col items-center h-fit">
                <span className="text-cutomGold font-heading text-lg">
                  High-Value Target Protection
                </span>
                <p className="text-cutomGold font-body text-base text-center mt-3">
                  For guests requiring extra measures, teams of highly-trained
                  operatives provide round-the-clock monitoring and protection.
                </p>
              </CardBody>
            </Card>
            <Card className="py-4 bg-[#0000]">
              <CardHeader className="py-2">
                <img
                  src="/assets/security1.jpg"
                  className="w-full h-[400px]  rounded-lg"
                />
              </CardHeader>
              <CardBody className="pb-0 pt-2 px-4 flex-col items-center h-fit">
                <span className="text-cutomGold font-heading text-lg">
                  Emergency Extraction Protocols
                </span>
                <p className="text-cutomGold font-body text-base text-center mt-3">
                  Covert plans to ensure guests' safe evacuation during
                  high-risk situations, including secure underground passages
                  and hidden exits.
                </p>
              </CardBody>
            </Card>
            <Card className="py-4 bg-[#0000]">
              <CardHeader className="py-2">
                <img
                  src="/assets/securityKing.jpg"
                  className="w-full h-[400px] rounded-lg"
                />
              </CardHeader>
              <CardBody className="pb-0 pt-2 px-4 flex-col items-center h-fit">
                <span className="text-cutomGold font-heading text-lg">
                  Personalized Threat Assessment
                </span>
                <p className="text-cutomGold font-body text-base text-center mt-3">
                  Comprehensive evaluations of potential risks to guests,
                  including tailored strategies for mitigating threats.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="flex flex-col gap-8 p-10">
          <h2 className="text-cutomGold font-heading font-bold text-3xl text-center">
            Event Hosting
          </h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            <Card className="py-4 bg-[#0000]">
              <CardHeader className="py-2">
                <img
                  src="/assets/Event1.jpg"
                  className="w-full h-[400px]  rounded-lg"
                />
              </CardHeader>
              <CardBody className="pb-0 pt-2 px-4 flex-col items-center h-fit">
                <span className="text-cutomGold font-heading text-lg">
                  High-Table Meetings
                </span>
                <p className="text-cutomGold font-body text-base text-center mt-3">
                  Secure arrangements for gatherings involving influential
                  members of the High Table.
                </p>
              </CardBody>
            </Card>
            <Card className="py-4 bg-[#0000]">
              <CardHeader className="py-2">
                <img
                  src="/assets/event2.jpg"
                  className="w-full h-[400px]  rounded-lg"
                />
              </CardHeader>
              <CardBody className="pb-0 pt-2 px-4 flex-col items-center h-fit">
                <span className="text-cutomGold font-heading text-lg">
                  Black Market Bazaars
                </span>
                <p className="text-cutomGold font-body text-base text-center mt-3">
                  Acquire rare artifacts, valuable items, or unique services
                  through exclusive auctions or private exchanges
                </p>
              </CardBody>
            </Card>
            <Card className="py-4 bg-[#0000]">
              <CardHeader className="py-2">
                <img
                  src="/assets/OathCeremony.jpg"
                  className="w-full h-[400px]  rounded-lg"
                />
              </CardHeader>
              <CardBody className="pb-0 pt-2 px-4 flex-col items-center h-fit">
                <span className="text-cutomGold font-heading text-lg">
                  Blood Oath Ceremony
                </span>
                <p className="text-cutomGold font-body text-base text-center mt-3">
                  Specialized rooms and staff to oversee the formalization of
                  Blood Oaths, adhering strictly to tradition.
                </p>
              </CardBody>
            </Card>
            <Card className="py-4 bg-[#0000]">
              <CardHeader className="py-2">
                <img
                  src="/assets/fightNight.jpg"
                  className="w-full h-[400px] rounded-lg"
                />
              </CardHeader>
              <CardBody className="pb-0 pt-2 px-4 flex-col items-center h-fit">
                <span className="text-cutomGold font-heading text-lg">
                  Exclusive Fight Nights
                </span>
                <p className="text-cutomGold font-body text-base text-center mt-3">
                  Privately-hosted underground combat events for those seeking
                  to settle disputes or simply enjoy the spectacle.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
        <TimeLine />
        <div className="flex justify-center items-center w-full mt-14 mb-6">
          <Button
            onPress={onOpen}
            className="bg-[#f3cc8a] text-black font-body"
          >
            Book a Service
          </Button>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="2xl"
        className="bg-[#1b1b1b]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-cutomGold font-heading">
                Book a Service
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col gap-1 w-[46%]">
                      <label className="block text-sm text-cutomGold font-heading font-bold">
                        Guest Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gold-500"
                      />
                    </div>
                    <div className="flex flex-col gap-1  w-[46%]">
                      <label className="block text-sm text-cutomGold font-heading font-bold">
                        Room Number
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gold-500"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col gap-1  w-[46%]">
                      <label className="block text-sm text-cutomGold font-heading font-bold">
                        Service Requested
                      </label>
                      <select className="w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gold-500">
                        <option value={""}>-- Select a service --</option>
                        <option value={""}>Underworld Concierge</option>
                        <option value={""}>Coin Exchange</option>
                        <option value={""}>Favors Brokerage</option>
                        <option value={""}>Weaponry & Gear Procurement</option>
                        <option value={""}>Sanctuary Assurance</option>
                        <option value={""}>High-Value Target Protection</option>
                        <option value={""}>
                          Emergency Extraction Protocols
                        </option>
                        <option value={""}>
                          Personalized Threat Assessment
                        </option>
                        <option value={""}>High-Table Meetings</option>
                        <option value={""}> Black Market Bazaars</option>
                        <option value={""}>Blood Oath Ceremony</option>
                        <option value={""}>Exclusive Fight Nights</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1  w-[46%]">
                      <label className="block text-sm text-cutomGold font-heading font-bold">
                        Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gold-500"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-1  w-[46%]">
                      <input type="checkbox" />
                      <label className="block text-sm text-cutomGold font-heading font-bold">
                        Discrete Mode
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="block text-sm text-cutomGold font-heading font-bold">
                      Additional Requests
                    </label>
                    <textarea className="w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gold-500" />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </CustomLayout>
  );
};

export default page;
