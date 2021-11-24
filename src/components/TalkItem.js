import Avatar from "@mui/material/Avatar";
import Parallax from "./parallax/Parallax";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Twitter from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import Timer from "@mui/icons-material/Timer";
import Event from "@mui/icons-material/Event";
import Favorite from "@mui/icons-material/Favorite";
import LocationOn from "@mui/icons-material/LocationOn";
import { Box } from "@mui/system";
import BottomBar from "../layout/BottomBar";
import { styled } from "@mui/material/styles";

const InfoTypography = styled(Typography)({
  variant: "body2",
  component: "span",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
});

function TalkItem(props) {
  function navigateTo(url) {
    window.open(url, "_blank");
  }

  function formatDate(date) {
    console.log(date);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return (
      date.getMonth() +
      1 +
      "/" +
      date.getDate() +
      "/" +
      date.getFullYear() +
      " at " +
      strTime
    );
  }

  return (
    <div>
      <Box>
        <Parallax filter image={require("../assets/img/PW-bg.jpeg").default}>
          <Container maxWidth="md" sx={{ zIndex: 2 }}>
            <Grid container>
              <Grid item xs={12} sm={12} md={9} sx={{ pr: 1 }}>
                <Typography
                  variant="h2"
                  sx={{ fontWeight: "bold", color: "primary.contrastText" }}
                >
                  {props.title}
                </Typography>
              </Grid>
              <Grid
                item
                container
                direction="column"
                justifyContent="space-around"
                xs={12}
                sm={12}
                md={3}
              >
                <Grid item container direction="column">
                  <InfoTypography color="primary.contrastText">
                    <Event alt="date icon" aria-hidden="true" sx={{ mr: 2 }} />
                    {formatDate(new Date(props.dateTime))}
                  </InfoTypography>
                  <InfoTypography color="primary.contrastText">
                    <LocationOn
                      alt="location icon"
                      aria-hidden="true"
                      sx={{ mr: 2 }}
                    />
                    Conference Room : {props.conferenceRoom}
                  </InfoTypography>
                  <InfoTypography color="primary.contrastText">
                    <Timer
                      alt="duration icon"
                      aria-hidden="true"
                      sx={{ mr: 2 }}
                    />
                    {props.duration} minutes
                  </InfoTypography>
                </Grid>
                <Grid item>
                  <InfoTypography color="primary.contrastText">
                    <Favorite
                      alt="like icon"
                      aria-hidden="true"
                      sx={{ mr: 2 }}
                      color="error"
                    />
                    {props.likes} Likes
                  </InfoTypography>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Parallax>

        <Card className="cardContainer" sx={{ display: "flex" }}>
          <Box className="cardContent" sx={{ flexGrow: 1 }}>
            <CardContent>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ py: 4 }}
              >
                <Grid item xs={5} sm={6} md={6}>
                  <Avatar
                    alt={`${props.speakerName} avatar`}
                    src={props.speakerPicture}
                    sx={{ width: [100, 200, 200], height: [100, 200, 200] }}
                  />
                </Grid>

                <Grid item container direction="column" xs={7} sm={6} md={6}>
                  <Typography variant="h3" component="span">
                    {props.speakerName}
                  </Typography>
                  <Typography
                    variant="h4"
                    component="span"
                    color="text.secondary"
                  >
                    {props.speakerJobTitle}
                  </Typography>
                </Grid>
              </Grid>

              <Typography
                variant="h6"
                component="span"
                sx={{ mb: 1.5 }}
                color="text.secondary"
              >
                Description
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 1.5 }}
                color="text.secondary"
              >
                {props.description}
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={10}
              >
                <IconButton
                  aria-label="twitter"
                  onClick={() => navigateTo(props.speakerTwitter)}
                  alt="Speaker twitter link"
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  aria-label="github"
                  onClick={() => navigateTo(props.speakerGithub)}
                  alt="Speaker github link"
                >
                  <GitHub />
                </IconButton>

                <IconButton
                  aria-label="linked"
                  onClick={() => navigateTo(props.speakerLinkedIn)}
                  alt="Speaker linkedIn link"
                >
                  <LinkedIn />
                </IconButton>
              </Stack>
            </CardContent>
          </Box>
        </Card>
      </Box>
      <Box sx={{ height: 116 }}></Box>
      <BottomBar talkId={props.id}></BottomBar>
    </div>
  );
}

export default TalkItem;
