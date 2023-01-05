import { useEffect, useState } from "react";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";
import ErrorBoundary from "../components/ErrorBoundary";

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(setRobots)
    }, [])

    const onSearchChange = (event) => setSearchField(event.target.value);
    const filteredRobots = robots.filter(robot => 
        robot.name.toLowerCase().includes(searchField.toLowerCase()));

    if (!robots.length) {
        return <h1>LOADING</h1>
    } else {
        return (
            <div className='tc'>
                <h1 className='f2'>ROBO FRIENDS</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>

            </div>
        )
    }
}

export default App;