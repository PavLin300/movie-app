import { useCallback, useEffect, useState } from "react";
import options from "../data/options";
import { Button } from "react-bootstrap";

function MainMovie() {
	const [mainMovie, setMainMovie] = useState();

	const fetchMovie = useCallback(() => {
		const asyncFetchMovie = async () => {
			let result = await fetch(
				"https://api.themoviedb.org/3/search/movie?query=Spider-Man&include_adult=false&language=en-US&page=1",
				options
			);
			let json = await result.json();

			setMainMovie(json.results[getRand(12)]);
		};
		asyncFetchMovie();
	}, []);

	useEffect(() => {
		fetchMovie();
	}, [fetchMovie]);

	const getRand = (num) => {
		const randomMovie = Math.floor(Math.random() * num);
		if (randomMovie === 7) return 8;
		return randomMovie;
	};
	let poster_url =
		`https://image.tmdb.org/t/p/original` + mainMovie?.backdrop_path;

	return (
		<div className='w-50 position-relative'>
			{mainMovie && (
				<img
					className='rounded-5'
					style={{ width: "100%" }}
					src={poster_url}
					alt=''
				/>
			)}
			<div className='position-absolute bottom-0 start-0 p-3'>
				<Button variant='dark rounded-pill' size='lg'>
					<i style={{ fontSize: 20 }} className='bi bi-play'></i>
				</Button>
				<h3 className='text-white my-3'>
					{mainMovie && mainMovie.original_title}
				</h3>
			</div>
		</div>
	);
}

export default MainMovie;
