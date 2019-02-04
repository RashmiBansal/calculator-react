import React from 'react';
import Button from './Button';

class NumberPad extends React.Component{
	constructor(props)
	{
		super(props);
		this.state ={ Buttons : []};
	}

	getButton(i)
	{
		return(<Button value={this.state.Buttons[i]} />);
	}
	render(){
		return(
			<div className= "NumberPad">
				<div className="row">
					{this.getButton(7)}
					{this.getButton(8)}
					{this.getButton(9)}
					{this.getButton('/')}
					
				</div>	
				<div className="row">
					{this.getButton(4)}
					{this.getButton(5)}
					{this.getButton(6)}
					{this.getButton('*')}
				</div>	
				<div className="row">
					{this.getButton(1)}
					{this.getButton(2)}
					{this.getButton(3)}
					{this.getButton('-')}
				</div>	
				<div className="row">
					{this.getButton('.')}					
					{this.getButton(0)}
					{this.getButton('=')}
					{this.getButton('+')}
				</div>	
			</div>
		);
	}
}

export default NumberPad;
