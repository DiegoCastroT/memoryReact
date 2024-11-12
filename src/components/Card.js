import React from "react";
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Card() {

    const [isFlipped, setIsFlipped] = useState(false);
    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };

    if (!isFlipped) {
        return (
            <div className="cardPosition">
                <div className="card">
                    <div className="flippedCard" onClick={flipCard}>

                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="cardPosition">
                <div className="card1">
                    <div className="unflippedCard" onClick={flipCard}>

                    </div>
                </div>
            </div>
        )
    }

}

export default Card;