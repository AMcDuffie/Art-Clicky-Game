//sets up the reusable Jumbotron component
import React from "react";
import "./style.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>Art Clicky Game!</h1>
		<h2>Click on any image to earn a point, but don't click on the same art more than once. Click all 12 pics, and you win.</h2>
	</header>
);
export default Jumbotron;