// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft} from "react-icons/md";

import one from'../resources/8.png'
import two from'../resources/9.png'
import three from '../resources/10.png'
import four from '../resources/11.png'
import five from'../resources/12.png'
import six from'../resources/13.png'
import seven from'../resources/14.png'
import eight from'../resources/15.png'
import nine from'../resources/16.png'
import ten from'../resources/17.png'
import eleven from'../resources/18.png'
import twelve from'../resources/19.png'
import thirteen from '../resources/20.png'
import fourteen from'../resources/21.png'
import fifteen from '../resources/22.png'
import sixteen from '../resources/23.png'

const Brands = () => {
   
  const images = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen ]
  
  const [start, setStart] = useState(0);
  const displayImages = images.slice(start, start + 4);

  const scrollLeft = () => {
    setStart(start > 0 ? start - 1 : 0);
  };

  const scrollRight = () => {
    setStart(start < images.length - 4 ? start + 1 : start);
  };

  return (
    <div className='bg-[#c86f76] flex flex-col gap-11 p-3   w-auto h-[70vh]'>
    <h1 className="text-5xl font-big font-bold text-center ">Brands I Have Worked With</h1>
    <div className="flex items-center justify-center">
        <button onClick={scrollLeft} className="bg-blue-200 mr-16 hover:bg-blue-300 font-bold py-2 px-4 rounded transition duration-500 ease-in-out transform hover:-translate-x-1 hover:scale-110">
          <MdOutlineKeyboardDoubleArrowLeft size='36'/>
        </button>
        <div className="flex space-x-4 overflow-x-hidden scrollbar-hide">
          {displayImages.map((image, index) => (
            <div key={index} className="bg-white shadow-2xl border-2  rounded max-w-md mx-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <div className="rounded-t bg-white ">
                <img src={image} alt="" className="h-48 rounded" />
              </div>
            </div>
          ))}
        </div>
        <button onClick={scrollRight} className="bg-blue-200 hover:bg-blue-300 ml-16 font-bold py-2 px-4 rounded transition duration-500 ease-in-out transform hover:-translate-x-1 hover:scale-110">
          <MdOutlineKeyboardDoubleArrowRight size='36'/>
        </button>
    </div>
    <div className='flex flex-col items-center justify-center '>
      <button className="bg-transparent p-1 border rounded w-28 border-black  text-black    hover:bg-purple-500  transition duration-300 ease-in-out">LEARN MORE</button>
    </div>
    </div>
  )
}

export default Brands;
