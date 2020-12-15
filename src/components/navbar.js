import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export function Navbar(props) {
  return (
    <>
      <div className="navbar">
        <div className="brand">
          <img src="/icons/Logo.svg" alt="" />
        </div>
        <div className="nav-part">
          <ul className="nav-list">
            <li className="nav-item">
              <span className="icon">
                <img src="/icons/icon-home.svg" alt="" />
              </span>
              Home
            </li>
            <li className="nav-item">
              <span className="icon">
                <img src="/icons/icon-browse.svg" alt="" />
              </span>
              Browse
            </li>
            <Link to="/radio">
            <li className="nav-item">
                <span className="icon">
                  <img src="/icons/icon-radio.svg" alt="" />
                </span>
                Radio
            </li>
            </Link>
            <li className="nav-item">
              <span className="icon">
                <img src="/icons/icon-artist.svg" alt="" />
              </span>
              Artist
            </li>
            <li className="nav-item">
              <span className="icon">
                <img src="/icons/icon-note.svg" alt="" />
              </span>
              Album
            </li>
          </ul>
        </div>
        <div className="nav-part">
          <div className="nav-header">My Music</div>
          <ul className="nav-list">
            <li className="nav-item">
              <span className="icon">
                <img src="/icons/icon-recently.svg" alt="" />
              </span>
              Recently Played
            </li>
            <li className="nav-item">
              <span className="icon">
                <img src="/icons/icon-favourites.svg" alt="" />
              </span>
              Favourites
            </li>
            <li className="nav-item">
              <span className="icon">
                <img src="/icons/icon-downloaded.svg" alt="" />
              </span>
              Downloaded
            </li>
          </ul>
        </div>
        <div className="nav-part">
          <div className="nav-header">Playlist</div>
          <ul className="nav-list">
            <Link to="/playlist">
            <li className="nav-item">
              <span className="icon">
                <img src="/icons/icon-note.svg" alt="" />
              </span>
              Workout
            </li>
            </Link>
            <Link to="/playlist">
            <li className="nav-item">
              <span className="icon">
                <img src="/icons/icon-note.svg" alt="" />
              </span>
              Yoga
            </li>
            </Link>
            <li className="nav-item">
              <span className="icon">
                <img src="/icons/icon-headset.svg" alt="" />
              </span>
              Commute
            </li>
          </ul>
        </div>
        <div className="create-playlist">
          <span className="icon">
            <img src="/icons/icon-pause.svg" alt="" />
          </span>
          Add New Playlist
        </div>
      </div>
    </>
  );
}
