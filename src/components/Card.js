import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Card({ id, matched, onClick, index }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };

    if (!isFlipped) {
        return (
            <div className="cardPosition">
                <div className="card" onClick={flipCard}>
                    <div className="flippedCard" />
                </div>
            </div>
        );
    } else {
        return (
            <div className="cardPosition">
                <div className="card1" onClick={flipCard}>
                    <div className="unflippedCard" />
                </div>
            </div>
        );
    }
}

export default Card;
