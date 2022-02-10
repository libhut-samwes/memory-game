import React, { Component } from 'react';
import './NavBar.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
	{ value: 16, label: 'Easy' },
	{ value: 24, label: 'Normal' },
	{ value: 48, label: 'Hard'},
];

const defaultOption = options[1];

class NavBar extends Component {
	render() {
	let tileCount = 24;	
	const handleClick = (e) => {
		e.preventDefault();
		this.props.gameStart(tileCount);
	}
	const handleSelect = (e) => {
		tileCount = e.value;
	}
	return (
			<div className="nav-bar">
				<p>Memory</p>
				<div className="dashboard">
					<Dropdown 
						options={options} 
						onChange={handleSelect} 
						value={defaultOption} 
						placeholder="Choose difficulty..." 
					/>
					<a 
						className="reset-btn"
						onClick={handleClick}
						href="/"
					>
						Reset
					</a>
				</div>
			</div>
		);
	}
}

export default NavBar;
