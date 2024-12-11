"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomLayout from "../components/CustomLayout";
import Icon from "../../public/assets/coin2-removebg.png";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { LoginSchemaValidation } from "@/schema/loginSchema";
const page = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = () => {};
  const subscriptionData = [
    {
      id: 1,
      name: "Standard Membership",
      price: "10 Coins / Night",
      heading:
        "Experience luxury with the essentials—comfort and discretion at every turn.",
      subscriptionItems: [
        "Access to hotel services, basic amenities, and concierge assistance.",
        "Complimentary welcome drink and access to the standard lounge.",
        "Eligibility for room upgrades, based on availability.",
      ],
    },
    {
      id: 2,
      name: "Gold Membership",
      price: "25 Coins / Night",
      heading:
        "Step up to a world of privileges, where exclusivity meets impeccable service.",
      subscriptionItems: [
        "Priority bookings for rooms and services, with access to luxury suites.",
        "Invitations to exclusive hotel-hosted events and fight nights.",
        "Enhanced concierge services for specialized requests.",
        "Access to private lounges and dining areas.",
      ],
    },
    {
      id: 3,
      name: "Platinum Membership",
      price: " 50 Coins / Night",
      heading:
        "Indulge in the pinnacle of luxury, with unrivaled access and top-tier protection.",
      subscriptionItems: [
        "Full access to all hotel services, including top-tier security arrangements.",
        "Complimentary upgrades to VIP rooms and suites.",
        "Invitations to High-Table events and private fight nights.",
        "Personal concierge and discreet 24/7 assistance for special requirements.",
      ],
    },
    {
      id: 4,
      name: "Elite Membership",
      price: "100 Coins / Night",
      heading:
        "Reserved for the most distinguished—where power, privacy, and prestige converge.",
      subscriptionItems: [
        "Available exclusively for High Table members and special guests.",
        "Includes personal bodyguards and custom security arrangements.",
        "Private dining with renowned chefs and access to restricted areas.",
        "Invitation to High Table-only gatherings and ceremonial events.",
      ],
    },
  ];

  return (
    <CustomLayout>
      <div className="flex flex-col">
        <div className="flex justify-between items-center h-[92vh] membershipBg">
          <div className="w-full flex flex-col justify-center items-center gap-5 z-[1]">
            <p className="text-cutomGold font-heading font-bold text-3xl textshadow text-center">
              Become a Member of The Continental.
            </p>
            <p className="text-cutomGold font-heading font-light text-3xl textshadow text-center">
              Privilege, Prestige, and Protection – Experience the Highest Level
              of Service in the Underworld.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 p-10 mt-10">
          <h2 className="text-cutomGold font-heading font-bold text-3xl text-center">
            Exclusive Membership Benefits
          </h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            <Card className="py-4 bg-[#0000]">
              <CardHeader className="py-2">
                <img
                  src="/assets/Concierge1.jpg"
                  className="w-full h-[400px]  rounded-lg"
                />
              </CardHeader>
              <CardBody className="pb-0 pt-2 px-4 flex-col items-center h-fit">
                <span className="text-cutomGold font-heading text-lg">
                  Access to the Underworld Concierge
                </span>
                <p className="text-cutomGold font-body text-base text-center mt-3">
                  Unique services available only to members, including coin
                  exchange and favors brokerage.
                </p>
              </CardBody>
            </Card>
            <Card className="py-4 bg-[#0000]">
              <CardHeader className="py-2">
                <img
                  src="/assets/bestroom.jpg"
                  className="w-full h-[400px]  rounded-lg"
                />
              </CardHeader>
              <CardBody className="pb-0 pt-2 px-4 flex-col items-center h-fit">
                <span className="text-cutomGold font-heading text-lg">
                  Priority Room Reservations
                </span>
                <p className="text-cutomGold font-body text-base text-center mt-3">
                  Early access to booking luxurious suites, including special
                  rooms like the Diplomat’s Refuge and Assassin’s Retreat.
                </p>
              </CardBody>
            </Card>
            <Card className="py-4 bg-[#0000]">
              <CardHeader className="py-2">
                <img
                  src="/assets/event4.jpg"
                  className="w-full h-[400px]  rounded-lg"
                />
              </CardHeader>
              <CardBody className="pb-0 pt-2 px-4 flex-col items-center h-fit">
                <span className="text-cutomGold font-heading text-lg">
                  Exclusive Event Invitations
                </span>
                <p className="text-cutomGold font-body text-base text-center mt-3">
                  Invitations to private fight nights, High-Table meetings, and
                  other underground events.
                </p>
              </CardBody>
            </Card>
            <Card className="py-4 bg-[#0000]">
              <CardHeader className="py-2">
                <img
                  src="/assets/member2.jpg"
                  className="w-full h-[400px] rounded-lg"
                />
              </CardHeader>
              <CardBody className="pb-0 pt-2 px-4 flex-col items-center h-fit">
                <span className="text-cutomGold font-heading text-lg">
                  Personalized Services
                </span>
                <p className="text-cutomGold font-body text-base text-center mt-3">
                  Priority access to private chefs, secure transportation, and
                  specialized security.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
        <h2 className="text-cutomGold font-heading font-bold mt-10  text-3xl text-center">
          Choose a plan that's right for you.
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 p-10">
          {subscriptionData.map((memebership) => {
            return (
              <div
                key={memebership.id}
                className="bg-transparent cardMemberWrapper cursor-pointer customBoxShadow rounded-lg p-5 gap-5 flex flex-col justify-between border-1 border-[#f3cc8a]"
              >
                <div className="flex flex-col gap-3">
                  <h5 className="text-white text-base font-heading font-bold">
                    {memebership.name}
                  </h5>

                  <div className="flex gap-3">
                    <div className="rounded-full ring-2 ring-[#f3cc8a] animate-pulse">
                      <Image src={Icon} width={30} height={20} alt="coin" />
                    </div>
                    <h2 className="text-cutomGold text-lg font-body font-bold">
                      {memebership.price}
                    </h2>
                  </div>
                  <p className="text-cutomGold text-sm font-body">
                    {memebership.heading}
                  </p>

                  <div className="flex flex-col gap-2">
                    {memebership.subscriptionItems.map((items) => {
                      return (
                        <div className="flex items-start gap-2">
                          <FaCheck color="#f3cc8a" size={13} />
                          <span className="text-cutomGold text-xs">
                            {items}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-8 px-44 py-10 mt-10">
          <h2 className="text-cutomGold font-heading font-bold text-3xl text-center mb-5">
            Membership Requirments
          </h2>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
            <Card className="py-4 bg-[#0000]">
              <CardHeader className="py-2">
                <img
                  src="/assets/invitation.jpg"
                  className="w-full h-[400px]  rounded-lg"
                />
              </CardHeader>
              <CardBody className="pb-0 pt-2 px-4 flex-col items-center h-fit">
                <span className="text-cutomGold font-heading text-lg">
                  Invitation-Only Access
                </span>
                <p className="text-cutomGold font-body text-base text-center mt-3">
                  An invitation from an existing member or sponsorship by
                  someone of recognized status.
                </p>
              </CardBody>
            </Card>
            <Card className="py-4 bg-[#0000]">
              <CardHeader className="py-2">
                <img
                  src="/assets/coin3.png"
                  className="w-full h-[400px]  rounded-lg"
                />
              </CardHeader>
              <CardBody className="pb-0 pt-2 px-4 flex-col items-center h-fit">
                <span className="text-cutomGold font-heading text-lg">
                  Initiation Fee
                </span>
                <p className="text-cutomGold font-body text-base text-center mt-3">
                  To become a member, an initiation fee must be paid, valued in
                  Continental Coins.
                </p>
              </CardBody>
            </Card>
            <Card className="py-4 bg-[#0000]">
              <CardHeader className="py-2">
                <img
                  src="/assets/book.jpg"
                  className="w-full h-[400px]  rounded-lg"
                />
              </CardHeader>
              <CardBody className="pb-0 pt-2 px-4 flex-col items-center h-fit">
                <span className="text-cutomGold font-heading text-lg">
                  Adherence to The Continental Code
                </span>
                <p className="text-cutomGold font-body text-base text-center mt-3">
                  All members must pledge to uphold the rules and traditions of
                  The Continental.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
        {/* <div className="parallax flex justify-end items-center h-[80vh] pr-12">
          <div className="bg-[#1b1b1b] rounded-lg lg:w-[35%] md:w-[50%] w-[98%]">
            <Formik
              validationSchema={LoginSchemaValidation}
              initialValues={initialValues}
              onSubmit={handleSubmit}
            >
              <Form className="space-y-6 w-full p-[50px]">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-cutomGold font-body font-bold"
                  >
                    Check In
                  </label>
                  <Field
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    className="w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                  <ErrorMessage
                    name="checkIn"
                    component="div"
                    className="text-[#ff0000] font-body font-bold text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-cutomGold font-body font-bold"
                  >
                    No. of Guests
                  </label>
                  <Field
                    type="text"
                    id="checkIn"
                    name="checkIn"
                    className="w-full px-4 py-2 mt-2 bg-gray-800 border text-white border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gold-500"
                    placeholder="Enter no."
                  />
                  <ErrorMessage
                    name="checkIn"
                    component="div"
                    className="text-[#ff0000] font-body font-bold text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-500 text-white font-semibold py-2 uppercase px-4 rounded hover:bg-gold-400 transition-colors"
                >
                  Book Now
                </button>
              </Form>
            </Formik>
          </div>
        </div>  */}
      </div>
    </CustomLayout>
  );
};

export default page;
