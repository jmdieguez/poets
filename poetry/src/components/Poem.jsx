import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelectedAuthor } from "../authorContext";
import Footer from "./Footer";
import Header from "./Header";

const PoemPage = () => {
  const { title } = useParams();
  const [lines, setLines] = useState([]);
  const { selectedAuthor, setSelectedAuthor } = useSelectedAuthor();

  useEffect(() => {
    fetch(`https://poetrydb.org/title/${encodeURIComponent(title)}`)
      .then((response) => response.json())
      .then((data) => setLines(data[0].lines))
      .catch((error) => console.error("Error fetching lines:", error));
  }, [title]);

  console.log({ title });
  console.log(lines);

  return (
    <div>
      <Header />
      <div
        style={{
          background:
            "linear-gradient(135deg, #FAD0C4, #B6D8C9, #EBBAB9, #C9D8B6)",
        }}
        className="min-h-screen flex flex-col justify-start items-center"
      >
        <div className="w-3/4 text-start flex flex-col  p-16 drop-shadow-xl justify-center my-8 rounded-xl bg-white">
          <a href="/">Back</a>
          <h1 className="underline underline-offset-8 mb-8">{title}</h1>
          <ul>
            {lines.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PoemPage;
