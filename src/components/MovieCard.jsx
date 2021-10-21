import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Link from "@mui/material/Link";

export default function MovieCard({ width, poster_path, ranking, id }) {
  const uri = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <div key={id} style={{ width: width, margin: 4 }}>
      <Card>
        <CardActionArea>
          <Link href={`/movie/${id}`} underline="none">
            <CardMedia component="img" image={uri} />
          </Link>
        </CardActionArea>
      </Card>
      <div
        style={{
          display: "flex",
          justifyContent: "right",
        }}
      >
        <div>
          <p style={{ color: "white", fontSize: 20 }}>{ranking}</p>
        </div>
        <StarIcon style={{ color: "#FAAF00", marginTop: 4 }} />
      </div>
    </div>
  );
}
