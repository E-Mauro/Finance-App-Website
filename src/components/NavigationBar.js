import React, { Component } from 'react';

class NavigationBar extends Component {
	render() {
		return (
			<main>
				<header className="menu_bar">
					<a href="#nowhere" className="bt-menu"><span className="icon-list2"></span>Finance-App</a>
				</header>
				<nav>
					<ul>
						<li><a href="#nowhere"><span className="icon-house"></span>Inicio</a></li>
						<li><a href="#nowhere"><span className="icon-suitcase"></span>Manual</a></li>
						<li><a href="#nowhere"><span className="icon-earth"></span>Contacto</a></li>
						<li><a href="#nowhere"><span className="icon-mail"></span>Acerca de..</a></li>
					</ul>
				</nav>
			</main>
		);
	}
}

export default NavigationBar;