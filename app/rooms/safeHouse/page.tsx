"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaUserMd, FaConciergeBell } from "react-icons/fa";
import { GiPistolGun, GiWineBottle } from "react-icons/gi";
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
      title: "Emergency Medical Services",
      content:
        "On-call medics specializing in discreet, non-reportable treatment.",
    },
    {
      id: "2",
      title: "Secure Communication Hub",
      content:
        "Encrypted communication devices for contacting associates or arranging missions.",
    },
    {
      id: "3",
      title: "Stocked Mini Bar",
      content:
        "Includes essential survival gear and weaponry behind a false minibar front.",
    },
    {
      id: "4",
      title: "Private Armory Access",
      content:
        "Quick access to The Continental’s armory for personalized equipment requests.",
    },
  ];
  const Title = "Safe House Quarters";
  const Review = `A discreet and fortified hideaway, providing a perfect blend of comfort and security for those seeking refuge or laying low in style.`;
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
              <div className="bg-[url(/assets/safeHouseMain.jpg)] bg-cover bg-no-repeat bg-center relative w-full h-[90vh] flex items-center roomSingleComponentWrapper">
                <div className="flex flex-col gap-2 ml-[10%]">
                  <h4 className="text-cutomGold font-heading text-[60px] font-normal">
                    Safe House Quarters
                  </h4>
                  <span className="text-cutomGold font-heading text-[20px] font-normal">
                    Secure Sanctuary – Where Safety Meets Comfort.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/assets/safehousemain2.jpg"
                alt="Slide 2"
                className="w-full lg:h-full h-screen"
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
                        Reinforced Walls and Doors
                      </p>
                      <div className="cardBordered"></div>
                      <p className="text-cutomGold font-heading text-justify text-sm">
                        State-of-the-art construction with bulletproof materials
                        for enhanced security.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:h-full h-[45vh] flex bg-[url(/assets/SmartHome.jpg)] bg-cover bg-no-repeat relative cursor-pointer roomCardWrapper">
                  <div className="roomOverlay">
                    <div className="flex flex-col gap-3">
                      <p className="text-cutomGold font-heading text-justify">
                        Emergency Alert System
                      </p>
                      <div className="cardBordered"></div>
                      <p className="text-cutomGold font-heading text-justify text-sm">
                        Built-in alert mechanisms for rapid response during
                        high-threat situations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:h-full h-[45vh] flex bg-[url(/assets/PanicRoom.jpg)] bg-cover bg-no-repeat relative cursor-pointer roomCardWrapper">
                  <div className="roomOverlay">
                    <div className="flex flex-col gap-3">
                      <p className="text-cutomGold font-heading text-justify">
                        Secure Panic Room
                      </p>
                      <div className="cardBordered"></div>
                      <p className="text-cutomGold font-heading text-justify text-sm">
                        Hidden panic room equipped with supplies and
                        communication devices for emergencies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-6 lg:h-[350px] h-screen">
                <div className="flex bg-[url(/assets/TheaterRoom.jpg)] bg-cover bg-center bg-no-repeat relative cursor-pointer roomCardWrapper">
                  <div className="roomOverlay">
                    <div className="flex flex-col gap-3">
                      <p className="text-cutomGold font-heading text-justify">
                        Soundproof Entertainment System
                      </p>
                      <div className="cardBordered"></div>
                      <p className="text-cutomGold font-heading text-justify text-sm">
                        In-room entertainment with soundproofing to ensure
                        privacy.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex bg-[url(/assets/luxury-penthouse.jpg)] bg-cover bg-bottom bg-no-repeat relative cursor-pointer roomCardWrapper">
                  <div className="roomOverlay">
                    <div className="flex flex-col gap-3">
                      <p className="text-cutomGold font-heading text-justify">
                        Anti-Surveillance Features
                      </p>
                      <div className="cardBordered"></div>
                      <p className="text-cutomGold font-heading text-justify text-sm">
                        Embedded technology to detect and neutralize monitoring
                        equipment.
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
                          return <FaUserMd color="#f3cc8a" size={50} />;
                        case "2":
                          return (
                            <MdImportantDevices color="#f3cc8a" size={50} />
                          );
                        case "3":
                          return <GiWineBottle color="#f3cc8a" size={50} />;
                        case "4":
                          return <GiPistolGun color="#f3cc8a" size={50} />;
                        default:
                          return <FaUserMd color="#f3cc8a" size={50} />;
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
