import React from 'react'
import Title from '../componantes/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../componantes/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Velvet Vague, we blend modern sophistication with timeless elegance to create a distinct line of clothing that empowers individuals to express their unique style. Our brand was born from a desire to offer high-quality, fashion-forward pieces designed to inspire confidence and grace.</p>
          <p>From curated collections featuring premium fabrics to meticulous attention to detail, Velvet Vague ensures every piece embodies both style and substance. We believe in creating clothing that transcends fleeting trends, offering versatile designs that remain relevant season after season.</p>
          <p>Our mission is to provide more than just clothing – we strive to offer a lifestyle that reflects sophistication, self-expression, and effortless beauty. At Velvet Vague, we invite you to embrace your individuality and discover pieces that resonate with your personal journey.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Velvet Vague, we strive to redefine elegance by blending timeless designs with contemporary fashion. Our mission is to create clothing that empowers individuals to express their unique style while embracing comfort and sophistication. We aim to inspire confidence in every piece, ensuring that our customers feel their best in every moment</p>
        </div>
      </div>

      <div className='text-2xl py-4'>
        < Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance: </b>
          <p className='text-gray-600'>At Velvet Vague, we are committed to delivering superior quality in every garment we create. Our dedication to craftsmanship ensures that each piece reflects attention to detail, premium materials, and long-lasting durability. We believe that true style comes from the confidence of knowing your wardrobe is both fashionable and built to endure.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convience: </b>
          <p className='text-gray-600'>We understand the value of a seamless shopping experience. At Velvet Vague, we offer easy and hassle-free online shopping, bringing the latest trends straight to your doorstep. Our efficient customer service and user-friendly platform make it simple to find your perfect look without leaving the comfort of your home.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service: </b>
          <p className='text-gray-600'>At Velvet Vague, our customers are at the heart of everything we do. From personalized style advice to prompt assistance, our dedicated customer support team is always ready to ensure you have a smooth and enjoyable experience. We are passionate about providing the highest level of service, ensuring that every interaction leaves you feeling confident and satisfied.</p>
        </div>
      </div>

    { /* < NewsletterBox/>*/}
      
    </div>
  )
}

export default About
