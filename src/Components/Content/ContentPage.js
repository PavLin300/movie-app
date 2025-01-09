import { useEffect, useState } from "react";
import { useParams } from "react-router";
import options from "../../data/options";
import MainMovie from "../HomePage/MainMovie";

function ContentPage() {
	const { title } = useParams();

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
	if (content) {
		return (
			<div className='d-flex justify-content-center mt-5'>
				<div className='w-50'>
					<MainMovie mainMovie={content} width={"100%"} />
					<p className='contentDetails text-light mt-3'>
						<div>{content.original_language}</div>
						<div>{content.release_date}</div>
					</p>
					<p className='text-light fs-5'>{content.overview}</p>
					{/* <pre>{content && JSON.stringify(content, null, 2)}</pre> */}
				</div>
			</div>
		);
	}
}

export default ContentPage;
