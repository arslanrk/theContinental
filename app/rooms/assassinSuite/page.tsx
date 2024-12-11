"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaUserMd, FaConciergeBell } from "react-icons/fa";
import { GiPistolGun } from "react-icons/gi";
import { MdImportantDevices } from "react-icons/md";
import { Formik, Form, Field, ErrorMessage } from "formik";

import CustomLayout from "@/app/components/CustomLayout";
import { LoginSchemaValidation } from "@/schema/loginSchema";
import BookReview from "@/app/components/BookReview";

const page = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = () => {};
  const Eminites = [
    {
      id: "1",
      title: "Encrypted Communication Devices",
      content:
        "Secure devices for untraceable conversations and private exchanges.",
    },
    {
      id: "2",
      title: "Stealth Concierge",
      content:
        "Staff specialized in handling discreet requests, such as decoy transport or untraceable purchases.",
    },
    {
      id: "3",
      title: "In-Room Armory Service",
      content:
        "Access to specialized equipment and supplies for rapid tactical preparation.",
    },
    {
      id: "4",
      title: "Emergency Medical",
      content:
        "State-of-the-art medical supplies and 24/7 emergency assistance available.",
    },
  ];
  const Title = "Assassin's Retreat Suite";
  const Review = `A secluded haven for elite assassins, offering luxury and
        unmatched security, designed for rest, planning, and discretion.`;
  const Rate = "100";

  return (
    <>
      <CustomLayout>
        <div className="w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            className="ImageSliderMainWrapper"
          >
            <SwiperSlide>
              <div className="bg-[url(/assets/assassinMain.jpg)] bg-cover bg-no-repeat relative w-full h-[90vh] flex items-center roomSingleComponentWrapper">
                <div className="flex flex-col gap-2 ml-[10%]">
                  <h4 className="text-cutomGold font-heading text-[60px] font-normal">
                    Assassin's Retreat Suite
                  </h4>
                  <span className="text-cutomGold font-heading text-[20px] font-normal">
                    A Haven for the Elite - Where Comfort Meets Covert.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/assets/assassinMain2.jpg"
                alt="Slide 2"
                className="w-full lg:h-auto h-screen"
              />
            </SwiperSlide>
          </Swiper>
          <div className="w-full lg:p-40 p-3">
            <div className="flex flex-col gap-6">
              <div className="grid lg:grid-cols-3 gap-6 lg:h-[450px]">
                <div className="lg:h-full h-[45vh] flex bg-[url(/assets/AssassinBlackTheme.jpg)] bg-cover bg-no-repeat relative cursor-pointer roomCardWrapper">
                  <div className="roomOverlay">
                    <div className="flex flex-col gap-3">
                      <p className="text-cutomGold font-heading text-justify">
                        Soundproofed Rooms
                      </p>
                      <div className="cardBordered"></div>
                      <p className="text-cutomGold font-heading text-justify text-sm">
                        Ensures complete discretion for meetings, conversations,
                        or simply unwinding without disturbance.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:h-full h-[45vh] flex bg-[url(/assets/WeaponStorage.jpg)] bg-cover bg-no-repeat relative cursor-pointer roomCardWrapper">
                  <div className="roomOverlay">
                    <div className="flex flex-col gap-3">
                      <p className="text-cutomGold font-heading text-justify">
                        Secure Weapon Storage
                      </p>
                      <div className="cardBordered"></div>
                      <p className="text-cutomGold font-heading text-justify text-sm">
                        A hidden, high-tech vault within the room for safely
                        storing firearms, gadgets, or valuable items.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:h-full h-[45vh] flex bg-[url(/assets/Service-room1.jpg)] bg-cover bg-no-repeat relative cursor-pointer roomCardWrapper">
                  <div className="roomOverlay">
                    <div className="flex flex-col gap-3">
                      <p className="text-cutomGold font-heading text-justify">
                        Customizable Lighting
                      </p>
                      <div className="cardBordered"></div>
                      <p className="text-cutomGold font-heading text-justify text-sm">
                        Ambient lighting controls for adapting the room to
                        different moods and needs, including "Stealth Mode" for
                        dimmed illumination.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-6 lg:h-[350px] h-screen">
                <div className="flex bg-[url(/assets/UndergroundTunnel.jpg)] bg-cover bg-center bg-no-repeat relative cursor-pointer roomCardWrapper">
                  <div className="roomOverlay">
                    <div className="flex flex-col gap-3">
                      <p className="text-cutomGold font-heading text-justify">
                        Emergency Escape Route
                      </p>
                      <div className="cardBordered"></div>
                      <p className="text-cutomGold font-heading text-justify text-sm">
                        An exclusive exit for swift escapes or private
                        departures.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex bg-[url(/assets/gym.jpg)] bg-cover bg-bottom bg-no-repeat relative cursor-pointer roomCardWrapper">
                  <div className="roomOverlay">
                    <div className="flex flex-col gap-3">
                      <p className="text-cutomGold font-heading text-justify">
                        In-Room Training Space
                      </p>
                      <div className="cardBordered"></div>
                      <p className="text-cutomGold font-heading text-justify text-sm">
                        A concealed area equipped with essential gear for
                        training or practice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-[30px] py-[40px] flex justify-center items-center flex-col bg-[#141414]">
            <p className="text-center text-cutomGold font-heading text-2xl textshadow">
              Exclusive Eminites
            </p>
            <div className="flex items-center flex-wrap gap-5 mt-16">
              {Eminites.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex flex-col justify-center items-center gap-2 rounded-lg p-5 border-1 border-[#f3cc8a] lg:w-[300px] w-full h-[200px]"
                  >
                    {(() => {
                      switch (item.id) {
                        case "1":
                          return (
                            <MdImportantDevices color="#f3cc8a" size={50} />
                          );
                        case "2":
                          return <FaConciergeBell color="#f3cc8a" size={50} />;
                        case "3":
                          return <GiPistolGun color="#f3cc8a" size={50} />;
                        case "4":
                          return <FaUserMd color="#f3cc8a" size={50} />;
                        default:
                          return (
                            <MdImportantDevices color="#f3cc8a" size={50} />
                          );
                      }
                    })()}
                    <p className="text-cutomGold font-heading text-medium text-center">
                      {item.title}
                    </p>
                    <p className="text-white font-body text-xs text-center">
                      {item.content}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="parallax">
            <div className="flex justify-center lg:gap-[15%] gap-10 lg:flex-row flex-col items-center lg:h-[550px] h-screen">
              <BookReview Title={Title} Review={Review} Rate={Rate} />
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
            </div>
          </div>
        </div>
      </CustomLayout>
    </>
  );
};

export default page;
