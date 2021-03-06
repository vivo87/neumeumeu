import React from "react";
import { pure } from "recompose";

import CardPile from "./CardPile";
import classNames from "classnames/dedupe";

const CardsInPlay = ({ piles, canSelectPiles, onPileSelected }) => {
  const classes = classNames("cards-in-play", {
    "cards-in-play--selectable": canSelectPiles,
  });
  return (
    <div className={classes}>
      <ul className="cards-in-play__piles">
        {piles.map((pile, index) => (
          <li className="cards-in-play__pile" key={index}>
            {
              <CardPile
                className="card-pile--in-play"
                cards={pile}
                onClick={() => onPileSelected(index)}
              />
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default pure(CardsInPlay);
