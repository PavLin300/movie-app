import { Button, Container } from "react-bootstrap";

import { NavLink } from "react-router";

function Navigation({ navigationItems, setNavigation, activeItem }) {
	return (
		<Container>
			<div className='row text-center align-items-center justify-content-center'>
				{navigationItems.map((item, index) => (
					<div className='col-md-2 my-3' key={index}>
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
