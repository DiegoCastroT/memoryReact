import React from "react";
import Card from "./Card";


/**
 * Board has 9 cards.
 * @returns {Element}
 * @constructor
 */
function Board() {

    return (

        //background.
        <div className="background">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Board;