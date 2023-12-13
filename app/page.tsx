"use client"
import Image from 'next/image'
import { useState } from 'react'

const valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function Home() {
  const [firstName , setFirstName ] = useState("")
  const [lastName , setLastName ] = useState("")
  const [email , setEmail ] = useState("")
  const [password , setPassword ] = useState("")
  const [showfirstName , setShowFirstName ] = useState(false)
  const [showlastName , setShowLastName ] = useState(false)
  const [showemail , setShowEmail ] = useState(false)
  const [showpassword , setShowPassword ] = useState(false)
  return (
    <div className=' w-screen h-screen flex flex-col md:flex-row'>
      <div className='py-20 md:py-0 w-full md:w-1/2 flex justify-center items-center'>
        <div className=' flex flex-col w-4/6'>
          <div className=' text-center md:text-start text-5xl text-white font-bold'>
            Learn to code by watching others
          </div>
          <div className='  text-center md:text-start  text-white mt-10'>
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
          </div>
        </div>
      </div>
      <div className=' w-full md:w-1/2 flex justify-center pb-20 md:pb-0 md:justify-start items-center'>
        <div className=' flex flex-col w-11/12 lg:w-10/12 xl:w-8/12'>
          <div className=' bg-custom-200 p-5 rounded-lg text-center text-white shadow-[0_8px_0px_0px_rgba(0,0,0,0.2)]'>
            <span className=' font-bold'>Try it free 7 days</span> then $20/mo. thereafter
          </div>
          <div className=' bg-white p-7 mt-10 rounded-lg flex space-y-5 flex-col shadow-[0_8px_0px_0px_rgba(0,0,0,0.2)]'>
            <div className=' flex flex-col'>
              <input type="text" placeholder={ showfirstName ? "" : "First Name"}  value={firstName} onChange={(e)=>{setFirstName(e.currentTarget.value)}} className={ showfirstName ? "e" : "i"} />
              <div className={ showfirstName ? "s" : "u"}>First Name cannot be empty</div>
            </div>
            <div className=' flex flex-col'>
              <input type="text" placeholder={ showlastName ? "" : "Last Name"} value={lastName} onChange={(e)=>{setLastName(e.currentTarget.value)}} className={ showlastName ? "e" : "i"}/>
              <div className={ showlastName ? "s" : "u"}>Last Name cannot be empty</div>
            </div>
            <div className=' flex flex-col'>
              <input type="email" placeholder={ showemail ? "" : 'Email Address'}  value={email} onChange={(e)=>{setEmail(e.currentTarget.value)}} className={ showemail ? "e" : "i"}/>
              <div className={ showemail ? "s" : "u"}>Looks like this is not an email</div>
            </div>
            <div className=' flex flex-col'>
              <input type="password" placeholder={ showpassword ? "" : 'Password'} value={password} onChange={(e)=>{setPassword(e.currentTarget.value)}} className={ showpassword ? "e" : "i"}/>
              <div className={ showpassword ? "s" : "u"}>Password cannot be empty</div>
            </div>
            <button  
            onClick={()=>{
              firstName === "" ? setShowFirstName(true) : setShowFirstName(false);
              lastName === "" ? setShowLastName(true) : setShowLastName(false);
              !email.match(valid) ? setShowEmail(true) : setShowEmail(false);
              password === "" ? setShowPassword(true) : setShowPassword(false);
            }}
            
            className=' uppercase bg-custom-100 p-5 rounded-lg text-white font-medium'>
              Claim your free trial
            </button>
            <div className=' text-xs text-center text-gray-400'>
              By clicking the button, you are agreeing to our <span className=' text-custom-500'>Terms and Services</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )}