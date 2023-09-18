import "./App.css";
import Video from "./components/Video/Video";
import vid1 from "./assets/01.mp4";
import vid2 from "./assets/2.mp4";
import vid5 from "./assets/5.mp4";
import vid4 from "./assets/4.mp4";

import { useEffect, useState } from "react";
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) => {
      setVideos(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  // console.log("📷", videos);

  return (
    <div className="app">
      <div className="app__videos">
        {/* {videos.map(
          ({ channel, comments, description, likes, shares, song, url }) => (
            <Video
              channel={channel}
              comments={comments}
              description={description}
              likes={likes}
              shares={shares}
              song={song}
              url={url}
            />
          )
        )} */}
        <Video
          channel="umairwaraich07"
          comments={89}
          description="On my way 🚀"
          likes={989}
          shares={65}
          song="Fuck Em All - Sidhu moose wala"
          url={vid1}
        />
        <Video
          channel="the_masculinedrive"
          comments={234}
          description="Andrew best speech"
          likes={1005}
          shares={77}
          song="The Matrix - sunny"
          url={vid2}
        />
        <Video
          channel="zubairwaraich07"
          comments={213}
          description="Nature offers the most beautfiul experience of you life"
          likes={899}
          shares={34}
          song="Obijmy - Okean Elzy"
          url={vid5}
        />
        <Video
          channel="hustlers_university"
          comments={45}
          description="consistency beats the talent"
          likes={741}
          shares={22}
          song="Join the realworld - andrew tate"
          url={vid4}
        />
      </div>
    </div>
  );
}

export default App;
