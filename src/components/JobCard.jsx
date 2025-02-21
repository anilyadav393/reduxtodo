import { FaToolbox } from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";


const JobCard = ({ job,setSideNavBar }) => {
  return (
   
    <div className="bg-slate-800 shadow-lg rounded-xl overflow-scroll md:overflow-hidden hover:shadow-2xl transition-all h-[500px]" >
      <div className="p-5 text-white flex items-center space-x-4">
        <img src={job.logo} alt={job.company} className="w-20 h-20 rounded-full border-2 text-white" />
        <div>
          <h2 className="text-lg md:text-2xl font-bold">{job.title}</h2>
          <p className="text-md">{job.company}</p>
         
        </div>  
      </div>


      <div className = "flex justify-end my-2 mx-3"> 
        <p className="text-lg font-semibold text-white">{job.salary}</p>
        </div>
      <hr className = "text-white border"></hr>

      <div className="p-5 space-y-5">
      <h2 className="text-lg md:text-2xl font-bold text-white">Description:</h2>
        <p className="text-white text-lg md:text-xl">{job.description}</p>
       
        <button className="bg-orange-500 text-white py-3 px-3 rounded-full mt-10 flex items-center animate-pulse" onClick = {()=>setSideNavBar(job)}>
        <FaToolbox size ={20} className = "mx-2"/>
          {job.employmentType}
          <FaArrowAltCircleRight size ={20} className = "mx-2"/>
          
          </button>
      </div>

      {/* <div className = "flex justify-end items-end">
        Explore
      </div> */}
    </div>
    
  );
};

export default JobCard;
