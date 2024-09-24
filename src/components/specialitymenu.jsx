import { specialityData } from "../assets/assets"
import {Link} from 'react-router-dom'
const SpecalityMenu= ()=>{
return(
    <div id='speciality' className='flex flex-col  justify-center items-center py-10 '>
<h1 className='text-3xl font-semibold py-6'>Find by Speciality</h1>
<p className='py-6 sm:w-1/3 text-sm text-center'>simply browse through our extensive list of trusted doctors,scedule your appointment hassle-free</p>
<div className='flex gap-6 py-12 flex-col sm:flex-row'>
{specialityData.map((items,index)=>(
    <Link onClick={()=>scrollTo(0,0)} to={`/doctor/${items.speciality}`} className='cursor-pointer hover:translate-y-[-20px] transition-all duration-500' key={index}>
<img src={items.image}/>
<h1 className=' py-6 flex justify-center'>{items.speciality}</h1>
    </Link>
))}

</div>
    </div>
)
}

export default SpecalityMenu