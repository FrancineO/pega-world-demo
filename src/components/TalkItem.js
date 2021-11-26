import Parallax from "./parallax/Parallax";
import Box from "@mui/system/Box";
import BottomBar from "../layout/BottomBar";
import { useState } from "react";
import TalkItemHeader from "./TalkItemHeader";
import TalkItemDescription from "./TalkItemDescription";

function TalkItem(props) {
  const [liked, setLike] = useState(false);

  function likeHandler() {
    setLike(!liked);
  }

  return (
    <div>
      <Box>
        <Parallax filter image={require("../assets/img/PW-bg.jpeg").default}>
          <TalkItemHeader
            title={props.title}
            dateTime={props.dateTime}
            conferenceRoom={props.conferenceRoom}
            duration={props.duration}
            likes={props.likes}
            liked={liked}
          ></TalkItemHeader>
        </Parallax>
        <TalkItemDescription
          speakerName={props.speakerName}
          speakerPicture={props.speakerPicture}
          speakerJobTitle={props.speakerJobTitle}
          description={props.description}
          speakerTwitter={props.speakerTwitter}
          speakerGithub={props.speakerGithub}
          speakerLinkedIn={props.speakerLinkedIn}
        ></TalkItemDescription>
      </Box>
      <Box sx={{ height: 116 }}></Box>
      <BottomBar talkId={props.id} onLikeClick={likeHandler}></BottomBar>
    </div>
  );
}

export default TalkItem;
