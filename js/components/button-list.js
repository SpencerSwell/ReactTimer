import React from 'react';


export default function ButtonList (props) {

return (

<div>
<button onClick={props.start}>Start</button> 
<button>Stop</button>
<button onClick={props.reset}>Reset</button>  
</div>	

	)
}

