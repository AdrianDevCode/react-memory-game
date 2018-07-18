import React, {Component} from 'react';
import "./JobsListItem.css";
import {withRouter} from 'react-router-dom';

class JobsListItem extends Component {
    clickHandler(){
        this.props.history.push('/jobs/' + this.props.id);

    }
    render() {
        
        return(
            <div onClick={this.clickHandler.bind(this)} className="JobsListItem">
                
                <div className="left">
                    <b>{this.props.title}</b>
                    <div>{this.props.company}</div>
                </div>
                <div className="right">
                    <b>{this.props.type}</b>
                    <div>{this.props.created_at}</div>
                </div>
            </div>
        )
    }
}
export default withRouter(JobsListItem);