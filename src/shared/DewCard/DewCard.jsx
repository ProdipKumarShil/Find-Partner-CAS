const DewCard = () => {
  return (
    <div className='shadow2 px-8 py-6 mrounded relative mx-4 lg:mx-0 bg-white'>
      <p className='text-[20px] font-bold text-center'>Commencement of business </p>
      <p className='text-center mt-1'>Invested shareholders must confirm payment and office address </p>
      {/* fees section */}
      <div className="grid grid-cols-3 bg-[#F4F4F4] mt-4 mrounded font-Osans px-4 py-3">
        <div className="">
          <p className='text-[18px] font-bold text-primary'>Dew date</p>
          <p className='text-[16px]'>Within 180 days </p>
        </div>
        <div className="col-span-2 ">
          <p className='text-[18px] font-bold text-[#F66]'>Penalty fees</p>
          <PenaltyFee data="₹1,000 /day for directors" />
        </div>
      </div>

      {/* top card */}
      <div className="absolute h-[46px] w-[46px] bg-gradient-to-r from-primary to-[#9400D3] flex items-center justify-center mrounded -top-2 -left-2">
        <p className='text-[24px] font-bold font-poppins text-white'>1<sup>st</sup></p>
      </div>
    </div>
  );
};

const PenaltyFee = ({data}) => {
  const numericPart = data.match(/₹[0-9,]+/)
  return(
    <div className="">
      <p className='text-[16px]  font-Osans'> <span className='font-bold underline decoration-slate-400'>{numericPart[0]}</span> {data.slice(numericPart[0].length)}</p>
    </div>
  )
}

export default DewCard;