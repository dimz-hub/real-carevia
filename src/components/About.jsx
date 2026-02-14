import Image from "next/image";
import React from "react";
import CountUp from "@/components/CountUp";

const About = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto mt-[40px] pb-[100px]">
        <div>
          <Image
            src="/carevia4.png"
            alt="about-image"
            width={1000}
            height={300}
            className="w-[450px] rounded-2xl"
          />
        </div>

        <div className="flex flex-col gap-[35px]">
          <h3 className="font-bold text-[#0E6BA8] text-[30px] mt-[20px] capitalize">
            Welcome to <br /> Carevia solutions
          </h3>

          <p className="text-[17px]">
            At Carevia Solutions, we are dedicated to supporting older adults by
            providing reliable, compassionate, and highly trained care
            professionals across England and Wales.
          </p>

          <p className="text-[17px]">
            We specialise in elder care staffing solutions, connecting care
            homes, supported living services, and private clients with skilled
            caregivers.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap mt-[40px] items-center w-[90%] justify-center mx-auto gap-[20px]">
          
          <StatCard
            number={<CountUp value={5} />}
            label="Years of quality care"
          />

          <StatCard
            number={<CountUp value={270} suffix="+" />}
            label="Service Users"
          />

          <StatCard
            number={<CountUp value={100} suffix="+" />}
            label="Skilled employees"
          />

          <StatCard
            number={<CountUp value={80} suffix="+" />}
            label="Families Supported"
          />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ number, label }) => (
  <div className="w-[180px] h-36 bg-gradient-to-r from-white to-[#296374]/90 rounded-lg shadow-md p-2 flex flex-col justify-center">
    <p className="text-[45px] w-full text-center font-bold text-[#0C2C55]">
      {number}
    </p>
    <p className="text-center text-[19px]">
      {label.split(" ").slice(0, -1).join(" ")} <br />
      {label.split(" ").slice(-1)}
    </p>
  </div>
);

export default About;
