import React from 'react'
import { Sponsers } from '../Components/Sponsors/Sponsers'

function SponsorPage() {
  return (
    <div className="bg-[url('/bg-texture.jpg')] bg-repeat bg-auto min-h-screen bg-black text-white">
      <div className='w-full flex justify-center items-center'>
      <div className="mt-[8vh] w-48 sm:w-56 md:w-64 mb-4 sm:mb-6 md:mb-8">
          <img
            src="/Logos/Ing_White_2025.png"
            alt="Ingenium Logo"
            className="w-full h-auto"
          />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-10">
        
        <Sponsers />
      </div>
    </div>

  )
}

export default SponsorPage
