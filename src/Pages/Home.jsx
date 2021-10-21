import React, { useState, useEffect } from "react";
import { Form, Button, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Rating from "../components/Rating";
import { getDiscoveryMovie, searchMovie } from "../services/movie";
import Link from "@mui/material/Link";
import SixMovies from "../components/SixMovies";
import LastMovies from "../components/LastMovies";
import MostPopular from "../components/MostPopular";
import Results from "../components/Results";
import { getFilter } from "../helpers/getFilter";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [value, setValue] = useState(0);
  const [filter, setFilter] = useState();
  const [filterSearch, setFilterSearch] = useState();

  const getFilterList = () => {
    const filterParams = getFilter(value);
    if (filterParams !== 0) {
      const filterList = movies.filter(
        (e) =>
          filterParams[0] <= e.vote_average && filterParams[1] >= e.vote_average
      );
      setFilter(filterList);
    }
  };

  const getFilterSearch = () => {
    const filterParams = getFilter(value);
    if (filterParams !== 0) {
      const filterList = results.filter(
        (e) =>
          filterParams[0] <= e.vote_average && filterParams[1] >= e.vote_average
      );
      setFilterSearch(filterList);
    }
  };

  const getPopularMovies = async () => {
    const popularMovies = await getDiscoveryMovie();
    const { results } = popularMovies;
    setMovies(results);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const search = await searchMovie(input);
    setResults(search.results);
    setValue(0);
  };

  const mostPopular = movies[0];
  const sixMovies = movies.slice(1, 7);
  const lastMovies = movies.slice(7);

  const handleOnChange = (e) => {
    setInput(e.target.value);
    setResults([]);
  };
  const filterOnChange = (e, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  useEffect(() => {
    getFilterList();
    getFilterSearch();
  }, [value]);

  return (
    <div style={styles.container}>
      <Navbar bg="dark" style={{ height: 80 }}>
        <Container>
          <Link href="/" underline="none">
            <Navbar.Brand style={styles.text}>Movie Web</Navbar.Brand>
          </Link>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ width: 300, borderRadius: 15 }}
              onChange={handleOnChange}
              value={input}
            />
            <Button
              variant="primary"
              style={{ borderRadius: 40, width: 40, height: 40 }}
              onClick={handleSubmit}
            >
              <FontAwesomeIcon style={{ color: "white" }} icon={faSearch} />
            </Button>
          </Form>
          <div style={styles.perfil}>
            <p style={{ marginTop: 4, marginLeft: 4 }}>MW</p>
          </div>
        </Container>
      </Navbar>
      <div>
        {input !== "" ? (
          <div>
            <Container>
              {results.length !== 0 ? (
                <Rating value={value} onChange={filterOnChange} />
              ) : null}
              <p style={styles.h1}>Results {results.length}</p>
              {(value !== 0) & (value !== null) ? (
                <Results results={filterSearch} />
              ) : (
                <Results results={results} />
              )}
            </Container>
          </div>
        ) : (
          <div>
            <Container>
              <Rating value={value} onChange={filterOnChange} />
              <p style={styles.h1}>Popular</p>
            </Container>
            {(value !== 0) & (value !== null) ? (
              <div>
                <Container>
                  <LastMovies lastMovies={filter} />
                </Container>
              </div>
            ) : (
              <div>
                <Container style={{ display: "flex" }}>
                  <MostPopular mostPopular={mostPopular} movies={movies} />
                  <SixMovies sixMovies={sixMovies} />
                </Container>
                <Container>
                  <LastMovies lastMovies={lastMovies} />
                </Container>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#293948",
    height: "100%",
    minHeight: "100vh",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  h1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
  },
  perfil: {
    backgroundColor: "#0D6EFD",
    width: 40,
    height: 40,
    borderRadius: 20,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
};
