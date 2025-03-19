"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { MdPlayArrow } from "react-icons/md";
import {Star} from "coolshapes-react"
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);


const commonStyles = {
  header: "py-4 md:py-6",
  container: "px-4 mx-auto sm:px-6 lg:px-8",
  flexCenter: "flex items-center justify-between",
  logo: "w-auto h-12",
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
    "inline-flex items-center justify-center w-full px-8 clashDisplay py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",
  demoButton:
    "inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900",
  textMuted: "mt-8 text-lg text-gray-500 font-inter",
  imageContainer: "relative mx-auto",
  image: "transform scale-100 ",
};

function Hero() {

  const [expanded, setExpanded] = useState(false);

  
  useGSAP(() => {
    gsap.to("#click", {
      duration: 2,
      x: 10,
      y: -20,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  })

  useGSAP(() => {
    gsap.to("#star", {
      duration: 2,
      x: 10,
      y: 0,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    });
  })

  return (
    <div className="overflow-x-hidden  bg-gray-50">
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
                  src="/assets/icons/logo-full-brand.svg"
                  alt="Logo"
                  width={150}
                  height={120}
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
            <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
              <a
                href="sign-up"
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
                  href="sign-up"
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

      <section className="pt-12 bg-gray-50  sm:pt-16">
        <div className={commonStyles.container}>
          <div className="max-w-2xl mx-auto text-center">
            <h1 className={commonStyles.sectionTitle}>
              StoreIt - The best way to store your files
            </h1>
            <p className={`${commonStyles.sectionHeading} mt-5`}>
            A new way to save your
              <span className={commonStyles.gradientText}>
                <span className={commonStyles.gradientBackground}></span>
                <span className="relative"> file </span>
              </span>
            </p>

            <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <a
                href="sign-up"
                title="Watch free demo"
                className={commonStyles.demoButton}
                role="button"
              >
                <MdPlayArrow className="w-5 h-5 mr-2" />
                Start Free
              </a>
            </div>

            <p className={commonStyles.textMuted + " font-clash"}>
              60 Days free trial · No credit card required
            </p>
          </div>
        </div>

        <div className="pb-12 bg-gray-50 bg-gradient-to-b from-[#f9fafb] to-[#FFFFFF]  overflow-hidden">
          <div className="relative">
            <div className="absolute inset-0 h-2/3 bg-gray-50 bg-gradient-to-b from-[#f9fafb] to-[#FFFFFF]"></div>
            <div className={commonStyles.imageContainer}>
              <div className="lg:max-w-6xl lg:mx-auto ">
                <img
                  className={commonStyles.image}
                  src="/dashboard.png"
                  alt="Illustration"
                />
              </div>
              <div className="absolute right-[310px] top-[0px]  flex items-center justify-center">
                <Star id="star" size="120" index="5" noise="false" color="black"/>
              </div>
              <div className="absolute left-[200px] bottom-[-100px]">
                <Image id="click" src={"/3d-render-of-matte-white-arrow-or-pointer.png"} alt={"arrow}"} width={300} height={300}></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;