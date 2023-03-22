import { useState } from "react";
import "./searchBar.scss";

export default function SearchBar() {
  const [inputMessage, setInputMessage] = useState("");

  function handleChange(event) {
    setInputMessage(event.target.value);
  }

  console.log("input =>", inputMessage);
  return (
    <>
      <div className="searchBarWrapper">
        <h2>Search for a movie, series...</h2>
        <form className="inputWrapper">
          <input
            type="text"
            className="searchBarWrapper__input"
            placeholder="Blade runner, Supernatural, ..."
            onChange={handleChange}
          />
          <button type="submit" className="searchBarWrapper__submitButton">
            Search !
          </button>
        </form>
      </div>
    </>
  );
}
