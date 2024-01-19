//import React from 'react'
import image from '../resources/footer.jpeg'
import instagram from '../resources/instagram.png';
import linkedin from '../resources/linkedin.png';
import web from '../resources/internet.png';
import email from '../resources/email.png'

const Final = () => {
  return (
    <div className='flex flex-col justify-center items-center p-10'>
      <div>
        <img src={image} alt="" className='h-60 w-56'/>
      </div>
      <div className='flex gap-9 items-center '>
            <div className='h-full '>
                <h1 className='text-black text-3xl font-bold font-big'>Lets</h1>
                <h1 className='text-black text-3xl font-bold font-big'>Collaborate!</h1>
            </div>
            <div className='border-l-4  border-black pl-4'>
                <div className='flex gap-2 text-center mb-3'>
                    <img src={email} alt='' className='w-8 h-8' />
                    <h3> isawnicole@gmail.com </h3>
                </div>
                <div className='flex flex-row mb-5'>
                    <img src={instagram} alt='' className='w-8 h-8' />
                    <img src={linkedin} alt='' className='w-8 mx-5 h-8' />
                    <img src={web} alt='' className='w-8 h-8'/>
                </div>
                <button className="mx-auto my-5 block border-2 bg-transparent hover:bg-blue-700 text-black border-neutral-600 font-bold py-2 px-4 rounded mt-4">Book A Consultation</button>
            </div>
      </div>
    </div>
  )
}

export default Final
