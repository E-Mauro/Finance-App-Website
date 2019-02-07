import React, { Component } from 'react';


class NavigationBar extends Component {
  render() {
    return (
      <main>
<header>
		<div class="menu_bar">
			<a href="#" class="bt-menu"><span class="icon-list2"></span>Finance-App</a>
		</div>
 
		<nav>
			<ul>
				<li><a href="#"><span class="icon-house"></span>Inicio</a></li>
				<li><a href="#"><span class="icon-suitcase"></span>Manual</a></li>
				<li><a href="#"><span class="icon-earth"></span>Contacto</a></li>
				<li><a href="#"><span class="icon-mail"></span>Acerca de..</a></li>
			</ul>
		</nav>
	</header>
      </main>
    );
  }
}

export default NavigationBar;