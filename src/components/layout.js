import React, { useState } from "react";
import { Searchbar } from "./searchbar.js";
import "./layout.css";
import { FiUsers, FiMusic, FiHeart } from "react-icons/fi";
import { Navbar } from "./navbar.js";
import { Musiccontroller } from "./musicController.js";
export function Layout(props) {
  const [toggleSetting, settoggleSetting] = useState(false);

  const changeToggle = (e) => {
    e.preventDefault();
    settoggleSetting(!toggleSetting);
  };
  return (
    <>
      <Navbar />
      <Searchbar changeToggle={changeToggle} />
      <div className="main-body">
        <div className="main-child">{props.children}</div>

        <div className={toggleSetting ? `profile visible` : `profile`}>
          <span className="profile-status">free</span>
          <div className="profile-info">
            <header className="profile-header">
              <span className="name">Michelle Dunkin</span>
              <span className="location">Los Angeles</span>
            </header>
            <div className="info-list">
              <div className="info-row">
                <div className="left">
                  <div className="profile-icon blue">
                    <FiUsers color="#4C4CAB" />
                  </div>
                  Friends
                </div>
                <span className="right">50</span>
              </div>
              <div className="info-row">
                <div className="left">
                  <div className="profile-icon red">
                    <FiHeart color="#FF808B" />
                  </div>
                  Favorites
                </div>
                <span className="right">50</span>
              </div>
              <div className="info-row">
                <div className="left">
                  <div className="profile-icon green">
                    <FiMusic color=" #50D757" />
                  </div>
                  Playlists
                </div>
                <span className="right">50</span>
              </div>
            </div>
            <div className="upgrade-msg">
              <img className="upgrade-icon" src="/icons/folder.svg" alt="" />
              <div className="msg">
                Upgrade to <strong>PRO</strong> for more benefits
              </div>
              <button className="primary-btn-1">Upgrade</button>
            </div>
          </div>
        </div>
      </div>
      <Musiccontroller />
    </>
  );
}
