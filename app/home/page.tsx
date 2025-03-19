"use client";
import React from 'react'
import Hero from '@/app/home/components/Hero'
import Feature from '@/app/home/components/Features'
import Pricing from '@/app/home/components/Pricing'
import Footer from '@/app/home/components/Footer'
import Simple from '@/app/home/components/Simple'
import Refran from '@/app/home/components/Refran'
import WorkSmart from '@/app/home/components/WorkSmart';
import {GridHome} from '@/app/home/components/GridHome';


const Home = () => {
  return (
    <main>
      <Hero/>
      <Simple />
      <GridHome />
      <WorkSmart />
      <Feature />
      <Refran />
      <Pricing />
      <Footer />
      </main>
  )
}

export default Home