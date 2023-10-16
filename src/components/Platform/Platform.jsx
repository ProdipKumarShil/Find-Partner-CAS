import GText from "../../shared/GText/GText";
import search from '../../assets/icons/search.svg'
import connect from '../../assets/icons/connect.svg'
import research from '../../assets/icons/research.svg'
import cap from '../../assets/icons/cap.svg'
import boyBg from '../../assets/bg/vectorBoy.png'
import girlBg from '../../assets/bg/vectorGirl.png'
import boy from '../../assets/boy.png'
import girl from '../../assets/girl.png'

const Platform = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 font-poppins gap-2 md:items-center px-2">
        <div className="">
          <p className="text-[65px] font-bold"><GText text="All-in-One"/> platform that Makes Easier</p>
          <p className="text-[24px] font-normal">We are more than a platform; We are your <br /> success partner. Discover our services to achieve your business and educational goals</p>
          {/* components */}
          <div className="grid grid-cols-2 gap-y-16 gap-x-8 mt-8">
            <IconsWithText boldText="SEARCH" text=" for vital company information " img={search}/>
            <IconsWithText boldText="CONNECT" text=" with the resources to meet your business needs" img={connect}/>
            <IconsWithText boldText="RESEARCH" text=" and generate reports that drive growth " img={research}/>
            <IconsWithText boldText="ACADEMY" text=" to give you the skills for success in your career" img={cap}/>
          </div>
        </div>
        {/* photos */}
        <div className="">
          <div className="">
            <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              <div className="">
                <div className="flex flex-col gap-2 md:mb-4">
                  <PinkChatBubble width='50px' text='Hey, check out loreumipsum services. '/>
                  <PinkChatBubble text='I learned from their videos, got my first job.'/>
                  <PinkChatBubble text='You wont be disappointed with their services. '/>
                </div>
                {/* <div className="hidden flex-col gap-2 mt-4">
                  <BlueChatBubble text="I got a perfect analysis report from them too" />
                  <BlueChatBubble text="Oh, that's great." />
                </div> */}
              </div>
              <div className="relative">
                <img src={boyBg} alt="" />
                <img className="absolute -left-3 bottom-0 w-[240px] rounded-b-full" src={boy} alt="" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 ">
              <div className="flex flex-col gap-2 mt-4 order-2 md:order-1 lg:order-2 md:mb-4">
                <BlueChatBubble text="I got a perfect analysis report from them too" />
                <BlueChatBubble text="Oh, that's great." />
              </div>
              <div className="relative md:order-2 lg:order-1">
                <img src={girlBg} alt="" />
                <img className="absolute left-4 w-[240px] bottom-0 rounded-b-full" src={girl} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PinkChatBubble = ({text}) => {
  return(
    <div className={`px-4 py-2 bg-[#EFD9F9] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl text-right`}>
      <p className="font-Osans text-[14px] w-auto">{text}</p>
    </div>
  )
}

const BlueChatBubble = ({text}) => {
  return(
    <div className={`px-4 py-2 bg-[#DDF3FF] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl `}>
      <p className="font-Osans text-[14px] w-auto">{text}</p>
    </div>
  )
}

const IconsWithText = ({img, boldText, text}) => {
  return(
    <div className="flex lg:w-[250px] flex-col lg:flex-row items-center lg:items-start gap-4">
      <img className="w-[65px] h-[65px]" src={img} alt="" />
      <p className="text-[20px] text-center lg:text-left"><span className="font-bold">{boldText}</span> {text}</p>
    </div>
  )
}

export default Platform;