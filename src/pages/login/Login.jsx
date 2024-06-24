import React from 'react'
import "./login.css"
import { GoPerson } from 'react-icons/go'
import { MdOutlinePassword } from 'react-icons/md'
export const Login = () => {
  return (
    <div className='login'>
        <div className="inp">
        <GoPerson />
        <input type="text" placeholder='enter username'/>
        </div>
        
        <div className="inp">
        <MdOutlinePassword />
        <input type="password" placeholder='enter password'/>
        </div>


            <button className='btn'>Login</button>
    </div>
  )
}
