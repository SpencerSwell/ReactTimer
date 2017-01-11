import React from 'react';
import ReactDOM from 'react-dom';
import Display from './display';
import ButtonList from './button-list';

export default class App extends React.Component {

	constructor(props) {

		super(props)

		this.state = {
			minutes:25,
			seconds:0,
			stopped:false
		}
	this.startTimer = this.startTimer.bind(this);
    this.Timer = this.Timer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
	}
	 
	startTimer() {
		if(this.state.stopped===false) {
			console.log("TIMER STARTED")
		var countdown = setInterval(this.Timer,1000);
		}
		console.log(this.state.stopped);
		
	}

	 Timer() { 
		
	 	if (this.state.stopped===true) {
		clearInterval(countdown);
		};

		if(this.state.seconds>0){
			this.SubtractSecond()
			console.log("Subtracting a second");
		} console.log(this.state.seconds); 
		

		if(this.state.minutes>0&&this.state.seconds===0) {
			this.SubtractMinute()
			console.log("Subtracting a minute");
			} console.log(this.state.minutes); 
			
	};

	SubtractMinute() {
		setTimeout(this.setState({minutes:this.state.minutes-=1, seconds:this.state.seconds+=59}),60000);
	};
	SubtractSecond () {
		setTimeout(this.setState({seconds:this.state.seconds-=1}),1000);


	};

	 resetTimer() {
	 	this.setState({stopped:true,minutes:this.state.minutes=25,seconds:this.state.seconds=0})
	};
		render() {
				return (
					<div>
					<Display minutes={this.state.minutes} seconds={this.state.seconds}/>
					<ButtonList start={this.startTimer} reset={this.resetTimer}/>
					</div>
					)
		}
	


}