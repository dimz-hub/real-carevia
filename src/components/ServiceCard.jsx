import Image from 'next/image'
import React from 'react'

const ServiceCard = ({color, card}) => {
  return (
    <div>
             <div className={`w-[90%] mx-auto lg:w-[95%] mb-[35px] bg-[#296374]/80 rounded-xl shadow-2xl  p-6`}>
                        <h3 className={`text-[26px] capitalize font-semibold mb-2 text-white `} >
                          {card.title}
                        </h3>
                        <div>
                          <Image 
                            src={card.img} 
                            alt="service-img" 
                            width={1000} 
                            height={300} 
                            className="w-[450px] rounded-2xl text-center" 
                          />
                        </div>
                        <p className="pt-[20px] text-[17.7px]">
                          {card.desc}
                        </p>
                      </div>
    </div>
  )
}

export default ServiceCard