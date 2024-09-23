import "./App.css";
import React, { useState, useRef, useEffect } from "react";

import FileInput from "./components/FileInput";
import SubtitleDisplay from "./components/SubtitleDisplay";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [videoFile, setVideoFile] = useState(null);
  const [subFile, setSubFile] = useState(null);
  const [subtitles, setSubtitles] = useState([]);
  const [currentSubtitle, setCurrentSubtitle] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  return (
    <div className="App">
      <FileInput
        setVideoFile={setVideoFile}
        setSubtitles={setSubtitles}
        setSubFile={setSubFile}
      />

      {videoFile && subFile && (
        <VideoPlayer
          videoFile={videoFile}
          isPlaying={isPlaying}
          setCurrentSubtitle={setCurrentSubtitle}
          subtitles={subtitles}
          playerRef={playerRef}
        />
      )}
      {subFile && currentSubtitle && (
        <SubtitleDisplay
          currentSubtitle={currentSubtitle}
          setIsPlaying={setIsPlaying}
        />
      )}
    </div>
  );
}

export default App;
