import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Rooms from "./components/Rooms";
import OurTeam from "./components/OurTeam";
import Footer from "./components/Footer";
import CustomNavBar from "./components/CustomNavBar";
import TimeLine from "./components/TimeLine";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-svh">
      <CustomNavBar />
      <Hero />
      <AboutUs />
      <div className="my-[100px]">
        <TimeLine />
      </div>
      <Services />
      <Rooms />
      <OurTeam />
      <Footer />
    </div>
  );
}
