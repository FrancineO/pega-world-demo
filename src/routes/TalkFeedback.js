import TalkItemFeedback from "../components/TalkItemFeedback";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTalk } from "../services/talk-service";
import Box from "@mui/material/Box";

function TalkFeedback() {
  let params = useParams();
  const [talk, setTalk] = useState();
  useEffect(() => {
    getTalk(params.talkId).then((data) => {
      setTalk(data);
    });
  }, []);
  return (
    <Box>
      {talk && (
        <TalkItemFeedback
          title={talk.title}
          speakerName={talk.speakerName}
          id={talk.id}
        ></TalkItemFeedback>
      )}
    </Box>
  );
}
export default TalkFeedback;
