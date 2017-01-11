import React from 'react';


export default function ButtonList (props) {

return (

<div>
<button onClick={props.onClick}>Start</button> 
<button>Stop</button>
<button>Reset</button>  
</div>	

	)
}

