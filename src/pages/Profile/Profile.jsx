import RecommendationCard from "../../shared/RecommendationCard/RecommendationCard";
import star from '../../assets/icons/star.svg'
import calender from '../../assets/icons/calender.svg'
import userPic from '../../assets/user.jpg'
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
const Profile = () => {
  const [user, setUser] = useState([])
  const name = useParams().userName
  useEffect(() => {
    fetch(`https://cas-server.vercel.app/user/${name}`)
    .then(res => res.json())
    .then(data => setUser(data))
  }, [name])
  console.log(user)

  // const services = user?.about?.services
  return (
    <div className="max-w-7xl mx-auto font-poppins px-2 ">
      <Navbar />
      {/* recommendation section */}
      <div className="mt-[92px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* 1st column */}
          <div className=" md:col-span-5">
            <div className="">
              <p className="text-[35px] font-bold">{user.name}</p>
              <p className="text-[20px] font-normal">{user.intro}</p>
              <div className="mt-[13px] flex items-center">
                <img src={star} alt="" />
                <p className='text-base mt-[3px] ml-1'><span className='font-bold text-primary'>{user.rating}</span>({user.reviewCount})</p>
              </div>
            </div>
            {/* price card */}
            <div className="mt-8">
              <PriceCard taskComplexity={user.taskComplexity} price={user.price} deliveryTime={user.deliveryTime}/>
            </div>
            <div className="p-7 shadow2 rounded-[20px] mt-8">
              <p className="text-[35px] font-bold">{user?.testimonial?.author}</p>
              <p className="text-[20px] font-normal mt-4">{user?.testimonial?.text}</p>
            </div>
          </div>

          
          {/* 2nd column */}
          <div className=" md:col-span-7">
            {user.image ? <img className="h-[412px] rounded-[20px] w-full object-cover" src={user.image} alt="" /> : <img className="h-[412px] rounded-[20px] w-full object-cover" src={userPic} alt="" />}
            <p className="text-[35px] font-bold mt-8 mb-5">About {user?.name}</p>
            <div className="flex justify-between">
              <div className="w-full">
                <Header text="FROM"/>
                <p className="text-xl text-black mt-1">{user?.about?.from}</p>
              </div>
              <div className="w-full">
                <Header text="PARTNER SINCE"/>
                <p className="text-xl text-black mt-1">{user?.about?.partnerSince}</p>
              </div>
              <div className="w-full">
                <Header text="AVERAGE RESPONSE TIME"/>
                <p className="text-xl text-black mt-1">{user?.about?.averageResponseTime}</p>
              </div>
            </div>
            {/* about section */}
            <div className="mt-8">
              <Header text="ABOUT"/>
              <p className="text-xl text-black mt-1 m-1">{user?.about?.description}</p>
            </div>
            {/* point section */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2">
              <div className="w-full">
                <Header text="SERVICES I OFFER"/>
                <ul className="list-disc ml-6" >
                  {
                    user?.about?.services.map((service, index) => <li key={index} className="text-xl text-black mt-1 m-1">{service}</li>)
                  }
                </ul>
              </div>
              <div className="w-full">
                <Header text="WHY ME?"/>
                <ul className="list-disc ml-6" >
                  {
                    user?.about?.benefits.map((service, index) => <li key={index} className="text-xl text-black mt-1 m-1">{service}</li>)
                  }
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

const PriceCard = ({taskComplexity, price, deliveryTime}) => {
  return(
    <div className="py-7 px-6 text-xl shadow2 rounded-[20px]">
      <div className="flex justify-between">
        <p>{taskComplexity}</p>
        <p className="text-2xl font-bold">{price}</p>
      </div>
      <div className="flex gap-[10px] mt-8 mb-6">
        <img src={calender} alt="" />
        <p>{deliveryTime}</p>
      </div>
      <div className="flex gap-4">
        <Link className='px-[20px] py-[10px] bg-primary rounded-[10px] font-[700] text-white block w-full text-center text-base'  to='#'>Request Proposal</Link>
        <Link className='px-[20px] py-[10px] border-width border-primary rounded-[10px] font-[700]  text-primary block w-full text-center text-base' to='#'>Chat with me</Link>
      </div>
    </div>
  )
}

export default Profile;