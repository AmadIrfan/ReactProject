import React from "react";
import NavBar from "./Navbar";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sidebar from "./Sidebar";

export default function Home() {
	return (
		<div className="home">
			<Sidebar />
			{/* <NavBar /> */}
		</div>
	);
}
