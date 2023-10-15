import bg from '../../assets/bg/gradient.png'
import GText from "../../shared/GText/GText";
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'
import down from '../../assets/icons/down.svg'
import logo from '../../assets/logo.png'
import menu from '../../assets/icons/menu.svg'
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar';

const Banner = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative font-poppins">
      <img src={bg} className="w-full h-[1350px] md:h-[1070px] lg:h-[730px] md:block" alt="" />
      {/* content goes from here */}
      <div className="max-w-7xl mx-auto absolute inset-0 ">
        {/* navbar */}
        <Navbar />
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center pt-[10px] md:pt-[70px] pb-[70px]">
          {/* text contents */}
          <div className="p-2">
            <p className="text-[65px] font-bold ">Find  <GText text='Partners'/> (CAs) available online</p>
            <p className="text-[#616161] text-[20px] font-normal font-Osans"><span className="font-bold">CONNECT</span> with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>
            <div className="mt-[60px] relative font-inter">
              <input className="w-full py-[23px] px-[30px] text-[18px] font-bold mrounded text-[#AEB0B4]" type="name" name="name" id="" placeholder="Search by name" />            
              <button className="bg-primary text-white py-[29px] mrounded text-xs font-bold px-[66px] absolute right-0">Search</button>
            </div>
          </div>

          {/* imgs content */}
          <div className="flex gap-2 h-[486px] p-2">
            <img className="w-1/2 h-[400px] md:w-full md:h-full lg:h-[403px] lg:mt-auto" src={banner1} alt="" />
            <img className="w-1/2 h-[400px] md:w-full md:h-full lg:h-[403px] hidden md:block" src={banner2} alt="" />
            <img className="w-1/2 h-[400px] md:w-full md:h-full lg:h-[403px] lg:mt-[42px]" src={banner3} alt="" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;