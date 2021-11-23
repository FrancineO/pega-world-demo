import TalkItem from "../components/TalkItem";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTalk } from "../talk-service";
import Box from "@mui/material/Box";

function Talk() {
  let params = useParams();
  const [talk, setTalk] = useState();
  useEffect(() => {
    getTalk(params.talkId).then((data) => {
      console.log(data);
      setTalk(data);
    });
  }, []);
  return (
    <Box>
      {talk && (
        <TalkItem
          id={talk.id}
          title={talk.title}
          speakerName={talk.speakerName}
          speakerJobTitle={talk.speakerJobTitle}
          speakerPicture={talk.speakerPicture}
          speakerTwitter={talk.speakerTwitter}
          speakerGithub={talk.speakerGithub}
          speakerLinkedIn={talk.speakerLinkedIn}
          description={talk.description}
          duration={talk.duration}
        ></TalkItem>
      )}
    </Box>
  );
}
export default Talk;
