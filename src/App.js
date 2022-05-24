import React, { useEffect, useState,useContext } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import './App.css';
let i=0;
// const ThemeContext = React.createContext({background:"white",color:"grey"})
// const themes = {
//   dark : {background : "black",color:"yellow"},
//   light : {background : "white",color:"yellow"}
// }
const API_URL = "http://www.omdbapi.com?apikey=b6003d8a"

const App = () => {
  const [searchTerm,setSearchTerm] = useState("");
  const [movies,setMovies] = useState([]);
  useEffect(()=>{
    searchMovies("Batman");
  },[]);
  const searchMovies = async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  // const [theme,setTheme] = useState(themes.light);
  // <ThemeContext.Provider value={themes}>
  return (
      <div className="app">
        {/* <button onClick={()=>setTheme(theme.light)}></button>
        <button onClick={()=>setTheme(theme.dark)}></button> */}
        <h1>MongoMovies</h1>
        <div className="search" >
          <input
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            placeholder="Search movies"
            />
          <img
            src={SearchIcon}
            alt = "search"
            onClick={()=>searchMovies(searchTerm)}
            />
        </div>
        {
          movies?.length>0?(
            <div className="container">{
              movies.map((movie)=>(
                <MovieCard key={i} {...i=i+1} movie={movie}/>
                
                ))
              }

            </div>
          ) : (
            <div className = "empty">
              <h2> No movies found :) </h2>
            </div>
          )
        }
      </div>

  );
  // </ThemeContext.Provider>
}

export default App;


