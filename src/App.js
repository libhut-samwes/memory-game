import React, { Component } from 'react';
import NavBar from './components/NavBar'
import GameBoard from './components/GameBoard'
import Footer from './components/Footer'
import './App.css';

const availableLibraries = ['colors', 'urbitSigils', 'hoonRunes'];

function randColor() {
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);
	return `rgb(${red}, ${green}, ${blue})`;
}
const tileChooser = (num = 12) => {
	/*TODO handle different libraries*/
	console.assert(num % 2 === 0, {num, errorMsg: 'number of tiles must be even'});
	let arr = []
	while(arr.length < num) {
		var r = randColor();
				if(arr.indexOf(r) === -1) {
					arr.push(r);
			}
		}
	let doubledArr = arr.concat(arr);
	let shuffledArr = doubledArr.map((value) => ({value, sort: Math.random() }))
						.sort((a, b) => a.sort - b.sort)
						.map(({ value }) => value);
	let tileArray = []
	for (let i in shuffledArr) {
		tileArray.push({
			id: i,
			tileValue: doubledArr[i],
			defaultValue: '#000000',
			matched: false,
			clicked: false,
		})
	}
	return tileArray;
}



class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			gameStarted: false,
			gameOver: false,
			tileCount: 24,
			tiles: [],
			turn: 0,
			turnsSinceLastMatch: 0,
			turnsOfMatches: [],
			libraryMode: 'color'
		}
		this.gameOver = this.gameOver.bind(this);
		this.gameStart = this.gameStart.bind(this);
		this.incrementTurn = this.incrementTurn.bind(this);
		this.selectLibrary = this.selectLibrary.bind(this);
	}
	gameOver() {
		this.setState({gameOver: true});
	}
	gameStart() {
		this.setState({gameStarted: true});
		const tiles = tileChooser(this.state.tileCount / 2);
		this.setState({tiles});
	}
	incrementTurn() {
		this.setState({turn: this.state.turn + 1});
		/*if(isMatch) {
			this.setState({turnsOfMatches: [...this.state.turnsOfMatches].push(this.state.turnNumber)});
			this.setState({turnsSinceLastMatch: 0});
		}
		this.setState({turnsSinceLastMatch: this.state.turnsSinceLastMatch + 1});
		*/
	}
	selectLibrary(lib) {
		if(!availableLibraries.includes(lib)) {
			throw `${lib} is not loaded as a library`
		}
		this.setState({libraryMode: lib});
	}

	render() {
		return (
			<div className="App">
 				<NavBar 
					gameStart={this.gameStart} 
					selectLibrary={this.selectLibrary} 
					gameOver={this.gameOver}
				/> 
				{/* If game start condition is false*/}
				{/* <Welcome 
					gameStart={this.gameStart}
					selectLibrary={this.selectLibrary}
				/>*/}
				{/* If game start condition is true and game over condition is false  */}
				<GameBoard 
					className="gameBoard"
					gameOver={this.gameOver}
					incrementTurn={this.incrementTurn}
					tiles={this.state.tiles}
				/>
				{/* If game over condition is true */}
				{/*<GameOver
					gameStart={this.gameStart}
					selectLibrary={this.selectLibrary}
				/> */}
				<p>{this.state.turn}</p>
				<Footer />
			</div>
		);
	}
}

export default App;
