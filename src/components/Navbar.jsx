import { NavLink, useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"
import { useState } from "react"



const Navbar = ()=>{

    const navigate = useNavigate()
    const [token,setToken] =  useState(true)

    return(
        <div className='flex border-b-2 justify-between items-center py-4 '>
            <div>
            <img className='w-44 cursor-pointer' src={assets.logo}/>
            </div>
            <div >
                <ul className='hidden md:flex text gap-10 font-medium'>
                <NavLink to='/'>
                <li >   HOME</li>
                <hr className=' h-0.5 bg-red-400 w-4/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/doctor'>
                <li >ALLDOCTORS</li>
                <hr className='h-0.5 bg-red-400 w-4/5 m-auto  hidden' />
                </NavLink>
                <NavLink to='/about'>
                <li  >ABOUT</li>
                <hr className='h-0.5 bg-red-400 w-4/5 m-auto hidden ' />
                </NavLink>
                <NavLink to='contact'>
                <li >CONTACT</li>
                <hr className='bg-red-400 h-0.5 w-4/5 m-auto hidden ' />
                </NavLink>
                </ul>
             

            </div>
            <div >
                {token ? <div>
                    <div className='w-10 flex  cursor-pointer group relative gap-4'>
                        <img className='rounded-full'src={assets.profile_pic}/>
                    <img src={assets.dropdown_icon}/>
                 
                        <div className='absolute top-0 right-0 pt-16  text-gray-600 hidden group-hover:block'>
                            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 '>
                            <p  className='hover:text-black' onClick={()=>{navigate('/my-profile')}}>My Profile</p>   
                            <p className='hover:text-black' onClick={()=>{navigate('/my-appointment')}}>My Appointments</p>
                            <p className='hover:text-black' onClick={()=>{navigate('/'),setToken(false)}}>Logout</p>
                           
                            </div>
                        </div>
                    </div>

                </div>:
                <button onClick={()=>navigate('/login')} className='bg-blue-700 text-white p-4 rounded-full hidden md:block' >Creat account</button>
                }

            </div>
        </div>
    )
}

export default Navbar