import React from 'react'
import Title from '../componantes/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../componantes/NewsletterBox'

const Content = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[450px]' src={assets.contact} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>4912 Borer Mountains,<br /> Benjaminport, NC 67729-3740</p>
          <p className='text-gray-500'>Tel: +20 102 345 6789 <br /> Email: beautyforever@velvetvogue.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Velvet Vogue</p>
          <p className='text-gray-500'>At Velvet Vogue, we believe that our success is built on the talented individuals who share our passion for fashion and excellence. If you're dedicated, creative, and committed to making an impact, we’d love to hear from you.

Explore exciting career opportunities, and join a team that thrives on innovation, style, and collaboration. Visit our careers page to learn more about current job openings and how you can contribute to the Velvet Vogue journey</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jops</button>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  )
}

export default Content
