import React from 'react'
import Hero from '../components/Hero'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'

const home = () => {
  return (
    <div>
      <Hero />
      <BestSeller/>
      <OurPolicy/>
    </div>
  )
}

export default home