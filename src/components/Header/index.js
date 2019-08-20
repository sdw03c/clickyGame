import React from "react";
import "./style.css"

const Header = props =>(
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Clicky Game</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <span className="nav-link" >Current Score: {props.currentScore} | Top Score: {props.topScore}</span>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/saved">Saved Articles</a>
      </li>
    </ul>
  </div>
</nav>
<div className="jumbotron-backgroundImage">
   <div className="transbox">
   <h1>Mongo Scraper</h1>
    <h3 className = "font-family: Cormorant SC">Wired Edition</h3>
   </div>
</div>
)

export default Header