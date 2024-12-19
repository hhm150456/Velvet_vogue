import React from 'react'
import { assets } from '../assets/assets'
import { Navigate } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

         <div>
            <img src={assets.logo} className='mb-5 w-32' alt=""/>
            {/* <p className='w-full md:w-2/3 text-gray-600'>
                © 2024 Designed by <span className='font-bold'>Mystic</span>
            </p> */}
         </div>

         <div>
            {/* <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li onClick={()=>navigate('/Orders')}>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul> */}
         </div>

         <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                 <li>ha3187@fayoum.edu.eg</li>
            </ul>
         </div>

      </div>
      <div>
        <hr />
        <p className='py-5 text-l text-center font-medium'>&copy;2024 Velvet Vauge All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
