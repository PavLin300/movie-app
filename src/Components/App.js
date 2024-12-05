import "bootstrap/dist/css/bootstrap.min.css";
import MoviePopular from "./MoviePopular";
import { Container } from "react-bootstrap";
function App() {
	return (
		<div className='app'>
			<Container>
				<MoviePopular />
			</Container>
		</div>
	);
}

export default App;
