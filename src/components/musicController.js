import React, { useEffect, useState } from "react";
import "./musicController.css";
import Slider from "react-custom-slider";
import {FaPauseCircle} from "react-icons/fa"
import { useSelector } from "react-redux";

export function Musiccontroller(props) {

  const musicPlayer = useSelector((state) => state.musicPlayer);
  const [tooglePlayer, settooglePlayer] = useState(false)

  useEffect(() => {
    if(musicPlayer.currentSong){
      settooglePlayer(true)
    }
    else{
      settooglePlayer(false)
    }
  }, [musicPlayer])
  return (
    <>
      <div className={tooglePlayer?"musicPlayer show": "musicPlayer"}>
        <div className="music-info">
          <div className="bold">{musicPlayer.currentSong && musicPlayer.currentSong.title}</div>
          <div className="light">{musicPlayer.currentSong && musicPlayer.currentSong.artist}</div>
        </div>
        <div className="music-controls">
          <img src="/icons/icon-reload.svg" alt="" />
          <img src="/icons/icon-rewind.svg" alt="" />

          <FaPauseCircle size={"64px"} fill={"#4C4CAB"} color={"#4C4CAB"} />

          <img src="/icons/icon-fastforward.svg" alt="" />
          <img src="/icons/icon-shuffle.svg" alt="" />
        </div>
        <div className="music-slider">
          <div className="runtime time">
            1:50
          </div>
          <Slider
            showMarkers={false}
            showValue={false}
            handlerShape="rounded"
            handlerColor="#4C4CAB"
            handlerActiveColor="#4C4CAB"
            trackThickness={4}
            fillColor="#4C4CAB"
            trackShape="rounded"
          />
           <div className="stoptime time">
            1:50
          </div>
        </div>
        <div className="next-song">
        <div className="bold">Up Next</div>
          <div className="light">Somebody</div>
        </div>
      </div>
    </>
  );
}
