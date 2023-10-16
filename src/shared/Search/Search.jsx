import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  const [result, setResult] = useState([])
  const [input, setInput] = useState('')
  const fetchData = (value) => {
    fetch('https://cas-server.vercel.app/allUsers')
      .then((res) => res.json())
      .then((data) => {
        const result = data.filter((user) => {
          return value && user && user.name && user.name.toLowerCase().includes(value)
        })
        setResult(result)
      })
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }
  
  return (
    <div className='relative'>
      <div className="mt-[60px] relative font-inter">
        <input value={input} onChange={(e) => handleChange(e.target.value)} className="w-full py-[23px] px-[30px] text-[18px] font-bold mrounded text-[#AEB0B4]" type="name" name="name" id="" placeholder="Search by name" />            
        <button type='submit' className="bg-primary text-white py-[29px] mrounded text-xs font-bold px-[66px] absolute right-0">Search</button>
      </div>
      <div className="w-full absolute max-h-[200px] overflow-y-scroll">
        
        {
          result.map((res, index) => <Link to={`/profile/${res.name}`} key={index} className="w-full block border-b py-[15px] px-[20px] text-[18px] font-bold mrounded bg-white hover:bg-gray-200 cursor-pointer text-[#AEB0B4]">{res.name}</Link>)
        }

      </div>
    </div>
  );
};

export default Search;