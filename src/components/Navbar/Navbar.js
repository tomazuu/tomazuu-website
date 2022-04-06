import React from 'react';
import { MenuItems } from './MenuItems';
import { MediaItems } from './MenuItems';

class Navbar extends React.Component {
	state = { clicked: false }

	handleClick = () => {
		this.setState({ clicked: !this.state.clicked })
	}

	render() {
		return (
			<div class={this.state.clicked ? "menu-is-open" : ""}>
				<header>
					<div class="header-logo">
						<a href="index.html">Howdy</a>
					</div>

					<a id="header-menu-trigger"
						href="#0"
						onClick={this.handleClick}
						class={this.state.clicked ? 'opaque' : "opaque menu-is-open"}>
						<span class="header-menu-text">Menu</span>
						<span class="header-menu-icon"></span>
					</a>

					<nav id="menu-nav-wrap">
						<a href="#0"
							class="close-button"
							title="close"
							onClick={this.handleClick}>
							<span>Close</span>
						</a>

						<h3>tomazuu</h3>

						<ul class="nav-list">
							{MenuItems.map((item, index) => {
								return (
									<li key={index}>
										<a class="smoothscroll"
											href={item.url}
											onClick={this.handleClick}>
											{item.title}
										</a>
									</li>
								)
							})}
						</ul>

						<ul class="header-social-list">
							{MediaItems.map((item, index) => {
								return (
									<li key={index}>
										<a href={item.url}>
											<i class={item.classname}></i>
										</a>
									</li>
								)
							})}
						</ul>

					</nav>
				</header>
			</div>
		);
	}
}

export default Navbar; 