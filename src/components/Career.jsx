import Image from 'next/image'
import React from 'react'

const Career = () => {
  return (
    <div>
        <div className="
  w-screen
  min-h-[100vh]
  bg-gradient-to-bl
  from-emerald-700/70
  from-[73%]
  to-blue-400/60
  
">
<div className='w-[90%] mx-auto'>

<div className=' pt-[60px]'>
    <Image src='/hero-img.jpg' alt='career-img' width={1000} height={200} className='w-[430px] h-[250px] rounded-[10px]' />
</div>
<div className='mt-[30px] '>

<p className='border-2 uppercase  text-white border-white inline px-[10px] py-[7px]'>  Careers</p>
</div>
<h3 className='text-white text-[28px] mt-[25px] font-semibold antialiased'>Great Care Needs <br /> Great Personnels</h3>
<p>
    At Carevia Solutions, we know that caring is a challenging and rewarding career. Our aim is to provide a compassionate
</p>

</div>
</div>
    </div>
  )
}

export default Career 