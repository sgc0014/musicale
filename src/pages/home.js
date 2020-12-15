import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export function Home(props) {
  const history = useHistory();
  useEffect(() => {
    history.push("/radio");
  });

  return <></>;
}
