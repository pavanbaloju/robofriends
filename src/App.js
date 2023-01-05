import { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            let robotInSearch = this.state.searchField.toLowerCase()
            return robot.name.toLowerCase().includes(robotInSearch);
        })
        if (this.state.robots.length === 0) {
            return <h1>LOADING</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f2'>ROBO FRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <CardList robots={filteredRobots} />
                </div>
            )
        }
    };
}

export default App;