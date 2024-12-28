import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./Navigation";
import { useState } from "react";
import { Outlet } from "react-router";

function App() {
	const navigationItems = ["Popular", "Top Rated", "TV shows", "Favorite"];
	const [active, setActive] = useState("Popular");
	return (
		<div className='app'>
			<Navigation
				navigationItems={navigationItems}
				setNavigation={setActive}
				activeItem={active}
			/>
			<Outlet />
		</div>
	);
}

export default App;
