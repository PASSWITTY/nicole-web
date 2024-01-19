//import React from 'react'
import content from '../resources/content3.jpg'
import social from '../resources/analytics.jpg'
import digital from '../resources/analytics.jpg'
import image1 from '../resources/digital1.png'
import image2 from '../resources/digital_email_marketing.png'
import image3 from '../resources/Digital_Landing_Page.png'

const Digital = () => {
  return (
    <div className='bg-[#e8e8]'>
        <div className="container mx-auto py-10">
            <h1 className="text-5xl font-big font-bold text-center mb-10">Work Samples</h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                    <img src={content} alt="Content Creation" className="mx-auto shadow-grey-700 h-60 shadow-2xl rounded-lg"/>
                    <p className="text-center font-bold mt-2">Blog Posts</p>
                </div>
                <div className="col-span-1">
                    <img src={social} alt="Social Media Management" className="mx-auto shadow-grey-700 h-60 shadow-xl rounded-lg"/>
                    <p className="text-center font-bold mt-2">E-mail Newsletters</p>
                </div>
                <div className="col-span-1">
                    <img src={digital} alt="Digital Marketing" className="mx-auto shadow-grey-700 shadow-xl h-60 rounded-lg"/>
                    <p className="text-center font-bold mt-2">Landing Pages</p>
                </div>
            </div>
        </div>
        <div className='bg-[#f0ebe1]'>
            <h1 className="text-4xl pt-4 font-big font-bold text-center mb-10">Blog Posts</h1>
            <div className='flex flex-row '>
                <div className='w-1/2'>
                    <img src={image1} alt=" " className='w-auto h-96 pl-8'/>
                </div>
                <div className='flex flex-col mx-auto pt-24'>
                    <h2 className='font-big text-2xl font-semibold'>Client:</h2>
                    <h2 className='font-big my-9 text-2xl font-semibold'>Goal:</h2>
                    <h2 className='font-big text-2xl font-semibold'>Creative Process:</h2>
                </div>
            </div>
        </div>
        <div className='bg-[#f0ebe1]'>
            <h1 className="text-4xl pt-4 font-big font-bold text-center mb-10">E-Mail Newsletters</h1>
            <div className='flex flex-row '>
                <div className='w-1/2 flex items-center justify-center'>
                    <img src={image2} alt=" " className='h-[430px]  w-auto'/>
                </div>
                <div className='flex flex-col mx-auto pt-24'>
                    <h2 className='font-big text-2xl font-semibold'>Client:</h2>
                    <h2 className='font-big my-9 text-2xl font-semibold'>Goal:</h2>
                    <h2 className='font-big text-2xl font-semibold'>Creative Process:</h2>
                </div>
            </div>
        </div>
        <div className='bg-[#f0ebe1]'>
            <h1 className="text-4xl pt-4 font-big font-bold text-center mb-10">Landing Pages</h1>
            <div className='flex flex-row '>
                <div className='w-1/2 flex items-center justify-center'>
                    <img src={image3} alt=" " className='h-[430px] w-auto'/>
                </div>
                <div className='flex flex-col mx-auto pt-24'>
                    <h2 className='font-big text-2xl font-semibold'>Client:</h2>
                    <h2 className='font-big my-9 text-2xl font-semibold'>Goal:</h2>
                    <h2 className='font-big text-2xl font-semibold'>Creative Process:</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Digital
