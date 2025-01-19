import { useNavigate } from "react-router";

function RecentlySeen({ list }) {
	const recentlySeen = list.slice(0, 3);
	const navigate = useNavigate();

	return (
		<div className='rounded-5 border p-3 m-auto recentlySeenList'>
			{!recentlySeen[0] ? (
				<h3 className='text-light text-center'>No info yet...</h3>
			) : (
				recentlySeen.map((movie) => (
					<div
						key={movie.original_title || movie.original_name}
						className='d-flex gap-3 align-items-center my-2'
						onClick={() =>
							navigate(`/${movie.original_title || movie.original_name}`)
						}
					>
						<img
							className='w-25 rounded-3'
							style={{ cursor: "pointer" }}
							src={`https://image.tmdb.org/t/p/w200` + movie.poster_path}
							alt='Movie poster'
						/>
						<div className='text-light'>
							{movie.original_title || movie.original_name}
						</div>
					</div>
				))
			)}
		</div>
	);
}

export default RecentlySeen;
