import "../styles/contentList.css";

function ContentCard({ original_title, name, overview, poster_path }) {
	const poster_url = `https://image.tmdb.org/t/p/w200` + poster_path;

	return (
		<div
			className='col-6 col-md-4 col-lg-3 col-xl-2 p-0 contentCard'
			style={{
				backgroundImage: poster_url ? `url(${poster_url})` : "none",
			}}
		>
			<div className='cardBackground'>
				<div className='cardText'>
					<h5>{original_title || name}</h5>
					<p>
						{overview.length > 70 ? overview.slice(0, 70) + "..." : overview}
					</p>
				</div>
			</div>
		</div>
	);
}

export default ContentCard;
