import { useCallback, useEffect, useState } from "react";
import options from "../data/options";
import ContentList from "./ContentList";

import Button from "react-bootstrap/Button";

function MoviePopular() {
	const [movieList, setMovieList] = useState([]);
	const [page, setPage] = useState(1);

	const fetchMovieList = useCallback((page) => {
		fetch(
			`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
			options
		)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				return res;
			})
			.then((res) => {
				setMovieList((prevList) => [...prevList, ...res.results]);
			})
			.catch((err) => console.error(err));
	}, []);

	useEffect(() => fetchMovieList(page), [page, fetchMovieList]);

	return (
		<>
			<ContentList list={movieList} />

			<Button
				className='d-block mx-auto m-4'
				variant='outline-primary'
				onClick={() => setPage(page + 1)}
			>
				Load More...
			</Button>
		</>
	);
}

export default MoviePopular;
