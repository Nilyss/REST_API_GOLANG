import React from "react";
import "./App.scss";
import SearchBar from "./components/searchBar/searchBar";

function App() {
  const logo: string = require("./logo.png");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movies and Series DB</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <section>
          <article>
            <SearchBar />
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
