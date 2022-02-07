import React, { Component } from 'react';
import './GameBoard.css'

class GameBoard extends Component {
	render() {
		const tileValues = this.props.tileValues;
		for (let i in tileValues) {
			console.log(tileValues[i]);
		}
		return (
			<div>
				<p>Gameboard</p>
			</div>
	);
	}
}

export default GameBoard;
