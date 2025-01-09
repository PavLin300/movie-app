import { useEffect, useState } from "react";
import { useParams } from "react-router";
import options from "../../data/options";

function ContentPage() {
	const { title } = useParams();

	const [content, setContent] = useState();
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

	const poster_url = `https://image.tmdb.org/t/p/w200` + content?.poster_path;

	return (
		<div>
			<img src={poster_url} alt='' />
			<pre>{content && JSON.stringify(content, null, 2)}</pre>
		</div>
	);
}

export default ContentPage;
