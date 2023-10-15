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

const Banner = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative font-poppins">
      <img src={bg} className="w-full md:h-[1070px] lg:h-[730px] hidden md:block" alt="" />
      {/* content goes from here */}
      <div className="max-w-7xl mx-auto absolute inset-0 ">
        {/* navbar */}
        <div className="max-w-7xl  mx-auto">
          <div className="flex items-center my-5 mx-5">
            <img src={logo} alt="" />
            <div className="lg:flex gap-10 ml-[48px] hidden">
              <Link className='flex ga text-[18px] font-bold'>Solutions <span><img src={down} alt="" /></span></Link>
              <Link className='flex ga text-[18px] font-bold'>Features <span><img src={down} alt="" /></span></Link>
              <Link className='flex ga text-[18px] font-bold'>Blogs <span><img src={down} alt="" /></span></Link>
              <Link className='flex ga text-[18px] font-bold'>About <span><img src={down} alt="" /></span></Link>
            </div>
            <div className="lg:flex hidden gap-4 ml-auto">
              <Link className='px-[20px] py-[10px] border-width border-primary rounded-[10px] font-[700]  text-primary' to='#'>Login</Link>
              <Link className='px-[20px] py-[10px] bg-primary rounded-[10px] font-[700] text-white'  to='#'>Register</Link>
            </div>
            {/* for mobile and tablet */}
            <img onClick={() => setOpen(!open)} className='h-6 w-6 ml-auto cursor-pointer lg:hidden' src={menu} alt="" />
            <div className={!open ? 'lg:hidden  ml-auto hidden flex-col gap-4 p-4 absolute top-14 right-4 bg-gray-200 rounded-2xl' : 'lg:hidden  ml-auto flex flex-col gap-4 p-4 absolute top-14 right-4 bg-gray-200 rounded-2xl'}>
              <Link className='flex ga text-[18px] font-bold'>Solutions <span><img src={down} alt="" /></span></Link>
              <Link className='flex ga text-[18px] font-bold'>Features <span><img src={down} alt="" /></span></Link>
              <Link className='flex ga text-[18px] font-bold'>Blogs <span><img src={down} alt="" /></span></Link>
              <Link className='flex ga text-[18px] font-bold mb-4'>About <span><img src={down} alt="" /></span></Link>
              <Link className='px-[20px] py-[10px] border-width border-primary rounded-[10px] font-[700]  text-primary' to='#'>Login</Link>
              <Link className='px-[20px] py-[10px] bg-primary rounded-[10px] font-[700] text-white'  to='#'>Register</Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center pt-[70px] pb-[70px]">
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