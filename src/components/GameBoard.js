import React, { Component } from 'react';
import './GameBoard.css'
import Tile from './Tile'

class GameBoard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			matchCheck: []
		}
		this.matchHandler = this.matchHandler.bind(this);
	}
	matchHandler(index) {
		setTimeout(() => {
			const matchArr = [...this.state.matchCheck];
			matchArr.push(this.props.tiles[index])
			this.setState({matchCheck: matchArr});
			if(matchArr.length === 2) {
				if(matchArr[0].tileValue === matchArr[1].tileValue && matchArr[0].id !== matchArr[1].id) {
					this.props.matchedToggle(matchArr[0].id);
					this.props.matchedToggle(matchArr[1].id);
				}
				this.props.clickedToggle(matchArr[0].id);
				this.props.clickedToggle(matchArr[1].id);
				this.setState({matchCheck: []});
			}
		}, 500);
	}
	render() {
		const tiles = this.props.tiles;
		const gameBoard = [];
		for (let i in tiles) {
				if(!tiles[i].matched) {
					gameBoard.push(
						<Tile 
							key={tiles[i].id}
							index={tiles[i].id}
							displayColor={tiles[i].clicked ? tiles[i].tileValue : tiles[i].defaultValue }
							incrementTurn={this.props.incrementTurn}
							clickedToggle={this.props.clickedToggle}
							matchHandler={this.matchHandler}
						/>
					);
				} 
				else {
					gameBoard.push(
						<Tile 
							key={tiles[i].id}
							index={tiles[i].id}
							style={{backgroundColor: '#ffffff', border: 'none'}}
						/>
					);
				}
			}
		return (
			<div className="gameBoard">
				{gameBoard}
			</div>
	);
	}
}

export default GameBoard;
