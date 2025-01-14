import { Container } from "react-bootstrap";

import { useCallback, useEffect, useState } from "react";
import options from "../../data/options";

import MainMovie from "./MainMovie";
import TrailerList from "./TrailerList";
import MightAlsoLikeList from "./MightAlsoLikeList";

import "../../styles/homePage.css";
import "../../styles/media.css";
import Spinner from "../Utilities/Spinner";
import { useNavigate } from "react-router";

function HomePage() {
	const [movieList, setMovieList] = useState([]);
	const [mainMovie, setMainMovie] = useState();
	const [newTrailers, setNewtrailers] = useState([]);

	const navigate = useNavigate();

	const fetchTrailers = useCallback(() => {
		const asyncFetchTrailers = async () => {
			let result = await fetch(
				"https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
				options
			);
			let json = await result.json();
			setNewtrailers(json.results);
		};
		asyncFetchTrailers();
	}, []);

	const fetchMovie = useCallback(() => {
		const asyncFetchMovie = async () => {
			let result = await fetch(
				"https://api.themoviedb.org/3/search/movie?query=Spider-Man&include_adult=false&language=en-US&page=1",
				options
			);
			let json = await result.json();
			setMovieList(json.results.slice(0, 4));
			setMainMovie(json.results[getRand(12)]);
		};
		asyncFetchMovie();
	}, []);

	useEffect(() => {
		fetchMovie();
		fetchTrailers();
	}, [fetchMovie, fetchTrailers]);

	const getRand = (num) => {
		const randomMovie = Math.floor(Math.random() * num);

		return randomMovie;
	};

	return (
		<Container fluid>
			<div className='row mainRow'>
				<div className='col-md-3 order-2  order-md-1 '>
					<div className='row row-cols-1'>
						<div
							className='col m-auto trailerList  rounded-5 border'
							style={{ background: "#3e5879" }}
						>
							{newTrailers[0] ? (
								<TrailerList trailers={newTrailers} />
							) : (
								<div className='d-flex justify-content-center  position-relative top-50'>
									<Spinner />
								</div>
							)}
						</div>
						<div className='col'></div>
					</div>
				</div>
				<div className='col-md-9 order-1  order-md-2'>
					<div className='row row-cols-1'>
						<div className='col d-flex justify-content-center'>
							{mainMovie ? (
								<MainMovie
									mainMovie={mainMovie}
									width={"75%"}
									onClick={() => navigate(`/${mainMovie.original_title}`)}
								/>
							) : (
								<Spinner />
							)}
						</div>
						<h3 className='text-center text-light my-3'>
							You might also like:
						</h3>
						<div className='col'>
							{movieList[0] ? (
								<MightAlsoLikeList movies={movieList} />
							) : (
								<div className='text-center'>
									<Spinner />
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default HomePage;
