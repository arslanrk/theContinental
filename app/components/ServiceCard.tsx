import Image from "next/image";
import Card1 from "../../public/assets/service1.webp";
import Coin from "../../public/assets/coin2-removebg.png";

import Room from "../../public/assets/Service-room1.jpg";
import Room2 from "../../public/assets/room2.jpg";
import Room3 from "../../public/assets/Service-room2.jpg";
import Room4 from "../../public/assets/Service-room4.jpg";

import Security1 from "../../public/assets/security1.jpg";
import Security2 from "../../public/assets/security2.jpg";
import Security3 from "../../public/assets/security3.jpg";
import Security4 from "../../public/assets/security4.jpg";

import Event from "../../public/assets/eventHosting.jpg";
import Event2 from "../../public/assets/event2.jpg";
import Event3 from "../../public/assets/event3.jpg";
import Event4 from "../../public/assets/event4.jpg";

const ServiceCard = () => {
  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 mt-10 px-4 w-full">
        <div className="card">
          <div className="container-card bg-yellow-box">
            <div className="flex justify-between items-center">
              <div className="w-10 h-10 flex items-center justify-center text-[#d4af37] border border-[#d4af37] rounded-full">
                <Image src={Coin} alt="Coin" width={50} height={50} />
              </div>
              <div className="w-10 h-10 flex items-center justify-center text-[#d4af37] border border-[#d4af37] rounded-full">
                <Image src={Coin} alt="Coin" width={50} height={50} />
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <div className="rounded-full overflow-hidden w-24 h-24 border-4 border-[#f3cc8a]">
                <Image
                  src={Room2}
                  alt="Exclusive Room"
                  width={100}
                  height={100}
                  objectFit="cover"
                />
              </div>
            </div>

            <h3 className="text-center uppercase text-cutomGold font-heading font-bold text-2xl mt-4">
              Exclusive Access
            </h3>

            <div className="flex justify-center">
              <div className="border-t border-[#d4af37] w-32 mt-2"></div>
            </div>

            <p className="text-center text-cutomGold font-body text-sm mt-4">
              Step into unparalleled luxury with our exclusive rooms, designed
              for those who seek comfort, privacy, and elegance. Each room
              features premium amenities, sophisticated decor, and a serene
              atmosphere, offering an unforgettable stay. Indulge in the finest
              hospitality The Continental has to offer.
            </p>

            <div className="flex justify-around items-center mt-6">
              <div className="w-[80px] h-[65px] rounded-full overflow-hidden border-2 border-[#d4af37]">
                <Image
                  src={Room}
                  alt="Room 1"
                  width={80}
                  height={80}
                  objectFit="cover"
                />
              </div>
              <div className="border-t border-[#d4af37] w-32 mt-2"></div>
              <div className="w-[120px] h-[100px] rounded-full overflow-hidden border-2 border-[#d4af37]">
                <Image
                  src={Room3}
                  alt="Room 2"
                  width={120}
                  height={100}
                  objectFit="cover"
                />
              </div>
              <div className="border-t border-[#d4af37] w-32 mt-2"></div>
              <div className="w-[80px] h-[65px] rounded-full overflow-hidden border-2 border-[#d4af37]">
                <Image
                  src={Room4}
                  alt="Room 1"
                  width={80}
                  height={80}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="container-card bg-yellow-box">
            <div className="flex justify-between items-center">
              <div className="w-10 h-10 flex items-center justify-center text-[#d4af37] border border-[#d4af37] rounded-full">
                <Image src={Coin} alt="Coin" width={50} height={50} />
              </div>
              <div className="w-10 h-10 flex items-center justify-center text-[#d4af37] border border-[#d4af37] rounded-full">
                <Image src={Coin} alt="Coin" width={50} height={50} />
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <div className="rounded-full overflow-hidden w-24 h-24 border-4 border-[#f3cc8a]">
                <Image
                  src={Security1}
                  alt="Exclusive Room"
                  width={100}
                  height={100}
                  objectFit="cover"
                />
              </div>
            </div>
            {/* Title */}
            <h3 className="text-center text-cutomGold font-heading font-bold text-2xl mt-4">
              Private Security
            </h3>

            <div className="flex justify-center">
              <div className="border-t border-[#d4af37] w-32 mt-2"></div>
            </div>

            <p className="text-center text-cutomGold font-body text-sm mt-4">
              Enjoy peace of mind with The Continental's elite private security
              services. Our highly trained team is dedicated to ensuring your
              safety and privacy throughout your stay. Whether you require
              discreet personal protection or secure transportation, our
              security professionals provide unmatched vigilance and
              professionalism.
            </p>

            <div className="flex justify-around items-center mt-6">
              <div className="w-[80px] h-[65px] rounded-full overflow-hidden border-2 border-[#d4af37]">
                <Image
                  src={Security2}
                  alt="Room 1"
                  width={80}
                  height={80}
                  objectFit="cover"
                />
              </div>
              <div className="border-t border-[#d4af37] w-32 mt-2"></div>
              <div className="w-[120px] h-[100px] rounded-full overflow-hidden border-2 border-[#d4af37]">
                <Image
                  src={Security3}
                  alt="Room 2"
                  width={120}
                  height={100}
                  objectFit="cover"
                />
              </div>
              <div className="border-t border-[#d4af37] w-32 mt-2"></div>
              <div className="w-[80px] h-[65px] rounded-full overflow-hidden border-2 border-[#d4af37]">
                <Image
                  src={Security4}
                  alt="Room 1"
                  width={80}
                  height={80}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="container-card bg-yellow-box">
            <div className="flex justify-between items-center">
              <div className="w-10 h-10 flex items-center justify-center text-[#d4af37] border border-[#d4af37] rounded-full">
                <Image src={Coin} alt="Coin" width={50} height={50} />
              </div>
              <div className="w-10 h-10 flex items-center justify-center text-[#d4af37] border border-[#d4af37] rounded-full">
                <Image src={Coin} alt="Coin" width={50} height={50} />
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <div className="rounded-full overflow-hidden w-24 h-24 border-4 border-[#f3cc8a]">
                <Image
                  src={Event2}
                  alt="Exclusive Room"
                  width={100}
                  height={100}
                  objectFit="cover"
                />
              </div>
            </div>

            <h3 className="text-center text-cutomGold font-heading font-bold text-2xl mt-4">
              Event Hosting
            </h3>

            <div className="flex justify-center">
              <div className="border-t border-[#d4af37] w-32 mt-2"></div>
            </div>

            <p className="text-center text-cutomGold font-body text-sm mt-4">
              Host your next event with unparalleled sophistication at The
              Continental. Our exclusive venues, paired with world-class
              service, provide the perfect setting for any occasion—whether it's
              an intimate gathering, a corporate meeting, or a grand
              celebration. With personalized event planning, exceptional
              catering.
            </p>

            <div className="flex justify-around items-center mt-6">
              <div className="w-[80px] h-[65px] rounded-full overflow-hidden border-2 border-[#d4af37]">
                <Image
                  src={Event}
                  alt="Room 1"
                  width={80}
                  height={80}
                  objectFit="cover"
                />
              </div>
              <div className="border-t border-[#d4af37] w-32 mt-2"></div>
              <div className="w-[120px] h-[100px] rounded-full overflow-hidden border-2 border-[#d4af37]">
                <Image
                  src={Event3}
                  alt="Room 2"
                  width={120}
                  height={100}
                  objectFit="cover"
                />
              </div>
              <div className="border-t border-[#d4af37] w-32 mt-2"></div>
              <div className="w-[80px] h-[65px] rounded-full overflow-hidden border-2 border-[#d4af37]">
                <Image
                  src={Event4}
                  alt="Room 1"
                  width={80}
                  height={80}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
