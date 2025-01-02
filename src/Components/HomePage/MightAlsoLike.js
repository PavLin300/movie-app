import "../../styles/homePage.css";
import { Button } from "react-bootstrap";
function MightAlsoLike({ original_title, name, poster_path }) {
	const poster_url = `https://image.tmdb.org/t/p/w200` + poster_path;
	return (
		<div
			className='mightAlsoLikeCard'
			style={{
				backgroundImage: poster_url ? `url(${poster_url})` : "none",
			}}
		>
			<div className='cardBackground'>
				<div className='cardText'>
					<Button
						variant='light rounded-circle'
						className='d-inline'
						style={{ padding: "7px 12px" }}
					>
						<i style={{ fontSize: 20 }} className='bi bi-play'></i>
					</Button>
					<h5 className='my-1 d-none d-md-block'>{original_title || name}</h5>
				</div>
			</div>
		</div>
	);
}

export default MightAlsoLike;
