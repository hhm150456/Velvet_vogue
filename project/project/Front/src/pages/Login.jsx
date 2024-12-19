import React, { useContext, useEffect, useState } from 'react'

import axios from 'axios';
import { toast } from 'react-toastify';
import { ShopContext } from '../context/ShopContext';

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');
  const {token ,setToken,navigate,backendUrl}=useContext(ShopContext)

  const [name,setName]=useState('')
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if(currentState==='Sign Up'){
        const response = await axios.post(backendUrl+'/api/user/register',{name, email,password})
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
        }else{
          toast.error(response.data.message)
        }
        
      }else{
        const response = await axios.post(backendUrl + '/api/user/login',{email,password})
        if(response.data.success){
          setToken(response.data.token)
          
          localStorage.setItem('token',response.data.token)
        }else{
          toast.error(response.data.message)
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
 useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])
  return (
      <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 mx-auto gap-4 text-gray-800'>
        <div className='inline-flex items-center gap-2 mt-4'>
          <p className='prata-reguler text-3xl'>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
        </div>
        {currentState === 'Login' ? '': <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>}
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="Email"  className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="Password"  className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='curser-pointer'>Forgot Your Password?</p>
          {
            currentState === 'Login'
            ? <p onClick={()=>setCurrentState('Sign Up')} className='curser-pointer'>Create Acount</p>
            : <p onClick={()=>setCurrentState('Login')} className='curser-pointer'>Login Here</p>
          }
        </div>
        <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
      </form>

  )
}

export default Login
