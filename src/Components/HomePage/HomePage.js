import { Container } from "react-bootstrap";
import MainMovie from "./MainMovie";
import { useCallback, useEffect, useState } from "react";
import options from "../../data/options";

import MightAlsoLikeCard from "./MightAlsoLikeCard";
import NewTrailerCard from "./NewTrailerCard";

function HomePage() {
	const [movieList, setMovieList] = useState([]);
	const [mainMovie, setMainMovie] = useState();
	const [newTrailers, setNewtrailers] = useState([]);
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
			<div className='row'>
				<div className='col-md-3 order-2  order-md-1 '>
					<div className='row row-cols-1 '>
						<div className='col m-auto custom-scroll '>
							{newTrailers &&
								newTrailers.map((listElem, index) => (
									<NewTrailerCard {...listElem} key={listElem.id + index} />
								))}
						</div>
						<div className='col'></div>
					</div>
				</div>
				<div className='col-md-9 order-1  order-md-2'>
					<div className='row row-cols-1'>
						<div className='col d-flex justify-content-center'>
							<MainMovie mainMovie={mainMovie} />
						</div>
						<h3 className='text-center my-3'>You might also like: </h3>
						<div className='col d-flex gap-4 justify-content-center flex-wrap '>
							{movieList &&
								movieList.map((listElem, index) => (
									<MightAlsoLikeCard {...listElem} key={listElem.id + index} />
								))}
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default HomePage;
