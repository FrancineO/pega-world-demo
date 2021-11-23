import TalkItemResources from "../components/TalkItemResources";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTalk } from "../talk-service";
import Box from "@mui/material/Box";

function TalkResources() {
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
        <TalkItemResources
          title={talk.title}
          speakerName={talk.speakerName}
          id={talk.id}
        ></TalkItemResources>
      )}
    </Box>
  );
}
export default TalkResources;
