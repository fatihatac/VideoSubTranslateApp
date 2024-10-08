import React from "react";
import Input from "./Input";
import srtParser2 from "srt-parser-2";

function FileInput({ setSubFile, setSubtitles, setVideoFile }) {
  function handleSubtitleFileUpload(event) {
    const file = event.target.files[0];
    setSubFile(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const fileContent = e.target.result;

        const parser = new srtParser2();
        try {
          const srtData = parser.fromSrt(fileContent); // SRT dosyasını parse et
          setSubtitles(srtData);
        } catch (error) {
          console.error("SRT dosyası işlenirken hata:", error);
        }
      };

      reader.readAsText(file);
    }
  }

  function handleVideoFileChange(event) {
    setVideoFile(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <div className="video-container">
      <div className="controls">
        <Input
          type="file"
          fileType="video"
          accept="video/*"
          onChange={handleVideoFileChange}
        />
        <Input
          type="file"
          fileType="sub"
          accept=".srt"
          onChange={handleSubtitleFileUpload}
        />
      </div>
    </div>
  );
}

export default FileInput;
