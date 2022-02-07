import React, { Component } from 'react';
import './Tile.js'

class Box extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.tileValue,
			clicked: false,
			matched: false;
		}
	}
	let displayColor = this.state.matched === true ? this.state.value : '#ffffff';
	
	render() {
		return (
			<div />
		)
	}
}
