import React from "react";

const AudioPlayer = (props) => {
  console.log("Songs", props);
  console.log("New Song - ", props);
  return (
    <div className="songs">
      <iframe
        width="100%"
        height="20"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/893908294&color=%23d2d2d1&inverse=false&auto_play=false&show_user=true"
      ></iframe>
      <a
        href="https://soundcloud.com/analog_robot"
        title="Analog Robot"
        target="_blank"
      ></a>{" "}
      ·{" "}
      <a
        href="https://soundcloud.com/analog_robot/you-know"
        title="You Know"
        target="_blank"
      ></a>
      <iframe
        width="100%"
        height="20"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/863848156&color=%23d2d2d1&inverse=false&auto_play=false&show_user=true"
      ></iframe>
      <a
        href="https://soundcloud.com/analog_robot"
        title="Analog Robot"
        target="_blank"
      ></a>{" "}
      ·{" "}
      <a
        href="https://soundcloud.com/analog_robot/passing-memories"
        title="Passing Memories"
        target="_blank"
      ></a>
      <iframe
        width="100%"
        height="20"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/774724804&color=%23d2d2d1&inverse=false&auto_play=false&show_user=true"
      ></iframe>
      <a
        href="https://soundcloud.com/analog_robot"
        title="Analog Robot"
        target="_blank"
      ></a>{" "}
      ·{" "}
      <a
        href="https://soundcloud.com/analog_robot/black-coffee-feat-bridjai-chani"
        title="Black Coffee (Feat. Bridjaî Chanî)"
        target="_blank"
      ></a>
    </div>
  );
};

export default AudioPlayer;
