import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import BurgerSpotFooter from "./BurgerSpotFooter"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              Burger Spot
            </LocalizedClientLink>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Categories
                </span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Burger spot. All rights reserved.
          </Text>
          <MedusaCTA />
        </div> */}
      </div>
          <BurgerSpotFooter />
    </footer>
  )
}

// import React from "react";
// import { FaInstagram } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer
//       className="bg-zinc-800 text-white w-full mt-24"
//       id="footer"
//       data-aos="fade-up"
//     >
//       <div className="max-w-7xl mx-auto px-8 lg:px-16">
//         <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 py-16">

//           {/* Left Section - Brand & Description */}
//           <div className="lg:max-w-2xl">
//             <a
//               href="/"
//               className="inline-block mb-8 hover:opacity-80 transition-opacity duration-300"
//             >
//               <img
//                 src="https://res.cloudinary.com/dovpxqg9p/image/upload/v1752914007/burger_logo_gutrxy.png"
//                 alt="Burger Spot Logo"
//                 className="w-80 h-auto"
//               />
//             </a>
//             <p className="text-white text-lg leading-relaxed mb-8 max-w-xl">
//               At Burgerspot, we serve up mouthwatering burgers made from fresh,
//               quality ingredients and deliver them right to your door. Whether
//               you're in the mood for a classic or something with a twist, we've
//               got the perfect burger to hit the spot. Order from Burgerspot today
//               and enjoy a great meal without leaving home!
//             </p>
//             {/* <div className="flex items-center">
//               <a
//                 href="https://www.instagram.com/burger_spot/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center justify-center hover:-translate-y-1 transition-transform duration-300"
//               >
//                 <FaInstagram
//                   size={32}
//                   className="w-12 h-12 p-2 rounded-lg text-white bg-gradient-to-br from-purple-600 via-pink-600 to-orange-400"
//                 />
//               </a>
//             </div> */}
//           </div>

//           {/* Right Section - Contact */}
//           <div className="lg:text-right">
//             <h3 className="text-white text-2xl font-bold mb-6 uppercase tracking-wide">
//               GET IN TOUCH
//             </h3>
//             <div className="space-y-4 text-lg">
//               <p className="text-gray-300">
//                 Near Al Shaheed Al Quba Mosque, Al Falah City, Abu Dhabi
//               </p>
//               <p>
//                 <a
//                   href="tel:+97125505485"
//                   className="text-white hover:text-gray-300 transition-colors duration-300"
//                 >
//                   +971 2 550 5485
//                 </a>
//               </p>
//               <p>
//                 <a
//                   href="mailto:burgerspotcafeteria@gmail.com"
//                   className="text-white hover:text-gray-300 transition-colors duration-300"
//                 >
//                   burgerspotcafeteria@gmail.com
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="border-t border-gray-600 pt-8 pb-8">
//           <p className="text-white text-base text-center">
//             Copyright2025@burgerspotcafeteria@gmail.com-All Right Reserved
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
