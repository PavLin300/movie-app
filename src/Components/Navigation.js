import { Button, Container } from "react-bootstrap";

import { NavLink } from "react-router";
import { useState } from "react";

function Navigation({
	navigationCategories,
	setNavigation,
	activeCategory,

	onClickMobileMenu,
}) {
	const [hovered, setHovered] = useState(false);
	return (
		<Container>
			<div className='d-none d-md-flex row text-center align-items-center justify-content-center'>
				<div className='col-1 my-3 '>
					<NavLink to='/'>
						<i
							className={hovered ? "bi bi-house-door-fill" : "bi bi-house-door"}
							style={{ color: "#fff", fontSize: 30 }}
							onMouseEnter={() => setHovered(!hovered)}
							onMouseLeave={() => setHovered(!hovered)}
						></i>
					</NavLink>
				</div>

				{navigationCategories.map((category, index) => (
					<div className='col-md-2 my-3' key={index}>
						<NavLink to={`/${category.toLowerCase().split(" ").join("-")}`}>
							<Button
								variant={
									category === activeCategory ? "light" : "outline-light"
								}
								onClick={() => setNavigation(category)}
							>
								{category}
							</Button>
						</NavLink>
					</div>
				))}
			</div>

			<div className='d-md-none d-flex justify-content-end mb-4 '>
				<button className='btn' onClick={onClickMobileMenu}>
					<i
						className='bi bi-list'
						style={{ fontSize: 30, color: "#fff", cursor: "pointer" }}
					></i>
				</button>
			</div>
		</Container>
	);
}

export default Navigation;
