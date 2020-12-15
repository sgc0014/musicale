import React from "react";
import "./radio.css";
import { Searchbar } from "../components/searchbar.js";
import { Layout } from "../components/layout";
import { Link } from "react-router-dom";

export function Radio(props) {
  return (
    <>
  
        <main>
          <header className="body-header">Radio</header>
          <div className="radio-list">
            <Link to="/playlist">
            <div className="card-container">
              <div className="card">
                <div className="card-title">Radio</div>
              </div>
              <div className="card-header">Home Radio</div>
            </div>
            </Link>
            <Link to="/playlist">
            <div className="card-container">
              <div className="card pink">
                <div className="card-title">Radio</div>
              </div>
              <div className="card-header">Broadcast Radio</div>
            </div>
            </Link>
            <Link to="/playlist">
            <div className="card-container">
              <div className="card">
                <div className="card-title">Radio</div>
              </div>
              <div className="card-header">Home Radio</div>
            </div>
            </Link>
            <Link to="/playlist">
            <div className="card-container">
              <div className="card darkblue">
                <div className="card-title">Radio</div>
              </div>
              <div className="card-header">Space Radio</div>
            </div>
            </Link>
            <Link to="/playlist">
            <div className="card-container">
              <div className="card grey">
                <div className="card-title">Radio</div>
              </div>
              <div className="card-header">Broadcast Radio</div>
            </div>
            </Link>
          </div>
        </main>
      
    </>
  );
}
