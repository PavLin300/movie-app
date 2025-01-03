import "../../styles/homePage.css";
import { Button } from "react-bootstrap";

function NewTrailerCard({ original_title, name, poster_path }) {
	const poster_url = `https://image.tmdb.org/t/p/w200` + poster_path;
	return (
		<div
			className='newTrailerCard'
			style={{
				backgroundImage: poster_url ? `url(${poster_url})` : "none",
			}}
		>
			<div className='cardBackground'>
				<div className='cardText d-flex gap-3 align-items-center'>
					<Button
						variant='light rounded-circle'
						className='d-inline'
						style={{ padding: "7px 12px" }}
					>
						<i style={{ fontSize: 20 }} className='bi bi-play'></i>
					</Button>
					<div className='h5'>{original_title || name}</div>
				</div>
			</div>
		</div>
	);
}

export default NewTrailerCard;