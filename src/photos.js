import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Pigeon from "./photos.jpg";
const Photos = () => {
  const [data, setData] = useState();

  const apiCall = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  if (data) {
    return (
      <>
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "33px",
          }}
        >
          <h1 style={{ marginRight: "28px" }}>Photos</h1>
          <img src={Pigeon} height="90px" width="90px" />
        </span>
        <div
          style={{
            display: "flex",

            flexWrap: "wrap",
          }}
        >
          {data.map((e) => {
            console.log(e);
            /* -------------------------------------------------------- */
            return <Cards props={e} />;

            /* --------------------------------------------------------------- */
          })}
        </div>
      </>
    );
  }
};

const Cards = (e) => {
  return (
    <>
      <Box sx={{ width: "25%" }}>
        <Card sx={{ minHeight: "400px" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <h2> {e.props.title} </h2>Word of the Day
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
            <img src={e.props.url} width="20" height="20" />
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Box>
    </>
  );
};

export default Photos;
