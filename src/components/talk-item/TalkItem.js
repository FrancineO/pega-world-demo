import Avatar from "@mui/material/Avatar";
import Parallax from "../parallax/Parallax";
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
import BottomBar from "../bottom-bar/BottomBar";

function TalkItem(props) {
  return (
    <div>
      <Box>
        <Parallax filter image={require("../../assets/img/PW-bg.jpeg").default}>
          <Container maxWidth="md" sx={{ zIndex: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={10}>
                <Typography
                  variant="h2"
                  sx={{ fontWeight: "bold", color: "primary.contrastText" }}
                >
                  {props.title}
                </Typography>
                <Typography variant="h4" sx={{ color: "primary.contrastText" }}>
                  <Timer />
                  {props.duration} minutes
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Parallax>

        <Card className="cardContainer">
          <Box className="cardContent">
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
                    alt="Name"
                    src={require("../../assets/img/alan-trefler.png").default}
                    sx={{ width: [100, 200, 200], height: [100, 200, 200] }}
                  />
                </Grid>

                <Grid item xs={7} sm={6} md={6}>
                  <Typography variant="h3" component="div">
                    {props.speakerName}
                  </Typography>
                  <Typography variant="h4" color="text.secondary">
                    {props.speakerJob}
                  </Typography>
                </Grid>
              </Grid>

              <Typography variant="h6" sx={{ mb: 1.5 }} color="text.secondary">
                Description
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 1.5 }}
                color="text.secondary"
              >
                {props.description}
              </Typography>
            </CardContent>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={10}
            >
              <IconButton aria-label="twitter">
                <Twitter />
              </IconButton>
              <IconButton aria-label="github">
                <GitHub />
              </IconButton>

              <IconButton aria-label="linked">
                <LinkedIn />
              </IconButton>
            </Stack>
          </Box>
        </Card>
      </Box>
      <Box sx={{ height: 116 }}></Box>
      <BottomBar></BottomBar>
    </div>
  );
}

export default TalkItem;
