import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import down from '../../assets/icons/down.svg'
import menu from '../../assets/icons/menu.svg'
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="max-w-7xl  mx-auto">
      <div className="flex items-center my-5 px-2">
        <Link to='/'><img src={logo} alt="" /></Link>
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
  );
};

export default Navbar;