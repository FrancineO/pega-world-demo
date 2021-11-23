import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { getTalks } from "../talk-service";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function Demo() {
  const [talks, setTalks] = useState([]);
  useEffect(() => {
    getTalks().then((data) => {
      setTalks(data);
    });
  }, []);
  return (
    <Box>
      {talks.length &&
        talks.map((talk) => (
          <Card position="static" key={talk.id}>
            <CardContent>
              {" "}
              <Link
                style={{ display: "block", margin: "1rem 0" }}
                to={`/talks/${talk.id}`}
              >
                {talk.title}
              </Link>
            </CardContent>
          </Card>
        ))}
    </Box>
  );
}
export default Demo;
