import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import Sms from "@mui/icons-material/Sms";
import Assignment from "@mui/icons-material/Assignment";
import Favorite from "@mui/icons-material/Favorite";
import { Typography } from "@mui/material";

const StyledFab = styled(Fab)({
  position: "relative",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

const ActionTypo = styled(Typography)({
  top: -20,
  position: "relative",
});

function BottomBar(props) {
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        top: "auto",
        bottom: 0,
      }}
    >
      <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid
            item
            display="flex"
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <StyledFab
              color="secondary"
              aria-label="resources"
              onClick={() =>
                (window.location.href = `/talks/${props.talkId}/resources`)
              }
            >
              <Assignment alt="Resources" />
            </StyledFab>
            <ActionTypo>Resources</ActionTypo>
          </Grid>

          <Grid
            item
            display="flex"
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <StyledFab
              color="secondary"
              aria-label="feedback"
              onClick={() =>
                (window.location.href = `/talks/${props.talkId}/feedback`)
              }
            >
              <Sms alt="Feedback" />
            </StyledFab>
            <ActionTypo>Feedback</ActionTypo>
          </Grid>

          <Grid
            item
            display="flex"
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <StyledFab color="secondary" aria-label="like">
              <Favorite alt="Like" />
            </StyledFab>
            <ActionTypo>Like</ActionTypo>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
export default BottomBar;
