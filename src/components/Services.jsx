import Image from 'next/image'
import React from 'react'
import ServiceSlide from './ServiceSlide'

const Services = () => {
  return (
    <div>
        <div>
            <div className='bg-gradient-to-r pb-[80px] from-white to-[#629FAD]/50 w-full h-auto'>
             
             <h3 className='text-[33px] text-[#1F6E8C] pt-[50px]  font-bold justify-center flex w-[100%]'>
                Our Care Services
             </h3>
             <div className='w-full mt-[30px]'>

             <Image src='/hero-img.jpg' alt='about-image' width={1000} height={300} className='w-[500px] 
                            '/>
            </div>
             <p className='text-[17px] pt-[30px] w-[90%] mx-auto'>
             We provide reliable, compassionate, and highly trained care professionals to support elderly individuals in a wide range of settings across England and Wales. Our staffing solutions are designed to meet the unique needs of care providers, families, and service users, ensuring safe, dignified, and person-centred care at all times.
             </p>
              <ServiceSlide />
              <div className='flex items-center justify-center'>

            <button className='border border-white bg-[#629FAD] p-3 text-white mt-[35px] rounded-[10px] text-[16px] font-semibold antialiased'>Learn More</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Services