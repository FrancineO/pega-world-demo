import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { navigateToTab } from "../services/utils";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Twitter from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/system/Box";

function TalkItemHeader(props) {
  return (
    <Card className="cardContainer" sx={{ display: "flex" }}>
      <Box className="cardContent">
        <CardContent
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
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
              <Typography variant="h4" component="span" color="text.secondary">
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
          <Typography variant="body1" sx={{ mb: 1.5 }} color="text.secondary">
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
              onClick={() => navigateToTab(props.speakerTwitter)}
              alt="Speaker twitter link"
            >
              <Twitter />
            </IconButton>
            <IconButton
              aria-label="github"
              onClick={() => navigateToTab(props.speakerGithub)}
              alt="Speaker github link"
            >
              <GitHub />
            </IconButton>

            <IconButton
              aria-label="linked"
              onClick={() => navigateToTab(props.speakerLinkedIn)}
              alt="Speaker linkedIn link"
            >
              <LinkedIn />
            </IconButton>
          </Stack>
        </CardContent>
      </Box>
    </Card>
  );
}
export default TalkItemHeader;
