import logo from './logo.png';
import './App.css';
import { useEffect, useState } from 'react';
import { Spinner } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

function App() {
  const mykey = "11505b6";

  //implementing the different categories
  const [adventure, setAdventure] = useState(false);
  const [romance, setRomance] = useState(false);
  const [comedy, setComedy] = useState(false);
  const [horror, setHorror] = useState(false);

  //implementing searching
  const [wordEntered, setWordEntered] = useState("");

  const [searching, setSearching] = useState(false);

  const [searchData, setSearchData] = useState([])

  const handleSearch = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    //setSearching(true);
     if (searchWord === "") {
       setSearching(false);
     }
     else {
       setSearching(true);
     }
  };

  useEffect(() => {
    //const movieCategories = ["adventure", "comedy", "romance", "horror"];
    try {
      fetch(`https://www.omdbapi.com/?s=adventure&apikey=${mykey}`)
        .then((response) => response.json())
        .then((data) => {
          setAdventure(data.Search);
        });
      fetch(`https://www.omdbapi.com/?s=horror&apikey=${mykey}`)
        .then((response) => response.json())
        .then((data) => {
          setHorror(data.Search);
        });
      fetch(`https://www.omdbapi.com/?s=romance&apikey=${mykey}`)
        .then((response) => response.json())
        .then((data) => {
          setRomance(data.Search);
        });
      fetch(`https://www.omdbapi.com/?s=comedy&apikey=${mykey}`)
        .then((response) => response.json())
        .then((data) => {
          setComedy(data.Search);
        });
      fetch(`https://www.omdbapi.com/?s=${wordEntered}&apikey=${mykey}`)
        .then((response) => response.json())
        .then((data) => {
          setSearchData(data.Search);
        });
    }
    catch (err) {
      console.error(err);
    }
  }, [wordEntered]);

  return (
    <div>
      <header>
        <img src={logo} alt="logo" />
      </header>
      <div className="cinema">
        <p>Watch something incredible.</p>
      </div>
      <div className="input">
        <Search2Icon />
        <input
          type="text"
          placeholder="Search for something..."
          value={wordEntered}
          onChange={handleSearch}
          className="outline-0"
        />
      </div>
      <div>
        {searching ? (
          <div>
            {searchData ? (
              <div>
                <h1>Searched Movies</h1>
                <div className="card">
                  {searchData.map((movie) => {
                    return (
                      <div className="movie">
                        <p className="year">{movie.Year}</p>
                        <p className="title">{movie.Title}</p>
                        <img
                          src={movie.Poster}
                          alt={movie.Title}
                          borderRadius="lg"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="red.500"
                size="xl"
              />
            )}
          </div>
        ) : (
          <div className="movies">
            <div>
              {adventure ? (
                <div>
                  <h1>Adventure</h1>
                  <div className="card">
                    {adventure.map((movie) => {
                      return (
                        <div className="movie">
                          <p className="year">{movie.Year}</p>
                          <p className="title">{movie.Title}</p>
                          <img
                            src={movie.Poster}
                            alt={movie.Title}
                            borderRadius="lg"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="red.500"
                  size="xl"
                />
              )}
            </div>
            <div>
              {romance ? (
                <div>
                  <h1>Romance</h1>
                  <div className="card">
                    {romance.map((movie) => {
                      return (
                        <div className="movie">
                          <p className="year">{movie.Year}</p>
                          <p className="title">{movie.Title}</p>
                          <img
                            src={movie.Poster}
                            alt={movie.Title}
                            borderRadius="lg"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="red.500"
                  size="xl"
                />
              )}
            </div>
            <div>
              {comedy ? (
                <div>
                  <h1>Comedy</h1>
                  <div className="card">
                    {comedy.map((movie) => {
                      return (
                        <div className="movie">
                          <p className="year">{movie.Year}</p>
                          <p className="title">{movie.Title}</p>
                          <img
                            src={movie.Poster}
                            alt={movie.Title}
                            borderRadius="lg"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="red.500"
                  size="xl"
                />
              )}
            </div>
            <div>
              {horror ? (
                <div>
                  <h1>Horror</h1>
                  <div className="card">
                    {horror.map((movie) => {
                      return (
                        <div className="movie">
                          <p className="year">{movie.Year}</p>
                          <p className="title">{movie.Title}</p>
                          <img
                            src={movie.Poster}
                            alt={movie.Title}
                            borderRadius="lg"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="red.500"
                  size="xl"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
