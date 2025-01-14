import { Button } from "react-bootstrap";
import noPicture from "../../images/no-picture.jpg";
function MainMovie({ mainMovie, width, ...props }) {
	let poster_url = noPicture;

	if (mainMovie?.backdrop_path) {
		poster_url =
			`https://image.tmdb.org/t/p/original` + mainMovie.backdrop_path;
	}

	return (
		<div className='position-relative' style={{ width: width }} {...props}>
			{mainMovie && (
				<img className='rounded-5 img-fluid' src={poster_url} alt='' />
			)}
			<div className='position-absolute bottom-0 start-0 p-3'>
				<Button variant='light rounded-circle' style={{ padding: "11px 16px" }}>
					<i style={{ fontSize: 20 }} className='bi bi-play'></i>
				</Button>
				<h3 className='text-white my-3 d-none d-md-block'>
					{(mainMovie && mainMovie.original_title) || mainMovie.original_name}
				</h3>
			</div>
		</div>
	);
}

export default MainMovie;
