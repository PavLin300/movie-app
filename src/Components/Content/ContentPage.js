import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import options from "../../data/options";
import MainMovie from "../HomePage/MainMovie";
import MovieContext from "../Utilities/MovieContext";

function ContentPage() {
	const { title } = useParams();
	const { addToFavorite } = useContext(MovieContext);
	console.log(addToFavorite);

	const [content, setContent] = useState(null);

	useEffect(() => {
		async function findMovie(title) {
			const result = await fetch(
				`https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`,
				options
			);
			const json = await result.json();

			if (!json.results.length) {
				const result = await fetch(
					`https://api.themoviedb.org/3/search/tv?query=${title}&include_adult=false&language=en-US&page=1`,
					options
				);
				const json = await result.json();
				setContent(json.results[0]);
			} else {
				setContent(json.results[0]);
			}
		}
		findMovie(title);
	}, [title]);

	return (
		<>
			{content && (
				<div className='d-flex justify-content-center mt-5'>
					<div className='w-50'>
						<MainMovie mainMovie={content} width={"100%"} />
						<div className='contentDetails text-light mt-3 '>
							<div>
								<span>{content.original_language}</span>
								<span>{content.release_date}</span>
							</div>
							<div>
								<span>Rating: {content.vote_average}</span>
								<button onClick={() => addToFavorite(content)}>Add</button>
							</div>
						</div>
						<p className='text-light fs-5'>{content.overview}</p>
						<pre>{content && JSON.stringify(content, null, 2)}</pre>
					</div>
				</div>
			)}
		</>
	);
}

export default ContentPage;
