import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import HomePage from "./HomePage";
function App() {
	const navigationItems = ["Popular", "Top Rated", "TV shows", "Favorite"];
	const [active, setActive] = useState("");

	let location = useLocation();

	useEffect(() => {
		setActive(
			location.pathname
				.slice(1, location.pathname.length)
				.split("-")
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(" ")
		);
	}, [location]);

	return (
		<div className='app'>
			<Navigation
				navigationItems={navigationItems}
				setNavigation={setActive}
				activeItem={active}
			/>
			{location.pathname.length > 2 ? <Outlet /> : <HomePage />}
		</div>
	);
}

export default App;
