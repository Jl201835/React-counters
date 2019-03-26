import React, { Component } from 'react';

class Counter extends Component {
	formatCount() {
		const {value} = this.props.counter;
		return value === 0 ? 'Zero' : value;
	};

	render() { 
		const {onIncrement, onDelete, counter} = this.props;
		return (
		  <div>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button onClick={() => onIncrement(counter.id)} className='btn btn-secondary btn-sm m-2'>Increment</button>
				<button onClick={() => onDelete(counter.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
			</div>
		);
	}

	getBadgeClasses() {
		const {value} = this.props.counter;
		let classes = 'badge m-2 badge-';
		classes += (value === 0) ? 'warning' : 'primary';
		return classes;
	}
} 
 
export default Counter;