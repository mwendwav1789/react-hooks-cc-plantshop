import React from "react";

function Search({ setSearchQuery }) {
  const handleChange = (e) => {
    setSearchQuery(e.target.value); // Updates search query in the parent component
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
