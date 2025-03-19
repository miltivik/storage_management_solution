import React from 'react'
import Hero from '@/app/features/components/Hero'
import HeaderHome from '@/components/HeaderHome'
import Footer from '@/app/home/components/Footer'

const page = () => {
  return (
    <div>
      <HeaderHome />
      <Hero />
      <Footer />
    </div>
  )
}

export default page