import React, {Component} from 'react';
import "./MemoryCard.css";

class Card extends Component {
    constructor(){
        super()
        this.state = {isFlipped: false};
    }
    clickHandler() {
        this.setState({
            isFlipped: !this.state.isFlipped
            
        });
    }
    
    render() {
        let memoryCardInnerClass = "MemoryCardInner";
        this.state.isFlipped ? memoryCardInnerClass += " flipped" : memoryCardInnerClass = "MemoryCardInner";
        return (
            <div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardBack">
                        <img className="CardImage" src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" alt="card" />
                    </div>
                    <div className="MemoryCardFront">
                        <span>∆</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;