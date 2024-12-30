import { Button, Container } from "react-bootstrap";

import { NavLink } from "react-router";

function Navigation({ navigationCategories, setNavigation, activeCategory }) {
	return (
		<Container>
			<div className='row text-center align-items-center justify-content-center'>
				<div className='col-1 my-3'>
					<NavLink to='/'>
						<i class='bi bi-house-door' style={{ fontSize: 30 }}></i>
					</NavLink>
				</div>

				{navigationCategories.map((category, index) => (
					<div className='col-md-2 my-3' key={index}>
						<NavLink to={`/${category.toLowerCase().split(" ").join("-")}`}>
							<Button
								variant={
									category === activeCategory ? "primary" : "outline-primary"
								}
								onClick={() => setNavigation(category)}
							>
								{category}
							</Button>
						</NavLink>
					</div>
				))}
			</div>
		</Container>
	);
}

export default Navigation;
