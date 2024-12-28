import { Button, Container } from "react-bootstrap";
import "../styles/navigation.css";
import { NavLink } from "react-router";
function Navigation({ navigationItems, setNavigation, activeItem }) {
	return (
		<Container>
			<div className='row text-center align-items-center border border-3 border-grey m-3 rounded-pill'>
				{navigationItems.map((item, index) => (
					<div className='col my-3' key={index}>
						<NavLink to={`/${item.toLowerCase().split(" ").join("-")}`}>
							<Button
								variant={item === activeItem ? "primary" : "outline-primary"}
								onClick={() => setNavigation(item)}
							>
								{item}
							</Button>
						</NavLink>
					</div>
				))}
			</div>
		</Container>
	);
}

export default Navigation;
