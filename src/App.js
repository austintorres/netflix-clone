import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Banner />
      <h1>Netflix</h1>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Popular" fetchUrl={requests.fetchPopular} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow/>
    </div>
  );
}

export default App;
