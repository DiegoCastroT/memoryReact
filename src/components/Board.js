import React, { useState } from "react";
import Card from "./Card";
import Header from "./Header"; // Importamos el componente Header
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

  // Manejar clics en las cartas
  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || cards[index].matched) {
      return;
    }

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const firstCard = cards[newFlippedCards[0]];
      const secondCard = cards[newFlippedCards[1]];

      if (firstCard.id === secondCard.id) {
        const updatedCards = cards.map((card, idx) => {
          if (idx === newFlippedCards[0] || idx === newFlippedCards[1]) {
            return { ...card, matched: true };
          }
          return card;
        });
        setCards(updatedCards);
      }

      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  // Función para reiniciar las cartas
  const reiniciarJuego = () => {
    setCards(createCardPairs()); // Restablecer las cartas a su estado inicial
    setFlippedCards([]); // Asegurarse de que las cartas no estén volteadas
  };

  return (
    <div>
      <Header reiniciarJuego={reiniciarJuego} /> {/* Pasar la función a Header */}
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
    </div>
  );
}

export default Board;