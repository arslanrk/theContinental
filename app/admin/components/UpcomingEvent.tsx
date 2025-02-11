import { IoEyeOutline } from "react-icons/io5";
import { GiBurningBook } from "react-icons/gi";
import { CiCalendarDate } from "react-icons/ci";

const UpcoimingEvent = () => {
  const UpcomingEvents = [
    { id: "1", name: "High Table Council Meeting", DateTime: "01/02/2024" },
    { id: "2", name: "Blood Oath Ceremony", DateTime: "01/02/2024" },
    { id: "3", name: "Weapons Showcase & Auction", DateTime: "01/02/2024" },
  ];
  return (
    <div className="p-5 rounded-lg bg-[#191C24] w-full flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GiBurningBook color="#f3cc8a" size={25} />
          <span className="text-white font-heading text-lg">
            Upcoming Events
          </span>
        </div>
        <button type="button" className="text-red-500 font-heading text-lg">
          View All
        </button>
      </div>
      <ul className="flex flex-col gap-2">
        {UpcomingEvents.map((Event) => {
          return (
            <li
              className="flex items-center justify-between pb-2 cursor-pointer border-b-1 border-[#545454] p-[5px] last:border-none hover:bg-[#474747] hover:rounded-md"
              key={Event.id}
            >
              <div className="flex items-center gap-3">
                <CiCalendarDate color="#fff" />
                <span className="text-white font-body text-sm">
                  {Event.name}
                </span>
                <span className="text-white font-body text-sm">
                  {Event.DateTime}
                </span>
              </div>
              <button type="button">
                <IoEyeOutline color="#ffffff" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UpcoimingEvent;
