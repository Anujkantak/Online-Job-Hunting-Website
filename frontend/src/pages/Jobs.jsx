// import  { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { clearAllJobErrors, fetchJobs } from "../store/slices/jobSlice";
// import Spinner from "../components/Spinner";
// import { FaSearch } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Jobs = () => {
//   const [city, setCity] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");
//   const [niche, setNiche] = useState("");
//   const [selectedNiche, setSelectedNiche] = useState("");
//   const [searchKeyword, setSearchKeyword] = useState("");

//   const { jobs, loading, error } = useSelector((state) => state.jobs);

//   const handleCityChange = (city) => {
//     setCity(city);
//     setSelectedCity(city);
//   };
//   const handleNicheChange = (niche) => {
//     setNiche(niche);
//     setSelectedNiche(niche);
//   };

//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch(clearAllJobErrors());
//     }
//     dispatch(fetchJobs(city, niche, searchKeyword));
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [dispatch, error, city, niche]);

//   const handleSearch = () => {
//     dispatch(fetchJobs(city, niche, searchKeyword));
//   };

//   const cities = [
//   "All",
//   "Bengaluru",
//   "Hyderabad",
//   "Pune",
//   "Chennai",
//   "Gurugram",
//   "Noida",
//   "Mumbai",
//   "Delhi",
//   "Kolkata",
//   "Ahmedabad",
//   "Jaipur",
//   "Coimbatore",
//   "Chandigarh",
//   "Mohali",
//   "Thiruvananthapuram",
//   "Kochi",
//   "Indore",
//   "Lucknow",
//   "Bhubaneswar",
// ];

//   const nichesArray = [
//     "All",
//     "Software Development",
//     "Web Development",
//     "Cybersecurity",
//     "Data Science",
//     "Artificial Intelligence",
//     "Cloud Computing",
//     "DevOps",
//     "Mobile App Development",
//     "Blockchain",
//     "Database Administration",
//     "Network Administration",
//     "UI/UX Design",
//     "Game Development",
//     "IoT (Internet of Things)",
//     "Big Data",
//     "Machine Learning",
//     "IT Project Management",
//     "IT Support and Helpdesk",
//     "Systems Administration",
//     "IT Consulting",
//   ];

//   return (
//     <>
//       {loading ? (
//         <Spinner />
//       ) : (
//         <section className="jobs">
//           <div className="search-tab-wrapper">
//             <input
//               type="text"
//               value={searchKeyword}
//               onChange={(e) => setSearchKeyword(e.target.value)}
//             />
//             <button onClick={handleSearch}>Find Job</button>
//             <FaSearch />
//           </div>
//           <div className="wrapper">
//             <div className="filter-bar">
//               <div className="cities">
//                 <h2>Filter Job By City</h2>
//                 {cities.map((city, index) => (
//                   <>
//                   <div key={index}>
//                     <input
//                       type="radio"
//                       id={city}
//                       name="city" // radio buttons should have the same name to be grouped
//                       value={city}
//                       checked={selectedCity === city}
//                       onChange={(e) => handleCityChange(e.target.value)}
//                       />
//                     <label htmlFor={city}>{city}</label>
//                   </div>
//                       </>
//                 ))}
//               </div>
//               <div className="cities">
//                 <h2>Filter Job By Niche</h2>
//                 {nichesArray.map((niche, index) => (
//                   <div key={index}>
//                     <input
//                       type="radio"
//                       id={niche}
//                       name="niche"
//                       value={niche}
//                       checked={selectedNiche === niche}
//                       onChange={() => handleNicheChange(niche)}
//                     />
//                     <label htmlFor={niche}>{niche}</label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="container">
//               <div className="mobile-filter">
//                 <select value={city} onChange={(e) => setCity(e.target.value)}>
//                   <option value="">Filter By City</option>
//                   {cities.map((city, index) => (
//                     <option value={city} key={index}>
//                       {city}
//                     </option>
//                   ))}
//                 </select>
//                 <select
//                   value={niche}
//                   onChange={(e) => setNiche(e.target.value)}
//                 >
//                   <option value="">Filter By Niche</option>
//                   {nichesArray.map((niche, index) => (
//                     <option value={niche} key={index}>
//                       {niche}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="jobs_container">
//                 {jobs && jobs.length > 0 ? (jobs.map((element) => {
//                     return (
//                       <div className="card" key={element._id}>
//                         {element.hiringMultipleCandidates === "Yes" ? (
//                           <p className="hiring-multiple">
//                             Hiring Multiple Candidates
//                           </p>
//                         ) : (
//                           <p className="hiring">Hiring</p>
//                         )}
//                         <p className="title">{element.title}</p>
//                         <p className="company">{element.companyName}</p>
//                         <p className="location">{element.location}</p>
//                         <p className="salary">
//                           <span>Salary:</span> Rs. {element.salary}
//                         </p>
//                         <p className="posted">
//                           <span>Posted On:</span>{" "}
//                           {element.jobPostedOn.substring(0, 10)}
//                         </p>
//                         <div className="btn-wrapper">
//                           <Link
//                             className="btn"
//                             to={`/post/application/${element._id}`}
//                           >
//                             Apply Now
//                           </Link>
//                         </div>
//                       </div>
//                     );
//                   })) :
                  
//                   (
//                   /************************************************************/
//                   /* BUG No.2 */
//                   <img src="./notfound.png" alt="job-not-found" style={{width: "100%"}}/>
                
//                 )
//                   /************************************************************/




//                   }
//               </div>
//             </div>
//           </div>
//         </section>
//       )}
//     </>
//   );
// };

// export default Jobs;





import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearAllJobErrors, fetchJobs } from "../store/slices/jobSlice";
import Spinner from "../components/Spinner";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [city, setCity] = useState("");
  const [niche, setNiche] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const { jobs, loading, error } = useSelector((state) => state.jobs);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllJobErrors());
    }
    dispatch(fetchJobs(city, niche, searchKeyword));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, error, city, niche]);

  const handleSearch = () => {
    dispatch(fetchJobs(city, niche, searchKeyword));
  };

  const cities = [
    "All", "Bengaluru", "Hyderabad", "Pune", "Chennai", "Gurugram", "Noida",
    "Mumbai", "Delhi", "Kolkata", "Ahmedabad", "Jaipur", "Coimbatore",
    "Chandigarh", "Mohali", "Thiruvananthapuram", "Kochi", "Indore", "Lucknow", "Bhubaneswar",
  ];

  const nichesArray = [
    "All", "Software Development", "Web Development", "Cybersecurity",
    "Data Science", "Artificial Intelligence", "Cloud Computing", "DevOps",
    "Mobile App Development", "Blockchain", "Database Administration", "Network Administration",
    "UI/UX Design", "Game Development", "IoT (Internet of Things)", "Big Data",
    "Machine Learning", "IT Project Management", "IT Support and Helpdesk",
    "Systems Administration", "IT Consulting",
  ];

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="jobs">
          <div className="search-tab-wrapper">
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="Search job title, skills..."
            />
            <button onClick={handleSearch}>Find Job</button>
            <FaSearch />
          </div>

          <div className="filter-selects">
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="">Filter by City</option>
              {cities.map((c, index) => (
                <option key={index} value={c}>{c}</option>
              ))}
            </select>

            <select value={niche} onChange={(e) => setNiche(e.target.value)}>
              <option value="">Filter by Niche</option>
              {nichesArray.map((n, index) => (
                <option key={index} value={n}>{n}</option>
              ))}
            </select>
          </div>

          <div className="container">
            <div className="jobs_container">
              {jobs && jobs.length > 0 ? (
                jobs.map((job) => (
                  <div className="card" key={job._id}>
                    <p className={job.hiringMultipleCandidates === "Yes" ? "hiring-multiple" : "hiring"}>
                      {job.hiringMultipleCandidates === "Yes" ? "Hiring Multiple Candidates" : "Hiring"}
                    </p>
                    <p className="title">{job.title}</p>
                    <p className="company">{job.companyName}</p>
                    <p className="location">{job.location}</p>
                    <p className="salary"><span>Salary:</span> Rs. {job.salary}</p>
                    <p className="posted"><span>Posted On:</span> {job.jobPostedOn.substring(0, 10)}</p>
                    <div className="btn-wrapper">
                      <Link className="btn" to={`/post/application/${job._id}`}>
                        Apply Now
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <img src="./notfound.png" alt="job-not-found" style={{ width: "100%" }} />
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Jobs;
