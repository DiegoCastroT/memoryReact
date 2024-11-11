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
                    <div className="flippedCard">

                    </div>
                </div>
            </div>
        )
    } else {

    }

}

export default Card;