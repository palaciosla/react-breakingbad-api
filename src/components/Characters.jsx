import React from "react";
import CharacterCard from "./CharacterCard";
import Spiner from "./Spinner";

const Characters = ({ isLoading, charactersFilter }) => {
  if (isLoading) return <Spiner />;

  return (
    <main className="cards">
      {charactersFilter.map((char) => (
        <CharacterCard char={char} key={char.char_id} />
      ))}
    </main>
  );
};

export default Characters;
