import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import ServiceSlide from '@/components/ServiceSlide';
import React from 'react'

const service = () => {
  
    const cards = [
    { id: 1, title: "Home Care", img: '/domicare1.webp' , desc: 'Our home care staff provide compassionate, one-to-one support in the comfort of your own home. From personal care and daily assistance to companionship and mobility support, we help individuals remain safe, independent, and dignified while continuing to live where they feel most at ease.' },
    { id: 2, title: "Domiciliary Care", img: '/homecare1.webp' , desc: 'We supply skilled domiciliary care professionals to support individuals with day-to-day tasks in their own homes. Our carers provide flexible, reliable assistance tailored to each person’s needs, helping maintain independence, routine, and quality of life.'},
    { id: 3, title: "Dementia Care", img: '/dementia1.jpg', desc: 'Our dementia care staff are specially trained to provide patient, compassionate support for individuals living with memory loss. We focus on safety, consistency, and meaningful engagement, helping clients feel secure, respected, and understood in familiar surroundings.' },
    { id: 4, title: "Learning Difficulty Care", img: '/learn.webp', desc: 'We provide dedicated care professionals who support individuals with learning disabilities to live fulfilling, independent lives. Our staff offer person-centred assistance that encourages confidence, choice, and meaningful participation in daily activities and the wider community.' },
    { id: 5, title: "End of Life Care", img: '/endlife.webp', desc: 'Our end of life care staff provide compassionate, respectful support during life’s most sensitive moments. We focus on comfort, dignity, and emotional reassurance, supporting both individuals and their families with kindness and professionalism.' },
    { id: 6, title: "Respite Care", img: '/respitecare.webp', desc: 'We offer trusted respite care staff to give family carers a well-deserved break while ensuring continuity of high-quality care. Whether short-term or planned support, our professionals provide safe, compassionate care with minimal disruption to routine.' },
 
  ];

 const staffCards =  [
      { id: 1, title: "Registered Nurses", img: '/carevia2.png' , desc: '' },
      { id: 2, title: "Healthcare Assistants", img: '/carevia4.png' , desc: ''},
    { id: 3, title: "Cleaners and Domestic Staff", img: '/cleaner.jpg', desc: '' },
    { id: 4, title: "Support Workers", img: '/carevia3.png', desc: '' },
 
  ];

  return (
       <div>
        <div className='bg-gradient-to-r pb-[30x]  from-white to-[#9ACBD0]/70 '>
         <section className="relative w-screen h-[80vh] md:h-screen">
      {/* Wrapper to hold background and overlay */}
      <div className="absolute inset-0 w-full h-full">
        {/* Background image */}
        <div
          className="
            w-full h-full
            bg-[url('/carevia5.png')]
            bg-cover
            bg-center
            md:bg-center
          "
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>
       <div className="relative z-10 flex flex-col items-center  text-center text-white px-4 h-full">
          <h3 className='mt-[150px] text-[30px] capitalize md:text-[44px] font-semibold'> Built for care. Delivered with precision.</h3>
          <p className='text-[20px] mt-[20px] md:text-[24px]'>We don’t just supply staff, We support care.</p>
          <p className='text-[18px] mt-[20px] md:text-[20px]'>
            Our experienced professionals integrate seamlessly into your service, giving you reliable support exactly when you need it.
          </p>
       </div>
      </section>

        <div className='w-[90%] mx-auto pb-[40px]'>

            <h3 className='text-[#006A71] border-b  text-[35px] font-semibold text-center pt-[20px] mb-[20px]'>Our Services</h3>
            <p className='text-[18px] mb-[15px]'>We provide highly trained, reliable care professionals to support individuals and families at home and in care settings. From companionship and personal care to specialised support for dementia, learning disabilities, and complex needs, our staff are carefully matched to ensure comfort, dignity, and continuity of care. Our focus is simple: dependable staffing, delivered with compassion and professionalism.</p>
           <p className='text-[18px]'>We offer a wide range of staffs which <span className='font-semibold'>includes</span></p>
        </div>
           <div className='pb-[40px]'>
              <ServiceSlide cards={staffCards} color = {true} />
           </div>
                </div>
            <p className='mt-[20px] w-[90%] mx-auto text-[18px] text-center'> <span className='text-[#006A71] font-semibold '  >Staffs</span> in each category are  trained and qualified to work in various aspect of care <span className='text-[#1F6E8C] font-semibold'> Such as</span>     </p>
            <div className=''>
          <div className="mt-[30px] mx-auto  w-[90%]">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {cards.map((card) => (
      <ServiceCard key={card.id} card={card} />
    ))}
  </div>
</div>


            <div className='h-[40vh] flex flex-col mt-[40px] gap-[10px] items-center justify-center bg-[#84A7A1]/70 '>
              <p className='w-[87%] text-center text-[18px] mx-auto'>"I underestimated how hard it was to find support for my adult son who has challenging behaviour, but getting in conatct with Carevia Solutions gave us the perfect care he needed. "</p>
              <p className='text-center text-[18px] font-semibold'>
              - LUCY R, CAREVIA SOLUTIONS <br /> CLIENT
              </p>
            </div>
           </div>
            <Footer />
    </div>
  
  )
}

export default service