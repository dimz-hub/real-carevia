import Image from 'next/image'
import React from 'react'

const Career = () => {
  return (
    <div>
        <div>

          <h3 className='text-[#0E6BA8] text-center text-[35px] font-semibold'>Careers</h3>
        <div className='w-[100%] mx-auto '>
         <div>
            <div className='mt-[30px]'>
                           <Image src='/hero-img.jpg' alt='about-image' width={1000} height={300} className='w-[500px] 
                           '/>
                       </div>
                       <div>
                        <p className='text-center mx-auto mt-[20px] text-[23px] w-[80%] text-blue-300'>
                          <span className='font-bold text-[#296374]'>Make a Difference</span> With a Career in Care
                          </p>
                          <div className='w-[90%] mx-auto my-[15px] text-[18.49px] flex flex-col gap-[15px]'>
                            <p>At Carevia Solutions, we know that caring is a challenging and rewarding career. Our aim is to provide compassionate and caring service our clients  and a fulfilling, supportive work environment for or staff. </p>
                            <p> If you would like to register with our agency, kindly fill out this short form and you will be contact to schedule a meeting.  </p>
                          </div>
                       </div>
         </div>
    <form className="max-w-3xl w-[90%] mx-auto space-y-6">

      {/* Name */}
      <div>
        <label className="font-medium text-[#0C2C55] text-[#0C2C55]">Name *</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          <input
            type="text"
            placeholder="First Name"
            className="border p-3 rounded border-[#296374] w-full border-[#296374]"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border p-3 rounded border-[#296374] w-full"
            required
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label className="font-medium text-[#0C2C55]">Contact Phone Number *</label>
        <input
          type="tel"
          className="border p-3 rounded border-[#296374] w-full mt-2"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="font-medium text-[#0C2C55]">Email</label>
        <input
          type="email"
          className="border p-3 rounded border-[#296374] w-full mt-2"
        />
      </div>

      {/* Location */}
      <div>
        <label className="font-medium text-[#0C2C55]">Where are you located? *</label>
        <input
          type="text"
          placeholder="City"
          className="border p-3 rounded border-[#296374] w-full mt-2"
          required
        />
      </div>

      {/* Live-in / Live-out */}
      <div>
        <label className="font-medium text-[#0C2C55]">Are you looking for live-in or live-out work? *</label>
        <div className="flex gap-6 mt-2">
          {["Live-in", "Live-out", "Either"].map(option => (
            <label key={option} className="flex items-center gap-2">
              <input type="radio" name="workType" required />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <label className="font-medium text-[#0C2C55]">How many years of experience do you have? *</label>
        <input
          type="number"
          min="0"
          className="border p-3 rounded border-[#296374] w-full mt-2"
          required
        />
      </div>

      {/* Certificates */}
      <div>
        <label className="font-medium text-[#0C2C55]">What certificates do you have? *</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
          {["HHA", "CNA", "PCA", "LPN", "Other"].map(cert => (
            <label key={cert} className="flex items-center gap-2">
              <input type="checkbox" />
              {cert}
            </label>
          ))}
        </div>
      </div>

      {/* Driver */}
      <div>
        <label className="font-medium text-[#0C2C55]">Do you have a driver's license/car? *</label>
        <div className="flex flex-col gap-2 mt-2">
          <label><input type="radio" name="driver" required /> Yes, with my own car</label>
          <label><input type="radio" name="driver" /> Yes, without a car</label>
          <label><input type="radio" name="driver" /> No</label>
        </div>
      </div>

      {/* Agency experience */}
      <div>
        <label className="font-medium text-[#0C2C55]">Have you worked with an agency before? *</label>
        <div className="flex gap-6 mt-2">
          <label><input type="radio" name="agency" required /> Yes</label>
          <label><input type="radio" name="agency" /> No</label>
        </div>
      </div>

      {/* Client types */}
      <div>
        <label className="font-medium text-[#0C2C55]">What kind of clients have you cared for? *</label>
        <input
          type="text"
          className="border p-3 rounded border-[#296374] w-full mt-2"
          required
        />
      </div>

      {/* About */}
      <div>
        <label className="font-medium text-[#0C2C55]">Please tell us a little about yourself *</label>
        <textarea
          rows="4"
          className="border p-3 rounded border-[#296374] w-full mt-2"
          required
        />
      </div>

      {/* Referral */}
      <div>
        <label className="font-medium text-[#0C2C55]">How did you hear about us?</label>
        <input
          type="text"
          className="border p-3 rounded border-[#296374] w-full mt-2"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-[#629FAD] text-white px-6 py-3 rounded border-[#296374] hover:bg-blue-700 transition"
      >
        Submit Application
      </button>

    </form>
        </div>
        </div>
    </div>
  )
}

export default Career