import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Favorite from "@mui/icons-material/Favorite";
import Timer from "@mui/icons-material/Timer";
import Event from "@mui/icons-material/Event";
import LocationOn from "@mui/icons-material/LocationOn";
import { formatDate } from "../services/utils";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

const InfoTypography = styled(Typography)({
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
});

function TalkItemHeader(props) {
  return (
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
              <Timer alt="duration icon" aria-hidden="true" sx={{ mr: 2 }} />
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
              {props.liked ? Number(props.likes) + 1 : props.likes} Likes
            </InfoTypography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
export default TalkItemHeader;
