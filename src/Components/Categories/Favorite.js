import { useContext } from "react";
import MovieContext from "../Utilities/MovieContext";
import ContentList from "../Content/ContentList";

import { Container } from "react-bootstrap";
function Favorite() {
	const { favoriteList } = useContext(MovieContext);

	return (
		<Container>
			<ContentList list={favoriteList} />
		</Container>
	);
}

export default Favorite;
