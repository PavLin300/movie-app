import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import options from "../../data/options";
import MainMovie from "../HomePage/MainMovie";
import MovieContext from "../Utilities/MovieContext";
import RecentlyContext from "../Utilities/RecenltyContext";

function ContentPage() {
	const { title } = useParams();
	const { favoriteList, addToFavorite, removeFromFavorite } =
		useContext(MovieContext);
	const { addToRecentlySeen } = useContext(RecentlyContext);

	const [content, setContent] = useState(null);
	const [liked, setLiked] = useState(false);

	const defaultValue = "No info";

	function handleLike() {
		if (liked) {
			removeFromFavorite(content);
		} else {
			addToFavorite(content);
		}
	}

	useEffect(() => {
		async function findMovie(title) {
			const result = await fetch(
				`https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`,
				options
			);
			const json = await result.json();

			let isLiked;

			if (!json.results.length) {
				const result = await fetch(
					`https://api.themoviedb.org/3/search/tv?query=${title}&include_adult=false&language=en-US&page=1`,
					options
				);
				const json = await result.json();

				setContent(json.results[0]);
				isLiked = favoriteList.find(
					(elem) => elem.original_name === json.results[0].original_name
				);
			} else {
				setContent(json.results[0]);
				isLiked = favoriteList.find(
					(elem) => elem.original_title === json.results[0].original_title
				);
			}

			setLiked(isLiked);
		}

		findMovie(title);
	}, [title, favoriteList]);

	useEffect(() => {
		if (content) {
			addToRecentlySeen(content);
		}
	}, [content, addToRecentlySeen]);

	return (
		<>
			{content && (
				<div className='d-flex justify-content-center mt-5'>
					<div className='col-10 col-md-6'>
						<MainMovie mainMovie={content} width={"100%"} />
						<div className='contentDetails text-light mt-3 '>
							<div>
								<span>{content.original_language || defaultValue}</span>
								<span>{content.release_date || defaultValue}</span>
							</div>
							<div>
								<span>Rating: {content.vote_average || defaultValue}</span>
								<button className='btn' onClick={handleLike}>
									{liked ? (
										<i
											className='bi bi-heart-fill'
											style={{ fontSize: 30 }}
										></i>
									) : (
										<i className='bi bi-heart' style={{ fontSize: 30 }}></i>
									)}
								</button>
							</div>
						</div>
						<p className='text-light fs-5'>
							{content.overview || defaultValue}
						</p>
						{/* <pre>{content && JSON.stringify(content, null, 2)}</pre> */}
					</div>
				</div>
			)}
		</>
	);
}

export default ContentPage;
