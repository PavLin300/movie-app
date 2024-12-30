import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import HomePage from "./HomePage";
function App() {
	const navigationCategories = ["Popular", "Top Rated", "TV shows", "Favorite"];
	const [activeCategory, setActiveCategory] = useState("");

	let location = useLocation();

	useEffect(() => {
		setActiveCategory(
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
				navigationCategories={navigationCategories}
				setNavigation={setActiveCategory}
				activeCategory={activeCategory}
			/>
			{location.pathname.length > 2 ? <Outlet /> : <HomePage />}
		</div>
	);
}

export default App;
