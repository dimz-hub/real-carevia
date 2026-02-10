import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div>
        <div className='w-[90%] mx-auto pb-[100px]'>
            <div className=''>
                <Image src='/hero-img.jpg' alt='about-image' width={1000} height={300} className='w-[450px] rounded-2xl
                '/>
            </div>
            <div className='flex flex-col gap-[35px] '>
                <h3 className='font-bold text-[#0E6BA8] text-[30px] mt-[20px] capitalize'>
                    Welcome to <br /> Carevia solutions
                </h3>
                <p className='text-[17px]'>
                    At Carevia Solutions, we are dedicated to supporting older adults by providing
            reliable, compassionate, and highly trained care professionals across England
            and Wales. Our mission is simple: to ensure every individual receives the dignity,
            respect, and quality of care they deserve. 
                </p>
                <p className='text-[17px]'>
                            We specialise in elder care staffing solutions, connecting care homes, supported
            living services, and private clients with skilled caregivers who are committed
            to making a positive difference in people’s lives. Whether short-term cover or
            long-term staffing support is required, we respond quickly and professionally
            to meet every need. 
                </p>
            </div>
            <div className='flex flex-wrap mt-[40px] items-center w-[90%] justify-center mx-auto gap-[20px]'>

             <div className="w-[180px] h-36 bg-gradient-to-r from-white to-green-200 rounded-lg shadow-md p-2">
  
  <p className="text-[45px] w-full text-center font-bold text-[#0E6BA8]">5</p>
  <p className="text-center text-[19px] ">Years of <br /> quality care</p>
</div>
             <div className="w-[180px] h-36 bg-gradient-to-r from-white to-green-200 rounded-lg shadow-md p-2">
  
  <p className="text-[45px] w-full text-center font-bold text-[#0E6BA8]">270+</p>
  <p className="text-center text-[19px] ">Service <br /> Users</p>
</div>
             <div className="w-[180px] h-36 bg-gradient-to-r from-white to-green-200 rounded-lg shadow-md p-2">
  
  <p className="text-[45px] w-full text-center font-bold text-[#0E6BA8]">100+</p>
  <p className="text-center text-[19px] ">Skilled<br /> empolyees</p>
</div>
             <div className="w-[180px] h-36 bg-gradient-to-r from-white to-green-200 rounded-lg shadow-md p-2">
  
  <p className="text-[45px] w-full text-center font-bold text-[#0E6BA8]">80+</p>
  <p className="text-center text-[19px] ">Families <br /> Supported</p>
</div>
         
            </div>

        </div>
    </div>
  )
}

export default About