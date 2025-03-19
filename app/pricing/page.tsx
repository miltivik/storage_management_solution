import React from 'react'
import HeaderHome from '@/components/HeaderHome'
import Pricing from '@/app/pricing/components/Pricing'
import Footer from '@/app/home/components/Footer'

const page = () => {
  return (
    <div>
        <HeaderHome />
        <Pricing />
        <Footer />
    </div>
  )
}

export default page