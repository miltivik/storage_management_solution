"use client";
import React from 'react'
import SplitText from "@/components/SplitText"

const Refran = () => {
    const containerStyles = "py-10 bg-white sm:py-16 lg:py-24";
    const innerContainerStyles = "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8";
    const itemStyles = "flex flex-col items-center";
    const subtitleSection = "mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8 w-[600px] text-center";
    const titleSection = "text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl";

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
      };

  return (
        <section className={containerStyles}>
    <div className={innerContainerStyles}>
        <div className={itemStyles}>
            <div className={itemStyles}>
<SplitText
    text="With StoreIt"
    className={titleSection}
    delay={50}
    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
    easing="easeOutCubic"
    threshold={0.2}
    rootMargin="-50px"
    onLetterAnimationComplete={handleAnimationComplete}
/>
            </div>
        <p className={subtitleSection}>
          You have a Cloud Storage Without the Clutter – Secure, Fast, Yours
        </p>
        </div>
    </div>
        </section>
  )
}

export default Refran