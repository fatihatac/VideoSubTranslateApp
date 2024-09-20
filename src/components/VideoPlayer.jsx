import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer({
  videoFile,
  isPlaying,
  subtitles,
  setCurrentSubtitle,
  playerRef,
}) {
  function handleProgress(progress) {
    const currentSub = subtitles.find(
      (subtitle) =>
        progress.playedSeconds >= subtitle.startSeconds &&
        progress.playedSeconds <= subtitle.endSeconds
    );
    setCurrentSubtitle(currentSub ? currentSub.text : "");
  }

  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={videoFile}
        ref={playerRef}
        playing={isPlaying}
        controls
        width="%100"
        height="%100"
        onProgress={handleProgress}
        className="react-player"
      />
    </div>
  );
}

export default VideoPlayer;
