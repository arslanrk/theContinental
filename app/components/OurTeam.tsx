import React from "react";
import Image from "next/image";

import Winston from "../../public/assets/winston.jpg";
import Charon from "../../public/assets/Charon.jpg";
import John from "../../public/assets/John_Wick.jpg";
import Ballerina from "../../public/assets/test444.jpeg";

const OurTeam = () => {
  return (
    <div className="w-full flex flex-col gap-2 min-h-screen mt-16 px-4">
      <h5 className="mt-9 text-cutomGold font-heading font-bold text-3xl text-center uppercase textshadow">
        Our Team
      </h5>
      <div className="grid lg:grid-cols-2 gap-6 lg:px-[150px] py-[50px]">
        <Image
          src={Winston}
          width={400}
          height={100}
          className="object-cover rounded-xl ring-2 ring-[#f3cc8a] animate-pulse"
          objectFit="cover"
          alt="room"
        />
        <div className="flex flex-col gap-2">
          <h4 className="text-cutomGold font-heading text-xl font-bold textshadow">
            Winston
          </h4>
          <p className="text-cutomGold font-heading text-lg">
            Manager of The Continental
          </p>
          <p className="text-cutomGold font-body">
            Winston, the esteemed manager of The Continental, has been at the
            helm of this legendary establishment for decades. Known for his
            refined taste, sharp intellect, and unwavering commitment to The
            Continental's code of honor, Winston ensures that every guest
            receives impeccable service in an environment where discretion and
            elegance reign supreme. His deep connections with the world's elite
            and his mastery of diplomacy make him a trusted figure in the world
            of high-stakes luxury.
          </p>
          <span className="text-cutomGold mt-5 font-heading text-lg">
            Personal Philosophy:
          </span>
          <p className="text-cutomGold italic">
            "Rules and consequences are what separate us from the animals."
          </p>
          <span className="text-cutomGold mt-5 font-heading text-lg">
            Key Responsibilities:
          </span>
          <ul className="text-cutomGold ml-1" style={{ listStyle: "kannada" }}>
            <li>
              Ensuring the flawless operation of The Continental and upholding
              its sacred traditions.
            </li>
            <li>
              Catering to the unique and demanding needs of the world’s most
              influential guests.
            </li>
            <li>
              Maintaining the balance between power and loyalty in a world where
              reputation is everything.
            </li>
          </ul>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-[100px] lg:px-[150px] py-[50px]">
        <div className="flex flex-col gap-2">
          <h4 className="text-cutomGold font-heading text-xl font-bold textshadow">
            Charon
          </h4>
          <p className="text-cutomGold font-heading text-lg">
            Assistant Manager & Head Concierge
          </p>
          <p className="text-cutomGold font-body">
            Charon, the ever-composed and loyal assistant manager of The
            Continental, exemplifies professionalism and calm under pressure.
            Known for his impeccable attention to detail, Charon ensures that
            every guest’s needs are met with precision and care. His unflinching
            dedication to both the hotel's guests and its strict code of conduct
            makes him an indispensable figure at The Continental. With his calm
            demeanor and vast array of skills, Charon seamlessly handles every
            request, from mundane tasks to the most extraordinary demands.
          </p>
          <span className="text-cutomGold mt-5 font-heading text-lg">
            Personal Philosophy:
          </span>
          <p className="text-cutomGold italic">
            "Service is our creed, discretion is our promise."
          </p>
          <span className="text-cutomGold mt-5 font-heading text-lg">
            Key Responsibilities:
          </span>
          <ul className="text-cutomGold ml-1" style={{ listStyle: "kannada" }}>
            <li>
              Overseeing daily operations, ensuring the flawless execution of
              guest services.
            </li>
            <li>
              Managing high-profile guests with the utmost discretion and
              efficiency.
            </li>
            <li>
              Assisting the manager in maintaining the hotel's safety, order,
              and reputation.
            </li>
          </ul>
        </div>
        <Image
          src={Charon}
          width={400}
          height={100}
          className="object-cover rounded-xl ring-2 ring-[#f3cc8a] animate-pulse"
          objectFit="cover"
          alt="room"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 lg:px-[150px] py-[50px]">
        <Image
          src={John}
          width={400}
          height={100}
          className="object-cover rounded-xl ring-2 ring-[#f3cc8a] animate-pulse"
          objectFit="cover"
          alt="room"
        />
        <div className="flex flex-col gap-2">
          <h4 className="text-cutomGold font-heading text-xl font-bold textshadow">
            John Wick
          </h4>
          <p className="text-cutomGold font-heading text-lg">
            Head of Security
          </p>
          <p className="text-cutomGold font-body">
            John Wick, the legendary figure known for his unparalleled skill and
            efficiency, serves as the formidable Head of Security at The
            Continental. His presence alone is a guarantee of absolute safety
            and order within the hotel. Wick's quiet intensity and unwavering
            commitment ensure that no threat goes unchecked and that the hotel's
            code remains intact. With a reputation that precedes him, Wick is
            both feared and respected, making him the perfect enforcer of The
            Continental’s strict rules.
          </p>
          <span className="text-cutomGold mt-5 font-heading text-lg">
            Personal Philosophy:
          </span>
          <p className="text-cutomGold italic">
            "If you’re a lover, you have to be a fighter. Because if you don’t
            fight for your love what kind of love did you have?"
          </p>
          <span className="text-cutomGold mt-5 font-heading text-lg">
            Key Responsibilities:
          </span>
          <ul className="text-cutomGold ml-1" style={{ listStyle: "kannada" }}>
            <li>
              Constantly monitoring and safeguarding the hotel’s guests, with a
              focus on discretion and efficacy.
            </li>
            <li>
              Enforcing The Continental’s rules with unwavering determination,
              ensuring that no business is conducted on hotel grounds.
            </li>
            <li>
              Identifying and swiftly eliminating any threats to the hotel or
              its guests, utilizing his extraordinary tactical skills.
            </li>
          </ul>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-[100px] lg:px-[150px] py-[50px]">
        <div className="flex flex-col gap-2">
          <h4 className="text-cutomGold font-heading text-xl font-bold textshadow">
            The Ballerina Rooney
          </h4>
          <p className="text-cutomGold font-heading text-lg">
          Head of Event Organizer
          </p>
          <p className="text-cutomGold font-body">
            Ballerina, a graceful yet commanding presence at The Continental,
            brings a unique blend of elegance and meticulous planning to her
            role as Head of Event Organizer. Known for her artistic flair and
            precision, she orchestrates every event with a level of
            sophistication that mirrors the hotel's high standards. From
            intimate gatherings to grand affairs, Ballerina’s keen eye for
            detail ensures that each event is executed flawlessly, leaving an
            unforgettable impression.
          </p>
          <span className="text-cutomGold mt-5 font-heading text-lg">
            Personal Philosophy:
          </span>
          <p className="text-cutomGold italic">
            "Every moment is a performance, and perfection is in the details."
          </p>
          <span className="text-cutomGold mt-5 font-heading text-lg">
            Key Responsibilities:
          </span>
          <ul className="text-cutomGold ml-1" style={{ listStyle: "kannada" }}>
            <li>
              Overseeing the organization of high-profile events, ensuring they
              run seamlessly from start to finish.
            </li>
            <li>
              Working closely with guests to tailor events to their specific
              needs and desires, creating one-of-a-kind experiences.
            </li>
            <li>
              Bringing innovative and artistic elements to each event, ensuring
              that every occasion stands out with elegance and originality.
            </li>
          </ul>
        </div>
        <Image
          src={Ballerina}
          width={400}
          height={100}
          className="object-cover rounded-xl ring-2 ring-[#f3cc8a] animate-pulse h-[65vh]"
          objectFit="cover"
          alt="room"
        />
      </div>
    </div>
  );
};

export default OurTeam;
