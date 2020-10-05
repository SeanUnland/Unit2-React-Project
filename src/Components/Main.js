import React from "react";
import Library from "./Library";

const Main = ({ mainPage }) => {
  return (
    <div>
      {mainPage.map((musicInfo, index) => (
        <Library musicInfo={musicInfo} key={index} />
      ))}
    </div>
  );
};

export default Main;
