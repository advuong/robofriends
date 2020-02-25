import React, {Component} from 'react';
import CardList from '../component/CardList';
import {robots} from '../component/robot';
import SearchBox from '../component/SearchBox';
import './App.css';
import Scroll from '../component/Scroll';
import ErrorBoundary from '../component/ErrorBoundary';


class App extends Component {
	constructor() {
		super()
		this.state = { //can change and describs app
			robots: [], //robots array. Starts off empty. 
			searchfield: ''
		}
	}


	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
			response.json().then(users=>this.setState({robots: robots}));
		})
	}


	onSearchChange =  (event) =>{ //MADE UP FUNCTION}
	this.setState({ searchfield: event.target.value})
// THIS ALTERS THE STATE OF THE APP. Updates it based on the input. Otherwise state untouched
	}
	
	render(){
		const filteredRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return(
			<div className= 'tc'>
				<h1 className = 'shadow-5 dib pa3 '>Robot Friends</h1> 
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots}/>
					</ErrorBoundary>
				</Scroll>
			</div>
			);

	}
}

export default App;