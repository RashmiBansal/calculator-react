import React from 'react';

class DisplayScreen extends React.Component{
	render(){
		return(
			<div className ="DisplayScreen">
				<input type = "text" className = "InputScreen"/>
				<label className = "OutputScreen"/>
			</div>
		);
	}
}

export default DisplayScreen;
