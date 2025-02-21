import { useState } from "react";
import JobCard from "../components/JobCard";
import SearchFilter from "../components/SearchFilter";
import { jobData } from "../utils/staticData";
import nojobfound from "../assets/nojobfound.png";
import { motion,  AnimatePresence} from "framer-motion";
import { IoMdCloseCircle } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Navbar from "../components/Navbar";
//import { X } from "lucide-react"; // For close icon

const Jobs = () => {
  const [search, setSearch] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [minPackage, setMinPackage] = useState("");
  const [sideNavBar,setSideNavBar] = useState("");
  console.log("selected card",sideNavBar)

  const filteredJobs = jobData.filter((job) => {
    return (
      (search === "" || job.title.toLowerCase().includes(search.toLowerCase())) &&
      (employmentType === "" || job.employmentType === employmentType) &&
      (minPackage === "" || parseInt(job.salary.split(" ")[0].replace("₹", "").replace(",", "")) >= parseInt(minPackage))
    );
  });

  return (
    <>
    <Navbar />
   
    <div className="container mx-auto px-10 py-5 md:px-25 bg-gradient-to-r from-gray-800 to-black min-h-screen">


     {/* side nav bar animation */}
     <AnimatePresence>
      {sideNavBar && (

        <>
         {/* Blurred Background Overlay */}
         <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-70 z-40"
              onClick={() => setSideNavBar(null)} // Close when clicking outside
            ></motion.div>


         <motion.div
         initial={{ x: "100%" }}
         animate={{ x: 0 }}
         exit={{ x: "100%" }}
         transition={{ duration: 0.4, ease: "easeInOut" }}
         className="fixed top-13 right-0 h-[500px] md:h-full lg:h-[500px] w-full md:w-1/2 bg-slate-800 shadow-lg p-3 z-50 rounded-md flex flex-col overflow-scroll"
       >
         {/* Close Button */}
         <button className="absolute top-4 right-4 text-gray-700" onClick={() => setSideNavBar(null)}>
         
         <IoMdCloseCircle size ={30} className = "text-white"/>
         </button>
        
         {/* Card Details */}
        <div>
        <div className=" overflow-scroll md:overflow-hidden transition-all">
      <div className="p-5 text-white flex items-center space-x-4">
        <img src={sideNavBar.logo} alt={sideNavBar.company} className="w-20 h-20 rounded-full border-2 text-white" />
        <div>
          <h2 className="text-2xl font-bold">{sideNavBar.title}</h2>
          <div className = "flex my-3 text-center ">
          <FaLocationDot size={20} className ="mr-1"/>
          <p>
            {sideNavBar.location}
          </p>
          </div>
        </div>

       
      </div>

      {/* <div className = "flex justify-end my-2 mx-3"> 
        <p className="text-lg font-semibold text-white">{side.salary}</p>
        </div> */}

     
      <hr className = "text-white border"></hr>
      <div className="p-5 space-y-3">
      <h2 className="text-xl font-bold text-white">Life At :</h2>
        <p className="text-white text-lg md:text-xl">{sideNavBar.lifeat}</p>
       {/* lifet at image */}
       <div>
        <img src = {sideNavBar.lifeatimg}
        alt = {sideNavBar.lifeatimg}
        className = "h-[200px] w-auto rounded-md"
        
        />
       </div>
       
      
      </div>
    </div>

        </div>
       </motion.div>
       </>
      )}
      </AnimatePresence>


      <SearchFilter
        setSearch={setSearch}
        setEmploymentType={setEmploymentType}
        setMinPackage={setMinPackage}
      />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mt-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} setSideNavBar = {setSideNavBar}/>)
        ) : (
          <div className = "flex flex-col justify-center text-center">
            <img src ={ nojobfound} alt="nojob" className ="h-[500px]"/>
          <p className="text-white text-5xl my-10 font-extrabold flex justify-center">No jobs found</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Jobs;
