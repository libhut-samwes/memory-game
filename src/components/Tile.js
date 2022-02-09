import React, { Component } from 'react';
import './Tile.css'

class Tile extends Component {
	render() {
		console.log(this.props.displayColor)
		return (
			<div 
				className='tile'
				style={{
					backgroundColor: this.props.displayColor,
				}}
				onClick={(e) => [this.props.incrementTurn(), console.log(this.props.displayColor)]}
			/>
		)
	}
}

export default Tile;
