// Board.js
import React, { useState } from "react";
import Card from "./Card";
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * The Board has eight pairs of cards.
 * @returns {Element}
 * @constructor
 */
function Board() {

    const createCardPairs = () => {
        const pairs = [];
        for (let i = 1; i <= 4; i++) {
            pairs.push({ id: i, matched: false });
            pairs.push({ id: i, matched: false });
        }
        return pairs.sort(() => Math.random() - 0.5);
    };

    const [cards, setCards] = useState(createCardPairs);

    const [flippedCards, setFlippedCards] = useState([]);


    const handleCardClick = (index) => {

        // If there are already two flipped cards or the card is already matched don't do anything
        if (flippedCards.length === 2 || cards[index].matched) {
            return;
        }

        // Flip the card by adding its index to the flippedCards array
        const newFlippedCards = [...flippedCards, index];
        setFlippedCards(newFlippedCards);


        if (newFlippedCards.length === 2) {

            const firstCard = cards[newFlippedCards[0]];
            const secondCard = cards[newFlippedCards[1]];

            if (firstCard.id === secondCard.id) {

                //Create a new array with all the cards
                const updatedCards = cards.map((card, idx) => {

                    //Set the correct cards to matched in the new array
                    if (idx === newFlippedCards[0] || idx === newFlippedCards[1]) {
                        return { ...card, matched: true };
                    }
                    return card;
                });
                //Update the cards array
                setCards(updatedCards);
            }

            setTimeout(() => setFlippedCards([]), 1000);
        }
    };

    return (
        <div className="background">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    id={card.id}
                    matched={card.matched}
                    index={index}
                    isFlipped={flippedCards.includes(index) || card.matched}
                    onClick={() => handleCardClick(index)}
                />
            ))}
        </div>
    );
}

export default Board;
