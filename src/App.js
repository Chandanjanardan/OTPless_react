import React from "react";
import './App.css';
import Row from "./Row";
import requests from "./requests"
import Banner from "./Banner";
import Navbar from "./Navbar"
import Login from "./Login";

function App({waName}) {
  return (
    <div className="app">
        <Navbar/>
        <Banner/>
        <Row title="NETFLIX ORIGNALS" fetchUrl={requests.fetchNetflixOrginals}
        isLargeRow/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Romance movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
 