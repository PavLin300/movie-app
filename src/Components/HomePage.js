import { Container } from "react-bootstrap";
import MainMovie from "./MainMovie";
import { useCallback, useEffect, useState } from "react";
import options from "../data/options";
import ContentCard from "./ContentCard";

function HomePage() {
	const [movieList, setMovieList] = useState([]);
	const [mainMovie, setMainMovie] = useState();

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
	}, [fetchMovie]);

	const getRand = (num) => {
		const randomMovie = Math.floor(Math.random() * num);

		return randomMovie;
	};
	return (
		<Container fluid>
			<div className='row mt-2'>
				<div className='col-md-4'></div>
				<div className='col-md-8 d-flex justify-content-center'>
					<MainMovie mainMovie={mainMovie} />
				</div>
			</div>
			<div className='row'>
				<div className='col-md-4'></div>
				<div className='col-md-8'>
					<h3 className='text-center my-3'>You might also like: </h3>
					<div className='d-flex gap-4 justify-content-center flex-wrap pb-3'>
						{movieList &&
							movieList.map((listElem, index) => (
								<ContentCard {...listElem} key={listElem.id + index} />
							))}
					</div>
				</div>
			</div>
		</Container>
	);
}

export default HomePage;
