import CoinFlip from "./Coin";

const Hero = () => {
  return (
    <div className="heroBg h-screen flex justify-center items-center">
      <div className="relative h-[90px]">
        <CoinFlip />
      </div>
      <div className="flex flex-col gap-1 justify-center items-center p-3 rounded-lg ml-[45px]">
          <span className="text-cutomGold font-bold textshadow">
            Where Elegance Meets Exclusivity.
          </span>
          <span className="text-cutomGold font-bold textshadow">
            Where Every Guest is Bound by a Code.
          </span>
          <button className="bg-[#c4b87e] border-3 border-[#fdc564] px-4 py-1 text-cutomBlack font-body font-bold mt-5 rounded-full uppercase">Book a Room</button>
        </div>
    </div>
  );
};

export default Hero;
