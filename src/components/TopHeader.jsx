import React from 'react'

const TopHeader = () => {
  return (
    <div className='bg-black flex text-white py-2 '>
        <div className='flex justify-center gap-5 w-[85%]'>
            <p className='text-gray-300'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <button className='underline'>ShopNow</button>
        </div>
        <div className='flex justify-center w-[15%]'>
            <select className='bg-black text-gray-300 outline-none' name="selet" id="">
                <option value="English">English</option>
                <option value="Bangla">Bnagla</option>
            </select>
        </div>
    </div>
  )
}

export default TopHeader