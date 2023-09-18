import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "../VideoFooter/VideoFooter";
import VideoSidebar from "../VideoSidebar/VideoSidebar";

const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  comments,
  shares,
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        ref={videoRef}
        onClick={onVideoPress}
      >
        <source src={url} type="video/mp4" />
      </video>

      <VideoFooter channel={channel} description={description} song={song} />

      <VideoSidebar likes={likes} comments={comments} shares={shares} />
    </div>
  );
};

export default Video;
