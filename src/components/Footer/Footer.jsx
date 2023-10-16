import logo from '../../assets/logo2.png'
import fb from '../../assets/icons/fb.svg'
import lin from '../../assets/icons/in.svg'
const Footer = () => {
  return (
    <div className="mt-[132px]">
      <div className="bg-gradient-to-r from-primary to-[#9400D3] py-8 px-2">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 lg:grid-cols-7  font-Osans gap-8">
            <div className="col-span-2">
              <img src={logo} alt="" />
              <p className='text-[14px] font-Osans mt-4 text-white'>India's first platform dedicated to simplifying partner search</p>
            </div>
            <div className="text-white space-y-4">
              <p className='font-bold '>COMPANY</p>
              <p>About</p>
              <p>Pricing</p>
              <p>Careers</p>
            </div>
            <div className="text-white space-y-4">
              <p className='font-bold '>COMPANY</p>
              <p>About</p>
              <p>Pricing</p>
              <p>Careers</p>
            </div>
            <div className="text-white space-y-4">
              <p className='font-bold '>COMPANY</p>
              <p>About</p>
              <p>Pricing</p>
              <p>Careers</p>
            </div>
            <div className="text-white space-y-4">
              <p className='font-bold '>COMPANY</p>
              <p>About</p>
              <p>Pricing</p>
              <p>Careers</p>
            </div>
            <div className="text-white space-y-4">
              <p className='font-bold '>COMPANY</p>
              <p>About</p>
              <p>Pricing</p>
              <p>Careers</p>
            </div>
          </div>
          <hr className='my-8'/>
          <div className="flex justify-between items-center">
            <p className='text-[14px] text-white'>Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</p>
            <div className="flex gap-2 mr-4 md:mr-0">
              <img src={fb} alt="" />
              <img src={lin} alt="" />
            </div>
          </div>
        </div>
        {/* hr */}
      </div>
      {/* bottom footer */}
      <div className="bg-black">
        <p className="text-[12px] font-Osans px-3 text-white text-center py-5">Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved</p>
        
      </div>
    </div>
  );
};

export default Footer;