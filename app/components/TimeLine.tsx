import React from "react";

const TimeLine = () => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-cutomGold font-heading font-bold text-3xl text-center">
        The Continental Code
      </h2>
      <div className=" bg-black flex flex-col justify-center py-4">
        <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
          <div className="relative text-gray-700 antialiased text-sm font-semibold">
            {/* <!-- Vertical bar running through middle --> */}
            <div className="hidden sm:block w-1 bg-[#f3cc8a] absolute h-full left-1/2 transform -translate-x-1/2"></div>

            {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <div className="p-4 bg-[#141414] text-cutomGold font-heading rounded shadow">
                      No Business Conducted on Hotel Grounds
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-[#f3cc8a] border-[#f3cc8a] border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <img src="/assets/coin2-removebg.png" />
                </div>
              </div>
            </div>

            {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8">
                    <div className="p-4 bg-[#141414] text-cutomGold font-heading rounded shadow">
                      Respect the Traditions of The Continental
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-[#f3cc8a] border-[#f3cc8a] border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <img src="/assets/coin2-removebg.png" />
                </div>
              </div>
            </div>

            {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <div className="p-4 bg-[#141414] text-cutomGold font-heading rounded shadow">
                      Penalties for Violations
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-[#f3cc8a] border-[#f3cc8a] border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <img src="/assets/coin2-removebg.png" />
                </div>
              </div>
            </div>

            {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
            <div className="mt-6 sm:mt-0">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8">
                    <div className="p-4 bg-[#141414] text-cutomGold font-heading rounded shadow">
                      Honoring Blood Oaths
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-[#f3cc8a] border-[#f3cc8a] border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <img src="/assets/coin2-removebg.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
