import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Track } from "../components/track.js";
import { fetchSongs } from "../store/actions/songAction";
import "./searchResult.css";

export function Searchresult(props) {
  const keyword = props.match.params.query;
  const dispatch = useDispatch();
  const songList = useSelector((state) => state.songList);

  useEffect(() => {
    
      dispatch(fetchSongs(keyword));
    
   
  }, [dispatch,keyword]);

  return  (
    <>
      <main>
        <header className="body-header">
         
          Search Result For "{keyword}"
        </header>
        <div className="concert-section">
          <header className="sub-header">Live Concert</header>
          <div className="concert-card">
            <div className="circle">
              <img src="/icons/icon-note1.svg" alt="" />
            </div>

            <span>243 people watching right now</span>
          </div>
        </div>

        <div className="track-list-container">
          <header className="sub-header">Tracks</header>

          <div className="track-list">
            {songList.filteredSongs && songList.filteredSongs.length>0
              ?  songList.filteredSongs.map((song, i) => (
                  <Track
                    title={song.title}
                    artist={song.artist}
                    index={i}
                    key={i}
                  />
                ))
              : "No songs found"}
          </div>
        </div>
      </main>
    </>
  );
}
