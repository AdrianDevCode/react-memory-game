import React, {Component} from 'react';
import "./MemoryCard.css";

class Card extends Component {
    render() {
        return (
             <div className="MemoryCard">
                <img className="CardImage" src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" alt="card" />
            </div>
        );
    }
}

export default Card;