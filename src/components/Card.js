import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Card({ id, matched, isFlipped, onClick}) {

    // The cardCss is used to set the card's css
    const cardCss = `card${id}`;


    let cardContent;

    if (isFlipped || matched) {
        cardContent = <div className="unflippedCard" />;
    } else {
        cardContent = <div className="flippedCard" />;
    }

    return (
        <div className="cardPosition" onClick={onClick}>
            <div className={cardCss}>
                {cardContent}
            </div>
        </div>
    );
}

export default Card;
