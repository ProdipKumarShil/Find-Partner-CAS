import RecommendationCard from "../../shared/RecommendationCard/RecommendationCard";
import star from '../../assets/icons/star.svg'
import calender from '../../assets/icons/calender.svg'
import header from '../../assets/header.png'
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto font-poppins px-2 mt-[92px]">
      
      {/* recommendation section */}
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* 1st column */}
          <div className=" md:col-span-5">
            <div className="">
              <p className="text-[35px] font-bold">Michael Jackson</p>
              <p className="text-[20px] font-normal">I am here to provide my expertise in accounting and finance, which includes financial statements, economics, and auditing, all to assist you effectively</p>
              <div className="mt-[13px] flex items-center">
                <img src={star} alt="" />
                <p className='text-base mt-[3px] ml-1'><span className='font-bold text-primary'>4.8</span>(89)</p>
              </div>
            </div>
            {/* price card */}
            <div className="mt-8">
              <PriceCard />
            </div>
            <div className="p-7 shadow2 rounded-[20px] mt-8">
              <p className="text-[35px] font-bold">What people say?</p>
              <p className="text-[20px] font-normal mt-4">I cannot express enough gratitude for the support Micheal has provided in managing my personal finances. Their attention to detail and deep understanding of financial markets has ensured that my investments are in safe hands. I highly recommend their services to anyone seeking financial guidance.</p>
            </div>
          </div>

          
          {/* 2nd column */}
          <div className=" md:col-span-7">
            <img src={header} alt="" />
            <p className="text-[35px] font-bold mt-8 mb-5">About Michael Jackson</p>
            <div className="flex justify-between">
              <div className="w-full">
                <Header text="FROM"/>
                <p className="text-xl text-black mt-1">INDIA</p>
              </div>
              <div className="w-full">
                <Header text="PARTNER SINCE"/>
                <p className="text-xl text-black mt-1">2011</p>
              </div>
              <div className="w-full">
                <Header text="AVERAGE RESPONSE TIME"/>
                <p className="text-xl text-black mt-1">30 minutes</p>
              </div>
            </div>
            {/* about section */}
            <div className="mt-8">
              <Header text="ABOUT"/>
              <p className="text-xl text-black mt-1 m-1">I am a Professional Charted Accountant here to offer professional services of accounting and finance, financial statements, Bookkeeping in affordable price.</p>
            </div>
            {/* point section */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2">
              <div className="w-full">
                <Header text="SERVICES I OFFER"/>
                <ul className="list-disc ml-6" >
                  <li className="text-xl text-black mt-1 m-1">Financial accounting</li>
                  <li className="text-xl text-black mt-1 m-1">Financial accounting</li>
                  <li className="text-xl text-black mt-1 m-1">Financial accounting</li>
                  <li className="text-xl text-black mt-1 m-1">Financial accounting</li>
                  <li className="text-xl text-black mt-1 m-1">Financial accounting</li>
                </ul>
              </div>
              <div className="w-full">
                <Header text="SERVICES I OFFER"/>
                <ul className="list-disc ml-6" >
                  <li className="text-xl text-black mt-1 m-1">Financial accounting</li>
                  <li className="text-xl text-black mt-1 m-1">Financial accounting</li>
                  <li className="text-xl text-black mt-1 m-1">Financial accounting</li>
                  <li className="text-xl text-black mt-1 m-1">Financial accounting</li>
                  <li className="text-xl text-black mt-1 m-1">Financial accounting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <p className="font-bold text-[35px] mt-[132px]">Recommended for you</p>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <RecommendationCard />
          <RecommendationCard />
          <RecommendationCard />
        </div>
      </div>
    </div>
  );
};

const Header = ({text}) => {
  return(
    <p className="text-[#999] font-bold font-poppins">{text}</p>
  )
}

const PriceCard = () => {
  return(
    <div className="py-7 px-6 text-xl shadow2 rounded-[20px]">
      <div className="flex justify-between">
        <p>Basic to complex tasks</p>
        <p className="text-2xl font-bold">₹4,370</p>
      </div>
      <div className="flex gap-[10px] mt-8 mb-6">
        <img src={calender} alt="" />
        <p>Delivers the job within 2 days</p>
      </div>
      <div className="flex gap-4">
        <Link className='px-[20px] py-[10px] bg-primary rounded-[10px] font-[700] text-white block w-full text-center text-base'  to='#'>Request Proposal</Link>
        <Link className='px-[20px] py-[10px] border-width border-primary rounded-[10px] font-[700]  text-primary block w-full text-center text-base' to='#'>Chat with me</Link>
      </div>
    </div>
  )
}

export default Profile;