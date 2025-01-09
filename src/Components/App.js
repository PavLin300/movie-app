import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Navigation from "./Utilities/Navigation";
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import HomePage from "./HomePage/HomePage";
import MobileMenu from "./Utilities/MobileMenu";
import { AnimatePresence } from "motion/react";

function App() {
	const navigationCategories = [
		"Popular",
		"Top Rated",
		"Tv Series",
		"Favorite",
	];

	const [activeCategory, setActiveCategory] = useState("");

	const [showMobileMenu, setShowMobileMenu] = useState(false);

	const location = useLocation();

	useEffect(() => {
		const path = location.pathname
			.slice(1, location.pathname.length)
			.split("-")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");

		if (activeCategory !== path) {
			setActiveCategory(path);
		}
	}, [location.pathname, activeCategory]);

	return (
		<div className='app'>
			<Navigation
				navigationCategories={navigationCategories}
				setNavigation={setActiveCategory}
				activeCategory={activeCategory}
				onClickMobileMenu={() => setShowMobileMenu(!showMobileMenu)}
			/>
			{location.pathname.length > 2 ? <Outlet /> : <HomePage />}

			<AnimatePresence initial={false}>
				{showMobileMenu ? (
					<MobileMenu
						navigationCategories={navigationCategories}
						onClose={() => setShowMobileMenu(!showMobileMenu)}
					/>
				) : null}
			</AnimatePresence>
		</div>
	);
}

export default App;
