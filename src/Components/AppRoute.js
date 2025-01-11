import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import TopRatedMovies from "./Categories/TopRatedMovies";
import MoviePopular from "./Categories/MoviePopular";
import TvSeries from "./Categories/TvSeries";
import ErrorComponent from "./Utilities/ErrorComponent";
import ContentPage from "./Content/ContentPage";
import Favorite from "./Categories/Favorite";

function AppRoute() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
					<Route path='/popular' element={<MoviePopular />} />
					<Route path='/top-rated' element={<TopRatedMovies />} />
					<Route path='/tv-series' element={<TvSeries />} />
					<Route path='/favorite' element={<Favorite />} />
					<Route path=':title' element={<ContentPage />} />
					<Route
						path='/*'
						element={<ErrorComponent message={"Page doesn't exist"} />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoute;
