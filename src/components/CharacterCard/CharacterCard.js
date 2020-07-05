import React from 'react';
import './CharacterCard.css';

const CharacterCard = ({character}) => {
        return(
            <li className="CharacterCard col-12 col-sm-6 col-md-4 col-lg-3 m-3">
                <img src={character.image} className="CharacterCard__image img-fluid" alt="Rick and Morty Character"></img>
                <div className="CharacterCard__text-name font-weight-300">
                  {character.name}
                </div>
            </li>
        )
}

export default CharacterCard;