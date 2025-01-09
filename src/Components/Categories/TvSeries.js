import { useCallback, useEffect, useState } from "react";

import { Button, Container } from "react-bootstrap";
import options from "../../data/options";
import ContentList from "../Content/ContentList";
import Spinner from "../Utilities/Spinner";

function TvSeries() {
	const [tvList, setTvList] = useState([]);
	const [page, setPage] = useState(1);

	const fetchTvShows = useCallback((page) => {
		fetch(
			`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${page}}`,
			options
		)
			.then((res) => res.json())

			.then((res) => {
				setTvList((prevList) => [...prevList, ...res.results]);
			})
			.catch((err) => console.error(err));
	}, []);

	useEffect(() => {
		fetchTvShows(page);
	}, [fetchTvShows, page]);

	return (
		<Container>
			{tvList[0] ? (
				<ContentList list={tvList} />
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

export default TvSeries;
