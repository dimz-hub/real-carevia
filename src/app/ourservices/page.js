import ServiceCard from '@/components/ServiceCard';
import ServiceSlide from '@/components/ServiceSlide';
import React from 'react'

const service = () => {
  
    const cards = [
    { id: 1, title: "Home Care", img: '/hero-img.jpg' , desc: 'Our home care staff provide compassionate, one-to-one support in the comfort of your own home. From personal care and daily assistance to companionship and mobility support, we help individuals remain safe, independent, and dignified while continuing to live where they feel most at ease.' },
    { id: 2, title: "Domiciliary Care", img: '/hero-img.jpg' , desc: 'We supply skilled domiciliary care professionals to support individuals with day-to-day tasks in their own homes. Our carers provide flexible, reliable assistance tailored to each person’s needs, helping maintain independence, routine, and quality of life.'},
    { id: 3, title: "Dementia Care", img: '/hero-img.jpg', desc: 'Our dementia care staff are specially trained to provide patient, compassionate support for individuals living with memory loss. We focus on safety, consistency, and meaningful engagement, helping clients feel secure, respected, and understood in familiar surroundings.' },
    { id: 4, title: "Learning Difficulty Care", img: '/hero-img.jpg', desc: 'We provide dedicated care professionals who support individuals with learning disabilities to live fulfilling, independent lives. Our staff offer person-centred assistance that encourages confidence, choice, and meaningful participation in daily activities and the wider community.' },
    { id: 5, title: "End of Life Care", img: '/hero-img.jpg', desc: 'Our end of life care staff provide compassionate, respectful support during life’s most sensitive moments. We focus on comfort, dignity, and emotional reassurance, supporting both individuals and their families with kindness and professionalism.' },
    { id: 6, title: "Respite Care", img: '/hero-img.jpg', desc: 'We offer trusted respite care staff to give family carers a well-deserved break while ensuring continuity of high-quality care. Whether short-term or planned support, our professionals provide safe, compassionate care with minimal disruption to routine.' },
 
  ];
  return (
       <div>
        <div className='bg-gradient-to-r pb-[30x]  from-white to-[#9ACBD0]/70 '>
        <div className='w-[90%] mx-auto pb-[40px]'>

            <h3 className='text-[#006A71] text-[35px] font-semibold text-center pt-[20px] pb-[15px]'>Our Services</h3>
            <p className='text-[18px] mb-[15px]'>We provide highly trained, reliable care professionals to support individuals and families at home and in care settings. From companionship and personal care to specialised support for dementia, learning disabilities, and complex needs, our staff are carefully matched to ensure comfort, dignity, and continuity of care. Our focus is simple: dependable staffing, delivered with compassion and professionalism.</p>
           <p className='text-[18px]'>We offer a wide range of staffs which <span className='font-semibold'>includes</span></p>
        </div>
           <div className='pb-[40px]'>
              <ServiceSlide cards={cards} color = {true}/>
           </div>
                </div>
            <p className='mt-[20px] w-[90%] mx-auto text-[18px] text-center'> <span className='text-[#006A71] font-semibold '  >Staffs</span> in each category are  trained and qualified to work in various aspect of care <span className='text-[#1F6E8C] font-semibold'> Such as</span>     </p>
            <div className='flex flex-wrap w-[100%] mx-auto'>
           <div className='mt-[30px]'>
              {
                cards.map((card) => 
                    <div key={card.id} className='text-white'>
                    <ServiceCard card = {card} color />
                    </div>
                )
              }
            </div>
           </div>
    </div>
  
  )
}

export default service