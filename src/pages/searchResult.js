import React from "react";
import { Layout } from "../components/layout.js";
import { Track } from "../components/track.js";
import "./searchResult.css";

export function Searchresult(props) {
  const searchTerm = props.match.params.query;

  return (
    <>
      <main>
        <header className="body-header">
          Search Result For "{searchTerm}"
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
            <Track />
            <Track />
          </div>
        </div>
      </main>
    </>
  );
}
