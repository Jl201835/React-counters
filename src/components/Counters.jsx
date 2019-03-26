import React from 'react';
import Counter from './Counter';

const Counters = ({onReset, onIncrement, onDelete, counters}) => {
		return (
			<div> 
			<button onClick={onReset} className='btn btn-primary btn-sm m-2'>Reset</button>
			{counters.map(counter=><Counter key={counter.id} onIncrement={onIncrement} onDelete={onDelete} counter={counter} />)}
			</div>
		 );
}
 
export default Counters;