import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { getTalks } from "../talk-service";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";

function Demo() {
  const [talks, setTalks] = useState([]);
  useEffect(() => {
    getTalks().then((data) => {
      setTalks(data);
    });
  }, []);
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      sx={{ mt: 10 }}
    >
      {talks.length &&
        talks.map((talk) => (
          <Card
            sx={{ maxWidth: 345 }}
            xs={12}
            sm={12}
            md={4}
            onClick={() => (window.location.href = `/talks/${talk.id}`)}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="auto"
                image={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://pega-world-talk-demo.vercel.app/talks/${talk.id}`}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {talk.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {talk.speakerName}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
    </Grid>
  );
}
export default Demo;
