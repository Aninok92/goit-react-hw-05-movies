import React, { useState } from "react";
import s from "./SearchForm.module.scss";

function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        Movie
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className={s.input}
        />
      </label>

      <button type="submit" className={s.button}>
        Search
      </button>
    </form>
  );
}

export default SearchForm;
