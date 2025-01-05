import * as motion from "motion/react-client";
import "../../src/styles/mobileMenu.css";

import { NavLink } from "react-router";
export default function MobileMenu({ onClose, navigationCategories }) {
	return (
		<div className='mobileMenuBackground'>
			<button className='btn position-absolute end-0 top-0' onClick={onClose}>
				<i className='bi bi-x-lg' style={{ color: "#fff", fontSize: 30 }}></i>
			</button>

			<motion.div
				className='mobileMenu'
				initial={{ opacity: 0, scale: 0, translate: "-50%" }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0 }}
				key='mobileMenu'
			>
				<p className='text-center text-light fs-4 '>
					<NavLink onClick={onClose} to={`/`}>
						Home
					</NavLink>
				</p>
				{navigationCategories.map((category, index) => (
					<p key={index} className='text-center text-light fs-4 '>
						<NavLink
							onClick={onClose}
							to={`/${category.toLowerCase().split(" ").join("-")}`}
						>
							{category}
						</NavLink>
					</p>
				))}
			</motion.div>
		</div>
	);
}
