import React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

export default function StarRating({ value, onChange }) {
  // const [value, setValue] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        heigth: 60,
        alignItems: "center",
      }}
    >
      <p
        style={{
          marginTop: 10,
          color: "white",
          fontSize: 20,
        }}
      >
        Rating:
      </p>
      <Box
        sx={{
          width: 220,
          display: "flex",
          justifyContent: "center",
          border: "3px solid white",
          borderRadius: 10,
          marginLeft: 2,
          heigth: "100%",
        }}
      >
        <Rating
          name="simple-controlled"
          value={value}
          onChange={onChange}
          size="large"
          emptyIcon={<StarIcon style={{ color: "white" }} fontSize="large" />}
        />
      </Box>
    </div>
  );
}
