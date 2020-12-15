import React, { useEffect } from "react";
import { FiHeart, FiMoreHorizontal, FiMoreVertical } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Track } from "../components/track";
import { fetchSongs, playFirstSong } from "../store/actions/songAction";
import "./playlist.css";

export function Playlist() {
  const dispatch = useDispatch();
  const songList = useSelector((state) => state.songList);
  useEffect(() => {
    if (!songList.songs) {
      dispatch(fetchSongs());
    }
  }, []);

  const playPlaylist = (e) => {
    e.preventDefault();

    dispatch(playFirstSong(songList.songs.songs[0]));
  };
  return (
    <>
      <main className="playlist-container">
        <header className="body-header">Playlist</header>
        <div className="upper-part">
          <div className="playlist-left">Workout</div>
          <div className="playlist-right">
            Playlist<header className="playlist-header">Workout</header>
            <p className="playlist-info">Watches Time Pieces of Eternity</p>
            <div className="playlist-header-end">
              <button
                className="primary-btn-1"
                onClick={songList.songs && playPlaylist}
              >
                Play
              </button>
              <FiHeart />
              <FiMoreVertical />
            </div>
          </div>
        </div>
        <div className="track-list">
          {songList.songs &&
            songList.songs.songs.map((song, i) => (
              <Track
                title={song.title}
                artist={song.artist}
                index={i}
                key={i}
              />
            ))}
        </div>
      </main>
    </>
  );
}
