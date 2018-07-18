import React, {Component} from 'react';
import "./Jobs.css";
import {Route, Switch} from "react-router-dom";
import JobsListItem from "./JobsListItem";
import axios from "axios";
import Job from "./Job";

class Jobs extends Component {
    constructor() {
        super()
        this.state={
            jobs: [],
            
        }
    }
    componentWillMount() {   
        axios.get("/api/jobs/")
        .then(data => {
            this.setState({
                jobs: data.data
            })
        })   
    }

    render() {
        
        let jobsJSX = this.state.jobs.map((job, index) => {
            return <JobsListItem key={index} {...job} />
        });
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <h1 className="app-title">Jobs in Atlanta</h1>
                        <p className="App-subtitle">Click to explore jobs</p>
                    </header>
                </div>
               <Switch>
                   <Route exact path="/jobs" render={() => jobsJSX} />
                   <Route path="/jobs/:id" component={Job} />
               </Switch>
            </div>
        );
    }
}

export default Jobs;