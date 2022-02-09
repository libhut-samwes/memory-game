import React, { Component } from 'react';
import './GameBoard.css'
import Tile from './Tile'

class GameBoard extends Component {
	render() {
		const tiles = this.props.tiles;
		const gameBoard = [];
		for (let i in tiles) {
			gameBoard.push(
				<Tile 
					key={tiles[i].id}
					displayColor={tiles[i].defaultValue}
				/>
			);
		}
		console.log(gameBoard);
		return (
			<div className="gameBoard">
				{gameBoard}
			</div>
	);
	}
}

export default GameBoard;
