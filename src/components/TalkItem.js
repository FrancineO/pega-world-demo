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
import { Box } from "@mui/system";
import BottomBar from "../layout/BottomBar";

function TalkItem(props) {
  function navigateTo(url) {
    window.open(url, "_blank");
  }

  return (
    <div>
      <Box>
        <Parallax filter image={require("../assets/img/PW-bg.jpeg").default}>
          <Container maxWidth="md" sx={{ zIndex: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={10}>
                <Typography
                  variant="h2"
                  sx={{ fontWeight: "bold", color: "primary.contrastText" }}
                >
                  {props.title}
                </Typography>
                <Typography
                  variant="h4"
                  component="span"
                  sx={{ color: "primary.contrastText" }}
                >
                  <Timer alt={`duration icon`} aria-hidden="true" />
                  {props.duration} minutes
                </Typography>
                )
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
