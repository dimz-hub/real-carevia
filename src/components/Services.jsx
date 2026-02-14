import Image from 'next/image'
import React from 'react'
import ServiceSlide from './ServiceSlide'

const Services = () => {
  const cards = [
    { id: 1, title: "Home Care", img: '/hero-img.jpg', desc: 'Our home care staff provide compassionate, one-to-one support in the comfort of your own home.'   },
    { id: 2, title: "Domiciliary Care", img: '/hero-img.jpg', desc: 'We supply skilled domiciliary care professionals to support individuals with day-to-day tasks in their own homes.'   },
    { id: 3, title: "Dementia Care", img: '/hero-img.jpg', desc: 'Our dementia care staff are specially trained to provide patient, compassionate support for individuals living with memory loss.'   },
    { id: 4, title: "Learning Difficulty Care", img: '/hero-img.jpg', desc: 'We provide dedicated care professionals who support individuals with learning disabilities to live fulfilling, independent lives.'   },
    { id: 5, title: "End Of Life Care", img: '/hero-img.jpg', desc: 'Our end of life care staff provide compassionate, respectful support during life’s most sensitive moments.'   },
    { id: 6, title: "Respite Care", img: '/hero-img.jpg', desc: 'We offer trusted respite care staff to give family carers a well-deserved break while ensuring continuity of high-quality care.'  },
  ];
  return (
    <div>
        <div>
            <div className='bg-gradient-to-r pb-[80px] from-white to-[#629FAD]/50 w-full h-auto'>
             
             <h3 className='text-[33px] text-[#0E6BA8] pt-[50px]  font-bold justify-center flex w-[100%]'>
                Our Care Services
             </h3>
             <div className='w-full mt-[30px]'>

             <Image src='/carevia2.png' alt='about-image' width={1000} height={300} className='w-[500px] 
                            '/>
            </div>
             <p className='text-[17px] pt-[30px] w-[90%] mx-auto'>
             We provide reliable, compassionate, and highly trained care professionals to support elderly individuals in a wide range of settings across England and Wales. Our staffing solutions are designed to meet the unique needs of care providers, families, and service users, ensuring safe, dignified, and person-centred care at all times.
             </p>
              <ServiceSlide cards={cards}/>
              <div className='flex items-center justify-center'>

            <button className='border border-white bg-[#629FAD] p-3 text-white mt-[35px] rounded-[10px] text-[16px] font-semibold antialiased'>Learn More</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Services