
import React from 'react'
import { Link } from 'react-router-dom';
import image from '../resources/about1.png'

//<button class="bg-white text-purple-500 font-bold py-2 px-4 rounded-full mt-4 hover:bg-purple-500 hover:text-white transition duration-300 ease-in-out">CHECK OUT MY BLOG</button>
const About = () => {
  return (
    <div className='   bg-cover bg-center bg-no-repeat '
        style={{ backgroundImage: `url(${image})` }}
    >
      <div className='h-screen flex '>
        <div className='flex flex-col text-white  items-center justify-end gap-5  w-7/12'>
          <div >
              <h1 className='text-5xl font-big  '> ABOUT ME</h1>
          </div>
          <div className=' flex mb-10 font-texts mx-5 text-white'>
              <h4>I am a blogger, content creator and social media manager. I started my fashion blog in 2018 but soon  pivoted to self-development and personal finances </h4>
              <h4>I enjoy creating all forms of art from drawing to writing and even photography and vedio. I have created content and managed social media accounts for both local and international businesses </h4>
          </div>
        </div>
        <div className='flex flex-col items-center justify-end mx-auto mb-10'>
        <Link to="https://nickysaw.com" target="_blank" rel="noopener noreferrer">
          <button className="bg-transparent p-1 border  text-white font-bold   hover:bg-purple-500  transition duration-300 ease-in-out">CHECK OUT MY BLOG</button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default About;


{/*
<div className='flex flex-col text-white  items-center justify-end mx-5 w-7/12'>
        <div>
            <h1 className='text-5xl font-big mb-5'> ABOUT ME</h1>
        </div>
        <div className=' flex mb-8 text-black'>
            <h4>I am a blogger, content creator and social media manager. I started my fashion blog in 2018 but soon  pivoted to self-development and personal finances </h4>
            <h4>I enjoy creating all forms of art from drawing to writing and even photography and vedio. I have created content and managed social media accounts for both local and international businesses </h4>
        </div>
      </div>
      <div className='flex flex-col mb-8 mx-auto justify-end'>
        <button className="bg-transparent border  text-purple-500 font-bold py-2 px-4 mt-4 hover:bg-purple-500 hover:text-white transition duration-300 ease-in-out">CHECK OUT MY BLOG</button>
      </div>
    
*/}




//import React from 'react';


