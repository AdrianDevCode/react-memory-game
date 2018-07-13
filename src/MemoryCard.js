import React, {Component} from 'react';
import "./MemoryCard.css";

class Card extends Component {
    
    render() {
        let notFlipped = "MemoryCardInner";
        let flipped = "MemoryCardInner flipped";
        return (
            <div className="MemoryCard"  onClick={this.props.pickCard}>
                <div className={this.props.isFlipped ? flipped : notFlipped}>
                    <div className="MemoryCardBack">
                        <img className="CardImage" src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" alt="card" />
                    </div>
                    <div className="MemoryCardFront">
                        {this.props.symbol}
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;