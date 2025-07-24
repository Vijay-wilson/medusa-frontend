"use client"

import { Button } from "@medusajs/ui"

const Hero = ({ onSeeMenuClick }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-red-600">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dovpxqg9p/image/upload/v1752914006/Banner4_uonzje.jpg"
          alt="Food Background"
          className="h-full w-full object-cover opacity-80"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="mb-8 sm:mb-12">
          <img
            src="https://res.cloudinary.com/dovpxqg9p/image/upload/v1752914007/burger_logo_gutrxy.png"
            alt="Burger Spot Logo"
            className="mx-auto h-auto max-h-32 w-full max-w-xs object-contain sm:max-h-40 sm:max-w-sm md:max-h-48 md:max-w-md lg:max-w-lg"
          />
        </div>

        {/* Description Text */}
        <div className="mb-10 max-w-4xl px-4 sm:mb-12 sm:px-6">
          <p className="text-lg font-medium leading-relaxed text-white sm:text-xl lg:text-2xl lg:leading-loose">
            Discover burger perfection at Burger Spot. Every click brings you
            closer to mouthwatering creations that keep you coming back. Your
            next obsession is just an order away.
          </p>
        </div>

        {/* See Menu Button */}
        <div className="mb-8">
          <Button
            onClick={onSeeMenuClick}
            className="min-w-48 transform rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white hover:text-red-600 focus:outline-none focus:ring-4 focus:ring-white/50 sm:min-w-52 sm:px-10 sm:text-xl"
          >
            See Menu
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero