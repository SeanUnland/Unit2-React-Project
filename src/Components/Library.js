import React from "react";

const Library = ({ musicInfo }) => {
  console.log("Music Info - ", musicInfo);
  const names = { musicInfo };

  return (
    <div className="Library">
      <p>{names.fields}</p>
    </div>
  );
};

export default Library;
