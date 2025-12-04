import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black px-5 lg:px-28 py-3 lg:py-6 flex items-center justify-between mt-16'>
      <div className='text-white text-2xl lg:text-3xl' style={{ fontFamily: "'Dancing Script', cursive" }}>
        Kunal Kolhe
      </div>

      <div className='text-white lg:font-semibold lg:text-sm font-normal text-[10px] text-right lg:space-y-3'>
        <p>@ 2025 Kunal Kolhe</p>
        <p>Full Stack Developer Portfolio</p>
      </div>
    </div>
  )
}
