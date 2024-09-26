import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Content from "./Content";
import Footer from "./Footer";

export default function Layout() {
	return (
		<>
			<header>
				<NavBar />
			</header>
			<div>
				<Header />
			</div>
			<div className="">
				<Content />
			</div>
			<div className="">
				<Footer />
			</div>
		</>
	);
}
