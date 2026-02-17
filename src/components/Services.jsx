import Image from 'next/image'
import React from 'react'
import ServiceSlide from './ServiceSlide'

const Services = () => {
  const cards = [
    { id: 2, title: "Domiciliary Care", img: '/homecare1.webp', desc: 'We supply skilled domiciliary care professionals to support individuals with day-to-day tasks in their own homes.'   },
    { id: 5, title: "End Of Life Care", img: '/endlife.webp', desc: 'Our end of life care staff provide compassionate, respectful support during life’s most sensitive moments.'   },
    { id: 6, title: "Respite Care", img: '/respitecare.webp', desc: 'We offer trusted respite care staff to give family carers a well-deserved break while ensuring continuity of high-quality care.'  },
    { id: 1, title: "Home Care", img: '/domicare1.webp', desc: 'Our home care staff provide compassionate, one-to-one support in the comfort of your own home.'   },
    { id: 3, title: "Dementia Care", img: '/dementia1.jpg', desc: 'Our dementia care staff are specially trained to provide patient, compassionate support for individuals living with memory loss.'   },
    { id: 4, title: "Learning Difficulty Care", img: '/learn.webp', desc: 'We provide dedicated care professionals who support individuals with learning disabilities to live fulfilling, independent lives.'   },
  ];
  return (
    <div>
        <div>
            <div className='bg-gradient-to-r pb-[80px] md:mt-[-25px] from-white to-[#629FAD]/50 w-full h-auto'>
             
             <h3 className='text-[33px] md:text-[38px] text-[#0E6BA8] pt-[50px]  font-bold justify-center flex w-[100%]'>
                Our Care Services
             </h3>
             <div className='md:flex md:gap-[25px] md:w-[80%] md:mx-auto md:justify-center'>

             <div className='w-full mt-[30px] flex-1'>

             <Image src='/carevia2.png' alt='about-image' width={1000} height={300} className='w-[500px] md:hidden'/>
             <Image src='/carevia1c.png' alt='about-image' width={1000} height={300} className='w-[500px] rounded-[25px] hidden md:block'/>
            </div>
             <p className='text-[18px] pt-[30px] md:pt-[80px] flex-1 w-[90%] mx-auto md:text-[20px]'>
             We provide reliable, compassionate, and highly trained care professionals to support elderly individuals in a wide range of settings across England and Wales. Our staffing solutions are designed to meet the unique needs of care providers, families, and service users, ensuring safe, dignified, and person-centred care at all times.
             </p>
                            </div>
              <div className='md:w-[80%] w-[90%] mx-auto' >
                <p className='text-[#0E6BA8] text-[22px] text-center mb-[8px] mt-[30px]'>Staffing Solutions in Your Area</p>
                <p Qualified className='text-[18px]'>Our dedicated team proudly serves wide range of locations, delivering reliable and high-quality Service whenever you need us. Qualified healthcare staff for hospitals, nursing homes, residential home, and care providers, reliable, professional and ready to support you. </p>
              </div>
              <div className='flex items-center justify-center'>

            <button className='border border-white bg-[#629FAD] p-3 text-white mt-[35px] rounded-[10px] text-[16px] font-semibold antialiased'>Learn More</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Services