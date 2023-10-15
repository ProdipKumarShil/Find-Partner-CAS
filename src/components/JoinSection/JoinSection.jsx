import DewCard from "../../shared/DewCard/DewCard";
import GText from "../../shared/GText/GText";
import wave from '../../assets/bg/wave.png'

const JoinSection = () => {
  return (
    <div className="relative pb-[50px]">
      <img className="w-full h-[650px] hidden lg:block absolute mt-36 z-0" src={wave} alt="" />
      <div className="font-poppins max-w-7xl mx-auto mt-[132px]">
        {/* Heading */}
        <div className="text-center">
          <p className="text-[65px] font-bold">Want to  <GText text='Join'/> Us?</p>
          <p className="text-[24px] font-normal mt-4">To remain with us, it is essential that you diligently follow the steps provided</p>
        </div>

        {/* dew cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-11 mt-[84px]">
          <DewCard />
          <DewCard />
          <DewCard />
          <DewCard />
          <DewCard />
          <DewCard />
        </div>
        <p className="z-10 mt-8 text-black text-[17px] font-poppins px-3">* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 <span className='font-bold '>every day</span>  until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form</p>
      </div>
    </div>
  );
};

export default JoinSection;