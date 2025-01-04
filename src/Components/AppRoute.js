import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import TopRatedMovies from "./Categories/TopRatedMovies";
import MoviePopular from "./Categories/MoviePopular";
import TvSeries from "./Categories/TvSeries";

function AppRoute() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
					<Route path='/popular' element={<MoviePopular />} />
					<Route path='/top-rated' element={<TopRatedMovies />} />
					<Route path='/tv-series' element={<TvSeries />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoute;
