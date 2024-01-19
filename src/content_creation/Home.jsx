//import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Navbar from "../sections/Navbar";
import image from "../resources/content_image.png"
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='h-full pb-16 bg-cover bg-center bg-no-repeat '
        style={{ backgroundImage: `url(${image})` }} >
        <Navbar / >      
      
    <div className='bottom-0  flex flex-end'>
    <div className='flex flex-col pt-96 h-auto bottom-0 pb-4 justify-center w-full items-center'>
        <h1 className=" text-white text-5xl font-big font-bold" >CONTENT CREATION </h1>
        <h3 className=" text-white text-2xl font-big" > WORK SAMPLES</h3>   
    </div>
    <div className="pt-48 pr-8" >
      <Link to="/social"><MdOutlineKeyboardDoubleArrowRight size='36'/> </Link>
    </div>
    </div>
    </div>   
  )
}

export default Home
