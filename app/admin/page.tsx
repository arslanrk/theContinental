import React from "react";
import Layout from "./components/Layout";
import HeaderWidgets from "./components/HeaderWidgets";
import GuestCheckinsChart from "./components/GuestCheckinsChart";
import MembershipTierChart from "./components/MembershipTierChart";
import AvaiableAssassin from "./components/AvaiableAssassin";
import UpcoimingEvent from "./components/UpcomingEvent";
import MemeberShipRequest from "./components/MemeberShipRequest";

const page = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <HeaderWidgets />
        <div className="grid grid-cols-2 gap-5">
          <GuestCheckinsChart />
          <MembershipTierChart />
        </div>
        <div className="grid grid-cols-3 gap-5">
          <AvaiableAssassin />
          <UpcoimingEvent />
          <MemeberShipRequest />
        </div>
      </div>
    </Layout>
  );
};

export default page;
