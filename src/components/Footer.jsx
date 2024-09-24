import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
    const navigate = useNavigate()
  return (
    <div className="md:mx-10">
      <div className="grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* First column with logo and description */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="Company Logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint enim
            animi possimus tenetur.
          </p>
        </div>

        {/* Second column with company links */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 cursor-pointer text-gray-600">
            <li  onClick={()=>{navigate('/')}}>Home</li>
            <li onClick={()=>{navigate('/about')}}>About Us</li>
            <li onClick={()=>{navigate('/contact')}}>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Third column with contact information */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 8121331121</li>
            <li>chandrasekhargollapalli416@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Footer bottom section */}
      <div>
        <hr className="my-5" />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ Prescripto - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;



