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
        let notFlipped = "MemoryCardInner";
        let flipped = "MemoryCardInner flipped";
        return (
            <div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
                <div className={this.state.isFlipped ? flipped : notFlipped}>
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