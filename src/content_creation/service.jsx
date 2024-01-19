//import React from 'react'
import image1 from '../resources/content_creation/four.png'
import image2 from '../resources/content_creation/five.png'
import image3 from '../resources/content_creation/six.png'
import image4 from '../resources/12.png'
import image5 from '../resources/19.png'
import image6 from '../resources/14.png'


const service = () => {
  return (
    <div className='bg-[#f0ebe1]'>
        <h1 className="text-4xl pt-4 font-big font-bold text-center mb-10">Serviced Based Business</h1>
        <div className='flex flex-row '>
            <div className='w-1/2'>
                <img src={image1} alt=" " className='h-auto w-auto'/>
            </div>
            <div className='flex flex-col mx-auto pt-24'>
                <h2 className='font-big text-2xl font-semibold'>Client:</h2>
                <h2 className='font-big my-9 text-2xl font-semibold'>Goal:</h2>
                <h2 className='font-big text-2xl font-semibold'>Creative Process:</h2>
            </div>
        </div>
        <div>
            <img src={image2} alt='' className='m-auto p-24'/>
        </div>
        <div>
            <img src={image3} alt='' className='m-auto p-24'/>
        </div>
        <div className='bg-[#c5d2c4]'>
            <h1 className="text-4xl pt-4 font-big font-bold text-center mb-10">Similar Businessess</h1>
            <div className='flex p-16 gap-8'>
                <div className='bg-white w-60 h-60 shadow-xl border-2'><img src={image4} alt='' /> </div>
                <div className='bg-white mx-auto w-60 h-60 shadow-xl border-2 '><img src={image5} alt='' /> </div>
                <div className='bg-white shadow-xl w-60 h-60 border-2'><img src={image6} alt='' /> </div>
                
            </div>
        </div>
    </div>
  )
}

export default service
