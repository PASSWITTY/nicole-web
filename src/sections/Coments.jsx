
//import React from "react";
import sun from '../resources/sun1.png'
//import { FaArrowUp, FaArrowDown } from 'react-icons/fa'

const Coments = () => {
  const comments = [
    { author: 'C. K', message: 'Nicole created content for my Instagram law practice account for 6 months. She was very creative, prompt and very effective. My account grew and most importantly I got  several clients via her social media efforts.' },
    { author: 'E. Z', message: 'I was very impressed with Nicoles work She really has a talent for content creation. I barely had any corrections when she sent In the work.' },
    { author: 'K. O', message: 'My Instagram page transformed when I started working with Nicole. She really has an eye for graphics. My numbers and engagement immediately went up' },
    { author: 'K. O', message: 'My Instagram page transformed when I started working with Nicole. She really has an eye for graphics. My numbers and engagement immediately went up' },
    { author: 'K. O', message: 'My Instagram page transformed when I started working with Nicole. She really has an eye for graphics. My numbers and engagement immediately went up' },
    { author: 'K. O', message: 'My Instagram page transformed when I started working with Nicole. She really has an eye for graphics. My numbers and engagement immediately went up' },
    { author: 'K. O', message: 'My Instagram page transformed when I started working with Nicole. She really has an eye for graphics. My numbers and engagement immediately went up' },
    { author: 'K. O', message: 'My Instagram page transformed when I started working with Nicole. She really has an eye for graphics. My numbers and engagement immediately went up' },
    { author: 'K. O', message: 'My Instagram page transformed when I started working with Nicole. She really has an eye for graphics. My numbers and engagement immediately went up' },
    { author: 'K. O', message: 'My Instagram page transformed when I started working with Nicole. She really has an eye for graphics. My numbers and engagement immediately went up' },
    { author: 'K. O', message: 'My Instagram page transformed when I started working with Nicole. She really has an eye for graphics. My numbers and engagement immediately went up' },
    { author: 'K. O', message: 'My Instagram page transformed when I started working with Nicole. She really has an eye for graphics. My numbers and engagement immediately went up' },
    { author: 'K. O', message: 'My Instagram page transformed when I started working with Nicole. She really has an eye for graphics. My numbers and engagement immediately went up' },
    { author: 'K. O', message: 'My Instagram page transformed when I started working with Nicole. She really has an eye for graphics. My numbers and engagement immediately went up' },
    { author: 'K. O', message: 'My Instagram page transformed when I started working with Nicole. She really has an eye for graphics. My numbers and engagement immediately went up' },
    { author: 'K. O', message: 'My Instagram page transformed when I started working with Nicole. She really has an eye for graphics. My numbers and engagement immediately went up' },
    { author: 'K. O', message: 'My Instagram page transformed when I started working with Nicole. She really has an eye for graphics. My numbers and engagement immediately went up' },
    { author: 'K. O', message: 'My Instagram page transformed when I started working with Nicole. She really has an eye for graphics. My numbers and engagement immediately went up' },
    
  ];
  return (
    <div className='flex h-screen bg-[#C46F16]'>
        <div className='flex flex-col justify-center text-white font-big text-start items-center mx-auto w-1/2'>
            <img src= {sun} alt='sun' className='h-20 w-20' />
            <h1 className='text-start text-5xl font-big mb-5'> What</h1>
            <h1 className='text-5xl font-big mb-5'> Clients Say</h1>

        </div>
        <div className="h-full w-1/2 overflow-y-auto p-4">
        {comments.map((comment, index) => (
          <div key={index} className="bg-transparent p-4 rounded-lg mb-4">
            <p className="text-lg font-semibold">{comment.author}</p>
            <p className="text-sm text-white mt-2">{comment.message}</p>
          </div>
        ))}
      </div>
    </div> 
  )
}

export default Coments
