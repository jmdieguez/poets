import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelectedAuthor } from "../authorContext";
import Header from "./Header";
import Footer from "./Footer";

function PoetryApp() {
  const [authors, setAuthors] = useState([]);
  const [poems, setPoems] = useState([]);
  const { selectedAuthor, setSelectedAuthor } = useSelectedAuthor();

  useEffect(() => {
    // Fetch the list of authors
    fetch("https://poetrydb.org/author")
      .then((response) => response.json())
      .then((data) => setAuthors(data.authors))
      .catch((error) => console.error("Error fetching authors:", error));
  }, []);

  useEffect(() => {
    if (selectedAuthor) {
      // Fetch the poems of the selected author
      fetch(
        `https://poetrydb.org/author/${encodeURIComponent(
          selectedAuthor
        )}/title`
      )
        .then((response) => response.json())
        .then((data) => setPoems(data))
        .catch((error) => console.error("Error fetching poems:", error));
    }
  }, [selectedAuthor]);

  return (
    <div>
      <div className="bg-white mt-8 ml-8">
        <label className="font-bold" htmlFor="authorSelect">
          Select an author:
        </label>

        <select
          id="authorSelect"
          onChange={(e) => setSelectedAuthor(e.target.value)}
          value={selectedAuthor}
          style={{ width: "250px" }}
        >
          <option value="">Select an author</option>
          {authors.map((author) => (
            <option key={author} value={author}>
              {author}
            </option>
          ))}
        </select>

        <div className="mt-8">
          <h3 className="mb-4 font-bold">Poems by {selectedAuthor}</h3>
          <ul>
            {poems.map((poem) => (
              <li key={poem.title}>
                <Link to={`/poem/${poem.title}`}>{poem.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PoetryApp;
