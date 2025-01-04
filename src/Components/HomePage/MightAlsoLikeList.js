import MightAlsoLikeCard from "./MightAlsoLikeCard";

function MightAlsoLikeList({ movies }) {
	return (
		<div className='d-flex gap-4 justify-content-center flex-wrap'>
			{movies &&
				movies.map((listElem, index) => (
					<MightAlsoLikeCard {...listElem} key={listElem.id + index} />
				))}
		</div>
	);
}

export default MightAlsoLikeList;
