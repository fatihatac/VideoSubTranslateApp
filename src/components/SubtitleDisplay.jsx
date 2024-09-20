import React from "react";

function SubtitleDisplay({ currentSubtitle, setIsPlaying }) {
  function removeHtmlTags(text) {
    return text.replace(/<[^>]*>/g, "");
  }

  function getWordsFromSubtitle(subtitle) {
    if (!subtitle) return [];
    const cleanedSubtitle = removeHtmlTags(subtitle); // HTML etiketlerini temizle
    return cleanedSubtitle.split(" ");
  }

  function handleClick(event) {
    console.log(event.target.innerText);
  }

  function handleMouseEnter() {
    setIsPlaying(false);
  }

  function handleMouseLeave() {
    setIsPlaying(true);
  }

  return (
    <div className="subtitle-container">
      {getWordsFromSubtitle(currentSubtitle).map((word, index) => (
        <span
          onClick={handleClick}
          key={index}
          className="word"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {word}
        </span>
      ))}
    </div>
  );
}

export default SubtitleDisplay;
