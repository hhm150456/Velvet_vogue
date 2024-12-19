import React from 'react'
import Hero from '../componantes/Hero'
import LatestCollection from '../componantes/LatestCollection'
import BestSeller from '../componantes/BestSeller'
import OurPolicy from '../componantes/OurPolicy'
import NewsletterBox from '../componantes/NewsletterBox'


const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      
    </div>
  )
}
///*<NewsletterBox/>
export default Home
