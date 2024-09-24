import { useParams } from "react-router-dom"
import { assets, doctors } from "../assets/assets"
import { useState,useEffect } from "react"


const Appointment = ()=>{
    const [docinfo,setDocinfo] =  useState([])
    const {docId} = useParams()
  
    const doctorInfo = async()=>{
        const data =  doctors.find(item=>item._id === docId)
      setDocinfo(data)
    }

    useEffect(()=>{
        doctorInfo()
    },[doctors,docId])

    return docinfo && (
        <div className='flex flex-col md:flex-row py-16 gap-5 ' >
          <div  >
{console.log(docinfo)}
<img className='bg-primary rounded-lg w-full sm:max-w-72' src={docinfo.image}/>
          </div>
          <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white sm:mx-0 mt-[-80] sm:mt-0'>
            <div className='flex font-semibold text-2xl gap-'>
                <p>{docinfo.name} </p>
                <img src={assets.verified_icon}/>
            </div>
            <div className=' text-gray-500 text-lg'>
                <p>{docinfo.degree}-{docinfo.speciality} <button className='border rounded-full p-2 border-gray-500'>{docinfo.experience}</button></p>
                
<div className='flex gap-2 font-semibold text-black'>
    <p>About </p>
    <img src={assets.info_icon}/>
    </div>
    <p>{docinfo.about}</p>
    <p className='py-2 font-semibold text-black'>Appointment fee:${docinfo.fees}</p>

            </div>
          </div>
        </div>
    )
}

export default Appointment