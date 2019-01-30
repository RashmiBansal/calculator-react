import React from 'react';
import DisplayScreen from './DisplayScreen';
import NumberPad from './NumberPad';

class Calculator extends React.Component{
	render(){
		return(
			<div>
				<h1>Calculator</h1>
				<DisplayScreen/>
				<NumberPad/>
			</div>
		);
	}
}

export default Calculator;
