import React, { useState } from "react";
import "./track.css";
export function Track(props) {
  const [favourite, setfavourite] = useState(false);

  const {title,artist,index} = props
  return (
    <>
      <div className="track">
        <div className="track-start">
          <span className="track-index">{Number(index)+1}</span>
          {!favourite ? (
            <img
              className="heart"
              alt=""
              src="/icons/icon-heart.svg"
              onClick={() => setfavourite(!favourite)}
            />
          ) : (
            <img
              className="heart"
              alt=""
              src="/icons/icon-redHeart.svg"
              onClick={() => setfavourite(!favourite)}
            />
          )}
        </div>

        <div className="song-name">{title}</div>
        <div className="song-artist">{artist}</div>

        <div className="track-end">
          <div className="song-time">3:43</div>
          <div className="song-more">
            <img className="more" src="/icons/icon-more.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
