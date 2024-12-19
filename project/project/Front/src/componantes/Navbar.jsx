import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link,NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
 
       const [visible, setVisible] = useState(false);
       const {setShowSearch, getCartCount,navigate,token,setToken,setCartItems} = useContext(ShopContext);
       const logout = ()=>{
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
        
       }
        

  return (
    <div className='flex items-center justify-between py-5 font-medium '>
      
      <Link to='/'><img src={assets.logo} className='max-w-[250px] ' alt="" /></Link>
      
      <ul className='hidden sm:flex gap-5 text-5m text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/Collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>
        </NavLink>
        <NavLink to='/About' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>
        </NavLink>
    {/* {<NavLink to='/Content' className='flex flex-col items-center gap-1'>
        <p>CONTACT</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
    </NavLink>} */}
      
      </ul>
     <div className='flex items-center gap-6 '>
          {/* {<img onClick={()=>setShowSearch(true)} src={assets.searsh} className='w-6 cursor-pointer' alt='Search'/>} */}

          <div className='group relative'>

            <img onClick={()=> token ? null :navigate('/login')} className='w-10 cursor-pointer' src={assets.user} />
           {/*Dropdown menu*/}
           {token &&
           <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                  {/* {<p className='cursor-pointer hover:text-black'>My Profile</p>} */}
                    <p onClick={()=>navigate('/Orders')} className='cursor-pointer hover:text-black'>Orders</p>
                    <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>

           }
            
          </div>
         <Link to='/cart' className='relative'>
                <img  src={assets.cart} className='w-12 min-w-5'/>
                <p className='absolute right-[-1px] bottom-[-1px] w-5 text-center leading-5 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
         </Link>
         <img onClick={()=>setVisible(true)} src={assets.menu} className='w-10 cursor-pointer sm-hidden'/>
     </div>
     {/*sidebar menu for small screens*/}
     <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ?'w-full' : 'w-0'}`}>
      <div className='flex flex-col text-gray-600'>
        <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
          <img className='h-10 rotate-90' src={assets.dropdown} alt=''/>
          <p>Back</p>
        </div>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
        <NavLink onClick={()=>setVisible(false)}  className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
        <NavLink onClick={()=>setVisible(false)}  className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
        {/* <NavLink onClick={()=>setVisible(false)}  className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink> */}
      </div>
     </div>

    </div>
  )
}

export default Navbar
