//import React from 'react'
import { MdOutlineKeyboardDoubleArrowLeft} from "react-icons/md";
import Navbar from "../sections/Navbar";
import image from "../resources/Digital_Marketing.jpg"
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='h-full bg-cover bg-center bg-no-repeat '
        style={{ backgroundImage: `url(${image})` }} >
        <Navbar / >      
      
        <div className='bottom-0 flex flex-end'>
            <div className="pt-44 pl-8" >
            <Link to="/social"> <MdOutlineKeyboardDoubleArrowLeft size='36'/> </Link>
            </div>
            <div className='flex flex-col pt-96 h-auto bottom-0 justify-center w-full items-center'>
                <h1 className="text-white text-5xl font-big font-bold" > SOCIAL MEDIA MARKETING </h1>
                <h3 className="text-white text-2xl font-big" > WORK SAMPLES</h3>   
            </div>
            <div className="pt-48 pr-8" >
                
            </div>
        </div>
    </div>   
  )
}

export default Home;
