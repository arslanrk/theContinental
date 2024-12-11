import Image from "next/image";
import Icon from '../../public/assets/icon.png'

const AboutUs = () => {
  return (
    <div className="flex min-h-screen justify-between gap-12 mt-5 px-4 lg:flex-row flex-col-reverse">
      <div className="lg:w-1/2 w-full min-h-screen aboutUsbg"></div>
      <div className="lg:w-1/2 w-full flex flex-col gap-2 items-center pt-3">
        <h5 className="mt-9 text-cutomGold font-heading font-bold text-3xl uppercase textshadow">
          The Continental
        </h5>
        <p className="text-cutomGold font-body lg:text-left text-center mt-5">
          The Continental is an exclusive sanctuary for discerning individuals,
          hidden in plain sight amdist the city's bustling streets. Founded by a
          secret socity of high-stakes players, this enigmatic hotel has been a
          refuge for assassins, underworld figures and those seeking discreet
          luxury since the early 20th century. Behind its elegant facade, The
          Continental operates under its own rules, governed by the unwritten
          High Table code. Within its walls, loyalty is currency, and silence is
          golden.
        </p>
        <p className="text-cutomGold font-body lg:text-left text-center">
          At The Continental, we cater to the unique needs of our distinguished
          clientele. Our expert concierges facilitate clandestine meetings,
          secure transportation, and tailored logistical support. Guests can
          access our elite network professionals, from master tailors to
          seasoned mercenaries. On-site amenities including a state-of-the-art
          armory, encrypted communication services, and a sophisticated
          surveillance system. Our meticulously trained staff ensures absolute
          discretion, while our in-house medic and sommelier provide specialized
          planning to high-stake operation, The Continental is your secure
          haven.
        </p>
        <div className="grid gap-9 lg:grid-cols-2 w-full mt-10">
          <div className="flex items-center gap-5">
            <Image src={Icon} width={20} height={20} alt="" />
            <span className="text-cutomGold font-body">
              Secure Accommodations
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Image src={Icon} width={20} height={20} alt="" />
            <span className="text-cutomGold font-body">
              Clandestine Meetings
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Image src={Icon} width={20} height={20} alt="" />
            <span className="text-cutomGold font-body">Elite Protection</span>
          </div>
          <div className="flex items-center gap-5">
            <Image src={Icon} width={20} height={20} alt="" />
            <span className="text-cutomGold font-body">Discreet Logistics</span>
          </div>
        </div>
        <button className="shadow-[0_0_15px_5px_rgba(255,215,0,0.8)] ring-2 ring-[#f3cc8a] animate-pulse text-cutomGold font-heading mt-12 px-7 py-1 rounded-lg font-semibold">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
