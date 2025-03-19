"use client";
import React, {useState} from 'react'
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
const commonStyles = {
    header: "py-4 md:py-6",
    container: "px-4 mx-auto sm:px-6 lg:px-8",
    flexCenter: "flex items-center justify-between",
    logo: "w-auto h-8",
    menuButton: "text-gray-900",
    menuIcon: "w-7 h-7",
    navLink:
      "text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2",
    signUpButton:
      "inline-flex items-center justify-center px-12 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",
    sectionTitle: "px-6 text-lg text-gray-600 font-inter",
    sectionHeading:
      "mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj",
    gradientText: "relative inline-flex sm:inline",
    gradientBackground:
      "bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0",
    callToActionButton:
      "inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",
    demoButton:
      "inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900",
    textMuted: "mt-8 text-base text-gray-500 font-inter",
    imageContainer: "relative mx-auto",
    image: "transform scale-110",
  };



const HeaderHome = () => {
    const [expanded, setExpanded] = useState(false);
  return (
    <div className='overflow-x-hidden bg-gray-50'>      
        <header className={commonStyles.header}>
            <div className={commonStyles.container}>
              <div className={commonStyles.flexCenter}>
                <div className="shrink-0">
                  <a
                    href="home"
                    title="Home"
                    className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    <Image
                      className={commonStyles.logo}
                      src="https://www.auraui.com/logo-light.png"
                      alt="Logo"
                      width={120}
                      height={30}
                    />
                  </a>
                </div>
    
                <div className="flex lg:hidden">
                  <button
                    type="button"
                    className={commonStyles.menuButton}
                    onClick={() => setExpanded(!expanded)}
                    aria-expanded={expanded}
                  >
                    {expanded ? (
                      <FiX className={commonStyles.menuIcon} />
                    ) : (
                      <FiMenu className={commonStyles.menuIcon} />
                    )}
                  </button>
                </div>
    
                <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
                  <a href="features" title="Features" className={commonStyles.navLink}>
                    Features
                  </a>
                  <a href="pricing" title="Pricing" className={commonStyles.navLink}>
                    Pricing
                  </a>
                  <a href="faq" title="Automation" className={commonStyles.navLink}>
                    FAQs
                  </a>
                </div>
    
                <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-12">
                  <a
                    href="#"
                    title="Sign Up"
                    className={commonStyles.signUpButton}
                    role="button"
                  >
                    Sign up
                  </a>
                </div>
              </div>
    
              {expanded && (
                <nav className="px-1 py-8">
                  <div className="grid gap-y-7">
                    <a
                      href="#"
                      title="Features"
                      className={`${commonStyles.navLink} flex items-center p-3 -m-3 rounded-xl hover:bg-gray-50`}
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      title="Pricing"
                      className={`${commonStyles.navLink} flex items-center p-3 -m-3 rounded-xl hover:bg-gray-50`}
                    >
                      Pricing
                    </a>
                    <a
                      href="#"
                      title="Automation"
                      className={`${commonStyles.navLink} flex items-center p-3 -m-3 rounded-xl hover:bg-gray-50`}
                    >
                      Automation
                    </a>
                    <a
                      href="#"
                      title="Customer Login"
                      className={`${commonStyles.navLink} flex items-center p-3 -m-3 rounded-xl hover:bg-gray-50`}
                    >
                      Customer Login
                    </a>
                    <a
                      href="#"
                      title="Sign Up"
                      className={commonStyles.signUpButton}
                      role="button"
                    >
                      Sign up
                    </a>
                  </div>
                </nav>
              )}
            </div>
          </header>
    </div>
  )
}

export default HeaderHome