import NewTrailerCard from "./NewTrailerCard";

function TrailerList({ trailers }) {
	return (
		<>
			{trailers &&
				trailers.map((listElem, index) => (
					<NewTrailerCard {...listElem} key={listElem.id + index} />
				))}
		</>
	);
}

export default TrailerList;
