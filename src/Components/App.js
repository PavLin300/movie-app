import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import HomePage from "./HomePage/HomePage";
import MobileMenu from "./MobileMenu";
import { AnimatePresence } from "motion/react";
function App() {
	const navigationCategories = [
		"Popular",
		"Top Rated",
		"TV series",
		"Favorite",
	];
	const [activeCategory, setActiveCategory] = useState("");

	const [showMobileMenu, setShowMobileMenu] = useState(false);

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
