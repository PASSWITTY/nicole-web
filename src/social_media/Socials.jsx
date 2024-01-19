//import React from 'react'
import content from '../resources/content3.jpg'
import social from '../resources/com-manage.png'
import digital from '../resources/ads.png'

const Socials = () => {
  return (
    <div className='bg-[#e8e8]'>
    <div className="container mx-auto py-10">
    <h1 className="text-5xl font-big font-bold text-center mb-10">Work Samples</h1>
    <div className="grid grid-cols-3 py-4 gap-2">
        <div className="col-span-1">
            <img src={content} alt="Content Creation" className="mx-auto shadow-grey-700 h-56 shadow-2xl rounded-lg"/>
            <p className="text-center font-bold mt-2">Content Management</p>
        </div>
        <div className="col-span-1">
            <img src={social} alt="Social Media Management" className="mx-auto shadow-grey-700 h-56 shadow-xl rounded-lg"/>
            <p className="text-center font-bold mt-2">Community Management</p>
        </div>
        <div className="col-span-1">
            <img src={digital} alt="Digital Marketing" className="mx-auto shadow-grey-700 shadow-xl h-56 rounded-lg"/>
            <p className="text-center font-bold mt-2">Analytics and Ads</p>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Socials
