//import React from 'react'
import image from '../resources/about2.png'

const About = () => {
  return (
    <div className='h-[80vh] text-center bg-cover bg-center bg-no-repeat '
      style={{ backgroundImage: `url(${image})` }} >
      <div className='w-1/2 text-white space-y-2 flex flex-col  pt-16 text-center
       '>
        <h1 className='text-5xl font-big mb-5'> Content Management </h1>
        <h4> This includes managing the scheduling and posting of content in various social media platforms such as Instagram, Facebook, X (Formerly, Twitter), Tiktok and even LinkedIn. </h4>
        <h1 className='text-5xl font-big mb-5'> Community Management </h1>
        <h4> This includes replying to comments, managing the DMs and engaging with your target audience to achieve your goals. </h4>
        <h1 className='text-5xl font-big mb-5'> Analytics and Ads</h1>
        <h4> This includes managing your account analytics, reporting them and using them to create better content and ads. </h4>
      </div>
      <div className='w-1/2'>
        
      </div>
    </div>
  )
}

export default About;
