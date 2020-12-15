import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./searchbar.css";

export function Searchbar(props) {
  const history = useHistory();
  const [searchTerm, setsearchTerm] = useState("")

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search/${searchTerm}`)
  }
  return (
    <>
      <div className="top-search-part">
        <div className="start">
          <img className="icon" src="/icons/icon-chevron-left.svg" alt="" />
          <img className="icon" src="/icons/icon-chevron-right.svg" alt="" />
          <form onSubmit={handleSearch}>
          <input  onChange={(e) => setsearchTerm(e.target.value)} className="search-input" placeholder="search for track,artist or album..." />
          </form>
        </div>
        <div className="end">
        <img className="icon" src="/icons/notification.svg" alt="" />
        <img className="icon" src="/icons/icon-setting.svg" alt="" onClick={props.changeToggle} />
        </div>
      
      </div>
    </>
  );
}
