import React, {Component} from 'react';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom';
import MemoryGame from './MemoryGame';
import Jobs from './Jobs';

class App extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <Link to="/memory">Memory Game</Link>
                    <Link to="/jobs">Jobs</Link>
                    
                </div>
               
                    <Switch>
                    <Route path="/memory" component={MemoryGame}/>
                    <Route path="/jobs" component={Jobs}/>
                    </Switch>
            </div>
        )
    }
}

export default App;