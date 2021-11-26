import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { getTalks } from "../services/talk-service";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

function Demo() {
  const navigate = useNavigate();
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
            sx={{ maxWidth: 345, mb: 5 }}
            xs={12}
            sm={12}
            md={4}
            onClick={() => navigate(`/talks/${talk.id}`)}
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
