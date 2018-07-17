import React, {Component} from 'react';
import "./Jobs.css";
import JobsListItem from "./JobsListItem";
import axios from "axios";


class Jobs extends Component {
    constructor() {
        super()
        this.state={
            jobs: [],
            
        }

    }
    componentWillMount() {
        axios.defaults.withCredentials = true;
        axios.get("http://localhost:3001/api/jobs/")
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
               {jobsJSX}
            </div>
        );
    }
}

export default Jobs;