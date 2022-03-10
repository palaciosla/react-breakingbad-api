import React, { useState } from "react";

const Search = ({setQuery}) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <section className="search center">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          onChange={handleChange}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
