import { useContext } from "react";
import MovieContext from "../Utilities/MovieContext";
import ContentList from "../Content/ContentList";

import { Container } from "react-bootstrap";
function Favorite() {
	const { favoriteList } = useContext(MovieContext);

	return (
		<Container>
			{favoriteList.length > 0 ? (
				<ContentList list={favoriteList} />
			) : (
				<h1 className='text-light text-center mt-5'>Your list is empty...</h1>
			)}
		</Container>
	);
}

export default Favorite;
