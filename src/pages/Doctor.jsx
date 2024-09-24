import { useNavigate, useParams } from "react-router-dom";
import { doctors } from "../assets/assets";
import { useState, useEffect } from "react";

const Doctor = () => {
  const { speciality } = useParams();
  const [filterdata, setFilter] = useState([]);
  const navigate = useNavigate();
  const FilterSpeciality = () => {
    if (speciality) {
      setFilter(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilter(doctors);
    }
  };

  useEffect(() => {
    FilterSpeciality();
  }, [speciality, doctors]);
  {
    console.log(filterdata);
  }
  return (
    <div className="py-10  flex ">
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="mr-4">
          <p className="py-4">Browse Through the doctors specialist</p>
          <div className="space-y-7 ">
            <p
              onClick={() =>
                speciality === "General physician"
                  ? navigate("/doctor")
                  : navigate("/doctor/General physician")
              }
              className={`border rounded p-2 text-center cursor-pointer ${
                speciality === "General physician"
                  ? "bg-indigo-100 text-bla"
                  : ""
              }`}
            >
              General physiac
            </p>
            <p
              onClick={() =>
                speciality === "Gynecologist"
                  ? navigate("/doctor")
                  : navigate("/doctor/Gynecologist")
              }
              className={`border rounded p-2 text-center cursor-pointer ${
                speciality === "Gynecologist" ? "bg-indigo-100 text-bla" : ""
              }`}
            >
              Gynecologist
            </p>
            <p
              onClick={() =>
                speciality === "Dermatologist"
                  ? navigate("/doctor")
                  : navigate("/doctor/Dermatologist")
              }
              className={`border rounded p-2 text-center cursor-pointer ${
                speciality === "Dermatologist" ? "bg-indigo-100 text-bla" : ""
              }`}
            >
              Dermatologist
            </p>
            <p
              onClick={() =>
                speciality === "Pediatricians"
                  ? navigate("/doctor")
                  : navigate("/doctor/Pediatricians")
              }
              className={`border rounded p-2 text-center cursor-pointer ${
                speciality === "Pediatricians" ? "bg-indigo-100 text-bla" : ""
              }`}
            >
              Pediatricians
            </p>
            <p
              onClick={() =>
                speciality === "Neurologist"
                  ? navigate("/doctor")
                  : navigate("/doctor/Neurologist")
              }
              className={`border rounded p-2 text-center cursor-pointer ${
                speciality === "Neurologist" ? "bg-indigo-100 text-bla" : ""
              }`}
            >
              Neurologist
            </p>
            <p
              onClick={() =>
                speciality === "Gastroenterologist"
                  ? navigate("/doctor")
                  : navigate("/doctor/Gastroenterologist")
              }
              className={`border rounded p-2 text-center cursor-pointer ${
                speciality === "Gastroenterologist"
                  ? "bg-indigo-100 text-bla"
                  : ""
              }`}
            >
              Gastroenterologist
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap gap-4 gap-y-6">
        {filterdata.map((items, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${items._id}`);
            }}
            className="rounded border m-3 cursor-pointer hover:translate-y-[-20px] transition-all duration-500  "
          >
            <img className="w-52 bg-blue-50 " src={items.image} />
            <div className="p-4">
              <div className="text-green-500 flex">
                <p className="w-2 mt-2 gap-2 h-2 bg-green-500 rounded"></p>
                <p>Available</p>
              </div>
              <h1 className="text-1xl font-semibold">{items.name}</h1>
              <p>{items.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctor;
