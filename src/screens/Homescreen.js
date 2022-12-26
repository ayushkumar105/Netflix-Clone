import React from 'react';
import Row from '../Row';
import requests from '../requests';
import Banner from '../Banner';
import Nav from '../Nav';

//848f3b640fbc12adaabc7e0b4f8841df
//https://api.themoviedb.org/3/movie/550?api_key=848f3b640fbc12adaabc7e0b4f8841df


function Homescreen() {
  return (
    <div className="homescreen">
      <Nav />
      <Banner/>
      <Row 
      title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals} 
      isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      

    </div>
  );
}

export default Homescreen;
