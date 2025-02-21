const SearchFilter = ({ setSearch, setEmploymentType, setMinPackage }) => {
  return (
    <div className="p-6 bg-gradient-to-r from-green-300 to-blue-400 flex flex-col md:flex-row gap-4 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Search for jobs..."
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border-2 rounded-lg flex-grow"
      />
      <select
        onChange={(e) => setEmploymentType(e.target.value)}
        className="p-2 border-2 rounded-lg"
      >
        <option value="">All Jobs</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Internship">Internship</option>
      </select>
      {/* <select
        onChange={(e) => setMinPackage(e.target.value)}
        className="p-2 border-2 rounded-lg"
      >
        <option value="">All Salary Ranges</option>
        <option value="1000000">₹10 LPA+</option>
        <option value="2000000">₹20 LPA+</option>
      </select> */}
    </div>
  );
};

export default SearchFilter;
