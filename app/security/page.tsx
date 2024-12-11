import React from "react";
import CustomLayout from "../components/CustomLayout";

const page = () => {
  return (
    <CustomLayout>
      <div className="">
        <div className="bg-[url(/assets/AssassinBlackTheme.jpg)] bg-cover bg-no-repeat relative w-full h-[80vh] flex items-center roomSingleComponentWrapper">
          <div className="flex flex-col gap-2 ml-[10%]">
            <h4 className="text-cutomGold font-heading text-[60px] font-normal">
              Safe House Quarters
            </h4>
            <span className="text-cutomGold font-heading text-[20px] font-normal">
              Secure Sanctuary – Where Safety Meets Comfort.
            </span>
          </div>
        </div>
      </div>
    </CustomLayout>
  );
};

export default page;
