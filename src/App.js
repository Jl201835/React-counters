import React, { Component } from 'react';
import './App.css';
import Counters from './components/Counters';
import Navbar from './components/Navbar'

class App extends Component {
		state = {  
			counters: [
				{id:1, value: 4},
				{id:2, value: 0},
				{id:3, value: 0},
				{id:4, value: 0}
			]
		}
	
		handleIncrement = (counterId) => {
			const counters = this.state.counters.map(c=> {
				if (c.id === counterId) {
					const newC = {...c};
					newC.value++;
					return newC;
				}
				return c;
			})
			this.setState({counters});
		}
	
		handleDelete = (counterId) => {
			const counters = this.state.counters.filter(c=> c.id !== counterId);
			this.setState({counters});
		}
	
		handleReset = () => {
			const counters = this.state.counters.map(c=> ({...c, value: 0}));
			this.setState({counters});
		}
	

  render() {
    return (
      <React.Fragment>
				<Navbar totalCount={this.state.counters.reduce((sum, c)=>sum+c.value, 0)}/>
				<Counters 
				onReset={this.handleReset} 
				onIncrement={this.handleIncrement} 
				onDelete={this.handleDelete} 
				counters={this.state.counters}
				/>
			</React.Fragment>
    );
  }
}

export default App;
