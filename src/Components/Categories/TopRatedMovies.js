import { useCallback, useEffect, useState } from "react";
import options from "../../data/options";
import { Button, Container } from "react-bootstrap";
import ContentList from "../Content/ContentList";
import Spinner from "../Utilities/Spinner";

function TopRatedMovies() {
	const [movieList, setMovieList] = useState([]);
	const [page, setPage] = useState(1);
	const fetchTopRated = useCallback((page) => {
		fetch(
			`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
			options
		)
			.then((res) => res.json())

			.then((res) => {
				setMovieList((prevList) => [...prevList, ...res.results]);
			})
			.catch((err) => console.error(err));
	}, []);

	useEffect(() => {
		fetchTopRated(page);
	}, [fetchTopRated, page]);

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
				onClick={() => setPage(page + 1)}
			>
				Load More...
			</Button>
		</Container>
	);
}

export default TopRatedMovies;
