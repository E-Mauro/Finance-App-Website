import React, { Component } from 'react';

class NavigationBar extends Component {
	render() {
		return (
			<main>
				<header class="menu_bar">
					<a href="#nowhere" class="bt-menu"><span class="icon-list2"></span>Finance-App</a>
				</header>
				<nav>
					<ul>
						<li><a href="#nowhere"><span class="icon-house"></span>Inicio</a></li>
						<li><a href="#nowhere"><span class="icon-suitcase"></span>Manual</a></li>
						<li><a href="#nowhere"><span class="icon-earth"></span>Contacto</a></li>
						<li><a href="#nowhere"><span class="icon-mail"></span>Acerca de..</a></li>
					</ul>
				</nav>
			</main>
		);
	}
}

export default NavigationBar;