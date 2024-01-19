import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft} from "react-icons/md";
import Navbar from "../sections/Navbar";
import image from "../resources/Social_Media.jpg"
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='h-full bg-cover bg-center bg-no-repeat '
        style={{ backgroundImage: `url(${image})` }} >
        <div>
            <Navbar / >      
        
            <div className='bottom-0  flex flex-end'>
                <div className="pt-48 pl-8" >
                    <Link to="/content"> <MdOutlineKeyboardDoubleArrowLeft size='36'/> </Link>
                </div>
                <div className='flex flex-col pt-96  pb h-auto bottom-0 justify-center w-full items-center'>
                    <h1 className=" text-white text-5xl font-big font-bold" >SOCIAL MEDIA MARKETING </h1>
                    <h3 className=" text-white text-2xl font-big" > WORK SAMPLES</h3>  
                </div>
                <div className="pt-48 pr-8" >
                    <Link to="/digital"><MdOutlineKeyboardDoubleArrowRight size='36'/> </Link>
                </div>
            </div>
        </div>
    </div>   
  )
}

export default Home;
