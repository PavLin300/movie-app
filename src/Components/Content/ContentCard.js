import { useNavigate } from "react-router";

function ContentCard({ original_title, original_name, overview, poster_path }) {
	const poster_url = `https://image.tmdb.org/t/p/w200` + poster_path;
	const navigate = useNavigate();
	return (
		<div
			className='contentCard'
			style={{
				backgroundImage: poster_url ? `url(${poster_url})` : "none",
			}}
			onClick={() => navigate(`/${original_title || original_name}`)}
		>
			<div className='cardBackground'>
				<div className='cardText'>
					<h5>{original_title || original_name}</h5>
					<p>
						{overview.length > 70 ? overview.slice(0, 70) + "..." : overview}
					</p>
				</div>
			</div>
		</div>
	);
}

export default ContentCard;
