import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="">
      <div className="mt-10 flex justify-center items-center w-full">
        <div className="text-cutomGold font-heading text-2xl uppercase font-bold textshadow">
          Services We Provide
        </div>
      </div>
      <ServiceCard />
    </div>
  );
};

export default Services;
