import React from 'react';
import ReactDOM from 'react-dom';

export default function Display (props) {


var minutes= 5;
var seconds= 30;

return (

	<h1>{props.minutes}:{props.seconds}</h1>

	)


}