import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Favorite from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";

function TalkItemFeedback(props) {
  return (
    <Box>
      <Box className="header">
        <Grid
          container
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={3} sm={2} md={2}>
            <Link to={"/talks/" + props.id}>
              <Fab color="secondary" aria-label="comment">
                <ArrowBack />
              </Fab>
            </Link>
          </Grid>
          <Grid item xs={9} sm={10} md={10}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "primary.contrastText" }}
            >
              {props.title}
            </Typography>
            <Typography variant="h6" sx={{ color: "primary.contrastText" }}>
              {props.speakerName}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Card className="cardContainer" sx={{ bottom: 20 }}>
        <Box className="cardContent">
          <CardContent sx={{ height: "100%" }}>
            <Grid
              container
              spacing={2}
              direction="column"
              justifyContent="flex-start"
              alignItems="center"
              sx={{ height: "100%" }}
            >
              <Grid
                item
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ pb: 5 }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", px: 2 }}
                  color="primary"
                >
                  Give us your feedback
                </Typography>
                <Favorite color="error" />
              </Grid>
              <Grid
                item
                container
                direction="column"
                justifyContent="start"
                alignItems="stretch"
                sx={{ flex: 1 }}
              >
                <TextField
                  required
                  id="outlined-required"
                  label="Name"
                  defaultValue="Name"
                  sx={{ pb: 2 }}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  defaultValue="Email"
                  sx={{ pb: 2 }}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Message"
                  defaultValue="Send us your feedback or comment on this talk..."
                  multiline
                  rows={5}
                  maxRows={5}
                  sx={{ pb: 2 }}
                />
              </Grid>
              <Grid
                item
                container
                direction="row-reverse"
                justifyContent="end"
                alignItems="stretch"
              >
                <Button variant="contained" color="secondary">
                  Send
                </Button>
                <Button variant="outlined" color="secondary" sx={{ mr: 2 }}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}
export default TalkItemFeedback;
