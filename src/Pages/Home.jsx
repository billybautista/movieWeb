import React, { useState, useEffect } from "react";
import { Form, FormControl, Button, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Rating from "../components/Rating";
import MovieCard from "../components/MovieCard";
import { getDiscoveryMovie } from "../services/movie";
import Link from "@mui/material/Link";

export default function App() {
  const [movies, setMovies] = useState([]);

  const getPopularMovies = async () => {
    const popularMovies = await getDiscoveryMovie();
    const { results } = popularMovies;
    setMovies(results);
  };

  const mostPopular = movies[0];
  const sixMovies = movies.slice(1, 7);
  const nextMovies = movies.slice(7);

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <div style={styles.container}>
      <Navbar bg="dark" style={{ height: 80 }}>
        <Container>
          <Link href="/" underline="none">
            <Navbar.Brand style={styles.text}>Movie Web</Navbar.Brand>
          </Link>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ width: 300, borderRadius: 15 }}
            />
            <Button
              variant="primary"
              style={{ borderRadius: 40, width: 40, height: 40 }}
            >
              <FontAwesomeIcon style={{ color: "white" }} icon={faSearch} />
            </Button>
          </Form>
          <div
            style={{
              backgroundColor: "blue",
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
        </Container>
      </Navbar>

      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Rating />
        </div>
        <p style={styles.h1}>Más populares</p>
      </Container>
      <Container style={{ display: "flex" }}>
        <div
          style={{
            width: "39.2%",
          }}
        >
          {movies.length !== 0 ? (
            <MovieCard
              poster_path={mostPopular.poster_path}
              ranking={mostPopular.vote_average}
              id={mostPopular.id}
            />
          ) : null}
        </div>
        <div
          style={{
            width: "60%",
            height: "100%",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {sixMovies.map((e) => (
            <MovieCard
              width="31.66%"
              poster_path={e.poster_path}
              ranking={e.vote_average}
              id={e.id}
            />
          ))}
        </div>
      </Container>
      <Container>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {nextMovies.map((e) => (
            <MovieCard
              width="19%"
              poster_path={e.poster_path}
              ranking={e.vote_average}
              id={e.id}
            />
          ))}
        </div>
      </Container>
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
};
