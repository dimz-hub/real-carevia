import Image from 'next/image';
import React from 'react'
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
        <div>
            <h3 className='text-[#0E6BA8] text-[30px] text-center mb-[15px] md:text-[40px] mt-[30px]'>Get in Touch <span className='font-semibold'>With Us!</span></h3>
        
           <div className=' mt-[30px] bg-gradient-to-r from-[#0C2C55] to-[#296374]/90 h-auto pt-[20px] pb-[28px]  '>
         <div className='w-[90%] md:w-[70%] mx-auto text-white flex items-center-safe gap-[10px] justify-between'>
          <div className='w-[50%]'>

          <h3 className='text-[22px] md:text-[38px] font-semibold mb-[8px]'>Quick <span className='font-extrabold'>Contact</span></h3>
          <div className='flex mb-[10px] text-[14px] md:text-[20px] items-center font-bold gap-[5px] border-b-2 pb-[5px] border-white '><span> <FaPhone /></span><span>+44 7761 2642 41</span></div>
          <div className='flex text-[14px] md:text-[20px] items-center gap-[5px] font-bold mt-[1px] border-b-2 pb-[5px] border-white '><span> <FaEnvelope /></span><span>Sade@careviasolutions.org</span></div>
          
          </div>
         <div>
          <Image src = '/contact2.png' width={200} height={300}  alt='contact-image' className='ml-[12px] md:w-[250px]' />
         </div>
         </div>
          <p className='mx-auto w-[90%] mt-[20px] text-white text-[17px] text-center md:text-[18.5px]'>We provide nationwide coverage across <span className='font-semibold'>England</span> and <span className='font-semibold'>Wales</span> </p>
        </div>
        <div className='w-[100%] text-center text-[20px] font-semibold mt-[30px] text-[#0E6BA8] underline'>Make Enquires below</div>
        <form className=' mb-[30px] flex flex-col gap-[25px] w-[80%] mx-auto mt-[30px]'>
            <input type='text' placeholder='Your Name' className=' outline-none rounded-[10px] border-[1.5px] px-[10px] py-[8px] border-[#0C2C55]' />
            <input type='email' placeholder='Your Email' className='outline-none rounded-[10px] border-[1.5px] px-[10px] py-[8px] border-[#0C2C55]' />
            <input type='tel' placeholder='Your Phone' className='outline-none rounded-[10px] border-[1.5px] px-[10px] py-[8px] border-[#0C2C55]' />
            <input type='date' placeholder='Date'className='outline-none rounded-[10px] border-[1.5px] px-[10px] py-[8px] border-[#0C2C55]' />
            <textarea type='text' placeholder='Message' className=' outline-none h-[120px] rounded-[10px] border-[1.5px] px-[10px] py-[8px] border-[#0C2C55]' />
            <button className='bg-gradient-to-r from-[#0C2C55] to-[#296374]/90 p-2 font-semibold rounded-[10px]  text-white'>SUBMIT YOUR MESSAGE NOW</button>
        </form>
     
        
        </div>
    </div>
  )
}

export default Contact