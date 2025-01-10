import React from 'react'
import gbl from '../assets/jbl.png'
const AdBanner = () => {
  return (
    <div className='bg-black flex items-center justify-around'>
        <div>
            <p className='text-green-500'>Categories</p>
            <h2 className='text-4xl text-white py-5'>Enhance Your <br />
            Music Experience</h2>
            <div>
                <div className='flex gap-4 text-sm '>
                <div className='flex items-center justify-center flex-col w-16 h-16 font-semibold bg-white text-black rounded-full'>
                    <p>23</p>
                    <p>Hours</p>
                </div>
                <div className='flex items-center justify-center flex-col w-16 h-16 font-semibold bg-white text-black rounded-full'>
                    <p>03</p>
                    <p>Days</p>
                </div>
                <div className='flex items-center justify-center flex-col w-16 h-16 font-semibold bg-white text-black rounded-full'>
                    <p>43</p>
                    <p>Minutes</p>
                </div>
                <div className='flex items-center justify-center flex-col w-16 h-16 font-semibold bg-white text-black rounded-full'>
                    <p>35</p>
                    <p>Seconds</p>
                </div>
                </div>
                <button className='bg-green-500 mt-4 text-white px-4 py-2 rounded-md'>Buy Now!</button>
            </div>
        </div>

        <div className='mt-10'>
            <img className='w-80' src={gbl} alt="" />
        </div>
    </div>
  )
}

export default AdBanner