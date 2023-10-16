import { Link } from 'react-router-dom';
import header from '../../assets/header.png'
import star from '../../assets/icons/star.svg'
const RecommendationCard = () => {
  return (
    <div className='shadow2 rounded-[20px] overflow-hidden'>
      <img src={header} alt="" />
      <div className="py-4 px-5">
        <div className="text-[20px] font-bold font-poppins flex justify-between items-center">
          <p>Michael Jackson</p>
          <p>₹4,370</p>
        </div>
        <p className='mt-1'>I will do business evaluation and corporate services</p>
        <div className="mt-[13px] flex items-center">
          <img src={star} alt="" />
          <p className='text-base mt-[3px] ml-1'><span className='font-bold text-primary'>4.8</span>(89)</p>
        </div>
        {/* <Link className='px-[20px] py-[10px] bg-primary rounded-[10px] font-[700] text-white'  to='#'>Register</Link> */}
        <Link className='bg-primary rounded-[10px] font-[700] text-white w-full py-[10px] mt-8 block text-center'>View services</Link>
      </div>
    </div>
  );
};

export default RecommendationCard;