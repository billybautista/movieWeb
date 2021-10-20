import React, { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import Link from "@mui/material/Link";
import { getMovieDetail, getMovieRecomendations } from "../services/movie";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import StarIcon from "@mui/icons-material/Star";
import MovieCard from "../components/MovieCard";

export default function MovieDetail({ match: { params } }) {
  const [movie, setMovie] = useState();
  const [recomendations, setRecomendations] = useState();
  const id = params.id;

  const getMovie = async () => {
    const movieDetail = await getMovieDetail(id);
    console.log(movieDetail);
    setMovie(movieDetail);
  };

  const getRecomendations = async () => {
    const recomendations = await getMovieRecomendations(id);
    const { results } = recomendations;
    setRecomendations(results);
    console.log(results);
  };

  useEffect(() => {
    getMovie();
    getRecomendations();
  }, []);

  return (
    <div style={styles.container}>
      <Navbar bg="dark" style={{ height: 80 }}>
        <Container>
          <Link href="/" underline="none">
            <Navbar.Brand style={{ color: "white", fontWeight: "bold" }}>
              Movie Web
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>

      {movie !== undefined ? (
        <div>
          <Container style={{ marginTop: 40, display: "flex" }}>
            <div style={{ width: "40%" }}>
              <Card>
                <CardMedia
                  component="img"
                  image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
              </Card>
            </div>

            <div style={{ width: "60%", marginLeft: 30 }}>
              <h1 style={styles.title}>{movie.title}</h1>
              <div style={{ display: "flex" }}>
                <p style={styles.p}>{movie.release_date}</p>
                <p style={styles.p}>{movie.original_language}</p>
              </div>
              <h1 style={styles.title}>Overview</h1>
              <p style={styles.p}>{movie.overview}</p>
              <div style={{ display: "flex" }}>
                <p style={{ color: "white", fontSize: 20 }}>
                  {movie.vote_average}
                </p>
                <StarIcon style={{ color: "#FAAF00", marginTop: 4 }} />
              </div>
            </div>
          </Container>
        </div>
      ) : null}
      <Container>
        <div style={{ height: 100, marginTop: 40 }}>
          <h1 style={styles.title}>Recomendations</h1>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {recomendations !== undefined && recomendations.length !== 0
            ? recomendations.map((e) => (
                <MovieCard
                  width="19%"
                  poster_path={e.poster_path}
                  ranking={e.vote_average}
                  id={e.id}
                />
              ))
            : null}
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
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
  },
  p: {
    color: "white",
    fontSize: 20,
  },
};
