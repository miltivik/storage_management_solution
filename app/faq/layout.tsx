import React from 'react'
import HeaderHome from "@/components/HeaderHome";
import Footer from '@/app/home/components/Footer';
const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <HeaderHome />
        {children}
        <Footer />
    </div>
  )
}

export default layout