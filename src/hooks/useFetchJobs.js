// import { useState, useEffect } from "react";
// import { fetchJobs } from "../utils/staticData";

// const useFetchJobs = (search, employmentType, minPackage) => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getJobs = async () => {
//       setLoading(true);
//       const jobResults = await fetchJobs(search, employmentType, minPackage);
//       setJobs(jobResults);
//       setLoading(false);
//     };
//     getJobs();
//   }, [search, employmentType, minPackage]);

//   return { jobs, loading };
// };

// export default useFetchJobs;
