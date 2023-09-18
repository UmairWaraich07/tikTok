import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";

function VideoSidebar({ likes, comments, shares }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videosidebar">
      <div className="videosidebar__option">
        {liked ? (
          <FavoriteIcon
            fontSize="large"
            className="videosidebar__icon"
            onClick={(e) => setLiked(false)}
          />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            className="videosidebar__icon"
            onClick={(e) => setLiked(true)}
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videosidebar__option">
        <MessageIcon fontSize="large" className="videosidebar__icon" />
        <p>{comments}</p>
      </div>
      <div className="videosidebar__option">
        <ShareIcon fontSize="large" className="videosidebar__icon" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
