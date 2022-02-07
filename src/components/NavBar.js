import React, { Component } from 'react';
import './NavBar.css';



class NavBar extends Component {
	render() {
	
	const handleClick = (e) => {
		e.preventDefault();
		this.props.gameStart();
	}

	return (
			<div className="nav-bar">
				<p>Memory</p>
				<div>
					<a onClick={handleClick}>Reset</a>
				</div>
			</div>
		);
	}
}

export default NavBar;
