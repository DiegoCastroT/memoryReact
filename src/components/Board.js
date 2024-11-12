import React from "react";
import Card from "./Card";


/**
 * The Board has nine cards.
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