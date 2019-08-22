import React from "react";
import "./style.css"

const Header = props =>{
  return <div> <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Clicky Game</a>
      <span className="navbar-brand" > Current Score: {props.currentScore} | Top Score: {props.topScore}</span>
  </nav>
  <div className="jumbotron-backgroundImage">
  <div className="transbox">
  <h1>Clicky Game!</h1>
   <h4 className = "font-family: Cormorant SC">Click on a Leo Card to earn points, but don't click on it more than once until all the cards have been Selected!</h4>
  </div>
</div>
	</div>
}


export default Header


