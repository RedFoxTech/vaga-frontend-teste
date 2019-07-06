import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav className="navbar navbar-extand-sm navbar-dark bg-primary mb-3 py-0">
			<div className="container">
				<Link to="/" className="navbar-brand">
					Voltar
				</Link>
				<div>
					<ul className="navbar-nav d-flex flex-row">
						<li className="nav-item mr-1">
							<Link to="/" className="nav-link">
								<i className="fas fa-home" /> 
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
