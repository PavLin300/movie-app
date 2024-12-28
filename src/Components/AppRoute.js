import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import TopRatedMovies from "./TopRatedMovies";
import MoviePopular from "./MoviePopular";

function AppRoute() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
					<Route path='/popular' element={<MoviePopular />} />
					<Route path='/top-rated' element={<TopRatedMovies />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoute;
