import React, { useState } from "react";
import Card from "./Card";
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * The Board has nine cards
 * @returns {Element}
 * @constructor
 */
function Board() {

    const createCardPairs = () => {
        const pairs = [];
        for (let i = 1; i <= 9; i++) {
            pairs.push({ id: i, matched: false });
            pairs.push({ id: i, matched: false });
        }
        return pairs;
    };


    const [cards, setCards] = useState(createCardPairs);


    return (
        <div className="background">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    id={card.id}
                    matched={card.matched}
                    index={index}
                />
            ))}
        </div>
    );
}

export default Board;
