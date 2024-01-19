import React from 'react'

import Navbar from "./Navbar"

const Home = () => {
  return (
  <div className='h-screen flex pb-6 flex-col justify-between'>
    <div className="mb-auto">
      <Navbar />
    </div>
  
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-end items-center h-full'>
        <h1 className="text-5xl font-big text-white mb-2">NICOLE WANJALA</h1>
        <h3 className="font-texts text-sm text-white mb-4">CONTENT CREATOR AND SOCIAL MEDIA MANAGER</h3>
        <button className="bg-transparent p-1 border text-white font-bold hover:bg-purple-500 transition duration-300 ease-in-out">BOOK A COSULTATION</button>
      </div>
    </div>
  </div>

  )
}

export default Home;
