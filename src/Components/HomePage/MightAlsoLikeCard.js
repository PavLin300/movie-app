import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
function MightAlsoLikeCard({ original_title, name, poster_path }) {
	const poster_url = `https://image.tmdb.org/t/p/w200` + poster_path;
	const navigate = useNavigate();
	return (
		<div
			className='mightAlsoLikeCard'
			style={{
				backgroundImage: poster_url ? `url(${poster_url})` : "none",
			}}
			onClick={() => navigate(`/${original_title}`)}
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

export default MightAlsoLikeCard;
