import Row from "./Row";
import requests from "./Requests";
import Banner from "./Banner";
import Nav from "./Nav";
const App = () => {
  return (
    <div className="container mx-auto bg-black">
      <Nav />
      <Banner />
      <h1 className=" text-red-500 ">Netflix Clone</h1>
      <Row
        title="Netflix Original"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />

      <Row title="Top Rating" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default App;
