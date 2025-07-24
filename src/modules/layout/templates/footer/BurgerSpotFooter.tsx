import React from "react";
import { FaInstagram } from "react-icons/fa";


export default function BurgerSpotFooter() {
  return (
    <footer 
      className="bg-zinc-800 text-white w-full mt-24" 
      id="footer" 
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 py-16">
          
          {/* Left Section - Brand & Description */}
          <div className="lg:max-w-2xl">
            <a 
              href="/" 
              className="inline-block mb-8 hover:opacity-80 transition-opacity duration-300"
            >
              <img
                src="https://res.cloudinary.com/dovpxqg9p/image/upload/v1752914007/burger_logo_gutrxy.png"
                alt="Burger Spot Logo"
                className="w-80 h-auto"
              />
            </a>
            <p className="text-white text-lg leading-relaxed mb-8 max-w-xl">
              At Burgerspot, we serve up mouthwatering burgers made from fresh, 
              quality ingredients and deliver them right to your door. Whether 
              you're in the mood for a classic or something with a twist, we've 
              got the perfect burger to hit the spot. Order from Burgerspot today 
              and enjoy a great meal without leaving home!
            </p>
            {/* <div className="flex items-center">
              <a
                href="https://www.instagram.com/burger_spot/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center hover:-translate-y-1 transition-transform duration-300"
              >
                <FaInstagram 
                  size={32} 
                  className="w-12 h-12 p-2 rounded-lg text-white bg-gradient-to-br from-purple-600 via-pink-600 to-orange-400" 
                />
              </a>
            </div> */}
          </div>

          {/* Right Section - Contact */}
          <div className="lg:text-right">
            <h3 className="text-white text-2xl font-bold mb-6 uppercase tracking-wide">
              GET IN TOUCH
            </h3>
            <div className="space-y-4 text-lg">
              <p className="text-gray-300">
                Near Al Shaheed Al Quba Mosque, Al Falah City, Abu Dhabi
              </p>
              <p>
                <a 
                  href="tel:+97125505485" 
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                >
                  +971 2 550 5485
                </a>
              </p>
              <p>
                <a 
                  href="mailto:burgerspotcafeteria@gmail.com" 
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                >
                  burgerspotcafeteria@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-600 pt-8 pb-8">
          <p className="text-white text-base text-center">
            Copyright2025@burgerspotcafeteria@gmail.com-All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}