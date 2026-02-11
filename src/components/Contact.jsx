import Image from 'next/image';
import React from 'react'
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
        <div>
            <h3 className='text-[#0E6BA8] text-[28px] text-center mb-[15px] mt-[30px]'>Get in Touch <span className='font-semibold'>With Us!</span></h3>
        <form className=' flex flex-col gap-[25px] w-[80%] mx-auto'>
            <input type='text' placeholder='Your Name' className=' outline-none rounded-[10px] border-[1.5px] px-[10px] py-[8px] border-green-800' />
            <input type='email' placeholder='Your Email' className='outline-none rounded-[10px] border-[1.5px] px-[10px] py-[8px] border-green-800' />
            <input type='tel' placeholder='Your Phone' className='outline-none rounded-[10px] border-[1.5px] px-[10px] py-[8px] border-green-800' />
            <input type='date' placeholder='Date'className='outline-none rounded-[10px] border-[1.5px] px-[10px] py-[8px] border-green-800' />
            <textarea type='text' placeholder='Message' className=' outline-none h-[120px] rounded-[10px] border-[1.5px] px-[10px] py-[8px] border-green-800' />
            <button className='bg-gradient-to-r from-blue-500 p-2 font-semibold rounded-[10px] to-emerald-500 text-white'>SUBMIT YOUR MESSAGE NOW</button>
        </form>
        <div className=' mt-[30px] bg-gradient-to-r from-blue-500 to-emerald-500 h-auto pt-[20px] pb-[28px]  '>
         <div className='w-[90%] mx-auto text-white flex items-center-safe gap-[10px] justify-between'>
          <div className='w-[50%]'>

          <h3 className='text-[22px] font-semibold mb-[8px]'>Quick <span className='font-extrabold'>Contact</span></h3>
          <div className='flex mb-[10px] text-[14px] items-center font-bold gap-[5px] border-b-2 pb-[5px] border-white '><span> <FaPhone /></span><span>+44 7761 2642 41</span></div>
          <div className='flex text-[14px] items-center gap-[5px] font-bold mt-[1px] border-b-2 pb-[5px] border-white '><span> <FaEnvelope /></span><span>Sade@careviasolutions.org</span></div>
          
          </div>
         <div>
          <Image src = '/contact2.png' width={200} height={300}  alt='contact-image' className='ml-[12px]' />
         </div>
         </div>
          <p className='mx-auto w-[90%] mt-[20px] text-white text-[17px] text-center'>We provide nationwide coverage across <span className='font-semibold'>England</span> and <span className='font-semibold'>Wales</span> </p>
        </div>
        
        </div>
    </div>
  )
}

export default Contact