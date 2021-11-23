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

const StyledFab = styled(Fab)({
  position: "relative",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
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
          <Grid item>
            <Link to={"/talks/" + props.talkId + "/resources"}>
              <StyledFab color="secondary" aria-label="resources">
                <Assignment />
              </StyledFab>{" "}
            </Link>
          </Grid>

          <Grid item>
            <Link to={"/talks/" + props.talkId + "/feedback"}>
              <StyledFab color="secondary" aria-label="comment">
                <Sms />
              </StyledFab>
            </Link>
          </Grid>

          <Grid item>
            <StyledFab color="secondary" aria-label="comment">
              <Favorite />
            </StyledFab>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
export default BottomBar;
