import React from "react";

const CharacterCard = ({ char }) => {
  return (
    <div className="card">
      <div className="card-inner">
            <div className="card-front">
                 <img src={char.img} alt={char.name} />
            </div>
            <div className="card-back">
                <h2>{char.name}</h2>
                <ul>
                    <li><strong>Actor Name: </strong>{char.portrayed}</li>
                    <li><strong>Nickname: </strong>{char.nickname}</li>
                    <li><strong>Birthday: </strong>{char.birthday}</li>
                    <li><strong>Status: </strong>{char.status}</li>
                </ul>
            </div>
      </div>
    </div>
  );
};

export default CharacterCard;
