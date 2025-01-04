import { useCallback, useEffect, useState } from "react";
import options from "../../data/options";

import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import ContentList from "../Content/ContentList";

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
				setMovieList((prevList) => [...prevList, ...res.results]);
			})
			.catch((err) => console.error(err));
	}, []);

	useEffect(() => fetchMovieList(page), [page, fetchMovieList]);

	return (
		<Container>
			<ContentList list={movieList} />

			<Button
				className='d-block mx-auto m-4'
				variant='outline-light'
				onClick={() => setPage(page + 1)}
			>
				Load More...
			</Button>
		</Container>
	);
}

export default MoviePopular;
