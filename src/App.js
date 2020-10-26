import React from "react";
import "./App.css";
import Banner from "./Banner";
import requests from "./requests";
import Row from "./Row";

//https://api.themoviedb.org/3/movie/550?api_key=6a4ca12e377d349774b5783d1d77e78b
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTRjYTEyZTM3N2QzNDk3NzRiNTc4M2QxZDc3ZTc4YiIsInN1YiI6IjVmOTVkOGQ1MmZlMmZhMDAzYWFlYzBiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BWYB8vVW0nXieHhrOkoPrRTpXr_KFK8khzFQPBmmuzw
function App() {
  return (
    <div className="app">
      <Banner/>
      <Row isLargeRow title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
