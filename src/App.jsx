import { useEffect, useState } from "react";
import Characters from "./components/Characters";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    const URL = `https://www.breakingbadapi.com/api/characters?name=${query}`;
    setIsLoading(true);

    const getCharacters = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();

        setCharacters(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(null);
      }
    };

    getCharacters();
  }, []);

  let charactersFilter = characters.filter((char) =>
      char.name.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <div className="container">
      <Header />
      <Search setQuery={setQuery} />
      <Characters isLoading={isLoading} charactersFilter={charactersFilter} />
    </div>
  );
}

export default App;
