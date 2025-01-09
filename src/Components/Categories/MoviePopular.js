import { useCallback, useEffect, useState } from "react";
import options from "../../data/options";

import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import ContentList from "../Content/ContentList";
import Spinner from "../Utilities/Spinner";

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
			{movieList[0] ? (
				<ContentList list={movieList} />
			) : (
				<div className='text-center'>
					<Spinner />
				</div>
			)}

			<Button
				className='d-block mx-auto m-4'
				variant='outline-light'
				onClick={() => setPage((prevPage) => prevPage + 1)}
			>
				Load More...
			</Button>
		</Container>
	);
}

export default MoviePopular;
