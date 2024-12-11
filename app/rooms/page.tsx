import { GiCrownCoin } from "react-icons/gi";
import { IoIosBed } from "react-icons/io";
import { FaBath } from "react-icons/fa";
import { MdFreeBreakfast } from "react-icons/md";
import { GiTowel } from "react-icons/gi";
import { IoIosArrowRoundForward } from "react-icons/io";
import CustomLayout from "@/app/components/CustomLayout";
import { Link } from "@nextui-org/react";

const page = () => {

  return (
    <>
      <CustomLayout>
        <div className="">
          <div className="romsSuitesWrapper w-full lg:h-[60vh] h-svh flex items-center">
            <div className="flex flex-col gap-2 ml-[10%]">
              <span className="text-cutomGold font-body text-[15px]">
                The Continenetal
              </span>
              <h4 className="text-cutomGold font-heading text-[60px] font-normal">
                Room & Suites
              </h4>
            </div>
          </div>
          <div className="w-full lg:p-40 p-3">
            <div className="flex flex-col gap-6">
              <div className="grid lg:grid-cols-3 gap-6 grid-cols-1 lg:h-[450px]">
                <div className="lg:h-full h-[40vh] flex bg-[url(/assets/AssassinBlackTheme.jpg)] bg-cover bg-no-repeat relative cursor-pointer roomCardWrapper">
                  <div className="flex flex-col justify-between items-center">
                    <div className="flex justify-end mt-4 mr-4 h-fit w-full">
                      <Link
                        href="/rooms/assassinSuite"
                        className="border-1 border-cutomGold writingMode text-cutomGold pt-3 px-1 uppercase blurFilter"
                      >
                        Book
                      </Link>
                    </div>
                  </div>
                  <div className="roomOverlay">
                    <div className="flex flex-col justify-between">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <GiCrownCoin color="#f3cc8a" />
                          <span className="text-cutomGold font-body">
                            100 / Night
                          </span>
                        </div>
                        <p className="text-cutomGold font-heading text-justify">
                          Assassin's Retreat Suite
                        </p>
                        <div className="cardBordered"></div>
                      </div>

                      <div className="flex justify-between items-center w-full  mt-5">
                        <div className="flex items-center gap-3">
                          <IoIosBed color="#f3cc8a" />
                          <FaBath color="#f3cc8a" />
                          <MdFreeBreakfast color="#f3cc8a" />
                          <GiTowel color="#f3cc8a" />
                        </div>
                        <Link
                          href="/rooms/assassinSuite"
                          className="border-0 flex items-center gap-2"
                        >
                          <span className="text-cutomGold font-body text-medium">
                            Detail
                          </span>
                          <IoIosArrowRoundForward color="#f3cc8a" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:h-full h-[40vh] flex bg-[url(/assets/Service-room2.jpg)] bg-cover bg-no-repeat relative cursor-pointer roomCardWrapper">
                  <div className="flex flex-col justify-between items-center">
                    <div className="flex justify-end mt-4 mr-4 h-fit w-full">
                      <Link
                        href="/rooms/diplomatReuge"
                        className="border-1 border-cutomGold writingMode text-cutomGold pt-3 px-1 uppercase blurFilter"
                      >
                        Book
                      </Link>
                    </div>
                  </div>
                  <div className="roomOverlay">
                    <div className="flex flex-col justify-between">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <GiCrownCoin color="#f3cc8a" />
                          <span className="text-cutomGold font-body">
                            150 / Night
                          </span>
                        </div>
                        <p className="text-cutomGold font-heading text-justify">
                          Diplomat's Refuge
                        </p>
                        <div className="cardBordered"></div>
                      </div>

                      <div className="flex justify-between items-center w-full  mt-5">
                        <div className="flex items-center gap-3">
                          <IoIosBed color="#f3cc8a" />
                          <FaBath color="#f3cc8a" />
                          <MdFreeBreakfast color="#f3cc8a" />
                          <GiTowel color="#f3cc8a" />
                        </div>
                        <Link
                          href="/rooms/diplomatReuge"
                          className="border-0 flex items-center gap-2"
                        >
                          <span className="text-cutomGold font-body text-medium">
                            Detail
                          </span>
                          <IoIosArrowRoundForward color="#f3cc8a" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:h-full h-[40vh] flex bg-[url(/assets/Service-room1.jpg)] bg-cover bg-no-repeat relative cursor-pointer roomCardWrapper">
                  <div className="flex flex-col justify-between items-center">
                    <div className="flex justify-end mt-4 mr-4 h-fit w-full">
                      <Link
                        href="/rooms/safeHouse"
                        className="border-1 border-cutomGold writingMode text-cutomGold pt-3 px-1 uppercase blurFilter"
                      >
                        Book
                      </Link>
                    </div>
                  </div>
                  <div className="roomOverlay">
                    <div className="flex flex-col justify-between">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <GiCrownCoin color="#f3cc8a" />
                          <span className="text-cutomGold font-body">
                            100 / Night
                          </span>
                        </div>
                        <p className="text-cutomGold font-heading text-justify">
                          Safe House Quarters
                        </p>
                        <div className="cardBordered"></div>
                      </div>

                      <div className="flex justify-between items-center w-full  mt-5">
                        <div className="flex items-center gap-3">
                          <IoIosBed color="#f3cc8a" />
                          <FaBath color="#f3cc8a" />
                          <MdFreeBreakfast color="#f3cc8a" />
                          <GiTowel color="#f3cc8a" />
                        </div>
                        <Link
                          href="/rooms/safeHouse"
                          className="border-0 flex items-center gap-2"
                        >
                          <span className="text-cutomGold font-body text-medium">
                            Detail
                          </span>
                          <IoIosArrowRoundForward color="#f3cc8a" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-6 lg:h-[350px] h-screen">
                <div className="flex bg-[url(/assets/PresidentialSuite.jpg)] bg-cover bg-bottom bg-no-repeat relative cursor-pointer roomCardWrapper">
                  <div className="flex flex-col justify-between items-center">
                    <div className="flex justify-end mt-4 mr-4 h-fit w-full">
                      <Link
                        href="/rooms/highTableResidence"
                        className="border-1 border-cutomGold writingMode text-cutomGold pt-3 px-1 uppercase blurFilter"
                      >
                        Book
                      </Link>
                    </div>
                  </div>
                  <div className="roomOverlay">
                    <div className="flex flex-col justify-between">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <GiCrownCoin color="#f3cc8a" />
                          <span className="text-cutomGold font-body">
                            250 / Night
                          </span>
                        </div>
                        <p className="text-cutomGold font-heading text-justify">
                          High Table Residence
                        </p>
                        <div className="cardBordered"></div>
                      </div>

                      <div className="flex justify-between items-center w-full  mt-5">
                        <div className="flex items-center gap-3">
                          <IoIosBed color="#f3cc8a" />
                          <FaBath color="#f3cc8a" />
                          <MdFreeBreakfast color="#f3cc8a" />
                          <GiTowel color="#f3cc8a" />
                        </div>
                        <Link
                          href="/rooms/highTableResidence"
                          className="border-0 flex items-center gap-2"
                        >
                          <span className="text-cutomGold font-body text-medium">
                            Detail
                          </span>
                          <IoIosArrowRoundForward color="#f3cc8a" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex bg-[url(/assets/luxury-penthouse.jpg)] bg-cover bg-bottom bg-no-repeat relative cursor-pointer roomCardWrapper">
                  <div className="flex flex-col justify-between items-center">
                    <div className="flex justify-end mt-4 mr-4 h-fit w-full">
                      <Link
                        href="/rooms/continentalPenthouse"
                        className="border-1 border-cutomGold writingMode text-cutomGold pt-3 px-1 uppercase blurFilter"
                      >
                        Book
                      </Link>
                    </div>
                  </div>
                  <div className="roomOverlay">
                    <div className="flex flex-col justify-between">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <GiCrownCoin color="#f3cc8a" />
                          <span className="text-cutomGold font-body">
                            300 / Night
                          </span>
                        </div>
                        <p className="text-cutomGold font-heading text-justify">
                          Continental Penthouse Sanctuary
                        </p>
                        <div className="cardBordered"></div>
                      </div>

                      <div className="flex justify-between items-center w-full  mt-5">
                        <div className="flex items-center gap-3">
                          <IoIosBed color="#f3cc8a" />
                          <FaBath color="#f3cc8a" />
                          <MdFreeBreakfast color="#f3cc8a" />
                          <GiTowel color="#f3cc8a" />
                        </div>
                        <Link
                          href="/rooms/continentalPenthouse"
                          className="border-0 flex items-center gap-2"
                        >
                          <span className="text-cutomGold font-body text-medium">
                            Detail
                          </span>
                          <IoIosArrowRoundForward color="#f3cc8a" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomLayout>
    </>
  );
};

export default page;
