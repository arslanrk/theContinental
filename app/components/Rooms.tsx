import Image from "next/image";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

import room1 from "../../public/assets/PresidentialSuite.jpg";
import room2 from "../../public/assets/AssassinBlackTheme.jpg";
import room3 from "../../public/assets/Service-room1.jpg";
import room4 from "../../public/assets/Service-room2.jpg";
import room5 from "../../public/assets/luxury-penthouse.jpg";

const Rooms = () => {
  const rooms = [
    {
      id: "1",
      title: "High Table Residence",
      image: room1,
      description:
        "Reserved for elite members and associates of the High Table. This suite boasts a lavish interior with custom furnishings, a private study, and a concealed panic room. It also includes a rare artifact display for collectors and access to a private rooftop garden. A dedicated concierge is available 24/7 for any requests.",
    },
    {
      id: "2",
      title: "Assassin's Retreat Suite",
      image: room2,
      description:
        "Designed for guests who value both comfort and security. It includes soundproof walls, a secure weapon locker, an escape route disguised as a closet, and a private armory. The room offers luxury amenities like a king-size bed, high-end decor, and an advanced communication setup with encrypted channels.",
    },
    {
      id: "3",
      title: "Safe House Quarters",
      image: room3,
      description:
        "Built for guests who need utmost discretion. It features a double-reinforced security door, direct access to an underground exit, and an emergency medical kit. The suite includes a cozy living area, minimalistic but luxurious design, and a secure safe for valuables. Perfect for those laying low or in need of a sanctuary.",
    },
    {
      id: "4",
      title: "Diplomat's Refuge",
      image: room4,
      description:
        "Ideal for international guests requiring a temporary residence. This suite offers a conference room, bulletproof glass windows, and a hidden armory. It also includes diplomatic immunity services, allowing discreet handling of sensitive situations. The room features opulent decor, a fully stocked minibar, and a private library with classic literature.",
    },
    {
      id: "5",
      title: "Continental Penthouse Sanctuary",
      image: room5,
      description:
        "The pinnacle of luxury at The Continental, the Penthouse Sanctuary is reserved for the most distinguished guests. It features a grand living space with floor-to-ceiling windows offering a panoramic city view, a private terrace with a heated infinity pool, and a concealed sniper's perch for added security.",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-2 min-h-screen mt-16 px-4">
      <div className="flex h-[60vh] gap-5 w-full RoomLandingSection">
        <div
          className="flex items-center justify-center flex-col p-5 gap-4 rounded-lg h-full lg:w-[30%] md:w-[50%] sm:w-[50%]"
          style={{ backdropFilter: "blur(100px)" }}
        >
          <div className="text-cutomGold font-heading text-2xl textshadow">
            Rooms & Suites
          </div>
          <p className="text-center text-cutomGold font-body text-sm">
            Step into a world of refined luxury with our carefully curated
            selection of rooms and suites at The Continental. Each space is
            thoughtfully designed to deliver an extraordinary experience,
            showcasing lavish furnishings, state-of-the-art amenities, and
            captivating views that evoke the allure of our storied legacy.
            Whether you seek a tranquil refuge or an opulent hideaway to host
            clandestine meetings, our accommodations are tailored to fulfill
            every discerning desire, ensuring your stay embodies both
            sophistication and security in the heart of our extraordinary
            establishment.
          </p>
          <Link
            className="cursor-pointer shadow-[0_0_15px_5px_rgba(255,215,0,0.8)] ring-2 ring-[#f3cc8a] animate-pulse text-cutomGold font-heading mt-12 px-7 py-1 rounded-lg font-semibold"
           href="/rooms"
          >
            Book Now
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-3 mt-5">
        {rooms.map((item) => {
          return (
            <Card className="py-4 bg-[#0000]" key={item.id}>
              <CardHeader className="py-2">
                <Image
                  src={item.image}
                  width={270}
                  height={100}
                  className="object-cover rounded-xl sm:w-fit"
                  objectFit="cover"
                  alt="room"
                />
              </CardHeader>
              <CardBody className="pb-0 pt-2 px-4 flex-col items-center h-fit">
                <span className="text-cutomGold font-heading text-lg">
                  {item.title}
                </span>
                <p className="text-cutomGold font-body text-xs text-center mt-3">
                  {item.description}
                </p>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Rooms;
