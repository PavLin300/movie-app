import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Navigation from "./Utilities/Navigation";
import { useState, useEffect, useCallback } from "react";
import { Outlet, useLocation } from "react-router";
import HomePage from "./HomePage/HomePage";
import MobileMenu from "./Utilities/MobileMenu";
import { AnimatePresence } from "motion/react";
import MovieContext from "./Utilities/MovieContext";
import RecentlyContext from "./Utilities/RecenltyContext";

function App() {
	const navigationCategories = [
		"Popular",
		"Top Rated",
		"Tv Series",
		"Favorite",
	];

	const [activeCategory, setActiveCategory] = useState("");

	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [favoriteList, setFavoriteList] = useState([]);
	const [recentlySeenList, setRecentlySeenList] = useState([]);

	const addToRecentlySeen = useCallback(
		function addToRecentlySeen(movie) {
			if (recentlySeenList[0]?.id === movie.id) return;
			setRecentlySeenList((prevSeen) => [movie, ...prevSeen]);
		},
		[recentlySeenList]
	);

	function addToFavorite(movie) {
		setFavoriteList((prevFavorite) => [movie, ...prevFavorite]);
	}

	function removeFromFavorite(movie) {
		const newFavorite = [...favoriteList].filter(
			(item) =>
				movie?.original_title !== item?.original_title ||
				movie?.original_name !== item?.original_name
		);
		setFavoriteList(newFavorite);
	}

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
		<RecentlyContext.Provider value={{ addToRecentlySeen, recentlySeenList }}>
			<MovieContext.Provider
				value={{ favoriteList, addToFavorite, removeFromFavorite }}
			>
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
			</MovieContext.Provider>
		</RecentlyContext.Provider>
	);
}

export default App;
