import React from "react";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
export default function Navbar() {
	return (
		<div>
			Navbar
			<Link to="/about">About</Link>
			<Carousel />
		</div>
	);
}
