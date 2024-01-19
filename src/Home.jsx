import React from 'react'

import HomePage from './sections/Home'
import image from './resources/home1.png'
import About from './sections/About';
import WorkSamples from './sections/WorkSamples';
import Services from './sections/Services';
import Coments from './sections/Coments';
import Workwithme from './sections/Workwithme';
//import Final from './sections/Final';
import Brands from './sections/Brands';
//import Test from './sections/test'


const Home = () => {
  return (
    <div className="w-4/5 mx-auto">
      <div className=' h-full  bg-cover bg-center bg-no-repeat '
        style={{ backgroundImage: `url(${image})` }} >
        <HomePage />
      </div>
      <About />
      <WorkSamples />
      <Services />
      <Coments />
      <Brands />
      <Workwithme />
     
      
    </div>
  )
}

export default Home
