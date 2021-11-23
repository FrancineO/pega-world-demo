import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import Assignment from "@mui/icons-material/Assignment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function TalkItemResources(props) {
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
                  Resources
                </Typography>
                <Assignment color="success" />
              </Grid>
              <Grid
                item
                container
                direction="column"
                justifyContent="start"
                alignItems="stretch"
                sx={{ flex: 1 }}
              >
                <Typography>
                  You'll find here the related resources to the talk. Replay
                  will be posted here after the session.
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Assignment />
                    </ListItemIcon>
                    <ListItemText primary="Github repository" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Assignment />
                    </ListItemIcon>
                    <ListItemText primary="Slides" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Assignment />
                    </ListItemIcon>
                    <ListItemText primary="Article" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}
export default TalkItemResources;
