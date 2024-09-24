import { useNavigate } from "react-router-dom"
import { doctors } from "../assets/assets"

const TopDoctors = ()=>{
    const navigate = useNavigate()
    return(
        <div className='flex flex-col items-center gap-4 my-16'>
           
<h1 className='text-3xl font-semibold text-gray-800'>Top Doctors to Book</h1>
<p>simply browse through our extensive list of trusted doctors</p>
<div className='flex  flex-wrap justify-center'>
    {doctors.slice(0,10).map((items,index)=>(
       <div onClick={()=>{navigate(`/appointment/${items._id}`)}} className='rounded border m-3 cursor-pointer hover:translate-y-[-20px] transition-all duration-500  '>
        <img  className='w-52 bg-blue-50 'src={items.image}/>
        <div className='p-4'>
        <div className='text-green-500 flex'> 
            <p className='w-2 mt-2 gap-2 h-2 bg-green-500 rounded'></p><p>Available</p>
            </div>
            <h1 className='text-1xl font-semibold'>{items.name}</h1>
            <p>{items.speciality}</p>
            </div>
       </div>
    ))}
   
</div>
<div className='py-10 '>
<button onClick={()=>{navigate('/doctor')}} className=' bg-blue-50 rounded-full hover:translate-y-[-10px] transition-all duration-500 w-36 h-10'>More</button>
</div>
        </div>
    )
}

export default TopDoctors