import React from 'react'
import content from '../resources/contentcreation1.jpg'
//import social from '../resources/socialamedia1.jpg'
import digital from '../resources/DigitalMarketing1.jpg'

const Services = () => {
  return (
    <div className='bg-[#e4ddce]'>
    <div className="container mx-auto py-10">
    <h1 className="text-5xl font-big font-bold text-center mb-10">Services Offered</h1>
    <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
            <img src={content} alt="Content Creation" className="mx-auto shadow-grey-500 rounded-full"/>
            <h2 className="text-xl font-bold text-center mt-2">Content Creation</h2>
            <p className="text-center mt-2">Creating high-quality, engaging content for your social media platforms that align with your brand identity and goals.</p>
            <button className="mx-auto block border bg-transparent hover:bg-blue-700  font-bold py-2 px-4 rounded mt-4">Learn More</button>
        </div>
        <div className="col-span-1">
            <img src={content} alt="Social Media Management" className="rounded-full shadow-grey-500 mx-auto"/>
            <h2 className="text-xl font-bold text-center mt-2">Social Media Management</h2>
            <p className="text-center mt-2">Comprehensive social media management services to help businesses increase their online presence and engage with their audience.</p>
            <button className="mx-auto block border bg-transparent hover:bg-blue-700  font-bold py-2 px-4 rounded mt-4">Learn More</button>
        </div>
        <div className="col-span-1">
            <img src={digital} alt="Digital Marketing Management" className="mx-auto shadow-grey-500 rounded-full"/>
            <h2 className="text-xl font-bold text-center mt-2">Digital Marketing Management</h2>
            <p className="text-center mt-2"> Creating content for your blog, newsletter and other digital platforms that align with your brand identity and goals.</p>
            <button className="mx-auto block border bg-transparent hover:bg-blue-700  font-bold py-2 px-4 rounded mt-4">Learn More</button>
        </div>
    </div>
</div>
    </div>
  )
}

export default Services
