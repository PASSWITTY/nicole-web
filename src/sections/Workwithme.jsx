import React from 'react'
import work from '../resources/work.png'
import instagram from '../resources/instagram.png';
import linkedin from '../resources/linkedin.png';
import web from '../resources/internet.png';

const Workwithme = () => {
  return (
    <div className='bg-[#f0ebe1] w-auto p-5 h-auto flex flex-col items-center justify-center '>
        <h1 className="text-5xl font-big font-bold text-center mb-7">Work With Me </h1>
        <img src={work} alt='work' className='h-44 my-8 w-60 rounded-t-[60px]'  />
        <button className="mx-auto my-5 block border-2 bg-transparent hover:bg-blue-700 text-black border-neutral-600 font-bold py-2 px-4 rounded mt-4">Book A Consultation</button>
        <div className='flex flex-row mb-5'>
            <img src={instagram} alt='' className='w-8 h-8' />
            <img src={linkedin} alt='' className='w-8 mx-5 h-8' />
            <img src={web} alt='' className='w-8 h-8'/>
        </div>
    </div>
  )
}

export default Workwithme
