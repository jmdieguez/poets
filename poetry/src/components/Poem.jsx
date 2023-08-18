import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelectedAuthor } from "../authorContext";

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
    <div className="text-start flex flex-col  p-16 drop-shadow-xl justify-center min-h-[70vh] my-8 rounded-xl bg-white">
      <a href="/">Atrás</a>
      <h1 className="underline underline-offset-8 mb-8">{title}</h1>
      <ul className="">
        {lines.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    </div>
  );
};

export default PoemPage;
