import React, { Component } from 'react';

class Tile extends Component {
	render() {
		const clickHandler = () => {
			this.props.incrementTurn();
			this.props.clickedToggle(this.props.index);
			this.props.matchHandler(this.props.index);
		}
		return (
			<div 
				className='tile'
				style={{
					backgroundColor: this.props.displayColor,
				}}
				onClick={clickHandler}
			/>
		)
	}
}

export default Tile;
